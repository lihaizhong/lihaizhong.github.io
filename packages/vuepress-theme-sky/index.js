const getContainersSetting = require('getContainersSetting')

// module.exports = (themeConfig, ctx) => {
//   const config = {
//     extend: '@vuepress/theme-blog'
//   }

//   themeConfig.comment = themeConfig.comment || { appId: null, appKey: null }

//   const plugins = [
//     [
//       '@vuepress/plugin-medium-zoom',
//       {
//         selector: '.vuepress-blog-theme-content img',
//         options: { background: 'rgba(255, 255, 255, 0.6)' }
//       }
//     ],
//     ...getContainersSetting()
//   ]

//   config['plugins'] = plugins

//   return config
// }

module.exports = {
  extend: '@vuepress/theme-blog',
  plugins: [
    [
      '@vuepress/plugin-medium-zoom',
      {
        selector: '.vuepress-blog-theme-content img',
        options: { background: 'rgba(255, 255, 255, 0.6)' }
      }
    ],
    ...getContainersSetting()
  ]
}
