import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';
import { $ as $$Image } from './chunk.BFavZmP-.js';

const __0_______assets_images_git_reset_png__ = new Proxy({"src":"/astro_assets/asset.DFfWSKoB.png","width":888,"height":658,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/assets/images/git-reset.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/assets/images/git-reset.png");
							return target[name];
						}
					});

const __1_______assets_images_git_revert_png__ = new Proxy({"src":"/astro_assets/asset.BHoVZKtL.png","width":706,"height":174,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/assets/images/git-revert.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/assets/images/git-revert.png");
							return target[name];
						}
					});

const frontmatter = {
  "title": "Git中reset和revert的区别",
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
    "slug": "结论",
    "text": "结论"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    "astro-image": "astro-image",
    blockquote: "blockquote",
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
      children: ["在现代程序开发过程中，我们常常使用", createVNode(_components.strong, {
        children: "Git"
      }), "作为我们的版本控制工具。", createVNode(_components.strong, {
        children: "Git"
      }), "的功能非常丰富，这里我就不做过多的介绍，只是介绍回退功能。在日常团队开发中，我们偶尔会遇到操作不当导致需要回退到特定版本的情况。这个时候，我们今天的主角就登场了————", createVNode(_components.code, {
        children: "git reset"
      }), "和", createVNode(_components.code, {
        children: "git revert"
      }), "。"]
    }), "\n", createVNode(_components.p, {
      children: ["首先，我们可以使用", createVNode(_components.code, {
        children: "git log --pretty=oneline --abbrev-commit"
      }), "来展示", createVNode(_components.code, {
        children: "commit记录"
      }), "信息。大概会长这样："]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
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
            children: " share页面，售后详情页跳转模式修改"
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
            children: "  share页面，会员卡页面跳转模式修改"
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
            children: " 渲染修复"
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
            children: " 组件"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " appId"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 获取改造，模版菜单特权卡0元商品领取流程修复"
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
            children: " 小程序appId获取修改"
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
      children: ["最先想到的应该是", createVNode(_components.code, {
        children: "git reset"
      }), "，这是", createVNode(_components.strong, {
        children: "Git"
      }), "很早就有的功能。它会将", createVNode(_components.code, {
        children: "HEAD"
      }), "指向指定的", createVNode(_components.code, {
        children: "commit记录"
      }), "，并遗弃在它之后的所有记录。"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        alt: "git reset",
        src: __0_______assets_images_git_reset_png__
      })
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 后面的commit内容存入工作区"
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
            children: "# 后面的commit内容直接丢弃"
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
            children: "# 后面的commit内容存入暂存区"
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
      children: ["从图中我们可以看到，这个过程会将", createVNode(_components.code, {
        children: "HEAD"
      }), "指针指向记录B的位置。后续的提交会紧跟着记录B进行，而记录C和记录D将被抛弃。"]
    }), "\n", createVNode(_components.p, {
      children: ["这里需要注意，", createVNode(_components.code, {
        children: "git reset"
      }), "有一些参数，不同的参数会有不同的影响，可以指定是否复原索引或工作树内容。"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "—mixed"
        }), "（默认）：", createVNode(_components.strong, {
          children: "重置索引，但不重置工作树"
        }), "。即HEAD指向指定的", createVNode(_components.code, {
          children: "commit记录"
        }), "，该", createVNode(_components.code, {
          children: "commit记录"
        }), "后面所有的更改被存入工作区。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "—hard"
        }), "：", createVNode(_components.strong, {
          children: "重置索引和工作树"
        }), "。即HEAD指向指定的commit记录，该", createVNode(_components.code, {
          children: "commit记录"
        }), "后面所有更改被全部丢弃。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "—soft"
        }), "：", createVNode(_components.strong, {
          children: "不重置索引和工作树，但重置HEAD位置"
        }), "。即HEAD指向指定的", createVNode(_components.code, {
          children: "commit记录"
        }), "，该", createVNode(_components.code, {
          children: "commit记录"
        }), "后面所有的更改被存入暂存区。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["另外还有 ", createVNode(_components.strong, {
        children: "—merge"
      }), " 和 ", createVNode(_components.strong, {
        children: "—keep"
      }), " 指令，这里不做过多介绍。如果想要了解更多，可以去", createVNode(_components.a, {
        href: "https://git-scm.com/docs/git-reset/zh_HANS-CN",
        children: "官网"
      }), "了解。"]
    }), "\n", createVNode(_components.p, {
      children: ["使用上面的命令就可以做到回退到某个", createVNode(_components.code, {
        children: "commit记录"
      }), "。注意因为回退会导致本地仓库的记录落后于远程仓库而无法同步，如需同步这次操作，必须", createVNode(_components.strong, {
        children: ["使用", createVNode(_components.code, {
          children: "git push --force"
        }), "强制推送"]
      }), "。"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: createVNode(_components.strong, {
          children: "注意"
        })
      }), "\n", createVNode(_components.p, {
        children: ["将", createVNode(_components.code, {
          children: "git reset"
        }), "与", createVNode(_components.code, {
          children: "--hard"
        }), "一起使用时要非常小心，因为它会重置你的提交、暂存区和你的工作树。如果为正确使用此选项，则最终可能会丢失所编写的代码。"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "git-revert",
      children: "git revert"
    }), "\n", createVNode(_components.p, {
      children: ["如果你已经将提交推送到远程仓库，则建议尽量不要使用", createVNode(_components.code, {
        children: "git reset"
      }), "，因为它会重建提交的历史记录。这会使与其他开发人员一起处理仓库并维护一致的提交历史变得非常困难。", createVNode(_components.strong, {
        children: ["这时候使用", createVNode(_components.code, {
          children: "git revert"
        }), "可能会更好"]
      }), "。它通过创建一个全新的相反的提交来撤销先前提交所做的更改，所有这些都不会改变原有的", createVNode(_components.code, {
        children: "commit记录"
      }), "。"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        alt: "git revert",
        src: __1_______assets_images_git_revert_png__
      })
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
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
      children: ["从图中我们看到，这个过程并不会回退", createVNode(_components.code, {
        children: "HEAD"
      }), "，只是在原有的基础上添加一条", createVNode(_components.code, {
        children: "commit记录"
      }), "。这条", createVNode(_components.code, {
        children: "commit记录"
      }), "与需要回退的记录保持相反的操作，已达到行为上的回撤效果。"]
    }), "\n", createVNode(_components.h2, {
      id: "结论",
      children: "结论"
    }), "\n", createVNode(_components.p, {
      children: "好了，两种回退的方式我们都简单介绍过了，相信大家也已经基本掌握了吧。我认为，只要掌握这两条基本准则，我们就能在回退时尽最大可能保证保证其他合作者。"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["如果需要回退的", createVNode(_components.code, {
          children: "commit记录"
        }), "没有同步远程仓库，使用", createVNode(_components.code, {
          children: "git reset"
        }), "操作。"]
      }), "\n", createVNode(_components.li, {
        children: ["如果需要回退的", createVNode(_components.code, {
          children: "commit记录"
        }), "已同步远程仓库，使用", createVNode(_components.code, {
          children: "git revert"
        }), "操作。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["我这里只对", createVNode(_components.code, {
        children: "git reset"
      }), "和", createVNode(_components.code, {
        children: "git revert"
      }), "做我们相对常用的介绍，仍然推荐大家到", createVNode(_components.a, {
        href: "https://git-scm.com/book/en/v2",
        children: "官网"
      }), "接受最新的资料学习。"]
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

const url = "src/content/blog/Git%E4%B8%ADreset%E5%92%8Crevert%E7%9A%84%E5%8C%BA%E5%88%AB.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/blog/Git中reset和revert的区别.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/blog/Git中reset和revert的区别.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
