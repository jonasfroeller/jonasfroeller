import{S as R,i as U,s as V,k as g,q as I,a as B,l as P,m as k,r as K,h as u,c as D,n as s,b as W,K as o,u as O,C as M,L as Q}from"./index-70fcf4f1.js";import{b}from"./paths-24bb4e9c.js";import{l as X,L as Y}from"./i18n-svelte-89404c9e.js";function Z(t){let l,i,_=t[2].Pages.legal.terms_and_conditions.title()+"",m,h,r,T,n,v=t[2].Pages.legal.privacy_policy.title()+"",E,L,y,w,c,d=t[2].Pages.legal.cookies.title()+"",A,C,S,z,f,p=t[2].Pages.legal.imprint.title()+"",q,N,j;return{c(){l=g("section"),i=g("a"),m=I(_),T=B(),n=g("a"),E=I(v),w=B(),c=g("a"),A=I(d),z=B(),f=g("a"),q=I(p),this.h()},l(a){l=P(a,"SECTION",{class:!0});var e=k(l);i=P(e,"A",{href:!0,class:!0});var F=k(i);m=K(F,_),F.forEach(u),T=D(e),n=P(e,"A",{href:!0,class:!0});var G=k(n);E=K(G,v),G.forEach(u),w=D(e),c=P(e,"A",{href:!0,class:!0});var H=k(c);A=K(H,d),H.forEach(u),z=D(e),f=P(e,"A",{href:!0,class:!0});var J=k(f);q=K(J,p),J.forEach(u),e.forEach(u),this.h()},h(){s(i,"href",h=b+"/"+t[1]+"/legal/terms-and-conditions"),s(i,"class",r="tab tab-bordered "+(t[0]==="terms-and-conditions"?"tab-active":"")),s(n,"href",L=b+"/"+t[1]+"/legal/privacy-policy"),s(n,"class",y="tab tab-bordered "+(t[0]==="privacy-policy"?"tab-active":"")),s(c,"href",C=b+"/"+t[1]+"/legal/cookies"),s(c,"class",S="tab tab-bordered "+(t[0]==="cookies"?"tab-active":"")),s(f,"href",N=b+"/"+t[1]+"/legal/imprint"),s(f,"class",j="tab tab-bordered "+(t[0]==="imprint"?"tab-active":"")),s(l,"class","tabs flex justify-center")},m(a,e){W(a,l,e),o(l,i),o(i,m),o(l,T),o(l,n),o(n,E),o(l,w),o(l,c),o(c,A),o(l,z),o(l,f),o(f,q)},p(a,[e]){e&4&&_!==(_=a[2].Pages.legal.terms_and_conditions.title()+"")&&O(m,_),e&2&&h!==(h=b+"/"+a[1]+"/legal/terms-and-conditions")&&s(i,"href",h),e&1&&r!==(r="tab tab-bordered "+(a[0]==="terms-and-conditions"?"tab-active":""))&&s(i,"class",r),e&4&&v!==(v=a[2].Pages.legal.privacy_policy.title()+"")&&O(E,v),e&2&&L!==(L=b+"/"+a[1]+"/legal/privacy-policy")&&s(n,"href",L),e&1&&y!==(y="tab tab-bordered "+(a[0]==="privacy-policy"?"tab-active":""))&&s(n,"class",y),e&4&&d!==(d=a[2].Pages.legal.cookies.title()+"")&&O(A,d),e&2&&C!==(C=b+"/"+a[1]+"/legal/cookies")&&s(c,"href",C),e&1&&S!==(S="tab tab-bordered "+(a[0]==="cookies"?"tab-active":""))&&s(c,"class",S),e&4&&p!==(p=a[2].Pages.legal.imprint.title()+"")&&O(q,p),e&2&&N!==(N=b+"/"+a[1]+"/legal/imprint")&&s(f,"href",N),e&1&&j!==(j="tab tab-bordered "+(a[0]==="imprint"?"tab-active":""))&&s(f,"class",j)},i:M,o:M,d(a){a&&u(l)}}}function $(t,l,i){let _,m;Q(t,X,r=>i(1,_=r)),Q(t,Y,r=>i(2,m=r));let{name:h="terms-and-conditions"}=l;return t.$$set=r=>{"name"in r&&i(0,h=r.name)},[h,_,m]}class te extends R{constructor(l){super(),U(this,l,$,Z,V,{name:0})}}export{te as L};
