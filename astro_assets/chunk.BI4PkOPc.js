import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';

const frontmatter = {
  "title": "Homebrew常用命令",
  "description": "Homebrew是Mac上强大的包管理器，它用于更加方便和直观的帮助我们管理Mac上的软件包以及相关的服务。",
  "pubDate": "2022-04-27T18:54:23.000Z",
  "heroImage": ""
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "安装软件包",
    "text": "安装软件包"
  }, {
    "depth": 2,
    "slug": "更新homebrew",
    "text": "更新Homebrew"
  }, {
    "depth": 2,
    "slug": "更新软件包formula",
    "text": "更新软件包(formula)"
  }, {
    "depth": 2,
    "slug": "清理旧版本软件包",
    "text": "清理旧版本软件包"
  }, {
    "depth": 2,
    "slug": "锁定不想更新的软件包",
    "text": "锁定不想更新的软件包"
  }, {
    "depth": 2,
    "slug": "查看软件包",
    "text": "查看软件包"
  }, {
    "depth": 2,
    "slug": "服务管理",
    "text": "服务管理"
  }, {
    "depth": 2,
    "slug": "查看homebrew的配置信息",
    "text": "查看Homebrew的配置信息"
  }, {
    "depth": 2,
    "slug": "诊断问题",
    "text": "诊断问题"
  }, {
    "depth": 2,
    "slug": "仓库管理",
    "text": "仓库管理"
  }, {
    "depth": 2,
    "slug": "homebrew可视化管理",
    "text": "Homebrew可视化管理"
  }, {
    "depth": 2,
    "slug": "homebrew-services-可视化管理",
    "text": "Homebrew services 可视化管理"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["今天，我们主要讲的是Homebrew中对我们日常工作特别有帮助的指令。如果您还想了解更多的Homebrew知识，欢迎您访问", createVNode(_components.a, {
        href: "https://docs.brew.sh/",
        children: "Homebrew文档官网"
      }), "查看更多命令。"]
    }), "\n", createVNode(_components.h2, {
      id: "安装软件包",
      children: "安装软件包"
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
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " $FORMULA"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "安装指定的包"
    }), "\n", createVNode(_components.h2, {
      id: "更新homebrew",
      children: "更新Homebrew"
    }), "\n", createVNode(_components.p, {
      children: ["要获取最新的包列表，首先得更新 Homebrew 自己。这可以用", createVNode(_components.code, {
        children: "brew update"
      }), "。"]
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
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " update"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# Updated 2 taps (homebrew/core and homebrew/cask)."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# ==> Updated Formulae"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# adios2               cpufetch             etcd                 libopenmpt           mitmproxy            pwntools             vnstat"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# athenacli            croaring             etcd-cpp-apiv3       libpipeline          mpi4py               pygments             wcslib"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# aws-sdk-cpp          cruft                flowgrind            liquidprompt         ns-3                 rtorrent             xmlrpc-c"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# cgif                 deno                 gnu-getopt           luarocks             oh-my-posh           staticcheck          xpdf"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# charm-tools          duplicity            harfbuzz             macvim               parallel             termius              zeek"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# ciphey               eccodes              hlint                magic-wormhole       phoronix-test-suite  theharvester"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# ==> Updated Casks"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# android-studio       calibre              gitfox               rambox               rectangle-pro        resolume-arena       tableau"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "更新软件包formula",
      children: "更新软件包(formula)"
    }), "\n", createVNode(_components.p, {
      children: ["要获取需要更新的软件包列表，可以使用", createVNode(_components.code, {
        children: "brew outdated"
      }), "。"]
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
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " outdated"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "更新需要更新的软件包"
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
            children: "# 更新所有的包"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " upgrade"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 更新指定的包"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " upgrade"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " $FORMULA"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "清理旧版本软件包",
      children: "清理旧版本软件包"
    }), "\n", createVNode(_components.p, {
      children: ["一般情况下，新版本安装了，旧版本就不需要了。我们可以使用", createVNode(_components.code, {
        children: "brew cleanup"
      }), "清除旧的软件包以及缓存文件。"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "PS：Homebrew只会清除比当前版本旧的软件包，所以不用担心没更新的包也被删了。"
      })
    }), "\n", createVNode(_components.h2, {
      id: "锁定不想更新的软件包",
      children: "锁定不想更新的软件包"
    }), "\n", createVNode(_components.p, {
      children: "Homebrew一次性更新包是一件非常方便的事。但是有时候我们会有一些包不想更新。比如我们在使用mongodb，数据库的跨版本更新需要同时更新数据，这样不利于我们方便的使用。"
    }), "\n", createVNode(_components.p, {
      children: ["这时候，我们可以使用", createVNode(_components.code, {
        children: "brew pin"
      }), "来锁定这个包。当Homebrew更新操作时，会忽略掉被锁定的包。"]
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
            children: "# 锁定指定包"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " pin"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " $FORMULA"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 取消锁定指定包"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " unpin"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " $FORMULA"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "查看软件包",
      children: "查看软件包"
    }), "\n", createVNode(_components.p, {
      children: ["如果我们想知道自己已经安装了哪些软件包，可以使用", createVNode(_components.code, {
        children: "brew list"
      }), "。"]
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
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " list"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["Homebrew可以通过命令查看包的相关信息，这些信息会在包安装完成后自动显示。如果后期还想查看，可以通过", createVNode(_components.code, {
        children: "brew info"
      }), "和", createVNode(_components.code, {
        children: "brew deps --installed --tree"
      }), "进行指定的查看。"]
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
            children: "# 显示指定包的信息"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " info"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " $FORMULA"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 显示安装包的数量，文件数量，和总占用空间"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " info"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["我们可以通过", createVNode(_components.code, {
        children: "brew deps"
      }), "查看包的依赖关系，当想删除指定包时，这非常有用。"]
    }), "\n", createVNode(_components.p, {
      children: ["比如，我想删除", createVNode(_components.code, {
        children: "node@14"
      }), "这个包，我使用", createVNode(_components.code, {
        children: "brew deps"
      }), "查看依赖关系，知晓我是否能安全删除", createVNode(_components.code, {
        children: "node@14"
      }), "这个包，最后发现我的", createVNode(_components.code, {
        children: "mongosh"
      }), "依赖它。"]
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
            children: "# 可以显示包的依赖关系，我常用它来查看已安装的包的依赖，然后判断哪些包是可以安全删除的。"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " deps"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 查看已安装的包的依赖，树形显示"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " deps"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --installed"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --tree"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# mongodb/brew/mongodb-community"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# ├── mongodb-database-tools"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# └── mongosh"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "#     └── node@14"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "#         ├── brotli"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "#         ├── c-ares"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "#         ├── icu4c"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "#         ├── libnghttp2"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "#         ├── libuv"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "#         ├── openssl@1.1"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "#         │   └── ca-certificates"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "#         └── macos-term-size"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# node"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# ├── brotli"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# ├── c-ares"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# ├── icu4c"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# ├── libnghttp2"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# ├── libuv"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# └── openssl@1.1"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "#     └── ca-certificates"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# node@14"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# ├── brotli"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# ├── c-ares"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# ├── icu4c"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# ├── libnghttp2"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# ├── libuv"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# ├── openssl@1.1"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# │   └── ca-certificates"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# └── macos-term-size"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["可以使用", createVNode(_components.code, {
        children: "brew search"
      }), "来搜索软件包，支持使用正则表达式进行复杂的搜索。例如，我们查询下静态博客生成工具hugo。"]
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
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " search"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " hugo"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# ==> Searching local taps..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# hugo ✔"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# ==> Searching taps on GitHub..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# ==> Searching blacklisted, migrated and deleted formulae..."
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "服务管理",
      children: "服务管理"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "brew services"
      }), "用于方便的管理brew安装的服务软件，类似于Linux下的service命令。"]
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# List all running services for the current user (or root)."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 获取当前用户（或者管理员）的所有服务列表"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " services"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " list"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# Name              Status User File"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# mongodb-community none        "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# php               none "
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# Run the service formula without registering to launch at login (or boot)."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 运行指定的服务软件并且不注册到登录时启动。"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " services"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " run"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " $FORMULA"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 运行所有服务软件并且不注册到登录时启动。"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " services"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " run"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --all"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# Start the service formula immediately and register it to launch at login (or boot)."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 运行指定的服务软件并且注册到登录时启动。"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " services"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " start"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " $FORMULA"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 运行指定的服务软件并且注册到登录时启动。"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " services"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " start"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --all"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# Stop the service formula immediately and unregister it from launching at login (or boot)."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 停止运行指定的服务并且注销登录时启动。"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " services"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " stop"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " $FORMULA"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 停止运行指定的服务并且注销登录时启动。"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " services"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " stop"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --all"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# Stop (if necessary) and start the service formula immediately and register it to launch at login (or boot)."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 立即停止并启动指定服务，并且注册到登录时启动。"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " services"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " restart"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " $FORMULA"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 立即停止并启动所有服务，并注册到登录时启动。"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " services"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " restart"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --all"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# Remove all unused services."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 移除所有无用的服务。"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " services"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " cleanup"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# If sudo is passed, operate on /Library/LaunchDaemons (started at boot)."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# Otherwise, operate on ~/Library/LaunchAgents (started at login)."
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "查看homebrew的配置信息",
      children: "查看Homebrew的配置信息"
    }), "\n", createVNode(_components.p, {
      children: "用于查看Homebrew所在环境及相关的配置情况。"
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
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " config"
          })]
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "诊断问题",
      children: "诊断问题"
    }), "\n", createVNode(_components.p, {
      children: ["诊断当前Homebrew存在哪些问题，并", createVNode(_components.strong, {
        children: "给出解决方案"
      }), "。"]
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
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " doctor"
          })]
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "仓库管理",
      children: "仓库管理"
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
            children: "# 已安装的仓库列表"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " tap"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 添加仓库"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " tap"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " [--full] user/repo [URL]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 移除仓库"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " untap"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " tap"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "homebrew可视化管理",
      children: "Homebrew可视化管理"
    }), "\n", createVNode(_components.p, {
      children: ["如果你不想去记忆这么多复杂的命令，也可以使用", createVNode(_components.a, {
        href: "https://www.cakebrew.com/",
        children: "Cakebrew"
      }), "可视化管理。"]
    }), "\n", createVNode(_components.p, {
      children: "安装命令如下："
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
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " cask"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " cakebrew"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "然后我们就可以愉快地使用Homebrew了。"
    }), "\n", createVNode(_components.h2, {
      id: "homebrew-services-可视化管理",
      children: "Homebrew services 可视化管理"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://github.com/jimbojsb/launchrocket",
        children: "LaunchRocket"
      }), "是非常友好的图形界面，使用起来简单快捷。比如你使用Homebrew安装的 Mysql、Redis、MongoDB，是让它自启动呢，还是手动启动，传统方式需要使用命令行的命令，而使用", createVNode(_components.code, {
        children: "LaunchRocket"
      }), "则可以在图形界面中进行管理了！"]
    }), "\n", createVNode(_components.p, {
      children: "以上是Homebrew常用功能。"
    }), "\n", createVNode(_components.p, {
      children: "最后的最后，感谢您的阅读！！！"
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

const url = "src/content/blog/Homebrew%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/blog/Homebrew常用命令.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/blog/Homebrew常用命令.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
