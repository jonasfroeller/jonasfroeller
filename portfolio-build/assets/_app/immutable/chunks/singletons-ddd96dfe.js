import{C as d,D as S,E as I,s as T,F as x}from"./index-7c5d9ba8.js";const f=[];function O(e,t){return{subscribe:p(e,t).subscribe}}function p(e,t=d){let n;const s=new Set;function r(a){if(T(e,a)&&(e=a,n)){const u=!f.length;for(const i of s)i[1](),f.push(i,e);if(u){for(let i=0;i<f.length;i+=2)f[i][0](f[i+1]);f.length=0}}}function o(a){r(a(e))}function l(a,u=d){const i=[a,u];return s.add(i),s.size===1&&(n=t(r)||d),a(e),()=>{s.delete(i),s.size===0&&(n(),n=null)}}return{set:r,update:o,subscribe:l}}function P(e,t,n){const s=!Array.isArray(e),r=s?[e]:e,o=t.length<2;return O(n,l=>{let a=!1;const u=[];let i=0,_=d;const g=()=>{if(i)return;_();const c=t(s?u[0]:u,l);o?l(c):_=x(c)?c:d},w=r.map((c,h)=>S(c,R=>{u[h]=R,i&=~(1<<h),a&&g()},()=>{i|=1<<h}));return a=!0,g(),function(){I(w),_()}})}const U="";let y=U;function Y(e){y=e}let A="";function $(e){A=e}const j="sveltekit:snapshot",q="sveltekit:scroll",C="sveltekit:index",v={tap:1,hover:2,viewport:3,eager:4,off:-1};function D(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function K(){return{x:pageXOffset,y:pageYOffset}}function b(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const E={...v,"":v.hover};function k(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function z(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=k(e)}}function G(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const s=e instanceof SVGAElement?e.target.baseVal:e.target,r=!n||!!s||N(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external")||e.hasAttribute("download");return{url:n,external:r,target:s}}function X(e){let t=null,n=null,s=null,r=null,o=e;for(;o&&o!==document.documentElement;)n===null&&(n=b(o,"preload-code")),s===null&&(s=b(o,"preload-data")),t===null&&(t=b(o,"noscroll")),r===null&&(r=b(o,"reload")),o=k(o);return{preload_code:E[n??"off"],preload_data:E[s??"off"],noscroll:t==="off"?!1:t===""?!0:null,reload:r==="off"?!1:r===""?!0:null}}function m(e){const t=p(e);let n=!0;function s(){n=!0,t.update(l=>l)}function r(l){n=!1,t.set(l)}function o(l){let a;return t.subscribe(u=>{(a===void 0||n&&u!==a)&&l(a=u)})}return{notify:s,set:r,subscribe:o}}function L(){const{set:e,subscribe:t}=p(!1);let n;async function s(){clearTimeout(n);const r=await fetch(`${y}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(r.ok){const l=(await r.json()).version!==A;return l&&(e(!0),clearTimeout(n)),l}else throw new Error(`Version check failed: ${r.status}`)}return{subscribe:t,check:s}}function N(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function B(e){e.client}const F={url:m({}),page:m({}),navigating:p(null),updated:L()};export{C as I,v as P,q as S,j as a,G as b,X as c,K as d,U as e,z as f,D as g,B as h,N as i,Y as j,$ as k,P as l,F as s,p as w};