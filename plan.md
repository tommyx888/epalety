# POKROČILÉ MOŽNOSTI VYLEPŠENIA A AUTOMATIZÁCIE
## EPALETY.SK - Rozšírené funkcionality

---

## 🤖 AI & MACHINE LEARNING MOŽNOSTI

### 1. AI Chatbot pre zákaznícku podporu

**Implementácia:** OpenAI GPT-4 + Vercel AI SDK

```typescript
// lib/ai/chatbot.ts
import { OpenAI } from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const SYSTEM_PROMPT = `
Si AI asistent pre EPALETY.SK, firmu zaoberajúcu sa predajom paliet.

PRODUKTY:
- EUR palety (nové, použité, opravené)
- KTP boxy
- Gitterbox
- Špeciálne palety na mieru

CENY:
- EUR paleta nová: 8-12 EUR
- EUR paleta použitá: 3-6 EUR
- KTP box: 15-25 EUR

Vždy odpovedaj v slovenčine, buď priateľský a profesionálny.
Ak sa pýtajú na ceny, ponúkni im "Získať cenovú ponuku" button.
`

export async function getChatbotResponse(messages: Message[]) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4-turbo-preview',
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages
    ],
    temperature: 0.7,
    max_tokens: 500,
  })
  
  return response.choices[0].message.content
}
```

**Features:**
- 24/7 podpora
- Automatické odpovede na FAQ
- Produktové odporúčania
- Lead qualification
- Eskalácia na live agent pri komplexných otázkach

**UI Komponenta:**
```typescript
'use client'

import { useChat } from 'ai/react'

export function AIChatbot() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat'
  })
  
  return (
    <div className="fixed bottom-4 right-4 w-96 h-[600px] bg-white shadow-2xl rounded-lg">
      <div className="flex flex-col h-full">
        <div className="bg-primary-600 text-white p-4 rounded-t-lg">
          <h3>Asistent EPALETY.SK</h3>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map(m => (
            <div key={m.id} className={m.role === 'user' ? 'text-right' : 'text-left'}>
              <div className={`inline-block p-3 rounded-lg ${
                m.role === 'user' ? 'bg-primary-100' : 'bg-gray-100'
              }`}>
                {m.content}
              </div>
            </div>
          ))}
        </div>
        
        <form onSubmit={handleSubmit} className="p-4 border-t">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Napíšte správu..."
            className="w-full p-2 border rounded"
          />
        </form>
      </div>
    </div>
  )
}
```

---

### 2. Predikcia dopytu (Demand Forecasting)

**Use case:** Predpovedať, koľko paliet bude potrebných nasledujúci mesiac

```python
# scripts/ml/demand_forecast.py
import pandas as pd
from prophet import Prophet
import psycopg2

# Load historical data
conn = psycopg2.connect(DATABASE_URL)
df = pd.read_sql("""
  SELECT 
    DATE(created_at) as ds,
    SUM(quantity) as y
  FROM order_items
  JOIN orders ON orders.id = order_items.order_id
  WHERE orders.status = 'delivered'
  GROUP BY DATE(created_at)
  ORDER BY ds
""", conn)

# Train model
model = Prophet(yearly_seasonality=True, weekly_seasonality=True)
model.fit(df)

# Make predictions for next 30 days
future = model.make_future_dataframe(periods=30)
forecast = model.predict(future)

# Save predictions
forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].to_sql(
  'demand_forecast', 
  conn, 
  if_exists='replace'
)
```

**Benefits:**
- Optimalizácia zásob
- Zníženie nákladov na skladovanie
- Predchádzanie stockoutom
- Lepšie plánovanie nákupu

---

### 3. Automatické produktové odporúčania

**Collaborative Filtering:**
```typescript
// lib/ml/recommendations.ts
export async function getProductRecommendations(userId: string) {
  // Get user's order history
  const userOrders = await getUserOrderHistory(userId)
  
  // Find similar customers
  const similarCustomers = await findSimilarCustomers(userOrders)
  
  // Get products they bought
  const recommendedProducts = await getPopularProductsFromCustomers(
    similarCustomers
  )
  
  // Filter out already purchased
  return recommendedProducts.filter(
    p => !userOrders.some(o => o.product_id === p.id)
  )
}
```

**Zobrazenie na stránke:**
```typescript
<section>
  <h2>Odporúčame pre Vás</h2>
  <div className="grid grid-cols-4 gap-4">
    {recommendations.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</section>
```

---

### 4. Dynamické ceny (Dynamic Pricing)

**Faktory:**
- Sezónnosť
- Dopyt
- Konkurencia
- Skladová zásoba
- Veľkosť objednávky

```typescript
// lib/pricing/dynamic-pricing.ts
export function calculateDynamicPrice(
  basePrice: number,
  quantity: number,
  stockLevel: number,
  seasonalityFactor: number
) {
  let price = basePrice
  
  // Volume discount
  if (quantity >= 100) price *= 0.90 // -10%
  if (quantity >= 500) price *= 0.85 // -15%
  if (quantity >= 1000) price *= 0.80 // -20%
  
  // Stock level adjustment
  if (stockLevel < 50) price *= 1.10 // +10% if low stock
  if (stockLevel > 1000) price *= 0.95 // -5% if overstocked
  
  // Seasonality
  price *= seasonalityFactor // e.g., 1.15 in high season
  
  return Math.round(price * 100) / 100
}
```

---

## 📊 ADVANCED ANALYTICS & REPORTING

### 1. Business Intelligence Dashboard

**Metrika dashboard:**
```typescript
// app/admin/analytics/page.tsx
export default async function AnalyticsDashboard() {
  const [
    revenue,
    orders,
    topProducts,
    customerSegments,
    cohortAnalysis
  ] = await Promise.all([
    getRevenueMetrics(),
    getOrderMetrics(),
    getTopProducts(),
    getCustomerSegments(),
    getCohortAnalysis()
  ])
  
  return (
    <div className="grid grid-cols-3 gap-6">
      {/* Revenue Chart */}
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Revenue Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <LineChart data={revenue} />
        </CardContent>
      </Card>
      
      {/* Top Products */}
      <Card>
        <CardHeader>
          <CardTitle>Top Produkty</CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart data={topProducts} />
        </CardContent>
      </Card>
      
      {/* Customer Segments */}
      <Card>
        <CardHeader>
          <CardTitle>Segmenty zákazníkov</CardTitle>
        </CardHeader>
        <CardContent>
          <PieChart data={customerSegments} />
        </CardContent>
      </Card>
      
      {/* Cohort Analysis */}
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Cohort Retention</CardTitle>
        </CardHeader>
        <CardContent>
          <HeatmapChart data={cohortAnalysis} />
        </CardContent>
      </Card>
    </div>
  )
}
```

