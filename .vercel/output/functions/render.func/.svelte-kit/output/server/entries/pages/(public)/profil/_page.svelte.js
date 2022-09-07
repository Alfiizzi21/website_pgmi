import { c as create_ssr_component, v as validate_component, f as each, d as add_attribute, e as escape } from "../../../../chunks/index.js";
import { C as Container } from "../../../../chunks/Container.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const profil = data.data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `${$$result.title = `<title>Profil PGMI UIN Jambi</title>`, ""}`, ""}

${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${each(profil, (p) => {
        return `<section class="${"col-span-4 lg:col-span-2"}"><div${add_attribute("id", p.secRef, 0)} class="${"md:h-8"}"></div>
			<div class="${"section_title my-8 mx-2"}"><h1 class="${"text-center text-2xl uppercase font-bold text-sky-900"}">${escape(p.title)}</h1></div>
			<div class="${"m-4"}"><!-- HTML_TAG_START -->${p.body}<!-- HTML_TAG_END --></div>
		</section>`;
      })}`;
    }
  })}`;
});
export {
  Page as default
};
