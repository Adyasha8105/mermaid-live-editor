import{S as s,i as a,s as e,D as o,e as t,k as c,t as r,c as l,a as n,d as i,n as u,g as d,b as h,f,E as p,h as m,l as g,F as v,G as $,H as k,x,u as b,I as E,A as I}from"../chunks/vendor-1c68e392.js";import{b as j}from"../chunks/paths-45dac81d.js";import{l as D}from"../chunks/loading-01b174cf.js";function y(s){let a,e,o,g,v,$,k=s[0].message+"";return{c(){a=t("div"),e=t("div"),o=t("div"),g=c(),v=t("div"),$=r(k),this.h()},l(s){a=l(s,"DIV",{class:!0});var t=n(a);e=l(t,"DIV",{class:!0});var c=n(e);o=l(c,"DIV",{class:!0}),n(o).forEach(i),g=u(c),v=l(c,"DIV",{});var r=n(v);$=d(r,k),r.forEach(i),c.forEach(i),t.forEach(i),this.h()},h(){h(o,"class","loader mx-auto svelte-1ub1m40"),h(e,"class","text-indigo-100 text-4xl font-bold my-auto"),h(a,"class","w-screen h-screen z-50 absolute left-0 top-0 bg-gray-600 opacity-50 flex align-middle justify-center")},m(s,t){f(s,a,t),p(a,e),p(e,o),p(e,g),p(e,v),p(v,$)},p(s,a){1&a&&k!==(k=s[0].message+"")&&m($,k)},d(s){s&&i(a)}}}function V(s){let a,e,r,d;const p=s[2].default,m=o(p,s,s[1],null);let E=s[0].loading&&y(s);return{c(){a=t("main"),m&&m.c(),e=c(),E&&E.c(),r=g(),this.h()},l(s){a=l(s,"MAIN",{class:!0});var o=n(a);m&&m.l(o),o.forEach(i),e=u(s),E&&E.l(s),r=g(),this.h()},h(){h(a,"class","h-screen")},m(s,o){f(s,a,o),m&&m.m(a,null),f(s,e,o),E&&E.m(s,o),f(s,r,o),d=!0},p(s,[a]){m&&m.p&&(!d||2&a)&&v(m,p,s,s[1],d?k(p,s[1],a,null):$(s[1]),null),s[0].loading?E?E.p(s,a):(E=y(s),E.c(),E.m(r.parentNode,r)):E&&(E.d(1),E=null)},i(s){d||(x(m,s),d=!0)},o(s){b(m,s),d=!1},d(s){s&&i(a),m&&m.d(s),s&&i(e),E&&E.d(s),s&&i(r)}}}function w(s,a,e){let o;E(s,D,(s=>e(0,o=s)));let{$$slots:t={},$$scope:c}=a;return I((()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register(`${j}/service-worker.js`,{scope:`${j}/`}).then((function(s){console.log("Registration successful, scope is:",s.scope)})).catch((function(s){console.log("Service worker registration failed, error:",s)}))})),s.$$set=s=>{"$$scope"in s&&e(1,c=s.$$scope)},[o,c,t]}class A extends s{constructor(s){super(),a(this,s,w,V,e,{})}}export{A as default};
