import type { Config } from 'tailwindcss'
const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        brand: '#F36A10',
        accent: '#00C2D7',
        card: 'rgba(255,255,255,0.03)',
        border: 'rgba(255,255,255,0.12)'
      },
      container: { center: true, padding: '1rem', screens: { '2xl': '1280px' } },
      boxShadow: { glow: '0 0 0 1px rgba(0, 194, 215, 0.25), 0 8px 40px rgba(0, 194, 215, 0.12)' }
    }
  },
  plugins: []
}
export default config
