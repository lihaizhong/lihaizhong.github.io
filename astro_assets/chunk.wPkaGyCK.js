import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';

const frontmatter = {
  "title": "谈谈你对懒加载和预加载的理解，它们的实现方式和适用场景",
  "category": "性能优化",
  "pubDate": "Mon, 14 Jul 2025 14:31:58 +0800",
  "heroImage": "",
  "draft": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "懒加载lazy-loading",
    "text": "懒加载（Lazy Loading）"
  }, {
    "depth": 3,
    "slug": "实现方式",
    "text": "实现方式"
  }, {
    "depth": 3,
    "slug": "适用场景",
    "text": "适用场景"
  }, {
    "depth": 2,
    "slug": "预加载preloading",
    "text": "预加载（Preloading）"
  }, {
    "depth": 3,
    "slug": "实现方式-1",
    "text": "实现方式"
  }, {
    "depth": 3,
    "slug": "适用场景-1",
    "text": "适用场景"
  }, {
    "depth": 2,
    "slug": "懒加载与预加载的区别",
    "text": "懒加载与预加载的区别"
  }, {
    "depth": 2,
    "slug": "注意事项",
    "text": "注意事项"
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
    children: [createVNode(_components.h2, {
      id: "懒加载lazy-loading",
      children: "懒加载（Lazy Loading）"
    }), "\n", createVNode(_components.p, {
      children: "懒加载是一种 “按需加载” 的策略，指资源（如图片、组件、数据）在初始化时不加载，仅当用户需要访问（如滚动到可视区域）时才加载，目的是减少首屏加载时间和资源消耗。"
    }), "\n", createVNode(_components.h3, {
      id: "实现方式",
      children: "实现方式"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "图片懒加载"
        }), "："]
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["初始化时，图片的 ", createVNode(_components.code, {
          children: "src"
        }), " 属性设为占位符（或不设置），将真实地址存放在 ", createVNode(_components.code, {
          children: "data-src"
        }), " （或 ", createVNode(_components.code, {
          children: "data-lazy"
        }), "）属性中。"]
      }), "\n", createVNode(_components.li, {
        children: ["通过监听 ", createVNode(_components.code, {
          children: "scroll"
        }), "、", createVNode(_components.code, {
          children: "resize"
        }), " 事件或使用 ", createVNode(_components.code, {
          children: "IntersectionObserver"
        }), " API，判断图片是否进入可视区域。"]
      }), "\n", createVNode(_components.li, {
        children: ["当图片进入可视区域时，将 ", createVNode(_components.code, {
          children: "data-src"
        }), " 的指赋给 ", createVNode(_components.code, {
          children: "src"
        }), "，触发图片加载。"]
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "html",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
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
            children: "img"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  class"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"lazy\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  src"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"placeholder.jpg\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  data-src"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"real.jpg\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  alt"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"Lazy Loaded Image\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "/>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
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
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " observer"
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
            children: " IntersectionObserver"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "entries"
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
            children: "    entries."
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
            children: "entry"
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
            children: "      if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (entry.isIntersecting) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " img"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " entry.target;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        img.src "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " img.dataset.src;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // 加载后停止观察"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        observer."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "unobserve"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(img);"
          })]
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
            children: "    });"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  });"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
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
            children: "querySelectorAll"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\".lazy\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
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
            children: "img"
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
            children: " observer."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "observe"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(img));"
          })]
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
    }), "\n", createVNode(_components.ol, {
      start: "2",
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "组件/路由懒加载"
        }), "："]
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["在 SPA（单页应用）中，通过 Webpack 的 ", createVNode(_components.code, {
          children: "import()"
        }), " 语法实现路由组件按需加载。"]
      }), "\n", createVNode(_components.li, {
        children: "示例（React）：const Home = React.lazy(() => import(’./Home’));"
      }), "\n", createVNode(_components.li, {
        children: "示例（Vue）：const Home = () => import(’./Home.vue’);"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "适用场景",
      children: "适用场景"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "长列表图片（如电商商品列表、社交媒体 feed 流）。"
      }), "\n", createVNode(_components.li, {
        children: "内容较多的页面（如新闻详情页中的非首屏图片）。"
      }), "\n", createVNode(_components.li, {
        children: "路由组件较多的 SPA，避免首屏加载所有组件导致的性能问题。"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "预加载preloading",
      children: "预加载（Preloading）"
    }), "\n", createVNode(_components.p, {
      children: "预加载是一种“提前加载”策略，指在浏览器空闲时或提前加载用户可能即将需要的资源（如后续页面的图片、关键 JS/CSS），当用户访问时可直接从缓存中获取，提升响应速度。"
    }), "\n", createVNode(_components.h3, {
      id: "实现方式-1",
      children: "实现方式"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "<link rel=\"preload\">"
        }), "：\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "用于提前加载关键资源（如字体、核心 JS/CSS），浏览器会优先加载这些资源，不阻塞页面渲染。"
          }), "\n", createVNode(_components.li, {
            children: ["示例：", createVNode(_components.code, {
              children: "<link rel=\"preload\" href=\"critical.css\" as=\"style>"
            }), "（", createVNode(_components.code, {
              children: "as"
            }), "指定资源类型，确保正确加载）。"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "<link rel=\"prefetch\">"
        }), "：\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "用于加载未来可能需要的资源（如下一页数据、非首屏组件），浏览器会在空闲时加载，优先级较低。"
          }), "\n", createVNode(_components.li, {
            children: ["示例：", createVNode(_components.code, {
              children: "<link rel=\"prefetch\" href=\"next-page.js\">"
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "JS 动态预加载"
        }), "：\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["通过 ", createVNode(_components.code, {
              children: "new Image()"
            }), " 预加载图片，或 ", createVNode(_components.code, {
              children: "import()"
            }), " 预加载 JS 模块。"]
          }), "\n", createVNode(_components.li, {
            children: ["示例：", createVNode(_components.code, {
              children: "const img = new Image(); img.src = 'future-image.jpg';"
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "适用场景-1",
      children: "适用场景"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "首屏关键资源（如核心 CSS、字体文件），确保快速渲染。"
      }), "\n", createVNode(_components.li, {
        children: "用户大概率会访问的后续内容（如分页列表的下一页数据、导航菜单对应的页面资源）。"
      }), "\n", createVNode(_components.li, {
        children: "交互触发的资源（如点击按钮后弹出的弹窗组件）。"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "懒加载与预加载的区别",
      children: "懒加载与预加载的区别"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "维度"
          }), createVNode(_components.th, {
            children: "懒加载"
          }), createVNode(_components.th, {
            children: "预加载"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "加载时机"
          }), createVNode(_components.td, {
            children: "资源进入可视区域/需要时"
          }), createVNode(_components.td, {
            children: "浏览器空闲时/提前加载"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "目的"
          }), createVNode(_components.td, {
            children: "减少首屏加载时间，节省带宽"
          }), createVNode(_components.td, {
            children: "提升后续操作的响应速度"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "资源优先级"
          }), createVNode(_components.td, {
            children: "低（按需加载）"
          }), createVNode(_components.td, {
            children: ["高（", createVNode(_components.code, {
              children: "preload"
            }), "）或低（", createVNode(_components.code, {
              children: "prefetch"
            }), "）"]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "适用资源"
          }), createVNode(_components.td, {
            children: "非首屏、非关键资源"
          }), createVNode(_components.td, {
            children: "即将需要的关键/可能需要的资源"
          })]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "懒加载避免过度使用，否则可能导致用户滚动时资源加载延迟、影响体验（可配合占位符优化）。"
      }), "\n", createVNode(_components.li, {
        children: ["预加载需合理选择资源，避免加载过多不必要的资源导致带宽浪费和性能损耗（如 ", createVNode(_components.code, {
          children: "prefetch"
        }), " 过多会占用空闲资源）。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "两者结合使用可最大化优化用户体验：懒加载减少首屏负担，预加载提升后续交互速度，是前端性能优化的重要手段。"
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

const url = "src/content/interview/%E8%B0%88%E8%B0%88%E4%BD%A0%E5%AF%B9%E6%87%92%E5%8A%A0%E8%BD%BD%E5%92%8C%E9%A2%84%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%90%86%E8%A7%A3%EF%BC%8C%E5%AE%83%E4%BB%AC%E7%9A%84%E5%AE%9E%E7%8E%B0%E6%96%B9%E5%BC%8F%E5%92%8C%E9%80%82%E7%94%A8%E5%9C%BA%E6%99%AF.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/谈谈你对懒加载和预加载的理解，它们的实现方式和适用场景.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/谈谈你对懒加载和预加载的理解，它们的实现方式和适用场景.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
