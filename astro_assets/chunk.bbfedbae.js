import { d as createAstro, e as createComponent, r as renderTemplate, f as addAttribute, m as maybeRenderHead, s as spreadAttributes, g as renderSlot, h as renderComponent, A as AstroError, i as UnknownContentCollectionError, j as renderUniqueStylesheet, k as renderScriptElement, l as createHeadAndContent, u as unescapeHTML, n as renderHead } from './chunk.58a66e60.js';
import { p as prependForwardSlash } from './chunk.8ee70091.js';
/* empty css                *//* empty css                */
const $$Astro$8 = createAstro("https://lihaizhong.github.io");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/placeholder-social.jpg" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/jpeg" href="/favicon.jpeg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- RSS Feed Discovery --><link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml"><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><!-- <meta property="og:type" content="website" />
<meta property="og:url" content={Astro.url} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={new URL(image, Astro.url)} /> --><!-- Twitter --><!-- <meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content={Astro.url} />
<meta property="twitter:title" content={title} />
<meta property="twitter:description" content={description} />
<meta property="twitter:image" content={new URL(image, Astro.url)} /> -->`;
}, "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/components/BaseHead.astro", void 0);

const SITE_AUTHOR = "lihz";
const SITE_TITLE = "竹简记书";
const SITE_DESCRIPTION = "合抱之木生于毫末，九层之台起于累土，千里之行始于足下";
const SOCIAL_GITHUB = "https://github.com/lihaizhong";

const $$Astro$7 = createAstro("https://lihaizhong.github.io");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Footer;
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="p-6 text-center"> <a class="no-underline text-inherit" href="/official">&copy; ${today.getFullYear()} ${SITE_AUTHOR}.</a> All rights reserved.
</footer>`;
}, "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/components/Footer.astro", void 0);

const $$Astro$6 = createAstro("https://lihaizhong.github.io");
const $$HeaderLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const isActive = href === pathname || href === pathname.replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(["text-xl inline-block no-underline", [className, { "font-bold": isActive, "underline": isActive }]], "class:list")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/components/HeaderLink.astro", void 0);

