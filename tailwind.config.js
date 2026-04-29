/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './script.js',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#2E2C71',
        'navy-dark': '#1e1c5a',
        teal: '#00B4D8',
        'teal-dark': '#0096b5',
        gold: '#F4A261',
        'bg-light': '#F8FAFC',
        'text-dark': '#1E293B',
        'text-gray': '#64748B',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['DM Serif Display', 'serif'],
      },
    },
  },
  plugins: [],
};
