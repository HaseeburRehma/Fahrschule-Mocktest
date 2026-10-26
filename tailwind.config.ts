import type { Config } from 'tailwindcss';

// Tokens mirror the "Fahrschule Abgefahrn — Mobile App" Figma design system
// (page "Mobile App" → section "Design System").
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand neon green (#00FF24 in Figma)
        brand: {
          DEFAULT: '#00FF24',
          50: '#E5FFE9',
          100: '#B8FFC2',
          200: '#7FFF92',
          300: '#3FFF5C',
          400: '#00FF24',
          500: '#00D61E',
          600: '#0A6B14',
          700: '#1E3A22',
          800: '#0C2A12',
          900: '#0C2608'
        },
        // Surfaces — darkest → lightest
        ink: {
          0: '#060706', // screen background
          50: '#0A0C0A',
          100: '#121412', // card
          200: '#1C1E1C', // raised surface / chip / icon button
          300: '#2A2D2A', // hairline border
          400: '#3A3D3A'
        },
        muted: '#AEB4AE', // secondary text
        subtle: '#6E746C', // tertiary text / inactive nav
        danger: {
          DEFAULT: '#FF5A5A',
          surface: '#2A1113',
          sheet: '#1A0E0F',
          border: '#4A1A1C',
          ink: '#2A0A0A'
        },
        gold: {
          DEFAULT: '#FFC83D',
          deep: '#9A6B0A'
        },
        // Light "celebration card" palette used on the quiz intro / mastered screens
        paper: {
          DEFAULT: '#FFFFFF',
          tile: '#F1F3EF',
          'tile-green': '#EDF4EA',
          ink: '#121212',
          sub: '#5B615A',
          'sub-green': '#5B7A52',
          celebrate: '#6AD255'
        }
      },
      fontFamily: {
        display: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        body: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        tomorrow: ['var(--font-tomorrow)', 'var(--font-montserrat)', 'system-ui', 'sans-serif']
      },
      fontSize: {
        // Figma text styles: [size, { lineHeight, letterSpacing, fontWeight }]
        'heading-xl': ['30px', { lineHeight: '36px', letterSpacing: '-0.6px', fontWeight: '800' }],
        'heading-l': ['22px', { lineHeight: '26px', letterSpacing: '-0.22px', fontWeight: '800' }],
        'heading-m': ['18px', { lineHeight: '22px', letterSpacing: '-0.09px', fontWeight: '700' }],
        'title-m': ['16px', { lineHeight: '20px', fontWeight: '600' }],
        'body-l': ['16px', { lineHeight: '24px', fontWeight: '500' }],
        'body-s': ['14px', { lineHeight: '20px', fontWeight: '500' }],
        'label-m': ['13px', { lineHeight: '16px', letterSpacing: '0.2px', fontWeight: '600' }],
        caption: ['12px', { lineHeight: '16px', letterSpacing: '0.2px', fontWeight: '500' }],
        nav: ['11px', { lineHeight: '13px', letterSpacing: '0.2px', fontWeight: '600' }]
      },
      boxShadow: {
        glow: '0 0 16px rgba(0, 255, 36, 0.5)',
        'glow-lg': '0 0 32px rgba(0, 255, 36, 0.55)',
        'glow-soft': '0 0 40px rgba(0, 255, 36, 0.14)',
        card: '0 10px 28px rgba(0, 0, 0, 0.18)',
        nav: '0 -4px 26px rgba(0, 0, 0, 0.55)'
      },
      borderRadius: {
        tile: '14px',
        option: '18px',
        card: '24px',
        sheet: '28px'
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'sheet-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 16px rgba(0, 255, 36, 0.25)' },
          '50%': { boxShadow: '0 0 32px rgba(0, 255, 36, 0.55)' }
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 500ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'sheet-up': 'sheet-up 320ms cubic-bezier(0.22, 1, 0.36, 1) both',
        shimmer: 'shimmer 2.5s linear infinite',
        'pulse-glow': 'pulseGlow 2.4s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;
