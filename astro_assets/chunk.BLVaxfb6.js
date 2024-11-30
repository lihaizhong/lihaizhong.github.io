import { e as createAstro, c as createComponent, r as renderTemplate, d as addAttribute, m as maybeRenderHead, a as renderComponent } from './chunk.D1hRkwUf.js';
/* empty css               */
import { b as SITE_AUTHOR, a as SITE_DESCRIPTION, c as SOCIAL_GITHUB } from './chunk.BOucUHYY.js';
import { $ as $$HeaderLink } from './chunk.DTBm6Yk2.js';

const $$Astro = createAstro("https://lihaizhong.github.io");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
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

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="p-6 text-center"> <a class="no-underline text-inherit" href="/official">&copy; ${today.getFullYear()} ${SITE_AUTHOR}.</a> All rights reserved.
</footer>`;
}, "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/components/Footer.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="my-9"> <!-- <h2 class="mb-1 text-3xl font-bold">{SITE_TITLE}</h2> --> <nav class="mb-2"> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/" }, { "default": ($$result2) => renderTemplate`首页` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/blog" }, { "default": ($$result2) => renderTemplate`博客` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/archive" }, { "default": ($$result2) => renderTemplate`归档` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": SOCIAL_GITHUB, "target": "_blank" }, { "default": ($$result2) => renderTemplate`GitHub` })} </nav> <p class="mt-0 mb-3 text-base text-gray-400">${SITE_DESCRIPTION}</p> </header>`;
}, "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/components/Header.astro", void 0);

export { $$BaseHead as $, $$Header as a, $$Footer as b };
