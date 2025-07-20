import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';

const frontmatter = {
  "title": "解释 Promise 的三种状态及其转换关系，如何使用 Promise 处理异步操作",
  "category": "JavaScript 深入理解",
  "pubDate": "Sun, 13 Jul 2025 14:13:29 +0800",
  "heroImage": "",
  "draft": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "使用-promise-处理异步操作",
    "text": "使用 Promise 处理异步操作"
  }, {
    "depth": 3,
    "slug": "创建-promise-对象",
    "text": "创建 Promise 对象"
  }, {
    "depth": 3,
    "slug": "处理结果",
    "text": "处理结果"
  }, {
    "depth": 3,
    "slug": "多个异步操作处理",
    "text": "多个异步操作处理"
  }];
}
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
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["Promise 有三种状态，分别是 ", createVNode(_components.strong, {
        children: "pending（等待态）"
      }), "、", createVNode(_components.strong, {
        children: "fulfilled（成功态）"
      }), "、", createVNode(_components.strong, {
        children: "rejected（失败态）"
      }), "。"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "pending（等待态）"
        }), "：这是 Promise 的初始状态，当 Promise 对象被创建时，处于该状态，表示异步操作正在进行中，尚未有结果。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "fulfilled（成功态）"
        }), "：当异步操作成功完成时，Promise 会从 pending 状态转换为 fulfilled 状态，此时会携带异步操作的成功结果。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "rejected（失败态）"
        }), "：当异步操作失败时，Promise 会从 pending 状态转换为 rejected 状态，此时会携带异步操作的错误信息。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["三种状态的转换关系是", createVNode(_components.strong, {
        children: "不可逆"
      }), "的："]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "从 pending 状态可以转换为 fulfilled 状态，一旦转换为 fulfilled 状态，就不能再变回 pending 状态，也不能转换为 rejected 状态。"
      }), "\n", createVNode(_components.li, {
        children: "从 pending 状态可以转换为 rejected 状态，一旦转换为 rejected 状态，同样不能再变回 pending 状态，也不能转换为 fulfilled 状态。"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "使用-promise-处理异步操作",
      children: "使用 Promise 处理异步操作"
    }), "\n", createVNode(_components.h3, {
      id: "创建-promise-对象",
      children: "创建 Promise 对象"
    }), "\n", createVNode(_components.p, {
      children: ["通过 ", createVNode(_components.code, {
        children: "new Promise((resolve) => {...})"
      }), " 创建，在 executor 函数中执行异步操作。当异步操作成功时，调用 ", createVNode(_components.code, {
        children: "resolve(value)"
      }), "将状态从 pending 转换为 fulfilled，并将成功结果 value 传递出去；当异步操作失败时，调用 ", createVNode(_components.code, {
        children: "reject(error)"
      }), " 将状态从 pending 转换为 rejected，并将错误信息 error 传递出去。"]
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
            children: " promise"
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
              color: "#79B8FF"
            },
            children: " Promise"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "resolve"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "reject"
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
            children: "  // 模拟异步操作，如网络请求"
          })
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
            children: "    const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " success"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Math."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "random"
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
            children: " 0.5"
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
            children: "    "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (success) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "      resolve"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'操作成功，这是结果'"
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
            children: "    } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "else"
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
            children: "      reject"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'操作失败，这是错误信息'"
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
            children: "    }"
          })
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
            children: "1000"
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
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "处理结果",
      children: "处理结果"
    }), "\n", createVNode(_components.p, {
      children: ["使用 ", createVNode(_components.code, {
        children: "then()"
      }), " 方法处理 fulfilled 状态的结果，", createVNode(_components.code, {
        children: "catch()"
      }), " 方法处理 rejected 状态的错误，也可以在 ", createVNode(_components.code, {
        children: "then()"
      }), " 方法的第二个参数中处理错误。"]
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
              color: "#E1E4E8"
            },
            children: "promise."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "result"
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
            children: "'成功处理结果：'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", result);"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // 可以返回新的 Promise 进行链式操作"
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
            children: " result "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '，已处理'"
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
            children: "})."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "processedResult"
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
            children: "'进一步处理结果：'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", processedResult);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "})."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "catch"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "error"
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
            children: "  console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "error"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'捕获到错误：'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", error.message);"
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
    }), "\n", createVNode(_components.h3, {
      id: "多个异步操作处理",
      children: "多个异步操作处理"
    }), "\n", createVNode(_components.p, {
      children: ["可以使用 ", createVNode(_components.code, {
        children: "Promise.all()"
      }), "、", createVNode(_components.code, {
        children: "Promise.race()"
      }), " 等方法处理多个 Promise。", createVNode(_components.code, {
        children: "Promise.all()"
      }), " 等待所有 Promise 都变为 fulfilled 状态后，返回一个包含所有结果的数组；如果有一个 Promise 变为 rejected 状态，则立即返回该错误。", createVNode(_components.code, {
        children: "Promise.race()"
      }), " 只要有一个 Promise 状态发生改变（无论是 fulfilled 还是 rejected），就返回该结果。"]
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
            children: " promise1"
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
              color: "#79B8FF"
            },
            children: " Promise"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "resolve"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " =>"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " setTimeout"
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
              color: "#B392F0"
            },
            children: " resolve"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "), "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1000"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "));"
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
            children: " promise2"
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
              color: "#79B8FF"
            },
            children: " Promise"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "resolve"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " =>"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " setTimeout"
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
              color: "#B392F0"
            },
            children: " resolve"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "), "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2000"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "));"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Promise"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "all"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "([promise1, promise2])"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "results"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " =>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " console."
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
            children: "'所有操作完成：'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", results)) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// [1, 2]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "catch"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "error"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " =>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "error"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'错误：'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", error));"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Promise"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "race"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "([promise1, promise2])"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "result"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " =>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " console."
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
            children: "'最快完成的操作结果：'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", result)) "
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
            children: "  ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "catch"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "error"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " =>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "error"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'错误：'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", error));"
          })]
        })]
      })
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

const url = "src/content/interview/%E8%A7%A3%E9%87%8A%20Promise%20%E7%9A%84%E4%B8%89%E7%A7%8D%E7%8A%B6%E6%80%81%E5%8F%8A%E5%85%B6%E8%BD%AC%E6%8D%A2%E5%85%B3%E7%B3%BB%EF%BC%8C%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%20Promise%20%E5%A4%84%E7%90%86%E5%BC%82%E6%AD%A5%E6%93%8D%E4%BD%9C.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/解释 Promise 的三种状态及其转换关系，如何使用 Promise 处理异步操作.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/解释 Promise 的三种状态及其转换关系，如何使用 Promise 处理异步操作.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
