import{S as D,i as F,s as G,k as E,q,a as O,l as L,m as C,r as N,h as m,c as w,n as o,b as H,K as f,u as j,C as z,L as B}from"./index-70fcf4f1.js";import{b as c}from"./paths-24bb4e9c.js";import{l as J,L as M}from"./i18n-svelte-89404c9e.js";function Q(s){let e,l,b=s[2].Pages.about.profile.title()+"",h,u,r,S,i,p=s[2].Pages.about.skills.navTitle()+"",v,d,g,T,n,_=s[2].Pages.about.photography.title()+"",k,P,A;return{c(){e=E("section"),l=E("a"),h=q(b),S=O(),i=E("a"),v=q(p),T=O(),n=E("a"),k=q(_),this.h()},l(t){e=L(t,"SECTION",{class:!0});var a=C(e);l=L(a,"A",{href:!0,class:!0});var y=C(l);h=N(y,b),y.forEach(m),S=w(a),i=L(a,"A",{href:!0,class:!0});var I=C(i);v=N(I,p),I.forEach(m),T=w(a),n=L(a,"A",{href:!0,class:!0});var K=C(n);k=N(K,_),K.forEach(m),a.forEach(m),this.h()},h(){o(l,"href",u=c+"/"+s[1]+"/about/profile"),o(l,"class",r="tab tab-bordered "+(s[0]==="profile"?"tab-active":"")),o(i,"href",d=c+"/"+s[1]+"/about/skills"),o(i,"class",g="tab tab-bordered "+(s[0]==="skills"?"tab-active":"")),o(n,"href",P=c+"/"+s[1]+"/about/photography"),o(n,"class",A="tab tab-bordered "+(s[0]==="photography"?"tab-active":"")),o(e,"class","tabs flex justify-center")},m(t,a){H(t,e,a),f(e,l),f(l,h),f(e,S),f(e,i),f(i,v),f(e,T),f(e,n),f(n,k)},p(t,[a]){a&4&&b!==(b=t[2].Pages.about.profile.title()+"")&&j(h,b),a&2&&u!==(u=c+"/"+t[1]+"/about/profile")&&o(l,"href",u),a&1&&r!==(r="tab tab-bordered "+(t[0]==="profile"?"tab-active":""))&&o(l,"class",r),a&4&&p!==(p=t[2].Pages.about.skills.navTitle()+"")&&j(v,p),a&2&&d!==(d=c+"/"+t[1]+"/about/skills")&&o(i,"href",d),a&1&&g!==(g="tab tab-bordered "+(t[0]==="skills"?"tab-active":""))&&o(i,"class",g),a&4&&_!==(_=t[2].Pages.about.photography.title()+"")&&j(k,_),a&2&&P!==(P=c+"/"+t[1]+"/about/photography")&&o(n,"href",P),a&1&&A!==(A="tab tab-bordered "+(t[0]==="photography"?"tab-active":""))&&o(n,"class",A)},i:z,o:z,d(t){t&&m(e)}}}function R(s,e,l){let b,h;B(s,J,r=>l(1,b=r)),B(s,M,r=>l(2,h=r));let{name:u="terms-and-conditions"}=e;return s.$$set=r=>{"name"in r&&l(0,u=r.name)},[u,b,h]}class X extends D{constructor(e){super(),F(this,e,R,Q,G,{name:0})}}export{X as A};
