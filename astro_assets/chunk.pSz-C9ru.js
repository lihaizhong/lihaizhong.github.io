import { e as createAstro, c as createComponent, r as renderComponent, a as renderHead, f as renderSlot, b as addAttribute, d as renderTemplate } from './chunk.DmgbW9yA.js';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from './chunk.Tx9T4owR.js';
import { $ as $$FormattedDate } from './chunk.CyjTMzXW.js';
/* empty css               */

const $$Astro = createAstro("https://lihaizhong.github.io");
const $$PostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostLayout;
  const { title, description, pubDate, updatedDate, heroImage } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <article> ${heroImage ? renderTemplate`<div> <img${addAttribute(heroImage, "src")} alt=""> </div>` : null} <h1 class="text-3xl my-1">${title}</h1> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate })} ${updatedDate ? renderTemplate`<div class="italic">
Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate })} </div>` : null} <hr> ${renderSlot($$result, $$slots["default"])} </article> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/layouts/PostLayout.astro", void 0);

export { $$PostLayout as $ };
