import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';

const frontmatter = {
  "title": "在 Vue 中，如何实现组件之间的通信？请列举多种方式并说明其适用场景",
  "category": "前端框架",
  "pubDate": "Mon, 14 Jul 2025 04:00:53 +0800",
  "heroImage": "",
  "draft": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "组件通信方式",
    "text": "组件通信方式"
  }, {
    "depth": 3,
    "slug": "propsemit父子组件通信",
    "text": "props/emit（父子组件通信）"
  }, {
    "depth": 3,
    "slug": "parentchildren父子组件通信",
    "text": "$parent/$children（父子组件通信）"
  }, {
    "depth": 3,
    "slug": "refs父子组件通信",
    "text": "$refs（父子组件通信）"
  }, {
    "depth": 3,
    "slug": "eventbus兄弟跨级组件通信",
    "text": "EventBus（兄弟/跨级组件通信）"
  }, {
    "depth": 3,
    "slug": "vuexpinia全局状态管理器",
    "text": "Vuex/Pinia（全局状态管理器）"
  }, {
    "depth": 3,
    "slug": "provideinject跨级组件通信",
    "text": "Provide/Inject（跨级组件通信）"
  }, {
    "depth": 3,
    "slug": "路由参数跳转组件通信",
    "text": "路由参数（跳转组件通信）"
  }, {
    "depth": 2,
    "slug": "选择通信方式的核心原则",
    "text": "选择通信方式的核心原则"
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
      children: "Vue 中组件通信方式多样，需根据组件关系（父子、兄弟、跨级等）选择合适的方式。"
    }), "\n", createVNode(_components.h2, {
      id: "组件通信方式",
      children: "组件通信方式"
    }), "\n", createVNode(_components.h3, {
      id: "propsemit父子组件通信",
      children: "props/emit（父子组件通信）"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "用法"
        }), "：父组件通过 ", createVNode(_components.code, {
          children: "props"
        }), " 向子组件传递数据；子组件通过 ", createVNode(_components.code, {
          children: "$emit"
        }), " 触发事件，父组件监听事件获取子组件数据。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "适用场景"
        }), "：最基础的父子组件通信，适用于数据流向清晰的简单场景。"]
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "vue",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "<!-- 父组件 -->"
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
              color: "#85E89D"
            },
            children: "Child"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " :"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "msg"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "parentMsg"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " @"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "childEvent"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "handleEvent"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " />"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "<!-- 子组件 -->"
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
              color: "#85E89D"
            },
            children: "script"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " default"
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
            children: "  props: ["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'msg'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  methods: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    sendData"
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
            children: "      this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "$emit"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'childEvent'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'子组件数据'"
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
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "script"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "parentchildren父子组件通信",
      children: "$parent/$children（父子组件通信）"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "用法"
        }), "：子组件通过 ", createVNode(_components.code, {
          children: "this.$parent"
        }), " 访问父组件实例；父组件通过 ", createVNode(_components.code, {
          children: "this.$children"
        }), " 访问子组件实例（返回子组件数组）。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "适用场景"
        }), "：临时性、简单的父子组件交互，但不推荐频繁使用，会增加组件耦合度。"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "refs父子组件通信",
      children: "$refs（父子组件通信）"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "用法"
        }), "：父组件给子组件添加 ", createVNode(_components.code, {
          children: "ref"
        }), " 属性（如 ", createVNode(_components.code, {
          children: "<Child ref=\"childRef\" />"
        }), "），通过 ", createVNode(_components.code, {
          children: "this.$refs.childRef"
        }), " 直接访问子组件实例（包括数据和方法）。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "适用场景"
        }), "：需要主动调用子组件方法或获取子组件数据的场景（如表单重置），需在组件挂载后使用。"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "eventbus兄弟跨级组件通信",
      children: "EventBus（兄弟/跨级组件通信）"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "用法"
        }), "：创建一个全局事件总线（如", createVNode(_components.code, {
          children: "const bus = new Vue()"
        }), "），组件通过 ", createVNode(_components.code, {
          children: "bus.$emit"
        }), " 触发事件传递数据。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "适用场景"
        }), "：中小型项目中无直接关系的组件通信，大型项目易导致事件混乱，需谨慎使用。"]
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
            children: "// main.js"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Vue"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "prototype"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".$bus "
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
            children: " Vue"
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
              color: "#6A737D"
            },
            children: "// 组件 A（发送数据）"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".$bus."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "$emit"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'eventName'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", data);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 组件 B（接收数据）"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".$bus."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "$on"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'eventName'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", ("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "data"
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
            children: " });"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "vuexpinia全局状态管理器",
      children: "Vuex/Pinia（全局状态管理器）"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "用法"
        }), "：通过集中式存储管理应用的所有组件状态，组件通过 ", createVNode(_components.code, {
          children: "dispatch/commit"
        }), " 修改状态，通过 ", createVNode(_components.code, {
          children: "mapState"
        }), " 等获取状态。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "适用场景"
        }), "：大型项目中多组件共享数据（如用户信息、购物车等），或跨多级组件通信，能清晰追踪状态变化。"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "provideinject跨级组件通信",
      children: "Provide/Inject（跨级组件通信）"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "用法"
        }), "：祖先组件通过 ", createVNode(_components.code, {
          children: "provide"
        }), " 提供数据，后代组件通过 ", createVNode(_components.code, {
          children: "inject"
        }), " 注入数据，无视组件层级。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "适用场景"
        }), "：深层嵌套组件通信（如组件库开发），但数据是非响应式的（需配合", createVNode(_components.code, {
          children: "ref/reactive"
        }), "实现响应式）。"]
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "vue",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "<!-- 祖先组件 -->"
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
              color: "#85E89D"
            },
            children: "script"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " default"
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
            children: "  provide"
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
            children: "    return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { key: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'共享数据'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " }"
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
              color: "#E1E4E8"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "script"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "<!-- 后代组件 -->"
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
              color: "#85E89D"
            },
            children: "script"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " default"
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
            children: "  inject: ["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'key'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  mounted"
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
            children: ".key);"
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
              color: "#E1E4E8"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "script"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "路由参数跳转组件通信",
      children: "路由参数（跳转组件通信）"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "用法"
        }), "：通过路由跳转时在 URL 中携带参数（", createVNode(_components.code, {
          children: "params"
        }), " 或 ", createVNode(_components.code, {
          children: "query"
        }), "），目标组件通过 ", createVNode(_components.code, {
          children: "$route.params/$route.query"
        }), " 获取。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "适用场景"
        }), "：页面级组件通过路由跳转传递数据。"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "选择通信方式的核心原则",
      children: "选择通信方式的核心原则"
    }), "\n", createVNode(_components.p, {
      children: ["优先使用 ", createVNode(_components.code, {
        children: "props/emit"
      }), "（父子）、", createVNode(_components.code, {
        children: "Vuex/Pinia"
      }), "（全局），避免过度使用 ", createVNode(_components.code, {
        children: "$parent/EventBus"
      }), " 导致代码维护困难。"]
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

const url = "src/content/interview/%E5%9C%A8%20Vue%20%E4%B8%AD%EF%BC%8C%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E7%BB%84%E4%BB%B6%E4%B9%8B%E9%97%B4%E7%9A%84%E9%80%9A%E4%BF%A1%EF%BC%9F%E8%AF%B7%E5%88%97%E4%B8%BE%E5%A4%9A%E7%A7%8D%E6%96%B9%E5%BC%8F%E5%B9%B6%E8%AF%B4%E6%98%8E%E5%85%B6%E9%80%82%E7%94%A8%E5%9C%BA%E6%99%AF.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/在 Vue 中，如何实现组件之间的通信？请列举多种方式并说明其适用场景.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/在 Vue 中，如何实现组件之间的通信？请列举多种方式并说明其适用场景.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
