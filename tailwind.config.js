/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      stroke: {
        round: 'round',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'span-orange': '#D97706',
        'dark-blue': '#0F172A',
        'light-purple': ' #7E22CE',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.stroke-linecap-round': {
          'stroke-linecap': 'round',
        },
      });
    },
  ],
};
