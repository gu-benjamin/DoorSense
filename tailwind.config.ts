import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          50: '#DAF3FD',
          70: '#33C5FF',
          100:'#05AFF2'
        },
        secondary: '#F0F5F9',
        'light-red': 'hsl(0, 100%, 67%)',
        topbottom: '#7aa7da',
        modaltop: '#FCFCFC',
      }
    },
  },
  plugins: [],
}
export default config
