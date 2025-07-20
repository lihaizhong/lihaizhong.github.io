import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';

const wxRequest = new Proxy({"src":"/astro_assets/asset.uNL_8oPd.png","width":1096,"height":923,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/assets/images/request.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/assets/images/request.png");
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
    "slug": "介绍",
    "text": "介绍"
  }, {
    "depth": 3,
    "slug": "轮询polling",
    "text": "轮询（Polling）"
  }, {
    "depth": 3,
    "slug": "长轮询long-polling",
    "text": "长轮询（Long Polling）"
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
    "slug": "增强版sse",
    "text": "增强版SSE"
  }, {
    "depth": 2,
    "slug": "总结",
    "text": "总结"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
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
      children: "有这样一种场景，我们提交了一份表单，服务端进行处理。由于这份表单的处理非常复杂，服务端处理需要非常长的时间或者服务端依赖第三方无法给出确切的时间，为了避免影响用户操作，你会使用什么方式呢？"
    }), "\n", createVNode(_components.p, {
      children: ["我觉得这里核心思想是将 ", createVNode(_components.strong, {
        children: "提交表单"
      }), " 和 ", createVNode(_components.strong, {
        children: "查询状态"
      }), " 拆分，这样就仅仅只是 ", createVNode(_components.strong, {
        children: "查询状态"
      }), " 的问题了。我想到了以下几种方式："]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["提交表单后，", createVNode(_components.strong, {
          children: "轮询"
        }), " 查询状态"]
      }), "\n", createVNode(_components.li, {
        children: ["提交表单后，马上发起一个 ", createVNode(_components.strong, {
          children: "长轮询"
        }), " 查询状态"]
      }), "\n", createVNode(_components.li, {
        children: ["提交表单后，通过 ", createVNode(_components.strong, {
          children: "WebSocket"
        }), " 查询状态"]
      }), "\n", createVNode(_components.li, {
        children: ["提交表单后，马上发起一个 ", createVNode(_components.strong, {
          children: "SSE"
        }), " 查询状态"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["方法有很多，我在这里就依次介绍它们的优缺点，当然重点还是讲讲我们的新工具 ", createVNode(_components.strong, {
        children: "SSE"
      }), "。"]
    }), "\n", createVNode(_components.h2, {
      id: "介绍",
      children: "介绍"
    }), "\n", createVNode(_components.h3, {
      id: "轮询polling",
      children: "轮询（Polling）"
    }), "\n", createVNode(_components.p, {
      children: "轮询是客户端按照固定时间间隔（如每1秒、每5秒）主动向服务器发送请求，询问是否有新数据。服务器收到请求后，无论是否有新数据，都会立即响应。"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["优点：\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "实现简单"
            }), "：客户端只需定时发送 HTTP 请求，服务器正常处理即可，无需特殊逻辑，开发成本低。"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "兼容性好"
            }), "：基于标准的 HTTP 协议，所有浏览器和服务器都支持，无需考虑兼容性问题。"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "资源可控"
            }), "：客户端可以通过调整轮询间隔（如用户操作时缩短间隔，空闲时延长间隔），灵活控制请求频率，减少不必要的资源消耗。"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["缺点：\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "实时性差"
            }), "：数据更新的延迟取决于轮询间隔。", createVNode(_components.em, {
              children: "例如，间隔 10 秒时，新数据可能最多延迟 10 秒才能被客户端获取。"
            })]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "资源浪费严重"
            }), "：大部分请求是“无效”的（服务器无新数据），但仍会消耗客户端的网络带块、CPU/内存，以及服务器的处理能力和连接资源。尤其在高并发场景下，可能导致服务器压力过大。"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "频繁连接"
            }), "：每次请求都需要建立 HTTP 连接（虽然 HTTP/1.1 有长连接优化，但仍有请求头、握手等开销），增加网络负载。"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["适用场景：\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "实时性要求低（如天气预报、新闻列表等）、用户量小、服务资源有限的场景。"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["不适用场景：\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "实时性要求高（如聊天、实时监控）、高并发场景。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "长轮询long-polling",
      children: "长轮询（Long Polling）"
    }), "\n", createVNode(_components.p, {
      children: "场论序是对轮询的改进：客户端发送请求后，服务端不会立即返回响应，而是将请求“挂起”（保持连接），等待有新数据产生或超时后，再返回响应；客户端收到响应后，立即发送下一个请求，重复此过程。"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["优点：\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "实时性较好"
            }), "：服务器一旦有新数据，会立即通过挂起的连接返回，延迟远低于轮询（仅取决于数据产生时间和网络传输耗时）。"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "减少无效请求"
            }), "：相比轮询，长轮询避免了固定间隔的无效请求，只有当数据更新或超时后才会返回，降低了网络和服务器的资源消耗。"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "兼容性好"
            }), "：同样基于 HTTP 协议，大部分浏览器和服务器都支持，无需依赖特殊技术。"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["缺点：\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "服务器资源占用高"
            }), "：服务器需要保持大量“挂起”的连接（每个客户端一个），这会消耗服务器的内存和文件描述符（尤其在高并发场景下），对服务器的并发处理能力要求较高。"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "超时处理复杂"
            }), "：需要合理设置超时时间（避免连接过久导致客户端断开），同时客户端需处理连接异常中断的情况（如网络波动），开发逻辑比较复杂。"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "仍有连接开销"
            }), "：虽然减少了请求次数，但每次连接仍有 HTTP 头、握手等开销，且连接挂起期间仍占用网络资源。"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["适用场景：\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "实时性要求中等（如社交媒体通知、在线客服）、用户量适中的场景。"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["不适用场景：\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "超大规模并发（如百万级用户同时连接）、服务器资源紧张的场景（可能因挂起连接过多崩溃）。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "websocket",
      children: "WebSocket"
    }), "\n", createVNode(_components.p, {
      children: ["WebSocket是一种 ", createVNode(_components.strong, {
        children: "全双工通信协议"
      }), "（RFC6455 定义），通过一次 HTTP 握手后，建立持久化的 TCP 连接，允许客户端和服务器 ", createVNode(_components.strong, {
        children: "双向实时发送数据"
      }), "（客户端可主动发，服务器也可主动发），且数据传输格式灵活（文本、二进制等）。"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["优点：\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "实时性极强"
            }), "\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "建立连接后，客户端和服务器可随时双向发送数据，无需像轮询/长轮询那样反复建立连接，延迟极低（仅受网络传输和数据处理耗时影响），适合高频实时交互场景（如在线游戏、实时协作工具）。"
              }), "\n"]
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "低开销"
            }), "\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "仅需一次 HTTP 握手，之后基于 TCP 连接直接传输数据，无需重复发送 HTTP 头信息，减少网络带宽消耗。"
              }), "\n", createVNode(_components.li, {
                children: "数据帧格式简洁（相比 HTTP 协议），进一步降低传输成本。"
              }), "\n"]
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "全双工通信"
            }), "\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "客户端和服务器可平等地主动发送数据，无需依赖“客户端请求-服务器响应”的模式，灵活满足双向交互需求（如连天中双方互发消息）。"
              }), "\n"]
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "支持二进制数据"
            }), "\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "可直接传输二进制数据（如图片、音频片段），无需像 HTTP 那样进行 Base64 等编码转换，节省处理时间和带宽。"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["缺点：\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "实现复杂"
            }), "\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "需要服务器和客户端都支持 WebSocket 协议（需处理握手、数据帧解析、连接保活等逻辑），开发成本高于轮询/长轮询。"
              }), "\n", createVNode(_components.li, {
                children: "部分老旧浏览器不支持（如 IE10 及以下版本），需要额外做兼容处理（如降级为长轮询）。"
              }), "\n"]
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "服务器压力"
            }), "\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "长时间保持大量 TCP 连接（每个客户端一个），对服务器的并发处理能力（如文件描述符、内存）要求较高，高并发场景下需特殊优化（如使用异步 IO 框架）。"
              }), "\n"]
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "网络兼容性问题"
            }), "\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "部分代理服务器、防火墙可能拦截 WebSocket 连接（因协议升级过程涉及非标准 HTTP 方法）。"
              }), "\n", createVNode(_components.li, {
                children: "连接断开后需手动重连，需实现重连逻辑（如指数退避策略）以保证稳定性。"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["适用场景\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "实时游戏、在线聊天、协作工具、高频交互场景"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["不适用场景\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "仅需单向推送、老旧环境、服务器资源有限的场景"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "sse",
      children: "SSE"
    }), "\n", createVNode(_components.p, {
      children: ["SSE是一种 ", createVNode(_components.strong, {
        children: "单向通信协议"
      }), "，基于 HTTP 协议：客户端通过一次HTTP请求建立持久连接，之后 ", createVNode(_components.strong, {
        children: "只能由服务器向客户端单向发送数据"
      }), "，客户端无法通过该连接主动向服务器发送数据（若需客户端发送数据，需额外用 HTTP 请求）。数据以“文本事件流”格式传输，客户端通过监听事件处理数据。"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["优点\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "实现简单"
            }), "\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: ["基于标准 HTTP 协议，客户端只需用 ", createVNode(_components.code, {
                  children: "EventSourceAPI"
                }), " 建立连接并监听事件，服务器只需格式持续输出数据（无需处理复杂的协议帧），开发成本低。"]
              }), "\n", createVNode(_components.li, {
                children: "兼容性较好（除IE全系外，主浏览器均支持），且可通过 polyfill 兼容老旧浏览器。"
              }), "\n"]
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "轻量级"
            }), "\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "复用 HTTP 长连接，无需协议升级，对代理服务器和防火墙兼容性优于 WebSocket。"
              }), "\n", createVNode(_components.li, {
                children: "服务器发送的数据格式为文本（或嵌套 JSON），解析简单，适合传输结构化文本数据。"
              }), "\n"]
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "自动重连"
            }), "\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: ["客户端 ", createVNode(_components.code, {
                  children: "EventSource"
                }), " 会自动处理连接断开后的重连（默认重试间隔逐渐增加），无需手动实现重连逻辑，稳定性较高。"]
              }), "\n"]
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "资源消耗较低"
            }), "\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "相比 WebSocket，SSE连接的维护成本更低（基于HTTP长连接，服务器处理逻辑简单），适合服务器向大量客户端单向推送数据的场景（如新闻推送、实时日志）。"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["缺点\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "单向通信限制"
            }), "\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "仅支持服务器向客户端发送数据，若客户端需向服务器反馈（如确认收到消息），必须额外使用HTTP请求，增加了逻辑复杂度（相比WebSocket的双向通信）。"
              }), "\n"]
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "仅支持文本数据"
            }), "\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "只能传输 UTF-8 编码的文本数据，无法直接传输二进制数据（需先编码为Base64等格式，增加开销），不适合二进制场景（如实时图片传输）。"
              }), "\n"]
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "浏览器连接限制"
            }), "\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "浏览器对单个域名的SSE并发连接数有限制（通常为6个），若需多连接，需通过多个子域名绕过，增加架构复杂度。"
              }), "\n"]
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "实时性略逊于 WebSocket"
            }), "\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "虽然延迟较低，但因基于HTTP长连接，数据传输格式和协议 overhead 略高于 WebSocket，极端高频场景下性能稍差。"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["适用场景\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "新闻推送、实时通知、股票行情、日志监控"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["不适用场景\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "需客户端主动发送数据、传输二进制数据的场景"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["通过介绍，你应该大概了解了各种即时通信技术的区别，下面我重点讲解下 ", createVNode(_components.strong, {
        children: "SSE"
      }), "。"]
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
            children: "\"OK\""
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
            children: "  const"
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
            children: "(req, res);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // Send a message on connection"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  sse."
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
            children: "  // Send a subsequent message every five seconds"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  setInterval"
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
            children: "    sse."
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
            children: "  }, "
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
            children: "  // Close the connection when the client disconnects"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  req."
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
            children: "\"/subscribe\""
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
            children: "\"open\""
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
            children: "\"Connection opened\""
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
            children: "\"error\""
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
            children: "\"message\""
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
            children: "\"connected\""
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
            children: "\"Subscription successful\""
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
            children: "\"close-btn\""
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
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "  \"click\""
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
            children: "  () "
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
            children: "    subscription."
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
            children: "    writeMessage"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"Subscription closed\""
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
            children: "  },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  false"
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
            children: ");"
          })
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
      }), "属性我们可以实现流式数据接收。如果需要，通过我们合理的封装，完全可以实现绝大部分SSE功能。"]
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
      id: "增强版sse",
      children: "增强版SSE"
    }), "\n", createVNode(_components.p, {
      children: "浏览器原生的EventSource API在请求时存在诸多限制："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["仅支持 ", createVNode(_components.code, {
          children: "GET"
        }), " 请求，无法使用其他HTTP方法；"]
      }), "\n", createVNode(_components.li, {
        children: "不能传递请求体（body），需将所有信息编码到URL中，2️⃣URL长度通常限制在2000字符左右；"
      }), "\n", createVNode(_components.li, {
        children: "无法自定义请求头；"
      }), "\n", createVNode(_components.li, {
        children: "连接中断时，重试策略完全由浏览器控制（静默重试几次后停止），不适用于高可靠性应用。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["为此微软自研了一套基于Fetch API的增强型SSE — ", createVNode(_components.a, {
        href: "https://github.com/Azure/fetch-event-source",
        children: "fetch-event-source"
      }), "。它兼容标准事件流格式，同时解决了原生 API 的问题，提供了更多控制权："]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["支持任意HTTP方法、自定义请求头和请求体，具备Fetch API的全部功能，甚至可替换默认的 ", createVNode(_components.code, {
          children: "fetch"
        }), " 实现；"]
      }), "\n", createVNode(_components.li, {
        children: "能访问响应对象，便于在解析事件前进行自定义验证（例如处理API网关的错误响应）；"
      }), "\n", createVNode(_components.li, {
        children: "连接中断或出错时，可完全自定义重试策略；"
      }), "\n", createVNode(_components.li, {
        children: "集成浏览器页面可见性 API：页面隐藏时自动关闭连接，重新可见时给予最后一个事件ID重试，减少服务器无效连接压力（可手动关闭此功能）。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "简而言之，这个库在保持服务器发送事件兼容性的同时，大幅提升了请求的灵活性、错误处理能力和资源优化能力。"
    }), "\n", createVNode(_components.h2, {
      id: "总结",
      children: "总结"
    }), "\n", createVNode(_components.p, {
      children: ["这就是SSE的基本功能与实现。SSE支持", createVNode(_components.strong, {
        children: "自动重连"
      }), "、", createVNode(_components.strong, {
        children: "事件ID"
      }), "和", createVNode(_components.strong, {
        children: "自定义事件"
      }), "的功能很大程度上减少了我们额外的开发工作。在我接触到的大部分场景下，它比WebSocket更适合，实现也更简单。如果你遇到这种需要异步处理的场景，可以优先考虑它。当然，如果你希望得到更强大的功能和更多的控制权，可以考虑微软推出的", createVNode(_components.a, {
        href: "https://github.com/Azure/fetch-event-source",
        children: "fetch-event-source"
      }), "作为企业级的解决方案。"]
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
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/blog/即时通信技术——SSE.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
