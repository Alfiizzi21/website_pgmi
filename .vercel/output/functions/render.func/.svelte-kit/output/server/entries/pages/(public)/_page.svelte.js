import { c as create_ssr_component, v as validate_component, f as each, e as escape, d as add_attribute } from "../../../chunks/index.js";
import { C as Container } from "../../../chunks/Container.js";
import "../../../chunks/firebase.js";
import { t as truncate, r as removeTags } from "../../../chunks/lib.js";
import "firebase/firestore";
import "firebase/app";
import "firebase/storage";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".center_all.svelte-9beam0{display:flex;justify-content:center;align-items:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const host = "http://127.0.0.1:3000";
  let berita = [];
  let pengumuman = [];
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>PGMI UIN Jambi</title>`, ""}`, ""}

<section id="${"hero"}"><div class="${"absolute aspect-video w-full bg-black opacity-20"}"></div>
	<picture class="${"w-full"}"><source media="${"(max-width: 640px)"}" srcset="${"image/hero-640w.jpg"}">
		<source media="${"(max-width: 768px)"}" srcset="${"image/hero-768w.jpg"}">
		<source media="${"(max-width: 1024px)"}" srcset="${"image/hero-1024w.jpg"}">
		<source media="${"(min-width: 1280px)"}" srcset="${"image/hero-1280w.jpg"}">
		<img width="${"1920"}" height="${"1080"}" class="${"w-full"}" src="${"image/hero.webp"}" alt="${"hero"}"></picture></section>
${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"grid grid-cols-4 pb-8"}"><section class="${"col-span-4"}"><div class="${"section_title my-8"}"><h1 class="${"text-center text-2xl font-bold text-sky-900"}">BERITA TERBARU</h1>

				<div class="${"font-semibold text-sky-700"}"><a class="${"mx-auto flex w-max"}" href="${"/berita"}"><div>Lihat Semua Berita</div>
						<span class="${"material-icons"}">arrow_right_alt </span></a></div></div>
			<div class="${"grid md:grid-cols-3 md:grid-rows-4 xl:grid-rows-5 gap-2"}">${each(berita, (b, i) => {
        return `${i == 0 ? `<div class="${"mx-4 md:mx-0 md:row-span-4 xl:row-span-5 md:col-span-2"}"><figure class="${"overflow-hidden aspect-video w-full"}"><a href="${escape(host, true) + "/berita/" + escape(b.slug, true)}"><img class="${"transition-transform object-cover hover:scale-150"}"${add_attribute("src", b.imageUrl, 0)} alt="${""}">
								</a></figure>
							<div class="${"font-semibold uppercase text-slate-400"}">${escape(b.hari)},${escape(b.tanggal)}</div>
							<a href="${escape(host, true) + "/berita/" + escape(b.slug, true)}"><h2 class="${"text-xl font-semibold uppercase hover:text-sky-900"}">${escape(b.title)}</h2>
								<div class="${"indent-4"}">${escape(truncate(removeTags(b.body), 150))}</div></a>
						</div>` : `<div class="${"mx-4 md:mx-0 flex gap-2"}"><div class="${"overflow-hidden"}"><a href="${escape(host, true) + "/berita/" + escape(b.slug, true)}"><img class="${"h-28 w-28 object-cover object-center transition-transform hover:scale-150"}"${add_attribute("src", b.imageUrl, 0)} alt="${""}">
								</a></div>
							<div class="${"w-3/4"}"><div class="${"text-sm font-semibold uppercase text-slate-400"}">${escape(b.tanggal)}</div>
								<a href="${escape(host, true) + "/berita/" + escape(b.slug, true)}"><h2 class="${"text-lg font-semibold uppercase hover:text-sky-900"}">${escape(b.title)}</h2>
								</a></div>
						</div>`}`;
      })}</div></section>
		<section class="${"col-span-4 lg:col-span-2"}"><div class="${"section_title my-8 mx-2 "}"><h1 class="${"text-center text-2xl font-bold text-sky-900"}">AGENDA</h1></div>
			<div><div class="${"m-4 flex gap-4"}"><div class="${"w-16 rounded border border-sky-900 text-center font-semibold"}"><div class="${"center_all h-2/3 rounded-t bg-sky-900 text-4xl text-white svelte-9beam0"}">17</div>
						<div class="${"rounded-b bg-white uppercase text-sky-900"}">agu</div></div>
					<div class="${"agenda w-3/4"}"><h2 class="${"agenda_title text-lg font-semibold"}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, dolores.
						</h2>
						<div class="${"agenda_ket flex flex-col text-base text-slate-500 md:flex-row md:gap-4"}"><div class="${"flex "}"><span class="${"material-icons mr-2"}">schedule </span>
								07:30 - 09-11
							</div>
							<div class="${"flex"}"><span class="${"material-icons mr-2"}">pin_drop </span>
								UIN Mendalo
							</div></div></div></div>
				<div class="${"m-4 flex gap-4"}"><div class="${"w-16 rounded border border-sky-900 text-center font-semibold"}"><div class="${"center_all h-2/3 rounded-t bg-sky-900 text-4xl text-white svelte-9beam0"}">21</div>
						<div class="${"rounded-b bg-white uppercase text-sky-900"}">apr</div></div>
					<div class="${"agenda w-3/4"}"><h2 class="${"agenda_title text-lg font-semibold"}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, dolores.
						</h2>
						<div class="${"agenda_ket flex flex-col text-base text-slate-500 md:flex-row md:gap-4"}"><div class="${"flex "}"><span class="${"material-icons mr-2"}">schedule </span>
								07:30 - 09-11
							</div>
							<div class="${"flex"}"><span class="${"material-icons mr-2"}">pin_drop </span>
								UIN Mendalo
							</div></div></div></div></div></section>
		<section class="${"col-span-4 lg:col-span-2"}"><div class="${"section_title my-8 mx-2 "}"><h1 class="${"text-center text-2xl font-bold text-sky-900"}">PENGUMUMAN</h1></div>
			${each(pengumuman, (p) => {
        return `<div class="${"m-4"}"><div class="${"flex text-base text-slate-500"}"><div class="${"flex capitalize"}"><span class="${"material-icons mr-2"}">calendar_month </span>
							${escape(p.hari)}, ${escape(p.tanggal)}
						</div></div>
					<h2 class="${"text-lg font-semibold capitalize"}">${escape(p.pengumuman)}</h2>
				</div>`;
      })}</section></div>`;
    }
  })}`;
});
export {
  Page as default
};
