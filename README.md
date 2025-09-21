# Mugen Systems — Static Next.js Site

Single-page marketing site built with Next.js 14 (App Router), TypeScript, Tailwind (CSS vars), shadcn-style UI, Framer Motion, and lucide-react. **Static export** only — no SSR, no API routes.

## Quick Start

```bash
npm ci
npm run build   # => ./out
```

Preview locally (without Nginx):

```bash
npx serve out
```

## Deploy to Ubuntu 25.04 + Nginx (HTTP only)
Follow your provided checklist. Set Nginx `root /var/www/mugensystems/out;` and copy the sample server block. After `npm run build`, `rsync` the `out/` to your web root.

## Notes
- **SEO**: Metadata API + JSON-LD `ProfessionalService`. Update canonical + contact email before production.
- **Accessibility**: ARIA landmarks, focus styles, `aria-current` on active nav, `aria-live` for form errors, respects `prefers-reduced-motion`.
- **Performance**: No heavy images; animations gated; all sections client-side only.
- **Images**: Replace `public/og.png` with a 1200x630 image.
- **Theming**: Adjust CSS variables in `app/globals.css` or extend Tailwind theme.
- **Static form**: Contact uses `mailto:`. Swap to your backend later if needed.
