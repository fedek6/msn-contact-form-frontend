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
          xl: "1280px",
          "2xl": "1280px",
        },
      },
    },
  },
  plugins: [],
};
