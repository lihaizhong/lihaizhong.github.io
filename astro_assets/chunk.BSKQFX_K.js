import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';
import { $ as $$Image } from './chunk.BFavZmP-.js';

const __0_______assets_images_WX20191111_103947_png__ = new Proxy({"src":"/astro_assets/asset.CryWNhWT.png","width":696,"height":79,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/assets/images/WX20191111-103947.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/assets/images/WX20191111-103947.png");
							return target[name];
						}
					});

const __1_______assets_images_WX20191111_005253_png__ = new Proxy({"src":"/astro_assets/asset.4TmobYAl.png","width":1069,"height":133,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/assets/images/WX20191111-005253.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/assets/images/WX20191111-005253.png");
							return target[name];
						}
					});

const __2_______assets_images_WX20191111_112230_png__ = new Proxy({"src":"/astro_assets/asset.G5yXZmL7.png","width":720,"height":115,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/assets/images/WX20191111-112230.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/assets/images/WX20191111-112230.png");
							return target[name];
						}
					});

const frontmatter = {
  "title": "发布属于你的NPM包",
  "description": "",
  "pubDate": "Sun Nov 10 2019 12:12:56 GMT+0800",
  "heroImage": ""
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "npm发布流程",
    "text": "npm发布流程"
  }, {
    "depth": 3,
    "slug": "npm-login",
    "text": "npm login"
  }, {
    "depth": 3,
    "slug": "npm-version",
    "text": "npm version"
  }, {
    "depth": 3,
    "slug": "npm-publish",
    "text": "npm publish"
  }, {
    "depth": 2,
    "slug": "其他事项",
    "text": "其他事项"
  }, {
    "depth": 3,
    "slug": "登录失败问题",
    "text": "登录失败问题"
  }, {
    "depth": 3,
    "slug": "团队开发",
    "text": "团队开发"
  }, {
    "depth": 3,
    "slug": "指定发布地址",
    "text": "指定发布地址"
  }, {
    "depth": 3,
    "slug": "指定发布的内容",
    "text": "指定发布的内容"
  }, {
    "depth": 4,
    "slug": "无法通过配置排除的文件",
    "text": "无法通过配置排除的文件"
  }, {
    "depth": 4,
    "slug": "无法通过配置包含的文件",
    "text": "无法通过配置包含的文件"
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
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
      children: "有没有尝试过向npm库中发布自己的包呢？今天我们就来讲讲npm的发布流程。"
    }), "\n", createVNode(_components.h2, {
      id: "npm发布流程",
      children: "npm发布流程"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "开发完成你的代码，并提交到git仓库中。"
      }), "\n", createVNode(_components.li, {
        children: ["执行", createVNode(_components.code, {
          children: "npm login"
        }), "，登录你的npm账号。"]
      }), "\n", createVNode(_components.li, {
        children: ["执行", createVNode(_components.code, {
          children: "npm version <version tag>"
        }), "，修改版本号。"]
      }), "\n", createVNode(_components.li, {
        children: ["执行", createVNode(_components.code, {
          children: "npm publish"
        }), "，等待自动执行发布操作。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "这就是一套非常简单的npm包发布流程。这个流程非常简单，但是这样说可能并不能满足您的需要，下面我们就来详细讲解下一些细节部分。"
    }), "\n", createVNode(_components.p, {
      children: "在这里，我就不讲解第一步了，我想使用过版本管理软件（git）的用户应该都会使用它。"
    }), "\n", createVNode(_components.h3, {
      id: "npm-login",
      children: "npm login"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        alt: "npm login --help",
        src: __0_______assets_images_WX20191111_103947_png__
      })
    }), "\n", createVNode(_components.p, {
      children: ["从上图可知，", createVNode(_components.code, {
        children: "login"
      }), "、", createVNode(_components.code, {
        children: "adduser"
      }), "和", createVNode(_components.code, {
        children: "add-user"
      }), "是同一个指令。", createVNode(_components.code, {
        children: "npm login"
      }), "可以创建或者验证", createVNode(_components.code, {
        children: "<username>"
      }), "在指定注册表命名的用户，然后将凭据保存到 ", createVNode(_components.strong, {
        children: ".npmrc"
      }), " 文件中。使用指令", createVNode(_components.code, {
        children: "npm whoami"
      }), "可以或者当前登录用户的", createVNode(_components.code, {
        children: "<username>"
      }), "。"]
    }), "\n", createVNode(_components.p, {
      children: "当然，如果您之前已经登录过了可以忽略这一步，并不是每次发布都必须执行一次登录操作的。"
    }), "\n", createVNode(_components.h3, {
      id: "npm-version",
      children: "npm version"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        alt: "npm version --help",
        src: __1_______assets_images_WX20191111_005253_png__
      })
    }), "\n", createVNode(_components.p, {
      children: ["通过执行", createVNode(_components.code, {
        children: "npm version --help"
      }), "我们可以看到，我们可以使用", createVNode(_components.code, {
        children: "major"
      }), "、", createVNode(_components.code, {
        children: "minor"
      }), "、", createVNode(_components.code, {
        children: "patch"
      }), "、", createVNode(_components.code, {
        children: "premarjor"
      }), "、", createVNode(_components.code, {
        children: "preminor"
      }), "、", createVNode(_components.code, {
        children: "prepatch"
      }), "、", createVNode(_components.code, {
        children: "prerealease [--preid=<prerelease-id>]"
      }), "、", createVNode(_components.code, {
        children: "from-git"
      }), "和自定义的版本号来定义版本号。"]
    }), "\n", createVNode(_components.p, {
      children: ["其中，", createVNode(_components.code, {
        children: "major"
      }), "、", createVNode(_components.code, {
        children: "minor"
      }), "、", createVNode(_components.code, {
        children: "patch"
      }), "主要用于", createVNode(_components.strong, {
        children: "正式版本"
      }), "使用；", createVNode(_components.code, {
        children: "premarjor"
      }), "、", createVNode(_components.code, {
        children: "preminor"
      }), "、", createVNode(_components.code, {
        children: "prepatch"
      }), "、", createVNode(_components.code, {
        children: "prerealease [--preid=<prerelease-id>]"
      }), "主要用于", createVNode(_components.strong, {
        children: "预发布版本"
      }), "使用；", createVNode(_components.code, {
        children: "from-git"
      }), "和自定义版本一般不会使用（说实话，", createVNode(_components.code, {
        children: "from-git"
      }), "我从来没有使用过，也不清楚具体怎么使用，哈哈）。"]
    }), "\n", createVNode(_components.p, {
      children: ["具体的版本规则我一再上一篇文章中详细讲解过了。如果还不清楚，请查看", createVNode(_components.a, {
        href: ".../../assets/images/1571711706800/README.md",
        children: "语义化版本控制"
      }), "。今天我们主要来讲讲", createVNode(_components.code, {
        children: "prerealease [--preid=<prerelease-id>]"
      }), "的使用。"]
    }), "\n", createVNode(_components.p, {
      children: "一般来说，我们发布正式版本都是使用标准的语义化版本格式（X.Y.Z）。但是很多时候，由于我们需要做大的升级，测试可能无法完全覆盖到所有的问题（尤其是使用环境当中产生的问题）或者有些API可能会有改动，我们会先发布一个预发布版本，通过公测的手段收集用户在使用中遇到的问题，然后加以修改。预发布版本的好处是"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "我们不会影响已有应用的正常使用。"
      }), "\n", createVNode(_components.li, {
        children: "我们可以通过公测的手段保证新版本的稳定性，修复各种环境中产生的bug。"
      }), "\n", createVNode(_components.li, {
        children: "我们可以使用户提前熟悉新版本。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["我们可以执行指令", createVNode(_components.code, {
        children: "npm version prerelease"
      }), "来发布新的预发版本。执行完后，我们可以看到版本号变成了", createVNode(_components.code, {
        children: "X.Y.Z-N"
      }), "的形式，这就是最简单的预发布版本的格式。当然我们可以给它添加一个", createVNode(_components.code, {
        children: "preid"
      }), "，执行指令", createVNode(_components.code, {
        children: "npm version prerelease --preid=alpha"
      }), "，这时候我们看到版本号变成", createVNode(_components.code, {
        children: "X.Y.Z-alpha.N"
      }), "的形式了。"]
    }), "\n", createVNode(_components.h3, {
      id: "npm-publish",
      children: "npm publish"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        alt: "npm publish --help",
        src: __2_______assets_images_WX20191111_112230_png__
      })
    }), "\n", createVNode(_components.p, {
      children: ["下面讲讲我们本文的最重点", createVNode(_components.code, {
        children: "npm publish"
      }), "。", createVNode(_components.code, {
        children: "npm publish"
      }), "会自动执行发布操作，从图上可知，默认", createVNode(_components.code, {
        children: "publish"
      }), "会被打上", createVNode(_components.code, {
        children: "latest"
      }), "标签。如果您想发布预发布版本，可以自定义标签。比如，如果你想发布", createVNode(_components.code, {
        children: "next"
      }), "版本的包，可以执行", createVNode(_components.code, {
        children: "npm publish --tag next"
      }), "。当然如果您失误将预发布包的标签打成了", createVNode(_components.code, {
        children: "latest"
      }), "也是可以挽救的，您可以执行", createVNode(_components.code, {
        children: "npm dist-tag add <pkg>@<version> [<tag>]"
      }), "来修改标签。"]
    }), "\n", createVNode(_components.h2, {
      id: "其他事项",
      children: "其他事项"
    }), "\n", createVNode(_components.p, {
      children: "好了，发布的操作就是这么简单。下面我们来讲讲发布过程中可能遇到的问题，或者我觉得可以优化的点。"
    }), "\n", createVNode(_components.h3, {
      id: "登录失败问题",
      children: "登录失败问题"
    }), "\n", createVNode(_components.p, {
      children: ["有些时候，您可能已经输入了正确的账号、密码以及邮箱，但是返回的结果仍然是登录失败。这种情况有可能是因为您的registry地址有问题。在国内，由于访问速度的原因，我们往往会将库源设置为", createVNode(_components.strong, {
        children: "淘宝镜像"
      }), "，这时候我们有三种方式解决这类问题。"]
    }), "\n", createVNode(_components.p, {
      children: ["第一种，我们可以通过指令", createVNode(_components.code, {
        children: "npm login --registry=https://registry.npmjs.org"
      }), "的方式指定我们登录的地址。"]
    }), "\n", createVNode(_components.p, {
      children: ["第二种，我们可以通过指令", createVNode(_components.code, {
        children: "npm config set registry https://registry.npmjs.org"
      }), "的方式全局切换到npm源地址然后在执行", createVNode(_components.code, {
        children: "npm login"
      }), "。"]
    }), "\n", createVNode(_components.p, {
      children: ["第三种，我们可以通过指令", createVNode(_components.code, {
        children: "npm config delete registry"
      }), "的方式删除用户配置的", createVNode(_components.code, {
        children: "registry"
      }), "，然后在执行", createVNode(_components.code, {
        children: "npm login"
      }), "。"]
    }), "\n", createVNode(_components.h3, {
      id: "团队开发",
      children: "团队开发"
    }), "\n", createVNode(_components.p, {
      children: ["也许您发布的是一个类似", createVNode(_components.code, {
        children: "express"
      }), "这样的大型框架。由于这样的项目需要一个完整的团队共同开发，所以您可以通过指令", createVNode(_components.code, {
        children: "npm owner  <user> [<@scope>/]<pkg>"
      }), "来为这个包添加团队成员，保证团队中有多个人有权限发布项目。当然这样的方式并不安全，因为有高级权限的人越多，操作出问题的可能性就越大。所以我在这里非常推荐的方案是将发布权限集中在团队中较核心的一两个成员中，其他成员可以通过提交代码，待核心发布人员", createVNode(_components.code, {
        children: "code review"
      }), "代码之后，发布代码。"]
    }), "\n", createVNode(_components.h3, {
      id: "指定发布地址",
      children: "指定发布地址"
    }), "\n", createVNode(_components.p, {
      children: ["如果您经常在公司或者个人的npm库中发布项目，为了防止发布地址错误，您可以在", createVNode(_components.code, {
        children: "package.json"
      }), "中添加以下配置"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "json",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  \"publishConfig\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    \"registry\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"https://registry.npmjs.org\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  }"
          })
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
      children: "这样就不需要为平凡切换地址而烦恼了。"
    }), "\n", createVNode(_components.h3, {
      id: "指定发布的内容",
      children: "指定发布的内容"
    }), "\n", createVNode(_components.p, {
      children: "如果您的开发过程中，有一些测试内容或者个人的文件不想发布到npm库中去，有这几个方法可以帮到您"
    }), "\n", createVNode(_components.p, {
      children: ["方法一：在", createVNode(_components.code, {
        children: "package.json"
      }), "中指定发布的文件或者目录。"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "json",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  \"files\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": ["
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    \"src\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    \"README.md\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    \"src/**/*.js\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  ]"
          })
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
      children: ["方法二：在根目录下创建", createVNode(_components.code, {
        children: ".npmignore"
      }), "文件，它类似于", createVNode(_components.code, {
        children: ".gitignore"
      }), "文件。其实没有", createVNode(_components.code, {
        children: ".npmignore"
      }), "文件，npm会使用", createVNode(_components.code, {
        children: ".gitignore"
      }), "文件来取代它的功能。需要注意的是，", createVNode(_components.code, {
        children: ".npmignore"
      }), "不会覆盖", createVNode(_components.code, {
        children: "files"
      }), "字段。"]
    }), "\n", createVNode(_components.h4, {
      id: "无法通过配置排除的文件",
      children: "无法通过配置排除的文件"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "package.json"
      }), "\n", createVNode(_components.li, {
        children: "README.md"
      }), "\n", createVNode(_components.li, {
        children: "CHANGES/CHANGELOG/HISTORY"
      }), "\n", createVNode(_components.li, {
        children: "LICENSE/LICENCE"
      }), "\n", createVNode(_components.li, {
        children: "NOTICE"
      }), "\n", createVNode(_components.li, {
        children: "main字段中的文件"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "无法通过配置包含的文件",
      children: "无法通过配置包含的文件"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ".git"
      }), "\n", createVNode(_components.li, {
        children: "CVS"
      }), "\n", createVNode(_components.li, {
        children: ".svn"
      }), "\n", createVNode(_components.li, {
        children: ".DS_Store"
      }), "\n", createVNode(_components.li, {
        children: "._*"
      }), "\n", createVNode(_components.li, {
        children: "…"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "结论",
      children: "结论"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["使用", createVNode(_components.code, {
          children: "npm login"
        }), "可以登录npm账号。"]
      }), "\n", createVNode(_components.li, {
        children: ["可以通过", createVNode(_components.code, {
          children: "npm version prerealease [--preid=<prerelease-id>]"
        }), "来发布预发布版本。这个在使用者众多的包发布时非常重要，合理的使用可以展现出您在操作上的规范和发布时的谨慎。尤其是", createVNode(_components.code, {
          children: "--preid"
        }), "的使用，可以告诉用户您对当前版本的定义，一般的值为", createVNode(_components.code, {
          children: "next"
        }), "、", createVNode(_components.code, {
          children: "beta"
        }), "。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "npm publish"
        }), "可以设置标签。即使粗心设置错标签，您也可以通过", createVNode(_components.code, {
          children: "npm dist-tag add <pkg>@<version> [<tag>]"
        }), "修改标签。"]
      }), "\n", createVNode(_components.li, {
        children: "规范的发布流程可以保证您发布的包的健壮性和可维护性，也是使用者信任的保障。"
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

const url = "src/content/blog/%E5%8F%91%E5%B8%83%E5%B1%9E%E4%BA%8E%E4%BD%A0%E7%9A%84NPM%E5%8C%85.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/blog/发布属于你的NPM包.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/blog/发布属于你的NPM包.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
