/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'from-sky-400',
    'to-indigo-600',
    'from-teal-100',
    'to-orange-200',
    'from-blue-500',
    'to-purple-600',
    'from-pink-500',
    'to-blue-500',
    'from-green-400',
    'to-emerald-500',
    'from-sky-400',
    'to-indigo-500',
    'from-yellow-400',
    'to-orange-500',
    'from-purple-400',
    'to-pink-500',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1976d2', // MUI primary
        secondary: '#9c27b0', // MUI secondary
        accent: '#ff9800',
        background: '#f5f5f5',
        surface: '#fff',
      },
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
