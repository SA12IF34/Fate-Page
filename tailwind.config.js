/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': {'max':'420px'},
      'tablet': {'max':'680px'},
      'laptop': {'max':'1024px'},
      'desktop': {'max':'1280px'},
      'tablet-m': {'min': '680px'}
    }
  },
  plugins: [],
}

