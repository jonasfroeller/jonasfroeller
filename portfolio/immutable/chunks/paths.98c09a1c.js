import{O as c,s as p}from"./index.b5fb99b8.js";const t=[];function d(i,u=c){let o;const n=new Set;function r(e){if(p(i,e)&&(i=e,o)){const b=!t.length;for(const s of n)s[1](),t.push(s,i);if(b){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function l(e){r(e(i))}function _(e,b=c){const s=[e,b];return n.add(s),n.size===1&&(o=u(r)||c),e(i),()=>{n.delete(s),n.size===0&&o&&(o(),o=null)}}return{set:r,update:l,subscribe:_}}var a;const h=((a=globalThis.__sveltekit_ixa3p0)==null?void 0:a.base)??"/jonasfroeller";var f;const q=((f=globalThis.__sveltekit_ixa3p0)==null?void 0:f.assets)??h;export{q as a,h as b,d as w};
