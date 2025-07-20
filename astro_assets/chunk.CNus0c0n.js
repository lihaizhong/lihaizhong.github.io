import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';

const frontmatter = {
  "title": "详细解释 CSS 中的层叠上下文，以及如何控制元素的层叠顺序",
  "category": "CSS 进阶",
  "pubDate": "Sun, 13 Jul 2025 17:10:51 +0800",
  "heroImage": "",
  "draft": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "层叠上下文的创建方式常见",
    "text": "层叠上下文的创建方式（常见）"
  }, {
    "depth": 2,
    "slug": "层叠顺序同一层叠上下文中元素的-z-轴排列规则从后到前",
    "text": "层叠顺序（同一层叠上下文中元素的 Z 轴排列规则，从后到前）"
  }, {
    "depth": 2,
    "slug": "控制元素层叠顺序的方法",
    "text": "控制元素层叠顺序的方法"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "层叠上下文（Stacking Context）是 CSS 中一个三维概念，指元素在 Z 轴（垂直于屏幕的轴线）上的渲染层级关系。拥有层叠上下文的元素会像一个“容器”，其内部元素的层叠顺序仅在该容器内生效，不会影响外部元素的层叠关系。"
    }), "\n", createVNode(_components.h2, {
      id: "层叠上下文的创建方式常见",
      children: "层叠上下文的创建方式（常见）"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["根元素（", createVNode(_components.code, {
          children: "<html>"
        }), "）默认创建根层叠上下文。"]
      }), "\n", createVNode(_components.li, {
        children: ["元素设置 ", createVNode(_components.code, {
          children: "position: absolute"
        }), " 或 ", createVNode(_components.code, {
          children: "relative"
        }), " 且 ", createVNode(_components.code, {
          children: "z-index"
        }), " 值不为 ", createVNode(_components.code, {
          children: "auto"
        }), "。"]
      }), "\n", createVNode(_components.li, {
        children: ["元素设置 ", createVNode(_components.code, {
          children: "position: fixed"
        }), " 或 ", createVNode(_components.code, {
          children: "sticky"
        }), "。"]
      }), "\n", createVNode(_components.li, {
        children: ["元素设置 ", createVNode(_components.code, {
          children: "display: flex"
        }), " 或 ", createVNode(_components.code, {
          children: "inline-flex"
        }), "，且子元素 ", createVNode(_components.code, {
          children: "z-index"
        }), " 值不为 ", createVNode(_components.code, {
          children: "auto"
        }), "（此时子元素会创建层叠上下文）。"]
      }), "\n", createVNode(_components.li, {
        children: ["元素设置 ", createVNode(_components.code, {
          children: "opacity"
        }), " 值小于 1。"]
      }), "\n", createVNode(_components.li, {
        children: ["元素设置 ", createVNode(_components.code, {
          children: "transform"
        }), " 值不为 ", createVNode(_components.code, {
          children: "none"
        }), "。"]
      }), "\n", createVNode(_components.li, {
        children: ["元素设置 ", createVNode(_components.code, {
          children: "mix-blend-mode"
        }), " 值不为 ", createVNode(_components.code, {
          children: "normal"
        }), " 等。"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "层叠顺序同一层叠上下文中元素的-z-轴排列规则从后到前",
      children: "层叠顺序（同一层叠上下文中元素的 Z 轴排列规则，从后到前）"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "层叠上下文的背景和边框"
        }), "：位于最底层。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: ["负", createVNode(_components.code, {
            children: "z-index"
          }), "值的子元素"]
        }), "：值越小越靠后。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: ["非定位元素（", createVNode(_components.code, {
            children: "position: static"
          }), "）"]
        }), "：按文档流顺序排列。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: [createVNode(_components.code, {
            children: "z-index: auto"
          }), " 或 ", createVNode(_components.code, {
            children: "z-index: 0"
          }), "的定位元素"]
        }), "。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: ["正 ", createVNode(_components.code, {
            children: "z-index"
          }), " 值的子元素"]
        }), "：值越大越靠前。"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "控制元素层叠顺序的方法",
      children: "控制元素层叠顺序的方法"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: ["利用 ", createVNode(_components.code, {
            children: "z-index"
          }), " 属性"]
        }), "：在同一层叠上下文中，通过设置 ", createVNode(_components.code, {
          children: "z-index"
        }), " 的正负值调整顺序（仅对定位元素或弹性盒子子元素生效）。注意：", createVNode(_components.strong, {
          children: [createVNode(_components.code, {
            children: "z-index"
          }), " 仅在当前层叠上下文中有效，不同层叠上下文的元素比较时，父级层叠上下文的层级决定了子元素的整体层级。"]
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "调整层叠上下文的创建"
        }), "：通过设置 ", createVNode(_components.code, {
          children: "opacity"
        }), "、", createVNode(_components.code, {
          children: "transform"
        }), " 等属性让元素创建新的层叠上下文，使内部元素的层级顺序独立于外部。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "遵循文档流和定位规则"
        }), "：非定位元素默认按文档流顺序层叠，后出现的元素会覆盖先出现的元素；定位元素会覆盖非定位元素（除非被更高级的层叠元素遮挡）。"]
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

const url = "src/content/interview/%E8%AF%A6%E7%BB%86%E8%A7%A3%E9%87%8A%20CSS%20%E4%B8%AD%E7%9A%84%E5%B1%82%E5%8F%A0%E4%B8%8A%E4%B8%8B%E6%96%87%EF%BC%8C%E4%BB%A5%E5%8F%8A%E5%A6%82%E4%BD%95%E6%8E%A7%E5%88%B6%E5%85%83%E7%B4%A0%E7%9A%84%E5%B1%82%E5%8F%A0%E9%A1%BA%E5%BA%8F.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/详细解释 CSS 中的层叠上下文，以及如何控制元素的层叠顺序.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/详细解释 CSS 中的层叠上下文，以及如何控制元素的层叠顺序.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
