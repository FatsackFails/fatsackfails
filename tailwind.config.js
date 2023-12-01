/*
|-------------------------------------------------------------------------------
| Tailwind - The Utility-First CSS Framework
|
| A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
| David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).
|
| Welcome to the Tailwind config file. This is where you can customize
| Tailwind specifically for your project. Don't be intimidated by the
| length of this file. It's really just a big JavaScript object and
| we've done our very best to explain each section.
|
| View the full documentation at https://tailwindcss.com.
|-------------------------------------------------------------------------------
*/

module.exports = {
  important: false,
  content: ['./src/**/*.{js,html,md,njk}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        fspurple: {
          '100': '#eee8fc',
          '200': '#CBC8D2',
          '300': '#ACA6B6',
          '400': '#6D6480',
          '500': '#2F2149',
          '600': '#2A1E42',
          '700': '#1C142C',
          '800': '#150F21',
          '900': '#0E0A16',
        },
        fspink: {
          '100': '#FFF3FA',
          '200': '#FEE1F1',
          '300': '#FDCFE9',
          '400': '#FCACD9',
          '500': '#FA88C8',
          '600': '#E17AB4',
          '700': '#965278',
          '800': '#713D5A',
          '900': '#4B293C',
        },
      },
    },
    spacing: {
      px: '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem',
      '70': '18rem',
      // Percentages
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      // Aspect Ratios
      '4/3': '75%',
      '16/9': '56.25%',
      '21/9': '42.86%',
      'square': '100%',
    },
    height: {
      '75vh': '75vh',
      '72': '18rem',
      '80': '20rem',
      '90': '22rem',
      '100': '25rem',
    },
    width: {
      '30': '30%',
      '45': '45%',
      '72': '18rem',
      '80': '20rem',
      '90': '22rem',
      '100': '25rem',
    },
    boxShadow: {
      'md-top': '0 4px 6px -1px rgba(0, 0, 0, .1), 0 -6px 4px -1px rgba(0, 0, 0, .06)',
    },
  },
  
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
