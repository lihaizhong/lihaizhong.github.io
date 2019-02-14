module.exports = {
  title: '小白的博客园',
  description: '个人博客',
  // $withBase VuePress内置base引用helper
  base: '/',
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-blog',
    '@vuepress/plugin-medium-zoom',
    // '@vuepress/plugin-pwa',
    ['@vuepress/plugin-google-analytics', { ga: 'UA-134520339-1' }]
  ]
}
