import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase/client'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const category = searchParams.get('category')
    const condition = searchParams.get('condition')
    const minPrice = searchParams.get('minPrice')
    const maxPrice = searchParams.get('maxPrice')
    const limit = parseInt(searchParams.get('limit') || '20')
    const offset = parseInt(searchParams.get('offset') || '0')

    let query = supabaseAdmin
      .from('products')
      .select('*', { count: 'exact' })
      .eq('active', true)

    if (category) {
      query = query.eq('category', category)
    }

    if (condition) {
      query = query.eq('condition', condition)
    }

    if (minPrice) {
      query = query.gte('price', parseFloat(minPrice))
    }

    if (maxPrice) {
      query = query.lte('price', parseFloat(maxPrice))
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
    console.error('Products API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products', message: error.message },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, description, price, category, condition, stock_quantity, image_url } = body

    // Validate required fields
    if (!name || !price || !category) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const { data, error } = await supabaseAdmin
      .from('products')
      .insert({
        name,
        description,
        price: parseFloat(price),
        category,
        condition: condition || 'new',
        stock_quantity: stock_quantity || 0,
        image_url,
        active: true,
      })
      .select()
      .single()

    if (error) {
      throw error
    }

    return NextResponse.json({ data }, { status: 201 })
  } catch (error: any) {
    console.error('Create product error:', error)
    return NextResponse.json(
      { error: 'Failed to create product', message: error.message },
      { status: 500 }
    )
  }
}

