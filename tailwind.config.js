module.exports = {
    theme: {
      extend: {
        animation: {
          wiggle: 'wiggle 1s ease-in-out infinite',
        },
        keyframes: {
          wiggle: {
            '0%, 100%': { transform: 'rotate(-5deg)' },
            '50%': { transform: 'rotate(5deg)' },
          }
        },
        theme: {
          extend: {
            screens: {
              'sm': '640px',
              'md': '768px',
              'lg': '1024px',
              'xl': '1280px',
              '2xl': '1536px',
            },
          },
        },
      }
    }
  }