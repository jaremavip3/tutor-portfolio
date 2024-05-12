import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        textBlack: "#323232",
        textBlackClicked: "#979797",
        textWhite: "#FFFFFF",

        secondaryPurple: "#5139c1",
        secondaryPurpleClicked: "#7461cd",
        secondaryOrange: "#ed8970",
        secondaryOrangeClicked: "#ee9b86",

        backgroundCream: "#F5F5F5",

        separator: "#bfbfbf",
      },
      backgroundImage: {
        hero: "url('/hill-image.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
