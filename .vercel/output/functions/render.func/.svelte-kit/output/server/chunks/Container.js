import { c as create_ssr_component } from "./index.js";
const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="${"container mx-auto md:mt-16"}">${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Container as C
};
