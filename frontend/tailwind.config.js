/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ],
    theme: {
      extend: {
        colors: {
          "dark": "#1E1E20",
          "light": "#F5F5F5",
          "main": "#646cff",
          "dark-gray": "#5E5E5E",
          "light-gray": "#252529"
        }
      },
    },
    plugins: [],
  }