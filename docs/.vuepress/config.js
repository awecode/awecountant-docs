const path = require("path");

module.exports = {
  title: "Awecountant: Docs",
  description: "Documentation for the project Awecountant.",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Sales", link: "/sales/" },
      { text: "Awecountant", link: "https://awecountant.com" }
    ],
    sidebar: {
      "/sales/": ["", "sales-voucher"]
    }
  },
  markdown: {
    plugins: [
      "@org/foo", // equals to @org/markdown-it-foo if exists
      [
        "markdown-it-bar",
        {
          // provide options here
        }
      ]
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "../assets")
      }
    }
  }
};
