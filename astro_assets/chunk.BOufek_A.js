import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';

const frontmatter = {
  "title": "分享一个你参与过的最具挑战性的前端项目，你在其中扮演的角色、解决的问题以及从中获得的经验",
  "category": "实战与架构",
  "pubDate": "Wed, 16 Jul 2025 01:52:53 +0800",
  "heroImage": "",
  "draft": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "项目背景",
    "text": "项目背景"
  }, {
    "depth": 2,
    "slug": "我的角色",
    "text": "我的角色"
  }, {
    "depth": 2,
    "slug": "挑战与解决方案",
    "text": "挑战与解决方案"
  }, {
    "depth": 3,
    "slug": "1-实时性与性能矛盾",
    "text": "1. 实时性与性能矛盾"
  }, {
    "depth": 3,
    "slug": "2-复杂表格交互",
    "text": "2. 复杂表格交互"
  }, {
    "depth": 3,
    "slug": "3-多端适配与一致性",
    "text": "3. 多端适配与一致性"
  }, {
    "depth": 2,
    "slug": "经验总结",
    "text": "经验总结"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "项目背景",
      children: "项目背景"
    }), "\n", createVNode(_components.p, {
      children: ["某大型电商平台的 ", createVNode(_components.strong, {
        children: "实时库存管理系统"
      }), "，需支持 10万 + SKU 的实时库存展示、多仓调拨和库存预警，用户端包括 PC 管理后台和移动端 APP，日均 PV 50万 +。"]
    }), "\n", createVNode(_components.h2, {
      id: "我的角色",
      children: "我的角色"
    }), "\n", createVNode(_components.p, {
      children: "前端技术负责人，负责架构设计、核心功能开发和性能优化，带领 5 个团队。"
    }), "\n", createVNode(_components.h2, {
      id: "挑战与解决方案",
      children: "挑战与解决方案"
    }), "\n", createVNode(_components.h3, {
      id: "1-实时性与性能矛盾",
      children: "1. 实时性与性能矛盾"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "问题：库存数据每 3 秒更新一次，传统轮询导致频繁请求，页面卡顿。"
      }), "\n", createVNode(_components.li, {
        children: ["解决：采用 ", createVNode(_components.strong, {
          children: "Web Socket + 增量更新"
        }), "：\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "后端仅推送变化的库存数据（而非全量），减少数据传输量。"
          }), "\n", createVNode(_components.li, {
            children: ["前端用 ", createVNode(_components.code, {
              children: "requestAnimationFrame"
            }), " 批量更新 DOM，避免频繁回流。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "2-复杂表格交互",
      children: "2. 复杂表格交互"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "问题：10万+ 行数据的表格需支持排序、筛选、冻结列，传统表格组件性能崩溃。"
      }), "\n", createVNode(_components.li, {
        children: ["解决：实现 ", createVNode(_components.strong, {
          children: "虚拟滚动表格"
        }), "：\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "仅渲染可视区域内的行（约 50 行），滚动时动态计算渲染范围。"
          }), "\n", createVNode(_components.li, {
            children: "基于 IndexDB 缓存筛选后的全局数据，避免重复请求。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "3-多端适配与一致性",
      children: "3. 多端适配与一致性"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "问题：PC 端（复杂表单）和移动端（简化操作）需共享业务逻辑，但 UI 差异大。"
      }), "\n", createVNode(_components.li, {
        children: ["解决：采用 ", createVNode(_components.strong, {
          children: "逻辑与 UI 分离"
        }), " 架构：\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "核心逻辑（如库存计算、校验规则）封装为独立 SDK，多端共享。"
          }), "\n", createVNode(_components.li, {
            children: "UI 层使用不同组件库（PC 用 AntDesign，移动端用 Vant），通过适配层统一接口。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "经验总结",
      children: "经验总结"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "技术选型需权衡"
        }), "：实时场景优先考虑 WebSocket 而非轮询，但需做好断线重连和降级方案。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "性能优化要量化"
        }), "：通过 Lighthouse 和 Performance API 建立性能基准，针对性优化（如首屏加载从 3s 降到 1.2s）。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "团队协作靠规范"
        }), "：制定组件设计规范和 API 文档标准，减少沟通成本（如统一用 Swagger 管理接口文档）。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "故障预案不可少"
        }), "：针对 WebSocket 连接失败、数据同步异常等场景，设计降级方案（如自动切换为轮询）。"]
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

const url = "src/content/interview/%E5%88%86%E4%BA%AB%E4%B8%80%E4%B8%AA%E4%BD%A0%E5%8F%82%E4%B8%8E%E8%BF%87%E7%9A%84%E6%9C%80%E5%85%B7%E6%8C%91%E6%88%98%E6%80%A7%E7%9A%84%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE%EF%BC%8C%E4%BD%A0%E5%9C%A8%E5%85%B6%E4%B8%AD%E6%89%AE%E6%BC%94%E7%9A%84%E8%A7%92%E8%89%B2%E3%80%81%E8%A7%A3%E5%86%B3%E7%9A%84%E9%97%AE%E9%A2%98%E4%BB%A5%E5%8F%8A%E4%BB%8E%E4%B8%AD%E8%8E%B7%E5%BE%97%E7%9A%84%E7%BB%8F%E9%AA%8C.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/分享一个你参与过的最具挑战性的前端项目，你在其中扮演的角色、解决的问题以及从中获得的经验.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/分享一个你参与过的最具挑战性的前端项目，你在其中扮演的角色、解决的问题以及从中获得的经验.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
