import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';
import { $ as $$Image } from './chunk.BFavZmP-.js';

const __0_______assets_images_reactive_getter_png__ = new Proxy({"src":"/astro_assets/asset.CR1WzOjl.png","width":411,"height":241,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/assets/images/reactive_getter.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/assets/images/reactive_getter.png");
							return target[name];
						}
					});

const __1_______assets_images_reactive_setter_png__ = new Proxy({"src":"/astro_assets/asset.BLgW1MGm.png","width":461,"height":331,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/assets/images/reactive_setter.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/assets/images/reactive_setter.png");
							return target[name];
						}
					});

const frontmatter = {
  "title": "Vue源码解析之依赖收集和派发更新",
  "description": "",
  "pubDate": "Tue Sep 24 2019 02:43:54 GMT+0800",
  "heroImage": ""
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "响应式数据的三个重要类",
    "text": "响应式数据的三个重要类"
  }, {
    "depth": 2,
    "slug": "依赖收集",
    "text": "依赖收集"
  }, {
    "depth": 2,
    "slug": "派发更新",
    "text": "派发更新"
  }, {
    "depth": 2,
    "slug": "总结",
    "text": "总结"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    "astro-image": "astro-image",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, _component0 = _components["astro-image"];
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "相信大家都知道，如今的前端开发主要是使用最流行的三大框架 Angular、React、Vue。尤其 React 无论在国内还是国外都深受前端开发者的喜爱，市场占有率可以说是相当的高。另外两大框架也是不甘落后，因其各自的特点，牢牢把握住了一部分忠实的粉丝。今天我们要说的是三大框架之中的 Vue 框架。"
    }), "\n", createVNode(_components.p, {
      children: ["Vue 由于其渐进式的开发方式、完善的脚手架工具以及简单易懂的开发文档，深受一部分国人的喜爱。使用过 Vue 的都知道，在我们修改", createVNode(_components.code, {
        children: "data"
      }), "中某个数据的时候，相关依赖的", createVNode(_components.code, {
        children: "watch"
      }), "、", createVNode(_components.code, {
        children: "computed"
      }), "、", createVNode(_components.code, {
        children: "renderer"
      }), "都会随之更新，那 Vue 是如何做到的呢？今天我们就来讲讲 Vue 在这块的实现方式——响应式数据更新。"]
    }), "\n", createVNode(_components.p, {
      children: ["关于这个黑科技般的动作，我们在 Vue 的实现方式中有两个专有的名词（", createVNode(_components.strong, {
        children: "依赖收集"
      }), "和", createVNode(_components.strong, {
        children: "派发更新"
      }), "）。"]
    }), "\n", createVNode(_components.p, {
      children: ["Vue 利用了 JavaScript 的原生方法", createVNode(_components.code, {
        children: "Object.defineProperty"
      }), "实现响应式数据。这个方法可以重写对象属性的", createVNode(_components.code, {
        children: "get"
      }), "和", createVNode(_components.code, {
        children: "set"
      }), "动作，使我们能保证原来的行为不变的同时，添加额外的行为。Vue 就是利用对象属性的", createVNode(_components.code, {
        children: "get"
      }), "来实现", createVNode(_components.strong, {
        children: "收集依赖"
      }), "，以及利用对象属性的", createVNode(_components.code, {
        children: "set"
      }), "来实现", createVNode(_components.strong, {
        children: "派发更新"
      }), "的。"]
    }), "\n", createVNode(_components.p, {
      children: "本文主要讲解的是 Vue 响应式数据的设计思想，对于具体代码及具体的实现方案不会有特别详细的讲解。关于这些细则，你可以浏览网上一些讲源码的文章或者可以自行查阅源码。"
    }), "\n", createVNode(_components.h2, {
      id: "响应式数据的三个重要类",
      children: "响应式数据的三个重要类"
    }), "\n", createVNode(_components.p, {
      children: ["在说", createVNode(_components.strong, {
        children: "依赖收集"
      }), "和", createVNode(_components.strong, {
        children: "派发更新"
      }), "之前，我们先说说跟这两个动作强相关的三个类。Vue 内部定义了", createVNode(_components.code, {
        children: "Observer"
      }), "类、", createVNode(_components.code, {
        children: "Dep"
      }), "类、", createVNode(_components.code, {
        children: "Watcher"
      }), "类。"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "Observer"
        }), "是用来管理响应式对象的。所有的响应式对象都有一个特点，你可以在它的属性中找到", createVNode(_components.code, {
          children: "__ob__"
        }), "属性。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "Dep"
        }), "主要就是做依赖收集和派发更新的。响应式对象的每一个属性都会被对应的创建一个 Dep 实例，用于收集 Watcher 和触发 Watcher 的更新。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "Watcher"
        }), "的作用则是创建一个监听器。当 Watcher 关联的数据发生改变时，Watcher 会进行相应的更新。"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "依赖收集",
      children: "依赖收集"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        alt: "响应式数据之getter",
        src: __0_______assets_images_reactive_getter_png__
      })
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "javascript",
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
            children: " dep"
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
            children: " Dep"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Object."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "defineProperty"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(data, key, {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  get"
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
            children: "    dep."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "depend"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    ..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  ..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "})"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["从图上我们可知，当视图或者 computed 等 Watcher 读取依赖的响应式属性时，属性对应的 Dep 实例会执行", createVNode(_components.code, {
        children: "depend"
      }), "方法，收集当前的 Watcher，以便属性发生改变时能通知到相应的 Watcher 更新，这个过程就叫做", createVNode(_components.strong, {
        children: "依赖收集"
      }), "。"]
    }), "\n", createVNode(_components.p, {
      children: ["举个栗子，比如上图中的", createVNode(_components.code, {
        children: "data"
      }), "有一个属性", createVNode(_components.code, {
        children: "message"
      }), "，当视图需要展示", createVNode(_components.code, {
        children: "message"
      }), "的值时，", createVNode(_components.code, {
        children: "message"
      }), "的", createVNode(_components.code, {
        children: "get"
      }), "动作就会被触发。这时候执行", createVNode(_components.code, {
        children: "dep.depend()"
      }), "就会将当前的", createVNode(_components.code, {
        children: "renderer watcher"
      }), "添加到 message 对应的 Dep 实例的依赖项中。"]
    }), "\n", createVNode(_components.h2, {
      id: "派发更新",
      children: "派发更新"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        alt: "响应式数据之setter",
        src: __1_______assets_images_reactive_setter_png__
      })
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "javascript",
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
            children: " dep"
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
            children: " Dep"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Object."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "defineProperty"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(data, key, {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  set"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    ..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    dep."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "notify"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  ..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "})"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "派发更新"
      }), "的动作也很简单，当响应式对象中的某个属性发生变化时，对应这个属性的 Dep 实例就会执行", createVNode(_components.code, {
        children: "notify"
      }), "方法，之前收集的 Watcher 会被通知进入异步队列中执行。这个过程叫做", createVNode(_components.strong, {
        children: "派发更新"
      }), "。"]
    }), "\n", createVNode(_components.p, {
      children: ["举个栗子，比如上图中的", createVNode(_components.code, {
        children: "data"
      }), "有一个属性", createVNode(_components.code, {
        children: "message"
      }), "，当", createVNode(_components.code, {
        children: "message"
      }), "的值发生变化时，", createVNode(_components.code, {
        children: "message"
      }), "的", createVNode(_components.code, {
        children: "set"
      }), "动作就会被触发。这时候，依赖", createVNode(_components.code, {
        children: "message"
      }), "的", createVNode(_components.code, {
        children: "renderer watcher"
      }), "就会执行", createVNode(_components.code, {
        children: "update"
      }), "操作，重新渲染 DOM 元素；", createVNode(_components.code, {
        children: "computed watcher"
      }), "就会将", createVNode(_components.code, {
        children: "dirty"
      }), "置为", createVNode(_components.code, {
        children: "true"
      }), "，并在下一次读取时更新计算属性的值。"]
    }), "\n", createVNode(_components.h2, {
      id: "总结",
      children: "总结"
    }), "\n", createVNode(_components.p, {
      children: "这就是 Vue 响应式数据的设计思想。具体实现上 Vue 做了很多处理，既保证了功能的完整性，又兼顾了性能。"
    }), "\n", createVNode(_components.p, {
      children: ["在整个响应式设计上，最关键的就是三个类（", createVNode(_components.code, {
        children: "Observer"
      }), "类、", createVNode(_components.code, {
        children: "Dep"
      }), "类、", createVNode(_components.code, {
        children: "Watcher"
      }), "类），两个方法（", createVNode(_components.code, {
        children: "observe"
      }), "方法和", createVNode(_components.code, {
        children: "defineReactive"
      }), "方法）。"]
    }), "\n", createVNode(_components.p, {
      children: ["其中，", createVNode(_components.code, {
        children: "observe"
      }), "方法主要做的就是实例化一个", createVNode(_components.code, {
        children: "Observer"
      }), "，与响应式对象挂钩；", createVNode(_components.code, {
        children: "defineReactive"
      }), "方法主要做的是实例化一个", createVNode(_components.code, {
        children: "Dep"
      }), "类，与响应式对象的属性挂钩；而", createVNode(_components.code, {
        children: "Watcher"
      }), "类主要用于视图、", createVNode(_components.code, {
        children: "computed"
      }), "和", createVNode(_components.code, {
        children: "watch"
      }), "。这样，整个响应式对象的基础框架算是搭建好了。然后利用", createVNode(_components.code, {
        children: "defineReactive"
      }), "方法，实现了依赖收集和派发。而", createVNode(_components.code, {
        children: "observe"
      }), "方法主要用于响应式对象的注册。整体的设计就是这样一种思路，如果想了解 Vue 的实现，可以参考这篇文章读 Vue 的源码，相信会对你有所帮助。"]
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

const url = "src/content/blog/Vue%E6%BA%90%E7%A0%81%E8%A7%A3%E6%9E%90%E4%B9%8B%E4%BE%9D%E8%B5%96%E6%94%B6%E9%9B%86%E5%92%8C%E6%B4%BE%E5%8F%91%E6%9B%B4%E6%96%B0.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/blog/Vue源码解析之依赖收集和派发更新.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/blog/Vue源码解析之依赖收集和派发更新.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
