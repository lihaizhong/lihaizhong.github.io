import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';

const frontmatter = {
  "title": "浏览器的本地存储方式有哪些？它们的区别和适用场景是什么",
  "category": "浏览器相关",
  "pubDate": "Tue, 15 Jul 2025 17:16:56 +0800",
  "heroImage": "",
  "draft": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "cookie",
    "text": "Cookie"
  }, {
    "depth": 3,
    "slug": "特性",
    "text": "特性"
  }, {
    "depth": 3,
    "slug": "适用场景",
    "text": "适用场景"
  }, {
    "depth": 2,
    "slug": "localstorage",
    "text": "localStorage"
  }, {
    "depth": 3,
    "slug": "特性-1",
    "text": "特性"
  }, {
    "depth": 3,
    "slug": "适用场景-1",
    "text": "适用场景"
  }, {
    "depth": 2,
    "slug": "sessionstorage",
    "text": "sessionStorage"
  }, {
    "depth": 3,
    "slug": "特性-2",
    "text": "特性"
  }, {
    "depth": 3,
    "slug": "适用场景-2",
    "text": "适用场景"
  }, {
    "depth": 2,
    "slug": "indexdb",
    "text": "IndexDB"
  }, {
    "depth": 3,
    "slug": "特性-3",
    "text": "特性"
  }, {
    "depth": 3,
    "slug": "适用场景-3",
    "text": "适用场景"
  }, {
    "depth": 2,
    "slug": "四种存储方式的核心区别",
    "text": "四种存储方式的核心区别"
  }, {
    "depth": 2,
    "slug": "选择建议",
    "text": "选择建议"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
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
      children: "浏览器的本地存储是指将数据存储在用户本地设备上的技术，无需每次从服务器获取，可提升页面加载速度和离线和使用场景上有显著差异。"
    }), "\n", createVNode(_components.h2, {
      id: "cookie",
      children: "Cookie"
    }), "\n", createVNode(_components.h3, {
      id: "特性",
      children: "特性"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["容量下，通常限制在 ", createVNode(_components.strong, {
          children: "4KB左右"
        }), "。"]
      }), "\n", createVNode(_components.li, {
        children: "由服务器或客户端设置，每次 HTTP 请求都会自动携带在请求头中（包括跨域请求，需符合 CORS 策略）。"
      }), "\n", createVNode(_components.li, {
        children: ["有过期时间（", createVNode(_components.code, {
          children: "expires"
        }), " 或 ", createVNode(_components.code, {
          children: "max-age"
        }), "），过期后自动删除；若未设置，则为会话级（关闭浏览器后失效）。"]
      }), "\n", createVNode(_components.li, {
        children: ["可设置 ", createVNode(_components.code, {
          children: "domain"
        }), " 和 ", createVNode(_components.code, {
          children: "path"
        }), " 属性，限制 Cookie 的作用范围（如仅在特定域名或路径下生效）。"]
      }), "\n", createVNode(_components.li, {
        children: ["支持 ", createVNode(_components.code, {
          children: "HttpOnly"
        }), " 属性（设置后无法通过 JavaScript 访问，可防止 XSS 攻击）和 ", createVNode(_components.code, {
          children: "Secure"
        }), " 属性（仅在 HTTPS 协议下传输）。"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "适用场景",
      children: "适用场景"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "存储用户身份标识（如 Session ID），实现会话管理（登录状态保持）。"
      }), "\n", createVNode(_components.li, {
        children: "存储用户偏好设置（如语言、主题），但受限于容量，仅适合少量数据。"
      }), "\n", createVNode(_components.li, {
        children: "用于追踪用户行为（如广告投放），但需注意隐私合规（如 GDPR）。"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "localstorage",
      children: "localStorage"
    }), "\n", createVNode(_components.h3, {
      id: "特性-1",
      children: "特性"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["容量较大，通常为 ", createVNode(_components.strong, {
          children: "5MB ~ 10MB"
        }), "（不同浏览器略有差异）。"]
      }), "\n", createVNode(_components.li, {
        children: ["仅由客户端通过 JavaScript 操作（", createVNode(_components.code, {
          children: "localStorage.setItem()/getItem()"
        }), "），不会随 HTTP 请求发送到服务器。"]
      }), "\n", createVNode(_components.li, {
        children: "持久化存储，除非手动删除（通过代码或浏览器设置），否则数据永久保留（关闭浏览器、重启设备后仍存在）。"
      }), "\n", createVNode(_components.li, {
        children: "作用域限制在同一域名（协议、域名、端口均相同），不同域名无法共享数据。"
      }), "\n", createVNode(_components.li, {
        children: ["存储的数据为字符串类型，复杂数据（如对象）需通过 ", createVNode(_components.code, {
          children: "JSON.stringify()"
        }), " 序列化后存储。"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "适用场景-1",
      children: "适用场景"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["存储大量用户本地数据，", createVNode(_components.em, {
          children: "如离线缓存的商品列表、表单草稿（未提交的内容）"
        }), "。"]
      }), "\n", createVNode(_components.li, {
        children: ["保存用户长期偏好设置 ", createVNode(_components.em, {
          children: "（如默认排序方式、是否开启夜间模式）"
        }), "。"]
      }), "\n", createVNode(_components.li, {
        children: "作为前端状态管理的辅助存储（如缓存不常变化的全局数据）。"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "sessionstorage",
      children: "sessionStorage"
    }), "\n", createVNode(_components.h3, {
      id: "特性-2",
      children: "特性"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["容量与 ", createVNode(_components.code, {
          children: "localStorage"
        }), " 相近（", createVNode(_components.strong, {
          children: "5MB ~ 10MB"
        }), "）。"]
      }), "\n", createVNode(_components.li, {
        children: "仅在当前会话（标签页或窗口）有效，关闭标签页/窗口后数据立即清除；同一页面的刷新不会删除数据，但不同标签页间无法共享（即使是同一域名）。"
      }), "\n", createVNode(_components.li, {
        children: "仅由客户端 JavaScript 操作，不随 HTTP 请求发送。"
      }), "\n", createVNode(_components.li, {
        children: ["作用域限制在同一域名或同一会话，与 ", createVNode(_components.code, {
          children: "localStorage"
        }), " 相同。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["注意：当在一个标签页下，打开同一域名的新标签，会将 ", createVNode(_components.code, {
        children: "sessionStorage"
      }), " 的数据复制到新标签页中，但是当前标签页的 ", createVNode(_components.code, {
        children: "sessionStorage"
      }), " 数据发生改变时，不会同步到新标签页。"]
    }), "\n", createVNode(_components.h3, {
      id: "适用场景-2",
      children: "适用场景"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["存储临时会话数据，", createVNode(_components.em, {
          children: "如单页应用（SPA）中的路由参数、临时表单数据（仅在当前页有效）。"
        })]
      }), "\n", createVNode(_components.li, {
        children: "防止用户重复提交表单（存储提交状态，页面刷新后仍可读取）。"
      }), "\n", createVNode(_components.li, {
        children: ["存储敏感的临时数据（", createVNode(_components.em, {
          children: "如用户输入的验证码"
        }), "），避免持久化带来的隐私风险。"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "indexdb",
      children: "IndexDB"
    }), "\n", createVNode(_components.h3, {
      id: "特性-3",
      children: "特性"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "大容量存储，理论上无上限（受限于用户设备存储空间）。"
      }), "\n", createVNode(_components.li, {
        children: "基于 NoSQL 的数据库，支持复杂数据结构（对象、二进制数据等），可通过索引高效查询。"
      }), "\n", createVNode(_components.li, {
        children: "异步操作（不会阻塞主线程），适合处理大量数据。"
      }), "\n", createVNode(_components.li, {
        children: "持久化存储，作用域为同一域名，数据不会随会话结束而删除。"
      }), "\n", createVNode(_components.li, {
        children: "支持事物操作，保证数据的完整性。"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "适用场景-3",
      children: "适用场景"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["存储大量结构化数据，如离弦应用的本地数据库（", createVNode(_components.em, {
          children: "如离线地图数据、文档编辑历史"
        }), "）。"]
      }), "\n", createVNode(_components.li, {
        children: ["缓存需要频繁查询的数据（", createVNode(_components.em, {
          children: "如用户的历史订单记录"
        }), "），减少服务器请求。"]
      }), "\n", createVNode(_components.li, {
        children: ["实现复杂的前端数据交互（", createVNode(_components.em, {
          children: "如本地搜索、数据过滤"
        }), "），提升操作响应速度。"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "四种存储方式的核心区别",
      children: "四种存储方式的核心区别"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "特性"
          }), createVNode(_components.th, {
            children: "Cookie"
          }), createVNode(_components.th, {
            children: "localStorage"
          }), createVNode(_components.th, {
            children: "sessionStorage"
          }), createVNode(_components.th, {
            children: "IndexDB"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "容量"
            })
          }), createVNode(_components.td, {
            children: "约 4KB"
          }), createVNode(_components.td, {
            children: "5MB ~ 10MB"
          }), createVNode(_components.td, {
            children: "5MB ~ 10MB"
          }), createVNode(_components.td, {
            children: "理论上无上限"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "有效期"
            })
          }), createVNode(_components.td, {
            children: "可设置过期时间"
          }), createVNode(_components.td, {
            children: "永久（手动删除）"
          }), createVNode(_components.td, {
            children: "会话级（关闭标签页）"
          }), createVNode(_components.td, {
            children: "永久（手动删除）"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "网络请求携带"
            })
          }), createVNode(_components.td, {
            children: "是（自动）"
          }), createVNode(_components.td, {
            children: "否"
          }), createVNode(_components.td, {
            children: "否"
          }), createVNode(_components.td, {
            children: "否"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "操作方式"
            })
          }), createVNode(_components.td, {
            children: "客户端/服务器均可设置"
          }), createVNode(_components.td, {
            children: "仅客户端 JavaScript"
          }), createVNode(_components.td, {
            children: "仅客户端 JavaScript"
          }), createVNode(_components.td, {
            children: "仅客户端 JavaScript"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "数据类型"
            })
          }), createVNode(_components.td, {
            children: "字符串"
          }), createVNode(_components.td, {
            children: "字符串（需序列化）"
          }), createVNode(_components.td, {
            children: "字符串（需序列化）"
          }), createVNode(_components.td, {
            children: "复杂数据（对象、二进制等）"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "作用域"
            })
          }), createVNode(_components.td, {
            children: "同域名（可跨路径）"
          }), createVNode(_components.td, {
            children: "同域名"
          }), createVNode(_components.td, {
            children: "同域名 + 同会话"
          }), createVNode(_components.td, {
            children: "同域名"
          })]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "选择建议",
      children: "选择建议"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "需与服务器交互的少量数据（如身份验证）-> Cookie。"
      }), "\n", createVNode(_components.li, {
        children: "长期存储的非敏感数据（如用户偏好）-> localStorage。"
      }), "\n", createVNode(_components.li, {
        children: "临时会话数据（如表单临时内容）-> sessionStorage。"
      }), "\n", createVNode(_components.li, {
        children: "大量结构化数据（如离线缓存）-> IndexDB。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["实际开发中，需根据数据量、有效期、是否跨会话等需求综合选择，同时注意隐私安全（如避免存储敏感信息在 ", createVNode(_components.code, {
        children: "localStorage"
      }), " 中，防止 XSS 攻击）和浏览器兼容性（IndexDB 在老旧浏览器中支持有限）。"]
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

const url = "src/content/interview/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E6%9C%AC%E5%9C%B0%E5%AD%98%E5%82%A8%E6%96%B9%E5%BC%8F%E6%9C%89%E5%93%AA%E4%BA%9B%EF%BC%9F%E5%AE%83%E4%BB%AC%E7%9A%84%E5%8C%BA%E5%88%AB%E5%92%8C%E9%80%82%E7%94%A8%E5%9C%BA%E6%99%AF%E6%98%AF%E4%BB%80%E4%B9%88.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/浏览器的本地存储方式有哪些？它们的区别和适用场景是什么.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/浏览器的本地存储方式有哪些？它们的区别和适用场景是什么.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
