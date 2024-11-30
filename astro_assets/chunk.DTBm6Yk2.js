import { e as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, s as spreadAttributes, f as renderSlot } from './chunk.D1hRkwUf.js';

const $$Astro = createAstro("https://lihaizhong.github.io");
const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const isActive = href === pathname || href === pathname.replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(["text-xl inline-block no-underline", [className, { "font-bold": isActive, "underline": isActive }]], "class:list")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/components/HeaderLink.astro", void 0);

export { $$HeaderLink as $ };
