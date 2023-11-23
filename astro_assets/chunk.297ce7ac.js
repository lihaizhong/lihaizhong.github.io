import { _ as __astro_tag_component__, F as Fragment, q as createVNode } from './chunk.58a66e60.js';
import { $ as $$Image } from './chunk.4df0e139.js';

const __0_______assets_memory_structure_of_V8_png__ = new Proxy({"src":"/astro_assets/asset.cca7cba8.png","width":590,"height":332,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const frontmatter = {
  "title": "V8\u5F15\u64CE\u7684\u5783\u573E\u56DE\u6536\u673A\u5236",
  "description": "V8\u5F15\u64CE\u4F5C\u4E3A\u76EE\u524D\u6700\u6D41\u884C\u7684JavaScript\u5F15\u64CE\uFF0C\u5728\u6D4F\u89C8\u5668\u7AEF\u548CNodeJS\u7AEF\u90FD\u6709\u4F7F\u7528\u3002\u5C24\u5176\u5728\u6D4F\u89C8\u5668\u7AEF\uFF0C\u6B63\u662FV8\u5F15\u64CE\u7684\u4FDD\u9A7E\u62A4\u822A\uFF0C\u5960\u5B9A\u4E86Chrome\u5728\u6D4F\u89C8\u5668\u7AEF\u7684\u9738\u4E3B\u5730\u4F4D\u3002\u65E9\u671F\u7684V8\u5F15\u64CE\u91C7\u7528Full-Codegen+Crankshaft\u67B6\u6784\uFF0C\u73B0\u5728\u5DF2\u7ECF\u66F4\u6362\u4E3AIgnition+TurboFan\u67B6\u6784\u3002\u5728\u5783\u573E\u56DE\u6536\u65B9\u9762\u662F\u57FA\u4E8E\u5F31\u5206\u4EE3\u5047\u8BF4\u5B9E\u73B0\uFF0C\u5E76\u505A\u4E86\u5F88\u591A\u4F18\u5316\u7B56\u7565\uFF0C\u8FDB\u4E00\u6B65\u63D0\u5347\u6027\u80FD\u3002",
  "pubDate": "Tue, 15 Aug 2023 15:15:01 +0800",
  "heroImage": ""
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "v8\u7684\u5185\u5B58\u6784\u6210",
    "text": "V8\u7684\u5185\u5B58\u6784\u6210"
  }, {
    "depth": 2,
    "slug": "\u65B0\u751F\u4EE3\u7684gc\u7B56\u7565",
    "text": "\u65B0\u751F\u4EE3\u7684GC\u7B56\u7565"
  }, {
    "depth": 2,
    "slug": "\u5BF9\u8C61\u664B\u5347\u7B56\u7565",
    "text": "\u5BF9\u8C61\u664B\u5347\u7B56\u7565"
  }, {
    "depth": 2,
    "slug": "\u8001\u751F\u4EE3\u7684gc\u7B56\u7565",
    "text": "\u8001\u751F\u4EE3\u7684GC\u7B56\u7565"
  }, {
    "depth": 3,
    "slug": "marking-\u6807\u8BB0",
    "text": "Marking \u6807\u8BB0"
  }, {
    "depth": 3,
    "slug": "sweeping-\u6E05\u9664",
    "text": "Sweeping \u6E05\u9664"
  }, {
    "depth": 3,
    "slug": "compacting-\u6574\u7406",
    "text": "Compacting \u6574\u7406"
  }, {
    "depth": 2,
    "slug": "\u56DE\u6536\u7B97\u6CD5\u6BD4\u8F83",
    "text": "\u56DE\u6536\u7B97\u6CD5\u6BD4\u8F83"
  }, {
    "depth": 2,
    "slug": "\u5783\u573E\u56DE\u6536\u673A\u5236\u7684\u8FDB\u9636\u95EE\u9898",
    "text": "\u5783\u573E\u56DE\u6536\u673A\u5236\u7684\u8FDB\u9636\u95EE\u9898"
  }, {
    "depth": 3,
    "slug": "\u4E3A\u4EC0\u4E48v8\u5F15\u64CE\u9700\u8981\u9650\u5236\u5185\u5B58\u5927\u5C0F",
    "text": "\u4E3A\u4EC0\u4E48V8\u5F15\u64CE\u9700\u8981\u9650\u5236\u5185\u5B58\u5927\u5C0F"
  }, {
    "depth": 3,
    "slug": "\u4EC0\u4E48\u662F\u589E\u91CF\u6807\u8BB0\u5EF6\u8FDF\u6E05\u9664\u548C\u589E\u91CF\u6574\u7406",
    "text": "\u4EC0\u4E48\u662F\u589E\u91CF\u6807\u8BB0\u3001\u5EF6\u8FDF\u6E05\u9664\u548C\u589E\u91CF\u6574\u7406"
  }, {
    "depth": 3,
    "slug": "\u4EC0\u4E48\u662F\u5199\u5C4F\u969C",
    "text": "\u4EC0\u4E48\u662F\u5199\u5C4F\u969C"
  }, {
    "depth": 3,
    "slug": "\u4EC0\u4E48\u662F\u9690\u85CF\u7C7B",
    "text": "\u4EC0\u4E48\u662F\u9690\u85CF\u7C7B"
  }, {
    "depth": 3,
    "slug": "\u4EC0\u4E48\u662F\u5185\u8054\u7F13\u5B58",
    "text": "\u4EC0\u4E48\u662F\u5185\u8054\u7F13\u5B58"
  }, {
    "depth": 3,
    "slug": "\u4EC0\u4E48\u662Fhotspot\u70ED\u70B9\u4EE3\u7801\u6536\u96C6",
    "text": "\u4EC0\u4E48\u662FHotSpot\u70ED\u70B9\u4EE3\u7801\u6536\u96C6"
  }, {
    "depth": 2,
    "slug": "\u603B\u7ED3",
    "text": "\u603B\u7ED3"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = Object.assign({
      p: "p",
      code: "code",
      strong: "strong",
      h2: "h2",
      ul: "ul",
      li: "li",
      "astro-image": "astro-image",
      blockquote: "blockquote",
      a: "a",
      em: "em",
      ol: "ol",
      h3: "h3",
      table: "table",
      thead: "thead",
      tr: "tr",
      th: "th",
      tbody: "tbody",
      td: "td"
    }, props.components),
    _component0 = _components["astro-image"];
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["V8\u5F15\u64CE\u4F5C\u4E3A\u76EE\u524D\u6700\u6D41\u884C\u7684JavaScript\u5F15\u64CE\uFF0C\u5728\u6D4F\u89C8\u5668\u7AEF\u548CNodeJS\u7AEF\u90FD\u6709\u4F7F\u7528\u3002\u5C24\u5176\u5728\u6D4F\u89C8\u5668\u7AEF\uFF0C\u6B63\u662FV8\u5F15\u64CE\u7684\u4FDD\u9A7E\u62A4\u822A\uFF0C\u5960\u5B9A\u4E86Chrome\u5728\u6D4F\u89C8\u5668\u7AEF\u7684\u9738\u4E3B\u5730\u4F4D\u3002\u65E9\u671F\u7684V8\u5F15\u64CE\u91C7\u7528", createVNode(_components.code, {
        children: "Full-Codegen"
      }), " + ", createVNode(_components.code, {
        children: "Crankshaft"
      }), "\u67B6\u6784\uFF0C\u73B0\u5728\u5DF2\u7ECF\u66F4\u6362\u4E3A", createVNode(_components.code, {
        children: "Ignition"
      }), " + ", createVNode(_components.code, {
        children: "TurboFan"
      }), "\u67B6\u6784\u3002\u5728\u5783\u573E\u56DE\u6536\u65B9\u9762\u662F\u57FA\u4E8E", createVNode(_components.strong, {
        children: "\u5F31\u5206\u4EE3\u5047\u8BF4"
      }), "\u5B9E\u73B0\uFF0C\u5E76\u505A\u4E86\u5F88\u591A\u4F18\u5316\u7B56\u7565\uFF0C\u8FDB\u4E00\u6B65\u63D0\u5347\u6027\u80FD\u3002"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "\u5F31\u5206\u4EE3\u5047\u8BF4\u8BA4\u4E3A\uFF0C\u5927\u591A\u6570\u5BF9\u8C61\u53EA\u4F1A\u5B58\u5728\u5F88\u77ED\u7684\u65F6\u95F4\uFF0C\u800C\u53E6\u4E00\u90E8\u5206\u5BF9\u8C61\u5219\u4F1A\u63A5\u8FD1\u4E8E\u6C38\u751F\u3002"
      }), " \u6839\u636E\u8FD9\u4E2A\u7406\u8BBA\uFF0CV8\u628A\u9700\u8981\u6267\u884CGC\u7684\u5185\u5B58\u7A7A\u95F4", createVNode(_components.strong, {
        children: "\u5206\u4E3A\u65B0\u751F\u4EE3\u548C\u8001\u751F\u4EE3"
      }), "\u4E24\u90E8\u5206\uFF0C\u5206\u522B\u653E\u7F6E\u751F\u547D\u5468\u671F\u957F\u5EA6\u4E0D\u540C\u7684\u5BF9\u8C61\u5E76", createVNode(_components.strong, {
        children: "\u4F7F\u7528\u4E0D\u540C\u7684GC\u7B56\u7565\uFF0C\u4ECE\u800C\u663E\u8457\u63D0\u5347 GC \u6548\u7387"
      }), "\u3002"]
    }), "\n", createVNode(_components.h2, {
      id: "v8\u7684\u5185\u5B58\u6784\u6210",
      children: "V8\u7684\u5185\u5B58\u6784\u6210"
    }), "\n", createVNode(_components.p, {
      children: ["V8\u7BA1\u7406\u7684\u5185\u5B58\u662F\u6709\u9650\u5236\u7684\u3002\u572864\u4F4D\u64CD\u4F5C\u7CFB\u7EDF\u73AF\u5883\u4E2D\uFF0C\u65B0\u751F\u4EE3\u7684\u9ED8\u8BA4\u5927\u5C0F\u4E3A", createVNode(_components.strong, {
        children: "32MB"
      }), "\uFF0C\u8001\u751F\u4EE3\u7684\u9ED8\u8BA4\u5927\u5C0F\u7EA6\u4E3A", createVNode(_components.strong, {
        children: "1.4GB"
      }), "\uFF1B\u572832\u4F4D\u64CD\u4F5C\u7CFB\u7EDF\u73AF\u5883\u51CF\u534A\u3002\u8FD9\u6837\u7684\u8BBE\u7F6E\u57FA\u672C\u4E0A\u80FD\u80DC\u4EFB\u6D4F\u89C8\u5668\u73AF\u5883\uFF0C\u4F46\u662F\u5BF9\u4E8E\u6709\u5927\u6587\u4EF6\u573A\u666F\u7684NodeJS\u73AF\u5883\u6709\u4E9B\u5403\u529B\u4E86\u3002\u4E0D\u8FC7\u4E0D\u7528\u62C5\u5FC3\uFF0CV8\u4E3A\u6B64\u5DF2\u7ECF\u505A\u4E86\u5F88\u591A\u7684\u4F18\u5316\u5DE5\u4F5C\uFF0C\u4EE5\u5C3D\u53EF\u80FD\u4FDD\u8BC1\u5E94\u7528\u7684\u6D41\u7545\u6027\u3002\u4ECA\u5929\uFF0C\u6211\u4EEC\u5148\u7B80\u5355\u4E86\u89E3\u4E0BV8\u7684\u5185\u5B58\u5212\u5206\uFF1A"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "\u65B0\u751F\u4EE3\u5185\u5B58\u533A\uFF08Young Generation/New Space\uFF09\uFF1A\u5927\u591A\u6570\u5BF9\u8C61\u90FD\u5728\u8FD9\u91CC\u3002"
      }), "\n", createVNode(_components.li, {
        children: "\u8001\u751F\u4EE3\u5185\u5B58\u533A\uFF08Old Generation/Old Space\uFF09\uFF1A\u5E38\u9A7B\u5185\u5B58\u7684\u5BF9\u8C61\u5728\u8FD9\u91CC\u3002"
      }), "\n", createVNode(_components.li, {
        children: "\u5927\u5BF9\u8C61\u533A\uFF08Large Object Space\uFF09\uFF1A\u5927\u4E8E1MB\u7684\u5BF9\u8C61\u4F1A\u88AB\u653E\u5728\u8FD9\u91CC\uFF0CGC\u4E0D\u4F1A\u56DE\u6536\u8FD9\u90E8\u5206\u5185\u5B58\u3002"
      }), "\n", createVNode(_components.li, {
        children: "\u4EE3\u7801\u533A\uFF08Code Space\uFF09\uFF1A\u552F\u4E00\u62E5\u6709\u6267\u884C\u6743\u9650\u7684\u5185\u5B58\u3002"
      }), "\n", createVNode(_components.li, {
        children: "Cell\u533A\u3001PropertyCell\u533A\u3001Map\u533A\uFF08Cell Space\u3001Property Cell Space\u3001Map Space\uFF09\uFF1A\u9690\u85CF\u7C7B\u7684\u5B58\u653E\u4F4D\u7F6E\u3002\u8FD9\u4E9B\u7A7A\u95F4\u4E2D\u7684\u6BCF\u4E2A\u7A7A\u95F4\u90FD\u5305\u542B\u76F8\u540C\u5927\u5C0F\u7684\u5BF9\u8C61\uFF0C\u5E76\u4E14\u5BF9\u5B83\u4EEC\u6307\u5411\u7684\u5BF9\u8C61\u6709\u4E00\u4E9B\u9650\u5236\uFF0C\u4ECE\u800C\u7B80\u5316\u4E86\u56DE\u6536\u3002"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        src: __0_______assets_memory_structure_of_V8_png__,
        alt: "V8\u5185\u5B58\u6784\u6210"
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["\u8FD9\u4E9B\u7A7A\u95F4\u4E2D\u7684\u6BCF\u4E00\u4E2A\u90FD\u7531\u4E00\u7EC4Pages\u7EC4\u6210\u3002Page\u662F\u4F7F\u7528", createVNode(_components.a, {
          href: "https://baike.baidu.com/item/mmap/1322217?fr=ge_ala",
          children: "mmap"
        }), "\u4ECE\u64CD\u4F5C\u7CFB\u7EDF\u5206\u914D\u7684\u8FDE\u7EED\u5185\u5B58\u5757\u3002\u9664\u5927\u5BF9\u8C61\u7A7A\u95F4\u5916\uFF0C\u6BCF\u4E2A\u9875\u9762\u7684\u5927\u5C0F\u5747\u4E3A1MB\u3002 ", createVNode(_components.strong, {
          children: "\u5783\u573E\u56DE\u6536\u5668\u53EA\u4F1A\u9488\u5BF9\u65B0\u751F\u4EE3\u5185\u5B58\u533A\u3001\u8001\u751F\u4EE3\u6307\u9488\u533A\u4EE5\u53CA\u8001\u751F\u4EE3\u6570\u636E\u533A\u8FDB\u884C\u5783\u573E\u56DE\u6536\u3002"
        }), " \u6BCF\u4E2A\u533A\u91CC\u9762\u7684\u5185\u5B58\u9875\u5F00\u5934\u90FD\u6709\u4E00\u4E2Aheader\uFF0C\u91CC\u9762\u5305\u62EC\uFF1A"]
      }), "\n", createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: ["\u5404\u79CD", createVNode(_components.strong, {
            children: "\u5143\u6570\u636E\u548Cflag"
          }), "\uFF08\u6BD4\u5982\u672C\u9875\u6570\u636E\u54EA\u4E2A\u533A\uFF09\uFF0CGC\u9700\u8981\u4F7F\u7528\u7684\u5404\u79CD\u7EDF\u8BA1\u6570\u636E\uFF0CGC\u5404\u4E2A\u9636\u6BB5\u5728\u672C\u9875\u7684\u8FDB\u5C55\u72B6\u51B5\u7B49\u3002"]
        }), "\n", createVNode(_components.li, {
          children: ["\u4E00\u4E2A", createVNode(_components.strong, {
            children: "slots buffer"
          }), "\uFF0C\u8BB0\u5F55\u4E86\u6240\u6709\u6307\u5411\u672C\u9875\u5185\u5BF9\u8C61\u7684\u6307\u9488\uFF0C\u4EE5\u8282\u7701\u56DE\u6536\u65F6\u7684\u4E00\u4E9B\u626B\u63CF\u64CD\u4F5C\u3002"]
        }), "\n", createVNode(_components.li, {
          children: ["\u4E00\u4E2A", createVNode(_components.strong, {
            children: "skip list"
          }), "\uFF0C\u5C06\u672C\u9875\u5212\u5206\u4F4D\u591A\u4E2A\u533A\uFF08region\uFF09\u5E76\u7EF4\u62A4\u5404\u4E2A\u533A\u7684\u8FB9\u754C\uFF0C\u7528\u4E8E\u5FEB\u901F\u641C\u7D22\u9875\u4E0A\u7684\u5BF9\u8C61\u3002"]
        }), "\n"]
      }), "\n", createVNode(_components.p, {
        children: ["\u7D27\u8DDF\u7740header\u7684\u662F\u4E00\u4E2A", createVNode(_components.strong, {
          children: "bitmap"
        }), "\uFF0C\u4E0A\u9762\u7684\u6BCF\u4E2Abit\u5BF9\u5E94\u9875\u4E0A\u7684\u4E00\u4E2A\u5B57\uFF0C\u7528\u4E8E\u540E\u9762\u4F1A\u4ECB\u7ECD\u7684marking\u3002\u524D\u9762\u7684\u90E8\u5206\u630932\u4E2A\u5B57\u5BF9\u9F50\u540E\uFF0C\u5269\u4F59\u7684\u7A7A\u95F4\u624D\u662F\u7528\u4E8E\u5B58\u50A8\u5BF9\u8C61\u7684\u3002"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "\u6CE8\u610F\uFF1A"
      }), " \u6211\u4EEC\u8FD9\u91CC\u8BF4\u7684\u5783\u573E\u56DE\u6536\u5668\u53EA\u4F5C\u7528\u4E8E", createVNode(_components.strong, {
        children: "\u5806\u5185\u5B58"
      }), "\u3002\u56E0\u4E3A", createVNode(_components.strong, {
        children: "\u6808\u5185\u5B58"
      }), "\u7531\u64CD\u4F5C\u7CFB\u7EDF\u76F4\u63A5\u7BA1\u7406\uFF0C\u4E0D\u5728\u6211\u4EEC\u672C\u6587\u7684\u8BA8\u8BBA\u8303\u56F4\u5185\u3002"]
    }), "\n", createVNode(_components.h2, {
      id: "\u65B0\u751F\u4EE3\u7684gc\u7B56\u7565",
      children: "\u65B0\u751F\u4EE3\u7684GC\u7B56\u7565"
    }), "\n", createVNode(_components.p, {
      children: ["\u5783\u573E\u56DE\u6536\u7B97\u6CD5\uFF1A", createVNode(_components.strong, {
        children: "Scavenge(\u5177\u4F53\u5B9E\u73B0\u4E0A\u91C7\u7528Cheney\u7B97\u6CD5)"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["\u65B0\u751F\u4EE3\u4F1A\u5C06\u5185\u5B58\u5206\u6210\u76F8\u7B49\u5927\u5C0F\u7684\u4E24\u5757", createVNode(_components.strong, {
        children: "Semi-Space"
      }), "\uFF0C\u5206\u522B\u53EB\u505A", createVNode(_components.strong, {
        children: "From Space"
      }), "\u548C", createVNode(_components.strong, {
        children: "To Space"
      }), "\u3002", createVNode(_components.strong, {
        children: "From Space"
      }), "\u662F\u771F\u6B63\u7684\u4F7F\u7528\u5185\u5B58\uFF0C", createVNode(_components.strong, {
        children: "To Space"
      }), "\u662F\u7A7A\u95F2\u7684\uFF0C\u5728GC\u7684\u65F6\u5019\u624D\u4F1A\u7528\u5230\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5B9E\u9645\u5229\u7528\u8D77\u6765\u7684\u65B0\u751F\u4EE3\u5185\u5B58\u53EA\u6709\u6574\u4F53\u65B0\u751F\u4EE3\u5185\u5B58\u7684\u4E00\u534A\u3002"]
    }), "\n", createVNode(_components.p, {
      children: ["\u65B0\u751F\u4EE3\u4F7F\u7528\u7684\u662FScavenge\u7B97\u6CD5\uFF0C\u5177\u4F53\u5B9E\u73B0\u4F7F\u7528\u4E86", createVNode(_components.em, {
        children: "Cheney\u7B97\u6CD5"
      }), "\uFF0C\u6D41\u7A0B\u5982\u4E0B\uFF1A"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\u5E7F\u5EA6\u4F18\u5148\u904D\u5386", createVNode(_components.strong, {
          children: "From Space"
        }), "\u4E2D\u7684\u5BF9\u8C61\uFF0C\u628A\u5B58\u6D3B\u7684\u5BF9\u8C61\u590D\u5236\u5230", createVNode(_components.strong, {
          children: "To Space"
        }), "\u3002"]
      }), "\n", createVNode(_components.li, {
        children: ["\u904D\u5386\u5B8C\u6210\u540E\uFF0C\u6E05\u7A7A", createVNode(_components.strong, {
          children: "From Space"
        }), "\u3002"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "From Space"
        }), "\u548C", createVNode(_components.strong, {
          children: "To Space"
        }), "\u89D2\u8272\u4E92\u6362\uFF08\u79F0\u4E3A\u7FFB\u8F6C\uFF09\u3002"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["\u53E6\u5916\uFF0C\u590D\u5236\u540E\u7684\u5BF9\u8C61\u5728", createVNode(_components.strong, {
        children: "To Space"
      }), "\u4E2D\u5360\u7528\u7684\u5185\u5B58\u7A7A\u95F4\u662F\u8FDE\u7EED\u7684\uFF0C\u4E0D\u4F1A\u51FA\u73B0\u788E\u7247\u7684\u95EE\u9898\u3002\u56E0\u4E3A\u65B0\u751F\u4EE3\u7684GC\u76F8\u5BF9\u6BD4\u8F83\u9891\u7E41\uFF0C\u6240\u4EE5\u66F4\u4FA7\u91CD\u901F\u5EA6\u4E0A\u5C3D\u53EF\u80FD\u5FEB\u3002"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "\u6CE8\u610F\uFF1A"
      }), " ", createVNode(_components.strong, {
        children: "From Space"
      }), "\u53C8\u4F1A\u88AB\u5212\u5206\u4E3A", createVNode(_components.code, {
        children: "Nursery"
      }), "\u548C", createVNode(_components.code, {
        children: "Intermediate"
      }), "\u4E24\u5757\u533A\u57DF\u3002\u5BF9\u8C61\u7B2C\u4E00\u6B21\u5206\u914D\u5185\u5B58\u65F6\u5728", createVNode(_components.code, {
        children: "Nursery"
      }), "\u533A\u57DF\uFF0C\u7ECF\u5386\u8FC7\u4E00\u6B21GC\u540E\u8F6C\u79FB\u5230", createVNode(_components.code, {
        children: "Intermediate"
      }), "\u533A\u57DF\u3002"]
    }), "\n", createVNode(_components.h2, {
      id: "\u5BF9\u8C61\u664B\u5347\u7B56\u7565",
      children: "\u5BF9\u8C61\u664B\u5347\u7B56\u7565"
    }), "\n", createVNode(_components.p, {
      children: ["\u65B0\u751F\u4EE3\u7684\u5BF9\u8C61\u4E0D\u4F1A\u4E00\u76F4\u5B58\u5728\u4E8E\u8BE5\u533A\u57DF\u3002\u5F53\u6EE1\u8DB3\u4E00\u5B9A\u6761\u4EF6\u7684\u60C5\u51B5\u4E0B\uFF0C\u65B0\u751F\u4EE3\u7684\u5BF9\u8C61\u4F1A\u5F97\u5230", createVNode(_components.strong, {
        children: "\u664B\u5347\uFF08Promote\uFF09"
      }), "\uFF0C\u5373\u4ECE\u65B0\u751F\u4EE3\u8F6C\u79FB\u5230\u8001\u751F\u4EE3\u3002\u664B\u5347\u7684\u60C5\u51B5\u4E00\u822C\u6709\u4E24\u79CD\uFF1A"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\u7ECF\u5386\u4E00\u6B21GC\u540E\u4ECD\u7136\u5B58\u6D3B\u7684\u5BF9\u8C61\uFF0C\u5373", createVNode(_components.code, {
          children: "Intermediate"
        }), "\u4E2D\u7684\u3002"]
      }), "\n", createVNode(_components.li, {
        children: ["\u5BF9\u8C61\u590D\u5236\u5230", createVNode(_components.strong, {
          children: "To Space"
        }), "\u65F6\uFF0C", createVNode(_components.strong, {
          children: "To Space"
        }), "\u7684\u7A7A\u95F4\u5DF2\u7ECF\u4F7F\u7528\u4E8625%\u4EE5\u4E0A\u3002"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "\u8001\u751F\u4EE3\u7684gc\u7B56\u7565",
      children: "\u8001\u751F\u4EE3\u7684GC\u7B56\u7565"
    }), "\n", createVNode(_components.p, {
      children: ["\u5783\u573E\u56DE\u6536\u7B97\u6CD5\uFF1A", createVNode(_components.strong, {
        children: "Mark-Sweep(\u6807\u8BB0\u6E05\u9664\u7B97\u6CD5)"
      }), " + ", createVNode(_components.strong, {
        children: "Mark-Compact(\u6807\u8BB0\u6574\u7406\u7B97\u6CD5)"
      })]
    }), "\n", createVNode(_components.p, {
      children: "\u8001\u751F\u4EE3\u5185\u5B58\u4E5F\u5206\u4E3A\u4E24\u90E8\u5206\uFF1A"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "\u6307\u9488\u533A\uFF08Old Pointer Space\uFF09"
        }), "\uFF1A\u5982\u679C\u5BF9\u8C61\u53EF\u80FD\u6709\u6307\u5411\u5176\u4ED6\u5BF9\u8C61\u7684\u6307\u9488\uFF0C\u4FDD\u5B58\u5728\u8FD9\u91CC\u3002\u5927\u591A\u6570\u664B\u5347\u7684\u5BF9\u8C61\u90FD\u5728\u8FD9\u91CC\u3002"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "\u6570\u636E\u533A\uFF08Old Data Space\uFF09"
        }), "\uFF1A\u53EA\u4FDD\u5B58\u539F\u59CB\u5BF9\u8C61\u54CE\u90A3\u4E2A\uFF0C\u6CA1\u6709\u6307\u5411\u5176\u4ED6\u5BF9\u8C61\u7684\u6307\u9488\u3002"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["\u8001\u751F\u4EE3\u505A\u5783\u573E\u56DE\u6536\u65F6\u5305\u542B\u4E86\u4E24\u79CD\u7B97\u6CD5\uFF1A", createVNode(_components.strong, {
        children: ["\u6807\u8BB0\u6E05\u9664(Mark Sweep)", createVNode(_components.strong, {
          children: "\u548C"
        }), "\u6807\u8BB0\u6574\u7406\uFF08Mark Compact\uFF09"]
      }), "\u3002\u53EA\u6709\u4E09\u4E2A\u6B65\u9AA4\uFF1A"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Marking \u6807\u8BB0"
      }), "\n", createVNode(_components.li, {
        children: "Sweeping \u6E05\u9664"
      }), "\n", createVNode(_components.li, {
        children: "Compacting \u6574\u7406"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "marking-\u6807\u8BB0",
      children: "Marking \u6807\u8BB0"
    }), "\n", createVNode(_components.p, {
      children: ["\u6807\u8BB0\u5C31\u662F\u627E\u5230\u6240\u6709\u53EF\u8BBF\u95EE\u5BF9\u8C61\u7684\u8FC7\u7A0B\u3002\u4E24\u79CD\u7B97\u6CD5\u7684\u6807\u8BB0\u6D41\u7A0B\u662F\u4E00\u6837\u7684\u3002\u4F7F\u7528\u4E86", createVNode(_components.strong, {
        children: "\u4E09\u8272\u6807\u8BB0\u6CD5"
      }), "\uFF1A"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "00"
        }), "\uFF1A\u767D\u8272\u3002\u8868\u793A\u672A\u88AB\u5F15\u7528\u3002"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "10"
        }), "\uFF1A\u7070\u8272\u3002\u8868\u793A\u88AB\u5F15\u7528\uFF0C\u4F46\u662F\u5176\u5F15\u7528\u7684\u5BF9\u8C61\u8FD8\u6CA1\u6709\u904D\u5386\u5B8C\u3002"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "11"
        }), "\uFF1A\u9ED1\u8272\u3002\u8868\u793A\u88AB\u5F15\u7528\uFF0C\u5E76\u4E14\u5176\u5F15\u7528\u7684\u5BF9\u8C61\u5DF2\u7ECF\u904D\u5386\u5B8C\u6210\u3002"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["\u9996\u5148\u5C06\u6240\u6709\u5BF9\u8C61\u6807\u8BB0\u4E3A", createVNode(_components.strong, {
        children: "\u767D\u8272"
      }), "\uFF0C\u7136\u540E\u4ECE\u6839\u96C6", createVNode(_components.em, {
        children: "Root Set"
      }), "\uFF08\u6267\u884C\u6808\u548C\u5168\u5C40\u5BF9\u8C61\uFF09\u5F00\u59CB\uFF0C\u4EE5", createVNode(_components.strong, {
        children: "\u6DF1\u5EA6\u4F18\u5148\u904D\u5386"
      }), "\u7684\u65B9\u5F0F\u4E3A\u8BBF\u95EE\u5230\u7684\u5BF9\u8C61\u6DFB\u52A0", createVNode(_components.strong, {
        children: "\u7070/\u9ED1\u8272"
      }), "\u3002"]
    }), "\n", createVNode(_components.h3, {
      id: "sweeping-\u6E05\u9664",
      children: "Sweeping \u6E05\u9664"
    }), "\n", createVNode(_components.p, {
      children: ["\u6E05\u9664\u88AB\u6807\u8BB0\u4E3A\u767D\u8272\u7684\u5BF9\u8C61\u3002\u8FD9\u4E2A\u7ED3\u679C\u4F1A\u9020\u6210\u5185\u5B58\u7A7A\u95F4\u4E0D\u8FDE\u7EED\u7684\u60C5\u51B5\u3002\u6E05\u9664\u7684\u672C\u8D28\u662F", createVNode(_components.strong, {
        children: "\u5C06\u5185\u5B58\u7684\u5730\u5740\u6807\u8BB0\u4F4D\u7A7A\u95F2"
      }), "\uFF0C\u4EE3\u7801\u5C42\u9762\u4E0A\u662F\u628A\u5185\u5B58\u5730\u5740\u4FDD\u5B58\u5230\u4E00\u4E2A\u53EB", createVNode(_components.code, {
        children: "Free List"
      }), "\u7684\u6570\u636E\u7ED3\u6784\u4E2D\u3002"]
    }), "\n", createVNode(_components.h3, {
      id: "compacting-\u6574\u7406",
      children: "Compacting \u6574\u7406"
    }), "\n", createVNode(_components.p, {
      children: "\u4FEE\u6539\u4ECD\u7136\u5B58\u6D3B\u7684\u5BF9\u8C61\u7684\u5185\u5B58\u5730\u5740\uFF0C\u5C06\u4E0D\u540C\u5185\u5B58\u9875\u4E0A\u7684\u5BF9\u8C61\u6574\u5408\u5230\u4E00\u8D77\uFF0C\u4F7F\u5F97\u5185\u5B58\u7A7A\u95F4\u7D27\u51D1\u6709\u5E8F\u3002\u8FD9\u4E2A\u8FC7\u7A0B\u6BD4\u8F83\u6D88\u8017\u6027\u80FD\u3002"
    }), "\n", createVNode(_components.h2, {
      id: "\u56DE\u6536\u7B97\u6CD5\u6BD4\u8F83",
      children: "\u56DE\u6536\u7B97\u6CD5\u6BD4\u8F83"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "\u56DE\u6536\u7B97\u6CD5"
          }), createVNode(_components.th, {
            children: "Scavenge"
          }), createVNode(_components.th, {
            children: "Mark-Sweep"
          }), createVNode(_components.th, {
            children: "Mark-Compact"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "\u901F\u5EA6"
          }), createVNode(_components.td, {
            children: "\u5FEB"
          }), createVNode(_components.td, {
            children: "\u4E2D"
          }), createVNode(_components.td, {
            children: "\u6162"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "\u7A7A\u95F4"
          }), createVNode(_components.td, {
            children: "\u53CC\u500D\u7A7A\u95F4\uFF08\u65E0\u788E\u7247\uFF09"
          }), createVNode(_components.td, {
            children: "\u5C11\uFF08\u6709\u788E\u7247\uFF09"
          }), createVNode(_components.td, {
            children: "\u5C11\uFF08\u65E0\u788E\u7247\uFF09"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "\u662F\u5426\u79FB\u52A8\u5BF9\u8C61"
          }), createVNode(_components.td, {
            children: "\u662F"
          }), createVNode(_components.td, {
            children: "\u5426"
          }), createVNode(_components.td, {
            children: "\u662F"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["\u57FA\u4E8E", createVNode(_components.strong, {
        children: "\u5F31\u5206\u4EE3\u5047\u8BF4"
      }), "\u7406\u8BBA\uFF0C\u5B9E\u73B0\u4E0D\u540C\u5206\u4EE3\u91C7\u7528\u4E0D\u540C\u7B56\u7565\u7684\u5783\u573E\u56DE\u6536\u7B97\u6CD5\uFF0C\u4EE5\u8FBE\u5230\u7A7A\u95F4\u4E0E\u65F6\u95F4\u7684\u6700\u4F18\u5E73\u8861\u89E3\u3002"]
    }), "\n", createVNode(_components.h2, {
      id: "\u5783\u573E\u56DE\u6536\u673A\u5236\u7684\u8FDB\u9636\u95EE\u9898",
      children: "\u5783\u573E\u56DE\u6536\u673A\u5236\u7684\u8FDB\u9636\u95EE\u9898"
    }), "\n", createVNode(_components.p, {
      children: "\u5BF9\u4E8E\u8FDB\u9636\u95EE\u9898\uFF0C\u8FD9\u91CC\u53EA\u505A\u7B80\u5355\u4E86\u89E3\u3002\u5982\u679C\u4F60\u6709\u5174\u8DA3\uFF0C\u53EF\u4EE5\u81EA\u884C\u67E5\u9605\u8D44\u6599\u4E86\u89E3\u66F4\u591A\u4FE1\u606F\u3002\u6BD5\u7ADF\u771F\u6B63\u7684\u77E5\u8BC6\u4E0D\u662F\u4E00\u7BC7\u6587\u7AE0\u80FD\u591F\u8BB2\u660E\u767D\u7684\u3002\u6BD4\u8D77\u505A\u4E00\u4E2A\u77E5\u8BC6\u7684\u5B9A\u4E49\u8005\uFF0C\u6211\u66F4\u5E0C\u671B\u80FD\u591F\u6210\u4E3A\u77E5\u8BC6\u7684\u542F\u8499\u8005\uFF0C\u8BA9\u5927\u5BB6\u80FD\u5E26\u7740\u66F4\u591A\u7684\u7591\u95EE\u53BB\u601D\u8003\uFF0C\u53BB\u6574\u7406\u81EA\u5DF1\u7684\u77E5\u8BC6\u5E93\u3002"
    }), "\n", createVNode(_components.h3, {
      id: "\u4E3A\u4EC0\u4E48v8\u5F15\u64CE\u9700\u8981\u9650\u5236\u5185\u5B58\u5927\u5C0F",
      children: "\u4E3A\u4EC0\u4E48V8\u5F15\u64CE\u9700\u8981\u9650\u5236\u5185\u5B58\u5927\u5C0F"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "\u6D4F\u89C8\u5668\u73AF\u5883\u5F88\u5C11\u4F1A\u9047\u5230\u4F7F\u7528\u5927\u91CF\u5185\u5B58\u7684\u573A\u666F\uFF0C\u56E0\u6B64\u6CA1\u6709\u5FC5\u8981\u5C06\u6700\u5927\u5185\u5B58\u8BBE\u7F6E\u5F97\u8FC7\u9AD8\u3002"
      }), "\n", createVNode(_components.li, {
        children: "JavaScript\u662F\u5355\u7EBF\u7A0B\u673A\u5236\uFF0C\u5783\u573E\u56DE\u6536\u540C\u6837\u4F1A\u963B\u585EJS\u4E3B\u7EBF\u7A0B\u903B\u8F91\u7684\u6267\u884C\u3002"
      }), "\n", createVNode(_components.li, {
        children: ["\u5783\u573E\u56DE\u6536\u672C\u8EAB\u4E5F\u662F\u4E00\u4EF6\u975E\u5E38\u8017\u65F6\u7684\u64CD\u4F5C\uFF0C\u6240\u4EE5\u4F7F\u7528\u5185\u5B58\u8FC7\u5927\u4F1A\u5BFC\u81F4\u4E3B\u7EBF\u7A0B\u51FA\u73B0\u5361\u987F\u73B0\u8C61\uFF08\u8FD9\u79CD\u73B0\u8C61\u53EB\u505A\u5168\u505C\u987F", createVNode(_components.code, {
          children: "Stop The World"
        }), "\uFF09\uFF0C\u9020\u6210\u6D4F\u89C8\u5668\u957F\u65F6\u95F4\u65E0\u6CD5\u5F97\u5230\u54CD\u5E94\u3002"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["\u6309\u7167\u5B98\u65B9\u7684\u8BF4\u6CD5\uFF0C\u4EE51.5GB\u7684\u5783\u573E\u56DE\u6536\u7684\u5806\u5185\u5B58\u4E3A\u4F8B\uFF0CV8\u505A\u4E00\u6B21", createVNode(_components.strong, {
        children: "\u5C0F\u7684\u5783\u573E\u56DE\u6536"
      }), "\u9700\u8981", createVNode(_components.strong, {
        children: "50ms"
      }), "\u4EE5\u4E0A\uFF0C\u800C\u505A\u4E00\u6B21", createVNode(_components.strong, {
        children: "\u975E\u589E\u91CF\u5F0F\u56DE\u6536"
      }), "\u751A\u81F3\u9700\u8981", createVNode(_components.strong, {
        children: "1s\u4EE5\u4E0A"
      }), "\uFF0C\u53EF\u89C1\u5176\u8017\u65F6\u4E4B\u4E45\uFF0C\u800C\u5728\u8FD91s\u7684\u65F6\u95F4\u5185\uFF0C", createVNode(_components.strong, {
        children: "\u5E94\u7528\u7684\u6027\u80FD\u548C\u54CD\u5E94\u65F6\u95F4\u4F1A\u5927\u5927\u4E0B\u964D"
      }), "\uFF0C\u8FD9\u6837\u7684\u60C5\u51B5\u65E0\u8BBA\u662F\u524D\u7AEF\u8FD8\u662F\u540E\u7AEF\uFF0C\u90FD\u662F\u65E0\u6CD5\u63A5\u53D7\u7684\u3002\u56E0\u6B64\u5728\u5F53\u65F6\u7684\u60C5\u51B5\u4E0B\uFF0C\u76F4\u63A5\u9650\u5236\u5806\u5185\u5B58\u662F\u4E00\u4E2A\u597D\u7684\u9009\u62E9\u3002"]
    }), "\n", createVNode(_components.h3, {
      id: "\u4EC0\u4E48\u662F\u589E\u91CF\u6807\u8BB0\u5EF6\u8FDF\u6E05\u9664\u548C\u589E\u91CF\u6574\u7406",
      children: "\u4EC0\u4E48\u662F\u589E\u91CF\u6807\u8BB0\u3001\u5EF6\u8FDF\u6E05\u9664\u548C\u589E\u91CF\u6574\u7406"
    }), "\n", createVNode(_components.p, {
      children: "\u4E3A\u4E86\u8FDB\u4E00\u6B65\u63D0\u5347V8\u7684\u6027\u80FD\uFF0C\u5783\u573E\u56DE\u6536\u5668\u5DF2\u7ECF\u5F00\u59CB\u5F80\u589E\u91CF\u5F0F\u3001\u5E76\u53D1\u5F0F\u3001\u5E76\u884C\u5F0F\u6539\u8FDB\u4E86\u3002\u76EE\u524D\u4E3B\u8981\u7684\u4F18\u5316\u53D1\u751F\u5728\u8001\u751F\u4EE3\u7684GC\u4E0A\uFF0C\u56E0\u4E3A\u65B0\u751F\u4EE3\u7684GC\u4E00\u822C\u5F88\u77ED\u6682\uFF0C\u53EF\u4F18\u5316\u7684\u7A7A\u95F4\u548C\u610F\u4E49\u4E0D\u5927\u3002\u4ECE\u5B98\u65B9\u7684\u8BF4\u6CD5\u4E0A\u6211\u4EEC\u53EF\u4EE5\u5F97\u77E5\uFF0C\u4E00\u6B21\u5B8C\u6574\u7684\u5783\u573E\u56DE\u6536\u975E\u5E38\u8017\u65F6\uFF0C\u91C7\u7528\u589E\u91CF\u7684\u65B9\u5F0F\u53EF\u4EE5\u5C06\u65F6\u95F4\u62C6\u5206\u4EE5\u8FBE\u5230\u66F4\u7406\u60F3\u7684\u6548\u679C\uFF08\u8FD0\u884C\u65F6\u95F4\u4E0D\u8D85\u8FC75ms\uFF09\u3002"
    }), "\n", createVNode(_components.p, {
      children: "\u5728\u6807\u8BB0\u9636\u6BB5\uFF0CV8\u5F15\u5165\u4E86\u589E\u91CF\u6807\u8BB0\u7684\u6982\u5FF5\uFF1B\u5728\u6E05\u9664\u9636\u6BB5\uFF0CV8\u5F15\u5165\u4E86\u5E76\u53D1\u3001\u5E76\u884C\u548C\u5EF6\u8FDF\u6E05\u9664\u7684\u6982\u5FF5\uFF1B\u5728\u6574\u7406\u9636\u6BB5\uFF0CV8\u540C\u6837\u5F15\u5165\u4E86\u589E\u91CF\u6574\u7406\u7684\u6982\u5FF5\u3002"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: "\u5F53\u7136\u91C7\u7528\u589E\u91CF\u7684\u65B9\u5F0F\u6700\u5927\u7684\u95EE\u9898\u662F\u5982\u4F55\u4FDD\u8BC1\u5BF9\u8C61\u7684\u8BEF\u6807\u8BB0\u3002"
      }), " \u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0CV8\u5728\u5199\u5C4F\u969C\u7684\u57FA\u7840\u4E0A\uFF0C\u989D\u5916\u6DFB\u52A0\u4E86\u4E00\u4E2A\u9700\u8981\u8BB0\u5F55\u7684\u60C5\u5F62\uFF1A", createVNode(_components.strong, {
        children: "\u6BCF\u6B21\u4EA7\u751F\u4ECE\u9ED1\u8272\u5BF9\u8C61\u6307\u5411\u767D\u8272\u5BF9\u8C61\u7684\u5F15\u7528\u7684\u65F6\u5019\uFF0C\u5C06\u88AB\u6307\u7684\u5BF9\u8C61\u91CD\u65B0\u6807\u8BB0\u4E3A\u7070\u8272\uFF0C\u653E\u56DE\u6807\u8BB0\u7684\u961F\u5217\u4E2D\uFF0C\u8FD9\u6837\u4FBF\u4E0D\u4F1A\u8BEF\u5C06\u5B58\u6D3B\u7684\u5BF9\u8C61\u6807\u8BB0\u4E3A\u6B7B\u4EA1\u4E86\u3002"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "\u4EC0\u4E48\u662F\u5199\u5C4F\u969C",
      children: "\u4EC0\u4E48\u662F\u5199\u5C4F\u969C"
    }), "\n", createVNode(_components.p, {
      children: ["\u6839\u636E\u524D\u9762\u6240\u5B66\u7684\u77E5\u8BC6\uFF0C\u6211\u4EEC\u6765\u60F3\u4E00\u4E2A\u95EE\u9898\u3002", createVNode(_components.strong, {
        children: "\u5982\u679C\u65B0\u751F\u4EE3\u6709\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5B83\u53EA\u6709\u4E00\u4E2A\u5F15\u7528\uFF0C\u800C\u5B83\u7684\u5F15\u7528\u5728\u8001\u751F\u4EE3\uFF0C\u8FD9\u65F6\u5019\u5982\u679C\u4FDD\u8BC1\u65B0\u751F\u4EE3\u8FDB\u884C\u5783\u573E\u56DE\u6536\u65F6\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u4E0D\u4F1A\u88AB\u6E05\u9664\u6389\u5462\uFF1F"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["\u5BF9\u4E8E\u8FD9\u4E2A\u95EE\u9898\uFF0CV8\u9009\u62E9\u7684\u89E3\u51B3\u65B9\u6848\u662F\u4F7F\u7528", createVNode(_components.strong, {
        children: "\u5199\u5C4F\u969C\uFF08write barrier\uFF09"
      }), "\uFF0C\u5373\u6BCF\u6B21\u5F80\u4E00\u4E2A\u5BF9\u8C61\u5199\u5165\u4E00\u4E2A\u6307\u9488\uFF08", createVNode(_components.em, {
        children: "\u6DFB\u52A0\u5F15\u7528"
      }), "\uFF09\u7684\u65F6\u5019\uFF0C\u90FD\u6267\u884C\u4E00\u6BB5\u4EE3\u7801\uFF0C\u8FD9\u6BB5\u4EE3\u7801\u4F1A\u68C0\u67E5\u8FD9\u4E2A\u88AB\u5199\u5165\u7684\u6307\u9488\u662F\u5426\u662F\u7531\u8001\u751F\u4EE3\u5BF9\u8C61\u6307\u5411\u65B0\u751F\u4EE3\u5BF9\u8C61\u7684\uFF0C\u8FD9\u6837\u6211\u4EEC\u5C31\u80FD\u660E\u786E\u5730\u8BB0\u5F55\u4E0B\u6240\u6709\u4ECE\u8001\u751F\u4EE3\u6307\u5411\u65B0\u751F\u4EE3\u7684\u6307\u9488\u4E86\u3002\u8FD9\u4E2A\u7528\u4E8E\u8BB0\u5F55\u7684\u6570\u636E\u7ED3\u6784\u53EB\u505A", createVNode(_components.strong, {
        children: "StoreBuffer"
      }), "\uFF0C\u6BCF\u4E2A\u5806\u7EF4\u62A4\u4E00\u4E2A\uFF0C\u4E3A\u4E86\u9632\u6B62\u5B83\u65E0\u9650\u589E\u957F\u4E0B\u53BB\uFF0C\u4F1A\u5B9A\u671F\u5730\u8FDB\u884C\u6E05\u7406\u3001\u53BB\u91CD\u548C\u66F4\u65B0\u3002\u8FD9\u6837\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u626B\u63CF\uFF0C\u5F97\u77E5", createVNode(_components.code, {
        children: "\u6839\u5BF9\u8C61->\u65B0\u751F\u4EE3"
      }), "\u548C", createVNode(_components.code, {
        children: "\u65B0\u751F\u4EE3->\u65B0\u751F\u4EE3"
      }), "\u7684\u5F15\u7528\uFF0C\u901A\u8FC7\u68C0\u67E5", createVNode(_components.strong, {
        children: "StoreBuffer"
      }), "\uFF0C\u5F97\u77E5", createVNode(_components.code, {
        children: "\u8001\u751F\u4EE3->\u65B0\u751F\u4EE3"
      }), "\u7684\u5F15\u7528\uFF0C\u5C31\u6CA1\u6709\u6F0F\u7F51\u4E4B\u9C7C\uFF0C\u53EF\u4EE5\u5B89\u5FC3\u5730\u5BF9\u65B0\u751F\u4EE3\u8FDB\u884C\u56DE\u6536\u4E86\u3002"]
    }), "\n", createVNode(_components.h3, {
      id: "\u4EC0\u4E48\u662F\u9690\u85CF\u7C7B",
      children: "\u4EC0\u4E48\u662F\u9690\u85CF\u7C7B"
    }), "\n", createVNode(_components.p, {
      children: "\u5728\u9605\u8BFB\u4E0B\u9762\u7684\u5185\u5BB9\u4E4B\u524D\uFF0C\u8BF7\u660E\u786E\u4E24\u4E2A\u91CD\u70B9\uFF1A"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "V8\u4F1A\u4E3A\u6BCF\u4E2A\u5BF9\u8C61\u5173\u8054\u4E00\u4E2A\u9690\u85CF\u7C7B\u3002"
      }), "\n", createVNode(_components.li, {
        children: "\u9690\u85CF\u7C7B\u7684\u76EE\u7684\u662F\u4F18\u5316\u5C5E\u6027\u7684\u8BBF\u95EE\u901F\u5EA6\u3002"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "\u9690\u85CF\u7C7B\u7684\u51FA\u73B0\u662F\u4E3A\u4E86\u4F18\u5316JavaScript\u5C5E\u6027\u503C\u7684\u67E5\u627E\u95EE\u9898\uFF0C\u63D0\u5347\u8FD9\u5757\u7684\u6027\u80FD\u3002\u7531\u4E8EJavaScript\u662F\u52A8\u6001\u8BED\u8A00\uFF0C\u53D8\u91CF\u968F\u65F6\u53EF\u4EE5\u53D8\u6362\u7C7B\u578B\u3002\u4E5F\u5C31\u662F\u8BF4\u5B83\u4E0D\u80FD\u50CFJava\u90A3\u6837\uFF0C\u5728\u8FD0\u884C\u65F6\u5C31\u786E\u5B9A\u5C5E\u6027\u7684\u503C\uFF08\u6216\u8005\u6307\u9488\uFF09\u5728\u5185\u5B58\u7684\u504F\u79FB\u91CF\uFF0C\u8FD9\u5C31\u5BFC\u81F4\u4E86JavaScript\u7684\u5C5E\u6027\u67E5\u627E\u76F8\u8F83\u4E8E\u9759\u6001\u8BED\u8A00\u4F1A\u6162\u5F88\u591A\u3002"
    }), "\n", createVNode(_components.p, {
      children: ["V8\u4F7F\u7528\u4E86", createVNode(_components.strong, {
        children: "\u9690\u85CF\u7C7B"
      }), "\u7684\u65B9\u5F0F\u6765\u6A21\u62DF\u7C7B\u4F3C\u9759\u6001\u8BED\u8A00\u7684\u67E5\u627E\u65B9\u5F0F\uFF0C\u505A\u5230\u5C3D\u53EF\u80FD\u5730\u63D0\u5347\u67E5\u627E\u901F\u5EA6\u3002\u4ECE\u7ED3\u6784\u4E0A\u6765\u8BF4\uFF0C\u9690\u85CF\u7C7B\u548CJava\u4E2D\u7684\u56FA\u5B9A\u5BF9\u8C61\u7ED3\u6784\u975E\u5E38\u76F8\u4F3C\u3002"]
    }), "\n", createVNode(_components.h3, {
      id: "\u4EC0\u4E48\u662F\u5185\u8054\u7F13\u5B58",
      children: "\u4EC0\u4E48\u662F\u5185\u8054\u7F13\u5B58"
    }), "\n", createVNode(_components.p, {
      children: ["\u9664\u4E86\u9690\u85CF\u7C7B\uFF0CV8\u8FD8\u5229\u7528\u4E86", createVNode(_components.strong, {
        children: "\u5185\u8054\u7F13\u5B58"
      }), "\u7684\u65B9\u5F0F\uFF0C\u8FDB\u4E00\u6B65\u63D0\u5347\u4E86JavaScript\u7684\u6027\u80FD\u3002V8\u4F1A\u7EF4\u62A4\u4E00\u4E2A\u8BB0\u5F55\u6700\u8FD1\u6709\u4E00\u6BB5\u65F6\u95F4\u5185\u8C03\u7528\u65B9\u6CD5\u65F6\u4F20\u5165\u7684\u53C2\u6570\u7C7B\u578B\u3002\u4E00\u65E6V8\u5F15\u64CE\u5BF9\u53C2\u6570\u7684\u7C7B\u578B\u8FDB\u884C\u4E86\u6B63\u786E\u7684\u9884\u6D4B\uFF0C\u5C06\u4F7F\u5F97\u5F15\u64CE\u8D8A\u8FC7\u89E3\u6790\u5982\u4F55\u8BBF\u95EE\u7C7B\u5C5E\u6027\u7684\u8FC7\u7A0B\uFF0C\u76F4\u63A5\u4F7F\u7528\u4E4B\u524D\u7F13\u5B58\u7684\u4FE1\u606F\u76F4\u63A5\u83B7\u5F97\u9690\u85CF\u7C7B\u5E76\u5BF9\u5BF9\u8C61\u5C5E\u6027\u7684\u8FDB\u884C\u8BBF\u95EE\u3002"]
    }), "\n", createVNode(_components.h3, {
      id: "\u4EC0\u4E48\u662Fhotspot\u70ED\u70B9\u4EE3\u7801\u6536\u96C6",
      children: "\u4EC0\u4E48\u662FHotSpot\u70ED\u70B9\u4EE3\u7801\u6536\u96C6"
    }), "\n", createVNode(_components.p, {
      children: "\u5BF9\u4E8E\u53CD\u590D\u591A\u6B21\u88AB\u4F7F\u7528\u7684\u4EE3\u7801\uFF0CV8\u4F1A\u5C06\u8FD9\u5757\u4EE3\u7801\u7684\u5B57\u8282\u7801\u7F16\u8BD1\u6210\u66F4\u4E3A\u9AD8\u6548\u7684\u673A\u5668\u7801\uFF0C\u7136\u540E\u5F53\u518D\u6B21\u88AB\u6267\u884C\u8FD9\u6BB5\u88AB\u4F18\u5316\u7684\u4EE3\u7801\u65F6\uFF0C\u53EA\u9700\u8981\u6267\u884C\u7F16\u8BD1\u540E\u7684\u673A\u5668\u7801\u5C31\u53EF\u4EE5\u4E86\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u5927\u5927\u63D0\u5347\u4EE3\u7801\u7684\u6267\u884C\u6548\u7387\u3002"
    }), "\n", createVNode(_components.h2, {
      id: "\u603B\u7ED3",
      children: "\u603B\u7ED3"
    }), "\n", createVNode(_components.p, {
      children: "\u8BB2\u4E86\u8FD9\u4E48\u591A\uFF0C\u4E5F\u4E0D\u77E5\u9053\u4F60\u5B66\u4F1A\u4E86\u6CA1\u6709\uFF1F\u6211\u60F3\u4E86\u51E0\u4E2A\u95EE\u9898\u6765\u8003\u8003\u4F60\u3002"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "\u65B0\u751F\u4EE3\u53D8\u91CF\u662F\u5982\u4F55\u8FDB\u884C\u63D0\u5347\u7684\uFF1F"
      }), "\n", createVNode(_components.li, {
        children: "\u65B0\u751F\u4EE3\u5BF9\u8C61\u4EC5\u88AB\u8001\u751F\u4EE3\u5F15\u7528\u65F6\uFF0C\u65B0\u751F\u4EE3\u68C0\u67E5\u65F6\u5982\u4F55\u8BC6\u522B\u5BF9\u8C61\u88AB\u5F15\u7528\uFF1F"
      }), "\n", createVNode(_components.li, {
        children: "\u7531\u4E8EJavaScript\u7684\u7075\u6D3B\u6027\uFF0C\u5BFC\u81F4\u53EA\u6709\u5728\u8FD0\u884C\u65F6\u624D\u80FD\u786E\u5B9A\u6570\u636E\u5360\u7528\u7A7A\u95F4\u7684\u5927\u5C0F\uFF0C\u8FD9\u6837\u4F1A\u4F7F\u5185\u5B58\u8BFB\u65F6\u9700\u8981\u8017\u8D39\u66F4\u591A\u7684\u65F6\u95F4\u3002\u90A3\u4E48V8\u5185\u5B58\u7BA1\u7406\u673A\u5236\u662F\u5982\u4F55\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u7684\uFF1F"
      }), "\n", createVNode(_components.li, {
        children: "\u6211\u4EEC\u5728\u5199\u4EE3\u7801\u7684\u65F6\u5019\u7279\u522B\u6CE8\u91CD\u4EE3\u7801\u7684\u590D\u7528\u6027\u3002\u90A3\u4E48\uFF0C\u5BF9\u4E8E\u8FD9\u9897\u591A\u6B21\u91CD\u590D\u5229\u7528\u7684\u4EE3\u7801\uFF0CV8\u5982\u4F55\u5E2E\u52A9\u6211\u4EEC\u505A\u4F18\u5316\u5462\uFF1F"
      }), "\n"]
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
const url = "src/content/blog/V8%E5%BC%95%E6%93%8E%E7%9A%84%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E6%9C%BA%E5%88%B6.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/blog/V8引擎的垃圾回收机制.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/blog/V8引擎的垃圾回收机制.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
