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
        border: '#B9BBB3',
        ring: '#111210',
        success: '#5FB27B',
      },
      fontFamily: {
        sans: ['var(--font-manrope)'],
        serif: ['var(--font-newsreader)'],
        mono: ['var(--font-dm-mono)'],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#5C574E',
            '--tw-prose-headings': '#111210',
            '--tw-prose-links': '#E85A32',
            '--tw-prose-bold': '#111210',
            '--tw-prose-code': '#111210',
            '--tw-prose-pre-code': '#111210',
            '--tw-prose-pre-bg': '#E8E4DA',
            '--tw-prose-borders': '#B9BBB3',
            maxWidth: 'none',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
