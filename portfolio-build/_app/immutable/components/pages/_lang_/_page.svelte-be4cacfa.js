import{S as K,i as G,s as Q,k as o,a as L,q as I,U as Y,l as r,h as n,c as S,m as p,r as j,n as e,K as t,b as F,C as J,o as Z,V as z}from"../../../chunks/index-7c5d9ba8.js";const{document:O}=z;function $(M){let c,m,u,i,a,l,d,f,g,E,U,s,_,N,C,x,B,H,T,P,R,y,W;return{c(){c=o("meta"),m=o("meta"),u=o("meta"),i=L(),a=o("section"),l=o("h1"),d=I("UWIAS AWCELLRX"),f=L(),g=o("p"),E=I("Hi, I am Jonas!"),U=L(),s=o("div"),_=o("button"),N=I("About"),C=L(),x=o("button"),B=I("Socials"),H=L(),T=o("button"),P=I("Projects"),R=L(),y=o("button"),W=I("Legal"),this.h()},l(b){const v=Y("svelte-upjcsj",O.head);c=r(v,"META",{name:!0,content:!0}),m=r(v,"META",{property:!0,content:!0}),u=r(v,"META",{property:!0,content:!0}),v.forEach(n),i=S(b),a=r(b,"SECTION",{class:!0});var A=p(a);l=r(A,"H1",{class:!0,id:!0,"data-value":!0});var k=p(l);d=j(k,"UWIAS AWCELLRX"),k.forEach(n),f=S(A),g=r(A,"P",{class:!0});var q=p(g);E=j(q,"Hi, I am Jonas!"),q.forEach(n),U=S(A),s=r(A,"DIV",{class:!0});var h=p(s);_=r(h,"BUTTON",{class:!0});var V=p(_);N=j(V,"About"),V.forEach(n),C=S(h),x=r(h,"BUTTON",{class:!0});var X=p(x);B=j(X,"Socials"),X.forEach(n),H=S(h),T=r(h,"BUTTON",{class:!0});var w=p(T);P=j(w,"Projects"),w.forEach(n),R=S(h),y=r(h,"BUTTON",{class:!0});var D=p(y);W=j(D,"Legal"),D.forEach(n),h.forEach(n),A.forEach(n),this.h()},h(){e(c,"name","keywords"),e(c,"content","rapid,onlineshop,cheap,darkmode,bilingual"),e(m,"property","og:url"),e(m,"content","https://jonasfroeller.github.io/jonasfroeller"),e(u,"property","og:title"),e(u,"content","home"),O.title="Home",e(l,"class","text-9xl select-none"),e(l,"id","name"),e(l,"data-value","JONAS FRÖLLER"),e(g,"class","text-lg select-none"),e(_,"class","btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"),e(x,"class","btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"),e(T,"class","btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"),e(y,"class","btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"),e(s,"class","flex gap-4"),e(a,"class","flex flex-col justify-center items-center gap-6 w-100 h-[75vh]")},m(b,v){t(O.head,c),t(O.head,m),t(O.head,u),F(b,i,v),F(b,a,v),t(a,l),t(l,d),t(a,f),t(a,g),t(g,E),t(a,U),t(a,s),t(s,_),t(_,N),t(s,C),t(s,x),t(x,B),t(s,H),t(s,T),t(T,P),t(s,R),t(s,y),t(y,W)},p:J,i:J,o:J,d(b){n(c),n(m),n(u),b&&n(i),b&&n(a)}}}function tt(M,c,m){let{data:u}=c;return Z(async()=>{const i="ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜ ";let a=null;function l(d){let f=0;clearInterval(a),a=setInterval(()=>{d.target.innerText=d.target.innerText.split("").map((g,E)=>E<f?d.target.dataset.value[E]:i[Math.floor(Math.random()*(i.length-1))]).join(""),f>=d.target.dataset.value.length&&(clearInterval(a),d.target.removeEventListener("mouseover",l)),f+=1/3},30)}document.querySelector("#name").addEventListener("mouseover",l)}),M.$$set=i=>{"data"in i&&m(0,u=i.data)},M.$$.update=()=>{M.$$.dirty&1&&console.log(u)},[u]}class at extends K{constructor(c){super(),G(this,c,tt,$,Q,{data:0})}}export{at as default};