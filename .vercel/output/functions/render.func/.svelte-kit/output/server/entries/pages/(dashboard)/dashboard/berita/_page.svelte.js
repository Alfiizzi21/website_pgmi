import { c as create_ssr_component, e as escape, f as each, d as add_attribute } from "../../../../../chunks/index.js";
import "../../../../../chunks/firebase.js";
import "firebase/firestore";
import { t as truncate } from "../../../../../chunks/lib.js";
import "firebase/app";
import "firebase/storage";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let berita = [];
  const host = "http://127.0.0.1:3000";
  return `<section class="${"dashboard-section"}"><div class="${"flex justify-between items-center"}"><div class="${"py-2 font-semibold text-lg uppercase"}">Daftar berita</div>
		<a href="${escape(host, true) + "/dashboard/berita/add"}"><span class="${"material-icons hover:text-green-500"}">add </span></a></div>

	<div class="${"overflow-x-auto relative"}"><table class="${"w-full text-sm text-left text-gray-500"}"><thead class="${"text-xs text-gray-700 uppercase bg-gray-50"}"><tr><th scope="${"col"}" class="${"py-3 px-6 text-center"}">Title </th>
					<th scope="${"col"}" class="${"md:w-52 text-center"}">Image </th>
					<th class="${"py-3 px-6 text-center"}">Body </th>
					<th scope="${"col"}" class="${"py-3 px-6 text-center"}">aksi </th></tr></thead>
			<tbody>${each(berita, (b) => {
    return `<tr class="${"bg-white border-b"}"><th class="${"py-4 px-6 text-center font-medium"}">${escape(b.title)}</th>
						<td class="${"py-4 px-6 text-center"}"><img${add_attribute("src", b.imageUrl, 0)} alt="${"news"}"></td>
						<td class="${"py-4 px-6"}"><!-- HTML_TAG_START -->${truncate(b.body, 100)}<!-- HTML_TAG_END --></td>
						<td class="${"flex flex-col items-center"}"><div class="${"cursor-pointer hover:text-red-500"}"><span class="${"material-icons"}">delete </span></div>
							<a href="${escape(host, true) + "/dashboard/berita/edit/" + escape(b.id, true)}" class="${"hover:text-blue-500"}"><span class="${"material-icons"}">edit </span>
							</a></td>
					</tr>`;
  })}</tbody></table></div></section>
${`<div class="${"right-0 left-0 top-0 bottom-0 bg-black fixed bg-opacity-25"}"><div class="${"w-40 h-20 mt-28 bg-white rounded mx-auto flex justify-center items-center"}"><div class="${"border-4 border-t-sky-500 w-10 h-10 rounded-full animate-spin"}"></div></div></div>`}`;
});
export {
  Page as default
};
