module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./public/**/*.html",
  ],
  safelist: [
    'backdrop-blur', 
    'backdrop-blur-sm', 
    'backdrop-blur-md', 
    'backdrop-blur-lg', 
    'navbarhome'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
