
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
     colors: {
      'white':"#FFFFFF",
      'purple':'#717CFF',
      "dark-gray":'#f3f4f6',
      "blue":"#2563eb",
      "gray":"#9CA3AF",
      'light-gray':'#ebecfe'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
