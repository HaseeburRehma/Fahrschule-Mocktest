import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand
        brand: {
          DEFAULT: '#01FE21',
          50: '#E5FFE9',
          100: '#B8FFC2',
          200: '#7FFF92',
          300: '#3FFF5C',
          400: '#01FE21',
          500: '#00d615',
          600: '#00A316',
          700: '#007510',
          800: '#00470A',
          900: '#001904'
        },
        'brand-2': '#00d615',
        // Surfaces
        ink: {
          0: '#000000',
          50: '#0a0a0a',
          100: '#111111',
          200: '#161616',
          300: '#1c1c1c',
          400: '#222222'
        },
        danger: '#FF4444'
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 24px rgba(1, 254, 33, 0.35)',
        'glow-lg': '0 0 48px rgba(1, 254, 33, 0.45)',
        'glow-soft': '0 0 16px rgba(1, 254, 33, 0.18)'
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '1.75rem'
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 16px rgba(1, 254, 33, 0.25)' },
          '50%': { boxShadow: '0 0 32px rgba(1, 254, 33, 0.55)' }
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 500ms cubic-bezier(0.22, 1, 0.36, 1) both',
        shimmer: 'shimmer 2.5s linear infinite',
        'pulse-glow': 'pulseGlow 2.4s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;
