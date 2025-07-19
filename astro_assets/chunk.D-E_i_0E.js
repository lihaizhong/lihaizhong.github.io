import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';

const frontmatter = {
  "title": "解释事件冒泡和事件捕获的概念，以及如何阻止事件冒泡和事件捕获",
  "category": "基础概念",
  "pubDate": "Fri, 11 Jul 2025 02:28:26 +0800",
  "heroImage": "",
  "draft": true
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "事件冒泡"
        }), "：事件冒泡是指当一个元素触发某个事件后，该事件会从触发事件的元素开始，按照 DOM 树的顺序向上冒泡，依次触发其父元素、祖父元素等祖先元素上的相同事件，直到传递到 document 对象。", createVNode(_components.em, {
          children: ["例如，在一个嵌套元素中，点击子元素，若父元素和父祖元素也绑定了相同的点击事件，那么这些事件会按照 ", createVNode(_components.code, {
            children: "子 -> 父 -> 祖父"
          }), " 的顺序依次触发。"]
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "事件捕获"
        }), "：事件捕获与事件冒泡相反，它是事件从最顶层的祖先元素开始向下传播，依次触发各级子元素上的相同事件，直到到达触发事件的目标元素。", createVNode(_components.em, {
          children: ["比如上述嵌套结构，点击子元素时，事件会按照 ", createVNode(_components.code, {
            children: "祖父 -> 父 -> 子"
          }), " 的顺序传播并触发相应的事件。"]
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "在 JavaScript 中，可以通过以下方法阻止事件冒泡和事件捕获："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "阻止事件冒泡"
        }), "：可以使用 ", createVNode(_components.code, {
          children: "event.stopPropagation()"
        }), " 方法来阻止事件冒泡。该方法会阻止事件继续向上传播，但不会影响该元素上其他事件处理程序的执行。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "阻止事件捕获"
        }), "：同样可以使用 ", createVNode(_components.code, {
          children: "event.stopPropagation()"
        }), " 方法。在事件捕获阶段调用该方法，能阻止事件继续向下传播到目标元素及其子元素。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["需要注意的是，", createVNode(_components.code, {
        children: "event.stopImmediatePropagation()"
      }), " 方法不仅能阻止事件的冒泡和捕获，还能阻止该元素上后续的事件处理程序执行，", createVNode(_components.strong, {
        children: "使用时需根据实际需求选择。"
      })]
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

const url = "src/content/interview/%E8%A7%A3%E9%87%8A%E4%BA%8B%E4%BB%B6%E5%86%92%E6%B3%A1%E5%92%8C%E4%BA%8B%E4%BB%B6%E6%8D%95%E8%8E%B7%E7%9A%84%E6%A6%82%E5%BF%B5%EF%BC%8C%E4%BB%A5%E5%8F%8A%E5%A6%82%E4%BD%95%E9%98%BB%E6%AD%A2%E4%BA%8B%E4%BB%B6%E5%86%92%E6%B3%A1%E5%92%8C%E4%BA%8B%E4%BB%B6%E6%8D%95%E8%8E%B7.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/解释事件冒泡和事件捕获的概念，以及如何阻止事件冒泡和事件捕获.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/解释事件冒泡和事件捕获的概念，以及如何阻止事件冒泡和事件捕获.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
