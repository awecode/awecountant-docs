const path = require("path");

module.exports = {
  title: "Awecountant: Docs",
  description: "Documentation for the project Awecountant.",
  themeConfig: {
    lastUpdated: "Last Updated",
    sidebar: "auto",
    displayAllHeaders: true,
    sidebarDepth: 2,
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "Modules", link: "/modules/" },
      { text: "Architecture", link: "/architecture/" },
      { text: "Awecountant", link: "https://awecountant.com" }
    ]
    // sidebar: {
    //   "/sales/": ["", "sales-voucher"]
    // }
  },
  markdown: {
    plugins: [
      "vuepress-plugin-export",
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
