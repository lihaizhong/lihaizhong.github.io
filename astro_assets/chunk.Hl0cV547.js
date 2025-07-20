import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';

const frontmatter = {
  "title": "如何减少 HTTP 请求？有哪些具体的方法",
  "category": "性能优化",
  "pubDate": "Mon, 14 Jul 2025 12:32:39 +0800",
  "heroImage": "",
  "draft": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "具体实施方法",
    "text": "具体实施方法"
  }, {
    "depth": 3,
    "slug": "资源合并",
    "text": "资源合并"
  }, {
    "depth": 3,
    "slug": "资源压缩与格式优化",
    "text": "资源压缩与格式优化"
  }, {
    "depth": 3,
    "slug": "懒加载与按需加载",
    "text": "懒加载与按需加载"
  }, {
    "depth": 3,
    "slug": "利用缓存减少重复请求",
    "text": "利用缓存减少重复请求"
  }, {
    "depth": 3,
    "slug": "使用-cdn-与资源复用",
    "text": "使用 CDN 与资源复用"
  }, {
    "depth": 3,
    "slug": "内联小型资源",
    "text": "内联小型资源"
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
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "减少 HTTP 请求是前端性能优化的核心手段之一，因为每个 HTTP 请求都存在建立连接、传输数据等开销，请求数量越多，页面加载速度越慢。"
    }), "\n", createVNode(_components.h2, {
      id: "具体实施方法",
      children: "具体实施方法"
    }), "\n", createVNode(_components.h3, {
      id: "资源合并",
      children: "资源合并"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "JS/CSS 合并"
        }), "：将多个小型 JS 文件合并为一个（如用 Webpack 的 ", createVNode(_components.code, {
          children: "splitChunks"
        }), " 合并公共库），多个 CSS 文件合并为一个，减少请求次数。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "图片合并（CSS Sprite）"
        }), "：将多个小图标（如按钮、图标）合并成一张雪碧图，通过 CSS 的 ", createVNode(_components.code, {
          children: "background-position"
        }), " 定位显示不同图标，将多次图片请求缩减为一次。"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "资源压缩与格式优化",
      children: "资源压缩与格式优化"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "使用高效图片格式"
        }), "：采用 WebP、AVIF 等现代图片格式，在相同画质下体积比 JPEG/PNG 小 ", createVNode(_components.strong, {
          children: "30% 以上"
        }), "，减少单张图片的请求体积。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "字体图标替代图片"
        }), "：用 Font Awesome 等字体图标库替代小图标图片，一个字体文件可包含多个图标，且支持缩放不失真，减少图片请求。"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "懒加载与按需加载",
      children: "懒加载与按需加载"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "图片懒加载"
        }), "：初始至加载可视区域内的图片，当用户滚动到相应区域时再加载其他图片（通过 ", createVNode(_components.strong, {
          children: "data-src"
        }), " 存储真实地址，滚动时替换为 ", createVNode(_components.em, {
          children: "src"
        }), "）。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "路由懒加载"
        }), "：在 SPA（单页应用）中，通过 Webpack 的 ", createVNode(_components.code, {
          children: "import()"
        }), " 语法实现路由组件按需加载，仅当用户访问对应路由时才加载该组件的 JS/CSS，避免首屏加载所有资源。"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "利用缓存减少重复请求",
      children: "利用缓存减少重复请求"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "通过 HTTP 缓存"
        }), "：强缓存如 ", createVNode(_components.code, {
          children: "Cache-Control: max-age=31536000"
        }), "，协商缓存如 ", createVNode(_components.code, {
          children: "ETag/Last-Modified"
        }), "。让浏览器缓存静态资源，用户二次访问时直接从本地读取，无需重新向服务器请求。"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "使用-cdn-与资源复用",
      children: "使用 CDN 与资源复用"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "CDN 的边缘节点会缓存静态资源"
        }), "，用户请求时优先从 CDN 获取，减少对源服务器的请求；同时，CDN 的资源复用机制（如同一域名下的资源共享连接）可降低连接建立开销。"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "内联小型资源",
      children: "内联小型资源"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: ["将小型 JS/CSS 代码通过 ", createVNode(_components.code, {
            children: "<script>/<style>"
          }), " 标签内联到 HTML 中"]
        }), "，避免额外的 HTTP 请求（适用于体积极小的资源，过大内联惠增加 HTML 体积）。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "通过上述方法，可显著减少页面的 HTTP 请求总量，降低网络传输成本，提升页面加载速度。实际优化中需结合资源大小、使用频率等因素灵活选择，避免过度合并导致单次请求体积过大。"
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

const url = "src/content/interview/%E5%A6%82%E4%BD%95%E5%87%8F%E5%B0%91%20HTTP%20%E8%AF%B7%E6%B1%82%EF%BC%9F%E6%9C%89%E5%93%AA%E4%BA%9B%E5%85%B7%E4%BD%93%E7%9A%84%E6%96%B9%E6%B3%95.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/如何减少 HTTP 请求？有哪些具体的方法.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/如何减少 HTTP 请求？有哪些具体的方法.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
