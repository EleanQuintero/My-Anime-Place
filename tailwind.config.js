/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        '16': 'repeat(auto-fit, minmax(200px, 1fr))',
      }
    },
  },
  plugins: [
    function({addUtilities}) {
        const newUtilities ={
          ".no-scrollbar::-webkit-scrollbar": {
            display: "none",
        },
        ".no-scrollbar": {
            "-ms-overflow-style": "none",  /* IE and Edge */
            "scrollbar-width": "none",  /* Firefox */
      }
        }
      addUtilities(newUtilities)
    }
  ],
}

