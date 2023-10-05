/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
   
  ],
  theme: {
    fontFamily: {
      base: ['Cormorant Upright, serif'],
      alt: ['Open Sans, sans-serif']
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
        lg: '3rem',
        xl:'4rem'
      }
    },
    screens: {
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px',
      '3xl':'2000px',
    },
   
    extend: {
      colors: {
        'golden': '#dcca87',
        'gray': '#545454',
        'grey':'#aaaaaa'
      },
      keyframes: {
        slide_btn: {
          '0%': { transform: 'translateY(-25%)' },
          '100%':{transform:'translateY(0)'}
        }
      },
      animation: {
        slide_btn: 'slide_btn 0.5s ease-in repeat-2'
      },
      rotate: {
        '-90': '-90deg',
        '-180':'-180deg'
      }
    },
  },
  plugins: [],
}
