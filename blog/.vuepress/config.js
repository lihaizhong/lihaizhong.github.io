module.exports = {
  title: '小白的博客园',
  description: '个人博客',
  // $withBase VuePress 内置 base 引用 helper
  base: '/',
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-blog',
    '@vuepress/plugin-medium-zoom',
    // '@vuepress/plugin-pwa',
    ['@vuepress/plugin-google-analytics', { ga: 'UA-134520339-1' }]
  ]
}
