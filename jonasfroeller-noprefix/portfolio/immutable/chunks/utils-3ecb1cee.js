import{_ as i}from"./preload-helper-41c905a7.js";import{a as n,c as a}from"./i18n-util-9de3611c.js";import{b as c}from"./paths-24bb4e9c.js";var d=(r,t={})=>{let o=new Intl.DateTimeFormat(r,t);return s=>o.format(s)};const l=r=>({simpleDate:d(r,{day:"2-digit",month:"short",year:"numeric"})}),m={de:()=>i(()=>import("./index-f9bdd0ac.js"),[],import.meta.url),en:()=>i(()=>import("./index-5ae5d826.js"),[],import.meta.url)},_=(r,t)=>a[r]={...a[r],...t},u=async r=>(await m[r]()).default,v=async r=>{_(r,await u(r)),f(r)},f=r=>void(n[r]=l(r)),D=({pathname:r,search:t},o,s)=>{let[,,,...e]=(r==null?void 0:r.split("/"))??"";return(s||c=="")&&([,,...e]=(r==null?void 0:r.split("/"))??""),`${c}/${[o,...e].join("/")}${t}`};export{v as l,D as r};