const $$Astro$5 = createAstro("https://lihaizhong.github.io");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="my-9"> <!-- <h2 class="mb-1 text-3xl font-bold">{SITE_TITLE}</h2> --> <nav class="mb-2"> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/" }, { "default": ($$result2) => renderTemplate`首页` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/blog" }, { "default": ($$result2) => renderTemplate`博客` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/archive" }, { "default": ($$result2) => renderTemplate`归档` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": SOCIAL_GITHUB, "target": "_blank" }, { "default": ($$result2) => renderTemplate`GitHub` })} </nav> <p class="mt-0 mb-3 text-base text-gray-400">${SITE_DESCRIPTION}</p> </header>`;
}, "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/components/Header.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!(Object.assign({"BASE_URL":"/","MODE":"production","DEV":false,"PROD":true,"SSR":true,"SITE":"https://lihaizhong.github.io","ASSETS_PREFIX":undefined},{}))?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} \u2192 ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/archive/XMLHttpRequest的属性和方法.mdx": () => import('./chunk.635d233a.js'),"/src/content/archive/前端如何实现模糊搜索.mdx": () => import('./chunk.5b0a93f9.js'),"/src/content/archive/如何提一个好问题.mdx": () => import('./chunk.b16ed8cb.js'),"/src/content/archive/手写一个Ajax请求.mdx": () => import('./chunk.cb0bcb8e.js'),"/src/content/archive/新一代网络交互能力——FetchAPI.mdx": () => import('./chunk.66e0b98a.js'),"/src/content/blog/ECMAScript之箭头函数.mdx": () => import('./chunk.2ae3995d.js'),"/src/content/blog/Git中reset和revert的区别.mdx": () => import('./chunk.27bb43dc.js'),"/src/content/blog/HTTP的强缓存与协商缓存.mdx": () => import('./chunk.c8f1eaf1.js'),"/src/content/blog/Homebrew常用命令.mdx": () => import('./chunk.b8bcff63.js'),"/src/content/blog/JavaScript中的const、let和var的区别.mdx": () => import('./chunk.3e36c977.js'),"/src/content/blog/V8引擎的垃圾回收机制.mdx": () => import('./chunk.200c6f96.js'),"/src/content/blog/Vue源码解析之代理模式.mdx": () => import('./chunk.f8fc0968.js'),"/src/content/blog/Vue源码解析之依赖收集和派发更新.mdx": () => import('./chunk.1fd7ef38.js'),"/src/content/blog/你需要知道的Git提交规范.mdx": () => import('./chunk.66816385.js'),"/src/content/blog/即时通信技术——SSE.mdx": () => import('./chunk.ff098b49.js'),"/src/content/blog/发布属于你的NPM包.mdx": () => import('./chunk.7c5c68ae.js'),"/src/content/blog/探索JavaScript运行机制.mdx": () => import('./chunk.3db57b3a.js'),"/src/content/blog/语义化版本控制.mdx": () => import('./chunk.0625d358.js'),"/src/content/official/first-post.md": () => import('./chunk.ecdadfe9.js'),"/src/content/official/markdown-style-guide.md": () => import('./chunk.aff8ef1d.js'),"/src/content/official/second-post.md": () => import('./chunk.dbba3821.js'),"/src/content/official/third-post.md": () => import('./chunk.3cfbc249.js'),"/src/content/official/using-mdx.mdx": () => import('./chunk.dc83dd41.js')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"archive":{"type":"content","entries":{"xmlhttprequest的属性和方法":"/src/content/archive/XMLHttpRequest的属性和方法.mdx","前端如何实现模糊搜索":"/src/content/archive/前端如何实现模糊搜索.mdx","如何提一个好问题":"/src/content/archive/如何提一个好问题.mdx","手写一个ajax请求":"/src/content/archive/手写一个Ajax请求.mdx","新一代网络交互能力fetchapi":"/src/content/archive/新一代网络交互能力——FetchAPI.mdx"}},"blog":{"type":"content","entries":{"ecmascript之箭头函数":"/src/content/blog/ECMAScript之箭头函数.mdx","git中reset和revert的区别":"/src/content/blog/Git中reset和revert的区别.mdx","http的强缓存与协商缓存":"/src/content/blog/HTTP的强缓存与协商缓存.mdx","homebrew常用命令":"/src/content/blog/Homebrew常用命令.mdx","javascript中的constlet和var的区别":"/src/content/blog/JavaScript中的const、let和var的区别.mdx","v8引擎的垃圾回收机制":"/src/content/blog/V8引擎的垃圾回收机制.mdx","vue源码解析之代理模式":"/src/content/blog/Vue源码解析之代理模式.mdx","vue源码解析之依赖收集和派发更新":"/src/content/blog/Vue源码解析之依赖收集和派发更新.mdx","你需要知道的git提交规范":"/src/content/blog/你需要知道的Git提交规范.mdx","即时通信技术sse":"/src/content/blog/即时通信技术——SSE.mdx","发布属于你的npm包":"/src/content/blog/发布属于你的NPM包.mdx","探索javascript运行机制":"/src/content/blog/探索JavaScript运行机制.mdx","语义化版本控制":"/src/content/blog/语义化版本控制.mdx"}},"official":{"type":"content","entries":{"first-post":"/src/content/official/first-post.md","markdown-style-guide":"/src/content/official/markdown-style-guide.md","second-post":"/src/content/official/second-post.md","third-post":"/src/content/official/third-post.md","using-mdx":"/src/content/official/using-mdx.mdx"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/archive/XMLHttpRequest的属性和方法.mdx": () => import('./chunk.97b17b9f.js'),"/src/content/archive/前端如何实现模糊搜索.mdx": () => import('./chunk.e95d3fe6.js'),"/src/content/archive/如何提一个好问题.mdx": () => import('./chunk.13ffda10.js'),"/src/content/archive/手写一个Ajax请求.mdx": () => import('./chunk.75869261.js'),"/src/content/archive/新一代网络交互能力——FetchAPI.mdx": () => import('./chunk.aeb69307.js'),"/src/content/blog/ECMAScript之箭头函数.mdx": () => import('./chunk.e93691bb.js'),"/src/content/blog/Git中reset和revert的区别.mdx": () => import('./chunk.4df5d833.js'),"/src/content/blog/HTTP的强缓存与协商缓存.mdx": () => import('./chunk.b87c563d.js'),"/src/content/blog/Homebrew常用命令.mdx": () => import('./chunk.7303df9a.js'),"/src/content/blog/JavaScript中的const、let和var的区别.mdx": () => import('./chunk.f563ebc5.js'),"/src/content/blog/V8引擎的垃圾回收机制.mdx": () => import('./chunk.5662410c.js'),"/src/content/blog/Vue源码解析之代理模式.mdx": () => import('./chunk.035609ad.js'),"/src/content/blog/Vue源码解析之依赖收集和派发更新.mdx": () => import('./chunk.1c10857e.js'),"/src/content/blog/你需要知道的Git提交规范.mdx": () => import('./chunk.2572b8b3.js'),"/src/content/blog/即时通信技术——SSE.mdx": () => import('./chunk.93c9cb0e.js'),"/src/content/blog/发布属于你的NPM包.mdx": () => import('./chunk.6fd0a1c5.js'),"/src/content/blog/探索JavaScript运行机制.mdx": () => import('./chunk.8f4561af.js'),"/src/content/blog/语义化版本控制.mdx": () => import('./chunk.bffbec8d.js'),"/src/content/official/first-post.md": () => import('./chunk.f1b4f9be.js'),"/src/content/official/markdown-style-guide.md": () => import('./chunk.4d78be43.js'),"/src/content/official/second-post.md": () => import('./chunk.d93330f0.js'),"/src/content/official/third-post.md": () => import('./chunk.df6bb6f9.js'),"/src/content/official/using-mdx.mdx": () => import('./chunk.1abc1fcd.js')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$4 = createAstro("https://lihaizhong.github.io");
const $$FormattedDate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date?.toISOString?.(), "datetime")}> ${date?.toLocaleDateString?.("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/components/FormattedDate.astro", void 0);

const $$Astro$3 = createAstro("https://lihaizhong.github.io");
const $$PostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PostLayout;
  const { title, description, pubDate, updatedDate, heroImage } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-gjtny2mx> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "data-astro-cid-gjtny2mx": true })}${renderHead()}</head> <body data-astro-cid-gjtny2mx> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-gjtny2mx": true })} <main data-astro-cid-gjtny2mx> <article data-astro-cid-gjtny2mx>  <h1 class="text-3xl my-1" data-astro-cid-gjtny2mx>${title}</h1> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "data-astro-cid-gjtny2mx": true })} ${updatedDate && renderTemplate`<div class="italic" data-astro-cid-gjtny2mx>
Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "data-astro-cid-gjtny2mx": true })} </div>`} <hr data-astro-cid-gjtny2mx> ${renderSlot($$result, $$slots["default"])} </article> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-gjtny2mx": true })} </body></html>`;
}, "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/layouts/PostLayout.astro", void 0);

