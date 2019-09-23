# nodeppt 使用指南

## 参考文档

教程：https://nodeppt.js.org

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

### 默认模板

```markdown
title: [title]
speaker: 桑白皮
prismTheme: okaidia

<slide class="bg-apple aligncenter" image=".dark">

# [title] {.text-landing.text-shadow}

By sky {.text-intro}
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

## 教程

### 样式配置

#### 排版

| 类名           | 描述           | 用途                   |
|:---------------|:-------------|:---------------------|
| .text-landing  | 全大写的文字   | 主要用于标题           |
| .text-subtitle | 副标题         | 主要用于副标题         |
| .text-intro    | 内容介绍       | 主要用于介绍           |
| .text-shadow   | 文字的阴影效果 | 主要用于美化文字       |
| .text-data     | 数字的展示     | 主要用于数字的展示     |
| .text-content  | 文本内容展示   | 主要用于文本信息的展示 |
| .text-cols     | 内容排列       | 内容列的排版           |

#### 背景颜色

| 类名          | 十六进制值 |
|:--------------|:-----------|
| .bg-primary   | #44d       |
| .bg-secondary | #67d       |
| .bg-light     | #edf2f7    |
| body          | #f7f9fb    |

| 类名           | 十六进制值 |
|:---------------|:-----------|
| .bg-black      | #111       |
| .bg-black-blue | #123       |
| .bg-white      | #fff       |

| 类名       | 十六进制值 |
|:-----------|:-----------|
| .bg-red    | #c23       |
| .bg-green  | #077       |
| .bg-blue   | #346       |
| .bg-purple | #62b       |

| 类名            | 十六进制值               |
|:----------------|:-------------------------|
| .bg-trans-dark  | rgba(0, 0, 0, 0.5)       |
| .bg-trans-light | rgba(255, 255, 255, 0.2) |

| 类名           | 十六进制值                                                 |
|:---------------|:-----------------------------------------------------------|
| .bg-gradient-h | Horizontal linear-gradient(134deg,#32b,#62b)               |
| .bg-gradient-r | Radial radial-gradient(ellipse at center,#62b 0,#32b 100%) |
| .bg-gradient-v | Vertical linear-gradient(0deg,#62b 0,#32b)                 |

#### 背景图片

| 类名                      |
|:--------------------------|
| .background-video         |
| .background-top           |
| .background-bottom        |
| .background-center        |
| .background-center-top    |
| .background-right-top     |
| .background-left-top      |
| .background-center-bottom |
| .background-left          |
| .background-left-bottom   |
| .background-right         |
| .background-right-bottom  |

#### 组件/元件

| 组件                       |
|:---------------------------|
| :::shadowbox               |
| :::card                    |
| :::flexblock{.specs}       |
| :::gallery                 |
| :::gallery-overlay         |
| :::column{.vertical-align} |
| :::steps                   |
| :::cta                     |
| :::header                  |
| :::footer                  |
| :::[html]                  |
| :::{.content-left}         |
| :::{.content-center}       |
| :::{.content-right}        |
|
