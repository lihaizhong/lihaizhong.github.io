import { F as Fragment, _ as __astro_tag_component__, k as createVNode } from './chunk.D1hRkwUf.js';
import { _ as __AstroImage__ } from './chunk.CMHZInRe.js';

const wxRequest = new Proxy({"src":"/astro_assets/asset.uNL_8oPd.png","width":1096,"height":923,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/assets/request.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/assets/request.png");
							return target[name];
						}
					});

const frontmatter = {
  "title": "即时通信技术——SSE",
  "description": "有时候服务端并不能及时更新数据，导致客户端需要通过一些手段来获取真正最新的数据。这类的手段有很多种，例如轮询、长轮询、WebSocket以及我们今天要讲的SSE通信技术。这篇文章主要介绍SSE的使用以及它与其它技术之间的异同。",
  "pubDate": "Tue, 21 Nov 2023 03:14:07 +0800",
  "heroImage": "",
  "draft": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "简单介绍",
    "text": "简单介绍"
  }, {
    "depth": 3,
    "slug": "轮询",
    "text": "轮询"
  }, {
    "depth": 3,
    "slug": "长轮询",
    "text": "长轮询"
  }, {
    "depth": 3,
    "slug": "websocket",
    "text": "WebSocket"
  }, {
    "depth": 3,
    "slug": "sse",
    "text": "SSE"
  }, {
    "depth": 2,
    "slug": "sse数据的基本结构",
    "text": "SSE数据的基本结构"
  }, {
    "depth": 2,
    "slug": "如何使用sse",
    "text": "如何使用SSE"
  }, {
    "depth": 3,
    "slug": "服务端",
    "text": "服务端"
  }, {
    "depth": 3,
    "slug": "浏览器端",
    "text": "浏览器端"
  }, {
    "depth": 2,
    "slug": "小程序如何做兼容",
    "text": "小程序如何做兼容"
  }, {
    "depth": 2,
    "slug": "sse与websocket",
    "text": "SSE与WebSocket"
  }, {
    "depth": 2,
    "slug": "总结",
    "text": "总结"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "有这样一种场景，我们提交了一份表单，服务端进行处理。由于这份表单的处理非常复杂，服务端接收到表单就直接进行了响应，然后异步处理这份表单。但是前端需要表单处理完成才能执行下一步动作，你们会使用什么方式呢？"
    }), "\n", createVNode(_components.p, {
      children: "没错，其实处理这类问题的方式有很多种。比如："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "轮询"
      }), "\n", createVNode(_components.li, {
        children: "长轮询"
      }), "\n", createVNode(_components.li, {
        children: "WebSocket"
      }), "\n", createVNode(_components.li, {
        children: "SSE"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "下面我就对以上几种方式做一个简单介绍与比较，方便大家的理解。"
    }), "\n", createVNode(_components.h2, {
      id: "简单介绍",
      children: "简单介绍"
    }), "\n", createVNode(_components.h3, {
      id: "轮询",
      children: "轮询"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "轮询"
      }), "这个名词也许让你感觉很高大上的样子，其实它就是间断性的请求接口，直到接口返回我们想要的数据为止。轮询的方式固然简单易懂，但是额外的轮询会导致更高的HTTP开销。"]
    }), "\n", createVNode(_components.h3, {
      id: "长轮询",
      children: "长轮询"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "长轮询（挂起GET/COMET）"
      }), " 是轮询的轻微变体。在长轮询中，如果服务器没有可用的数据，则服务器会让请求保持打开状态，直到有新数据可用。如果数据可用，服务器会响应数据并关闭连接，客户端接收到数据后需要重新发起一个新的连接，如此往复。这样就可以持续从服务端获取实时数据了。"]
    }), "\n", createVNode(_components.h3, {
      id: "websocket",
      children: "WebSocket"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "WebSocket"
      }), " 可以在浏览器和服务器之间建立一条双向通信的通道，实现服务器主动向浏览器推送消息的能力（不需要浏览器向服务器不断发送请求）。其原理是在浏览器和服务器之间建立一个“套接字（Socket）”，通过“握手”的方式进行数据传输。由于该协议需要浏览器和服务器都支持，因此需要在应用程序中对其进行判断和处理。"]
    }), "\n", createVNode(_components.h3, {
      id: "sse",
      children: "SSE"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "SSE"
      }), " 是基于HTTP协议的。浏览器与服务端建立一个长连接，通过流数据的形式传输数据。浏览器端，通过EventSource对象，与服务端建立连接，并通过事件的方式监听响应。在服务端，SSE要求服务端响应数据必须使用", createVNode(_components.code, {
        children: "text/event-stream"
      }), "来传输数据。另外，SSE还支持", createVNode(_components.strong, {
        children: "自动重连"
      }), "、", createVNode(_components.strong, {
        children: "事件ID"
      }), "和", createVNode(_components.strong, {
        children: "自定义事件"
      }), "的功能。"]
    }), "\n", createVNode(_components.h2, {
      id: "sse数据的基本结构",
      children: "SSE数据的基本结构"
    }), "\n", createVNode(_components.p, {
      children: "SSE是通过事件来响应实时数据的。每个事件之间通过空行来分隔。对于每一行来说，冒号（“:”）前面表示的是该行的类型，冒号后面则是对应的值。可能的类型包括："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "类型为空白，表示该行是注释，会在处理时被忽略。"
      }), "\n", createVNode(_components.li, {
        children: "类型为 data，表示该行包含的是数据。以 data 开头的行可以出现多次。所有这些行都是该事件的数据。"
      }), "\n", createVNode(_components.li, {
        children: "类型为 event，表示该行用来声明事件的类型。浏览器在收到数据时，会产生对应类型的事件。"
      }), "\n", createVNode(_components.li, {
        children: "类型为 id，表示该行用来声明事件的标识符。"
      }), "\n", createVNode(_components.li, {
        children: "类型为 retry，表示该行用来声明浏览器在连接断开之后进行再次连接之前的等待时间。"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "如何使用sse",
      children: "如何使用SSE"
    }), "\n", createVNode(_components.h3, {
      id: "服务端",
      children: "服务端"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "class"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " ServerSentEvents"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  constructor"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "req"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "res"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".request "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " req;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".response "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " res;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".count "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // 必须设置这个headers"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    res."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "writeHead"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "200"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "      \"Content-Type\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"text/event-stream\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      Connection: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"keep-alive\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "      \"Cache-Control\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"no-cache\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    });"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  /**"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "   * 自定义事件--连接"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "   */"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  connect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".response."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "write"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"event: connected"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".response."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "write"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"data: You are now subscribed"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".response."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "write"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "`id: ${"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "this"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "count"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\n\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "`"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".count "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  /**"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "   * 通用事件--消息"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "   */"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  send"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "message"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".response."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "write"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"event: message"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".response."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "write"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "`data: ${"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "message"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "`"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".response."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "write"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "`id: ${"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "this"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "count"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\n\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "`"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".count "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  /**"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "   * 关闭连接"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "   */"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  close"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".response."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "end"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'OK'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// router function"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " subscribe"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "req"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "res"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "   const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " sse"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " ServerSentEvents"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(req, res)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "   // Send a message on connection"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "   sse."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "connect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "   // Send a subsequent message every five seconds"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "   setInterval"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(() "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "   sse."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "send"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "new"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Date"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "toLocaleString"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "());"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "   }, "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "5000"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "   // Close the connection when the client disconnects"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "   req."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "on"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"close\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " sse."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "close"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "());"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "浏览器端",
      children: "浏览器端"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "/**"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " * 警告：当不通过HTTP/2使用时，SSE（server-sent events）会受到最大连接数的限制，这在打开多个选项卡时特别麻烦，"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " * 因为该限制时针对每个浏览器的，并且被设置为一个非常低的数字（6）。该问题在Chrome和Firefox中被标记为”不会解决“。"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " * 此限制是针对每个浏览器+域的，因此这意味着你可以跨所有选项卡打开6个SSE连接到www.example1.com，并打开6个SSE连"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " * 接到www.example2.com。"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " * 使用HTTP/2时，同一时间内HTTP最大连接数由服务器和客户端之间协商（默认为100）。"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " */"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " subscription"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " EventSource"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'/subscribe'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Default Events"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "subscription."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "addEventListener"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'open'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  writeMessage"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Connection opened'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "subscription."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "addEventListener"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'error'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", ("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "err"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  writeError"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(err);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "subscription."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "addEventListener"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'message'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", ("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "event"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  writeMessage"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(event.data);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Define Custom Events"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "subscription."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "addEventListener"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'connected'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  writeMessage"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Subscription successful'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "document."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getElementById"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'close-btn'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "addEventListener"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'click'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  subscription."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "close"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  writeMessage"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Subscription closed'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}, "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "false"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "这样SSE整套流程就已经完成了。相对于WebSocket，SSE对服务端非常友好，只需要很小的改动，就可以支持整套流程。"
    }), "\n", createVNode(_components.h2, {
      id: "小程序如何做兼容",
      children: "小程序如何做兼容"
    }), "\n", createVNode("img", {
      src: wxRequest.src,
      alt: "wx.request",
      width: "600"
    }), "\n", createVNode(_components.p, {
      children: ["我们看到虽然微信不支持完整的SSE，但是通过", createVNode(_components.code, {
        children: "enableChunked"
      }), "属性我们可以实现接受不了流式数据。如果需要，通过我们合理的封装，完全可以实现绝大部分SSE功能。"]
    }), "\n", createVNode(_components.h2, {
      id: "sse与websocket",
      children: "SSE与WebSocket"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            style: {
              textAlign: "center"
            }
          }), createVNode(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "SSE"
          }), createVNode(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "WebSocket"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "是否支持服务端下发"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "是"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "是"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "是否支持相互通信"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "否"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "是"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "是否支持断线重连"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "是"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "否"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "是否支持断点续传"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "是"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "否"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "服务端接入成本"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "简单"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "复杂"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "是否支持自定义事件"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "是"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "否"
          })]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "总结",
      children: "总结"
    }), "\n", createVNode(_components.p, {
      children: ["好了，这就是SSE基本的功能与实现。SSE支持", createVNode(_components.strong, {
        children: "自动重连"
      }), "、", createVNode(_components.strong, {
        children: "事件ID"
      }), "和", createVNode(_components.strong, {
        children: "自定义事件"
      }), "的功能很大程度上减少了我们额外的开发工作。在我接触到的大部分场景，它比WebSocket更适合。从操作难易度来说，它比WebSocket更具有优势。所以如果你遇到这种需要异步处理的场景，可以优先考虑下它。"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/blog/%E5%8D%B3%E6%97%B6%E9%80%9A%E4%BF%A1%E6%8A%80%E6%9C%AF%E2%80%94%E2%80%94SSE.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/blog/即时通信技术——SSE.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? __AstroImage__ },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/blog/即时通信技术——SSE.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
