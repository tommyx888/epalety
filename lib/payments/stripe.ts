import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia',
})

export async function createPaymentIntent(amount: number, orderId: string) {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(amount * 100), // Convert to cents
    currency: 'eur',
    metadata: { orderId },
    automatic_payment_methods: {
      enabled: true,
    },
  })
  
  return paymentIntent.client_secret
}

export async function handleStripeWebhook(event: Stripe.Event) {
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object as Stripe.PaymentIntent
      await updateOrderPaymentStatus(
        paymentIntent.metadata.orderId,
        'paid'
      )
      break
      
    case 'payment_intent.payment_failed':
      // Handle failed payment
      console.error('Payment failed:', event.data.object)
      break
  }
}

async function updateOrderPaymentStatus(orderId: string, status: string) {
  // Update order in database
  const { supabaseAdmin } = await import('@/lib/supabase/client')
  await supabaseAdmin
    .from('orders')
    .update({ payment_status: status })
    .eq('id', orderId)
}

