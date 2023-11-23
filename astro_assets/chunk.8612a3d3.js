import { _ as __astro_tag_component__, F as Fragment, q as createVNode } from './chunk.58a66e60.js';
import { $ as $$Image } from './chunk.4df0e139.js';

const wxRequest = new Proxy({"src":"/astro_assets/asset.cb57cfa2.png","width":1096,"height":923,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const frontmatter = {
  "title": "\u5373\u65F6\u901A\u4FE1\u6280\u672F\u2014\u2014SSE",
  "description": "\u6709\u65F6\u5019\u670D\u52A1\u7AEF\u5E76\u4E0D\u80FD\u53CA\u65F6\u66F4\u65B0\u6570\u636E\uFF0C\u5BFC\u81F4\u5BA2\u6237\u7AEF\u9700\u8981\u901A\u8FC7\u4E00\u4E9B\u624B\u6BB5\u6765\u83B7\u53D6\u771F\u6B63\u6700\u65B0\u7684\u6570\u636E\u3002\u8FD9\u7C7B\u7684\u624B\u6BB5\u6709\u5F88\u591A\u79CD\uFF0C\u4F8B\u5982\u8F6E\u8BE2\u3001\u957F\u8F6E\u8BE2\u3001WebSocket\u4EE5\u53CA\u6211\u4EEC\u4ECA\u5929\u8981\u8BB2\u7684SSE\u901A\u4FE1\u6280\u672F\u3002\u8FD9\u7BC7\u6587\u7AE0\u4E3B\u8981\u4ECB\u7ECDSSE\u7684\u4F7F\u7528\u4EE5\u53CA\u5B83\u4E0E\u5176\u5B83\u6280\u672F\u4E4B\u95F4\u7684\u5F02\u540C\u3002",
  "pubDate": "Tue, 21 Nov 2023 03:14:07 +0800",
  "heroImage": "",
  "draft": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "\u7B80\u5355\u4ECB\u7ECD",
    "text": "\u7B80\u5355\u4ECB\u7ECD"
  }, {
    "depth": 3,
    "slug": "\u8F6E\u8BE2",
    "text": "\u8F6E\u8BE2"
  }, {
    "depth": 3,
    "slug": "\u957F\u8F6E\u8BE2",
    "text": "\u957F\u8F6E\u8BE2"
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
    "slug": "sse\u6570\u636E\u7684\u57FA\u672C\u7ED3\u6784",
    "text": "SSE\u6570\u636E\u7684\u57FA\u672C\u7ED3\u6784"
  }, {
    "depth": 2,
    "slug": "\u5982\u4F55\u4F7F\u7528sse",
    "text": "\u5982\u4F55\u4F7F\u7528SSE"
  }, {
    "depth": 3,
    "slug": "\u670D\u52A1\u7AEF",
    "text": "\u670D\u52A1\u7AEF"
  }, {
    "depth": 3,
    "slug": "\u6D4F\u89C8\u5668\u7AEF",
    "text": "\u6D4F\u89C8\u5668\u7AEF"
  }, {
    "depth": 2,
    "slug": "\u5C0F\u7A0B\u5E8F\u5982\u4F55\u505A\u517C\u5BB9",
    "text": "\u5C0F\u7A0B\u5E8F\u5982\u4F55\u505A\u517C\u5BB9"
  }, {
    "depth": 2,
    "slug": "sse\u4E0Ewebsocket",
    "text": "SSE\u4E0EWebSocket"
  }, {
    "depth": 2,
    "slug": "\u603B\u7ED3",
    "text": "\u603B\u7ED3"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    ul: "ul",
    li: "li",
    h2: "h2",
    h3: "h3",
    strong: "strong",
    code: "code",
    pre: "pre",
    span: "span",
    table: "table",
    thead: "thead",
    tr: "tr",
    th: "th",
    tbody: "tbody",
    td: "td"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "\u6709\u8FD9\u6837\u4E00\u79CD\u573A\u666F\uFF0C\u6211\u4EEC\u63D0\u4EA4\u4E86\u4E00\u4EFD\u8868\u5355\uFF0C\u670D\u52A1\u7AEF\u8FDB\u884C\u5904\u7406\u3002\u7531\u4E8E\u8FD9\u4EFD\u8868\u5355\u7684\u5904\u7406\u975E\u5E38\u590D\u6742\uFF0C\u670D\u52A1\u7AEF\u63A5\u6536\u5230\u8868\u5355\u5C31\u76F4\u63A5\u8FDB\u884C\u4E86\u54CD\u5E94\uFF0C\u7136\u540E\u5F02\u6B65\u5904\u7406\u8FD9\u4EFD\u8868\u5355\u3002\u4F46\u662F\u524D\u7AEF\u9700\u8981\u8868\u5355\u5904\u7406\u5B8C\u6210\u624D\u80FD\u6267\u884C\u4E0B\u4E00\u6B65\u52A8\u4F5C\uFF0C\u4F60\u4EEC\u4F1A\u4F7F\u7528\u4EC0\u4E48\u65B9\u5F0F\u5462\uFF1F"
    }), "\n", createVNode(_components.p, {
      children: "\u6CA1\u9519\uFF0C\u5176\u5B9E\u5904\u7406\u8FD9\u7C7B\u95EE\u9898\u7684\u65B9\u5F0F\u6709\u5F88\u591A\u79CD\u3002\u6BD4\u5982\uFF1A"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "\u8F6E\u8BE2"
      }), "\n", createVNode(_components.li, {
        children: "\u957F\u8F6E\u8BE2"
      }), "\n", createVNode(_components.li, {
        children: "WebSocket"
      }), "\n", createVNode(_components.li, {
        children: "SSE"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "\u4E0B\u9762\u6211\u5C31\u5BF9\u4EE5\u4E0A\u51E0\u79CD\u65B9\u5F0F\u505A\u4E00\u4E2A\u7B80\u5355\u4ECB\u7ECD\u4E0E\u6BD4\u8F83\uFF0C\u65B9\u4FBF\u5927\u5BB6\u7684\u7406\u89E3\u3002"
    }), "\n", createVNode(_components.h2, {
      id: "\u7B80\u5355\u4ECB\u7ECD",
      children: "\u7B80\u5355\u4ECB\u7ECD"
    }), "\n", createVNode(_components.h3, {
      id: "\u8F6E\u8BE2",
      children: "\u8F6E\u8BE2"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "\u8F6E\u8BE2"
      }), "\u8FD9\u4E2A\u540D\u8BCD\u4E5F\u8BB8\u8BA9\u4F60\u611F\u89C9\u5F88\u9AD8\u5927\u4E0A\u7684\u6837\u5B50\uFF0C\u5176\u5B9E\u5B83\u5C31\u662F\u95F4\u65AD\u6027\u7684\u8BF7\u6C42\u63A5\u53E3\uFF0C\u76F4\u5230\u63A5\u53E3\u8FD4\u56DE\u6211\u4EEC\u60F3\u8981\u7684\u6570\u636E\u4E3A\u6B62\u3002\u8F6E\u8BE2\u7684\u65B9\u5F0F\u56FA\u7136\u7B80\u5355\u6613\u61C2\uFF0C\u4F46\u662F\u989D\u5916\u7684\u8F6E\u8BE2\u4F1A\u5BFC\u81F4\u66F4\u9AD8\u7684HTTP\u5F00\u9500\u3002"]
    }), "\n", createVNode(_components.h3, {
      id: "\u957F\u8F6E\u8BE2",
      children: "\u957F\u8F6E\u8BE2"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "\u957F\u8F6E\u8BE2\uFF08\u6302\u8D77GET/COMET\uFF09"
      }), " \u662F\u8F6E\u8BE2\u7684\u8F7B\u5FAE\u53D8\u4F53\u3002\u5728\u957F\u8F6E\u8BE2\u4E2D\uFF0C\u5982\u679C\u670D\u52A1\u5668\u6CA1\u6709\u53EF\u7528\u7684\u6570\u636E\uFF0C\u5219\u670D\u52A1\u5668\u4F1A\u8BA9\u8BF7\u6C42\u4FDD\u6301\u6253\u5F00\u72B6\u6001\uFF0C\u76F4\u5230\u6709\u65B0\u6570\u636E\u53EF\u7528\u3002\u5982\u679C\u6570\u636E\u53EF\u7528\uFF0C\u670D\u52A1\u5668\u4F1A\u54CD\u5E94\u6570\u636E\u5E76\u5173\u95ED\u8FDE\u63A5\uFF0C\u5BA2\u6237\u7AEF\u63A5\u6536\u5230\u6570\u636E\u540E\u9700\u8981\u91CD\u65B0\u53D1\u8D77\u4E00\u4E2A\u65B0\u7684\u8FDE\u63A5\uFF0C\u5982\u6B64\u5F80\u590D\u3002\u8FD9\u6837\u5C31\u53EF\u4EE5\u6301\u7EED\u4ECE\u670D\u52A1\u7AEF\u83B7\u53D6\u5B9E\u65F6\u6570\u636E\u4E86\u3002"]
    }), "\n", createVNode(_components.h3, {
      id: "websocket",
      children: "WebSocket"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "WebSocket"
      }), " \u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u4E4B\u95F4\u5EFA\u7ACB\u4E00\u6761\u53CC\u5411\u901A\u4FE1\u7684\u901A\u9053\uFF0C\u5B9E\u73B0\u670D\u52A1\u5668\u4E3B\u52A8\u5411\u6D4F\u89C8\u5668\u63A8\u9001\u6D88\u606F\u7684\u80FD\u529B\uFF08\u4E0D\u9700\u8981\u6D4F\u89C8\u5668\u5411\u670D\u52A1\u5668\u4E0D\u65AD\u53D1\u9001\u8BF7\u6C42\uFF09\u3002\u5176\u539F\u7406\u662F\u5728\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u4E4B\u95F4\u5EFA\u7ACB\u4E00\u4E2A\u201C\u5957\u63A5\u5B57\uFF08Socket\uFF09\u201D\uFF0C\u901A\u8FC7\u201C\u63E1\u624B\u201D\u7684\u65B9\u5F0F\u8FDB\u884C\u6570\u636E\u4F20\u8F93\u3002\u7531\u4E8E\u8BE5\u534F\u8BAE\u9700\u8981\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u90FD\u652F\u6301\uFF0C\u56E0\u6B64\u9700\u8981\u5728\u5E94\u7528\u7A0B\u5E8F\u4E2D\u5BF9\u5176\u8FDB\u884C\u5224\u65AD\u548C\u5904\u7406\u3002"]
    }), "\n", createVNode(_components.h3, {
      id: "sse",
      children: "SSE"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "SSE"
      }), " \u662F\u57FA\u4E8EHTTP\u534F\u8BAE\u7684\u3002\u6D4F\u89C8\u5668\u4E0E\u670D\u52A1\u7AEF\u5EFA\u7ACB\u4E00\u4E2A\u957F\u8FDE\u63A5\uFF0C\u901A\u8FC7\u6D41\u6570\u636E\u7684\u5F62\u5F0F\u4F20\u8F93\u6570\u636E\u3002\u6D4F\u89C8\u5668\u7AEF\uFF0C\u901A\u8FC7EventSource\u5BF9\u8C61\uFF0C\u4E0E\u670D\u52A1\u7AEF\u5EFA\u7ACB\u8FDE\u63A5\uFF0C\u5E76\u901A\u8FC7\u4E8B\u4EF6\u7684\u65B9\u5F0F\u76D1\u542C\u54CD\u5E94\u3002\u5728\u670D\u52A1\u7AEF\uFF0CSSE\u8981\u6C42\u670D\u52A1\u7AEF\u54CD\u5E94\u6570\u636E\u5FC5\u987B\u4F7F\u7528", createVNode(_components.code, {
        children: "text/event-stream"
      }), "\u6765\u4F20\u8F93\u6570\u636E\u3002\u53E6\u5916\uFF0CSSE\u8FD8\u652F\u6301", createVNode(_components.strong, {
        children: "\u81EA\u52A8\u91CD\u8FDE"
      }), "\u3001", createVNode(_components.strong, {
        children: "\u4E8B\u4EF6ID"
      }), "\u548C", createVNode(_components.strong, {
        children: "\u81EA\u5B9A\u4E49\u4E8B\u4EF6"
      }), "\u7684\u529F\u80FD\u3002"]
    }), "\n", createVNode(_components.h2, {
      id: "sse\u6570\u636E\u7684\u57FA\u672C\u7ED3\u6784",
      children: "SSE\u6570\u636E\u7684\u57FA\u672C\u7ED3\u6784"
    }), "\n", createVNode(_components.p, {
      children: "SSE\u662F\u901A\u8FC7\u4E8B\u4EF6\u6765\u54CD\u5E94\u5B9E\u65F6\u6570\u636E\u7684\u3002\u6BCF\u4E2A\u4E8B\u4EF6\u4E4B\u95F4\u901A\u8FC7\u7A7A\u884C\u6765\u5206\u9694\u3002\u5BF9\u4E8E\u6BCF\u4E00\u884C\u6765\u8BF4\uFF0C\u5192\u53F7\uFF08\u201C:\u201D\uFF09\u524D\u9762\u8868\u793A\u7684\u662F\u8BE5\u884C\u7684\u7C7B\u578B\uFF0C\u5192\u53F7\u540E\u9762\u5219\u662F\u5BF9\u5E94\u7684\u503C\u3002\u53EF\u80FD\u7684\u7C7B\u578B\u5305\u62EC\uFF1A"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "\u7C7B\u578B\u4E3A\u7A7A\u767D\uFF0C\u8868\u793A\u8BE5\u884C\u662F\u6CE8\u91CA\uFF0C\u4F1A\u5728\u5904\u7406\u65F6\u88AB\u5FFD\u7565\u3002"
      }), "\n", createVNode(_components.li, {
        children: "\u7C7B\u578B\u4E3A data\uFF0C\u8868\u793A\u8BE5\u884C\u5305\u542B\u7684\u662F\u6570\u636E\u3002\u4EE5 data \u5F00\u5934\u7684\u884C\u53EF\u4EE5\u51FA\u73B0\u591A\u6B21\u3002\u6240\u6709\u8FD9\u4E9B\u884C\u90FD\u662F\u8BE5\u4E8B\u4EF6\u7684\u6570\u636E\u3002"
      }), "\n", createVNode(_components.li, {
        children: "\u7C7B\u578B\u4E3A event\uFF0C\u8868\u793A\u8BE5\u884C\u7528\u6765\u58F0\u660E\u4E8B\u4EF6\u7684\u7C7B\u578B\u3002\u6D4F\u89C8\u5668\u5728\u6536\u5230\u6570\u636E\u65F6\uFF0C\u4F1A\u4EA7\u751F\u5BF9\u5E94\u7C7B\u578B\u7684\u4E8B\u4EF6\u3002"
      }), "\n", createVNode(_components.li, {
        children: "\u7C7B\u578B\u4E3A id\uFF0C\u8868\u793A\u8BE5\u884C\u7528\u6765\u58F0\u660E\u4E8B\u4EF6\u7684\u6807\u8BC6\u7B26\u3002"
      }), "\n", createVNode(_components.li, {
        children: "\u7C7B\u578B\u4E3A retry\uFF0C\u8868\u793A\u8BE5\u884C\u7528\u6765\u58F0\u660E\u6D4F\u89C8\u5668\u5728\u8FDE\u63A5\u65AD\u5F00\u4E4B\u540E\u8FDB\u884C\u518D\u6B21\u8FDE\u63A5\u4E4B\u524D\u7684\u7B49\u5F85\u65F6\u95F4\u3002"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "\u5982\u4F55\u4F7F\u7528sse",
      children: "\u5982\u4F55\u4F7F\u7528SSE"
    }), "\n", createVNode(_components.h3, {
      id: "\u670D\u52A1\u7AEF",
      children: "\u670D\u52A1\u7AEF"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
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
            children: "    // \u5FC5\u987B\u8BBE\u7F6E\u8FD9\u4E2Aheaders"
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
            children: "   * \u81EA\u5B9A\u4E49\u4E8B\u4EF6--\u8FDE\u63A5"
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
            children: "   * \u901A\u7528\u4E8B\u4EF6--\u6D88\u606F"
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
            children: "   * \u5173\u95ED\u8FDE\u63A5"
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
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "\u6D4F\u89C8\u5668\u7AEF",
      children: "\u6D4F\u89C8\u5668\u7AEF"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
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
            children: " * \u8B66\u544A\uFF1A\u5F53\u4E0D\u901A\u8FC7HTTP/2\u4F7F\u7528\u65F6\uFF0CSSE\uFF08server-sent events\uFF09\u4F1A\u53D7\u5230\u6700\u5927\u8FDE\u63A5\u6570\u7684\u9650\u5236\uFF0C\u8FD9\u5728\u6253\u5F00\u591A\u4E2A\u9009\u9879\u5361\u65F6\u7279\u522B\u9EBB\u70E6\uFF0C"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " * \u56E0\u4E3A\u8BE5\u9650\u5236\u65F6\u9488\u5BF9\u6BCF\u4E2A\u6D4F\u89C8\u5668\u7684\uFF0C\u5E76\u4E14\u88AB\u8BBE\u7F6E\u4E3A\u4E00\u4E2A\u975E\u5E38\u4F4E\u7684\u6570\u5B57\uFF086\uFF09\u3002\u8BE5\u95EE\u9898\u5728Chrome\u548CFirefox\u4E2D\u88AB\u6807\u8BB0\u4E3A\u201D\u4E0D\u4F1A\u89E3\u51B3\u201C\u3002"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " * \u6B64\u9650\u5236\u662F\u9488\u5BF9\u6BCF\u4E2A\u6D4F\u89C8\u5668+\u57DF\u7684\uFF0C\u56E0\u6B64\u8FD9\u610F\u5473\u7740\u4F60\u53EF\u4EE5\u8DE8\u6240\u6709\u9009\u9879\u5361\u6253\u5F006\u4E2ASSE\u8FDE\u63A5\u5230www.example1.com\uFF0C\u5E76\u6253\u5F006\u4E2ASSE\u8FDE"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " * \u63A5\u5230www.example2.com\u3002"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " * \u4F7F\u7528HTTP/2\u65F6\uFF0C\u540C\u4E00\u65F6\u95F4\u5185HTTP\u6700\u5927\u8FDE\u63A5\u6570\u7531\u670D\u52A1\u5668\u548C\u5BA2\u6237\u7AEF\u4E4B\u95F4\u534F\u5546\uFF08\u9ED8\u8BA4\u4E3A100\uFF09\u3002"
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
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "\u8FD9\u6837SSE\u6574\u5957\u6D41\u7A0B\u5C31\u5DF2\u7ECF\u5B8C\u6210\u4E86\u3002\u76F8\u5BF9\u4E8EWebSocket\uFF0CSSE\u5BF9\u670D\u52A1\u7AEF\u975E\u5E38\u53CB\u597D\uFF0C\u53EA\u9700\u8981\u5F88\u5C0F\u7684\u6539\u52A8\uFF0C\u5C31\u53EF\u4EE5\u652F\u6301\u6574\u5957\u6D41\u7A0B\u3002"
    }), "\n", createVNode(_components.h2, {
      id: "\u5C0F\u7A0B\u5E8F\u5982\u4F55\u505A\u517C\u5BB9",
      children: "\u5C0F\u7A0B\u5E8F\u5982\u4F55\u505A\u517C\u5BB9"
    }), "\n", createVNode("img", {
      src: wxRequest.src,
      alt: "wx.request",
      width: "600"
    }), "\n", createVNode(_components.p, {
      children: ["\u6211\u4EEC\u770B\u5230\u867D\u7136\u5FAE\u4FE1\u4E0D\u652F\u6301\u5B8C\u6574\u7684SSE\uFF0C\u4F46\u662F\u901A\u8FC7", createVNode(_components.code, {
        children: "enableChunked"
      }), "\u5C5E\u6027\u6211\u4EEC\u53EF\u4EE5\u5B9E\u73B0\u63A5\u53D7\u4E0D\u4E86\u6D41\u5F0F\u6570\u636E\u3002\u5982\u679C\u9700\u8981\uFF0C\u901A\u8FC7\u6211\u4EEC\u5408\u7406\u7684\u5C01\u88C5\uFF0C\u5B8C\u5168\u53EF\u4EE5\u5B9E\u73B0\u7EDD\u5927\u90E8\u5206SSE\u529F\u80FD\u3002"]
    }), "\n", createVNode(_components.h2, {
      id: "sse\u4E0Ewebsocket",
      children: "SSE\u4E0EWebSocket"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            align: "center"
          }), createVNode(_components.th, {
            align: "center",
            children: "SSE"
          }), createVNode(_components.th, {
            align: "center",
            children: "WebSocket"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            align: "center",
            children: "\u662F\u5426\u652F\u6301\u670D\u52A1\u7AEF\u4E0B\u53D1"
          }), createVNode(_components.td, {
            align: "center",
            children: "\u662F"
          }), createVNode(_components.td, {
            align: "center",
            children: "\u662F"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            align: "center",
            children: "\u662F\u5426\u652F\u6301\u76F8\u4E92\u901A\u4FE1"
          }), createVNode(_components.td, {
            align: "center",
            children: "\u5426"
          }), createVNode(_components.td, {
            align: "center",
            children: "\u662F"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            align: "center",
            children: "\u662F\u5426\u652F\u6301\u65AD\u7EBF\u91CD\u8FDE"
          }), createVNode(_components.td, {
            align: "center",
            children: "\u662F"
          }), createVNode(_components.td, {
            align: "center",
            children: "\u5426"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            align: "center",
            children: "\u662F\u5426\u652F\u6301\u65AD\u70B9\u7EED\u4F20"
          }), createVNode(_components.td, {
            align: "center",
            children: "\u662F"
          }), createVNode(_components.td, {
            align: "center",
            children: "\u5426"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            align: "center",
            children: "\u670D\u52A1\u7AEF\u63A5\u5165\u6210\u672C"
          }), createVNode(_components.td, {
            align: "center",
            children: "\u7B80\u5355"
          }), createVNode(_components.td, {
            align: "center",
            children: "\u590D\u6742"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            align: "center",
            children: "\u662F\u5426\u652F\u6301\u81EA\u5B9A\u4E49\u4E8B\u4EF6"
          }), createVNode(_components.td, {
            align: "center",
            children: "\u662F"
          }), createVNode(_components.td, {
            align: "center",
            children: "\u5426"
          })]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "\u603B\u7ED3",
      children: "\u603B\u7ED3"
    }), "\n", createVNode(_components.p, {
      children: ["\u597D\u4E86\uFF0C\u8FD9\u5C31\u662FSSE\u57FA\u672C\u7684\u529F\u80FD\u4E0E\u5B9E\u73B0\u3002SSE\u652F\u6301", createVNode(_components.strong, {
        children: "\u81EA\u52A8\u91CD\u8FDE"
      }), "\u3001", createVNode(_components.strong, {
        children: "\u4E8B\u4EF6ID"
      }), "\u548C", createVNode(_components.strong, {
        children: "\u81EA\u5B9A\u4E49\u4E8B\u4EF6"
      }), "\u7684\u529F\u80FD\u5F88\u5927\u7A0B\u5EA6\u4E0A\u51CF\u5C11\u4E86\u6211\u4EEC\u989D\u5916\u7684\u5F00\u53D1\u5DE5\u4F5C\u3002\u5728\u6211\u63A5\u89E6\u5230\u7684\u5927\u90E8\u5206\u573A\u666F\uFF0C\u5B83\u6BD4WebSocket\u66F4\u9002\u5408\u3002\u4ECE\u64CD\u4F5C\u96BE\u6613\u5EA6\u6765\u8BF4\uFF0C\u5B83\u6BD4WebSocket\u66F4\u5177\u6709\u4F18\u52BF\u3002\u6240\u4EE5\u5982\u679C\u4F60\u9047\u5230\u8FD9\u79CD\u9700\u8981\u5F02\u6B65\u5904\u7406\u7684\u573A\u666F\uFF0C\u53EF\u4EE5\u4F18\u5148\u8003\u8651\u4E0B\u5B83\u3002"]
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/blog/%E5%8D%B3%E6%97%B6%E9%80%9A%E4%BF%A1%E6%8A%80%E6%9C%AF%E2%80%94%E2%80%94SSE.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/blog/即时通信技术——SSE.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/blog/即时通信技术——SSE.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
