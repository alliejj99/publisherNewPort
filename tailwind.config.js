// tailwind.config.js

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './src/styles/tailwind-utilities.css',
  ],
  theme: {
    extend: {
      colors: {
        // primary: '#1E40AF',
        // secondary: '#9CA3AF',
        // accent: '#3B82F6',
      },
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      addUtilities({
        '.flex-center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        '.btn': {
          display: 'inline-block',
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          fontWeight: 'bold',
          textAlign: 'center',
          textDecoration: 'none',
          borderRadius: '0.25rem',
          backgroundColor: theme('colors.primary'),
          color: '#ffffff',
        },
        '.card': {
          padding: '1rem',
          borderRadius: '0.5rem',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          backgroundColor: theme('colors.secondary'),
        },
        '.position-all-center': {
          position: 'absolute',
          top: 'center',
          left: 'center',
          right: 'center',
          bottom: 'center',
        },
        '.flex-all-center': {
          display: 'center',
          justifyContent: 'center',
          contentItems: 'center',
        },
      });
    },
  ],
}
