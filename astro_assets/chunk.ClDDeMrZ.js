import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';

const frontmatter = {
  "title": "什么是 Generator 函数？它的工作原理是什么？在实际开发中有哪些应用场景",
  "category": "JavaScript 深入理解",
  "pubDate": "Sun, 13 Jul 2025 15:46:33 +0800",
  "heroImage": "",
  "draft": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "工作原理",
    "text": "工作原理"
  }, {
    "depth": 2,
    "slug": "应用场景",
    "text": "应用场景"
  }, {
    "depth": 3,
    "slug": "异步操作控制",
    "text": "异步操作控制"
  }, {
    "depth": 3,
    "slug": "迭代器生成",
    "text": "迭代器生成"
  }, {
    "depth": 3,
    "slug": "状态机",
    "text": "状态机"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["Generator 函数是 ES6 中引入的一种特殊函数，通过 ", createVNode(_components.code, {
        children: "function*"
      }), " 语法定义，内部使用 ", createVNode(_components.code, {
        children: "yield"
      }), " 关键字暂停函数执行，配合 ", createVNode(_components.code, {
        children: "next()"
      }), " 方法恢复执行，能实现函数的分步执行和状态保存。"]
    }), "\n", createVNode(_components.h2, {
      id: "工作原理",
      children: "工作原理"
    }), "\n", createVNode(_components.p, {
      children: ["Generator 函数执行后不会立即运行函数体，而是返回一个迭代器对象（Iterator）。调用迭代器的 ", createVNode(_components.code, {
        children: "next()"
      }), " 方法时，函数开始执行，直到遇到 ", createVNode(_components.code, {
        children: "yield"
      }), " 关键字暂停，", createVNode(_components.code, {
        children: "yield"
      }), " 后面的表达式值作为 ", createVNode(_components.code, {
        children: "next()"
      }), " 返回对象的 ", createVNode(_components.code, {
        children: "value"
      }), " 属性；再次调用 ", createVNode(_components.code, {
        children: "next()"
      }), "，函数从暂停处继续执行，直到下一个 ", createVNode(_components.code, {
        children: "yield"
      }), " 或函数结束，若函数结束则返回对象的 ", createVNode(_components.code, {
        children: "done"
      }), " 属性为 true。"]
    }), "\n", createVNode(_components.h2, {
      id: "应用场景",
      children: "应用场景"
    }), "\n", createVNode(_components.h3, {
      id: "异步操作控制",
      children: "异步操作控制"
    }), "\n", createVNode(_components.p, {
      children: ["可将异步操作拆分为多个步骤，通过 ", createVNode(_components.code, {
        children: "yield"
      }), " 依次执行，使异步代码逻辑更清晰，累死 ", createVNode(_components.code, {
        children: "async/await"
      }), " 的早期替代方案。"]
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
            children: "function*"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " asyncTask"
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
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " result1"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " yield"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " fetch"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'url1'"
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
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " result2"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " yield"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " fetch"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'url2'"
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
            children: "  return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " result2;"
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
      id: "迭代器生成",
      children: "迭代器生成"
    }), "\n", createVNode(_components.p, {
      children: "利用 Generator 函数的迭代特性，可便捷地创建自定义迭代器，用于遍历复杂数据结构。"
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
            children: "function*"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " iterateData"
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
              color: "#F97583"
            },
            children: "  for"
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
            children: " item "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "of"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " data) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    yield"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " item;"
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
            children: " iterator"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " iterateData"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(["
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "3"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]);"
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
            children: "(iterator."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "next"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "().value); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 1"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "状态机",
      children: "状态机"
    }), "\n", createVNode(_components.p, {
      children: "由于 Generator 函数能保存执行状态，适合实现具有多种状态切换的逻辑，如有限状态机。"
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

const url = "src/content/interview/%E4%BB%80%E4%B9%88%E6%98%AF%20Generator%20%E5%87%BD%E6%95%B0%EF%BC%9F%E5%AE%83%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F%E5%9C%A8%E5%AE%9E%E9%99%85%E5%BC%80%E5%8F%91%E4%B8%AD%E6%9C%89%E5%93%AA%E4%BA%9B%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/什么是 Generator 函数？它的工作原理是什么？在实际开发中有哪些应用场景.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/什么是 Generator 函数？它的工作原理是什么？在实际开发中有哪些应用场景.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
