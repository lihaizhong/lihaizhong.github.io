import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';
import { $ as $$Image } from './chunk.BFavZmP-.js';

const __0_______assets_images_WX20191121_020426_png__ = new Proxy({"src":"/astro_assets/asset.BV20h7SQ.png","width":1002,"height":465,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/assets/images/WX20191121-020426.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/assets/images/WX20191121-020426.png");
							return target[name];
						}
					});

const __1_______assets_images_WX20191121_020346_png__ = new Proxy({"src":"/astro_assets/asset.CtLxTJZw.png","width":1009,"height":488,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/assets/images/WX20191121-020346.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/assets/images/WX20191121-020346.png");
							return target[name];
						}
					});

const frontmatter = {
  "title": "前端如何实现模糊搜索",
  "pubDate": "Wed Nov 20 2019 23:17:07 GMT+0800",
  "description": ""
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "算法简介",
    "text": "算法简介"
  }, {
    "depth": 2,
    "slug": "创建动态规划方程",
    "text": "创建动态规划方程"
  }, {
    "depth": 2,
    "slug": "代码实现与优化",
    "text": "代码实现与优化"
  }, {
    "depth": 2,
    "slug": "在模糊搜索中的应用",
    "text": "在模糊搜索中的应用"
  }, {
    "depth": 2,
    "slug": "结论",
    "text": "结论"
  }, {
    "depth": 2,
    "slug": "题外话",
    "text": "题外话"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    annotation: "annotation",
    "astro-image": "astro-image",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    math: "math",
    mi: "mi",
    mn: "mn",
    mo: "mo",
    mrow: "mrow",
    mstyle: "mstyle",
    mtable: "mtable",
    mtd: "mtd",
    mtext: "mtext",
    mtr: "mtr",
    ol: "ol",
    p: "p",
    path: "path",
    pre: "pre",
    semantics: "semantics",
    span: "span",
    strong: "strong",
    svg: "svg",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, _component0 = _components["astro-image"];
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "模糊搜索大家在日常开发中应该经常接触。一般来说，模糊搜索多由后端完成。但是如果数据量只有几十条或者几百条，用后端进行模糊搜索明显会增加http请求的压力。这时候，前端模糊搜索就派上用场了。前端模糊搜索主要针对数据量相对较少，数据变动相对较小的结果。后端一次性返回所有数据，前端根据已有数据进行模糊搜索，并将最理想的结果返回给用户。"
    }), "\n", createVNode(_components.p, {
      children: ["前端模糊搜索的核心算法是", createVNode(_components.strong, {
        children: "最短编辑距离算法"
      }), "。什么是最短编辑距离？简单来说，最短编辑距离就是从字符串A变成字符串B需要进行几步操作。这其中涉及到了字符的", createVNode(_components.code, {
        children: "增"
      }), "、", createVNode(_components.code, {
        children: "删"
      }), "、", createVNode(_components.code, {
        children: "改"
      }), "三种操作。下面我们来具体介绍下算法原理和实现。"]
    }), "\n", createVNode(_components.h2, {
      id: "算法简介",
      children: "算法简介"
    }), "\n", createVNode(_components.p, {
      children: ["最短编辑距离算法，又叫Levenshitein距离算法。是由俄罗斯数学家", createVNode(_components.code, {
        children: "Vladimir Levenshtein"
      }), "在1965年提出的。是指字符串A转换成字符串B所需的最少操作。其中包括的操作有："]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "删除一个字符"
      }), "\n", createVNode(_components.li, {
        children: "插入一个字符"
      }), "\n", createVNode(_components.li, {
        children: "修改一个字符"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "一般来说，两个字符串的编辑距离越短，则这两个字符越相似。如果两个字符串相等，则它们的编辑距离为0。不难看出，两个字符串的编辑距离肯定不会超过字符串的最大长度。"
    }), "\n", createVNode(_components.h2, {
      id: "创建动态规划方程",
      children: "创建动态规划方程"
    }), "\n", createVNode(_components.p, {
      children: ["最短编辑距离算法通过将两个字符串拆分成字符，然后进行逐一比较并获得相应的值，最终得到最短编辑距离，这里我们使用矩阵表示。下面我们来对矩阵进行分析，首先我们定义", createVNode(_components.code, {
        children: "[V0, H0]"
      }), "为0，对应的行和列依次递增。生成的默认矩阵如下："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {}), createVNode(_components.th, {}), createVNode(_components.th, {
            children: "H0"
          }), createVNode(_components.th, {
            children: "H1"
          }), createVNode(_components.th, {
            children: "H2"
          }), createVNode(_components.th, {
            children: "H3"
          }), createVNode(_components.th, {
            children: "H4"
          }), createVNode(_components.th, {
            children: "H5"
          }), createVNode(_components.th, {
            children: "H6"
          }), createVNode(_components.th, {
            children: "H7"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {}), createVNode(_components.td, {}), createVNode(_components.td, {
            children: "0"
          }), createVNode(_components.td, {
            children: "质"
          }), createVNode(_components.td, {
            children: "量"
          }), createVNode(_components.td, {
            children: "保"
          }), createVNode(_components.td, {
            children: "证"
          }), createVNode(_components.td, {
            children: "金"
          }), createVNode(_components.td, {
            children: "总"
          }), createVNode(_components.td, {
            children: "额"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "V0"
          }), createVNode(_components.td, {
            children: "0"
          }), createVNode(_components.td, {
            children: "0"
          }), createVNode(_components.td, {
            children: "1"
          }), createVNode(_components.td, {
            children: "2"
          }), createVNode(_components.td, {
            children: "3"
          }), createVNode(_components.td, {
            children: "4"
          }), createVNode(_components.td, {
            children: "5"
          }), createVNode(_components.td, {
            children: "6"
          }), createVNode(_components.td, {
            children: "7"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "V1"
          }), createVNode(_components.td, {
            children: "固"
          }), createVNode(_components.td, {
            children: "1"
          }), createVNode(_components.td, {}), createVNode(_components.td, {}), createVNode(_components.td, {}), createVNode(_components.td, {}), createVNode(_components.td, {}), createVNode(_components.td, {}), createVNode(_components.td, {})]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "V2"
          }), createVNode(_components.td, {
            children: "定"
          }), createVNode(_components.td, {
            children: "2"
          }), createVNode(_components.td, {}), createVNode(_components.td, {}), createVNode(_components.td, {}), createVNode(_components.td, {}), createVNode(_components.td, {}), createVNode(_components.td, {}), createVNode(_components.td, {})]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "V3"
          }), createVNode(_components.td, {
            children: "租"
          }), createVNode(_components.td, {
            children: "3"
          }), createVNode(_components.td, {}), createVNode(_components.td, {}), createVNode(_components.td, {}), createVNode(_components.td, {}), createVNode(_components.td, {}), createVNode(_components.td, {}), createVNode(_components.td, {})]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "V4"
          }), createVNode(_components.td, {
            children: "金"
          }), createVNode(_components.td, {
            children: "4"
          }), createVNode(_components.td, {}), createVNode(_components.td, {}), createVNode(_components.td, {}), createVNode(_components.td, {}), createVNode(_components.td, {}), createVNode(_components.td, {}), createVNode(_components.td, {})]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "V5"
          }), createVNode(_components.td, {
            children: "总"
          }), createVNode(_components.td, {
            children: "5"
          }), createVNode(_components.td, {}), createVNode(_components.td, {}), createVNode(_components.td, {}), createVNode(_components.td, {}), createVNode(_components.td, {}), createVNode(_components.td, {}), createVNode(_components.td, {})]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "V6"
          }), createVNode(_components.td, {
            children: "额"
          }), createVNode(_components.td, {
            children: "6"
          }), createVNode(_components.td, {}), createVNode(_components.td, {}), createVNode(_components.td, {}), createVNode(_components.td, {}), createVNode(_components.td, {}), createVNode(_components.td, {}), createVNode(_components.td, {})]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["下面我们来为空白处填充最短编辑距离（这里我们是要把", createVNode(_components.strong, {
        children: "固定租金总额"
      }), "转换成", createVNode(_components.strong, {
        children: "质量保证金总额"
      }), "）。首先，我们计算 ", createVNode(_components.strong, {
        children: ["[V", createVNode("sub", {
          children: "1"
        }), ", H", createVNode("sub", {
          children: "1"
        }), "]"]
      }), " 的值，", createVNode(_components.strong, {
        children: ["V", createVNode("sub", {
          children: "1"
        })]
      }), " 对应的字符是 ", createVNode(_components.em, {
        children: "固"
      }), "，", createVNode(_components.strong, {
        children: ["V", createVNode("sub", {
          children: "1"
        })]
      }), " 对应的字符是 ", createVNode(_components.em, {
        children: "质"
      }), "，显然 ", createVNode(_components.strong, {
        children: ["V", createVNode("sub", {
          children: "1"
        }), " !== H", createVNode("sub", {
          children: "1"
        })]
      }), "，所以他们的变换需要做修改（", createVNode(_components.code, {
        children: "flag"
      }), "为1）。这时候，我们通过", createVNode(_components.code, {
        children: "增"
      }), "、", createVNode(_components.code, {
        children: "删"
      }), "、", createVNode(_components.code, {
        children: "改"
      }), "的操作，计算得到 ", createVNode(_components.strong, {
        children: ["[V", createVNode("sub", {
          children: "1"
        }), ", H", createVNode("sub", {
          children: "0"
        }), "] + 1"]
      }), "、", createVNode(_components.strong, {
        children: ["[V", createVNode("sub", {
          children: "0"
        }), ", H", createVNode("sub", {
          children: "1"
        }), "] + 1"]
      }), "、", createVNode(_components.strong, {
        children: ["[V", createVNode("sub", {
          children: "0"
        }), ", H", createVNode("sub", {
          children: "0"
        }), "] + flag"]
      }), " 中的最小值就是当前字符的最短编辑距离，并填入 ", createVNode(_components.strong, {
        children: ["[V", createVNode("sub", {
          children: "1"
        }), ", H", createVNode("sub", {
          children: "1"
        }), "]"]
      }), " 空白处。以此类推，计算出最终的 ", createVNode(_components.strong, {
        children: ["[V", createVNode("sub", {
          children: "n"
        }), ", H", createVNode("sub", {
          children: "m"
        }), "]"]
      }), " 就是最短编辑距离。计算公式为 ", createVNode(_components.strong, {
        children: ["min([V", createVNode("sub", {
          children: "x"
        }), ", H", createVNode("sub", {
          children: "y - 1"
        }), "] + 1, [V", createVNode("sub", {
          children: "x - 1"
        }), ", H", createVNode("sub", {
          children: "y"
        }), "] + 1, [V", createVNode("sub", {
          children: "x - 1"
        }), ", H", createVNode("sub", {
          children: "y - 1"
        }), "] + flag)"]
      }), "。"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "flag"
        }), "的值与", createVNode(_components.code, {
          children: "Vx"
        }), "和", createVNode(_components.code, {
          children: "Hy"
        }), "的比较结果有关。如果", createVNode(_components.code, {
          children: "Vx === Hy"
        }), "，", createVNode(_components.code, {
          children: "flag"
        }), "为 ", createVNode(_components.strong, {
          children: "0"
        }), "，否则", createVNode(_components.code, {
          children: "flag"
        }), "为 ", createVNode(_components.strong, {
          children: "1"
        }), "。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "Vn"
        }), "和", createVNode(_components.code, {
          children: "Hm"
        }), "中的", createVNode(_components.code, {
          children: "n"
        }), "和", createVNode(_components.code, {
          children: "m"
        }), "指最后一个字符的坐标值。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "Vx"
        }), "和", createVNode(_components.code, {
          children: "Hy"
        }), "中的", createVNode(_components.code, {
          children: "x"
        }), "和", createVNode(_components.code, {
          children: "y"
        }), "指当前正在计算的字符的坐标值。"]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {}), createVNode(_components.th, {}), createVNode(_components.th, {
            children: "H0"
          }), createVNode(_components.th, {
            children: "H1"
          }), createVNode(_components.th, {
            children: "H2"
          }), createVNode(_components.th, {
            children: "H3"
          }), createVNode(_components.th, {
            children: "H4"
          }), createVNode(_components.th, {
            children: "H5"
          }), createVNode(_components.th, {
            children: "H6"
          }), createVNode(_components.th, {
            children: "H7"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {}), createVNode(_components.td, {}), createVNode(_components.td, {
            children: "0"
          }), createVNode(_components.td, {
            children: "质"
          }), createVNode(_components.td, {
            children: "量"
          }), createVNode(_components.td, {
            children: "保"
          }), createVNode(_components.td, {
            children: "证"
          }), createVNode(_components.td, {
            children: "金"
          }), createVNode(_components.td, {
            children: "总"
          }), createVNode(_components.td, {
            children: "额"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "V0"
          }), createVNode(_components.td, {
            children: "0"
          }), createVNode(_components.td, {
            children: "0"
          }), createVNode(_components.td, {
            children: "1"
          }), createVNode(_components.td, {
            children: "2"
          }), createVNode(_components.td, {
            children: "3"
          }), createVNode(_components.td, {
            children: "4"
          }), createVNode(_components.td, {
            children: "5"
          }), createVNode(_components.td, {
            children: "6"
          }), createVNode(_components.td, {
            children: "7"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "V1"
          }), createVNode(_components.td, {
            children: "固"
          }), createVNode(_components.td, {
            children: "1"
          }), createVNode(_components.td, {
            children: "1"
          }), createVNode(_components.td, {
            children: "2"
          }), createVNode(_components.td, {
            children: "3"
          }), createVNode(_components.td, {
            children: "4"
          }), createVNode(_components.td, {
            children: "5"
          }), createVNode(_components.td, {
            children: "6"
          }), createVNode(_components.td, {
            children: "7"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "V2"
          }), createVNode(_components.td, {
            children: "定"
          }), createVNode(_components.td, {
            children: "2"
          }), createVNode(_components.td, {
            children: "2"
          }), createVNode(_components.td, {
            children: "2"
          }), createVNode(_components.td, {
            children: "3"
          }), createVNode(_components.td, {
            children: "4"
          }), createVNode(_components.td, {
            children: "5"
          }), createVNode(_components.td, {
            children: "6"
          }), createVNode(_components.td, {
            children: "7"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "V3"
          }), createVNode(_components.td, {
            children: "租"
          }), createVNode(_components.td, {
            children: "3"
          }), createVNode(_components.td, {
            children: "3"
          }), createVNode(_components.td, {
            children: "3"
          }), createVNode(_components.td, {
            children: "3"
          }), createVNode(_components.td, {
            children: "4"
          }), createVNode(_components.td, {
            children: "5"
          }), createVNode(_components.td, {
            children: "6"
          }), createVNode(_components.td, {
            children: "7"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "V4"
          }), createVNode(_components.td, {
            children: "金"
          }), createVNode(_components.td, {
            children: "4"
          }), createVNode(_components.td, {
            children: "4"
          }), createVNode(_components.td, {
            children: "4"
          }), createVNode(_components.td, {
            children: "4"
          }), createVNode(_components.td, {
            children: "4"
          }), createVNode(_components.td, {
            children: "4"
          }), createVNode(_components.td, {
            children: "5"
          }), createVNode(_components.td, {
            children: "6"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "V5"
          }), createVNode(_components.td, {
            children: "总"
          }), createVNode(_components.td, {
            children: "5"
          }), createVNode(_components.td, {
            children: "5"
          }), createVNode(_components.td, {
            children: "5"
          }), createVNode(_components.td, {
            children: "5"
          }), createVNode(_components.td, {
            children: "5"
          }), createVNode(_components.td, {
            children: "5"
          }), createVNode(_components.td, {
            children: "4"
          }), createVNode(_components.td, {
            children: "5"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "V6"
          }), createVNode(_components.td, {
            children: "额"
          }), createVNode(_components.td, {
            children: "6"
          }), createVNode(_components.td, {
            children: "6"
          }), createVNode(_components.td, {
            children: "6"
          }), createVNode(_components.td, {
            children: "6"
          }), createVNode(_components.td, {
            children: "6"
          }), createVNode(_components.td, {
            children: "6"
          }), createVNode(_components.td, {
            children: "5"
          }), createVNode(_components.td, {
            children: "4"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["最终计算所得，上面的两个字符串的 ", createVNode(_components.strong, {
        children: "最短编辑距离为4"
      }), "。"]
    }), "\n", createVNode(_components.p, {
      children: "从上面的分析，我们不难推导出动态规划方程："
    }), "\n", createVNode(_components.span, {
      class: "katex-display",
      children: createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: [createVNode(_components.mo, {
                  stretchy: "false",
                  children: "["
                }), createVNode(_components.mi, {
                  children: "V"
                }), createVNode(_components.mi, {
                  children: "n"
                }), createVNode(_components.mo, {
                  separator: "true",
                  children: ","
                }), createVNode(_components.mi, {
                  children: "H"
                }), createVNode(_components.mi, {
                  children: "m"
                }), createVNode(_components.mo, {
                  stretchy: "false",
                  children: "]"
                }), createVNode(_components.mo, {
                  children: "="
                }), createVNode(_components.mrow, {
                  children: [createVNode(_components.mo, {
                    fence: "true",
                    children: "{"
                  }), createVNode(_components.mtable, {
                    rowspacing: "0.36em",
                    columnalign: "left left",
                    columnspacing: "1em",
                    children: [createVNode(_components.mtr, {
                      children: [createVNode(_components.mtd, {
                        children: createVNode(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: createVNode(_components.mn, {
                            children: "0"
                          })
                        })
                      }), createVNode(_components.mtd, {
                        children: createVNode(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: createVNode(_components.mrow, {
                            children: [createVNode(_components.mtext, {
                              children: "x"
                            }), createVNode(_components.mo, {
                              children: "="
                            }), createVNode(_components.mn, {
                              children: "0"
                            }), createVNode(_components.mo, {
                              separator: "true",
                              children: ","
                            }), createVNode(_components.mi, {
                              children: "y"
                            }), createVNode(_components.mo, {
                              children: "="
                            }), createVNode(_components.mn, {
                              children: "0"
                            })]
                          })
                        })
                      })]
                    }), createVNode(_components.mtr, {
                      children: [createVNode(_components.mtd, {
                        children: createVNode(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: createVNode(_components.mi, {
                            children: "x"
                          })
                        })
                      }), createVNode(_components.mtd, {
                        children: createVNode(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: createVNode(_components.mrow, {
                            children: [createVNode(_components.mtext, {
                              children: "x"
                            }), createVNode(_components.mo, {
                              children: ">"
                            }), createVNode(_components.mn, {
                              children: "0"
                            }), createVNode(_components.mo, {
                              separator: "true",
                              children: ","
                            }), createVNode(_components.mi, {
                              children: "y"
                            }), createVNode(_components.mo, {
                              children: "="
                            }), createVNode(_components.mn, {
                              children: "0"
                            })]
                          })
                        })
                      })]
                    }), createVNode(_components.mtr, {
                      children: [createVNode(_components.mtd, {
                        children: createVNode(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: createVNode(_components.mi, {
                            children: "y"
                          })
                        })
                      }), createVNode(_components.mtd, {
                        children: createVNode(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: createVNode(_components.mrow, {
                            children: [createVNode(_components.mtext, {
                              children: "x"
                            }), createVNode(_components.mo, {
                              children: "="
                            }), createVNode(_components.mn, {
                              children: "0"
                            }), createVNode(_components.mo, {
                              separator: "true",
                              children: ","
                            }), createVNode(_components.mi, {
                              children: "y"
                            }), createVNode(_components.mo, {
                              children: ">"
                            }), createVNode(_components.mn, {
                              children: "0"
                            })]
                          })
                        })
                      })]
                    }), createVNode(_components.mtr, {
                      children: [createVNode(_components.mtd, {
                        children: createVNode(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: createVNode(_components.mrow, {
                            children: [createVNode(_components.mi, {
                              children: "m"
                            }), createVNode(_components.mi, {
                              children: "i"
                            }), createVNode(_components.mi, {
                              children: "n"
                            }), createVNode(_components.mo, {
                              stretchy: "false",
                              children: "("
                            }), createVNode(_components.mo, {
                              stretchy: "false",
                              children: "["
                            }), createVNode(_components.mi, {
                              children: "V"
                            }), createVNode(_components.mstyle, {
                              scriptlevel: "1",
                              displaystyle: "false",
                              children: createVNode(_components.mtext, {
                                children: "x-1"
                              })
                            }), createVNode(_components.mo, {
                              separator: "true",
                              children: ","
                            }), createVNode(_components.mi, {
                              children: "H"
                            }), createVNode(_components.mstyle, {
                              scriptlevel: "1",
                              displaystyle: "false",
                              children: createVNode(_components.mtext, {
                                children: "y"
                              })
                            }), createVNode(_components.mo, {
                              stretchy: "false",
                              children: "]"
                            }), createVNode(_components.mo, {
                              children: "+"
                            }), createVNode(_components.mn, {
                              children: "1"
                            }), createVNode(_components.mo, {
                              separator: "true",
                              children: ","
                            }), createVNode(_components.mo, {
                              stretchy: "false",
                              children: "["
                            }), createVNode(_components.mi, {
                              children: "V"
                            }), createVNode(_components.mstyle, {
                              scriptlevel: "1",
                              displaystyle: "false",
                              children: createVNode(_components.mtext, {
                                children: "x"
                              })
                            }), createVNode(_components.mo, {
                              separator: "true",
                              children: ","
                            }), createVNode(_components.mi, {
                              children: "H"
                            }), createVNode(_components.mstyle, {
                              scriptlevel: "1",
                              displaystyle: "false",
                              children: createVNode(_components.mtext, {
                                children: "y-1"
                              })
                            }), createVNode(_components.mo, {
                              stretchy: "false",
                              children: "]"
                            }), createVNode(_components.mo, {
                              children: "+"
                            }), createVNode(_components.mn, {
                              children: "1"
                            }), createVNode(_components.mo, {
                              separator: "true",
                              children: ","
                            }), createVNode(_components.mo, {
                              stretchy: "false",
                              children: "["
                            }), createVNode(_components.mi, {
                              children: "V"
                            }), createVNode(_components.mstyle, {
                              scriptlevel: "1",
                              displaystyle: "false",
                              children: createVNode(_components.mtext, {
                                children: "x-1"
                              })
                            }), createVNode(_components.mo, {
                              separator: "true",
                              children: ","
                            }), createVNode(_components.mi, {
                              children: "H"
                            }), createVNode(_components.mstyle, {
                              scriptlevel: "1",
                              displaystyle: "false",
                              children: createVNode(_components.mtext, {
                                children: "y-1"
                              })
                            }), createVNode(_components.mo, {
                              stretchy: "false",
                              children: "]"
                            }), createVNode(_components.mo, {
                              children: "+"
                            }), createVNode(_components.mi, {
                              children: "f"
                            }), createVNode(_components.mi, {
                              children: "l"
                            }), createVNode(_components.mi, {
                              children: "a"
                            }), createVNode(_components.mi, {
                              children: "g"
                            }), createVNode(_components.mo, {
                              stretchy: "false",
                              children: ")"
                            })]
                          })
                        })
                      }), createVNode(_components.mtd, {
                        children: createVNode(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: createVNode(_components.mrow, {
                            children: [createVNode(_components.mtext, {
                              children: "x"
                            }), createVNode(_components.mo, {
                              children: ">"
                            }), createVNode(_components.mn, {
                              children: "0"
                            }), createVNode(_components.mo, {
                              separator: "true",
                              children: ","
                            }), createVNode(_components.mi, {
                              children: "y"
                            }), createVNode(_components.mo, {
                              children: ">"
                            }), createVNode(_components.mn, {
                              children: "0"
                            })]
                          })
                        })
                      })]
                    })]
                  })]
                }), createVNode(_components.mo, {
                  children: "⋆"
                }), createVNode(_components.mi, {
                  children: "f"
                }), createVNode(_components.mi, {
                  children: "l"
                }), createVNode(_components.mi, {
                  children: "a"
                }), createVNode(_components.mi, {
                  children: "g"
                }), createVNode(_components.mo, {
                  children: "="
                }), createVNode(_components.mrow, {
                  children: [createVNode(_components.mo, {
                    fence: "true",
                    children: "{"
                  }), createVNode(_components.mtable, {
                    rowspacing: "0.36em",
                    columnalign: "left left",
                    columnspacing: "1em",
                    children: [createVNode(_components.mtr, {
                      children: [createVNode(_components.mtd, {
                        children: createVNode(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: createVNode(_components.mn, {
                            children: "0"
                          })
                        })
                      }), createVNode(_components.mtd, {
                        children: createVNode(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: createVNode(_components.mrow, {
                            children: [createVNode(_components.mtext, {
                              children: "V"
                            }), createVNode(_components.mstyle, {
                              scriptlevel: "1",
                              displaystyle: "false",
                              children: createVNode(_components.mtext, {
                                children: "x"
                              })
                            }), createVNode(_components.mo, {
                              children: "="
                            }), createVNode(_components.mi, {
                              children: "H"
                            }), createVNode(_components.mstyle, {
                              scriptlevel: "1",
                              displaystyle: "false",
                              children: createVNode(_components.mtext, {
                                children: "y"
                              })
                            })]
                          })
                        })
                      })]
                    }), createVNode(_components.mtr, {
                      children: [createVNode(_components.mtd, {
                        children: createVNode(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: createVNode(_components.mn, {
                            children: "1"
                          })
                        })
                      }), createVNode(_components.mtd, {
                        children: createVNode(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: createVNode(_components.mrow, {
                            children: [createVNode(_components.mtext, {
                              children: "V"
                            }), createVNode(_components.mstyle, {
                              scriptlevel: "1",
                              displaystyle: "false",
                              children: createVNode(_components.mtext, {
                                children: "x"
                              })
                            }), createVNode(_components.mo, {
                              mathvariant: "normal",
                              children: "≠"
                            }), createVNode(_components.mi, {
                              children: "H"
                            }), createVNode(_components.mstyle, {
                              scriptlevel: "1",
                              displaystyle: "false",
                              children: createVNode(_components.mtext, {
                                children: "y"
                              })
                            })]
                          })
                        })
                      })]
                    })]
                  })]
                })]
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "[Vn, Hm] = \\begin{cases}\n  0 &\\text x=0,y=0 \\\\\n  x &\\text x>0,y=0 \\\\\n  y &\\text x=0,y>0 \\\\\n  min([V\\text{\\scriptstyle x-1}, H\\text{\\scriptstyle y}] + 1, [V\\text{\\scriptstyle x}, H\\text{\\scriptstyle y-1}] + 1, [V\\text{\\scriptstyle x-1}, H\\text{\\scriptstyle y-1}] + flag) &\\text x>0,y>0 \\\\\n\\end{cases}\n\n\\star\n\nflag = \\begin{cases}\n  0 &\\text V\\text{\\scriptstyle x} = H\\text{\\scriptstyle y} \\\\\n  1 &\\text V\\text{\\scriptstyle x} \\ne H\\text{\\scriptstyle y} \\\\\n\\end{cases}"
              })]
            })
          })
        }), createVNode(_components.span, {
          class: "katex-html",
          "aria-hidden": "true",
          children: [createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), createVNode(_components.span, {
              class: "mopen",
              children: "["
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "Vn"
            }), createVNode(_components.span, {
              class: "mpunct",
              children: ","
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              style: {
                marginRight: "0.08125em"
              },
              children: "H"
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "m"
            }), createVNode(_components.span, {
              class: "mclose",
              children: "]"
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), createVNode(_components.span, {
              class: "mrel",
              children: "="
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "5.76em",
                verticalAlign: "-2.63em"
              }
            }), createVNode(_components.span, {
              class: "minner",
              children: [createVNode(_components.span, {
                class: "mopen",
                children: createVNode(_components.span, {
                  class: "delimsizing mult",
                  children: createVNode(_components.span, {
                    class: "vlist-t vlist-t2",
                    children: [createVNode(_components.span, {
                      class: "vlist-r",
                      children: [createVNode(_components.span, {
                        class: "vlist",
                        style: {
                          height: "2.95em"
                        },
                        children: [createVNode(_components.span, {
                          style: {
                            top: "-1.6em"
                          },
                          children: [createVNode(_components.span, {
                            class: "pstrut",
                            style: {
                              height: "3.15em"
                            }
                          }), createVNode(_components.span, {
                            class: "delimsizinginner delim-size4",
                            children: createVNode(_components.span, {
                              children: "⎩"
                            })
                          })]
                        }), createVNode(_components.span, {
                          style: {
                            top: "-1.592em"
                          },
                          children: [createVNode(_components.span, {
                            class: "pstrut",
                            style: {
                              height: "3.15em"
                            }
                          }), createVNode(_components.span, {
                            style: {
                              height: "0.916em",
                              width: "0.8889em"
                            },
                            children: createVNode(_components.svg, {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "0.8889em",
                              height: "0.916em",
                              style: {
                                width: "0.8889em"
                              },
                              viewBox: "0 0 888.89 916",
                              preserveAspectRatio: "xMinYMin",
                              children: createVNode(_components.path, {
                                d: "M384 0 H504 V916 H384z M384 0 H504 V916 H384z"
                              })
                            })
                          })]
                        }), createVNode(_components.span, {
                          style: {
                            top: "-3.15em"
                          },
                          children: [createVNode(_components.span, {
                            class: "pstrut",
                            style: {
                              height: "3.15em"
                            }
                          }), createVNode(_components.span, {
                            class: "delimsizinginner delim-size4",
                            children: createVNode(_components.span, {
                              children: "⎨"
                            })
                          })]
                        }), createVNode(_components.span, {
                          style: {
                            top: "-4.292em"
                          },
                          children: [createVNode(_components.span, {
                            class: "pstrut",
                            style: {
                              height: "3.15em"
                            }
                          }), createVNode(_components.span, {
                            style: {
                              height: "0.916em",
                              width: "0.8889em"
                            },
                            children: createVNode(_components.svg, {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "0.8889em",
                              height: "0.916em",
                              style: {
                                width: "0.8889em"
                              },
                              viewBox: "0 0 888.89 916",
                              preserveAspectRatio: "xMinYMin",
                              children: createVNode(_components.path, {
                                d: "M384 0 H504 V916 H384z M384 0 H504 V916 H384z"
                              })
                            })
                          })]
                        }), createVNode(_components.span, {
                          style: {
                            top: "-5.2em"
                          },
                          children: [createVNode(_components.span, {
                            class: "pstrut",
                            style: {
                              height: "3.15em"
                            }
                          }), createVNode(_components.span, {
                            class: "delimsizinginner delim-size4",
                            children: createVNode(_components.span, {
                              children: "⎧"
                            })
                          })]
                        })]
                      }), createVNode(_components.span, {
                        class: "vlist-s",
                        children: "​"
                      })]
                    }), createVNode(_components.span, {
                      class: "vlist-r",
                      children: createVNode(_components.span, {
                        class: "vlist",
                        style: {
                          height: "2.45em"
                        },
                        children: createVNode(_components.span, {})
                      })
                    })]
                  })
                })
              }), createVNode(_components.span, {
                class: "mord",
                children: createVNode(_components.span, {
                  class: "mtable",
                  children: [createVNode(_components.span, {
                    class: "col-align-l",
                    children: createVNode(_components.span, {
                      class: "vlist-t vlist-t2",
                      children: [createVNode(_components.span, {
                        class: "vlist-r",
                        children: [createVNode(_components.span, {
                          class: "vlist",
                          style: {
                            height: "3.13em"
                          },
                          children: [createVNode(_components.span, {
                            style: {
                              top: "-5.13em"
                            },
                            children: [createVNode(_components.span, {
                              class: "pstrut",
                              style: {
                                height: "3.008em"
                              }
                            }), createVNode(_components.span, {
                              class: "mord",
                              children: createVNode(_components.span, {
                                class: "mord",
                                children: "0"
                              })
                            })]
                          }), createVNode(_components.span, {
                            style: {
                              top: "-3.69em"
                            },
                            children: [createVNode(_components.span, {
                              class: "pstrut",
                              style: {
                                height: "3.008em"
                              }
                            }), createVNode(_components.span, {
                              class: "mord",
                              children: createVNode(_components.span, {
                                class: "mord mathnormal",
                                children: "x"
                              })
                            })]
                          }), createVNode(_components.span, {
                            style: {
                              top: "-2.25em"
                            },
                            children: [createVNode(_components.span, {
                              class: "pstrut",
                              style: {
                                height: "3.008em"
                              }
                            }), createVNode(_components.span, {
                              class: "mord",
                              children: createVNode(_components.span, {
                                class: "mord mathnormal",
                                style: {
                                  marginRight: "0.03588em"
                                },
                                children: "y"
                              })
                            })]
                          }), createVNode(_components.span, {
                            style: {
                              top: "-0.81em"
                            },
                            children: [createVNode(_components.span, {
                              class: "pstrut",
                              style: {
                                height: "3.008em"
                              }
                            }), createVNode(_components.span, {
                              class: "mord",
                              children: [createVNode(_components.span, {
                                class: "mord mathnormal",
                                children: "min"
                              }), createVNode(_components.span, {
                                class: "mopen",
                                children: "(["
                              }), createVNode(_components.span, {
                                class: "mord mathnormal",
                                style: {
                                  marginRight: "0.22222em"
                                },
                                children: "V"
                              }), createVNode(_components.span, {
                                class: "mord text",
                                children: createVNode(_components.span, {
                                  class: "mord mtight sizing reset-size6 size3",
                                  children: "x-1"
                                })
                              }), createVNode(_components.span, {
                                class: "mpunct",
                                children: ","
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.1667em"
                                }
                              }), createVNode(_components.span, {
                                class: "mord mathnormal",
                                style: {
                                  marginRight: "0.08125em"
                                },
                                children: "H"
                              }), createVNode(_components.span, {
                                class: "mord text",
                                children: createVNode(_components.span, {
                                  class: "mord mtight sizing reset-size6 size3",
                                  children: "y"
                                })
                              }), createVNode(_components.span, {
                                class: "mclose",
                                children: "]"
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.2222em"
                                }
                              }), createVNode(_components.span, {
                                class: "mbin",
                                children: "+"
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.2222em"
                                }
                              }), createVNode(_components.span, {
                                class: "mord",
                                children: "1"
                              }), createVNode(_components.span, {
                                class: "mpunct",
                                children: ","
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.1667em"
                                }
                              }), createVNode(_components.span, {
                                class: "mopen",
                                children: "["
                              }), createVNode(_components.span, {
                                class: "mord mathnormal",
                                style: {
                                  marginRight: "0.22222em"
                                },
                                children: "V"
                              }), createVNode(_components.span, {
                                class: "mord text",
                                children: createVNode(_components.span, {
                                  class: "mord mtight sizing reset-size6 size3",
                                  children: "x"
                                })
                              }), createVNode(_components.span, {
                                class: "mpunct",
                                children: ","
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.1667em"
                                }
                              }), createVNode(_components.span, {
                                class: "mord mathnormal",
                                style: {
                                  marginRight: "0.08125em"
                                },
                                children: "H"
                              }), createVNode(_components.span, {
                                class: "mord text",
                                children: createVNode(_components.span, {
                                  class: "mord mtight sizing reset-size6 size3",
                                  children: "y-1"
                                })
                              }), createVNode(_components.span, {
                                class: "mclose",
                                children: "]"
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.2222em"
                                }
                              }), createVNode(_components.span, {
                                class: "mbin",
                                children: "+"
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.2222em"
                                }
                              }), createVNode(_components.span, {
                                class: "mord",
                                children: "1"
                              }), createVNode(_components.span, {
                                class: "mpunct",
                                children: ","
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.1667em"
                                }
                              }), createVNode(_components.span, {
                                class: "mopen",
                                children: "["
                              }), createVNode(_components.span, {
                                class: "mord mathnormal",
                                style: {
                                  marginRight: "0.22222em"
                                },
                                children: "V"
                              }), createVNode(_components.span, {
                                class: "mord text",
                                children: createVNode(_components.span, {
                                  class: "mord mtight sizing reset-size6 size3",
                                  children: "x-1"
                                })
                              }), createVNode(_components.span, {
                                class: "mpunct",
                                children: ","
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.1667em"
                                }
                              }), createVNode(_components.span, {
                                class: "mord mathnormal",
                                style: {
                                  marginRight: "0.08125em"
                                },
                                children: "H"
                              }), createVNode(_components.span, {
                                class: "mord text",
                                children: createVNode(_components.span, {
                                  class: "mord mtight sizing reset-size6 size3",
                                  children: "y-1"
                                })
                              }), createVNode(_components.span, {
                                class: "mclose",
                                children: "]"
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.2222em"
                                }
                              }), createVNode(_components.span, {
                                class: "mbin",
                                children: "+"
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.2222em"
                                }
                              }), createVNode(_components.span, {
                                class: "mord mathnormal",
                                style: {
                                  marginRight: "0.10764em"
                                },
                                children: "f"
                              }), createVNode(_components.span, {
                                class: "mord mathnormal",
                                style: {
                                  marginRight: "0.01968em"
                                },
                                children: "l"
                              }), createVNode(_components.span, {
                                class: "mord mathnormal",
                                children: "a"
                              }), createVNode(_components.span, {
                                class: "mord mathnormal",
                                style: {
                                  marginRight: "0.03588em"
                                },
                                children: "g"
                              }), createVNode(_components.span, {
                                class: "mclose",
                                children: ")"
                              })]
                            })]
                          })]
                        }), createVNode(_components.span, {
                          class: "vlist-s",
                          children: "​"
                        })]
                      }), createVNode(_components.span, {
                        class: "vlist-r",
                        children: createVNode(_components.span, {
                          class: "vlist",
                          style: {
                            height: "2.63em"
                          },
                          children: createVNode(_components.span, {})
                        })
                      })]
                    })
                  }), createVNode(_components.span, {
                    class: "arraycolsep",
                    style: {
                      width: "1em"
                    }
                  }), createVNode(_components.span, {
                    class: "col-align-l",
                    children: createVNode(_components.span, {
                      class: "vlist-t vlist-t2",
                      children: [createVNode(_components.span, {
                        class: "vlist-r",
                        children: [createVNode(_components.span, {
                          class: "vlist",
                          style: {
                            height: "3.13em"
                          },
                          children: [createVNode(_components.span, {
                            style: {
                              top: "-5.13em"
                            },
                            children: [createVNode(_components.span, {
                              class: "pstrut",
                              style: {
                                height: "3.008em"
                              }
                            }), createVNode(_components.span, {
                              class: "mord",
                              children: [createVNode(_components.span, {
                                class: "mord text",
                                children: createVNode(_components.span, {
                                  class: "mord",
                                  children: "x"
                                })
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.2778em"
                                }
                              }), createVNode(_components.span, {
                                class: "mrel",
                                children: "="
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.2778em"
                                }
                              }), createVNode(_components.span, {
                                class: "mord",
                                children: "0"
                              }), createVNode(_components.span, {
                                class: "mpunct",
                                children: ","
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.1667em"
                                }
                              }), createVNode(_components.span, {
                                class: "mord mathnormal",
                                style: {
                                  marginRight: "0.03588em"
                                },
                                children: "y"
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.2778em"
                                }
                              }), createVNode(_components.span, {
                                class: "mrel",
                                children: "="
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.2778em"
                                }
                              }), createVNode(_components.span, {
                                class: "mord",
                                children: "0"
                              })]
                            })]
                          }), createVNode(_components.span, {
                            style: {
                              top: "-3.69em"
                            },
                            children: [createVNode(_components.span, {
                              class: "pstrut",
                              style: {
                                height: "3.008em"
                              }
                            }), createVNode(_components.span, {
                              class: "mord",
                              children: [createVNode(_components.span, {
                                class: "mord text",
                                children: createVNode(_components.span, {
                                  class: "mord",
                                  children: "x"
                                })
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.2778em"
                                }
                              }), createVNode(_components.span, {
                                class: "mrel",
                                children: ">"
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.2778em"
                                }
                              }), createVNode(_components.span, {
                                class: "mord",
                                children: "0"
                              }), createVNode(_components.span, {
                                class: "mpunct",
                                children: ","
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.1667em"
                                }
                              }), createVNode(_components.span, {
                                class: "mord mathnormal",
                                style: {
                                  marginRight: "0.03588em"
                                },
                                children: "y"
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.2778em"
                                }
                              }), createVNode(_components.span, {
                                class: "mrel",
                                children: "="
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.2778em"
                                }
                              }), createVNode(_components.span, {
                                class: "mord",
                                children: "0"
                              })]
                            })]
                          }), createVNode(_components.span, {
                            style: {
                              top: "-2.25em"
                            },
                            children: [createVNode(_components.span, {
                              class: "pstrut",
                              style: {
                                height: "3.008em"
                              }
                            }), createVNode(_components.span, {
                              class: "mord",
                              children: [createVNode(_components.span, {
                                class: "mord text",
                                children: createVNode(_components.span, {
                                  class: "mord",
                                  children: "x"
                                })
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.2778em"
                                }
                              }), createVNode(_components.span, {
                                class: "mrel",
                                children: "="
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.2778em"
                                }
                              }), createVNode(_components.span, {
                                class: "mord",
                                children: "0"
                              }), createVNode(_components.span, {
                                class: "mpunct",
                                children: ","
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.1667em"
                                }
                              }), createVNode(_components.span, {
                                class: "mord mathnormal",
                                style: {
                                  marginRight: "0.03588em"
                                },
                                children: "y"
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.2778em"
                                }
                              }), createVNode(_components.span, {
                                class: "mrel",
                                children: ">"
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.2778em"
                                }
                              }), createVNode(_components.span, {
                                class: "mord",
                                children: "0"
                              })]
                            })]
                          }), createVNode(_components.span, {
                            style: {
                              top: "-0.81em"
                            },
                            children: [createVNode(_components.span, {
                              class: "pstrut",
                              style: {
                                height: "3.008em"
                              }
                            }), createVNode(_components.span, {
                              class: "mord",
                              children: [createVNode(_components.span, {
                                class: "mord text",
                                children: createVNode(_components.span, {
                                  class: "mord",
                                  children: "x"
                                })
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.2778em"
                                }
                              }), createVNode(_components.span, {
                                class: "mrel",
                                children: ">"
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.2778em"
                                }
                              }), createVNode(_components.span, {
                                class: "mord",
                                children: "0"
                              }), createVNode(_components.span, {
                                class: "mpunct",
                                children: ","
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.1667em"
                                }
                              }), createVNode(_components.span, {
                                class: "mord mathnormal",
                                style: {
                                  marginRight: "0.03588em"
                                },
                                children: "y"
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.2778em"
                                }
                              }), createVNode(_components.span, {
                                class: "mrel",
                                children: ">"
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.2778em"
                                }
                              }), createVNode(_components.span, {
                                class: "mord",
                                children: "0"
                              })]
                            })]
                          })]
                        }), createVNode(_components.span, {
                          class: "vlist-s",
                          children: "​"
                        })]
                      }), createVNode(_components.span, {
                        class: "vlist-r",
                        children: createVNode(_components.span, {
                          class: "vlist",
                          style: {
                            height: "2.63em"
                          },
                          children: createVNode(_components.span, {})
                        })
                      })]
                    })
                  })]
                })
              }), createVNode(_components.span, {
                class: "mclose nulldelimiter"
              })]
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            }), createVNode(_components.span, {
              class: "mbin",
              children: "⋆"
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            })]
          }), createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.8889em",
                verticalAlign: "-0.1944em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              style: {
                marginRight: "0.10764em"
              },
              children: "f"
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              style: {
                marginRight: "0.01968em"
              },
              children: "l"
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "a"
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              style: {
                marginRight: "0.03588em"
              },
              children: "g"
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), createVNode(_components.span, {
              class: "mrel",
              children: "="
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "3em",
                verticalAlign: "-1.25em"
              }
            }), createVNode(_components.span, {
              class: "minner",
              children: [createVNode(_components.span, {
                class: "mopen delimcenter",
                style: {
                  top: "0em"
                },
                children: createVNode(_components.span, {
                  class: "delimsizing size4",
                  children: "{"
                })
              }), createVNode(_components.span, {
                class: "mord",
                children: createVNode(_components.span, {
                  class: "mtable",
                  children: [createVNode(_components.span, {
                    class: "col-align-l",
                    children: createVNode(_components.span, {
                      class: "vlist-t vlist-t2",
                      children: [createVNode(_components.span, {
                        class: "vlist-r",
                        children: [createVNode(_components.span, {
                          class: "vlist",
                          style: {
                            height: "1.69em"
                          },
                          children: [createVNode(_components.span, {
                            style: {
                              top: "-3.69em"
                            },
                            children: [createVNode(_components.span, {
                              class: "pstrut",
                              style: {
                                height: "3.008em"
                              }
                            }), createVNode(_components.span, {
                              class: "mord",
                              children: createVNode(_components.span, {
                                class: "mord",
                                children: "0"
                              })
                            })]
                          }), createVNode(_components.span, {
                            style: {
                              top: "-2.25em"
                            },
                            children: [createVNode(_components.span, {
                              class: "pstrut",
                              style: {
                                height: "3.008em"
                              }
                            }), createVNode(_components.span, {
                              class: "mord",
                              children: createVNode(_components.span, {
                                class: "mord",
                                children: "1"
                              })
                            })]
                          })]
                        }), createVNode(_components.span, {
                          class: "vlist-s",
                          children: "​"
                        })]
                      }), createVNode(_components.span, {
                        class: "vlist-r",
                        children: createVNode(_components.span, {
                          class: "vlist",
                          style: {
                            height: "1.19em"
                          },
                          children: createVNode(_components.span, {})
                        })
                      })]
                    })
                  }), createVNode(_components.span, {
                    class: "arraycolsep",
                    style: {
                      width: "1em"
                    }
                  }), createVNode(_components.span, {
                    class: "col-align-l",
                    children: createVNode(_components.span, {
                      class: "vlist-t vlist-t2",
                      children: [createVNode(_components.span, {
                        class: "vlist-r",
                        children: [createVNode(_components.span, {
                          class: "vlist",
                          style: {
                            height: "1.69em"
                          },
                          children: [createVNode(_components.span, {
                            style: {
                              top: "-3.69em"
                            },
                            children: [createVNode(_components.span, {
                              class: "pstrut",
                              style: {
                                height: "3.008em"
                              }
                            }), createVNode(_components.span, {
                              class: "mord",
                              children: [createVNode(_components.span, {
                                class: "mord text",
                                children: createVNode(_components.span, {
                                  class: "mord",
                                  children: "V"
                                })
                              }), createVNode(_components.span, {
                                class: "mord text",
                                children: createVNode(_components.span, {
                                  class: "mord mtight sizing reset-size6 size3",
                                  children: "x"
                                })
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.2778em"
                                }
                              }), createVNode(_components.span, {
                                class: "mrel",
                                children: "="
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.2778em"
                                }
                              }), createVNode(_components.span, {
                                class: "mord mathnormal",
                                style: {
                                  marginRight: "0.08125em"
                                },
                                children: "H"
                              }), createVNode(_components.span, {
                                class: "mord text",
                                children: createVNode(_components.span, {
                                  class: "mord mtight sizing reset-size6 size3",
                                  children: "y"
                                })
                              })]
                            })]
                          }), createVNode(_components.span, {
                            style: {
                              top: "-2.25em"
                            },
                            children: [createVNode(_components.span, {
                              class: "pstrut",
                              style: {
                                height: "3.008em"
                              }
                            }), createVNode(_components.span, {
                              class: "mord",
                              children: [createVNode(_components.span, {
                                class: "mord text",
                                children: createVNode(_components.span, {
                                  class: "mord",
                                  children: "V"
                                })
                              }), createVNode(_components.span, {
                                class: "mord text",
                                children: createVNode(_components.span, {
                                  class: "mord mtight sizing reset-size6 size3",
                                  children: "x"
                                })
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.2778em"
                                }
                              }), createVNode(_components.span, {
                                class: "mrel",
                                children: [createVNode(_components.span, {
                                  class: "mrel",
                                  children: createVNode(_components.span, {
                                    class: "mord vbox",
                                    children: createVNode(_components.span, {
                                      class: "thinbox",
                                      children: createVNode(_components.span, {
                                        class: "rlap",
                                        children: [createVNode(_components.span, {
                                          class: "strut",
                                          style: {
                                            height: "0.8889em",
                                            verticalAlign: "-0.1944em"
                                          }
                                        }), createVNode(_components.span, {
                                          class: "inner",
                                          children: createVNode(_components.span, {
                                            class: "mord",
                                            children: createVNode(_components.span, {
                                              class: "mrel",
                                              children: ""
                                            })
                                          })
                                        }), createVNode(_components.span, {
                                          class: "fix"
                                        })]
                                      })
                                    })
                                  })
                                }), createVNode(_components.span, {
                                  class: "mrel",
                                  children: "="
                                })]
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.2778em"
                                }
                              }), createVNode(_components.span, {
                                class: "mord mathnormal",
                                style: {
                                  marginRight: "0.08125em"
                                },
                                children: "H"
                              }), createVNode(_components.span, {
                                class: "mord text",
                                children: createVNode(_components.span, {
                                  class: "mord mtight sizing reset-size6 size3",
                                  children: "y"
                                })
                              })]
                            })]
                          })]
                        }), createVNode(_components.span, {
                          class: "vlist-s",
                          children: "​"
                        })]
                      }), createVNode(_components.span, {
                        class: "vlist-r",
                        children: createVNode(_components.span, {
                          class: "vlist",
                          style: {
                            height: "1.19em"
                          },
                          children: createVNode(_components.span, {})
                        })
                      })]
                    })
                  })]
                })
              }), createVNode(_components.span, {
                class: "mclose nulldelimiter"
              })]
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "代码实现与优化",
      children: "代码实现与优化"
    }), "\n", createVNode(_components.p, {
      children: ["理解了理论知识，代码实现上其实非常简单。无非就是字符的比较，以及对字符的", createVNode(_components.code, {
        children: "增"
      }), "、", createVNode(_components.code, {
        children: "删"
      }), "、", createVNode(_components.code, {
        children: "改"
      }), "操作，得到的矩阵最末尾的数字就是最短编辑距离。具体算法如下："]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "/**"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " * 编辑距离算法(LD algorithm)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " * "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "@param"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " {string}"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " source"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " 输入的内容"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " * "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "@param"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " {string}"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " target"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " 匹配的目标"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " * "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "@return"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " {number}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " */"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " levensheinDistance"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "source"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "target"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " sourceLength"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " source."
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "length"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " targetLength"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " target."
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "length"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " space"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Array"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(targetLength)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // 过滤目标或者比较值为空字符串的情况"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (sourceLength "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "==="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " targetLength"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "else"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (targetLength "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "==="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " sourceLength"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "else"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    for"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " i "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "; i "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " sourceLength; i"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "++"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "      const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " sourceChar"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " source[i]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "      let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " temp "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " i"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "      for"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " j "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "; j "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " targetLength; j"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "++"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " targetChar"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " target[j]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // 获取前一个数值"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " prevDistance"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " j "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "==="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ?"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " i "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " :"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " space[j "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // 获取上一个数值"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " topDistance"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " space[j] "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "==="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " undefined"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ?"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " j "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " :"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " space[j]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // 判断是否需要修改"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " flag"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " sourceChar "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "==="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " targetChar "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "?"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " :"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // 获取增，删，改和不变得到的最小值"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " min"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Math."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "min"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(prevDistance "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", topDistance "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", temp "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " flag)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // 保存左上角的数据，计算最小值时需要用到"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        temp "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " topDistance"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        space[j] "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " min"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // 获取数组的最后一位，即编辑距离"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " space[targetLength "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]"
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
      children: "以上就是算法实现的全部内容。算法本身很简单，这里对空间复杂度做了优化，使用一维数组来表示矩阵。"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "m"
        }), "是指上面矩阵", createVNode(_components.code, {
          children: "Hm"
        }), "中的", createVNode(_components.code, {
          children: "m"
        }), "，这里代表的是", createVNode(_components.code, {
          children: "target.length"
        }), "。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "n"
        }), "是指上面矩阵", createVNode(_components.code, {
          children: "Vn"
        }), "中的", createVNode(_components.code, {
          children: "n"
        }), "，这里代表的是", createVNode(_components.code, {
          children: "source.length"
        }), "。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["首先，我们创建了一个", createVNode(_components.code, {
        children: "m"
      }), "长度的数组（", createVNode(_components.code, {
        children: "space"
      }), "）。"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "内循环："
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "temp"
        }), "保存的是 ", createVNode(_components.strong, {
          children: ["[V", createVNode("sub", {
            children: "x-1"
          }), ", H", createVNode("sub", {
            children: "y-1"
          }), "]"]
        }), "。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "prevDistance"
        }), "保存的是 ", createVNode(_components.strong, {
          children: ["[V", createVNode("sub", {
            children: "x-1"
          }), ", H", createVNode("sub", {
            children: "y"
          }), "]"]
        }), "。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "topDistance"
        }), "保存的是 ", createVNode(_components.strong, {
          children: ["[V", createVNode("sub", {
            children: "x"
          }), ", H", createVNode("sub", {
            children: "y-1"
          }), "]"]
        }), "。"]
      }), "\n"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["通过判断", createVNode(_components.code, {
          children: "sourceChar"
        }), "与", createVNode(_components.code, {
          children: "targetChar"
        }), "是否相同，得出结论", createVNode(_components.code, {
          children: "flag"
        }), "的值。"]
      }), "\n", createVNode(_components.li, {
        children: "计算到当前字符为止的最小编辑距离是多少。"
      }), "\n", createVNode(_components.li, {
        children: ["将", createVNode(_components.code, {
          children: "topDistance"
        }), "赋值给", createVNode(_components.code, {
          children: "temp"
        }), "，因为在下一个循环中这个值将作为 ", createVNode(_components.strong, {
          children: ["[V", createVNode("sub", {
            children: "x-1"
          }), ", H", createVNode("sub", {
            children: "y-1"
          }), "]"]
        }), " 出现。"]
      }), "\n", createVNode(_components.li, {
        children: ["更新 ", createVNode(_components.strong, {
          children: ["[V", createVNode("sub", {
            children: "x"
          }), ", H", createVNode("sub", {
            children: "y"
          }), "]"]
        }), " 的值。"]
      }), "\n", createVNode(_components.li, {
        children: "循环往复，直到两层遍历都完成为止。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["从这里我们可以看到，", createVNode(_components.code, {
        children: "space"
      }), "是一个非常特殊的一维数组。它首先会保存 ", createVNode(_components.strong, {
        children: ["V", createVNode("sub", {
          children: "x-1"
        })]
      }), " 层的最短编辑距离，在内循环不断执行过程中，", createVNode(_components.strong, {
        children: ["V", createVNode("sub", {
          children: "x-1"
        })]
      }), " 层的最短编辑距离会被 ", createVNode(_components.strong, {
        children: ["V", createVNode("sub", {
          children: "x"
        })]
      }), " 层的最短编辑距离逐步替换。如此往复，当循环结束时，", createVNode(_components.code, {
        children: "space[target.length - 1]"
      }), "即是 ", createVNode(_components.strong, {
        children: ["[V", createVNode("sub", {
          children: "x"
        }), ", H", createVNode("sub", {
          children: "y"
        }), "]"]
      }), "。"]
    }), "\n", createVNode(_components.h2, {
      id: "在模糊搜索中的应用",
      children: "在模糊搜索中的应用"
    }), "\n", createVNode(_components.p, {
      children: ["讲到这里，我们已经实现了模糊搜索的核心部分。我们只需要获得 ", createVNode(_components.strong, {
        children: "相似度"
      }), "【", createVNode(_components.em, {
        children: "distance / Math.max(A.length, B.length)"
      }), "】，然后进行 ", createVNode(_components.strong, {
        children: "过滤"
      }), "，", createVNode(_components.strong, {
        children: "排序"
      }), " 操作，即可实现比较完美的模糊搜索功能。"]
    }), "\n", createVNode(_components.p, {
      children: ["由于相似度只跟最大字符长度和编辑距离有关，这样还是会存在期望的内容无法尽早的出现在前几位。", createVNode(_components.strong, {
        children: "那搜索的结果是否还能更精确些呢？"
      }), " 答案当然是肯定的。我认为因子越多，得到的模糊匹配的结果就越趋于期望结果。所以在模糊搜索中，我添加了", createVNode(_components.code, {
        children: "最大连续匹配长度"
      }), "、", createVNode(_components.code, {
        children: "匹配个数"
      }), "、", createVNode(_components.code, {
        children: "首个匹配字母位置"
      }), "等因子，最后通过复杂的计算和权重的配比得到期望的结果。"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        alt: "中文匹配",
        src: __0_______assets_images_WX20191121_020426_png__
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        alt: "代码匹配",
        src: __1_______assets_images_WX20191121_020346_png__
      })
    }), "\n", createVNode(_components.p, {
      children: ["在代码实现上，需要在 ", createVNode(_components.strong, {
        children: "最短编辑距离算法"
      }), " 中混入一些关键节点的计算，获得想要的因子。"]
    }), "\n", createVNode(_components.p, {
      children: ["无论如何变化，模糊搜索的核心仍然是基于 ", createVNode(_components.strong, {
        children: "最短编辑距离算法"
      }), " 完成的。您也可以根据您的想法，添加更多的因子，订制一套自己的模糊搜索。"]
    }), "\n", createVNode(_components.h2, {
      id: "结论",
      children: "结论"
    }), "\n", createVNode(_components.p, {
      children: ["动手编写一个模糊搜索确实不算太难。只要掌握 ", createVNode(_components.strong, {
        children: "最短编辑距离算法"
      }), " 的思想，围绕这个算法添加一些自己想要的因子，然后通过权重配置和复杂的计算公式得到相似度，最后过滤、排序、输出结果即可。无论如何，", createVNode(_components.strong, {
        children: "最短编辑距离算法"
      }), "才是模糊搜索的核心。"]
    }), "\n", createVNode(_components.h2, {
      id: "题外话",
      children: "题外话"
    }), "\n", createVNode(_components.p, {
      children: [createVNode("a", {
        href: "https://github.com/lihaizhong/CodeLabs/tree/main/packages/you-need-suggest",
        target: "_blank",
        children: "这里是我实现的模糊搜索方法"
      }), "，您可以作为学习和参考。"]
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

const url = "src/content/archive/%E5%89%8D%E7%AB%AF%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E6%A8%A1%E7%B3%8A%E6%90%9C%E7%B4%A2.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/archive/前端如何实现模糊搜索.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/archive/前端如何实现模糊搜索.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
