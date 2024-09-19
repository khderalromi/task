/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:['Poppins']
      },
      colors:{
        lemon:'#07C961',
        blue_costume: '#4B93D0',
        color1:'#FF225E',
        color2:'#8BF2B5',
        color3:'#E280DA',
        color4:'#A34D9F'
      },
      fontSize:{
        xSmall:'6px',
        small:'10px'

      },
      
      screens:{
        'more_md':'800',
        'xsmall':'450px'
      }
    },
  },
  plugins: [],
}
