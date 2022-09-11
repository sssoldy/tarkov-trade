/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui'],
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      extrabold: 800,
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
