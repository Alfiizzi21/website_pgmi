import { c as create_ssr_component, d as add_attribute, v as validate_component, e as escape } from "../../../../../../chunks/index.js";
import "../../../../../../chunks/firebase.js";
import "firebase/firestore";
import { E as Editor } from "../../../../../../chunks/Editor.js";
import "firebase/app";
import "firebase/storage";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const host = "http://127.0.0.1:3000";
  let pengumuman = " ";
  let keterangan = " ";
  let button = "bg-green-500 text-white hover:bg-green-400";
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<section class="${"dashboard-section"}"><div class="${"py-2 font-semibold text-lg uppercase"}">buat berita</div>
	<form class="${"flex flex-col gap-4"}" method="${"post"}"><div class="${"flex flex-col font-semibold gap-1"}"><label for="${"title"}">Pengumuman</label>
			<input required type="${"text"}" class="${"py-1 px-4 text-sm rounded"}" name="${"title"}" id="${"title"}"${add_attribute("value", pengumuman, 0)}></div>
		<div class="${"flex flex-col font-semibold gap-1 z-0"}"><label for="${"title"}">Keterangan</label>
			${validate_component(Editor, "Editor").$$render(
      $$result,
      {
        scriptSrc: host + "/tinymce/tinymce.min.js",
        apiKey: "8yjj0pk6spamsan2bcc7scpep4hxu72c5q9q4vf7mmyr2t84",
        value: keterangan
      },
      {
        value: ($$value) => {
          keterangan = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
		<input class="${"py-2 px-4 font-bold rounded block " + escape(button, true) + " cursor-pointer"}" ${""} type="${"submit"}" value="${"Tambah"}"></form></section>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
