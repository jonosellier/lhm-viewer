import{s as $,e as f,t as u,a as x,c as h,b as d,d as v,f as l,g as S,i as c,h as g,j as b,n as E,k as j}from"../chunks/scheduler.DxJ6F0NT.js";import{S as k,i as q}from"../chunks/index.RXcztLRn.js";import{p as y}from"../chunks/stores.CcTKDvuj.js";function C(i){let a,s=i[0].status+"",r,o,n,p=i[0].error?.message+"",m;return{c(){a=f("h1"),r=u(s),o=x(),n=f("p"),m=u(p)},l(e){a=h(e,"H1",{});var t=d(a);r=v(t,s),t.forEach(l),o=S(e),n=h(e,"P",{});var _=d(n);m=v(_,p),_.forEach(l)},m(e,t){c(e,a,t),g(a,r),c(e,o,t),c(e,n,t),g(n,m)},p(e,[t]){t&1&&s!==(s=e[0].status+"")&&b(r,s),t&1&&p!==(p=e[0].error?.message+"")&&b(m,p)},i:E,o:E,d(e){e&&(l(a),l(o),l(n))}}}function H(i,a,s){let r;return j(i,y,o=>s(0,r=o)),[r]}class A extends k{constructor(a){super(),q(this,a,H,C,$,{})}}export{A as component};
