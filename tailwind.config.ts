import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0A0A',
          soft: '#141210',
          line: '#262019',
        },
        paper: '#F5F2EA',
        muted: '#8C8578',
        gold: {
          DEFAULT: '#C9A227',
          bright: '#E4C55A',
          deep: '#8A6B1D',
        },
      },
      fontFamily: {
        kalameh: ['Kalameh', 'Vazirmatn', 'Tahoma', 'sans-serif'],
      },
      maxWidth: {
        wrap: '1180px',
      },
    },
  },
  plugins: [],
};

export default config;
