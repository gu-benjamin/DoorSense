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
        primary: '#05AFF2',
        secondary: '#F0F5F9',
        'light-red': 'hsl(0, 100%, 67%)',
        blue: '#7CD4F7',
        topbottom: '#7aa7da',
        grey: '#606e80',
        modaltop: '#FCFCFC',
        iconcolor: '#DAF3FD',
      }
    },
  },
  plugins: [],
}
export default config
