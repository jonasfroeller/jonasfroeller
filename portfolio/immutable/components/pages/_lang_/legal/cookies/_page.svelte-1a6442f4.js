import{S as Q,i as W,s as X,x as V,a as E,k as f,q as B,U as Y,y as D,c as L,l as u,m as v,r as G,h as o,V as Z,n as _,z as K,b as U,K as s,u as R,f as F,t as J,A as M,L as ee}from"../../../../../chunks/index-e12a28df.js";import{S as ae}from"../../../../../chunks/SubCategory-f2da3063.js";import{L as te}from"../../../../../chunks/LegalNav-e68241c3.js";import{L as se}from"../../../../../chunks/i18n-svelte-c667e13a.js";function le(i){let l,g,r,$,n,a,h,k=i[0].Pages.legal.cookies.title()+"",S,x,y,w=i[0].Pages.legal.cookies.content()+"",z,c,d,C,P=i[0].Pages.legal.cookies.accept()+"",A,T,p,m;return l=new ae({props:{parent:H,parentCapitalized:i[1],name:I,nameCapitalized:i[2]}}),r=new te({props:{name:I}}),{c(){V(l.$$.fragment),g=E(),V(r.$$.fragment),$=E(),n=f("section"),a=f("div"),h=f("h1"),S=B(k),x=E(),y=new Y(!1),z=E(),c=f("label"),d=f("span"),C=f("strong"),A=B(P),T=E(),p=f("input"),this.h()},l(e){D(l.$$.fragment,e),g=L(e),D(r.$$.fragment,e),$=L(e),n=u(e,"SECTION",{class:!0});var t=v(n);a=u(t,"DIV",{class:!0});var b=v(a);h=u(b,"H1",{class:!0});var j=v(h);S=G(j,k),j.forEach(o),x=L(b),y=Z(b,!1),z=L(b),c=u(b,"LABEL",{class:!0});var N=v(c);d=u(N,"SPAN",{class:!0});var q=v(d);C=u(q,"STRONG",{});var O=v(C);A=G(O,P),O.forEach(o),q.forEach(o),T=L(N),p=u(N,"INPUT",{type:!0,class:!0}),N.forEach(o),b.forEach(o),t.forEach(o),this.h()},h(){_(h,"class","text-center mb-0 break-all"),y.a=z,_(d,"class","label-text"),_(p,"type","checkbox"),_(p,"class","checkbox"),p.checked=!0,p.disabled=!0,_(c,"class","label justify-start gap-2 cursor-pointer"),_(a,"class","prose"),_(n,"class","flex justify-center mt-4")},m(e,t){K(l,e,t),U(e,g,t),K(r,e,t),U(e,$,t),U(e,n,t),s(n,a),s(a,h),s(h,S),s(a,x),y.m(w,a),s(a,z),s(a,c),s(c,d),s(d,C),s(C,A),s(c,T),s(c,p),m=!0},p(e,[t]){(!m||t&1)&&k!==(k=e[0].Pages.legal.cookies.title()+"")&&R(S,k),(!m||t&1)&&w!==(w=e[0].Pages.legal.cookies.content()+"")&&y.p(w),(!m||t&1)&&P!==(P=e[0].Pages.legal.cookies.accept()+"")&&R(A,P)},i(e){m||(F(l.$$.fragment,e),F(r.$$.fragment,e),m=!0)},o(e){J(l.$$.fragment,e),J(r.$$.fragment,e),m=!1},d(e){M(l,e),e&&o(g),M(r,e),e&&o($),e&&o(n)}}}let H="legal",I="cookies";function re(i,l,g){let r;ee(i,se,a=>g(0,r=a));let $=H.charAt(0).toUpperCase()+H.slice(1),n=I.replaceAll("-"," ").replace(/\b(\w)/g,a=>a.toUpperCase());return[r,$,n]}class pe extends Q{constructor(l){super(),W(this,l,re,le,X,{})}}export{pe as default};