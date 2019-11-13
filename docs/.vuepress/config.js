const path = require("path");
const fs = require("fs");

function getFilesInDir(directoryName) {
  let files = fs.readdirSync("docs/" + directoryName);
  return files.map(function(file) {
    return file === "index.md" ? "" : file;
  });
}

module.exports = {
  title: "Awecountant: Docs",
  description: "Documentation for the project Awecountant.",
  themeConfig: {
    lastUpdated: "Last Updated",
    repo: "awecode/awecountant-docs",
    // repoLabel: "Contribute!",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    displayAllHeaders: true,
    sidebarDepth: 2,
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "Modules", link: "/modules/" },
      { text: "Architecture", link: "/architecture/" },
      { text: "Awecountant", link: "https://awecountant.com" }
    ],
    sidebar: {
      "/guide/": [
        "",
        "manage-items",
        "inventory-ledger",
        "parties",
        "bank-account",
        "tax",
        "purchase-expense",
        "debit-note",
        "credit-note",
        "sales-invoice",
        "audit-log",
        "data-backup"
      ]
    }
  },

  plugins: ["vuepress-plugin-export"],

  configureWebpack: {
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "../assets")
      }
    }
  }
};
