const { description } = require('../../package.json')

module.exports = {
  title: '白夜漫记',
  description,
  // $withBase VuePress 内置 base 引用 helper
  base: process.env.NODE_ENV === 'production' ? '/tang/' : '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', { src: '/weixin-1.4.0.js' }]
  ],
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
    ['@vuepress/blog', { permalink: 'post/:slug' }],
    '@vuepress/medium-zoom',
    'clean-urls',
    [
      'container',
      {
        type: 'quote',
        before: '<div class="quote custom-block">',
        after: '</div>'
      }
    ],
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
