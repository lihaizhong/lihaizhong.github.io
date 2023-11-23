import { _ as __astro_tag_component__, F as Fragment, q as createVNode } from './chunk.58a66e60.js';
import { $ as $$Image } from './chunk.4df0e139.js';

const frontmatter = {
  "title": "XMLHttpRequest\u7684\u5C5E\u6027\u548C\u65B9\u6CD5",
  "pubDate": "Mon Dec 19 2022 03:55:22 GMT+0800",
  "description": "Ajax\u6280\u672F\u7684\u51FA\u73B0\u662F\u4E3A\u4E86\u89E3\u51B3\u53D1\u9001\u670D\u52A1\u5668\u8BF7\u6C42\u989D\u5916\u6570\u636E\u800C\u4E0D\u5237\u65B0\u6574\u5F20\u9875\u9762\u7684\u95EE\u9898\uFF0C\u4ECE\u800C\u5B9E\u73B0\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C\u3002\u628AAjax\u6280\u672F\u63A8\u5230\u5386\u53F2\u821E\u53F0\u4E0A\u7684\u5173\u952E\u6280\u672F\u662FXMLHttpRequest\u5BF9\u8C61\u3002\u6700\u65E9\u7531\u5FAE\u8F6F\u53D1\u660E\uFF0C\u7136\u540E\u88AB\u5176\u4ED6\u6D4F\u89C8\u5668\u6240\u501F\u9274\u3002\n\u7531\u4E8EXMLHttpRequest\u5BF9\u8C61\u672C\u8EAB\u975E\u5E38\u96BE\u7528\uFF0C\u6240\u4EE5\u4EE5\u5F80\u6211\u4EEC\u770B\u5230\u5F88\u591A\u5E93\u5B9E\u73B0\u4E86\u5C01\u88C5\u6765\u5E2E\u52A9\u6211\u4EEC\u66F4\u597D\u5730\u4F7F\u7528\u5B83\u3002\u4E3A\u4E86\u4E86\u89E3\u66F4\u591AXMLHttpRequest\u7684\u7EC6\u8282\uFF0C\u4ECA\u5929\u6211\u4EEC\u5C31\u6765\u4E86\u89E3\u4E00\u4E0BXMLHttpRequest\u7684\u5C5E\u6027\u3001\u65B9\u6CD5\u548C\u4E8B\u4EF6\uFF0C\u5E2E\u52A9\u5927\u5BB6\u4E86\u89E3Ajax\u7684\u5E95\u5C42\u80FD\u529B\u3002"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "\u5C5E\u6027",
    "text": "\u5C5E\u6027"
  }, {
    "depth": 3,
    "slug": "readystate\u5C5E\u6027\u53EA\u8BFB",
    "text": "readyState\u5C5E\u6027\uFF08\u53EA\u8BFB\uFF09"
  }, {
    "depth": 3,
    "slug": "status\u5C5E\u6027\u53EA\u8BFB",
    "text": "status\u5C5E\u6027\uFF08\u53EA\u8BFB\uFF09"
  }, {
    "depth": 3,
    "slug": "statustext\u5C5E\u6027\u53EA\u8BFB",
    "text": "statusText\u5C5E\u6027\uFF08\u53EA\u8BFB\uFF09"
  }, {
    "depth": 3,
    "slug": "responsetype\u5C5E\u6027",
    "text": "responseType\u5C5E\u6027"
  }, {
    "depth": 3,
    "slug": "response\u5C5E\u6027\u53EA\u8BFB",
    "text": "response\u5C5E\u6027\uFF08\u53EA\u8BFB\uFF09"
  }, {
    "depth": 3,
    "slug": "responsetext\u5C5E\u6027\u53EA\u8BFB",
    "text": "responseText\u5C5E\u6027\uFF08\u53EA\u8BFB\uFF09"
  }, {
    "depth": 3,
    "slug": "responsexml\u5C5E\u6027\u53EA\u8BFB",
    "text": "responseXML\u5C5E\u6027\uFF08\u53EA\u8BFB\uFF09"
  }, {
    "depth": 3,
    "slug": "responseurl\u5C5E\u6027\u53EA\u8BFB",
    "text": "responseURL\u5C5E\u6027\uFF08\u53EA\u8BFB\uFF09"
  }, {
    "depth": 3,
    "slug": "timeout\u5C5E\u6027",
    "text": "timeout\u5C5E\u6027"
  }, {
    "depth": 3,
    "slug": "upload\u5C5E\u6027\u53EA\u8BFB",
    "text": "upload\u5C5E\u6027\uFF08\u53EA\u8BFB\uFF09"
  }, {
    "depth": 3,
    "slug": "withcredentials\u5C5E\u6027",
    "text": "withCredentials\u5C5E\u6027"
  }, {
    "depth": 2,
    "slug": "\u65B9\u6CD5",
    "text": "\u65B9\u6CD5"
  }, {
    "depth": 3,
    "slug": "open\u65B9\u6CD5",
    "text": "open\u65B9\u6CD5"
  }, {
    "depth": 3,
    "slug": "send\u65B9\u6CD5",
    "text": "send\u65B9\u6CD5"
  }, {
    "depth": 3,
    "slug": "getrequestheader\u65B9\u6CD5",
    "text": "getRequestHeader\u65B9\u6CD5"
  }, {
    "depth": 3,
    "slug": "setrequestheader\u65B9\u6CD5",
    "text": "setRequestHeader\u65B9\u6CD5"
  }, {
    "depth": 3,
    "slug": "getallresponseheaders\u65B9\u6CD5",
    "text": "getAllResponseHeaders\u65B9\u6CD5"
  }, {
    "depth": 3,
    "slug": "overridemimetype\u65B9\u6CD5",
    "text": "overrideMimeType\u65B9\u6CD5"
  }, {
    "depth": 3,
    "slug": "abort\u65B9\u6CD5",
    "text": "abort\u65B9\u6CD5"
  }, {
    "depth": 2,
    "slug": "\u4E8B\u4EF6",
    "text": "\u4E8B\u4EF6"
  }, {
    "depth": 3,
    "slug": "dom-0\u7EA7\u4E8B\u4EF6",
    "text": "DOM 0\u7EA7\u4E8B\u4EF6"
  }, {
    "depth": 3,
    "slug": "dom-2\u7EA7\u4E8B\u4EF6",
    "text": "DOM 2\u7EA7\u4E8B\u4EF6"
  }, {
    "depth": 2,
    "slug": "\u8DE8\u6E90\u8D44\u6E90\u5171\u4EAB",
    "text": "\u8DE8\u6E90\u8D44\u6E90\u5171\u4EAB"
  }, {
    "depth": 2,
    "slug": "\u65E9\u671F\u7684\u8DE8\u57DF\u65B9\u6848",
    "text": "\u65E9\u671F\u7684\u8DE8\u57DF\u65B9\u6848"
  }, {
    "depth": 2,
    "slug": "\u6CE8\u610F\u4E8B\u9879",
    "text": "\u6CE8\u610F\u4E8B\u9879"
  }, {
    "depth": 2,
    "slug": "\u53C2\u8003",
    "text": "\u53C2\u8003"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    pre: "pre",
    code: "code",
    span: "span",
    h2: "h2",
    ul: "ul",
    li: "li",
    a: "a",
    h3: "h3",
    table: "table",
    thead: "thead",
    tr: "tr",
    th: "th",
    tbody: "tbody",
    td: "td",
    strong: "strong",
    ol: "ol"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Ajax\u6280\u672F\u7684\u51FA\u73B0\u662F\u4E3A\u4E86\u89E3\u51B3\u53D1\u9001\u670D\u52A1\u5668\u8BF7\u6C42\u989D\u5916\u6570\u636E\u800C\u4E0D\u5237\u65B0\u6574\u5F20\u9875\u9762\u7684\u95EE\u9898\uFF0C\u4ECE\u800C\u5B9E\u73B0\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C\u3002\u628AAjax\u6280\u672F\u63A8\u5230\u5386\u53F2\u821E\u53F0\u4E0A\u7684\u5173\u952E\u6280\u672F\u662FXMLHttpRequest\u5BF9\u8C61\u3002\u6700\u65E9\u7531\u5FAE\u8F6F\u53D1\u660E\uFF0C\u7136\u540E\u88AB\u5176\u4ED6\u6D4F\u89C8\u5668\u6240\u501F\u9274\u3002"
    }), "\n", createVNode(_components.p, {
      children: "\u5728Ajax\u6280\u672F\u51FA\u73B0\u4E4B\u524D\uFF0C\u8FD9\u79CD\u6D4F\u89C8\u5668\u4E0E\u670D\u52A1\u5668\u7684\u901A\u4FE1\u65E9\u57281998\u5E74\u5C31\u901A\u8FC7\u4E0D\u540C\u65B9\u5F0F\u5B9E\u73B0\u4E86\u3002\u6700\u521DJavaScript\u5BF9\u670D\u52A1\u5668\u7684\u8BF7\u6C42\u53EF\u4EE5\u901A\u8FC7\u4E2D\u4ECB\uFF08\u5982Java\u5C0F\u7A0B\u5E8F\u6216Flash\u5F71\u7247\uFF09\u6765\u53D1\u9001\u3002\u540E\u6765XHR\u5BF9\u8C61\u63D0\u4F9B\u4E86\u539F\u751F\u7684\u6D4F\u89C8\u5668\u901A\u4FE1\u80FD\u529B\uFF0C\u51CF\u5C11\u4E86\u5B9E\u73B0\u8FD9\u4E2A\u76EE\u7684\u7684\u5DE5\u4F5C\u91CF\u3002"
    }), "\n", createVNode(_components.p, {
      children: "\u7531\u4E8EXMLHttpRequest\u5BF9\u8C61\u672C\u8EAB\u975E\u5E38\u96BE\u7528\uFF0C\u6240\u4EE5\u4EE5\u5F80\u6211\u4EEC\u770B\u5230\u5F88\u591A\u5E93\u5B9E\u73B0\u4E86\u5C01\u88C5\u6765\u5E2E\u52A9\u6211\u4EEC\u66F4\u597D\u5730\u4F7F\u7528\u5B83\u3002\u4E3A\u4E86\u4E86\u89E3\u66F4\u591AXMLHttpRequest\u7684\u7EC6\u8282\uFF0C\u4ECA\u5929\u6211\u4EEC\u5C31\u6765\u4E86\u89E3\u4E00\u4E0BXMLHttpRequest\u7684\u5C5E\u6027\u3001\u65B9\u6CD5\u548C\u4E8B\u4EF6\uFF0C\u5E2E\u52A9\u5927\u5BB6\u4E86\u89E3Ajax\u7684\u5E95\u5C42\u80FD\u529B\u3002"
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
            children: "declare"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " var"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " XMLHttpRequest"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
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
              color: "#FFAB70"
            },
            children: "    prototype"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequest"
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
              color: "#F97583"
            },
            children: "    new"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequest"
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
              color: "#F97583"
            },
            children: "    readonly"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: " DONE"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " number"
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
              color: "#F97583"
            },
            children: "    readonly"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: " HEADERS_RECEIVED"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " number"
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
              color: "#F97583"
            },
            children: "    readonly"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: " LOADING"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " number"
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
              color: "#F97583"
            },
            children: "    readonly"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: " OPENED"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " number"
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
              color: "#F97583"
            },
            children: "    readonly"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: " UNSENT"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " number"
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
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "\u5C5E\u6027",
      children: "\u5C5E\u6027"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#readystate%E5%B1%9E%E6%80%A7%E5%8F%AA%E8%AF%BB",
          children: "readyState"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#status%E5%B1%9E%E6%80%A7%E5%8F%AA%E8%AF%BB",
          children: "status"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#statustext%E5%B1%9E%E6%80%A7%E5%8F%AA%E8%AF%BB",
          children: "statusText"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#responsetype%E5%B1%9E%E6%80%A7",
          children: "responseType"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#response%E5%B1%9E%E6%80%A7%E5%8F%AA%E8%AF%BB",
          children: "response"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#responsetext%E5%B1%9E%E6%80%A7%E5%8F%AA%E8%AF%BB",
          children: "responseText"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#responsexml%E5%B1%9E%E6%80%A7%E5%8F%AA%E8%AF%BB",
          children: "responseXML"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#responseurl%E5%B1%9E%E6%80%A7%E5%8F%AA%E8%AF%BB",
          children: "responseURL"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#timeout%E5%B1%9E%E6%80%A7",
          children: "timeout"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#upload%E5%B1%9E%E6%80%A7%E5%8F%AA%E8%AF%BB",
          children: "upload"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#withcredentials%E5%B1%9E%E6%80%A7",
          children: "withCredentials"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "readystate\u5C5E\u6027\u53EA\u8BFB",
      children: "readyState\u5C5E\u6027\uFF08\u53EA\u8BFB\uFF09"
    }), "\n", createVNode(_components.p, {
      children: "\u8BE5\u5C5E\u6027\u8868\u793A\u5F53\u524D\u6240\u5904\u72B6\u6001\u3002"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            align: "left",
            children: "\u503C"
          }), createVNode(_components.th, {
            align: "left",
            children: "\u72B6\u6001"
          }), createVNode(_components.th, {
            align: "left",
            children: "\u8BF4\u660E"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            align: "left",
            children: "0"
          }), createVNode(_components.td, {
            align: "left",
            children: "UNSENT"
          }), createVNode(_components.td, {
            align: "left",
            children: "\u672A\u521D\u59CB\u5316\u72B6\u6001\uFF0CXMLHttpRequest\u5DF2\u88AB\u521B\u5EFA\uFF0C\u4F46\u5C1A\u672A\u8C03\u7528open\u65B9\u6CD5"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            align: "left",
            children: "1"
          }), createVNode(_components.td, {
            align: "left",
            children: "OPENED"
          }), createVNode(_components.td, {
            align: "left",
            children: ["\u53D1\u9001\u72B6\u6001\uFF0Copen\u65B9\u6CD5\u5DF2\u88AB\u89E6\u53D1\uFF0C\u5728\u8FD9\u4E2A\u72B6\u6001\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7", createVNode(_components.code, {
              children: "setRequestHeader"
            }), "\u65B9\u6CD5\u6765\u8BBE\u7F6E\u8BF7\u6C42\u7684\u5934\u90E8\uFF0C\u53EF\u4EE5\u901A\u8FC7", createVNode(_components.code, {
              children: "send"
            }), "\u65B9\u6CD5\u6765\u53D1\u8D77\u8BF7\u6C42"]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            align: "left",
            children: "2"
          }), createVNode(_components.td, {
            align: "left",
            children: "HEADERS_RECEIVED"
          }), createVNode(_components.td, {
            align: "left",
            children: "\u53D1\u9001\u72B6\u6001\uFF0Csend\u65B9\u6CD5\u5DF2\u88AB\u89E6\u53D1\uFF0C\u54CD\u5E94\u5934\u4E5F\u5DF2\u7ECF\u88AB\u63A5\u6536"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            align: "left",
            children: "3"
          }), createVNode(_components.td, {
            align: "left",
            children: "LOADING"
          }), createVNode(_components.td, {
            align: "left",
            children: "\u6B63\u5728\u63A5\u6536\u72B6\u6001\uFF0C\u54CD\u5E94\u4F53\u90E8\u5206\u6B63\u5728\u88AB\u63A5\u6536"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            align: "left",
            children: "4"
          }), createVNode(_components.td, {
            align: "left",
            children: "DONE"
          }), createVNode(_components.td, {
            align: "left",
            children: "\u63A5\u53D7\u5B8C\u5168\u72B6\u6001\uFF0C\u6570\u636E\u4F20\u8F93\u5DF2\u7ECF\u5F7B\u5E95\u5B8C\u6210\u6216\u8005\u5931\u8D25"
          })]
        })]
      })]
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
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " xhr "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequest"
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
              color: "#E1E4E8"
            },
            children: "console."
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
            children: "'UNSENT'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", xhr.readyState); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// readyState \u4E3A 0"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "xhr."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "onprogress"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " () {"
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
            children: "'LOADING'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", xhr.readyState); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// readyState \u4E3A 3"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "xhr."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "onload"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " () {"
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
            children: "'DONE'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", xhr.readyState); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// readyState \u4E3A 4"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "xhr."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "open"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'GET'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'/api'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "true"
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
            children: "console."
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
            children: "'OPENED'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", xhr.readyState); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// readyState \u4E3A 1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// \u5728open\u65B9\u6CD5\u548Csend\u65B9\u6CD5\u4E4B\u95F4\u6267\u884CsetRequestHeader\uFF0C\u4EE5\u4FDD\u8BC1Header\u8BBE\u7F6E\u6709\u6548"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "xhr."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "setRequestHeader"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'x-token'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'test_token'"
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
            children: "xhr."
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
              color: "#79B8FF"
            },
            children: "null"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "status\u5C5E\u6027\u53EA\u8BFB",
      children: "status\u5C5E\u6027\uFF08\u53EA\u8BFB\uFF09"
    }), "\n", createVNode(_components.p, {
      children: "\u8FD4\u56DEXMLHttpRequest\u8BF7\u6C42\u4E2D\u7531\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u6570\u5B57\u72B6\u6001\u7801\u3002"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "\u6CE8\u610F"
      }), "\uFF1A"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "\u5728\u8BF7\u6C42\u5B8C\u6210\u524D\uFF0C\u72B6\u6001\u7801\u59CB\u7EC8\u4E3A0\u3002"
      }), "\n", createVNode(_components.li, {
        children: "\u5982\u679CXMLHttpRequest\u51FA\u9519\uFF0C\u6D4F\u89C8\u5668\u8FD4\u56DE\u7684\u72B6\u6001\u7801\u4E5F\u4E3A0\u3002"
      }), "\n", createVNode(_components.li, {
        children: ["\u5982\u679C\u8BF7\u6C42\u6B63\u5E38\u6267\u884C\uFF0C\u72B6\u6001\u7801\u4E0E", createVNode(_components.a, {
          href: "https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status",
          children: "\u6807\u51C6\u7684HTTP\u72B6\u6001\u7801"
        }), "\u4E00\u81F4\u3002"]
      }), "\n"]
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
            children: " * \u8F93\u51FA\u5982\u4E0B\uFF1A"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " *"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " * UNSENT\uFF08\u672A\u53D1\u9001\uFF090"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " * OPENED\uFF08\u5DF2\u6253\u5F00\uFF090"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " * LOADING\uFF08\u8F7D\u5165\u4E2D\uFF09200"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " * DONE\uFF08\u5B8C\u6210\uFF09200"
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
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " xhr "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequest"
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
              color: "#E1E4E8"
            },
            children: "console."
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
            children: "'UNSENT'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", xhr.status); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// status \u4E3A 0"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "xhr."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "onprogress"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " () {"
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
            children: "'LOADING'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", xhr.status); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// status \u4E3A 200"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "xhr."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "onload"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " () {"
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
            children: "'DONE'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", xhr.status); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// status \u4E3A 200"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "xhr."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "open"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'GET'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'/server'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "true"
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
            children: "console."
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
            children: "'OPENED'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", xhr.status); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// status \u4E3A 0"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "xhr."
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
              color: "#79B8FF"
            },
            children: "null"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "statustext\u5C5E\u6027\u53EA\u8BFB",
      children: "statusText\u5C5E\u6027\uFF08\u53EA\u8BFB\uFF09"
    }), "\n", createVNode(_components.p, {
      children: "\u8FD4\u56DEXMLHttpRequest\u8BF7\u6C42\u4E2D\u7531\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u5B57\u7B26\u4E32\u72B6\u6001\u4FE1\u606F\uFF0C\u8FD9\u5219\u4FE1\u606F\u4E2D\u4E5F\u5305\u542B\u4E86\u54CD\u5E94\u7684\u6570\u5B57\u72B6\u6001\u7801\u3002\u4E0D\u540C\u4E8E\u4F7F\u7528\u4E00\u4E2A\u6570\u5B57\u6765\u6307\u793A\u7684\u72B6\u6001\u7801\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u5305\u542B\u4E86\u8FD4\u56DE\u72B6\u6001\u5BF9\u5E94\u7684\u6587\u672C\u4FE1\u606F\uFF0C\u4F8B\u5982\u201COK\u201D\u6216\u8005\u201CNot Found\u201D\u3002"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "\u6CE8\u610F"
      }), "\uFF1A"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\u5982\u679C\u8BF7\u6C42\u7684\u72B6\u6001", createVNode(_components.code, {
          children: "readyState"
        }), "\u7684\u503C\u4E3A", createVNode(_components.code, {
          children: "UNSENT"
        }), "\u6216\u8005", createVNode(_components.code, {
          children: "OPENED"
        }), "\uFF0C\u5219\u8FD9\u4E2A\u5C5E\u6027\u7684\u503C\u5C06\u4F1A\u662F\u4E00\u4E2A\u7A7A\u5B57\u7B26\u4E32\u3002"]
      }), "\n", createVNode(_components.li, {
        children: ["\u5982\u679C\u670D\u52A1\u5668\u672A\u660E\u786E\u6307\u5B9A\u4E00\u4E2A\u72B6\u6001\u6587\u672C\u4FE1\u606F\uFF0C\u5219", createVNode(_components.code, {
          children: "statusText"
        }), "\u7684\u503C\u5C06\u4F1A\u88AB\u9ED8\u8BA4\u8D4B\u503C\u4E3A\u201DOK\u201D\u3002"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "responsetype\u5C5E\u6027",
      children: "responseType\u5C5E\u6027"
    }), "\n", createVNode(_components.p, {
      children: "\u8BE5\u5C5E\u6027\u662F\u4E00\u4E2A\u679A\u4E3E\u5B57\u7B26\u4E32\u503C\uFF0C\u7528\u4E8E\u6307\u5B9A\u54CD\u5E94\u4E2D\u5305\u542B\u7684\u6570\u636E\u7C7B\u578B\u3002\u5B83\u5141\u8BB8\u4F5C\u8005\u66F4\u6539\u54CD\u5E94\u7C7B\u578B\u3002"
    }), "\n", createVNode(_components.p, {
      children: "\u53EF\u80FD\u5F97\u503C\uFF1A"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: '""\uFF1A\u7A7A\u7684responseType\u5B57\u7B26\u4E32\u4E0E\u9ED8\u8BA4\u7C7B\u578B\u201Dtext\u201D\u76F8\u540C\u3002'
      }), "\n", createVNode(_components.li, {
        children: ["\u201Carraybuffer\u201D\uFF1Aresponse\u662F\u4E00\u4E2A\u5305\u542B\u4E8C\u8FDB\u5236\u6570\u636E\u7684", createVNode(_components.a, {
          href: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer",
          children: "JavaScript ArrayBuffer"
        }), "\u3002"]
      }), "\n", createVNode(_components.li, {
        children: ["\u201Cblob\u201D\uFF1Aresponse\u662F\u4E00\u4E2A\u5305\u542B\u4E8C\u8FDB\u5236\u6570\u636E\u7684", createVNode(_components.a, {
          href: "https://developer.mozilla.org/zh-CN/docs/Web/API/Blob",
          children: "Blob"
        }), "\u5BF9\u8C61\u3002"]
      }), "\n", createVNode(_components.li, {
        children: ["\u201Cdocument\u201D\uFF1Aresponse\u662F\u4E00\u4E2AHTML ", createVNode(_components.a, {
          href: "https://developer.mozilla.org/zh-CN/docs/Web/API/Document",
          children: "Document"
        }), "\u6216XML ", createVNode(_components.a, {
          href: "https://developer.mozilla.org/zh-CN/docs/Web/API/XMLDocument",
          children: "XMLDocument"
        }), "\uFF0C\u6839\u636E\u63A5\u6536\u5230\u7684\u6570\u636E\u7684MIME\u7C7B\u578B\u800C\u5B9A\u3002"]
      }), "\n", createVNode(_components.li, {
        children: ["\u201Cjson\u201D\uFF1Aresponse\u662F\u901A\u8FC7\u5C06\u63A5\u6536\u5230\u7684\u6570\u636E\u5185\u5BB9\u89E3\u6790\u4E3A", createVNode(_components.a, {
          href: "https://developer.mozilla.org/zh-CN/docs/Glossary/JSON",
          children: "JSON"
        }), "\u800C\u521B\u5EFA\u7684JavaScript\u5BF9\u8C61\u3002"]
      }), "\n", createVNode(_components.li, {
        children: "\u201Ctext\u201D\uFF1Aresponse\u662FDOMString\u5BF9\u8C61\u7684\u6587\u672C\u3002"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "response\u5C5E\u6027\u53EA\u8BFB",
      children: "response\u5C5E\u6027\uFF08\u53EA\u8BFB\uFF09"
    }), "\n", createVNode(_components.p, {
      children: "\u5F53\u8BF7\u6C42\u4F53\u54CD\u5E94\u65F6\uFF0C\u8BE5\u5C5E\u6027\u4F1A\u63A5\u6536\u5230\u8BF7\u6C42\u4F53\u8FD4\u56DE\u7684\u6570\u636E\u3002\u5177\u4F53\u7C7B\u578B\u53D6\u51B3\u4E8EresponseType\u7684\u503C\u3002"
    }), "\n", createVNode(_components.p, {
      children: ["\u53EF\u80FD\u7684\u54CD\u5E94\u7C7B\u578B\u6709", createVNode(_components.code, {
        children: "ArrayBuffer"
      }), "\u3001", createVNode(_components.code, {
        children: "Blob"
      }), "\u3001", createVNode(_components.code, {
        children: "Document"
      }), "\u3001", createVNode(_components.code, {
        children: "DOMString"
      }), "\u7B49"]
    }), "\n", createVNode(_components.h3, {
      id: "responsetext\u5C5E\u6027\u53EA\u8BFB",
      children: "responseText\u5C5E\u6027\uFF08\u53EA\u8BFB\uFF09"
    }), "\n", createVNode(_components.p, {
      children: "\u5F53\u8BF7\u6C42\u4F53\u54CD\u5E94\u65F6\uFF0C\u8BE5\u5C5E\u6027\u4F1A\u63A5\u6536\u5230\u8BF7\u6C42\u4F53\u8FD4\u56DE\u7684\u6570\u636E\u3002"
    }), "\n", createVNode(_components.h3, {
      id: "responsexml\u5C5E\u6027\u53EA\u8BFB",
      children: "responseXML\u5C5E\u6027\uFF08\u53EA\u8BFB\uFF09"
    }), "\n", createVNode(_components.p, {
      children: ["\u5F53\u8BF7\u6C42\u4F53\u54CD\u5E94\u65F6\uFF0C\u8BE5\u5C5E\u6027\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u8BF7\u6C42\u68C0\u7D22\u7684HTML\u6216XML\u7684Document\u3002\uFF08\u6839\u636E", createVNode(_components.code, {
        children: "Content-Type"
      }), "\u4E3A", createVNode(_components.code, {
        children: "text/html"
      }), "\u6216\u8005", createVNode(_components.code, {
        children: "application/xml"
      }), "\u5224\u65AD\uFF09"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "\u6CE8\u610F"
      }), "\uFF1A"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "\u5982\u679C\u8BF7\u6C42\u672A\u6210\u529F\uFF0C\u5C1A\u672A\u53D1\u9001\uFF0C\u6216\u8005\u68C0\u7D22\u7684\u6570\u636E\u65E0\u6CD5\u89E3\u6790\u4E3AXML\u6216\u8005HTML\uFF0C\u5219\u4E3Anull\u3002"
      }), "\n", createVNode(_components.li, {
        children: ["\u5982\u679C\u670D\u52A1\u5668\u6CA1\u6709\u660E\u786E\u6307\u51FA", createVNode(_components.code, {
          children: "Content-Type"
        }), "\u5934\uFF0C\u53EF\u4EE5\u4F7F\u7528", createVNode(_components.code, {
          children: "overrideMimeType"
        }), "\u65B9\u6CD5\u5F3A\u5236", createVNode(_components.code, {
          children: "XMLHttpRequest"
        }), "\u89E3\u6790\u4E3AXML\u3002"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "responseurl\u5C5E\u6027\u53EA\u8BFB",
      children: "responseURL\u5C5E\u6027\uFF08\u53EA\u8BFB\uFF09"
    }), "\n", createVNode(_components.p, {
      children: "\u5F53\u8BF7\u6C42\u4F53\u54CD\u5E94\u65F6\uFF0C\u8FD4\u56DE\u5E8F\u5217\u5316URL\u3002"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "\u6CE8\u610F"
      }), "\uFF1A"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "\u5982\u679CURL\u4E3A\u7A7A\uFF0C\u5219\u8FD4\u56DE\u7A7A\u5B57\u7B26\u4E32\u3002"
      }), "\n", createVNode(_components.li, {
        children: ["\u5982\u679CURL\u6709\u951A\u70B9\uFF0C\u5219\u4F4D\u4E8E", createVNode(_components.code, {
          children: "URL#"
        }), "\u540E\u9762\u7684\u5185\u5BB9\u4F1A\u88AB\u5220\u9664\u3002"]
      }), "\n", createVNode(_components.li, {
        children: ["\u5982\u679CURL\u6709\u91CD\u5B9A\u5411\uFF0C", createVNode(_components.code, {
          children: "responseURL"
        }), "\u7684\u503C\u4F1A\u662F", createVNode(_components.strong, {
          children: "\u7ECF\u8FC7\u591A\u6B21\u91CD\u5B9A\u5411\u540E"
        }), "\u7684\u6700\u7EC8URL\u3002"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "timeout\u5C5E\u6027",
      children: "timeout\u5C5E\u6027"
    }), "\n", createVNode(_components.p, {
      children: "\u4EE3\u8868\u7740\u4E00\u4E2A\u8BF7\u6C42\u5728\u88AB\u81EA\u52A8\u7EC8\u6B62\u524D\u6240\u6D88\u8017\u7684\u6BEB\u79D2\u6570\u3002\u9ED8\u8BA4\u4E3A0\uFF0C\u610F\u5473\u7740\u6CA1\u6709\u8D85\u65F6\u3002"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "\u6CE8\u610F"
      }), "\uFF1A"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\u8D85\u65F6\u5E76\u4E0D\u5E94\u8BE5\u7528\u5728\u4E00\u4E2A", createVNode(_components.a, {
          href: "https://developer.mozilla.org/zh-CN/docs/Glossary/document_environment",
          children: "\u5168\u5C40\u6587\u6863\u73AF\u5883"
        }), "\u4E2D\u7684", createVNode(_components.strong, {
          children: "\u540C\u6B65"
        }), "XMLHttpRequest\u8BF7\u6C42\u4E2D\uFF0C\u5426\u5219\u5C06\u4F1A\u629B\u51FA\u4E00\u4E2A", createVNode(_components.code, {
          children: "InvalidAccessError"
        }), "\u7C7B\u578B\u7684\u9519\u8BEF\u3002"]
      }), "\n", createVNode(_components.li, {
        children: "\u5F53\u8D85\u65F6\u53D1\u751F\u65F6\uFF0Ctimeout\u4E8B\u4EF6\u5C06\u88AB\u89E6\u53D1\u3002"
      }), "\n"]
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
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " xhr "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequest"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "xhr."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "onload"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " () {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // \u8BF7\u6C42\u5B8C\u6210\u3002\u5728\u6B64\u8FDB\u884C\u5904\u7406\u3002"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "xhr."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "ontimeout"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "e"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // XMLHttpRequest \u8D85\u65F6\u3002\u5728\u6B64\u505A\u67D0\u4E8B\u3002"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "xhr."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "open"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'GET'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'/server'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "true"
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
            children: "xhr.timeout "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 2000"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// \u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u662F\u6BEB\u79D2"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "xhr."
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
              color: "#79B8FF"
            },
            children: "null"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "upload\u5C5E\u6027\u53EA\u8BFB",
      children: "upload\u5C5E\u6027\uFF08\u53EA\u8BFB\uFF09"
    }), "\n", createVNode(_components.p, {
      children: ["\u8FD4\u56DE\u4E00\u4E2AXMLHttpRequestUpload\u5BF9\u8C61\uFF0C\u7528\u6765\u8868\u793A\u4E0A\u4F20\u7684\u8FDB\u5EA6\u3002\u8FD9\u4E2A\u5BF9\u8C61\u65F6\u4E0D\u900F\u660E\u7684\uFF0C\u4F46\u662F\u4F5C\u4E3A\u4E00\u4E2A", createVNode(_components.a, {
        href: "https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequestEventTarget",
        children: "XMLHttpRequestEventTarget"
      }), ",\u53EF\u4EE5\u901A\u8FC7\u5BF9\u5176\u7ED1\u5B9A\u4E8B\u4EF6\u6765\u8FFD\u8E2A\u5B83\u7684\u8FDB\u5EA6\u3002"]
    }), "\n", createVNode(_components.p, {
      children: "\u53EF\u4EE5\u88AB\u7ED1\u5B9A\u5728upload\u5BF9\u8C61\u4E0A\u7684\u4E8B\u4EF6\u76D1\u542C\u5668\u5982\u4E0B\uFF1A"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            align: "left",
            children: "\u4E8B\u4EF6"
          }), createVNode(_components.th, {
            align: "left",
            children: "\u76F8\u5E94\u5C5E\u6027\u7684\u4FE1\u606F\u7C7B\u578B"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            align: "left",
            children: "onloadstart"
          }), createVNode(_components.td, {
            align: "left",
            children: "\u83B7\u53D6\u5F00\u59CB"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            align: "left",
            children: "onprogress"
          }), createVNode(_components.td, {
            align: "left",
            children: "\u6570\u636E\u4F20\u8F93\u8FDB\u884C\u4E2D"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            align: "left",
            children: "onabort"
          }), createVNode(_components.td, {
            align: "left",
            children: "\u83B7\u53D6\u64CD\u4F5C\u7EC8\u6B62"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            align: "left",
            children: "onerror"
          }), createVNode(_components.td, {
            align: "left",
            children: "\u83B7\u53D6\u5931\u8D25"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            align: "left",
            children: "onload"
          }), createVNode(_components.td, {
            align: "left",
            children: "\u83B7\u53D6\u6210\u529F"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            align: "left",
            children: "ontimeout"
          }), createVNode(_components.td, {
            align: "left",
            children: "\u83B7\u53D6\u64CD\u4F5C\u5728\u7528\u6237\u89C4\u5B9A\u7684\u65F6\u95F4\u5185\u672A\u5B8C\u6210"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            align: "left",
            children: "onloadend"
          }), createVNode(_components.td, {
            align: "left",
            children: "\u83B7\u53D6\u5B8C\u6210\uFF08\u65E0\u8BBA\u6210\u529F\u4E0E\u5426\uFF09"
          })]
        })]
      })]
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
            children: "interface"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequestEventTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " extends"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " EventTarget"
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
              color: "#FFAB70"
            },
            children: "    onabort"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "this"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequest"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "ev"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " ProgressEvent"
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
              color: "#79B8FF"
            },
            children: " any"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "|"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " null"
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
              color: "#FFAB70"
            },
            children: "    onerror"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "this"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequest"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "ev"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " ProgressEvent"
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
              color: "#79B8FF"
            },
            children: " any"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "|"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " null"
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
              color: "#FFAB70"
            },
            children: "    onload"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "this"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequest"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "ev"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " ProgressEvent"
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
              color: "#79B8FF"
            },
            children: " any"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "|"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " null"
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
              color: "#FFAB70"
            },
            children: "    onloadend"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "this"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequest"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "ev"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " ProgressEvent"
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
              color: "#79B8FF"
            },
            children: " any"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "|"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " null"
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
              color: "#FFAB70"
            },
            children: "    onloadstart"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "this"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequest"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "ev"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " ProgressEvent"
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
              color: "#79B8FF"
            },
            children: " any"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "|"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " null"
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
              color: "#FFAB70"
            },
            children: "    onprogress"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "this"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequest"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "ev"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " ProgressEvent"
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
              color: "#79B8FF"
            },
            children: " any"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "|"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " null"
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
              color: "#FFAB70"
            },
            children: "    ontimeout"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "this"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequest"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "ev"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " ProgressEvent"
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
              color: "#79B8FF"
            },
            children: " any"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "|"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " null"
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
              color: "#B392F0"
            },
            children: "    addEventListener"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "K"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " extends"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " keyof"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequestEventTargetEventMap"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " K"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "listener"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "this"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequestEventTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "ev"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequestEventTargetEventMap"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "K"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]) "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " any"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "options"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "?:"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " boolean"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " |"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " AddEventListenerOptions"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " void"
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
              color: "#B392F0"
            },
            children: "    addEventListener"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "listener"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " EventListenerOrEventListenerObject"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "options"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "?:"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " boolean"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " |"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " AddEventListenerOptions"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " void"
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
              color: "#B392F0"
            },
            children: "    removeEventListener"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "K"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " extends"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " keyof"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequestEventTargetEventMap"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " K"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "listener"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "this"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequestEventTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "ev"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequestEventTargetEventMap"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "K"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]) "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " any"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "options"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "?:"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " boolean"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " |"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " EventListenerOptions"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " void"
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
              color: "#B392F0"
            },
            children: "    removeEventListener"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "listener"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " EventListenerOrEventListenerObject"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "options"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "?:"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " boolean"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " |"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " EventListenerOptions"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " void"
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
            children: "interface"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequestUpload"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " extends"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequestEventTarget"
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
            children: "    addEventListener"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "K"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " extends"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " keyof"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequestEventTargetEventMap"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " K"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "listener"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "this"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequestUpload"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "ev"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequestEventTargetEventMap"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "K"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]) "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " any"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "options"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "?:"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " boolean"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " |"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " AddEventListenerOptions"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " void"
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
              color: "#B392F0"
            },
            children: "    addEventListener"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "listener"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " EventListenerOrEventListenerObject"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "options"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "?:"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " boolean"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " |"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " AddEventListenerOptions"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " void"
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
              color: "#B392F0"
            },
            children: "    removeEventListener"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "K"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " extends"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " keyof"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequestEventTargetEventMap"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " K"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "listener"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "this"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequestUpload"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "ev"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequestEventTargetEventMap"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "K"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]) "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " any"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "options"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "?:"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " boolean"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " |"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " EventListenerOptions"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " void"
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
              color: "#B392F0"
            },
            children: "    removeEventListener"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "listener"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " EventListenerOrEventListenerObject"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "options"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "?:"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " boolean"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " |"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " EventListenerOptions"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " void"
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
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "withcredentials\u5C5E\u6027",
      children: "withCredentials\u5C5E\u6027"
    }), "\n", createVNode(_components.p, {
      children: "\u8BE5\u5C5E\u6027\u662F\u4E00\u4E2A\u5E03\u5C14\u7C7B\u578B\uFF0C\u5B83\u6307\u793A\u4E86\u662F\u5426\u8BE5\u4F7F\u7528\u7C7B\u4F3CCookies\u3001Authorization Headers\uFF08\u5934\u90E8\u6388\u6743\uFF09\u6216\u8005TLS\u5BA2\u6237\u7AEF\u8BC1\u4E66\u8FD9\u7C7B\u8D44\u683C\u8BC1\u4E66\u6765\u521B\u5EFA\u4E00\u4E2A\u8DE8\u7AD9\u70B9\u8BBF\u95EE\u63A7\u5236\uFF08cross-siteAccess-Control\uFF09\u8BF7\u6C42\u3002"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "\u6CE8\u610F"
      }), "\uFF1A"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\u5728\u540C\u4E00\u7AD9\u70B9\u4E0B\u4F7F\u7528", createVNode(_components.code, {
          children: "withCredentials"
        }), "\u5C5E\u6027\u662F\u65E0\u6548\u7684\u3002"]
      }), "\n", createVNode(_components.li, {
        children: "\u8FD9\u4E2A\u6307\u793A\u4F1A\u88AB\u7528\u505A\u54CD\u5E94\u4E2DCookies\u88AB\u5FFD\u89C6\u7684\u6807\u8BC6\u3002\u9ED8\u8BA4\u662Ffalse\u3002"
      }), "\n", createVNode(_components.li, {
        children: ["\u4E0D\u540C\u57DF\u4E0B\u7684XMLHttpRequest\u54CD\u5E94\uFF0C\u65E0\u8BBA\u5176", createVNode(_components.code, {
          children: "Access-Control-"
        }), " Header\u8BBE\u7F6E\u4EC0\u4E48\u503C\uFF0C\u90FD\u65E0\u6CD5\u4E3A\u5B83\u81EA\u8EAB\u7AD9\u70B9\u8BBE\u7F6ECookie\u503C\uFF08\u9664\u975E", createVNode(_components.strong, {
          children: "\u8BF7\u6C42\u4E4B\u524D"
        }), "\u5C06", createVNode(_components.code, {
          children: "withCredentials"
        }), "\u8BBE\u7F6E\u4E3A", createVNode(_components.code, {
          children: "true"
        }), "\uFF09\u3002"]
      }), "\n"]
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
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " xhr "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequest"
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
              color: "#E1E4E8"
            },
            children: "xhr."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "open"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'GET'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'http://example.com/'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "true"
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
            children: "xhr.withCredentials "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " true"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// \u5728\u53D1\u51FA\u8BF7\u6C42\u4E4B\u524D\u8BBE\u7F6E\u4E3A true"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "xhr."
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
              color: "#79B8FF"
            },
            children: "null"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "\u65B9\u6CD5",
      children: "\u65B9\u6CD5"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#open%E6%96%B9%E6%B3%95",
          children: "open()"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#send%E6%96%B9%E6%B3%95",
          children: "send()"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#getrequestheader%E6%96%B9%E6%B3%95",
          children: "getRequestHeader()"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#setrequestheader%E6%96%B9%E6%B3%95",
          children: "setRequestHeader()"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#getallresponseheaders%E6%96%B9%E6%B3%95",
          children: "getResponseHeaders()"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#overridemimetype%E6%96%B9%E6%B3%95",
          children: "overrideMimeType()"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#abort%E6%96%B9%E6%B3%95",
          children: "abort()"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "open\u65B9\u6CD5",
      children: "open\u65B9\u6CD5"
    }), "\n", createVNode(_components.p, {
      children: "\u8BE5\u65B9\u6CD5\u63A5\u6536\u4E09\u4E2A\u53C2\u6570\uFF1A\u8BF7\u6C42\u7C7B\u578B\uFF08GET\u3001POST\u7B49\uFF09\u3001\u8BF7\u6C42\u7684URL\u3001\u662F\u5426\u5F02\u6B65\u3002"
    }), "\n", createVNode(_components.p, {
      children: "\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0CURL\u662F\u76F8\u5BF9\u4E8E\u4EE3\u7801\u6240\u5728\u7684\u9875\u9762\u7684\uFF0C\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u7EDD\u5BF9URL\u3002\u53E6\u5916\uFF0C\u8C03\u7528open\u65B9\u6CD5\u5E76\u4E0D\u4F1A\u5B9E\u9645\u53D1\u9001\u8BF7\u6C42\uFF0C\u53EA\u662F\u4E3A\u53D1\u9001\u8BF7\u6C42\u505A\u597D\u51C6\u5907\u3002"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "\u6CE8\u610F"
      }), "\uFF1A\u8BF7\u6C42\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u53EA\u80FD\u8BBF\u95EE\u540C\u6E90URL\uFF08\u57DF\u540D\u76F8\u540C\u3001\u7AEF\u53E3\u76F8\u540C\u3001\u534F\u8BAE\u76F8\u540C\uFF09\u3002\u5982\u679C\u8BF7\u6C42\u7684URL\u4E8E\u53D1\u9001\u8BF7\u6C42\u7684\u9875\u9762\u5728\u4EFB\u4F55\u65B9\u9762\u6709\u6240\u4E0D\u540C\uFF0C\u5219\u4F1A\u629B\u51FA\u5B89\u5168\u9519\u8BEF\u3002"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "\u6CE8\u610F"
      }), "\uFF1A\u7531\u4E8E\u540C\u6B65\u7684\u8BF7\u6C42\u4F1A\u963B\u585EJavaScript\u6267\u884C\uFF0C\u6240\u4EE5\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u540C\u6B65\u8BF7\u6C42\u7684\u65B9\u5F0F\u3002"]
    }), "\n", createVNode(_components.h3, {
      id: "send\u65B9\u6CD5",
      children: "send\u65B9\u6CD5"
    }), "\n", createVNode(_components.p, {
      children: "\u8BE5\u65B9\u6CD5\u63A5\u6536\u4E00\u4E2A\u53C2\u6570\uFF1A\u8981\u53D1\u9001\u7684\u6570\u636E\u3002\u5982\u679C\u4E0D\u9700\u8981\u53D1\u9001\u4EFB\u4F55\u6570\u636E\uFF0C\u5219\u5FC5\u987B\u4F20null\uFF08\u56E0\u4E3A\u8BE5\u53C2\u6570\u5728\u67D0\u4E9B\u6D4F\u89C8\u5668\u4E2D\u662F\u5FC5\u9700\u7684\uFF09\u3002\u8C03\u7528send\u65B9\u6CD5\u540E\uFF0C\u8BF7\u6C42\u5C31\u4F1A\u53D1\u9001\u5230\u670D\u52A1\u5668\u3002"
    }), "\n", createVNode(_components.h3, {
      id: "getrequestheader\u65B9\u6CD5",
      children: "getRequestHeader\u65B9\u6CD5"
    }), "\n", createVNode(_components.p, {
      children: "\u8BE5\u65B9\u6CD5\u63A5\u6536\u4E00\u4E2A\u53C2\u6570\uFF1AHeader\u7684\u540D\u79F0\u3002\u8FD4\u56DE\u5305\u542B\u6307\u5B9A\u54CD\u5E94\u5934\u6587\u672C\u7684\u5B57\u7B26\u4E32\u3002"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "\u6CE8\u610F"
      }), "\uFF1A"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "\u5982\u679C\u5728\u8FD4\u56DE\u7684\u54CD\u5E94\u5934\u4E2D\u6709\u591A\u4E2A\u4E00\u6837\u7684\u540D\u79F0\uFF0C\u90A3\u4E48\u8FD4\u56DE\u7684\u503C\u5C31\u4F1A\u662F\u7528\u9017\u53F7\u548C\u7A7A\u683C\u5C06\u503C\u5206\u9694\u7684\u5B57\u7B26\u4E32\u3002\u8BE5\u65B9\u6CD5\u4EE5UTF\u7F16\u7801\u8FD4\u56DE\u503C\u3002"
      }), "\n", createVNode(_components.li, {
        children: "\u641C\u7D22\u7684\u62A5\u6587\u540D\u662F\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u7684\u3002"
      }), "\n", createVNode(_components.li, {
        children: "\u5982\u679C\u8FDE\u63A5\u672A\u5B8C\u6210\uFF08\u54CD\u5E94\u4E2D\u4E0D\u5B58\u5728\u62A5\u6587\u9879\u6216\u8005\u88ABW3C\u9650\u5236\uFF09\uFF0C\u5219\u8FD4\u56DEnull\u3002"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "setrequestheader\u65B9\u6CD5",
      children: "setRequestHeader\u65B9\u6CD5"
    }), "\n", createVNode(_components.p, {
      children: "\u8BBE\u7F6EHTTP\u8BF7\u6C42\u5934\u90E8\u7684\u65B9\u6CD5\u3002"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "\u6CE8\u610F"
      }), "\uFF1A"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\u8BE5\u65B9\u6CD5\u5FC5\u987B\u5728", createVNode(_components.code, {
          children: "open"
        }), "\u65B9\u6CD5\u548C", createVNode(_components.code, {
          children: "send"
        }), "\u65B9\u6CD5\u4E4B\u95F4\u8C03\u7528\u3002"]
      }), "\n", createVNode(_components.li, {
        children: ["\u5982\u679C\u591A\u6B21\u5BF9\u540C\u4E00\u4E2A\u8BF7\u6C42\u5934\u8D4B\u503C\uFF0C\u53EA\u4F1A\u751F\u6210", createVNode(_components.strong, {
          children: "\u4E00\u4E2A\u5408\u5E76\u4E86\u591A\u4E2A\u503C"
        }), "\u7684\u8BF7\u6C42\u5934\u3002"]
      }), "\n", createVNode(_components.li, {
        children: ["\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E", createVNode(_components.a, {
          href: "https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept",
          children: "Accept"
        }), "\u5C5E\u6027\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u8BF7\u6C42\u5934\u4F1A\u88AB\u9ED8\u8BA4\u8BBE\u7F6E\u4E3A", createVNode(_components.code, {
          children: "*/*"
        }), "\u3002"]
      }), "\n", createVNode(_components.li, {
        children: ["\u5B89\u5168\u8D77\u89C1\uFF0C\u6709\u4E9B\u8BF7\u6C42\u5934\u7684\u503C\u53EA\u80FD\u7531UserAgent\u8BBE\u7F6E\uFF1A", createVNode(_components.a, {
          href: "https://developer.mozilla.org/zh-CN/docs/Glossary/Forbidden_header_name",
          children: "\u7981\u6B62\u4FEE\u6539\u7684\u6807\u5934"
        }), "\u548C", createVNode(_components.a, {
          href: "https://developer.mozilla.org/zh-CN/docs/Glossary/Forbidden_response_header_name",
          children: "\u7981\u6B62\u4FEE\u6539\u7684\u54CD\u5E94\u6807\u5934"
        }), "\u3002"]
      }), "\n", createVNode(_components.li, {
        children: ["\u81EA\u5B9A\u4E49\u7684header\u5C5E\u6027\u8FDB\u884C", createVNode(_components.strong, {
          children: "\u8DE8\u57DF\u8BF7\u6C42"
        }), "\u65F6\uFF0C\u53EF\u80FD\u4F1A\u9047\u5230\u201Dnot allowed by Access-Control-Allow-Headers in preflight response\u201D\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u518D\u4F60\u7684\u670D\u52A1\u5668\u8BBE\u7F6E\u201DAccess-Control-Allow-Headers\u201D\u3002"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "getallresponseheaders\u65B9\u6CD5",
      children: "getAllResponseHeaders\u65B9\u6CD5"
    }), "\n", createVNode(_components.p, {
      children: ["\u8FD4\u56DE\u6240\u6709\u7684\u54CD\u5E94\u5934\uFF0C\u4EE5", createVNode(_components.a, {
        href: "https://developer.mozilla.org/zh-CN/docs/Glossary/CRLF",
        children: "CRLF"
      }), "\u5206\u5272\u7684\u5B57\u7B26\u4E32\u3002\u5982\u679C\u6CA1\u6709\u6536\u5230\u4EFB\u4F55\u54CD\u5E94\uFF0C\u5219\u8FD4\u56DE", createVNode(_components.code, {
        children: "null"
      }), "\u3002"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "\u6CE8\u610F"
      }), "\uFF1A\u5BF9\u4E8E", createVNode(_components.a, {
        href: "https://stackoverflow.com/questions/16958448/what-is-http-multipart-request",
        children: "\u590D\u5408\u8BF7\u6C42"
      }), "\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u8FD4\u56DE\u7684\u5F53\u524D\u8BF7\u6C42\u7684\u5934\u90E8\uFF0C\u800C\u4E0D\u662F\u6700\u521D\u7684\u8BF7\u6C42\u5934\u7684\u5934\u90E8\u3002"]
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
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " request "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequest"
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
            children: "// \u4E3A\u4E86\u517C\u5BB9\u6240\u6709\u6D4F\u89C8\u5668\uFF0C\u8BE5\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u5FC5\u987B\u653E\u5728open\u65B9\u6CD5\u6267\u884C\u4E4B\u524D"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "request."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "onreadystatechange"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " function"
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
              color: "#F97583"
            },
            children: "  if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".readyState "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "HEADERS_RECEIVED"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // Get the raw header string"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    var"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " headers "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " request."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getAllResponseHeaders"
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
            children: "    // Convert the header string into an array"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // of individual headers"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    var"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " arr "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " headers."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "trim"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "split"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "[\\r\\n]"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "/"
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
            children: "    // Create a map of header names to values"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    var"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " headerMap "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {};"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    arr."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "forEach"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "line"
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
            children: "      var"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " parts "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " line."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "split"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "': '"
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
              color: "#F97583"
            },
            children: "      var"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " header "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " parts."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "shift"
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
              color: "#F97583"
            },
            children: "      var"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " value "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " parts."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "join"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "': '"
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
            children: "      headerMap[header] "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " value;"
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
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "request."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "open"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"GET\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"foo.txt\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "true"
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
            children: "request."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "send"
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
            children: "// Headers For Example"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// date: Fri, 08 Dec 2017 21:04:30 GMT\\r\\n"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// content-encoding: gzip\\r\\n"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// x-content-type-options: nosniff\\r\\n"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// server: meinheld/0.6.1\\r\\n"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// x-frame-options: DENY\\r\\n"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// content-type: text/html; charset=utf-8\\r\\n"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// connection: keep-alive\\r\\n"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// strict-transport-security: max-age=63072000\\r\\n"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// vary: Cookie, Accept-Encoding\\r\\n"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// content-length: 6502\\r\\n"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// x-xss-protection: 1; mode=block\\r\\n"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "overridemimetype\u65B9\u6CD5",
      children: "overrideMimeType\u65B9\u6CD5"
    }), "\n", createVNode(_components.p, {
      children: "\u8BE5\u65B9\u6CD5\u662F\u6307\u4E00\u4E2AMIME\u7C7B\u578B\u7528\u6237\u66FF\u4EE3\u670D\u52A1\u5668\u6307\u5B9A\u7684\u7C7B\u578B\uFF0C\u4F7F\u670D\u52A1\u7AEF\u54CD\u5E94\u4FE1\u606F\u4E2D\u4F20\u8F93\u7684\u6570\u636E\u6309\u7167\u6307\u5B9AMIME\u7C7B\u578B\u5904\u7406\u3002"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "\u6CE8\u610F"
      }), "\uFF1A"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\u6B64\u65B9\u6CD5\u5FC5\u987B\u5728", createVNode(_components.strong, {
          children: "send\u65B9\u6CD5\u4E4B\u524D"
        }), "\u8C03\u7528\u65B9\u4E3A\u6709\u6548\u3002"]
      }), "\n", createVNode(_components.li, {
        children: ["\u5982\u679C\u670D\u52A1\u5668\u6CA1\u6709\u6307\u5B9A\u4E00\u4E2A", createVNode(_components.code, {
          children: "Content-Type"
        }), "\u5934\uFF0CMIME\u7C7B\u578B\u9ED8\u8BA4\u8BBE\u7F6E\u4E3A", createVNode(_components.code, {
          children: "text/xml"
        }), "\u3002\u5982\u679C\u63A5\u53D7\u7684\u6570\u636E\u4E0D\u662F\u6709\u6548\u7684XML\uFF0C\u5C06\u4F1A\u51FA\u73B0\u201C\u683C\u5F0F\u4E0D\u6B63\u786E\u201D\u7684\u9519\u8BEF\u3002\u4F60\u80FD\u591F\u901A\u8FC7\u8C03\u7528", createVNode(_components.code, {
          children: "overrideMimeType"
        }), "\u65B9\u6CD5\u6307\u5B9A\u5404\u79CD\u7C7B\u578B\u6765\u907F\u514D\u8FD9\u79CD\u60C5\u51B5\u3002"]
      }), "\n"]
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
            children: "// Interpret the received data as plain text"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "req "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequest"
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
              color: "#E1E4E8"
            },
            children: "req."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "overrideMimeType"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"text/plain\""
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
            children: "req."
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
            children: "\"load\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", callback, "
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
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "req."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "open"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"get\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", url);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "req."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "send"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "abort\u65B9\u6CD5",
      children: "abort\u65B9\u6CD5"
    }), "\n", createVNode(_components.p, {
      children: ["\u5982\u679C\u8BF7\u6C42\u5DF2\u88AB\u53D1\u51FA\uFF0C\u8BE5\u65B9\u6CD5\u53EF\u4EE5\u7EC8\u6B62\u8BF7\u6C42\u3002\u5F53\u4E00\u4E2A\u8BF7\u6C42\u88AB\u7EC8\u6B62\uFF0C\u5B83\u7684readyState\u5C06\u88AB\u7F6E\u4E3A", createVNode(_components.code, {
        children: "XMLHttpRequest.UNSENT"
      }), "\uFF080\uFF09\uFF0C\u5E76\u4E14\u8BF7\u6C42\u7684", createVNode(_components.code, {
        children: "status"
      }), "\u7F6E\u4E3A0\u3002"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "\u6CE8\u610F"
      }), "\uFF1A\u5982\u679C\u8BF7\u6C42\u5DF2\u7ECF\u8FBE\u5230\u670D\u52A1\u5668\uFF0C\u670D\u52A1\u5668\u76F8\u5173Controller\u65B9\u6CD5\u5E76\u4E0D\u4F1A\u505C\u6B62\u6267\u884C\uFF0C\u53EA\u4F1A\u9020\u6210\u6267\u884C\u7ED3\u679C\u65E0\u6CD5\u8FD4\u56DE\uFF0C\u5E76\u4E14\u670D\u52A1\u5668\u4F1A\u6709\u62A5\u9519\u63D0\u793A\u3002"]
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
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " xhr "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequest"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(),"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    method "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \"GET\""
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
            children: "    url "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \"https://developer.mozilla.org/\""
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
            children: "xhr."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "open"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(method, url, "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "true"
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
            children: "xhr."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "send"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "OH_NOES_WE_NEED_TO_CANCEL_RIGHT_NOW_OR_ELSE"
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
            children: "  xhr."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "abort"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
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
    }), "\n", createVNode(_components.h2, {
      id: "\u4E8B\u4EF6",
      children: "\u4E8B\u4EF6"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "\u4E8B\u4EF6\u54CD\u5E94\u987A\u5E8F"
      }), "\uFF1Aloadstart -> progress -> (error/abort/load) -> loadend"]
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
            children: "interface"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequestEventTargetEventMap"
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
              color: "#9ECBFF"
            },
            children: "    \"abort\""
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " ProgressEvent"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "XMLHttpRequestEventTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    \"error\""
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " ProgressEvent"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "XMLHttpRequestEventTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    \"load\""
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " ProgressEvent"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "XMLHttpRequestEventTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    \"loadend\""
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " ProgressEvent"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "XMLHttpRequestEventTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    \"loadstart\""
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " ProgressEvent"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "XMLHttpRequestEventTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    \"progress\""
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " ProgressEvent"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "XMLHttpRequestEventTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    \"timeout\""
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " ProgressEvent"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "XMLHttpRequestEventTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">;"
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
            children: "interface"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequestEventTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " extends"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " EventTarget"
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
              color: "#FFAB70"
            },
            children: "    onabort"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "this"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequest"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "ev"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " ProgressEvent"
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
              color: "#79B8FF"
            },
            children: " any"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "|"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " null"
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
              color: "#FFAB70"
            },
            children: "    onerror"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "this"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequest"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "ev"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " ProgressEvent"
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
              color: "#79B8FF"
            },
            children: " any"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "|"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " null"
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
              color: "#FFAB70"
            },
            children: "    onload"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "this"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequest"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "ev"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " ProgressEvent"
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
              color: "#79B8FF"
            },
            children: " any"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "|"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " null"
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
              color: "#FFAB70"
            },
            children: "    onloadend"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "this"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequest"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "ev"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " ProgressEvent"
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
              color: "#79B8FF"
            },
            children: " any"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "|"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " null"
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
              color: "#FFAB70"
            },
            children: "    onloadstart"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "this"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequest"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "ev"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " ProgressEvent"
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
              color: "#79B8FF"
            },
            children: " any"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "|"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " null"
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
              color: "#FFAB70"
            },
            children: "    onprogress"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "this"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequest"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "ev"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " ProgressEvent"
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
              color: "#79B8FF"
            },
            children: " any"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "|"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " null"
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
              color: "#FFAB70"
            },
            children: "    ontimeout"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "this"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequest"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "ev"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " ProgressEvent"
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
              color: "#79B8FF"
            },
            children: " any"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "|"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " null"
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
              color: "#B392F0"
            },
            children: "    addEventListener"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "K"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " extends"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " keyof"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequestEventTargetEventMap"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " K"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "listener"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "this"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequestEventTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "ev"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequestEventTargetEventMap"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "K"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]) "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " any"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "options"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "?:"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " boolean"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " |"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " AddEventListenerOptions"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " void"
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
              color: "#B392F0"
            },
            children: "    addEventListener"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "listener"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " EventListenerOrEventListenerObject"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "options"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "?:"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " boolean"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " |"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " AddEventListenerOptions"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " void"
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
              color: "#B392F0"
            },
            children: "    removeEventListener"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "K"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " extends"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " keyof"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequestEventTargetEventMap"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " K"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "listener"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "this"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequestEventTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "ev"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " XMLHttpRequestEventTargetEventMap"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "K"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]) "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " any"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "options"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "?:"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " boolean"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " |"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " EventListenerOptions"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " void"
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
              color: "#B392F0"
            },
            children: "    removeEventListener"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "listener"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " EventListenerOrEventListenerObject"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "options"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "?:"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " boolean"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " |"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " EventListenerOptions"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " void"
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
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["XMLHttpRequest\u652F\u6301", createVNode(_components.strong, {
        children: "DOM 0\u7EA7\u4E8B\u4EF6\u5904\u7406\u673A\u5236"
      }), "\u548C", createVNode(_components.strong, {
        children: "DOM 2\u7EA7\u4E8B\u4EF6\u5904\u7406\u673A\u5236"
      }), "\u3002"]
    }), "\n", createVNode(_components.h3, {
      id: "dom-0\u7EA7\u4E8B\u4EF6",
      children: "DOM 0\u7EA7\u4E8B\u4EF6"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "onloadstart"
      }), "\n", createVNode(_components.li, {
        children: "onload"
      }), "\n", createVNode(_components.li, {
        children: "onloadend"
      }), "\n", createVNode(_components.li, {
        children: "onprogress"
      }), "\n", createVNode(_components.li, {
        children: "onerror"
      }), "\n", createVNode(_components.li, {
        children: "onabort"
      }), "\n", createVNode(_components.li, {
        children: "ontimeout"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "dom-2\u7EA7\u4E8B\u4EF6",
      children: "DOM 2\u7EA7\u4E8B\u4EF6"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "loadstart: \u5728\u63A5\u6536\u5230\u54CD\u5E94\u7684\u7B2C\u4E00\u4E2A\u5B57\u8282\u65F6\u89E6\u53D1"
      }), "\n", createVNode(_components.li, {
        children: "load: \u5728\u6210\u529F\u63A5\u6536\u5B8C\u6210\u54CD\u5E94\u65F6\u89E6\u53D1"
      }), "\n", createVNode(_components.li, {
        children: ["loadend: \u5728\u901A\u4FE1\u5B8C\u6210\u65F6\uFF0C\u4E14\u5728", createVNode(_components.code, {
          children: "error"
        }), "\u3001", createVNode(_components.code, {
          children: "abort"
        }), "\u6216\u8005", createVNode(_components.code, {
          children: "load"
        }), createVNode(_components.strong, {
          children: "\u4E4B\u540E"
        }), "\u89E6\u53D1"]
      }), "\n", createVNode(_components.li, {
        children: ["progress: \u5728\u63A5\u6536\u54CD\u5E94\u671F\u95F4", createVNode(_components.strong, {
          children: "\u53CD\u590D\u89E6\u53D1"
        })]
      }), "\n", createVNode(_components.li, {
        children: "error: \u5728\u8BF7\u6C42\u51FA\u9519\u65F6\u89E6\u53D1"
      }), "\n", createVNode(_components.li, {
        children: ["abort: \u5728\u8C03\u7528", createVNode(_components.code, {
          children: "abort"
        }), "\u65B9\u6CD5\u7EC8\u6B62\u8FDE\u63A5\u65F6\u89E6\u53D1"]
      }), "\n", createVNode(_components.li, {
        children: ["timeout: \u5982\u679C\u8BBE\u7F6E\u4E86", createVNode(_components.code, {
          children: "timeout"
        }), "\u5927\u4E8E0ms\uFF0C\u5728\u54CD\u5E94\u8D85\u65F6\u65F6\u89E6\u53D1"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "\u6CE8\u610F"
      }), "\uFF1A\u4E3A\u4FDD\u8BC1\u517C\u5BB9\u6027\uFF0C\u6240\u6709\u4E8B\u4EF6\u90FD\u5E94\u5728", createVNode(_components.code, {
        children: "open"
      }), "\u65B9\u6CD5\u6267\u884C\u4E4B\u524D\u6DFB\u52A0\u597D\u3002"]
    }), "\n", createVNode(_components.h2, {
      id: "\u8DE8\u6E90\u8D44\u6E90\u5171\u4EAB",
      children: "\u8DE8\u6E90\u8D44\u6E90\u5171\u4EAB"
    }), "\n", createVNode(_components.p, {
      children: ["\u901A\u8FC7XHR\u8FDB\u884CAjax\u901A\u4FE1\u7684\u4E00\u4E2A", createVNode(_components.strong, {
        children: "\u4E3B\u8981\u9650\u5236"
      }), "\u662F", createVNode(_components.strong, {
        children: "\u8DE8\u6E90\u5B89\u5168\u7B56\u7565"
      }), "\u3002\u8FD9\u4E2A\u5B89\u5168\u9650\u5236\u662F\u4E3A\u4E86\u9632\u6B62\u67D0\u4E9B\u6076\u610F\u884C\u4E3A\u3002\u800C\u8DE8\u6E90\u8D44\u6E90\u5171\u4EAB\uFF08CORS\uFF09\u5B9A\u4E49\u4E86\u6D4F\u89C8\u5668\u4E0E\u670D\u52A1\u5668\u4E4B\u95F4\u5982\u4F55\u5B9E\u73B0\u8DE8\u6E90\u901A\u4FE1\u3002"]
    }), "\n", createVNode(_components.p, {
      children: ["\u8DE8\u6E90\u8D44\u6E90\u5171\u4EAB\u7684\u539F\u7406\u662F\u901A\u8FC7HTTP\u5934\u90E8\u4FE1\u606F\uFF0C\u5141\u8BB8\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u76F8\u4E92\u4E86\u89E3\uFF0C\u4EE5\u786E\u5B9E\u8BF7\u6C42\u6216\u54CD\u5E94\u5E94\u8BE5\u6210\u529F\u8FD8\u662F\u5931\u8D25\u3002\u6700\u57FA\u672C\u7684\u5934\u90E8\u4FE1\u606F\u662F", createVNode(_components.code, {
        children: "origin"
      }), "\u5B57\u6BB5\u3002\u8BE5\u5B57\u6BB5\u5305\u542B\u53D1\u9001\u8BF7\u6C42\u7684\u9875\u9762\u6E90\uFF08\u534F\u8BAE\u3001\u57DF\u540D\u548C\u7AEF\u53E3\uFF09\uFF0C\u4EE5\u4FBF\u670D\u52A1\u5668\u786E\u5B9A\u662F\u5426\u4E3A\u5176\u63D0\u4F9B\u54CD\u5E94\u3002"]
    }), "\n", createVNode(_components.p, {
      children: "\u4E3A\u4E86\u5B89\u5168\u8D77\u89C1\uFF0C\u8DE8\u57DFXHR\u5BF9\u8C61\u65BD\u52A0\u4E86\u4E00\u4E9B\u989D\u5916\u9650\u5236\uFF1A"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\u4E0D\u80FD\u4F7F\u7528", createVNode(_components.code, {
          children: "setRequestHeader"
        }), "\u65B9\u6CD5\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u5934\u90E8\u3002"]
      }), "\n", createVNode(_components.li, {
        children: ["\u4E0D\u80FD\u53D1\u9001\u548C\u63A5\u6536", createVNode(_components.code, {
          children: "Cookie"
        }), "\u3002"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "getAllResponseHeaders"
        }), "\u65B9\u6CD5\u59CB\u7EC8\u8FD4\u56DE\u7A7A\u5B57\u7B26\u4E32\u3002"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["CORS\u901A\u8FC7\u4E00\u79CD\u53EB", createVNode(_components.strong, {
        children: "\u9884\u68C0\u8BF7\u6C42"
      }), "\u7684\u670D\u52A1\u5668\u9A8C\u8BC1\u673A\u5236\u3002\u4EE5\u4E0B\u60C5\u51B5\u4F1A\u89E6\u53D1\u9884\u68C0\u673A\u5236\uFF1A"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "\u81EA\u5B9A\u4E49\u5934\u90E8"
      }), "\n", createVNode(_components.li, {
        children: "\u9664GET\u548CPOST\u4E4B\u5916\u7684\u65B9\u6CD5"
      }), "\n", createVNode(_components.li, {
        children: "\u4E0D\u540C\u8BF7\u6C42\u4F53\u5185\u5BB9\u7C7B\u578B"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["\u9884\u68C0\u8BF7\u6C42\u4F7F\u7528", createVNode(_components.code, {
        children: "OPTIONS"
      }), "\u65B9\u6CD5\uFF0C\u5E76\u5305\u542B\u4EE5\u4E0B\u5934\u90E8\uFF1A"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Origin\uFF1A\u4E0E\u7B80\u5355\u8BF7\u6C42\u76F8\u540C\u3002"
      }), "\n", createVNode(_components.li, {
        children: "Access-Control-Request-Method\uFF1A\u8BF7\u6C42\u5E0C\u671B\u4F7F\u7528\u7684\u65B9\u6CD5\u3002"
      }), "\n", createVNode(_components.li, {
        children: "Access-Control-Request-Headers\uFF1A\uFF08\u53EF\u9009\uFF09\u8981\u4F7F\u7528\u7684\u81EA\u5B9A\u4E49\u5934\u90E8\uFF08\u9017\u53F7\u5206\u9694\u7684\u5217\u8868\uFF09\u3002"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "\u8FD9\u4E2A\u8BF7\u6C42\u53D1\u9001\u540E\uFF0C\u670D\u52A1\u5668\u53EF\u4EE5\u786E\u5B9A\u662F\u5426\u5141\u8BB8\u8FD9\u79CD\u7C7B\u578B\u7684\u8BF7\u6C42\u3002\u5728\u54CD\u5E94\u4E2D\uFF0C\u670D\u52A1\u5668\u4F1A\u8FD4\u56DE\u5982\u4E0B\u5934\u90E8\u4FE1\u606F\uFF1A"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Access-Control-Allow-Origin\uFF1A\u4E0E\u7B80\u5355\u8BF7\u6C42\u76F8\u540C\u3002"
      }), "\n", createVNode(_components.li, {
        children: "Access-Control-Allow-Methods\uFF1A \u5141\u8BB8\u7684\u65B9\u6CD5\uFF08\u9017\u53F7\u5206\u9694\u7684\u5217\u8868\uFF09\u3002"
      }), "\n", createVNode(_components.li, {
        children: "Access-Control-Allow-Headers\uFF1A\u670D\u52A1\u5668\u5141\u8BB8\u7684\u5934\u90E8\uFF08\u9017\u53F7\u5206\u9694\u7684\u5217\u8868\uFF09\u3002"
      }), "\n", createVNode(_components.li, {
        children: "Access-Control-Max-Age\uFF1A\u7F13\u5B58\u9884\u68C0\u8BF7\u6C42\u7684\u79D2\u6570\u3002"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["\u4E0A\u9762\u8BF4\u5230\u4E86CORS\u8BF7\u6C42\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F1A\u5B58\u5728\u4E00\u4E9B\u9650\u5236\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5C06", createVNode(_components.code, {
        children: "withCredentials"
      }), "\u5C5E\u6027\u8BBE\u7F6E\u4E3A", createVNode(_components.code, {
        children: "true"
      }), "\u6765\u8868\u660E\u8BF7\u6C42\u4F1A\u53D1\u9001\u51ED\u636E\uFF08Cookie\u3001HTTP\u8BA4\u8BC1\u548C\u5BA2\u6237\u7AEFSSL\u8BC1\u4E66\uFF09\u3002\u5982\u679C\u670D\u52A1\u5668\u5141\u8BB8\u5E26\u51ED\u636E\u7684\u8BF7\u6C42\uFF0C\u90A3\u4E48\u53EF\u4EE5\u5728\u54CD\u5E94\u4E2D\u5305\u542B\u5982\u4E0BHTTP\u5934\u90E8\uFF1A"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Access-Control-Allow-Credentials: true"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "\u5982\u679C\u53D1\u9001\u4E86\u51ED\u636E\u8BF7\u6C42\u800C\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u54CD\u5E94\u4E2D\u6CA1\u6709\u8FD9\u4E2A\u5934\u90E8\uFF0C\u5219\u6D4F\u89C8\u5668\u4E0D\u4F1A\u628A\u54CD\u5E94\u4EA4\u7ED9JavaScript\uFF08responseText\u4E3A\u7A7A\uFF0Cstatus\u662F0\uFF0Conerror\u88AB\u89E6\u53D1\uFF09\u3002"
    }), "\n", createVNode(_components.h2, {
      id: "\u65E9\u671F\u7684\u8DE8\u57DF\u65B9\u6848",
      children: "\u65E9\u671F\u7684\u8DE8\u57DF\u65B9\u6848"
    }), "\n", createVNode(_components.p, {
      children: "\u5728\u6CA1\u6709CORS\u4E4B\u524D\uFF0C\u5F00\u53D1\u8005\u9700\u8981\u5229\u7528DOM\u7279\u6027\u53D1\u9001\u8DE8\u57DF\u8BF7\u6C42\u3002"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "\u56FE\u7247\u63A2\u6D4B"
      }), "\n", createVNode(_components.li, {
        children: "JSONP"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "\u6CE8\u610F\u4E8B\u9879",
      children: "\u6CE8\u610F\u4E8B\u9879"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "\u5BF9\u4E8EHTTP\u8BF7\u6C42\u72B6\u6001\u7684\u5224\u65AD\uFF0C\u8BF7\u4F7F\u7528status\u800C\u4E0D\u662FstatusText\uFF0C\u56E0\u4E3A\u540E\u8005\u5DF2\u7ECF\u88AB\u8BC1\u660E\u5728\u8DE8\u6D4F\u89C8\u5668\u7684\u60C5\u51B5\u4E0B\u4E0D\u53EF\u9760\u3002"
      }), "\n", createVNode(_components.li, {
        children: "\u65E0\u8BBA\u662F\u4EC0\u4E48\u54CD\u5E94\u5185\u5BB9\u7C7B\u578B\uFF0CresponseText\u5C5E\u6027\u59CB\u7EC8\u90FD\u4F1A\u4FDD\u5B58\u54CD\u5E94\u4F53\uFF0C\u800CresponseXML\u5C5E\u6027\u4E0D\u4E00\u5B9A\u3002"
      }), "\n", createVNode(_components.li, {
        children: ["response\u5C5E\u6027\u4F1A\u6839\u636EresponseType\u6765\u81EA\u52A8\u5E8F\u5217\u5316\u6570\u636E\u3002\u76EE\u524D\u6765\u770B\uFF0C\u517C\u5BB9\u6027\u4E0D\u6210\u95EE\u9898\uFF0C\u6240\u4EE5", createVNode(_components.strong, {
          children: "\u63A8\u8350\u4F7F\u7528"
        }), "\u3002"]
      }), "\n", createVNode(_components.li, {
        children: ["\u4E3A\u4E86\u4FDD\u8BC1\u8DE8\u6D4F\u89C8\u5668\u517C\u5BB9\uFF0C", createVNode(_components.code, {
          children: "onreadystatechange"
        }), "\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u5E94\u8BE5\u5728", createVNode(_components.code, {
          children: "open"
        }), "\u65B9\u6CD5\u4E4B\u524D\u8D4B\u503C\u3002"]
      }), "\n", createVNode(_components.li, {
        children: ["\u4E3A\u4E86\u4FDD\u8BC1\u8BF7\u6C42\u5934\u90E8\u88AB\u53D1\u9001\uFF0C", createVNode(_components.code, {
          children: "setRequestHeader"
        }), "\u65B9\u6CD5\u5FC5\u987B\u5728", createVNode(_components.code, {
          children: "open"
        }), createVNode(_components.strong, {
          children: "\u65B9\u6CD5\u4E4B\u540E"
        }), "\u3001", createVNode(_components.code, {
          children: "send"
        }), createVNode(_components.strong, {
          children: "\u65B9\u6CD5\u4E4B\u524D"
        }), "\u88AB\u8C03\u7528\u3002"]
      }), "\n", createVNode(_components.li, {
        children: "POST\u8BF7\u6C42\u76F8\u6BD4GET\u8BF7\u6C42\u8981\u5360\u7528\u66F4\u591A\u7684\u8D44\u6E90\u3002\u4ECE\u6027\u80FD\u65B9\u9762\u8BF4\uFF0C\u53D1\u9001\u76F8\u540C\u6570\u91CF\u7684\u6570\u636E\uFF0CGET\u8BF7\u6C42\u6BD4POST\u8BF7\u6C42\u8981\u5FEB\u4E24\u500D\u3002"
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "Content-Type"
        }), "\u5982\u679C\u662F", createVNode(_components.code, {
          children: "application/x-www-formurlencoded"
        }), "\uFF0C\u4F7F\u7528", createVNode(_components.code, {
          children: "URLSearchParams"
        }), "\u6765\u521B\u5EFA\u6570\u636E\uFF1B\u5982\u679C\u662F", createVNode(_components.code, {
          children: "multipart/form-data"
        }), "\uFF0C\u4F7F\u7528", createVNode(_components.code, {
          children: "FormData"
        }), "\u6765\u521B\u5EFA\u6570\u636E\u3002"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "\u53C2\u8003",
      children: "\u53C2\u8003"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest",
          children: "\u3010MDN\u3011XMLHttpRequest"
        })
      }), "\n", createVNode(_components.li, {
        children: "JavaScript\u9AD8\u7EA7\u7A0B\u5E8F\u8BBE\u8BA1"
      }), "\n"]
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
const url = "src/content/archive/XMLHttpRequest%E7%9A%84%E5%B1%9E%E6%80%A7%E5%92%8C%E6%96%B9%E6%B3%95.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/archive/XMLHttpRequest的属性和方法.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/archive/XMLHttpRequest的属性和方法.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
