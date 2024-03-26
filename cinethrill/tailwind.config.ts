import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'gradient-primary': `conic-gradient(#A6A7A900, #13C6B3, #ff501d00 20%)`,
      }),
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        foreground: {
          DEFAULT: '#F8FCFB',
          light: '#FFFFFF',
          dark: '#A6A7A9',
        },
        teal: {
          DEFAULT: '#13C6B3',
          light: '#2ACBBA',
          dark: '#104847',
        },
        blueblack: {
          DEFAULT: '#0F1219',
          light: '#0E2225',
          dark: '#0A0C11',
        },
      },
    },
  },
  plugins: [],
};
export default config;
