import { PDFDocument } from 'pdf-lib'

export interface Order {
  order_number: string
  created_at: string
  customer_name: string
  items: Array<{
    product_name: string
    quantity: number
    price: number
  }>
  total: number
}

export async function generateOrderPDF(order: Order): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([595, 842]) // A4 size
  
  const { width, height } = page.getSize()
  const fontSize = 12
  const margin = 50
  
  // Title
  page.drawText(`Objednávka #${order.order_number}`, {
    x: margin,
    y: height - margin - 30,
    size: 20,
  })
  
  // Order date
  page.drawText(`Dátum: ${new Date(order.created_at).toLocaleDateString('sk-SK')}`, {
    x: margin,
    y: height - margin - 60,
    size: fontSize,
  })
  
  // Customer
  page.drawText(`Zákazník: ${order.customer_name}`, {
    x: margin,
    y: height - margin - 90,
    size: fontSize,
  })
  
  // Items table header
  let y = height - margin - 130
  page.drawText('Produkt', { x: margin, y, size: fontSize, font: await pdfDoc.embedFont('Helvetica-Bold') })
  page.drawText('Množstvo', { x: margin + 200, y, size: fontSize, font: await pdfDoc.embedFont('Helvetica-Bold') })
  page.drawText('Cena', { x: margin + 300, y, size: fontSize, font: await pdfDoc.embedFont('Helvetica-Bold') })
  page.drawText('Suma', { x: margin + 400, y, size: fontSize, font: await pdfDoc.embedFont('Helvetica-Bold') })
  
  y -= 30
  
  // Items
  for (const item of order.items) {
    page.drawText(item.product_name, { x: margin, y, size: fontSize })
    page.drawText(item.quantity.toString(), { x: margin + 200, y, size: fontSize })
    page.drawText(`${item.price.toFixed(2)} €`, { x: margin + 300, y, size: fontSize })
    page.drawText(`${(item.price * item.quantity).toFixed(2)} €`, { x: margin + 400, y, size: fontSize })
    y -= 25
  }
  
  // Total
  y -= 20
  page.drawText(`Celkom: ${order.total.toFixed(2)} €`, {
    x: margin + 300,
    y,
    size: fontSize + 2,
    font: await pdfDoc.embedFont('Helvetica-Bold'),
  })
  
  const pdfBytes = await pdfDoc.save()
  return pdfBytes
}

