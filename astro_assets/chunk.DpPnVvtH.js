import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';

const frontmatter = {
  "title": "介绍 Webpack 的工作原理，以及如何通过 Webpack 进行代码分割和懒加载",
  "category": "工程化与工具",
  "pubDate": "Mon, 14 Jul 2025 22:33:05 +0800",
  "heroImage": "",
  "draft": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "webpack-工作原理",
    "text": "Webpack 工作原理"
  }, {
    "depth": 3,
    "slug": "工作流程主要包括",
    "text": "工作流程主要包括"
  }, {
    "depth": 2,
    "slug": "代码分割code-splitting",
    "text": "代码分割（Code Splitting）"
  }, {
    "depth": 3,
    "slug": "1-多入口分割",
    "text": "1. 多入口分割"
  }, {
    "depth": 3,
    "slug": "2-公共代码分割",
    "text": "2. 公共代码分割"
  }, {
    "depth": 3,
    "slug": "3-动态导入分割",
    "text": "3. 动态导入分割"
  }, {
    "depth": 2,
    "slug": "懒加载lazy-loading",
    "text": "懒加载（Lazy Loading）"
  }, {
    "depth": 3,
    "slug": "1-路由懒加载以-react-router-为例",
    "text": "1. 路由懒加载（以 React Router 为例）"
  }, {
    "depth": 3,
    "slug": "2-组件功能懒加载按需触发",
    "text": "2. 组件/功能懒加载（按需触发）"
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
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "webpack-工作原理",
      children: "Webpack 工作原理"
    }), "\n", createVNode(_components.p, {
      children: "Webpack 是一个现代 JavaScript 应用的静态模块打包工具，其核心思想是“一切皆模块”，通过递归解析项目中所有模块的依赖关系，最终将这些模块打包成一个或多个静态资源（bundle）。"
    }), "\n", createVNode(_components.h3, {
      id: "工作流程主要包括",
      children: "工作流程主要包括"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "入口（Entry）"
        }), "：Webpack 以 ", createVNode(_components.code, {
          children: "entry"
        }), " 配置指定的文件为起点，递归解析其依赖的所有模块（如 JS、CSS、图片等）。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "模块解析（Module Resolution）"
        }), "：根据 ", createVNode(_components.code, {
          children: "resolve"
        }), " 配置解析模块路径，找到对应的文件（如处理 ", createVNode(_components.code, {
          children: "import './utils'"
        }), "时，自动查找 ", createVNode(_components.code, {
          children: "utils.js"
        }), "、", createVNode(_components.code, {
          children: "utils/index.js"
        }), "等）。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "模块转换（Module Transformation）"
        }), "：通过 ", createVNode(_components.code, {
          children: "module.rules"
        }), " 配置的 Loader 对不同类型的模块进行转换（如用 ", createVNode(_components.code, {
          children: "babel-loader"
        }), " 将 ES6+ 转换为 ES5，用 ", createVNode(_components.code, {
          children: "css-loader"
        }), " 处理 CSS 模块，用 ", createVNode(_components.code, {
          children: "url-loader"
        }), " 处理图片）。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "依赖图谱构建（Dependency Graph）"
        }), "：在解析和转换过程中，Webpack会构建一个包含所有模块及依赖关系的依赖图谱。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "代码优化与chunk生成"
        }), "：根据 ", createVNode(_components.code, {
          children: "optimization"
        }), " 配置进行优化（如 Tree-Shaking 剔除未使用代码、代码压缩），并将依赖图谱中的模块按规则拆分为多个 ", createVNode(_components.code, {
          children: "chunk"
        }), "(代码块)。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "输出（Output）"
        }), "：最后通过 ", createVNode(_components.code, {
          children: "output"
        }), " 配置将 ", createVNode(_components.code, {
          children: "chunk"
        }), " 输出到指定目录（如 ", createVNode(_components.code, {
          children: "dist"
        }), " 文件夹），生成可在浏览器运行的静态资源。"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "代码分割code-splitting",
      children: "代码分割（Code Splitting）"
    }), "\n", createVNode(_components.p, {
      children: ["代码分割时将代码拆分为多个独立的 ", createVNode(_components.code, {
        children: "chunk"
      }), "，实现按需加载或并行加载，减少单个 bundle 体积，提升加载速度。Webpack实现代码分割的方式有："]
    }), "\n", createVNode(_components.h3, {
      id: "1-多入口分割",
      children: "1. 多入口分割"
    }), "\n", createVNode(_components.p, {
      children: ["通过 ", createVNode(_components.code, {
        children: "entry"
      }), " 配置多个入口，每个入口生成一个独立 bundle。"]
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
            children: "  entry: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    home: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'./src/home.js'"
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
            children: "    about: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'./src/about.js'"
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
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  output: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    filename: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'[name].bundle.js'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 输出home.bundle.js, about.bundle.js"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    path: path."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "resolve"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(__dirname, "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'dist'"
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
            children: "  }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "2-公共代码分割",
      children: "2. 公共代码分割"
    }), "\n", createVNode(_components.p, {
      children: ["通过 ", createVNode(_components.code, {
        children: "splitChunks"
      }), " 提取多入口或模块间的公共依赖（如 React、Vue 等库），避免重复打包。"]
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
            children: "  optimization: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    splitChunks: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      chunks: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'all'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 对所有类型的 chunk（入口chunk、异步chunk）生效"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      cacheGroups: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // 提取第三方库"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        vendor: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "          test:"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D",
              fontWeight: "bold"
            },
            children: "\\\\"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "/]"
          }), createVNode(_components.span, {
            style: {
              color: "#DBEDFF"
            },
            children: "node_modules"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D",
              fontWeight: "bold"
            },
            children: "\\\\"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "/]"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "/"
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
            children: "          name: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'vendors'"
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
            children: "          chunks: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'all'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // 提取公共模块"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        common: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "          minChunks: "
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
              color: "#6A737D"
            },
            children: "// 模块至少被引用两次才提取"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "          name: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'common'"
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
            children: "          chunks: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'all'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        }"
          })
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
            children: "};"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "3-动态导入分割",
      children: "3. 动态导入分割"
    }), "\n", createVNode(_components.p, {
      children: ["通过 ES6 的 ", createVNode(_components.code, {
        children: "import()"
      }), " 语法动态导入模块，Webpack 会自动将其拆分为独立 chunk，实现按需加载（配合懒加载使用）。"]
    }), "\n", createVNode(_components.h2, {
      id: "懒加载lazy-loading",
      children: "懒加载（Lazy Loading）"
    }), "\n", createVNode(_components.p, {
      children: ["Webpack 的懒加载依赖动态导入（", createVNode(_components.code, {
        children: "import()"
      }), "），通过将非首屏必要的模块拆分为独立chunk，在用户需要时（如点击按钮、路由切换）再加载，减少首屏加载时间。"]
    }), "\n", createVNode(_components.h3, {
      id: "1-路由懒加载以-react-router-为例",
      children: "1. 路由懒加载（以 React Router 为例）"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "React.lazy"
        }), " 接收一个返回 ", createVNode(_components.code, {
          children: "import()"
        }), " 的函数，", createVNode(_components.code, {
          children: "import()"
        }), " 返回 Promise，加载成功后返回组件。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "<Suspense>"
        }), " 用于在懒加载组件加载完成前显示占用内容（如加载动画）。"]
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
            children: "// 不使用懒加载（一次性加载所有路由组件）"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Home "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " './pages/Home'"
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
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " About "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " './pages/About'"
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
            children: "// 使用懒加载（Webpack自动拆分Home、About为独立chunk）"
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
            children: " Home"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " React."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "lazy"
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
              color: "#F97583"
            },
            children: " import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'./pages/Home'"
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
            children: " About"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " React."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "lazy"
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
              color: "#F97583"
            },
            children: " import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'./pages/About'"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 路由配置"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Route"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " path"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"/home\""
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " element"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{<"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Suspense"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " fallback"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{<"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Loading"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " />}>}></"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Route"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "2-组件功能懒加载按需触发",
      children: "2. 组件/功能懒加载（按需触发）"
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
            children: "// 点击按钮时加载弹窗组件"
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
              color: "#B392F0"
            },
            children: " handleClick"
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
              color: "#E1E4E8"
            },
            children: " { "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Modal"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " await"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'./components/Modal'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 动态导入"
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
            children: "  Modal."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "show"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'这是懒加载的弹窗'"
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
            children: "};"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "总结",
      children: "总结"
    }), "\n", createVNode(_components.p, {
      children: "Webpack 通过解析依赖图谱将模块打包为 bundle，代码分割通过多个入口、公共代码提取、动态导入实现 chunk 拆分，懒加载则基于动态导入实现模块按需加载。两者结合可显著优化大型项目的加载性能，是前端工程化中提升用户体验的关键手段。"
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

const url = "src/content/interview/%E4%BB%8B%E7%BB%8D%20Webpack%20%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86%EF%BC%8C%E4%BB%A5%E5%8F%8A%E5%A6%82%E4%BD%95%E9%80%9A%E8%BF%87%20Webpack%20%E8%BF%9B%E8%A1%8C%E4%BB%A3%E7%A0%81%E5%88%86%E5%89%B2%E5%92%8C%E6%87%92%E5%8A%A0%E8%BD%BD.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/介绍 Webpack 的工作原理，以及如何通过 Webpack 进行代码分割和懒加载.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/介绍 Webpack 的工作原理，以及如何通过 Webpack 进行代码分割和懒加载.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
