import{S as L,i as Q,s as W,$ as X,x as Z,a as A,k as u,y as ee,c as D,l as d,m as f,h as c,n as h,z as te,b as v,a0 as ae,f as re,t as le,A as ne,e as j,R as oe,q as y,r as E,O as N,K as s,C as _}from"../../../../chunks/index-e12a28df.js";import{C as ie}from"../../../../chunks/Category-02d434c1.js";function G(o,t,l){const n=o.slice();return n[2]=t[l],n}function ce(o){let t;function l(a,e){return navigator&&navigator.userAgent&&!navigator.userAgent.includes("js_disabled")?ue:se}let r=l()(o);return{c(){r.c(),t=j()},l(a){r.l(a),t=j()},m(a,e){r.m(a,e),v(a,t,e)},p(a,e){r.p(a,e)},d(a){r.d(a),a&&c(t)}}}function se(o){return{c:_,l:_,m:_,p:_,d:_}}function ue(o){let t,l,n=o[5]+"",r,a;return{c(){t=u("p"),l=u("em"),r=y(n),a=y(" - couldn't load data...")},l(e){t=d(e,"P",{});var i=f(t);l=d(i,"EM",{});var w=f(l);r=E(w,n),a=E(w," - couldn't load data..."),w.forEach(c),i.forEach(c)},m(e,i){v(e,t,i),s(t,l),s(l,r),s(l,a)},p:_,d(e){e&&c(t)}}}function de(o){let t,l=o[1],n=[];for(let r=0;r<l.length;r+=1)n[r]=J(G(o,l,r));return{c(){for(let r=0;r<n.length;r+=1)n[r].c();t=j()},l(r){for(let a=0;a<n.length;a+=1)n[a].l(r);t=j()},m(r,a){for(let e=0;e<n.length;e+=1)n[e].m(r,a);v(r,t,a)},p(r,a){if(a&0){l=r[1];let e;for(e=0;e<l.length;e+=1){const i=G(r,l,e);n[e]?n[e].p(i,a):(n[e]=J(i),n[e].c(),n[e].m(t.parentNode,t))}for(;e<n.length;e+=1)n[e].d(1);n.length=l.length}},d(r){oe(n,r),r&&c(t)}}}function fe(o){let t,l,n,r;return{c(){t=u("div"),l=u("a"),n=u("iconify-icon"),r=y("Demo"),this.h()},l(a){t=d(a,"DIV",{class:!0});var e=f(t);l=d(e,"A",{href:!0,target:!0,rel:!0,class:!0});var i=f(l);n=d(i,"ICONIFY-ICON",{icon:!0,width:!0,height:!0}),f(n).forEach(c),r=E(i,"Demo"),i.forEach(c),e.forEach(c),this.h()},h(){N(n,"icon","eos-icons:application-outlined"),N(n,"width","20"),N(n,"height","20"),h(l,"href",o[2].homepage),h(l,"target","_blank"),h(l,"rel","noreferrer"),h(l,"class","flex items-center gap-1 p-1"),h(t,"class","badge h-auto badge-outline hover:border-primary border-2 transition hover:transition")},m(a,e){v(a,t,e),s(t,l),s(l,n),s(l,r)},p:_,d(a){a&&c(t)}}}function J(o){let t,l,n=(o[2].language??"text")+"",r,a,e,i,w=o[2].name+"",V,z,O,K=o[2].description+"",S,x,k,I,m,C,q,F,M,g=o[2].homepage!=null&&o[2].homepage!=null&&o[2].homepage!=!1&&o[2].homepage!=0&&fe(o);return{c(){t=u("div"),l=u("span"),r=y(n),a=A(),e=u("div"),i=u("h2"),V=y(w),z=A(),O=u("p"),S=y(K),x=A(),k=u("div"),I=u("div"),m=u("a"),C=u("iconify-icon"),q=y("Code"),F=A(),g&&g.c(),M=A(),this.h()},l(p){t=d(p,"DIV",{class:!0});var b=f(t);l=d(b,"SPAN",{class:!0});var R=f(l);r=E(R,n),R.forEach(c),a=D(b),e=d(b,"DIV",{class:!0});var $=f(e);i=d($,"H2",{class:!0});var T=f(i);V=E(T,w),T.forEach(c),z=D($),O=d($,"P",{});var U=f(O);S=E(U,K),U.forEach(c),x=D($),k=d($,"DIV",{class:!0});var P=f(k);I=d(P,"DIV",{class:!0});var B=f(I);m=d(B,"A",{href:!0,target:!0,rel:!0,class:!0});var Y=f(m);C=d(Y,"ICONIFY-ICON",{icon:!0,width:!0,height:!0}),f(C).forEach(c),q=E(Y,"Code"),Y.forEach(c),B.forEach(c),F=D(P),g&&g.l(P),P.forEach(c),$.forEach(c),M=D(b),b.forEach(c),this.h()},h(){h(l,"class","absolute top-2 right-2 badge badge-secondary uppercase"),h(i,"class","card-title"),N(C,"icon","mdi:github"),N(C,"width","20"),N(C,"height","20"),h(m,"href",o[2].html_url),h(m,"target","_blank"),h(m,"rel","noreferrer"),h(m,"class","flex items-center gap-1 p-1"),h(I,"class","badge h-auto badge-outline hover:border-primary border-2 transition hover:transition"),h(k,"class","card-actions"),h(e,"class","card-body p-7"),h(t,"class","card max-w-full w-96 bg-base-100 hover:border-primary border-2 transition hover:transition")},m(p,b){v(p,t,b),s(t,l),s(l,r),s(t,a),s(t,e),s(e,i),s(i,V),s(e,z),s(e,O),s(O,S),s(e,x),s(e,k),s(k,I),s(I,m),s(m,C),s(m,q),s(k,F),g&&g.m(k,null),s(t,M)},p(p,b){p[2].homepage!=null&&p[2].homepage!=null&&p[2].homepage!=!1&&p[2].homepage!=0&&g.p(p,b)},d(p){p&&c(t),g&&g.d()}}}function he(o){let t;function l(a,e){return navigator&&navigator.userAgent&&!navigator.userAgent.includes("js_disabled")?pe:_e}let r=l()(o);return{c(){r.c(),t=j()},l(a){r.l(a),t=j()},m(a,e){r.m(a,e),v(a,t,e)},p:_,d(a){r.d(a),a&&c(t)}}}function _e(o){return{c:_,l:_,m:_,d:_}}function pe(o){let t,l,n;return{c(){t=u("p"),l=u("em"),n=y("loading data...")},l(r){t=d(r,"P",{});var a=f(t);l=d(a,"EM",{});var e=f(l);n=E(e,"loading data..."),e.forEach(c),a.forEach(c)},m(r,a){v(r,t,a),s(t,l),s(l,n)},d(r){r&&c(t)}}}function me(o){let t,l,n,r;t=new ie({props:{name:H,nameCapitalized:o[0]}});let a={ctx:o,current:null,token:null,hasCatch:!0,pending:he,then:de,catch:ce,value:1,error:5};return X(ge(),a),{c(){Z(t.$$.fragment),l=A(),n=u("section"),a.block.c(),this.h()},l(e){ee(t.$$.fragment,e),l=D(e),n=d(e,"SECTION",{class:!0});var i=f(n);a.block.l(i),i.forEach(c),this.h()},h(){h(n,"class","flex justify-center gap-4 flex-wrap max-w-full break-all")},m(e,i){te(t,e,i),v(e,l,i),v(e,n,i),a.block.m(n,a.anchor=null),a.mount=()=>n,a.anchor=null,r=!0},p(e,[i]){o=e,ae(a,o,i)},i(e){r||(re(t.$$.fragment,e),r=!0)},o(e){le(t.$$.fragment,e),r=!1},d(e){ne(t,e),e&&c(l),e&&c(n),a.block.d(),a.token=null,a=null}}}let H="projects";async function ge(){return await(await fetch("https://api.github.com/users/jonasfroeller/repos?sort=updated&direction=desc")).json()}function be(o){return[H.charAt(0).toUpperCase()+H.slice(1)]}class ye extends L{constructor(t){super(),Q(this,t,be,me,W,{})}}export{ye as default};