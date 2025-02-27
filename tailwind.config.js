/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vibes: ["Great Vibes", "cursive"],
        poiret: ["Poiret One", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        redcolor: "#D2865A",
        greencolor: "45A284",
        bluecolor: "#81BEC5",
        browncolor: "#D5DCDE",
        yellowcolor: "#fef08a",
        backcolor: "#D5DCDE",
      },
      boxShadow: {
        "custom-green": "5px 5px 10px #22c55e",
        "all-yellow": "0 0 10px 5px #fef08a",
        "all-green": "0 0 48px 12px #14532d",
      },
      container: {
        center: "true", // Центрує контейнер
        // padding: "1rem", // Додає внутрішні відступи
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
