import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';

const frontmatter = {
  "title": "你需要知道的Git提交规范",
  "description": "",
  "pubDate": "Tue Dec 03 2019 02:38:05 GMT+0800",
  "heroImage": ""
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "为什么我们需要规范",
    "text": "为什么我们需要规范"
  }, {
    "depth": 2,
    "slug": "git-提交规范",
    "text": "Git 提交规范"
  }, {
    "depth": 3,
    "slug": "规范类型",
    "text": "规范类型"
  }, {
    "depth": 4,
    "slug": "type",
    "text": "type"
  }, {
    "depth": 4,
    "slug": "scope",
    "text": "scope"
  }, {
    "depth": 4,
    "slug": "subject",
    "text": "subject"
  }, {
    "depth": 4,
    "slug": "body",
    "text": "body"
  }, {
    "depth": 4,
    "slug": "footer",
    "text": "footer"
  }, {
    "depth": 3,
    "slug": "提交格式要求",
    "text": "提交格式要求"
  }, {
    "depth": 2,
    "slug": "如何统一团队的提交规范",
    "text": "如何统一团队的提交规范"
  }, {
    "depth": 2,
    "slug": "结论",
    "text": "结论"
  }, {
    "depth": 2,
    "slug": "参考",
    "text": "参考"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "我们应该对Git不太陌生，它是目前最火的分布式版本管理工具。那你知道怎样编写提交信息才能帮助我们更好地管理Git记录吗？今天，我们就来讲讲如何编写提交信息。"
    }), "\n", createVNode(_components.h2, {
      id: "为什么我们需要规范",
      children: "为什么我们需要规范"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "古语有云：“没有规矩，不成方圆”。"
      }), " 这句话不仅适用于工作生活中的方方面面，同样适用于我们的编程开发。一套标准的规范不仅能帮助我们形成良好的开发习惯，还能减少开发中犯错的几率，甚至可以基于这套规范创造更多的价值（比如：生成", createVNode(_components.code, {
        children: "CHANGELOG.md"
      }), "）。就说Git提交规范，一套良好的提交规范可以使我们在查看提交信息时不那么茫然；尤其在回滚操作时，我们能更清楚了解到我们回滚可能造成的影响。"]
    }), "\n", createVNode(_components.h2, {
      id: "git-提交规范",
      children: "Git 提交规范"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "text",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "<type>(<scope>): <subject>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "<-- BLANK LINE -->"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "<body>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "<-- BLANK LINK -->"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "<footer>"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "<type>(<scope>):"
      }), "与", createVNode(_components.code, {
        children: "<subject>"
      }), "之间需要加一个空格。"]
    }), "\n", createVNode(_components.h3, {
      id: "规范类型",
      children: "规范类型"
    }), "\n", createVNode(_components.h4, {
      id: "type",
      children: "type"
    }), "\n", createVNode(_components.p, {
      children: "用于说明提交的类型，所有的提交类型如下："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "feat"
        }), ": 新增feature"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "fix"
        }), ": 修复bug"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "docs"
        }), ": 仅仅修改了文档，比如", createVNode(_components.code, {
          children: "README.md"
        }), "、", createVNode(_components.code, {
          children: "CHANGELOG.md"
        }), "等"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "style"
        }), ": 仅仅修改了代码风格，不影响代码逻辑与功能"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "refactor"
        }), ": 代码重构（即不是新增功能，也不是修改bug的代码变动）"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "perf"
        }), ": 优化相关，比如提升了项目的性能、体验"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "test"
        }), ": 测试用例（单元测试、e2e测试、集成测试）"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "chore"
        }), ": 改变构建流程、增加或者删除依赖库、工具等"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "revert"
        }), ": 回滚到上一个版本"]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "scope",
      children: "scope"
    }), "\n", createVNode(_components.p, {
      children: "用于说明提交影响的范围，可以是具体的某个模块。"
    }), "\n", createVNode(_components.h4, {
      id: "subject",
      children: "subject"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "对提交的简单描述，不超过50个字符"
      }), "\n", createVNode(_components.li, {
        children: "结尾不加标点符号"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "body",
      children: "body"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "对提交的详细描述，建议在72个字以内"
      }), "\n", createVNode(_components.li, {
        children: "表明这个变更的目的、细节以及是否存在副作用或者风险"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "footer",
      children: "footer"
    }), "\n", createVNode(_components.p, {
      children: "添加链接到具体的issue地址或者文档地址，或者关闭某个issue。"
    }), "\n", createVNode(_components.h3, {
      id: "提交格式要求",
      children: "提交格式要求"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "text",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "# 标题行：50个字符以内，描述主要变更内容"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "#"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "# 主体内容：更详细的说明文本，建议72个字符以内。 需要描述的信息包括:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "#"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "# * 为什么这个变更是必须的? 它可能是用来修复一个bug，增加一个feature，提升性能、可靠性、稳定性等等"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "# * 他如何解决这个问题? 具体描述解决问题的步骤"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "# * 是否存在副作用、风险?"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "#"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "# 尾部：如果需要的话可以添加一个链接到issue地址或者其它文档，或者关闭某个issue。"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "如何统一团队的提交规范",
      children: "如何统一团队的提交规范"
    }), "\n", createVNode(_components.p, {
      children: "规范很好，但是团队成员是否执行，执行的效果如何仍然是个问题。而为了检查团队成员的执行情况，花大量的时间、人力去监督明显是不合算的。所以，我们需要一套完整的工具去帮助我们团队成员执行这套规范。下面我先列举下我们需要的工具："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "@commitlint/cli"
      }), "\n", createVNode(_components.li, {
        children: "@commitlint/config-conventional"
      }), "\n", createVNode(_components.li, {
        children: "husky"
      }), "\n", createVNode(_components.li, {
        children: "commitizen"
      }), "\n", createVNode(_components.li, {
        children: "conventional-changelog"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["大致上，我们就需要这五个工具配合使用，来达到效果。首先介绍前三个工具 ", createVNode(_components.strong, {
        children: "@commitlint/cli"
      }), "、", createVNode(_components.strong, {
        children: "@commitlint/config-conventional"
      }), "、", createVNode(_components.strong, {
        children: "husky"
      }), "。"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "@commitlint/cli"
      }), "、", createVNode(_components.strong, {
        children: "@commitlint/config-conventional"
      }), "是用来检查", createVNode(_components.code, {
        children: "git commit"
      }), "的提交是否符合规范的。", createVNode(_components.strong, {
        children: "husky"
      }), "是一个向Git仓库中注册钩子函数的工具。可以帮我们在提交信息时自动检查规范。使用很简单，只需要在我们的", createVNode(_components.code, {
        children: "package.json"
      }), "中添加下面的配置即可。"]
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
              color: "#6A737D"
            },
            children: "// package.json"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#FDAEB7",
              fontStyle: "italic"
            },
            children: "  ..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  \"husky\""
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
            children: "    \"hooks\""
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
            children: "      \"commit-msg\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"commitlint -E HUSKY_GIT_PARAMS\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    }"
          })
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
              color: "#FDAEB7",
              fontStyle: "italic"
            },
            children: "  ..."
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
      children: ["这样我们就能保证我们的开发人员能遵守Git提交规范了。怎么样？很简单吧！但是仅仅能检查规范还不够，由于开发人员还未适应这样的代码提交规范，使用过程中往往会花很多时间在上面，那么我们就应该帮助开发人员适应这套规范。好了，", createVNode(_components.strong, {
        children: "commitizen"
      }), "就此登场了。", createVNode(_components.strong, {
        children: "commitizen"
      }), "是一个帮助遵照提交规范生成Git提交信息的工具。使用也非常简单，只需要在全局安装", createVNode(_components.code, {
        children: "npm i commitizen -g"
      }), "就可以了。提交代码时，我们将", createVNode(_components.code, {
        children: "git commit"
      }), "换成", createVNode(_components.code, {
        children: "git cz"
      }), "，它会一步一步指导我们生成规范的提交。"]
    }), "\n", createVNode(_components.p, {
      children: ["就此其实也已经差不多了。不过我还想扩展下，也许我们在上线后，想要一份本次项目的更改信息，我们可以添加", createVNode(_components.strong, {
        children: "conventional-changelog"
      }), "，这个工具将帮助我们生成一份当前版本的", createVNode(_components.code, {
        children: "CHANGELOG"
      }), "。我们可以在", createVNode(_components.code, {
        children: "scripts"
      }), "中添加任务，帮助我们生成", createVNode(_components.code, {
        children: "CHANGELOG"
      }), "。"]
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
              color: "#6A737D"
            },
            children: "// package.json"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#FDAEB7",
              fontStyle: "italic"
            },
            children: "  ..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  \"scripts\""
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
            children: "    \"version\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"conventional-changelog -p angular -i CHANGELOG.md -s && git add CHANGELOG.md”"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "  },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "  ..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["这样配置之后，我们就可以在执行", createVNode(_components.code, {
        children: "npm run version"
      }), "时，自动生成", createVNode(_components.code, {
        children: "CHANGELOG"
      }), "了。"]
    }), "\n", createVNode(_components.h2, {
      id: "结论",
      children: "结论"
    }), "\n", createVNode(_components.p, {
      children: "Git提交规范本身不会对项目开发有任何的影响。但是，如果你是项目维护者，当项目出现问题需要回滚时，看着这一堆堆提交混乱的信息，你不觉得很头疼吗？当你回滚时，你能很放心地说‘这次回滚不会有问题，因为我了解回滚掉的所有改动！’吗？打江山难，守江山更难。维护是一件非常头疼却十分重要的事。如何起好一个开头对项目后期的维护至关重要。讲到这里，Git提交规范也基本已经讲解完了。如果你觉得很棒，赶快推荐给你们的团队吧！"
    }), "\n", createVNode(_components.h2, {
      id: "参考",
      children: "参考"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://learnku.com/articles/25456?order_by=vote_count&",
          children: "你可能忽略的Git提交规范"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://my.oschina.net/qcloudcommunity/blog/870743",
          children: "Git commit message和工作流规范"
        })
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

const url = "src/content/blog/%E4%BD%A0%E9%9C%80%E8%A6%81%E7%9F%A5%E9%81%93%E7%9A%84Git%E6%8F%90%E4%BA%A4%E8%A7%84%E8%8C%83.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/blog/你需要知道的Git提交规范.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/blog/你需要知道的Git提交规范.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
