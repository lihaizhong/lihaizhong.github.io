const id = "即时通信技术——SSE.mdx";
						const collection = "blog";
						const slug = "即时通信技术sse";
						const body = "import wxRequest from \"../../assets/request.png\";\n\n有这样一种场景，我们提交了一份表单，服务端进行处理。由于这份表单的处理非常复杂，服务端接收到表单就直接进行了响应，然后异步处理这份表单。但是前端需要表单处理完成才能执行下一步动作，你们会使用什么方式呢？\n\n没错，其实处理这类问题的方式有很多种。比如：\n\n- 轮询\n- 长轮询\n- WebSocket\n- SSE\n\n下面我就对以上几种方式做一个简单介绍与比较，方便大家的理解。\n\n## 简单介绍\n\n### 轮询\n\n**轮询**这个名词也许让你感觉很高大上的样子，其实它就是间断性的请求接口，直到接口返回我们想要的数据为止。轮询的方式固然简单易懂，但是额外的轮询会导致更高的HTTP开销。\n\n### 长轮询\n\n**长轮询（挂起GET/COMET）** 是轮询的轻微变体。在长轮询中，如果服务器没有可用的数据，则服务器会让请求保持打开状态，直到有新数据可用。如果数据可用，服务器会响应数据并关闭连接，客户端接收到数据后需要重新发起一个新的连接，如此往复。这样就可以持续从服务端获取实时数据了。\n\n### WebSocket\n\n**WebSocket** 可以在浏览器和服务器之间建立一条双向通信的通道，实现服务器主动向浏览器推送消息的能力（不需要浏览器向服务器不断发送请求）。其原理是在浏览器和服务器之间建立一个“套接字（Socket）”，通过“握手”的方式进行数据传输。由于该协议需要浏览器和服务器都支持，因此需要在应用程序中对其进行判断和处理。\n\n### SSE\n\n**SSE** 是基于HTTP协议的。浏览器与服务端建立一个长连接，通过流数据的形式传输数据。浏览器端，通过EventSource对象，与服务端建立连接，并通过事件的方式监听响应。在服务端，SSE要求服务端响应数据必须使用`text/event-stream`来传输数据。另外，SSE还支持**自动重连**、**事件ID**和**自定义事件**的功能。\n\n## SSE数据的基本结构\n\nSSE是通过事件来响应实时数据的。每个事件之间通过空行来分隔。对于每一行来说，冒号（“:”）前面表示的是该行的类型，冒号后面则是对应的值。可能的类型包括：\n\n- 类型为空白，表示该行是注释，会在处理时被忽略。\n- 类型为 data，表示该行包含的是数据。以 data 开头的行可以出现多次。所有这些行都是该事件的数据。\n- 类型为 event，表示该行用来声明事件的类型。浏览器在收到数据时，会产生对应类型的事件。\n- 类型为 id，表示该行用来声明事件的标识符。\n- 类型为 retry，表示该行用来声明浏览器在连接断开之后进行再次连接之前的等待时间。\n\n## 如何使用SSE\n\n### 服务端\n\n```javascript\nclass ServerSentEvents {\n  constructor(req, res) {\n    this.request = req;\n    this.response = res;\n    this.count = 0;\n\n    // 必须设置这个headers\n    res.writeHead(200, {\n      \"Content-Type\": \"text/event-stream\",\n      Connection: \"keep-alive\",\n      \"Cache-Control\": \"no-cache\",\n    });\n  }\n\n  /**\n   * 自定义事件--连接\n   */\n  connect() {\n    this.response.write(\"event: connected\\n\");\n    this.response.write(\"data: You are now subscribed\\n\");\n    this.response.write(`id: ${this.count}\\n\\n`);\n    this.count += 1;\n  }\n\n  /**\n   * 通用事件--消息\n   */\n  send(message) {\n    this.response.write(\"event: message\\n\");\n    this.response.write(`data: ${message}\\n`);\n    this.response.write(`id: ${this.count}\\n\\n`);\n    this.count += 1;\n  }\n\n  /**\n   * 关闭连接\n   */\n  close() {\n    this.response.end('OK');\n  }\n}\n\n// router function\nfunction subscribe(req, res) {\n   const sse = new ServerSentEvents(req, res)\n\n   // Send a message on connection\n   sse.connect();\n\n   // Send a subsequent message every five seconds\n   setInterval(() => {\n   sse.send(new Date().toLocaleString());\n   }, 5000);\n\n   // Close the connection when the client disconnects\n   req.on(\"close\", () => sse.close());\n}\n```\n\n### 浏览器端\n\n```javascript\n/**\n * 警告：当不通过HTTP/2使用时，SSE（server-sent events）会受到最大连接数的限制，这在打开多个选项卡时特别麻烦，\n * 因为该限制时针对每个浏览器的，并且被设置为一个非常低的数字（6）。该问题在Chrome和Firefox中被标记为”不会解决“。\n * 此限制是针对每个浏览器+域的，因此这意味着你可以跨所有选项卡打开6个SSE连接到www.example1.com，并打开6个SSE连\n * 接到www.example2.com。\n * 使用HTTP/2时，同一时间内HTTP最大连接数由服务器和客户端之间协商（默认为100）。\n */\nconst subscription = new EventSource('/subscribe');\n\n// Default Events\nsubscription.addEventListener('open', () => {\n  writeMessage('Connection opened');\n});\n\nsubscription.addEventListener('error', (err) => {\n  writeError(err);\n});\n\nsubscription.addEventListener('message', (event) => {\n  writeMessage(event.data);\n});\n\n// Define Custom Events\nsubscription.addEventListener('connected', () => {\n  writeMessage('Subscription successful');\n});\n\ndocument.getElementById('close-btn').addEventListener('click', () => {\n  subscription.close();\n  writeMessage('Subscription closed');\n}, false);\n```\n\n这样SSE整套流程就已经完成了。相对于WebSocket，SSE对服务端非常友好，只需要很小的改动，就可以支持整套流程。\n\n## 小程序如何做兼容\n\n<img src={wxRequest.src} alt=\"wx.request\" width=\"600\" />\n\n我们看到虽然微信不支持完整的SSE，但是通过`enableChunked`属性我们可以实现接受不了流式数据。如果需要，通过我们合理的封装，完全可以实现绝大部分SSE功能。\n\n## SSE与WebSocket\n\n|                    | SSE  | WebSocket |\n|:------------------:|:----:|:---------:|\n| 是否支持服务端下发 |  是  |    是     |\n|  是否支持相互通信  |  否  |    是     |\n|  是否支持断线重连  |  是  |    否     |\n|  是否支持断点续传  |  是  |    否     |\n|   服务端接入成本   | 简单 |   复杂    |\n| 是否支持自定义事件 |  是  |    否     |\n\n## 总结\n\n好了，这就是SSE基本的功能与实现。SSE支持**自动重连**、**事件ID**和**自定义事件**的功能很大程度上减少了我们额外的开发工作。在我接触到的大部分场景，它比WebSocket更适合。从操作难易度来说，它比WebSocket更具有优势。所以如果你遇到这种需要异步处理的场景，可以优先考虑下它。\n";
						const data = {title:"即时通信技术——SSE",description:"有时候服务端并不能及时更新数据，导致客户端需要通过一些手段来获取真正最新的数据。这类的手段有很多种，例如轮询、长轮询、WebSocket以及我们今天要讲的SSE通信技术。这篇文章主要介绍SSE的使用以及它与其它技术之间的异同。",pubDate:new Date(1700507647000),heroImage:""};
						const _internal = {
							type: 'content',
							filePath: "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/blog/即时通信技术——SSE.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };