import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';
import { $ as $$Image } from './chunk.BFavZmP-.js';

const __0_______assets_images_prototype_png__ = new Proxy({"src":"/astro_assets/asset.DLtn7rz5.png","width":611,"height":760,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/assets/images/prototype.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/assets/images/prototype.png");
							return target[name];
						}
					});

const frontmatter = {
  "title": "什么是 JavaScript 的原型链？请举例说明原型链的工作机制",
  "category": "基础概念",
  "pubDate": "Fri, 11 Jul 2025 02:00:53 +0800",
  "heroImage": "",
  "draft": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "原型链的工作机制",
    "text": "原型链的工作机制"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    "astro-image": "astro-image",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...props.components
  }, _component0 = _components["astro-image"];
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["在 JavaScript 中，所有对象都有一个原型（prototype），原型本身也是一个对象，而这个原型对象也有自己的原型，这样就形成了一条链式结构，", createVNode(_components.strong, {
        children: "这就是原型链"
      }), "。原型链的存在使得对象可以继承它的原型及其原型的原型上的属性和方法。"]
    }), "\n", createVNode(_components.h2, {
      id: "原型链的工作机制",
      children: "原型链的工作机制"
    }), "\n", createVNode(_components.p, {
      children: ["原型链的工作机制主要体现在属性和方法的查找过程中：当访问一个对象的属性或方法时，JavaScript 会优先在 ", createVNode(_components.strong, {
        children: "其自身查找"
      }), "，如果找到则直接使用；如果未找到，则会去 ", createVNode(_components.strong, {
        children: "该对象的原型中查找"
      }), "；如果还是未找到，则会继续", createVNode(_components.strong, {
        children: "向上查找"
      }), "，直到找到或到达原型链的顶端（即 null）；如果仍然未找到，则返回 ", createVNode(_components.code, {
        children: "undefined"
      }), "。"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        alt: "prototype",
        src: __0_______assets_images_prototype_png__
      })
    }), "\n", createVNode(_components.p, {
      children: ["例如，我们创建一个构造函数 ", createVNode(_components.code, {
        children: "Person"
      }), "，并给其原型添加一个方法 ", createVNode(_components.code, {
        children: "sayHello"
      }), "："]
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
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Person"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "name"
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
              color: "#79B8FF"
            },
            children: "  this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".name "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " name;"
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
              color: "#79B8FF"
            },
            children: "Person"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "prototype"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "sayHello"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " sayHello"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"hello, my name is \""
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".name);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["然后通过这个构造函数创建一个实例对象 ", createVNode(_components.code, {
        children: "person1"
      }), "："]
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
        children: createVNode(_components.span, {
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
            children: " person1"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Person"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"Alice\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["当我们调用引擎 ", createVNode(_components.code, {
        children: "person1.sayHello()"
      }), " 时，JavaScript 引擎现在自身查找 ", createVNode(_components.code, {
        children: "sayHello"
      }), " 方法，没找到后，就去 ", createVNode(_components.code, {
        children: "person1"
      }), " 的原型上（即 ", createVNode(_components.code, {
        children: "Person.prototype"
      }), "）查找，在这里找到该方法，于是调用成功。"]
    }), "\n", createVNode(_components.p, {
      children: ["再比如，", createVNode(_components.code, {
        children: "person1"
      }), " 的原型 ", createVNode(_components.code, {
        children: "Person.prototype"
      }), " 的原型是 ", createVNode(_components.code, {
        children: "Object.prototype"
      }), "，", createVNode(_components.code, {
        children: "Object.prototype"
      }), " 上有 ", createVNode(_components.code, {
        children: "toString"
      }), " 等方法。当我们调用 ", createVNode(_components.code, {
        children: "person1.toString()"
      }), " 时，在 ", createVNode(_components.code, {
        children: "person1"
      }), " 自身和 ", createVNode(_components.code, {
        children: "person1.prototype"
      }), " 上都没有找到 ", createVNode(_components.code, {
        children: "toString"
      }), " 方法，最终在 ", createVNode(_components.code, {
        children: "Object.prototype"
      }), " 上找到了该方法，于是调用成功。"]
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

const url = "src/content/interview/%E4%BB%80%E4%B9%88%E6%98%AF%20JavaScript%20%E7%9A%84%E5%8E%9F%E5%9E%8B%E9%93%BE%EF%BC%9F%E8%AF%B7%E4%B8%BE%E4%BE%8B%E8%AF%B4%E6%98%8E%E5%8E%9F%E5%9E%8B%E9%93%BE%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%9C%BA%E5%88%B6.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/什么是 JavaScript 的原型链？请举例说明原型链的工作机制.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/什么是 JavaScript 的原型链？请举例说明原型链的工作机制.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
