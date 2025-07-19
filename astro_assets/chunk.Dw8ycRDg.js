import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';

const frontmatter = {
  "title": "简述 CSS 的盒模型，包括标准盒模型和怪异盒模型的区别，以及如何通过 CSS 进行切换",
  "category": "基础概念",
  "pubDate": "Fri, 11 Jul 2025 01:42:32 +0800",
  "heroImage": "",
  "draft": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "标准盒模型与怪异盒模型的区别",
    "text": "标准盒模型与怪异盒模型的区别"
  }, {
    "depth": 3,
    "slug": "标准盒模型",
    "text": "标准盒模型"
  }, {
    "depth": 3,
    "slug": "怪异盒模型",
    "text": "怪异盒模型"
  }, {
    "depth": 2,
    "slug": "css-切换盒模型",
    "text": "CSS 切换盒模型"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
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
      children: ["CSS 盒模型是 CSS 布局的基础，它规定了元素在页面中占据空间的计算方式，每个元素都可以看作一个盒子，由 ", createVNode(_components.strong, {
        children: "内容（content）"
      }), "、", createVNode(_components.strong, {
        children: "边框（border）"
      }), "、", createVNode(_components.strong, {
        children: "内边距（padding）"
      }), "、", createVNode(_components.strong, {
        children: "外边距（margin）"
      }), " 四部分组成。"]
    }), "\n", createVNode(_components.h2, {
      id: "标准盒模型与怪异盒模型的区别",
      children: "标准盒模型与怪异盒模型的区别"
    }), "\n", createVNode(_components.p, {
      children: ["标准盒模型和怪异盒模型（也称为 IE 盒模型）的核心区别在于", createVNode(_components.strong, {
        children: "元素总宽度和总高度的计算方式"
      }), "："]
    }), "\n", createVNode(_components.h3, {
      id: "标准盒模型",
      children: createVNode(_components.strong, {
        children: "标准盒模型"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "元素总宽度 = 内容区宽度（width） + 左右内边距（padding-left + padding-right） + 左右边框宽度（border-left + border-right）"
      }), "\n", createVNode(_components.li, {
        children: "元素总高度 = 内容区高度（height） + 上下内边距（padding-top + padding-bottom) + 上下边框宽度（border-top + border-bottom）"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["也就是说，", createVNode(_components.strong, {
        children: "标准盒模型中设置的 width 和 height 仅指代内容区的尺寸。"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "怪异盒模型",
      children: createVNode(_components.strong, {
        children: "怪异盒模型"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "元素总宽度 = 设置的 width 值（width 包含内容区宽度 + 左右内边距 + 左右边框宽度）"
      }), "\n", createVNode(_components.li, {
        children: "元素总高度 = 设置的 height 值（height 包含内容区高度 + 上下内边距 + 上下边框宽度）"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "css-切换盒模型",
      children: "CSS 切换盒模型"
    }), "\n", createVNode(_components.p, {
      children: ["通过 CSS 的 ", createVNode(_components.code, {
        children: "box-sizing"
      }), " 属性可以切换这两种盒模型："]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["当 ", createVNode(_components.code, {
          children: "box-sizing"
        }), " 属性的值为 ", createVNode(_components.code, {
          children: "content-box"
        }), " 时，采用标准盒模型（默认值）。"]
      }), "\n", createVNode(_components.li, {
        children: ["当 ", createVNode(_components.code, {
          children: "box-sizing"
        }), " 属性的值为 ", createVNode(_components.code, {
          children: "border-box"
        }), " 时，采用怪异盒模型。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["例如，若一个元素设置 CSS 属性为 ", createVNode(_components.code, {
        children: "width: 200px; padding: 10px; border: 5px solid #000;"
      }), "，在标准盒模型下，其总宽度为 ", createVNode(_components.code, {
        children: "230px"
      }), "，在怪异盒模型下，其总宽度为 ", createVNode(_components.code, {
        children: "200px"
      }), "。"]
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

const url = "src/content/interview/%E7%AE%80%E8%BF%B0%20CSS%20%E7%9A%84%E7%9B%92%E6%A8%A1%E5%9E%8B%EF%BC%8C%E5%8C%85%E6%8B%AC%E6%A0%87%E5%87%86%E7%9B%92%E6%A8%A1%E5%9E%8B%E5%92%8C%E6%80%AA%E5%BC%82%E7%9B%92%E6%A8%A1%E5%9E%8B%E7%9A%84%E5%8C%BA%E5%88%AB%EF%BC%8C%E4%BB%A5%E5%8F%8A%E5%A6%82%E4%BD%95%E9%80%9A%E8%BF%87%20CSS%20%E8%BF%9B%E8%A1%8C%E5%88%87%E6%8D%A2.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/简述 CSS 的盒模型，包括标准盒模型和怪异盒模型的区别，以及如何通过 CSS 进行切换.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/简述 CSS 的盒模型，包括标准盒模型和怪异盒模型的区别，以及如何通过 CSS 进行切换.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
