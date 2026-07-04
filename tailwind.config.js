/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        royal: {
          50: '#f6f3fb',
          100: '#ece5f7',
          200: '#d9ccef',
          300: '#bda3e0',
          400: '#9a72cc',
          500: '#7e4db8',
          600: '#6a37a3',
          700: '#582c87',
          800: '#3d1d5e',
          900: '#2a1342',
          950: '#1c0c2e',
        },
        gold: {
          50: '#fdfaf3',
          100: '#faf2dd',
          200: '#f4e3b0',
          300: '#edcf78',
          400: '#e6b94a',
          500: '#d4a02e',
          600: '#b07e22',
          700: '#8c611d',
          800: '#6e4d1c',
          900: '#5a401b',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'fade-in': 'fadeIn 0.6s ease-out both',
        'scale-in': 'scaleIn 0.5s ease-out both',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
