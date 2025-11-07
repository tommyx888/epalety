# EPALETY.SK - E-commerce Platform

Moderný e-commerce systém pre predaj paliet s pokročilými funkciami automatizácie, AI a analytics.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Database:** Supabase (PostgreSQL)
- **Styling:** Tailwind CSS
- **State Management:** Zustand + React Query
- **AI:** OpenAI GPT-4
- **Payments:** Stripe, CardPay
- **Testing:** Jest, Playwright
- **Monitoring:** Sentry

## 📁 Projektová Štruktúra

```
epalety/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Auth routes
│   ├── (dashboard)/        # Dashboard routes
│   ├── admin/             # Admin panel
│   ├── api/               # API routes
│   └── ...
├── components/            # React components
│   ├── ui/               # UI components
│   ├── features/         # Feature components
│   └── ...
├── lib/                  # Utility libraries
│   ├── ai/              # AI & ML
│   ├── analytics/       # Analytics
│   ├── automation/      # Workflow automation
│   ├── auth/            # Authentication
│   ├── cache/           # Caching
│   ├── integrations/    # External integrations
│   └── ...
├── scripts/             # Scripts & migrations
│   ├── ml/              # ML scripts
│   └── ...
├── __tests__/           # Unit tests
├── e2e/                 # E2E tests
└── ...
```

## 🛠️ Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Setup environment variables:**
   ```bash
   cp .env.example .env.local
   # Fill in your environment variables
   ```

3. **Run database migrations:**
   ```bash
   npm run migrate
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Type check TypeScript
- `npm run test` - Run unit tests
- `npm run test:e2e` - Run E2E tests
- `npm run migrate` - Run database migrations
- `npm run backup` - Create database backup

## 📚 Dokumentácia

Podrobnejšia dokumentácia nájdete v súbore `plan.md`.

## 📄 Licencia

Proprietárna licencia - EPALETY.SK