### 2. Customer Lifetime Value (CLV)

```sql
-- Calculate CLV
CREATE OR REPLACE FUNCTION calculate_clv(customer_id UUID)
RETURNS DECIMAL AS $$
DECLARE
  total_revenue DECIMAL;
  order_count INTEGER;
  avg_order_value DECIMAL;
  purchase_frequency DECIMAL;
  customer_lifespan INTEGER;
BEGIN
  SELECT 
    SUM(total),
    COUNT(*),
    AVG(total)
  INTO total_revenue, order_count, avg_order_value
  FROM orders
  WHERE user_id = customer_id;
  
  -- Calculate purchase frequency (orders per year)
  SELECT 
    EXTRACT(EPOCH FROM (MAX(created_at) - MIN(created_at))) / 86400 / 365
  INTO customer_lifespan
  FROM orders
  WHERE user_id = customer_id;
  
  purchase_frequency := order_count / NULLIF(customer_lifespan, 0);
  
  -- CLV = Avg Order Value * Purchase Frequency * Customer Lifespan (3 years assumed)
  RETURN avg_order_value * purchase_frequency * 3;
END;
$$ LANGUAGE plpgsql;
```

### 3. RFM Segmentácia (Recency, Frequency, Monetary)

```typescript
// lib/analytics/rfm-segmentation.ts
export async function segmentCustomers() {
  const customers = await supabase.rpc('get_rfm_data')
  
  // Score each dimension (1-5)
  const scored = customers.map(c => ({
    ...c,
    r_score: scoreRecency(c.last_order_days),
    f_score: scoreFrequency(c.order_count),
    m_score: scoreMonetary(c.total_spent)
  }))
  
  // Assign segments
  return scored.map(c => ({
    ...c,
    segment: assignSegment(c.r_score, c.f_score, c.m_score)
  }))
}

function assignSegment(r: number, f: number, m: number) {
  const score = r + f + m
  
  if (r >= 4 && f >= 4 && m >= 4) return 'Champions'
  if (r >= 3 && f >= 3 && m >= 3) return 'Loyal Customers'
  if (r >= 4 && f <= 2) return 'New Customers'
  if (r <= 2 && f >= 4) return 'At Risk'
  if (r <= 2 && f <= 2) return 'Lost'
  
  return 'Other'
}
```

**Použitie:**
- Champions: VIP zaobchádzanie, early access
- Loyal: Loyalty program rewards
- At Risk: Win-back campaigns
- Lost: Reactivation emails

---

## 🔄 WORKFLOW AUTOMATION

### 1. Zapier-like Automation Engine

**Vlastný automation builder:**
```typescript
// lib/automation/workflow-engine.ts
interface Trigger {
  type: 'order_created' | 'quote_submitted' | 'product_low_stock'
  conditions?: Record<string, any>
}

interface Action {
  type: 'send_email' | 'create_task' | 'update_status' | 'webhook'
  params: Record<string, any>
}

interface Workflow {
  id: string
  name: string
  trigger: Trigger
  actions: Action[]
  enabled: boolean
}

export class WorkflowEngine {
  async execute(trigger: Trigger, data: any) {
    const workflows = await this.getActiveWorkflows(trigger.type)
    
    for (const workflow of workflows) {
      if (this.matchesConditions(workflow.trigger, data)) {
        await this.executeActions(workflow.actions, data)
      }
    }
  }
  
  private async executeActions(actions: Action[], data: any) {
    for (const action of actions) {
      switch (action.type) {
        case 'send_email':
          await sendEmail(action.params, data)
          break
        case 'create_task':
          await createTask(action.params, data)
          break
        case 'webhook':
          await callWebhook(action.params, data)
          break
      }
    }
  }
}
```

**Príklad workflow konfigurácie:**
```typescript
const workflows: Workflow[] = [
  {
    id: '1',
    name: 'VIP Customer Alert',
    trigger: {
      type: 'order_created',
      conditions: { total: { gte: 5000 } }
    },
    actions: [
      {
        type: 'send_email',
        params: {
          to: 'sales@epalety.sk',
          template: 'vip-order-alert'
        }
      },
      {
        type: 'create_task',
        params: {
          title: 'Osobný follow-up s VIP zákazníkom',
          assignee: 'sales_manager'
        }
      }
    ],
    enabled: true
  },
  {
    id: '2',
    name: 'Low Stock Alert',
    trigger: {
      type: 'product_low_stock',
      conditions: { quantity: { lte: 50 } }
    },
    actions: [
      {
        type: 'send_email',
        params: {
          to: 'warehouse@epalety.sk',
          template: 'low-stock-alert'
        }
      },
      {
        type: 'webhook',
        params: {
          url: 'https://supplier-api.com/order',
          method: 'POST'
        }
      }
    ],
    enabled: true
  }
]
```

### 2. Automatický Follow-up systém

**Abandoned Quote Recovery:**
```typescript
// app/api/cron/abandoned-quotes/route.ts
export async function GET() {
  // Find quotes older than 24h with no response
  const abandonedQuotes = await supabase
    .from('quotes')
    .select('*')
    .eq('status', 'pending')
    .lt('created_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString())
  
  for (const quote of abandonedQuotes.data) {
    await sendAbandonedQuoteEmail(quote)
    
    // Mark as followed up
    await supabase
      .from('quotes')
      .update({ last_follow_up: new Date() })
      .eq('id', quote.id)
  }
  
  return Response.json({ processed: abandonedQuotes.data.length })
}
```

