import { c as create_ssr_component, d as add_attribute, v as validate_component, e as escape } from "../../../../../../../chunks/index.js";
import { s as storage } from "../../../../../../../chunks/firebase.js";
import "firebase/firestore";
import { E as Editor } from "../../../../../../../chunks/Editor.js";
import { ref } from "firebase/storage";
import "firebase/app";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  data.id;
  let berita = data.data;
  let inputBody = berita.body;
  let inputTitle = berita.title;
  berita.imageName;
  let inputImage;
  let imageUrl = berita.imageUrl;
  berita.imageName;
  ref(storage, "images/" + berita.imageName);
  console.log(inputImage);
  let button = "bg-green-500 text-white hover:bg-green-400";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<section class="${"dashboard-section"}"><div class="${"py-2 font-semibold text-lg uppercase"}">Update berita</div>
	<form class="${"flex flex-col gap-4"}" method="${"post"}"><div class="${"flex flex-col font-semibold gap-1"}"><label for="${"title"}">Title</label>
			<input type="${"text"}" class="${"py-1 px-4 text-sm rounded"}" name="${"title"}" id="${"title"}"${add_attribute("value", inputTitle, 0)}></div>
		<div class="${"flex flex-col font-semibold gap-1 z-0"}"><label for="${"title"}">Body</label>
			${validate_component(Editor, "Editor").$$render(
      $$result,
      {
        scriptSrc: "http://127.0.0.1:3000/tinymce/tinymce.min.js",
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
		<div class="${"flex flex-col font-semibold gap-1 z-0"}">${`<div class="${"flex justify-between items-center"}"><div>Image</div>
					<button class="${"py-1 px-2 bg-sky-900 rounded text-white"}">Ganti Image</button></div>

				<div><img${add_attribute("src", imageUrl, 0)} alt="${""}"></div>`}</div>
		<input class="${escape(button, true) + " py-2 px-4 font-bold rounded block cursor-pointer"}" ${""} type="${"submit"}" value="${"Update"}"></form></section>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
