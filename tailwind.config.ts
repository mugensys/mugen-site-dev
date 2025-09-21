import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      fontFamily: {
        sans: ['var(--font-epilogue)', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        brand: {
          orange: 'var(--brand-orange)',
          surface: 'var(--surface)',
          ink: 'var(--ink)',
          border: 'var(--border)',
        },
        accent: {
          cyan: 'var(--accent-cyan)',
        }
      },
      boxShadow: {
        soft: '0 6px 30px rgba(0,0,0,0.08)',
      },
      backgroundImage: {
        'grid-dots': 'radial-gradient(currentColor 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-sm': '14px 14px',
      }
    },
  },
  plugins: [],
}
export default config
