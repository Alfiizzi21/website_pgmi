import { c as create_ssr_component, b as subscribe, e as escape, d as add_attribute, f as each, v as validate_component } from "../../../chunks/index.js";
import "../../../chunks/firebase.js";
/* empty css                   */import { p as page } from "../../../chunks/stores.js";
import "firebase/firestore";
import "firebase/app";
import "firebase/storage";
const logo = "/_app/immutable/assets/pgmi-0064bf6f.png";
const Header_svelte_svelte_type_style_lang = "";
const css = {
  code: "li.svelte-1i4kkof{color:white;cursor:pointer}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let headerclass;
  let nav_toggle = true;
  let navclass;
  let linkProfil = [];
  const host = "http://127.0.0.1:3000";
  $$result.css.add(css);
  {
    {
      navclass = "-translate-y-[1000px]";
    }
  }
  {
    if (!($page.url.pathname == "/")) {
      headerclass = "md:bg-sky-900";
    } else {
      headerclass = "md:bg-transparent";
    }
  }
  $$unsubscribe_page();
  return `<header class="${"relative z-50 flex h-16 w-full items-center justify-between bg-sky-900 transition-colors duration-300 md:fixed md:top-0 " + escape(headerclass, true)}"><a${add_attribute("href", host, 0)}><img height="${"40"}" width="${"133"}" class="${"mx-4"}"${add_attribute("src", logo, 0)} alt="${"pgmi logo"}"></a>
	<div class="${"h-10 w-10 md:hidden"}"><label class="${"cursor-pointer"}" for="${"nav-toggle"}">${`<span class="${"material-icons pt-2 text-white"}">menu</span>`}</label>
		<input class="${"hidden"}" type="${"checkbox"}" name="${"nav-toggle"}" id="${"nav-toggle"}"${add_attribute("checked", nav_toggle, 1)}></div>

	<nav class="${"absolute top-16 left-0 right-0 transition-transform md:relative md:top-0 md:mx-4 md:-translate-y-0 " + escape(navclass, true)}"><ul class="${"flex h-full flex-col gap-1 bg-sky-900 pb-4 md:flex-row md:bg-transparent md:pb-0"}"><a${add_attribute("href", host, 0)}><li class="${"flex h-11 w-full items-center px-4 hover:text-sky-600 md:h-16  svelte-1i4kkof"}">Beranda</li></a>
			<li class="${"group flex w-full flex-col gap-1 px-4 hover:text-sky-600 md:h-16 md:flex-row md:items-center  svelte-1i4kkof"}"><div class="${"flex h-11 items-center"}">Profil <span class="${"material-icons"}">expand_more</span></div>
				<ul class="${"md:absolute md:top-12 md:hidden md:bg-sky-700 md:group-hover:block"}">${each(linkProfil, (lp) => {
    return `<a href="${escape(host, true) + "/profil/#" + escape(lp.secRef, true)}"><li class="${"py-2 px-6 hover:text-sky-600 md:p-4 capitalize md:hover:bg-sky-900 md:hover:text-white svelte-1i4kkof"}">${escape(lp.title)}</li>
						</a>`;
  })}</ul></li>
			<a href="${escape(host, true) + "/berita"}"><li class="${"flex h-11 w-full items-center px-4 hover:text-sky-600 md:h-16  svelte-1i4kkof"}">Berita</li></a>
			
			<li class="${"group flex w-full flex-col gap-1 px-4 hover:text-sky-600 md:h-16 md:flex-row md:items-center  svelte-1i4kkof"}"><div class="${"flex h-11 items-center"}">Akademik<span class="${"material-icons"}">expand_more</span></div>
				<ul class="${"md:absolute md:top-12 md:hidden md:bg-sky-700 md:group-hover:block"}"><a href="${escape(host, true) + "/kurikulum"}"><li class="${"py-2 px-6 hover:text-sky-600 md:p-4 md:hover:bg-sky-900 md:hover:text-white svelte-1i4kkof"}">Kurikulum
						</li></a>
					<a href="${escape(host, true) + "/jadwal-perkuliahan"}"><li class="${"py-2 px-6 hover:text-sky-600 md:p-4 md:hover:bg-sky-900 md:hover:text-white svelte-1i4kkof"}">Jadwal Perkuliahan
						</li></a></ul></li>
			<a href="${"#kontak"}"><li class="${"flex h-11 w-full items-center px-4 hover:text-sky-600 md:h-16  svelte-1i4kkof"}">Kontak</li></a></ul></nav></header>
`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"bg-sky-900 p-4 sm:p-6"}"><div class="${"md:flex md:justify-between"}"><div class="${"mb-6 md:mb-0"}"><a href="${"./"}" class="${"flex items-center"}"><img height="${"64"}" width="${"213"}"${add_attribute("src", logo, 0)} class="${"mx-auto"}" alt="${"PGMI Logo"}"></a></div>
		<div class="${"grid grid-cols-3 gap-8 sm:grid-cols-4 sm:gap-7"}"><div><h2 class="${"mb-6 text-sm font-semibold uppercase text-white"}">Link Terkait</h2>
				<ul class="${"text-gray-400"}"><li class="${"mb-4"}"><a href="${"https://uinjambi.ac.id"}" class="${"hover:underline"}">UIN Jambi</a></li>
					<li><a href="${"https://ftk.uinjambi.ac.id"}" class="${"hover:underline"}">FTK UIN Jambi</a></li></ul></div>
			<div><h2 class="${"mb-6 text-sm font-semibold uppercase text-white"}">SOSIAL MEDIA</h2>
				<ul class="${"text-gray-400"}"><li class="${"mb-4"}"><a href="${"https://www.facebook.com/profile.php?id=100071515432036"}" class="${"hover:underline "}">Facebook</a></li>
					<li><a href="${"https://www.instagram.com/pgmiuinstsjambi/"}" class="${"hover:underline"}">Instagram</a></li></ul></div>
			<div id="${"kontak"}" class="${"col-span-2 "}"><h2 class="${"mb-6 text-sm font-semibold uppercase text-white"}">KONTAK</h2>
				<ul class="${"text-gray-400"}"><li class="${"mb-4 flex gap-2"}"><span class="${"material-icons"}">mail </span>
						pgmi-ftk@uinjambi.ac.id
					</li>
					<li class="${"mb-4 flex gap-2"}"><span class="${"material-icons"}">call </span>
						+6281274504606
					</li>
					<li class="${"mb-4 flex gap-2"}"><span class="${"material-icons"}">call </span>
						+6281327088437
					</li></ul></div></div></div>
	<hr class="${"my-6 border-gray-700 sm:mx-auto lg:my-8"}">
	<div class="${"sm:flex sm:items-center sm:justify-between"}"><span class="${"text-sm text-gray-400 sm:text-center"}">\xA9 2022 PGMI UIN Jambi </span>
		<div class="${"mt-4 flex space-x-6 sm:mt-0 sm:justify-center"}"><a href="${"https://www.facebook.com/profile.php?id=100071515432036"}" class="${"text-gray-500 hover:text-white"}"><svg class="${"h-5 w-5"}" fill="${"currentColor"}" viewBox="${"0 0 24 24"}" aria-hidden="${"true"}"><path fill-rule="${"evenodd"}" d="${"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"}" clip-rule="${"evenodd"}"></path></svg>
				<span class="${"sr-only"}">Facebook page</span></a>
			<a href="${"https://www.instagram.com/pgmiuinstsjambi/"}" class="${"text-gray-500 hover:text-white"}"><svg class="${"h-5 w-5"}" fill="${"currentColor"}" viewBox="${"0 0 24 24"}" aria-hidden="${"true"}"><path fill-rule="${"evenodd"}" d="${"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"}" clip-rule="${"evenodd"}"></path></svg>
				<span class="${"sr-only"}">Instagram page</span></a></div></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
