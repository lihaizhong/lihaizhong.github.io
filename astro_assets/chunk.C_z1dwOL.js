import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';

const frontmatter = {
  "title": "请设计一个大型前端项目的目录结构，并说明其设计思路",
  "category": "实战与架构",
  "pubDate": "Wed, 16 Jul 2025 00:50:28 +0800",
  "heroImage": "",
  "draft": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "设计思路",
    "text": "设计思路"
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
      children: ["大型前端项目的目录结构设计需满足 ", createVNode(_components.strong, {
        children: "可扩展性"
      }), "、", createVNode(_components.strong, {
        children: "可维护性"
      }), " 和 ", createVNode(_components.strong, {
        children: "团队协作效率"
      }), "，核心思路是“按功能职责拆分、按业务模块鳄梨、规范通用资源位置”。以下是一个典型的目录接哦顾设计："]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "ts",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "src"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "/"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "├── api"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                 # 接口层：统一管理API请求"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "│   ├── index.js         # 接口入口（导出所有API）"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "│   ├── user.js          # 用户相关接口（登录、信息等）"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "│   └── order.js         # 订单相关接口"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "├── assets"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "images"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "              # 静态资源：不经过编译的资源"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "│   ├── images"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "          # 图片资源（按业务模块子目录划分）"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "│   ├── fonts"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "           # 字体文件"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "│   └── styles"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "          # 全局样式（如reset.css、variables.scss）"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "├── components"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "          # 组件库"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "│   ├── common"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "          # 通用组件（按钮、输入框等，可复用至全项目）"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "│   ├── business"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        # 业务组件（如订单卡片、商品列表，与业务强相关）"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "│   └── layout"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "          # 布局组件（头部、侧边栏、页脚等）"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "├── config"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "              # 配置文件"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "│   ├── constants.js     # 常量定义（如状态码、路由路径）"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "│   ├── theme.js         # 主题配置（颜色、字体大小等）"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "│   └── env.js           # 环境变量（区分开发"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "测试"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "生产）"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "├── hooks"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "               # 自定义钩子：封装可复用的逻辑"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "│   ├── useAuth.js       # 权限相关钩子（如登录状态判断）"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "│   └── usePagination.js # 分页逻辑钩子"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "├── layouts"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "             # 页面布局：不同页面的整体结构"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "│   ├── MainLayout.vue   # 主布局（带侧边栏和头部）"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "│   └── BlankLayout.vue  # 空白布局（如登录页）"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "├── router"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "              # 路由配置"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "│   ├── index.js         # 路由入口（创建路由实例）"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "│   ├── routes.js        # 路由规则（按模块拆分）"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "│   └── guard.js         # 路由守卫（权限控制、登录拦截）"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "├── store"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "               # 状态管理"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "│   ├── index.js         # 状态入口（导出store实例）"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "│   ├── modules"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "         # 模块化状态（用户、购物车等）"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "│   └── plugins"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "         # 状态插件（如持久化）"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "├── utils"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "               # 工具函数"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "│   ├── format.js        # 格式化工具（日期、金额等）"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "│   └── validator.js     # 校验工具（表单验证规则）"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "├── views"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "               # 页面层：与路由一一对应"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "│   ├── user"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            # 用户模块页面"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "│   │   ├── login.vue    # 登录页"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "│   │   └── profile.vue  # 个人资料页"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "│   └── order"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "           # 订单模块页面"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "├── App.vue              # 根组件"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "└── main.js              # 入口文件（初始化应用）"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "设计思路",
      children: "设计思路"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "分层职责清晰"
        }), "：从接口层（api）、状态层（store）到视图层（views），每层专注单一职责，避免代码混杂。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "业务与通用分离"
        }), "：", createVNode(_components.code, {
          children: "components/common"
        }), " 存放全项目复用组件，", createVNode(_components.code, {
          children: "components/business"
        }), " 存放业务专属组件，便于维护和复用。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "模版化组织"
        }), "：按业务模块（如 user、order）划分目录，团队成员可聚焦各自负责的模块，减少代码冲突。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "资源集中管理"
        }), "：静态资源、配置文件、工具函数统一存放，避免散落各处导致查找困难。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "可扩展性预留"
        }), "：通过 ", createVNode(_components.code, {
          children: "plugins"
        }), "、", createVNode(_components.code, {
          children: "hooks"
        }), " 等目录，方便后期接入新功能（如埋点、性能监控）而不侵入核心代码。"]
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

const url = "src/content/interview/%E8%AF%B7%E8%AE%BE%E8%AE%A1%E4%B8%80%E4%B8%AA%E5%A4%A7%E5%9E%8B%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE%E7%9A%84%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84%EF%BC%8C%E5%B9%B6%E8%AF%B4%E6%98%8E%E5%85%B6%E8%AE%BE%E8%AE%A1%E6%80%9D%E8%B7%AF.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/请设计一个大型前端项目的目录结构，并说明其设计思路.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/请设计一个大型前端项目的目录结构，并说明其设计思路.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
