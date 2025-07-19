import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';

const frontmatter = {
  "title": "语义化版本控制",
  "description": "",
  "pubDate": "Tue Oct 22 2019 10:35:06 GMT+0800",
  "heroImage": ""
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "什么是语义化版本",
    "text": "什么是语义化版本"
  }, {
    "depth": 2,
    "slug": "为什么要遵守语义化版本",
    "text": "为什么要遵守语义化版本"
  }, {
    "depth": 2,
    "slug": "结论",
    "text": "结论"
  }, {
    "depth": 2,
    "slug": "引用",
    "text": "引用"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "我想大家都对版本号这个名词并不陌生。在软件开发高速发展的今天，我们可以看到每个软件都会有版本号。版本号标志着当前软件的更新状态，传达的是当前应用是否是最新状态。版本号本身并不复杂，如何让版本号之间存在关联，如何让用户根据版本号获悉当前应用的更新状态是我们今天要讲的主题。"
    }), "\n", createVNode(_components.h2, {
      id: "什么是语义化版本",
      children: "什么是语义化版本"
    }), "\n", createVNode(_components.p, {
      children: "有发布和维护过npm包的同学都清楚，我们在每一次发布前都需要更新一下版本号。版本号一般都有一个标准的格式（X.Y.Z），那么我们在每次发布前应该更新哪一位数字呢？这其中就有一个语义化版本的概念。"
    }), "\n", createVNode(_components.p, {
      children: ["语义化版本有一个基本的版本格式：", createVNode(_components.code, {
        children: "主版本号.次版本号.修订号"
      }), "。版本号的递增规则如下："]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "主版本号(major)"
        }), "：当你做了不向下兼容的API时，修改", createVNode(_components.code, {
          children: "主版本号"
        }), "。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "次版本号(minor)"
        }), "：当你做了向下兼容的API或者新增了API时，修改", createVNode(_components.code, {
          children: "次版本号"
        }), "。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "修订号(patch)"
        }), "：当你做了向下兼容的问题修订时，修改", createVNode(_components.code, {
          children: "修订号"
        }), "。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "这是最基本的版本号设置，一般用于正式版本的发布。而在现实生活中，我们为了满足项目在不同阶段的发布，我们会在此基础上做一定的延伸。"
    }), "\n", createVNode(_components.p, {
      children: ["我们经常看到一些重大框架正式发布前，都会先出些", createVNode(_components.code, {
        children: "alpha"
      }), "和", createVNode(_components.code, {
        children: "beta"
      }), "版本，这些都是", createVNode(_components.strong, {
        children: "预发布版本(prerelease)"
      }), "。由于版本升级影响较大，所以会做预发布来达到公测的目的。", createVNode(_components.em, {
        children: "对于这种版本，个人开发者可以在尝鲜项目中使用，商业项目开发过程中应严禁使用。由于其尚未稳定，很多未知的bug可能会影响到你的业务开发，甚至使你的项目在开发过程中进退两难"
      }), "。"]
    }), "\n", createVNode(_components.h2, {
      id: "为什么要遵守语义化版本",
      children: "为什么要遵守语义化版本"
    }), "\n", createVNode(_components.p, {
      children: ["在软件管理的领域里存在着被称为", createVNode(_components.strong, {
        children: "依赖地狱"
      }), "的死亡之谷，系统规模越大，加入的包越多，你就越有可能在未来的某一天发现自己已深陷绝望之中"]
    }), "\n", createVNode(_components.p, {
      children: "在讨论为什么要遵守语义化版本前，我们先来说说什么时候我们需要发布新版本。"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "现有版本存在一个bug需要修复。"
      }), "\n", createVNode(_components.li, {
        children: "在现有版本的基础上需要添加新功能。"
      }), "\n", createVNode(_components.li, {
        children: "现有版本某些功能需要做调整。"
      }), "\n", createVNode(_components.li, {
        children: "现有版本需要做大改动，甚至涉及到对外API的修改，返回结果的变化，以及功能的大幅调整。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "通过上面列出来的几种情况，我们可以看到，有些发布只是在现有版本中做一些修补，有些发布会在现有版本基础上开放更多功能，还有些发布会导致新版本与老版本几乎完全不兼容。"
    }), "\n", createVNode(_components.p, {
      children: ["这些情况下，如果我们只是通过一个简单的", createVNode(_components.strong, {
        children: "数字"
      }), "或者", createVNode(_components.strong, {
        children: "hash值"
      }), "作为版本号将会出现一个问题，要不升级到最新版本（", createVNode(_components.em, {
        children: "需要针对新版本对当前项目中的代码做一定的调整，项目越大，需要调整的地方可能就越多越复杂"
      }), "），要不完全不升级（", createVNode(_components.em, {
        children: "即使知道当前版本存在某些严重的bug"
      }), "）。这个问题让我们在项目维护中陷入了两难的境地，为此我们束手无策。"]
    }), "\n", createVNode(_components.p, {
      children: ["上面的问题确实非常棘手，但是如果我们遵从语义化版本控制，这样的问题就可以迎刃而解了。", createVNode(_components.strong, {
        children: "语义化版本控制的作用是拆分问题，将问题进行归类，划分级别"
      }), "。基本的归类方式分为三类问题。根据版本号从右往左看"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "补丁号"
        }), "，进行现有功能的兼容性补丁，修复一些现有功能的bug。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "次版本号"
        }), "，进行向下兼容的修改或者添加新功能。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "主版本号"
        }), "，进行非向下兼容的更新。与现有版本的功能不兼容，或者返回结果发生了改变。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["使用语义化版本控制，我们可以更好地针对某一个版本进行小版本的修改和升级，而不会影响当前项目的运行。具体的", createVNode(_components.strong, {
        children: "语义化版本规范"
      }), "可以", createVNode(_components.a, {
        href: "https://semver.org/lang/zh-CN/#%E8%AF%AD%E4%B9%89%E5%8C%96%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6%E8%A7%84%E8%8C%83semver",
        children: "查看这里"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "结论",
      children: "结论"
    }), "\n", createVNode(_components.p, {
      children: "语义化版本控制可以使开发者更好地开发和维护软件，同时使用者同样可以在语义化版本控制中收益。在未知开发者具体开发的内容的情况下，使用者可以根据版本号判定是否可以安全升级当前版本。"
    }), "\n", createVNode(_components.p, {
      children: "目前语义化版本控制已经广泛应用于前后端的包开发流程中。学习语义化版本控制既是一种知识思维的拓展，也是包开发中必不可少的一环。"
    }), "\n", createVNode(_components.h2, {
      id: "引用",
      children: "引用"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://semver.org/",
          children: "语义化版本官方文档"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bilibili.com/read/cv1643035/",
          children: "让你的版本号变得规则而有意义"
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

const url = "src/content/blog/%E8%AF%AD%E4%B9%89%E5%8C%96%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/blog/语义化版本控制.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/blog/语义化版本控制.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
