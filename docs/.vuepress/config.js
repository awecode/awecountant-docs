const path = require("path");

module.exports = {
  title: 'Awecounting',
  description: 'Documentation for the project Awecounting.',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Sales', link: '/sales/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar:  {
      '/sales/': [
        '',
        'sales-voucher', 
      ]
    },
  },
  markdown: {
    plugins: [
      '@org/foo', // equals to @org/markdown-it-foo if exists
      ['markdown-it-bar', {
        // provide options here
      }]
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@assets':  path.resolve(__dirname,"../assets")
      }
    }
  }
}