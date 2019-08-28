# 博客仓库

小白的个人博客仓库

```bash
# 新建博客
npm run create

# 开发环境运行
npm run dev

# 构建生产环境
npm run build

# 发布构建包
pm2 deploy ecosystem.config.js production
```

## serve

```bash
# serve 本地启动
serve -p [port] [dist]
```

## nodeppt

```bash
# nodeppt 创建新的ppt
nodeppt new [dest] -t lihaizhong/lego#nodeppt-template

# nodeppt 本地启动
nodeppt serve [dest]

# nodeppt 打包
nodeppt build [dest]
```

图片上传网站：https://upload.cc/

访问地址： https://www.stfvr.com
本地访问地址：http://localhost:8080

[stylus](http://stylus-lang.com/)
[vuepress](https://v1.vuepress.vuejs.org/zh/)
[@vuepress/theme-blog](https://vuepress-theme-blog.ulivz.com/)

**注：** 由于 github pages 对单页应用兼容不是很好，这里暂且关闭了 github pages，并将项目私有化。
