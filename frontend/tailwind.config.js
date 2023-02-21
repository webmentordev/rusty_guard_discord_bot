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
          "light": "#F5F5F5",
          "main": "#646cff",
          "least-gray": "rgba(60, 60, 67, .92)"
        }
      },
    },
    plugins: [],
  }