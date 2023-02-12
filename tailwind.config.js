/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": "Poppins, sans-serif",
        "cabin": "Cabin, sans-serif",
        "lato": "Lato, sans-serif",
      }, 
      colors: {
        primary: "#aecbd6",
        secondary: "#ffd1dc",
      },
    },
  },
  plugins: [
      require('tailwind-scrollbar')
  ]
}