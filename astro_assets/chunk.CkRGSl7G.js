import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';

const frontmatter = {
  "title": "谈谈你对模块化的理解，CommonJS、AMD、CMD 和 ES6 模块有哪些区别",
  "category": "工程化与工具",
  "pubDate": "Tue, 15 Jul 2025 01:57:44 +0800",
  "heroImage": "",
  "draft": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "commonjsamdcmd-和-es6-模块的区别",
    "text": "CommonJS、AMD、CMD 和 ES6 模块的区别"
  }, {
    "depth": 2,
    "slug": "关键差异解析",
    "text": "关键差异解析"
  }, {
    "depth": 3,
    "slug": "1-加载机制",
    "text": "1. 加载机制"
  }, {
    "depth": 3,
    "slug": "2-模块作用域",
    "text": "2. 模块作用域"
  }, {
    "depth": 3,
    "slug": "3-循环依赖处理",
    "text": "3. 循环依赖处理"
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
    li: "li",
    p: "p",
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
      children: "模块化是将复杂程序拆分为可复用、可维护的独立模块的开发模式，每个模块拥有自己的作用域，通过特定语法暴露接口供其他模块使用，同时可依赖其他模块。其核心价值在于解决代码复用、命名冲突、依赖管理等问题，是现代前端工程化的基础。"
    }), "\n", createVNode(_components.h2, {
      id: "commonjsamdcmd-和-es6-模块的区别",
      children: "CommonJS、AMD、CMD 和 ES6 模块的区别"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "维度"
          }), createVNode(_components.th, {
            children: "CommonJS"
          }), createVNode(_components.th, {
            children: "AMD"
          }), createVNode(_components.th, {
            children: "CMD"
          }), createVNode(_components.th, {
            children: "ES6模块（ESM）"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "适用环境"
            })
          }), createVNode(_components.td, {
            children: "服务端（Node.js） ｜ 浏览器端"
          }), createVNode(_components.td, {
            children: "浏览器端"
          }), createVNode(_components.td, {
            children: "浏览器端、服务端（Node.js 13.2+ 支持）"
          }), createVNode(_components.td, {})]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "加载方式"
            })
          }), createVNode(_components.td, {
            children: "同步加载（运行时加载）"
          }), createVNode(_components.td, {
            children: "异步加载（提前加载依赖）"
          }), createVNode(_components.td, {
            children: "异步加载（就近加载依赖）"
          }), createVNode(_components.td, {
            children: "静态加载（编译时确定依赖）"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "依赖处理"
            })
          }), createVNode(_components.td, {
            children: "运行时才解析依赖，加载顺序由代码执行顺序决定"
          }), createVNode(_components.td, {
            children: ["定义模块时需提前声明所有依赖（", createVNode(_components.code, {
              children: "deps"
            }), " 数组）"]
          }), createVNode(_components.td, {
            children: ["依赖就近书写，在 ", createVNode(_components.code, {
              children: "require"
            }), " 时才加载"]
          }), createVNode(_components.td, {
            children: ["编译时分析依赖，", createVNode(_components.code, {
              children: "import"
            }), " 必须放在模块顶部"]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "暴露模块方式"
            })
          }), createVNode(_components.td, {
            children: [createVNode(_components.code, {
              children: "module.exports"
            }), " 或 ", createVNode(_components.code, {
              children: "exports"
            })]
          }), createVNode(_components.td, {
            children: [createVNode(_components.code, {
              children: "define"
            }), " 函数的返回值"]
          }), createVNode(_components.td, {
            children: [createVNode(_components.code, {
              children: "define"
            }), " 函数的返回值"]
          }), createVNode(_components.td, {
            children: [createVNode(_components.code, {
              children: "export"
            }), "（命名导出）或", createVNode(_components.code, {
              children: "export default"
            }), "（默认导入）"]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "引入模块方式"
            })
          }), createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "require('模块路径')"
            })
          }), createVNode(_components.td, {
            children: [createVNode(_components.code, {
              children: "require"
            }), "回调函数中获取依赖"]
          }), createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "require('模块路径')"
            })
          }), createVNode(_components.td, {
            children: [createVNode(_components.code, {
              children: "import('命名导入')"
            }), " 或 ", createVNode(_components.code, {
              children: "import ... from"
            }), "（默认导入）"]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "执行时机"
            })
          }), createVNode(_components.td, {
            children: "模块加载时执行，缓存结果，再次加载直接取缓存"
          }), createVNode(_components.td, {
            children: "依赖加载完成后执行模块回调"
          }), createVNode(_components.td, {
            children: ["模块加载后，遇到 ", createVNode(_components.code, {
              children: "require"
            }), " 时执行依赖"]
          }), createVNode(_components.td, {
            children: "编译时静态分析，模块内代码在导入时执行（只执行一次）"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "典型实现/工具"
            })
          }), createVNode(_components.td, {
            children: "Node.js原生支持"
          }), createVNode(_components.td, {
            children: "RequireJS"
          }), createVNode(_components.td, {
            children: "SeaJS"
          }), createVNode(_components.td, {
            children: ["浏览器原生支持（", createVNode(_components.code, {
              children: "<script type=\"module\">"
            }), "）、Webpack等"]
          })]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "关键差异解析",
      children: "关键差异解析"
    }), "\n", createVNode(_components.h3, {
      id: "1-加载机制",
      children: "1. 加载机制"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "CommonJS 为同步加载，适合服务器端（文件存储在本地，加载速度快），但不适合浏览器端（同步加载会阻塞页面渲染）。"
      }), "\n", createVNode(_components.li, {
        children: "AMD/CMD 为异步加载，专为浏览器端设计，避免阻塞。AMD 强调 “依赖前置”（提前声明所有依赖），CMD 强调“依赖就近”（用到时再加载）。"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "2-模块作用域",
      children: "2. 模块作用域"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["CommonJS 模块中，", createVNode(_components.code, {
          children: "module.exports"
        }), " 是模块的对外接口，每个模块是一个独立的 ", createVNode(_components.code, {
          children: "module"
        }), " 对象。"]
      }), "\n", createVNode(_components.li, {
        children: ["ES6 模块中，", createVNode(_components.code, {
          children: "export"
        }), " 导出的是绑定（而非值），导入的变量会跟随导出端变化（动态关联），而 CommonJS 导出的是值的拷贝。"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "3-循环依赖处理",
      children: "3. 循环依赖处理"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "CommonJS 处理循环依赖时，会返回未完全执行的模块缓存，可能导致部分变量未定义。"
      }), "\n", createVNode(_components.li, {
        children: "ES6 模块通过静态分析，循环依赖时能正确饮用模块的实时状态，更可靠。"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "总结",
      children: "总结"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "CommonJS 是服务器端模块化的标准，同步加载合适本地文件。"
      }), "\n", createVNode(_components.li, {
        children: "AMD/CMD 是浏览器端早期异步模块化方案，现已逐渐被 ES6 模块取代。"
      }), "\n", createVNode(_components.li, {
        children: "ES6 模块是官方标准，兼顾浏览器和服务器端，静态加载、动态绑定等特性使其成为现代前端模块化的首选，也是 Webpack、Vite等构建工具的默认模块系统。"
      }), "\n"]
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

const url = "src/content/interview/%E8%B0%88%E8%B0%88%E4%BD%A0%E5%AF%B9%E6%A8%A1%E5%9D%97%E5%8C%96%E7%9A%84%E7%90%86%E8%A7%A3%EF%BC%8CCommonJS%E3%80%81AMD%E3%80%81CMD%20%E5%92%8C%20ES6%20%E6%A8%A1%E5%9D%97%E6%9C%89%E5%93%AA%E4%BA%9B%E5%8C%BA%E5%88%AB.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/谈谈你对模块化的理解，CommonJS、AMD、CMD 和 ES6 模块有哪些区别.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/谈谈你对模块化的理解，CommonJS、AMD、CMD 和 ES6 模块有哪些区别.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
