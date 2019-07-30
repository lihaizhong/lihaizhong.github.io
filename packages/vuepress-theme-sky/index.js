const removeMd = require('remove-markdown')

module.exports = (themeConfig, ctx) => {
  themeConfig = Object.assign(
    {},
    {
      modifyBlogPluginOptions: null,
      paginationComponent: null,
      summary: true,
      summaryLength: 200,
      pwa: false
    },
    themeConfig
  )

  const defaultBlogPluginOptions = {
    directories: [
      {
        id: 'post',
        dirname: '_posts',
        path: '/',
        itemLayout: 'Post',
        itemPermalink: '/post/:year/:month/:day:/:slug',
        pagination: {
          lengthPerPage: 10
        }
      }
    ],
    frontmatters: [
      {
        id: 'tag',
        keys: ['tag', 'tags'],
        path: '/tag/',
        frontmatter: { title: 'Tag' },
        pagination: {
          lengthPerPage: 10
        }
      }
    ]
  }

  const { modifyBlogPluginOptions } = themeConfig

  const blogPluginOptions =
    typeof modifyBlogPluginOptions === 'function'
      ? modifyBlogPluginOptions(defaultBlogPluginOptions)
      : defaultBlogPluginOptions

  const plugins = [
    '@vuepress/plugin-nprogress',
    ['@vuepress/plugin-medium-zoom', true],
    ['@vuepress/search', { searchMaxSuggestions: 10 }],
    ['@vuepress/blog', blogPluginOptions]
  ]

  if (themeConfig.pwa) {
    plugins.push([
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ])
  }

  const config = {
    plugins,
    define: {
      THEME_BLOG_PAGINATION_COMPONENT: themeConfig.paginationComponent
        ? themeConfig.paginationComponent
        : 'Pagination'
    }
  }

  if (themeConfig.summary) {
    config.extendPageData = function(pageCtx) {
      const strippedContent = pageCtx._strippedContent
      if (!strippedContent) {
        return
      }

      pageCtx.summary =
        removeMd(
          strippedContent
            .trim()
            .replace(/^#+\s+(.*)/, '')
            .slice(0, themeConfig.summaryLength)
        ) + '...'
    }
  }

  return config
}
