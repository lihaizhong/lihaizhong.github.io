import { _ as __astro_tag_component__, F as Fragment, q as createVNode } from './chunk.58a66e60.js';
import { $ as $$Image } from './chunk.4df0e139.js';

const __0_______assets_git_reset_png__ = new Proxy({"src":"/astro_assets/asset.c0105f97.png","width":888,"height":658,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const __1_______assets_git_revert_png__ = new Proxy({"src":"/astro_assets/asset.bc7a6bac.png","width":706,"height":174,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const frontmatter = {
  "title": "Git\u4E2Dreset\u548Crevert\u7684\u533A\u522B",
  "description": "",
  "pubDate": "Tue, 29 Aug 2023 21:15:19 +0800",
  "heroImage": "",
  "draft": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "git-reset",
    "text": "git reset"
  }, {
    "depth": 2,
    "slug": "git-revert",
    "text": "git revert"
  }, {
    "depth": 2,
    "slug": "\u7ED3\u8BBA",
    "text": "\u7ED3\u8BBA"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = Object.assign({
      p: "p",
      strong: "strong",
      code: "code",
      pre: "pre",
      span: "span",
      h2: "h2",
      "astro-image": "astro-image",
      ul: "ul",
      li: "li",
      a: "a",
      blockquote: "blockquote",
      ol: "ol"
    }, props.components),
    _component0 = _components["astro-image"];
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["\u5728\u73B0\u4EE3\u7A0B\u5E8F\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u5E38\u5E38\u4F7F\u7528", createVNode(_components.strong, {
        children: "Git"
      }), "\u4F5C\u4E3A\u6211\u4EEC\u7684\u7248\u672C\u63A7\u5236\u5DE5\u5177\u3002", createVNode(_components.strong, {
        children: "Git"
      }), "\u7684\u529F\u80FD\u975E\u5E38\u4E30\u5BCC\uFF0C\u8FD9\u91CC\u6211\u5C31\u4E0D\u505A\u8FC7\u591A\u7684\u4ECB\u7ECD\uFF0C\u53EA\u662F\u4ECB\u7ECD\u56DE\u9000\u529F\u80FD\u3002\u5728\u65E5\u5E38\u56E2\u961F\u5F00\u53D1\u4E2D\uFF0C\u6211\u4EEC\u5076\u5C14\u4F1A\u9047\u5230\u64CD\u4F5C\u4E0D\u5F53\u5BFC\u81F4\u9700\u8981\u56DE\u9000\u5230\u7279\u5B9A\u7248\u672C\u7684\u60C5\u51B5\u3002\u8FD9\u4E2A\u65F6\u5019\uFF0C\u6211\u4EEC\u4ECA\u5929\u7684\u4E3B\u89D2\u5C31\u767B\u573A\u4E86\u2014\u2014\u2014\u2014", createVNode(_components.code, {
        children: "git reset"
      }), "\u548C", createVNode(_components.code, {
        children: "git revert"
      }), "\u3002"]
    }), "\n", createVNode(_components.p, {
      children: ["\u9996\u5148\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528", createVNode(_components.code, {
        children: "git log --pretty=oneline --abbrev-commit"
      }), "\u6765\u5C55\u793A", createVNode(_components.code, {
        children: "commit\u8BB0\u5F55"
      }), "\u4FE1\u606F\u3002\u5927\u6982\u4F1A\u957F\u8FD9\u6837\uFF1A"]
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
              color: "#B392F0"
            },
            children: "51b41d2d3"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (HEAD -"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " dev_gift,"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " origin/v11.1.35,"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " origin/pianli_dev,"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " origin/dev_gift"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") chore: @2dfire/meal-meta@1.0.117"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "d5aa83954"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " share\u9875\u9762\uFF0C\u552E\u540E\u8BE6\u60C5\u9875\u8DF3\u8F6C\u6A21\u5F0F\u4FEE\u6539"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "8df946cf6"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Merge"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " branch"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'v11.1.35'"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " of"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " git.2dfire.net:firecode/firecode-mercury"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " into"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " v11.1.35"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "39ad07ff2"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "  share\u9875\u9762\uFF0C\u4F1A\u5458\u5361\u9875\u9762\u8DF3\u8F6C\u6A21\u5F0F\u4FEE\u6539"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "8ab1f776d"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " update:"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " AuthBox"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \u6E32\u67D3\u4FEE\u590D"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "4eca779d2"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Merge"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " branch"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'v11.1.35'"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " of"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " https://git.2dfire.net/firecode/firecode-mercury"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " into"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " v11.1.35"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "a32cdfe32"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " update:"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " AuthBox"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \u7EC4\u4EF6"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " appId"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \u83B7\u53D6\u6539\u9020\uFF0C\u6A21\u7248\u83DC\u5355\u7279\u6743\u53610\u5143\u5546\u54C1\u9886\u53D6\u6D41\u7A0B\u4FEE\u590D"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "720b4910b"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \u5C0F\u7A0B\u5E8FappId\u83B7\u53D6\u4FEE\u6539"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "af22a2c0e"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " update:"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " meta"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " sync"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "6693f6337"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Merge"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " branch"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'dev_message'"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " into"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " v11.1.35"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "405c45b8e"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Merge"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " branch"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'v11.1.35'"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " of"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " git.2dfire.net:firecode/firecode-mercury"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " into"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " v11.1.35"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "17bdd051b"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Merge"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " branch"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'dev_entrance'"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " into"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " v11.1.35"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "bb8ab8bf9"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " update:"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " version"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "8bc1418b4"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Merge"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " branch"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'dev_meal_code'"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " into"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " v11.1.35"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "21c8aa53f"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Merge"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " branch"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'dev_gift_0821'"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " into"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " v11.1.35"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "git-reset",
      children: "git reset"
    }), "\n", createVNode(_components.p, {
      children: ["\u6700\u5148\u60F3\u5230\u7684\u5E94\u8BE5\u662F", createVNode(_components.code, {
        children: "git reset"
      }), "\uFF0C\u8FD9\u662F", createVNode(_components.strong, {
        children: "Git"
      }), "\u5F88\u65E9\u5C31\u6709\u7684\u529F\u80FD\u3002\u5B83\u4F1A\u5C06", createVNode(_components.code, {
        children: "HEAD"
      }), "\u6307\u5411\u6307\u5B9A\u7684", createVNode(_components.code, {
        children: "commit\u8BB0\u5F55"
      }), "\uFF0C\u5E76\u9057\u5F03\u5728\u5B83\u4E4B\u540E\u7684\u6240\u6709\u8BB0\u5F55\u3002"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        src: __0_______assets_git_reset_png__,
        alt: "git reset"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# \u540E\u9762\u7684commit\u5185\u5BB9\u5B58\u5165\u5DE5\u4F5C\u533A"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " reset"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " B"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "commit"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " i"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "d"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# \u540E\u9762\u7684commit\u5185\u5BB9\u76F4\u63A5\u4E22\u5F03"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " reset"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --hard"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " B"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "commit"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " i"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "d"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# \u540E\u9762\u7684commit\u5185\u5BB9\u5B58\u5165\u6682\u5B58\u533A"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " reset"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --soft"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " B"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "commit"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " i"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "d"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["\u4ECE\u56FE\u4E2D\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u4F1A\u5C06", createVNode(_components.code, {
        children: "HEAD"
      }), "\u6307\u9488\u6307\u5411\u8BB0\u5F55B\u7684\u4F4D\u7F6E\u3002\u540E\u7EED\u7684\u63D0\u4EA4\u4F1A\u7D27\u8DDF\u7740\u8BB0\u5F55B\u8FDB\u884C\uFF0C\u800C\u8BB0\u5F55C\u548C\u8BB0\u5F55D\u5C06\u88AB\u629B\u5F03\u3002"]
    }), "\n", createVNode(_components.p, {
      children: ["\u8FD9\u91CC\u9700\u8981\u6CE8\u610F\uFF0C", createVNode(_components.code, {
        children: "git reset"
      }), "\u6709\u4E00\u4E9B\u53C2\u6570\uFF0C\u4E0D\u540C\u7684\u53C2\u6570\u4F1A\u6709\u4E0D\u540C\u7684\u5F71\u54CD\uFF0C\u53EF\u4EE5\u6307\u5B9A\u662F\u5426\u590D\u539F\u7D22\u5F15\u6216\u5DE5\u4F5C\u6811\u5185\u5BB9\u3002"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "\u2014mixed"
        }), "\uFF08\u9ED8\u8BA4\uFF09\uFF1A", createVNode(_components.strong, {
          children: "\u91CD\u7F6E\u7D22\u5F15\uFF0C\u4F46\u4E0D\u91CD\u7F6E\u5DE5\u4F5C\u6811"
        }), "\u3002\u5373HEAD\u6307\u5411\u6307\u5B9A\u7684", createVNode(_components.code, {
          children: "commit\u8BB0\u5F55"
        }), "\uFF0C\u8BE5", createVNode(_components.code, {
          children: "commit\u8BB0\u5F55"
        }), "\u540E\u9762\u6240\u6709\u7684\u66F4\u6539\u88AB\u5B58\u5165\u5DE5\u4F5C\u533A\u3002"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "\u2014hard"
        }), "\uFF1A", createVNode(_components.strong, {
          children: "\u91CD\u7F6E\u7D22\u5F15\u548C\u5DE5\u4F5C\u6811"
        }), "\u3002\u5373HEAD\u6307\u5411\u6307\u5B9A\u7684commit\u8BB0\u5F55\uFF0C\u8BE5", createVNode(_components.code, {
          children: "commit\u8BB0\u5F55"
        }), "\u540E\u9762\u6240\u6709\u66F4\u6539\u88AB\u5168\u90E8\u4E22\u5F03\u3002"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "\u2014soft"
        }), "\uFF1A", createVNode(_components.strong, {
          children: "\u4E0D\u91CD\u7F6E\u7D22\u5F15\u548C\u5DE5\u4F5C\u6811\uFF0C\u4F46\u91CD\u7F6EHEAD\u4F4D\u7F6E"
        }), "\u3002\u5373HEAD\u6307\u5411\u6307\u5B9A\u7684", createVNode(_components.code, {
          children: "commit\u8BB0\u5F55"
        }), "\uFF0C\u8BE5", createVNode(_components.code, {
          children: "commit\u8BB0\u5F55"
        }), "\u540E\u9762\u6240\u6709\u7684\u66F4\u6539\u88AB\u5B58\u5165\u6682\u5B58\u533A\u3002"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["\u53E6\u5916\u8FD8\u6709 ", createVNode(_components.strong, {
        children: "\u2014merge"
      }), " \u548C ", createVNode(_components.strong, {
        children: "\u2014keep"
      }), " \u6307\u4EE4\uFF0C\u8FD9\u91CC\u4E0D\u505A\u8FC7\u591A\u4ECB\u7ECD\u3002\u5982\u679C\u60F3\u8981\u4E86\u89E3\u66F4\u591A\uFF0C\u53EF\u4EE5\u53BB", createVNode(_components.a, {
        href: "https://git-scm.com/docs/git-reset/zh_HANS-CN",
        children: "\u5B98\u7F51"
      }), "\u4E86\u89E3\u3002"]
    }), "\n", createVNode(_components.p, {
      children: ["\u4F7F\u7528\u4E0A\u9762\u7684\u547D\u4EE4\u5C31\u53EF\u4EE5\u505A\u5230\u56DE\u9000\u5230\u67D0\u4E2A", createVNode(_components.code, {
        children: "commit\u8BB0\u5F55"
      }), "\u3002\u6CE8\u610F\u56E0\u4E3A\u56DE\u9000\u4F1A\u5BFC\u81F4\u672C\u5730\u4ED3\u5E93\u7684\u8BB0\u5F55\u843D\u540E\u4E8E\u8FDC\u7A0B\u4ED3\u5E93\u800C\u65E0\u6CD5\u540C\u6B65\uFF0C\u5982\u9700\u540C\u6B65\u8FD9\u6B21\u64CD\u4F5C\uFF0C\u5FC5\u987B", createVNode(_components.strong, {
        children: ["\u4F7F\u7528", createVNode(_components.code, {
          children: "git push --force"
        }), "\u5F3A\u5236\u63A8\u9001"]
      }), "\u3002"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: createVNode(_components.strong, {
          children: "\u6CE8\u610F"
        })
      }), "\n", createVNode(_components.p, {
        children: ["\u5C06", createVNode(_components.code, {
          children: "git reset"
        }), "\u4E0E", createVNode(_components.code, {
          children: "--hard"
        }), "\u4E00\u8D77\u4F7F\u7528\u65F6\u8981\u975E\u5E38\u5C0F\u5FC3\uFF0C\u56E0\u4E3A\u5B83\u4F1A\u91CD\u7F6E\u4F60\u7684\u63D0\u4EA4\u3001\u6682\u5B58\u533A\u548C\u4F60\u7684\u5DE5\u4F5C\u6811\u3002\u5982\u679C\u4E3A\u6B63\u786E\u4F7F\u7528\u6B64\u9009\u9879\uFF0C\u5219\u6700\u7EC8\u53EF\u80FD\u4F1A\u4E22\u5931\u6240\u7F16\u5199\u7684\u4EE3\u7801\u3002"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "git-revert",
      children: "git revert"
    }), "\n", createVNode(_components.p, {
      children: ["\u5982\u679C\u4F60\u5DF2\u7ECF\u5C06\u63D0\u4EA4\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u5219\u5EFA\u8BAE\u5C3D\u91CF\u4E0D\u8981\u4F7F\u7528", createVNode(_components.code, {
        children: "git reset"
      }), "\uFF0C\u56E0\u4E3A\u5B83\u4F1A\u91CD\u5EFA\u63D0\u4EA4\u7684\u5386\u53F2\u8BB0\u5F55\u3002\u8FD9\u4F1A\u4F7F\u4E0E\u5176\u4ED6\u5F00\u53D1\u4EBA\u5458\u4E00\u8D77\u5904\u7406\u4ED3\u5E93\u5E76\u7EF4\u62A4\u4E00\u81F4\u7684\u63D0\u4EA4\u5386\u53F2\u53D8\u5F97\u975E\u5E38\u56F0\u96BE\u3002", createVNode(_components.strong, {
        children: ["\u8FD9\u65F6\u5019\u4F7F\u7528", createVNode(_components.code, {
          children: "git revert"
        }), "\u53EF\u80FD\u4F1A\u66F4\u597D"]
      }), "\u3002\u5B83\u901A\u8FC7\u521B\u5EFA\u4E00\u4E2A\u5168\u65B0\u7684\u76F8\u53CD\u7684\u63D0\u4EA4\u6765\u64A4\u9500\u5148\u524D\u63D0\u4EA4\u6240\u505A\u7684\u66F4\u6539\uFF0C\u6240\u6709\u8FD9\u4E9B\u90FD\u4E0D\u4F1A\u6539\u53D8\u539F\u6709\u7684", createVNode(_components.code, {
        children: "commit\u8BB0\u5F55"
      }), "\u3002"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        src: __1_______assets_git_revert_png__,
        alt: "git revert"
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
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " revert"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " B"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "commit"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " i"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "d"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["\u4ECE\u56FE\u4E2D\u6211\u4EEC\u770B\u5230\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u5E76\u4E0D\u4F1A\u56DE\u9000", createVNode(_components.code, {
        children: "HEAD"
      }), "\uFF0C\u53EA\u662F\u5728\u539F\u6709\u7684\u57FA\u7840\u4E0A\u6DFB\u52A0\u4E00\u6761", createVNode(_components.code, {
        children: "commit\u8BB0\u5F55"
      }), "\u3002\u8FD9\u6761", createVNode(_components.code, {
        children: "commit\u8BB0\u5F55"
      }), "\u4E0E\u9700\u8981\u56DE\u9000\u7684\u8BB0\u5F55\u4FDD\u6301\u76F8\u53CD\u7684\u64CD\u4F5C\uFF0C\u5DF2\u8FBE\u5230\u884C\u4E3A\u4E0A\u7684\u56DE\u64A4\u6548\u679C\u3002"]
    }), "\n", createVNode(_components.h2, {
      id: "\u7ED3\u8BBA",
      children: "\u7ED3\u8BBA"
    }), "\n", createVNode(_components.p, {
      children: "\u597D\u4E86\uFF0C\u4E24\u79CD\u56DE\u9000\u7684\u65B9\u5F0F\u6211\u4EEC\u90FD\u7B80\u5355\u4ECB\u7ECD\u8FC7\u4E86\uFF0C\u76F8\u4FE1\u5927\u5BB6\u4E5F\u5DF2\u7ECF\u57FA\u672C\u638C\u63E1\u4E86\u5427\u3002\u6211\u8BA4\u4E3A\uFF0C\u53EA\u8981\u638C\u63E1\u8FD9\u4E24\u6761\u57FA\u672C\u51C6\u5219\uFF0C\u6211\u4EEC\u5C31\u80FD\u5728\u56DE\u9000\u65F6\u5C3D\u6700\u5927\u53EF\u80FD\u4FDD\u8BC1\u4FDD\u8BC1\u5176\u4ED6\u5408\u4F5C\u8005\u3002"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\u5982\u679C\u9700\u8981\u56DE\u9000\u7684", createVNode(_components.code, {
          children: "commit\u8BB0\u5F55"
        }), "\u6CA1\u6709\u540C\u6B65\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u4F7F\u7528", createVNode(_components.code, {
          children: "git reset"
        }), "\u64CD\u4F5C\u3002"]
      }), "\n", createVNode(_components.li, {
        children: ["\u5982\u679C\u9700\u8981\u56DE\u9000\u7684", createVNode(_components.code, {
          children: "commit\u8BB0\u5F55"
        }), "\u5DF2\u540C\u6B65\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u4F7F\u7528", createVNode(_components.code, {
          children: "git revert"
        }), "\u64CD\u4F5C\u3002"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["\u6211\u8FD9\u91CC\u53EA\u5BF9", createVNode(_components.code, {
        children: "git reset"
      }), "\u548C", createVNode(_components.code, {
        children: "git revert"
      }), "\u505A\u6211\u4EEC\u76F8\u5BF9\u5E38\u7528\u7684\u4ECB\u7ECD\uFF0C\u4ECD\u7136\u63A8\u8350\u5927\u5BB6\u5230", createVNode(_components.a, {
        href: "https://git-scm.com/book/en/v2",
        children: "\u5B98\u7F51"
      }), "\u63A5\u53D7\u6700\u65B0\u7684\u8D44\u6599\u5B66\u4E60\u3002"]
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
const url = "src/content/blog/Git%E4%B8%ADreset%E5%92%8Crevert%E7%9A%84%E5%8C%BA%E5%88%AB.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/blog/Git中reset和revert的区别.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/blog/Git中reset和revert的区别.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
