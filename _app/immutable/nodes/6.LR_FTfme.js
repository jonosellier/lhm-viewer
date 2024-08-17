import{s as F,e as b,a as C,t as R,c as v,l as I,g as w,b as k,d as V,f as i,m,i as u,h as M,q,j as z,n as L,D}from"../chunks/scheduler.DxJ6F0NT.js";import{S as H,i as O,c as A,a as B,m as J,t as Z,b as G,d as K}from"../chunks/index.RXcztLRn.js";import{g as Q}from"../chunks/entry.DP49jl2-.js";import{p as W,d as X,M as Y}from"../chunks/uploaded-data.store.B49oa-Z8.js";function tt(p){const r=p.replace(/\r/g,"").split(/^-+$/gm).find(n=>n.match(/\nSensors\n\n/)),s={};if(r){const n=r.replace(/\r?\nSensors(\r?\n)+((.+\n)+)/,"$2"),a=JSON.parse(`{${n.replace(/((\||(\+-))\s*)+([A-Za-z\s0-9-#/+_()*]+)(\s+:(\s+-?\d+(.\d+(E\+?-?\d\d)?)?)*)?\s\((.+)\)/gm,'"$9": "$4"').split(`
`).filter(c=>!!c).map(c=>c.replace(/\s+"$/,'"')).join(",")}}`);s.sensors=a}return console.log(s),s}function et(p){let e,r="Upload a Logging CSV file and optionally a Hardware Report from Libre Hardware Monitor to begin",s,n,a="Uploading a hardware report will better group the sensor data with more user-friendly names",c,f,U="Log File",y,o,x,d,$="Hardware Report",h,g,j,_,S=p[2]?"Uploading":"Load in to Chart",P,E,N,T;return{c(){e=b("p"),e.textContent=r,s=C(),n=b("p"),n.textContent=a,c=C(),f=b("p"),f.textContent=U,y=C(),o=b("input"),x=C(),d=b("p"),d.textContent=$,h=C(),g=b("input"),j=C(),_=b("button"),P=R(S),this.h()},l(t){e=v(t,"P",{class:!0,"data-svelte-h":!0}),I(e)!=="svelte-jbdxtz"&&(e.textContent=r),s=w(t),n=v(t,"P",{"data-svelte-h":!0}),I(n)!=="svelte-1hfj7ju"&&(n.textContent=a),c=w(t),f=v(t,"P",{class:!0,"data-svelte-h":!0}),I(f)!=="svelte-10mpmck"&&(f.textContent=U),y=w(t),o=v(t,"INPUT",{type:!0,accept:!0,class:!0}),x=w(t),d=v(t,"P",{class:!0,"data-svelte-h":!0}),I(d)!=="svelte-17oba2g"&&(d.textContent=$),h=w(t),g=v(t,"INPUT",{type:!0,accept:!0,class:!0}),j=w(t),_=v(t,"BUTTON",{class:!0});var l=k(_);P=V(l,S),l.forEach(i),this.h()},h(){m(e,"class","text-center text-2xl"),m(f,"class","text-slate-500 mt-6 ps-2"),m(o,"type","file"),m(o,"accept",".csv"),m(o,"class","form-control mb-6"),m(d,"class","text-slate-500 ps-2"),m(g,"type","file"),m(g,"accept",".txt"),m(g,"class","form-control"),m(_,"class","btn-primary btn-lg mt-5 w-full"),_.disabled=E=p[2]||!p[0]?.files},m(t,l){u(t,e,l),u(t,s,l),u(t,n,l),u(t,c,l),u(t,f,l),u(t,y,l),u(t,o,l),p[4](o),u(t,x,l),u(t,d,l),u(t,h,l),u(t,g,l),p[5](g),u(t,j,l),u(t,_,l),M(_,P),N||(T=q(_,"click",p[6]),N=!0)},p(t,[l]){l&4&&S!==(S=t[2]?"Uploading":"Load in to Chart")&&z(P,S),l&5&&E!==(E=t[2]||!t[0]?.files)&&(_.disabled=E)},i:L,o:L,d(t){t&&(i(e),i(s),i(n),i(c),i(f),i(y),i(o),i(x),i(d),i(h),i(g),i(j),i(_)),p[4](null),p[5](null),N=!1,T()}}}function st(p,e,r){let s,n,a=!1;async function c(){if(!s.files)return;r(2,a=!0);const o=s.files[0],x=await o.text();let d="";if(n.files?.length&&(d=await n.files[0].text()),r(2,a=!1),d){console.log({c:d});const $=tt(d);W.update(h=>(h.sensorName={...h.sensorName,...$.sensors},console.log({p:h}),h))}X.set(new Y(x,o.name)),Q("/new")}function f(o){D[o?"unshift":"push"](()=>{s=o,r(0,s)})}function U(o){D[o?"unshift":"push"](()=>{n=o,r(1,n)})}return[s,n,a,c,f,U,()=>c()]}class nt extends H{constructor(e){super(),O(this,e,st,et,F,{})}}function lt(p){let e,r,s,n;return s=new nt({}),{c(){e=b("div"),r=b("div"),A(s.$$.fragment),this.h()},l(a){e=v(a,"DIV",{class:!0});var c=k(e);r=v(c,"DIV",{class:!0});var f=k(r);B(s.$$.fragment,f),f.forEach(i),c.forEach(i),this.h()},h(){m(r,"class","p-8 rounded-xl border border-slate-500 bg-slate-800"),m(e,"class","flex items-center justify-center h-full")},m(a,c){u(a,e,c),M(e,r),J(s,r,null),n=!0},p:L,i(a){n||(Z(s.$$.fragment,a),n=!0)},o(a){G(s.$$.fragment,a),n=!1},d(a){a&&i(e),K(s)}}}class ct extends H{constructor(e){super(),O(this,e,null,lt,F,{})}}export{ct as component};
