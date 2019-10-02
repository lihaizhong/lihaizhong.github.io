# Vuepress 博客主题

继承自[@vuepress/theme-blog](https://github.com/ulivz/vuepress-theme-blog)

本主题主要是在`@vuepress/theme-blog`的基础上，添加了评论功能，评论使用的是`gitalk`插件。

## 配置

```javascript
module.exports = {
  themeConfig: {
    commentConfig: {
      clientID: '',
      clientSecret: '',
      repo: 'rats',
      owner: 'lihaizhong',
      admin: ['lihaizhong']
    }
  }
}
```

注意：`commentConfig`的具体配置与`gitalk`一致。
