import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#050314",
        secondary: "#411fd1",
        tertiary: "#160b4a",
      },
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
        Oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
