const { description } = require('../package.json')

module.exports = {
  title: '白夜漫记',
  description,
  // $withBase VuePress 内置 base 引用 helper
  base: '/',
  head: [['link', { ref: 'icon', href: '/favicon.ico' }]],
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
    '@vuepress/medium-zoom',
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-134520339-1' // Google Analytics ID
      }
    ]
  ],
  evergreen: true
}
