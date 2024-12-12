/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        linkColor: "#FCB500"
      },
      backgroundColor:{
        btnColor: "#437FC7"
      },
      fontFamily:{
        poppins:['Poppins','sans-serif'],
        mont:['Montserrat','sans-serif'],
        inter:['Inter','sans-serif'],
        rubik:['Rubik','sans-serif']
      },
      boxShadow: {
        'custom-card': '0 4px 25px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    darkTheme: false,
  },
};
