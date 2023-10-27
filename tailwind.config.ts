import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          60: '#39C7FF',
          50: '#DAF3FD',
          100:'#05AFF2'
        },
        secondary: '#F0F5F9',
        thirdy: '#E0EFF5',
        dark:{
          100: '#4F4F4F',
          200: '#393939',
          300: '#121212',
        }, 
        'light-red': 'hsl(0, 100%, 67%)',
      },
      
    },
  },
  
  plugins: [],
  
}
export default config