**Email template:**
```html
Dobrý deň {{customer_name}},

Všimli sme si, že ste nás kontaktovali ohľadom cenovej ponuky, 
ale ešte sme Vám nestihli odpovedať.

Veríme, že stále máte záujem o naše služby.

Radi Vám pripravíme individuálnu ponuku presne na mieru.

Môžete nás kontaktovať:
📞 +421 XXX XXX XXX
📧 info@epalety.sk

S pozdravom,
Tím EPALETY.SK
```

---

## 🛒 E-COMMERCE ROZŠÍRENIA

### 1. Plnohodnotný E-shop s košíkom

**Cart Context:**
```typescript
// contexts/CartContext.tsx
'use client'

import { createContext, useContext, useState } from 'react'

interface CartItem {
  product: Product
  quantity: number
}

interface CartContext {
  items: CartItem[]
  addItem: (product: Product, quantity: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  total: number
}

const CartContext = createContext<CartContext | null>(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState<CartItem[]>([])
  
  const addItem = (product: Product, quantity: number) => {
    setItems(prev => {
      const existing = prev.find(item => item.product.id === product.id)
      
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      
      return [...prev, { product, quantity }]
    })
  }
  
  const removeItem = (productId: string) => {
    setItems(prev => prev.filter(item => item.product.id !== productId))
  }
  
  const updateQuantity = (productId: string, quantity: number) => {
    setItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    )
  }
  
  const clearCart = () => setItems([])
  
  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )
  
  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      total
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
```

**Checkout Flow:**
```
1. Cart Review
2. Customer Info
3. Delivery Method
4. Payment Method
5. Order Confirmation
```

### 2. Payment Gateway Integrácie

**Stripe Integration:**
```typescript
// lib/payments/stripe.ts
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function createPaymentIntent(amount: number, orderId: string) {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(amount * 100), // cents
    currency: 'eur',
    metadata: { orderId },
    automatic_payment_methods: { enabled: true }
  })
  
  return paymentIntent.client_secret
}

// Webhook handler
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
      break
  }
}
```

**CardPay (SK specific):**
```typescript
// lib/payments/cardpay.ts
export async function initiateCardPayPayment(order: Order) {
  const response = await fetch('https://moja.tatrabanka.sk/cgi-bin/e-commerce.cgi', {
    method: 'POST',
    body: new URLSearchParams({
      MID: process.env.CARDPAY_MID!,
      AMT: order.total.toFixed(2),
      CURR: '978', // EUR
      VS: order.order_number,
      RURL: `${process.env.SITE_URL}/payment/success`,
      TIMESTAMP: new Date().toISOString(),
      HMAC: generateHMAC(order)
    })
  })
  
  return response.url
}
```

### 3. Subscription Model (Recurring Orders)

```typescript
// lib/subscriptions/manage.ts
export async function createSubscription({
  customerId,
  productId,
  quantity,
  frequency // 'weekly' | 'monthly'
}: SubscriptionInput) {
  const subscription = await supabase
    .from('subscriptions')
    .insert({
      customer_id: customerId,
      product_id: productId,
      quantity,
      frequency,
      next_delivery: calculateNextDelivery(frequency),
      status: 'active'
    })
    .select()
    .single()
  
  return subscription
}

// Cron job to process subscriptions
export async function processSubscriptions() {
  const due = await supabase
    .from('subscriptions')
    .select('*')
    .eq('status', 'active')
    .lte('next_delivery', new Date().toISOString())
  
  for (const sub of due.data) {
    // Create order
    await createOrderFromSubscription(sub)
    
    // Update next delivery date
    await supabase
      .from('subscriptions')
      .update({
        next_delivery: calculateNextDelivery(sub.frequency)
      })
      .eq('id', sub.id)
  }
}
```

---

## 📱 MOBILE APP (React Native)

### Prečo mobilná appka?

**Benefits:**
- Push notifikácie
- Offline funkcionalita
- Rýchlejšie objednávanie
- Lepší UX pre returning customers
- QR code scanning

### Technický stack

```
React Native + Expo
- Supabase (Backend)
- React Navigation
- Zustand (State management)
- React Query (Data fetching)
```

### Core Features

1. **Rýchle objednávanie**
2. **Barcode scanner** (pre produkty)
3. **Push notifikácie** (status updates)
4. **Offline mode**
5. **Wallet** (uložené payment methods)

### Implementácia - Quick Order Screen

```typescript
// screens/QuickOrderScreen.tsx
import { BarCodeScanner } from 'expo-barcode-scanner'

export function QuickOrderScreen() {
  const [hasPermission, setHasPermission] = useState(false)
  const { mutate: createOrder } = useCreateOrder()
  
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])
  
  const handleBarCodeScanned = async ({ data }) => {
    // data = "EUR-PALETA-001"
    const product = await fetchProductByCode(data)
    
    // Show quick order modal
    Alert.alert(
      'Objednať?',
      `${product.name} - ${product.price}€`,
      [
        { text: 'Zrušiť', style: 'cancel' },
        {
          text: 'Objednať',
          onPress: () => createOrder({ productId: product.id, quantity: 1 })
        }
      ]
    )
  }
  
  if (!hasPermission) {
    return <Text>Potrebujeme prístup ku kamere</Text>
  }
  
  return (
    <View style={{ flex: 1 }}>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
    </View>
  )
}
```

---

## 🌍 MULTI-LANGUAGE SUPPORT

### Next.js i18n

```typescript
// i18n.config.ts
export const i18n = {
  defaultLocale: 'sk',
  locales: ['sk', 'en', 'cs'],
}

// middleware.ts
import { NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

export function middleware(request: Request) {
  const { pathname } = new URL(request.url)
  
  // Check if locale is in pathname
  const pathnameHasLocale = i18n.locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  
  if (pathnameHasLocale) return
  
  // Detect locale
  const headers = { 'accept-language': request.headers.get('accept-language') || '' }
  const languages = new Negotiator({ headers }).languages()
  const locale = match(languages, i18n.locales, i18n.defaultLocale)
  
  // Redirect to locale
  return NextResponse.redirect(
    new URL(`/${locale}${pathname}`, request.url)
  )
}
```

### Translations

