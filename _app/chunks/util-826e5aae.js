var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(a,t,r)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,i=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&n(e,t,a[t]);if(r)for(var t of r(a))o.call(a,t)&&n(e,t,a[t]);return e},c=(e,r)=>a(e,t(r));import{a2 as l,a3 as d,C as p,a4 as u,Z as m,a6 as f,a9 as g,S as y,i as h,s as b,e as O,c as v,a as E,d as S,b as w,N as T,f as D,F as j,G as _,H as x,z as C,a8 as P,J as A}from"./vendor-ad39e53d.js";import{_ as I}from"./preload-helper-9f12a5fd.js";let J;let L;const N=l(p({code:"graph TD\n    A[Christmas] --\x3e|Get money| B(Go shopping)\n    B --\x3e C{Let me think}\n    C --\x3e|One| D[Laptop]\n    C --\x3e|Two| E[iPhone]\n    C --\x3e|Three| F[fa:fa-car Car]\n  ",mermaid:JSON.stringify({theme:"default"},null,2),updateEditor:!1,autoSync:!0,updateDiagram:!0}),d(),"codeStore"),k=u([N],(([e],a)=>{a(m(JSON.stringify(e),!0))})),V=e=>{N.update((a=>i(i({},a),e)))};let G=!1;const H=(e,a,t=!1)=>{var r;r=e,J&&(clearTimeout(L),L=setTimeout((function(){const e=r.replace(/^\s*%%.*\n/g,"\n").trimStart().split(" ")[0];console.debug("ga:","send","event","render",e),J.track("render",{graphType:e})}),5e3));if((e.match(/\n/g)||"").length+1>50&&!G&&f(N).autoSync){const e=confirm("Long diagram deteced. Turn off Auto Sync? Click the sync logo to manually sync.");G=!0,e&&V({autoSync:!1})}N.update((r=>c(i({},r),{code:e,updateEditor:a,updateDiagram:t})))},z=(e,a)=>{N.update((t=>c(i({},t),{mermaid:e,updateEditor:a})))},B=()=>JSON.stringify(f(N)),F=p(void 0);function M(e){let a,t;return{c(){a=O("div"),t=O("div"),this.h()},l(e){a=v(e,"DIV",{id:!0,class:!0});var r=E(a);t=v(r,"DIV",{id:!0,class:!0}),E(t).forEach(S),r.forEach(S),this.h()},h(){w(t,"id","container"),w(t,"class","flex-1 overflow-auto"),w(a,"id","view"),w(a,"class","p-2 svelte-5ndy2s"),T(a,"error",e[1]),T(a,"outOfSync",e[2])},m(r,s){D(r,a,s),j(a,t),e[3](t)},p(e,[t]){2&t&&T(a,"error",e[1]),4&t&&T(a,"outOfSync",e[2])},i:_,o:_,d(t){t&&S(a),e[3](null)}}}function R(e,a,t){let r;x(e,N,(e=>t(6,r=e)));const s=window.mermaid;let o,n="",i=!1,c=!1,l=!0;return C((()=>{N.subscribe((e=>{try{if(o&&e&&(e.updateDiagram||e.autoSync)){e.autoSync||P(N,r.updateDiagram=!1,r),t(2,c=!1),l=!0,n=e.code;const a=o.parentElement.parentElement.parentElement.scrollTop;t(0,o.innerHTML=n,o),delete o.dataset.processed,s.initialize(Object.assign({},JSON.parse(e.mermaid))),s.render("graph-div",n,(e=>{t(0,o.innerHTML=e,o)})),t(0,o.parentElement.parentElement.parentElement.scrollTop=a,o),t(1,i=!1)}else l?l=!1:t(2,c=!0)}catch(a){console.log("view fail",a),t(1,i=!0)}})),F.subscribe((e=>{void 0===e?t(1,i=!1):(t(1,i=!0),console.log("Error: ",e))}))})),[o,i,c,function(e){A[e?"unshift":"push"]((()=>{o=e,t(0,o)}))}]}class $ extends y{constructor(e){super(),h(this,e,R,M,b,{})}}const U=()=>{(e=>{let a;try{const t=g(e);console.log(`Tring to load state: ${t}`),a=JSON.parse(t),"string"!=typeof a.mermaid&&(a.mermaid=JSON.stringify(a.mermaid,null,2))}catch(t){e&&console.error("Init error",t),a=f(N),console.log(a)}V(c(i({},a),{updateEditor:!0}))})(window.location.hash.slice(1))},Z=()=>{V({updateDiagram:!0})},q=async()=>{U(),Z(),k.subscribe((e=>{history.replaceState(void 0,void 0,`#${e}`)})),await(async()=>{if(!J)try{const{Analytics:e}=await I((()=>import("./analytics.browser.es-eaddcc60.js")),void 0),a=await I((()=>import("./analytics-plugin-ga.browser.es-1cdb0512.js")),void 0);J=e({app:"mermaid-live-editor",plugins:[a.init({trackingId:"UA-153180559-1"})]})}catch{console.info("Analytics blocked ;)")}})(),null==J||J.page()};export{$ as V,J as a,k as b,N as c,z as d,F as e,B as g,q as i,Z as s,H as u};
