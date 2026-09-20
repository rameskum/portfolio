import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F5F4EC',
        foreground: '#111210',
        card: '#FFFcf7',
        'card-foreground': '#111210',
        primary: '#E85A32',
        'primary-foreground': '#FFFcf7',
        accent: '#FF9277',
        'accent-secondary': '#FFC46A',
        muted: '#E8E4DA',
        'muted-foreground': '#5C574E',
        border: '#111210',
        ring: '#111210',
        success: '#5FB27B',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        serif: ['var(--font-instrument-serif)'],
      },
    },
  },
  plugins: [],
};

export default config;
