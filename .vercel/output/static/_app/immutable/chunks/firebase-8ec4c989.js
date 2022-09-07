import{r as Le,_ as ao,C as uo,F as co,g as ho,a as lo,L as Oe,b as ct,S as fo,c as ju,i as Gu,d as Ku,e as zu,f as Hu,h as Qu,j as Wu,k as Xu}from"./index.esm2017-523da5de.js";var Yu="firebase",Ju="9.9.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Le(Yu,Ju,"app");var Zu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},v,tr=tr||{},I=Zu||self;function Sn(){}function Ns(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Qe(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function tc(e){return Object.prototype.hasOwnProperty.call(e,ys)&&e[ys]||(e[ys]=++ec)}var ys="closure_uid_"+(1e9*Math.random()>>>0),ec=0;function nc(e,t,n){return e.call.apply(e.bind,arguments)}function sc(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function Q(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Q=nc:Q=sc,Q.apply(null,arguments)}function dn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function Y(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function xt(){this.s=this.s,this.o=this.o}var rc=0;xt.prototype.s=!1;xt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),rc!=0)&&tc(this)};xt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const po=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},go=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const s=e.length,r=typeof e=="string"?e.split(""):e;for(let i=0;i<s;i++)i in r&&t.call(n,r[i],i,e)};function ic(e){t:{var t=Xc;const n=e.length,s=typeof e=="string"?e.split(""):e;for(let r=0;r<n;r++)if(r in s&&t.call(void 0,s[r],r,e)){t=r;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function oi(e){return Array.prototype.concat.apply([],arguments)}function er(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Cn(e){return/^[\s\xa0]*$/.test(e)}var ai=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function et(e,t){return e.indexOf(t)!=-1}function vs(e,t){return e<t?-1:e>t?1:0}var nt;t:{var ui=I.navigator;if(ui){var ci=ui.userAgent;if(ci){nt=ci;break t}}nt=""}function nr(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function mo(e){const t={};for(const n in e)t[n]=e[n];return t}var hi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yo(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<hi.length;i++)n=hi[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function sr(e){return sr[" "](e),e}sr[" "]=Sn;function oc(e){var t=cc;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var ac=et(nt,"Opera"),oe=et(nt,"Trident")||et(nt,"MSIE"),vo=et(nt,"Edge"),xs=vo||oe,wo=et(nt,"Gecko")&&!(et(nt.toLowerCase(),"webkit")&&!et(nt,"Edge"))&&!(et(nt,"Trident")||et(nt,"MSIE"))&&!et(nt,"Edge"),uc=et(nt.toLowerCase(),"webkit")&&!et(nt,"Edge");function To(){var e=I.document;return e?e.documentMode:void 0}var bn;t:{var ws="",Ts=function(){var e=nt;if(wo)return/rv:([^\);]+)(\)|;)/.exec(e);if(vo)return/Edge\/([\d\.]+)/.exec(e);if(oe)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(uc)return/WebKit\/(\S+)/.exec(e);if(ac)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Ts&&(ws=Ts?Ts[1]:""),oe){var Es=To();if(Es!=null&&Es>parseFloat(ws)){bn=String(Es);break t}}bn=ws}var cc={};function hc(){return oc(function(){let e=0;const t=ai(String(bn)).split("."),n=ai("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var r=t[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;e=vs(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||vs(r[2].length==0,i[2].length==0)||vs(r[2],i[2]),r=r[3],i=i[3]}while(e==0)}return 0<=e})}var Ls;if(I.document&&oe){var li=To();Ls=li||parseInt(bn,10)||void 0}else Ls=void 0;var lc=Ls,dc=function(){if(!I.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{I.addEventListener("test",Sn,t),I.removeEventListener("test",Sn,t)}catch{}return e}();function Z(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Z.prototype.h=function(){this.defaultPrevented=!0};function Ue(e,t){if(Z.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(wo){t:{try{sr(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:fc[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ue.Z.h.call(this)}}Y(Ue,Z);var fc={2:"touch",3:"pen",4:"mouse"};Ue.prototype.h=function(){Ue.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var We="closure_listenable_"+(1e6*Math.random()|0),pc=0;function gc(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ia=r,this.key=++pc,this.ca=this.fa=!1}function Bn(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function $n(e){this.src=e,this.g={},this.h=0}$n.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Us(e,t,s,r);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new gc(t,this.src,i,!!s,r),t.fa=n,e.push(t)),t};function Os(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=po(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Bn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Us(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.ca&&i.listener==t&&i.capture==!!n&&i.ia==s)return r}return-1}var rr="closure_lm_"+(1e6*Math.random()|0),_s={};function Eo(e,t,n,s,r){if(s&&s.once)return Io(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Eo(e,t[i],n,s,r);return null}return n=ar(n),e&&e[We]?e.N(t,n,Qe(s)?!!s.capture:!!s,r):_o(e,t,n,!1,s,r)}function _o(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=Qe(r)?!!r.capture:!!r,a=or(e);if(a||(e[rr]=a=new $n(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=mc(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)dc||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(Co(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function mc(){function e(n){return t.call(e.src,e.listener,n)}var t=yc;return e}function Io(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Io(e,t[i],n,s,r);return null}return n=ar(n),e&&e[We]?e.O(t,n,Qe(s)?!!s.capture:!!s,r):_o(e,t,n,!0,s,r)}function So(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)So(e,t[i],n,s,r);else s=Qe(s)?!!s.capture:!!s,n=ar(n),e&&e[We]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Us(i,n,s,r),-1<n&&(Bn(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=or(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Us(t,n,s,r)),(n=-1<e?t[e]:null)&&ir(n))}function ir(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[We])Os(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Co(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=or(t))?(Os(n,e),n.h==0&&(n.src=null,t[rr]=null)):Bn(e)}}}function Co(e){return e in _s?_s[e]:_s[e]="on"+e}function yc(e,t){if(e.ca)e=!0;else{t=new Ue(t,this);var n=e.listener,s=e.ia||e.src;e.fa&&ir(e),e=n.call(s,t)}return e}function or(e){return e=e[rr],e instanceof $n?e:null}var Is="__closure_events_fn_"+(1e9*Math.random()>>>0);function ar(e){return typeof e=="function"?e:(e[Is]||(e[Is]=function(t){return e.handleEvent(t)}),e[Is])}function K(){xt.call(this),this.i=new $n(this),this.P=this,this.I=null}Y(K,xt);K.prototype[We]=!0;K.prototype.removeEventListener=function(e,t,n,s){So(this,e,t,n,s)};function W(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new Z(t,e);else if(t instanceof Z)t.target=t.target||e;else{var r=t;t=new Z(s,e),yo(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=fn(o,s,!0,t)&&r}if(o=t.g=e,r=fn(o,s,!0,t)&&r,r=fn(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=fn(o,s,!1,t)&&r}K.prototype.M=function(){if(K.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Bn(n[s]);delete e.g[t],e.h--}}this.I=null};K.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};K.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function fn(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&Os(e.i,o),r=a.call(u,s)!==!1&&r}}return r&&!s.defaultPrevented}var ur=I.JSON.stringify;function vc(){var e=Ao;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class wc{constructor(){this.h=this.g=null}add(t,n){const s=bo.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var bo=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Tc,e=>e.reset());class Tc{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Ec(e){I.setTimeout(()=>{throw e},0)}function cr(e,t){Ps||_c(),Ms||(Ps(),Ms=!0),Ao.add(e,t)}var Ps;function _c(){var e=I.Promise.resolve(void 0);Ps=function(){e.then(Ic)}}var Ms=!1,Ao=new wc;function Ic(){for(var e;e=vc();){try{e.h.call(e.g)}catch(n){Ec(n)}var t=bo;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ms=!1}function jn(e,t){K.call(this),this.h=e||1,this.g=t||I,this.j=Q(this.kb,this),this.l=Date.now()}Y(jn,K);v=jn.prototype;v.da=!1;v.S=null;v.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),W(this,"tick"),this.da&&(hr(this),this.start()))}};v.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function hr(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}v.M=function(){jn.Z.M.call(this),hr(this),delete this.g};function lr(e,t,n){if(typeof e=="function")n&&(e=Q(e,n));else if(e&&typeof e.handleEvent=="function")e=Q(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:I.setTimeout(e,t||0)}function ko(e){e.g=lr(()=>{e.g=null,e.i&&(e.i=!1,ko(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Sc extends xt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:ko(this)}M(){super.M(),this.g&&(I.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pe(e){xt.call(this),this.h=e,this.g={}}Y(Pe,xt);var di=[];function Ro(e,t,n,s){Array.isArray(n)||(n&&(di[0]=n.toString()),n=di);for(var r=0;r<n.length;r++){var i=Eo(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Do(e){nr(e.g,function(t,n){this.g.hasOwnProperty(n)&&ir(t)},e),e.g={}}Pe.prototype.M=function(){Pe.Z.M.call(this),Do(this)};Pe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Gn(){this.g=!0}Gn.prototype.Aa=function(){this.g=!1};function Cc(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var h=c[0];c=c[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function bc(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function ee(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+kc(e,n)+(s?" "+s:"")})}function Ac(e,t){e.info(function(){return"TIMEOUT: "+t})}Gn.prototype.info=function(){};function kc(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return ur(n)}catch{return t}}var zt={},fi=null;function Kn(){return fi=fi||new K}zt.Ma="serverreachability";function No(e){Z.call(this,zt.Ma,e)}Y(No,Z);function Me(e){const t=Kn();W(t,new No(t))}zt.STAT_EVENT="statevent";function xo(e,t){Z.call(this,zt.STAT_EVENT,e),this.stat=t}Y(xo,Z);function st(e){const t=Kn();W(t,new xo(t,e))}zt.Na="timingevent";function Lo(e,t){Z.call(this,zt.Na,e),this.size=t}Y(Lo,Z);function Xe(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return I.setTimeout(function(){e()},t)}var zn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Oo={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function dr(){}dr.prototype.h=null;function pi(e){return e.h||(e.h=e.i())}function Uo(){}var Ye={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function fr(){Z.call(this,"d")}Y(fr,Z);function pr(){Z.call(this,"c")}Y(pr,Z);var Fs;function Hn(){}Y(Hn,dr);Hn.prototype.g=function(){return new XMLHttpRequest};Hn.prototype.i=function(){return{}};Fs=new Hn;function Je(e,t,n,s){this.l=e,this.j=t,this.m=n,this.X=s||1,this.V=new Pe(this),this.P=Rc,e=xs?125:void 0,this.W=new jn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Po}function Po(){this.i=null,this.g="",this.h=!1}var Rc=45e3,Vs={},An={};v=Je.prototype;v.setTimeout=function(e){this.P=e};function qs(e,t,n){e.K=1,e.v=Wn(_t(t)),e.s=n,e.U=!0,Mo(e,null)}function Mo(e,t){e.F=Date.now(),Ze(e),e.A=_t(e.v);var n=e.A,s=e.X;Array.isArray(s)||(s=[String(s)]),Go(n.h,"t",s),e.C=0,n=e.l.H,e.h=new Po,e.g=ha(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Sc(Q(e.Ia,e,e.g),e.O)),Ro(e.V,e.g,"readystatechange",e.gb),t=e.H?mo(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Me(),Cc(e.j,e.u,e.A,e.m,e.X,e.s)}v.gb=function(e){e=e.target;const t=this.L;t&&vt(e)==3?t.l():this.Ia(e)};v.Ia=function(e){try{if(e==this.g)t:{const h=vt(this.g);var t=this.g.Da();const l=this.g.ba();if(!(3>h)&&(h!=3||xs||this.g&&(this.h.h||this.g.ga()||vi(this.g)))){this.I||h!=4||t==7||(t==8||0>=l?Me(3):Me(2)),Qn(this);var n=this.g.ba();this.N=n;e:if(Fo(this)){var s=vi(this.g);e="";var r=s.length,i=vt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pt(this),Ae(this);var o="";break e}this.h.i=new I.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,bc(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Cn(a)){var c=a;break e}}c=null}if(n=c)ee(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Bs(this,n);else{this.i=!1,this.o=3,st(12),Pt(this),Ae(this);break t}}this.U?(Vo(this,h,o),xs&&this.i&&h==3&&(Ro(this.V,this.W,"tick",this.fb),this.W.start())):(ee(this.j,this.m,o,null),Bs(this,o)),h==4&&Pt(this),this.i&&!this.I&&(h==4?oa(this.l,this):(this.i=!1,Ze(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,st(12)):(this.o=0,st(13)),Pt(this),Ae(this)}}}catch{}finally{}};function Fo(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function Vo(e,t,n){let s=!0,r;for(;!e.I&&e.C<n.length;)if(r=Dc(e,n),r==An){t==4&&(e.o=4,st(14),s=!1),ee(e.j,e.m,null,"[Incomplete Response]");break}else if(r==Vs){e.o=4,st(15),ee(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else ee(e.j,e.m,r,null),Bs(e,r);Fo(e)&&r!=An&&r!=Vs&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,st(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ir(t),t.L=!0,st(11))):(ee(e.j,e.m,n,"[Invalid Chunked Response]"),Pt(e),Ae(e))}v.fb=function(){if(this.g){var e=vt(this.g),t=this.g.ga();this.C<t.length&&(Qn(this),Vo(this,e,t),this.i&&e!=4&&Ze(this))}};function Dc(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?An:(n=Number(t.substring(n,s)),isNaN(n)?Vs:(s+=1,s+n>t.length?An:(t=t.substr(s,n),e.C=s+n,t)))}v.cancel=function(){this.I=!0,Pt(this)};function Ze(e){e.Y=Date.now()+e.P,qo(e,e.P)}function qo(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Xe(Q(e.eb,e),t)}function Qn(e){e.B&&(I.clearTimeout(e.B),e.B=null)}v.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Ac(this.j,this.A),this.K!=2&&(Me(),st(17)),Pt(this),this.o=2,Ae(this)):qo(this,this.Y-e)};function Ae(e){e.l.G==0||e.I||oa(e.l,e)}function Pt(e){Qn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,hr(e.W),Do(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Bs(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||$s(n.i,e))){if(n.I=e.N,!e.J&&$s(n.i,e)&&n.G==3){try{var s=n.Ca.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Nn(n),Jn(n);else break t;_r(n),st(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=Xe(Q(n.ab,n),6e3));if(1>=Ho(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Mt(n,11)}else if((e.J||n.g==e)&&Nn(n),!Cn(t))for(r=n.Ca.g.parse(t),t=0;t<r.length;t++){let c=r[t];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const h=c[3];h!=null&&(n.ma=h,n.h.info("VER="+n.ma));const l=c[4];l!=null&&(n.za=l,n.h.info("SVER="+n.za));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=e.g;if(g){const m=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.i;!i.g&&(et(m,"spdy")||et(m,"quic")||et(m,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(yr(i,i.h),i.h=null))}if(s.D){const _=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.sa=_,O(s.F,s.D,_))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=e;if(s.oa=ca(s,s.H?s.la:null,s.W),o.J){Qo(s.i,o);var a=o,u=s.K;u&&a.setTimeout(u),a.B&&(Qn(a),Ze(a)),s.g=o}else ra(s);0<n.l.length&&Zn(n)}else c[0]!="stop"&&c[0]!="close"||Mt(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Mt(n,7):Er(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}Me(4)}catch{}}function Nc(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(Ns(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function gr(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Ns(e)||typeof e=="string")go(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(Ns(e)||typeof e=="string"){n=[];for(var s=e.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,e)n[s++]=r;s=Nc(e),r=s.length;for(var i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}}function fe(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(e)if(e instanceof fe)for(n=e.T(),s=0;s<n.length;s++)this.set(n[s],e.get(n[s]));else for(s in e)this.set(s,e[s])}v=fe.prototype;v.R=function(){mr(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};v.T=function(){return mr(this),this.g.concat()};function mr(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var s=e.g[t];Bt(e.h,s)&&(e.g[n++]=s),t++}e.g.length=n}if(e.i!=e.g.length){var r={};for(n=t=0;t<e.g.length;)s=e.g[t],Bt(r,s)||(e.g[n++]=s,r[s]=1),t++;e.g.length=n}}v.get=function(e,t){return Bt(this.h,e)?this.h[e]:t};v.set=function(e,t){Bt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};v.forEach=function(e,t){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);e.call(t,i,r,this)}};function Bt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var Bo=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function xc(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function $t(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof $t){this.g=t!==void 0?t:e.g,kn(this,e.j),this.s=e.s,Rn(this,e.i),Dn(this,e.m),this.l=e.l,t=e.h;var n=new Fe;n.i=t.i,t.g&&(n.g=new fe(t.g),n.h=t.h),gi(this,n),this.o=e.o}else e&&(n=String(e).match(Bo))?(this.g=!!t,kn(this,n[1]||"",!0),this.s=ke(n[2]||""),Rn(this,n[3]||"",!0),Dn(this,n[4]),this.l=ke(n[5]||"",!0),gi(this,n[6]||"",!0),this.o=ke(n[7]||"")):(this.g=!!t,this.h=new Fe(null,this.g))}$t.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Se(t,mi,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Se(t,mi,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(Se(n,n.charAt(0)=="/"?Mc:Pc,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Se(n,Vc)),e.join("")};function _t(e){return new $t(e)}function kn(e,t,n){e.j=n?ke(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Rn(e,t,n){e.i=n?ke(t,!0):t}function Dn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function gi(e,t,n){t instanceof Fe?(e.h=t,qc(e.h,e.g)):(n||(t=Se(t,Fc)),e.h=new Fe(t,e.g))}function O(e,t,n){e.h.set(t,n)}function Wn(e){return O(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Lc(e){return e instanceof $t?_t(e):new $t(e,void 0)}function Oc(e,t,n,s){var r=new $t(null,void 0);return e&&kn(r,e),t&&Rn(r,t),n&&Dn(r,n),s&&(r.l=s),r}function ke(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Se(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Uc),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Uc(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var mi=/[#\/\?@]/g,Pc=/[#\?:]/g,Mc=/[#\?]/g,Fc=/[#\?@]/g,Vc=/#/g;function Fe(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Lt(e){e.g||(e.g=new fe,e.h=0,e.i&&xc(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}v=Fe.prototype;v.add=function(e,t){Lt(this),this.i=null,e=pe(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function $o(e,t){Lt(e),t=pe(e,t),Bt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Bt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&mr(e)))}function jo(e,t){return Lt(e),t=pe(e,t),Bt(e.g.h,t)}v.forEach=function(e,t){Lt(this),this.g.forEach(function(n,s){go(n,function(r){e.call(t,r,s,this)},this)},this)};v.T=function(){Lt(this);for(var e=this.g.R(),t=this.g.T(),n=[],s=0;s<t.length;s++)for(var r=e[s],i=0;i<r.length;i++)n.push(t[s]);return n};v.R=function(e){Lt(this);var t=[];if(typeof e=="string")jo(this,e)&&(t=oi(t,this.g.get(pe(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=oi(t,e[n])}return t};v.set=function(e,t){return Lt(this),this.i=null,e=pe(this,e),jo(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};v.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function Go(e,t,n){$o(e,t),0<n.length&&(e.i=null,e.g.set(pe(e,t),er(n)),e.h+=n.length)}v.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var s=t[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),e.push(o)}}return this.i=e.join("&")};function pe(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function qc(e,t){t&&!e.j&&(Lt(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&($o(this,s),Go(this,r,n))},e)),e.j=t}var Bc=class{constructor(e,t){this.h=e,this.g=t}};function Ko(e){this.l=e||$c,I.PerformanceNavigationTiming?(e=I.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(I.g&&I.g.Ea&&I.g.Ea()&&I.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var $c=10;function zo(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Ho(e){return e.h?1:e.g?e.g.size:0}function $s(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function yr(e,t){e.g?e.g.add(t):e.h=t}function Qo(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Ko.prototype.cancel=function(){if(this.i=Wo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Wo(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return er(e.i)}function vr(){}vr.prototype.stringify=function(e){return I.JSON.stringify(e,void 0)};vr.prototype.parse=function(e){return I.JSON.parse(e,void 0)};function jc(){this.g=new vr}function Gc(e,t,n){const s=n||"";try{gr(e,function(r,i){let o=r;Qe(r)&&(o=ur(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function Kc(e,t){const n=new Gn;if(I.Image){const s=new Image;s.onload=dn(pn,n,s,"TestLoadImage: loaded",!0,t),s.onerror=dn(pn,n,s,"TestLoadImage: error",!1,t),s.onabort=dn(pn,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=dn(pn,n,s,"TestLoadImage: timeout",!1,t),I.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function pn(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function tn(e){this.l=e.$b||null,this.j=e.ib||!1}Y(tn,dr);tn.prototype.g=function(){return new Xn(this.l,this.j)};tn.prototype.i=function(e){return function(){return e}}({});function Xn(e,t){K.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=wr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Y(Xn,K);var wr=0;v=Xn.prototype;v.open=function(e,t){if(this.readyState!=wr)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ve(this)};v.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||I).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};v.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,en(this)),this.readyState=wr};v.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ve(this)),this.g&&(this.readyState=3,Ve(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof I.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Xo(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function Xo(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}v.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?en(this):Ve(this),this.readyState==3&&Xo(this)}};v.Ua=function(e){this.g&&(this.response=this.responseText=e,en(this))};v.Ta=function(e){this.g&&(this.response=e,en(this))};v.ha=function(){this.g&&en(this)};function en(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ve(e)}v.setRequestHeader=function(e,t){this.v.append(e,t)};v.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};v.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ve(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Xn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var zc=I.JSON.parse;function q(e){K.call(this),this.headers=new fe,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Yo,this.K=this.L=!1}Y(q,K);var Yo="",Hc=/^https?$/i,Qc=["POST","PUT"];v=q.prototype;v.ea=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Fs.g(),this.C=this.u?pi(this.u):pi(Fs),this.g.onreadystatechange=Q(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){yi(this,i);return}e=n||"";const r=new fe(this.headers);s&&gr(s,function(i,o){r.set(o,i)}),s=ic(r.T()),n=I.FormData&&e instanceof I.FormData,!(0<=po(Qc,t))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ta(this),0<this.B&&((this.K=Wc(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Q(this.pa,this)):this.A=lr(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){yi(this,i)}};function Wc(e){return oe&&hc()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function Xc(e){return e.toLowerCase()=="content-type"}v.pa=function(){typeof tr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,W(this,"timeout"),this.abort(8))};function yi(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Jo(e),Yn(e)}function Jo(e){e.D||(e.D=!0,W(e,"complete"),W(e,"error"))}v.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,W(this,"complete"),W(this,"abort"),Yn(this))};v.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Yn(this,!0)),q.Z.M.call(this)};v.Fa=function(){this.s||(this.F||this.v||this.l?Zo(this):this.cb())};v.cb=function(){Zo(this)};function Zo(e){if(e.h&&typeof tr<"u"&&(!e.C[1]||vt(e)!=4||e.ba()!=2)){if(e.v&&vt(e)==4)lr(e.Fa,0,e);else if(W(e,"readystatechange"),vt(e)==4){e.h=!1;try{const a=e.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var r=String(e.H).match(Bo)[1]||null;if(!r&&I.self&&I.self.location){var i=I.self.location.protocol;r=i.substr(0,i.length-1)}s=!Hc.test(r?r.toLowerCase():"")}n=s}if(n)W(e,"complete"),W(e,"success");else{e.m=6;try{var o=2<vt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",Jo(e)}}finally{Yn(e)}}}}function Yn(e,t){if(e.g){ta(e);const n=e.g,s=e.C[0]?Sn:null;e.g=null,e.C=null,t||W(e,"ready");try{n.onreadystatechange=s}catch{}}}function ta(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(I.clearTimeout(e.A),e.A=null)}function vt(e){return e.g?e.g.readyState:0}v.ba=function(){try{return 2<vt(this)?this.g.status:-1}catch{return-1}};v.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};v.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),zc(t)}};function vi(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Yo:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}v.Da=function(){return this.m};v.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Yc(e){let t="";return nr(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Tr(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Yc(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):O(e,t,n))}function _e(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ea(e){this.za=0,this.l=[],this.h=new Gn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=_e("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=_e("baseRetryDelayMs",5e3,e),this.$a=_e("retryDelaySeedMs",1e4,e),this.Ya=_e("forwardChannelMaxRetries",2,e),this.ra=_e("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Ko(e&&e.concurrentRequestLimit),this.Ca=new jc,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}v=ea.prototype;v.ma=8;v.G=1;function Er(e){if(na(e),e.G==3){var t=e.V++,n=_t(e.F);O(n,"SID",e.J),O(n,"RID",t),O(n,"TYPE","terminate"),nn(e,n),t=new Je(e,e.h,t,void 0),t.K=2,t.v=Wn(_t(n)),n=!1,I.navigator&&I.navigator.sendBeacon&&(n=I.navigator.sendBeacon(t.v.toString(),"")),!n&&I.Image&&(new Image().src=t.v,n=!0),n||(t.g=ha(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Ze(t)}ua(e)}v.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function Jn(e){e.g&&(Ir(e),e.g.cancel(),e.g=null)}function na(e){Jn(e),e.u&&(I.clearTimeout(e.u),e.u=null),Nn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&I.clearTimeout(e.m),e.m=null)}function Ss(e,t){e.l.push(new Bc(e.Za++,t)),e.G==3&&Zn(e)}function Zn(e){zo(e.i)||e.m||(e.m=!0,cr(e.Ha,e),e.C=0)}function Jc(e,t){return Ho(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=Xe(Q(e.Ha,e,t),aa(e,e.C)),e.C++,!0)}v.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const r=new Je(this,this.h,e,void 0);let i=this.s;if(this.P&&(i?(i=mo(i),yo(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=sa(this,r,t),n=_t(this.F),O(n,"RID",e),O(n,"CVER",22),this.D&&O(n,"X-HTTP-Session-Id",this.D),nn(this,n),this.o&&i&&Tr(n,this.o,i),yr(this.i,r),this.Ra&&O(n,"TYPE","init"),this.ja?(O(n,"$req",t),O(n,"SID","null"),r.$=!0,qs(r,n,null)):qs(r,n,t),this.G=2}}else this.G==3&&(e?wi(this,e):this.l.length==0||zo(this.i)||wi(this))};function wi(e,t){var n;t?n=t.m:n=e.V++;const s=_t(e.F);O(s,"SID",e.J),O(s,"RID",n),O(s,"AID",e.U),nn(e,s),e.o&&e.s&&Tr(s,e.o,e.s),n=new Je(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=sa(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),yr(e.i,n),qs(n,s,t)}function nn(e,t){e.j&&gr({},function(n,s){O(t,s,n)})}function sa(e,t,n){n=Math.min(e.l.length,n);var s=e.j?Q(e.j.Oa,e.j,e):null;t:{var r=e.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let u=0;u<n;u++){let c=r[u].h;const h=r[u].g;if(c-=i,0>c)i=Math.max(0,r[u].h-100),a=!1;else try{Gc(h,o,"req"+c+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,s}function ra(e){e.g||e.u||(e.Y=1,cr(e.Ga,e),e.A=0)}function _r(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=Xe(Q(e.Ga,e),aa(e,e.A)),e.A++,!0)}v.Ga=function(){if(this.u=null,ia(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=Xe(Q(this.bb,this),e)}};v.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,st(10),Jn(this),ia(this))};function Ir(e){e.B!=null&&(I.clearTimeout(e.B),e.B=null)}function ia(e){e.g=new Je(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=_t(e.oa);O(t,"RID","rpc"),O(t,"SID",e.J),O(t,"CI",e.N?"0":"1"),O(t,"AID",e.U),nn(e,t),O(t,"TYPE","xmlhttp"),e.o&&e.s&&Tr(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Wn(_t(t)),n.s=null,n.U=!0,Mo(n,e)}v.ab=function(){this.v!=null&&(this.v=null,Jn(this),_r(this),st(19))};function Nn(e){e.v!=null&&(I.clearTimeout(e.v),e.v=null)}function oa(e,t){var n=null;if(e.g==t){Nn(e),Ir(e),e.g=null;var s=2}else if($s(e.i,t))n=t.D,Qo(e.i,t),s=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;s=Kn(),W(s,new Lo(s,n)),Zn(e)}else ra(e);else if(r=t.o,r==3||r==0&&0<e.I||!(s==1&&Jc(e,t)||s==2&&_r(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:Mt(e,5);break;case 4:Mt(e,10);break;case 3:Mt(e,6);break;default:Mt(e,2)}}}function aa(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Mt(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var s=Q(e.jb,e);n||(n=new $t("//www.google.com/images/cleardot.gif"),I.location&&I.location.protocol=="http"||kn(n,"https"),Wn(n)),Kc(n.toString(),s)}else st(2);e.G=0,e.j&&e.j.va(t),ua(e),na(e)}v.jb=function(e){e?(this.h.info("Successfully pinged google.com"),st(2)):(this.h.info("Failed to ping google.com"),st(1))};function ua(e){e.G=0,e.I=-1,e.j&&((Wo(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,er(e.l),e.l.length=0),e.j.ua())}function ca(e,t,n){let s=Lc(n);if(s.i!="")t&&Rn(s,t+"."+s.i),Dn(s,s.m);else{const r=I.location;s=Oc(r.protocol,t?t+"."+r.hostname:r.hostname,+r.port,n)}return e.aa&&nr(e.aa,function(r,i){O(s,i,r)}),t=e.D,n=e.sa,t&&n&&O(s,t,n),O(s,"VER",e.ma),nn(e,s),s}function ha(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new q(new tn({ib:!0})):new q(e.qa),t.L=e.H,t}function la(){}v=la.prototype;v.xa=function(){};v.wa=function(){};v.va=function(){};v.ua=function(){};v.Oa=function(){};function xn(){if(oe&&!(10<=Number(lc)))throw Error("Environmental error: no available transport.")}xn.prototype.g=function(e,t){return new lt(e,t)};function lt(e,t){K.call(this),this.g=new ea(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!Cn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Cn(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ge(this)}Y(lt,K);lt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),cr(Q(e.hb,e,t))),st(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=ca(e,null,e.W),Zn(e)};lt.prototype.close=function(){Er(this.g)};lt.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,Ss(this.g,t)}else this.v?(t={},t.__data__=ur(e),Ss(this.g,t)):Ss(this.g,e)};lt.prototype.M=function(){this.g.j=null,delete this.j,Er(this.g),delete this.g,lt.Z.M.call(this)};function da(e){fr.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Y(da,fr);function fa(){pr.call(this),this.status=1}Y(fa,pr);function ge(e){this.g=e}Y(ge,la);ge.prototype.xa=function(){W(this.g,"a")};ge.prototype.wa=function(e){W(this.g,new da(e))};ge.prototype.va=function(e){W(this.g,new fa)};ge.prototype.ua=function(){W(this.g,"b")};xn.prototype.createWebChannel=xn.prototype.g;lt.prototype.send=lt.prototype.u;lt.prototype.open=lt.prototype.m;lt.prototype.close=lt.prototype.close;zn.NO_ERROR=0;zn.TIMEOUT=8;zn.HTTP_ERROR=6;Oo.COMPLETE="complete";Uo.EventType=Ye;Ye.OPEN="a";Ye.CLOSE="b";Ye.ERROR="c";Ye.MESSAGE="d";K.prototype.listen=K.prototype.N;q.prototype.listenOnce=q.prototype.O;q.prototype.getLastError=q.prototype.La;q.prototype.getLastErrorCode=q.prototype.Da;q.prototype.getStatus=q.prototype.ba;q.prototype.getResponseJson=q.prototype.Qa;q.prototype.getResponseText=q.prototype.ga;q.prototype.send=q.prototype.ea;var Zc=function(){return new xn},th=function(){return Kn()},Cs=zn,eh=Oo,nh=zt,Ti={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},sh=tn,gn=Uo,rh=q;const Ei="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let me="9.9.4";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=new ju("@firebase/firestore");function _i(){return jt.logLevel}function T(e,...t){if(jt.logLevel<=Oe.DEBUG){const n=t.map(Sr);jt.debug(`Firestore (${me}): ${e}`,...n)}}function It(e,...t){if(jt.logLevel<=Oe.ERROR){const n=t.map(Sr);jt.error(`Firestore (${me}): ${e}`,...n)}}function Ii(e,...t){if(jt.logLevel<=Oe.WARN){const n=t.map(Sr);jt.warn(`Firestore (${me}): ${e}`,...n)}}function Sr(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e="Unexpected state"){const t=`FIRESTORE (${me}) INTERNAL ASSERTION FAILED: `+e;throw It(t),new Error(t)}function x(e,t){e||S()}function C(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends co{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class oh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class ah{constructor(t){this.t=t,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let i=new wt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new wt,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const u=i;t.enqueueRetryable(async()=>{await u.promise,await r(this.currentUser)})},a=u=>{T("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(T("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new wt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(T("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(x(typeof s.accessToken=="string"),new ih(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return x(t===null||typeof t=="string"),new ot(t)}}class uh{constructor(t,n,s,r){this.h=t,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(x(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class ch{constructor(t,n,s,r){this.h=t,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new uh(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lh{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const s=i=>{i.error!=null&&T("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,T("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{T("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):T("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(x(typeof n.token=="string"),this.A=n.token,new hh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=dh(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function D(e,t){return e<t?-1:e>t?1:0}function ae(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new y(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new y(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new y(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new y(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return B.fromMillis(Date.now())}static fromDate(t){return B.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new B(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?D(this.nanoseconds,t.nanoseconds):D(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(t){this.timestamp=t}static fromTimestamp(t){return new b(t)}static min(){return new b(new B(0,0))}static max(){return new b(new B(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t,n,s){n===void 0?n=0:n>t.length&&S(),s===void 0?s=t.length-n:s>t.length-n&&S(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return qe.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof qe?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class L extends qe{construct(t,n,s){return new L(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new y(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new L(n)}static emptyPath(){return new L([])}}const fh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class J extends qe{construct(t,n,s){return new J(t,n,s)}static isValidIdentifier(t){return fh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),J.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new J(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new y(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new y(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new y(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=u,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new y(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new J(n)}static emptyPath(){return new J([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(L.fromString(t))}static fromName(t){return new E(L.fromString(t).popFirst(5))}static empty(){return new E(L.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&L.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return L.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new L(t.slice()))}}function ph(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=b.fromTimestamp(s===1e9?new B(n+1,0):new B(n,s));return new Rt(r,E.empty(),t)}function gh(e){return new Rt(e.readTime,e.key,-1)}class Rt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Rt(b.min(),E.empty(),-1)}static max(){return new Rt(b.max(),E.empty(),-1)}}function mh(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=E.comparator(e.documentKey,t.documentKey),n!==0?n:D(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(e){if(e.code!==f.FAILED_PRECONDITION||e.message!==yh)throw e;T("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&S(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new p((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof p?n:p.resolve(n)}catch(n){return p.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):p.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):p.reject(n)}static resolve(t){return new p((n,s)=>{n(t)})}static reject(t){return new p((n,s)=>{s(t)})}static waitFor(t){return new p((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},u=>s(u))}),o=!0,i===r&&n()})}static or(t){let n=p.resolve(!1);for(const s of t)n=n.next(r=>r?p.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(t,n){return new p((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const c=u;n(t[c]).next(h=>{o[c]=h,++a,a===i&&s(o)},h=>r(h))}})}static doWhile(t,n){return new p((s,r)=>{const i=()=>{t()===!0?n().next(()=>{i()},r):s()};i()})}}function rn(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ht(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ga(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cr.at=-1;class j{constructor(t,n){this.comparator=t,this.root=n||z.EMPTY}insert(t,n){return new j(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,z.BLACK,null,null))}remove(t){return new j(this.comparator,this.root.remove(t,this.comparator).copy(null,null,z.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new mn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new mn(this.root,t,this.comparator,!1)}getReverseIterator(){return new mn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new mn(this.root,t,this.comparator,!0)}}class mn{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class z{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s!=null?s:z.RED,this.left=r!=null?r:z.EMPTY,this.right=i!=null?i:z.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new z(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return z.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return z.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,z.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw S();const t=this.left.check();if(t!==this.right.check())throw S();return t+(this.isRed()?0:1)}}z.EMPTY=null,z.RED=!0,z.BLACK=!1;z.EMPTY=new class{constructor(){this.size=0}get key(){throw S()}get value(){throw S()}get color(){throw S()}get left(){throw S()}get right(){throw S()}copy(e,t,n,s,r){return this}insert(e,t,n){return new z(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t){this.comparator=t,this.data=new j(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ci(this.data.getIterator())}getIteratorFrom(t){return new Ci(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof $)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new $(this.comparator);return n.data=t,n}}class Ci{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.fields=t,t.sort(J.comparator)}static empty(){return new dt([])}unionWith(t){let n=new $(J.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new dt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return ae(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new X(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new X(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return D(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}X.EMPTY_BYTE_STRING=new X("");const wh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dt(e){if(x(!!e),typeof e=="string"){let t=0;const n=wh.exec(e);if(x(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:V(e.seconds),nanos:V(e.nanos)}}function V(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function ue(e){return typeof e=="string"?X.fromBase64String(e):X.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ya(e){const t=e.mapValue.fields.__previous_value__;return ma(t)?ya(t):t}function Be(e){const t=Dt(e.mapValue.fields.__local_write_time__.timestampValue);return new B(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t,n,s,r,i,o,a,u){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class $e{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new $e("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof $e&&t.projectId===this.projectId&&t.database===this.database}}function ts(e){return e==null}function Ln(e){return e===0&&1/e==-1/0}function Eh(e){return typeof e=="number"&&Number.isInteger(e)&&!Ln(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Gt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ma(e)?4:_h(e)?9007199254740991:10:S()}function gt(e,t){if(e===t)return!0;const n=Gt(e);if(n!==Gt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Be(e).isEqual(Be(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Dt(s.timestampValue),o=Dt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return ue(s.bytesValue).isEqual(ue(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return V(s.geoPointValue.latitude)===V(r.geoPointValue.latitude)&&V(s.geoPointValue.longitude)===V(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return V(s.integerValue)===V(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=V(s.doubleValue),o=V(r.doubleValue);return i===o?Ln(i)===Ln(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return ae(e.arrayValue.values||[],t.arrayValue.values||[],gt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Si(i)!==Si(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!gt(i[a],o[a])))return!1;return!0}(e,t);default:return S()}}function je(e,t){return(e.values||[]).find(n=>gt(n,t))!==void 0}function ce(e,t){if(e===t)return 0;const n=Gt(e),s=Gt(t);if(n!==s)return D(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return D(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=V(r.integerValue||r.doubleValue),a=V(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return bi(e.timestampValue,t.timestampValue);case 4:return bi(Be(e),Be(t));case 5:return D(e.stringValue,t.stringValue);case 6:return function(r,i){const o=ue(r),a=ue(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let u=0;u<o.length&&u<a.length;u++){const c=D(o[u],a[u]);if(c!==0)return c}return D(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=D(V(r.latitude),V(i.latitude));return o!==0?o:D(V(r.longitude),V(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let u=0;u<o.length&&u<a.length;++u){const c=ce(o[u],a[u]);if(c)return c}return D(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){if(r===yn.mapValue&&i===yn.mapValue)return 0;if(r===yn.mapValue)return 1;if(i===yn.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),u=i.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let h=0;h<a.length&&h<c.length;++h){const l=D(a[h],c[h]);if(l!==0)return l;const d=ce(o[a[h]],u[c[h]]);if(d!==0)return d}return D(a.length,c.length)}(e.mapValue,t.mapValue);default:throw S()}}function bi(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return D(e,t);const n=Dt(e),s=Dt(t),r=D(n.seconds,s.seconds);return r!==0?r:D(n.nanos,s.nanos)}function se(e){return js(e)}function js(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=Dt(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ue(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,E.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=js(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${js(s.fields[a])}`;return i+"}"}(e.mapValue):S();var t,n}function Ai(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Gs(e){return!!e&&"integerValue"in e}function br(e){return!!e&&"arrayValue"in e}function ki(e){return!!e&&"nullValue"in e}function Ri(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Tn(e){return!!e&&"mapValue"in e}function Re(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ht(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Re(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Re(e.arrayValue.values[n]);return t}return Object.assign({},e)}function _h(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.value=t}static empty(){return new ut({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Tn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Re(n)}setAll(t){let n=J.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Re(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());Tn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return gt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];Tn(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){Ht(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new ut(Re(this.value))}}function va(e){const t=[];return Ht(e.fields,(n,s)=>{const r=new J([n]);if(Tn(s)){const i=va(s.mapValue).fields;if(i.length===0)t.push(r);else for(const o of i)t.push(r.child(o))}else t.push(r)}),new dt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t,n,s,r,i,o){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(t){return new H(t,0,b.min(),b.min(),ut.empty(),0)}static newFoundDocument(t,n,s){return new H(t,1,n,b.min(),s,0)}static newNoDocument(t,n){return new H(t,2,n,b.min(),ut.empty(),0)}static newUnknownDocument(t,n){return new H(t,3,n,b.min(),ut.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ut.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=b.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof H&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new H(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function Di(e,t=null,n=[],s=[],r=null,i=null,o=null){return new Ih(e,t,n,s,r,i,o)}function Ar(e){const t=C(e);if(t.ht===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+se(r.value);var r}).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),ts(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>se(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>se(s)).join(",")),t.ht=n}return t.ht}function Sh(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${se(s.value)}`;var s}).join(", ")}]`),ts(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>se(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>se(n)).join(",")),`Target(${t})`}function kr(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<e.orderBy.length;r++)if(!xh(e.orderBy[r],t.orderBy[r]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(n=e.filters[r],s=t.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!gt(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!xi(e.startAt,t.startAt)&&xi(e.endAt,t.endAt)}function Ks(e){return E.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class rt extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.lt(t,n,s):new Ch(t,n,s):n==="array-contains"?new kh(t,s):n==="in"?new Rh(t,s):n==="not-in"?new Dh(t,s):n==="array-contains-any"?new Nh(t,s):new rt(t,n,s)}static lt(t,n,s){return n==="in"?new bh(t,s):new Ah(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.ft(ce(n,this.value)):n!==null&&Gt(this.value)===Gt(n)&&this.ft(ce(n,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return S()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Ch extends rt{constructor(t,n,s){super(t,n,s),this.key=E.fromName(s.referenceValue)}matches(t){const n=E.comparator(t.key,this.key);return this.ft(n)}}class bh extends rt{constructor(t,n){super(t,"in",n),this.keys=wa("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Ah extends rt{constructor(t,n){super(t,"not-in",n),this.keys=wa("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function wa(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>E.fromName(s.referenceValue))}class kh extends rt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return br(n)&&je(n.arrayValue,this.value)}}class Rh extends rt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&je(this.value.arrayValue,n)}}class Dh extends rt{constructor(t,n){super(t,"not-in",n)}matches(t){if(je(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!je(this.value.arrayValue,n)}}class Nh extends rt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!br(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>je(this.value.arrayValue,s))}}class On{constructor(t,n){this.position=t,this.inclusive=n}}class re{constructor(t,n="asc"){this.field=t,this.dir=n}}function xh(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Ni(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=E.comparator(E.fromName(o.referenceValue),n.key):s=ce(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function xi(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!gt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this._t=null,this.wt=null,this.startAt,this.endAt}}function Lh(e,t,n,s,r,i,o,a){return new ye(e,t,n,s,r,i,o,a)}function Rr(e){return new ye(e)}function Li(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Dr(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Nr(e){for(const t of e.filters)if(t.dt())return t.field;return null}function Ta(e){return e.collectionGroup!==null}function Ge(e){const t=C(e);if(t._t===null){t._t=[];const n=Nr(t),s=Dr(t);if(n!==null&&s===null)n.isKeyField()||t._t.push(new re(n)),t._t.push(new re(J.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t._t.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t._t.push(new re(J.keyField(),i))}}}return t._t}function St(e){const t=C(e);if(!t.wt)if(t.limitType==="F")t.wt=Di(t.path,t.collectionGroup,Ge(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of Ge(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new re(i.field,o))}const s=t.endAt?new On(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new On(t.startAt.position,t.startAt.inclusive):null;t.wt=Di(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t.wt}function Un(e,t,n){return new ye(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function es(e,t){return kr(St(e),St(t))&&e.limitType===t.limitType}function Ea(e){return`${Ar(St(e))}|lt:${e.limitType}`}function zs(e){return`Query(target=${Sh(St(e))}; limitType=${e.limitType})`}function xr(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):E.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Ni(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Ge(n),s)||n.endAt&&!function(r,i,o){const a=Ni(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Ge(n),s))}(e,t)}function Oh(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function _a(e){return(t,n)=>{let s=!1;for(const r of Ge(e)){const i=Uh(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Uh(e,t,n){const s=e.field.isKeyField()?E.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),u=o.data.field(r);return a!==null&&u!==null?ce(a,u):S()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return S()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(e,t){if(e.gt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ln(t)?"-0":t}}function Sa(e){return{integerValue:""+e}}function Ph(e,t){return Eh(t)?Sa(t):Ia(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(){this._=void 0}}function Mh(e,t,n){return e instanceof Ke?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof ze?ba(e,t):e instanceof He?Aa(e,t):function(s,r){const i=Ca(s,r),o=Oi(i)+Oi(s.yt);return Gs(i)&&Gs(s.yt)?Sa(o):Ia(s.It,o)}(e,t)}function Fh(e,t,n){return e instanceof ze?ba(e,t):e instanceof He?Aa(e,t):n}function Ca(e,t){return e instanceof Pn?Gs(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class Ke extends ns{}class ze extends ns{constructor(t){super(),this.elements=t}}function ba(e,t){const n=ka(t);for(const s of e.elements)n.some(r=>gt(r,s))||n.push(s);return{arrayValue:{values:n}}}class He extends ns{constructor(t){super(),this.elements=t}}function Aa(e,t){let n=ka(t);for(const s of e.elements)n=n.filter(r=>!gt(r,s));return{arrayValue:{values:n}}}class Pn extends ns{constructor(t,n){super(),this.It=t,this.yt=n}}function Oi(e){return V(e.integerValue||e.doubleValue)}function ka(e){return br(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(t,n){this.field=t,this.transform=n}}function qh(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof ze&&s instanceof ze||n instanceof He&&s instanceof He?ae(n.elements,s.elements,gt):n instanceof Pn&&s instanceof Pn?gt(n.yt,s.yt):n instanceof Ke&&s instanceof Ke}(e.transform,t.transform)}class Bh{constructor(t,n){this.version=t,this.transformResults=n}}class ft{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new ft}static exists(t){return new ft(void 0,t)}static updateTime(t){return new ft(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function En(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class ss{}function Ra(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Lr(e.key,ft.none()):new on(e.key,e.data,ft.none());{const n=e.data,s=ut.empty();let r=new $(J.comparator);for(let i of t.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Ot(e.key,s,new dt(r.toArray()),ft.none())}}function $h(e,t,n){e instanceof on?function(s,r,i){const o=s.value.clone(),a=Pi(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Ot?function(s,r,i){if(!En(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Pi(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Da(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function De(e,t,n,s){return e instanceof on?function(r,i,o,a){if(!En(r.precondition,i))return o;const u=r.value.clone(),c=Mi(r.fieldTransforms,a,i);return u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),null}(e,t,n,s):e instanceof Ot?function(r,i,o,a){if(!En(r.precondition,i))return o;const u=Mi(r.fieldTransforms,a,i),c=i.data;return c.setAll(Da(r)),c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(e,t,n,s):function(r,i,o){return En(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function jh(e,t){let n=null;for(const s of e.fieldTransforms){const r=t.data.field(s.field),i=Ca(s.transform,r||null);i!=null&&(n===null&&(n=ut.empty()),n.set(s.field,i))}return n||null}function Ui(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ae(n,s,(r,i)=>qh(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class on extends ss{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ot extends ss{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Da(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Pi(e,t,n){const s=new Map;x(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,Fh(o,a,n[r]))}return s}function Mi(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Mh(i,o,t))}return s}class Lr extends ss{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Gh extends ss{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F,k;function zh(e){switch(e){default:return S();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function Na(e){if(e===void 0)return It("GRPC error has no .code"),f.UNKNOWN;switch(e){case F.OK:return f.OK;case F.CANCELLED:return f.CANCELLED;case F.UNKNOWN:return f.UNKNOWN;case F.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case F.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case F.INTERNAL:return f.INTERNAL;case F.UNAVAILABLE:return f.UNAVAILABLE;case F.UNAUTHENTICATED:return f.UNAUTHENTICATED;case F.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case F.NOT_FOUND:return f.NOT_FOUND;case F.ALREADY_EXISTS:return f.ALREADY_EXISTS;case F.PERMISSION_DENIED:return f.PERMISSION_DENIED;case F.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case F.ABORTED:return f.ABORTED;case F.OUT_OF_RANGE:return f.OUT_OF_RANGE;case F.UNIMPLEMENTED:return f.UNIMPLEMENTED;case F.DATA_LOSS:return f.DATA_LOSS;default:return S()}}(k=F||(F={}))[k.OK=0]="OK",k[k.CANCELLED=1]="CANCELLED",k[k.UNKNOWN=2]="UNKNOWN",k[k.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",k[k.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",k[k.NOT_FOUND=5]="NOT_FOUND",k[k.ALREADY_EXISTS=6]="ALREADY_EXISTS",k[k.PERMISSION_DENIED=7]="PERMISSION_DENIED",k[k.UNAUTHENTICATED=16]="UNAUTHENTICATED",k[k.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",k[k.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",k[k.ABORTED=10]="ABORTED",k[k.OUT_OF_RANGE=11]="OUT_OF_RANGE",k[k.UNIMPLEMENTED=12]="UNIMPLEMENTED",k[k.INTERNAL=13]="INTERNAL",k[k.UNAVAILABLE=14]="UNAVAILABLE",k[k.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Ht(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return ga(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh=new j(E.comparator);function Ct(){return Hh}const xa=new j(E.comparator);function Ce(...e){let t=xa;for(const n of e)t=t.insert(n.key,n);return t}function La(e){let t=xa;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Ft(){return Ne()}function Oa(){return Ne()}function Ne(){return new ve(e=>e.toString(),(e,t)=>e.isEqual(t))}const Qh=new j(E.comparator),Wh=new $(E.comparator);function A(...e){let t=Wh;for(const n of e)t=t.add(n);return t}const Xh=new $(D);function Ua(){return Xh}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n){const s=new Map;return s.set(t,an.createSynthesizedTargetChangeForCurrentChange(t,n)),new rs(b.min(),s,Ua(),Ct(),A())}}class an{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n){return new an(X.EMPTY_BYTE_STRING,n,A(),A(),A())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(t,n,s,r){this.Tt=t,this.removedTargetIds=n,this.key=s,this.Et=r}}class Pa{constructor(t,n){this.targetId=t,this.At=n}}class Ma{constructor(t,n,s=X.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Fi{constructor(){this.Rt=0,this.bt=qi(),this.Pt=X.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=A(),n=A(),s=A();return this.bt.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:S()}}),new an(this.Pt,this.vt,t,n,s)}Nt(){this.Vt=!1,this.bt=qi()}kt(t,n){this.Vt=!0,this.bt=this.bt.insert(t,n)}Mt(t){this.Vt=!0,this.bt=this.bt.remove(t)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Yh{constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=Ct(),this.qt=Vi(),this.Kt=new $(D)}Gt(t){for(const n of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(n,t.Et):this.jt(n,t.key,t.Et);for(const n of t.removedTargetIds)this.jt(n,t.key,t.Et)}Wt(t){this.forEachTarget(t,n=>{const s=this.zt(n);switch(t.state){case 0:this.Ht(n)&&s.Ct(t.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(t.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(t.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(t.resumeToken));break;default:S()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Lt.forEach((s,r)=>{this.Ht(r)&&n(r)})}Yt(t){const n=t.targetId,s=t.At.count,r=this.Xt(n);if(r){const i=r.target;if(Ks(i))if(s===0){const o=new E(i.path);this.jt(n,o,H.newNoDocument(o,b.min()))}else x(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(t){const n=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&Ks(a.target)){const u=new E(a.target.path);this.Ut.get(u)!==null||this.ee(o,u)||this.jt(o,u,H.newNoDocument(u,t))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let s=A();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Xt(u);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(t));const r=new rs(t,n,this.Kt,this.Ut,s);return this.Ut=Ct(),this.qt=Vi(),this.Kt=new $(D),r}Qt(t,n){if(!this.Ht(t))return;const s=this.ee(t,n.key)?2:0;this.zt(t).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(t))}jt(t,n,s){if(!this.Ht(t))return;const r=this.zt(t);this.ee(t,n)?r.kt(n,1):r.Mt(n),this.qt=this.qt.insert(n,this.ne(n).delete(t)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(t){this.Lt.delete(t)}Zt(t){const n=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ot(t){this.zt(t).Ot()}zt(t){let n=this.Lt.get(t);return n||(n=new Fi,this.Lt.set(t,n)),n}ne(t){let n=this.qt.get(t);return n||(n=new $(D),this.qt=this.qt.insert(t,n)),n}Ht(t){const n=this.Xt(t)!==null;return n||T("WatchChangeAggregator","Detected inactive target",t),n}Xt(t){const n=this.Lt.get(t);return n&&n.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new Fi),this.Bt.getRemoteKeysForTarget(t).forEach(n=>{this.jt(t,n,null)})}ee(t,n){return this.Bt.getRemoteKeysForTarget(t).has(n)}}function Vi(){return new j(E.comparator)}function qi(){return new j(E.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Zh=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class tl{constructor(t,n){this.databaseId=t,this.gt=n}}function Mn(e,t){return e.gt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Fa(e,t){return e.gt?t.toBase64():t.toUint8Array()}function el(e,t){return Mn(e,t.toTimestamp())}function Tt(e){return x(!!e),b.fromTimestamp(function(t){const n=Dt(t);return new B(n.seconds,n.nanos)}(e))}function Or(e,t){return function(n){return new L(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Va(e){const t=L.fromString(e);return x($a(t)),t}function Hs(e,t){return Or(e.databaseId,t.path)}function bs(e,t){const n=Va(t);if(n.get(1)!==e.databaseId.projectId)throw new y(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new y(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new E(qa(n))}function Qs(e,t){return Or(e.databaseId,t)}function nl(e){const t=Va(e);return t.length===4?L.emptyPath():qa(t)}function Ws(e){return new L(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function qa(e){return x(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Bi(e,t,n){return{name:Hs(e,t),fields:n.value.mapValue.fields}}function sl(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:S()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(u,c){return u.gt?(x(c===void 0||typeof c=="string"),X.fromBase64String(c||"")):(x(c===void 0||c instanceof Uint8Array),X.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?f.UNKNOWN:Na(u.code);return new y(c,u.message||"")}(o);n=new Ma(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=bs(e,s.document.name),i=Tt(s.document.updateTime),o=new ut({mapValue:{fields:s.document.fields}}),a=H.newFoundDocument(r,i,o),u=s.targetIds||[],c=s.removedTargetIds||[];n=new _n(u,c,a.key,a)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=bs(e,s.document),i=s.readTime?Tt(s.readTime):b.min(),o=H.newNoDocument(r,i),a=s.removedTargetIds||[];n=new _n([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=bs(e,s.document),i=s.removedTargetIds||[];n=new _n([],i,r,null)}else{if(!("filter"in t))return S();{t.filter;const s=t.filter;s.targetId;const r=s.count||0,i=new Kh(r),o=s.targetId;n=new Pa(o,i)}}return n}function rl(e,t){let n;if(t instanceof on)n={update:Bi(e,t.key,t.value)};else if(t instanceof Lr)n={delete:Hs(e,t.key)};else if(t instanceof Ot)n={update:Bi(e,t.key,t.data),updateMask:pl(t.fieldMask)};else{if(!(t instanceof Gh))return S();n={verify:Hs(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Ke)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ze)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof He)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Pn)return{fieldPath:i.field.canonicalString(),increment:o.yt};throw S()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:el(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:S()}(e,t.precondition)),n}function il(e,t){return e&&e.length>0?(x(t!==void 0),e.map(n=>function(s,r){let i=s.updateTime?Tt(s.updateTime):Tt(r);return i.isEqual(b.min())&&(i=Tt(r)),new Bh(i,s.transformResults||[])}(n,t))):[]}function ol(e,t){return{documents:[Qs(e,t.path)]}}function al(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=Qs(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Qs(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(u){if(u.length===0)return;const c=u.map(h=>function(l){if(l.op==="=="){if(Ri(l.value))return{unaryFilter:{field:Zt(l.field),op:"IS_NAN"}};if(ki(l.value))return{unaryFilter:{field:Zt(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(Ri(l.value))return{unaryFilter:{field:Zt(l.field),op:"IS_NOT_NAN"}};if(ki(l.value))return{unaryFilter:{field:Zt(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zt(l.field),op:ll(l.op),value:l.value}}}(h));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(t.filters);r&&(n.structuredQuery.where=r);const i=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:Zt(h.field),direction:hl(h.dir)}}(c))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(u,c){return u.gt||ts(c)?c:{value:c}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function ul(e){let t=nl(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){x(s===1);const h=n.from[0];h.allDescendants?r=h.collectionId:t=t.child(h.collectionId)}let i=[];n.where&&(i=Ba(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(l){return new re(ne(l.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(h)));let a=null;n.limit&&(a=function(h){let l;return l=typeof h=="object"?h.value:h,ts(l)?null:l}(n.limit));let u=null;n.startAt&&(u=function(h){const l=!!h.before,d=h.values||[];return new On(d,l)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const l=!h.before,d=h.values||[];return new On(d,l)}(n.endAt)),Lh(t,r,o,i,a,"F",u,c)}function cl(e,t){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return S()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function Ba(e){return e?e.unaryFilter!==void 0?[fl(e)]:e.fieldFilter!==void 0?[dl(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>Ba(t)).reduce((t,n)=>t.concat(n)):S():[]}function hl(e){return Jh[e]}function ll(e){return Zh[e]}function Zt(e){return{fieldPath:e.canonicalString()}}function ne(e){return J.fromServerFormat(e.fieldPath)}function dl(e){return rt.create(ne(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return S()}}(e.fieldFilter.op),e.fieldFilter.value)}function fl(e){switch(e.unaryFilter.op){case"IS_NAN":const t=ne(e.unaryFilter.field);return rt.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=ne(e.unaryFilter.field);return rt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ne(e.unaryFilter.field);return rt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=ne(e.unaryFilter.field);return rt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return S()}}function pl(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function $a(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&$h(i,t,s[r])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=De(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=De(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=Oa();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const u=Ra(o,a);u!==null&&s.set(r.key,u),o.isValidDocument()||o.convertToNoDocument(b.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),A())}isEqual(t){return this.batchId===t.batchId&&ae(this.mutations,t.mutations,(n,s)=>Ui(n,s))&&ae(this.baseMutations,t.baseMutations,(n,s)=>Ui(n,s))}}class Ur{constructor(t,n,s,r){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(t,n,s){x(t.mutations.length===s.length);let r=Qh;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Ur(t,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t,n,s,r,i=b.min(),o=b.min(),a=X.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new Vt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(t){this.re=t}}function vl(e){const t=ul({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Un(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(){this.Ye=new Tl}addToCollectionParentIndex(t,n){return this.Ye.add(n),p.resolve()}getCollectionParents(t,n){return p.resolve(this.Ye.getEntries(n))}addFieldIndex(t,n){return p.resolve()}deleteFieldIndex(t,n){return p.resolve()}getDocumentsMatchingTarget(t,n){return p.resolve(null)}getIndexType(t,n){return p.resolve(0)}getFieldIndexes(t,n){return p.resolve([])}getNextCollectionGroupToUpdate(t){return p.resolve(null)}getMinOffset(t,n){return p.resolve(Rt.min())}getMinOffsetFromCollectionGroup(t,n){return p.resolve(Rt.min())}updateCollectionGroup(t,n,s){return p.resolve()}updateIndexEntries(t,n){return p.resolve()}}class Tl{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new $(L.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new $(L.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new he(0)}static vn(){return new he(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(){this.changes=new ve(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,H.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?p.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(t,n,s,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(s=r,this.getBaseDocument(t,n,s))).next(r=>(s!==null&&De(s.mutation,r,dt.empty(),B.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,A()).next(()=>s))}getLocalViewOfDocuments(t,n,s=A()){const r=Ft();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,s).next(i=>{let o=Ce();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=Ft();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,A()))}populateOverlays(t,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,r){let i=Ct();const o=Ne(),a=Ne();return n.forEach((u,c)=>{const h=s.get(c.key);r.has(c.key)&&(h===void 0||h.mutation instanceof Ot)?i=i.insert(c.key,c):h!==void 0&&(o.set(c.key,h.mutation.getFieldMask()),De(h.mutation,c,h.mutation.getFieldMask(),B.now()))}),this.recalculateAndSaveOverlays(t,i).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var l;return a.set(c,new _l(h,(l=o.get(c))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,n){const s=Ne();let r=new j((o,a)=>o-a),i=A();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=s.get(u)||dt.empty();h=a.applyToLocalView(c,h),s.set(u,h);const l=(r.get(a.batchId)||A()).add(u);r=r.insert(a.batchId,l)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,l=Oa();h.forEach(d=>{if(!i.has(d)){const g=Ra(n.get(d),s.get(d));g!==null&&l.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,l))}return p.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return E.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Ta(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,r-i.size):p.resolve(Ft());let a=-1,u=i;return o.next(c=>p.forEach(c,(h,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),i.get(h)?p.resolve():this.getBaseDocument(t,h,l).next(d=>{u=u.insert(h,d)}))).next(()=>this.populateOverlays(t,c,i)).next(()=>this.computeViews(t,u,c,A())).next(h=>({batchId:a,changes:La(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new E(n)).next(s=>{let r=Ce();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const r=n.collectionGroup;let i=Ce();return this.indexManager.getCollectionParents(t,r).next(o=>p.forEach(o,a=>{const u=function(c,h){return new ye(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,u,s).next(c=>{c.forEach((h,l)=>{i=i.insert(h,l)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(t,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId))).next(i=>{i.forEach((a,u)=>{const c=u.getKey();r.get(c)===null&&(r=r.insert(c,H.newInvalidDocument(c)))});let o=Ce();return r.forEach((a,u)=>{const c=i.get(a);c!==void 0&&De(c.mutation,u,dt.empty(),B.now()),xr(n,u)&&(o=o.insert(a,u))}),o})}getBaseDocument(t,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(t,n):p.resolve(H.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,n){return p.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Tt(s.createTime)}),p.resolve()}getNamedQuery(t,n){return p.resolve(this.ts.get(n))}saveNamedQuery(t,n){return this.ts.set(n.name,function(s){return{name:s.name,query:vl(s.bundledQuery),readTime:Tt(s.readTime)}}(n)),p.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(){this.overlays=new j(E.comparator),this.es=new Map}getOverlay(t,n){return p.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Ft();return p.forEach(n,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.ue(t,n,i)}),p.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),p.resolve()}getOverlaysForCollection(t,n,s){const r=Ft(),i=n.length+1,o=new E(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>s&&r.set(u.getKey(),u)}return p.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new j((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let h=i.get(c.largestBatchId);h===null&&(h=Ft(),i=i.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Ft(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=r)););return p.resolve(a)}ue(t,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new ml(n,s));let i=this.es.get(n);i===void 0&&(i=A(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(){this.ns=new $(G.ss),this.rs=new $(G.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,n){const s=new G(t,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.cs(new G(t,n))}hs(t,n){t.forEach(s=>this.removeReference(s,n))}ls(t){const n=new E(new L([])),s=new G(n,t),r=new G(n,t+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const n=new E(new L([])),s=new G(n,t),r=new G(n,t+1);let i=A();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new G(t,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class G{constructor(t,n){this.key=t,this._s=n}static ss(t,n){return E.comparator(t.key,n.key)||D(t._s,n._s)}static os(t,n){return D(t._s,n._s)||E.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new $(G.ss)}checkEmpty(t){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new gl(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new G(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(t,n){return p.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return p.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new G(n,0),r=new G(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),p.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new $(D);return n.forEach(r=>{const i=new G(r,0),o=new G(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),p.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;E.isDocumentKey(i)||(i=i.child(""));const o=new G(new E(i),0);let a=new $(D);return this.gs.forEachWhile(u=>{const c=u.key.path;return!!s.isPrefixOf(c)&&(c.length===r&&(a=a.add(u._s)),!0)},o),p.resolve(this.Is(a))}Is(t){const n=[];return t.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){x(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return p.forEach(n.mutations,r=>{const i=new G(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.gs=s})}An(t){}containsKey(t,n){const s=new G(n,0),r=this.gs.firstAfterOrEqual(s);return p.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,p.resolve()}Ts(t,n){return this.ps(t)}ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ys(t){const n=this.ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(t){this.Es=t,this.docs=new j(E.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return p.resolve(s?s.document.mutableCopy():H.newInvalidDocument(n))}getEntries(t,n){let s=Ct();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():H.newInvalidDocument(r))}),p.resolve(s)}getAllFromCollection(t,n,s){let r=Ct();const i=new E(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||mh(gh(u),s)<=0||(r=r.insert(u.key,u.mutableCopy()))}return p.resolve(r)}getAllFromCollectionGroup(t,n,s,r){S()}As(t,n){return p.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new kl(this)}getSize(t){return p.resolve(this.size)}}class kl extends El{constructor(t){super(),this.Yn=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(t,r)):this.Yn.removeEntry(s)}),p.waitFor(n)}getFromCache(t,n){return this.Yn.getEntry(t,n)}getAllFromCache(t,n){return this.Yn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(t){this.persistence=t,this.Rs=new ve(n=>Ar(n),kr),this.lastRemoteSnapshotVersion=b.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Pr,this.targetCount=0,this.vs=he.Pn()}forEachTarget(t,n){return this.Rs.forEach((s,r)=>n(r)),p.resolve()}getLastRemoteSnapshotVersion(t){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return p.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),p.resolve()}Dn(t){this.Rs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.vs=new he(n),this.highestTargetId=n),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,n){return this.Dn(n),this.targetCount+=1,p.resolve()}updateTargetData(t,n){return this.Dn(n),p.resolve()}removeTargetData(t,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,p.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),p.waitFor(i).next(()=>r)}getTargetCount(t){return p.resolve(this.targetCount)}getTargetData(t,n){const s=this.Rs.get(n)||null;return p.resolve(s)}addMatchingKeys(t,n,s){return this.Ps.us(n,s),p.resolve()}removeMatchingKeys(t,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),p.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Ps.ls(n),p.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Ps.ds(n);return p.resolve(s)}containsKey(t,n){return p.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(t,n){this.Vs={},this.overlays={},this.Ss=new Cr(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Rl(this),this.indexManager=new wl,this.remoteDocumentCache=function(s){return new Al(s)}(s=>this.referenceDelegate.xs(s)),this.It=new yl(n),this.Ns=new Sl(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Cl,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Vs[t.toKey()];return s||(s=new bl(n,this.referenceDelegate),this.Vs[t.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,n,s){T("MemoryPersistence","Starting transaction:",t);const r=new Nl(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Ms(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(t,n){return p.or(Object.values(this.Vs).map(s=>()=>s.containsKey(t,n)))}}class Nl extends vh{constructor(t){super(),this.currentSequenceNumber=t}}class Mr{constructor(t){this.persistence=t,this.Fs=new Pr,this.$s=null}static Bs(t){return new Mr(t)}get Ls(){if(this.$s)return this.$s;throw S()}addReference(t,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),p.resolve()}removeReference(t,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),p.resolve()}markPotentiallyOrphaned(t,n){return this.Ls.add(n.toString()),p.resolve()}removeTarget(t,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}ks(){this.$s=new Set}Ms(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Ls,s=>{const r=E.fromPath(s);return this.Us(t,r).next(i=>{i||n.removeEntry(r,b.min())})}).next(()=>(this.$s=null,n.apply(t)))}updateLimboDocument(t,n){return this.Us(t,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(t){return 0}Us(t,n){return p.or([()=>p.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Os(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.Si=s,this.Di=r}static Ci(t,n){let s=A(),r=A();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Fr(t,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(){this.xi=!1}initialize(t,n){this.Ni=t,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(t,n,s,r){return this.ki(t,n).next(i=>i||this.Mi(t,n,r,s)).next(i=>i||this.Oi(t,n))}ki(t,n){if(Li(n))return p.resolve(null);let s=St(n);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Un(n,null,"F"),s=St(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=A(...i);return this.Ni.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(u=>{const c=this.Fi(n,a);return this.$i(n,c,o,u.readTime)?this.ki(t,Un(n,null,"F")):this.Bi(t,c,n,u)}))})))}Mi(t,n,s,r){return Li(n)||r.isEqual(b.min())?this.Oi(t,n):this.Ni.getDocuments(t,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Oi(t,n):(_i()<=Oe.DEBUG&&T("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),zs(n)),this.Bi(t,o,n,ph(r,-1)))})}Fi(t,n){let s=new $(_a(t));return n.forEach((r,i)=>{xr(t,i)&&(s=s.add(i))}),s}$i(t,n,s,r){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(t,n){return _i()<=Oe.DEBUG&&T("QueryEngine","Using full collection scan to execute query:",zs(n)),this.Ni.getDocumentsMatchingQuery(t,n,Rt.min())}Bi(t,n,s,r){return this.Ni.getDocumentsMatchingQuery(t,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(t,n,s,r){this.persistence=t,this.Li=n,this.It=r,this.Ui=new j(D),this.qi=new ve(i=>Ar(i),kr),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(s)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Il(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ui))}}function Ol(e,t,n,s){return new Ll(e,t,n,s)}async function ja(e,t){const n=C(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(t),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let u=A();for(const c of r){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of i){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(s,u).next(c=>({ji:c,removedBatchIds:o,addedBatchIds:a}))})})}function Ul(e,t){const n=C(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=t.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,c){const h=u.batch,l=h.keys();let d=p.resolve();return l.forEach(g=>{d=d.next(()=>c.getEntry(a,g)).next(m=>{const _=u.docVersions.get(g);x(_!==null),m.version.compareTo(_)<0&&(h.applyToRemoteDocument(m,u),m.isValidDocument()&&(m.setReadTime(u.commitVersion),c.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,s,t,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=A();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,r))})}function Ga(e){const t=C(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Cs.getLastRemoteSnapshotVersion(n))}function Pl(e,t){const n=C(e),s=t.snapshotVersion;let r=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.Ui;const a=[];t.targetChanges.forEach((h,l)=>{const d=r.get(l);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,h.removedDocuments,l).next(()=>n.Cs.addMatchingKeys(i,h.addedDocuments,l)));let g=d.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.has(l)?g=g.withResumeToken(X.EMPTY_BYTE_STRING,b.min()).withLastLimboFreeSnapshotVersion(b.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,s)),r=r.insert(l,g),function(m,_,w){return m.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,g,h)&&a.push(n.Cs.updateTargetData(i,g))});let u=Ct(),c=A();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(Ml(i,o,t.documentUpdates).next(h=>{u=h.Wi,c=h.zi})),!s.isEqual(b.min())){const h=n.Cs.getLastRemoteSnapshotVersion(i).next(l=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(h)}return p.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.Ui=r,i))}function Ml(e,t,n){let s=A(),r=A();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let o=Ct();return n.forEach((a,u)=>{const c=i.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),u.isNoDocument()&&u.version.isEqual(b.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):T("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Wi:o,zi:r}})}function Fl(e,t){const n=C(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function Vl(e,t){const n=C(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,t).next(i=>i?(r=i,p.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Vt(t,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(t,s.targetId)),s})}async function Xs(e,t,n){const s=C(e),r=s.Ui.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!rn(o))throw o;T("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Ui=s.Ui.remove(t),s.qi.delete(r.target)}function $i(e,t,n){const s=C(e);let r=b.min(),i=A();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,c){const h=C(a),l=h.qi.get(c);return l!==void 0?p.resolve(h.Ui.get(l)):h.Cs.getTargetData(u,c)}(s,o,St(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>s.Li.getDocumentsMatchingQuery(o,t,n?r:b.min(),n?i:A())).next(a=>(ql(s,Oh(t),a),{documents:a,Hi:i})))}function ql(e,t,n){let s=b.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),e.Ki.set(t,s)}class ji{constructor(){this.activeTargetIds=Ua()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Bl{constructor(){this.Lr=new ji,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,n,s){this.Ur[t]=n}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new ji,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{qr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){T("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){T("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.oo=n+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(t,n,s,r,i){const o=this.ao(t,n);T("RestConnection","Sending: ",o,s);const a={};return this.ho(a,r,i),this.lo(t,o,a,s).then(u=>(T("RestConnection","Received: ",u),u),u=>{throw Ii("RestConnection",`${t} failed with error: `,u,"url: ",o,"request:",s),u})}fo(t,n,s,r,i,o){return this.co(t,n,s,r,i)}ho(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+me,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}ao(t,n){const s=jl[t];return`${this.oo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}lo(t,n,s,r){return new Promise((i,o)=>{const a=new rh;a.listenOnce(eh.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Cs.NO_ERROR:const c=a.getResponseJson();T("Connection","XHR received:",JSON.stringify(c)),i(c);break;case Cs.TIMEOUT:T("Connection",'RPC "'+t+'" timed out'),o(new y(f.DEADLINE_EXCEEDED,"Request time out"));break;case Cs.HTTP_ERROR:const h=a.getStatus();if(T("Connection",'RPC "'+t+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const l=a.getResponseJson().error;if(l&&l.status&&l.message){const d=function(g){const m=g.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(m)>=0?m:f.UNKNOWN}(l.status);o(new y(d,l.message))}else o(new y(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new y(f.UNAVAILABLE,"Connection failed."));break;default:S()}}finally{T("Connection",'RPC "'+t+'" completed.')}});const u=JSON.stringify(r);a.send(n,"POST",u,s,15)})}_o(t,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Zc(),o=th(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new sh({})),this.ho(a.initMessageHeaders,n,s),Gu()||Ku()||zu()||Hu()||Qu()||Wu()||(a.httpHeadersOverwriteParam="$httpHeaders");const u=r.join("");T("Connection","Creating WebChannel: "+u,a);const c=i.createWebChannel(u,a);let h=!1,l=!1;const d=new Gl({Hr:m=>{l?T("Connection","Not sending because WebChannel is closed:",m):(h||(T("Connection","Opening WebChannel transport."),c.open(),h=!0),T("Connection","WebChannel sending:",m),c.send(m))},Jr:()=>c.close()}),g=(m,_,w)=>{m.listen(_,R=>{try{w(R)}catch(N){setTimeout(()=>{throw N},0)}})};return g(c,gn.EventType.OPEN,()=>{l||T("Connection","WebChannel transport opened.")}),g(c,gn.EventType.CLOSE,()=>{l||(l=!0,T("Connection","WebChannel transport closed"),d.io())}),g(c,gn.EventType.ERROR,m=>{l||(l=!0,Ii("Connection","WebChannel transport errored:",m),d.io(new y(f.UNAVAILABLE,"The operation could not be completed")))}),g(c,gn.EventType.MESSAGE,m=>{var _;if(!l){const w=m.data[0];x(!!w);const R=w,N=R.error||((_=R[0])===null||_===void 0?void 0:_.error);if(N){T("Connection","WebChannel received error:",N);const P=N.status;let U=function(bt){const Jt=F[bt];if(Jt!==void 0)return Na(Jt)}(P),yt=N.message;U===void 0&&(U=f.INTERNAL,yt="Unknown error status: "+P+" with message "+N.message),l=!0,d.io(new y(U,yt)),c.close()}else T("Connection","WebChannel received:",w),d.ro(w)}}),g(o,nh.STAT_EVENT,m=>{m.stat===Ti.PROXY?T("Connection","Detected buffering proxy"):m.stat===Ti.NOPROXY&&T("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function As(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(e){return new tl(e,!0)}class Ka{constructor(t,n,s=1e3,r=1.5,i=6e4){this.Hs=t,this.timerId=n,this.wo=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,n-s);r>0&&T("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),t())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(t,n,s,r,i,o,a,u){this.Hs=t,this.Po=s,this.vo=r,this.Vo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Ka(t,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,t!==4?this.xo.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(It(n.toString()),It("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const t=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{t(()=>{const r=new y(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(t,n){const s=this.Ko(this.So);this.stream=this.jo(t,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(t){return T("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return n=>{this.Hs.enqueueAndForget(()=>this.So===t?n():(T("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zl extends za{constructor(t,n,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.It=i}jo(t,n){return this.Vo._o("Listen",t,n)}onMessage(t){this.xo.reset();const n=sl(this.It,t),s=function(r){if(!("targetChange"in r))return b.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?b.min():i.readTime?Tt(i.readTime):b.min()}(t);return this.listener.Wo(n,s)}zo(t){const n={};n.database=Ws(this.It),n.addTarget=function(r,i){let o;const a=i.target;return o=Ks(a)?{documents:ol(r,a)}:{query:al(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Fa(r,i.resumeToken):i.snapshotVersion.compareTo(b.min())>0&&(o.readTime=Mn(r,i.snapshotVersion.toTimestamp())),o}(this.It,t);const s=cl(this.It,t);s&&(n.labels=s),this.Bo(n)}Ho(t){const n={};n.database=Ws(this.It),n.removeTarget=t,this.Bo(n)}}class Hl extends za{constructor(t,n,s,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(t,n){return this.Vo._o("Write",t,n)}onMessage(t){if(x(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const n=il(t.writeResults,t.commitTime),s=Tt(t.commitTime);return this.listener.Zo(s,n)}return x(!t.writeResults||t.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=Ws(this.It),this.Bo(t)}Xo(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>rl(this.It,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.Vo=s,this.It=r,this.nu=!1}su(){if(this.nu)throw new y(f.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.Vo.co(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new y(f.UNKNOWN,r.toString())})}fo(t,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.Vo.fo(t,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(f.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class Wl{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(t){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,t==="Online"&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(It(n),this.ou=!1):T("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(o=>{s.enqueueAndForget(async()=>{Qt(this)&&(T("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=C(a);u._u.add(4),await un(u),u.gu.set("Unknown"),u._u.delete(4),await os(u)}(this))})}),this.gu=new Wl(s,r)}}async function os(e){if(Qt(e))for(const t of e.wu)await t(!0)}async function un(e){for(const t of e.wu)await t(!1)}function Ha(e,t){const n=C(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),Br(n)?qr(n):we(n).ko()&&Vr(n,t))}function Qa(e,t){const n=C(e),s=we(n);n.du.delete(t),s.ko()&&Wa(n,t),n.du.size===0&&(s.ko()?s.Fo():Qt(n)&&n.gu.set("Unknown"))}function Vr(e,t){e.yu.Ot(t.targetId),we(e).zo(t)}function Wa(e,t){e.yu.Ot(t),we(e).Ho(t)}function qr(e){e.yu=new Yh({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),se:t=>e.du.get(t)||null}),we(e).start(),e.gu.uu()}function Br(e){return Qt(e)&&!we(e).No()&&e.du.size>0}function Qt(e){return C(e)._u.size===0}function Xa(e){e.yu=void 0}async function Yl(e){e.du.forEach((t,n)=>{Vr(e,t)})}async function Jl(e,t){Xa(e),Br(e)?(e.gu.hu(t),qr(e)):e.gu.set("Unknown")}async function Zl(e,t,n){if(e.gu.set("Online"),t instanceof Ma&&t.state===2&&t.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(e,t)}catch(s){T("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Fn(e,s)}else if(t instanceof _n?e.yu.Gt(t):t instanceof Pa?e.yu.Yt(t):e.yu.Wt(t),!n.isEqual(b.min()))try{const s=await Ga(e.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.te(i);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const c=r.du.get(u);c&&r.du.set(u,c.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const u=r.du.get(a);if(!u)return;r.du.set(a,u.withResumeToken(X.EMPTY_BYTE_STRING,u.snapshotVersion)),Wa(r,a);const c=new Vt(u.target,a,1,u.sequenceNumber);Vr(r,c)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){T("RemoteStore","Failed to raise snapshot:",s),await Fn(e,s)}}async function Fn(e,t,n){if(!rn(t))throw t;e._u.add(1),await un(e),e.gu.set("Offline"),n||(n=()=>Ga(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{T("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await os(e)})}function Ya(e,t){return t().catch(n=>Fn(e,n,t))}async function as(e){const t=C(e),n=Nt(t);let s=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;td(t);)try{const r=await Fl(t.localStore,s);if(r===null){t.fu.length===0&&n.Fo();break}s=r.batchId,ed(t,r)}catch(r){await Fn(t,r)}Ja(t)&&Za(t)}function td(e){return Qt(e)&&e.fu.length<10}function ed(e,t){e.fu.push(t);const n=Nt(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function Ja(e){return Qt(e)&&!Nt(e).No()&&e.fu.length>0}function Za(e){Nt(e).start()}async function nd(e){Nt(e).eu()}async function sd(e){const t=Nt(e);for(const n of e.fu)t.Xo(n.mutations)}async function rd(e,t,n){const s=e.fu.shift(),r=Ur.from(s,t,n);await Ya(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await as(e)}async function id(e,t){t&&Nt(e).Yo&&await async function(n,s){if(r=s.code,zh(r)&&r!==f.ABORTED){const i=n.fu.shift();Nt(n).Oo(),await Ya(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await as(n)}var r}(e,t),Ja(e)&&Za(e)}async function Ki(e,t){const n=C(e);n.asyncQueue.verifyOperationInProgress(),T("RemoteStore","RemoteStore received new credentials");const s=Qt(n);n._u.add(3),await un(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await os(n)}async function od(e,t){const n=C(e);t?(n._u.delete(2),await os(n)):t||(n._u.add(2),await un(n),n.gu.set("Unknown"))}function we(e){return e.pu||(e.pu=function(t,n,s){const r=C(t);return r.su(),new zl(n,r.Vo,r.authCredentials,r.appCheckCredentials,r.It,s)}(e.datastore,e.asyncQueue,{Yr:Yl.bind(null,e),Zr:Jl.bind(null,e),Wo:Zl.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Oo(),Br(e)?qr(e):e.gu.set("Unknown")):(await e.pu.stop(),Xa(e))})),e.pu}function Nt(e){return e.Iu||(e.Iu=function(t,n,s){const r=C(t);return r.su(),new Hl(n,r.Vo,r.authCredentials,r.appCheckCredentials,r.It,s)}(e.datastore,e.asyncQueue,{Yr:nd.bind(null,e),Zr:id.bind(null,e),tu:sd.bind(null,e),Zo:rd.bind(null,e)}),e.wu.push(async t=>{t?(e.Iu.Oo(),await as(e)):(await e.Iu.stop(),e.fu.length>0&&(T("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new $r(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jr(e,t){if(It("AsyncQueue",`${t}: ${e}`),rn(e))return new y(f.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t){this.comparator=t?(n,s)=>t(n,s)||E.comparator(n.key,s.key):(n,s)=>E.comparator(n.key,s.key),this.keyedMap=Ce(),this.sortedSet=new j(this.comparator)}static emptySet(t){return new ie(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof ie)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new ie;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){this.Tu=new j(E.comparator)}track(t){const n=t.doc.key,s=this.Tu.get(n);s?t.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,t):t.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Tu=this.Tu.remove(n):t.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):S():this.Tu=this.Tu.insert(n,t)}Eu(){const t=[];return this.Tu.inorderTraversal((n,s)=>{t.push(s)}),t}}class le{constructor(t,n,s,r,i,o,a,u){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u}static fromInitialDocuments(t,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new le(t,n,ie.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&es(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(){this.Au=void 0,this.listeners=[]}}class ud{constructor(){this.queries=new ve(t=>Ea(t),es),this.onlineState="Unknown",this.Ru=new Set}}async function tu(e,t){const n=C(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new ad),r)try{i.Au=await n.onListen(s)}catch(o){const a=jr(o,`Initialization of query '${zs(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.listeners.push(t),t.bu(n.onlineState),i.Au&&t.Pu(i.Au)&&Gr(n)}async function eu(e,t){const n=C(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function cd(e,t){const n=C(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Gr(n)}function hd(e,t,n){const s=C(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function Gr(e){e.Ru.forEach(t=>{t.next()})}class nu{constructor(t,n,s){this.query=t,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new le(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),n=!0):this.Cu(t,this.onlineState)&&(this.xu(t),n=!0),this.Su=t,n}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),n=!0),n}Cu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!t.docs.isEmpty()||n==="Offline")}Du(t){if(t.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(t){t=le.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.Vu=!0,this.vu.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(t){this.key=t}}class ru{constructor(t){this.key=t}}class ld{constructor(t,n){this.query=t,this.Lu=n,this.Uu=null,this.current=!1,this.qu=A(),this.mutatedKeys=A(),this.Ku=_a(t),this.Gu=new ie(this.Ku)}get Qu(){return this.Lu}ju(t,n){const s=n?n.Wu:new zi,r=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((h,l)=>{const d=r.get(h),g=xr(this.query,l)?l:null,m=!!d&&this.mutatedKeys.has(d.key),_=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let w=!1;d&&g?d.data.isEqual(g.data)?m!==_&&(s.track({type:3,doc:g}),w=!0):this.zu(d,g)||(s.track({type:2,doc:g}),w=!0,(u&&this.Ku(g,u)>0||c&&this.Ku(g,c)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),w=!0):d&&!g&&(s.track({type:1,doc:d}),w=!0,(u||c)&&(a=!0)),w&&(g?(o=o.add(g),i=_?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{Gu:o,Wu:s,$i:a,mutatedKeys:i}}zu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.Gu;this.Gu=t.Gu,this.mutatedKeys=t.mutatedKeys;const i=t.Wu.Eu();i.sort((c,h)=>function(l,d){const g=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return S()}};return g(l)-g(d)}(c.type,h.type)||this.Ku(c.doc,h.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.qu.size===0&&this.current?1:0,u=a!==this.Uu;return this.Uu=a,i.length!==0||u?{snapshot:new le(this.query,t.Gu,r,i,t.mutatedKeys,a===0,u,!1),Yu:o}:{Yu:o}}bu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new zi,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(t){return!this.Lu.has(t)&&!!this.Gu.has(t)&&!this.Gu.get(t).hasLocalMutations}Hu(t){t&&(t.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=t.current)}Ju(){if(!this.current)return[];const t=this.qu;this.qu=A(),this.Gu.forEach(s=>{this.Xu(s.key)&&(this.qu=this.qu.add(s.key))});const n=[];return t.forEach(s=>{this.qu.has(s)||n.push(new ru(s))}),this.qu.forEach(s=>{t.has(s)||n.push(new su(s))}),n}Zu(t){this.Lu=t.Hi,this.qu=A();const n=this.ju(t.documents);return this.applyChanges(n,!0)}tc(){return le.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class dd{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class fd{constructor(t){this.key=t,this.ec=!1}}class pd{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new ve(a=>Ea(a),es),this.ic=new Map,this.rc=new Set,this.oc=new j(E.comparator),this.uc=new Map,this.cc=new Pr,this.ac={},this.hc=new Map,this.lc=he.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function gd(e,t){const n=Cd(e);let s,r;const i=n.sc.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await Vl(n.localStore,St(t));n.isPrimaryClient&&Ha(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await md(n,t,s,a==="current")}return r}async function md(e,t,n,s){e.dc=(h,l,d)=>async function(g,m,_,w){let R=m.view.ju(_);R.$i&&(R=await $i(g.localStore,m.query,!1).then(({documents:U})=>m.view.ju(U,R)));const N=w&&w.targetChanges.get(m.targetId),P=m.view.applyChanges(R,g.isPrimaryClient,N);return Qi(g,m.targetId,P.Yu),P.snapshot}(e,h,l,d);const r=await $i(e.localStore,t,!0),i=new ld(t,r.Hi),o=i.ju(r.documents),a=an.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline"),u=i.applyChanges(o,e.isPrimaryClient,a);Qi(e,n,u.Yu);const c=new dd(t,n,i);return e.sc.set(t,c),e.ic.has(n)?e.ic.get(n).push(t):e.ic.set(n,[t]),u.snapshot}async function yd(e,t){const n=C(e),s=n.sc.get(t),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter(i=>!es(i,t))),void n.sc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Xs(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Qa(n.remoteStore,s.targetId),Ys(n,s.targetId)}).catch(sn)):(Ys(n,s.targetId),await Xs(n.localStore,s.targetId,!0))}async function vd(e,t,n){const s=bd(e);try{const r=await function(i,o){const a=C(i),u=B.now(),c=o.reduce((d,g)=>d.add(g.key),A());let h,l;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=Ct(),m=A();return a.Gi.getEntries(d,c).next(_=>{g=_,g.forEach((w,R)=>{R.isValidDocument()||(m=m.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(_=>{h=_;const w=[];for(const R of o){const N=jh(R,h.get(R.key).overlayedDocument);N!=null&&w.push(new Ot(R.key,N,va(N.value.mapValue),ft.exists(!0)))}return a.mutationQueue.addMutationBatch(d,u,w,o)}).next(_=>{l=_;const w=_.applyToLocalDocumentSet(h,m);return a.documentOverlayCache.saveOverlays(d,_.batchId,w)})}).then(()=>({batchId:l.batchId,changes:La(h)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let u=i.ac[i.currentUser.toKey()];u||(u=new j(D)),u=u.insert(o,a),i.ac[i.currentUser.toKey()]=u}(s,r.batchId,n),await cn(s,r.changes),await as(s.remoteStore)}catch(r){const i=jr(r,"Failed to persist write");n.reject(i)}}async function iu(e,t){const n=C(e);try{const s=await Pl(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.uc.get(i);o&&(x(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?x(o.ec):r.removedDocuments.size>0&&(x(o.ec),o.ec=!1))}),await cn(n,s,t)}catch(s){await sn(s)}}function Hi(e,t,n){const s=C(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.bu(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=C(i);a.onlineState=o;let u=!1;a.queries.forEach((c,h)=>{for(const l of h.listeners)l.bu(o)&&(u=!0)}),u&&Gr(a)}(s.eventManager,t),r.length&&s.nc.Wo(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function wd(e,t,n){const s=C(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.uc.get(t),i=r&&r.key;if(i){let o=new j(E.comparator);o=o.insert(i,H.newNoDocument(i,b.min()));const a=A().add(i),u=new rs(b.min(),new Map,new $(D),o,a);await iu(s,u),s.oc=s.oc.remove(i),s.uc.delete(t),Kr(s)}else await Xs(s.localStore,t,!1).then(()=>Ys(s,t,n)).catch(sn)}async function Td(e,t){const n=C(e),s=t.batch.batchId;try{const r=await Ul(n.localStore,t);au(n,s,null),ou(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await cn(n,r)}catch(r){await sn(r)}}async function Ed(e,t,n){const s=C(e);try{const r=await function(i,o){const a=C(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return a.mutationQueue.lookupMutationBatch(u,o).next(h=>(x(h!==null),c=h.keys(),a.mutationQueue.removeMutationBatch(u,h))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>a.localDocuments.getDocuments(u,c))})}(s.localStore,t);au(s,t,n),ou(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await cn(s,r)}catch(r){await sn(r)}}function ou(e,t){(e.hc.get(t)||[]).forEach(n=>{n.resolve()}),e.hc.delete(t)}function au(e,t,n){const s=C(e);let r=s.ac[s.currentUser.toKey()];if(r){const i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),s.ac[s.currentUser.toKey()]=r}}function Ys(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.ic.get(t))e.sc.delete(s),n&&e.nc._c(s,n);e.ic.delete(t),e.isPrimaryClient&&e.cc.ls(t).forEach(s=>{e.cc.containsKey(s)||uu(e,s)})}function uu(e,t){e.rc.delete(t.path.canonicalString());const n=e.oc.get(t);n!==null&&(Qa(e.remoteStore,n),e.oc=e.oc.remove(t),e.uc.delete(n),Kr(e))}function Qi(e,t,n){for(const s of n)s instanceof su?(e.cc.addReference(s.key,t),_d(e,s)):s instanceof ru?(T("SyncEngine","Document no longer in limbo: "+s.key),e.cc.removeReference(s.key,t),e.cc.containsKey(s.key)||uu(e,s.key)):S()}function _d(e,t){const n=t.key,s=n.path.canonicalString();e.oc.get(n)||e.rc.has(s)||(T("SyncEngine","New document in limbo: "+n),e.rc.add(s),Kr(e))}function Kr(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){const t=e.rc.values().next().value;e.rc.delete(t);const n=new E(L.fromString(t)),s=e.lc.next();e.uc.set(s,new fd(n)),e.oc=e.oc.insert(n,s),Ha(e.remoteStore,new Vt(St(Rr(n.path)),s,2,Cr.at))}}async function cn(e,t,n){const s=C(e),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,u)=>{o.push(s.dc(u,t,n).then(c=>{if(c){s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,c.fromCache?"not-current":"current"),r.push(c);const h=Fr.Ci(u.targetId,c);i.push(h)}}))}),await Promise.all(o),s.nc.Wo(r),await async function(a,u){const c=C(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>p.forEach(u,l=>p.forEach(l.Si,d=>c.persistence.referenceDelegate.addReference(h,l.targetId,d)).next(()=>p.forEach(l.Di,d=>c.persistence.referenceDelegate.removeReference(h,l.targetId,d)))))}catch(h){if(!rn(h))throw h;T("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const l=h.targetId;if(!h.fromCache){const d=c.Ui.get(l),g=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(g);c.Ui=c.Ui.insert(l,m)}}}(s.localStore,i))}async function Id(e,t){const n=C(e);if(!n.currentUser.isEqual(t)){T("SyncEngine","User change. New user:",t.toKey());const s=await ja(n.localStore,t);n.currentUser=t,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new y(f.CANCELLED,i))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await cn(n,s.ji)}}function Sd(e,t){const n=C(e),s=n.uc.get(t);if(s&&s.ec)return A().add(s.key);{let r=A();const i=n.ic.get(t);if(!i)return r;for(const o of i){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function Cd(e){const t=C(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=iu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Sd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=wd.bind(null,t),t.nc.Wo=cd.bind(null,t.eventManager),t.nc._c=hd.bind(null,t.eventManager),t}function bd(e){const t=C(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Td.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ed.bind(null,t),t}class Ad{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=is(t.databaseInfo.databaseId),this.sharedClientState=this.mc(t),this.persistence=this.gc(t),await this.persistence.start(),this.localStore=this.yc(t),this.gcScheduler=this.Ic(t,this.localStore),this.indexBackfillerScheduler=this.Tc(t,this.localStore)}Ic(t,n){return null}Tc(t,n){return null}yc(t){return Ol(this.persistence,new xl,t.initialUser,this.It)}gc(t){return new Dl(Mr.Bs,this.It)}mc(t){return new Bl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class kd{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Hi(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Id.bind(null,this.syncEngine),await od(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new ud}createDatastore(t){const n=is(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new Kl(r));var r;return function(i,o,a,u){return new Ql(i,o,a,u)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>Hi(this.syncEngine,a,0),o=Gi.C()?new Gi:new $l,new Xl(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,u,c){const h=new pd(s,r,i,o,a,u);return c&&(h.fc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=C(t);T("RemoteStore","RemoteStore shutting down."),n._u.add(5),await un(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ac(this.observer.next,t)}error(t){this.observer.error?this.Ac(this.observer.error,t):It("Uncaught Error in snapshot listener:",t)}Rc(){this.muted=!0}Ac(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=ot.UNAUTHENTICATED,this.clientId=pa.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{T("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(T("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=jr(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Dd(e,t){e.asyncQueue.verifyOperationInProgress(),T("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await ja(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function Nd(e,t){e.asyncQueue.verifyOperationInProgress();const n=await xd(e);T("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>Ki(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>Ki(t.remoteStore,i)),e.onlineComponents=t}async function xd(e){return e.offlineComponents||(T("FirestoreClient","Using default OfflineComponentProvider"),await Dd(e,new Ad)),e.offlineComponents}async function hu(e){return e.onlineComponents||(T("FirestoreClient","Using default OnlineComponentProvider"),await Nd(e,new kd)),e.onlineComponents}function Ld(e){return hu(e).then(t=>t.syncEngine)}async function lu(e){const t=await hu(e),n=t.eventManager;return n.onListen=gd.bind(null,t.syncEngine),n.onUnlisten=yd.bind(null,t.syncEngine),n}function Od(e,t,n={}){const s=new wt;return e.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,u){const c=new cu({next:l=>{i.enqueueAndForget(()=>eu(r,h));const d=l.docs.has(o);!d&&l.fromCache?u.reject(new y(f.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&l.fromCache&&a&&a.source==="server"?u.reject(new y(f.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(l)},error:l=>u.reject(l)}),h=new nu(Rr(o.path),c,{includeMetadataChanges:!0,Nu:!0});return tu(r,h)}(await lu(e),e.asyncQueue,t,n,s)),s.promise}function Ud(e,t,n={}){const s=new wt;return e.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,u){const c=new cu({next:l=>{i.enqueueAndForget(()=>eu(r,h)),l.fromCache&&a.source==="server"?u.reject(new y(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(l)},error:l=>u.reject(l)}),h=new nu(o,c,{includeMetadataChanges:!0,Nu:!0});return tu(r,h)}(await lu(e),e.asyncQueue,t,n,s)),s.promise}const Wi=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(e,t,n){if(!n)throw new y(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Pd(e,t,n,s){if(t===!0&&s===!0)throw new y(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Xi(e){if(!E.isDocumentKey(e))throw new y(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Yi(e){if(E.isDocumentKey(e))throw new y(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function us(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":S()}function mt(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new y(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=us(e);throw new y(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Md(e,t){if(t<=0)throw new y(f.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new y(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new y(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Pd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(t,n,s,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ji({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new y(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ji(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new oh;switch(n.type){case"gapi":const s=n.client;return new ch(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new y(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Wi.get(t);n&&(T("ComponentProvider","Removing Datastore"),Wi.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new it(this.firestore,t,this._key)}}class Wt{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Wt(this.firestore,t,this._query)}}class kt extends Wt{constructor(t,n,s){super(t,n,Rr(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new it(this.firestore,null,new E(t))}withConverter(t){return new kt(this.firestore,t,this._path)}}function yp(e,t,...n){if(e=ct(e),du("collection","path",t),e instanceof zr){const s=L.fromString(t,...n);return Yi(s),new kt(e,null,s)}{if(!(e instanceof it||e instanceof kt))throw new y(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(L.fromString(t,...n));return Yi(s),new kt(e.firestore,null,s)}}function Fd(e,t,...n){if(e=ct(e),arguments.length===1&&(t=pa.R()),du("doc","path",t),e instanceof zr){const s=L.fromString(t,...n);return Xi(s),new it(e,null,new E(s))}{if(!(e instanceof it||e instanceof kt))throw new y(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(L.fromString(t,...n));return Xi(s),new it(e.firestore,e instanceof kt?e.converter:null,new E(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new Ka(this,"async_queue_retry"),this.jc=()=>{const n=As();n&&T("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.bo()};const t=As();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Wc(),this.zc(t)}enterRestrictedMode(t){if(!this.Lc){this.Lc=!0,this.Gc=t||!1;const n=As();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(t){if(this.Wc(),this.Lc)return new Promise(()=>{});const n=new wt;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Bc.push(t),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(t){if(!rn(t))throw t;T("AsyncQueue","Operation failed with retryable error: "+t)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(t){const n=this.$c.then(()=>(this.Kc=!0,t().catch(s=>{this.qc=s,this.Kc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw It("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Kc=!1,s))));return this.$c=n,n}enqueueAfterDelay(t,n,s){this.Wc(),this.Qc.indexOf(t)>-1&&(n=0);const r=$r.createAndSchedule(this,t,n,s,i=>this.Jc(i));return this.Uc.push(r),r}Wc(){this.qc&&S()}verifyOperationInProgress(){}async Yc(){let t;do t=this.$c,await t;while(t!==this.$c)}Xc(t){for(const n of this.Uc)if(n.timerId===t)return!0;return!1}Zc(t){return this.Yc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Yc()})}ta(t){this.Qc.push(t)}Jc(t){const n=this.Uc.indexOf(t);this.Uc.splice(n,1)}}class Xt extends zr{constructor(t,n,s,r){super(t,n,s,r),this.type="firestore",this._queue=new Vd,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||fu(this),this._firestoreClient.terminate()}}function qd(e,t){const n=typeof e=="object"?e:ho(),s=typeof e=="string"?e:t||"(default)";return lo(n,"firestore").getImmediate({identifier:s})}function Hr(e){return e._firestoreClient||fu(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function fu(e){var t;const n=e._freezeSettings(),s=function(r,i,o,a){return new Th(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Rd(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new y(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new J(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t){this._byteString=t}static fromBase64String(t){try{return new de(X.fromBase64String(t))}catch(n){throw new y(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new de(X.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new y(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new y(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return D(this._lat,t._lat)||D(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd=/^__.*__$/;class $d{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Ot(t,this.data,this.fieldMask,n,this.fieldTransforms):new on(t,this.data,n,this.fieldTransforms)}}class pu{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new Ot(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function gu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw S()}}class Wr{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ea(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(t){return new Wr(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.sa({path:s,ra:!1});return r.oa(t),r}ua(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.sa({path:s,ra:!1});return r.ea(),r}ca(t){return this.sa({path:void 0,ra:!0})}aa(t){return Vn(t,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}ea(){if(this.path)for(let t=0;t<this.path.length;t++)this.oa(this.path.get(t))}oa(t){if(t.length===0)throw this.aa("Document fields must not be empty");if(gu(this.na)&&Bd.test(t))throw this.aa('Document fields cannot begin and end with "__"')}}class jd{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.It=s||is(t)}fa(t,n,s,r=!1){return new Wr({na:t,methodName:n,la:s,path:J.emptyPath(),ra:!1,ha:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function ls(e){const t=e._freezeSettings(),n=is(e._databaseId);return new jd(e._databaseId,!!t.ignoreUndefinedProperties,n)}function mu(e,t,n,s,r,i={}){const o=e.fa(i.merge||i.mergeFields?2:0,t,n,r);Yr("Data must be an object, but it was:",o,s);const a=yu(s,o);let u,c;if(i.merge)u=new dt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const l of i.mergeFields){const d=Js(t,l,n);if(!o.contains(d))throw new y(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);wu(h,d)||h.push(d)}u=new dt(h),c=o.fieldTransforms.filter(l=>u.covers(l.field))}else u=null,c=o.fieldTransforms;return new $d(new ut(a),u,c)}class ds extends hs{_toFieldTransform(t){if(t.na!==2)throw t.na===1?t.aa(`${this._methodName}() can only appear at the top level of your update data`):t.aa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ds}}class Xr extends hs{_toFieldTransform(t){return new Vh(t.path,new Ke)}isEqual(t){return t instanceof Xr}}function Gd(e,t,n,s){const r=e.fa(1,t,n);Yr("Data must be an object, but it was:",r,s);const i=[],o=ut.empty();Ht(s,(u,c)=>{const h=Jr(t,u,n);c=ct(c);const l=r.ua(h);if(c instanceof ds)i.push(h);else{const d=hn(c,l);d!=null&&(i.push(h),o.set(h,d))}});const a=new dt(i);return new pu(o,a,r.fieldTransforms)}function Kd(e,t,n,s,r,i){const o=e.fa(1,t,n),a=[Js(t,s,n)],u=[r];if(i.length%2!=0)throw new y(f.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Js(t,i[d])),u.push(i[d+1]);const c=[],h=ut.empty();for(let d=a.length-1;d>=0;--d)if(!wu(c,a[d])){const g=a[d];let m=u[d];m=ct(m);const _=o.ua(g);if(m instanceof ds)c.push(g);else{const w=hn(m,_);w!=null&&(c.push(g),h.set(g,w))}}const l=new dt(c);return new pu(h,l,o.fieldTransforms)}function zd(e,t,n,s=!1){return hn(n,e.fa(s?4:3,t))}function hn(e,t){if(vu(e=ct(e)))return Yr("Unsupported field value:",t,e),yu(e,t);if(e instanceof hs)return function(n,s){if(!gu(s.na))throw s.aa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.aa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ra&&t.na!==4)throw t.aa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=hn(o,s.ca(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(e,t)}return function(n,s){if((n=ct(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Ph(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=B.fromDate(n);return{timestampValue:Mn(s.It,r)}}if(n instanceof B){const r=new B(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Mn(s.It,r)}}if(n instanceof Qr)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof de)return{bytesValue:Fa(s.It,n._byteString)};if(n instanceof it){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.aa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Or(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.aa(`Unsupported field value: ${us(n)}`)}(e,t)}function yu(e,t){const n={};return ga(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ht(e,(s,r)=>{const i=hn(r,t.ia(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function vu(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof B||e instanceof Qr||e instanceof de||e instanceof it||e instanceof hs)}function Yr(e,t,n){if(!vu(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=us(n);throw s==="an object"?t.aa(e+" a custom object"):t.aa(e+" "+s)}}function Js(e,t,n){if((t=ct(t))instanceof cs)return t._internalPath;if(typeof t=="string")return Jr(e,t);throw Vn("Field path arguments must be of type string or ",e,!1,void 0,n)}const Hd=new RegExp("[~\\*/\\[\\]]");function Jr(e,t,n){if(t.search(Hd)>=0)throw Vn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new cs(...t.split("."))._internalPath}catch{throw Vn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Vn(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${s}`),o&&(u+=` in document ${r}`),u+=")"),new y(f.INVALID_ARGUMENT,a+e+u)}function wu(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Qd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(fs("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Qd extends Tu{data(){return super.data()}}function fs(e,t){return typeof t=="string"?Jr(e,t):t instanceof cs?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Eu extends Tu{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new In(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(fs("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class In extends Eu{data(t={}){return super.data(t)}}class Wd{constructor(t,n,s,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new be(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new In(this._firestore,this._userDataWriter,s.key,s,new be(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new y(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new In(s._firestore,s._userDataWriter,o.doc.key,o.doc,new be(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new In(s._firestore,s._userDataWriter,o.doc.key,o.doc,new be(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,c=-1;return o.type!==0&&(u=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),c=i.indexOf(o.doc.key)),{type:Xd(o.type),doc:a,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Xd(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return S()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new y(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zr{}function vp(e,...t){for(const n of t)e=n._apply(e);return e}class Jd extends Zr{constructor(t,n,s){super(),this.wa=t,this.ma=n,this.ga=s,this.type="where"}_apply(t){const n=ls(t.firestore),s=function(r,i,o,a,u,c,h){let l;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new y(f.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){to(h,c);const g=[];for(const m of h)g.push(Zi(a,r,m));l={arrayValue:{values:g}}}else l=Zi(a,r,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||to(h,c),l=zd(o,i,h,c==="in"||c==="not-in");const d=rt.create(u,c,l);return function(g,m){if(m.dt()){const w=Nr(g);if(w!==null&&!w.isEqual(m.field))throw new y(f.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${w.toString()}' and '${m.field.toString()}'`);const R=Dr(g);R!==null&&_u(g,m.field,R)}const _=function(w,R){for(const N of w.filters)if(R.indexOf(N.op)>=0)return N.op;return null}(g,function(w){switch(w){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(m.op));if(_!==null)throw _===m.op?new y(f.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${m.op.toString()}' filter.`):new y(f.INVALID_ARGUMENT,`Invalid query. You cannot use '${m.op.toString()}' filters with '${_.toString()}' filters.`)}(r,d),d}(t._query,"where",n,t.firestore._databaseId,this.wa,this.ma,this.ga);return new Wt(t.firestore,t.converter,function(r,i){const o=r.filters.concat([i]);return new ye(r.path,r.collectionGroup,r.explicitOrderBy.slice(),o,r.limit,r.limitType,r.startAt,r.endAt)}(t._query,s))}}function wp(e,t,n){const s=t,r=fs("where",e);return new Jd(r,s,n)}class Zd extends Zr{constructor(t,n){super(),this.wa=t,this.ya=n,this.type="orderBy"}_apply(t){const n=function(s,r,i){if(s.startAt!==null)throw new y(f.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new y(f.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new re(r,i);return function(a,u){if(Dr(a)===null){const c=Nr(a);c!==null&&_u(a,c,u.field)}}(s,o),o}(t._query,this.wa,this.ya);return new Wt(t.firestore,t.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new ye(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,n))}}function Tp(e,t="asc"){const n=t,s=fs("orderBy",e);return new Zd(s,n)}class tf extends Zr{constructor(t,n,s){super(),this.type=t,this.pa=n,this.Ia=s}_apply(t){return new Wt(t.firestore,t.converter,Un(t._query,this.pa,this.Ia))}}function Ep(e){return Md("limit",e),new tf("limit",e,"F")}function Zi(e,t,n){if(typeof(n=ct(n))=="string"){if(n==="")throw new y(f.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ta(t)&&n.indexOf("/")!==-1)throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(L.fromString(n));if(!E.isDocumentKey(s))throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Ai(e,new E(s))}if(n instanceof it)return Ai(e,n._key);throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${us(n)}.`)}function to(e,t){if(!Array.isArray(e)||e.length===0)throw new y(f.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new y(f.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function _u(e,t,n){if(!n.isEqual(t))throw new y(f.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{convertValue(t,n="none"){switch(Gt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return V(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(ue(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw S()}}convertObject(t,n){const s={};return Ht(t.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new Qr(V(t.latitude),V(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=ya(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Be(t));default:return null}}convertTimestamp(t){const n=Dt(t);return new B(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=L.fromString(t);x($a(s));const r=new $e(s.get(1),s.get(3)),i=new E(s.popFirst(5));return r.isEqual(n)||It(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(e){e=mt(e,it);const t=mt(e.firestore,Xt);return Od(Hr(t),e._key).then(n=>nf(t,e,n))}class Su extends ef{constructor(t){super(),this.firestore=t}convertBytes(t){return new de(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new it(this.firestore,null,n)}}function Ip(e){e=mt(e,Wt);const t=mt(e.firestore,Xt),n=Hr(t),s=new Su(t);return Yd(e._query),Ud(n,e._query).then(r=>new Wd(t,s,e,r))}function Sp(e,t,n){e=mt(e,it);const s=mt(e.firestore,Xt),r=Iu(e.converter,t,n);return ps(s,[mu(ls(s),"setDoc",e._key,r,e.converter!==null,n).toMutation(e._key,ft.none())])}function Cp(e,t,n,...s){e=mt(e,it);const r=mt(e.firestore,Xt),i=ls(r);let o;return o=typeof(t=ct(t))=="string"||t instanceof cs?Kd(i,"updateDoc",e._key,t,n,s):Gd(i,"updateDoc",e._key,t),ps(r,[o.toMutation(e._key,ft.exists(!0))])}function bp(e){return ps(mt(e.firestore,Xt),[new Lr(e._key,ft.none())])}function Ap(e,t){const n=mt(e.firestore,Xt),s=Fd(e),r=Iu(e.converter,t);return ps(n,[mu(ls(e.firestore),"addDoc",s._key,r,e.converter!==null,{}).toMutation(s._key,ft.exists(!1))]).then(()=>s)}function ps(e,t){return function(n,s){const r=new wt;return n.asyncQueue.enqueueAndForget(async()=>vd(await Ld(n),s,r)),r.promise}(Hr(e),t)}function nf(e,t,n){const s=n.docs.get(t._key),r=new Su(e);return new Eu(e,r,t._key,s,new be(n.hasPendingWrites,n.fromCache),t.converter)}function kp(){return new Xr("serverTimestamp")}(function(e,t=!0){(function(n){me=n})(fo),ao(new uo("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Xt(new ah(n.getProvider("auth-internal")),new lh(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new y(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $e(a.options.projectId,u)}(i,s),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Le(Ei,"3.4.15",e),Le(Ei,"3.4.15","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu="firebasestorage.googleapis.com",bu="storageBucket",sf=2*60*1e3,rf=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M extends co{constructor(t,n){super(ks(t),`Firebase Storage: ${n} (${ks(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,M.prototype)}_codeEquals(t){return ks(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function ks(e){return"storage/"+e}function ti(){const e="An unknown error occurred, please check the error payload for server response.";return new M("unknown",e)}function of(e){return new M("object-not-found","Object '"+e+"' does not exist.")}function af(e){return new M("quota-exceeded","Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function uf(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new M("unauthenticated",e)}function cf(){return new M("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function hf(e){return new M("unauthorized","User does not have permission to access '"+e+"'.")}function lf(){return new M("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Au(){return new M("canceled","User canceled the upload/download.")}function df(e){return new M("invalid-url","Invalid URL '"+e+"'.")}function ff(e){return new M("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function pf(){return new M("no-default-bucket","No default bucket found. Did you set the '"+bu+"' property when initializing the app?")}function ku(){return new M("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function gf(){return new M("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function mf(){return new M("no-download-url","The given file does not have any download URLs.")}function Zs(e){return new M("invalid-argument",e)}function Ru(){return new M("app-deleted","The Firebase app was deleted.")}function yf(e){return new M("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function xe(e,t){return new M("invalid-format","String does not match format '"+e+"': "+t)}function Ie(e){throw new M("internal-error","Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=ht.makeFromUrl(t,n)}catch{return new ht(t,"")}if(s.path==="")return s;throw ff(t)}static makeFromUrl(t,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),u={bucket:1,path:3};function c(U){U.path_=decodeURIComponent(U.path)}const h="v[A-Za-z0-9_]+",l=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${l}/${h}/b/${r}/o${d}`,"i"),m={bucket:1,path:3},_=n===Cu?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",R=new RegExp(`^https?://${_}/${r}/${w}`,"i"),P=[{regex:a,indices:u,postModify:i},{regex:g,indices:m,postModify:c},{regex:R,indices:{bucket:1,path:2},postModify:c}];for(let U=0;U<P.length;U++){const yt=P[U],bt=yt.regex.exec(t);if(bt){const Jt=bt[yt.indices.bucket];let Ee=bt[yt.indices.path];Ee||(Ee=""),s=new ht(Jt,Ee),yt.postModify(s);break}}if(s==null)throw df(t);return s}}class vf{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(e,t,n){let s=1,r=null,i=null,o=!1,a=0;function u(){return a===2}let c=!1;function h(...w){c||(c=!0,t.apply(null,w))}function l(w){r=setTimeout(()=>{r=null,e(g,u())},w)}function d(){i&&clearTimeout(i)}function g(w,...R){if(c){d();return}if(w){d(),h.call(null,w,...R);return}if(u()||o){d(),h.call(null,w,...R);return}s<64&&(s*=2);let P;a===1?(a=2,P=0):P=(s+Math.random())*1e3,l(P)}let m=!1;function _(w){m||(m=!0,d(),!c&&(r!==null?(w||(a=2),clearTimeout(r),l(0)):w||(a=1)))}return l(0),i=setTimeout(()=>{o=!0,_(!0)},n),_}function Tf(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(e){return e!==void 0}function _f(e){return typeof e=="function"}function If(e){return typeof e=="object"&&!Array.isArray(e)}function gs(e){return typeof e=="string"||e instanceof String}function eo(e){return ei()&&e instanceof Blob}function ei(){return typeof Blob<"u"}function no(e,t,n,s){if(s<t)throw Zs(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw Zs(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function Du(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const r=t(s)+"="+t(e[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qt;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(qt||(qt={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(t,n,s,r,i,o,a,u,c,h,l){this.url_=t,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=l,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,g)=>{this.resolve_=d,this.reject_=g,this.start_()})}start_(){const t=(s,r)=>{if(r){s(!1,new vn(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===qt.NO_ERROR,u=i.getStatus();if(!a||this.isRetryStatusCode_(u)){const h=i.getErrorCode()===qt.ABORT;s(!1,new vn(!1,null,h));return}const c=this.successCodes_.indexOf(u)!==-1;s(!0,new vn(c,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());Ef(u)?i(u):i()}catch(u){o(u)}else if(a!==null){const u=ti();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(r.canceled){const u=this.appDelete_?Ru():Au();o(u)}else{const u=lf();o(u)}};this.canceled_?n(!1,new vn(!1,null,!0)):this.backoffId_=wf(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Tf(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=this.additionalRetryCodes_.indexOf(t)!==-1;return n||r||i}}class vn{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function Cf(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function bf(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t!=null?t:"AppManager")}function Af(e,t){t&&(e["X-Firebase-GMPID"]=t)}function kf(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Rf(e,t,n,s,r,i){const o=Du(e.urlParams),a=e.url+o,u=Object.assign({},e.headers);return Af(u,t),Cf(u,n),bf(u,i),kf(u,s),new Sf(a,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Nf(...e){const t=Df();if(t!==void 0){const n=new t;for(let s=0;s<e.length;s++)n.append(e[s]);return n.getBlob()}else{if(ei())return new Blob(e);throw new M("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function xf(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(e){return atob(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Rs{constructor(t,n){this.data=t,this.contentType=n||null}}function Of(e,t){switch(e){case pt.RAW:return new Rs(Nu(t));case pt.BASE64:case pt.BASE64URL:return new Rs(xu(e,t));case pt.DATA_URL:return new Rs(Pf(t),Mf(t))}throw ti()}function Nu(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const i=s,o=e.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function Uf(e){let t;try{t=decodeURIComponent(e)}catch{throw xe(pt.DATA_URL,"Malformed data URL.")}return Nu(t)}function xu(e,t){switch(e){case pt.BASE64:{const r=t.indexOf("-")!==-1,i=t.indexOf("_")!==-1;if(r||i)throw xe(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case pt.BASE64URL:{const r=t.indexOf("+")!==-1,i=t.indexOf("/")!==-1;if(r||i)throw xe(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Lf(t)}catch{throw xe(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class Lu{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw xe(pt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=Ff(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function Pf(e){const t=new Lu(e);return t.base64?xu(pt.BASE64,t.rest):Uf(t.rest)}function Mf(e){return new Lu(e).contentType}function Ff(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t,n){let s=0,r="";eo(t)?(this.data_=t,s=t.size,r=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,n){if(eo(this.data_)){const s=this.data_,r=xf(s,t,n);return r===null?null:new At(r)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new At(s,!0)}}static getBlob(...t){if(ei()){const n=t.map(s=>s instanceof At?s.data_:s);return new At(Nf.apply(null,n))}else{const n=t.map(o=>gs(o)?Of(pt.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new At(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(e){let t;try{t=JSON.parse(e)}catch{return null}return If(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function qf(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function Uu(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(e,t){return t}class tt{constructor(t,n,s,r){this.server=t,this.local=n||t,this.writable=!!s,this.xform=r||Bf}}let wn=null;function $f(e){return!gs(e)||e.length<2?e:Uu(e)}function Pu(){if(wn)return wn;const e=[];e.push(new tt("bucket")),e.push(new tt("generation")),e.push(new tt("metageneration")),e.push(new tt("name","fullPath",!0));function t(i,o){return $f(o)}const n=new tt("name");n.xform=t,e.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new tt("size");return r.xform=s,e.push(r),e.push(new tt("timeCreated")),e.push(new tt("updated")),e.push(new tt("md5Hash",null,!0)),e.push(new tt("cacheControl",null,!0)),e.push(new tt("contentDisposition",null,!0)),e.push(new tt("contentEncoding",null,!0)),e.push(new tt("contentLanguage",null,!0)),e.push(new tt("contentType",null,!0)),e.push(new tt("metadata","customMetadata",!0)),wn=e,wn}function jf(e,t){function n(){const s=e.bucket,r=e.fullPath,i=new ht(s,r);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function Gf(e,t,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,t[o.server])}return jf(s,e),s}function Mu(e,t,n){const s=Ou(t);return s===null?null:Gf(e,s,n)}function Kf(e,t,n,s){const r=Ou(t);if(r===null||!gs(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const h=e.bucket,l=e.fullPath,d="/b/"+o(h)+"/o/"+o(l),g=Te(d,n,s),m=Du({alt:"media",token:c});return g+m})[0]}function Fu(e,t){const n={},s=t.length;for(let r=0;r<s;r++){const i=t[r];i.writable&&(n[i.server]=e[i.local])}return JSON.stringify(n)}class Yt{constructor(t,n,s,r){this.url=t,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(e){if(!e)throw ti()}function ni(e,t){function n(s,r){const i=Mu(e,r,t);return Et(i!==null),i}return n}function zf(e,t){function n(s,r){const i=Mu(e,r,t);return Et(i!==null),Kf(i,r,e.host,e._protocol)}return n}function ln(e){function t(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=cf():r=uf():n.getStatus()===402?r=af(e.bucket):n.getStatus()===403?r=hf(e.path):r=s,r.serverResponse=s.serverResponse,r}return t}function si(e){const t=ln(e);function n(s,r){let i=t(s,r);return s.getStatus()===404&&(i=of(e.path)),i.serverResponse=r.serverResponse,i}return n}function Hf(e,t,n){const s=t.fullServerUrl(),r=Te(s,e.host,e._protocol),i="GET",o=e.maxOperationRetryTime,a=new Yt(r,i,ni(e,n),o);return a.errorHandler=si(t),a}function Qf(e,t,n){const s=t.fullServerUrl(),r=Te(s,e.host,e._protocol),i="GET",o=e.maxOperationRetryTime,a=new Yt(r,i,zf(e,n),o);return a.errorHandler=si(t),a}function Wf(e,t){const n=t.fullServerUrl(),s=Te(n,e.host,e._protocol),r="DELETE",i=e.maxOperationRetryTime;function o(u,c){}const a=new Yt(s,r,o,i);return a.successCodes=[200,204],a.errorHandler=si(t),a}function Xf(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function Vu(e,t,n){const s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=Xf(null,t)),s}function Yf(e,t,n,s,r){const i=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let P="";for(let U=0;U<2;U++)P=P+Math.random().toString().slice(2);return P}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=Vu(t,s,r),h=Fu(c,n),l="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+u+"--",g=At.getBlob(l,s,d);if(g===null)throw ku();const m={name:c.fullPath},_=Te(i,e.host,e._protocol),w="POST",R=e.maxUploadRetryTime,N=new Yt(_,w,ni(e,n),R);return N.urlParams=m,N.headers=o,N.body=g.uploadData(),N.errorHandler=ln(t),N}class qn{constructor(t,n,s,r){this.current=t,this.total=n,this.finalized=!!s,this.metadata=r||null}}function ri(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch{Et(!1)}return Et(!!n&&(t||["active"]).indexOf(n)!==-1),n}function Jf(e,t,n,s,r){const i=t.bucketOnlyServerUrl(),o=Vu(t,s,r),a={name:o.fullPath},u=Te(i,e.host,e._protocol),c="POST",h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},l=Fu(o,n),d=e.maxUploadRetryTime;function g(_){ri(_);let w;try{w=_.getResponseHeader("X-Goog-Upload-URL")}catch{Et(!1)}return Et(gs(w)),w}const m=new Yt(u,c,g,d);return m.urlParams=a,m.headers=h,m.body=l,m.errorHandler=ln(t),m}function Zf(e,t,n,s){const r={"X-Goog-Upload-Command":"query"};function i(c){const h=ri(c,["active","final"]);let l=null;try{l=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Et(!1)}l||Et(!1);const d=Number(l);return Et(!isNaN(d)),new qn(d,s.size(),h==="final")}const o="POST",a=e.maxUploadRetryTime,u=new Yt(n,o,i,a);return u.headers=r,u.errorHandler=ln(t),u}const so=256*1024;function tp(e,t,n,s,r,i,o,a){const u=new qn(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=s.size()),s.size()!==u.total)throw gf();const c=u.total-u.current;let h=c;r>0&&(h=Math.min(h,r));const l=u.current,d=l+h,m={"X-Goog-Upload-Command":h===c?"upload, finalize":"upload","X-Goog-Upload-Offset":`${u.current}`},_=s.slice(l,d);if(_===null)throw ku();function w(U,yt){const bt=ri(U,["active","final"]),Jt=u.current+h,Ee=s.size();let ms;return bt==="final"?ms=ni(t,i)(U,yt):ms=null,new qn(Jt,Ee,bt==="final",ms)}const R="POST",N=t.maxUploadRetryTime,P=new Yt(n,R,w,N);return P.headers=m,P.body=_.uploadData(),P.progressCallback=a||null,P.errorHandler=ln(e),P}const at={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Ds(e){switch(e){case"running":case"pausing":case"canceling":return at.RUNNING;case"paused":return at.PAUSED;case"success":return at.SUCCESS;case"canceled":return at.CANCELED;case"error":return at.ERROR;default:return at.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(t,n,s){if(_f(t)||n!=null||s!=null)this.next=t,this.error=n!=null?n:void 0,this.complete=s!=null?s:void 0;else{const i=t;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}class np{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=qt.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=qt.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=qt.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,r){if(this.sent_)throw Ie("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ie("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ie("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ie("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ie("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class sp extends np{initXhr(){this.xhr_.responseType="text"}}function Ut(){return new sp}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(t,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=n,this._metadata=s,this._mappings=Pu(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{this._request=void 0,this._chunkMultiplier=1,r._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=r,this._transition("error"))},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals("canceled")?this.completeTransitions_():(this._error=r,this._transition("error"))},this._promise=new Promise((r,i)=>{this._resolve=r,this._reject=i,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const t=this._transferred;return n=>this._updateProgress(t+n)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":t(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,n)=>{const s=Jf(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,Ut,t,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((n,s)=>{const r=Zf(this._ref.storage,this._ref._location,t,this._blob),i=this._ref.storage._makeRequest(r,Ut,n,s);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=so*this._chunkMultiplier,n=new qn(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,i)=>{let o;try{o=tp(this._ref._location,this._ref.storage,s,this._blob,t,this._mappings,n,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Ut,r,i);this._request=a,a.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){so*this._chunkMultiplier<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,n)=>{const s=Hf(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,Ut,t,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,n)=>{const s=Yf(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,Ut,t,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const n=this._transferred;this._transferred=t,this._transferred!==n&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":this._state=t,this._request!==void 0&&this._request.cancel();break;case"pausing":this._state=t,this._request!==void 0&&this._request.cancel();break;case"running":const n=this._state==="paused";this._state=t,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=Au(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=Ds(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,n,s,r){const i=new ep(n||void 0,s||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(t,n){return this._promise.then(t,n)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const n=this._observers.indexOf(t);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch(Ds(this._state)){case at.SUCCESS:te(this._resolve.bind(null,this.snapshot))();break;case at.CANCELED:case at.ERROR:const n=this._reject;te(n.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(Ds(this._state)){case at.RUNNING:case at.PAUSED:t.next&&te(t.next.bind(t,this.snapshot))();break;case at.SUCCESS:t.complete&&te(t.complete.bind(t))();break;case at.CANCELED:case at.ERROR:t.error&&te(t.error.bind(t,this._error))();break;default:t.error&&te(t.error.bind(t,this._error))()}}resume(){const t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){const t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){const t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t,n){this._service=t,n instanceof ht?this._location=n:this._location=ht.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new Kt(t,n)}get root(){const t=new ht(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Uu(this._location.path)}get storage(){return this._service}get parent(){const t=Vf(this._location.path);if(t===null)return null;const n=new ht(this._location.bucket,t);return new Kt(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw yf(t)}}function ip(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new rp(e,new At(t),n)}function op(e){e._throwIfRoot("getDownloadURL");const t=Qf(e.storage,e._location,Pu());return e.storage.makeRequestWithTokens(t,Ut).then(n=>{if(n===null)throw mf();return n})}function ap(e){e._throwIfRoot("deleteObject");const t=Wf(e.storage,e._location);return e.storage.makeRequestWithTokens(t,Ut)}function up(e,t){const n=qf(e._location.path,t),s=new ht(e._location.bucket,n);return new Kt(e.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(e){return/^[A-Za-z]+:\/\//.test(e)}function hp(e,t){return new Kt(e,t)}function qu(e,t){if(e instanceof ii){const n=e;if(n._bucket==null)throw pf();const s=new Kt(n,n._bucket);return t!=null?qu(s,t):s}else return t!==void 0?up(e,t):e}function lp(e,t){if(t&&cp(t)){if(e instanceof ii)return hp(e,t);throw Zs("To use ref(service, url), the first argument must be a Storage instance.")}else return qu(e,t)}function ro(e,t){const n=t==null?void 0:t[bu];return n==null?null:ht.makeFromBucketSpec(n,e)}class ii{constructor(t,n,s,r,i){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Cu,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=sf,this._maxUploadRetryTime=rf,this._requests=new Set,r!=null?this._bucket=ht.makeFromBucketSpec(r,this._host):this._bucket=ro(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=ht.makeFromBucketSpec(this._url,t):this._bucket=ro(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){no("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){no("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Kt(this,t)}_makeRequest(t,n,s,r){if(this._deleted)return new vf(Ru());{const i=Rf(t,this._appId,s,r,n,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(t,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,r).getPromise()}}const io="@firebase/storage",oo="0.9.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu="storage";function Rp(e,t,n){return e=ct(e),ip(e,t,n)}function Dp(e){return e=ct(e),op(e)}function Np(e){return e=ct(e),ap(e)}function xp(e,t){return e=ct(e),lp(e,t)}function dp(e=ho(),t){return e=ct(e),lo(e,Bu).getImmediate({identifier:t})}function fp(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new ii(n,s,r,t,fo)}function pp(){ao(new uo(Bu,fp,"PUBLIC").setMultipleInstances(!0)),Le(io,oo,""),Le(io,oo,"esm2017")}pp();const gp={apiKey:"AIzaSyDWmTBbZ9DDwuFBO6K_qzBOap4XtxoT8xU",authDomain:"apipgmi.firebaseapp.com",projectId:"apipgmi",storageBucket:"apipgmi.appspot.com",messagingSenderId:"215714558161",appId:"1:215714558161:web:5ae4524153162acf4315f0",measurementId:"G-7TRHNG0RJG"},$u=Xu(gp),Lp=qd($u),Op=dp($u);export{Ap as A,kp as C,yp as D,bp as E,Ep as H,Sp as I,vp as K,wp as Q,Cp as T,Tp as W,Dp as a,Np as b,_p as c,Lp as d,Ip as g,xp as r,Op as s,Rp as u,Fd as x};
