import{S as V,i as x,s as z,k,l as j,m as w,h as m,n as y,b as P,A as O,V as F,o as G,W as T,P as M,p as H}from"./index-2cc7f77f.js";const q=["Activate","AddUndo","BeforeAddUndo","BeforeExecCommand","BeforeGetContent","BeforeRenderUI","BeforeSetContent","BeforePaste","Blur","Change","ClearUndos","Click","ContextMenu","Copy","Cut","Dblclick","Deactivate","Dirty","Drag","DragDrop","DragEnd","DragGesture","DragOver","Drop","ExecCommand","Focus","FocusIn","FocusOut","GetContent","Hide","Init","KeyDown","KeyPress","KeyUp","LoadContent","MouseDown","MouseEnter","MouseLeave","MouseMove","MouseOut","MouseOver","MouseUp","NodeChange","ObjectResizeStart","ObjectResized","ObjectSelected","Paste","PostProcess","PostRender","PreProcess","ProgressState","Redo","Remove","Reset","ResizeEditor","SaveContent","SelectionChange","SetAttrib","SetContent","Show","Submit","Undo","VisualAid"],W=(i,e)=>{q.forEach(t=>{i.on(t,s=>{e(t.toLowerCase(),{eventName:t,event:s,editor:i})})})};function X(i){let e;return{c(){e=k("textarea"),this.h()},l(t){e=j(t,"TEXTAREA",{id:!0,style:!0}),w(e).forEach(m),this.h()},h(){y(e,"id",i[0]),H(e,"visibility","hidden")},m(t,s){P(t,e,s),i[18](e)},p(t,s){s&1&&y(e,"id",t[0])},d(t){t&&m(e),i[18](null)}}}function p(i){let e;return{c(){e=k("div"),this.h()},l(t){e=j(t,"DIV",{id:!0}),w(e).forEach(m),this.h()},h(){y(e,"id",i[0])},m(t,s){P(t,e,s),i[17](e)},p(t,s){s&1&&y(e,"id",t[0])},d(t){t&&m(e),i[17](null)}}}function J(i){let e;function t(o,c){return o[1]?p:X}let s=t(i),l=s(i);return{c(){e=k("div"),l.c(),this.h()},l(o){e=j(o,"DIV",{class:!0});var c=w(e);l.l(c),c.forEach(m),this.h()},h(){y(e,"class",i[2])},m(o,c){P(o,e,c),l.m(e,null),i[19](e)},p(o,[c]){s===(s=t(o))&&l?l.p(o,c):(l.d(1),l=s(o),l&&(l.c(),l.m(e,null))),c&4&&y(e,"class",o[2])},i:O,o:O,d(o){o&&m(e),l.d(),i[19](null)}}}const A=i=>i+"_"+Math.floor(Math.random()*1e9)+String(Date.now()),Q=()=>{let i={listeners:[],scriptId:A("tiny-script"),scriptLoaded:!1,injected:!1};const e=(s,l,o,c)=>{i.injected=!0;const a=l.createElement("script");a.referrerPolicy="origin",a.type="application/javascript",a.src=o,a.onload=()=>{c()},l.head&&l.head.appendChild(a)};return{load:(s,l,o)=>{i.scriptLoaded?o():(i.listeners.push(o),i.injected||e(i.scriptId,s,l,()=>{i.listeners.forEach(c=>c()),i.scriptLoaded=!0}))}}};let Y=Q();function Z(i,e,t){var s;let{id:l=A("tinymce-svelte")}=e,{inline:o=void 0}=e,{disabled:c=!1}=e,{apiKey:a="no-api-key"}=e,{channel:E="6"}=e,{scriptSrc:C=void 0}=e,{conf:f={}}=e,{modelEvents:S="change input undo redo"}=e,{value:h=""}=e,{text:b=""}=e,{cssClass:R="tinymce-wrapper"}=e,_,u,d,g="",D=c;const L=F(),v=()=>{const r=(()=>typeof window<"u"?window:global)();return r&&r.tinymce?r.tinymce:null},I=()=>{const n=Object.assign(Object.assign({},f),{target:u,inline:o!==void 0?o:f.inline!==void 0?f.inline:!1,readonly:c,setup:r=>{t(14,d=r),r.on("init",()=>{r.setContent(h),r.on(S,()=>{t(15,g=r.getContent()),g!==h&&(t(5,h=g),t(6,b=r.getContent({format:"text"})))})}),W(r,L),typeof f.setup=="function"&&f.setup(r)}});t(4,u.style.visibility="",u),v().init(n)};G(()=>{if(v()!==null)I();else{const n=C||`https://cdn.tiny.cloud/1/${a}/tinymce/${E}/tinymce.min.js`;Y.load(_.ownerDocument,n,()=>{I()})}}),T(()=>{var n;d&&((n=v())===null||n===void 0||n.remove(d))});function B(n){M[n?"unshift":"push"](()=>{u=n,t(4,u)})}function K(n){M[n?"unshift":"push"](()=>{u=n,t(4,u)})}function U(n){M[n?"unshift":"push"](()=>{_=n,t(3,_)})}return i.$$set=n=>{"id"in n&&t(0,l=n.id),"inline"in n&&t(1,o=n.inline),"disabled"in n&&t(7,c=n.disabled),"apiKey"in n&&t(8,a=n.apiKey),"channel"in n&&t(9,E=n.channel),"scriptSrc"in n&&t(10,C=n.scriptSrc),"conf"in n&&t(11,f=n.conf),"modelEvents"in n&&t(12,S=n.modelEvents),"value"in n&&t(5,h=n.value),"text"in n&&t(6,b=n.text),"cssClass"in n&&t(2,R=n.cssClass)},i.$$.update=()=>{i.$$.dirty&123040&&(d&&g!==h&&(d.setContent(h),t(6,b=d.getContent({format:"text"}))),d&&c!==D&&(t(16,D=c),typeof(t(13,s=d.mode)===null||s===void 0?void 0:s.set)=="function"?d.mode.set(c?"readonly":"design"):d.setMode(c?"readonly":"design")))},[l,o,R,_,u,h,b,c,a,E,C,f,S,s,d,g,D,B,K,U]}class $ extends V{constructor(e){super(),x(this,e,Z,J,z,{id:0,inline:1,disabled:7,apiKey:8,channel:9,scriptSrc:10,conf:11,modelEvents:12,value:5,text:6,cssClass:2})}}export{$ as E};
