import { d as createAstro, e as createComponent, r as renderTemplate, h as renderComponent, n as renderHead, f as addAttribute } from './chunk.58a66e60.js';
import { $ as $$BaseHead, a as $$Header, b as $$Footer, S as SITE_TITLE, c as SITE_DESCRIPTION, g as getCollection, d as $$FormattedDate } from './chunk.bbfedbae.js';
/* empty css                *//* empty css                */
const $$Astro$3 = createAstro("https://lihaizhong.github.io");
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$3;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, { "title": SITE_TITLE })} <main class="mb-12"> ${renderComponent($$result, "ChinesePoetry", null, { "client:only": "vue", "client:component-hydration": "only", "client:component-path": "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/hydrate-components/ChinesePoetry.vue", "client:component-export": "default" })} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/pages/index.astro", void 0);

const $$file$3 = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/pages/index.astro";
const $$url$3 = "";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$3,
	file: $$file$3,
	url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://lihaizhong.github.io");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  const posts = (await getCollection("official")).sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en" data-astro-cid-ibtldtnn> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-ibtldtnn": true })}${renderHead()}</head> <body data-astro-cid-ibtldtnn> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-ibtldtnn": true })} <main data-astro-cid-ibtldtnn> <section data-astro-cid-ibtldtnn> <ul class="list-none" data-astro-cid-ibtldtnn> ${posts.map((post) => renderTemplate`<li class="flex" data-astro-cid-ibtldtnn> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-ibtldtnn": true })} <a${addAttribute(`/archive/${post.slug}/`, "href")} data-astro-cid-ibtldtnn>${post.data.title}</a> </li>`)} </ul> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-ibtldtnn": true })} </body></html>`;
}, "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/pages/official/index.astro", void 0);

const $$file$2 = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/pages/official/index.astro";
const $$url$2 = "/official";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$2,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://lihaizhong.github.io");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const posts = (await getCollection("archive")).sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en" data-astro-cid-37x2unno> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-37x2unno": true })}${renderHead()}</head> <body data-astro-cid-37x2unno> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-37x2unno": true })} <main data-astro-cid-37x2unno> <section data-astro-cid-37x2unno> <ul class="list-none" data-astro-cid-37x2unno> ${posts.map((post) => renderTemplate`<li class="flex" data-astro-cid-37x2unno> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-37x2unno": true })} <a${addAttribute(`/archive/${post.slug}/`, "href")} data-astro-cid-37x2unno>${post.data.title}</a> </li>`)} </ul> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-37x2unno": true })} </body></html>`;
}, "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/pages/archive/index.astro", void 0);

const $$file$1 = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/pages/archive/index.astro";
const $$url$1 = "/archive";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://lihaizhong.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderComponent($$result, "PostList", null, { "client:only": "vue", "posts": posts, "prefix": "blog", "client:component-hydration": "only", "client:component-path": "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/hydrate-components/PostList.vue", "client:component-export": "default" })} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/pages/blog/index.astro", void 0);

const $$file = "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/pages/blog/index.astro";
const $$url = "/blog";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$2 as a, index$1 as b, index as c, index$3 as i };
