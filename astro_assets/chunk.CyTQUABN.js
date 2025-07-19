import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';

const frontmatter = {
  "title": "解释浏览器的缓存机制，包括强缓存和协商缓存，以及如何设置缓存策略",
  "category": "性能优化",
  "pubDate": "Mon, 14 Jul 2025 13:11:58 +0800",
  "heroImage": "",
  "draft": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "强缓存",
    "text": "强缓存"
  }, {
    "depth": 2,
    "slug": "协商缓存",
    "text": "协商缓存"
  }, {
    "depth": 2,
    "slug": "缓存策略设置",
    "text": "缓存策略设置"
  }, {
    "depth": 2,
    "slug": "缓存流程总结",
    "text": "缓存流程总结"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
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
      children: ["浏览器缓存是指浏览器将已请求过的资源存储在本地，当再次请求相同资源时，直接从本地获取以减少网络请求，提升加速度。缓存机制主要分为", createVNode(_components.strong, {
        children: "强缓存"
      }), "和", createVNode(_components.strong, {
        children: "协商缓存"
      }), "，两者配合工作。"]
    }), "\n", createVNode(_components.h2, {
      id: "强缓存",
      children: "强缓存"
    }), "\n", createVNode(_components.p, {
      children: "强缓存是指浏览器直接根据本地缓存判断资源是否过期，若未过期则直接使用本地缓存，不向服务器发送请求。"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "判断依据"
        }), "：基于 HTTP 响应头中的 ", createVNode(_components.code, {
          children: "Expires"
        }), " 或 ", createVNode(_components.code, {
          children: "Cache-Control"
        }), " 字段。\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "Expires"
            }), "（HTTP/1.0）: 是一个绝对相同（如 ", createVNode(_components.code, {
              children: "Expires: Wed, 21 Oct 2026 07:28:00 GMT"
            }), "），表示资源过期时间。若当前时间早于 ", createVNode(_components.code, {
              children: "Expires"
            }), "，则使用缓存。\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "缺点：依赖本地时间，若本地时间被修改，可能导致缓存失效或过期资源被使用。"
              }), "\n"]
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "Cache-Control"
            }), "（HTTP/1.1，优先级高于 ", createVNode(_components.code, {
              children: "Expires"
            }), "）：通过相对时间控制缓存，常用值：\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: [createVNode(_components.code, {
                  children: "max-age=3600"
                }), "：资源有效期为 3600 秒（1 小时），从请求成功时间开始计算。"]
              }), "\n", createVNode(_components.li, {
                children: [createVNode(_components.code, {
                  children: "public"
                }), "：允许浏览器和中间代理（如 CDN）缓存该资源。"]
              }), "\n", createVNode(_components.li, {
                children: [createVNode(_components.code, {
                  children: "private"
                }), "：仅允许浏览器缓存（默认值），中间代理不可缓存。"]
              }), "\n", createVNode(_components.li, {
                children: [createVNode(_components.code, {
                  children: "no-cache"
                }), "：不使用强缓存，需进入协商缓存。"]
              }), "\n", createVNode(_components.li, {
                children: [createVNode(_components.code, {
                  children: "no-store"
                }), "：完全不缓存资源，每次都需请求服务器。"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "协商缓存",
      children: "协商缓存"
    }), "\n", createVNode(_components.p, {
      children: "当强缓存失效（资源过期）时，浏览器会想服务器发送请求，由服务器判断资源是否更新：若未更新，返回 304 状态码，浏览器使用本地缓存；若已更新，返回 200 状态码和新资源。"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "判断依据"
        }), "：基于请求头和响应头的 ", createVNode(_components.code, {
          children: "Last-Modified/If-Modified-Since"
        }), " 或 ", createVNode(_components.code, {
          children: "ETag/If-None-Match"
        }), " 字段。\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "Last-Modified/If-Modified-Since"
            }), "：\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: ["服务器响应时通过 ", createVNode(_components.code, {
                  children: "Last-Modified"
                }), " 返回资源最后修改（如 ", createVNode(_components.code, {
                  children: "Last-Modified: Wed, 21 Oct 2026 07:28:00 GMT"
                }), "）。"]
              }), "\n", createVNode(_components.li, {
                children: ["浏览器再次请求时，通过 ", createVNode(_components.code, {
                  children: "If-Modified-Since"
                }), " 携带该时间，服务器对比：若资源未修改，返回 304 状态码；若已修改，返回新资源和 200 状态码。\n", createVNode(_components.ul, {
                  children: ["\n", createVNode(_components.li, {
                    children: "缺点：无法识别资源的细微修改（如内容不变但修改时间更新），精度为秒级。"
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "ETag/If-None-Match"
            }), "（优先级高于 ", createVNode(_components.code, {
              children: "Last-Modified"
            }), "）：\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: ["服务器响应时通过 ", createVNode(_components.code, {
                  children: "ETag"
                }), " 返回资源的唯一标识（如 ", createVNode(_components.code, {
                  children: "ETag: \"5f8d02a1-1234\""
                }), "，由资源内容哈希生成）。"]
              }), "\n", createVNode(_components.li, {
                children: ["浏览器再次请求时，通过 ", createVNode(_components.code, {
                  children: "If-None-Match"
                }), " 携带该标识，服务器对比：若标识一致（资源未变），返回 304 状态码；若已修改，返回新资源和 200 状态码。\n", createVNode(_components.ul, {
                  children: ["\n", createVNode(_components.li, {
                    children: "优点：能更精准判断是否修改，适用于动态内容。"
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "缓存策略设置",
      children: "缓存策略设置"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "静态资源（如 JS、CSS、图片）"
        }), "：\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "采用 “强缓存为主，协商缓存为辅”。"
          }), "\n", createVNode(_components.li, {
            children: ["设置较长的 ", createVNode(_components.code, {
              children: "Cache-Control: max-age=31536000"
            }), "（1年），同时对资源进行哈希命名（如 app.8f2d7.js）。当资源更新时，哈希值变化，浏览器会视为新资源并重新请求，避免缓存失效问题。"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "动态资源（如 API 接口数据）"
        }), "：\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["不使用强缓存（设置 ", createVNode(_components.code, {
              children: "Cache-Control: no-cache"
            }), "），依赖协商缓存。"]
          }), "\n", createVNode(_components.li, {
            children: ["服务器通过 ", createVNode(_components.code, {
              children: "ETag"
            }), " 或 ", createVNode(_components.code, {
              children: "Last-Modified"
            }), " 判断数据是否更新，减少重复数据传输。"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "特殊资源（如 HTML）"
        }), "：\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["通常设置 ", createVNode(_components.code, {
              children: "Cache-Control: no-cache"
            }), "（或短时间 ", createVNode(_components.code, {
              children: "max-age"
            }), "），确保用户每次访问都能获取最新页面结构，再通过协商缓存判断是否需要更新。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "缓存流程总结",
      children: "缓存流程总结"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "浏览器请求资源时，先检查强缓存"
        }), "：若未过期，直接使用本地缓存（状态码 200 OK (form cache)）。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "若强缓存过期，进入协商缓存"
        }), "：向服务器发送请求，服务器判断资源是否更新。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "若资源未更新，返回 304，浏览器使用本地缓存"
        }), "：若已更新，返回 200 和新资源，浏览器更新本地缓存。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "合理的缓存策略可大幅减少服务器压力，提升页面加载速度，是前端性能优化的核心手段之一。"
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

const url = "src/content/interview/%E8%A7%A3%E9%87%8A%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E7%BC%93%E5%AD%98%E6%9C%BA%E5%88%B6%EF%BC%8C%E5%8C%85%E6%8B%AC%E5%BC%BA%E7%BC%93%E5%AD%98%E5%92%8C%E5%8D%8F%E5%95%86%E7%BC%93%E5%AD%98%EF%BC%8C%E4%BB%A5%E5%8F%8A%E5%A6%82%E4%BD%95%E8%AE%BE%E7%BD%AE%E7%BC%93%E5%AD%98%E7%AD%96%E7%95%A5.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/解释浏览器的缓存机制，包括强缓存和协商缓存，以及如何设置缓存策略.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/interview/解释浏览器的缓存机制，包括强缓存和协商缓存，以及如何设置缓存策略.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
