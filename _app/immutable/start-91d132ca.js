import{S as dt,i as ht,s as _t,a as mt,e as D,c as gt,b as K,g as ee,t as V,d as te,f as C,h as H,j as wt,o as Te,k as yt,l as bt,m as vt,n as Pe,p as X,q as kt,r as Et,u as St,v as ie,w as G,x as z,y as he,z as J,A as Y,B as be}from"./chunks/index-7c5d9ba8.js";import{S as it,a as lt,I as B,g as Qe,f as xe,b as Oe,c as ve,s as Z,i as et,d as ue,P as tt,e as Rt,h as It}from"./chunks/singletons-480869bb.js";import{_ as le}from"./chunks/preload-helper-41c905a7.js";import{b as ne,s as Lt}from"./chunks/paths-e562eb10.js";import{R as nt,H as pe}from"./chunks/control-e7f5239e.js";function At(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function Pt(a){return a.split("%25").map(decodeURI).join("%25")}function Ot(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const Nt=["href","pathname","search","searchParams","toString","toJSON"];function Ut(a,e){const n=new URL(a);for(const r of Nt){let o=n[r];Object.defineProperty(n,r,{get(){return e(),o},enumerable:!0,configurable:!0})}return $t(n),n}function $t(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const jt="/__data.json";function Tt(a){return a.replace(/\/$/,"")+jt}function ct(a){try{return JSON.parse(sessionStorage[a])}catch{}}function at(a,e){const n=JSON.stringify(e);try{sessionStorage[a]=n}catch{}}function Dt(...a){let e=5381;for(const n of a)if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let o=r.length;for(;o;)e=e*33^r[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const ke=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&de.delete(Ve(a)),ke(a,e));const de=new Map;function Vt(a,e){const n=Ve(a,e),r=document.querySelector(n);if(r!=null&&r.textContent){const{body:o,...u}=JSON.parse(r.textContent),t=r.getAttribute("data-ttl");return t&&de.set(n,{body:o,init:u,ttl:1e3*Number(t)}),Promise.resolve(new Response(o,u))}return ke(a,e)}function Ct(a,e,n){if(de.size>0){const r=Ve(a,n),o=de.get(r);if(o){if(performance.now()<o.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(o.body,o.init);de.delete(r)}}return ke(e,n)}function Ve(a,e){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;if(e!=null&&e.headers||e!=null&&e.body){const o=[];e.headers&&o.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&o.push(e.body),r+=`[data-hash="${Dt(...o)}"]`}return r}const qt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ft(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${Mt(a).map(r=>{const o=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(o)return e.push({name:o[1],matcher:o[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(u)return e.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const t=r.split(/\[(.+?)\](?!\])/);return"/"+t.map((p,_)=>{if(_%2){if(p.startsWith("x+"))return Ne(String.fromCharCode(parseInt(p.slice(2),16)));if(p.startsWith("u+"))return Ne(String.fromCharCode(...p.slice(2).split("-").map(P=>parseInt(P,16))));const g=qt.exec(p);if(!g)throw new Error(`Invalid param: ${p}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,A,O,S,q]=g;return e.push({name:S,matcher:q,optional:!!A,rest:!!O,chained:O?_===1&&t[0]==="":!1}),O?"(.*?)":A?"([^/]*)?":"([^/]+?)"}return Ne(p)}).join("")}).join("")}/?$`),params:e}}function Ht(a){return!/^\([^)]+\)$/.test(a)}function Mt(a){return a.slice(1).split("/").filter(Ht)}function Bt(a,e,n){const r={},o=a.slice(1);let u=0;for(let t=0;t<e.length;t+=1){const l=e[t],p=o[t-u];if(l.chained&&l.rest&&u){r[l.name]=o.slice(t-u,t+1).filter(_=>_).join("/"),u=0;continue}if(p===void 0){l.rest&&(r[l.name]="");continue}if(!l.matcher||n[l.matcher](p)){r[l.name]=p;continue}if(l.optional&&l.chained){u++;continue}return}if(!u)return r}function Ne(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Kt(a,e,n,r){const o=new Set(e);return Object.entries(n).map(([l,[p,_,g]])=>{const{pattern:A,params:O}=Ft(l),S={id:l,exec:q=>{const P=A.exec(q);if(P)return Bt(P,O,r)},errors:[1,...g||[]].map(q=>a[q]),layouts:[0,..._||[]].map(t),leaf:u(p)};return S.errors.length=S.layouts.length=Math.max(S.errors.length,S.layouts.length),S});function u(l){const p=l<0;return p&&(l=~l),[p,a[l]]}function t(l){return l===void 0?l:[o.has(l),a[l]]}}function Gt(a){let e,n,r;var o=a[1][0];function u(t){return{props:{data:t[3],form:t[2]}}}return o&&(e=G(o,u(a)),a[15](e)),{c(){e&&z(e.$$.fragment),n=D()},l(t){e&&he(e.$$.fragment,t),n=D()},m(t,l){e&&J(e,t,l),K(t,n,l),r=!0},p(t,l){const p={};if(l&8&&(p.data=t[3]),l&4&&(p.form=t[2]),o!==(o=t[1][0])){if(e){ee();const _=e;V(_.$$.fragment,1,0,()=>{Y(_,1)}),te()}o?(e=G(o,u(t)),t[15](e),z(e.$$.fragment),C(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else o&&e.$set(p)},i(t){r||(e&&C(e.$$.fragment,t),r=!0)},o(t){e&&V(e.$$.fragment,t),r=!1},d(t){a[15](null),t&&H(n),e&&Y(e,t)}}}function zt(a){let e,n,r;var o=a[1][0];function u(t){return{props:{data:t[3],$$slots:{default:[Xt]},$$scope:{ctx:t}}}}return o&&(e=G(o,u(a)),a[14](e)),{c(){e&&z(e.$$.fragment),n=D()},l(t){e&&he(e.$$.fragment,t),n=D()},m(t,l){e&&J(e,t,l),K(t,n,l),r=!0},p(t,l){const p={};if(l&8&&(p.data=t[3]),l&65591&&(p.$$scope={dirty:l,ctx:t}),o!==(o=t[1][0])){if(e){ee();const _=e;V(_.$$.fragment,1,0,()=>{Y(_,1)}),te()}o?(e=G(o,u(t)),t[14](e),z(e.$$.fragment),C(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else o&&e.$set(p)},i(t){r||(e&&C(e.$$.fragment,t),r=!0)},o(t){e&&V(e.$$.fragment,t),r=!1},d(t){a[14](null),t&&H(n),e&&Y(e,t)}}}function Jt(a){let e,n,r;var o=a[1][1];function u(t){return{props:{data:t[4],form:t[2]}}}return o&&(e=G(o,u(a)),a[13](e)),{c(){e&&z(e.$$.fragment),n=D()},l(t){e&&he(e.$$.fragment,t),n=D()},m(t,l){e&&J(e,t,l),K(t,n,l),r=!0},p(t,l){const p={};if(l&16&&(p.data=t[4]),l&4&&(p.form=t[2]),o!==(o=t[1][1])){if(e){ee();const _=e;V(_.$$.fragment,1,0,()=>{Y(_,1)}),te()}o?(e=G(o,u(t)),t[13](e),z(e.$$.fragment),C(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else o&&e.$set(p)},i(t){r||(e&&C(e.$$.fragment,t),r=!0)},o(t){e&&V(e.$$.fragment,t),r=!1},d(t){a[13](null),t&&H(n),e&&Y(e,t)}}}function Yt(a){let e,n,r;var o=a[1][1];function u(t){return{props:{data:t[4],$$slots:{default:[Wt]},$$scope:{ctx:t}}}}return o&&(e=G(o,u(a)),a[12](e)),{c(){e&&z(e.$$.fragment),n=D()},l(t){e&&he(e.$$.fragment,t),n=D()},m(t,l){e&&J(e,t,l),K(t,n,l),r=!0},p(t,l){const p={};if(l&16&&(p.data=t[4]),l&65575&&(p.$$scope={dirty:l,ctx:t}),o!==(o=t[1][1])){if(e){ee();const _=e;V(_.$$.fragment,1,0,()=>{Y(_,1)}),te()}o?(e=G(o,u(t)),t[12](e),z(e.$$.fragment),C(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else o&&e.$set(p)},i(t){r||(e&&C(e.$$.fragment,t),r=!0)},o(t){e&&V(e.$$.fragment,t),r=!1},d(t){a[12](null),t&&H(n),e&&Y(e,t)}}}function Wt(a){let e,n,r;var o=a[1][2];function u(t){return{props:{data:t[5],form:t[2]}}}return o&&(e=G(o,u(a)),a[11](e)),{c(){e&&z(e.$$.fragment),n=D()},l(t){e&&he(e.$$.fragment,t),n=D()},m(t,l){e&&J(e,t,l),K(t,n,l),r=!0},p(t,l){const p={};if(l&32&&(p.data=t[5]),l&4&&(p.form=t[2]),o!==(o=t[1][2])){if(e){ee();const _=e;V(_.$$.fragment,1,0,()=>{Y(_,1)}),te()}o?(e=G(o,u(t)),t[11](e),z(e.$$.fragment),C(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else o&&e.$set(p)},i(t){r||(e&&C(e.$$.fragment,t),r=!0)},o(t){e&&V(e.$$.fragment,t),r=!1},d(t){a[11](null),t&&H(n),e&&Y(e,t)}}}function Xt(a){let e,n,r,o;const u=[Yt,Jt],t=[];function l(p,_){return p[1][2]?0:1}return e=l(a),n=t[e]=u[e](a),{c(){n.c(),r=D()},l(p){n.l(p),r=D()},m(p,_){t[e].m(p,_),K(p,r,_),o=!0},p(p,_){let g=e;e=l(p),e===g?t[e].p(p,_):(ee(),V(t[g],1,1,()=>{t[g]=null}),te(),n=t[e],n?n.p(p,_):(n=t[e]=u[e](p),n.c()),C(n,1),n.m(r.parentNode,r))},i(p){o||(C(n),o=!0)},o(p){V(n),o=!1},d(p){t[e].d(p),p&&H(r)}}}function rt(a){let e,n=a[7]&&ot(a);return{c(){e=yt("div"),n&&n.c(),this.h()},l(r){e=bt(r,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=vt(e);n&&n.l(o),o.forEach(H),this.h()},h(){Pe(e,"id","svelte-announcer"),Pe(e,"aria-live","assertive"),Pe(e,"aria-atomic","true"),X(e,"position","absolute"),X(e,"left","0"),X(e,"top","0"),X(e,"clip","rect(0 0 0 0)"),X(e,"clip-path","inset(50%)"),X(e,"overflow","hidden"),X(e,"white-space","nowrap"),X(e,"width","1px"),X(e,"height","1px")},m(r,o){K(r,e,o),n&&n.m(e,null)},p(r,o){r[7]?n?n.p(r,o):(n=ot(r),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(r){r&&H(e),n&&n.d()}}}function ot(a){let e;return{c(){e=kt(a[8])},l(n){e=Et(n,a[8])},m(n,r){K(n,e,r)},p(n,r){r&256&&St(e,n[8])},d(n){n&&H(e)}}}function Zt(a){let e,n,r,o,u;const t=[zt,Gt],l=[];function p(g,A){return g[1][1]?0:1}e=p(a),n=l[e]=t[e](a);let _=a[6]&&rt(a);return{c(){n.c(),r=mt(),_&&_.c(),o=D()},l(g){n.l(g),r=gt(g),_&&_.l(g),o=D()},m(g,A){l[e].m(g,A),K(g,r,A),_&&_.m(g,A),K(g,o,A),u=!0},p(g,[A]){let O=e;e=p(g),e===O?l[e].p(g,A):(ee(),V(l[O],1,1,()=>{l[O]=null}),te(),n=l[e],n?n.p(g,A):(n=l[e]=t[e](g),n.c()),C(n,1),n.m(r.parentNode,r)),g[6]?_?_.p(g,A):(_=rt(g),_.c(),_.m(o.parentNode,o)):_&&(_.d(1),_=null)},i(g){u||(C(n),u=!0)},o(g){V(n),u=!1},d(g){l[e].d(g),g&&H(r),_&&_.d(g),g&&H(o)}}}function Qt(a,e,n){let{stores:r}=e,{page:o}=e,{constructors:u}=e,{components:t=[]}=e,{form:l}=e,{data_0:p=null}=e,{data_1:_=null}=e,{data_2:g=null}=e;wt(r.page.notify);let A=!1,O=!1,S=null;Te(()=>{const k=r.page.subscribe(()=>{A&&(n(7,O=!0),n(8,S=document.title||"untitled page"))});return n(6,A=!0),k});function q(k){ie[k?"unshift":"push"](()=>{t[2]=k,n(0,t)})}function P(k){ie[k?"unshift":"push"](()=>{t[1]=k,n(0,t)})}function ae(k){ie[k?"unshift":"push"](()=>{t[1]=k,n(0,t)})}function W(k){ie[k?"unshift":"push"](()=>{t[0]=k,n(0,t)})}function _e(k){ie[k?"unshift":"push"](()=>{t[0]=k,n(0,t)})}return a.$$set=k=>{"stores"in k&&n(9,r=k.stores),"page"in k&&n(10,o=k.page),"constructors"in k&&n(1,u=k.constructors),"components"in k&&n(0,t=k.components),"form"in k&&n(2,l=k.form),"data_0"in k&&n(3,p=k.data_0),"data_1"in k&&n(4,_=k.data_1),"data_2"in k&&n(5,g=k.data_2)},a.$$.update=()=>{a.$$.dirty&1536&&r.page.set(o)},[t,u,l,p,_,g,A,O,S,r,o,q,P,ae,W,_e]}class xt extends dt{constructor(e){super(),ht(this,e,Qt,Zt,_t,{stores:9,page:10,constructors:1,components:0,form:2,data_0:3,data_1:4,data_2:5})}}const en={},Ee=[()=>le(()=>import("./chunks/0-8237bdd2.js"),["./chunks/0-8237bdd2.js","./components/layout.svelte-1c2fa4ad.js","./chunks/index-7c5d9ba8.js"],import.meta.url),()=>le(()=>import("./chunks/1-384236ac.js"),["./chunks/1-384236ac.js","./components/error.svelte-6c46fddc.js","./chunks/index-7c5d9ba8.js","./chunks/stores-1913b305.js","./chunks/singletons-480869bb.js","./chunks/paths-e562eb10.js"],import.meta.url),()=>le(()=>import("./chunks/2-bc5518c0.js"),["./chunks/2-bc5518c0.js","./chunks/_layout-cff0c43d.js","./chunks/control-e7f5239e.js","./chunks/utils-6d8f7850.js","./chunks/preload-helper-41c905a7.js","./chunks/i18n-util-9de3611c.js","./chunks/paths-e562eb10.js","./components/pages/_lang_/_layout.svelte-79eb1899.js","./chunks/index-7c5d9ba8.js","./chunks/i18n-svelte-76a2aa52.js","./chunks/singletons-480869bb.js","./chunks/stores-1913b305.js","./assets/_layout-c4e46d0a.css"],import.meta.url),()=>le(()=>import("./chunks/3-5d6a7dbc.js"),["./chunks/3-5d6a7dbc.js","./components/pages/_lang_/_error.svelte-2cef49f9.js","./chunks/index-7c5d9ba8.js","./chunks/stores-1913b305.js","./chunks/singletons-480869bb.js","./chunks/paths-e562eb10.js","./chunks/i18n-svelte-76a2aa52.js","./chunks/i18n-util-9de3611c.js"],import.meta.url),()=>le(()=>import("./chunks/4-5b9ed148.js"),["./chunks/4-5b9ed148.js","./chunks/_page-cb46038f.js","./components/pages/_lang_/_page.svelte-dae6480f.js","./chunks/index-7c5d9ba8.js"],import.meta.url)],ft=[],tn={"/[lang]":[4,[2],[3]]},nn={handleError:({error:a})=>{console.error(a)}};async function an(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([r,o])=>[r,await o])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const rn=-1,on=-2,sn=-3,ln=-4,cn=-5,fn=-6;function un(a,e){if(typeof a=="number")return o(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const n=a,r=Array(n.length);function o(u,t=!1){if(u===rn)return;if(u===sn)return NaN;if(u===ln)return 1/0;if(u===cn)return-1/0;if(u===fn)return-0;if(t)throw new Error("Invalid input");if(u in r)return r[u];const l=n[u];if(!l||typeof l!="object")r[u]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const p=l[0],_=e==null?void 0:e[p];if(_)return r[u]=_(o(l[1]));switch(p){case"Date":r[u]=new Date(l[1]);break;case"Set":const g=new Set;r[u]=g;for(let S=1;S<l.length;S+=1)g.add(o(l[S]));break;case"Map":const A=new Map;r[u]=A;for(let S=1;S<l.length;S+=2)A.set(o(l[S]),o(l[S+1]));break;case"RegExp":r[u]=new RegExp(l[1],l[2]);break;case"Object":r[u]=Object(l[1]);break;case"BigInt":r[u]=BigInt(l[1]);break;case"null":const O=Object.create(null);r[u]=O;for(let S=1;S<l.length;S+=2)O[l[S]]=o(l[S+1]);break;default:throw new Error(`Unknown type ${p}`)}}else{const p=new Array(l.length);r[u]=p;for(let _=0;_<l.length;_+=1){const g=l[_];g!==on&&(p[_]=o(g))}}else{const p={};r[u]=p;for(const _ in l){const g=l[_];p[_]=o(g)}}return r[u]}return o(0)}function pn(a){return a.filter(e=>e!=null)}const Ue=Kt(Ee,ft,tn,en),ut=Ee[0],De=Ee[1];ut();De();const x=ct(it)??{},ce=ct(lt)??{};function $e(a){x[a]=ue()}function dn({target:a}){var We;const e=document.documentElement,n=[],r=[];let o=null;const u={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},l=!1,p=!1,_=!0,g=!1,A=!1,O=!1,S=!1,q,P=(We=history.state)==null?void 0:We[B];P||(P=Date.now(),history.replaceState({...history.state,[B]:P},"",location.href));const ae=x[P];ae&&(history.scrollRestoration="manual",scrollTo(ae.x,ae.y));let W,_e,k;async function Ce(){k=k||Promise.resolve(),await k,k=null;const i=new URL(location.href),s=oe(i,!0);o=null,await Me(s,i,[])}function qe(i){r.some(s=>s==null?void 0:s.snapshot)&&(ce[i]=r.map(s=>{var f;return(f=s==null?void 0:s.snapshot)==null?void 0:f.capture()}))}function Fe(i){var s;(s=ce[i])==null||s.forEach((f,c)=>{var h,d;(d=(h=r[c])==null?void 0:h.snapshot)==null||d.restore(f)})}async function Se(i,{noScroll:s=!1,replaceState:f=!1,keepFocus:c=!1,state:h={},invalidateAll:d=!1},w,m){return typeof i=="string"&&(i=new URL(i,Qe(document))),ye({url:i,scroll:s?ue():null,keepfocus:c,redirect_chain:w,details:{state:h,replaceState:f},nav_token:m,accepted:()=>{d&&(S=!0)},blocked:()=>{},type:"goto"})}async function He(i){return o={id:i.id,promise:Ge(i).then(s=>(s.type==="loaded"&&s.state.error&&(o=null),s))},o.promise}async function me(...i){const f=Ue.filter(c=>i.some(h=>c.exec(h))).map(c=>Promise.all([...c.layouts,c.leaf].map(h=>h==null?void 0:h[1]())));await Promise.all(f)}async function Me(i,s,f,c,h,d={},w){var b,y,L;_e=d;let m=i&&await Ge(i);if(m||(m=await Ye(s,{id:null},await fe(new Error(`Not found: ${s.pathname}`),{url:s,params:{},route:{id:null}}),404)),s=(i==null?void 0:i.url)||s,_e!==d)return!1;if(m.type==="redirect")if(f.length>10||f.includes(s.pathname))m=await ge({status:500,error:await fe(new Error("Redirect loop"),{url:s,params:{},route:{id:null}}),url:s,route:{id:null}});else return Se(new URL(m.location,s).href,{},[...f,s.pathname],d),!1;else((b=m.props.page)==null?void 0:b.status)>=400&&await Z.updated.check()&&await se(s);if(n.length=0,S=!1,g=!0,c&&($e(c),qe(c)),(y=m.props.page)!=null&&y.url&&m.props.page.url.pathname!==s.pathname&&(s.pathname=(L=m.props.page)==null?void 0:L.url.pathname),h&&h.details){const{details:R}=h,T=R.replaceState?0:1;if(R.state[B]=P+=T,history[R.replaceState?"replaceState":"pushState"](R.state,"",s),!R.replaceState){let I=P+1;for(;ce[I]||x[I];)delete ce[I],delete x[I],I+=1}}if(o=null,p?(t=m.state,m.props.page&&(m.props.page.url=s),q.$set(m.props)):Be(m),h){const{scroll:R,keepfocus:T}=h,{activeElement:I}=document;await be();const v=document.activeElement!==I&&document.activeElement!==document.body;if(!T&&!v&&await je(),_){const N=s.hash&&document.getElementById(decodeURIComponent(s.hash.slice(1)));R?scrollTo(R.x,R.y):N?N.scrollIntoView():scrollTo(0,0)}}else await be();_=!0,m.props.page&&(W=m.props.page),w&&w(),g=!1}function Be(i){var c;t=i.state;const s=document.querySelector("style[data-sveltekit]");s&&s.remove(),W=i.props.page,q=new xt({target:a,props:{...i.props,stores:Z,components:r},hydrate:!0}),Fe(P);const f={from:null,to:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};u.after_navigate.forEach(h=>h(f)),p=!0}async function re({url:i,params:s,branch:f,status:c,error:h,route:d,form:w}){let m="never";for(const I of f)(I==null?void 0:I.slash)!==void 0&&(m=I.slash);i.pathname=At(i.pathname,m),i.search=i.search;const b={type:"loaded",state:{url:i,params:s,branch:f,error:h,route:d},props:{constructors:pn(f).map(I=>I.node.component)}};w!==void 0&&(b.props.form=w);let y={},L=!W,R=0;for(let I=0;I<Math.max(f.length,t.branch.length);I+=1){const v=f[I],N=t.branch[I];(v==null?void 0:v.data)!==(N==null?void 0:N.data)&&(L=!0),v&&(y={...y,...v.data},L&&(b.props[`data_${R}`]=y),R+=1)}return(!t.url||i.href!==t.url.href||t.error!==h||w!==void 0&&w!==W.form||L)&&(b.props.page={error:h,params:s,route:{id:(d==null?void 0:d.id)??null},status:c,url:new URL(i),form:w??null,data:L?y:W.data}),b}async function Re({loader:i,parent:s,url:f,params:c,route:h,server_data_node:d}){var y,L,R;let w=null;const m={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await i();if((y=b.universal)!=null&&y.load){let T=function(...v){for(const N of v){const{href:F}=new URL(N,f);m.dependencies.add(F)}};const I={route:{get id(){return m.route=!0,h.id}},params:new Proxy(c,{get:(v,N)=>(m.params.add(N),v[N])}),data:(d==null?void 0:d.data)??null,url:Ut(f,()=>{m.url=!0}),async fetch(v,N){let F;v instanceof Request?(F=v.url,N={body:v.method==="GET"||v.method==="HEAD"?void 0:await v.blob(),cache:v.cache,credentials:v.credentials,headers:v.headers,integrity:v.integrity,keepalive:v.keepalive,method:v.method,mode:v.mode,redirect:v.redirect,referrer:v.referrer,referrerPolicy:v.referrerPolicy,signal:v.signal,...N}):F=v;const M=new URL(F,f);return T(M.href),M.origin===f.origin&&(F=M.href.slice(f.origin.length)),p?Ct(F,M.href,N):Vt(F,N)},setHeaders:()=>{},depends:T,parent(){return m.parent=!0,s()}};w=await b.universal.load.call(null,I)??null,w=w?await an(w):null}return{node:b,loader:i,server:d,universal:(L=b.universal)!=null&&L.load?{type:"data",data:w,uses:m}:null,data:w??(d==null?void 0:d.data)??null,slash:((R=b.universal)==null?void 0:R.trailingSlash)??(d==null?void 0:d.slash)}}function Ke(i,s,f,c,h){if(S)return!0;if(!c)return!1;if(c.parent&&i||c.route&&s||c.url&&f)return!0;for(const d of c.params)if(h[d]!==t.params[d])return!0;for(const d of c.dependencies)if(n.some(w=>w(new URL(d))))return!0;return!1}function Ie(i,s){return(i==null?void 0:i.type)==="data"?{type:"data",data:i.data,uses:{dependencies:new Set(i.uses.dependencies??[]),params:new Set(i.uses.params??[]),parent:!!i.uses.parent,route:!!i.uses.route,url:!!i.uses.url},slash:i.slash}:(i==null?void 0:i.type)==="skip"?s??null:null}async function Ge({id:i,invalidating:s,url:f,params:c,route:h}){if((o==null?void 0:o.id)===i)return o.promise;const{errors:d,layouts:w,leaf:m}=h,b=[...w,m];d.forEach(E=>E==null?void 0:E().catch(()=>{})),b.forEach(E=>E==null?void 0:E[1]().catch(()=>{}));let y=null;const L=t.url?i!==t.url.pathname+t.url.search:!1,R=t.route?h.id!==t.route.id:!1;let T=!1;const I=b.map((E,j)=>{var Q;const U=t.branch[j],$=!!(E!=null&&E[0])&&((U==null?void 0:U.loader)!==E[1]||Ke(T,R,L,(Q=U.server)==null?void 0:Q.uses,c));return $&&(T=!0),$});if(I.some(Boolean)){try{y=await st(f,I)}catch(E){return ge({status:E instanceof pe?E.status:500,error:await fe(E,{url:f,params:c,route:{id:h.id}}),url:f,route:h})}if(y.type==="redirect")return y}const v=y==null?void 0:y.nodes;let N=!1;const F=b.map(async(E,j)=>{var Le;if(!E)return;const U=t.branch[j],$=v==null?void 0:v[j];if((!$||$.type==="skip")&&E[1]===(U==null?void 0:U.loader)&&!Ke(N,R,L,(Le=U.universal)==null?void 0:Le.uses,c))return U;if(N=!0,($==null?void 0:$.type)==="error")throw $;return Re({loader:E[1],url:f,params:c,route:h,parent:async()=>{var Ze;const Xe={};for(let Ae=0;Ae<j;Ae+=1)Object.assign(Xe,(Ze=await F[Ae])==null?void 0:Ze.data);return Xe},server_data_node:Ie($===void 0&&E[0]?{type:"skip"}:$??null,E[0]?U==null?void 0:U.server:void 0)})});for(const E of F)E.catch(()=>{});const M=[];for(let E=0;E<b.length;E+=1)if(b[E])try{M.push(await F[E])}catch(j){if(j instanceof nt)return{type:"redirect",location:j.location};let U=500,$;if(v!=null&&v.includes(j))U=j.status??U,$=j.error;else if(j instanceof pe)U=j.status,$=j.body;else{if(await Z.updated.check())return await se(f);$=await fe(j,{params:c,url:f,route:{id:h.id}})}const Q=await ze(E,M,d);return Q?await re({url:f,params:c,branch:M.slice(0,Q.idx).concat(Q.node),status:U,error:$,route:h}):await Ye(f,{id:h.id},$,U)}else M.push(void 0);return await re({url:f,params:c,branch:M,status:200,error:null,route:h,form:s?void 0:null})}async function ze(i,s,f){for(;i--;)if(f[i]){let c=i;for(;!s[c];)c-=1;try{return{idx:c+1,node:{node:await f[i](),loader:f[i],data:{},server:null,universal:null}}}catch{continue}}}async function ge({status:i,error:s,url:f,route:c}){const h={};let d=null;if(ft[0]===0)try{const y=await st(f,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;d=y.nodes[0]??null}catch{(f.origin!==location.origin||f.pathname!==location.pathname||l)&&await se(f)}const m=await Re({loader:ut,url:f,params:h,route:c,parent:()=>Promise.resolve({}),server_data_node:Ie(d)}),b={node:await De(),loader:De,universal:null,server:null,data:null};return await re({url:f,params:h,branch:[m,b],status:i,error:s,route:null})}function oe(i,s){if(et(i,ne))return;const f=we(i);for(const c of Ue){const h=c.exec(f);if(h)return{id:i.pathname+i.search,invalidating:s,route:c,params:Ot(h),url:i}}}function we(i){return Pt(i.pathname.slice(ne.length)||"/")}function Je({url:i,type:s,intent:f,delta:c}){var m,b;let h=!1;const d={from:{params:t.params,route:{id:((m=t.route)==null?void 0:m.id)??null},url:t.url},to:{params:(f==null?void 0:f.params)??null,route:{id:((b=f==null?void 0:f.route)==null?void 0:b.id)??null},url:i},willUnload:!f,type:s};c!==void 0&&(d.delta=c);const w={...d,cancel:()=>{h=!0}};return A||u.before_navigate.forEach(y=>y(w)),h?null:d}async function ye({url:i,scroll:s,keepfocus:f,redirect_chain:c,details:h,type:d,delta:w,nav_token:m,accepted:b,blocked:y}){const L=oe(i,!1),R=Je({url:i,type:d,delta:w,intent:L});if(!R){y();return}const T=P;b(),A=!0,p&&Z.navigating.set(R),await Me(L,i,c,T,{scroll:s,keepfocus:f,details:h},m,()=>{A=!1,u.after_navigate.forEach(I=>I(R)),Z.navigating.set(null)})}async function Ye(i,s,f,c){return i.origin===location.origin&&i.pathname===location.pathname&&!l?await ge({status:c,error:f,url:i,route:s}):await se(i)}function se(i){return location.href=i.href,new Promise(()=>{})}function pt(){let i;e.addEventListener("mousemove",d=>{const w=d.target;clearTimeout(i),i=setTimeout(()=>{c(w,2)},20)});function s(d){c(d.composedPath()[0],1)}e.addEventListener("mousedown",s),e.addEventListener("touchstart",s,{passive:!0});const f=new IntersectionObserver(d=>{for(const w of d)w.isIntersecting&&(me(we(new URL(w.target.href))),f.unobserve(w.target))},{threshold:0});function c(d,w){const m=xe(d,e);if(!m)return;const{url:b,external:y}=Oe(m,ne);if(y)return;const L=ve(m);if(!L.reload)if(w<=L.preload_data){const R=oe(b,!1);R&&He(R)}else w<=L.preload_code&&me(we(b))}function h(){f.disconnect();for(const d of e.querySelectorAll("a")){const{url:w,external:m}=Oe(d,ne);if(m)continue;const b=ve(d);b.reload||(b.preload_code===tt.viewport&&f.observe(d),b.preload_code===tt.eager&&me(we(w)))}}u.after_navigate.push(h),h()}return{after_navigate:i=>{Te(()=>(u.after_navigate.push(i),()=>{const s=u.after_navigate.indexOf(i);u.after_navigate.splice(s,1)}))},before_navigate:i=>{Te(()=>(u.before_navigate.push(i),()=>{const s=u.before_navigate.indexOf(i);u.before_navigate.splice(s,1)}))},disable_scroll_handling:()=>{(g||!p)&&(_=!1)},goto:(i,s={})=>Se(i,s,[]),invalidate:i=>{if(typeof i=="function")n.push(i);else{const{href:s}=new URL(i,location.href);n.push(f=>f.href===s)}return Ce()},invalidateAll:()=>(S=!0,Ce()),preload_data:async i=>{const s=new URL(i,Qe(document)),f=oe(s,!1);if(!f)throw new Error(`Attempted to preload a URL that does not belong to this app: ${s}`);await He(f)},preload_code:me,apply_action:async i=>{if(i.type==="error"){const s=new URL(location.href),{branch:f,route:c}=t;if(!c)return;const h=await ze(t.branch.length,f,c.errors);if(h){const d=await re({url:s,params:t.params,branch:f.slice(0,h.idx).concat(h.node),status:i.status??500,error:i.error,route:c});t=d.state,q.$set(d.props),be().then(je)}}else if(i.type==="redirect")Se(i.location,{invalidateAll:!0},[]);else{const s={form:i.data,page:{...W,form:i.data,status:i.status}};q.$set(s),i.type==="success"&&be().then(je)}},_start_router:()=>{var i;history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var c;let f=!1;if(!A){const h={from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>f=!0};u.before_navigate.forEach(d=>d(h))}f?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&($e(P),at(it,x),qe(P),at(lt,ce))}),(i=navigator.connection)!=null&&i.saveData||pt(),e.addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const f=xe(s.composedPath()[0],e);if(!f)return;const{url:c,external:h,target:d}=Oe(f,ne);if(!c)return;if(d==="_parent"||d==="_top"){if(window.parent!==window)return}else if(d&&d!=="_self")return;const w=ve(f);if(!(f instanceof SVGAElement)&&c.protocol!==location.protocol&&!(c.protocol==="https:"||c.protocol==="http:"))return;if(h||w.reload){Je({url:c,type:"link"})||s.preventDefault(),A=!0;return}const[b,y]=c.href.split("#");if(y!==void 0&&b===location.href.split("#")[0]){O=!0,$e(P),t.url=c,Z.page.set({...W,url:c}),Z.page.notify();return}ye({url:c,scroll:w.noscroll?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:c.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),e.addEventListener("submit",s=>{if(s.defaultPrevented)return;const f=HTMLFormElement.prototype.cloneNode.call(s.target),c=s.submitter;if(((c==null?void 0:c.formMethod)||f.method)!=="get")return;const d=new URL((c==null?void 0:c.hasAttribute("formaction"))&&(c==null?void 0:c.formAction)||f.action);if(et(d,ne))return;const w=s.target,{noscroll:m,reload:b}=ve(w);if(b)return;s.preventDefault(),s.stopPropagation();const y=new FormData(w),L=c==null?void 0:c.getAttribute("name");L&&y.append(L,(c==null?void 0:c.getAttribute("value"))??""),d.search=new URLSearchParams(y).toString(),ye({url:d,scroll:m?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async s=>{var f;if((f=s.state)!=null&&f[B]){if(s.state[B]===P)return;const c=x[s.state[B]];if(t.url.href.split("#")[0]===location.href.split("#")[0]){x[P]=ue(),P=s.state[B],scrollTo(c.x,c.y);return}const h=s.state[B]-P;let d=!1;await ye({url:new URL(location.href),scroll:c,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{P=s.state[B]},blocked:()=>{history.go(-h),d=!0},type:"popstate",delta:h}),d||Fe(P)}}),addEventListener("hashchange",()=>{O&&(O=!1,history.replaceState({...history.state,[B]:++P},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&Z.navigating.set(null)})},_hydrate:async({status:i=200,error:s,node_ids:f,params:c,route:h,data:d,form:w})=>{l=!0;const m=new URL(location.href);({params:c={},route:h={id:null}}=oe(m,!1)||{});let b;try{const y=f.map(async(L,R)=>{const T=d[R];return Re({loader:Ee[L],url:m,params:c,route:h,parent:async()=>{const I={};for(let v=0;v<R;v+=1)Object.assign(I,(await y[v]).data);return I},server_data_node:Ie(T)})});b=await re({url:m,params:c,branch:await Promise.all(y),status:i,error:s,form:w,route:Ue.find(({id:L})=>L===h.id)??null})}catch(y){if(y instanceof nt){await se(new URL(y.location,location.href));return}b=await ge({status:y instanceof pe?y.status:500,error:await fe(y,{url:m,params:c,route:h}),url:m,route:h})}Be(b)}}}async function st(a,e){var u;const n=new URL(a);n.pathname=Tt(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const r=await ke(n.href),o=await r.json();if(!r.ok)throw new pe(r.status,o);return(u=o.nodes)==null||u.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=un(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),o}function fe(a,e){return a instanceof pe?a.body:nn.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function je(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");return e.tabIndex=-1,e.focus({preventScroll:!0}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex"),new Promise(r=>{setTimeout(()=>{var o;r((o=getSelection())==null?void 0:o.removeAllRanges())})})}}async function yn({assets:a,env:e,hydrate:n,target:r,version:o}){Lt(a),It(o);const u=dn({target:r});Rt({client:u}),n?await u._hydrate(n):u.goto(location.href,{replaceState:!0}),u._start_router()}export{yn as start};
