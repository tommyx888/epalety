import crypto from 'crypto'

export async function initiateCardPayPayment(order: {
  order_number: string
  total: number
}) {
  const mid = process.env.CARDPAY_MID!
  const secret = process.env.CARDPAY_SECRET!
  const amount = order.total.toFixed(2)
  const curr = '978' // EUR
  const vs = order.order_number
  const timestamp = new Date().toISOString()
  const rurl = `${process.env.NEXT_PUBLIC_SITE_URL}/payment/success`
  
  // Generate HMAC
  const message = `${mid}${amount}${curr}${vs}${rurl}${timestamp}`
  const hmac = crypto
    .createHmac('sha256', secret)
    .update(message)
    .digest('hex')
  
  const params = new URLSearchParams({
    MID: mid,
    AMT: amount,
    CURR: curr,
    VS: vs,
    RURL: rurl,
    TIMESTAMP: timestamp,
    HMAC: hmac,
  })
  
  return `https://moja.tatrabanka.sk/cgi-bin/e-commerce.cgi?${params.toString()}`
}

