import{S as K,i as U,s as F,G as Q,k as d,q as H,a as G,l as v,m as E,r as I,h as i,c as J,n as p,b as q,K as h,u as C,H as R,I as W,J as X,f as M,t as P,L as D,x as Y,y as Z,z as ee,A as te}from"../../../chunks/index-e12a28df.js";import{b as N}from"../../../chunks/paths-e562eb10.js";import{l as se,L as ae}from"../../../chunks/i18n-svelte-c667e13a.js";import{p as re}from"../../../chunks/stores-fda98899.js";function le(r){let e,a,t;return{c(){e=H('"'),a=H(r[1]),t=H('"')},l(s){e=I(s,'"'),a=I(s,r[1]),t=I(s,'"')},m(s,n){q(s,e,n),q(s,a,n),q(s,t,n)},p(s,n){n&2&&C(a,s[1])},d(s){s&&i(e),s&&i(a),s&&i(t)}}}function oe(r){let e,a,t=r[3].Error.error({error:r[0]})+"",s,n,u,m,g,o,b,j,k,y=r[3].Error.action()+"",L,w,_;const A=r[5].default,S=Q(A,r,r[4],null),c=S||le(r);return{c(){e=d("section"),a=d("h1"),s=H(t),n=G(),u=d("div"),m=d("h2"),c&&c.c(),g=G(),o=d("div"),b=d("a"),j=d("button"),k=d("h3"),L=H(y),this.h()},l(l){e=v(l,"SECTION",{class:!0});var f=E(e);a=v(f,"H1",{class:!0});var O=E(a);s=I(O,t),O.forEach(i),n=J(f),u=v(f,"DIV",{class:!0});var T=E(u);m=v(T,"H2",{class:!0});var V=E(m);c&&c.l(V),V.forEach(i),g=J(T),o=v(T,"DIV",{class:!0});var $=E(o);b=v($,"A",{href:!0});var x=E(b);j=v(x,"BUTTON",{class:!0});var z=E(j);k=v(z,"H3",{class:!0});var B=E(k);L=I(B,y),B.forEach(i),z.forEach(i),x.forEach(i),$.forEach(i),T.forEach(i),f.forEach(i),this.h()},h(){p(a,"class","text-9xl flex justify-center"),p(m,"class","text-4xl flex justify-center"),p(k,"class","text-lg flex justify-center"),p(j,"class","btn w-fit h-min p-5 mt-4 rounded-full underline hover:no-underline"),p(b,"href",w=N+"/"+r[2]),p(o,"class","flex justify-center"),p(u,"class","flex justify-center flex-col"),p(e,"class","flex flex-col justify-center items-center gap-6 w-100 h-[75vh]")},m(l,f){q(l,e,f),h(e,a),h(a,s),h(e,n),h(e,u),h(u,m),c&&c.m(m,null),h(u,g),h(u,o),h(o,b),h(b,j),h(j,k),h(k,L),_=!0},p(l,[f]){(!_||f&9)&&t!==(t=l[3].Error.error({error:l[0]})+"")&&C(s,t),S?S.p&&(!_||f&16)&&R(S,A,l,l[4],_?X(A,l[4],f,null):W(l[4]),null):c&&c.p&&(!_||f&2)&&c.p(l,_?f:-1),(!_||f&8)&&y!==(y=l[3].Error.action()+"")&&C(L,y),(!_||f&4&&w!==(w=N+"/"+l[2]))&&p(b,"href",w)},i(l){_||(M(c,l),_=!0)},o(l){P(c,l),_=!1},d(l){l&&i(e),c&&c.d(l)}}}function ne(r,e,a){let t,s;D(r,se,o=>a(2,t=o)),D(r,ae,o=>a(3,s=o));let{$$slots:n={},$$scope:u}=e,{code:m=404}=e,{path:g=`${N}/${t}`}=e;return r.$$set=o=>{"code"in o&&a(0,m=o.code),"path"in o&&a(1,g=o.path),"$$scope"in o&&a(4,u=o.$$scope)},[m,g,t,s,u,n]}class fe extends K{constructor(e){super(),U(this,e,ne,oe,F,{code:0,path:1})}}function ce(r){let e,a;return e=new fe({props:{code:r[0].status,path:r[0].url.pathname}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,s){ee(e,t,s),a=!0},p(t,[s]){const n={};s&1&&(n.code=t[0].status),s&1&&(n.path=t[0].url.pathname),e.$set(n)},i(t){a||(M(e.$$.fragment,t),a=!0)},o(t){P(e.$$.fragment,t),a=!1},d(t){te(e,t)}}}function ie(r,e,a){let t;return D(r,re,s=>a(0,t=s)),[t]}class pe extends K{constructor(e){super(),U(this,e,ie,ce,F,{})}}export{pe as default};