```json
// locales/sk/common.json
{
  "nav": {
    "home": "Domov",
    "products": "Produkty",
    "services": "Služby",
    "contact": "Kontakt"
  },
  "hero": {
    "title": "Kvalitné palety pre váš biznis",
    "subtitle": "15+ rokov skúseností | Najlepšie ceny",
    "cta_quote": "Získať cenovú ponuku",
    "cta_services": "Naše služby"
  }
}

// locales/en/common.json
{
  "nav": {
    "home": "Home",
    "products": "Products",
    "services": "Services",
    "contact": "Contact"
  },
  "hero": {
    "title": "Quality Pallets for Your Business",
    "subtitle": "15+ years of experience | Best prices",
    "cta_quote": "Get a Quote",
    "cta_services": "Our Services"
  }
}
```

---

## 🔌 API PRE TRETIE STRANY

### Public REST API

**Use cases:**
- B2B partneri môžu integrovať
- Automatické objednávky z ERP systémov
- Real-time stock checking

**Dokumentácia (OpenAPI):**
```yaml
# api-docs/openapi.yaml
openapi: 3.0.0
info:
  title: EPALETY.SK API
  version: 1.0.0
  description: API pre integráciu s EPALETY.SK

servers:
  - url: https://api.epalety.sk/v1

paths:
  /products:
    get:
      summary: Get all products
      parameters:
        - name: category
          in: query
          schema:
            type: string
        - name: limit
          in: query
          schema:
            type: integer
            default: 20
      responses:
        '200':
          description: List of products
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Product'
  
  /orders:
    post:
      summary: Create order
      security:
        - ApiKeyAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateOrderRequest'
      responses:
        '201':
          description: Order created
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Order'

components:
  securitySchemes:
    ApiKeyAuth:
      type: apiKey
      in: header
      name: X-API-Key
  
  schemas:
    Product:
      type: object
      properties:
        id:
          type: string
        name:
          type: string
        category:
          type: string
        price:
          type: number
        stock_quantity:
          type: integer
```

**API Rate Limiting:**
```typescript
// lib/api/rate-limit.ts
const apiLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(100, '1 h'), // 100 req/hour
})

export async function checkAPIRateLimit(apiKey: string) {
  const { success, remaining } = await apiLimiter.limit(`api:${apiKey}`)
  
  return {
    allowed: success,
    remaining,
    resetAt: new Date(Date.now() + 60 * 60 * 1000)
  }
}
```

---

## 📊 REAL-TIME FEATURES

### 1. Live Inventory Updates

**Supabase Realtime:**
```typescript
// hooks/useRealtimeInventory.ts
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export function useRealtimeInventory(productId: string) {
  const [stock, setStock] = useState<number>(0)
  
  useEffect(() => {
    // Subscribe to changes
    const channel = supabase
      .channel(`product:${productId}`)
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'products',
          filter: `id=eq.${productId}`
        },
        (payload) => {
          setStock(payload.new.stock_quantity)
        }
      )
      .subscribe()
    
    return () => {
      supabase.removeChannel(channel)
    }
  }, [productId])
  
  return stock
}
```

**UI:**
```typescript
export function ProductCard({ product }) {
  const liveStock = useRealtimeInventory(product.id)
  
  return (
    <div>
      <h3>{product.name}</h3>
      <p>
        Skladom: <span className="font-bold">{liveStock} ks</span>
        {liveStock < 50 && (
          <Badge variant="warning">Posledné kusy!</Badge>
        )}
      </p>
    </div>
  )
}
```

### 2. Live Order Tracking

```typescript
// app/orders/[id]/page.tsx
'use client'

export function OrderTrackingPage({ params }) {
  const { data: order } = useQuery({
    queryKey: ['order', params.id],
    queryFn: () => fetchOrder(params.id)
  })
  
  // Real-time updates
  useEffect(() => {
    const channel = supabase
      .channel(`order:${params.id}`)
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'orders',
          filter: `id=eq.${params.id}`
        },
        (payload) => {
          queryClient.setQueryData(['order', params.id], payload.new)
          
          // Show toast notification
          toast.success(`Stav objednávky aktualizovaný: ${payload.new.status}`)
        }
      )
      .subscribe()
    
    return () => supabase.removeChannel(channel)
  }, [params.id])
  
  return (
    <div>
      <h1>Objednávka #{order.order_number}</h1>
      <OrderStatusStepper status={order.status} />
      <OrderItems items={order.items} />
    </div>
  )
}
```

---

## 🎯 GAMIFICATION

### Loyalty Program

```typescript
// lib/loyalty/points.ts
export const LOYALTY_RULES = {
  ORDER_COMPLETE: 100, // 100 bodov za objednávku
  REFERRAL: 500, // 500 bodov za odporúčanie
  REVIEW: 50, // 50 bodov za recenziu
  BIRTHDAY: 200, // 200 bodov v deň narodenín
}

export async function awardPoints(
  userId: string,
  reason: keyof typeof LOYALTY_RULES,
  metadata?: any
) {
  const points = LOYALTY_RULES[reason]
  
  await supabase.from('loyalty_transactions').insert({
    user_id: userId,
    points,
    reason,
    metadata
  })
  
  // Update user total
  await supabase.rpc('increment_loyalty_points', {
    user_id: userId,
    amount: points
  })
  
  // Check for tier upgrade
  await checkTierUpgrade(userId)
}

// Tiers
const TIERS = [
  { name: 'Bronze', min_points: 0, discount: 0 },
  { name: 'Silver', min_points: 1000, discount: 5 },
  { name: 'Gold', min_points: 5000, discount: 10 },
  { name: 'Platinum', min_points: 10000, discount: 15 },
]
```

---

## 🔐 ADVANCED SECURITY

### 1. Two-Factor Authentication

```typescript
// lib/auth/2fa.ts
import speakeasy from 'speakeasy'
import QRCode from 'qrcode'

export async function generate2FASecret(email: string) {
  const secret = speakeasy.generateSecret({
    name: `EPALETY.SK (${email})`
  })
  
  const qrCode = await QRCode.toDataURL(secret.otpauth_url!)
  
  return {
    secret: secret.base32,
    qrCode
  }
}

export function verify2FAToken(secret: string, token: string) {
  return speakeasy.totp.verify({
    secret,
    encoding: 'base32',
    token,
    window: 2
  })
}
```

