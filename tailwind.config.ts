import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Hanken Grotesk', 'sans-serif'],
    },
    extend: {
      colors: {
        'light-red': 'hsl(0, 100%, 67%)',
        'orange-yellow': 'hsl(39, 100%, 56%)',
        'green-teal': 'hsl(166, 100%, 37%)',
        'cobalt-blue': 'hsl(234, 85%, 45%)',
        'light-stale-blue': 'hsl(252, 100%, 67%)',
        'light-royal-yellow': 'hsl(241, 81%, 54%)',
        'violet-blue': 'hsla(256, 72%, 46%, 1)',
        'persian-blue': 'hsla(241, 72%, 46%, 0)',
        'pale-blue': 'hsl(221, 100%, 96%)',
        'light-lavender': 'hsl(241, 100%, 89%)',
        'dark-gray-blue': 'hsl(224, 30%, 27%)',
        'light-blue': '#CAC9FF'
      },
      boxShadow: {
        results: '0px 30px 60px 0px rgba(61, 108, 236, 0.15)'
      }
    },
  },
  plugins: [],
}
export default config
