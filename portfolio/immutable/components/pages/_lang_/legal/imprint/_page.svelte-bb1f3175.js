import{S as I,i as N,s as T,x,a as v,k as C,q as V,U as j,y as A,c as b,l as y,m as L,r as D,h as c,V as K,n as w,z as H,b as z,K as d,u as O,f as U,t as k,A as q,L as B}from"../../../../../chunks/index-e12a28df.js";import{L as F}from"../../../../../chunks/LegalNav-e68241c3.js";import{S as G}from"../../../../../chunks/SubCategory-f2da3063.js";import{L as J}from"../../../../../chunks/i18n-svelte-c667e13a.js";function M(r){let s,i,l,m,n,t,o,f=r[0].Pages.legal.imprint.title()+"",_,h,u,g=r[0].Pages.legal.imprint.content()+"",p;return s=new G({props:{parent:P,parentCapitalized:r[1],name:S,nameCapitalized:r[2]}}),l=new F({props:{name:S}}),{c(){x(s.$$.fragment),i=v(),x(l.$$.fragment),m=v(),n=C("section"),t=C("div"),o=C("h1"),_=V(f),h=v(),u=new j(!1),this.h()},l(e){A(s.$$.fragment,e),i=b(e),A(l.$$.fragment,e),m=b(e),n=y(e,"SECTION",{class:!0});var a=L(n);t=y(a,"DIV",{class:!0});var $=L(t);o=y($,"H1",{class:!0});var E=L(o);_=D(E,f),E.forEach(c),h=b($),u=K($,!1),$.forEach(c),a.forEach(c),this.h()},h(){w(o,"class","text-center mb-0 break-all"),u.a=null,w(t,"class","prose"),w(n,"class","flex justify-center mt-4")},m(e,a){H(s,e,a),z(e,i,a),H(l,e,a),z(e,m,a),z(e,n,a),d(n,t),d(t,o),d(o,_),d(t,h),u.m(g,t),p=!0},p(e,[a]){(!p||a&1)&&f!==(f=e[0].Pages.legal.imprint.title()+"")&&O(_,f),(!p||a&1)&&g!==(g=e[0].Pages.legal.imprint.content()+"")&&u.p(g)},i(e){p||(U(s.$$.fragment,e),U(l.$$.fragment,e),p=!0)},o(e){k(s.$$.fragment,e),k(l.$$.fragment,e),p=!1},d(e){q(s,e),e&&c(i),q(l,e),e&&c(m),e&&c(n)}}}let P="legal",S="imprint";function Q(r,s,i){let l;B(r,J,t=>i(0,l=t));let m=P.charAt(0).toUpperCase()+P.slice(1),n=S.replaceAll("-"," ").replace(/\b(\w)/g,t=>t.toUpperCase());return[l,m,n]}class Z extends I{constructor(s){super(),N(this,s,Q,M,T,{})}}export{Z as default};
