import{S as N,i as j,s as z,y as E,a as d,k as b,q as A,T as B,z as C,c as y,l as L,m as P,r as D,h as c,U as F,n as S,A as H,b as w,F as h,u as O,g as I,d as T,B as k,I as U}from"../chunks/index.b5fb99b8.js";import{L as V}from"../chunks/LegalNav.3de3815b.js";import{S as G}from"../chunks/SubCategory.bf5c41d6.js";import{L as J}from"../chunks/i18n-svelte.6766083c.js";function K(p){let a,l,s,i,r,n,m,f=p[0].Pages.legal.imprint.title()+"",_,v,u,g=p[0].Pages.legal.imprint.content()+"",o;return a=new G({props:{parent:M,name:q}}),s=new V({props:{name:q}}),{c(){E(a.$$.fragment),l=d(),E(s.$$.fragment),i=d(),r=b("section"),n=b("div"),m=b("h1"),_=A(f),v=d(),u=new B(!1),this.h()},l(t){C(a.$$.fragment,t),l=y(t),C(s.$$.fragment,t),i=y(t),r=L(t,"SECTION",{class:!0});var e=P(r);n=L(e,"DIV",{class:!0});var $=P(n);m=L($,"H1",{class:!0});var x=P(m);_=D(x,f),x.forEach(c),v=y($),u=F($,!1),$.forEach(c),e.forEach(c),this.h()},h(){S(m,"class","text-center mb-0 break-all"),u.a=null,S(n,"class","prose"),S(r,"class","flex justify-center mt-4")},m(t,e){H(a,t,e),w(t,l,e),H(s,t,e),w(t,i,e),w(t,r,e),h(r,n),h(n,m),h(m,_),h(n,v),u.m(g,n),o=!0},p(t,[e]){(!o||e&1)&&f!==(f=t[0].Pages.legal.imprint.title()+"")&&O(_,f),(!o||e&1)&&g!==(g=t[0].Pages.legal.imprint.content()+"")&&u.p(g)},i(t){o||(I(a.$$.fragment,t),I(s.$$.fragment,t),o=!0)},o(t){T(a.$$.fragment,t),T(s.$$.fragment,t),o=!1},d(t){k(a,t),t&&c(l),k(s,t),t&&c(i),t&&c(r)}}}let M="legal",q="imprint";function Q(p,a,l){let s;return U(p,J,i=>l(0,s=i)),[s]}class Z extends N{constructor(a){super(),j(this,a,Q,K,z,{})}}export{Z as component};