import{S as M,i as Q,s as X,x as V,a as L,k as _,q as B,V as Y,y as D,c as S,l as f,m as v,r as G,h as o,W as Z,n as u,z as K,b as H,K as s,u as R,f as W,t as F,A as J,L as ee}from"../../../../../chunks/index-84409f82.js";import{L as te}from"../../../../../chunks/LegalNav-95f4f454.js";import{S as ae}from"../../../../../chunks/SubCategory-36a47731.js";import{L as se}from"../../../../../chunks/i18n-svelte-b2ad073a.js";function le(i){let l,d,n,g,r,t,$,y=i[0].Pages.legal.terms_and_conditions.title()+"",k,x,C,w=i[0].Pages.legal.terms_and_conditions.content()+"",z,c,h,P,E=i[0].Pages.legal.terms_and_conditions.accept()+"",A,T,m,p;return l=new ae({props:{parent:I,parentCapitalized:i[1],name:U,nameCapitalized:i[2]}}),n=new te({props:{name:U}}),{c(){V(l.$$.fragment),d=L(),V(n.$$.fragment),g=L(),r=_("section"),t=_("div"),$=_("h1"),k=B(y),x=L(),C=new Y(!1),z=L(),c=_("label"),h=_("span"),P=_("strong"),A=B(E),T=L(),m=_("input"),this.h()},l(e){D(l.$$.fragment,e),d=S(e),D(n.$$.fragment,e),g=S(e),r=f(e,"SECTION",{class:!0});var a=v(r);t=f(a,"DIV",{class:!0});var b=v(t);$=f(b,"H1",{class:!0});var j=v($);k=G(j,y),j.forEach(o),x=S(b),C=Z(b,!1),z=S(b),c=f(b,"LABEL",{class:!0});var N=v(c);h=f(N,"SPAN",{class:!0});var q=v(h);P=f(q,"STRONG",{});var O=v(P);A=G(O,E),O.forEach(o),q.forEach(o),T=S(N),m=f(N,"INPUT",{type:!0,class:!0}),N.forEach(o),b.forEach(o),a.forEach(o),this.h()},h(){u($,"class","text-center mb-0 break-all"),C.a=z,u(h,"class","label-text"),u(m,"type","checkbox"),u(m,"class","checkbox"),m.checked=!0,m.disabled=!0,u(c,"class","label justify-start gap-2 cursor-pointer"),u(t,"class","prose"),u(r,"class","flex justify-center mt-4")},m(e,a){K(l,e,a),H(e,d,a),K(n,e,a),H(e,g,a),H(e,r,a),s(r,t),s(t,$),s($,k),s(t,x),C.m(w,t),s(t,z),s(t,c),s(c,h),s(h,P),s(P,A),s(c,T),s(c,m),p=!0},p(e,[a]){(!p||a&1)&&y!==(y=e[0].Pages.legal.terms_and_conditions.title()+"")&&R(k,y),(!p||a&1)&&w!==(w=e[0].Pages.legal.terms_and_conditions.content()+"")&&C.p(w),(!p||a&1)&&E!==(E=e[0].Pages.legal.terms_and_conditions.accept()+"")&&R(A,E)},i(e){p||(W(l.$$.fragment,e),W(n.$$.fragment,e),p=!0)},o(e){F(l.$$.fragment,e),F(n.$$.fragment,e),p=!1},d(e){J(l,e),e&&o(d),J(n,e),e&&o(g),e&&o(r)}}}let I="legal",U="terms-and-conditions";function ne(i,l,d){let n;ee(i,se,t=>d(0,n=t));let g=I.charAt(0).toUpperCase()+I.slice(1),r=U.replaceAll("-"," ").replace(/\b(\w)/g,t=>t.toUpperCase());return[n,g,r]}class me extends M{constructor(l){super(),Q(this,l,ne,le,X,{})}}export{me as default};