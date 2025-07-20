import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';
import { $ as $$Image } from './chunk.BFavZmP-.js';

const __0_______assets_images_WX20190818_175457_2x_png__ = new Proxy({"src":"/astro_assets/asset.BLlIBcjg.png","width":2862,"height":376,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/assets/images/WX20190818-175457@2x.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/assets/images/WX20190818-175457@2x.png");
							return target[name];
						}
					});

const frontmatter = {
  "title": "探索JavaScript运行机制",
  "description": "",
  "pubDate": "Sun Aug 18 2019 01:26:28 GMT+0800",
  "heroImage": ""
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "宏任务",
    "text": "宏任务"
  }, {
    "depth": 2,
    "slug": "微任务",
    "text": "微任务"
  }, {
    "depth": 2,
    "slug": "宏任务与微任务的区别",
    "text": "宏任务与微任务的区别"
  }, {
    "depth": 2,
    "slug": "举个栗子",
    "text": "举个栗子"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    "astro-image": "astro-image",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, _component0 = _components["astro-image"];
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "在阅读本文前，需要你的JavaScript语言基础比较扎实，并在日常工作中经常会使用到这门语言。"
    }), "\n", createVNode(_components.p, {
      children: "进入正题，我们在执行JavaScript脚本时，经常会用到setTimeout、Promise等各种前端异步技术，那么你有没有考虑过JavaScript到底是怎样运行的呢？同样是异步技术，它们之间又有什么区别呢？在执行过程中，我们怎么确定哪个异步先执行，哪个异步后执行呢？今天，就让我们一起带着这些疑问来探究下前端开发中的异步技术和JavaScript的运行机制。"
    }), "\n", createVNode(_components.p, {
      children: "我们知道，JavaScript的执行是单线程的，所以JavaScript并不能同时处理多个任务，那么这些任务就需要排队按插入顺序执行。那么什么是任务呢？主体代码相当于一个任务，各种异步代码也相当于一个任务。JavaScript实现异步的方式有很多种，但是归根结底可以将它们划分为两大类 —— 宏任务和微任务。有了宏任务和微任务，那就需要一个调度器，适时的执行宏任务和微任务，以及配合UI渲染，这个调度器我们称之为EventLoop。"
    }), "\n", createVNode(_components.h2, {
      id: "宏任务",
      children: "宏任务"
    }), "\n", createVNode(_components.p, {
      children: "宏任务是存放在宏任务队列中的任务。在一轮任务周期中，宏任务队列只推出一个任务执行。"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "setTimeout"
      }), "\n", createVNode(_components.li, {
        children: "setInterval"
      }), "\n", createVNode(_components.li, {
        children: "setImmediate"
      }), "\n", createVNode(_components.li, {
        children: "I/O"
      }), "\n", createVNode(_components.li, {
        children: "UI Rendering"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["注意：这里没有将", createVNode(_components.strong, {
        children: "主体代码"
      }), "作为宏任务，是因为在这个概念上，网上存在较多的争议。每个人的理解不一样，但这个概念对", createVNode(_components.code, {
        children: "我们理解JS是如何运行的"
      }), "不会产生太大的影响，这里就不做定论了。"]
    }), "\n", createVNode(_components.h2, {
      id: "微任务",
      children: "微任务"
    }), "\n", createVNode(_components.p, {
      children: "微任务是存放在微任务队列中的任务。在一轮任务周期中，微任务队列会依次推出任务执行，直到微任务队列中没有任务为止（即一轮任务周期完成）。"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "原生Promise（部分第三方实现的Promise会被放入宏任务队列中）"
      }), "\n", createVNode(_components.li, {
        children: "process.nextTick()"
      }), "\n", createVNode(_components.li, {
        children: "Object.observe（已废弃）"
      }), "\n", createVNode(_components.li, {
        children: "MutationObserver"
      }), "\n", createVNode(_components.li, {
        children: "MessageChannel"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "宏任务与微任务的区别",
      children: "宏任务与微任务的区别"
    }), "\n", createVNode(_components.p, {
      children: "浏览器在执行脚本的过程中，会把不同的任务放入不同的队列当中去。当执行的时候，浏览器首先会从宏任务队列中推出一个任务并执行。当执行完当前的宏任务之后，浏览器会从微任务队列中逐个运行所有的任务。我把这个称为一个任务周期，循环往复，浏览器会执行很多个这样的任务周期。"
    }), "\n", createVNode(_components.p, {
      children: ["通俗点讲，就像你去银行办理业务，因为处理业务的人比较多，你就需要取号排队，这个就是", createVNode(_components.strong, {
        children: "宏任务队列"
      }), "。终于轮到你了，你跟柜台说你需要办理存款业务，柜台帮你办理了；你又说，你要办理理财业务，柜台又帮你办理了，就这样，你可以一次性办理完所有你想要办理的业务而不需要重新排队，这就是", createVNode(_components.strong, {
        children: "微任务队列"
      }), "。"]
    }), "\n", createVNode(_components.p, {
      children: "从上面的例子，我们可以看到宏任务每次都只能执行一个任务，微任务会把当前队列中的所有任务都执行完成后再处理下一个宏任务。"
    }), "\n", createVNode(_components.h2, {
      id: "举个栗子",
      children: "举个栗子"
    }), "\n", createVNode(_components.p, {
      children: "说了这么多，我们不如直接来看栗子，加深我们的印象。"
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
              color: "#E1E4E8"
            },
            children: "console."
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
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "setTimeout"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(() "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    Promise"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "resolve"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "7"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "r"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " =>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(r))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    console."
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
              color: "#79B8FF"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "})"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Promise"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "resolve"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "3"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "r"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " =>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(r))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Promise"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "resolve"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "4"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "r"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " =>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(r))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "setTimeout"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(() "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    console."
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
              color: "#79B8FF"
            },
            children: "5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    Promise"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "resolve"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "8"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "r"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " =>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(r))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "})"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "console."
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
              color: "#79B8FF"
            },
            children: "6"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "上面是一个观察浏览器宏任务和微任务的列子，你们觉得执行结果会是什么呢？"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        alt: "执行结果",
        src: __0_______assets_images_WX20190818_175457_2x_png__
      })
    }), "\n", createVNode(_components.p, {
      children: "跟你想的一样吗？下面我来讲解下这段代码的执行过程吧！"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "script标签引入的脚本是主体任务，先执行；"
      }), "\n", createVNode(_components.li, {
        children: ["第一行代码是同步代码，所以直接执行并打印结果 ", createVNode(_components.code, {
          children: "1"
        }), "；"]
      }), "\n", createVNode(_components.li, {
        children: "第三行代码遇到了setTimeout，setTimeout是宏任务，所以推入宏任务队列中，等待执行；"
      }), "\n", createVNode(_components.li, {
        children: "第九行代码遇到了Promise，Promise是微任务，所以推入微任务队列中，等待执行；"
      }), "\n", createVNode(_components.li, {
        children: "第十一行代码又遇到了Promise，推入微任务队列中，等待执行；"
      }), "\n", createVNode(_components.li, {
        children: "第十三行代码又遇到了setTimeout，推入宏任务队列中，等待执行；"
      }), "\n", createVNode(_components.li, {
        children: ["第十九行代码是同步代码，直接执行并打印结果", createVNode(_components.code, {
          children: "6"
        }), "。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "第一个任务执行结束了，现在宏任务队列中有2个任务，微任务队列中也有2个任务。下面浏览器会执行刚刚推入微任务队列中的所有任务。"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["第一个微任务是第九行代码创建的，执行并打印结果", createVNode(_components.code, {
          children: "3"
        }), "。"]
      }), "\n", createVNode(_components.li, {
        children: ["第二个微任务是第十一行代码创建的，执行并打印结果", createVNode(_components.code, {
          children: "4"
        }), "。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "就这样一个任务周期就结束了。我前面说过，现在宏任务中还有2个任务，所以我们继续下一个任务周期。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "执行宏任务"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "执行第一个setTimeout中的回调函数。"
      }), "\n", createVNode(_components.li, {
        children: "遇到Promise，推入微任务队列，等待执行。"
      }), "\n", createVNode(_components.li, {
        children: ["遇到同步代码，直接执行并打印结果", createVNode(_components.code, {
          children: "2"
        }), "。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "执行微任务"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["执行Promise的then方法，直接执行并打印结果", createVNode(_components.code, {
          children: "7"
        }), "。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "执行宏任务"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "执行第2个setTimeout中的回调函数。"
      }), "\n", createVNode(_components.li, {
        children: ["遇到同步代码，直接执行并打印结果", createVNode(_components.code, {
          children: "5"
        }), "。"]
      }), "\n", createVNode(_components.li, {
        children: "遇到Promise，推入微任务队列，等待执行。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "执行微任务"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["执行Promise的then方法，直接执行并打印结果", createVNode(_components.code, {
          children: "8"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "好了，执行结束，这就是所有异步任务的执行顺序。讲解之后是不是很清晰！"
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

const url = "src/content/blog/%E6%8E%A2%E7%B4%A2JavaScript%E8%BF%90%E8%A1%8C%E6%9C%BA%E5%88%B6.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/blog/探索JavaScript运行机制.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/blog/探索JavaScript运行机制.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
