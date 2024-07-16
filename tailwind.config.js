/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors:{
      "branco": "#ffffff",
      "cinza": "#cccccc",
      "marrom": "#634c2c",
      "laranja": "#e48c28"

    }
    
  },
  plugins: [],
}

