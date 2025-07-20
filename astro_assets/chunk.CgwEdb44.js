import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';

const frontmatter = {
  "title": "什么是跨域？产生跨域的原因是什么？如何解决跨域问题",
  "category": "浏览器相关",
  "pubDate": "Tue, 15 Jul 2025 21:58:43 +0800",
  "heroImage": "",
  "draft": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "什么是跨域",
    "text": "什么是跨域？"
  }, {
    "depth": 2,
    "slug": "产生跨域的原因同源策略",
    "text": "产生跨域的原因：同源策略"
  }, {
    "depth": 2,
    "slug": "跨域问题的解决方法",
    "text": "跨域问题的解决方法"
  }, {
    "depth": 3,
    "slug": "1-服务端设置-cors-cross-origin-resource-sharing跨域资源共享",
    "text": "1. 服务端设置 CORS （Cross-Origin Resource Sharing，跨域资源共享）"
  }, {
    "depth": 4,
    "slug": "原理",
    "text": "原理"
  }, {
    "depth": 4,
    "slug": "常用响应头设置",
    "text": "常用响应头设置"
  }, {
    "depth": 3,
    "slug": "2-代理服务器前端代理",
    "text": "2. 代理服务器（前端代理）"
  }, {
    "depth": 4,
    "slug": "原理-1",
    "text": "原理"
  }, {
    "depth": 3,
    "slug": "3-jsonpjson-with-padding",
    "text": "3. JSONP（JSON with Padding）"
  }, {
    "depth": 4,
    "slug": "原理-2",
    "text": "原理"
  }, {
    "depth": 4,
    "slug": "局限性",
    "text": "局限性"
  }, {
    "depth": 3,
    "slug": "4-iframe--跨域通信-api",
    "text": "4. iframe + 跨域通信 API"
  }, {
    "depth": 4,
    "slug": "原理-3",
    "text": "原理"
  }, {
    "depth": 3,
    "slug": "5-其他方法",
    "text": "5. 其他方法"
  }, {
    "depth": 2,
    "slug": "总结",
    "text": "总结"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "什么是跨域",
      children: "什么是跨域？"
    }), "\n", createVNode(_components.p, {
      children: ["跨域是指浏览器从一个域名的网页去请求另一个域名的资源时，由于浏览器的 ", createVNode(_components.strong, {
        children: "同源策略"
      }), " 限制而产生的限制。这里的“域”由 ", createVNode(_components.strong, {
        children: "协议"
      }), "、", createVNode(_components.strong, {
        children: "域名"
      }), "、", createVNode(_components.strong, {
        children: "端口"
      }), " 三部分组成，只要三者中有任何一个不同，就会被视为 ", createVNode(_components.strong, {
        children: "跨域"
      }), "。"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "http://www.example.com"
        }), " 与 ", createVNode(_components.code, {
          children: "https://www.example.com"
        }), "（协议不同） -> 跨域"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "http://www.example.com"
        }), " 与 ", createVNode(_components.code, {
          children: "http://api.example.com"
        }), " （域名不同） -> 跨域"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "http://www.example.com:8080"
        }), " 与 ", createVNode(_components.code, {
          children: "http://www.example.com"
        }), " （端口不同） -> 跨域"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "产生跨域的原因同源策略",
      children: "产生跨域的原因：同源策略"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "同源策略"
      }), "是浏览器的一种安全机制，目的是防止不同域名的网页之间进行恶意数据交互，保护用户信息安全。其核心限制包括："]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "禁止跨域读取 Cookie、LocalStorage、SessionStorage 等本地存储。"
      }), "\n", createVNode(_components.li, {
        children: "禁止跨域操作 DOM （如 iframe 嵌套的跨域页面）。"
      }), "\n", createVNode(_components.li, {
        children: "禁止跨域发现 AJAX/Fetch 请求（即本文重点解决的跨域问题）。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "正式由于同源策略的存在，当前端页面与后端接口的域名、协议或端口不一致时，就会出现跨域请求被拦截的问题。"
    }), "\n", createVNode(_components.h2, {
      id: "跨域问题的解决方法",
      children: "跨域问题的解决方法"
    }), "\n", createVNode(_components.p, {
      children: "根据场景不同，跨域问题有多种解决方案，以下是常用方法："
    }), "\n", createVNode(_components.h3, {
      id: "1-服务端设置-cors-cross-origin-resource-sharing跨域资源共享",
      children: "1. 服务端设置 CORS （Cross-Origin Resource Sharing，跨域资源共享）"
    }), "\n", createVNode(_components.p, {
      children: "这是最推荐的解决方案，通过服务器在响应头中设置允许跨域的规则，明确告知浏览器允许哪些域名的请求。"
    }), "\n", createVNode(_components.h4, {
      id: "原理",
      children: "原理"
    }), "\n", createVNode(_components.p, {
      children: ["浏览器在发送跨域请求时，会先发送一个“预检请求”（OPTIONS方法），询问服务器是否允许跨域。服务器通过响应头 ", createVNode(_components.code, {
        children: "Access-Control-Allow-*"
      }), " 告知允许的范围，浏览器根据响应决定是否继续发送实际请求。"]
    }), "\n", createVNode(_components.h4, {
      id: "常用响应头设置",
      children: "常用响应头设置"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "Access-Control-Allow-Origin: http://www.client.com"
        }), " -> 允许指定域名跨域（* 表示允许所有域名，不推荐生产环境使用）。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "Access-Control-Allow-Methods: GET, POST, PUT, DELETE"
        }), " -> 允许的 HTTP 方法。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "Access-Control-Allow-Headers: Content-Type, Authorization"
        }), " -> 允许的请求头。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "Access-Control-Allow-Credentials: true"
        }), " -> 允许跨域请求携带 Cookie（此时 ", createVNode(_components.code, {
          children: "Access-Control-Allow-Origin"
        }), " 不能为 ", createVNode(_components.code, {
          children: "*"
        }), "，需指定具体域名）。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "适用场景"
      }), "：前后端分离项目，后端接口可自主配置（如 Java、Node.js等后端服务）。"]
    }), "\n", createVNode(_components.h3, {
      id: "2-代理服务器前端代理",
      children: "2. 代理服务器（前端代理）"
    }), "\n", createVNode(_components.p, {
      children: "通过前端工程化工具（如 Webpack、Vite）配置代理，将跨域请求转发为同源请求，避开浏览器的同源策略限制。"
    }), "\n", createVNode(_components.h4, {
      id: "原理-1",
      children: "原理"
    }), "\n", createVNode(_components.p, {
      children: ["开发环境中，前端启动的本地服务器（如 ", createVNode(_components.code, {
        children: "http://localhost:3000"
      }), "）与后端接口（如 ", createVNode(_components.code, {
        children: "http://api.server.com"
      }), "）跨域时，可配置代理规则：当前端请求 ", createVNode(_components.code, {
        children: "/api/data"
      }), " 时，代理服务器自动转发到 ", createVNode(_components.code, {
        children: "http://api.server.com/api/data"
      }), "。由于代理服务器与前端页面同源（均为 ", createVNode(_components.code, {
        children: "localhost:3000"
      }), "），因此不会触发跨域限制。"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "js",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// webpack.config.js"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "module"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "exports"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  devServer: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    proxy: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "      '/api'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        target: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'http://api.server.com'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 目标接口域名"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        changeOrigin: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "true"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 允许跨域"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        pathRewrite: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "          '^/api'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "''"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        } "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 去除请求路径中的 /api 前缀（可选）"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    }"
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
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "适用场景"
      }), "：开发环境下的跨域调试，无需修改后端代码。"]
    }), "\n", createVNode(_components.h3, {
      id: "3-jsonpjson-with-padding",
      children: "3. JSONP（JSON with Padding）"
    }), "\n", createVNode(_components.p, {
      children: ["这是一种古老的跨域方案，利用 ", createVNode(_components.code, {
        children: "<script>"
      }), " 标签不受同源策略限制的特性实现跨域请求。"]
    }), "\n", createVNode(_components.h4, {
      id: "原理-2",
      children: "原理"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["前端定义一个回调函数（如 ", createVNode(_components.code, {
          children: "handleData"
        }), "），用于接收后端返回的数据。"]
      }), "\n", createVNode(_components.li, {
        children: ["前端动态创建 ", createVNode(_components.code, {
          children: "<script>"
        }), " 标签，", createVNode(_components.code, {
          children: "src"
        }), " 指向后端接口，并在 URL 中携带回调函数名（如 ", createVNode(_components.code, {
          children: "http://api.server.com/data?callback=handleData"
        }), "）。"]
      }), "\n", createVNode(_components.li, {
        children: ["后端接收到请求后，将数据包裹在回调函数中返回（如 ", createVNode(_components.code, {
          children: "handleData({ name: 'xxx' })"
        }), "）。"]
      }), "\n", createVNode(_components.li, {
        children: ["前端 ", createVNode(_components.code, {
          children: "<script>"
        }), " 标签加载后，自动执行回调函数，获取数据。"]
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "js",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 前端"
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
            children: " handleData"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "data"
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
              color: "#E1E4E8"
            },
            children: "  console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'跨域'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", data);"
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
            children: " script"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " document."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "createElement"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'script'"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "script.src "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'http://api.server.com/data?callback=handleData'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "document.body."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "appendChild"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(script);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 后端"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "app."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "get"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'/data'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", ("
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
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " data"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { name: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'跨域数据'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " };"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " callback"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " req.query.callback;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  res."
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
              color: "#9ECBFF"
            },
            children: "`${"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "callback"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "}(${"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "JSON"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "stringify"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "data"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "})`"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 返回回调函数包裹的数据"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "});"
          })
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "局限性",
      children: "局限性"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "仅支持 GET 请求，不支持 POST、PUT 等方法。"
      }), "\n", createVNode(_components.li, {
        children: "安全性低，可能遭受 XSS 攻击（需后端严格过滤数据）。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "适用场景"
      }), "：老旧系统兼容，或无法使用 CORS 的场景。"]
    }), "\n", createVNode(_components.h3, {
      id: "4-iframe--跨域通信-api",
      children: "4. iframe + 跨域通信 API"
    }), "\n", createVNode(_components.p, {
      children: ["当需要在两个跨域的 iframe 页面之间通信时，可使用 ", createVNode(_components.code, {
        children: "postMessage"
      }), " API。"]
    }), "\n", createVNode(_components.h4, {
      id: "原理-3",
      children: "原理"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["发送方通过 ", createVNode(_components.code, {
          children: "window.postMessage(data, targetOrigin)"
        }), " 向目标窗口发送数据，", createVNode(_components.code, {
          children: "targetOrigin"
        }), " 指定允许接收的域名（", createVNode(_components.code, {
          children: "*"
        }), " 表示允许所有）。"]
      }), "\n", createVNode(_components.li, {
        children: ["接收方通过监听 ", createVNode(_components.code, {
          children: "message"
        }), " 事件（", createVNode(_components.code, {
          children: "window.addEventListener('message', (e) => { ... })"
        }), "）接收数据，并验证发送方的域名是否可信（e.origin）。"]
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "js",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 父页面（http://parent.com）向子 iframe（http://child.com）发送数据"
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
            children: " iframe"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " document."
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
            children: "'childIframe'"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "iframe.contentWindow."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "postMessage"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "({ type: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'hello'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " }, "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'http://child.com'"
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
            children: "// 子 iframe 页面接收数据"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "window."
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
            children: "e"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // 验证发送方域名"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (e.origin "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "==="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'http://parent.com'"
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
              color: "#E1E4E8"
            },
            children: "    console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'接收数据：'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", e.data);"
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
            children: "});"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "适用场景"
      }), "：iframe 嵌套跨域页面的通信（如第三方登录、嵌入第三方组件）。"]
    }), "\n", createVNode(_components.h3, {
      id: "5-其他方法",
      children: "5. 其他方法"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Nginx 反向代理"
        }), "：通过 Nginx 服务器配置跨域转发，将客户端请求代理到后端接口，本质与前端代理类似，但适用于生产环境。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "WebSocket"
        }), "：WebSocket 协议本身不限制跨域，可通过 ", createVNode(_components.code, {
          children: "ws://"
        }), " 或 ", createVNode(_components.code, {
          children: "wss://"
        }), " 协议实现跨域实时通信（如聊天应用）。"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "总结",
      children: "总结"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "首选方案"
        }), "：服务器端配置 CORS（简单、安全、支持所有 HTTP 方法）。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "开发环境"
        }), "：使用 Webpack/Vite 代理（无需后端配合，方便调试）。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "特殊场景"
        }), "：JSONP（仅 GET 请求）、postMessage（iframe 通信）、Nginx代理（生产环境部署）。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "选择方案时需结合项目实际（如前后端控制权、请求类型、安全性要求），有限使用标准且安全的 CORS 方案。"
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

const url = "src/content/interview/%E4%BB%80%E4%B9%88%E6%98%AF%E8%B7%A8%E5%9F%9F%EF%BC%9F%E4%BA%A7%E7%94%9F%E8%B7%A8%E5%9F%9F%E7%9A%84%E5%8E%9F%E5%9B%A0%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3%E8%B7%A8%E5%9F%9F%E9%97%AE%E9%A2%98.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/什么是跨域？产生跨域的原因是什么？如何解决跨域问题.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/什么是跨域？产生跨域的原因是什么？如何解决跨域问题.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
