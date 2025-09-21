# Mugen Systems — Network & IT Consulting (Static Next.js Site)

Single-page marketing site built with Next.js 14 (App Router), TypeScript, Tailwind, shadcn-style UI components, Framer Motion, and accessible patterns. Exported as static HTML/CSS/JS for Nginx.

## Tech
- Next.js 14 (App Router), **static export** only (`output: 'export'`)
- TypeScript + Tailwind CSS (brand variables in `:root`)
- shadcn-style components (Button/Input/Card) in `components/ui`
- Framer Motion (entrance animations + scroll-reactive SVG)
- Lucide icons
- React Hook Form + Zod validation
- Font: Epilogue via `next/font/google`
- Honors `prefers-reduced-motion`

## Development
```bash
npm ci
npm run dev
```

## Build (Static Export)
```bash
npm run build   # -> out/
```

## Nginx (Ubuntu 25.04, HTTP only)
Place static files under `/var/www/mugensystems/out` and use this server block:

```nginx
server {
  listen 80 default_server;
  server_name _;

  root /var/www/mugensystems/out;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }

  add_header X-Content-Type-Options nosniff;
  add_header Referrer-Policy strict-origin-when-cross-origin;
  add_header Permissions-Policy "geolocation=(), microphone=()";
  add_header Content-Security-Policy "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data:; font-src 'self' https://fonts.gstatic.com; connect-src 'self'; base-uri 'self'; form-action 'self' mailto:";
}
```

## Local Deployment Checklist (Ubuntu 25.04)
1. **Install prerequisites**
   ```bash
   sudo apt update && sudo apt install -y nginx git
   curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   source ~/.bashrc
   nvm install 20
   node -v && npm -v
   ```

2. **Prepare folders**
   ```bash
   sudo mkdir -p /opt/mugensystems
   sudo mkdir -p /var/www/mugensystems/out
   sudo chown -R $USER:$USER /opt/mugensystems
   ```

3. **Clone the repository**
   ```bash
   cd /opt/mugensystems
   git clone https://github.com/ORG/REPO.git site
   # or SSH:
   # ssh-keygen -t ed25519 -C "mugen-deploy@server"
   # cat ~/.ssh/id_ed25519.pub
   # git clone git@github.com:ORG/REPO.git site
   ```

4. **Install with lockfile**
   ```bash
   cd /opt/mugensystems/site
   npm ci
   ```

5. **Build**
   ```bash
   npm run build
   ```

6. **Deploy to Nginx root**
   ```bash
   sudo rsync -avh --delete out/ /var/www/mugensystems/out/
   sudo chown -R root:root /var/www/mugensystems/out
   sudo find /var/www/mugensystems/out -type d -exec chmod 755 {} \;
   sudo find /var/www/mugensystems/out -type f -exec chmod 644 {} \;
   ```

7. **Enable site (if using sites-available)**
   ```bash
   sudo tee /etc/nginx/sites-available/mugensystems >/dev/null <<'CFG'
   server {
     listen 80 default_server;
     server_name _;
     root /var/www/mugensystems/out;
     index index.html;
     location / { try_files $uri $uri/ /index.html; }
     add_header X-Content-Type-Options nosniff;
     add_header Referrer-Policy strict-origin-when-cross-origin;
     add_header Permissions-Policy "geolocation=(), microphone=()";
     add_header Content-Security-Policy "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data:; font-src 'self' https://fonts.gstatic.com; connect-src 'self'; base-uri 'self'; form-action 'self' mailto:";
   }
   CFG
   sudo ln -sf /etc/nginx/sites-available/mugensystems /etc/nginx/sites-enabled/mugensystems
   sudo nginx -t && sudo systemctl reload nginx
   ```

### Optional: Enable TLS with certbot (when you map a real domain)
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d example.com -d www.example.com
# certbot will update the server block and reload Nginx
```

## Accessibility & QA
- Sticky header with active section highlighting via IntersectionObserver.
- Smooth in-page scrolling and keyboard-accessible skip link.
- `MugenOrb` animates subtly; falls back to static for `prefers-reduced-motion`.
- Responsive at 320 / 768 / 1024 / 1440 breakpoints.
- Contact form validates with React Hook Form + Zod, announces errors, and opens `mailto:` fallback.
- Lighthouse: No major Accessibility/SEO/Best Practices issues expected.

## Notes
- This is a static site — no API routes, server actions, or SSR.
- All assets are fingerprinted by Next; images are unoptimized and local.
