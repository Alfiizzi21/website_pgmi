import { c as create_ssr_component } from "../../../chunks/index.js";
/* empty css                   */import "../../../chunks/firebase.js";
import { getAuth } from "firebase/auth";
import "firebase/app";
import "firebase/firestore";
import "firebase/storage";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  getAuth();
  return `${$$result.head += `${$$result.title = `<title>Dashboard</title>`, ""}`, ""}

${`<div class="${"right-0 left-0 top-0 bottom-0 bg-black fixed bg-opacity-25"}"><div class="${"w-40 h-20 mt-28 bg-white rounded mx-auto flex justify-center items-center"}"><div class="${"border-4 border-t-sky-500 w-10 h-10 rounded-full animate-spin"}"></div></div></div>`}`;
});
export {
  Layout as default
};