const $$Astro$2 = createAstro("https://lihaizhong.github.io");
async function getStaticPaths$2() {
  const posts = await getCollection("official");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$$2;
  const post = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "PostLayout", $$PostLayout, { ...post.data }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>${post.data.title}</h1> ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/pages/official/[...slug].astro", void 0);

const $$file$2 = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/pages/official/[...slug].astro";
const $$url$2 = "/official/[...slug]";

const ____slug_$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$$2,
	file: $$file$2,
	getStaticPaths: getStaticPaths$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://lihaizhong.github.io");
async function getStaticPaths$1() {
  const posts = await getCollection("archive");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$$1;
  const post = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "PostLayout", $$PostLayout, { ...post.data }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>${post.data.title}</h1> ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/pages/archive/[...slug].astro", void 0);

const $$file$1 = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/pages/archive/[...slug].astro";
const $$url$1 = "/archive/[...slug]";

const ____slug_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$$1,
	file: $$file$1,
	getStaticPaths: getStaticPaths$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://lihaizhong.github.io");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "PostLayout", $$PostLayout, { ...post.data }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/pages/blog/[...slug].astro", void 0);

const $$file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseHead as $, SITE_TITLE as S, ____slug_$2 as _, $$Header as a, $$Footer as b, SITE_DESCRIPTION as c, $$FormattedDate as d, $$HeaderLink as e, ____slug_$1 as f, getCollection as g, ____slug_ as h };
