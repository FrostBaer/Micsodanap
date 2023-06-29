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
        family: "url('assets/bg5.jpg')",
        free: "url('assets/bg9.jpg')",

        hike_masthead: "url('assets/t2.jpg')",
        adventure_masthead: "url('assets/t10.jpg')",
        leisure_masthead: "url('assets/t8.jpg')",
        teambuilding_masthead: "url('assets/t4.jpg')",
        school_masthead: "url('assets/t9.jpg')",
        kindergarten_masthead: "url('assets/t6.jpg')",
        family_masthead: "url('assets/t1.jpg')",
        free_masthead: "url('assets/t5.jpg')",
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

