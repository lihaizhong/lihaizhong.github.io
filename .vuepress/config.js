const { description } = require('../package.json')

module.exports = {
  title: '小白的博客园',
  description,
  // $withBase VuePress 内置 base 引用 helper
  base: '/',
  markdown: {
    lineNumbers: true
  },
  // Google Analytics ID
  ga: 'UA-134520339-1',
  plugins: [
    ['@vuepress/blog', { postsDir: 'blog' }],
    ['@vuepress/medium-zoom', { selector: '.content img' }]
  ],
  evergreen: true
}
