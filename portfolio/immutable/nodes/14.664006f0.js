import{S as K,i as L,s as Q,V as U,y as X,a as D,k as u,z as Z,c as $,l as d,m as h,h as i,n as f,A as ee,b as v,W as te,g as ae,d as re,B as le,e as j,R as oe,q as y,r as E,E as N,F as s,O as _}from"../chunks/index.b5fb99b8.js";import{C as ne}from"../chunks/Category.467905a2.js";function G(n,t,o){const l=n.slice();return l[1]=t[o],l}function ce(n){let t;function o(a,e){return navigator&&navigator.userAgent&&!navigator.userAgent.includes("js_disabled")?se:ie}let r=o()(n);return{c(){r.c(),t=j()},l(a){r.l(a),t=j()},m(a,e){r.m(a,e),v(a,t,e)},p(a,e){r.p(a,e)},d(a){r.d(a),a&&i(t)}}}function ie(n){return{c:_,l:_,m:_,p:_,d:_}}function se(n){let t,o,l=n[4]+"",r,a;return{c(){t=u("p"),o=u("em"),r=y(l),a=y(" - couldn't load data...")},l(e){t=d(e,"P",{});var c=h(t);o=d(c,"EM",{});var I=h(o);r=E(I,l),a=E(I," - couldn't load data..."),I.forEach(i),c.forEach(i)},m(e,c){v(e,t,c),s(t,o),s(o,r),s(o,a)},p:_,d(e){e&&i(t)}}}function ue(n){let t,o=n[0],l=[];for(let r=0;r<o.length;r+=1)l[r]=J(G(n,o,r));return{c(){for(let r=0;r<l.length;r+=1)l[r].c();t=j()},l(r){for(let a=0;a<l.length;a+=1)l[a].l(r);t=j()},m(r,a){for(let e=0;e<l.length;e+=1)l[e]&&l[e].m(r,a);v(r,t,a)},p(r,a){if(a&0){o=r[0];let e;for(e=0;e<o.length;e+=1){const c=G(r,o,e);l[e]?l[e].p(c,a):(l[e]=J(c),l[e].c(),l[e].m(t.parentNode,t))}for(;e<l.length;e+=1)l[e].d(1);l.length=o.length}},d(r){oe(l,r),r&&i(t)}}}function de(n){let t,o,l,r;return{c(){t=u("div"),o=u("a"),l=u("iconify-icon"),r=y("Demo"),this.h()},l(a){t=d(a,"DIV",{class:!0});var e=h(t);o=d(e,"A",{href:!0,target:!0,rel:!0,class:!0});var c=h(o);l=d(c,"ICONIFY-ICON",{icon:!0,width:!0,height:!0}),h(l).forEach(i),r=E(c,"Demo"),c.forEach(i),e.forEach(i),this.h()},h(){N(l,"icon","eos-icons:application-outlined"),N(l,"width","20"),N(l,"height","20"),f(o,"href",n[1].homepage),f(o,"target","_blank"),f(o,"rel","noreferrer"),f(o,"class","flex items-center gap-1 p-1"),f(t,"class","badge h-auto badge-outline hover:border-primary border-2 transition hover:transition")},m(a,e){v(a,t,e),s(t,o),s(o,l),s(o,r)},p:_,d(a){a&&i(t)}}}function J(n){let t,o,l=(n[1].language??"text")+"",r,a,e,c,I=n[1].name+"",P,S,O,B=n[1].description+"",x,F,k,C,m,w,q,M,Y,g=n[1].homepage!=null&&n[1].homepage!=null&&n[1].homepage!=!1&&n[1].homepage!=0&&de(n);return{c(){t=u("div"),o=u("span"),r=y(l),a=D(),e=u("div"),c=u("h2"),P=y(I),S=D(),O=u("p"),x=y(B),F=D(),k=u("div"),C=u("div"),m=u("a"),w=u("iconify-icon"),q=y("Code"),M=D(),g&&g.c(),Y=D(),this.h()},l(p){t=d(p,"DIV",{class:!0});var b=h(t);o=d(b,"SPAN",{class:!0});var H=h(o);r=E(H,l),H.forEach(i),a=$(b),e=d(b,"DIV",{class:!0});var A=h(e);c=d(A,"H2",{class:!0});var R=h(c);P=E(R,I),R.forEach(i),S=$(A),O=d(A,"P",{});var T=h(O);x=E(T,B),T.forEach(i),F=$(A),k=d(A,"DIV",{class:!0});var V=h(k);C=d(V,"DIV",{class:!0});var W=h(C);m=d(W,"A",{href:!0,target:!0,rel:!0,class:!0});var z=h(m);w=d(z,"ICONIFY-ICON",{icon:!0,width:!0,height:!0}),h(w).forEach(i),q=E(z,"Code"),z.forEach(i),W.forEach(i),M=$(V),g&&g.l(V),V.forEach(i),A.forEach(i),Y=$(b),b.forEach(i),this.h()},h(){f(o,"class","absolute top-2 right-2 badge badge-secondary uppercase"),f(c,"class","card-title"),N(w,"icon","mdi:github"),N(w,"width","20"),N(w,"height","20"),f(m,"href",n[1].html_url),f(m,"target","_blank"),f(m,"rel","noreferrer"),f(m,"class","flex items-center gap-1 p-1"),f(C,"class","badge h-auto badge-outline hover:border-primary border-2 transition hover:transition"),f(k,"class","card-actions"),f(e,"class","card-body p-7"),f(t,"class","card max-w-full w-96 bg-base-100 hover:border-primary border-2 transition hover:transition")},m(p,b){v(p,t,b),s(t,o),s(o,r),s(t,a),s(t,e),s(e,c),s(c,P),s(e,S),s(e,O),s(O,x),s(e,F),s(e,k),s(k,C),s(C,m),s(m,w),s(m,q),s(k,M),g&&g.m(k,null),s(t,Y)},p(p,b){p[1].homepage!=null&&p[1].homepage!=null&&p[1].homepage!=!1&&p[1].homepage!=0&&g.p(p,b)},d(p){p&&i(t),g&&g.d()}}}function he(n){let t;function o(a,e){return navigator&&navigator.userAgent&&!navigator.userAgent.includes("js_disabled")?_e:fe}let r=o()(n);return{c(){r.c(),t=j()},l(a){r.l(a),t=j()},m(a,e){r.m(a,e),v(a,t,e)},p:_,d(a){r.d(a),a&&i(t)}}}function fe(n){return{c:_,l:_,m:_,d:_}}function _e(n){let t,o,l;return{c(){t=u("p"),o=u("em"),l=y("loading data...")},l(r){t=d(r,"P",{});var a=h(t);o=d(a,"EM",{});var e=h(o);l=E(e,"loading data..."),e.forEach(i),a.forEach(i)},m(r,a){v(r,t,a),s(t,o),s(o,l)},d(r){r&&i(t)}}}function pe(n){let t,o,l,r;t=new ne({props:{name:me}});let a={ctx:n,current:null,token:null,hasCatch:!0,pending:he,then:ue,catch:ce,value:0,error:4};return U(ge(),a),{c(){X(t.$$.fragment),o=D(),l=u("section"),a.block.c(),this.h()},l(e){Z(t.$$.fragment,e),o=$(e),l=d(e,"SECTION",{class:!0});var c=h(l);a.block.l(c),c.forEach(i),this.h()},h(){f(l,"class","flex justify-center gap-4 flex-wrap max-w-full break-all")},m(e,c){ee(t,e,c),v(e,o,c),v(e,l,c),a.block.m(l,a.anchor=null),a.mount=()=>l,a.anchor=null,r=!0},p(e,[c]){n=e,te(a,n,c)},i(e){r||(ae(t.$$.fragment,e),r=!0)},o(e){re(t.$$.fragment,e),r=!1},d(e){le(t,e),e&&i(o),e&&i(l),a.block.d(),a.token=null,a=null}}}let me="projects";async function ge(){return await(await fetch("https://api.github.com/users/jonasfroeller/repos?per_page=100&sort=updated&direction=desc")).json()}class ke extends K{constructor(t){super(),L(this,t,null,pe,Q,{})}}export{ke as component};
