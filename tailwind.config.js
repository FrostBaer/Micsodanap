/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: (theme) => ({        
        hike: "url('assets/bg1.jpg')",
        adventure: "url('assets/bg2.jpg')",
        leisure: "url('assets/bg4.jpg')",
        teambuilding: "url('assets/bg7.jpg')",
        school: "url('assets/bg6.jpg')",
        kindergarten: "url('assets/bg3.jpg')",
      }),
      scale: {
        '103': '1.03'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

