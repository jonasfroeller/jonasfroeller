import{S as ge,i as ve,s as be,y as te,a as C,k as d,q as S,z as re,c as P,l as m,m as g,r as q,h as c,n as u,A as oe,b as k,F as _,u as se,g as le,d as ae,B as ne,R as ce,I as ye,O as A,e as ie,Q as Ee,G as me}from"../chunks/index.b5fb99b8.js";import{S as ke}from"../chunks/SubCategory.42709bb5.js";import{A as we}from"../chunks/AboutNav.3356eae9.js";import{L as je}from"../chunks/i18n-svelte.c6c0d809.js";const Ie=""+new URL("../assets/photography-1.e9c315a4.jpg",import.meta.url).href,Le=""+new URL("../assets/photography-2.436a80e6.jpg",import.meta.url).href,Re=""+new URL("../assets/photography-3.2353bd27.jpg",import.meta.url).href,$e=""+new URL("../assets/photography-4.0bf398b2.jpg",import.meta.url).href,De=""+new URL("../assets/photography-5.f8f6a28a.jpg",import.meta.url).href,Ue=""+new URL("../assets/photography-6.9522d8dc.jpg",import.meta.url).href,Ve=""+new URL("../assets/photography-7.12a01934.jpg",import.meta.url).href,Ce=""+new URL("../assets/photography-8.a20dfd32.jpg",import.meta.url).href,Pe=""+new URL("../assets/photography-9.937d1a27.jpg",import.meta.url).href,Ae=""+new URL("../assets/photography-10.24772200.jpg",import.meta.url).href,Se=""+new URL("../assets/photography-11.a7c05b48.jpg",import.meta.url).href,qe=""+new URL("../assets/photography-12.3e1ca55f.jpg",import.meta.url).href;function he(l,e,s){const o=l.slice();return o[6]=e[s],o[8]=s,o}function pe(l,e,s){const o=l.slice();return o[6]=e[s],o[8]=s,o}function fe(l){let e,s,o,n;return{c(){e=d("div"),s=d("p"),o=d("em"),n=S("Couldn't load images!"),this.h()},l(r){e=m(r,"DIV",{class:!0});var a=g(e);s=m(a,"P",{});var f=g(s);o=m(f,"EM",{});var h=g(o);n=q(h,"Couldn't load images!"),h.forEach(c),f.forEach(c),a.forEach(c),this.h()},h(){u(e,"class","flex justify-center")},m(r,a){k(r,e,a),_(e,s),_(s,o),_(o,n)},p:A,d(r){r&&c(e)}}}function ze(l){let e,s,o,n,r;function a(p,w){return navigator&&navigator.userAgent&&!navigator.userAgent.includes("js_disabled")?Oe:Ne}let h=a()(l);return{c(){e=d("div"),s=d("div"),o=d("div"),n=d("div"),r=C(),h.c(),this.h()},l(p){e=m(p,"DIV",{class:!0});var w=g(e);s=m(w,"DIV",{class:!0});var j=g(s);o=m(j,"DIV",{class:!0});var I=g(o);n=m(I,"DIV",{class:!0}),g(n).forEach(c),I.forEach(c),j.forEach(c),r=P(w),h.l(w),w.forEach(c),this.h()},h(){u(n,"class","border-4 svelte-qozfhh"),u(o,"class","loading-animation svelte-qozfhh"),u(s,"class","loading-wrapper svelte-qozfhh"),u(e,"class","flex flex-col justify-center w-full")},m(p,w){k(p,e,w),_(e,s),_(s,o),_(o,n),_(e,r),h.m(e,null)},p:A,d(p){p&&c(e),h.d()}}}function Me(l){let e,s;return{c(){e=d("img"),this.h()},l(o){e=m(o,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Ee(e.src,s=l[6])||u(e,"src",s),u(e,"alt","photography-"+(l[8]+1)),u(e,"class","w-full object-cover rounded-2xl")},m(o,n){k(o,e,n)},p:A,d(o){o&&c(e)}}}function Ne(l){return{c:A,l:A,m:A,d:A}}function Oe(l){let e,s,o,n;return{c(){e=d("div"),s=d("p"),o=d("em"),n=S("Couldn't load images!"),this.h()},l(r){e=m(r,"DIV",{class:!0});var a=g(e);s=m(a,"P",{});var f=g(s);o=m(f,"EM",{});var h=g(o);n=q(h,"Couldn't load images!"),h.forEach(c),f.forEach(c),a.forEach(c),this.h()},h(){u(e,"class","flex justify-center")},m(r,a){k(r,e,a),_(e,s),_(s,o),_(o,n)},d(r){r&&c(e)}}}function ue(l){let e,s;function o(a,f){return a[0]?Me:ze}let n=o(l),r=n(l);return{c(){e=d("div"),r.c(),s=C(),this.h()},l(a){e=m(a,"DIV",{id:!0,class:!0});var f=g(e);r.l(f),s=P(f),f.forEach(c),this.h()},h(){u(e,"id","photography-"+(l[8]+1)),u(e,"class","carousel-item w-full rounded-2xl pt-4")},m(a,f){k(a,e,f),r.m(e,null),_(e,s)},p(a,f){n===(n=o(a))&&r?r.p(a,f):(r.d(1),r=n(a),r&&(r.c(),r.m(e,s)))},d(a){a&&c(e),r.d()}}}function Te(l){let e,s=l[8]+1+"",o,n,r,a;function f(){return l[5](l[8])}return{c(){e=d("a"),o=S(s),this.h()},l(h){e=m(h,"A",{href:!0,class:!0});var p=g(e);o=q(p,s),p.forEach(c),this.h()},h(){u(e,"href","#photography-"+(l[8]+1)),u(e,"class",n="btn btn-s text-lg text-secondary "+(l[1]=="#photography-"+(l[8]+1)?"border border-secondary hover:border-secondary bg-transparent hover:bg-transparent":""))},m(h,p){k(h,e,p),_(e,o),r||(a=me(e,"click",f),r=!0)},p(h,p){l=h,p&2&&n!==(n="btn btn-s text-lg text-secondary "+(l[1]=="#photography-"+(l[8]+1)?"border border-secondary hover:border-secondary bg-transparent hover:bg-transparent":""))&&u(e,"class",n)},d(h){h&&c(e),r=!1,a()}}}function xe(l){let e,s=l[8]+1+"",o,n,r,a;function f(){return l[4](l[8])}return{c(){e=d("a"),o=S(s),this.h()},l(h){e=m(h,"A",{href:!0,class:!0});var p=g(e);o=q(p,s),p.forEach(c),this.h()},h(){u(e,"href","#photography-"+(l[8]+1)),u(e,"class",n="btn btn-s text-lg text-primary "+(l[1]=="#photography-"+(l[8]+1)?"border border-primary hover:border-primary bg-transparent hover:bg-transparent":""))},m(h,p){k(h,e,p),_(e,o),r||(a=me(e,"click",f),r=!0)},p(h,p){l=h,p&2&&n!==(n="btn btn-s text-lg text-primary "+(l[1]=="#photography-"+(l[8]+1)?"border border-primary hover:border-primary bg-transparent hover:bg-transparent":""))&&u(e,"class",n)},d(h){h&&c(e),r=!1,a()}}}function _e(l){let e;function s(r,a){return r[8]%2==0?xe:Te}let n=s(l)(l);return{c(){n.c(),e=ie()},l(r){n.l(r),e=ie()},m(r,a){n.m(r,a),k(r,e,a)},p(r,a){n.p(r,a)},d(r){n.d(r),r&&c(e)}}}function Ge(l){let e,s,o,n,r,a,f,h=l[2].Pages.about.photography.title()+"",p,w,j,I,L,H,D,G,U,z,T,M,Q,x=l[2].Pages.about.photography.note()+"",B,N;e=new ke({props:{parent:Be,name:de}}),o=new we({props:{name:de}});let R=l[3],b=[];for(let t=0;t<R.length;t+=1)b[t]=ue(pe(l,R,t));let y=null;R.length||(y=fe());let O=l[3],E=[];for(let t=0;t<O.length;t+=1)E[t]=_e(he(l,O,t));return{c(){te(e.$$.fragment),s=C(),te(o.$$.fragment),n=C(),r=d("section"),a=d("div"),f=d("h1"),p=S(h),w=C(),j=d("section"),I=d("div"),L=d("div");for(let t=0;t<b.length;t+=1)b[t].c();y&&y.c(),H=C(),D=d("div");for(let t=0;t<E.length;t+=1)E[t].c();G=C(),U=d("section"),z=d("div"),T=d("p"),M=d("em"),Q=S("~ "),B=S(x),this.h()},l(t){re(e.$$.fragment,t),s=P(t),re(o.$$.fragment,t),n=P(t),r=m(t,"SECTION",{class:!0});var v=g(r);a=m(v,"DIV",{class:!0});var i=g(a);f=m(i,"H1",{class:!0});var $=g(f);p=q($,h),$.forEach(c),i.forEach(c),v.forEach(c),w=P(t),j=m(t,"SECTION",{class:!0});var W=g(j);I=m(W,"DIV",{class:!0});var F=g(I);L=m(F,"DIV",{class:!0});var J=g(L);for(let V=0;V<b.length;V+=1)b[V].l(J);y&&y.l(J),J.forEach(c),H=P(F),D=m(F,"DIV",{class:!0});var X=g(D);for(let V=0;V<E.length;V+=1)E[V].l(X);X.forEach(c),F.forEach(c),W.forEach(c),G=P(t),U=m(t,"SECTION",{class:!0});var Y=g(U);z=m(Y,"DIV",{class:!0});var Z=g(z);T=m(Z,"P",{});var ee=g(T);M=m(ee,"EM",{});var K=g(M);Q=q(K,"~ "),B=q(K,x),K.forEach(c),ee.forEach(c),Z.forEach(c),Y.forEach(c),this.h()},h(){u(f,"class","text-center mb-0"),u(a,"class","prose"),u(r,"class","flex justify-center mt-4"),u(L,"class","carousel rounded-2xl mt-4"),u(D,"class","flex justify-center flex-wrap w-full py-2 gap-2"),u(I,"class","w-[60dvw]"),u(j,"class","flex justify-center"),u(z,"class","prose"),u(U,"class","flex justify-center mt-4")},m(t,v){oe(e,t,v),k(t,s,v),oe(o,t,v),k(t,n,v),k(t,r,v),_(r,a),_(a,f),_(f,p),k(t,w,v),k(t,j,v),_(j,I),_(I,L);for(let i=0;i<b.length;i+=1)b[i]&&b[i].m(L,null);y&&y.m(L,null),_(I,H),_(I,D);for(let i=0;i<E.length;i+=1)E[i]&&E[i].m(D,null);k(t,G,v),k(t,U,v),_(U,z),_(z,T),_(T,M),_(M,Q),_(M,B),N=!0},p(t,[v]){if((!N||v&4)&&h!==(h=t[2].Pages.about.photography.title()+"")&&se(p,h),v&9){R=t[3];let i;for(i=0;i<R.length;i+=1){const $=pe(t,R,i);b[i]?b[i].p($,v):(b[i]=ue($),b[i].c(),b[i].m(L,null))}for(;i<b.length;i+=1)b[i].d(1);b.length=R.length,!R.length&&y?y.p(t,v):R.length?y&&(y.d(1),y=null):(y=fe(),y.c(),y.m(L,null))}if(v&2){O=t[3];let i;for(i=0;i<O.length;i+=1){const $=he(t,O,i);E[i]?E[i].p($,v):(E[i]=_e($),E[i].c(),E[i].m(D,null))}for(;i<E.length;i+=1)E[i].d(1);E.length=O.length}(!N||v&4)&&x!==(x=t[2].Pages.about.photography.note()+"")&&se(B,x)},i(t){N||(le(e.$$.fragment,t),le(o.$$.fragment,t),N=!0)},o(t){ae(e.$$.fragment,t),ae(o.$$.fragment,t),N=!1},d(t){ne(e,t),t&&c(s),ne(o,t),t&&c(n),t&&c(r),t&&c(w),t&&c(j),ce(b,t),y&&y.d(),ce(E,t),t&&c(G),t&&c(U)}}}let Be="about",de="photography";function Fe(l,e,s){let o,n;ye(l,je,p=>s(2,n=p));let r=[Ie,Le,Re,$e,De,Ue,Ve,Ce,Pe,Ae,Se,qe],a=!1;r.forEach((p,w)=>{{const j=new Image;j.onload=()=>{w===r.length-1&&s(0,a=!0)},j.src=p}});const f=p=>s(1,o=`#photography-${p+1}`),h=p=>s(1,o=`#photography-${p+1}`);return s(1,o="#photography-1"),[a,o,n,r,f,h]}class We extends ge{constructor(e){super(),ve(this,e,Fe,Ge,be,{})}}export{We as component};
