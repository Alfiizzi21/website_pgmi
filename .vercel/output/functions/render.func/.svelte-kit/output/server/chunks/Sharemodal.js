import { c as create_ssr_component, d as add_attribute, e as escape, j as compute_rest_props, v as validate_component } from "./index.js";
const Newsheader = "/_app/immutable/assets/newsheader-14612f11.jpg";
const ShareButton_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".ssbc-button__link.svelte-drhdl8,.ssbc-button__icon.svelte-drhdl8{display:inline-block}.ssbc-button__link.svelte-drhdl8{text-decoration:none;color:#fff}.ssbc-button.svelte-drhdl8{transition:25ms ease-out;padding:0.75em}.ssbc-button__icon.svelte-drhdl8 svg{width:1em;height:1em;margin:0;vertical-align:middle}.ssbc-button__icon--fill.svelte-drhdl8{fill:#fff;stroke:none}.ssbc-button__icon--outline.svelte-drhdl8{fill:none;stroke:#fff}",
  map: null
};
const ShareButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { label = "" } = $$props;
  let { fill = true } = $$props;
  let { ariaLabel = "" } = $$props;
  let { class: classes = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0)
    $$bindings.class(classes);
  $$result.css.add(css$5);
  return `<a class="${"ssbc-button__link svelte-drhdl8"}"${add_attribute("href", href, 0)} target="${"_blank"}" rel="${"noopener"}"${add_attribute("aria-label", ariaLabel, 0)}><div class="${"ssbc-button " + escape(classes, true) + " svelte-drhdl8"}"><div aria-hidden="${"true"}" class="${[
    "ssbc-button__icon svelte-drhdl8",
    (fill ? "ssbc-button__icon--fill" : "") + " " + (!fill ? "ssbc-button__icon--outline" : "")
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div>
    ${escape(label)}</div></a>`;
});
const Email_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".ssbc-button--email{background-color:#777777}.ssbc-button--email:active,.ssbc-button--email:hover{background-color:#5e5e5e}",
  map: null
};
const Email = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["subject", "body", "ariaLabel", "class"]);
  let { subject } = $$props;
  let { body } = $$props;
  let { ariaLabel = "Share by Email" } = $$props;
  let { class: classes = "" } = $$props;
  let href;
  if ($$props.subject === void 0 && $$bindings.subject && subject !== void 0)
    $$bindings.subject(subject);
  if ($$props.body === void 0 && $$bindings.body && body !== void 0)
    $$bindings.body(body);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0)
    $$bindings.class(classes);
  $$result.css.add(css$4);
  href = encodeURI(`mailto:?subject=${subject}&body=${body}`);
  return `${validate_component(ShareButton, "ShareButton").$$render($$result, Object.assign({ class: "ssbc-button--email " + classes }, $$restProps, { ariaLabel }, { href }), {}, {
    default: () => {
      return `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}"><path d="${"M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.25 14.43l-3.5 2c-.08.05-.17.07-.25.07-.17 0-.34-.1-.43-.25-.14-.24-.06-.55.18-.68l3.5-2c.24-.14.55-.06.68.18.14.24.06.55-.18.68zm4.75.07c-.1 0-.2-.03-.27-.08l-8.5-5.5c-.23-.15-.3-.46-.15-.7.15-.22.46-.3.7-.14L12 13.4l8.23-5.32c.23-.15.54-.08.7.15.14.23.07.54-.16.7l-8.5 5.5c-.08.04-.17.07-.27.07zm8.93 1.75c-.1.16-.26.25-.43.25-.08 0-.17-.02-.25-.07l-3.5-2c-.24-.13-.32-.44-.18-.68s.44-.32.68-.18l3.5 2c.24.13.32.44.18.68z"}"></path></svg>`;
    }
  })}`;
});
const Facebook_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".ssbc-button--facebook{background-color:#3b5998}.ssbc-button--facebook:active,.ssbc-button--facebook:hover{background-color:#2d4373}",
  map: null
};
const Facebook = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["quote", "url", "ariaLabel", "class"]);
  let { quote } = $$props;
  let { url } = $$props;
  let { ariaLabel = "Share on Facebook" } = $$props;
  let { class: classes = "" } = $$props;
  let href;
  if ($$props.quote === void 0 && $$bindings.quote && quote !== void 0)
    $$bindings.quote(quote);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0)
    $$bindings.class(classes);
  $$result.css.add(css$3);
  href = encodeURI(`https://facebook.com/sharer/sharer.php?u=${url}&quote=${quote}`);
  return `${validate_component(ShareButton, "ShareButton").$$render(
    $$result,
    Object.assign(
      {
        class: "ssbc-button--facebook " + classes
      },
      $$restProps,
      { ariaLabel },
      { href }
    ),
    {},
    {
      default: () => {
        return `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}"><path d="${"M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"}"></path></svg>`;
      }
    }
  )}`;
});
const HackerNews_svelte_svelte_type_style_lang = "";
const LinkedIn_svelte_svelte_type_style_lang = "";
const Pinterest_svelte_svelte_type_style_lang = "";
const Reddit_svelte_svelte_type_style_lang = "";
const Telegram_svelte_svelte_type_style_lang = "";
const Tumblr_svelte_svelte_type_style_lang = "";
const Twitter_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".ssbc-button--twitter{background-color:#55acee}.ssbc-button--twitter:active,.ssbc-button--twitter:hover{background-color:#2795e9}",
  map: null
};
const Twitter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["text", "url", "ariaLabel", "hashtags", "via", "related", "class"]);
  let { text } = $$props;
  let { url } = $$props;
  let { ariaLabel = "Share on Twitter" } = $$props;
  let { hashtags = "" } = $$props;
  let { via = "" } = $$props;
  let { related = "" } = $$props;
  let { class: classes = "" } = $$props;
  let href;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.hashtags === void 0 && $$bindings.hashtags && hashtags !== void 0)
    $$bindings.hashtags(hashtags);
  if ($$props.via === void 0 && $$bindings.via && via !== void 0)
    $$bindings.via(via);
  if ($$props.related === void 0 && $$bindings.related && related !== void 0)
    $$bindings.related(related);
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0)
    $$bindings.class(classes);
  $$result.css.add(css$2);
  href = encodeURI(`https://twitter.com/intent/tweet/?text=${text}&hashtags=${hashtags}&via=${via}&related=${related}&url=${url}`);
  return `${validate_component(ShareButton, "ShareButton").$$render($$result, Object.assign({ class: "ssbc-button--twitter " + classes }, $$restProps, { ariaLabel }, { href }), {}, {
    default: () => {
      return `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}"><path d="${"M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"}"></path></svg>`;
    }
  })}`;
});
const Vk_svelte_svelte_type_style_lang = "";
const WhatsApp_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".ssbc-button--whatsapp{background-color:#25D366}.ssbc-button--whatsapp:active,.ssbc-button--whatsapp:hover{background-color:#1DA851}",
  map: null
};
const WhatsApp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["text", "ariaLabel", "class"]);
  let { text } = $$props;
  let { ariaLabel = "Share on WhatsApp" } = $$props;
  let { class: classes = "" } = $$props;
  let href;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0)
    $$bindings.class(classes);
  $$result.css.add(css$1);
  href = encodeURI(`whatsapp://send?text=${text}`);
  return `${validate_component(ShareButton, "ShareButton").$$render(
    $$result,
    Object.assign(
      {
        class: "ssbc-button--whatsapp " + classes
      },
      $$restProps,
      { ariaLabel },
      { href }
    ),
    {},
    {
      default: () => {
        return `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}"><path d="${"M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.8-1.2-5.7-3.3-7.8zM12 21.4c-1.7 0-3.3-.5-4.8-1.3l-.4-.2-3.5 1 1-3.4L4 17c-1-1.5-1.4-3.2-1.4-5.1 0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.9 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7-.1 5.2-4.3 9.4-9.5 9.4zm5.1-7.1c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.1.3-.3.4-.5.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.4-.3-.5-.3h-.6s-.4.1-.7.3c-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.3-.3-.4-.6-.5z"}"></path></svg>`;
      }
    }
  )}`;
});
const Xing_svelte_svelte_type_style_lang = "";
const Line_svelte_svelte_type_style_lang = "";
const Sharemodal_svelte_svelte_type_style_lang = "";
const css = {
  code: "#modal.svelte-1g13cix{background-color:rgba(0, 0, 0, 0.4)}",
  map: null
};
const Sharemodal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url = "http://127.0.0.1:3000" } = $$props;
  let { title = "" } = $$props;
  let { desc = "" } = $$props;
  let modalClass = "hidden";
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  $$result.css.add(css);
  return `<div><div>${slots.default ? slots.default({}) : ``}</div>
	<div id="${"modal"}" class="${"fixed right-0 left-0 top-0 bottom-0 z-50 bg-black " + escape(modalClass, true) + " svelte-1g13cix"}"><div class="${"mx-auto mt-8 rounded bg-white p-6 text-base sm:w-[28rem]"}"><span class="${"material-icons cursor-pointer"}">close </span>
			<div class="${"flex"}"><input type="${"text"}" class="${"h-10 w-full rounded-l border border-sky-900 py-1 px-2"}" id="${"link"}"${add_attribute("value", url, 0)} readonly>
				<button class="${"flex h-10 w-10 items-center justify-center rounded-r bg-sky-900 text-white"}"><span class="${"material-icons "}">link </span></button></div>
			<div class="${"mt-4 flex justify-start gap-2"}">${validate_component(Email, "Email").$$render($$result, { subject: title, body: desc + " " + url }, {}, {})}
				${validate_component(WhatsApp, "WhatsApp").$$render(
    $$result,
    {
      class: "share-button",
      text: title + " " + url
    },
    {},
    {}
  )}
				${validate_component(Facebook, "Facebook").$$render($$result, { class: "share-button", quote: title, url }, {}, {})}
				${validate_component(Twitter, "Twitter").$$render(
    $$result,
    {
      class: "share-button",
      text: title,
      url,
      via: "",
      related: ""
    },
    {},
    {}
  )}</div></div></div>
</div>`;
});
export {
  Newsheader as N,
  Sharemodal as S
};
