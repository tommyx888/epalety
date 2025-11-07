# Environment Variables Setup

## 📝 Vytvorenie .env.local súboru

Vytvorte súbor `.env.local` v koreňovom adresári projektu s nasledujúcimi premennými:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_KEY=your_supabase_service_key_here

# Google Maps API (pre stránku pobočiek)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here

# OpenAI API (pre AI Chatbot)
OPENAI_API_KEY=your_openai_api_key_here

# Stripe (pre platby)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key_here
STRIPE_SECRET_KEY=your_stripe_secret_key_here

# CardPay / Tatra Banka (pre platby)
CARDPAY_MERCHANT_ID=your_cardpay_merchant_id_here
CARDPAY_SECRET_KEY=your_cardpay_secret_key_here

# Redis / Upstash (pre cache)
UPSTASH_REDIS_REST_URL=your_upstash_redis_url_here
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token_here

# Sentry (pre monitoring)
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn_here
SENTRY_AUTH_TOKEN=your_sentry_auth_token_here

# Email Service (Resend/SendGrid)
RESEND_API_KEY=your_resend_api_key_here
# OR
SENDGRID_API_KEY=your_sendgrid_api_key_here

# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

## 🔑 Ako získať API kľúče

### Google Maps API Key

1. Choďte na [Google Cloud Console](https://console.cloud.google.com/)
2. Vytvorte nový projekt alebo vyberte existujúci
3. Povoľte "Maps JavaScript API"
4. Choďte do "Credentials" a vytvorte nový API kľúč
5. Obmedzte kľúč na vašu doménu (pre produkciu)

### Supabase

1. Choďte na [Supabase Dashboard](https://app.supabase.com/)
2. Vytvorte nový projekt alebo vyberte existujúci
3. Choďte do "Settings" > "API"
4. Skopírujte URL a anon key
5. Pre service key choďte do "Settings" > "API" > "Service Role"

### OpenAI

1. Choďte na [OpenAI Platform](https://platform.openai.com/)
2. Vytvorte účet alebo sa prihláste
3. Choďte do "API Keys"
4. Vytvorte nový API kľúč

## ⚠️ Dôležité poznámky

- **NIKDY** necommitnite `.env.local` súbor do Gitu (je v `.gitignore`)
- Pre produkciu nastavte premenné v hostingovom prostredí (Vercel, atď.)
- `NEXT_PUBLIC_*` premenné sú dostupné v browseri
- Ostatné premenné sú len na serveri

## 🚀 Pre stránku pobočiek

Pre zobrazenie Google Maps na stránke `/pobocky` je potrebné nastaviť:
```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

Bez tohto kľúča sa zobrazí varovanie, ale stránka bude stále funkčná.


