import{S as _,i as g,s as C,k as h,P as k,l as c,h as s,n as r,F as f,O as p,I as z}from"./index.b5fb99b8.js";import{l as b}from"./i18n-svelte.7a5a589b.js";function w(t){let n,a,o,m,l,u,d;return document.title=d=t[1]+"/"+t[3],{c(){n=h("meta"),o=h("meta"),l=h("meta"),this.h()},l(e){const i=k("svelte-104k175",document.head);n=c(i,"META",{name:!0,content:!0}),o=c(i,"META",{property:!0,content:!0}),l=c(i,"META",{property:!0,content:!0}),i.forEach(s),this.h()},h(){r(n,"name","keywords"),r(n,"content",a=t[4]+",rapid,darkmode,bilingual,"+t[0]+","+t[2]),r(o,"property","og:url"),r(o,"content",m="https://jonasfroeller.github.io/jonasfroeller/"+t[4]+"/"+t[0]+"/"+t[2]),r(l,"property","og:title"),r(l,"content",u=t[0]+"/"+t[2])},m(e,i){f(document.head,n),f(document.head,o),f(document.head,l)},p(e,[i]){i&21&&a!==(a=e[4]+",rapid,darkmode,bilingual,"+e[0]+","+e[2])&&r(n,"content",a),i&21&&m!==(m="https://jonasfroeller.github.io/jonasfroeller/"+e[4]+"/"+e[0]+"/"+e[2])&&r(o,"content",m),i&5&&u!==(u=e[0]+"/"+e[2])&&r(l,"content",u),i&10&&d!==(d=e[1]+"/"+e[3])&&(document.title=d)},i:p,o:p,d(e){s(n),s(o),s(l)}}}function j(t,n,a){let o;z(t,b,e=>a(4,o=e));let{parent:m="unknown"}=n,{parentCapitalized:l="unknown"}=n,{name:u="unknown"}=n,{nameCapitalized:d="unknown"}=n;return t.$$set=e=>{"parent"in e&&a(0,m=e.parent),"parentCapitalized"in e&&a(1,l=e.parentCapitalized),"name"in e&&a(2,u=e.name),"nameCapitalized"in e&&a(3,d=e.nameCapitalized)},[m,l,u,d,o]}class S extends _{constructor(n){super(),g(this,n,j,w,C,{parent:0,parentCapitalized:1,name:2,nameCapitalized:3})}}export{S};
