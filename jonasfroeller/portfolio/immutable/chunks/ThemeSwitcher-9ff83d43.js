import{S as Y,i as x,s as $,e as L,b as y,P as T,C as P,h,L as C,Q as A,k as g,l as v,m as p,n as m,R as ee,q as E,r as S,K as d,a as B,c as U,U as j,o as le,M as I,N as Z,E as te}from"./index-5a4ebd86.js";import{p as ae}from"./stores-6492ca17.js";import{l as se,s as oe}from"./i18n-svelte-e9480a11.js";import{l as q}from"./i18n-util-9de3611c.js";import{r as R,l as ne}from"./utils-4c7883ec.js";import{w as ce}from"./index-f9301693.js";class z{static async save(e,l){localStorage.setItem(e,JSON.stringify(l))}static async load(e){return JSON.parse(localStorage.getItem(e))}}function D(n){return(n.language==null||n.language==null||n.language=="")&&(n.language="en"),(n.theme==null||n.theme==null||n.theme=="")&&(n.theme="night"),n}class O{static async save(e){e=D(e),document.documentElement.setAttribute("data-theme",e.theme),document.documentElement.setAttribute("lang",e.language),z.save("jf-portfolio-styleConfig",e)}static async load(){{let e=await z.load("jf-portfolio-styleConfig");return e!=null&&e!=null?e=D(e):e={language:"en",theme:"night"},document.documentElement.setAttribute("data-theme",e.theme),document.documentElement.setAttribute("lang",e.language),e}}}const w=ce({});function F(n,e,l){const o=n.slice();return o[8]=e[l],o}function G(n,e,l){const o=n.slice();return o[8]=e[l],o}function re(n){let e,l=q,o=[];for(let t=0;t<l.length;t+=1)o[t]=W(F(n,l,t));return{c(){e=g("ul");for(let t=0;t<o.length;t+=1)o[t].c();this.h()},l(t){e=v(t,"UL",{class:!0});var s=p(e);for(let a=0;a<o.length;a+=1)o[a].l(s);s.forEach(h),this.h()},h(){m(e,"class","flex gap-2")},m(t,s){y(t,e,s);for(let a=0;a<o.length;a+=1)o[a].m(e,null)},p(t,s){if(s&6){l=q;let a;for(a=0;a<l.length;a+=1){const c=F(t,l,a);o[a]?o[a].p(c,s):(o[a]=W(c),o[a].c(),o[a].m(e,null))}for(;a<o.length;a+=1)o[a].d(1);o.length=l.length}},d(t){t&&h(e),ee(o,t)}}}function ie(n){let e,l,o,t=q,s=[];for(let a=0;a<t.length;a+=1)s[a]=X(G(n,t,a));return{c(){e=g("select"),l=g("option"),o=E("Language");for(let a=0;a<s.length;a+=1)s[a].c();this.h()},l(a){e=v(a,"SELECT",{class:!0});var c=p(e);l=v(c,"OPTION",{});var r=p(l);o=S(r,"Language"),r.forEach(h);for(let u=0;u<s.length;u+=1)s[u].l(c);c.forEach(h),this.h()},h(){l.disabled=!0,l.selected=!0,l.__value="Language",l.value=l.__value,m(e,"class","select select-bordered w-auto")},m(a,c){y(a,e,c),d(e,l),d(l,o);for(let r=0;r<s.length;r+=1)s[r].m(e,null)},p(a,c){if(c&2){t=q;let r;for(r=0;r<t.length;r+=1){const u=G(a,t,r);s[r]?s[r].p(u,c):(s[r]=X(u),s[r].c(),s[r].m(e,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=t.length}},d(a){a&&h(e),ee(s,a)}}}function W(n){let e,l,o=n[8]+"",t,s,a,c;function r(){return n[5](n[8])}return{c(){e=g("li"),l=g("button"),t=E(o),s=B(),this.h()},l(u){e=v(u,"LI",{});var f=p(e);l=v(f,"BUTTON",{type:!0,class:!0});var i=p(l);t=S(i,o),i.forEach(h),s=U(f),f.forEach(h),this.h()},h(){m(l,"type","button"),m(l,"class","link after:bg-primary text-xl"),j(l,"active",n[8]===n[1])},m(u,f){y(u,e,f),d(e,l),d(l,t),d(e,s),a||(c=T(l,"click",r),a=!0)},p(u,f){n=u,f&2&&j(l,"active",n[8]===n[1])},d(u){u&&h(e),a=!1,c()}}}function X(n){let e,l=n[8]+"",o,t;return{c(){e=g("option"),o=E(l),t=B(),this.h()},l(s){e=v(s,"OPTION",{});var a=p(e);o=S(a,l),t=U(a),a.forEach(h),this.h()},h(){e.__value=`\r
				`+n[8]+`\r
			`,e.value=e.__value,j(e,"active",n[8]===n[1])},m(s,a){y(s,e,a),d(e,o),d(e,t)},p(s,a){a&2&&j(e,"active",s[8]===s[1])},d(s){s&&h(e)}}}function ue(n){let e,l,o;function t(c,r){return c[0]?ie:re}let s=t(n),a=s(n);return{c(){a.c(),e=L()},l(c){a.l(c),e=L()},m(c,r){a.m(c,r),y(c,e,r),l||(o=T(window,"popstate",n[3]),l=!0)},p(c,[r]){s===(s=t(c))&&a?a.p(c,r):(a.d(1),a=s(c),a&&(a.c(),a.m(e.parentNode,e)))},i:P,o:P,d(c){a.d(c),c&&h(e),l=!1,o()}}}function he(n,e,l){let o,t,s;C(n,ae,i=>l(4,o=i)),C(n,se,i=>l(1,t=i)),C(n,w,i=>l(6,s=i));const a=!1;let{asSelect:c=!1}=e;const r=async(i,_=!0)=>{A(w,s=await O.load(),s),A(w,s.language=i,s),await O.save(s),!(!i||t===i)&&(await ne(i),oe(i),document.querySelector("html").setAttribute("lang",i),_&&history.pushState({locale:i},"",R(location,i,a)))},u=async({state:i})=>r(i.locale,!1),f=i=>r(i);return n.$$set=i=>{"asSelect"in i&&l(0,c=i.asSelect)},n.$$.update=()=>{if(n.$$.dirty&16){const i=o.params.lang;r(i,!1),history.replaceState({...history.state,locale:i},"",R(location,i,a))}},[c,t,r,u,o,f]}class Ee extends Y{constructor(e){super(),x(this,e,he,ue,$,{asSelect:0})}}function fe(n){let e,l,o,t,s,a,c,r,u,f;return{c(){e=g("label"),l=g("input"),o=B(),t=I("svg"),s=I("path"),a=B(),c=I("svg"),r=I("path"),this.h()},l(i){e=v(i,"LABEL",{class:!0});var _=p(e);l=v(_,"INPUT",{type:!0}),o=U(_),t=Z(_,"svg",{class:!0,xmlns:!0,viewBox:!0});var N=p(t);s=Z(N,"path",{d:!0}),p(s).forEach(h),N.forEach(h),a=U(_),c=Z(_,"svg",{class:!0,xmlns:!0,viewBox:!0});var b=p(c);r=Z(b,"path",{d:!0}),p(r).forEach(h),b.forEach(h),_.forEach(h),this.h()},h(){m(l,"type","checkbox"),m(s,"d","M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"),m(t,"class","swap-off fill-current w-10 h-10"),m(t,"xmlns","http://www.w3.org/2000/svg"),m(t,"viewBox","0 0 24 24"),m(r,"d","M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"),m(c,"class","swap-on fill-current w-10 h-10"),m(c,"xmlns","http://www.w3.org/2000/svg"),m(c,"viewBox","0 0 24 24"),m(e,"class","swap swap-rotate")},m(i,_){y(i,e,_),d(e,l),l.checked=n[2],d(e,o),d(e,t),d(t,s),d(e,a),d(e,c),d(c,r),u||(f=[T(l,"change",n[7]),T(l,"click",n[8])],u=!0)},p(i,_){_&4&&(l.checked=i[2])},d(i){i&&h(e),u=!1,te(f)}}}function _e(n){let e,l,o,t,s,a,c,r,u,f,i,_,N;return{c(){e=g("select"),l=g("option"),o=E("Color Theme"),t=g("option"),s=E("dark"),c=g("option"),r=E("light"),f=g("option"),i=E("system"),this.h()},l(b){e=v(b,"SELECT",{class:!0});var k=p(e);l=v(k,"OPTION",{});var V=p(l);o=S(V,"Color Theme"),V.forEach(h),t=v(k,"OPTION",{});var J=p(t);s=S(J,"dark"),J.forEach(h),c=v(k,"OPTION",{});var K=p(c);r=S(K,"light"),K.forEach(h),f=v(k,"OPTION",{});var Q=p(f);i=S(Q,"system"),Q.forEach(h),k.forEach(h),this.h()},h(){l.disabled=!0,l.selected=!0,l.__value="Color Theme",l.value=l.__value,t.__value="true",t.value=t.__value,t.selected=a=n[2]==!0,c.__value="false",c.value=c.__value,c.selected=u=n[2]==!1,f.__value=window.matchMedia("prefers-color-scheme: dark").matches,f.value=f.__value,m(e,"class","select select-bordered w-auto")},m(b,k){y(b,e,k),d(e,l),d(l,o),d(e,t),d(t,s),d(e,c),d(c,r),d(e,f),d(f,i),_||(N=T(e,"change",n[6]),_=!0)},p(b,k){k&4&&a!==(a=b[2]==!0)&&(t.selected=a),k&4&&u!==(u=b[2]==!1)&&(c.selected=u)},d(b){b&&h(e),_=!1,N()}}}function de(n){let e,l,o;return{c(){e=g("input"),this.h()},l(t){e=v(t,"INPUT",{type:!0,class:!0}),this.h()},h(){m(e,"type","checkbox"),m(e,"class","toggle")},m(t,s){y(t,e,s),e.checked=n[2],l||(o=[T(e,"change",n[4]),T(e,"click",n[5])],l=!0)},p(t,s){s&4&&(e.checked=t[2])},d(t){t&&h(e),l=!1,te(o)}}}function me(n){let e;function l(s,a){return s[0]?de:s[1]?_e:fe}let o=l(n),t=o(n);return{c(){t.c(),e=L()},l(s){t.l(s),e=L()},m(s,a){t.m(s,a),y(s,e,a)},p(s,[a]){o===(o=l(s))&&t?t.p(s,a):(t.d(1),t=o(s),t&&(t.c(),t.m(e.parentNode,e)))},i:P,o:P,d(s){t.d(s),s&&h(e)}}}let M="night",H="cmyk";function pe(n,e,l){let o,t;C(n,w,_=>l(3,t=_));let{asToggle:s=!1}=e,{asSelect:a=!1}=e;le(async()=>{A(w,t=await O.load(),t),l(2,o=t.theme==M)});function c(){o=this.checked,l(2,o)}const r=()=>{l(2,o=!o),A(w,t.theme=o==!0?M:H,t),O.save(t)},u=()=>{l(2,o=!o),A(w,t.theme=o==!0?M:H,t),O.save(t)};function f(){o=this.checked,l(2,o)}const i=()=>{l(2,o=!o),A(w,t.theme=o==!0?M:H,t),O.save(t)};return n.$$set=_=>{"asToggle"in _&&l(0,s=_.asToggle),"asSelect"in _&&l(1,a=_.asSelect)},l(2,o=window.matchMedia("prefers-color-scheme: dark").matches),[s,a,o,t,c,r,u,f,i]}class Se extends Y{constructor(e){super(),x(this,e,pe,me,$,{asToggle:0,asSelect:1})}}export{Ee as L,Se as T,w as c,O as s};
