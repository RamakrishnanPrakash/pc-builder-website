/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      pink: "#CD4275",
      lightWhite: "#d9d9d934",
    },
    fontFamily: {
      Poppins: "Poppins",
      Inter: "Inter",
      Roboto: "Roboto",
      Lobster: "Lobster",
    },
    boxShadow: {
      myshadow: "5px -5px 20px #fff",
    },
  },
};
export const plugins = [];
