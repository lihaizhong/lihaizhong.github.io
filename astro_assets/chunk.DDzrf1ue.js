import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';

const frontmatter = {
  "title": "什么是 XSS 和 CSRF 攻击？如何防范",
  "category": "浏览器相关",
  "pubDate": "Tue, 15 Jul 2025 23:02:10 +0800",
  "heroImage": "",
  "draft": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "一xss-攻击cross-site-scripting跨站脚本攻击",
    "text": "一、XSS 攻击（Cross-Site Scripting，跨站脚本攻击）"
  }, {
    "depth": 3,
    "slug": "定义",
    "text": "定义"
  }, {
    "depth": 3,
    "slug": "攻击原理",
    "text": "攻击原理"
  }, {
    "depth": 3,
    "slug": "常见场景",
    "text": "常见场景"
  }, {
    "depth": 3,
    "slug": "防范措施",
    "text": "防范措施"
  }, {
    "depth": 2,
    "slug": "二csrf-攻击cross-site-request-forgery跨站请求伪造",
    "text": "二、CSRF 攻击（Cross-Site Request Forgery，跨站请求伪造）"
  }, {
    "depth": 3,
    "slug": "定义-1",
    "text": "定义"
  }, {
    "depth": 3,
    "slug": "攻击原理-1",
    "text": "攻击原理"
  }, {
    "depth": 3,
    "slug": "常见场景-1",
    "text": "常见场景"
  }, {
    "depth": 3,
    "slug": "防范措施-1",
    "text": "防范措施"
  }, {
    "depth": 2,
    "slug": "xss-与-csrf-的核心区别",
    "text": "XSS 与 CSRF 的核心区别"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
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
      children: "网络安全是前端开发的重要环节，XSS 和 CSRF 是两种常见的攻击方式，它们利用浏览器特性和用户信任进行恶意操作，需针对性防范。"
    }), "\n", createVNode(_components.h2, {
      id: "一xss-攻击cross-site-scripting跨站脚本攻击",
      children: "一、XSS 攻击（Cross-Site Scripting，跨站脚本攻击）"
    }), "\n", createVNode(_components.h3, {
      id: "定义",
      children: "定义"
    }), "\n", createVNode(_components.p, {
      children: "XSS 攻击是指攻击者在网页中注入恶意 JavaScript 代码，当用户访问该页面时，恶意代码在用户浏览器中执行，从而窃取用户信息（如 Cookie、账号密码）、篡改页面内容或发起其他攻击。"
    }), "\n", createVNode(_components.h3, {
      id: "攻击原理",
      children: "攻击原理"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["攻击者将恶意脚本（如 ", createVNode(_components.code, {
          children: "<script>stealCookie()</script>"
        }), "）注入到网页中 ", createVNode(_components.em, {
          children: "（通常通过表单提交、URL参数等方式）"
        }), "。"]
      }), "\n", createVNode(_components.li, {
        children: "网页未对用户输入进行过滤，直接将恶意脚本渲染到页面中。"
      }), "\n", createVNode(_components.li, {
        children: "其他用户访问该页面时，恶意脚本被浏览器执行，导致信息泄漏或其他危害。"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "常见场景",
      children: "常见场景"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["评论区、论坛等用户可输入内容的区域，若未过滤 ", createVNode(_components.code, {
          children: "<script>"
        }), " 标签，可能被注入恶意代码。"]
      }), "\n", createVNode(_components.li, {
        children: ["URL 参数直接渲染到页面中（如 ", createVNode(_components.code, {
          children: "http://example.com/?name=<script>...</script>"
        }), "）,若未处理则触发 XSS 攻击。"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "防范措施",
      children: "防范措施"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "输入过滤与输出编码"
        }), "："]
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["对用户输入的内容进行严格过滤，移除或转义 ", createVNode(_components.code, {
          children: "<script>"
        }), "、", createVNode(_components.code, {
          children: "<img onerror>"
        }), " 等危险标签和属性。"]
      }), "\n", createVNode(_components.li, {
        children: ["输出到 HTML 时，将特殊字符（如 ", createVNode(_components.code, {
          children: "<"
        }), "、", createVNode(_components.code, {
          children: ">"
        }), "、 ", createVNode(_components.code, {
          children: "&"
        }), "）转义为 HTML 实体（如 ", createVNode(_components.code, {
          children: "&lt;"
        }), "、", createVNode(_components.code, {
          children: "&gt;"
        }), "、", createVNode(_components.code, {
          children: "&amp;"
        }), "），避免浏览器解析为脚本。"]
      }), "\n", createVNode(_components.li, {
        children: ["示例（JavaScript 转义）：", createVNode(_components.code, {
          children: "const safeHtml = text.replace(/</g, '&lt;').replace(/>/g, '&gt;')"
        }), "。"]
      }), "\n"]
    }), "\n", createVNode(_components.ol, {
      start: "2",
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "使用 CSP（Content Security Policy，内容安全策略）"
        }), "："]
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["通过 HTTP 响应头 ", createVNode(_components.code, {
          children: "Content-Security-Policy"
        }), " 限制资源加载来源，禁止执行内联脚本（", createVNode(_components.code, {
          children: "inline-script"
        }), "）和未授权域名的脚本。"]
      }), "\n", createVNode(_components.li, {
        children: ["示例：", createVNode(_components.code, {
          children: "Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted.com"
        }), "（仅允许加载自身域名和 ", createVNode(_components.code, {
          children: "trusted.com"
        }), " 的脚本）。"]
      }), "\n"]
    }), "\n", createVNode(_components.ol, {
      start: "3",
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "设置 Cookie 的 HttpOnly 属性"
        }), "："]
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["为 Cookie 添加 ", createVNode(_components.code, {
          children: "HttpOnly"
        }), " 属性，使其无法通过 JavaScript 的 ", createVNode(_components.code, {
          children: "document.cookie"
        }), " 访问，即使发生 XSS，攻击者也无法窃取 Cookie。"]
      }), "\n", createVNode(_components.li, {
        children: ["示例（HTTP 响应头）：", createVNode(_components.code, {
          children: "Set-Cookie: sessionId=xxx; HttpOnly; Secure"
        }), "。"]
      }), "\n"]
    }), "\n", createVNode(_components.ol, {
      start: "4",
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: ["避免使用 ", createVNode(_components.code, {
            children: "eval()、"
          }), "innerHTML` 等危险 API"]
        }), "："]
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "eval()"
        }), " 会执行字符串作为代码，易被注入攻击；", createVNode(_components.code, {
          children: "innerHTML"
        }), " 会直接解析 HTML，可能执行恶意脚本。"]
      }), "\n", createVNode(_components.li, {
        children: ["有限使用 ", createVNode(_components.code, {
          children: "textContent"
        }), "（仅渲染文本）或安全的模版引擎（如 Vue、React 的模版系统，自动转义 HTML）。"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "二csrf-攻击cross-site-request-forgery跨站请求伪造",
      children: "二、CSRF 攻击（Cross-Site Request Forgery，跨站请求伪造）"
    }), "\n", createVNode(_components.h3, {
      id: "定义-1",
      children: "定义"
    }), "\n", createVNode(_components.p, {
      children: "CSRF 攻击时指攻击者诱导已登录用户在不知情的情况下，向被攻击网站发送恶意请求，利用用户的身份信息（如 Cookie）执行未授权操作（如转账、修改密码）。"
    }), "\n", createVNode(_components.h3, {
      id: "攻击原理-1",
      children: "攻击原理"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "用户已登录目标网站 A（如银行网站），浏览器保存了网站A的登录 Coookie。"
      }), "\n", createVNode(_components.li, {
        children: "攻击者诱导用户访问恶意网站 B，网站 B中隐藏向网站 A发送请求的代码（如表单自动提交、图片请求）。"
      }), "\n", createVNode(_components.li, {
        children: "由于浏览器会自动携带网站 A 的 Cookie，网站 A 误认为是用户主动发起的请求，从而执行恶意操作（如转账给攻击者）。"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "常见场景-1",
      children: "常见场景"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "银行转账操作：恶意网站通过表单提交，利用用户的登录状态发起转账请求。"
      }), "\n", createVNode(_components.li, {
        children: "账号设置修改：诱导用户访问恶意页面，自动发送修改邮箱或密码的请求。"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "防范措施-1",
      children: "防范措施"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "验证请求来源（Referer/Origin）"
        }), "："]
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["服务器检查请求头中的 ", createVNode(_components.code, {
          children: "Referer"
        }), " 或 ", createVNode(_components.code, {
          children: "Origin"
        }), " 字段，验证请求是否来自可信域名（如网站自身域名）。"]
      }), "\n", createVNode(_components.li, {
        children: ["示例：仅允许 ", createVNode(_components.code, {
          children: "Referer"
        }), " 为 ", createVNode(_components.code, {
          children: "https://example.com"
        }), " 的请求执行敏感操作。"]
      }), "\n"]
    }), "\n", createVNode(_components.ol, {
      start: "2",
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "使用 CSRF Token（令牌）"
        }), "："]
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "服务器为每个用户生成一个随机的 CSRF Token，存储在 Session 或 Cookie 中，并要求敏感请求（如表单提交）必须携带该 Token。"
      }), "\n", createVNode(_components.li, {
        children: "攻击网站无法获取 Token，因此即使发送请求，服务器验证 Token 失败也会拒绝执行。"
      }), "\n", createVNode(_components.li, {
        children: ["示例：\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["前端表单中添加 ", createVNode(_components.code, {
              children: "<input type=\"hidden\" name=\"csrfToken\" value=\"xxx\">"
            }), "。"]
          }), "\n", createVNode(_components.li, {
            children: "服务器接收请求时，对比请求中的 Token 与 Session 中的 Token 是否一致。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.ol, {
      start: "3",
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "使用 SameSite Cookie 属性"
        }), "："]
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["为 Cookie 设置 ", createVNode(_components.code, {
          children: "SameSite=Strict"
        }), " 或 ", createVNode(_components.code, {
          children: "SameSite=Lax"
        }), "，限制 Cookie 仅在同源请求中携带，阻止跨站请求携带 Cookie。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "SameSite=Strict"
        }), "：完全禁止跨站请求携带 Cookie；", createVNode(_components.code, {
          children: "SameSite=Lax"
        }), "：允许 GET 请求跨站携带 Cookie（如链接跳转），但禁止 POST 等请求。"]
      }), "\n", createVNode(_components.li, {
        children: ["示例：", createVNode(_components.code, {
          children: "Set-Cookie: sessionId=xxx; SameSite=Strict"
        }), "。"]
      }), "\n"]
    }), "\n", createVNode(_components.ol, {
      start: "4",
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "要求敏感操作二次验证"
        }), "："]
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "对于转账、修改密码等高危操作，要求用户输入验证码、密码或进行其他身份验证，即使发生 CSRF，攻击者也无法完成操作。"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "xss-与-csrf-的核心区别",
      children: "XSS 与 CSRF 的核心区别"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "维度"
          }), createVNode(_components.th, {
            children: "XSS 攻击"
          }), createVNode(_components.th, {
            children: "CSRF 攻击"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "攻击目标"
          }), createVNode(_components.td, {
            children: "利用用户对网站的信任，窃取用户信息"
          }), createVNode(_components.td, {
            children: "利用网站对用户的信息，执行未授权操作"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "攻击方式"
          }), createVNode(_components.td, {
            children: "注入恶意脚本，在用户浏览器执行"
          }), createVNode(_components.td, {
            children: "诱导用户发送跨站请求，利用用户身份"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "防御重点"
          }), createVNode(_components.td, {
            children: "过滤输入、限制脚本执行"
          }), createVNode(_components.td, {
            children: "验证请求来源、使用 Token"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "通过上述措施，可有效降低 XSS 和 CSRF 攻击的风险，保障用户数据安全和网站正常运行。实际开发中，需结合业务场景选择合适的防御方案，多层次防护效果更佳。"
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

const url = "src/content/interview/%E4%BB%80%E4%B9%88%E6%98%AF%20XSS%20%E5%92%8C%20CSRF%20%E6%94%BB%E5%87%BB%EF%BC%9F%E5%A6%82%E4%BD%95%E9%98%B2%E8%8C%83.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/什么是 XSS 和 CSRF 攻击？如何防范.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/什么是 XSS 和 CSRF 攻击？如何防范.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