### 2. Audit Logging

```typescript
// lib/audit/log.ts
export async function auditLog({
  userId,
  action,
  resource,
  resourceId,
  metadata
}: AuditLogEntry) {
  await supabase.from('audit_logs').insert({
    user_id: userId,
    action, // 'create' | 'update' | 'delete' | 'view'
    resource, // 'order' | 'product' | 'user'
    resource_id: resourceId,
    metadata,
    ip_address: getClientIP(),
    user_agent: getUserAgent()
  })
}

// Usage
await auditLog({
  userId: session.user.id,
  action: 'update',
  resource: 'order',
  resourceId: orderId,
  metadata: { status: 'confirmed' }
})
```

---

## 📈 GROWTH HACKING FEATURES

### 1. Referral Program

```typescript
// lib/referral/system.ts
export async function generateReferralCode(userId: string) {
  const code = generateUniqueCode()
  
  await supabase.from('referral_codes').insert({
    user_id: userId,
    code,
    uses: 0,
    max_uses: 10
  })
  
  return code
}

export async function trackReferral(code: string, newUserId: string) {
  // Validate code
  const referral = await supabase
    .from('referral_codes')
    .select('*')
    .eq('code', code)
    .single()
  
  if (!referral.data || referral.data.uses >= referral.data.max_uses) {
    throw new Error('Invalid referral code')
  }
  
  // Award points to referrer
  await awardPoints(referral.data.user_id, 'REFERRAL')
  
  // Award points to new user
  await awardPoints(newUserId, 'REFERRAL', { as_referee: true })
  
  // Increment uses
  await supabase
    .from('referral_codes')
    .update({ uses: referral.data.uses + 1 })
    .eq('code', code)
}
```

### 2. Abandoned Cart Recovery (E-shop)

```typescript
// app/api/cron/abandoned-carts/route.ts
export async function GET() {
  const abandonedCarts = await supabase
    .from('carts')
    .select('*, users(*)')
    .eq('status', 'active')
    .lt('updated_at', new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString())
  
  for (const cart of abandonedCarts.data) {
    await sendAbandonedCartEmail({
      email: cart.users.email,
      items: cart.items,
      recoveryUrl: `https://epalety.sk/cart?recover=${cart.id}`
    })
  }
  
  return Response.json({ processed: abandonedCarts.data.length })
}
```

---

## 📞 VOICE ORDERING (Voliteľné - Budúcnosť)

**Amazon Alexa / Google Assistant integrácia**

```typescript
// api/alexa/intent-handler.ts
export async function handleAlexaIntent(intent: string, slots: any) {
  switch (intent) {
    case 'OrderPallets':
      const quantity = slots.Quantity.value
      const type = slots.PalletType.value
      
      // Create order
      const order = await createQuickOrder({
        product_type: type,
        quantity,
        customer_id: slots.CustomerId.value
      })
      
      return {
        speech: `Objednávka na ${quantity} ${type} paliet bola vytvorená. Číslo objednávky je ${order.order_number}.`,
        card: {
          type: 'Simple',
          title: 'Objednávka vytvorená',
          content: `#${order.order_number}`
        }
      }
      
    case 'CheckStock':
      const product = await getProduct(slots.ProductName.value)
      return {
        speech: `Aktuálne máme na sklade ${product.stock_quantity} kusov ${product.name}.`
      }
  }
}
```

---

## 🚀 DEVOPS & INFRASTRUCTURE

### 1. CI/CD Pipeline

**GitHub Actions Workflow:**
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run test
      
  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: npm run build
      - uses: vercel/action@v1
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

**Environment Management:**
- Development (dev.epalety.sk)
- Staging (staging.epalety.sk)
- Production (epalety.sk)

### 2. Docker & Containerization

```dockerfile
# Dockerfile
FROM node:20-alpine AS base
WORKDIR /app

FROM base AS deps
COPY package*.json ./
RUN npm ci

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
```

### 3. Database Migrations & Backups

```typescript
// scripts/migrate.ts
import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

async function runMigration(filename: string) {
  const sql = readFileSync(`migrations/${filename}`, 'utf-8')
  const { error } = await supabase.rpc('exec_sql', { sql })
  
  if (error) throw error
  console.log(`✅ Migration ${filename} completed`)
}

// Automated daily backups
// scripts/backup.ts
export async function createBackup() {
  const timestamp = new Date().toISOString()
  const backup = await supabase.rpc('pg_dump')
  
  await supabase.storage
    .from('backups')
    .upload(`backup-${timestamp}.sql`, backup)
}
```

---

## 🧪 TESTING & QUALITY ASSURANCE

### 1. Unit & Integration Tests

```typescript
// __tests__/lib/pricing/dynamic-pricing.test.ts
import { calculateDynamicPrice } from '@/lib/pricing/dynamic-pricing'

describe('Dynamic Pricing', () => {
  it('should apply volume discount for large orders', () => {
    const price = calculateDynamicPrice(10, 100, 500, 1.0)
    expect(price).toBe(9.0) // 10% discount
  })
  
  it('should increase price for low stock', () => {
    const price = calculateDynamicPrice(10, 10, 30, 1.0)
    expect(price).toBe(11.0) // +10% for low stock
  })
})
```

**Test Coverage:**
- Unit tests: Jest + React Testing Library
- E2E tests: Playwright
- API tests: Supertest
- Target: 80%+ coverage

### 2. E2E Testing

```typescript
// e2e/checkout.spec.ts
import { test, expect } from '@playwright/test'

test('complete checkout flow', async ({ page }) => {
  await page.goto('/products')
  await page.click('[data-testid="add-to-cart"]')
  await page.goto('/cart')
  await page.click('[data-testid="checkout"]')
  
  // Fill form
  await page.fill('[name="email"]', 'test@example.com')
  await page.fill('[name="address"]', 'Test Address 123')
  
  await page.click('[data-testid="place-order"]')
  
  await expect(page.locator('[data-testid="order-confirmation"]')).toBeVisible()
})
```

### 3. Performance Testing

```typescript
// scripts/performance-test.ts
import { performance } from 'perf_hooks'

