import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase/client'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      phone,
      company,
      product,
      quantity,
      message,
    } = body

    // Validate required fields
    if (!name || !email || !phone || !product || !quantity) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create quote
    const { data, error } = await supabaseAdmin
      .from('quotes')
      .insert({
        customer_name: name,
        customer_email: email,
        customer_phone: phone,
        company_name: company,
        product_type: product,
        quantity: parseInt(quantity),
        message,
        status: 'pending',
      })
      .select()
      .single()

    if (error) {
      throw error
    }

    // Trigger workflow automation
    const { workflowEngine } = await import('@/lib/automation/workflow-engine')
    await workflowEngine.execute(
      {
        type: 'quote_submitted',
      },
      data
    )

    return NextResponse.json({ data }, { status: 201 })
  } catch (error: any) {
    console.error('Create quote error:', error)
    return NextResponse.json(
      { error: 'Failed to create quote', message: error.message },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const email = searchParams.get('email')
    const status = searchParams.get('status')
    const limit = parseInt(searchParams.get('limit') || '20')
    const offset = parseInt(searchParams.get('offset') || '0')

    let query = supabaseAdmin
      .from('quotes')
      .select('*', { count: 'exact' })

    if (email) {
      query = query.eq('customer_email', email)
    }

    if (status) {
      query = query.eq('status', status)
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
    console.error('Quotes API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch quotes', message: error.message },
      { status: 500 }
    )
  }
}

