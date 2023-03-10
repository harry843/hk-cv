/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        'xxs': '320px',
        'xs': '490px',
        ...defaultTheme.screens,
      },
            fontSize:{
      "ss":"0.8125rem"
    },
            lineHeight:{
      "ss": "1.5rem"
            },
            spacing:{
      "ss": "3rem"
                    },
            colors:{
      "nhs_blue":"#005EB8",
      "nhs_bright_blue":"#0072CE",
      ...defaultTheme.colors,
            }
  },
  },
  plugins: [],
}
