import { e as createAstro, c as createComponent, b as addAttribute, d as renderTemplate, m as maybeRenderHead, s as spreadAttributes, f as renderSlot, r as renderComponent } from './chunk.DmgbW9yA.js';
/* empty css               */
import { b as SITE_AUTHOR, S as SITE_DESCRIPTION, c as SOCIAL_GITHUB } from './chunk.Cz52ReIb.js';

const $$Astro$1 = createAstro("https://lihaizhong.github.io");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const {
    title,
    description
    /* image = "/placeholder-social.jpg" */
  } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/jpeg" href="/images/favicon.jpeg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- RSS Feed Discovery --><link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml"><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}>${description ? renderTemplate`<meta name="description"${addAttribute(description, "content")}>` : null}<!-- Open Graph / Facebook --><!-- <meta property="og:type" content="website" />
<meta property="og:url" content={Astro.url} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={new URL(image, Astro.url)} /> --><!-- Twitter --><!-- <meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content={Astro.url} />
<meta property="twitter:title" content={title} />
<meta property="twitter:description" content={description} />
<meta property="twitter:image" content={new URL(image, Astro.url)} /> -->`;
}, "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/components/BaseHead.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="p-6 text-center"> <a class="no-underline text-inherit" href="javascript: void(0);">&copy; ${today.getFullYear()} ${SITE_AUTHOR}.</a> All rights reserved.
</footer>`;
}, "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://lihaizhong.github.io");
const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const isActive = href === pathname || href === pathname.replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(["text-xl inline-block no-underline", [className, { "font-bold": isActive, "underline": isActive }]], "class:list")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/components/HeaderLink.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="box-border mt-9 mx-auto py-5 site-header" data-astro-cid-3ef6ksr2> <!-- <h2 class="mb-1 text-3xl font-bold">{SITE_TITLE}</h2> --> <nav class="mb-2" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`首页` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/blog", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`博客` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/interview", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`面试题` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/archive", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`归档` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": SOCIAL_GITHUB, "target": "_blank", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`GitHub` })} </nav> <p class="my-3 text-base text-gray-400" data-astro-cid-3ef6ksr2>${SITE_DESCRIPTION}</p> </header> `;
}, "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/components/Header.astro", void 0);

export { $$BaseHead as $, $$Header as a, $$Footer as b };
