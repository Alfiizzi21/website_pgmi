import { c as create_ssr_component, d as add_attribute, v as validate_component, e as escape } from "../../../../../../chunks/index.js";
import "../../../../../../chunks/firebase.js";
import "firebase/firestore";
import "firebase/storage";
import { E as Editor } from "../../../../../../chunks/Editor.js";
import "firebase/app";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const host = "http://127.0.0.1:3000";
  let inputTitle = " ";
  let uploadImgProgress = "0%";
  let inputBody = " ";
  let button = "bg-slate-300 text-slate-500";
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<section class="${"dashboard-section"}"><div class="${"py-2 font-semibold text-lg uppercase"}">buat berita</div>
	<form class="${"flex flex-col gap-4"}" method="${"post"}"><div class="${"flex flex-col font-semibold gap-1"}"><label for="${"title"}">Title</label>
			<input required type="${"text"}" class="${"py-1 px-4 text-sm rounded"}" name="${"title"}" id="${"title"}"${add_attribute("value", inputTitle, 0)}></div>
		<div class="${"flex flex-col font-semibold gap-1 z-0"}"><label for="${"title"}">Body</label>
			${validate_component(Editor, "Editor").$$render(
      $$result,
      {
        scriptSrc: host + "/tinymce/tinymce.min.js",
        apiKey: "8yjj0pk6spamsan2bcc7scpep4hxu72c5q9q4vf7mmyr2t84",
        value: inputBody
      },
      {
        value: ($$value) => {
          inputBody = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
		<div class="${"flex flex-col font-semibold gap-1 z-0"}"><label for="${"image"}">Image</label>
			${`<div class="${"bg-white rounded"}"><div class="${"w-full h-1 bg-slate-300 mt-1 mb-2"}"><div style="${"width: " + escape(uploadImgProgress, true) + ";"}" class="${"h-1 bg-sky-900 transition-transform duration-300"}"></div></div>
					<input class="${"px-4 py-1 rounded text-sm cursor-pointer"}" type="${"file"}" accept="${"image/*"}" name="${"image"}" id="${"image"}">
					<div class="${"text-xs px-2 mb-1 font-bold"}">Sangat disarankan mengunakan foto dengan aspect ratio 16:9 !
					</div></div>`}</div>
		<input class="${"py-2 px-4 font-bold rounded block " + escape(button, true) + " cursor-pointer"}" ${"disabled"} type="${"submit"}" value="${"Tambah"}"></form></section>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
