const id = "新一代网络交互能力——FetchAPI.mdx";
						const collection = "archive";
						const slug = "新一代网络交互能力fetchapi";
						const body = "\n我们都知道原生了XMLHttpRequest是一个非常难用的API，不仅需要通过属性去判断请求当前所处的状态，还要按照一定的顺序规则去书写，保证写法能在所有浏览器都兼容，这大大提高了我们的心智负担。为了更好地使用XMLHttpRequest，有很多优秀的开源库也应运而生。开源库虽好，但毕竟会增大我们的静态资源包的大小。\n\n今天我要介绍的就是浏览器原生支持的新一代网络交互能力——FetchAPI。FetchAPI采用了全新的架构设计，支持的环境也更加丰富（除了主页面工作线程外，还包括了模块和工作线程，如WebWorker、ServiceWorker等场景）。同时，FetchAPI采用较现代的Promise接口方案，在使用上也更加方便。\n\n## 涉及的知识点\n\n- [FetchAPI](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)\n- [Headers](https://developer.mozilla.org/zh-CN/docs/Web/API/Headers)\n- [Request](https://developer.mozilla.org/zh-CN/docs/Web/API/Request)\n- [Response](https://developer.mozilla.org/zh-CN/docs/Web/API/Response)\n\n## FetchAPI与XMLHttpRequest的区别\n\nFetchAPI与XMLHttpRequest都是用于异步请求的工具。既然已经有了XMLHttpRequest，为什么还要出来一个原生的FetchAPI呢？今天我们就来讲讲他们之间的区别。\n\n|                          | FetchAPI | XMLHttpRequest |\n| :----------------------- | :------- | :------------- |\n| 使用难易度                     | 简单     | 复杂           |\n| 支持同步                 | 否       | 是             |\n| 支持异步                 | 是       | 是             |\n| 支持主页面线程中使用     | 是       | 是             |\n| 支持模块和工作线程中使用 | 是       | 否             |\n| 支持Promise              | 是       | 否             |\n| 支持事件监听             | 否       | 是             |\n| 支持跨域                 | 是       | 是             |\n| 支持取消请求             | 是       | 是             |\n| 支持超时                 | 否       | 是             |\n| 支持进度                 | 否       | 是             |\n\n**注意**：`超时功能`和`进度读取功能`虽然不是原生提供，但可以通过Fetch现有API实现。\n\n相比较而言，虽然在`超时`和`进度读取`这两项不常用的能力上，FetchAPI需要稍微费点神之外，FetchAPI的优点还是非常明显的，尤其在使用上尤为突出。FetchAPI采用Promise的方案，使得其操作方式更加现代，写法更加简洁，另外，FetchAPI除了能在主页面线程上能使用外，还能在类似WebWorker、ServiceWorker等环境中使用。\n\n## FetchAPI的使用\n\n## FetchAPI的核心\n\n## 如何实现超时功能和进度功能\n\n";
						const data = {title:"新一代网络交互能力——FetchAPI",description:"",pubDate:new Date(1671681383000)};
						const _internal = {
							type: 'content',
							filePath: "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/archive/新一代网络交互能力——FetchAPI.mdx",
							rawData: "\ntitle: \"新一代网络交互能力——FetchAPI\"\npubDate: Thu Dec 22 2022 11:56:23 GMT+0800\ndescription: \"\"",
						};

export { _internal, body, collection, data, id, slug };
