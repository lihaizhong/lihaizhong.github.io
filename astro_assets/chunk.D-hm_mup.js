import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';

const frontmatter = {
  "title": "如何实现元素的水平居中、垂直居中以及水平垂直居中",
  "category": "CSS 进阶",
  "pubDate": "Sun, 13 Jul 2025 16:41:35 +0800",
  "heroImage": "",
  "draft": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "水平居中",
    "text": "水平居中"
  }, {
    "depth": 2,
    "slug": "垂直居中",
    "text": "垂直居中"
  }, {
    "depth": 2,
    "slug": "水平垂直居中",
    "text": "水平垂直居中"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "水平居中",
      children: "水平居中"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "行内元素/文本"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["给父元素设置 ", createVNode(_components.code, {
              children: "text-align: center"
            }), "，适用于 ", createVNode(_components.code, {
              children: "<span>"
            }), "、", createVNode(_components.code, {
              children: "<a>"
            }), "、文本等行内元素。"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "块级元素（定宽）"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["给元素设置 ", createVNode(_components.code, {
              children: "margin: 0 auto"
            }), "，需指定 ", createVNode(_components.code, {
              children: "width"
            }), "（否则元素默认占满父容器宽度，居中无效果）。"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "块级元素（不定宽）"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Flexbox"
            }), "：父元素设置 ", createVNode(_components.code, {
              children: "display: flex; justify-content: center;"
            }), "，子元素宽度可自适应。"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Grid"
            }), "：父元素设置 ", createVNode(_components.code, {
              children: "display: grid; justify-content: center;"
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Position"
        }), "：父元素设置 ", createVNode(_components.code, {
          children: "position: relative;"
        }), "，子元素设置 ", createVNode(_components.code, {
          children: "position: absolute; left: 50%; transform: translateX(-50%);"
        }), "，无需知道子元素宽度。"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "垂直居中",
      children: "垂直居中"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "行内元素/文本(单行)"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["给父元素设置 ", createVNode(_components.code, {
              children: "line-height"
            }), " 等于父元素高度，适用于单行文本或行内元素。"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "行内元素/文本(多行)"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["父元素设置 ", createVNode(_components.code, {
              children: "display: table-cell; vertical-align: middle;"
            }), "，同时指定父元素高度。"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "块级元素"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Flexbox"
            }), "：父元素设置 ", createVNode(_components.code, {
              children: "display: flex; aligin-items: center;"
            }), "，兼容性较好且灵活。"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Grid"
            }), "：父元素设置 ", createVNode(_components.code, {
              children: "display: grid; align-items: center;"
            }), "。"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Position"
            }), "：父元素设置 ", createVNode(_components.code, {
              children: "position: relative;"
            }), "，子元素设置 ", createVNode(_components.code, {
              children: "position: absolute; top: 50%; left: 50%; transform: translateY(-50%)"
            }), "，无需知道子元素高度。"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "已知父元素高度且子元素高度固定"
            }), "：子元素设置 ", createVNode(_components.code, {
              children: "margin-top: (父高 - 子高) / 2"
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "水平垂直居中",
      children: "水平垂直居中"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Flexbox"
        }), "：父元素设置 ", createVNode(_components.code, {
          children: "display: flex; justify-content: center; align-items: center;"
        }), "，最简单常用，支持不定宽高元素。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Grid"
        }), "：父元素设置 ", createVNode(_components.code, {
          children: "display: grid; place-items: center;"
        }), "（", createVNode(_components.code, {
          children: "place-items"
        }), " 是 ", createVNode(_components.code, {
          children: "align-items"
        }), " 和 ", createVNode(_components.code, {
          children: "justify-items"
        }), " 的简写）。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Position + transform"
        }), "：父元素设置 ", createVNode(_components.code, {
          children: "position: relative;"
        }), "，子元素设置 ", createVNode(_components.code, {
          children: "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)"
        }), "，适用于不定高元素。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Position + margin"
        }), "：父元素设置 ", createVNode(_components.code, {
          children: "position: relative;"
        }), "，子元素设置 ", createVNode(_components.code, {
          children: "position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: auto;"
        }), "，需指定子元素宽高。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "table-cell"
        }), "：父元素设置 ", createVNode(_components.code, {
          children: "display: table-cell; vertical-align: middle; text-align: center;"
        }), "，子元素设置 ", createVNode(_components.code, {
          children: "display: inline-block;"
        }), "（将会计元素转为行内块，配合父元素文本居中）。"]
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

const url = "src/content/interview/%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E5%85%83%E7%B4%A0%E7%9A%84%E6%B0%B4%E5%B9%B3%E5%B1%85%E4%B8%AD%E3%80%81%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD%E4%BB%A5%E5%8F%8A%E6%B0%B4%E5%B9%B3%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/如何实现元素的水平居中、垂直居中以及水平垂直居中.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/如何实现元素的水平居中、垂直居中以及水平垂直居中.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
