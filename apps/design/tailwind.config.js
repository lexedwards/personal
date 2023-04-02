/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.@(js|jsx|ts|tsx|mdx)',
    './node_modules/@lexedwards/ui/**/*',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
