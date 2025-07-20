import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';

const frontmatter = {
  "title": "如何优化 JavaScript 的执行性能",
  "category": "性能优化",
  "pubDate": "Mon, 14 Jul 2025 15:54:10 +0800",
  "heroImage": "",
  "draft": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "1-减少主线程阻塞",
    "text": "1. 减少主线程阻塞"
  }, {
    "depth": 2,
    "slug": "2-优化代码执行效率",
    "text": "2. 优化代码执行效率"
  }, {
    "depth": 2,
    "slug": "3-优化-dom-操作",
    "text": "3. 优化 DOM 操作"
  }, {
    "depth": 2,
    "slug": "4-减少内存泄漏",
    "text": "4. 减少内存泄漏"
  }, {
    "depth": 2,
    "slug": "5-其他优化",
    "text": "5. 其他优化"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "JavaScript 的执行性能直接影响页面的响应速度和用户体验，尤其是长任务阻塞主线程会导致页面卡顿。优化方向主要集中在减少执行时间、避免主线程阻塞、提升代码效率等方面。"
    }), "\n", createVNode(_components.h2, {
      id: "1-减少主线程阻塞",
      children: "1. 减少主线程阻塞"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "拆分长任务"
        }), "：将执行时间超过 50ms 的长任务拆分为多个短任务，利用 ", createVNode(_components.code, {
          children: "requestIdleCallback"
        }), " 或 ", createVNode(_components.code, {
          children: "setTimeout"
        }), " 在浏览器空闲时执行，避免长时间占用主线程。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["例如：用 ", createVNode(_components.code, {
        children: "requestIdleCallback"
      }), " 处理非紧急计算："]
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
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "requestIdleCallback"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "deadline"
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
            children: "  while"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (deadline."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "timeRemaining"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " &&"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " hasMoreWork"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    doWork"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 每次处理一小部分任务"
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
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "使用 Web Worker"
        }), "：将复杂计算、数据处理等耗时操作移至 Web Worker 中执行，避免阻塞主线程（Web Worker 无法操作 DOM，需通过消息传递数据）。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "例如：创建 Worker 处理计算："
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
            children: "// 主线程"
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
            children: " worker"
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
            children: " Worker"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'worker.js'"
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
            children: "worker."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "postMessage"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(data); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 发送数据"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "worker.onmessage "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " （event) "
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
            children: "'处理结果'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", event.data);"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// worker.js"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "self."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "onmessage"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
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
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " result"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " heavyCalculation"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(event.data); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 耗时计算"
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
            children: "  self."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "postMessage"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(result); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 发送结果"
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
      id: "2-优化代码执行效率",
      children: "2. 优化代码执行效率"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "减少不必要的计算"
        }), "：避免重复计算（如将计算结果缓存）、简化复杂逻辑（如用哈希表 ", createVNode(_components.code, {
          children: "Map/Object"
        }), " 替代嵌套循环查找，将 O(n", createVNode("sup", {
          children: "2"
        }), ") 复杂度优化为 O(n)）。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "例如，缓存 DOM 查询结果："
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
            children: "// 优化前：每次都查询 DOM"
          })
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
            children: " 100"
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
              color: "#E1E4E8"
            },
            children: "  document."
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
            children: "'list'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "appendChild"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(item);"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 优化后：缓存 DOM 节点"
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
            children: " list"
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
            children: "'list'"
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
            children: " 100"
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
              color: "#E1E4E8"
            },
            children: "  list."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "appendChild"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(item);"
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
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "避免全局变量"
        }), "：全局变量会挂载在 ", createVNode(_components.code, {
          children: "widow"
        }), " 上，查找链长且容易引发命名冲突，尽量使用局部变量（访问速度更快）。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "优化循环与条件判断"
        }), "：减少循环嵌套，将高频执行的条件判断放在循环外，使用 ", createVNode(_components.code, {
          children: "break/continue"
        }), " 提前退出无效循环。"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "3-优化-dom-操作",
      children: "3. 优化 DOM 操作"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "批量操作 DOM"
        }), "：频繁修改 DOM 会触发多次回流/重绘，可先将 DOM 从文档流中移除（如 ", createVNode(_components.code, {
          children: "display: none"
        }), "），批量修改后再插入，或使用 ", createVNode(_components.code, {
          children: "DocumentFragment"
        }), " 临时存储节点。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["例如，用 ", createVNode(_components.code, {
        children: "DocumentFragment"
      }), " 批量添加节点："]
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
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " fragment"
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
            children: "createDocumentFragment"
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
            children: " 100"
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
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " li"
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
            children: "'li'"
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
            children: "  "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  fragment."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "appendChild"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(li); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 先添加到文档片段"
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
            children: "'list'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "appendChild"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(fragment);"
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "避免强制同步布局"
        }), "：读取 DOM 样式（如 ", createVNode(_components.code, {
          children: "offsetHeight"
        }), "）后立即修改样式，会触发浏览器强制同步布局（先计算布局再修改，增加开销），应批量读取后再批量修改。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "例如，优化布局操作顺序："
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
            children: "// 优化前：强制同步布局"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "elements."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "forEach"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "element"
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
              color: "#E1E4E8"
            },
            children: "  element.style.width "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '100px'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 修改样式"
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
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " height"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " element.offsetHeight; "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 立即读取，触发强制布局"
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
            children: "// 优化后，先读再改"
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
            children: " heights"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " elements."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "map"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "element"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " =>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " element.offsetHeight); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 批量读取"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "elements."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "forEach"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "element"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "i"
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
              color: "#E1E4E8"
            },
            children: "  element.style.width "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '100px'"
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
            children: "  element.style.height "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " heights[i] "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'px'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 使用缓存值"
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
    }), "\n", createVNode(_components.h2, {
      id: "4-减少内存泄漏",
      children: "4. 减少内存泄漏"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "及时清理引用"
        }), "：避免意外保留 DOM 节点引用（如将 DOM 节点存在数组中未清空）、定时器/事件监听器未移除（如 ", createVNode(_components.code, {
          children: "setInterval"
        }), " 未用", createVNode(_components.code, {
          children: "clearInterval"
        }), "清除）。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "例如，组件卸载时移除事件监听："
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
            children: "// React 组件中"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "useEffect"
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
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " handleScroll"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "..."
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " };"
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
            children: "  window."
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
            children: "'scroll'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", handleScroll);"
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
              color: "#F97583"
            },
            children: "  return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " () "
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
            children: "    window."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "removeEventListener"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'scroll'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", handleScroll); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 卸载时清理"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  };"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}, []);"
          })
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "避免闭包导致的内存驻留"
        }), "：合理使用闭包，避免长期持有大对象引用（如在循环中创建闭包存储大量数据）。"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "5-其他优化",
      children: "5. 其他优化"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "使用高效 API"
        }), "：优先使用原生 API（如 ", createVNode(_components.code, {
          children: "Array.prototype.map/filter"
        }), " 比手动循环更高效）、避免使用 ", createVNode(_components.code, {
          children: "eval"
        }), "（执行慢且不安全）。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "代码压缩与 Tree Sharking"
        }), "：通过 Webpack、Tarser 等工具压缩代码（移除空格、重命名变量），Tree Sharking 剔除未使用的代码，减少 JS 文件体积，加快解析和执行速度。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "通过以上方法，可显著提升 JavaScript 的执行性能，减少页面卡顿，提升用户交互体验，尤其在大型应用和复杂交互场景中效果显著。"
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

const url = "src/content/interview/%E5%A6%82%E4%BD%95%E4%BC%98%E5%8C%96%20JavaScript%20%E7%9A%84%E6%89%A7%E8%A1%8C%E6%80%A7%E8%83%BD.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/如何优化 JavaScript 的执行性能.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/如何优化 JavaScript 的执行性能.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
