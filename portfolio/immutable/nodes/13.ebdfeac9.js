import{S as M,i as Q,s as W,y as O,a as S,k as _,q as U,T as X,z,c as k,l as p,m as v,r as D,h as r,U as Y,n as f,A as F,b as H,F as a,u as G,g as R,d as V,B as J,I as Z}from"../chunks/index.b5fb99b8.js";import{L as ee}from"../chunks/LegalNav.3de3815b.js";import{S as te}from"../chunks/SubCategory.bf5c41d6.js";import{L as ae}from"../chunks/i18n-svelte.6766083c.js";function se(u){let s,d,n,g,i,l,$,y=u[0].Pages.legal.terms_and_conditions.title()+"",x,A,P,N=u[0].Pages.legal.terms_and_conditions.content()+"",T,o,h,E,L=u[0].Pages.legal.terms_and_conditions.accept()+"",w,C,c,m;return s=new te({props:{parent:ne,name:K}}),n=new ee({props:{name:K}}),{c(){O(s.$$.fragment),d=S(),O(n.$$.fragment),g=S(),i=_("section"),l=_("div"),$=_("h1"),x=U(y),A=S(),P=new X(!1),T=S(),o=_("label"),h=_("span"),E=_("strong"),w=U(L),C=S(),c=_("input"),this.h()},l(e){z(s.$$.fragment,e),d=k(e),z(n.$$.fragment,e),g=k(e),i=p(e,"SECTION",{class:!0});var t=v(i);l=p(t,"DIV",{class:!0});var b=v(l);$=p(b,"H1",{class:!0});var j=v($);x=D(j,y),j.forEach(r),A=k(b),P=Y(b,!1),T=k(b),o=p(b,"LABEL",{class:!0});var I=v(o);h=p(I,"SPAN",{class:!0});var q=v(h);E=p(q,"STRONG",{});var B=v(E);w=D(B,L),B.forEach(r),q.forEach(r),C=k(I),c=p(I,"INPUT",{type:!0,class:!0}),I.forEach(r),b.forEach(r),t.forEach(r),this.h()},h(){f($,"class","text-center mb-0 break-all"),P.a=T,f(h,"class","label-text"),f(c,"type","checkbox"),f(c,"class","checkbox"),c.checked=!0,c.disabled=!0,f(o,"class","label justify-start gap-2 cursor-pointer"),f(l,"class","prose"),f(i,"class","flex justify-center mt-4")},m(e,t){F(s,e,t),H(e,d,t),F(n,e,t),H(e,g,t),H(e,i,t),a(i,l),a(l,$),a($,x),a(l,A),P.m(N,l),a(l,T),a(l,o),a(o,h),a(h,E),a(E,w),a(o,C),a(o,c),m=!0},p(e,[t]){(!m||t&1)&&y!==(y=e[0].Pages.legal.terms_and_conditions.title()+"")&&G(x,y),(!m||t&1)&&N!==(N=e[0].Pages.legal.terms_and_conditions.content()+"")&&P.p(N),(!m||t&1)&&L!==(L=e[0].Pages.legal.terms_and_conditions.accept()+"")&&G(w,L)},i(e){m||(R(s.$$.fragment,e),R(n.$$.fragment,e),m=!0)},o(e){V(s.$$.fragment,e),V(n.$$.fragment,e),m=!1},d(e){J(s,e),e&&r(d),J(n,e),e&&r(g),e&&r(i)}}}let ne="legal",K="terms-and-conditions";function le(u,s,d){let n;return Z(u,ae,g=>d(0,n=g)),[n]}class me extends M{constructor(s){super(),Q(this,s,le,se,W,{})}}export{me as component};