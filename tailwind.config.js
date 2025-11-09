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
        // Design System Colors from Brief
        primary: {
          DEFAULT: '#2D5016', // tmavo zelená - drevo/príroda
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
        secondary: {
          DEFAULT: '#F59E0B', // amber - premium/dôvera
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#F59E0B',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        accent: {
          DEFAULT: '#10B981', // emerald - fresh/moderné
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        // Legacy colors for compatibility
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
          DEFAULT: '#F59E0B', // Updated to match secondary
          light: '#fbbf24',
          dark: '#d97706',
        },
        // Neutral colors
        neutral: {
          text: '#1F2937',
          'text-secondary': '#6B7280',
          background: '#F3F4F6',
          white: '#FFFFFF',
        },
        error: '#EF4444',
        success: '#10B981',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      spacing: {
        // 4px grid system from brief
        'xs': '4px',
        's': '8px',
        'sm': '12px',
        'm': '16px',
        'l': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
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
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float 3s ease-in-out 1.5s infinite',
        'gradient': 'gradient 3s ease infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}

