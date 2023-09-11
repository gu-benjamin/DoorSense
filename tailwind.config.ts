import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        primary: {
          50: '#DAF3FD',
          100:'#05AFF2'
        },
        secondary: '#F0F5F9',
        'light-red': 'hsl(0, 100%, 67%)',
        'thirdy': '#E0EFF5',
      },
      
    },
  },
  
  plugins: [],
  
}
export default config
