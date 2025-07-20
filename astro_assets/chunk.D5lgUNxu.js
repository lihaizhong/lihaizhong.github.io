import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './chunk.DmgbW9yA.js';
import { $ as $$Image } from './chunk.BFavZmP-.js';

const __0_______assets_images_memory_structure_of_V8_png__ = new Proxy({"src":"/astro_assets/asset.FnGP0bB6.png","width":590,"height":332,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/assets/images/memory-structure-of-V8.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/assets/images/memory-structure-of-V8.png");
							return target[name];
						}
					});

const frontmatter = {
  "title": "V8引擎的垃圾回收机制",
  "description": "V8引擎作为目前最流行的JavaScript引擎，在浏览器端和NodeJS端都有使用。尤其在浏览器端，正是V8引擎的保驾护航，奠定了Chrome在浏览器端的霸主地位。早期的V8引擎采用Full-Codegen+Crankshaft架构，现在已经更换为Ignition+TurboFan架构。在垃圾回收方面是基于弱分代假说实现，并做了很多优化策略，进一步提升性能。",
  "pubDate": "Tue, 15 Aug 2023 15:15:01 +0800",
  "heroImage": ""
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "v8的内存构成",
    "text": "V8的内存构成"
  }, {
    "depth": 2,
    "slug": "新生代的gc策略",
    "text": "新生代的GC策略"
  }, {
    "depth": 2,
    "slug": "对象晋升策略",
    "text": "对象晋升策略"
  }, {
    "depth": 2,
    "slug": "老生代的gc策略",
    "text": "老生代的GC策略"
  }, {
    "depth": 3,
    "slug": "marking-标记",
    "text": "Marking 标记"
  }, {
    "depth": 3,
    "slug": "sweeping-清除",
    "text": "Sweeping 清除"
  }, {
    "depth": 3,
    "slug": "compacting-整理",
    "text": "Compacting 整理"
  }, {
    "depth": 2,
    "slug": "回收算法比较",
    "text": "回收算法比较"
  }, {
    "depth": 2,
    "slug": "垃圾回收机制的进阶问题",
    "text": "垃圾回收机制的进阶问题"
  }, {
    "depth": 3,
    "slug": "为什么v8引擎需要限制内存大小",
    "text": "为什么V8引擎需要限制内存大小"
  }, {
    "depth": 3,
    "slug": "什么是增量标记延迟清除和增量整理",
    "text": "什么是增量标记、延迟清除和增量整理"
  }, {
    "depth": 3,
    "slug": "什么是写屏障",
    "text": "什么是写屏障"
  }, {
    "depth": 3,
    "slug": "什么是隐藏类",
    "text": "什么是隐藏类"
  }, {
    "depth": 3,
    "slug": "什么是内联缓存",
    "text": "什么是内联缓存"
  }, {
    "depth": 3,
    "slug": "什么是hotspot热点代码收集",
    "text": "什么是HotSpot热点代码收集"
  }, {
    "depth": 2,
    "slug": "总结",
    "text": "总结"
  }, {
    "depth": 2,
    "slug": "提问",
    "text": "提问"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    "astro-image": "astro-image",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
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
      children: ["V8引擎作为目前最流行的JavaScript引擎，在浏览器端和NodeJS端都有使用。尤其在浏览器端，正是V8引擎的保驾护航，奠定了Chrome在浏览器端的霸主地位。早期的V8引擎采用", createVNode(_components.code, {
        children: "Full-Codegen"
      }), " + ", createVNode(_components.code, {
        children: "Crankshaft"
      }), "架构，现在已经更换为", createVNode(_components.code, {
        children: "Ignition"
      }), " + ", createVNode(_components.code, {
        children: "TurboFan"
      }), "架构。在垃圾回收方面是基于", createVNode(_components.strong, {
        children: "弱分代假说"
      }), "实现，并做了很多优化策略，进一步提升性能。"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "弱分代假说认为，大多数对象只会存在很短的时间，而另一部分对象则会接近于永生。"
      }), " 根据这个理论，V8把需要执行GC的内存空间", createVNode(_components.strong, {
        children: "分为新生代和老生代"
      }), "两部分，分别放置生命周期长度不同的对象并", createVNode(_components.strong, {
        children: "使用不同的GC策略，从而显著提升 GC 效率"
      }), "。"]
    }), "\n", createVNode(_components.h2, {
      id: "v8的内存构成",
      children: "V8的内存构成"
    }), "\n", createVNode(_components.p, {
      children: ["V8管理的内存是有限制的。在64位操作系统环境中，新生代的默认大小为", createVNode(_components.strong, {
        children: "32MB"
      }), "，老生代的默认大小约为", createVNode(_components.strong, {
        children: "1.4GB"
      }), "；在32位操作系统环境减半。这样的设置基本上能胜任浏览器环境，但是对于有大文件场景的NodeJS环境有些吃力了。不过不用担心，V8为此已经做了很多的优化工作，以尽可能保证应用的流畅性。今天，我们先简单了解下V8的内存划分："]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "新生代内存区（Young Generation/New Space）：大多数对象都在这里。"
      }), "\n", createVNode(_components.li, {
        children: "老生代内存区（Old Generation/Old Space）：常驻内存的对象在这里。"
      }), "\n", createVNode(_components.li, {
        children: "大对象区（Large Object Space）：大于1MB的对象会被放在这里，GC不会回收这部分内存。"
      }), "\n", createVNode(_components.li, {
        children: "代码区（Code Space）：唯一拥有执行权限的内存。"
      }), "\n", createVNode(_components.li, {
        children: "Cell区、PropertyCell区、Map区（Cell Space、Property Cell Space、Map Space）：隐藏类的存放位置。这些空间中的每个空间都包含相同大小的对象，并且对它们指向的对象有一些限制，从而简化了回收。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        alt: "V8内存构成",
        src: __0_______assets_images_memory_structure_of_V8_png__
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["这些空间中的每一个都由一组Pages组成。Page是使用", createVNode(_components.a, {
          href: "https://baike.baidu.com/item/mmap/1322217?fr=ge_ala",
          children: "mmap"
        }), "从操作系统分配的连续内存块。除大对象空间外，每个页面的大小均为1MB。 ", createVNode(_components.strong, {
          children: "垃圾回收器只会针对新生代内存区、老生代指针区以及老生代数据区进行垃圾回收。"
        }), " 每个区里面的内存页开头都有一个header，里面包括："]
      }), "\n", createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: ["各种", createVNode(_components.strong, {
            children: "元数据和flag"
          }), "（比如本页数据哪个区），GC需要使用的各种统计数据，GC各个阶段在本页的进展状况等。"]
        }), "\n", createVNode(_components.li, {
          children: ["一个", createVNode(_components.strong, {
            children: "slots buffer"
          }), "，记录了所有指向本页内对象的指针，以节省回收时的一些扫描操作。"]
        }), "\n", createVNode(_components.li, {
          children: ["一个", createVNode(_components.strong, {
            children: "skip list"
          }), "，将本页划分位多个区（region）并维护各个区的边界，用于快速搜索页上的对象。"]
        }), "\n"]
      }), "\n", createVNode(_components.p, {
        children: ["紧跟着header的是一个", createVNode(_components.strong, {
          children: "bitmap"
        }), "，上面的每个bit对应页上的一个字，用于后面会介绍的marking。前面的部分按32个字对齐后，剩余的空间才是用于存储对象的。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "注意："
      }), " 我们这里说的垃圾回收器只作用于", createVNode(_components.strong, {
        children: "堆内存"
      }), "。因为", createVNode(_components.strong, {
        children: "栈内存"
      }), "由操作系统直接管理，不在我们本文的讨论范围内。"]
    }), "\n", createVNode(_components.h2, {
      id: "新生代的gc策略",
      children: "新生代的GC策略"
    }), "\n", createVNode(_components.p, {
      children: ["垃圾回收算法：", createVNode(_components.strong, {
        children: "Scavenge(具体实现上采用Cheney算法)"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["新生代会将内存分成相等大小的两块", createVNode(_components.strong, {
        children: "Semi-Space"
      }), "，分别叫做", createVNode(_components.strong, {
        children: "From Space"
      }), "和", createVNode(_components.strong, {
        children: "To Space"
      }), "。", createVNode(_components.strong, {
        children: "From Space"
      }), "是真正的使用内存，", createVNode(_components.strong, {
        children: "To Space"
      }), "是空闲的，在GC的时候才会用到。也就是说，实际利用起来的新生代内存只有整体新生代内存的一半。"]
    }), "\n", createVNode(_components.p, {
      children: ["新生代使用的是Scavenge算法，具体实现使用了", createVNode(_components.em, {
        children: "Cheney算法"
      }), "，流程如下："]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["广度优先遍历", createVNode(_components.strong, {
          children: "From Space"
        }), "中的对象，把存活的对象复制到", createVNode(_components.strong, {
          children: "To Space"
        }), "。"]
      }), "\n", createVNode(_components.li, {
        children: ["遍历完成后，清空", createVNode(_components.strong, {
          children: "From Space"
        }), "。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "From Space"
        }), "和", createVNode(_components.strong, {
          children: "To Space"
        }), "角色互换（称为翻转）。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["另外，复制后的对象在", createVNode(_components.strong, {
        children: "To Space"
      }), "中占用的内存空间是连续的，不会出现碎片的问题。因为新生代的GC相对比较频繁，所以更侧重速度上尽可能快。"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "注意："
      }), " ", createVNode(_components.strong, {
        children: "From Space"
      }), "又会被划分为", createVNode(_components.code, {
        children: "Nursery"
      }), "和", createVNode(_components.code, {
        children: "Intermediate"
      }), "两块区域。对象第一次分配内存时在", createVNode(_components.code, {
        children: "Nursery"
      }), "区域，经历过一次GC后转移到", createVNode(_components.code, {
        children: "Intermediate"
      }), "区域。"]
    }), "\n", createVNode(_components.h2, {
      id: "对象晋升策略",
      children: "对象晋升策略"
    }), "\n", createVNode(_components.p, {
      children: ["新生代的对象不会一直存在于该区域。当满足一定条件的情况下，新生代的对象会得到", createVNode(_components.strong, {
        children: "晋升（Promote）"
      }), "，即从新生代转移到老生代。晋升的情况一般有两种："]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["经历一次GC后仍然存活的对象，即", createVNode(_components.code, {
          children: "Intermediate"
        }), "中的。"]
      }), "\n", createVNode(_components.li, {
        children: ["对象复制到", createVNode(_components.strong, {
          children: "To Space"
        }), "时，", createVNode(_components.strong, {
          children: "To Space"
        }), "的空间已经使用了25%以上。"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "老生代的gc策略",
      children: "老生代的GC策略"
    }), "\n", createVNode(_components.p, {
      children: ["垃圾回收算法：", createVNode(_components.strong, {
        children: "Mark-Sweep(标记清除算法)"
      }), " + ", createVNode(_components.strong, {
        children: "Mark-Compact(标记整理算法)"
      })]
    }), "\n", createVNode(_components.p, {
      children: "老生代内存也分为两部分："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "指针区（Old Pointer Space）"
        }), "：如果对象可能有指向其他对象的指针，保存在这里。大多数晋升的对象都在这里。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "数据区（Old Data Space）"
        }), "：只保存原始对象哎那个，没有指向其他对象的指针。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["老生代做垃圾回收时包含了两种算法：", createVNode(_components.strong, {
        children: ["标记清除(Mark Sweep)", createVNode(_components.strong, {
          children: "和"
        }), "标记整理（Mark Compact）"]
      }), "。只有三个步骤："]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Marking 标记"
      }), "\n", createVNode(_components.li, {
        children: "Sweeping 清除"
      }), "\n", createVNode(_components.li, {
        children: "Compacting 整理"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "marking-标记",
      children: "Marking 标记"
    }), "\n", createVNode(_components.p, {
      children: ["标记就是找到所有可访问对象的过程。两种算法的标记流程是一样的。使用了", createVNode(_components.strong, {
        children: "三色标记法"
      }), "："]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "00"
        }), "：白色。表示未被引用。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "10"
        }), "：灰色。表示被引用，但是其引用的对象还没有遍历完。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "11"
        }), "：黑色。表示被引用，并且其引用的对象已经遍历完成。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["首先将所有对象标记为", createVNode(_components.strong, {
        children: "白色"
      }), "，然后从根集", createVNode(_components.em, {
        children: "Root Set"
      }), "（执行栈和全局对象）开始，以", createVNode(_components.strong, {
        children: "深度优先遍历"
      }), "的方式为访问到的对象添加", createVNode(_components.strong, {
        children: "灰/黑色"
      }), "。"]
    }), "\n", createVNode(_components.h3, {
      id: "sweeping-清除",
      children: "Sweeping 清除"
    }), "\n", createVNode(_components.p, {
      children: ["清除被标记为白色的对象。这个结果会造成内存空间不连续的情况。清除的本质是", createVNode(_components.strong, {
        children: "将内存的地址标记位空闲"
      }), "，代码层面上是把内存地址保存到一个叫", createVNode(_components.code, {
        children: "Free List"
      }), "的数据结构中。"]
    }), "\n", createVNode(_components.h3, {
      id: "compacting-整理",
      children: "Compacting 整理"
    }), "\n", createVNode(_components.p, {
      children: "修改仍然存活的对象的内存地址，将不同内存页上的对象整合到一起，使得内存空间紧凑有序。这个过程比较消耗性能。"
    }), "\n", createVNode(_components.h2, {
      id: "回收算法比较",
      children: "回收算法比较"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "回收算法"
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
            children: "速度"
          }), createVNode(_components.td, {
            children: "快"
          }), createVNode(_components.td, {
            children: "中"
          }), createVNode(_components.td, {
            children: "慢"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "空间"
          }), createVNode(_components.td, {
            children: "双倍空间（无碎片）"
          }), createVNode(_components.td, {
            children: "少（有碎片）"
          }), createVNode(_components.td, {
            children: "少（无碎片）"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "是否移动对象"
          }), createVNode(_components.td, {
            children: "是"
          }), createVNode(_components.td, {
            children: "否"
          }), createVNode(_components.td, {
            children: "是"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["基于", createVNode(_components.strong, {
        children: "弱分代假说"
      }), "理论，实现不同分代采用不同策略的垃圾回收算法，以达到空间与时间的最优平衡解。"]
    }), "\n", createVNode(_components.h2, {
      id: "垃圾回收机制的进阶问题",
      children: "垃圾回收机制的进阶问题"
    }), "\n", createVNode(_components.p, {
      children: "对于进阶问题，这里只做简单了解。如果你有兴趣，可以自行查阅资料了解更多信息。毕竟真正的知识不是一篇文章能够讲明白的。比起做一个知识的定义者，我更希望能够成为知识的启蒙者，让大家能带着更多的疑问去思考，去整理自己的知识库。"
    }), "\n", createVNode(_components.h3, {
      id: "为什么v8引擎需要限制内存大小",
      children: "为什么V8引擎需要限制内存大小"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "浏览器环境很少会遇到使用大量内存的场景，因此没有必要将最大内存设置得过高。"
      }), "\n", createVNode(_components.li, {
        children: "JavaScript是单线程机制，垃圾回收同样会阻塞JS主线程逻辑的执行。"
      }), "\n", createVNode(_components.li, {
        children: ["垃圾回收本身也是一件非常耗时的操作，所以使用内存过大会导致主线程出现卡顿现象（这种现象叫做全停顿", createVNode(_components.code, {
          children: "Stop The World"
        }), "），造成浏览器长时间无法得到响应。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["按照官方的说法，以1.5GB的垃圾回收的堆内存为例，V8做一次", createVNode(_components.strong, {
        children: "小的垃圾回收"
      }), "需要", createVNode(_components.strong, {
        children: "50ms"
      }), "以上，而做一次", createVNode(_components.strong, {
        children: "非增量式回收"
      }), "甚至需要", createVNode(_components.strong, {
        children: "1s以上"
      }), "，可见其耗时之久，而在这1s的时间内，", createVNode(_components.strong, {
        children: "应用的性能和响应时间会大大下降"
      }), "，这样的情况无论是前端还是后端，都是无法接受的。因此在当时的情况下，直接限制堆内存是一个好的选择。"]
    }), "\n", createVNode(_components.h3, {
      id: "什么是增量标记延迟清除和增量整理",
      children: "什么是增量标记、延迟清除和增量整理"
    }), "\n", createVNode(_components.p, {
      children: "为了进一步提升V8的性能，垃圾回收器已经开始往增量式、并发式、并行式改进了。目前主要的优化发生在老生代的GC上，因为新生代的GC一般很短暂，可优化的空间和意义不大。从官方的说法上我们可以得知，一次完整的垃圾回收非常耗时，采用增量的方式可以将时间拆分以达到更理想的效果（运行时间不超过5ms）。"
    }), "\n", createVNode(_components.p, {
      children: "在标记阶段，V8引入了增量标记的概念；在清除阶段，V8引入了并发、并行和延迟清除的概念；在整理阶段，V8同样引入了增量整理的概念。"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: "当然采用增量的方式最大的问题是如何保证对象的误标记。"
      }), " 为了解决这个问题，V8在写屏障的基础上，额外添加了一个需要记录的情形：", createVNode(_components.strong, {
        children: "每次产生从黑色对象指向白色对象的引用的时候，将被指的对象重新标记为灰色，放回标记的队列中，这样便不会误将存活的对象标记为死亡了。"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "什么是写屏障",
      children: "什么是写屏障"
    }), "\n", createVNode(_components.p, {
      children: ["根据前面所学的知识，我们来想一个问题。", createVNode(_components.strong, {
        children: "如果新生代有一个对象，它只有一个引用，而它的引用在老生代，这时候如果保证新生代进行垃圾回收时，这个对象不会被清除掉呢？"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["对于这个问题，V8选择的解决方案是使用", createVNode(_components.strong, {
        children: "写屏障（write barrier）"
      }), "，即每次往一个对象写入一个指针（", createVNode(_components.em, {
        children: "添加引用"
      }), "）的时候，都执行一段代码，这段代码会检查这个被写入的指针是否是由老生代对象指向新生代对象的，这样我们就能明确地记录下所有从老生代指向新生代的指针了。这个用于记录的数据结构叫做", createVNode(_components.strong, {
        children: "StoreBuffer"
      }), "，每个堆维护一个，为了防止它无限增长下去，会定期地进行清理、去重和更新。这样，我们可以通过扫描，得知", createVNode(_components.code, {
        children: "根对象->新生代"
      }), "和", createVNode(_components.code, {
        children: "新生代->新生代"
      }), "的引用，通过检查", createVNode(_components.strong, {
        children: "StoreBuffer"
      }), "，得知", createVNode(_components.code, {
        children: "老生代->新生代"
      }), "的引用，就没有漏网之鱼，可以安心地对新生代进行回收了。"]
    }), "\n", createVNode(_components.h3, {
      id: "什么是隐藏类",
      children: "什么是隐藏类"
    }), "\n", createVNode(_components.p, {
      children: "在阅读下面的内容之前，请明确两个重点："
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "V8会为每个对象关联一个隐藏类。"
      }), "\n", createVNode(_components.li, {
        children: "隐藏类的目的是优化属性的访问速度。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "隐藏类的出现是为了优化JavaScript属性值的查找问题，提升这块的性能。由于JavaScript是动态语言，变量随时可以变换类型。也就是说它不能像Java那样，在运行时就确定属性的值（或者指针）在内存的偏移量，这就导致了JavaScript的属性查找相较于静态语言会慢很多。"
    }), "\n", createVNode(_components.p, {
      children: ["V8使用了", createVNode(_components.strong, {
        children: "隐藏类"
      }), "的方式来模拟类似静态语言的查找方式，做到尽可能地提升查找速度。从结构上来说，隐藏类和Java中的固定对象结构非常相似。"]
    }), "\n", createVNode(_components.h3, {
      id: "什么是内联缓存",
      children: "什么是内联缓存"
    }), "\n", createVNode(_components.p, {
      children: ["除了隐藏类，V8还利用了", createVNode(_components.strong, {
        children: "内联缓存"
      }), "的方式，进一步提升了JavaScript的性能。V8会维护一个记录最近有一段时间内调用方法时传入的参数类型。一旦V8引擎对参数的类型进行了正确的预测，将使得引擎越过解析如何访问类属性的过程，直接使用之前缓存的信息直接获得隐藏类并对对象属性的进行访问。"]
    }), "\n", createVNode(_components.h3, {
      id: "什么是hotspot热点代码收集",
      children: "什么是HotSpot热点代码收集"
    }), "\n", createVNode(_components.p, {
      children: "对于反复多次被使用的代码，V8会将这块代码的字节码编译成更为高效的机器码，然后当再次被执行这段被优化的代码时，只需要执行编译后的机器码就可以了，这样就可以大大提升代码的执行效率。"
    }), "\n", createVNode(_components.h2, {
      id: "总结",
      children: "总结"
    }), "\n", createVNode(_components.p, {
      children: "以上就是垃圾回收机制的内容了，那么最后我来做下总结："
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["垃圾回收分为", createVNode(_components.code, {
          children: "新生代"
        }), "和", createVNode(_components.code, {
          children: "老生代"
        }), "。"]
      }), "\n", createVNode(_components.li, {
        children: ["新生代采用的是", createVNode(_components.code, {
          children: "Scavenge算法"
        }), "。"]
      }), "\n", createVNode(_components.li, {
        children: ["老生代采用的是", createVNode(_components.code, {
          children: "标记清除"
        }), "+", createVNode(_components.code, {
          children: "标记整理"
        }), "算法。"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "提问",
      children: "提问"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "新生代变量是如何进行提升的？"
      }), "\n", createVNode(_components.li, {
        children: "新生代对象仅被老生代引用时，新生代检查时如何识别对象被引用？"
      }), "\n", createVNode(_components.li, {
        children: "由于JavaScript的灵活性，导致只有在运行时才能确定数据占用空间的大小，这样会使内存读时需要耗费更多的时间。那么V8内存管理机制是如何解决这个问题的？"
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

const url = "src/content/blog/V8%E5%BC%95%E6%93%8E%E7%9A%84%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E6%9C%BA%E5%88%B6.mdx";
const file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/blog/V8引擎的垃圾回收机制.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/content/blog/V8引擎的垃圾回收机制.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
