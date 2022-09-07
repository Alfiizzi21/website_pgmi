import { c as create_ssr_component, b as subscribe, e as escape, d as add_attribute, v as validate_component } from "../../../../../chunks/index.js";
import { N as Newsheader, S as Sharemodal } from "../../../../../chunks/Sharemodal.js";
import { p as page } from "../../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let berita = data.berita;
  let meta = data.meta;
  const url = $page.url.href;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>${escape(meta.title)}</title>`, ""}<meta name="${"description"}"${add_attribute("content", meta.desc, 0)} data-svelte="svelte-l2v56j"><meta name="${"googlebot"}" content="${"notranslate"}" data-svelte="svelte-l2v56j"><meta property="${"og:title"}"${add_attribute("content", meta.title, 0)} data-svelte="svelte-l2v56j"><meta property="${"og:type"}" content="${"news"}" data-svelte="svelte-l2v56j"><meta property="${"og:url"}"${add_attribute("content", url, 0)} data-svelte="svelte-l2v56j"><meta property="${"og:image"}"${add_attribute("content", meta.image, 0)} data-svelte="svelte-l2v56j"><meta name="${"twitter:title"}"${add_attribute("content", meta.title, 0)} data-svelte="svelte-l2v56j"><meta name="${"twitter:description"}"${add_attribute("content", meta.desc, 0)} data-svelte="svelte-l2v56j"><meta name="${"twitter:image"}" content="${" " + escape(meta.image, true)}" data-svelte="svelte-l2v56j"><meta name="${"twitter:card"}" content="${"summary_large_image"}" data-svelte="svelte-l2v56j">`, ""}

<div class="${"text-2xl"}"><div class="${"md:mt-16"}"><img class="${"aspect-[3/1] w-full object-cover"}"${add_attribute("src", Newsheader, 0)} alt="${"news header"}">
		<div class="${"aspect-[3/1] w-full bg-black absolute top-16 bg-opacity-25 text-white flex items-end justify-between"}"><div class="${"m-4 capitalize font-semibold text-2xl sm:text-4xl lg:m-8 xl:text-14"}">${escape(berita.title)}</div>
			${validate_component(Sharemodal, "Sharemodal").$$render($$result, { url }, {}, {
    default: () => {
      return `<div class="${"float-right mr-4 flex h-12 w-12 -translate-y-4 lg:-translate-y-8 cursor-pointer items-center justify-center rounded-full bg-white hover:bg-sky-100"}"><span class="${"material-icons text-sky-900"}">share </span></div>`;
    }
  })}</div></div></div>
<main class="${"sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto my-6"}"><img class="${"object-cover aspect-[3/2] mx-2 sm:mx-auto"}"${add_attribute("src", berita.imageUrl, 0)} alt="${"image_berita"}">
	<div class="${"flex mt-4 flex-col gap-2 indent-4 px-2"}"><!-- HTML_TAG_START -->${berita.body}<!-- HTML_TAG_END --></div></main>`;
});
export {
  Page as default
};
