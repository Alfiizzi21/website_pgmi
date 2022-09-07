import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index.js";
import { C as Container } from "../../../../chunks/Container.js";
import { getAuth } from "firebase/auth";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email;
  let password;
  getAuth();
  return `${$$result.head += `${$$result.title = `<title>Login</title>`, ""}`, ""}
${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"bg-sky-100 sm:w-96 mx-auto sm:mt-4 md:mt-20 mb-52 rounded p-4 shadow"}"><h1 class="${"text-center text-2xl font-semibold text-sky-900 uppercase m-2"}">login</h1>
		<form class="${"flex flex-col gap-2"}" method="${"post"}"><div class="${"flex flex-col font-semibold gap-1"}"><label for="${"email"}">email</label>
				<input type="${"email"}" class="${"py-1 px-4 text-sm rounded"}" name="${"email"}" id="${"email"}"${add_attribute("value", email, 0)}></div>
			<div class="${"flex flex-col font-semibold gap-1"}"><label for="${"password"}">password</label>
				<input type="${"password"}" class="${"py-1 px-4 text-sm rounded"}" name="${"password"}" id="${"password"}"${add_attribute("value", password, 0)}></div>
			<input type="${"submit"}" class="${"bg-sky-900 py-1 rounded my-2 text-white font-semibold uppercase cursor-pointer"}" value="${"login"}"></form></div>`;
    }
  })}
${``}`;
});
export {
  Page as default
};
