import{S as q,i as w,s as D,x as F,a as T,k as p,q as S,y as K,c as j,l as _,m as b,r as O,h as m,n as l,z as V,b as X,K as a,f as k,t as G,A as Q,L as Y,o as Z}from"../../../chunks/index-3546a0bb.js";import{b as U}from"../../../chunks/paths-e562eb10.js";import{l as tt}from"../../../chunks/i18n-svelte-7242c2a3.js";import{C as et}from"../../../chunks/Category-9a9e7378.js";function at(u){let o,v,e,r,I,c,i,g,f,n,h,d,M,C,N,x,E,P,L,A;return o=new et({props:{name:R,nameCapitalized:u[1]}}),{c(){F(o.$$.fragment),v=T(),e=p("section"),r=p("h1"),I=S("UWIAS AWCELLRX"),c=T(),i=p("p"),g=S("Hi, I am Jonas!"),f=T(),n=p("div"),h=p("a"),d=p("button"),M=S("About"),N=T(),x=p("a"),E=p("button"),P=S("Projects"),this.h()},l(t){K(o.$$.fragment,t),v=j(t),e=_(t,"SECTION",{class:!0});var s=b(e);r=_(s,"H1",{class:!0,id:!0,"data-value":!0});var W=b(r);I=O(W,"UWIAS AWCELLRX"),W.forEach(m),c=j(s),i=_(s,"P",{class:!0});var $=b(i);g=O($,"Hi, I am Jonas!"),$.forEach(m),f=j(s),n=_(s,"DIV",{class:!0});var y=b(n);h=_(y,"A",{href:!0});var B=b(h);d=_(B,"BUTTON",{class:!0});var H=b(d);M=O(H,"About"),H.forEach(m),B.forEach(m),N=j(y),x=_(y,"A",{href:!0});var J=b(x);E=_(J,"BUTTON",{class:!0});var z=b(E);P=O(z,"Projects"),z.forEach(m),J.forEach(m),y.forEach(m),s.forEach(m),this.h()},h(){l(r,"class","2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl select-none text-center"),l(r,"id","name"),l(r,"data-value","JONAS FRÖLLER"),l(i,"class","text-lg select-none"),l(d,"class","btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"),l(h,"href",C=U+"/"+u[0]+"/about"),l(E,"class","btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"),l(x,"href",L=U+"/"+u[0]+"/projects"),l(n,"class","flex gap-4"),l(e,"class","flex flex-col justify-center items-center gap-6 w-100 h-[75vh]")},m(t,s){V(o,t,s),X(t,v,s),X(t,e,s),a(e,r),a(r,I),a(e,c),a(e,i),a(i,g),a(e,f),a(e,n),a(n,h),a(h,d),a(d,M),a(n,N),a(n,x),a(x,E),a(E,P),A=!0},p(t,[s]){(!A||s&1&&C!==(C=U+"/"+t[0]+"/about"))&&l(h,"href",C),(!A||s&1&&L!==(L=U+"/"+t[0]+"/projects"))&&l(x,"href",L)},i(t){A||(k(o.$$.fragment,t),A=!0)},o(t){G(o.$$.fragment,t),A=!1},d(t){Q(o,t),t&&m(v),t&&m(e)}}}let R="home";function st(u,o,v){let e;Y(u,tt,c=>v(0,e=c));let{data:r}=o,I=R.charAt(0).toUpperCase()+R.slice(1);return Z(async()=>{const c="ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜ ";let i=null;function g(f){let n=0;clearInterval(i),i=setInterval(()=>{f.target.innerText=f.target.innerText.split("").map((h,d)=>d<n?f.target.dataset.value[d]:c[Math.floor(Math.random()*(c.length-1))]).join(""),n>=f.target.dataset.value.length&&(clearInterval(i),f.target.removeEventListener("mouseover",g)),n+=1/3},30)}document.getElementById("name").addEventListener("mouseover",g)}),u.$$set=c=>{"data"in c&&v(2,r=c.data)},u.$$.update=()=>{u.$$.dirty&4&&console.log("[lang]",r)},[e,I,r]}class ct extends q{constructor(o){super(),w(this,o,st,at,D,{data:2})}}export{ct as default};
