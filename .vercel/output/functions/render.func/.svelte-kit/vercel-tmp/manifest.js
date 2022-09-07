export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","hero.jpg","image/hero-1024w.jpg","image/hero-1280w.jpg","image/hero-640w.jpg","image/hero-768w.jpg","image/hero.webp","tinymce/icons/default/icons.min.js","tinymce/langs/README.md","tinymce/license.txt","tinymce/models/dom/model.min.js","tinymce/plugins/advlist/plugin.min.js","tinymce/plugins/anchor/plugin.min.js","tinymce/plugins/autolink/plugin.min.js","tinymce/plugins/autoresize/plugin.min.js","tinymce/plugins/autosave/plugin.min.js","tinymce/plugins/charmap/plugin.min.js","tinymce/plugins/code/plugin.min.js","tinymce/plugins/codesample/plugin.min.js","tinymce/plugins/directionality/plugin.min.js","tinymce/plugins/emoticons/js/emojiimages.js","tinymce/plugins/emoticons/js/emojiimages.min.js","tinymce/plugins/emoticons/js/emojis.js","tinymce/plugins/emoticons/js/emojis.min.js","tinymce/plugins/emoticons/plugin.min.js","tinymce/plugins/fullscreen/plugin.min.js","tinymce/plugins/help/plugin.min.js","tinymce/plugins/image/plugin.min.js","tinymce/plugins/importcss/plugin.min.js","tinymce/plugins/insertdatetime/plugin.min.js","tinymce/plugins/link/plugin.min.js","tinymce/plugins/lists/plugin.min.js","tinymce/plugins/media/plugin.min.js","tinymce/plugins/nonbreaking/plugin.min.js","tinymce/plugins/pagebreak/plugin.min.js","tinymce/plugins/preview/plugin.min.js","tinymce/plugins/quickbars/plugin.min.js","tinymce/plugins/save/plugin.min.js","tinymce/plugins/searchreplace/plugin.min.js","tinymce/plugins/table/plugin.min.js","tinymce/plugins/template/plugin.min.js","tinymce/plugins/visualblocks/plugin.min.js","tinymce/plugins/visualchars/plugin.min.js","tinymce/plugins/wordcount/plugin.min.js","tinymce/skins/content/dark/content.min.css","tinymce/skins/content/default/content.min.css","tinymce/skins/content/document/content.min.css","tinymce/skins/content/tinymce-5/content.min.css","tinymce/skins/content/tinymce-5-dark/content.min.css","tinymce/skins/content/writer/content.min.css","tinymce/skins/ui/oxide/content.inline.min.css","tinymce/skins/ui/oxide/content.min.css","tinymce/skins/ui/oxide/skin.min.css","tinymce/skins/ui/oxide/skin.shadowdom.min.css","tinymce/skins/ui/oxide-dark/content.inline.min.css","tinymce/skins/ui/oxide-dark/content.min.css","tinymce/skins/ui/oxide-dark/skin.min.css","tinymce/skins/ui/oxide-dark/skin.shadowdom.min.css","tinymce/skins/ui/tinymce-5/content.inline.min.css","tinymce/skins/ui/tinymce-5/content.min.css","tinymce/skins/ui/tinymce-5/skin.min.css","tinymce/skins/ui/tinymce-5/skin.shadowdom.min.css","tinymce/skins/ui/tinymce-5-dark/content.inline.min.css","tinymce/skins/ui/tinymce-5-dark/content.min.css","tinymce/skins/ui/tinymce-5-dark/skin.min.css","tinymce/skins/ui/tinymce-5-dark/skin.shadowdom.min.css","tinymce/themes/silver/theme.min.js","tinymce/tinymce.d.ts","tinymce/tinymce.min.js"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".webp":"image/webp",".js":"application/javascript",".md":"text/markdown",".txt":"text/plain",".css":"text/css",".ts":"video/mp2t"},
	_: {
		entry: {"file":"_app/immutable/start-2744a37e.js","imports":["_app/immutable/start-2744a37e.js","_app/immutable/chunks/index-2cc7f77f.js","_app/immutable/chunks/singletons-b88798ed.js","_app/immutable/chunks/index-56c348ce.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js'),
			() => import('../output/server/nodes/9.js'),
			() => import('../output/server/nodes/10.js'),
			() => import('../output/server/nodes/11.js'),
			() => import('../output/server/nodes/12.js'),
			() => import('../output/server/nodes/13.js'),
			() => import('../output/server/nodes/14.js'),
			() => import('../output/server/nodes/15.js'),
			() => import('../output/server/nodes/16.js'),
			() => import('../output/server/nodes/17.js'),
			() => import('../output/server/nodes/18.js'),
			() => import('../output/server/nodes/19.js'),
			() => import('../output/server/nodes/20.js'),
			() => import('../output/server/nodes/21.js'),
			() => import('../output/server/nodes/22.js')
		],
		routes: [
			{
				id: "(public)",
				pattern: /^\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,4], errors: [1,5], leaf: 16 },
				endpoint: null
			},
			{
				id: "(dashboard)/dashboard",
				pattern: /^\/dashboard\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2], errors: [1,3], leaf: 6 },
				endpoint: null
			},
			{
				id: "(public)/berita",
				pattern: /^\/berita\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,4], errors: [1,5], leaf: 17 },
				endpoint: null
			},
			{
				id: "(public)/jadwal-perkuliahan",
				pattern: /^\/jadwal-perkuliahan\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,4], errors: [1,5], leaf: 19 },
				endpoint: null
			},
			{
				id: "(public)/kurikulum",
				pattern: /^\/kurikulum\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,4], errors: [1,5], leaf: 20 },
				endpoint: null
			},
			{
				id: "(public)/login",
				pattern: /^\/login\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,4], errors: [1,5], leaf: 21 },
				endpoint: null
			},
			{
				id: "(public)/profil",
				pattern: /^\/profil\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,4], errors: [1,5], leaf: 22 },
				endpoint: null
			},
			{
				id: "(dashboard)/dashboard/berita",
				pattern: /^\/dashboard\/berita\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2], errors: [1,3], leaf: 7 },
				endpoint: null
			},
			{
				id: "(dashboard)/dashboard/pengumuman",
				pattern: /^\/dashboard\/pengumuman\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2], errors: [1,3], leaf: 10 },
				endpoint: null
			},
			{
				id: "(dashboard)/dashboard/profil",
				pattern: /^\/dashboard\/profil\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2], errors: [1,3], leaf: 13 },
				endpoint: null
			},
			{
				id: "(dashboard)/dashboard/berita/add",
				pattern: /^\/dashboard\/berita\/add\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2], errors: [1,3], leaf: 8 },
				endpoint: null
			},
			{
				id: "(dashboard)/dashboard/pengumuman/add",
				pattern: /^\/dashboard\/pengumuman\/add\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2], errors: [1,3], leaf: 11 },
				endpoint: null
			},
			{
				id: "(dashboard)/dashboard/profil/add",
				pattern: /^\/dashboard\/profil\/add\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2], errors: [1,3], leaf: 14 },
				endpoint: null
			},
			{
				id: "(dashboard)/dashboard/berita/edit/[id]",
				pattern: /^\/dashboard\/berita\/edit\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				page: { layouts: [0,2], errors: [1,3], leaf: 9 },
				endpoint: null
			},
			{
				id: "(dashboard)/dashboard/pengumuman/edit/[id]",
				pattern: /^\/dashboard\/pengumuman\/edit\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				page: { layouts: [0,2], errors: [1,3], leaf: 12 },
				endpoint: null
			},
			{
				id: "(dashboard)/dashboard/profil/edit/[id]",
				pattern: /^\/dashboard\/profil\/edit\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				page: { layouts: [0,2], errors: [1,3], leaf: 15 },
				endpoint: null
			},
			{
				id: "(public)/berita/[slug]",
				pattern: /^\/berita\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				page: { layouts: [0,4], errors: [1,5], leaf: 18 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
