import{e as t}from"./index-56c348ce.js";import{x as e,d as n,c as r}from"./firebase-8ec4c989.js";async function s({params:o}){try{const a=e(n,"pengumuman",o.id);return{data:(await r(a)).data(),id:o.id}}catch(a){throw console.log(a),t(404,a)}}const p=Object.freeze(Object.defineProperty({__proto__:null,load:s},Symbol.toStringTag,{value:"Module"}));export{p as _,s as l};
