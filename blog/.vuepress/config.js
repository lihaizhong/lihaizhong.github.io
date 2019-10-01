const { description } = require('../../package.json')

module.exports = {
  title: 'LiHZSky',
  description,
  // $withBase VuePress 内置 base 引用 helper
  base: process.env.NODE_ENV === 'production' ? '/glass/' : '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
    // ['script', { src: '/weixin-1.4.0.js' }]
  ],
  theme: 'sky',
  themeConfig: {
    summary: true,
    summaryLength: 140,
    pwa: true,
    nav: [{ text: '主页', link: '/' }, { text: '标签', link: '/tag/' }],
    footer: {
      contact: [{ type: 'github', link: 'https://github.com/lihaizhong' }],
      copyright: [
        {
          text: 'Powered by VuePress | SKY @ 1992-present',
          link: 'https://vuepress.vuejs.org/'
        }
      ]
    },
    commentConfig: {
      // appId: 'RysmYMCCri7UDgGWuIygKhnh-gzGzoHsz',
      // appKey: '3Wf0nNASeTACEIqxqoXhHojI'
      clientID: '5854c067d3922766bab2',
      clientSecret: '2cbee53b053b9ab5db24470c3d5e814b3d9e8b9c',
      repo: 'https://github.com/lihaizhong/lihaizhong.github.io',
      owner: 'lihaizhong',
      admin: ['lihaizhong']
    },
    modifyBlogPluginOptions(pluginOptions) {
      // 查找指定内容索引
      function findIndexInDirectories(id) {
        return pluginOptions.directories.findIndex(d => d.id === id)
      }

      try {
        // 删除archive信息
        const archiveDirectoryClassifierIndex = findIndexInDirectories(
          'archive'
        )
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
      } catch (ex) {
        throw ex
      }

      // console.log('生成的options: ', JSON.stringify(pluginOptions, null, 2))

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
  evergreen: true
}
