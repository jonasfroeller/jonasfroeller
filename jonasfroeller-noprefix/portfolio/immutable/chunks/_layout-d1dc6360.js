import{R as r}from"./control-e7f5239e.js";import{r as l,l as n}from"./utils-359e4e98.js";import{l as s,b as c}from"./i18n-util-9de3611c.js";function i(e,a){return new r(e,a)}new TextEncoder;const p=!0,u=async({url:e,params:a})=>{let o=e.pathname.split("/")[1];const t=a.lang||o;if(!s.includes(t))throw i(302,l(e.pathname,c,p));return await n(t),{locale:t}},d=!0,f=!0,m="ignore",y=Object.freeze(Object.defineProperty({__proto__:null,load:u,prerender:d,ssr:f,trailingSlash:m},Symbol.toStringTag,{value:"Module"}));export{y as _,u as l,d as p,f as s,m as t};
