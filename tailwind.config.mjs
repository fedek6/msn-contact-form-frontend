/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        warsaw: ["Warsaw", "sans-serif"],
        theinhardt: ["Theinhardt", "sans-serif"],
      },
      container: {
        center: true, // if you want to center the container
        padding: "2rem", // custom padding
        screens: {
          xl: "1200px",
          "2xl": "1500px",
        },
      },
      fontSize: {
        xs: "0.64rem",
        sm: "0.8rem",
        base: "1rem",
        lg: "1.25rem",
        xl: "1.563rem",
        "2xl": "1.953rem",
        "3xl": "2.441rem",
        "4xl": "3.052rem",
        "5xl": "3.815rem",
      },
    },
  },
  plugins: [],
};
