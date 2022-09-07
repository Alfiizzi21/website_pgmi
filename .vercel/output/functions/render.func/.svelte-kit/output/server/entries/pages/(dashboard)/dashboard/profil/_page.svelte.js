import { c as create_ssr_component, f as each, e as escape } from "../../../../../chunks/index.js";
import "firebase/firestore";
import "../../../../../chunks/firebase.js";
import "firebase/app";
import "firebase/storage";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let profil = [];
  return `${each(profil, (p) => {
    return `<section class="${"dashboard-section"}"><div class="${"flex gap-2 items-center justify-between"}"><div class="${"py-2 font-semibold text-lg uppercase"}">${escape(p.title)}</div>
			<div class="${""}"><a href="${"./profil/edit/" + escape(p.id, true)}"><span class="${"material-icons cursor-pointer hover:text-blue-500"}">edit </span></a>
				<span class="${"material-icons cursor-pointer hover:text-red-500"}">delete
				</span>
			</div></div>
		<div class="${"bg-white rounded p-2 indent-4"}"><!-- HTML_TAG_START -->${p.body}<!-- HTML_TAG_END --></div>
	</section>`;
  })}

<a href="${"./profil/add"}"><section class="${"dashboard-section p-2 bg-sky-800 text-center cursor-pointer text-white"}">Tambahkan Section Baru
	</section></a>`;
});
export {
  Page as default
};
