import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';

const frontmatter = {
  "title": "详细解释浏览器的渲染过程，包括 DOM 树、CSSOM 树的构建以及页面布局和绘制",
  "category": "浏览器相关",
  "pubDate": "Tue, 15 Jul 2025 11:10:09 +0800",
  "heroImage": "",
  "draft": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "1-解析-html-构建-dom-树",
    "text": "1. 解析 HTML 构建 DOM 树"
  }, {
    "depth": 2,
    "slug": "2-解析-css-构建-cssom-树",
    "text": "2. 解析 CSS 构建 CSSOM 树"
  }, {
    "depth": 2,
    "slug": "3-构建渲染树render-tree",
    "text": "3. 构建渲染树（Render Tree）"
  }, {
    "depth": 2,
    "slug": "4-布局layoutreflow",
    "text": "4. 布局（Layout/Reflow）"
  }, {
    "depth": 2,
    "slug": "5-绘制painting",
    "text": "5. 绘制（Painting）"
  }, {
    "depth": 2,
    "slug": "6-合成compositing",
    "text": "6. 合成（Compositing）"
  }, {
    "depth": 2,
    "slug": "总结浏览器渲染过程",
    "text": "总结浏览器渲染过程"
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
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "浏览器的渲染过程是将 HTML、CSS、JavaScript 等资源转换为可视化页面的过程，主要分为以下几个核心步骤："
    }), "\n", createVNode(_components.h2, {
      id: "1-解析-html-构建-dom-树",
      children: "1. 解析 HTML 构建 DOM 树"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "解析 HTML"
        }), "：浏览器接收 HTML 字节数据后，先将其转换为字符（基于编码如 UTF-8），再通过词法分析将字符转换为标签（如 ", createVNode(_components.code, {
          children: "<div>"
        }), "、", createVNode(_components.code, {
          children: "<p>"
        }), "），最后通过语法分析构建节点间的父子关系。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "生成 DOM 树"
        }), "：DOM（文档对象模型）是HTML的树形表示，每个标签对应一个节点，文本和属性也会作为节点的一部分。DOM 树描述了页面的结构，但不包含样式信息。*例如，", createVNode(_components.code, {
          children: "<html><body><p>Hello</p></body></html>"
        }), "会生成以", createVNode(_components.code, {
          children: "<html>"
        }), "为根节点，", createVNode(_components.code, {
          children: "<body>"
        }), "为子节点，", createVNode(_components.code, {
          children: "<p>"
        }), "为孙节点的 DOM 树。"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "2-解析-css-构建-cssom-树",
      children: "2. 解析 CSS 构建 CSSOM 树"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "解析 CSS"
        }), "：浏览器同时会解析 CSS 资源（包括", createVNode(_components.code, {
          children: "<style>"
        }), "标签内的样式、", createVNode(_components.code, {
          children: "<link>"
        }), "引入的外部 CSS），过程类似 HTML 解析：先转换为字符，再解析为 CSS 规则（如，选择器、属性键值对）。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "生成 CSSOM 树"
        }), "：CSSOM（CSS 对象模型）是 CSS 规则的树形表示，每个节点对应 DOM 树中的节点，包含该节点的样式信息。CSSOM 树具有层级结构，子节点会继承父节点的样式（如", createVNode(_components.code, {
          children: "<body>"
        }), " 的样式会被其下所有元素继承，除非被覆盖）。", createVNode(_components.em, {
          children: ["例如，", createVNode(_components.code, {
            children: "body { color: black; } p { font-size: 16px; }"
          }), " 会生成对应 ", createVNode(_components.code, {
            children: "body"
          }), " 和", createVNode(_components.code, {
            children: "p"
          }), " 节点的 CSSOM 树，", createVNode(_components.code, {
            children: "p"
          }), " 节点同时继承 ", createVNode(_components.code, {
            children: "body"
          }), " 的 ", createVNode(_components.code, {
            children: "color"
          }), " 属性。"]
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "3-构建渲染树render-tree",
      children: "3. 构建渲染树（Render Tree）"
    }), "\n", createVNode(_components.p, {
      children: ["渲染树是 DOM 树与 CSSOM 树的结合，仅包含需要显示的节点及其样式信息，不包含隐藏节点（如 ", createVNode(_components.code, {
        children: "display: none"
      }), " 的元素）。"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "过程：遍历 DOM 树，为每个课间节点匹配 CSSOM 树中对应的样式规则，将节点和样式组合成渲染树节点。"
      }), "\n", createVNode(_components.li, {
        children: "特点：渲染树中的节点（成为“渲染对象”）按其在页面中的显示顺序排列，为后续布局和绘制做准备。"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "4-布局layoutreflow",
      children: "4. 布局（Layout/Reflow）"
    }), "\n", createVNode(_components.p, {
      children: "布局阶段（也称“回流”）是根据渲染树计算每个节点的几何信息（如位置、尺寸、宽高）的过程。"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "浏览器从渲染树的根节点开始，递归计算每个节点的坐标和大小，确定其在页面中的精确位置。"
      }), "\n", createVNode(_components.li, {
        children: "布局结果会生成一个“盒模型”，描述每个元素的边距、边框、内边距、内容区域的几何信息。"
      }), "\n", createVNode(_components.li, {
        children: "布局是一个流式过程，父节点的布局会影响子节点（如父元素宽度变化会导致子元素宽度重新计算）。"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "5-绘制painting",
      children: "5. 绘制（Painting）"
    }), "\n", createVNode(_components.p, {
      children: "绘制阶段是根据渲染树和布局信息，将节点的样式（如颜色、背景、阴影）会知道屏幕上的过程。"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "浏览器会渲染树的顺序，调用图形 API（如Skia、Direct2D）绘制每个节点的可视部分（如填充背景颜色、绘制文本、绘制边框）。"
      }), "\n", createVNode(_components.li, {
        children: ["绘制可以拆分为多个层（", createVNode(_components.em, {
          children: "例如，页面中的固定导航栏、滚动区域可作为独立层"
        }), "），层之间独立绘制，提升效率。"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "6-合成compositing",
      children: "6. 合成（Compositing）"
    }), "\n", createVNode(_components.p, {
      children: "合成阶段将页面的所有绘制层合并为一个图层，并显示在屏幕上。"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "对于有重叠的层（如悬浮的弹窗覆盖在背景层上），浏览器会按层的 Z 轴顺序（层叠上下文）进行合成，确保正确的显示顺序。"
      }), "\n", createVNode(_components.li, {
        children: "现代浏览器会利用 GPU 加速合成的过程，尤其是涉及动画、transform等操作时，可避免重绘整个页面，提升性能。"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "总结浏览器渲染过程",
      children: "总结浏览器渲染过程"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "解析 HTML -> 生成 DOM 树"
      }), "\n", createVNode(_components.li, {
        children: "解析 CSS -> 生成 CSSOM 树"
      }), "\n", createVNode(_components.li, {
        children: "结合 DOM 与 CSSOM -> 生成渲染树"
      }), "\n", createVNode(_components.li, {
        children: "根据渲染树 -> 计算布局（几何信息）"
      }), "\n", createVNode(_components.li, {
        children: "根据布局信息 -> 绘制节点样式"
      }), "\n", createVNode(_components.li, {
        children: "合成所有图层 -> 显示在屏幕上"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "这个过程是逐步进行的，浏览器会优先渲染首屏内容，同时继续解析和渲染剩余内容。理解渲染过程有助于优化页面性能（如减少布局和绘制次数）。"
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

const url = "src/content/interview/%E8%AF%A6%E7%BB%86%E8%A7%A3%E9%87%8A%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E6%B8%B2%E6%9F%93%E8%BF%87%E7%A8%8B%EF%BC%8C%E5%8C%85%E6%8B%AC%20DOM%20%E6%A0%91%E3%80%81CSSOM%20%E6%A0%91%E7%9A%84%E6%9E%84%E5%BB%BA%E4%BB%A5%E5%8F%8A%E9%A1%B5%E9%9D%A2%E5%B8%83%E5%B1%80%E5%92%8C%E7%BB%98%E5%88%B6.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/详细解释浏览器的渲染过程，包括 DOM 树、CSSOM 树的构建以及页面布局和绘制.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/详细解释浏览器的渲染过程，包括 DOM 树、CSSOM 树的构建以及页面布局和绘制.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
