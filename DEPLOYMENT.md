# EPALETY.SK - Deployment Guide

## 🚀 Production Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Push code to GitHub
   - Import project in Vercel dashboard
   - Connect GitHub repository

2. **Environment Variables**
   Set all required environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_KEY`
   - `OPENAI_API_KEY`
   - `STRIPE_SECRET_KEY`
   - ... (all from `.env.example`)

3. **Build Settings**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site is live!

### Docker Deployment

1. **Build Image**
   ```bash
   docker build -t epalety:latest .
   ```

2. **Run Container**
   ```bash
   docker run -d \
     -p 3000:3000 \
     --env-file .env.production \
     --name epalety \
     epalety:latest
   ```

3. **Docker Compose** (recommended)
   ```yaml
   version: '3.8'
   services:
     app:
       build: .
       ports:
         - "3000:3000"
       env_file:
         - .env.production
       restart: unless-stopped
   ```

### Manual Server Deployment

1. **Setup Server**
   ```bash
   # Install Node.js 20+
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Install PM2
   npm install -g pm2
   ```

2. **Clone & Build**
   ```bash
   git clone <repository-url>
   cd epalety
   npm install
   npm run build
   ```

3. **Start with PM2**
   ```bash
   pm2 start npm --name "epalety" -- start
   pm2 save
   pm2 startup
   ```

4. **Setup Nginx** (reverse proxy)
   ```nginx
   server {
       listen 80;
       server_name epalety.sk;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## 🔄 CI/CD

### GitHub Actions

Automatické deployment je nastavené v `.github/workflows/deploy.yml`

**Requirements:**
- `VERCEL_TOKEN` - Vercel API token
- `VERCEL_ORG_ID` - Vercel organization ID
- `VERCEL_PROJECT_ID` - Vercel project ID

### Manual Deployment

```bash
# Build
npm run build

# Test
npm run test
npm run lint
npm run type-check

# Deploy
vercel --prod
```

## 📊 Monitoring

### Health Checks

- Endpoint: `/api/health`
- Checks: Database, Redis, External APIs
- Expected: `200 OK` with `status: "healthy"`

### Uptime Monitoring

Setup monitoring service (UptimeRobot, Pingdom, etc.):
- URL: `https://epalety.sk/api/health`
- Interval: 5 minutes
- Expected: `200 OK`

## 🔒 Security Checklist

- [ ] All environment variables set
- [ ] HTTPS enabled (SSL certificate)
- [ ] API rate limiting configured
- [ ] CORS properly configured
- [ ] Security headers set
- [ ] Database backups automated
- [ ] Monitoring & alerting setup

## 📝 Post-Deployment

1. **Verify Deployment**
   - Check homepage loads
   - Test API endpoints
   - Verify database connection
   - Check health endpoint

2. **Setup Monitoring**
   - Configure Sentry
   - Setup uptime monitoring
   - Configure alerts

3. **Backup Verification**
   - Test backup script
   - Verify backup storage
   - Test restore process

