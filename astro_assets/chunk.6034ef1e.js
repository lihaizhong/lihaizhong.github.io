import { _ as __astro_tag_component__, F as Fragment, q as createVNode } from './chunk.58a66e60.js';
import { $ as $$Image } from './chunk.4df0e139.js';

const __0_______assets_reactive_getter_svg__ = new Proxy({"src":"/astro_assets/asset.b540988e.svg","width":411,"height":241,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const __1_______assets_reactive_setter_svg__ = new Proxy({"src":"/astro_assets/asset.32e0105a.svg","width":461,"height":331,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const frontmatter = {
  "title": "Vue\u6E90\u7801\u89E3\u6790\u4E4B\u4F9D\u8D56\u6536\u96C6\u548C\u6D3E\u53D1\u66F4\u65B0",
  "description": "",
  "pubDate": "Tue Sep 24 2019 02:43:54 GMT+0800",
  "heroImage": ""
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "\u54CD\u5E94\u5F0F\u6570\u636E\u7684\u4E09\u4E2A\u91CD\u8981\u7C7B",
    "text": "\u54CD\u5E94\u5F0F\u6570\u636E\u7684\u4E09\u4E2A\u91CD\u8981\u7C7B"
  }, {
    "depth": 2,
    "slug": "\u4F9D\u8D56\u6536\u96C6",
    "text": "\u4F9D\u8D56\u6536\u96C6"
  }, {
    "depth": 2,
    "slug": "\u6D3E\u53D1\u66F4\u65B0",
    "text": "\u6D3E\u53D1\u66F4\u65B0"
  }, {
    "depth": 2,
    "slug": "\u603B\u7ED3",
    "text": "\u603B\u7ED3"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = Object.assign({
      p: "p",
      code: "code",
      strong: "strong",
      h2: "h2",
      ul: "ul",
      li: "li",
      "astro-image": "astro-image",
      pre: "pre",
      span: "span"
    }, props.components),
    _component0 = _components["astro-image"];
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "\u76F8\u4FE1\u5927\u5BB6\u90FD\u77E5\u9053\uFF0C\u5982\u4ECA\u7684\u524D\u7AEF\u5F00\u53D1\u4E3B\u8981\u662F\u4F7F\u7528\u6700\u6D41\u884C\u7684\u4E09\u5927\u6846\u67B6 Angular\u3001React\u3001Vue\u3002\u5C24\u5176 React \u65E0\u8BBA\u5728\u56FD\u5185\u8FD8\u662F\u56FD\u5916\u90FD\u6DF1\u53D7\u524D\u7AEF\u5F00\u53D1\u8005\u7684\u559C\u7231\uFF0C\u5E02\u573A\u5360\u6709\u7387\u53EF\u4EE5\u8BF4\u662F\u76F8\u5F53\u7684\u9AD8\u3002\u53E6\u5916\u4E24\u5927\u6846\u67B6\u4E5F\u662F\u4E0D\u7518\u843D\u540E\uFF0C\u56E0\u5176\u5404\u81EA\u7684\u7279\u70B9\uFF0C\u7262\u7262\u628A\u63E1\u4F4F\u4E86\u4E00\u90E8\u5206\u5FE0\u5B9E\u7684\u7C89\u4E1D\u3002\u4ECA\u5929\u6211\u4EEC\u8981\u8BF4\u7684\u662F\u4E09\u5927\u6846\u67B6\u4E4B\u4E2D\u7684 Vue \u6846\u67B6\u3002"
    }), "\n", createVNode(_components.p, {
      children: ["Vue \u7531\u4E8E\u5176\u6E10\u8FDB\u5F0F\u7684\u5F00\u53D1\u65B9\u5F0F\u3001\u5B8C\u5584\u7684\u811A\u624B\u67B6\u5DE5\u5177\u4EE5\u53CA\u7B80\u5355\u6613\u61C2\u7684\u5F00\u53D1\u6587\u6863\uFF0C\u6DF1\u53D7\u4E00\u90E8\u5206\u56FD\u4EBA\u7684\u559C\u7231\u3002\u4F7F\u7528\u8FC7 Vue \u7684\u90FD\u77E5\u9053\uFF0C\u5728\u6211\u4EEC\u4FEE\u6539", createVNode(_components.code, {
        children: "data"
      }), "\u4E2D\u67D0\u4E2A\u6570\u636E\u7684\u65F6\u5019\uFF0C\u76F8\u5173\u4F9D\u8D56\u7684", createVNode(_components.code, {
        children: "watch"
      }), "\u3001", createVNode(_components.code, {
        children: "computed"
      }), "\u3001", createVNode(_components.code, {
        children: "renderer"
      }), "\u90FD\u4F1A\u968F\u4E4B\u66F4\u65B0\uFF0C\u90A3 Vue \u662F\u5982\u4F55\u505A\u5230\u7684\u5462\uFF1F\u4ECA\u5929\u6211\u4EEC\u5C31\u6765\u8BB2\u8BB2 Vue \u5728\u8FD9\u5757\u7684\u5B9E\u73B0\u65B9\u5F0F\u2014\u2014\u54CD\u5E94\u5F0F\u6570\u636E\u66F4\u65B0\u3002"]
    }), "\n", createVNode(_components.p, {
      children: ["\u5173\u4E8E\u8FD9\u4E2A\u9ED1\u79D1\u6280\u822C\u7684\u52A8\u4F5C\uFF0C\u6211\u4EEC\u5728 Vue \u7684\u5B9E\u73B0\u65B9\u5F0F\u4E2D\u6709\u4E24\u4E2A\u4E13\u6709\u7684\u540D\u8BCD\uFF08", createVNode(_components.strong, {
        children: "\u4F9D\u8D56\u6536\u96C6"
      }), "\u548C", createVNode(_components.strong, {
        children: "\u6D3E\u53D1\u66F4\u65B0"
      }), "\uFF09\u3002"]
    }), "\n", createVNode(_components.p, {
      children: ["Vue \u5229\u7528\u4E86 JavaScript \u7684\u539F\u751F\u65B9\u6CD5", createVNode(_components.code, {
        children: "Object.defineProperty"
      }), "\u5B9E\u73B0\u54CD\u5E94\u5F0F\u6570\u636E\u3002\u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u91CD\u5199\u5BF9\u8C61\u5C5E\u6027\u7684", createVNode(_components.code, {
        children: "get"
      }), "\u548C", createVNode(_components.code, {
        children: "set"
      }), "\u52A8\u4F5C\uFF0C\u4F7F\u6211\u4EEC\u80FD\u4FDD\u8BC1\u539F\u6765\u7684\u884C\u4E3A\u4E0D\u53D8\u7684\u540C\u65F6\uFF0C\u6DFB\u52A0\u989D\u5916\u7684\u884C\u4E3A\u3002Vue \u5C31\u662F\u5229\u7528\u5BF9\u8C61\u5C5E\u6027\u7684", createVNode(_components.code, {
        children: "get"
      }), "\u6765\u5B9E\u73B0", createVNode(_components.strong, {
        children: "\u6536\u96C6\u4F9D\u8D56"
      }), "\uFF0C\u4EE5\u53CA\u5229\u7528\u5BF9\u8C61\u5C5E\u6027\u7684", createVNode(_components.code, {
        children: "set"
      }), "\u6765\u5B9E\u73B0", createVNode(_components.strong, {
        children: "\u6D3E\u53D1\u66F4\u65B0"
      }), "\u7684\u3002"]
    }), "\n", createVNode(_components.p, {
      children: "\u672C\u6587\u4E3B\u8981\u8BB2\u89E3\u7684\u662F Vue \u54CD\u5E94\u5F0F\u6570\u636E\u7684\u8BBE\u8BA1\u601D\u60F3\uFF0C\u5BF9\u4E8E\u5177\u4F53\u4EE3\u7801\u53CA\u5177\u4F53\u7684\u5B9E\u73B0\u65B9\u6848\u4E0D\u4F1A\u6709\u7279\u522B\u8BE6\u7EC6\u7684\u8BB2\u89E3\u3002\u5173\u4E8E\u8FD9\u4E9B\u7EC6\u5219\uFF0C\u4F60\u53EF\u4EE5\u6D4F\u89C8\u7F51\u4E0A\u4E00\u4E9B\u8BB2\u6E90\u7801\u7684\u6587\u7AE0\u6216\u8005\u53EF\u4EE5\u81EA\u884C\u67E5\u9605\u6E90\u7801\u3002"
    }), "\n", createVNode(_components.h2, {
      id: "\u54CD\u5E94\u5F0F\u6570\u636E\u7684\u4E09\u4E2A\u91CD\u8981\u7C7B",
      children: "\u54CD\u5E94\u5F0F\u6570\u636E\u7684\u4E09\u4E2A\u91CD\u8981\u7C7B"
    }), "\n", createVNode(_components.p, {
      children: ["\u5728\u8BF4", createVNode(_components.strong, {
        children: "\u4F9D\u8D56\u6536\u96C6"
      }), "\u548C", createVNode(_components.strong, {
        children: "\u6D3E\u53D1\u66F4\u65B0"
      }), "\u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u8BF4\u8BF4\u8DDF\u8FD9\u4E24\u4E2A\u52A8\u4F5C\u5F3A\u76F8\u5173\u7684\u4E09\u4E2A\u7C7B\u3002Vue \u5185\u90E8\u5B9A\u4E49\u4E86", createVNode(_components.code, {
        children: "Observer"
      }), "\u7C7B\u3001", createVNode(_components.code, {
        children: "Dep"
      }), "\u7C7B\u3001", createVNode(_components.code, {
        children: "Watcher"
      }), "\u7C7B\u3002"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "Observer"
        }), "\u662F\u7528\u6765\u7BA1\u7406\u54CD\u5E94\u5F0F\u5BF9\u8C61\u7684\u3002\u6240\u6709\u7684\u54CD\u5E94\u5F0F\u5BF9\u8C61\u90FD\u6709\u4E00\u4E2A\u7279\u70B9\uFF0C\u4F60\u53EF\u4EE5\u5728\u5B83\u7684\u5C5E\u6027\u4E2D\u627E\u5230", createVNode(_components.code, {
          children: "__ob__"
        }), "\u5C5E\u6027\u3002"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "Dep"
        }), "\u4E3B\u8981\u5C31\u662F\u505A\u4F9D\u8D56\u6536\u96C6\u548C\u6D3E\u53D1\u66F4\u65B0\u7684\u3002\u54CD\u5E94\u5F0F\u5BF9\u8C61\u7684\u6BCF\u4E00\u4E2A\u5C5E\u6027\u90FD\u4F1A\u88AB\u5BF9\u5E94\u7684\u521B\u5EFA\u4E00\u4E2A Dep \u5B9E\u4F8B\uFF0C\u7528\u4E8E\u6536\u96C6 Watcher \u548C\u89E6\u53D1 Watcher \u7684\u66F4\u65B0\u3002"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "Watcher"
        }), "\u7684\u4F5C\u7528\u5219\u662F\u521B\u5EFA\u4E00\u4E2A\u76D1\u542C\u5668\u3002\u5F53 Watcher \u5173\u8054\u7684\u6570\u636E\u53D1\u751F\u6539\u53D8\u65F6\uFF0CWatcher \u4F1A\u8FDB\u884C\u76F8\u5E94\u7684\u66F4\u65B0\u3002"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "\u4F9D\u8D56\u6536\u96C6",
      children: "\u4F9D\u8D56\u6536\u96C6"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        src: __0_______assets_reactive_getter_svg__,
        alt: "\u54CD\u5E94\u5F0F\u6570\u636E\u4E4Bgetter"
      })
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
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
      children: ["\u4ECE\u56FE\u4E0A\u6211\u4EEC\u53EF\u77E5\uFF0C\u5F53\u89C6\u56FE\u6216\u8005 computed \u7B49 Watcher \u8BFB\u53D6\u4F9D\u8D56\u7684\u54CD\u5E94\u5F0F\u5C5E\u6027\u65F6\uFF0C\u5C5E\u6027\u5BF9\u5E94\u7684 Dep \u5B9E\u4F8B\u4F1A\u6267\u884C", createVNode(_components.code, {
        children: "depend"
      }), "\u65B9\u6CD5\uFF0C\u6536\u96C6\u5F53\u524D\u7684 Watcher\uFF0C\u4EE5\u4FBF\u5C5E\u6027\u53D1\u751F\u6539\u53D8\u65F6\u80FD\u901A\u77E5\u5230\u76F8\u5E94\u7684 Watcher \u66F4\u65B0\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u5C31\u53EB\u505A", createVNode(_components.strong, {
        children: "\u4F9D\u8D56\u6536\u96C6"
      }), "\u3002"]
    }), "\n", createVNode(_components.p, {
      children: ["\u4E3E\u4E2A\u6817\u5B50\uFF0C\u6BD4\u5982\u4E0A\u56FE\u4E2D\u7684", createVNode(_components.code, {
        children: "data"
      }), "\u6709\u4E00\u4E2A\u5C5E\u6027", createVNode(_components.code, {
        children: "message"
      }), "\uFF0C\u5F53\u89C6\u56FE\u9700\u8981\u5C55\u793A", createVNode(_components.code, {
        children: "message"
      }), "\u7684\u503C\u65F6\uFF0C", createVNode(_components.code, {
        children: "message"
      }), "\u7684", createVNode(_components.code, {
        children: "get"
      }), "\u52A8\u4F5C\u5C31\u4F1A\u88AB\u89E6\u53D1\u3002\u8FD9\u65F6\u5019\u6267\u884C", createVNode(_components.code, {
        children: "dep.depend()"
      }), "\u5C31\u4F1A\u5C06\u5F53\u524D\u7684", createVNode(_components.code, {
        children: "renderer watcher"
      }), "\u6DFB\u52A0\u5230 message \u5BF9\u5E94\u7684 Dep \u5B9E\u4F8B\u7684\u4F9D\u8D56\u9879\u4E2D\u3002"]
    }), "\n", createVNode(_components.h2, {
      id: "\u6D3E\u53D1\u66F4\u65B0",
      children: "\u6D3E\u53D1\u66F4\u65B0"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        src: __1_______assets_reactive_setter_svg__,
        alt: "\u54CD\u5E94\u5F0F\u6570\u636E\u4E4Bsetter"
      })
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
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
        children: "\u6D3E\u53D1\u66F4\u65B0"
      }), "\u7684\u52A8\u4F5C\u4E5F\u5F88\u7B80\u5355\uFF0C\u5F53\u54CD\u5E94\u5F0F\u5BF9\u8C61\u4E2D\u7684\u67D0\u4E2A\u5C5E\u6027\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u5BF9\u5E94\u8FD9\u4E2A\u5C5E\u6027\u7684 Dep \u5B9E\u4F8B\u5C31\u4F1A\u6267\u884C", createVNode(_components.code, {
        children: "notify"
      }), "\u65B9\u6CD5\uFF0C\u4E4B\u524D\u6536\u96C6\u7684 Watcher \u4F1A\u88AB\u901A\u77E5\u8FDB\u5165\u5F02\u6B65\u961F\u5217\u4E2D\u6267\u884C\u3002\u8FD9\u4E2A\u8FC7\u7A0B\u53EB\u505A", createVNode(_components.strong, {
        children: "\u6D3E\u53D1\u66F4\u65B0"
      }), "\u3002"]
    }), "\n", createVNode(_components.p, {
      children: ["\u4E3E\u4E2A\u6817\u5B50\uFF0C\u6BD4\u5982\u4E0A\u56FE\u4E2D\u7684", createVNode(_components.code, {
        children: "data"
      }), "\u6709\u4E00\u4E2A\u5C5E\u6027", createVNode(_components.code, {
        children: "message"
      }), "\uFF0C\u5F53", createVNode(_components.code, {
        children: "message"
      }), "\u7684\u503C\u53D1\u751F\u53D8\u5316\u65F6\uFF0C", createVNode(_components.code, {
        children: "message"
      }), "\u7684", createVNode(_components.code, {
        children: "set"
      }), "\u52A8\u4F5C\u5C31\u4F1A\u88AB\u89E6\u53D1\u3002\u8FD9\u65F6\u5019\uFF0C\u4F9D\u8D56", createVNode(_components.code, {
        children: "message"
      }), "\u7684", createVNode(_components.code, {
        children: "renderer watcher"
      }), "\u5C31\u4F1A\u6267\u884C", createVNode(_components.code, {
        children: "update"
      }), "\u64CD\u4F5C\uFF0C\u91CD\u65B0\u6E32\u67D3 DOM \u5143\u7D20\uFF1B", createVNode(_components.code, {
        children: "computed watcher"
      }), "\u5C31\u4F1A\u5C06", createVNode(_components.code, {
        children: "dirty"
      }), "\u7F6E\u4E3A", createVNode(_components.code, {
        children: "true"
      }), "\uFF0C\u5E76\u5728\u4E0B\u4E00\u6B21\u8BFB\u53D6\u65F6\u66F4\u65B0\u8BA1\u7B97\u5C5E\u6027\u7684\u503C\u3002"]
    }), "\n", createVNode(_components.h2, {
      id: "\u603B\u7ED3",
      children: "\u603B\u7ED3"
    }), "\n", createVNode(_components.p, {
      children: "\u8FD9\u5C31\u662F Vue \u54CD\u5E94\u5F0F\u6570\u636E\u7684\u8BBE\u8BA1\u601D\u60F3\u3002\u5177\u4F53\u5B9E\u73B0\u4E0A Vue \u505A\u4E86\u5F88\u591A\u5904\u7406\uFF0C\u65E2\u4FDD\u8BC1\u4E86\u529F\u80FD\u7684\u5B8C\u6574\u6027\uFF0C\u53C8\u517C\u987E\u4E86\u6027\u80FD\u3002"
    }), "\n", createVNode(_components.p, {
      children: ["\u5728\u6574\u4E2A\u54CD\u5E94\u5F0F\u8BBE\u8BA1\u4E0A\uFF0C\u6700\u5173\u952E\u7684\u5C31\u662F\u4E09\u4E2A\u7C7B\uFF08", createVNode(_components.code, {
        children: "Observer"
      }), "\u7C7B\u3001", createVNode(_components.code, {
        children: "Dep"
      }), "\u7C7B\u3001", createVNode(_components.code, {
        children: "Watcher"
      }), "\u7C7B\uFF09\uFF0C\u4E24\u4E2A\u65B9\u6CD5\uFF08", createVNode(_components.code, {
        children: "observe"
      }), "\u65B9\u6CD5\u548C", createVNode(_components.code, {
        children: "defineReactive"
      }), "\u65B9\u6CD5\uFF09\u3002"]
    }), "\n", createVNode(_components.p, {
      children: ["\u5176\u4E2D\uFF0C", createVNode(_components.code, {
        children: "observe"
      }), "\u65B9\u6CD5\u4E3B\u8981\u505A\u7684\u5C31\u662F\u5B9E\u4F8B\u5316\u4E00\u4E2A", createVNode(_components.code, {
        children: "Observer"
      }), "\uFF0C\u4E0E\u54CD\u5E94\u5F0F\u5BF9\u8C61\u6302\u94A9\uFF1B", createVNode(_components.code, {
        children: "defineReactive"
      }), "\u65B9\u6CD5\u4E3B\u8981\u505A\u7684\u662F\u5B9E\u4F8B\u5316\u4E00\u4E2A", createVNode(_components.code, {
        children: "Dep"
      }), "\u7C7B\uFF0C\u4E0E\u54CD\u5E94\u5F0F\u5BF9\u8C61\u7684\u5C5E\u6027\u6302\u94A9\uFF1B\u800C", createVNode(_components.code, {
        children: "Watcher"
      }), "\u7C7B\u4E3B\u8981\u7528\u4E8E\u89C6\u56FE\u3001", createVNode(_components.code, {
        children: "computed"
      }), "\u548C", createVNode(_components.code, {
        children: "watch"
      }), "\u3002\u8FD9\u6837\uFF0C\u6574\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61\u7684\u57FA\u7840\u6846\u67B6\u7B97\u662F\u642D\u5EFA\u597D\u4E86\u3002\u7136\u540E\u5229\u7528", createVNode(_components.code, {
        children: "defineReactive"
      }), "\u65B9\u6CD5\uFF0C\u5B9E\u73B0\u4E86\u4F9D\u8D56\u6536\u96C6\u548C\u6D3E\u53D1\u3002\u800C", createVNode(_components.code, {
        children: "observe"
      }), "\u65B9\u6CD5\u4E3B\u8981\u7528\u4E8E\u54CD\u5E94\u5F0F\u5BF9\u8C61\u7684\u6CE8\u518C\u3002\u6574\u4F53\u7684\u8BBE\u8BA1\u5C31\u662F\u8FD9\u6837\u4E00\u79CD\u601D\u8DEF\uFF0C\u5982\u679C\u60F3\u4E86\u89E3 Vue \u7684\u5B9E\u73B0\uFF0C\u53EF\u4EE5\u53C2\u8003\u8FD9\u7BC7\u6587\u7AE0\u8BFB Vue \u7684\u6E90\u7801\uFF0C\u76F8\u4FE1\u4F1A\u5BF9\u4F60\u6709\u6240\u5E2E\u52A9\u3002"]
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/blog/Vue%E6%BA%90%E7%A0%81%E8%A7%A3%E6%9E%90%E4%B9%8B%E4%BE%9D%E8%B5%96%E6%94%B6%E9%9B%86%E5%92%8C%E6%B4%BE%E5%8F%91%E6%9B%B4%E6%96%B0.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/blog/Vue源码解析之依赖收集和派发更新.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/blog/Vue源码解析之依赖收集和派发更新.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
