import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase/client'
import { workflowEngine } from '@/lib/automation/workflow-engine'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      items,
      customer_name,
      customer_email,
      customer_phone,
      shipping_address,
      shipping_city,
      shipping_zip,
      payment_method,
    } = body

    // Validate required fields
    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'Order must contain at least one item' },
        { status: 400 }
      )
    }

    if (!customer_email || !shipping_address) {
      return NextResponse.json(
        { error: 'Customer email and shipping address are required' },
        { status: 400 }
      )
    }

    // Calculate total
    let total = 0
    for (const item of items) {
      const { data: product } = await supabaseAdmin
        .from('products')
        .select('price')
        .eq('id', item.product_id)
        .single()

      if (!product) {
        return NextResponse.json(
          { error: `Product ${item.product_id} not found` },
          { status: 400 }
        )
      }

      total += product.price * item.quantity

      // Check stock
      const { data: stockCheck } = await supabaseAdmin
        .from('products')
        .select('stock_quantity')
        .eq('id', item.product_id)
        .single()

      if (stockCheck && stockCheck.stock_quantity < item.quantity) {
        return NextResponse.json(
          { error: `Insufficient stock for product ${item.product_id}` },
          { status: 400 }
        )
      }
    }

    // Generate order number
    const orderNumber = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`

    // Create order
    const { data: order, error: orderError } = await supabaseAdmin
      .from('orders')
      .insert({
        order_number: orderNumber,
        customer_name,
        customer_email,
        customer_phone,
        shipping_address,
        shipping_city,
        shipping_zip,
        total,
        payment_method: payment_method || 'pending',
        status: 'pending',
      })
      .select()
      .single()

    if (orderError) {
      throw orderError
    }

    // Create order items
    const orderItems = items.map((item: any) => ({
      order_id: order.id,
      product_id: item.product_id,
      quantity: item.quantity,
      price: item.price,
    }))

    const { error: itemsError } = await supabaseAdmin
      .from('order_items')
      .insert(orderItems)

    if (itemsError) {
      throw itemsError
    }

    // Update stock
    for (const item of items) {
      await supabaseAdmin.rpc('decrement_stock', {
        product_id: item.product_id,
        quantity: item.quantity,
      })
    }

    // Trigger workflow automation
    await workflowEngine.execute(
      {
        type: 'order_created',
        conditions: { total: { gte: total } },
      },
      order
    )

    return NextResponse.json({ data: order }, { status: 201 })
  } catch (error: any) {
    console.error('Create order error:', error)
    return NextResponse.json(
      { error: 'Failed to create order', message: error.message },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const email = searchParams.get('email')
    const orderNumber = searchParams.get('order_number')
    const limit = parseInt(searchParams.get('limit') || '20')
    const offset = parseInt(searchParams.get('offset') || '0')

    let query = supabaseAdmin
      .from('orders')
      .select('*, order_items(*, products(*))', { count: 'exact' })

    if (email) {
      query = query.eq('customer_email', email)
    }

    if (orderNumber) {
      query = query.eq('order_number', orderNumber)
    }

    query = query.order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)

    const { data, error, count } = await query

    if (error) {
      throw error
    }

    return NextResponse.json({
      data: data || [],
      total: count || 0,
      limit,
      offset,
    })
  } catch (error: any) {
    console.error('Orders API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch orders', message: error.message },
      { status: 500 }
    )
  }
}

