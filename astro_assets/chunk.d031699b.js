import { _ as __astro_tag_component__, F as Fragment, q as createVNode } from './chunk.58a66e60.js';
import { $ as $$Image } from './chunk.4df0e139.js';

const frontmatter = {
  "title": "JavaScript\u4E2D\u7684const\u3001let\u548Cvar\u7684\u533A\u522B",
  "description": "",
  "pubDate": "Mon Jun 01 2020 22:03:00 GMT+0800",
  "heroImage": ""
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "\u53D8\u91CF\u7684\u521B\u5EFA",
    "text": "\u53D8\u91CF\u7684\u521B\u5EFA"
  }, {
    "depth": 2,
    "slug": "const\u548Clet",
    "text": "const\u548Clet"
  }, {
    "depth": 2,
    "slug": "constlet\u4E0Evar\u7684\u533A\u522B",
    "text": "const\u3001let\u4E0Evar\u7684\u533A\u522B"
  }, {
    "depth": 3,
    "slug": "\u4F5C\u7528\u57DF",
    "text": "\u4F5C\u7528\u57DF"
  }, {
    "depth": 3,
    "slug": "\u53D8\u91CF\u63D0\u5347",
    "text": "\u53D8\u91CF\u63D0\u5347"
  }, {
    "depth": 3,
    "slug": "\u91CD\u590D\u58F0\u660E",
    "text": "\u91CD\u590D\u58F0\u660E"
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
    code: "code",
    h2: "h2",
    ol: "ol",
    li: "li",
    strong: "strong",
    pre: "pre",
    span: "span",
    h3: "h3",
    em: "em"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["JavaScript\u662F\u4E00\u95E8\u5F31\u7C7B\u578B\u8BED\u8A00\u3002\u5728ES3\u548CES5\u65F6\u671F\uFF0C\u6211\u4EEC\u90FD\u662F\u901A\u8FC7", createVNode(_components.code, {
        children: "var"
      }), "\u6765\u58F0\u660E\u4E00\u4E2A\u53D8\u91CF\u7684\u3002\u90A3\u4E2A\u65F6\u5019\u7684\u524D\u7AEF\u5F00\u53D1\u76F8\u5BF9\u7B80\u5355\uFF0CJavaScript\u901A\u5E38\u662F\u88AB\u7528\u6765\u505A\u4E9B\u666F\u4E0A\u6DFB\u82B1\u7684\u5C0F\u529F\u80FD\uFF0C\u6240\u4EE5\u5B8C\u5168\u80FD\u591F\u5E94\u4ED8\u6211\u4EEC\u7684\u65E5\u5E38\u5F00\u53D1\u5DE5\u4F5C\u3002\u4F46\u662F\u968F\u7740\u79FB\u52A8\u4E92\u8054\u7F51\u7684\u5174\u8D77\uFF0CH5\u5E94\u7528\u9002\u5E94\u5FEB\u901F\u8FED\u4EE3\u7684\u5C5E\u6027\u4F7F\u524D\u7AEF\u5F97\u5230\u4E86\u5FEB\u901F\u53D1\u5C55\uFF0C\u540C\u65F6\u4E5F\u51F8\u663E\u51FA\u4E86JavaScript\u5728\u5927\u578B\u9879\u76EE\u5F00\u53D1\u4E2D\u7684\u52A3\u52BF\u3002\u56E0\u6B64\uFF0C\u8BED\u8A00\u7684\u5347\u7EA7\u52BF\u5728\u5FC5\u884C\uFF0C\u800C\u53D8\u91CF\u58F0\u660E\u7684\u65B9\u5F0F\u5219\u662F\u5176\u4E2D\u4E00\u4E2A\u9700\u8981\u4F18\u5316\u7684\u5185\u5BB9\u3002\u6240\u4EE5\uFF0C\u4ECA\u5929\u6211\u4EEC\u7684\u4E3B\u9898\u5C31\u662F\u8BF4\u8BF4\u53D8\u91CF\u58F0\u660E\u2014\u2014\u2014\u2014", createVNode(_components.code, {
        children: "const"
      }), "\u548C", createVNode(_components.code, {
        children: "let"
      }), "\u3002"]
    }), "\n", createVNode(_components.h2, {
      id: "\u53D8\u91CF\u7684\u521B\u5EFA",
      children: "\u53D8\u91CF\u7684\u521B\u5EFA"
    }), "\n", createVNode(_components.p, {
      children: "\u9996\u5148\uFF0C\u6211\u8981\u8BB2\u6E05\u695A\u53D8\u91CF\u58F0\u660E\u5B58\u5728\u4E09\u4E2A\u6B65\u9AA4\uFF1A"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "\u521B\u5EFA\u53D8\u91CF\uFF1B"
      }), "\n", createVNode(_components.li, {
        children: "\u521D\u59CB\u5316\u53D8\u91CF\uFF1B"
      }), "\n", createVNode(_components.li, {
        children: "\u7ED9\u53D8\u91CF\u8D4B\u503C\u3002"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["\u8FD9\u4E09\u4E2A\u6B65\u9AA4\u7684\u5FAE\u5999\u5DEE\u5F02\uFF0C\u6B63\u662F", createVNode(_components.code, {
        children: "const"
      }), "\u3001", createVNode(_components.code, {
        children: "let"
      }), "\u3001 ", createVNode(_components.code, {
        children: "var"
      }), "\u4E4B\u95F4\u7684\u4E0D\u540C\u4E4B\u5904\u3002\u90A3\u4E0B\u9762\u6211\u4EEC\u6765\u597D\u597D\u8BB2\u8BB2\u4ED6\u4EEC\u4E4B\u95F4\u7684\u5DEE\u5F02\u3002"]
    }), "\n", createVNode(_components.h2, {
      id: "const\u548Clet",
      children: "const\u548Clet"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: [createVNode(_components.code, {
          children: "const"
        }), "\u547D\u4EE4\u662F\u6307\u58F0\u660E\u4E00\u4E2A\u5E38\u91CF\u3002", createVNode(_components.code, {
          children: "const"
        }), "\u53EA\u80FD\u8FDB\u884C\u53D8\u91CF\u7684\u521B\u5EFA\u548C\u53D8\u91CF\u521D\u59CB\u5316\uFF0C\u800C\u4E0D\u80FD\u8FDB\u884C\u53D8\u91CF\u8D4B\u503C\u3002"]
      }), " \u4E5F\u5C31\u662F\u8BF4\uFF0C", createVNode(_components.code, {
        children: "const"
      }), "\u53EA\u80FD\u8FDB\u884C\u4E0A\u9762\u8BF4\u76841\u30012\u6B65\u3002"]
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
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " a"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "a "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 2"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " // Uncaught TypeError: Assignment to constant variable."
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["\u53EF\u4EE5\u770B\u5230\uFF0C\u5F53\u6211\u4EEC\u5BF9", createVNode(_components.code, {
        children: "const"
      }), "\u58F0\u660E\u7684\u53D8\u91CF\u8FDB\u884C\u8D4B\u503C\u65F6\uFF0C\u6D4F\u89C8\u5668\u62A5\u4E86\u76F8\u5E94\u7684\u9519\u8BEF\u3002"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: [createVNode(_components.code, {
          children: "let"
        }), "\u547D\u4EE4\u662F\u6307\u58F0\u660E\u4E00\u4E2A\u53D8\u91CF\u3002", createVNode(_components.code, {
          children: "let"
        }), "\u53EF\u4EE5\u8FDB\u884C\u53D8\u91CF\u7684\u521B\u5EFA\u3001\u53D8\u91CF\u7684\u521D\u59CB\u5316\u548C\u53D8\u91CF\u7684\u8D4B\u503C\u3002"]
      })
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
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " a "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "a "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 2"
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
            children: "(a) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 2"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["\u53EF\u4EE5\u770B\u5230\uFF0C\u5F53\u6211\u4EEC\u5BF9", createVNode(_components.code, {
        children: "let"
      }), "\u58F0\u660E\u7684\u53D8\u91CF\u8FDB\u884C\u8D4B\u503C\u65F6\uFF0C\u53D8\u91CF\u5BF9\u5E94\u7684\u503C\u4F1A\u8FDB\u884C\u76F8\u5E94\u7684\u6539\u53D8\u3002"]
    }), "\n", createVNode(_components.h2, {
      id: "constlet\u4E0Evar\u7684\u533A\u522B",
      children: "const\u3001let\u4E0Evar\u7684\u533A\u522B"
    }), "\n", createVNode(_components.p, {
      children: ["JavaScript\u662F\u4E00\u95E8\u5F31\u7C7B\u578B\u8BED\u8A00\u3002\u5B83\u4E0D\u4F1A\u5728\u58F0\u660E\u65F6\u8981\u6C42\u53D8\u91CF\u786E\u5B9A\u7C7B\u578B\uFF0C\u751A\u81F3\u4F60\u53EF\u4EE5\u968F\u65F6\u4FEE\u6539\u53D8\u91CF\u7684\u7C7B\u578B\u3002\u90A3\u65E2\u7136\u662F\u5F31\u7C7B\u578B\u8BED\u8A00\uFF0C", createVNode(_components.code, {
        children: "var"
      }), "\u4F3C\u4E4E\u8DB3\u4EE5\u6EE1\u8DB3\u6240\u6709\u7684\u9700\u6C42\u4E86\uFF0C\u4E3A\u4EC0\u4E48\u8FD8\u9700\u8981", createVNode(_components.code, {
        children: "const"
      }), "\u548C", createVNode(_components.code, {
        children: "let"
      }), "\u5462\uFF1F"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: ["\u539F\u56E0\u662F", createVNode(_components.code, {
          children: "var"
        }), "\u592A\u7075\u6D3B\u4E86\u3002"]
      }), " \u5F88\u591A\u65F6\u5019\uFF0C\u6211\u4EEC\u65E0\u6CD5\u5BF9", createVNode(_components.code, {
        children: "var"
      }), "\u8FDB\u884C\u7EA6\u675F\uFF0C\u8FD9\u4F1A\u5BFC\u81F4\u6211\u4EEC\u7684\u7A0B\u5E8F\u4E2D\u51FA\u73B0\u610F\u60F3\u4E0D\u5230\u7684\u95EE\u9898\u3002\u800C", createVNode(_components.code, {
        children: "const"
      }), "\u548C", createVNode(_components.code, {
        children: "let"
      }), "\u5C31\u662F\u7528\u6765\u7EA6\u675F\u6211\u4EEC\u53D8\u91CF\u7684\u4F7F\u7528\uFF0C\u5C3D\u53EF\u80FD\u5730\u51CF\u5C11\u610F\u60F3\u4E0D\u5230\u7684\u95EE\u9898\u3002"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "var"
        }), "\u5B58\u5728\u53D8\u91CF\u63D0\u5347\u7684\u95EE\u9898\u3002"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "var"
        }), "\u4E0D\u652F\u6301\u5757\u7EA7\u4F5C\u7528\u57DF\u3002"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "var"
        }), "\u53EF\u4EE5\u5728\u9759\u9ED8\u72B6\u6001\u4E0B\u91CD\u590D\u58F0\u660E\u3002"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["\u4E0A\u9762\u6211\u4EEC\u5DF2\u7ECF\u8BB2\u5230\u4E86", createVNode(_components.code, {
        children: "var"
      }), "\u7684\u95EE\u9898\uFF0C\u90A3\u4E48\u6211\u5C31\u4ECE\u8FD9\u4E09\u4E2A\u95EE\u9898\u51FA\u53D1\u6765\u8BB2\u8BB2", createVNode(_components.code, {
        children: "const"
      }), "\u3001", createVNode(_components.code, {
        children: "let"
      }), "\u3001", createVNode(_components.code, {
        children: "var"
      }), "\u4E09\u8005\u4E4B\u95F4\u7684\u533A\u522B\u3002"]
    }), "\n", createVNode(_components.h3, {
      id: "\u4F5C\u7528\u57DF",
      children: "\u4F5C\u7528\u57DF"
    }), "\n", createVNode(_components.p, {
      children: "\u4F5C\u7528\u57DF\u5728\u9AD8\u7EA7\u8BED\u8A00\u4E2D\u662F\u4E00\u4E2A\u975E\u5E38\u91CD\u8981\u7684\u6982\u5FF5\u3002\u4F5C\u7528\u57DF\u76F8\u5F53\u4E8E\u4E00\u4E2A\u5BB9\u5668\uFF0C\u53D8\u91CF\u548C\u51FD\u6570\u90FD\u653E\u5728\u8FD9\u4E2A\u5BB9\u5668\u91CC\u9762\u3002\u7406\u8BBA\u4E0A\u6765\u8BF4\uFF0C\u5BB9\u5668\u5916\u9762\u4E0D\u80FD\u8BBF\u95EE\u5BB9\u5668\u91CC\u9762\u58F0\u660E\u7684\u53D8\u91CF\u548C\u51FD\u6570\uFF0C\u4F46\u5BB9\u5668\u5185\u53EF\u4EE5\u8C03\u7528\u7236\u7956\u7EA7\u5BB9\u5668\u7684\u53D8\u91CF\u548C\u51FD\u6570\u3002\u4E3E\u4E2A\u6817\u5B50\uFF1A"
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
            children: " a "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
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
            children: " foo"
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
            children: "  var"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " b "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 2"
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
            children: "(a) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 1"
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
              color: "#B392F0"
            },
            children: "foo"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()"
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
            children: "(b) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Uncaught ReferenceError: b is not defined"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["\u8FD9\u91CC", createVNode(_components.code, {
        children: "function foo"
      }), "\u521B\u5EFA\u4E86\u4E00\u4E2A", createVNode(_components.strong, {
        children: "foo scope"
      }), "\uFF0C\u5168\u5C40\u6709\u4E00\u4E2A", createVNode(_components.strong, {
        children: "global scope"
      }), "\u3002"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: [createVNode(_components.code, {
          children: "global scope"
        }), "\u4E2D\u5B58\u5728\u53D8\u91CFa\u548C\u51FD\u6570foo\uFF0C", createVNode(_components.code, {
          children: "foo scope"
        }), "\u4E2D\u5B58\u5728\u53D8\u91CFb\u3002\u5728", createVNode(_components.code, {
          children: "foo scope"
        }), "\u4E2D\uFF0C\u6211\u4EEC\u80FD\u8BBF\u95EE\u5230\u53D8\u91CFa\uFF1B\u4F46\u5728", createVNode(_components.code, {
          children: "global scope"
        }), "\u4E2D\uFF0C\u6211\u4EEC\u8BBF\u95EE\u4E0D\u5230\u53D8\u91CFb\uFF0C\u8FD9\u5C31\u662F\u4F5C\u7528\u57DF\u3002\u800C", createVNode(_components.code, {
          children: "global scope"
        }), "\u4E0E", createVNode(_components.code, {
          children: "foo scope"
        }), "\u4E4B\u95F4\u7684\u5173\u7CFB\uFF0C\u6211\u4EEC\u79F0\u4E4B\u4E3A\u4F5C\u7528\u57DF\u94FE\u3002"]
      })
    }), "\n", createVNode(_components.p, {
      children: ["ES3\u548CES5\u4E2D\uFF0C", createVNode(_components.strong, {
        children: "\u4F5C\u7528\u57DF\u7684\u521B\u5EFA\u65B9\u5F0F"
      }), "\u53EA\u6709", createVNode(_components.strong, {
        children: "function"
      }), "\u3001", createVNode(_components.strong, {
        children: "with"
      }), "\u548C", createVNode(_components.strong, {
        children: "catch"
      }), "\u3002", createVNode(_components.code, {
        children: "function"
      }), "\u662F\u5E38\u7528\u7684\u521B\u5EFA\u4F5C\u7528\u57DF\u7684\u65B9\u5F0F\uFF1B", createVNode(_components.code, {
        children: "with"
      }), "\u5DF2\u7ECF\u88AB\u629B\u5F03\uFF0C\u56E0\u4E3A\u5B83\u4F1A\u5BFC\u81F4\u4F5C\u7528\u57DF\u94FE\u53D1\u751F\u53D8\u5316\uFF0C\u5BFC\u81F4\u6D4F\u89C8\u5668\u6240\u6709\u7684\u4F18\u5316\u90FD\u5931\u6548\uFF1B", createVNode(_components.code, {
        children: "catch"
      }), "\u7ECF\u5E38\u7528\u4E8E\u6355\u83B7error\u3002"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "ES6\u6709\u4E86\u5757\u7EA7\u4F5C\u7528\u57DF\u7684\u6982\u5FF5\u3002"
      }), " ", createVNode(_components.strong, {
        children: "const"
      }), "\u548C", createVNode(_components.strong, {
        children: "let"
      }), "\u547D\u4EE4\u5C31\u662F\u4F5C\u7528\u4E8E\u5757\u7EA7\u4F5C\u7528\u57DF\u3002"]
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
              color: "#E1E4E8"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  var"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " a "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " b "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 2"
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
            children: " c"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 3"
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
            children: "(a) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 1"
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
            children: "(b) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Uncaught ReferenceError: b is not defined"
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
            children: "(c) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Uncaught ReferenceError: c is not defined"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["\u4ECE\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\u53EF\u4EE5\u770B\u5230\uFF0C", createVNode(_components.code, {
        children: "var"
      }), "\u547D\u4EE4\u4E0D\u53D7\u5757\u7EA7\u4F5C\u7528\u57DF\u7684\u5F71\u54CD\uFF0C\u53EF\u4EE5\u6B63\u5E38\u8BBF\u95EE\uFF1B", createVNode(_components.code, {
        children: "const"
      }), "\u548C", createVNode(_components.code, {
        children: "let"
      }), "\u53D7\u5230\u5757\u7EA7\u4F5C\u7528\u57DF\u7684\u5F71\u54CD\uFF0C\u5728\u5757\u7EA7\u4F5C\u7528\u57DF\u4EE5\u5916\u65E0\u6CD5\u6B63\u5E38\u8BBF\u95EE\u3002\u4F9D\u636E\u8FD9\u4E2A\u7279\u6027\uFF0C\u6211\u60F3\u7406\u89E3", createVNode(_components.code, {
        children: "for"
      }), "\u5FAA\u73AF\u7684\u8FD9\u4E2A\u95EE\u9898\u5E94\u8BE5\u4F1A\u53D8\u5F97\u5BB9\u6613\u5F88\u591A\uFF1A"]
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
            children: "for"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " i "
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
            children: "; i "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 6"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "; i"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "++"
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
              color: "#B392F0"
            },
            children: "  setTimeout"
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
            children: "() {"
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
            children: "(i) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 6, 6, 6, 6, 6, 6"
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
            children: "20"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
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
            children: "for"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " i "
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
            children: "; i "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 6"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "; i"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "++"
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
              color: "#B392F0"
            },
            children: "  setTimeout"
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
            children: "() {"
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
            children: "(i) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 0, 1, 2, 3, 4, 5"
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
            children: "20"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
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
      children: ["\u8FD9\u9053\u9898\u975E\u5E38\u7684\u7ECF\u5178\u3002\u4ECE", createVNode(_components.em, {
        children: "\u4F5C\u7528\u57DF"
      }), "\u7684\u89D2\u5EA6\u80FD\u5F88\u597D\u7684\u89E3\u91CA\u95EE\u9898\u7684\u539F\u56E0\u3002"]
    }), "\n", createVNode(_components.h3, {
      id: "\u53D8\u91CF\u63D0\u5347",
      children: "\u53D8\u91CF\u63D0\u5347"
    }), "\n", createVNode(_components.p, {
      children: ["\u8C08\u5230JavaScript\uFF0C\u6211\u4EEC\u77E5\u9053", createVNode(_components.code, {
        children: "var"
      }), "\u548C", createVNode(_components.code, {
        children: "function"
      }), "\u4F1A\u5B58\u5728\u53D8\u91CF\u63D0\u5347\u7684\u60C5\u51B5\uFF0C\u4E5F\u5C31\u662F\u5373\u4F7F\u8C03\u7528\u5728\u58F0\u660E\u4E4B\u524D\uFF0C\u53D8\u91CF\u548C\u65B9\u6CD5\u4F9D\u7136\u80FD\u591F\u8BBF\u95EE\u800C\u4E0D\u4F1A\u62A5\u9519\u3002"]
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
            children: "(a) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// undefined"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "foo"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// foo"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
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
            children: " a "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
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
            children: " foo"
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
            children: "'foo'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
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
      children: ["\u4E0A\u9762\u7684\u4F8B\u5B50\u6211\u4EEC\u53D1\u73B0\uFF0C\u5373\u4F7F", createVNode(_components.code, {
        children: "var"
      }), "\u5B9A\u4E49\u7684\u53D8\u91CF\u5199\u5728\u58F0\u660E\u4E4B\u524D\u4F9D\u7136\u80FD\u591F\u8BBF\u95EE\uFF0C\u53EA\u662F\u8FD4\u56DE\u7684\u503C\u4E3Aundefined\uFF1B", createVNode(_components.code, {
        children: "function"
      }), "\u4E5F\u662F\u80FD\u6B63\u5E38\u8BBF\u95EE\uFF0C\u8FD8\u80FD\u5F97\u5230\u9884\u671F\u7684\u7ED3\u679C\uFF0C\u8FD9\u5C31\u662F\u53D8\u91CF\u63D0\u5347\u3002"]
    }), "\n", createVNode(_components.p, {
      children: ["\u5728JavaScript\u4E2D\uFF0C\u4E00\u4E2A\u53D8\u91CF\u9996\u5148\u4F1A\u88AB", createVNode(_components.strong, {
        children: "\u521B\u5EFA"
      }), "\uFF0C\u7136\u540E\u662F", createVNode(_components.strong, {
        children: "\u521D\u59CB\u5316"
      }), "\uFF0C\u6700\u540E\u5C31\u662F", createVNode(_components.strong, {
        children: "\u8D4B\u503C"
      }), "\u3002"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: ["\u6211\u4EEC\u4ECE\u4E0A\u9762\u7684\u4EE3\u7801\u6765\u770B\u8FD9\u4E09\u4E2A\u64CD\u4F5C\uFF0C\u9996\u5148JavaScript\u5F15\u64CE\u4F1A\u627E\u5230", createVNode(_components.code, {
          children: "var a"
        }), "\uFF0C\u7136\u540E\u544A\u8BC9\u4F5C\u7528\u57DF\u521B\u5EFA\u4E00\u4E2A\u540D\u79F0\u4E3Aa\u7684\u53D8\u91CF\uFF1B\u7136\u540E\u4F1A\u9A6C\u4E0A\u521D\u59CB\u5316\u5B83\uFF0C\u6B64\u65F6\u521D\u59CB\u5316\u7684\u503C\u4E3Aundefined\uFF1B\u6700\u540E\u4EE3\u7801\u6267\u884C\u5230\u7F16\u5199\u7684\u4F4D\u7F6E\u65F6\u4F1A\u7ED9\u53D8\u91CFa\u8D4B\u503C\u4E3A1\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u6211\u4EEC", createVNode(_components.code, {
          children: "console.log(a)"
        }), "\u7684\u7ED3\u679C\u4E3Aundefined\u7684\u539F\u56E0\u662F\u53D8\u91CFa\u7684\u521B\u5EFA\u548C\u521D\u59CB\u5316\u7684\u8FC7\u7A0B\u88AB\u63D0\u5347\u4E86\u3002"]
      })
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
            children: "(a) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 1"
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
            children: "(b) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Uncaught ReferenceError: b is not defined"
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
            children: "(c) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Uncaught ReferenceError: c is not defined"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
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
            children: " a "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " b "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 2"
          })]
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
            children: " c"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 3"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["\u8FD9\u91CC\u6211\u4EEC\u8BD5\u9A8C\u4E00\u4E0B", createVNode(_components.code, {
        children: "const"
      }), "\u548C", createVNode(_components.code, {
        children: "let"
      }), "\u547D\u4EE4\uFF0C\u53D1\u73B0\u4ED6\u4EEC\u90FD\u62A5\u9519\u4E86\u3002\u90A3\u4E48\u662F\u4E0D\u662F\u8BF4", createVNode(_components.code, {
        children: "const"
      }), "\u548C", createVNode(_components.code, {
        children: "let"
      }), "\u4E0D\u5B58\u5728\u53D8\u91CF\u63D0\u5347\u5462\uFF1F"]
    }), "\n", createVNode(_components.p, {
      children: ["\u5176\u5B9E\u4E25\u683C\u610F\u4E49\u4E0A\u6765\u8BB2\uFF0C", createVNode(_components.code, {
        children: "const"
      }), "\u548C", createVNode(_components.code, {
        children: "let"
      }), "\u4F9D\u7136\u5B58\u5728\u53D8\u91CF\u63D0\u5347\u7684\u60C5\u51B5\u3002\u53EA\u662F\u4E0E", createVNode(_components.code, {
        children: "var"
      }), "\u4E0D\u540C\u7684\u662F\uFF0C", createVNode(_components.code, {
        children: "const"
      }), "\u548C", createVNode(_components.code, {
        children: "let"
      }), "\u53EA\u662F\u521B\u5EFA\u88AB\u63D0\u5347\u4E86\u3002\u6211\u4EEC\u6765\u770B\u770BES6\u6807\u51C6\u7684\u539F\u8BDD"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "The variables are created when their containing Lexical Environment is instantiated but may not be accessed inany way until the variable\u2019s LexicalBinding is evaluated."
      })
    }), "\n", createVNode(_components.p, {
      children: ["\u7B80\u5355\u6765\u8BF4\u5C31\u662F\u5F53\u73AF\u5883\u4F5C\u7528\u57DF\u88AB\u521B\u5EFA\u65F6\uFF0C\u53D8\u91CF\u5C31\u90FD\u5DF2\u7ECF\u88AB\u521B\u5EFA\u4E86\u3002\u53EA\u662F\u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u8FD8\u672A\u8FDB\u884C\u58F0\u660E\uFF0C\u5728\u8FD9\u4E2A\u662F\u65F6\u95F4\u70B9\u8BBF\u95EE\u4F1A\u5BFC\u81F4\u76F4\u63A5\u62A5\u9519\u3002\u800C\u4ECE\u521B\u5EFA\u53D8\u91CF\u5230\u58F0\u660E\u53D8\u91CF\u8FD9\u4E2A\u65F6\u95F4\u6BB5\uFF0C\u6211\u4EEC\u5C31\u79F0\u5B83\u4E3A", createVNode(_components.strong, {
        children: "\u4E34\u65F6\u6027\u6B7B\u533A\uFF08Temporal Dead Zone\uFF09"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "\u91CD\u590D\u58F0\u660E",
      children: "\u91CD\u590D\u58F0\u660E"
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
            children: " a "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1"
          })]
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
            children: " a "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 2"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " a "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 3"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " // Uncaught SyntaxError: Identifier 'a' has already been declared"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " b "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " b "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 2"
          })]
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
            children: " b "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 3"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " // Uncaught SyntaxError: Identifier 'b' has already been declared"
          })]
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
            children: " a"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " // Uncaught SyntaxError: Identifier 'a' has already been declared"
          })]
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
            children: " b"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 3"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " // Uncaught SyntaxError: Identifier 'b' has already been declared"
          })]
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
            children: " c"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1"
          })]
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
            children: " c"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 2"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " // Uncaught SyntaxError: Identifier 'c' has already been declared"
          })]
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
            children: " c "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 3"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " // Uncaught SyntaxError: Identifier 'c' has already been declared"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " c "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 4"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " // Uncaught SyntaxError: Identifier 'c' has already been declared"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "\u4E0A\u9762\u7684\u4F8B\u5B50\uFF0C\u6211\u4EEC\u8FDB\u884C\u4E86\u5F88\u591A\u91CD\u590D\u58F0\u660E\u3002\u7ED3\u679C\u53D1\u73B0\uFF0C"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "var"
        }), "\u547D\u4EE4\u548C", createVNode(_components.code, {
          children: "let"
        }), "\u547D\u4EE4\u53EF\u4EE5\u8FDB\u884C\u91CD\u590D\u58F0\u660E\uFF0C", createVNode(_components.code, {
          children: "const"
        }), "\u547D\u4EE4\u4E0D\u80FD\u8FDB\u884C\u91CD\u590D\u58F0\u660E\u3002"]
      }), "\n", createVNode(_components.li, {
        children: "\u91CD\u590D\u58F0\u660E\u65F6\uFF0C\u547D\u4EE4\u5FC5\u987B\u4E0E\u4E4B\u524D\u7684\u76F8\u540C\uFF0C\u5426\u5219\u4F1A\u62A5\u9519\u3002"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "\u603B\u7ED3",
      children: "\u603B\u7ED3"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "var"
        }), "\u6CA1\u6709\u5757\u7EA7\u4F5C\u7528\u57DF\u6982\u5FF5\uFF0C", createVNode(_components.code, {
          children: "const"
        }), "\u548C", createVNode(_components.code, {
          children: "let"
        }), "\u6709\u5757\u7EA7\u4F5C\u7528\u57DF\u6982\u5FF5\u3002"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "var"
        }), "\u4F1A\u63D0\u5347\u521B\u5EFA\u548C\u521D\u59CB\u5316\uFF0C", createVNode(_components.code, {
          children: "const"
        }), "\u548C", createVNode(_components.code, {
          children: "let"
        }), "\u53EA\u4F1A\u63D0\u5347\u521B\u5EFA\u3002"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "const"
        }), "\u4E0D\u53EF\u4EE5\u91CD\u590D\u58F0\u660E\uFF0C", createVNode(_components.code, {
          children: "let"
        }), "\u548C", createVNode(_components.code, {
          children: "var"
        }), "\u53EF\u4EE5\u91CD\u590D\u58F0\u660E\u3002"]
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
const url = "src/content/blog/JavaScript%E4%B8%AD%E7%9A%84const%E3%80%81let%E5%92%8Cvar%E7%9A%84%E5%8C%BA%E5%88%AB.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/blog/JavaScript中的const、let和var的区别.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/blog/JavaScript中的const、let和var的区别.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
