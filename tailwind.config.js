/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#f3f4f6',
          foreground: '#111827',
        },
      },
    },
  },
  plugins: [],
};