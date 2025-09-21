# Mugen Systems — Static Marketing Site (Next.js 14, App Router)

Single-page marketing site for **Mugen Systems** (Network & IT Consulting). Built with **Next.js 14 + TypeScript**, **Tailwind CSS**, **shadcn/ui-style** primitives, **Framer Motion**, and **lucide-react** icons. Fully **static export** (no Node server at runtime).

## Features
- Sticky header with scrollspy highlighting
- Smooth in-page scrolling with Safari fallback
- Subtle scroll-reactive **MugenOrb** SVG (reduced-motion respected)
- Accessible form (React Hook Form + Zod) with `mailto:` fallback
- App Router, `metadata` API, JSON-LD (`ProfessionalService`)
- Core Web Vitals-friendly (no heavy images, lazy, small JS)
- Tailwind with CSS variables for theming

## Quickstart (Local)
```bash
npm ci
npm run dev
```
Open http://localhost:3000

## Build (Static Export)
```bash
npm run build
# Output in ./out
```

---

## Next.js Static Export Settings
Configured in `next.config.mjs`:
```js
export default { output: 'export', images: { unoptimized: true } }
```
Build command produces `/out` via `next build && next export`.

---

## Ubuntu 25.04 + Nginx (HTTP only, local LAN)

(See also the expanded checklist below.)
1. **Install Nginx**
```bash
sudo apt update && sudo apt install -y nginx
```
2. **Build the site** (locally or on the server)
- Install Node.js 20+ and npm.
- From the project root:
```bash
npm ci && npm run build
```
- Confirm the static export at `./out/`.

3. **Deploy the static files**
```bash
sudo mkdir -p /var/www/mugensystems/out
sudo rsync -avh out/ /var/www/mugensystems/out/
```

4. **Configure Nginx**
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
  add_header Content-Security-Policy "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data:; font-src 'self' https://fonts.gstatic.com; connect-src 'self'; base-uri 'self'; form-action 'self' mailto:;";
}
CFG
sudo ln -s /etc/nginx/sites-available/mugensystems /etc/nginx/sites-enabled/mugensystems
sudo nginx -t && sudo systemctl reload nginx
```

5. **Open firewall for HTTP** (if ufw is enabled)
```bash
sudo ufw allow 80/tcp
```

6. **Find the server’s LAN IP** and test from another device
```bash
hostname -I | awk '{print $1}'
# Visit: http://<LAN-IP>/
```
*(Optional)* Reserve a DHCP lease or add a hosts entry (e.g., `192.168.1.50 mugen.test`).

### (Optional) TLS with certbot (when you move to public internet)
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d your.domain.example
```

---

## SEO & Metadata
- Title: **Mugen Systems — Network & IT Consulting**
- Canonical: `https://example.com/`
- Open Graph/Twitter image at `/public/og.png`
- JSON-LD `ProfessionalService` in `app/layout.tsx` `<head>`

---

## Accessibility Notes
- Landmarks: header, main, sections, footer
- `aria-current="page"` on active nav links
- Keyboard-visible focus styles
- Form labels, `aria-invalid`, and live region for status
- `prefers-reduced-motion` honored

---

## Tests (minimal)
A tiny scrollspy smoke test using Vitest / JSDOM is included. Run:
```bash
npm test
```
> Note: In CI you may need to polyfill `IntersectionObserver`.

---

## Vite + React (Alternative)
If you need a non-Next build: use `react-helmet-async` for metadata, `@fontsource/epilogue`, and hash-based anchors. Serve `/dist` with the same Nginx config (root -> `/dist`).

---

## Copy Blocks
**Brand Line:** Mugen Systems — Infinite possibilities. Practical solutions.

**Hero**
- H1: Transforming Businesses through Network & IT
- Subhead: As per spec
- CTA Primary: Get a Consultation
- CTA Secondary: Our Services


## Local Testing Deployment Steps (Ubuntu 25.04 + Nginx, HTTP only)

1. **Install prerequisites**
```bash
sudo apt update && sudo apt install -y nginx git
# (If building on the server) Install Node.js 20+ and npm via nvm
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install --lts
```

2. **Prepare folders**
```bash
sudo mkdir -p /opt/mugensystems
sudo mkdir -p /var/www/mugensystems/out
sudo chown -R $USER:$USER /opt/mugensystems
```

3. **Clone the repository**
- HTTPS (public):
```bash
cd /opt/mugensystems
git clone https://github.com/ORG/REPO.git site
```
- SSH (private):
```bash
ssh-keygen -t ed25519 -C "mugen-deploy@server"
cat ~/.ssh/id_ed25519.pub  # add as read-only deploy key
ssh -T git@github.com || true
cd /opt/mugensystems
git clone git@github.com:ORG/REPO.git site
```

4. **Build the site** (static export)
```bash
cd /opt/mugensystems/site
npm ci
npm run build   # produces ./out
```

5. **Deploy the static files to web root**
```bash
sudo rsync -avh --delete out/ /var/www/mugensystems/out/
sudo chown -R root:root /var/www/mugensystems/out
sudo find /var/www/mugensystems/out -type d -exec chmod 755 {} \;
sudo find /var/www/mugensystems/out -type f -exec chmod 644 {} \;
```

6. **Configure Nginx**
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
  add_header Content-Security-Policy "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data:; font-src 'self' https://fonts.gstatic.com; connect-src 'self'; base-uri 'self'; form-action 'self' mailto:;";
}
CFG
sudo ln -s /etc/nginx/sites-available/mugensystems /etc/nginx/sites-enabled/mugensystems || true
sudo nginx -t && sudo systemctl reload nginx
```

7. **Find the server’s LAN IP & test**
```bash
hostname -I | awk '{print $1}'
# Visit: http://<LAN-IP>/
```

8. **Pull updates & redeploy**
```bash
cd /opt/mugensystems/site
git pull --ff-only
npm ci
npm run build
sudo rsync -avh --delete out/ /var/www/mugensystems/out/
sudo systemctl reload nginx
```

9. **(Optional) One-command deploy script**
```bash
cat > /opt/mugensystems/site/deploy.sh <<'SH'
#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "==> Pulling latest commits"; git pull --ff-only
echo "==> Installing deps"; npm ci
echo "==> Building static export"; npm run build
echo "==> Syncing to web root"; sudo rsync -avh --delete out/ /var/www/mugensystems/out/
echo "==> Reloading nginx"; sudo systemctl reload nginx
echo "Done."
SH
chmod +x /opt/mugensystems/site/deploy.sh
```
