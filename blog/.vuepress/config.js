const { description } = require('../../package.json')

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
    ['@vuepress/blog', { permalink: '/post/:slug' }],
    '@vuepress/medium-zoom',
    'clean-urls',
    [
      'container',
      {
        type: 'tip',
        defaultTitle: '提示'
      }
    ],
    [
      'container',
      {
        type: 'warning',
        defaultTitle: '注意'
      }
    ],
    [
      'container',
      {
        type: 'danger',
        defaultTitle: '危险'
      }
    ]
  ],
  evergreen: true
}
