import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';

const frontmatter = {
  "title": "新一代网络交互能力——FetchAPI",
  "pubDate": "Thu Dec 22 2022 11:56:23 GMT+0800",
  "description": ""
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "涉及的知识点",
    "text": "涉及的知识点"
  }, {
    "depth": 2,
    "slug": "fetchapi与xmlhttprequest的区别",
    "text": "FetchAPI与XMLHttpRequest的区别"
  }, {
    "depth": 2,
    "slug": "fetchapi的使用",
    "text": "FetchAPI的使用"
  }, {
    "depth": 2,
    "slug": "fetchapi的核心",
    "text": "FetchAPI的核心"
  }, {
    "depth": 2,
    "slug": "如何实现超时功能和进度功能",
    "text": "如何实现超时功能和进度功能"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
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
      children: "我们都知道原生了XMLHttpRequest是一个非常难用的API，不仅需要通过属性去判断请求当前所处的状态，还要按照一定的顺序规则去书写，保证写法能在所有浏览器都兼容，这大大提高了我们的心智负担。为了更好地使用XMLHttpRequest，有很多优秀的开源库也应运而生。开源库虽好，但毕竟会增大我们的静态资源包的大小。"
    }), "\n", createVNode(_components.p, {
      children: "今天我要介绍的就是浏览器原生支持的新一代网络交互能力——FetchAPI。FetchAPI采用了全新的架构设计，支持的环境也更加丰富（除了主页面工作线程外，还包括了模块和工作线程，如WebWorker、ServiceWorker等场景）。同时，FetchAPI采用较现代的Promise接口方案，在使用上也更加方便。"
    }), "\n", createVNode(_components.h2, {
      id: "涉及的知识点",
      children: "涉及的知识点"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API",
          children: "FetchAPI"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://developer.mozilla.org/zh-CN/docs/Web/API/Headers",
          children: "Headers"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://developer.mozilla.org/zh-CN/docs/Web/API/Request",
          children: "Request"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://developer.mozilla.org/zh-CN/docs/Web/API/Response",
          children: "Response"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "fetchapi与xmlhttprequest的区别",
      children: "FetchAPI与XMLHttpRequest的区别"
    }), "\n", createVNode(_components.p, {
      children: "FetchAPI与XMLHttpRequest都是用于异步请求的工具。既然已经有了XMLHttpRequest，为什么还要出来一个原生的FetchAPI呢？今天我们就来讲讲他们之间的区别。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            style: {
              textAlign: "left"
            }
          }), createVNode(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "FetchAPI"
          }), createVNode(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "XMLHttpRequest"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "使用难易度"
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "简单"
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "复杂"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "支持同步"
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "否"
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "是"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "支持异步"
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "是"
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "是"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "支持主页面线程中使用"
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "是"
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "是"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "支持模块和工作线程中使用"
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "是"
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "否"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "支持Promise"
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "是"
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "否"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "支持事件监听"
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "否"
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "是"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "支持跨域"
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "是"
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "是"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "支持取消请求"
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "是"
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "是"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "支持超时"
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "否"
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "是"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "支持进度"
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "否"
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "是"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "注意"
      }), "：", createVNode(_components.code, {
        children: "超时功能"
      }), "和", createVNode(_components.code, {
        children: "进度读取功能"
      }), "虽然不是原生提供，但可以通过Fetch现有API实现。"]
    }), "\n", createVNode(_components.p, {
      children: ["相比较而言，虽然在", createVNode(_components.code, {
        children: "超时"
      }), "和", createVNode(_components.code, {
        children: "进度读取"
      }), "这两项不常用的能力上，FetchAPI需要稍微费点神之外，FetchAPI的优点还是非常明显的，尤其在使用上尤为突出。FetchAPI采用Promise的方案，使得其操作方式更加现代，写法更加简洁，另外，FetchAPI除了能在主页面线程上能使用外，还能在类似WebWorker、ServiceWorker等环境中使用。"]
    }), "\n", createVNode(_components.h2, {
      id: "fetchapi的使用",
      children: "FetchAPI的使用"
    }), "\n", createVNode(_components.h2, {
      id: "fetchapi的核心",
      children: "FetchAPI的核心"
    }), "\n", createVNode(_components.h2, {
      id: "如何实现超时功能和进度功能",
      children: "如何实现超时功能和进度功能"
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

const url = "src/content/archive/%E6%96%B0%E4%B8%80%E4%BB%A3%E7%BD%91%E7%BB%9C%E4%BA%A4%E4%BA%92%E8%83%BD%E5%8A%9B%E2%80%94%E2%80%94FetchAPI.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/archive/新一代网络交互能力——FetchAPI.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/archive/新一代网络交互能力——FetchAPI.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
