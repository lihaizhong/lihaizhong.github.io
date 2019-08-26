# nodeppt 使用指南

## 参考文档

https://nodeppt.js.org

## 指令

```bash
# create a new slide with an official template
$ nodeppt new slide.md

# create a new slide straight from a github template
$ nodeppt new slide.md -t username/repo

# start local sever show slide
$ nodeppt serve slide.md

# to build a slide
$ nodeppt build slide.md
```

## 配置

```markdown
title: 演讲主题
speaker: 演讲者
url: 地址
js: js文件数组，放到body之前
css: css文件数组，放到头部
prismTheme: prism配色，取值范围`dark`、`coy`、`funky`、`okaidia`、`tomorrow`、`solarizedlight`、`twilight`
plugins: 插件。目前支持`echarts`、`mermaid`、`katex`插件
```

### nodeppt默认配置

```javascript
/**
 * @file 默认配置
 */
module.exports = () => ({
    // project deployment base
    baseUrl: '/',

    // where to output built files
    outputDir: 'dist',

    // where to put static assets (js/css/img/font/...)
    assetsDir: '',

    // filename for index.html (relative to outputDir)
    indexPath: 'index.html',
    // 插件，包括 markdown 和 posthtml
    plugins: [],
    // chainWebpack: [],

    // whether filename will contain hash part
    filenameHashing: true,

    // boolean, use full build?
    runtimeCompiler: false,

    // deps to transpile
    transpileDependencies: [
        /* string or regex */
    ],

    // sourceMap for production build?
    productionSourceMap: true,

    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: () => {
        try {
            return require('os').cpus().length > 1;
        } catch (e) {
            return false;
        }
    },

    // multi-page config
    pages: undefined,

    // <script type="module" crossorigin="use-credentials">
    // #1656, #1867, #2025
    crossorigin: undefined,

    // subresource integrity
    integrity: false,

    css: {
        extract: true
        // modules: false,
        // localIdentName: '[name]_[local]_[hash:base64:5]',
        // sourceMap: false,
        // loaderOptions: {}
    },

    devServer: {
        /*
      host: '0.0.0.0',
      port: 8080,
      https: false,
      proxy: null, // string | Object
      before: app => {}
    */
    }
});
```

## 快捷键

- Page: ↑/↓/←/→ Space Home End
- Fullscreen: F
- Overview: -/+
- Speaker Note: N
- Grid Background: Enter
