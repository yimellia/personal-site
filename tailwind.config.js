/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            lightbeige: "#F1ECEA",
            beige: "#E7DFD8",
            lightbrown: "#735E59",
            brown: "#473C38",
            darkbrown: "#544541",
        },
    },
  },
  plugins: [],
}

