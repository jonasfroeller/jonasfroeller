import{_ as s}from"./preload-helper-41c905a7.js";import{a as i,c as a}from"./i18n-util-9de3611c.js";var n=(t,o={})=>{let r=new Intl.DateTimeFormat(t,o);return e=>r.format(e)};const c=t=>({simpleDate:n(t,{day:"2-digit",month:"short",year:"numeric"})}),m={de:()=>s(()=>import("./index-e8d4f8fe.js"),[],import.meta.url),en:()=>s(()=>import("./index-aa3aed8e.js"),[],import.meta.url)},d=(t,o)=>a[t]={...a[t],...o},l=async t=>(await m[t]()).default,p=async t=>{d(t,await l(t)),_(t)},_=t=>void(i[t]=c(t)),y=({pathname:t,search:o},r)=>{console.log(t,o,r);const[,,,...e]=(t==null?void 0:t.split("/"))??"";return`/jonasfroeller/${[r,...e].join("/")}${o}`};export{p as l,y as r};