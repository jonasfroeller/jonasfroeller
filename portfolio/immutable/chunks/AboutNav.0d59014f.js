import{S as U,i as V,s as W,k as d,q as j,a as D,l as P,m as A,r as k,h as g,c as G,n as l,b as X,F as n,u as F,O as Q,I as R}from"./index.b5fb99b8.js";import{b as f}from"./paths.929e6928.js";import{l as Y,L as Z}from"./i18n-svelte.24e61de5.js";function y(t){let s,o,h=t[2].Pages.about.profile.title()+"",c,_,r,w,i,p=t[2].Pages.about.languages.navTitle()+"",E,T,L,z,b,v=t[2].Pages.about.technologies.navTitle()+"",S,q,C,B,u,m=t[2].Pages.about.photography.title()+"",I,N,O;return{c(){s=d("section"),o=d("a"),c=j(h),w=D(),i=d("a"),E=j(p),z=D(),b=d("a"),S=j(v),B=D(),u=d("a"),I=j(m),this.h()},l(e){s=P(e,"SECTION",{class:!0});var a=A(s);o=P(a,"A",{href:!0,class:!0});var H=A(o);c=k(H,h),H.forEach(g),w=G(a),i=P(a,"A",{href:!0,class:!0});var J=A(i);E=k(J,p),J.forEach(g),z=G(a),b=P(a,"A",{href:!0,class:!0});var K=A(b);S=k(K,v),K.forEach(g),B=G(a),u=P(a,"A",{href:!0,class:!0});var M=A(u);I=k(M,m),M.forEach(g),a.forEach(g),this.h()},h(){l(o,"href",_=f+"/"+t[1]+"/about/profile"),l(o,"class",r="tab tab-bordered "+(t[0]==="profile"?"tab-active":"")),l(i,"href",T=f+"/"+t[1]+"/about/languages"),l(i,"class",L="tab tab-bordered "+(t[0]==="languages"?"tab-active":"")),l(b,"href",q=f+"/"+t[1]+"/about/technologies"),l(b,"class",C="tab tab-bordered "+(t[0]==="technologies"?"tab-active":"")),l(u,"href",N=f+"/"+t[1]+"/about/photography"),l(u,"class",O="tab tab-bordered "+(t[0]==="photography"?"tab-active":"")),l(s,"class","tabs flex justify-center")},m(e,a){X(e,s,a),n(s,o),n(o,c),n(s,w),n(s,i),n(i,E),n(s,z),n(s,b),n(b,S),n(s,B),n(s,u),n(u,I)},p(e,[a]){a&4&&h!==(h=e[2].Pages.about.profile.title()+"")&&F(c,h),a&2&&_!==(_=f+"/"+e[1]+"/about/profile")&&l(o,"href",_),a&1&&r!==(r="tab tab-bordered "+(e[0]==="profile"?"tab-active":""))&&l(o,"class",r),a&4&&p!==(p=e[2].Pages.about.languages.navTitle()+"")&&F(E,p),a&2&&T!==(T=f+"/"+e[1]+"/about/languages")&&l(i,"href",T),a&1&&L!==(L="tab tab-bordered "+(e[0]==="languages"?"tab-active":""))&&l(i,"class",L),a&4&&v!==(v=e[2].Pages.about.technologies.navTitle()+"")&&F(S,v),a&2&&q!==(q=f+"/"+e[1]+"/about/technologies")&&l(b,"href",q),a&1&&C!==(C="tab tab-bordered "+(e[0]==="technologies"?"tab-active":""))&&l(b,"class",C),a&4&&m!==(m=e[2].Pages.about.photography.title()+"")&&F(I,m),a&2&&N!==(N=f+"/"+e[1]+"/about/photography")&&l(u,"href",N),a&1&&O!==(O="tab tab-bordered "+(e[0]==="photography"?"tab-active":""))&&l(u,"class",O)},i:Q,o:Q,d(e){e&&g(s)}}}function $(t,s,o){let h,c;R(t,Y,r=>o(1,h=r)),R(t,Z,r=>o(2,c=r));let{name:_="terms-and-conditions"}=s;return t.$$set=r=>{"name"in r&&o(0,_=r.name)},[_,h,c]}class ta extends U{constructor(s){super(),V(this,s,$,y,W,{name:0})}}export{ta as A};