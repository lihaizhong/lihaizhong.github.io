title: ServiceWorker介绍
speaker: sky
prismTheme: okaidia

<slide class="bg-apple aligncenter">

# ServiceWorker介绍 {.text-landing.text-shadow}

By sky {.text-intro}

<slide class="bg-apple">

# ServiceWorker 特点

1. 浏览器在后台独立于网页运行的脚本。（推送通知，后台同步等）
2. 可以拦截网络和处理网络请求。（一种可编程的网络代理，处理页面发送的网络请求）
3. 是一种JavaScript Worker，无法直接访问DOM。（通过`postMessage`接口来发送消息，控制页面的通信，页面在必要时对DOM进行操作）
4. ServiceWorker在不用时会被中止，并在下次有需要时重启。ServiceWorker可以访问IndexDB API来保存数据。
5. ServiceWorker广泛地利用了原生Promise。
6. ServiceWorker必须使用https。

<slide class="bg-apple aligncenter">

# ServiceWorker生命周期

:::{.content-left}

1. 安装过程。安装会缓存某些静态资源，然后安装完毕。
2. 激活过程。激活过程可以管理旧的缓存。

注：

1. 任何资源下载失败或者缓存失败，都会导致安装失败。
2. 首次注册该ServiceWorker的页面，需要在下次加载后才能生效。

:::

:::{.content-right}

![ServiceWorker生命周期](./public/sw-lifecycle.png)

:::

<slide class="bg-apple aligncenter">

# 注册ServiceWorker

:::{.content-left}

```javascript
// 检查当前浏览器是否支持ServiceWorker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('./sw.js', { scope: '/' })
      .then(function(registration) {
        // 这里执行注册成功的代码
        console.log('ServiceWorker registration successful with scope: ', registration.scope)
      })
      .catch(function(err) {
        // 这里执行注册失败的代码
        console.log('ServiceWorker registration failed: ', err)
      })
  })
}
```

:::

::: {.content-right}

这是在页面中检查和注册ServiceWorker的方法。

通过简短的几行代码，你就能注册一个属于你自己的serviceWorker。

当然，由于我们现在的工程都是使用webpack打包编译的，所以我们可能需要借助工具的力量，帮我们完成一些操作。

```bash
npm i serviceworker-webpack-plugin -D
```

:::

<slide class="bg-apple aligncenter">

# 安装ServiceWorker

:::{.content-left}

这是编写serviceWorker的功能。

这里我们将几个静态资源缓存到了浏览器的cache中。

:::

:::{.content-right}

```javascript
// ./sw.js
const CACHE_NAME = 'my_site_cache_v1'
const URLS2CACHE = [
  '/',
  '/styles/main.css',
  '/script/main.js'
]

self.addEventListener('install', function(event) {
  function cacheAssets() {
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('opened cache')
        return cache.addAll(URLS2CACHE)
      })
      .catch(function(err) {
        console.log('cache asset fail', err)
      })
  }

  // 用于判断安装是否成功，以及安装花费的时间
  event.waitUntil(cacheAssets())
})
```

:::

<slide class="bg-apple aligncenter">

# 缓存和返回请求

:::{.content-left}

这里是获取请求，缓存响应的代码。

这里需要注意，我们需要对请求的request和响应的response都做一次克隆操作。

由于响应是一个数据流，主体只能使用一次。而我们希望将它返回给浏览器使用，并将其传递到缓存以供使用，所以需要一份克隆的副本。

:::

:::{.content-right}

```javascript
self.addEventListener('fetch', function(event) {
  function fetchAssets() {
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response
        }

        const fetchRequest = event.request.clone()

        return fetch(fetchRequest).then(function(response) {
          // 检查是否返回了有效的数据
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response
          }

          const response2Cache = response.clone()

          caches.open(CACHE_NAME)
            .then(function(cache) {
              cache.put(event.request, response2Cache)
            })

          return response
        })
      })
  }

  event.respondWith(fetchAssets())
})
```

:::

<slide class="bg-apple">

# 更新ServiceWorker{.aligncenter}

:::{.content-left}

```javascript
self.addEventListener('activate', function(event) {
  const cacheWhiteList = [
    'pages_cache_v1',
    'blog_posts_cache_v1'
  ]

  function cacheAssets() {
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhiteList.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  }

  event.waitUntil(cacheAssets())
})
```

:::

:::{.content-right}

在某个时间点上，我们需要更新ServiceWorker。我们需要遵循以下步骤：

1. 更新服务工作线程JavaScript文件。（用户导航至我们的站点时，浏览器会尝试在后台重新定义ServiceWorker的脚本文件。只要新的文件与当前文件的字节上存在差异，便会被认为是新的ServiceWorker）。
2. 新的ServiceWorker将会被启动，且将会触发`install`事件。
3. 旧的ServiceWorker仍然控制着当前的页面，新的ServiceWorker将进入`waiting`状态。
4. 当网站上当前打开的页面关闭时，旧ServiceWorker将会被终止，新的ServiceWorker将会取得控制权。
5. 新的ServiceWorker取得控制权后，将会触发`activate`事件。

:::

<slide class="bg-apple aligncenter">

# ServiceWorker的支持程度

目前ServiceWorker所有主流浏览器已经支持大部分功能了。

具体支持可查看[ServiceWorker的支持程度](https://jakearchibald.github.io/isserviceworkerready/)

**未来已来。你，准备好了吗？**
