import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';

const frontmatter = {
  "title": "请介绍 CSS 中的 BFC，它的触发条件和应用场景",
  "category": "CSS 进阶",
  "pubDate": "Sun, 13 Jul 2025 16:00:40 +0800",
  "heroImage": "",
  "draft": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "触发条件",
    "text": "触发条件"
  }, {
    "depth": 2,
    "slug": "应用场景",
    "text": "应用场景"
  }, {
    "depth": 3,
    "slug": "解决-margin-重叠问题",
    "text": "解决 margin 重叠问题"
  }, {
    "depth": 3,
    "slug": "清除浮动",
    "text": "清除浮动"
  }, {
    "depth": 3,
    "slug": "阻止元素被浮动元素覆盖",
    "text": "阻止元素被浮动元素覆盖"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "BFC（Block Formatting Context, 块级格式化上下文）是 CSS 中一种特殊的渲染环境，它就像一个容器的“容器”，容器内部的元素布局不会影响到外部元素，外部元素的布局也不会干扰容器内部。"
    }), "\n", createVNode(_components.h2, {
      id: "触发条件",
      children: "触发条件"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["根元素（", createVNode(_components.code, {
          children: "<html>"
        }), "）"]
      }), "\n", createVNode(_components.li, {
        children: ["浮动元素（", createVNode(_components.code, {
          children: "float"
        }), " 值为 ", createVNode(_components.code, {
          children: "left"
        }), " 或 ", createVNode(_components.code, {
          children: "right"
        }), "，且不为 ", createVNode(_components.code, {
          children: "none"
        }), "）"]
      }), "\n", createVNode(_components.li, {
        children: ["绝对定位元素（", createVNode(_components.code, {
          children: "position"
        }), " 值为 ", createVNode(_components.code, {
          children: "absolute"
        }), " 或 ", createVNode(_components.code, {
          children: "fixed"
        }), "）"]
      }), "\n", createVNode(_components.li, {
        children: ["行内块元素（", createVNode(_components.code, {
          children: "display: inline-block"
        }), "）"]
      }), "\n", createVNode(_components.li, {
        children: ["表格单元格（", createVNode(_components.code, {
          children: "display: table-cell"
        }), "，默认属性）"]
      }), "\n", createVNode(_components.li, {
        children: ["表格标题（", createVNode(_components.code, {
          children: "display: table-caption"
        }), "，默认属性）"]
      }), "\n", createVNode(_components.li, {
        children: ["overflow 值不为 ", createVNode(_components.code, {
          children: "visible"
        }), " 的块元素（如 ", createVNode(_components.code, {
          children: "overflow: hidden"
        }), "、", createVNode(_components.code, {
          children: "auto"
        }), "、", createVNode(_components.code, {
          children: "scroll"
        }), "）"]
      }), "\n", createVNode(_components.li, {
        children: ["弹性元素（", createVNode(_components.code, {
          children: "display: flex"
        }), "、", createVNode(_components.code, {
          children: "inline-flex"
        }), " 的直接子元素）"]
      }), "\n", createVNode(_components.li, {
        children: ["网格元素（", createVNode(_components.code, {
          children: "display: grid"
        }), " 或 ", createVNode(_components.code, {
          children: "inline-grid"
        }), " 的直接子元素）等"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "应用场景",
      children: "应用场景"
    }), "\n", createVNode(_components.h3, {
      id: "解决-margin-重叠问题",
      children: "解决 margin 重叠问题"
    }), "\n", createVNode(_components.p, {
      children: "当两个相邻的块级元素都设置了 margin 时，可能会出现 margin 重叠（取较大值），将她们放入不同的 BFC 容器中可避免重叠。"
    }), "\n", createVNode(_components.h3, {
      id: "清除浮动",
      children: "清除浮动"
    }), "\n", createVNode(_components.p, {
      children: "父元素内部子元素浮动时，父元素可能会因没有内容支撑而高度坍塌，给父元素触发 BFC 后，父元素会包裹住浮动的子元素，从而清除浮动影响。"
    }), "\n", createVNode(_components.h3, {
      id: "阻止元素被浮动元素覆盖",
      children: "阻止元素被浮动元素覆盖"
    }), "\n", createVNode(_components.p, {
      children: "当一个元素浮动时，可能会覆盖旁边的非浮动元素，给非浮动元素触发 BFC，可使它不被覆盖，保持与浮动元素并列的布局。"
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

const url = "src/content/interview/%E8%AF%B7%E4%BB%8B%E7%BB%8D%20CSS%20%E4%B8%AD%E7%9A%84%20BFC%EF%BC%8C%E5%AE%83%E7%9A%84%E8%A7%A6%E5%8F%91%E6%9D%A1%E4%BB%B6%E5%92%8C%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/请介绍 CSS 中的 BFC，它的触发条件和应用场景.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/请介绍 CSS 中的 BFC，它的触发条件和应用场景.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
