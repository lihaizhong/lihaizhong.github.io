import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';

const frontmatter = {
  "title": "什么是回流和重绘？如何减少回流和重绘",
  "category": "浏览器相关",
  "pubDate": "Tue, 15 Jul 2025 12:33:52 +0800",
  "heroImage": "",
  "draft": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "回流reflow",
    "text": "回流（Reflow）"
  }, {
    "depth": 2,
    "slug": "重绘repaint",
    "text": "重绘（Repaint）"
  }, {
    "depth": 2,
    "slug": "回流和重绘的关系及性能影响",
    "text": "回流和重绘的关系及性能影响"
  }, {
    "depth": 2,
    "slug": "减少回流和重绘的方法",
    "text": "减少回流和重绘的方法"
  }, {
    "depth": 3,
    "slug": "1集中修改样式",
    "text": "1.集中修改样式"
  }, {
    "depth": 3,
    "slug": "2-使用文档片段documentfragment",
    "text": "2. 使用文档片段（DocumentFragment）"
  }, {
    "depth": 3,
    "slug": "3-隐藏元素后操作",
    "text": "3. 隐藏元素后操作"
  }, {
    "depth": 3,
    "slug": "4-使用绝对定位或固定定位",
    "text": "4. 使用绝对定位或固定定位"
  }, {
    "depth": 3,
    "slug": "5-避免触发即时布局",
    "text": "5. 避免触发即时布局"
  }, {
    "depth": 3,
    "slug": "6-利用-css-硬件加速",
    "text": "6. 利用 CSS 硬件加速"
  }, {
    "depth": 3,
    "slug": "7-优化动画性能",
    "text": "7. 优化动画性能"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "回流reflow",
      children: "回流（Reflow）"
    }), "\n", createVNode(_components.p, {
      children: "回流也称为重排，是指浏览器为了重新计算元素的几何属性（如位置、尺寸、宽高、边距等），并重新构建渲染树的过程。当元素的几何属性发生变化时，浏览器需要重新遍历渲染树，计算每个受影响元素的新位置和大小，这个过程会消耗大量的计算资源。"
    }), "\n", createVNode(_components.p, {
      children: "引发回流的常见操作包括："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["改变元素的宽高、边距、内边距等几何属性，如 ", createVNode(_components.code, {
          children: "width: 200px;"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["改变元素的定位方式，如从 ", createVNode(_components.code, {
          children: "static"
        }), " 改为 ", createVNode(_components.code, {
          children: "absolute"
        }), " 或 ", createVNode(_components.code, {
          children: "fixed"
        })]
      }), "\n", createVNode(_components.li, {
        children: "增加或删除 DOM 元素，导致渲染树结构发生变化"
      }), "\n", createVNode(_components.li, {
        children: ["浏览器窗口大小改变（", createVNode(_components.code, {
          children: "resize"
        }), "事件）"]
      }), "\n", createVNode(_components.li, {
        children: "滚动页面，某些元素的位置需要重新计算"
      }), "\n", createVNode(_components.li, {
        children: ["读取或修改会触发浏览器即时布局的属性，如 ", createVNode(_components.code, {
          children: "offsetWidth"
        }), "、", createVNode(_components.code, {
          children: "scrollTop"
        }), "、", createVNode(_components.code, {
          children: "getComputedStyle()"
        }), " 等"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "重绘repaint",
      children: "重绘（Repaint）"
    }), "\n", createVNode(_components.p, {
      children: "重绘是指当元素的外观属性（如颜色、背景色、阴影等）发生变化，但几何属性未改变时，浏览器重新绘制元素外观的过程。此时元素的位置和大小没有变化，渲染树的结构也未改变，只是元素的视觉表现需要更新。"
    }), "\n", createVNode(_components.p, {
      children: "引发重绘的常见操作包括："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["改变元素的颜色，如 ", createVNode(_components.code, {
          children: "color: red;"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["改变元素的背景色，如 ", createVNode(_components.code, {
          children: "background-color: #fff;"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["改变元素的阴影效果，如 ", createVNode(_components.code, {
          children: "box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["改变元素的透明度，如 ", createVNode(_components.code, {
          children: "opacity: 0.5;"
        }), "（在某些浏览器中，透明度变化可能触发回流）"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "回流和重绘的关系及性能影响",
      children: "回流和重绘的关系及性能影响"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "回流必然会导致重绘，因为元素的几何属性改变后，其外观也一定会发生变化，需要重新绘制。"
      }), "\n", createVNode(_components.li, {
        children: "重绘不一定会引发回流，当仅元素的外观属性改变而几何属性不变时，只需要重绘即可。"
      }), "\n", createVNode(_components.li, {
        children: "两者都会消耗浏览器性能，尤其是回流，由于涉及到大量的几何计算和渲染树重构，其性能消耗远大于重绘。在频繁操作下，可能会导致页面卡顿、响应变慢，影响用户体验。"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "减少回流和重绘的方法",
      children: "减少回流和重绘的方法"
    }), "\n", createVNode(_components.h3, {
      id: "1集中修改样式",
      children: "1.集中修改样式"
    }), "\n", createVNode(_components.p, {
      children: ["避免频繁地单个修改元素的样式属性，而是通过一次性修改 ", createVNode(_components.code, {
        children: "class"
      }), " 或 ", createVNode(_components.code, {
        children: "style"
      }), " 属性来批量更新样式。例如："]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "js",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 不好的做法：多次修改可能引发多次回流"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "element.style.width "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '100px'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "element.style.height "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '100px'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "element.style.margin "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '10px'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 好的做法：一次修改，减少回流次数"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "element.className "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'new-style'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 通过 class 批量应用样式"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 或者"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "element.style.cssText "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'width: 100px; height: 100px; margin: 10px;'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "2-使用文档片段documentfragment",
      children: "2. 使用文档片段（DocumentFragment）"
    }), "\n", createVNode(_components.p, {
      children: "当需要添加多个 DOM 元素时，先将元素添加到文档片段中，再将文档片段一次性添加到 DOM 树中，文档片段时存在于内存中的 DOM 节点容器。不会触发页面渲染，因此能减少回流次数。"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "js",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " fragment"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " document."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "createDocumentFragment"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "for"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " i "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "; i "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "; i"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "++"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " div"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " document."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "createElement"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'div'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  div.textContext "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " `Item ${"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "i"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "}`"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  fragment."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "appendChild"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(div);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "document.body."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "appendChild"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(fragment);"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "3-隐藏元素后操作",
      children: "3. 隐藏元素后操作"
    }), "\n", createVNode(_components.p, {
      children: ["先将元素设置为 ", createVNode(_components.code, {
        children: "display: none;"
      }), "，使其脱离渲染树，此时对元素进行的所有修改都不会引发回流和重绘，修改完成后再恢复显示。"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "js",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "element.style.display "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'none'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 进行一系列样式或 DOM 操作"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "element.style.width "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '200px'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "element."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "appendChild"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(newChild);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "element.style.display "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'block'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 仅触发一次回流"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "4-使用绝对定位或固定定位",
      children: "4. 使用绝对定位或固定定位"
    }), "\n", createVNode(_components.p, {
      children: ["将元素设置为 ", createVNode(_components.code, {
        children: "position: absolute"
      }), " 或 ", createVNode(_components.code, {
        children: "fixed"
      }), "，使元素脱离文档流，此时元素的变化不会影响其他元素的几何属性，从而减少回流的范围。适用于需要频繁修改位置或大小的元素，如动画元素。"]
    }), "\n", createVNode(_components.h3, {
      id: "5-避免触发即时布局",
      children: "5. 避免触发即时布局"
    }), "\n", createVNode(_components.p, {
      children: ["浏览器为了优化性能，会将多次回流操作合并成一次执行。但如果在修改样式的过程中，读取了会触发即时布局的属性（如 ", createVNode(_components.code, {
        children: "offsetWidth"
      }), "、", createVNode(_components.code, {
        children: "scrollheight"
      }), "、", createVNode(_components.code, {
        children: "getComputedStyle()"
      }), "等），浏览器会强制立即执行之前的回流操作，以保证读取到正确的属性值。因此，应避免在修改样式的过程中频繁读取这些属性。"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "js",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 不好的做法：触发多次即时回流"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "for"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " i "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "; i "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "; i"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "++"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  element.style.width "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " `${"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "element"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "offsetWidth"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 10"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "}px`"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 好的做法：先读取属性，再批量修改"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " width "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " element.offsetWidth;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "for"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " i "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "; i "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "; i"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "++"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  width "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "element.style.width "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " `${"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "width"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "}px`"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 仅触发一次回流"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "6-利用-css-硬件加速",
      children: "6. 利用 CSS 硬件加速"
    }), "\n", createVNode(_components.p, {
      children: ["使用 ", createVNode(_components.code, {
        children: "transform"
      }), "、", createVNode(_components.code, {
        children: "opacity"
      }), "、", createVNode(_components.code, {
        children: "filter"
      }), " 等CSS属性时，浏览器会将元素放入独立的复合图层中，这些属性的变化只会触发合成操作，而不会引发回流或重绘，从而提升性能。"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "css",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: ".animate"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  /* 仅触发合成，无回流和重绘 */"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  transform"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "translate"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "100"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "px"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["但需要注意的是，", createVNode(_components.strong, {
        children: "不要过度"
      }), "使用复合图层，因为每个复合图层都需要 ", createVNode(_components.strong, {
        children: "占用一定的内存资源"
      }), "。"]
    }), "\n", createVNode(_components.h3, {
      id: "7-优化动画性能",
      children: "7. 优化动画性能"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["对于动画元素，尽量使用 ", createVNode(_components.code, {
          children: "transform"
        }), " 和 ", createVNode(_components.code, {
          children: "opacity"
        }), " 来实现动画效果，避免使用会触发回流的属性（如 ", createVNode(_components.code, {
          children: "top"
        }), "、", createVNode(_components.code, {
          children: "left"
        }), "、", createVNode(_components.code, {
          children: "width"
        }), "等）。"]
      }), "\n", createVNode(_components.li, {
        children: ["可以将动画元素设置为 ", createVNode(_components.code, {
          children: "will-change: transform;"
        }), "，提示浏览器该元素可能会发生变换，提前进行优化准备，但同样不宜过度使用。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "通过采用上述措施，可以有效减少回流和重绘的次数及范围，提高页面的渲染性能，使页面更加流畅。"
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

const url = "src/content/interview/%E4%BB%80%E4%B9%88%E6%98%AF%E5%9B%9E%E6%B5%81%E5%92%8C%E9%87%8D%E7%BB%98%EF%BC%9F%E5%A6%82%E4%BD%95%E5%87%8F%E5%B0%91%E5%9B%9E%E6%B5%81%E5%92%8C%E9%87%8D%E7%BB%98.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/什么是回流和重绘？如何减少回流和重绘.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/什么是回流和重绘？如何减少回流和重绘.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
