import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';

const frontmatter = {
  "title": "JavaScript中的const、let和var的区别",
  "description": "",
  "pubDate": "Mon Jun 01 2020 22:03:00 GMT+0800",
  "heroImage": ""
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "变量的创建",
    "text": "变量的创建"
  }, {
    "depth": 2,
    "slug": "const和let",
    "text": "const和let"
  }, {
    "depth": 2,
    "slug": "constlet与var的区别",
    "text": "const、let与var的区别"
  }, {
    "depth": 2,
    "slug": "作用域",
    "text": "作用域"
  }, {
    "depth": 2,
    "slug": "变量提升",
    "text": "变量提升"
  }, {
    "depth": 2,
    "slug": "重复声明",
    "text": "重复声明"
  }, {
    "depth": 2,
    "slug": "总结",
    "text": "总结"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
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
    children: [createVNode(_components.p, {
      children: ["JavaScript是一门弱类型语言。在ES3和ES5时期，我们都是通过 ", createVNode(_components.strong, {
        children: "var"
      }), " 来声明一个变量的。那个时候的前端开发相对简单，JavaScript通常是被用来做些景上添花的小功能，所以完全能够应付我们的日常开发工作。随着移动互联网的兴起，H5应用适应快速迭代的属性使前端得到了快速发展，不断叠加的业务需求也凸显出了JavaScript在大型项目中的劣势（可维护性差）。因此，语言的升级势在必行，而变量声明的方式则是其中需要优化的内容之一。今天我们的主题就来说说变量声明 —— ", createVNode(_components.strong, {
        children: "const"
      }), " 和 ", createVNode(_components.strong, {
        children: "let"
      }), "。"]
    }), "\n", createVNode(_components.h2, {
      id: "变量的创建",
      children: "变量的创建"
    }), "\n", createVNode(_components.p, {
      children: "首先，我要讲清楚变量声明存在三个步骤："
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "创建"
        }), " 变量；"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "初始化"
        }), " 变量；"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "更新"
        }), " 变量。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["这三个步骤的 ", createVNode(_components.em, {
        children: "微妙差异"
      }), "，正是 ", createVNode(_components.strong, {
        children: "const"
      }), "、", createVNode(_components.strong, {
        children: "let"
      }), "、 ", createVNode(_components.strong, {
        children: "var"
      }), " 三者之间的不同之处。"]
    }), "\n", createVNode(_components.h2, {
      id: "const和let",
      children: "const和let"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: [createVNode(_components.code, {
          children: "const"
        }), "命令是声明一个常量。", createVNode(_components.code, {
          children: "const"
        }), "只能进行变量的创建和变量初始化，而不能进行变量更新。"]
      })
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
      children: ["可以看到，当我们对 ", createVNode(_components.strong, {
        children: "const"
      }), " 声明的变量进行更新时，浏览器报了相应的错误。"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: [createVNode(_components.code, {
          children: "let"
        }), "命令是指声明一个变量。", createVNode(_components.code, {
          children: "let"
        }), "可以进行变量的创建、变量的初始化和变量的更新。"]
      })
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
      children: ["可以看到，当我们对 ", createVNode(_components.strong, {
        children: "let"
      }), " 声明的变量进行更新时，变量对应的值会进行相应的改变。"]
    }), "\n", createVNode(_components.h2, {
      id: "constlet与var的区别",
      children: "const、let与var的区别"
    }), "\n", createVNode(_components.p, {
      children: ["JavaScript是一门弱类型语言。它不会在声明时要求变量确定类型，甚至你可以随时修改变量的类型。那既然是弱类型语言，", createVNode(_components.strong, {
        children: "var"
      }), " 似乎足以满足所有的需求了，为什么还需要 ", createVNode(_components.strong, {
        children: "const"
      }), " 和 ", createVNode(_components.strong, {
        children: "let"
      }), " 呢？"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: ["原因是", createVNode(_components.code, {
          children: "var"
        }), "太灵活了。"]
      }), " 很多时候，我们无法对 ", createVNode(_components.strong, {
        children: "var"
      }), " 进行约束，这会导致我们的程序中出现意想不到的问题。"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: [createVNode(_components.code, {
            children: "var"
          }), "存在变量提升的问题。"]
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: [createVNode(_components.code, {
            children: "var"
          }), "不支持块级作用域。"]
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: [createVNode(_components.code, {
            children: "var"
          }), "可以在静默状态下重复声明。"]
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["而 ", createVNode(_components.strong, {
        children: "const"
      }), " 和 ", createVNode(_components.strong, {
        children: "let"
      }), " 就是用来约束我们变量的使用，尽可能地减少意想不到的问题。上面我们已经讲到了 ", createVNode(_components.strong, {
        children: "var"
      }), " 的问题，那么我就从这三个问题出发来讲讲 ", createVNode(_components.strong, {
        children: "const"
      }), "、", createVNode(_components.strong, {
        children: "let"
      }), " 在解决这些问题上做了哪些努力？"]
    }), "\n", createVNode(_components.h2, {
      id: "作用域",
      children: "作用域"
    }), "\n", createVNode(_components.p, {
      children: ["首先，我们先来聊下 ", createVNode(_components.strong, {
        children: "作用域"
      }), "。", createVNode(_components.strong, {
        children: "作用域在高级语言中是一个非常重要的概念"
      }), "。它相当于一个容器，变量和函数都放在这个容器里面。理论上来说，容器外面不能访问容器里面声明的变量和函数，但容器内可以调用父祖级容器的变量和函数。", createVNode(_components.em, {
        children: "即外部不能访问内部，内部可以访问外部"
      }), "。举个栗子："]
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
      children: ["这里", createVNode(_components.code, {
        children: "function foo"
      }), "创建了一个", createVNode(_components.strong, {
        children: "foo（scope）"
      }), "，全局有一个", createVNode(_components.strong, {
        children: "global（scope）"
      }), "。", createVNode(_components.strong, {
        children: "global"
      }), "中存在", createVNode(_components.code, {
        children: "a"
      }), "（变量）和", createVNode(_components.code, {
        children: "foo"
      }), "（函数），", createVNode(_components.strong, {
        children: "foo"
      }), "中存在", createVNode(_components.code, {
        children: "b"
      }), "（变量）。"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["在 ", createVNode(_components.strong, {
          children: "global"
        }), " 中，我们能访问到", createVNode(_components.code, {
          children: "a"
        }), "，但访问不到", createVNode(_components.code, {
          children: "b"
        }), "，这就是 ", createVNode(_components.strong, {
          children: "作用域"
        }), "。"]
      }), "\n", createVNode(_components.li, {
        children: ["在 ", createVNode(_components.strong, {
          children: "foo"
        }), " 中，我们不仅能访问到", createVNode(_components.code, {
          children: "b"
        }), "，也能访问到", createVNode(_components.code, {
          children: "a"
        }), "，我们称之为 ", createVNode(_components.strong, {
          children: "作用域链"
        }), "。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["ES3和ES5中，", createVNode(_components.strong, {
        children: "作用域的创建方式"
      }), "只有", createVNode(_components.strong, {
        children: "function"
      }), "、", createVNode(_components.strong, {
        children: "with"
      }), "和", createVNode(_components.strong, {
        children: "catch"
      }), "。"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "function"
        }), " 是常用的创建作用域的方式；"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "with"
        }), " 已经被抛弃，因为它会导致作用域链发生变化（因此，浏览器所有的优化都会失效）；"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "catch"
        }), " 经常用于捕获错误。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["ES6有了 ", createVNode(_components.strong, {
        children: "块级作用域"
      }), " 的概念。", createVNode(_components.strong, {
        children: "const"
      }), " 和 ", createVNode(_components.strong, {
        children: "let"
      }), " 命令就是作用于块级作用域。"]
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
      children: ["从上面的例子中可以看到，", createVNode(_components.strong, {
        children: "var"
      }), " 命令不受块级作用域的影响，可以正常访问；", createVNode(_components.strong, {
        children: "const"
      }), " 和 ", createVNode(_components.strong, {
        children: "let"
      }), " 受到块级作用域的影响，在块级作用域以外无法正常访问。"]
    }), "\n", createVNode(_components.p, {
      children: ["依据这个特性，我想理解 ", createVNode(_components.strong, {
        children: "for"
      }), " 循环的这个问题应该会变得容易很多："]
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
      children: ["这道题非常的经典，从 ", createVNode(_components.strong, {
        children: "作用域"
      }), " 和 ", createVNode(_components.strong, {
        children: "作用域链"
      }), " 的角度能很好的解释问题产生的原因。"]
    }), "\n", createVNode(_components.h2, {
      id: "变量提升",
      children: "变量提升"
    }), "\n", createVNode(_components.p, {
      children: ["谈到JavaScript，我们知道 ", createVNode(_components.strong, {
        children: "var"
      }), " 和 ", createVNode(_components.strong, {
        children: "function"
      }), " 会存在变量提升的情况，也就是即使调用在声明之前，变量和方法依然能够访问而不会报错。"]
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
      children: ["上面的例子我们发现，即使 ", createVNode(_components.strong, {
        children: "var"
      }), " 定义的变量写在声明之前依然能够访问，只是返回的值为 ", createVNode(_components.strong, {
        children: "undefined"
      }), "；", createVNode(_components.strong, {
        children: "function"
      }), " 也是能正常访问，还能得到预期的结果，", createVNode(_components.strong, {
        children: "这就是变量提升"
      }), "。"]
    }), "\n", createVNode(_components.p, {
      children: ["在JavaScript中，变量首先会被 ", createVNode(_components.strong, {
        children: "创建"
      }), "，然后 ", createVNode(_components.strong, {
        children: "初始化"
      }), "，最后 ", createVNode(_components.strong, {
        children: "更新"
      }), "。我们从上面的代码来看这三个操作："]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["JavaScript引擎会找到", createVNode(_components.code, {
          children: "var a"
        }), "，然后告诉作用域 ", createVNode(_components.strong, {
          children: "创建一个名称为a的变量"
        }), "；"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "立即初始化"
        }), " 变量", createVNode(_components.code, {
          children: "a"
        }), "，此时初始化的值为 ", createVNode(_components.strong, {
          children: "undefined"
        }), "；"]
      }), "\n", createVNode(_components.li, {
        children: ["代码执行到编写的位置时会将变量", createVNode(_components.code, {
          children: "a"
        }), " ", createVNode(_components.strong, {
          children: "更新为1"
        }), "。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["也就是说，我们", createVNode(_components.code, {
        children: "console.log(a)"
      }), "的结果为", createVNode(_components.code, {
        children: "undefined"
      }), "的原因是 ", createVNode(_components.strong, {
        children: [createVNode(_components.code, {
          children: "a"
        }), "的创建和初始化的过程被提升了"]
      }), "。"]
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
      children: ["这里我们试验一下 ", createVNode(_components.strong, {
        children: "const"
      }), " 和 ", createVNode(_components.strong, {
        children: "let"
      }), " 命令，发现他们都报错了。那么是不是说 ", createVNode(_components.strong, {
        children: "const"
      }), " 和 ", createVNode(_components.strong, {
        children: "let"
      }), " 不存在变量提升呢？"]
    }), "\n", createVNode(_components.p, {
      children: ["其实严格意义上来讲， ", createVNode(_components.strong, {
        children: [createVNode(_components.code, {
          children: "const"
        }), "和", createVNode(_components.code, {
          children: "let"
        }), "依然存在变量提升的情况"]
      }), " 。只是与 ", createVNode(_components.strong, {
        children: "var"
      }), " 不同的是，", createVNode(_components.strong, {
        children: "const"
      }), " 和 ", createVNode(_components.strong, {
        children: "let"
      }), " 只是创建被提升了。我们来看看ES6标准的原话。"]
    }), "\n", createVNode("blockquote", {
      children: "The variables are created when their containing Lexical Environment is instantiated but may not be accessed inany way until the variable’s LexicalBinding is evaluated."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: "简单来说就是当环境作用域被创建时，变量就都已经被创建了"
      }), "。只是这个时候我们还未进行声明，在这个时间点访问会导致直接报错。而从创建变量到声明变量这个时间段，我们就称它为", createVNode(_components.strong, {
        children: "临时性死区（Temporal Dead Zone）"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "重复声明",
      children: "重复声明"
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
      children: "上面的例子，我们进行了很多重复声明。结果发现，"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "var"
        }), " 命令和 ", createVNode(_components.strong, {
          children: "let"
        }), " 命令可以进行重复声明，", createVNode(_components.strong, {
          children: "const"
        }), " 命令不能进行重复声明。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "var"
        }), " 命令和 ", createVNode(_components.strong, {
          children: "let"
        }), " 命令重复声明时，命令必须与之前的相同，否则会报错。"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "总结",
      children: "总结"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "var"
        }), " 没有块级作用域概念，", createVNode(_components.strong, {
          children: "const"
        }), " 和 ", createVNode(_components.strong, {
          children: "let"
        }), " 有块级作用域概念。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "var"
        }), " 会提升创建和初始化，", createVNode(_components.strong, {
          children: "const"
        }), " 和 ", createVNode(_components.strong, {
          children: "let"
        }), " 只会提升创建。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "const"
        }), " 不可以重复声明，", createVNode(_components.strong, {
          children: "let"
        }), " 和 ", createVNode(_components.strong, {
          children: "var"
        }), " 可以重复声明。"]
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

const url = "src/content/blog/JavaScript%E4%B8%AD%E7%9A%84const%E3%80%81let%E5%92%8Cvar%E7%9A%84%E5%8C%BA%E5%88%AB.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/blog/JavaScript中的const、let和var的区别.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/blog/JavaScript中的const、let和var的区别.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
