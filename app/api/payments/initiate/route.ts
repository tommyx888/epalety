import { NextRequest, NextResponse } from 'next/server'
import { createPaymentIntent } from '@/lib/payments/stripe'
import { initiateCardPayPayment } from '@/lib/payments/cardpay'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { orderId, amount, paymentMethod } = body

    if (!orderId || !amount || !paymentMethod) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    let paymentData

    switch (paymentMethod) {
      case 'stripe':
        const clientSecret = await createPaymentIntent(amount, orderId)
        paymentData = {
          clientSecret,
          paymentMethod: 'stripe',
        }
        break

      case 'cardpay':
        const { supabaseAdmin } = await import('@/lib/supabase/client')
        const { data: order } = await supabaseAdmin
          .from('orders')
          .select('order_number, total')
          .eq('id', orderId)
          .single()

        if (!order) {
          return NextResponse.json(
            { error: 'Order not found' },
            { status: 404 }
          )
        }

        const paymentUrl = await initiateCardPayPayment({
          order_number: order.order_number,
          total: order.total,
        })
        paymentData = {
          paymentUrl,
          paymentMethod: 'cardpay',
        }
        break

      case 'bank_transfer':
        paymentData = {
          paymentMethod: 'bank_transfer',
          instructions: 'Prosím preveďte platbu na účet: SK12 3456 7890 1234 5678 9012',
        }
        break

      default:
        return NextResponse.json(
          { error: 'Invalid payment method' },
          { status: 400 }
        )
    }

    return NextResponse.json({ data: paymentData })
  } catch (error: any) {
    console.error('Payment initiation error:', error)
    return NextResponse.json(
      { error: 'Failed to initiate payment', message: error.message },
      { status: 500 }
    )
  }
}

