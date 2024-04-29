import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
// import colors from 'tailwindcss/colors'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

export default {
  content: ['./src/**/*.vue','./index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Segoe UI', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#e50914',
        "primary-hovered": '#c11119',
      }
    },
  },
  plugins: [forms, typography],
} satisfies Config

