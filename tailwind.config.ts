import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        nero: {
          DEFAULT: '#0A0A0A',
          50: '#1A1A1A',
          100: '#141414',
          200: '#111111',
        },
        crema: {
          DEFAULT: '#F5F0EB',
          light: '#FAF8F5',
          dark: '#E8E0D8',
        },
        oro: {
          DEFAULT: '#C9A96E',
          light: '#D4BA85',
          dark: '#B8944F',
        },
        grigio: {
          DEFAULT: '#8A8A8A',
          light: '#B0B0B0',
          dark: '#5A5A5A',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.375rem)',
        'fluid-xl': 'clamp(1.25rem, 1rem + 1.25vw, 1.75rem)',
        'fluid-2xl': 'clamp(1.5rem, 1rem + 2.5vw, 2.5rem)',
        'fluid-3xl': 'clamp(2rem, 1.2rem + 4vw, 3.75rem)',
        'fluid-4xl': 'clamp(2.5rem, 1rem + 6vw, 5rem)',
        'fluid-hero': 'clamp(3rem, 1rem + 8vw, 8rem)',
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.16, 1, 0.3, 1)',
        'luxury-in': 'cubic-bezier(0.7, 0, 0.84, 0)',
        'luxury-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        shimmer: {
          from: { backgroundPosition: '200% 0' },
          to: { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        marquee: 'marquee var(--marquee-duration, 30s) linear infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
