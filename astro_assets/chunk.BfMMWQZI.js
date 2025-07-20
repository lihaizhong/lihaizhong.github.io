import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';

const frontmatter = {
  "title": "什么是 ESLint？它的作用是什么？如何在项目中配置 ESLint",
  "category": "工程化与工具",
  "pubDate": "Tue, 15 Jul 2025 02:38:35 +0800",
  "heroImage": "",
  "draft": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "核心作用",
    "text": "核心作用"
  }, {
    "depth": 2,
    "slug": "项目中配置-eslint-的步骤以-vuereact-项目为例",
    "text": "项目中配置 ESLint 的步骤（以 Vue/React 项目为例）"
  }, {
    "depth": 3,
    "slug": "1-安装依赖",
    "text": "1. 安装依赖"
  }, {
    "depth": 3,
    "slug": "2-初始化配置文件",
    "text": "2. 初始化配置文件"
  }, {
    "depth": 3,
    "slug": "3-添加忽略文件可选",
    "text": "3. 添加忽略文件（可选）"
  }, {
    "depth": 3,
    "slug": "4-配置脚本命令",
    "text": "4. 配置脚本命令"
  }, {
    "depth": 3,
    "slug": "5-集成开发工具",
    "text": "5. 集成开发工具"
  }, {
    "depth": 3,
    "slug": "6-结合-git-hooks",
    "text": "6. 结合 Git Hooks"
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
    children: [createVNode(_components.p, {
      children: "ESLint是一个开源的 JavaScript 代码检查工具，它通过预设的规则或自定义规则分析代码，识别并报告不符合规则的语法、风格或潜在错误，帮助开发者写出更规范、更健壮的代码。"
    }), "\n", createVNode(_components.h2, {
      id: "核心作用",
      children: "核心作用"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "统一代码风格"
        }), "：确保团队成员遵循一致的编码规范（如缩进、命名规则、引号类型等），减少因风格差异导致的协作成本。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "提前发现错误"
        }), "：检测语法错误（如未声明的变量、函数参数不匹配）、逻辑隐患（如死循环、未使用的变量），在代码运行前规避问题。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "提升代码质量"
        }), "：约束不良编程习惯（如全局变量滥用、回调地狱），促进写出可维护、高性能的代码。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "集成自动化流程"
        }), "：可与 Git Hooks（如提交代码前）、CI/CD流程结合，阻止不符合规范的代码提交或部署。"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "项目中配置-eslint-的步骤以-vuereact-项目为例",
      children: "项目中配置 ESLint 的步骤（以 Vue/React 项目为例）"
    }), "\n", createVNode(_components.h3, {
      id: "1-安装依赖",
      children: "1. 安装依赖"
    }), "\n", createVNode(_components.p, {
      children: "首先在项目中安装 ESLint 及相关插件（根据项目类型选择）："
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
            children: "# 基础安装"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " eslint"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -C"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# React 项目需额外安装"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " eslint-plugin-react"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " eslint-plugin-react-hooks"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -D"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# Vue 项目需额外安装（配合 Vue 3）"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " eslint-plugin-vue"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " @vue/eslint-config-prettier"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -D"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# TypeScript 项目需额外安装"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " @typescript-eslint/parser"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " @typescript-eslint/eslint-plugin"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -D"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "2-初始化配置文件",
      children: "2. 初始化配置文件"
    }), "\n", createVNode(_components.p, {
      children: ["执行以下命令生成配置文件（", createVNode(_components.code, {
        children: ".eslintrc.js"
      }), " 或 ", createVNode(_components.code, {
        children: ".eslintrc.json"
      }), "），根据提示选择项目类型、模块系统、框架等："]
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
            children: "npx"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " eslint"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --init"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "配置文件核心内容包括："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "parser"
        }), "：指定解析器（如 ", createVNode(_components.code, {
          children: "@typescript-eslint/parser"
        }), " 用于 TS）。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "extends"
        }), "：继承预设规则集（如 ", createVNode(_components.code, {
          children: "eslint:recommended"
        }), "、 ", createVNode(_components.code, {
          children: "plugin:react/recommended"
        }), "）。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "plugins"
        }), "：引入插件（如 ", createVNode(_components.code, {
          children: "react"
        }), "、", createVNode(_components.code, {
          children: "vue"
        }), "）。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "rules"
        }), "：自定义规则（值为 ", createVNode(_components.code, {
          children: "off"
        }), " 禁用、", createVNode(_components.code, {
          children: "error"
        }), " 报错、", createVNode(_components.code, {
          children: "warn"
        }), " 警告）"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["示例（Vue项目的 ", createVNode(_components.code, {
        children: ".eslintrc.js"
      }), "）："]
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
              color: "#79B8FF"
            },
            children: "module"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "exports"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
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
              color: "#E1E4E8"
            },
            children: "  env: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    browser: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "true"
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
              color: "#E1E4E8"
            },
            children: "    es2021: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "true"
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
              color: "#E1E4E8"
            },
            children: "  },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  extends: ["
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    \"eslint:recommended\""
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
            children: "    \"plugin:vue/vue3-essential\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Vue 3核心规则"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    \"prettier\""
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " // 与Prettier兼容（需配合eslint-config-prettier）"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  ],"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  parserOptions: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ecmaVersion: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"latest\""
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
              color: "#E1E4E8"
            },
            children: "    sourceType: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"module\""
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
              color: "#E1E4E8"
            },
            children: "  },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  plugins: ["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"vue\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  rules: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    \"no-console\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"warn\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 警告使用console"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    \"vue/multi-word-component-names\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"off\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 关闭Vue组件名必须多单词的规则"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    \"indent\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": ["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"error\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "], "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 强制2空格缩进"
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
              color: "#E1E4E8"
            },
            children: "};"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "3-添加忽略文件可选",
      children: "3. 添加忽略文件（可选）"
    }), "\n", createVNode(_components.p, {
      children: ["创建 ", createVNode(_components.code, {
        children: ".eslintignore"
      }), " 文件，指定无需检查的文件/目录（如 ", createVNode(_components.code, {
        children: "node_modules"
      }), "、打包后的 ", createVNode(_components.code, {
        children: "dist"
      }), " 文件夹）"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "node_modules/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "dist/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "*.min.js"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "4-配置脚本命令",
      children: "4. 配置脚本命令"
    }), "\n", createVNode(_components.p, {
      children: ["在 ", createVNode(_components.code, {
        children: "package.json"
      }), " 中添加脚本，方便手动执行检查或修复："]
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
            children: "    \"lint\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"eslint .\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 检查所有文件"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    \"lint:fix\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"eslint . --fix\""
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " // 自动修复可修复的错误"
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
    }), "\n", createVNode(_components.h3, {
      id: "5-集成开发工具",
      children: "5. 集成开发工具"
    }), "\n", createVNode(_components.p, {
      children: ["在 VS Code 中安装 ", createVNode(_components.code, {
        children: "ESLint"
      }), " 插件，开启自动修复（", createVNode(_components.code, {
        children: "settings.json"
      }), "）"]
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
            children: "  \"editor.codeActionsOnSave\""
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
            children: "    \"source.fixAll.eslint\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "true"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " // 保存时自动修复 ESLint 问题"
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
    }), "\n", createVNode(_components.h3, {
      id: "6-结合-git-hooks",
      children: "6. 结合 Git Hooks"
    }), "\n", createVNode(_components.p, {
      children: ["通过 ", createVNode(_components.code, {
        children: "husky"
      }), " 在代码提交前自动执行 ESLint 检查，阻止不规范代码提交："]
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
            children: "# 安装 husky"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " husky"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -D"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 初始化 husky"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "npx"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " husky"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 添加 pre-commit 钩子"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "npx"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " husky"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " add"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " .husky/pre-commit"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \"npx lint-staged\""
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["再配置 ", createVNode(_components.code, {
        children: "lint-staged"
      }), "（仅检查暂存区文件）"]
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
            children: "  \"lint-staged\""
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
            children: "    \"*.{js,jsx,vue,ts,tsx}\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"eslint --fix\""
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
      children: "通过以上配置，ESLint可在开发、提交、部署全流程中发挥作用，从源头保障代码质量和团队协作效率。实际使用中，可根据项目需求灵活调整规则，平衡规范严格性与开发效率。"
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

const url = "src/content/interview/%E4%BB%80%E4%B9%88%E6%98%AF%20ESLint%EF%BC%9F%E5%AE%83%E7%9A%84%E4%BD%9C%E7%94%A8%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F%E5%A6%82%E4%BD%95%E5%9C%A8%E9%A1%B9%E7%9B%AE%E4%B8%AD%E9%85%8D%E7%BD%AE%20ESLint.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/什么是 ESLint？它的作用是什么？如何在项目中配置 ESLint.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/什么是 ESLint？它的作用是什么？如何在项目中配置 ESLint.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
