# EPALETY.SK - Quick Start Checklist

## ✅ Setup Checklist

### 1. Environment Setup
- [ ] Clone repository
- [ ] Copy `.env.example` to `.env.local`
- [ ] Fill in all environment variables
- [ ] Verify Node.js version (20+)

### 2. Dependencies
- [ ] Run `npm install`
- [ ] Install Python dependencies: `pip install -r requirements.txt`

### 3. Database
- [ ] Create Supabase project
- [ ] Set up database schema
- [ ] Run migrations: `npm run migrate`
- [ ] Configure RLS policies
- [ ] Test database connection

### 4. External Services
- [ ] Setup OpenAI account (for AI Chatbot)
- [ ] Setup Stripe account (for payments)
- [ ] Setup CardPay account (Tatra Banka)
- [ ] Setup Redis (Upstash)
- [ ] Setup Sentry (monitoring)
- [ ] Setup email service (Resend/SendGrid)

### 5. Development
- [ ] Start dev server: `npm run dev`
- [ ] Verify homepage loads
- [ ] Test API endpoints
- [ ] Run tests: `npm run test`

### 6. Deployment Prep
- [ ] Setup Vercel account
- [ ] Connect GitHub repository
- [ ] Configure environment variables in Vercel
- [ ] Setup CI/CD pipeline
- [ ] Configure domain

## 🎯 First Steps After Setup

1. **Create first product**
   - Go to `/admin`
   - Add test product
   - Verify it appears on `/products`

2. **Test checkout flow**
   - Add product to cart
   - Complete checkout
   - Verify order creation

3. **Test AI Chatbot**
   - Open homepage
   - Click chatbot icon
   - Send test message
   - Verify response

4. **Setup monitoring**
   - Configure Sentry
   - Setup health check monitoring
   - Configure alerts

## 📚 Documentation

- Main docs: `README.md`
- Development: `DEVELOPMENT.md`
- Deployment: `DEPLOYMENT.md`
- API: `API.md`
- Structure: `STRUCTURE.md`
- Plan: `plan.md`

