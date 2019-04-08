const { description } = require('../../package.json')
// const CustomPlugin = require('./extensions/plugins')

module.exports = {
  title: '白夜漫记',
  description,
  // $withBase VuePress 内置 base 引用 helper
  base: '/',
  markdown: {
    lineNumbers: true,
    anchor: {
      permalink: true,
      permalinkBefore: true,
      permalinkSymbol: '&sect;'
    }
  },
  plugins: [
    '@vuepress/pagination',
    '@vuepress/blog',
    '@vuepress/medium-zoom'
    // '@vuepress/nprogress',
    // CustomPlugin
  ],
  evergreen: true
}
