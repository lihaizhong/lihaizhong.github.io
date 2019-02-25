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
  // Google Analytics ID
  ga: 'UA-134520339-1',
  plugins: [
    [
      '@vuepress/pagination',
      {
        postsSorter: (prev, next) => {
          const prevTime = new Date(prev.frontmatter.created).getTime()
          const nextTime = new Date(next.frontmatter.created).getTime()
          return prevTime - nextTime > 0 ? -1 : 1
        }
      }
    ],
    ['@vuepress/blog'],
    ['@vuepress/medium-zoom', { selector: '.content img' }]
  ],
  evergreen: true
}
