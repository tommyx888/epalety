# EPALETY.SK - Projektová Štruktúra

## 📁 Hlavné Adresáre

### `/app`
Next.js App Router - stránky a API routes
- `page.tsx` - Hlavná stránka
- `products/` - Stránka produktov
- `admin/` - Admin panel
- `api/` - API endpoints

### `/components`
React komponenty
- `features/` - Feature komponenty (AIChatbot, atď.)
- `ui/` - Základné UI komponenty

### `/lib`
Utility knižnice a business logika
- `ai/` - AI & Machine Learning
- `analytics/` - Analytics & reporting
- `automation/` - Workflow automation
- `auth/` - Autentifikácia
- `cache/` - Caching (Redis)
- `integrations/` - Externé integrácie
- `payments/` - Platobné brány
- `pricing/` - Dynamické ceny
- `supabase/` - Supabase klienti

### `/scripts`
Skripty a migrácie
- `ml/` - Machine Learning skripty (Python)
- `migrate.ts` - Database migrácie
- `backup.ts` - Zálohy

### `/__tests__`
Unit testy (Jest)

### `/e2e`
End-to-end testy (Playwright)

### `/migrations`
SQL migračné súbory

### `/backups`
Lokálne zálohy databázy

## 🔧 Konfiguračné Súbory

- `package.json` - Dependencies a scripts
- `tsconfig.json` - TypeScript konfigurácia
- `next.config.js` - Next.js konfigurácia
- `tailwind.config.js` - Tailwind CSS konfigurácia
- `jest.config.js` - Jest testovacia konfigurácia
- `playwright.config.ts` - Playwright konfigurácia
- `Dockerfile` - Docker image
- `.github/workflows/` - CI/CD pipelines

## 📝 Dôležité Súbory

- `README.md` - Hlavná dokumentácia
- `plan.md` - Detailný plán projektu
- `.env.example` - Príklad environment premenných
- `.gitignore` - Git ignore pravidlá

## 🚀 Ďalšie Kroky

1. Skopírujte `.env.example` na `.env.local` a vyplňte hodnoty
2. Nainštalujte dependencies: `npm install`
3. Spustite migrácie: `npm run migrate`
4. Spustite dev server: `npm run dev`

