/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary-50': '#eff4fe',
      'primary-100': '#e2e9fd',
      'primary-200': '#cbd6fa',
      'primary-300': '#abbbf6',
      'primary-400': '#8997f0',
      'primary-500': '#6d74e7',
      'primary-600': '#5351da',
      'primary-700': '#4742c0',
      'primary-800': '#3f3da9',
      'primary-900': '#34357b',
      'primary-950': '#1f1e48',
      'white': '#F9F9FB',
      'gray-100': '#EEEDF3',
      'gray-200': '#D7D4E2',
      'gray-300': '#C0BCD2',
      'gray-400': '#9D99B2',
      'gray-500': '#7F7A99',
      'gray-600': '#646077',
      'gray-700': '#514D60',
      'gray-800': '#3E3B49',
      'gray-900': '#2B2933',
      'black': '#212028',
    },
    fontFamily: {
      'modeuristic': ['Moderustic', 'sans-serif'],
      'prompt': ['Prompt', 'sans-serif'],
    },
  },
  plugins: [],
}

