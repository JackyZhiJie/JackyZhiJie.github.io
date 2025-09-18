module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // fontFamily: {
    //   primary: "Playfair Display",
    //   secondary: "font-mono",
    //   tertiary: "Times New Roman",
    // },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1192px",
    },
    extend: {
      colors: {
        primary: "#0E1112",
        grey: "#484B4B",
        accent: "#EEF7F9",
      },
      fontFamily: {
        primary: "Playfair Display",
        secondary: "font-mono",
        tertiary: "Times New Roman",
        tc: ['"Noto Sans TC"', '"Microsoft JhengHei"', '"PingFang TC"', '"PMingLiU"', "sans-serif"],
        dfkai: ["DFKai-SB", "serif"],
        pmingliu: ['"PMingLiU"', "serif"],
      },
    },
  },
  plugins: [],
};
