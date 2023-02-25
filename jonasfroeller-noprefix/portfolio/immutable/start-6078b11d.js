import{S as dt,i as _t,s as ht,a as mt,e as V,c as gt,b as G,g as te,t as C,d as ne,f as q,h as M,j as wt,o as $e,k as yt,l as bt,m as vt,n as Pe,p as Z,q as Et,r as kt,u as Rt,v as le,w as z,x as J,y as _e,z as Y,A as W,B as be}from"./chunks/index-70fcf4f1.js";import{S as st,a as lt,I as K,g as Qe,f as xe,b as Oe,c as ve,s as Q,i as et,d as ue,P as tt,e as It,h as Lt}from"./chunks/singletons-3932fb1b.js";import{_ as U}from"./chunks/preload-helper-41c905a7.js";import{b as ae,s as At}from"./chunks/paths-24bb4e9c.js";import{R as nt,H as pe}from"./chunks/control-e7f5239e.js";function St(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function Pt(a){return a.split("%25").map(decodeURI).join("%25")}function Ot(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const Tt=["href","pathname","search","searchParams","toString","toJSON"];function Dt(a,e){const n=new URL(a);for(const r of Tt){let o=n[r];Object.defineProperty(n,r,{get(){return e(),o},enumerable:!0,configurable:!0})}return Nt(n),n}function Nt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Ut="/__data.json";function $t(a){return a.replace(/\/$/,"")+Ut}function ct(a){try{return JSON.parse(sessionStorage[a])}catch{}}function at(a,e){const n=JSON.stringify(e);try{sessionStorage[a]=n}catch{}}function jt(...a){let e=5381;for(const n of a)if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let o=r.length;for(;o;)e=e*33^r[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const Ee=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&de.delete(Ve(a)),Ee(a,e));const de=new Map;function Vt(a,e){const n=Ve(a,e),r=document.querySelector(n);if(r!=null&&r.textContent){const{body:o,...u}=JSON.parse(r.textContent),t=r.getAttribute("data-ttl");return t&&de.set(n,{body:o,init:u,ttl:1e3*Number(t)}),Promise.resolve(new Response(o,u))}return Ee(a,e)}function Ct(a,e,n){if(de.size>0){const r=Ve(a,n),o=de.get(r);if(o){if(performance.now()<o.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(o.body,o.init);de.delete(r)}}return Ee(e,n)}function Ve(a,e){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;if(e!=null&&e.headers||e!=null&&e.body){const o=[];e.headers&&o.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&o.push(e.body),r+=`[data-hash="${jt(...o)}"]`}return r}const qt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ft(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${Mt(a).map(r=>{const o=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(o)return e.push({name:o[1],matcher:o[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(u)return e.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const t=r.split(/\[(.+?)\](?!\])/);return"/"+t.map((p,h)=>{if(h%2){if(p.startsWith("x+"))return Te(String.fromCharCode(parseInt(p.slice(2),16)));if(p.startsWith("u+"))return Te(String.fromCharCode(...p.slice(2).split("-").map(P=>parseInt(P,16))));const g=qt.exec(p);if(!g)throw new Error(`Invalid param: ${p}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,S,O,R,F]=g;return e.push({name:R,matcher:F,optional:!!S,rest:!!O,chained:O?h===1&&t[0]==="":!1}),O?"(.*?)":S?"([^/]*)?":"([^/]+?)"}return Te(p)}).join("")}).join("")}/?$`),params:e}}function Ht(a){return!/^\([^)]+\)$/.test(a)}function Mt(a){return a.slice(1).split("/").filter(Ht)}function Bt(a,e,n){const r={},o=a.slice(1);let u=0;for(let t=0;t<e.length;t+=1){const l=e[t],p=o[t-u];if(l.chained&&l.rest&&u){r[l.name]=o.slice(t-u,t+1).filter(h=>h).join("/"),u=0;continue}if(p===void 0){l.rest&&(r[l.name]="");continue}if(!l.matcher||n[l.matcher](p)){r[l.name]=p;continue}if(l.optional&&l.chained){u++;continue}return}if(!u)return r}function Te(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Kt(a,e,n,r){const o=new Set(e);return Object.entries(n).map(([l,[p,h,g]])=>{const{pattern:S,params:O}=Ft(l),R={id:l,exec:F=>{const P=S.exec(F);if(P)return Bt(P,O,r)},errors:[1,...g||[]].map(F=>a[F]),layouts:[0,...h||[]].map(t),leaf:u(p)};return R.errors.length=R.layouts.length=Math.max(R.errors.length,R.layouts.length),R});function u(l){const p=l<0;return p&&(l=~l),[p,a[l]]}function t(l){return l===void 0?l:[o.has(l),a[l]]}}function Gt(a){let e,n,r;var o=a[1][0];function u(t){return{props:{data:t[3],form:t[2]}}}return o&&(e=z(o,u(a)),a[15](e)),{c(){e&&J(e.$$.fragment),n=V()},l(t){e&&_e(e.$$.fragment,t),n=V()},m(t,l){e&&Y(e,t,l),G(t,n,l),r=!0},p(t,l){const p={};if(l&8&&(p.data=t[3]),l&4&&(p.form=t[2]),o!==(o=t[1][0])){if(e){te();const h=e;C(h.$$.fragment,1,0,()=>{W(h,1)}),ne()}o?(e=z(o,u(t)),t[15](e),J(e.$$.fragment),q(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}else o&&e.$set(p)},i(t){r||(e&&q(e.$$.fragment,t),r=!0)},o(t){e&&C(e.$$.fragment,t),r=!1},d(t){a[15](null),t&&M(n),e&&W(e,t)}}}function zt(a){let e,n,r;var o=a[1][0];function u(t){return{props:{data:t[3],$$slots:{default:[Xt]},$$scope:{ctx:t}}}}return o&&(e=z(o,u(a)),a[14](e)),{c(){e&&J(e.$$.fragment),n=V()},l(t){e&&_e(e.$$.fragment,t),n=V()},m(t,l){e&&Y(e,t,l),G(t,n,l),r=!0},p(t,l){const p={};if(l&8&&(p.data=t[3]),l&65591&&(p.$$scope={dirty:l,ctx:t}),o!==(o=t[1][0])){if(e){te();const h=e;C(h.$$.fragment,1,0,()=>{W(h,1)}),ne()}o?(e=z(o,u(t)),t[14](e),J(e.$$.fragment),q(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}else o&&e.$set(p)},i(t){r||(e&&q(e.$$.fragment,t),r=!0)},o(t){e&&C(e.$$.fragment,t),r=!1},d(t){a[14](null),t&&M(n),e&&W(e,t)}}}function Jt(a){let e,n,r;var o=a[1][1];function u(t){return{props:{data:t[4],form:t[2]}}}return o&&(e=z(o,u(a)),a[13](e)),{c(){e&&J(e.$$.fragment),n=V()},l(t){e&&_e(e.$$.fragment,t),n=V()},m(t,l){e&&Y(e,t,l),G(t,n,l),r=!0},p(t,l){const p={};if(l&16&&(p.data=t[4]),l&4&&(p.form=t[2]),o!==(o=t[1][1])){if(e){te();const h=e;C(h.$$.fragment,1,0,()=>{W(h,1)}),ne()}o?(e=z(o,u(t)),t[13](e),J(e.$$.fragment),q(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}else o&&e.$set(p)},i(t){r||(e&&q(e.$$.fragment,t),r=!0)},o(t){e&&C(e.$$.fragment,t),r=!1},d(t){a[13](null),t&&M(n),e&&W(e,t)}}}function Yt(a){let e,n,r;var o=a[1][1];function u(t){return{props:{data:t[4],$$slots:{default:[Wt]},$$scope:{ctx:t}}}}return o&&(e=z(o,u(a)),a[12](e)),{c(){e&&J(e.$$.fragment),n=V()},l(t){e&&_e(e.$$.fragment,t),n=V()},m(t,l){e&&Y(e,t,l),G(t,n,l),r=!0},p(t,l){const p={};if(l&16&&(p.data=t[4]),l&65575&&(p.$$scope={dirty:l,ctx:t}),o!==(o=t[1][1])){if(e){te();const h=e;C(h.$$.fragment,1,0,()=>{W(h,1)}),ne()}o?(e=z(o,u(t)),t[12](e),J(e.$$.fragment),q(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}else o&&e.$set(p)},i(t){r||(e&&q(e.$$.fragment,t),r=!0)},o(t){e&&C(e.$$.fragment,t),r=!1},d(t){a[12](null),t&&M(n),e&&W(e,t)}}}function Wt(a){let e,n,r;var o=a[1][2];function u(t){return{props:{data:t[5],form:t[2]}}}return o&&(e=z(o,u(a)),a[11](e)),{c(){e&&J(e.$$.fragment),n=V()},l(t){e&&_e(e.$$.fragment,t),n=V()},m(t,l){e&&Y(e,t,l),G(t,n,l),r=!0},p(t,l){const p={};if(l&32&&(p.data=t[5]),l&4&&(p.form=t[2]),o!==(o=t[1][2])){if(e){te();const h=e;C(h.$$.fragment,1,0,()=>{W(h,1)}),ne()}o?(e=z(o,u(t)),t[11](e),J(e.$$.fragment),q(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}else o&&e.$set(p)},i(t){r||(e&&q(e.$$.fragment,t),r=!0)},o(t){e&&C(e.$$.fragment,t),r=!1},d(t){a[11](null),t&&M(n),e&&W(e,t)}}}function Xt(a){let e,n,r,o;const u=[Yt,Jt],t=[];function l(p,h){return p[1][2]?0:1}return e=l(a),n=t[e]=u[e](a),{c(){n.c(),r=V()},l(p){n.l(p),r=V()},m(p,h){t[e].m(p,h),G(p,r,h),o=!0},p(p,h){let g=e;e=l(p),e===g?t[e].p(p,h):(te(),C(t[g],1,1,()=>{t[g]=null}),ne(),n=t[e],n?n.p(p,h):(n=t[e]=u[e](p),n.c()),q(n,1),n.m(r.parentNode,r))},i(p){o||(q(n),o=!0)},o(p){C(n),o=!1},d(p){t[e].d(p),p&&M(r)}}}function rt(a){let e,n=a[7]&&ot(a);return{c(){e=yt("div"),n&&n.c(),this.h()},l(r){e=bt(r,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=vt(e);n&&n.l(o),o.forEach(M),this.h()},h(){Pe(e,"id","svelte-announcer"),Pe(e,"aria-live","assertive"),Pe(e,"aria-atomic","true"),Z(e,"position","absolute"),Z(e,"left","0"),Z(e,"top","0"),Z(e,"clip","rect(0 0 0 0)"),Z(e,"clip-path","inset(50%)"),Z(e,"overflow","hidden"),Z(e,"white-space","nowrap"),Z(e,"width","1px"),Z(e,"height","1px")},m(r,o){G(r,e,o),n&&n.m(e,null)},p(r,o){r[7]?n?n.p(r,o):(n=ot(r),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(r){r&&M(e),n&&n.d()}}}function ot(a){let e;return{c(){e=Et(a[8])},l(n){e=kt(n,a[8])},m(n,r){G(n,e,r)},p(n,r){r&256&&Rt(e,n[8])},d(n){n&&M(e)}}}function Zt(a){let e,n,r,o,u;const t=[zt,Gt],l=[];function p(g,S){return g[1][1]?0:1}e=p(a),n=l[e]=t[e](a);let h=a[6]&&rt(a);return{c(){n.c(),r=mt(),h&&h.c(),o=V()},l(g){n.l(g),r=gt(g),h&&h.l(g),o=V()},m(g,S){l[e].m(g,S),G(g,r,S),h&&h.m(g,S),G(g,o,S),u=!0},p(g,[S]){let O=e;e=p(g),e===O?l[e].p(g,S):(te(),C(l[O],1,1,()=>{l[O]=null}),ne(),n=l[e],n?n.p(g,S):(n=l[e]=t[e](g),n.c()),q(n,1),n.m(r.parentNode,r)),g[6]?h?h.p(g,S):(h=rt(g),h.c(),h.m(o.parentNode,o)):h&&(h.d(1),h=null)},i(g){u||(q(n),u=!0)},o(g){C(n),u=!1},d(g){l[e].d(g),g&&M(r),h&&h.d(g),g&&M(o)}}}function Qt(a,e,n){let{stores:r}=e,{page:o}=e,{constructors:u}=e,{components:t=[]}=e,{form:l}=e,{data_0:p=null}=e,{data_1:h=null}=e,{data_2:g=null}=e;wt(r.page.notify);let S=!1,O=!1,R=null;$e(()=>{const E=r.page.subscribe(()=>{S&&(n(7,O=!0),n(8,R=document.title||"untitled page"))});return n(6,S=!0),E});function F(E){le[E?"unshift":"push"](()=>{t[2]=E,n(0,t)})}function P(E){le[E?"unshift":"push"](()=>{t[1]=E,n(0,t)})}function re(E){le[E?"unshift":"push"](()=>{t[1]=E,n(0,t)})}function X(E){le[E?"unshift":"push"](()=>{t[0]=E,n(0,t)})}function he(E){le[E?"unshift":"push"](()=>{t[0]=E,n(0,t)})}return a.$$set=E=>{"stores"in E&&n(9,r=E.stores),"page"in E&&n(10,o=E.page),"constructors"in E&&n(1,u=E.constructors),"components"in E&&n(0,t=E.components),"form"in E&&n(2,l=E.form),"data_0"in E&&n(3,p=E.data_0),"data_1"in E&&n(4,h=E.data_1),"data_2"in E&&n(5,g=E.data_2)},a.$$.update=()=>{a.$$.dirty&1536&&r.page.set(o)},[t,u,l,p,h,g,S,O,R,r,o,F,P,re,X,he]}class xt extends dt{constructor(e){super(),_t(this,e,Qt,Zt,ht,{stores:9,page:10,constructors:1,components:0,form:2,data_0:3,data_1:4,data_2:5})}}const en={},ke=[()=>U(()=>import("./chunks/0-dc017c86.js"),["./chunks\\0-dc017c86.js","./components\\layout.svelte-cf4f5b08.js","./chunks\\index-70fcf4f1.js"],import.meta.url),()=>U(()=>import("./chunks/1-14debaa2.js"),["./chunks\\1-14debaa2.js","./components\\error.svelte-99baae3f.js","./chunks\\index-70fcf4f1.js","./chunks\\stores-2ddc2aa7.js","./chunks\\singletons-3932fb1b.js","./chunks\\index-a9250c71.js","./chunks\\paths-24bb4e9c.js"],import.meta.url),()=>U(()=>import("./chunks/2-7ba4d1db.js"),["./chunks\\2-7ba4d1db.js","./chunks\\_layout-5d3c053d.js","./chunks\\control-e7f5239e.js","./chunks\\utils-3ecb1cee.js","./chunks\\preload-helper-41c905a7.js","./chunks\\i18n-util-9de3611c.js","./chunks\\paths-24bb4e9c.js","./components\\pages\\_lang_\\_layout.svelte-55a60206.js","./chunks\\index-70fcf4f1.js","./chunks\\stores-2ddc2aa7.js","./chunks\\singletons-3932fb1b.js","./chunks\\index-a9250c71.js","./chunks\\i18n-svelte-89404c9e.js","./chunks\\ThemeSwitcher-e5c4b09f.js","./assets\\_layout-b4f94671.css"],import.meta.url),()=>U(()=>import("./chunks/3-085e581b.js"),["./chunks\\3-085e581b.js","./components\\pages\\_lang_\\_error.svelte-02e530e1.js","./chunks\\index-70fcf4f1.js","./chunks\\paths-24bb4e9c.js","./chunks\\i18n-svelte-89404c9e.js","./chunks\\index-a9250c71.js","./chunks\\i18n-util-9de3611c.js","./chunks\\stores-2ddc2aa7.js","./chunks\\singletons-3932fb1b.js"],import.meta.url),()=>U(()=>import("./chunks/4-55491ca8.js"),["./chunks\\4-55491ca8.js","./chunks\\_page-cb46038f.js","./components\\pages\\_lang_\\_page.svelte-7248bb16.js","./chunks\\index-70fcf4f1.js","./chunks\\Category-30e9874b.js","./chunks\\paths-24bb4e9c.js","./chunks\\i18n-svelte-89404c9e.js","./chunks\\index-a9250c71.js","./chunks\\i18n-util-9de3611c.js"],import.meta.url),()=>U(()=>import("./chunks/5-0d462b9f.js"),["./chunks\\5-0d462b9f.js","./components\\pages\\_lang_\\about\\_page.svelte-137264a0.js","./chunks\\index-70fcf4f1.js","./chunks\\paths-24bb4e9c.js","./chunks\\navigation-4fa1fd09.js","./chunks\\singletons-3932fb1b.js","./chunks\\index-a9250c71.js","./chunks\\i18n-svelte-89404c9e.js","./chunks\\i18n-util-9de3611c.js","./chunks\\Category-30e9874b.js"],import.meta.url),()=>U(()=>import("./chunks/6-2ba528bb.js"),["./chunks\\6-2ba528bb.js","./components\\pages\\_lang_\\about\\photography\\_page.svelte-780b5435.js","./chunks\\index-70fcf4f1.js","./chunks\\SubCategory-711fbf60.js","./chunks\\i18n-svelte-89404c9e.js","./chunks\\index-a9250c71.js","./chunks\\i18n-util-9de3611c.js","./chunks\\AboutNav-d7c17c74.js","./chunks\\paths-24bb4e9c.js"],import.meta.url),()=>U(()=>import("./chunks/7-b68d74f7.js"),["./chunks\\7-b68d74f7.js","./components\\pages\\_lang_\\about\\profile\\_page.svelte-cedb1134.js","./chunks\\index-70fcf4f1.js","./chunks\\SubCategory-711fbf60.js","./chunks\\i18n-svelte-89404c9e.js","./chunks\\index-a9250c71.js","./chunks\\i18n-util-9de3611c.js","./chunks\\AboutNav-d7c17c74.js","./chunks\\paths-24bb4e9c.js"],import.meta.url),()=>U(()=>import("./chunks/8-45534d68.js"),["./chunks\\8-45534d68.js","./components\\pages\\_lang_\\about\\skills\\_page.svelte-27bc9465.js","./chunks\\index-70fcf4f1.js","./chunks\\paths-24bb4e9c.js","./chunks\\i18n-svelte-89404c9e.js","./chunks\\index-a9250c71.js","./chunks\\i18n-util-9de3611c.js","./chunks\\SubCategory-711fbf60.js","./chunks\\AboutNav-d7c17c74.js","./assets\\_page-931a2eaa.css"],import.meta.url),()=>U(()=>import("./chunks/9-f904584e.js"),["./chunks\\9-f904584e.js","./components\\pages\\_lang_\\legal\\_page.svelte-fe943ead.js","./chunks\\index-70fcf4f1.js","./chunks\\paths-24bb4e9c.js","./chunks\\navigation-4fa1fd09.js","./chunks\\singletons-3932fb1b.js","./chunks\\index-a9250c71.js","./chunks\\i18n-svelte-89404c9e.js","./chunks\\i18n-util-9de3611c.js","./chunks\\Category-30e9874b.js"],import.meta.url),()=>U(()=>import("./chunks/10-5aabc8fe.js"),["./chunks\\10-5aabc8fe.js","./components\\pages\\_lang_\\legal\\cookies\\_page.svelte-8883c6e7.js","./chunks\\index-70fcf4f1.js","./chunks\\SubCategory-711fbf60.js","./chunks\\i18n-svelte-89404c9e.js","./chunks\\index-a9250c71.js","./chunks\\i18n-util-9de3611c.js","./chunks\\LegalNav-696a7561.js","./chunks\\paths-24bb4e9c.js"],import.meta.url),()=>U(()=>import("./chunks/11-09c91e1d.js"),["./chunks\\11-09c91e1d.js","./components\\pages\\_lang_\\legal\\imprint\\_page.svelte-213ebdbb.js","./chunks\\index-70fcf4f1.js","./chunks\\LegalNav-696a7561.js","./chunks\\paths-24bb4e9c.js","./chunks\\i18n-svelte-89404c9e.js","./chunks\\index-a9250c71.js","./chunks\\i18n-util-9de3611c.js","./chunks\\SubCategory-711fbf60.js"],import.meta.url),()=>U(()=>import("./chunks/12-e4c22670.js"),["./chunks\\12-e4c22670.js","./components\\pages\\_lang_\\legal\\privacy-policy\\_page.svelte-65940710.js","./chunks\\index-70fcf4f1.js","./chunks\\LegalNav-696a7561.js","./chunks\\paths-24bb4e9c.js","./chunks\\i18n-svelte-89404c9e.js","./chunks\\index-a9250c71.js","./chunks\\i18n-util-9de3611c.js","./chunks\\SubCategory-711fbf60.js"],import.meta.url),()=>U(()=>import("./chunks/13-f3a20705.js"),["./chunks\\13-f3a20705.js","./components\\pages\\_lang_\\legal\\terms-and-conditions\\_page.svelte-04e40ae1.js","./chunks\\index-70fcf4f1.js","./chunks\\LegalNav-696a7561.js","./chunks\\paths-24bb4e9c.js","./chunks\\i18n-svelte-89404c9e.js","./chunks\\index-a9250c71.js","./chunks\\i18n-util-9de3611c.js","./chunks\\SubCategory-711fbf60.js"],import.meta.url),()=>U(()=>import("./chunks/14-b494d281.js"),["./chunks\\14-b494d281.js","./components\\pages\\_lang_\\projects\\_page.svelte-c61753b3.js","./chunks\\index-70fcf4f1.js","./chunks\\Category-30e9874b.js","./chunks\\paths-24bb4e9c.js","./chunks\\i18n-svelte-89404c9e.js","./chunks\\index-a9250c71.js","./chunks\\i18n-util-9de3611c.js"],import.meta.url),()=>U(()=>import("./chunks/15-6c0d6b66.js"),["./chunks\\15-6c0d6b66.js","./components\\pages\\_lang_\\settings\\_page.svelte-986a57d4.js","./chunks\\index-70fcf4f1.js","./chunks\\paths-24bb4e9c.js","./chunks\\Category-30e9874b.js","./chunks\\i18n-svelte-89404c9e.js","./chunks\\index-a9250c71.js","./chunks\\i18n-util-9de3611c.js","./chunks\\ThemeSwitcher-e5c4b09f.js","./chunks\\stores-2ddc2aa7.js","./chunks\\singletons-3932fb1b.js","./chunks\\utils-3ecb1cee.js","./chunks\\preload-helper-41c905a7.js"],import.meta.url),()=>U(()=>import("./chunks/16-ec460e16.js"),["./chunks\\16-ec460e16.js","./components\\pages\\_lang_\\socials\\_page.svelte-2a077a25.js","./chunks\\index-70fcf4f1.js","./chunks\\Category-30e9874b.js","./chunks\\paths-24bb4e9c.js","./chunks\\i18n-svelte-89404c9e.js","./chunks\\index-a9250c71.js","./chunks\\i18n-util-9de3611c.js"],import.meta.url)],ft=[],tn={"/[lang]":[4,[2],[3]],"/[lang]/about":[5,[2],[3]],"/[lang]/about/photography":[6,[2],[3]],"/[lang]/about/profile":[7,[2],[3]],"/[lang]/about/skills":[8,[2],[3]],"/[lang]/legal":[9,[2],[3]],"/[lang]/legal/cookies":[10,[2],[3]],"/[lang]/legal/imprint":[11,[2],[3]],"/[lang]/legal/privacy-policy":[12,[2],[3]],"/[lang]/legal/terms-and-conditions":[13,[2],[3]],"/[lang]/projects":[14,[2],[3]],"/[lang]/settings":[15,[2],[3]],"/[lang]/socials":[16,[2],[3]]},nn={handleError:({error:a})=>{console.error(a)}};async function an(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([r,o])=>[r,await o])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const rn=-1,on=-2,sn=-3,ln=-4,cn=-5,fn=-6;function un(a,e){if(typeof a=="number")return o(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const n=a,r=Array(n.length);function o(u,t=!1){if(u===rn)return;if(u===sn)return NaN;if(u===ln)return 1/0;if(u===cn)return-1/0;if(u===fn)return-0;if(t)throw new Error("Invalid input");if(u in r)return r[u];const l=n[u];if(!l||typeof l!="object")r[u]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const p=l[0],h=e==null?void 0:e[p];if(h)return r[u]=h(o(l[1]));switch(p){case"Date":r[u]=new Date(l[1]);break;case"Set":const g=new Set;r[u]=g;for(let R=1;R<l.length;R+=1)g.add(o(l[R]));break;case"Map":const S=new Map;r[u]=S;for(let R=1;R<l.length;R+=2)S.set(o(l[R]),o(l[R+1]));break;case"RegExp":r[u]=new RegExp(l[1],l[2]);break;case"Object":r[u]=Object(l[1]);break;case"BigInt":r[u]=BigInt(l[1]);break;case"null":const O=Object.create(null);r[u]=O;for(let R=1;R<l.length;R+=2)O[l[R]]=o(l[R+1]);break;default:throw new Error(`Unknown type ${p}`)}}else{const p=new Array(l.length);r[u]=p;for(let h=0;h<l.length;h+=1){const g=l[h];g!==on&&(p[h]=o(g))}}else{const p={};r[u]=p;for(const h in l){const g=l[h];p[h]=o(g)}}return r[u]}return o(0)}function pn(a){return a.filter(e=>e!=null)}const De=Kt(ke,ft,tn,en),ut=ke[0],je=ke[1];ut();je();const ee=ct(st)??{},ce=ct(lt)??{};function Ne(a){ee[a]=ue()}function dn({target:a}){var We;const e=document.documentElement,n=[],r=[];let o=null;const u={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},l=!1,p=!1,h=!0,g=!1,S=!1,O=!1,R=!1,F,P=(We=history.state)==null?void 0:We[K];P||(P=Date.now(),history.replaceState({...history.state,[K]:P},"",location.href));const re=ee[P];re&&(history.scrollRestoration="manual",scrollTo(re.x,re.y));let X,he,E;async function Ce(){E=E||Promise.resolve(),await E,E=null;const s=new URL(location.href),i=ie(s,!0);o=null,await Me(i,s,[])}function qe(s){r.some(i=>i==null?void 0:i.snapshot)&&(ce[s]=r.map(i=>{var f;return(f=i==null?void 0:i.snapshot)==null?void 0:f.capture()}))}function Fe(s){var i;(i=ce[s])==null||i.forEach((f,c)=>{var _,d;(d=(_=r[c])==null?void 0:_.snapshot)==null||d.restore(f)})}async function Re(s,{noScroll:i=!1,replaceState:f=!1,keepFocus:c=!1,state:_={},invalidateAll:d=!1},w,m){return typeof s=="string"&&(s=new URL(s,Qe(document))),ye({url:s,scroll:i?ue():null,keepfocus:c,redirect_chain:w,details:{state:_,replaceState:f},nav_token:m,accepted:()=>{d&&(R=!0)},blocked:()=>{},type:"goto"})}async function He(s){return o={id:s.id,promise:Ge(s).then(i=>(i.type==="loaded"&&i.state.error&&(o=null),i))},o.promise}async function me(...s){const f=De.filter(c=>s.some(_=>c.exec(_))).map(c=>Promise.all([...c.layouts,c.leaf].map(_=>_==null?void 0:_[1]())));await Promise.all(f)}async function Me(s,i,f,c,_,d={},w){var b,y,A;he=d;let m=s&&await Ge(s);if(m||(m=await Ye(i,{id:null},await fe(new Error(`Not found: ${i.pathname}`),{url:i,params:{},route:{id:null}}),404)),i=(s==null?void 0:s.url)||i,he!==d)return!1;if(m.type==="redirect")if(f.length>10||f.includes(i.pathname))m=await ge({status:500,error:await fe(new Error("Redirect loop"),{url:i,params:{},route:{id:null}}),url:i,route:{id:null}});else return Re(new URL(m.location,i).href,{},[...f,i.pathname],d),!1;else((b=m.props.page)==null?void 0:b.status)>=400&&await Q.updated.check()&&await se(i);if(n.length=0,R=!1,g=!0,c&&(Ne(c),qe(c)),(y=m.props.page)!=null&&y.url&&m.props.page.url.pathname!==i.pathname&&(i.pathname=(A=m.props.page)==null?void 0:A.url.pathname),_&&_.details){const{details:I}=_,j=I.replaceState?0:1;if(I.state[K]=P+=j,history[I.replaceState?"replaceState":"pushState"](I.state,"",i),!I.replaceState){let L=P+1;for(;ce[L]||ee[L];)delete ce[L],delete ee[L],L+=1}}if(o=null,p?(t=m.state,m.props.page&&(m.props.page.url=i),F.$set(m.props)):Be(m),_){const{scroll:I,keepfocus:j}=_,{activeElement:L}=document;await be();const v=document.activeElement!==L&&document.activeElement!==document.body;if(!j&&!v&&await Ue(),h){const T=i.hash&&document.getElementById(decodeURIComponent(i.hash.slice(1)));I?scrollTo(I.x,I.y):T?T.scrollIntoView():scrollTo(0,0)}}else await be();h=!0,m.props.page&&(X=m.props.page),w&&w(),g=!1}function Be(s){var c;t=s.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),X=s.props.page,F=new xt({target:a,props:{...s.props,stores:Q,components:r},hydrate:!0}),Fe(P);const f={from:null,to:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};u.after_navigate.forEach(_=>_(f)),p=!0}async function oe({url:s,params:i,branch:f,status:c,error:_,route:d,form:w}){let m="never";for(const L of f)(L==null?void 0:L.slash)!==void 0&&(m=L.slash);s.pathname=St(s.pathname,m),s.search=s.search;const b={type:"loaded",state:{url:s,params:i,branch:f,error:_,route:d},props:{constructors:pn(f).map(L=>L.node.component)}};w!==void 0&&(b.props.form=w);let y={},A=!X,I=0;for(let L=0;L<Math.max(f.length,t.branch.length);L+=1){const v=f[L],T=t.branch[L];(v==null?void 0:v.data)!==(T==null?void 0:T.data)&&(A=!0),v&&(y={...y,...v.data},A&&(b.props[`data_${I}`]=y),I+=1)}return(!t.url||s.href!==t.url.href||t.error!==_||w!==void 0&&w!==X.form||A)&&(b.props.page={error:_,params:i,route:{id:(d==null?void 0:d.id)??null},status:c,url:new URL(s),form:w??null,data:A?y:X.data}),b}async function Ie({loader:s,parent:i,url:f,params:c,route:_,server_data_node:d}){var y,A,I;let w=null;const m={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await s();if((y=b.universal)!=null&&y.load){let j=function(...v){for(const T of v){const{href:H}=new URL(T,f);m.dependencies.add(H)}};const L={route:{get id(){return m.route=!0,_.id}},params:new Proxy(c,{get:(v,T)=>(m.params.add(T),v[T])}),data:(d==null?void 0:d.data)??null,url:Dt(f,()=>{m.url=!0}),async fetch(v,T){let H;v instanceof Request?(H=v.url,T={body:v.method==="GET"||v.method==="HEAD"?void 0:await v.blob(),cache:v.cache,credentials:v.credentials,headers:v.headers,integrity:v.integrity,keepalive:v.keepalive,method:v.method,mode:v.mode,redirect:v.redirect,referrer:v.referrer,referrerPolicy:v.referrerPolicy,signal:v.signal,...T}):H=v;const B=new URL(H,f);return j(B.href),B.origin===f.origin&&(H=B.href.slice(f.origin.length)),p?Ct(H,B.href,T):Vt(H,T)},setHeaders:()=>{},depends:j,parent(){return m.parent=!0,i()}};w=await b.universal.load.call(null,L)??null,w=w?await an(w):null}return{node:b,loader:s,server:d,universal:(A=b.universal)!=null&&A.load?{type:"data",data:w,uses:m}:null,data:w??(d==null?void 0:d.data)??null,slash:((I=b.universal)==null?void 0:I.trailingSlash)??(d==null?void 0:d.slash)}}function Ke(s,i,f,c,_){if(R)return!0;if(!c)return!1;if(c.parent&&s||c.route&&i||c.url&&f)return!0;for(const d of c.params)if(_[d]!==t.params[d])return!0;for(const d of c.dependencies)if(n.some(w=>w(new URL(d))))return!0;return!1}function Le(s,i){return(s==null?void 0:s.type)==="data"?{type:"data",data:s.data,uses:{dependencies:new Set(s.uses.dependencies??[]),params:new Set(s.uses.params??[]),parent:!!s.uses.parent,route:!!s.uses.route,url:!!s.uses.url},slash:s.slash}:(s==null?void 0:s.type)==="skip"?i??null:null}async function Ge({id:s,invalidating:i,url:f,params:c,route:_}){if((o==null?void 0:o.id)===s)return o.promise;const{errors:d,layouts:w,leaf:m}=_,b=[...w,m];d.forEach(k=>k==null?void 0:k().catch(()=>{})),b.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let y=null;const A=t.url?s!==t.url.pathname+t.url.search:!1,I=t.route?_.id!==t.route.id:!1;let j=!1;const L=b.map((k,$)=>{var x;const D=t.branch[$],N=!!(k!=null&&k[0])&&((D==null?void 0:D.loader)!==k[1]||Ke(j,I,A,(x=D.server)==null?void 0:x.uses,c));return N&&(j=!0),N});if(L.some(Boolean)){try{y=await it(f,L)}catch(k){return ge({status:k instanceof pe?k.status:500,error:await fe(k,{url:f,params:c,route:{id:_.id}}),url:f,route:_})}if(y.type==="redirect")return y}const v=y==null?void 0:y.nodes;let T=!1;const H=b.map(async(k,$)=>{var Ae;if(!k)return;const D=t.branch[$],N=v==null?void 0:v[$];if((!N||N.type==="skip")&&k[1]===(D==null?void 0:D.loader)&&!Ke(T,I,A,(Ae=D.universal)==null?void 0:Ae.uses,c))return D;if(T=!0,(N==null?void 0:N.type)==="error")throw N;return Ie({loader:k[1],url:f,params:c,route:_,parent:async()=>{var Ze;const Xe={};for(let Se=0;Se<$;Se+=1)Object.assign(Xe,(Ze=await H[Se])==null?void 0:Ze.data);return Xe},server_data_node:Le(N===void 0&&k[0]?{type:"skip"}:N??null,k[0]?D==null?void 0:D.server:void 0)})});for(const k of H)k.catch(()=>{});const B=[];for(let k=0;k<b.length;k+=1)if(b[k])try{B.push(await H[k])}catch($){if($ instanceof nt)return{type:"redirect",location:$.location};let D=500,N;if(v!=null&&v.includes($))D=$.status??D,N=$.error;else if($ instanceof pe)D=$.status,N=$.body;else{if(await Q.updated.check())return await se(f);N=await fe($,{params:c,url:f,route:{id:_.id}})}const x=await ze(k,B,d);return x?await oe({url:f,params:c,branch:B.slice(0,x.idx).concat(x.node),status:D,error:N,route:_}):await Ye(f,{id:_.id},N,D)}else B.push(void 0);return await oe({url:f,params:c,branch:B,status:200,error:null,route:_,form:i?void 0:null})}async function ze(s,i,f){for(;s--;)if(f[s]){let c=s;for(;!i[c];)c-=1;try{return{idx:c+1,node:{node:await f[s](),loader:f[s],data:{},server:null,universal:null}}}catch{continue}}}async function ge({status:s,error:i,url:f,route:c}){const _={};let d=null;if(ft[0]===0)try{const y=await it(f,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;d=y.nodes[0]??null}catch{(f.origin!==location.origin||f.pathname!==location.pathname||l)&&await se(f)}const m=await Ie({loader:ut,url:f,params:_,route:c,parent:()=>Promise.resolve({}),server_data_node:Le(d)}),b={node:await je(),loader:je,universal:null,server:null,data:null};return await oe({url:f,params:_,branch:[m,b],status:s,error:i,route:null})}function ie(s,i){if(et(s,ae))return;const f=we(s);for(const c of De){const _=c.exec(f);if(_)return{id:s.pathname+s.search,invalidating:i,route:c,params:Ot(_),url:s}}}function we(s){return Pt(s.pathname.slice(ae.length)||"/")}function Je({url:s,type:i,intent:f,delta:c}){var m,b;let _=!1;const d={from:{params:t.params,route:{id:((m=t.route)==null?void 0:m.id)??null},url:t.url},to:{params:(f==null?void 0:f.params)??null,route:{id:((b=f==null?void 0:f.route)==null?void 0:b.id)??null},url:s},willUnload:!f,type:i};c!==void 0&&(d.delta=c);const w={...d,cancel:()=>{_=!0}};return S||u.before_navigate.forEach(y=>y(w)),_?null:d}async function ye({url:s,scroll:i,keepfocus:f,redirect_chain:c,details:_,type:d,delta:w,nav_token:m,accepted:b,blocked:y}){const A=ie(s,!1),I=Je({url:s,type:d,delta:w,intent:A});if(!I){y();return}const j=P;b(),S=!0,p&&Q.navigating.set(I),await Me(A,s,c,j,{scroll:i,keepfocus:f,details:_},m,()=>{S=!1,u.after_navigate.forEach(L=>L(I)),Q.navigating.set(null)})}async function Ye(s,i,f,c){return s.origin===location.origin&&s.pathname===location.pathname&&!l?await ge({status:c,error:f,url:s,route:i}):await se(s)}function se(s){return location.href=s.href,new Promise(()=>{})}function pt(){let s;e.addEventListener("mousemove",d=>{const w=d.target;clearTimeout(s),s=setTimeout(()=>{c(w,2)},20)});function i(d){c(d.composedPath()[0],1)}e.addEventListener("mousedown",i),e.addEventListener("touchstart",i,{passive:!0});const f=new IntersectionObserver(d=>{for(const w of d)w.isIntersecting&&(me(we(new URL(w.target.href))),f.unobserve(w.target))},{threshold:0});function c(d,w){const m=xe(d,e);if(!m)return;const{url:b,external:y}=Oe(m,ae);if(y)return;const A=ve(m);if(!A.reload)if(w<=A.preload_data){const I=ie(b,!1);I&&He(I)}else w<=A.preload_code&&me(we(b))}function _(){f.disconnect();for(const d of e.querySelectorAll("a")){const{url:w,external:m}=Oe(d,ae);if(m)continue;const b=ve(d);b.reload||(b.preload_code===tt.viewport&&f.observe(d),b.preload_code===tt.eager&&me(we(w)))}}u.after_navigate.push(_),_()}return{after_navigate:s=>{$e(()=>(u.after_navigate.push(s),()=>{const i=u.after_navigate.indexOf(s);u.after_navigate.splice(i,1)}))},before_navigate:s=>{$e(()=>(u.before_navigate.push(s),()=>{const i=u.before_navigate.indexOf(s);u.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(g||!p)&&(h=!1)},goto:(s,i={})=>Re(s,i,[]),invalidate:s=>{if(typeof s=="function")n.push(s);else{const{href:i}=new URL(s,location.href);n.push(f=>f.href===i)}return Ce()},invalidateAll:()=>(R=!0,Ce()),preload_data:async s=>{const i=new URL(s,Qe(document)),f=ie(i,!1);if(!f)throw new Error(`Attempted to preload a URL that does not belong to this app: ${i}`);await He(f)},preload_code:me,apply_action:async s=>{if(s.type==="error"){const i=new URL(location.href),{branch:f,route:c}=t;if(!c)return;const _=await ze(t.branch.length,f,c.errors);if(_){const d=await oe({url:i,params:t.params,branch:f.slice(0,_.idx).concat(_.node),status:s.status??500,error:s.error,route:c});t=d.state,F.$set(d.props),be().then(Ue)}}else if(s.type==="redirect")Re(s.location,{invalidateAll:!0},[]);else{const i={form:s.data,page:{...X,form:s.data,status:s.status}};F.$set(i),s.type==="success"&&be().then(Ue)}},_start_router:()=>{var s;history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var c;let f=!1;if(!S){const _={from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>f=!0};u.before_navigate.forEach(d=>d(_))}f?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&(Ne(P),at(st,ee),qe(P),at(lt,ce))}),(s=navigator.connection)!=null&&s.saveData||pt(),e.addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const f=xe(i.composedPath()[0],e);if(!f)return;const{url:c,external:_,target:d}=Oe(f,ae);if(!c)return;if(d==="_parent"||d==="_top"){if(window.parent!==window)return}else if(d&&d!=="_self")return;const w=ve(f);if(!(f instanceof SVGAElement)&&c.protocol!==location.protocol&&!(c.protocol==="https:"||c.protocol==="http:"))return;if(_||w.reload){Je({url:c,type:"link"})||i.preventDefault(),S=!0;return}const[b,y]=c.href.split("#");if(y!==void 0&&b===location.href.split("#")[0]){O=!0,Ne(P),t.url=c,Q.page.set({...X,url:c}),Q.page.notify();return}ye({url:c,scroll:w.noscroll?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:c.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),e.addEventListener("submit",i=>{if(i.defaultPrevented)return;const f=HTMLFormElement.prototype.cloneNode.call(i.target),c=i.submitter;if(((c==null?void 0:c.formMethod)||f.method)!=="get")return;const d=new URL((c==null?void 0:c.hasAttribute("formaction"))&&(c==null?void 0:c.formAction)||f.action);if(et(d,ae))return;const w=i.target,{noscroll:m,reload:b}=ve(w);if(b)return;i.preventDefault(),i.stopPropagation();const y=new FormData(w),A=c==null?void 0:c.getAttribute("name");A&&y.append(A,(c==null?void 0:c.getAttribute("value"))??""),d.search=new URLSearchParams(y).toString(),ye({url:d,scroll:m?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async i=>{var f;if((f=i.state)!=null&&f[K]){if(i.state[K]===P)return;const c=ee[i.state[K]];if(t.url.href.split("#")[0]===location.href.split("#")[0]){ee[P]=ue(),P=i.state[K],scrollTo(c.x,c.y);return}const _=i.state[K]-P;let d=!1;await ye({url:new URL(location.href),scroll:c,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{P=i.state[K]},blocked:()=>{history.go(-_),d=!0},type:"popstate",delta:_}),d||Fe(P)}}),addEventListener("hashchange",()=>{O&&(O=!1,history.replaceState({...history.state,[K]:++P},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&Q.navigating.set(null)})},_hydrate:async({status:s=200,error:i,node_ids:f,params:c,route:_,data:d,form:w})=>{l=!0;const m=new URL(location.href);({params:c={},route:_={id:null}}=ie(m,!1)||{});let b;try{const y=f.map(async(A,I)=>{const j=d[I];return Ie({loader:ke[A],url:m,params:c,route:_,parent:async()=>{const L={};for(let v=0;v<I;v+=1)Object.assign(L,(await y[v]).data);return L},server_data_node:Le(j)})});b=await oe({url:m,params:c,branch:await Promise.all(y),status:s,error:i,form:w,route:De.find(({id:A})=>A===_.id)??null})}catch(y){if(y instanceof nt){await se(new URL(y.location,location.href));return}b=await ge({status:y instanceof pe?y.status:500,error:await fe(y,{url:m,params:c,route:_}),url:m,route:_})}Be(b)}}}async function it(a,e){var u;const n=new URL(a);n.pathname=$t(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const r=await Ee(n.href),o=await r.json();if(!r.ok)throw new pe(r.status,o);return(u=o.nodes)==null||u.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=un(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),o}function fe(a,e){return a instanceof pe?a.body:nn.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Ue(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");return e.tabIndex=-1,e.focus({preventScroll:!0}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex"),new Promise(r=>{setTimeout(()=>{var o;r((o=getSelection())==null?void 0:o.removeAllRanges())})})}}async function yn({assets:a,env:e,hydrate:n,target:r,version:o}){At(a),Lt(o);const u=dn({target:r});It({client:u}),n?await u._hydrate(n):u.goto(location.href,{replaceState:!0}),u._start_router()}export{yn as start};