async function testPageLoad(url: string) {
  const start = performance.now()
  await fetch(url)
  const duration = performance.now() - start
  
  console.log(`${url}: ${duration}ms`)
  
  if (duration > 2000) {
    throw new Error(`Page load too slow: ${duration}ms`)
  }
}
```

**Lighthouse CI:**
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 95

---

## ⚡ PERFORMANCE OPTIMIZATION

### 1. Caching Strategy

```typescript
// lib/cache/redis.ts
import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL!,
  token: process.env.UPSTASH_REDIS_TOKEN!,
})

export async function getCached<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttl: number = 3600
): Promise<T> {
  const cached = await redis.get<T>(key)
  if (cached) return cached
  
  const data = await fetcher()
  await redis.setex(key, ttl, data)
  return data
}

// Usage
const products = await getCached(
  'products:all',
  () => fetchProducts(),
  1800 // 30 minutes
)
```

### 2. Image Optimization

```typescript
// next.config.js
module.exports = {
  images: {
    domains: ['epalety.sk'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}
```

### 3. Database Query Optimization

```sql
-- Indexes for common queries
CREATE INDEX idx_orders_user_status ON orders(user_id, status);
CREATE INDEX idx_orders_created_at ON orders(created_at DESC);
CREATE INDEX idx_products_category_stock ON products(category, stock_quantity);

-- Materialized views for analytics
CREATE MATERIALIZED VIEW daily_sales_summary AS
SELECT 
  DATE(created_at) as date,
  COUNT(*) as order_count,
  SUM(total) as revenue,
  AVG(total) as avg_order_value
FROM orders
WHERE status = 'delivered'
GROUP BY DATE(created_at);

-- Refresh every hour
CREATE OR REPLACE FUNCTION refresh_daily_sales()
RETURNS void AS $$
BEGIN
  REFRESH MATERIALIZED VIEW CONCURRENTLY daily_sales_summary;
END;
$$ LANGUAGE plpgsql;
```

### 4. Code Splitting & Lazy Loading

```typescript
// Lazy load heavy components
const AdminDashboard = dynamic(() => import('@/components/AdminDashboard'), {
  loading: () => <Skeleton />,
  ssr: false
})

// Route-based code splitting
const AnalyticsPage = dynamic(() => import('@/app/admin/analytics/page'))
```

---

## 🔍 SEO & MARKETING AUTOMATION

### 1. SEO Optimization

```typescript
// app/products/[slug]/page.tsx
export async function generateMetadata({ params }) {
  const product = await getProduct(params.slug)
  
  return {
    title: `${product.name} - EPALETY.SK`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
      type: 'product',
    },
    alternates: {
      canonical: `https://epalety.sk/products/${params.slug}`,
    },
  }
}

// sitemap.ts
export default function sitemap() {
  const products = getAllProducts()
  
  return [
    {
      url: 'https://epalety.sk',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...products.map(product => ({
      url: `https://epalety.sk/products/${product.slug}`,
      lastModified: product.updatedAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    })),
  ]
}
```

### 2. Marketing Automation

```typescript
// lib/marketing/email-campaigns.ts
export async function sendNewsletter(campaignId: string) {
  const subscribers = await getActiveSubscribers()
  const template = await getEmailTemplate(campaignId)
  
  for (const subscriber of subscribers) {
    await sendEmail({
      to: subscriber.email,
      subject: template.subject,
      html: renderTemplate(template, {
        name: subscriber.name,
        unsubscribeUrl: generateUnsubscribeLink(subscriber.id),
      }),
    })
    
    // Rate limiting
    await sleep(100)
  }
}

// Automated campaigns
const campaigns = [
  {
    trigger: 'user_registered',
    delay: '1 day',
    template: 'welcome-series-1'
  },
  {
    trigger: 'order_completed',
    delay: '3 days',
    template: 'review-request'
  },
  {
    trigger: 'cart_abandoned',
    delay: '2 hours',
    template: 'cart-recovery'
  }
]
```

### 3. Google Analytics 4 & Conversion Tracking

```typescript
// lib/analytics/gtag.ts
export function trackEvent(eventName: string, params: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params)
  }
}

// Usage
trackEvent('purchase', {
  transaction_id: order.id,
  value: order.total,
  currency: 'EUR',
  items: order.items.map(item => ({
    item_id: item.product_id,
    item_name: item.product_name,
    quantity: item.quantity,
    price: item.price,
  })),
})
```

---

## 🔒 COMPLIANCE & GDPR

### 1. GDPR Compliance

```typescript
// lib/gdpr/data-management.ts
export async function exportUserData(userId: string) {
  const [orders, quotes, profile] = await Promise.all([
    getOrdersByUser(userId),
    getQuotesByUser(userId),
    getUserProfile(userId),
  ])
  
  return {
    profile,
    orders,
    quotes,
    exportedAt: new Date().toISOString(),
  }
}

export async function deleteUserData(userId: string) {
  // Anonymize instead of delete (for legal/accounting)
  await supabase
    .from('users')
    .update({
      email: `deleted_${userId}@deleted.local`,
      name: 'Deleted User',
      phone: null,
      deleted_at: new Date(),
    })
    .eq('id', userId)
  
  // Delete personal data from other tables
  await supabase
    .from('quotes')
    .update({ customer_email: null, customer_name: null })
    .eq('user_id', userId)
}

// Cookie consent
export function CookieConsent() {
  const [consent, setConsent] = useState<Consent | null>(null)
  
  useEffect(() => {
    const saved = localStorage.getItem('cookie-consent')
    if (saved) setConsent(JSON.parse(saved))
  }, [])
  
  const handleAccept = (preferences: ConsentPreferences) => {
    const newConsent = {
      ...preferences,
      timestamp: new Date(),
    }
    localStorage.setItem('cookie-consent', JSON.stringify(newConsent))
    setConsent(newConsent)
  }
  
  if (consent) return null
  
  return <CookieBanner onAccept={handleAccept} />
}
```

### 2. Data Retention Policies

```sql
-- Auto-delete old logs after 90 days
CREATE OR REPLACE FUNCTION cleanup_old_logs()
RETURNS void AS $$
BEGIN
  DELETE FROM audit_logs
  WHERE created_at < NOW() - INTERVAL '90 days';
  
  DELETE FROM email_logs
  WHERE sent_at < NOW() - INTERVAL '90 days';
