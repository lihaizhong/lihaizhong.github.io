const path = require('path')
const { description } = require('../../package.json')
const getContainerSetting = require('./utils/getContainerSetting')

module.exports = {
  title: '白夜漫记',
  description,
  // $withBase VuePress 内置 base 引用 helper
  base: process.env.NODE_ENV === 'production' ? '/glass/' : '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
    // ['script', { src: '/weixin-1.4.0.js' }]
  ],
  theme: '@vuepress/blog',
  themeConfig: {
    summary: true,
    summaryLength: 140,
    nav: [
      // { text: '主页', link: '/' }
      // { text: '归档', link: '/archive/' }
    ],
    footer: {
      contact: [{ type: 'github', link: 'https://github.com/lihaizhong' }],
      copyright: [
        {
          text: 'Powered by VuePress | SKY @ 1992-present',
          link: 'https://vuepress.vuejs.org/'
        }
      ]
    },
    modifyBlogPluginOptions(blogPluginOptions) {
      const postDirectoryClassifierIndex = blogPluginOptions.directories.findIndex(
        d => d.id === 'post'
      )

      blogPluginOptions.directories[postDirectoryClassifierIndex][
        'itemPermalink'
      ] = '/post/:year/:month/:day/:slug'
      console.log('修改主题中的post配置')

      const archiveDirectoryClassifierIndex = blogPluginOptions.directories.findIndex(
        d => d.id === 'archive'
      )
      blogPluginOptions.directories.splice(archiveDirectoryClassifierIndex, 1)
      console.log('删除主题中的archive配置')
      console.log(JSON.stringify(blogPluginOptions, null, 2))
      return blogPluginOptions
    }
  },
  markdown: {
    lineNumbers: true,
    anchor: {
      permalink: true,
      permalinkBefore: true,
      permalinkSymbol: '&sect;'
    }
  },
  plugins: [
    [
      '@vuepress/plugin-medium-zoom',
      {
        selector: '.vuepress-blog-theme-content img',
        options: { background: 'rgba(255, 255, 255, 0.4)' }
      }
    ],
    ...getContainerSetting()
  ],
  chainWebpack: config => {
    config.resolve.alias.set('http$', path.resolve(__dirname, 'services'))
  },
  evergreen: true
}
