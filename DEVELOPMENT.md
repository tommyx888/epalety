# EPALETY.SK - Development Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- npm alebo yarn
- Supabase account
- PostgreSQL (pre lokálny vývoj)

### Setup

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd epalety
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env.local
   # Vyplňte všetky potrebné hodnoty
   ```

4. **Run database migrations**
   ```bash
   npm run migrate
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open browser**
   ```
   http://localhost:3000
   ```

## 📝 Development Workflow

### Code Style
- Používame TypeScript pre všetky súbory
- ESLint pre linting
- Prettier pre formátovanie (voliteľné)

### Git Workflow
- `main` - Production branch
- `develop` - Development branch
- Feature branches: `feature/nazov-featury`

### Commits
- Používame konvenčné commits: `feat:`, `fix:`, `docs:`, atď.

## 🧪 Testing

### Unit Tests
```bash
npm run test
```

### E2E Tests
```bash
npm run test:e2e
```

### Coverage
```bash
npm run test:coverage
```

## 🏗️ Building

### Development Build
```bash
npm run build
```

### Production Build
```bash
NODE_ENV=production npm run build
```

## 📦 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Set environment variables
4. Deploy

### Docker
```bash
docker build -t epalety .
docker run -p 3000:3000 epalety
```

## 🔧 Useful Commands

- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run type-check` - TypeScript type checking
- `npm run migrate` - Run database migrations
- `npm run backup` - Create database backup

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