END;
$$ LANGUAGE plpgsql;

-- Schedule with pg_cron
SELECT cron.schedule('cleanup-logs', '0 2 * * *', 'SELECT cleanup_old_logs()');
```

---

## 🔗 INTEGRÁCIE S EXTERNÝMI SLUŽBAMI

### 1. ERP Integrácia (SAP, Oracle, atď.)

```typescript
// lib/integrations/erp.ts
interface ERPIntegration {
  syncProducts(): Promise<void>
  syncOrders(order: Order): Promise<void>
  getStockLevels(): Promise<StockLevel[]>
}

export class SAPIntegration implements ERPIntegration {
  async syncProducts() {
    const products = await this.fetchFromSAP('/products')
    
    for (const product of products) {
      await supabase
        .from('products')
        .upsert({
          external_id: product.sap_id,
          name: product.name,
          price: product.price,
          stock_quantity: product.stock,
        })
    }
  }
  
  async syncOrders(order: Order) {
    await fetch('https://sap-api.company.com/orders', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SAP_API_TOKEN}`,
      },
      body: JSON.stringify({
        order_number: order.order_number,
        items: order.items,
        customer: order.customer,
      }),
    })
  }
}
```

### 2. Accounting Software (Fakturoid, MoneyS3)

```typescript
// lib/integrations/accounting.ts
export async function createInvoice(order: Order) {
  const invoice = {
    customer: {
      name: order.customer_name,
      ico: order.customer_ico,
      dic: order.customer_dic,
    },
    items: order.items.map(item => ({
      name: item.product_name,
      quantity: item.quantity,
      price: item.price,
      vat_rate: 20, // 20% DPH
    })),
    due_date: addDays(new Date(), 14),
  }
  
  // Fakturoid API
  const response = await fetch('https://app.fakturoid.cz/api/invoices.json', {
    method: 'POST',
    headers: {
      'Authorization': `Token ${process.env.FAKTUROID_TOKEN}`,
    },
    body: JSON.stringify(invoice),
  })
  
  const invoiceData = await response.json()
  
  // Save invoice ID to order
  await supabase
    .from('orders')
    .update({ invoice_id: invoiceData.id })
    .eq('id', order.id)
}
```

### 3. Shipping Integrácia (GLS, DHL, DPD)

```typescript
// lib/integrations/shipping.ts
export async function createShipment(order: Order) {
  const shipment = {
    recipient: {
      name: order.shipping_name,
      address: order.shipping_address,
      city: order.shipping_city,
      zip: order.shipping_zip,
    },
    packages: [{
      weight: calculateTotalWeight(order.items),
      dimensions: calculateDimensions(order.items),
    }],
  }
  
  // GLS API
  const response = await fetch('https://api.gls.sk/shipments', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.GLS_API_TOKEN}`,
    },
    body: JSON.stringify(shipment),
  })
  
  const shipmentData = await response.json()
  
  await supabase
    .from('orders')
    .update({
      tracking_number: shipmentData.tracking_number,
      shipping_label_url: shipmentData.label_url,
    })
    .eq('id', order.id)
}
```

---

## 📊 MONITORING & OBSERVABILITY

### 1. Application Monitoring (Sentry)

```typescript
// lib/monitoring/sentry.ts
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 0.1,
  beforeSend(event) {
    // Filter sensitive data
    if (event.request?.cookies) {
      delete event.request.cookies
    }
    return event
  },
})

// Custom error tracking
export function trackError(error: Error, context: Record<string, any>) {
  Sentry.captureException(error, {
    tags: context,
    level: 'error',
  })
}
```

### 2. Performance Monitoring

```typescript
// lib/monitoring/performance.ts
export function trackPageView(url: string) {
  const startTime = performance.now()
  
  return {
    end: () => {
      const duration = performance.now() - startTime
      
      // Send to analytics
      trackEvent('page_view', {
        url,
        duration,
        timestamp: new Date().toISOString(),
      })
    },
  }
}

// Web Vitals
export function reportWebVitals(metric: any) {
  if (metric.label === 'web-vital') {
    trackEvent('web_vital', {
      name: metric.name,
      value: metric.value,
      id: metric.id,
    })
  }
}
```

### 3. Uptime Monitoring

```typescript
// app/api/health/route.ts
export async function GET() {
  const checks = {
    database: await checkDatabase(),
    redis: await checkRedis(),
    external_apis: await checkExternalAPIs(),
  }
  
  const allHealthy = Object.values(checks).every(c => c.status === 'ok')
  
  return Response.json({
    status: allHealthy ? 'healthy' : 'degraded',
    checks,
    timestamp: new Date().toISOString(),
  }, {
    status: allHealthy ? 200 : 503,
  })
}

// Cron job to check health every 5 minutes
```

---

## 🔄 BACKUP & DISASTER RECOVERY

### 1. Automated Backups

```typescript
// scripts/backup.ts
import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)

export async function createDatabaseBackup() {
  const timestamp = new Date().toISOString().replace(/:/g, '-')
  const filename = `backup-${timestamp}.sql`
  
  // pg_dump
  await execAsync(
    `pg_dump ${process.env.DATABASE_URL} > backups/${filename}`
  )
  
  // Upload to S3/Backblaze
  await uploadToStorage(`backups/${filename}`)
  
  // Cleanup old backups (keep last 30 days)
  await cleanupOldBackups(30)
}

// Schedule: Daily at 2 AM
```

### 2. Disaster Recovery Plan

**RTO (Recovery Time Objective):** 4 hours  
**RPO (Recovery Point Objective):** 1 hour

**Steps:**
1. Database restore from latest backup
2. Application redeploy
3. Cache warm-up
4. Health checks
5. Traffic restoration

---

## 🛠️ ADVANCED SEARCH & FILTERING

### 1. Full-Text Search

```sql
-- PostgreSQL full-text search
CREATE INDEX products_search_idx ON products 
USING gin(to_tsvector('slovak', name || ' ' || description));

