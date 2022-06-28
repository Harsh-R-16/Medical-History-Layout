/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        logo: "#EF4444",
        button: "#004BA7",
        heading: "#B0493A",
        footer: "#004BA8",
      },
      backgroundColor: {
        primary: "#EBEDF2",
        footer: "#004BA8",
      },
    },
  },
  plugins: [],
};
