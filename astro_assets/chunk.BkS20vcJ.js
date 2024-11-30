import { e as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, b as renderHead, f as renderSlot } from './chunk.D1hRkwUf.js';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from './chunk.BLVaxfb6.js';
import { $ as $$FormattedDate } from './chunk.Cz_lWNkJ.js';
/* empty css               */

const $$Astro = createAstro("https://lihaizhong.github.io");
const $$PostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostLayout;
  const { title, description, pubDate, updatedDate, heroImage } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-gjtny2mx> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "data-astro-cid-gjtny2mx": true })}${renderHead()}</head> <body data-astro-cid-gjtny2mx> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-gjtny2mx": true })} <main data-astro-cid-gjtny2mx> <article data-astro-cid-gjtny2mx>  <h1 class="text-3xl my-1" data-astro-cid-gjtny2mx>${title}</h1> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "data-astro-cid-gjtny2mx": true })} ${updatedDate && renderTemplate`<div class="italic" data-astro-cid-gjtny2mx>
Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "data-astro-cid-gjtny2mx": true })} </div>`} <hr data-astro-cid-gjtny2mx> ${renderSlot($$result, $$slots["default"])} </article> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-gjtny2mx": true })} </body></html>`;
}, "/Users/lihaizhong/Documents/Project/lihaizhong.blog/src/layouts/PostLayout.astro", void 0);

export { $$PostLayout as $ };