-- Search function
CREATE OR REPLACE FUNCTION search_products(query_text TEXT)
RETURNS TABLE(id UUID, name TEXT, rank REAL) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    p.id,
    p.name,
    ts_rank(to_tsvector('slovak', p.name || ' ' || p.description), 
            plainto_tsquery('slovak', query_text)) as rank
  FROM products p
  WHERE to_tsvector('slovak', p.name || ' ' || p.description) 
        @@ plainto_tsquery('slovak', query_text)
  ORDER BY rank DESC;
END;
$$ LANGUAGE plpgsql;
```

### 2. Advanced Filters

```typescript
// lib/search/filters.ts
interface ProductFilters {
  category?: string[]
  priceRange?: [number, number]
  stockStatus?: 'in_stock' | 'low_stock' | 'out_of_stock'
  condition?: 'new' | 'used' | 'repaired'
  dimensions?: {
    width?: [number, number]
    length?: [number, number]
    height?: [number, number]
  }
}

export async function searchProducts(
  query: string,
  filters: ProductFilters
) {
  let supabaseQuery = supabase
    .from('products')
    .select('*')
  
  if (query) {
    supabaseQuery = supabaseQuery.textSearch('search_vector', query)
  }
  
  if (filters.category?.length) {
    supabaseQuery = supabaseQuery.in('category', filters.category)
  }
  
  if (filters.priceRange) {
    supabaseQuery = supabaseQuery
      .gte('price', filters.priceRange[0])
      .lte('price', filters.priceRange[1])
  }
  
  return await supabaseQuery
}
```

---

## 📄 EXPORT & REPORTING TOOLS

### 1. PDF Export

```typescript
// lib/export/pdf.ts
import { PDFDocument } from 'pdf-lib'

export async function generateOrderPDF(order: Order) {
  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([595, 842]) // A4
  
  // Add content
  page.drawText(`Objednávka #${order.order_number}`, {
    x: 50,
    y: 800,
    size: 20,
  })
  
  // Add order items table
  let y = 750
  for (const item of order.items) {
    page.drawText(`${item.product_name} x${item.quantity}`, {
      x: 50,
      y,
      size: 12,
    })
    y -= 20
  }
  
  const pdfBytes = await pdfDoc.save()
  return pdfBytes
}
```

### 2. Excel Export

```typescript
// lib/export/excel.ts
import ExcelJS from 'exceljs'

export async function exportOrdersToExcel(orders: Order[]) {
  const workbook = new ExcelJS.Workbook()
  const worksheet = workbook.addWorksheet('Objednávky')
  
  worksheet.columns = [
    { header: 'Číslo', key: 'order_number', width: 15 },
    { header: 'Dátum', key: 'created_at', width: 20 },
    { header: 'Zákazník', key: 'customer_name', width: 30 },
    { header: 'Suma', key: 'total', width: 15 },
    { header: 'Stav', key: 'status', width: 15 },
  ]
  
  orders.forEach(order => {
    worksheet.addRow({
      order_number: order.order_number,
      created_at: order.created_at,
      customer_name: order.customer_name,
      total: order.total,
      status: order.status,
    })
  })
  
  const buffer = await workbook.xlsx.writeBuffer()
  return buffer
}
```

---

## 🎉 ZÁVER - ROADMAP

### V1.0 (Launch) - 8 týždňov
✅ Moderný web  
✅ Admin panel  
✅ Email automatizácia  
✅ Základná automatizácia skladu  
✅ GDPR compliance  
✅ Basic SEO

### V1.5 (3 mesiace) - €5k budget
🔜 E-shop s košíkom  
🔜 Payment gateway  
🔜 AI Chatbot  
🔜 Mobile app (beta)  
🔜 CI/CD pipeline  
🔜 Monitoring & logging

### V2.0 (6 mesiacov) - €10k budget
🔮 ML demand forecasting  
🔮 Dynamic pricing  
🔮 API pre partnerov  
🔮 Loyalty program  
🔮 ERP integrácia  
🔮 Advanced analytics  
🔮 Performance optimization

### V2.5 (9 mesiacov) - €15k budget
🔮 Accounting software integrácia  
🔮 Shipping integrácia  
🔮 Advanced search  
🔮 Export tools  
🔮 Automated testing  
🔮 Backup & disaster recovery

### V3.0 (12 mesiacov) - €20k budget
🚀 Voice ordering  
🚀 AR preview (palety v priestore)  
🚀 Blockchain supply chain tracking  
🚀 IoT sklad monitoring  
🚀 Multi-warehouse support  
🚀 Advanced ML features

---

## 📋 IMPLEMENTAČNÉ KROKY

### Fáza 1: Setup & Foundation (Týždeň 1-2)
1. ✅ Projekt setup (Next.js, TypeScript, Tailwind)
2. ✅ Supabase konfigurácia
3. ✅ CI/CD pipeline
4. ✅ Development environment
5. ✅ Basic monitoring

### Fáza 2: Core Features (Týždeň 3-6)
1. ✅ User authentication
2. ✅ Product management
3. ✅ Order system
4. ✅ Admin panel
5. ✅ Email templates

### Fáza 3: E-commerce (Týždeň 7-10)
1. ✅ Shopping cart
2. ✅ Checkout flow
3. ✅ Payment integration
4. ✅ Order tracking
5. ✅ Customer dashboard

### Fáza 4: Automation (Týždeň 11-14)
1. ✅ Workflow engine
2. ✅ Email automation
3. ✅ Inventory management
4. ✅ Reporting

### Fáza 5: Advanced Features (Týždeň 15-18)
1. ✅ AI Chatbot
2. ✅ Analytics dashboard
3. ✅ API for partners
4. ✅ Mobile app (beta)

---

**Pripravil:** Digital Evolution  
**Kontakt:** dev@digitalevolution.sk  
**Verzia:** 2.0 Extended - Rozšírená verzia s DevOps, Testing, Compliance a Integráciami