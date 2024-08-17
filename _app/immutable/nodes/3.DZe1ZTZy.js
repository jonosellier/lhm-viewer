import{s as B,e as f,a as U,c as g,b as S,l as E,g as N,f as _,m as d,o as I,i as D,h as p,p as x,n as P,r as V,q as T}from"../chunks/scheduler.DBwb5MXA.js";import{S as O,i as q}from"../chunks/index.BcT3aKwZ.js";import{g as j}from"../chunks/entry.CwjbXk0j.js";import{u as A,s as L}from"../chunks/db.DplF6NoZ.js";import{b as M}from"../chunks/paths.CERToP0K.js";function z(r){let e,t="No sign up available ATM";return{c(){e=f("div"),e.textContent=t},l(s){e=g(s,"DIV",{"data-svelte-h":!0}),E(e)!=="svelte-130pdss"&&(e.textContent=t)},m(s,l){D(s,e,l)},p:P,d(s){s&&_(e)}}}function F(r){let e,t,s,l,v,n,i="Sign In",b,m;return{c(){e=f("div"),t=f("input"),s=U(),l=f("input"),v=U(),n=f("button"),n.textContent=i,this.h()},l(a){e=g(a,"DIV",{});var o=S(e);t=g(o,"INPUT",{type:!0,class:!0,placeholder:!0}),s=N(o),l=g(o,"INPUT",{type:!0,class:!0,placeholder:!0}),v=N(o),n=g(o,"BUTTON",{class:!0,"data-svelte-h":!0}),E(n)!=="svelte-1ghy3uc"&&(n.textContent=i),o.forEach(_),this.h()},h(){d(t,"type","email"),d(t,"class","border border-slate-500 bg-slate-900 hover:border-orange-600 focus:border-orange-600 text-white text-lg px-3 py-2 block my-2 rounded-lg w-full"),d(t,"placeholder","Email"),d(l,"type","password"),d(l,"class","border border-slate-500 bg-slate-900 hover:border-orange-600 focus:border-orange-600 text-white text-lg px-3 py-2 block my-2 rounded-lg w-full"),d(l,"placeholder","Password"),d(n,"class","text-lg px-3 py-2 block my-2 rounded-lg w-full bg-orange-600 text-white hover:bg-orange-500")},m(a,o){D(a,e,o),p(e,t),T(t,r[0]),p(e,s),p(e,l),T(l,r[1]),p(e,v),p(e,n),b||(m=[x(t,"input",r[5]),x(l,"input",r[6]),x(n,"click",r[7])],b=!0)},p(a,o){o&1&&t.value!==a[0]&&T(t,a[0]),o&2&&l.value!==a[1]&&T(l,a[1])},d(a){a&&_(e),b=!1,V(m)}}}function G(r){let e,t,s,l,v="Log In",n,i,b="Sign Up",m,a,o;function y(u,h){return u[2]==="login"?F:z}let k=y(r),c=k(r);return{c(){e=f("div"),t=f("div"),s=f("div"),l=f("button"),l.textContent=v,n=U(),i=f("button"),i.textContent=b,m=U(),c.c(),this.h()},l(u){e=g(u,"DIV",{class:!0});var h=S(e);t=g(h,"DIV",{class:!0});var w=S(t);s=g(w,"DIV",{class:!0});var C=S(s);l=g(C,"BUTTON",{class:!0,"data-svelte-h":!0}),E(l)!=="svelte-12hgr7s"&&(l.textContent=v),n=N(C),i=g(C,"BUTTON",{class:!0,"data-svelte-h":!0}),E(i)!=="svelte-216xtx"&&(i.textContent=b),C.forEach(_),m=N(w),c.l(w),w.forEach(_),h.forEach(_),this.h()},h(){d(l,"class","rounded px-2 py-1 text-lg text-slate-500 bg-slate-700 hover:bg-slate-600 hover:text-orange-600"),I(l,"text-orange-600",r[2]==="login"),d(i,"class","rounded px-2 py-1 text-lg text-slate-500 bg-slate-700 hover:bg-slate-600 hover:text-orange-600"),I(i,"text-orange-600",r[2]==="signup"),d(s,"class","flex items-center"),d(t,"class","p-5 border border-slate-500 rounded max-w-md w-full bg-slate-700"),d(e,"class","flex justify-center items-center w-full h-full")},m(u,h){D(u,e,h),p(e,t),p(t,s),p(s,l),p(s,n),p(s,i),p(t,m),c.m(t,null),a||(o=[x(l,"click",r[3]),x(i,"click",r[4])],a=!0)},p(u,[h]){h&4&&I(l,"text-orange-600",u[2]==="login"),h&4&&I(i,"text-orange-600",u[2]==="signup"),k===(k=y(u))&&c?c.p(u,h):(c.d(1),c=k(u),c&&(c.c(),c.m(t,null)))},i:P,o:P,d(u){u&&_(e),c.d(),a=!1,V(o)}}}function H(r,e,t){return r?e?e.length<8?{valid:!1,text:"Password must be 8 characters"}:e!==t?{valid:!1,text:"Passwords do not match"}:{valid:!0,text:"Sign Up"}:{valid:!1,text:"Enter your password"}:{valid:!1,text:"Enter your email"}}function J(r,e,t){let s,l,v,n="login";A.subscribe(y=>{y&&j(M+"/")});const i=()=>{t(2,n="login")},b=()=>{t(2,n="signup")};function m(){s=this.value,t(0,s)}function a(){l=this.value,t(1,l)}const o=()=>{L({email:s,password:l})};return r.$$.update=()=>{r.$$.dirty&3&&H(s,l,v)},[s,l,n,i,b,m,a,o]}class Y extends O{constructor(e){super(),q(this,e,J,G,B,{})}}export{Y as component};
