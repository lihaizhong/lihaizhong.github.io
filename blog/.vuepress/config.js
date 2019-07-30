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
  theme: '@vuepress/theme-blog',
  themeConfig: {
    summary: true,
    summaryLength: 140,
    nav: [
      { text: '主页', link: '/' },
      { text: '标签', link: '/tag/' }
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
    modifyBlogPluginOptions(pluginOptions) {
      // 查找指定内容索引
      function findIndexInDirectories(id) {
        return pluginOptions.directories.findIndex(d => d.id === id)
      }

      // 删除archive信息
      const archiveDirectoryClassifierIndex = findIndexInDirectories('archive')
      if (archiveDirectoryClassifierIndex !== -1) {
        pluginOptions.directories.splice(archiveDirectoryClassifierIndex, 1)
        console.log('删除主题中的archive配置')
      }

      // 修改post信息
      const postDirectoryClassifierIndex = findIndexInDirectories('post')
      const postItemPermalink = '/post/:year/:month/:day/:slug'
      if (postDirectoryClassifierIndex === -1) {
        const postDirectoryClassifier = {
          id: 'post',
          dirname: '_posts',
          path: '/',
          layout: 'IndexPost',
          itemLayout: 'Post',
          itemPermalink: postItemPermalink,
          pagination: {
            perPagePosts: 5
          }
        }

        pluginOptions.directories.push(postDirectoryClassifier)
        console.log('添加主题中的post配置')
      } else {
        pluginOptions.directories[
          postDirectoryClassifierIndex
        ].itemPermalink = postItemPermalink
        console.log('修改主题中的post配置')
      }

      return pluginOptions
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
  // chainWebpack: config => {
  // config.resolve.alias.set(
  //   '@SearchBox',
  //   '@vuepress/plugin-search/SearchBox.vue'
  // )
  // },
  evergreen: true
}
