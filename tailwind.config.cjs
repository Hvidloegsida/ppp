/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
    theme: {
        extend: {
            colors: {
                pink: "#FBC7C7",
                lilla: "#5B466C",

            },
            fontFamily: {
                good: ["good-times"],
                big: ["Big Shoulders Text"],
            }
        }
    }
  };