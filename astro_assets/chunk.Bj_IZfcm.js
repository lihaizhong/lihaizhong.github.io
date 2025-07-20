import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';
import { $ as $$Image } from './chunk.BFavZmP-.js';

const __0_______assets_images_1355655874_6620_jpg__ = new Proxy({"src":"/astro_assets/asset.TQ3mHFjf.jpg","width":719,"height":493,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/assets/images/1355655874_6620.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/assets/images/1355655874_6620.jpg");
							return target[name];
						}
					});

const __1_______assets_images_WX20200416_142801_png__ = new Proxy({"src":"/astro_assets/asset.Bq5Tx2CP.png","width":1920,"height":41,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/assets/images/WX20200416-142801.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/assets/images/WX20200416-142801.png");
							return target[name];
						}
					});

const __2_______assets_images_WX20200416_142909_png__ = new Proxy({"src":"/astro_assets/asset.BbL1oHTJ.png","width":1920,"height":54,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/assets/images/WX20200416-142909.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/assets/images/WX20200416-142909.png");
							return target[name];
						}
					});

const frontmatter = {
  "title": "HTTP的强缓存与协商缓存",
  "description": "",
  "pubDate": "Fri Apr 10 2020 10:47:15 GMT+0800",
  "heroImage": ""
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "http缓存有什么优点",
    "text": "HTTP缓存有什么优点"
  }, {
    "depth": 2,
    "slug": "强缓存与协商缓存的区别",
    "text": "强缓存与协商缓存的区别"
  }, {
    "depth": 2,
    "slug": "如何判断浏览器是否使用了缓存使用了哪种缓存",
    "text": "如何判断浏览器是否使用了缓存，使用了哪种缓存"
  }, {
    "depth": 2,
    "slug": "如何开启强缓存和协商缓存",
    "text": "如何开启强缓存和协商缓存"
  }, {
    "depth": 3,
    "slug": "开启http强缓存",
    "text": "开启HTTP强缓存"
  }, {
    "depth": 4,
    "slug": "客户端可以在http中设置的cache-control指令",
    "text": "客户端可以在HTTP中设置的Cache-Control指令。"
  }, {
    "depth": 4,
    "slug": "服务器可以在http中设置的cache-control指令",
    "text": "服务器可以在HTTP中设置的Cache-Control指令。"
  }, {
    "depth": 4,
    "slug": "扩展指令不是核心http请求标准的一部分请谨慎使用注意兼容性",
    "text": "扩展指令。不是核心HTTP请求标准的一部分，请谨慎使用，注意兼容性。"
  }, {
    "depth": 3,
    "slug": "开启http协商缓存",
    "text": "开启HTTP协商缓存"
  }, {
    "depth": 3,
    "slug": "http缓存的过程",
    "text": "HTTP缓存的过程"
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
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    "astro-image": "astro-image",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, _component0 = _components["astro-image"];
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["对于前端而言，我们经常需要与后端进行数据交互，常用的数据交互方式就是", createVNode(_components.strong, {
        children: "HTTP请求"
      }), "。在HTTP请求的过程中，有一些静态资源很少发生变化，但每次都要重新请求并从服务端下载，这不仅影响资源的响应时长，还会增加了服务器的压力。为了解决这个问题就有了HTTP缓存机制。它是浏览器与服务器之间的一种优化策略，", createVNode(_components.em, {
        children: "为了加快用户的访问速度，增强用户体验，减轻服务器压力。"
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        alt: "HTTP缓存",
        src: __0_______assets_images_1355655874_6620_jpg__
      })
    }), "\n", createVNode(_components.h2, {
      id: "http缓存有什么优点",
      children: "HTTP缓存有什么优点"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "减少冗余的数据传输，节省网络资源。"
      }), "\n", createVNode(_components.li, {
        children: "减少服务器的负担，提升网站的性能。"
      }), "\n", createVNode(_components.li, {
        children: "加快客户端加载网页的速度，增强用户体验。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "我们知道，HTTP的缓存分为强缓存和协商缓存。"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "那他们之间有什么区别呢？"
      }), "\n", createVNode(_components.li, {
        children: "如何判断是否使用了缓存以及使用了哪种缓存？"
      }), "\n", createVNode(_components.li, {
        children: "如何开启强缓存和协商缓存？"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "带着这些问题，我们一起来探索HTTP缓存机制。"
    }), "\n", createVNode(_components.h2, {
      id: "强缓存与协商缓存的区别",
      children: "强缓存与协商缓存的区别"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "强缓存不需要请求服务器，协商缓存需要请求服务器。"
      }), "\n", createVNode(_components.li, {
        children: "强缓存返回的HTTP状态码是200，协商缓存返回的HTTP状态码是304。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["他们之间的共同点是", createVNode(_components.strong, {
        children: "强缓存与协商缓存都是从客户端获取缓存数据的"
      }), "。"]
    }), "\n", createVNode(_components.h2, {
      id: "如何判断浏览器是否使用了缓存使用了哪种缓存",
      children: "如何判断浏览器是否使用了缓存，使用了哪种缓存"
    }), "\n", createVNode(_components.p, {
      children: "我们可以打开Chrome浏览器的控制台工具，点击Network，可以查看我们的http请求情况。下面两个是我的真实请求情况。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        alt: "强缓存",
        src: __1_______assets_images_WX20200416_142801_png__
      })
    }), "\n", createVNode(_components.p, {
      children: "上图中有两条请求信息是从缓存中获得的。我们可以看右数第三列，这里告诉我们这个请求的数据是从磁盘缓存中获取的。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        alt: "协商缓存",
        src: __2_______assets_images_WX20200416_142909_png__
      })
    }), "\n", createVNode(_components.p, {
      children: "上图中有两条信息是通过协商缓存获得的。我们可以看左数第二列，他们的状态码都是304。"
    }), "\n", createVNode(_components.h2, {
      id: "如何开启强缓存和协商缓存",
      children: "如何开启强缓存和协商缓存"
    }), "\n", createVNode(_components.h3, {
      id: "开启http强缓存",
      children: "开启HTTP强缓存"
    }), "\n", createVNode(_components.p, {
      children: ["对于强制缓存，可以通过在Nginx上配置", createVNode(_components.strong, {
        children: "Expires"
      }), "或者", createVNode(_components.strong, {
        children: "Cache-Control"
      }), "来开启。"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "Expires的值是一个固定的过期时间。在这个时间内，所有的信息都会从HTTP缓存中获取。这样的方式并不灵活。"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "如果时间未过期，即使服务器更新了最新的数据，浏览器也可能在较长一段时间内不去更新数据。"
      }), "\n", createVNode(_components.li, {
        children: "如果时间过期了，即使服务器依然是老的数据，浏览器还是会重新去服务器请求。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "Cache-Control的值是一个相对时间。也就是在一定时间内，浏览器依然会读取缓存，过了这个时间间隔，浏览器会再次请求数据，并重新计算相对时间。这种方案相对于第一种更加灵活，能更好地利用缓存，也能更及时地更新数据。"
      })
    }), "\n", createVNode(_components.h4, {
      id: "客户端可以在http中设置的cache-control指令",
      children: "客户端可以在HTTP中设置的Cache-Control指令。"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Cache-Control: max-age=<seconds>"
      }), "\n", createVNode(_components.li, {
        children: "Cache-Control: max-stale[=<seconds>]"
      }), "\n", createVNode(_components.li, {
        children: "Cache-Control: min-fresh=<seconds>"
      }), "\n", createVNode(_components.li, {
        children: "Cache-Control: no-cache"
      }), "\n", createVNode(_components.li, {
        children: "Cache-Control: no-store"
      }), "\n", createVNode(_components.li, {
        children: "Cache-Control: no-transform"
      }), "\n", createVNode(_components.li, {
        children: "Cache-Control: only-if-cached"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "服务器可以在http中设置的cache-control指令",
      children: "服务器可以在HTTP中设置的Cache-Control指令。"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Cache-Control: must-revalidate"
      }), "\n", createVNode(_components.li, {
        children: "Cache-Control: no-cache"
      }), "\n", createVNode(_components.li, {
        children: "Cache-Control: no-store"
      }), "\n", createVNode(_components.li, {
        children: "Cache-Control: no-transform"
      }), "\n", createVNode(_components.li, {
        children: "Cache-Control: public"
      }), "\n", createVNode(_components.li, {
        children: "Cache-Control: private"
      }), "\n", createVNode(_components.li, {
        children: "Cache-Control: proxy-revalidate"
      }), "\n", createVNode(_components.li, {
        children: "Cache-Control: max-age=<seconds>"
      }), "\n", createVNode(_components.li, {
        children: "Cache-Control: s-maxage=<seconds>"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "扩展指令不是核心http请求标准的一部分请谨慎使用注意兼容性",
      children: "扩展指令。不是核心HTTP请求标准的一部分，请谨慎使用，注意兼容性。"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Cache-Control: immutable"
      }), "\n", createVNode(_components.li, {
        children: "Cache-Control: stale-while-revalidate=<seconds>"
      }), "\n", createVNode(_components.li, {
        children: "Cache-Control: stale-if-error=<seconds>"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Cache-Control各种属性有很多，具体的含义可以参看", createVNode(_components.a, {
        href: "https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control",
        children: "MDN上的Cache-Control"
      }), "。这里我们主要来讲讲", createVNode(_components.strong, {
        children: "no-cache"
      }), "、", createVNode(_components.strong, {
        children: "no-store"
      }), "以及", createVNode(_components.strong, {
        children: "max-age"
      }), "这三个属性。"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "no-cache"
      }), " 在使用缓存副本之前，强制要求缓存把请求提交给原始服务器进行验证（协商缓存验证）。也就是说，请求一定会发送，但请求的结果可能是直接返回数据，也可能告诉浏览器读取当前缓存。"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "no-store"
      }), " 不在客户端存储任何请求的内容（包括请求内容和服务器响应的内容），即不使用任何缓存策略。"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "max-age"
      }), " 设置缓存的最大存储周期。超过了这个时间（", createVNode(_components.em, {
        children: "单位：秒"
      }), "），将不使用本地缓存。与Expires不同的是，这个时间是一个相对时间，是指请求返回后的", createVNode(_components.em, {
        children: "max-age"
      }), "秒。"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "这两种方案都是不错的强缓存策略，但是对于频繁发布的系统，显然这两种方案都无法满足要求。"
      })
    }), "\n", createVNode(_components.h3, {
      id: "开启http协商缓存",
      children: "开启HTTP协商缓存"
    }), "\n", createVNode(_components.p, {
      children: ["协商缓存依然需要向服务器发送信息，但是服务器会根据相应的情况返回数据或者告诉浏览器可以从本地缓存中获得。当我们使用", createVNode(_components.code, {
        children: "Cache-Control: no-cache"
      }), "时，服务器是怎么知道当前的缓存是否过期了呢？"]
    }), "\n", createVNode(_components.p, {
      children: ["这里我们就讲讲服务器检查HTTP缓存是否过期的两个属性", createVNode(_components.strong, {
        children: "Last-Modify/If-Modify-Since"
      }), "和", createVNode(_components.strong, {
        children: "Etag/If-None-Match"
      }), "。"]
    }), "\n", createVNode(_components.p, {
      children: ["对于", createVNode(_components.strong, {
        children: "Last-Modify/If-Modify-Since"
      }), "，浏览器第一次请求时会返回一个Last-Modify，这个属性表示服务器资源上次修改的时间。再次请求时，客户端会在request头中加上If-Modify-Since，用于服务器验证表示资源是否已过期。 ", createVNode(_components.strong, {
        children: "If-Modify-Since的值就是上次Last-Modify的值。"
      }), " 如果时间匹配不一致，就返回新数据，并覆盖当前的缓存；否则服务器返回304请求（不返回任何数据），浏览器会从本地缓存中读取数据信息。"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "既然已经有了Last-Modify/If-Modify-Since，为什么还需要ETag呢？这里我们先讲讲ETag的值，然后在解释为什么，以及他们的优劣。"
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "ETag/If-None-Match"
      }), "的值是hash值，表示当前文件对应的hash。随着文件的变化，hash也会相应改变。整体的验证流程与Last-Modify/If-Modify-Since相同，", createVNode(_components.strong, {
        children: "ETag的生成由服务器决定"
      }), "。"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "好了，讲完他们的定义，我们来看看它们两个有什么不同，怎么选择他们的设置呢？"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "在多机运行的情况下，每台服务器的时间不一定一致，会导致Last-Modify失效；而ETag每次都会计算最新的文件hash值，确保了精度，在多机部署的情况下能保证hash值的一致性。"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "在性能上，Last-Modify只需要获取文件改变的时间即可，而ETag需要算法计算最新的hash值。相对来说，Last-Modify的性能优于ETag。"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "服务器校验时，优先考虑ETag的校验。"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "从上面的情况看，如果你只是单机运行，推荐使用Last-Modify/If-Modify-Since，这样相对来说能提升性能；如果你是多机运行，推荐使用ETag/If-None-Match，这样能解决服务器时间不一致导致的失效问题。"
    }), "\n", createVNode(_components.h3, {
      id: "http缓存的过程",
      children: "HTTP缓存的过程"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "第一次请求加载时，浏览器会下载远程资源，服务器返回HTTP STATUS为200。浏览器将response headers和请求数据一并缓存下来。"
      }), "\n", createVNode(_components.li, {
        children: "第二次请求加载时，浏览器会先计算当前时间和上一次200请求的时间差，与Cache-Control的有效时间进行比较，如果没有过期，则命中强缓存，不做HTTP请求；（如果浏览器不支持HTTP 1.1，则会比较Expires上的时间）"
      }), "\n", createVNode(_components.li, {
        children: "如果没有命中强缓存，浏览器会带上上次请求的信息（将Last-Modify的值设置到If-Modify-Since上；将ETag的值，设置到If-None-Match上）发送给服务器，服务器根据这两个属性判断是否命中协商缓存。"
      }), "\n", createVNode(_components.li, {
        children: "服务器收到请求后，优先判断ETag是否一致。如果一致，则返回HTTP STATUS为304，不返回数据，浏览器根据这个状态码，使用本地缓存数据；否则服务器返回HTTP STATUS为200，最新的ETag和新数据。"
      }), "\n", createVNode(_components.li, {
        children: "服务器如果没有收到ETag的值，服务器将比较Last-Modify是否一致。如果一致，则返回HTTP STATUS为304，不返回数据，浏览器根据这个状态码，使用本地缓存数据；否则服务器返回HTTP STATUS为200，返回最新的数据覆盖当前缓存。"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "结论",
      children: "结论"
    }), "\n", createVNode(_components.p, {
      children: "合理地使用缓存策略，能大大提升我们服务器的性能。Cache-Control属性的选择，ETag/If-None-Match与Last-Modify/If-Modify-Since的选择，需要根据实际情况来定。一些接口请求涉及到数据更新频率较高，不建议使用缓存策略。"
    }), "\n", createVNode(_components.h2, {
      id: "参考",
      children: "参考"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://blog.csdn.net/wsymcxy/article/details/82154397",
          children: "强制缓存和协商缓存的区别"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://blog.csdn.net/eroswang/article/details/8302191",
          children: "浏览器缓存详解:expires,cache-control,last-modified,etag详细说明"
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

const url = "src/content/blog/HTTP%E7%9A%84%E5%BC%BA%E7%BC%93%E5%AD%98%E4%B8%8E%E5%8D%8F%E5%95%86%E7%BC%93%E5%AD%98.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/blog/HTTP的强缓存与协商缓存.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/blog/HTTP的强缓存与协商缓存.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
