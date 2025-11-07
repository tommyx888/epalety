/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors from visual.md
        forest: {
          DEFAULT: '#2D5016',
          light: '#4A7A2B',
          dark: '#1F350F',
        },
        wood: {
          DEFAULT: '#8B4513',
          light: '#A0522D',
          dark: '#654321',
        },
        orange: {
          DEFAULT: '#FF8C00',
          light: '#FFA500',
          dark: '#FF7700',
        },
        // Legacy primary for compatibility
        primary: {
          DEFAULT: '#2D5016', // Forest Green
          50: '#f0f9f0',
          100: '#e0f2e0',
          200: '#bae6ba',
          300: '#7dd37d',
          400: '#4A7A2B',
          500: '#2D5016',
          600: '#1F350F',
          700: '#1a2c0c',
          800: '#152308',
          900: '#0f1a05',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      spacing: {
        // 8px grid system
        'xs': '4px',
        's': '8px',
        'm': '16px',
        'l': '24px',
        'xl': '48px',
        '2xl': '64px',
        '3xl': '96px',
      },
      borderRadius: {
        'card': '12px',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'card': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.15)',
      },
      transitionDuration: {
        'smooth': '300ms',
      },
      transitionTimingFunction: {
        'smooth': 'ease-out',
      },
    },
  },
  plugins: [],
}

