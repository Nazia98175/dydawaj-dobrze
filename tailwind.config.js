/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./shopcard.html",
    "./guides.html",
    "./about.html",
    "./special.html",
    "./opportunities.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "500px",
        // => @media (min-width: 640px) { ... }

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
        xxl: "1440px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        "3xl": "1720px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        primary: "#FFEA74",
        secondry: "#F50269",
        skyblue: "#3CF",
        lightblack: "#243237",
        exodusFruit: "#696ADB",
        Jupiter: "#DCDCDE",
        blackMetal: "#050505",
        piedWagtailGrey: "#BBBABF",
        schoolBus: "#FFD800",
        yachtClub: "#576063",
        cottonBall: "#F4F9FD",
        Mandarin: "#F47D41",
        blueTitmouse: "#4063FD",
        vivid: "#FFA303",
        brutal: "#E41822",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(110deg, #9a33ae 6.13%, #f50269 76.3%, #f47d41 99.4%)",
      },
      dropShadow: {
        c1: "2px 2px 6px rgba(68, 68, 68, 0.25)",
      },
      boxShadow: {
        c2: "0px 3px 10px 0px rgba(132, 78, 213, 0.25)",
        c3: "0px 5px 20px 0px rgba(132, 78, 213, 0.08)",
        c4: "3px 10px 10px 0px rgba(0, 0, 0, 0.20)",
        c5: "5px 8px 20px 0px rgba(0, 123, 255, 0.25)",
      },
    },
  },
  plugins: [],
};
