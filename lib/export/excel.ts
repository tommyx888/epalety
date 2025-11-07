import ExcelJS from 'exceljs'

export interface Order {
  order_number: string
  created_at: string
  customer_name: string
  total: number
  status: string
}

export async function exportOrdersToExcel(orders: Order[]): Promise<Buffer> {
  const workbook = new ExcelJS.Workbook()
  const worksheet = workbook.addWorksheet('Objednávky')
  
  // Define columns
  worksheet.columns = [
    { header: 'Číslo objednávky', key: 'order_number', width: 20 },
    { header: 'Dátum', key: 'created_at', width: 20 },
    { header: 'Zákazník', key: 'customer_name', width: 30 },
    { header: 'Suma', key: 'total', width: 15 },
    { header: 'Stav', key: 'status', width: 15 },
  ]
  
  // Style header
  worksheet.getRow(1).font = { bold: true }
  worksheet.getRow(1).fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FFE0E0E0' },
  }
  
  // Add data
  orders.forEach(order => {
    worksheet.addRow({
      order_number: order.order_number,
      created_at: new Date(order.created_at).toLocaleDateString('sk-SK'),
      customer_name: order.customer_name,
      total: order.total,
      status: order.status,
    })
  })
  
  // Format total column as currency
  worksheet.getColumn('total').numFmt = '#,##0.00 €'
  
  const buffer = await workbook.xlsx.writeBuffer()
  return buffer as Buffer
}

