const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./plotly.DKHRKVP2.js","./db.LS5-ntiL.js","./preload-helper.Dch09mLN.js","./entry.DP49jl2-.js","./scheduler.DxJ6F0NT.js","./uploaded-data.store.B49oa-Z8.js"])))=>i.map(i=>d[i]);
import{s as he,e as C,c as O,b as H,f as d,m as k,W as Oe,p as V,i as S,n as X,X as at,o as Ee,Y as ft,D as ut,k as K,l as Y,Z as Fe,a as U,t as G,g as R,d as F,h as j,q as Z,j as ae,G as Ke,z as pe,H as Xe,I as Ze,J as Je,C as ve,A as Ye,r as Qe,_ as ct}from"./scheduler.DxJ6F0NT.js";import{S as de,i as _e,g as fe,b as A,e as ue,t as D,c as ee,a as te,m as le,d as ne}from"./index.RXcztLRn.js";import{d as z,p as Te}from"./uploaded-data.store.B49oa-Z8.js";import{_ as ht}from"./preload-helper.Dch09mLN.js";import{d as ce,g as dt}from"./entry.DP49jl2-.js";import{e as ye}from"./each.-gASlQSi.js";import{c as _t,u as mt}from"./db.LS5-ntiL.js";new TextEncoder;var pt=typeof global=="object"&&global&&global.Object===Object&&global,gt=typeof self=="object"&&self&&self.Object===Object&&self,xe=pt||gt||Function("return this")(),ke=xe.Symbol,$e=Object.prototype,bt=$e.hasOwnProperty,vt=$e.toString,ge=ke?ke.toStringTag:void 0;function yt(l){var e=bt.call(l,ge),t=l[ge];try{l[ge]=void 0;var n=!0}catch{}var r=vt.call(l);return n&&(e?l[ge]=t:delete l[ge]),r}var kt=Object.prototype,wt=kt.toString;function St(l){return wt.call(l)}var Tt="[object Null]",Ct="[object Undefined]",Ie=ke?ke.toStringTag:void 0;function Ot(l){return l==null?l===void 0?Ct:Tt:Ie&&Ie in Object(l)?yt(l):St(l)}function Et(l){return l!=null&&typeof l=="object"}var It="[object Symbol]";function Pt(l){return typeof l=="symbol"||Et(l)&&Ot(l)==It}var jt=/\s/;function Dt(l){for(var e=l.length;e--&&jt.test(l.charAt(e)););return e}var At=/^\s+/;function Lt(l){return l&&l.slice(0,Dt(l)+1).replace(At,"")}function Ce(l){var e=typeof l;return l!=null&&(e=="object"||e=="function")}var Pe=NaN,Ht=/^[-+]0x[0-9a-f]+$/i,Nt=/^0b[01]+$/i,Ut=/^0o[0-7]+$/i,Rt=parseInt;function je(l){if(typeof l=="number")return l;if(Pt(l))return Pe;if(Ce(l)){var e=typeof l.valueOf=="function"?l.valueOf():l;l=Ce(e)?e+"":e}if(typeof l!="string")return l===0?l:+l;l=Lt(l);var t=Nt.test(l);return t||Ut.test(l)?Rt(l.slice(2),t?2:8):Ht.test(l)?Pe:+l}var Se=function(){return xe.Date.now()},Vt="Expected a function",Bt=Math.max,Wt=Math.min;function zt(l,e,t){var n,r,o,s,f,a,i=0,u=!1,c=!1,h=!0;if(typeof l!="function")throw new TypeError(Vt);e=je(e)||0,Ce(t)&&(u=!!t.leading,c="maxWait"in t,o=c?Bt(je(t.maxWait)||0,e):o,h="trailing"in t?!!t.trailing:h);function y(_){var P=n,L=r;return n=r=void 0,i=_,s=l.apply(L,P),s}function w(_){return i=_,f=setTimeout(v,e),u?y(_):s}function g(_){var P=_-a,L=_-i,q=e-P;return c?Wt(q,o-L):q}function m(_){var P=_-a,L=_-i;return a===void 0||P>=e||P<0||c&&L>=o}function v(){var _=Se();if(m(_))return p(_);f=setTimeout(v,g(_))}function p(_){return f=void 0,h&&n?y(_):(n=r=void 0,s)}function E(){f!==void 0&&clearTimeout(f),i=0,n=a=r=f=void 0}function B(){return f===void 0?s:p(Se())}function W(){var _=Se(),P=m(_);if(n=arguments,r=this,a=_,P){if(f===void 0)return w(a);if(c)return clearTimeout(f),f=setTimeout(v,e),y(a)}return f===void 0&&(f=setTimeout(v,e)),s}return W.cancel=E,W.flush=B,W}function qt(l){let e,t;return{c(){e=C("div"),this.h()},l(n){e=O(n,"DIV",{class:!0}),H(e).forEach(d),this.h()},h(){k(e,"class",t=Oe(l[2])+" svelte-kyrhf8"),V(e,"fillParent",l[1]),V(e,"fillParentWidth",l[4]),V(e,"fillParentHeight",l[3])},m(n,r){S(n,e,r),l[25](e)},p(n,r){r[0]&4&&t!==(t=Oe(n[2])+" svelte-kyrhf8")&&k(e,"class",t),r[0]&6&&V(e,"fillParent",n[1]),r[0]&20&&V(e,"fillParentWidth",n[4]),r[0]&12&&V(e,"fillParentHeight",n[3])},i:X,o:X,d(n){n&&d(e),l[25](null)}}}const De=500,Ae=300;function Mt(l,e,t){let n,r,o,s,f,a,i,u;const c=typeof window=="object",h=c?requestAnimationFrame:()=>{};async function y(){if(c&&p===void 0)if(window.Plotly)t(6,p=window.Plotly);else{const T=await ht(()=>import("./plotly.DKHRKVP2.js").then(oe=>oe.p),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);p===void 0&&t(6,p="default"in T?T.default:T)}}const w={plotly_afterexport:"afterExport",plotly_afterplot:"afterPlot",plotly_animated:"animated",plotly_animating:"animating",plotly_animatingframe:"animatingFrame",plotly_animationinterrupted:"animationInterrupted",plotly_autosize:"autoSize",plotly_beforeexport:"beforeExport",plotly_beforehover:"beforeHover",plotly_beforeplot:"beforePlot",plotly_buttonclicked:"buttonClicked",plotly_click:"click",plotly_clickannotation:"clickAnnotation",plotly_deselect:"deselect",plotly_doubleclick:"doubleClick",plotly_framework:"framework",plotly_hover:"hover",plotly_legendclick:"legendClick",plotly_legenddoubleclick:"legendDoubleClick",plotly_react:"react",plotly_redraw:"redraw",plotly_relayout:"relayout",plotly_relayouting:"relayouting",plotly_restyle:"restyle",plotly_selected:"selected",plotly_selecting:"selecting",plotly_sliderchange:"sliderChange",plotly_sliderend:"sliderEnd",plotly_sliderstart:"sliderStart",plotly_sunburstclick:"sunburstClick",plotly_transitioned:"transitioned",plotly_transitioning:"transitioning",plotly_transitioninterrupted:"transitionInterrupted",plotly_unhover:"unhover",plotly_update:"update",plotly_webglcontextlost:"webGLContextLost"},g=at();let{element:m=void 0}=e,{plot:v=void 0}=e,{libPlotly:p=void 0}=e,{data:E}=e,{layout:B=void 0}=e,{config:W=void 0}=e,{fillParent:_=!1}=e,{debounce:P=0}=e,{configReactivityStrategy:L="static-plot"}=e,{class:q=""}=e;Ee(async()=>{window.global=window,await y()});let Q=0,x=p,J=v,re=De,M=Ae,se=!1;const $=async()=>{!p||!m||(se&&L==="static-plot"&&(t(17,se=!1),await p.react(m,E,o,{...s,staticPlot:!s.staticPlot})),t(5,v=await p.react(m,E,o,s)))};ft(()=>m&&p?.purge(m));let ie,me;Ee(()=>me=new ResizeObserver(I));const N=T=>T&&me?.observe(T),b=T=>T&&me?.unobserve(T);function I(){if(!u||!m)return;const{offsetHeight:T,offsetWidth:oe}=u,{paddingLeft:we,paddingTop:nt,paddingRight:rt,paddingBottom:ot}=window.getComputedStyle(u),st=oe-parseInt(we)-parseInt(rt),it=T-parseInt(nt)-parseInt(ot);t(15,re=a?st:De),t(16,M=i?it:Ae)}function be(T){ut[T?"unshift":"push"](()=>{m=T,t(0,m)})}return l.$$set=T=>{"element"in T&&t(0,m=T.element),"plot"in T&&t(5,v=T.plot),"libPlotly"in T&&t(6,p=T.libPlotly),"data"in T&&t(7,E=T.data),"layout"in T&&t(8,B=T.layout),"config"in T&&t(9,W=T.config),"fillParent"in T&&t(1,_=T.fillParent),"debounce"in T&&t(10,P=T.debounce),"configReactivityStrategy"in T&&t(11,L=T.configReactivityStrategy),"class"in T&&t(2,q=T.class)},l.$$.update=()=>{if(l.$$.dirty[0]&1024&&t(24,n=typeof P=="object"?P.wait:P??0),l.$$.dirty[0]&1024&&t(23,r=typeof P=="object"?P:{}),l.$$.dirty[0]&4224&&t(12,Q=(Q+1)%1e3),l.$$.dirty[0]&102656&&t(22,o={datarevision:Q,width:re,height:M,...B}),l.$$.dirty[0]&512&&t(21,s={displaylogo:!1,...W}),l.$$.dirty[0]&2097152&&t(17,se=!0),l.$$.dirty[0]&8257&&(m&&x!==p&&(x?.purge(m),t(5,v=void 0)),t(13,x=p),y()),l.$$.dirty[0]&16416&&J!==v){for(const[T,oe]of Object.entries(w))J?.removeAllListeners?.(T),v?.on(T,we=>g(oe,we));t(14,J=v)}l.$$.dirty[0]&25165824&&t(20,f=zt($,n,r)),l.$$.dirty[0]&7471297&&f(),l.$$.dirty[0]&2&&h(I),l.$$.dirty[0]&2&&t(4,a=_===!0||_==="width"),l.$$.dirty[0]&2&&t(3,i=_===!0||_==="height"),l.$$.dirty[0]&1&&t(19,u=m?.parentElement??void 0),l.$$.dirty[0]&786432&&(N(u),b(ie),t(18,ie=u))},[m,_,q,i,a,v,p,E,B,W,P,L,Q,x,J,re,M,se,ie,u,f,s,o,r,n,be]}class Gt extends de{constructor(e){super(),_e(this,e,Mt,qt,he,{element:0,plot:5,libPlotly:6,data:7,layout:8,config:9,fillParent:1,debounce:10,configReactivityStrategy:11,class:2},null,[-1,-1])}}function Ft(l){let e,t='<div class="p-8 rounded-xl border border-slate-500 bg-slate-800"><p class="text-center text-2xl">Select some sensor data to plot in the top-left</p></div>';return{c(){e=C("div"),e.innerHTML=t,this.h()},l(n){e=O(n,"DIV",{class:!0,"data-svelte-h":!0}),Y(e)!=="svelte-9g2utj"&&(e.innerHTML=t),this.h()},h(){k(e,"class","flex items-center justify-center h-full")},m(n,r){S(n,e,r)},p:X,i:X,o:X,d(n){n&&d(e)}}}function Kt(l){let e,t;return e=new Gt({props:{data:l[0].data,layout:l[0].layout,config:{scrollZoom:!0},fillParent:!0,debounce:250}}),{c(){ee(e.$$.fragment)},l(n){te(e.$$.fragment,n)},m(n,r){le(e,n,r),t=!0},p(n,r){const o={};r&1&&(o.data=n[0].data),r&1&&(o.layout=n[0].layout),e.$set(o)},i(n){t||(D(e.$$.fragment,n),t=!0)},o(n){A(e.$$.fragment,n),t=!1},d(n){ne(e,n)}}}function Xt(l){let e,t,n,r;const o=[Kt,Ft],s=[];function f(a,i){return a[0].data.length>0?0:1}return t=f(l),n=s[t]=o[t](l),{c(){e=C("div"),n.c(),this.h()},l(a){e=O(a,"DIV",{class:!0});var i=H(e);n.l(i),i.forEach(d),this.h()},h(){k(e,"class","w-full h-full")},m(a,i){S(a,e,i),s[t].m(e,null),r=!0},p(a,[i]){let u=t;t=f(a),t===u?s[t].p(a,i):(fe(),A(s[u],1,1,()=>{s[u]=null}),ue(),n=s[t],n?n.p(a,i):(n=s[t]=o[t](a),n.c()),D(n,1),n.m(e,null))},i(a){r||(D(n),r=!0)},o(a){A(n),r=!1},d(a){a&&d(e),s[t].d()}}}function Zt(l,e,t){let n,r=[];const o={control:{unit:"%"},voltage:{unit:"V",range:[0,15]},temperature:{unit:"°C",range:[0,115]},fan:{unit:"RPM"},load:{unit:"%",range:[0,105]},power:{unit:"W"},clock:{unit:"MHz"},factor:{unit:"Unitless"},data:{unit:"GB"},smalldata:{unit:"KB"},level:{unit:"Varied"},throughput:{unit:"KB/s"}},s=ce([z,Te],([i,u])=>a(i,i.show,u));K(l,s,i=>t(0,n=i));function f(i){const u=Array.from(new Set(i.map(y=>y.yaxis))).length,c=o[r[0]],h={showlegend:!1,paper_bgcolor:"#0f172a",plot_bgcolor:"#020617",font:{color:"#cbd5e1"},dragmode:"pan",hovermode:"x",yaxis:{domain:[0,1/u-.0125],title:`${r[0]?.toUpperCase()} (${c?.unit})`,gridcolor:"#64748b",range:c?.range},xaxis:{rangeslider:{visible:!0,thickness:.1}}};for(let y=2;y<=u;y++){console.log("working on",y);const w=o[r[y-1]];h[`yaxis${y}`]={domain:[(y-1)/u,y/u-.0125],title:`${r[y-1]?.toUpperCase()} (${w.unit})`,gridcolor:"#64748b",range:w.range}}return h}function a(i,u,c){if(u.length<1||i.charts.length<1)return{layout:{},data:[]};r=[];const h=i.subsets[i.selectedSubset],y=i.charts.filter((w,g)=>u.includes(g)).map(w=>{const g=i.getChartType(w.path);return g&&!r.includes(g)&&(console.log("Saw",g),r.push(g),console.log(r)),console.log("Putting data on y"+ +(r.findIndex(m=>m===g)+1)),{type:"scatter",x:i.xAxis,y:w.values.filter((m,v)=>!h||v>=h[0]&&v<=h[1]),yaxis:"y"+ +(r.findIndex(m=>m===g)+1),name:w.label,line:{color:c.sensorColor[w.path]??w.color}}});return console.log({traces:y}),{data:y,layout:f(y)}}return[n,s]}class Jt extends de{constructor(e){super(),_e(this,e,Zt,Xt,he,{})}}function Le(l,e,t){const n=l.slice();return n[19]=e[t],n}function Yt(l){let e,t,n,r,o,s,f,a,i=l[7].includes(l[1].path),u,c,h,y,w=i&&He(l);return{c(){e=C("label"),t=C("input"),o=U(),s=C("span"),f=G(l[0]),a=U(),w&&w.c(),this.h()},l(g){e=O(g,"LABEL",{for:!0,class:!0,style:!0});var m=H(e);t=O(m,"INPUT",{type:!0,id:!0}),o=R(m),s=O(m,"SPAN",{class:!0});var v=H(s);f=F(v,l[0]),v.forEach(d),a=R(m),w&&w.l(m),m.forEach(d),this.h()},h(){k(t,"type","checkbox"),t.checked=n=l[7].includes(l[1].path),k(t,"id",r=l[1].path?.replace(/\//g,"_")),k(s,"class","flex-shrink-1 w-full ps-3"),k(e,"for",u=l[1].path?.replace(/\//g,"_")),k(e,"class","flex align-top hover:text-slate-900 hover:bg-slate-300 px-2 rounded border border-transparent hover:border-slate-300 svelte-ijvq8o"),k(e,"style",c=l[6].sensorColor[l[1].path]?`--hover-color: ${l[6].sensorColor[l[1].path]}40; --text: ${l[6].sensorColor[l[1].path]}`:`--hover-color: ${l[1].color}40; --text: ${l[1].color}`)},m(g,m){S(g,e,m),j(e,t),j(e,o),j(e,s),j(s,f),j(e,a),w&&w.m(e,null),h||(y=Z(t,"click",l[15]),h=!0)},p(g,m){m&130&&n!==(n=g[7].includes(g[1].path))&&(t.checked=n),m&2&&r!==(r=g[1].path?.replace(/\//g,"_"))&&k(t,"id",r),m&1&&ae(f,g[0]),m&130&&(i=g[7].includes(g[1].path)),i?w?w.p(g,m):(w=He(g),w.c(),w.m(e,null)):w&&(w.d(1),w=null),m&2&&u!==(u=g[1].path?.replace(/\//g,"_"))&&k(e,"for",u),m&66&&c!==(c=g[6].sensorColor[g[1].path]?`--hover-color: ${g[6].sensorColor[g[1].path]}40; --text: ${g[6].sensorColor[g[1].path]}`:`--hover-color: ${g[1].color}40; --text: ${g[1].color}`)&&k(e,"style",c)},i:X,o:X,d(g){g&&d(e),w&&w.d(),h=!1,y()}}}function Qt(l){let e,t,n="▼",r,o,s,f,a,i,u,c,h,y;const w=l[14].default,g=Ke(w,l,l[17],null);let m=(l[3]||l[5]>0)&&Ne(l),v=l[4]&&Ue(l);return{c(){e=C("div"),t=C("button"),t.textContent=n,r=U(),o=C("div"),s=C("div"),g&&g.c(),f=U(),m&&m.c(),i=U(),v&&v.c(),u=pe(),this.h()},l(p){e=O(p,"DIV",{class:!0,style:!0});var E=H(e);t=O(E,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(t)!=="svelte-wwit3s"&&(t.textContent=n),r=R(E),o=O(E,"DIV",{class:!0});var B=H(o);s=O(B,"DIV",{class:!0});var W=H(s);g&&g.l(W),W.forEach(d),f=R(B),m&&m.l(B),B.forEach(d),E.forEach(d),i=R(p),v&&v.l(p),u=pe(),this.h()},h(){k(t,"class","hover:bg-slate-500 h-4 w-4 m-1 p-0 rounded-full text-orange-50 text-xs duration-150"),V(t,"rotate-180",!l[4]),V(t,"bg-orange-600",l[4]),k(s,"class","ms-2 capitalize"),k(o,"class","inline-flex flex-grow-1 w-full justify-between"),k(e,"class","px-2 bg-slate-700 border-slate-500 w-full text-start flex items-center heading svelte-ijvq8o"),k(e,"style",a="top: "+l[2]*32+"px; z-index: "+(999-l[2])),V(e,"border-bottom",l[4])},m(p,E){S(p,e,E),j(e,t),j(e,r),j(e,o),j(o,s),g&&g.m(s,null),j(o,f),m&&m.m(o,null),S(p,i,E),v&&v.m(p,E),S(p,u,E),c=!0,h||(y=Z(t,"click",l[12]),h=!0)},p(p,E){(!c||E&16)&&V(t,"rotate-180",!p[4]),(!c||E&16)&&V(t,"bg-orange-600",p[4]),g&&g.p&&(!c||E&131072)&&Xe(g,w,p,p[17],c?Je(w,p[17],E,null):Ze(p[17]),null),p[3]||p[5]>0?m?m.p(p,E):(m=Ne(p),m.c(),m.m(o,null)):m&&(m.d(1),m=null),(!c||E&4&&a!==(a="top: "+p[2]*32+"px; z-index: "+(999-p[2])))&&k(e,"style",a),(!c||E&16)&&V(e,"border-bottom",p[4]),p[4]?v?(v.p(p,E),E&16&&D(v,1)):(v=Ue(p),v.c(),D(v,1),v.m(u.parentNode,u)):v&&(fe(),A(v,1,1,()=>{v=null}),ue())},i(p){c||(D(g,p),D(v),c=!0)},o(p){A(g,p),A(v),c=!1},d(p){p&&(d(e),d(i),d(u)),g&&g.d(p),m&&m.d(),v&&v.d(p),h=!1,y()}}}function He(l){let e,t,n,r;return{c(){e=C("input"),this.h()},l(o){e=O(o,"INPUT",{type:!0,class:!0}),this.h()},h(){k(e,"type","color"),k(e,"class","w-4 h-4 m-1 rounded-sm"),e.value=t=l[6].sensorColor[l[1].path]??l[1].color,ve(e,"background-color",l[6].sensorColor[l[1].path]??l[1].color)},m(o,s){S(o,e,s),n||(r=Z(e,"change",l[16]),n=!0)},p(o,s){s&66&&t!==(t=o[6].sensorColor[o[1].path]??o[1].color)&&(e.value=t),s&66&&ve(e,"background-color",o[6].sensorColor[o[1].path]??o[1].color)},d(o){o&&d(e),n=!1,r()}}}function Ne(l){let e,t;return{c(){e=C("span"),t=G(l[5]),this.h()},l(n){e=O(n,"SPAN",{class:!0});var r=H(e);t=F(r,l[5]),r.forEach(d),this.h()},h(){k(e,"class","bg-slate-500 text-slate-200 rounded-full inline-block min-w-5 px-1 h-5 m-1 text-sm text-center")},m(n,r){S(n,e,r),j(e,t)},p(n,r){r&32&&ae(t,n[5])},d(n){n&&d(e)}}}function Ue(l){let e,t,n=ye(Object.keys(l[1].children)),r=[];for(let s=0;s<n.length;s+=1)r[s]=Re(Le(l,n,s));const o=s=>A(r[s],1,1,()=>{r[s]=null});return{c(){e=C("ul");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){e=O(s,"UL",{class:!0});var f=H(e);for(let a=0;a<r.length;a+=1)r[a].l(f);f.forEach(d),this.h()},h(){k(e,"class","border-t border-slate-500 relative z-50 svelte-ijvq8o")},m(s,f){S(s,e,f);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null);t=!0},p(s,f){if(f&6){n=ye(Object.keys(s[1].children));let a;for(a=0;a<n.length;a+=1){const i=Le(s,n,a);r[a]?(r[a].p(i,f),D(r[a],1)):(r[a]=Re(i),r[a].c(),D(r[a],1),r[a].m(e,null))}for(fe(),a=n.length;a<r.length;a+=1)o(a);ue()}},i(s){if(!t){for(let f=0;f<n.length;f+=1)D(r[f]);t=!0}},o(s){r=r.filter(Boolean);for(let f=0;f<r.length;f+=1)A(r[f]);t=!1},d(s){s&&d(e),Ye(r,s)}}}function xt(l){let e=l[19]+"",t;return{c(){t=G(e)},l(n){t=F(n,e)},m(n,r){S(n,t,r)},p(n,r){r&2&&e!==(e=n[19]+"")&&ae(t,e)},d(n){n&&d(t)}}}function Re(l){let e,t,n,r;return t=new et({props:{label:l[19],item:l[1].children[l[19]],level:l[2]+1,$$slots:{default:[xt]},$$scope:{ctx:l}}}),{c(){e=C("li"),ee(t.$$.fragment),n=U(),this.h()},l(o){e=O(o,"LI",{class:!0});var s=H(e);te(t.$$.fragment,s),n=R(s),s.forEach(d),this.h()},h(){k(e,"class","svelte-ijvq8o")},m(o,s){S(o,e,s),le(t,e,null),j(e,n),r=!0},p(o,s){const f={};s&2&&(f.label=o[19]),s&2&&(f.item=o[1].children[o[19]]),s&4&&(f.level=o[2]+1),s&131074&&(f.$$scope={dirty:s,ctx:o}),t.$set(f)},i(o){r||(D(t.$$.fragment,o),r=!0)},o(o){A(t.$$.fragment,o),r=!1},d(o){o&&d(e),ne(t)}}}function $t(l){let e,t,n,r;const o=[Qt,Yt],s=[];function f(a,i){return a[1].children?0:1}return t=f(l),n=s[t]=o[t](l),{c(){e=C("div"),n.c(),this.h()},l(a){e=O(a,"DIV",{class:!0});var i=H(e);n.l(i),i.forEach(d),this.h()},h(){k(e,"class","item-holder w-full bg-slate-800 svelte-ijvq8o")},m(a,i){S(a,e,i),s[t].m(e,null),r=!0},p(a,[i]){let u=t;t=f(a),t===u?s[t].p(a,i):(fe(),A(s[u],1,1,()=>{s[u]=null}),ue(),n=s[t],n?n.p(a,i):(n=s[t]=o[t](a),n.c()),D(n,1),n.m(e,null))},i(a){r||(D(n),r=!0)},o(a){A(n),r=!1},d(a){a&&d(e),s[t].d()}}}function el(l,e,t){let n,r,o,s;K(l,z,_=>t(18,r=_)),K(l,Te,_=>t(6,o=_));let{$$slots:f={},$$scope:a}=e,{label:i=""}=e,{item:u}=e,{level:c=0}=e,{alwaysShow:h=!1}=e,{startOpen:y=!0}=e;function w(_,P){if(r){const L=new Set(r.show),q=r.findByPath(P.path);L.has(q)?L.delete(q):L.add(q),Fe(z,r.show=Array.from(L),r),z.set(r)}}function g(_,P){Te.update(L=>(L.sensorColor[_]=P,L))}const m=ce(z,_=>_.show.map(P=>_.charts[P]).filter(P=>P.path.includes(u.path)).length??0);K(l,m,_=>t(5,n=_));const v=ce(z,_=>_?.show.map(P=>_.charts[P]?.path)??[]);K(l,v,_=>t(7,s=_));let p=c>0&&n>0;function E(_){t(4,p=!p)}const B=_=>w(_,u),W=_=>g(u.path,_.currentTarget.value);return l.$$set=_=>{"label"in _&&t(0,i=_.label),"item"in _&&t(1,u=_.item),"level"in _&&t(2,c=_.level),"alwaysShow"in _&&t(3,h=_.alwaysShow),"startOpen"in _&&t(13,y=_.startOpen),"$$scope"in _&&t(17,a=_.$$scope)},[i,u,c,h,p,n,o,s,w,g,m,v,E,y,f,B,W,a]}class et extends de{constructor(e){super(),_e(this,e,el,$t,he,{label:0,item:1,level:2,alwaysShow:3,startOpen:13})}}function tl(l){let e;return{c(){e=G("Sensors")},l(t){e=F(t,"Sensors")},m(t,n){S(t,e,n)},d(t){t&&d(e)}}}function ll(l){let e,t,n,r;return n=new et({props:{label:"Sensors",item:{children:l[2],path:""},alwaysShow:!0,startOpen:l[0],$$slots:{default:[tl]},$$scope:{ctx:l}}}),{c(){e=C("div"),t=C("div"),ee(n.$$.fragment),this.h()},l(o){e=O(o,"DIV",{class:!0});var s=H(e);t=O(s,"DIV",{class:!0});var f=H(t);te(n.$$.fragment,f),f.forEach(d),s.forEach(d),this.h()},h(){k(t,"class","overflow-auto bg-slate-800 flex-shrink-0 w-96"),ve(t,"max-height",l[1]),k(e,"class","border border-slate-500 rounded overflow-hidden")},m(o,s){S(o,e,s),j(e,t),le(n,t,null),r=!0},p(o,[s]){const f={};s&4&&(f.item={children:o[2],path:""}),s&1&&(f.startOpen=o[0]),s&16&&(f.$$scope={dirty:s,ctx:o}),n.$set(f),s&2&&ve(t,"max-height",o[1])},i(o){r||(D(n.$$.fragment,o),r=!0)},o(o){A(n.$$.fragment,o),r=!1},d(o){o&&d(e),ne(n)}}}function nl(l,e,t){let n,{startOpen:r=!0}=e,{maxHeight:o="calc(100dvh - 16px)"}=e;const s=ce(z,f=>{const a={};return(f?.charts??[]).forEach(i=>{const[u,c,h]=i.path.split("/");a[u]||(a[u]={path:u,children:{}}),a[u].children[c]||(a[u].children[c]={path:`${u}/${c}`,children:{}}),a[u].children[c].children[i.label]||(a[u].children[c].children[i.label]={path:`${u}/${c}/${h}`,selected:!1,color:i.color})}),a});return K(l,s,f=>t(2,n=f)),l.$$set=f=>{"startOpen"in f&&t(0,r=f.startOpen),"maxHeight"in f&&t(1,o=f.maxHeight)},[r,o,n,s]}class tt extends de{constructor(e){super(),_e(this,e,nl,ll,he,{startOpen:0,maxHeight:1})}}function Ve(l,e,t){const n=l.slice();return n[6]=e[t][0],n[7]=e[t][1],n[9]=t,n}function Be(l){let e,t,n="Show All",r,o,s,f=ye(l[0]?.subsets??[]),a=[];for(let i=0;i<f.length;i+=1)a[i]=We(Ve(l,f,i));return{c(){e=C("div"),t=C("button"),t.textContent=n,r=U();for(let i=0;i<a.length;i+=1)a[i].c();this.h()},l(i){e=O(i,"DIV",{class:!0});var u=H(e);t=O(u,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(t)!=="svelte-1w8ly9m"&&(t.textContent=n),r=R(u);for(let c=0;c<a.length;c+=1)a[c].l(u);u.forEach(d),this.h()},h(){k(t,"class","hover:border-orange-500 bg-slate-800 border border-slate-500 text-slate-300 rounded-full px-2"),V(t,"bg-orange-700",!l[1]),V(t,"bg-slate-800",l[1]),k(e,"class","flex gap-2 pt-1 flex-wrap")},m(i,u){S(i,e,u),j(e,t),j(e,r);for(let c=0;c<a.length;c+=1)a[c]&&a[c].m(e,null);o||(s=Z(t,"click",l[4]),o=!0)},p(i,u){if(u&2&&V(t,"bg-orange-700",!i[1]),u&2&&V(t,"bg-slate-800",i[1]),u&11){f=ye(i[0]?.subsets??[]);let c;for(c=0;c<f.length;c+=1){const h=Ve(i,f,c);a[c]?a[c].p(h,u):(a[c]=We(h),a[c].c(),a[c].m(e,null))}for(;c<a.length;c+=1)a[c].d(1);a.length=f.length}},d(i){i&&d(e),Ye(a,i),o=!1,s()}}}function We(l){let e,t=l[0].xAxis[l[6]].toLocaleTimeString("en-US",{timeStyle:"short"})+"",n,r,o=l[0].xAxis[l[7]].toLocaleTimeString("en-US",{timeStyle:"short"})+"",s,f,a,i;function u(){return l[5](l[9])}return{c(){e=C("button"),n=G(t),r=G(" - "),s=G(o),f=U(),this.h()},l(c){e=O(c,"BUTTON",{class:!0});var h=H(e);n=F(h,t),r=F(h," - "),s=F(h,o),f=R(h),h.forEach(d),this.h()},h(){k(e,"class","hover:border-orange-500 bg-slate-800 border border-slate-500 text-slate-300 rounded-full px-2"),V(e,"bg-orange-700",l[1]?.join("|")===[l[6],l[7]].join("|")),V(e,"bg-slate-800",l[1]?.join("|")!==[l[6],l[7]].join("|"))},m(c,h){S(c,e,h),j(e,n),j(e,r),j(e,s),j(e,f),a||(i=Z(e,"click",u),a=!0)},p(c,h){l=c,h&1&&t!==(t=l[0].xAxis[l[6]].toLocaleTimeString("en-US",{timeStyle:"short"})+"")&&ae(n,t),h&1&&o!==(o=l[0].xAxis[l[7]].toLocaleTimeString("en-US",{timeStyle:"short"})+"")&&ae(s,o),h&3&&V(e,"bg-orange-700",l[1]?.join("|")===[l[6],l[7]].join("|")),h&3&&V(e,"bg-slate-800",l[1]?.join("|")!==[l[6],l[7]].join("|"))},d(c){c&&d(e),a=!1,i()}}}function rl(l){let e,t=l[0].subsets.length>1&&Be(l);return{c(){t&&t.c(),e=pe()},l(n){t&&t.l(n),e=pe()},m(n,r){t&&t.m(n,r),S(n,e,r)},p(n,[r]){n[0].subsets.length>1?t?t.p(n,r):(t=Be(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:X,o:X,d(n){n&&d(e),t&&t.d(n)}}}function ol(l,e,t){let n,r;K(l,z,i=>t(0,n=i));const o=ce(z,i=>i?.subsets[i.selectedSubset]);K(l,o,i=>t(1,r=i));function s(i){z.update(u=>(u&&(u.selectedSubset=i),u))}return[n,r,o,s,()=>s(-1),i=>s(i)]}class lt extends de{constructor(e){super(),_e(this,e,ol,rl,he,{})}}function ze(l){let e,t,n="Select timeframe to export",r,o,s;return o=new lt({}),{c(){e=C("div"),t=C("h2"),t.textContent=n,r=U(),ee(o.$$.fragment),this.h()},l(f){e=O(f,"DIV",{class:!0});var a=H(e);t=O(a,"H2",{class:!0,"data-svelte-h":!0}),Y(t)!=="svelte-1p9n0tq"&&(t.textContent=n),r=R(a),te(o.$$.fragment,a),a.forEach(d),this.h()},h(){k(t,"class","text-sm text-slate-400 ps-2 pt-3"),k(e,"class","z-30")},m(f,a){S(f,e,a),j(e,t),j(e,r),le(o,e,null),s=!0},i(f){s||(D(o.$$.fragment,f),s=!0)},o(f){A(o.$$.fragment,f),s=!1},d(f){f&&d(e),ne(o)}}}function sl(l){let e,t="Name",n,r,o,s,f,a="Select sensors to export (leave empty to export all)",i,u,c,h,y,w,g="All",m,v,p,E,B,W=(l[1][1]>0?l[1][1]-l[1][0]:l[0].xAxis.length)+"",_,P,L,q=(l[0].show.length??0)+"",Q,x,J,re,M,se="Share to The World",$,ie,me;h=new tt({props:{startOpen:!1,maxHeight:"512px"}});let N=l[0].subsets.length>1&&ze();return{c(){e=C("h2"),e.textContent=t,n=U(),r=C("input"),s=U(),f=C("h2"),f.textContent=a,i=U(),u=C("div"),c=C("div"),ee(h.$$.fragment),y=U(),w=C("button"),w.textContent=g,m=U(),N&&N.c(),v=U(),p=C("hr"),E=G(`\r
This will share\r
`),B=C("strong"),_=G(W),P=G(`\r
readings from\r
`),L=C("strong"),Q=G(q),x=G(`\r
sensors to the public. Anyone who has the link can see it.\r
`),J=C("hr"),re=U(),M=C("button"),M.textContent=se,this.h()},l(b){e=O(b,"H2",{class:!0,"data-svelte-h":!0}),Y(e)!=="svelte-kd22pg"&&(e.textContent=t),n=R(b),r=O(b,"INPUT",{type:!0,class:!0}),s=R(b),f=O(b,"H2",{class:!0,"data-svelte-h":!0}),Y(f)!=="svelte-ikgrn1"&&(f.textContent=a),i=R(b),u=O(b,"DIV",{class:!0});var I=H(u);c=O(I,"DIV",{class:!0});var be=H(c);te(h.$$.fragment,be),be.forEach(d),y=R(I),w=O(I,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(w)!=="svelte-4cxii1"&&(w.textContent=g),I.forEach(d),m=R(b),N&&N.l(b),v=R(b),p=O(b,"HR",{class:!0}),E=F(b,`\r
This will share\r
`),B=O(b,"STRONG",{});var T=H(B);_=F(T,W),T.forEach(d),P=F(b,`\r
readings from\r
`),L=O(b,"STRONG",{});var oe=H(L);Q=F(oe,q),oe.forEach(d),x=F(b,`\r
sensors to the public. Anyone who has the link can see it.\r
`),J=O(b,"HR",{class:!0}),re=R(b),M=O(b,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(M)!=="svelte-pce4e1"&&(M.textContent=se),this.h()},h(){k(e,"class","text-sm text-slate-400 ps-2"),k(r,"type","text"),k(r,"class","form-control text-lg"),r.value=o=l[0]?.name??"",k(f,"class","text-sm text-slate-400 ps-2 pt-3"),k(c,"class","h-8 z-50"),k(w,"class","btn btn-default ms-3 flex-grow"),k(u,"class","flex"),k(p,"class","border-slate-500 my-5"),k(J,"class","border-slate-500 my-5"),k(M,"class","btn btn-primary")},m(b,I){S(b,e,I),S(b,n,I),S(b,r,I),S(b,s,I),S(b,f,I),S(b,i,I),S(b,u,I),j(u,c),le(h,c,null),j(u,y),j(u,w),S(b,m,I),N&&N.m(b,I),S(b,v,I),S(b,p,I),S(b,E,I),S(b,B,I),j(B,_),S(b,P,I),S(b,L,I),j(L,Q),S(b,x,I),S(b,J,I),S(b,re,I),S(b,M,I),$=!0,ie||(me=[Z(r,"change",l[3]),Z(w,"click",l[4]),Z(M,"click",l[5])],ie=!0)},p(b,[I]){(!$||I&1&&o!==(o=b[0]?.name??"")&&r.value!==o)&&(r.value=o),b[0].subsets.length>1?N?I&1&&D(N,1):(N=ze(),N.c(),D(N,1),N.m(v.parentNode,v)):N&&(fe(),A(N,1,1,()=>{N=null}),ue()),(!$||I&3)&&W!==(W=(b[1][1]>0?b[1][1]-b[1][0]:b[0].xAxis.length)+"")&&ae(_,W),(!$||I&1)&&q!==(q=(b[0].show.length??0)+"")&&ae(Q,q)},i(b){$||(D(h.$$.fragment,b),D(N),$=!0)},o(b){A(h.$$.fragment,b),A(N),$=!1},d(b){b&&(d(e),d(n),d(r),d(s),d(f),d(i),d(u),d(m),d(v),d(p),d(E),d(B),d(P),d(L),d(x),d(J),d(re),d(M)),ne(h),N&&N.d(b),ie=!1,Qe(me)}}}function il(l,e,t){let n,r;K(l,z,i=>t(0,n=i));const o=ce(z,i=>i?.subsets[i.selectedSubset]??[0,0]);return K(l,o,i=>t(1,r=i)),[n,r,o,i=>z.update(u=>(u.name=i.currentTarget.value,u)),()=>{n&&Fe(z,n.show=[],n)},async()=>dt("/"+await _t())]}class al extends de{constructor(e){super(),_e(this,e,il,sl,he,{})}}function fl(l){let e;const t=l[4].default,n=Ke(t,l,l[3],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,o){n&&n.m(r,o),e=!0},p(r,o){n&&n.p&&(!e||o&8)&&Xe(n,t,r,r[3],e?Je(t,r[3],o,null):Ze(r[3]),null)},i(r){e||(D(n,r),e=!0)},o(r){A(n,r),e=!1},d(r){n&&n.d(r)}}}function ul(l){let e,t,n,r,o,s,f,a,i;t=new tt({});let u=l[1].subsets.length>1&&qe();o=new lt({});let c=l[2]&&Me(l);return a=new Jt({}),{c(){e=C("div"),ee(t.$$.fragment),n=U(),u&&u.c(),r=U(),ee(o.$$.fragment),s=U(),c&&c.c(),f=U(),ee(a.$$.fragment),this.h()},l(h){e=O(h,"DIV",{class:!0});var y=H(e);te(t.$$.fragment,y),n=R(y),u&&u.l(y),r=R(y),te(o.$$.fragment,y),s=R(y),c&&c.l(y),y.forEach(d),f=R(h),te(a.$$.fragment,h),this.h()},h(){k(e,"class","fixed top-0 left-0 w-full flex h-9 m-2 items-start z-40")},m(h,y){S(h,e,y),le(t,e,null),j(e,n),u&&u.m(e,null),j(e,r),le(o,e,null),j(e,s),c&&c.m(e,null),S(h,f,y),le(a,h,y),i=!0},p(h,y){h[1].subsets.length>1?u||(u=qe(),u.c(),u.m(e,r)):u&&(u.d(1),u=null),h[2]?c?c.p(h,y):(c=Me(h),c.c(),c.m(e,null)):c&&(c.d(1),c=null)},i(h){i||(D(t.$$.fragment,h),D(o.$$.fragment,h),D(a.$$.fragment,h),i=!0)},o(h){A(t.$$.fragment,h),A(o.$$.fragment,h),A(a.$$.fragment,h),i=!1},d(h){h&&(d(e),d(f)),ne(t),u&&u.d(),ne(o),c&&c.d(),ne(a,h)}}}function qe(l){let e,t="Data ranges:";return{c(){e=C("div"),e.textContent=t,this.h()},l(n){e=O(n,"DIV",{class:!0,"data-svelte-h":!0}),Y(e)!=="svelte-9q3kh8"&&(e.textContent=t),this.h()},h(){k(e,"class","text-slate-500 uppercase pt-1 px-3")},m(n,r){S(n,e,r)},d(n){n&&d(e)}}}function Me(l){let e,t="Share Chart",n,r;return{c(){e=C("button"),e.textContent=t,this.h()},l(o){e=O(o,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(e)!=="svelte-f95v2u"&&(e.textContent=t),this.h()},h(){k(e,"class","btn btn-primary ms-5")},m(o,s){S(o,e,s),n||(r=Z(e,"click",l[5]),n=!0)},p:X,d(o){o&&d(e),n=!1,r()}}}function Ge(l){let e,t,n,r,o,s;return n=new al({}),{c(){e=C("div"),t=C("div"),ee(n.$$.fragment),this.h()},l(f){e=O(f,"DIV",{class:!0});var a=H(e);t=O(a,"DIV",{class:!0});var i=H(t);te(n.$$.fragment,i),i.forEach(d),a.forEach(d),this.h()},h(){k(t,"class","max-w-lg p-5 mx-auto mt-12 bg-slate-800 border border-slate-500 rounded-lg"),k(e,"class","fixed top-0 z-50 w-full h-full backdrop-blur-lg")},m(f,a){S(f,e,a),j(e,t),le(n,t,null),r=!0,o||(s=[Z(t,"click",ct(l[6])),Z(e,"click",l[7])],o=!0)},p:X,i(f){r||(D(n.$$.fragment,f),r=!0)},o(f){A(n.$$.fragment,f),r=!1},d(f){f&&d(e),ne(n),o=!1,Qe(s)}}}function cl(l){let e,t,n,r,o;const s=[ul,fl],f=[];function a(u,c){return u[1]?0:1}e=a(l),t=f[e]=s[e](l);let i=l[0]&&Ge(l);return{c(){t.c(),n=U(),i&&i.c(),r=pe()},l(u){t.l(u),n=R(u),i&&i.l(u),r=pe()},m(u,c){f[e].m(u,c),S(u,n,c),i&&i.m(u,c),S(u,r,c),o=!0},p(u,[c]){let h=e;e=a(u),e===h?f[e].p(u,c):(fe(),A(f[h],1,1,()=>{f[h]=null}),ue(),t=f[e],t?t.p(u,c):(t=f[e]=s[e](u),t.c()),D(t,1),t.m(n.parentNode,n)),u[0]?i?(i.p(u,c),c&1&&D(i,1)):(i=Ge(u),i.c(),D(i,1),i.m(r.parentNode,r)):i&&(fe(),A(i,1,1,()=>{i=null}),ue())},i(u){o||(D(t),D(i),o=!0)},o(u){A(t),A(i),o=!1},d(u){u&&(d(n),d(r)),f[e].d(u),i&&i.d(u)}}}function hl(l,e,t){let n,r;K(l,z,c=>t(1,n=c)),K(l,mt,c=>t(2,r=c));let{$$slots:o={},$$scope:s}=e,f=!1;ce(z,c=>c?.subsets[c.selectedSubset]);const a=()=>t(0,f=!0),i=()=>t(0,f=!0),u=()=>t(0,f=!1);return l.$$set=c=>{"$$scope"in c&&t(3,s=c.$$scope)},[f,n,r,s,o,a,i,u]}class yl extends de{constructor(e){super(),_e(this,e,hl,cl,he,{})}}export{yl as C};
