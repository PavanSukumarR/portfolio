import typography from '@tailwindcss/typography'

export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Playfair Display', 'ui-serif', 'Georgia'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontFamily: theme('fontFamily.serif').join(','),
              fontWeight: theme('fontWeight.extrabold'),
              lineHeight: '1.1',
              marginTop: theme('spacing.2'),
              marginBottom: theme('spacing.2'),
            },
            h2: {
              fontFamily: theme('fontFamily.serif').join(','),
              fontWeight: theme('fontWeight.semibold'),
              lineHeight: '1.2',
              letterSpacing: '0.01em',
              marginTop: theme('spacing.4'),
              marginBottom: theme('spacing.3'),
            },
            h3: {
              fontFamily: theme('fontFamily.serif').join(','),
              fontWeight: theme('fontWeight.semibold'),
              lineHeight: '1.25',
              marginTop: theme('spacing.3'),
              marginBottom: theme('spacing.2'),
            },
            p: {
              fontFamily: theme('fontFamily.sans').join(','),
              fontSize: theme('fontSize.base')[0],
              lineHeight: '1.6',
              marginTop: theme('spacing.2'),
              marginBottom: theme('spacing.3'),
              maxWidth: '65ch', // optimal reading width
              color: theme('colors.neutral.700'),
            },
            a: {
              fontFamily: theme('fontFamily.sans').join(','),
              color: theme('colors.amber.500'),
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
                color: theme('colors.amber.600'),
              },
            },
            ul: {
              marginTop: theme('spacing.2'),
              marginBottom: theme('spacing.3'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.neutral.200'),
            h1: { color: theme('colors.white') },
            h2: { color: theme('colors.white') },
            h3: { color: theme('colors.white') },
            p: { color: theme('colors.neutral.400') },
            a: {
              color: theme('colors.amber.400'),
              '&:hover': { color: theme('colors.amber.300') },
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
}