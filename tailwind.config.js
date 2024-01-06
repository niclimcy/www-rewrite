/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/index.md',
    './src/.vitepress/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'brand-1': '#167c80',
        'brand-2': '#12676a',
        'brand-3': '#324b4c',
        'brand-soft': '#cce8e9'
      }
    }
  },
  darkMode: 'class',
  plugins: []
}
