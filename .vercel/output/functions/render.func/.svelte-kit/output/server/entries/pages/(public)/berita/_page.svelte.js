import { c as create_ssr_component, d as add_attribute, e as escape, i as is_promise, n as noop, f as each, v as validate_component } from "../../../../chunks/index.js";
import { N as Newsheader, S as Sharemodal } from "../../../../chunks/Sharemodal.js";
import { d as db } from "../../../../chunks/firebase.js";
import { a as timeConverter, b as timeConverterToHour, t as truncate, r as removeTags } from "../../../../chunks/lib.js";
import { collection, query, where, getDocs } from "firebase/firestore";
import "firebase/app";
import "firebase/storage";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const host = "http://127.0.0.1:3000";
  const tanggal = new Date();
  let pilihanTahun;
  const getBeritaByYear = async (year) => {
    year = parseInt(year);
    const beritaRef = collection(db, "berita");
    const q = query(beritaRef, where("year", "==", year));
    let tempArr = [];
    let beritaSnapshot = await getDocs(q);
    beritaSnapshot.forEach((doc) => {
      const date = timeConverter(doc.data().createdAt.seconds);
      const hour = timeConverterToHour(doc.data().createdAt.seconds);
      const data = doc.data();
      data.date = date;
      data.hour = hour;
      tempArr = [...tempArr, data];
    });
    return tempArr;
  };
  let PromiseBerita = getBeritaByYear(tanggal.getFullYear().toString());
  return `<div class="${"md:mt-16"}"><img class="${"aspect-[3/1] w-full object-cover"}"${add_attribute("src", Newsheader, 0)} alt="${"news header"}">
	<div class="${"aspect-[3/1] w-full bg-black absolute top-16 bg-opacity-25 text-white flex items-end"}"><div class="${"m-4 capitalize font-semibold text-2xl sm:text-4xl lg:m-8 xl:text-14"}">berita terbaru
		</div></div></div>
<div class="${"p-2 text-sm text-slate-500 sm:p-8"}"><a${add_attribute("href", host, 0)}>Beranda</a> &gt; <a href="${escape(host, true) + "/berita"}">Semua Berita</a></div>
${$$result.head += `${$$result.title = `<title>Berita PGMI UIN Jambi</title>`, ""}`, ""}
<main class="${"container mx-auto"}"><div class="${""}"><select id="${"countries"}" class="${"mx-auto block rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"}"><option value="${"2022"}">2022</option><option value="${"2023"}">2023</option><option value="${"2024"}">2024</option><option value="${"2025"}">2025</option></select></div>
	${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
		<div class="${"w-full flex justify-center my-4"}"><div class="${"w-10 h-10 border-4 border-t-sky-900 animate-spin rounded-full"}"></div></div>
	`;
    }
    return function(berita) {
      return `
		${berita.length === 0 ? `<div class="${"w-full text-center my-4 font-semibold"}">Tidak Ada Berita Di Tahun ${escape(pilihanTahun)}</div>` : `<section class="${"my-8 grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}">${each(berita, (b) => {
        return `<div class="${"card mx-4 sm:mx-0"}"><figure class="${"aspect-video md:aspect-[3/2] overflow-hidden"}"><a href="${escape(host, true) + "/berita/" + escape(b.slug, true)}"><img class="${"object-cover w-full cursor-pointer transition-transform duration-500 hover:scale-150 "}"${add_attribute("src", b.imageUrl, 0)} alt="${""}">
							</a></figure>
						<div class="${"flex justify-between pt-2"}"><div class="${"flex text-sm font-semibold text-slate-700"}"><span class="${"material-icons text-base"}">calendar_month </span>
								${escape(b.date)}
								<span class="${"material-icons ml-1 text-base"}">schedule </span>
								${escape(b.hour)}</div>
							${validate_component(Sharemodal, "Sharemodal").$$render($$result, { url: host + "/berita/" + b.slug }, {}, {
          default: () => {
            return `<button class="${""}"><span class="${"material-icons"}">share </span></button>
							`;
          }
        })}</div>
						<a href="${escape(host, true) + "/berita/" + escape(b.slug, true)}"><h2 class="${"text-lg font-semibold hover:text-sky-900 cursor-pointer"}">${escape(b.title)}</h2>
							<p>${escape(truncate(removeTags(b.body), 100))}
							</p></a>
					</div>`;
      })}</section>`}
	`;
    }(__value);
  }(PromiseBerita)}</main>`;
});
export {
  Page as default
};
