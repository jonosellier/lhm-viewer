import{s as Pe,e as g,c as v,b as S,f as h,m as i,i as T,h as u,n as _e,k as Ne,a as C,o as Y,l as j,g as x,p as de,q as I,r as fe,t as J,d as K,u as B,j as Z}from"../chunks/scheduler.DNAvik3t.js";import{S as Ee,i as Se}from"../chunks/index.CWoPOsBs.js";import{u as Ie,s as Oe,c as De,a as Be,r as Re,b as Ae}from"../chunks/db.BOekXQCd.js";function je(s){let e,t,c="Log In",o,r,l="Sign Up",d,n,y,a;function _(p,N){return p[4]==="login"?Le:He}let m=_(s),b=m(s);return{c(){e=g("div"),t=g("button"),t.textContent=c,o=C(),r=g("button"),r.textContent=l,d=C(),b.c(),n=Y(),this.h()},l(p){e=v(p,"DIV",{class:!0});var N=S(e);t=v(N,"BUTTON",{class:!0,"data-svelte-h":!0}),j(t)!=="svelte-1r71573"&&(t.textContent=c),o=x(N),r=v(N,"BUTTON",{class:!0,"data-svelte-h":!0}),j(r)!=="svelte-a2l2v0"&&(r.textContent=l),N.forEach(h),d=x(p),b.l(p),n=Y(),this.h()},h(){i(t,"class","rounded px-2 py-1 text-lg text-slate-500 bg-slate-700 hover:bg-slate-600 hover:text-orange-600"),de(t,"active",s[4]==="login"),i(r,"class","rounded px-2 py-1 text-lg text-slate-500 bg-slate-700 hover:bg-slate-600 hover:text-orange-600"),de(r,"active",s[4]==="signup"),i(e,"class","flex items-center")},m(p,N){T(p,e,N),u(e,t),u(e,o),u(e,r),T(p,d,N),b.m(p,N),T(p,n,N),y||(a=[I(t,"click",s[18]),I(r,"click",s[19])],y=!0)},p(p,N){N&16&&de(t,"active",p[4]==="login"),N&16&&de(r,"active",p[4]==="signup"),m===(m=_(p))&&b?b.p(p,N):(b.d(1),b=m(p),b&&(b.c(),b.m(n.parentNode,n)))},d(p){p&&(h(e),h(d),h(n)),b.d(p),y=!1,fe(a)}}}function Ve(s){let e,t="Account details",c,o,r,l,d="Email",n,y,a=s[9].email+"",_,m,b,p,N="Account confirmed",E,w,k=(s[9].confirmed_at?new Date(s[9].confirmed_at).toLocaleString("en-US",{dateStyle:"short",timeStyle:"short"}):"Account Unconfirmed")+"",q,Q,G,W,L,le="Update Password",X,P,V,$,H,ee,F,pe,M,ce,re,be,se,oe,ne,te,ae,z,me="Log out",he,ge,R=s[3]!==s[2]&&xe(),O=s[5].user&&Te(s),D=s[5].error&&Ue(s);return{c(){e=g("h2"),e.textContent=t,c=C(),o=g("table"),r=g("tr"),l=g("th"),l.textContent=d,n=C(),y=g("td"),_=J(a),m=C(),b=g("tr"),p=g("th"),p.textContent=N,E=C(),w=g("td"),q=J(k),Q=C(),G=g("hr"),W=C(),L=g("h2"),L.textContent=le,X=C(),P=g("form"),V=g("input"),$=C(),H=g("input"),ee=C(),F=g("input"),pe=C(),M=g("button"),ce=J("Change Password"),be=C(),R&&R.c(),se=C(),O&&O.c(),oe=C(),D&&D.c(),ne=C(),te=g("hr"),ae=C(),z=g("button"),z.textContent=me,this.h()},l(f){e=v(f,"H2",{class:!0,"data-svelte-h":!0}),j(e)!=="svelte-19yu7ia"&&(e.textContent=t),c=x(f),o=v(f,"TABLE",{});var U=S(o);r=v(U,"TR",{});var ue=S(r);l=v(ue,"TH",{class:!0,"data-svelte-h":!0}),j(l)!=="svelte-5xg8wn"&&(l.textContent=d),n=x(ue),y=v(ue,"TD",{});var ve=S(y);_=K(ve,a),ve.forEach(h),ue.forEach(h),m=x(U),b=v(U,"TR",{});var ie=S(b);p=v(ie,"TH",{class:!0,"data-svelte-h":!0}),j(p)!=="svelte-dkqbrh"&&(p.textContent=N),E=x(ie),w=v(ie,"TD",{});var ye=S(w);q=K(ye,k),ye.forEach(h),ie.forEach(h),U.forEach(h),Q=x(f),G=v(f,"HR",{class:!0}),W=x(f),L=v(f,"H2",{class:!0,"data-svelte-h":!0}),j(L)!=="svelte-1fpf2z6"&&(L.textContent=le),X=x(f),P=v(f,"FORM",{});var A=S(P);V=v(A,"INPUT",{type:!0,class:!0,placeholder:!0}),$=x(A),H=v(A,"INPUT",{type:!0,class:!0,placeholder:!0}),ee=x(A),F=v(A,"INPUT",{type:!0,class:!0,placeholder:!0}),pe=x(A),M=v(A,"BUTTON",{class:!0,type:!0});var we=S(M);ce=K(we,"Change Password"),we.forEach(h),be=x(A),R&&R.l(A),se=x(A),O&&O.l(A),oe=x(A),D&&D.l(A),A.forEach(h),ne=x(f),te=v(f,"HR",{class:!0}),ae=x(f),z=v(f,"BUTTON",{class:!0,"data-svelte-h":!0}),j(z)!=="svelte-ex81pg"&&(z.textContent=me),this.h()},h(){i(e,"class","text-lg uppercase font-bold text-slate-400"),i(l,"class","text-start pe-2"),i(p,"class","text-start pe-2"),i(G,"class","my-8 border-slate-500"),i(L,"class","text-lg uppercase font-bold text-slate-400 mt-5"),i(V,"type","password"),i(V,"class","border border-slate-500 bg-slate-900 hover:border-orange-600 focus:border-orange-600 text-white text-lg px-3 py-2 block my-2 rounded-lg w-full"),i(V,"placeholder","Current Password"),i(H,"type","password"),i(H,"class","border border-slate-500 bg-slate-900 hover:border-orange-600 focus:border-orange-600 text-white text-lg px-3 py-2 block my-2 rounded-lg w-full"),i(H,"placeholder","New Password"),i(F,"type","password"),i(F,"class","border border-slate-500 bg-slate-900 hover:border-orange-600 focus:border-orange-600 text-white text-lg px-3 py-2 block my-2 rounded-lg w-full"),i(F,"placeholder","Confirm New Password"),i(M,"class","text-lg px-3 py-2 block my-2 rounded-lg w-full bg-orange-600 text-white hover:bg-orange-500"),M.disabled=re=!s[1]||s[3]!==s[2],i(M,"type","submit"),i(te,"class","my-8 border-slate-500"),i(z,"class","btn-lg bg-red-700 border-red-500 text-red-100 w-full")},m(f,U){T(f,e,U),T(f,c,U),T(f,o,U),u(o,r),u(r,l),u(r,n),u(r,y),u(y,_),u(o,m),u(o,b),u(b,p),u(b,E),u(b,w),u(w,q),T(f,Q,U),T(f,G,U),T(f,W,U),T(f,L,U),T(f,X,U),T(f,P,U),u(P,V),B(V,s[1]),u(P,$),u(P,H),B(H,s[3]),u(P,ee),u(P,F),B(F,s[2]),u(P,pe),u(P,M),u(M,ce),u(P,be),R&&R.m(P,null),u(P,se),O&&O.m(P,null),u(P,oe),D&&D.m(P,null),T(f,ne,U),T(f,te,U),T(f,ae,U),T(f,z,U),he||(ge=[I(V,"input",s[13]),I(H,"input",s[14]),I(F,"input",s[15]),I(P,"submit",s[12]),I(z,"click",Ae)],he=!0)},p(f,U){U&512&&a!==(a=f[9].email+"")&&Z(_,a),U&512&&k!==(k=(f[9].confirmed_at?new Date(f[9].confirmed_at).toLocaleString("en-US",{dateStyle:"short",timeStyle:"short"}):"Account Unconfirmed")+"")&&Z(q,k),U&2&&V.value!==f[1]&&B(V,f[1]),U&8&&H.value!==f[3]&&B(H,f[3]),U&4&&F.value!==f[2]&&B(F,f[2]),U&14&&re!==(re=!f[1]||f[3]!==f[2])&&(M.disabled=re),f[3]!==f[2]?R||(R=xe(),R.c(),R.m(P,se)):R&&(R.d(1),R=null),f[5].user?O?O.p(f,U):(O=Te(f),O.c(),O.m(P,oe)):O&&(O.d(1),O=null),f[5].error?D?D.p(f,U):(D=Ue(f),D.c(),D.m(P,null)):D&&(D.d(1),D=null)},d(f){f&&(h(e),h(c),h(o),h(Q),h(G),h(W),h(L),h(X),h(P),h(ne),h(te),h(ae),h(z)),R&&R.d(),O&&O.d(),D&&D.d(),he=!1,fe(ge)}}}function He(s){let e,t,c,o,r,l,d,n,y=s[8].text+"",a,_,m,b,p,N,E=s[6].error&&ke(s);return{c(){e=g("form"),t=g("input"),c=C(),o=g("input"),r=C(),l=g("input"),d=C(),n=g("button"),a=J(y),m=C(),E&&E.c(),b=Y(),this.h()},l(w){e=v(w,"FORM",{});var k=S(e);t=v(k,"INPUT",{type:!0,class:!0,placeholder:!0}),c=x(k),o=v(k,"INPUT",{type:!0,class:!0,placeholder:!0}),r=x(k),l=v(k,"INPUT",{type:!0,class:!0,placeholder:!0}),d=x(k),n=v(k,"BUTTON",{class:!0,type:!0});var q=S(n);a=K(q,y),q.forEach(h),k.forEach(h),m=x(w),E&&E.l(w),b=Y(),this.h()},h(){i(t,"type","email"),i(t,"class","border border-slate-500 bg-slate-900 hover:border-orange-600 focus:border-orange-600 text-white text-lg px-3 py-2 block my-2 rounded-lg w-full"),i(t,"placeholder","Email"),i(o,"type","password"),i(o,"class","border border-slate-500 bg-slate-900 hover:border-orange-600 focus:border-orange-600 text-white text-lg px-3 py-2 block my-2 rounded-lg w-full"),i(o,"placeholder","Password"),i(l,"type","password"),i(l,"class","border border-slate-500 bg-slate-900 hover:border-orange-600 focus:border-orange-600 text-white text-lg px-3 py-2 block my-2 rounded-lg w-full"),i(l,"placeholder","Confirm"),i(n,"class","text-lg px-3 py-2 block my-2 rounded-lg w-full bg-orange-600 border-orange-600 text-white hover:bg-orange-500 disabled:bg-slate-700 border disabled:border-slate-500"),n.disabled=_=!s[8].valid,i(n,"type","submit")},m(w,k){T(w,e,k),u(e,t),B(t,s[0]),u(e,c),u(e,o),B(o,s[1]),u(e,r),u(e,l),B(l,s[2]),u(e,d),u(e,n),u(n,a),T(w,m,k),E&&E.m(w,k),T(w,b,k),p||(N=[I(t,"input",s[23]),I(o,"input",s[24]),I(l,"input",s[25]),I(e,"submit",s[11])],p=!0)},p(w,k){k&1&&t.value!==w[0]&&B(t,w[0]),k&2&&o.value!==w[1]&&B(o,w[1]),k&4&&l.value!==w[2]&&B(l,w[2]),k&256&&y!==(y=w[8].text+"")&&Z(a,y),k&256&&_!==(_=!w[8].valid)&&(n.disabled=_),w[6].error?E?E.p(w,k):(E=ke(w),E.c(),E.m(b.parentNode,b)):E&&(E.d(1),E=null)},d(w){w&&(h(e),h(m),h(b)),E&&E.d(w),p=!1,fe(N)}}}function Le(s){let e,t,c,o,r,l,d="Sign In",n,y,a,_,m=s[7].error&&Ce(s);return{c(){e=g("form"),t=g("input"),c=C(),o=g("input"),r=C(),l=g("button"),l.textContent=d,n=C(),m&&m.c(),y=Y(),this.h()},l(b){e=v(b,"FORM",{});var p=S(e);t=v(p,"INPUT",{type:!0,class:!0,placeholder:!0}),c=x(p),o=v(p,"INPUT",{type:!0,class:!0,placeholder:!0}),r=x(p),l=v(p,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),j(l)!=="svelte-1ba7zwk"&&(l.textContent=d),p.forEach(h),n=x(b),m&&m.l(b),y=Y(),this.h()},h(){i(t,"type","email"),i(t,"class","border border-slate-500 bg-slate-900 hover:border-orange-600 focus:border-orange-600 text-white text-lg px-3 py-2 block my-2 rounded-lg w-full"),i(t,"placeholder","Email"),i(o,"type","password"),i(o,"class","border border-slate-500 bg-slate-900 hover:border-orange-600 focus:border-orange-600 text-white text-lg px-3 py-2 block my-2 rounded-lg w-full"),i(o,"placeholder","Password"),i(l,"class","text-lg px-3 py-2 block my-2 rounded-lg w-full bg-orange-600 text-white hover:bg-orange-500"),i(l,"type","submit")},m(b,p){T(b,e,p),u(e,t),B(t,s[0]),u(e,c),u(e,o),B(o,s[1]),u(e,r),u(e,l),T(b,n,p),m&&m.m(b,p),T(b,y,p),a||(_=[I(t,"input",s[20]),I(o,"input",s[21]),I(e,"submit",s[10])],a=!0)},p(b,p){p&1&&t.value!==b[0]&&B(t,b[0]),p&2&&o.value!==b[1]&&B(o,b[1]),b[7].error?m?m.p(b,p):(m=Ce(b),m.c(),m.m(y.parentNode,y)):m&&(m.d(1),m=null)},d(b){b&&(h(e),h(n),h(y)),m&&m.d(b),a=!1,fe(_)}}}function ke(s){let e,t,c=s[6].error+"",o,r,l,d="×",n,y;return{c(){e=g("div"),t=g("span"),o=J(c),r=C(),l=g("button"),l.textContent=d,this.h()},l(a){e=v(a,"DIV",{class:!0});var _=S(e);t=v(_,"SPAN",{});var m=S(t);o=K(m,c),m.forEach(h),r=x(_),l=v(_,"BUTTON",{class:!0,"data-svelte-h":!0}),j(l)!=="svelte-14r7hjy"&&(l.textContent=d),_.forEach(h),this.h()},h(){i(l,"class","text-red-100 hover:bg-red-900 rounded-full px-1"),i(e,"class","my-5 p-3 bg-red-800 border border-red-400 text-red-100 rounded-lg flex justify-between")},m(a,_){T(a,e,_),u(e,t),u(t,o),u(e,r),u(e,l),n||(y=I(l,"click",s[26]),n=!0)},p(a,_){_&64&&c!==(c=a[6].error+"")&&Z(o,c)},d(a){a&&h(e),n=!1,y()}}}function Ce(s){let e,t,c=s[7].error+"",o,r,l,d="Forgot password",n,y;return{c(){e=g("div"),t=g("span"),o=J(c),r=C(),l=g("button"),l.textContent=d,this.h()},l(a){e=v(a,"DIV",{class:!0});var _=S(e);t=v(_,"SPAN",{});var m=S(t);o=K(m,c),m.forEach(h),r=x(_),l=v(_,"BUTTON",{class:!0,"data-svelte-h":!0}),j(l)!=="svelte-1jsycm8"&&(l.textContent=d),_.forEach(h),this.h()},h(){i(l,"class","btn-sm hover:bg-red-900 hover:underline decoration-red-400 border-transparent"),i(e,"class","my-5 p-3 bg-red-800 border border-red-400 text-red-100 rounded-lg flex justify-between")},m(a,_){T(a,e,_),u(e,t),u(t,o),u(e,r),u(e,l),n||(y=I(l,"click",s[22]),n=!0)},p(a,_){_&128&&c!==(c=a[7].error+"")&&Z(o,c)},d(a){a&&h(e),n=!1,y()}}}function xe(s){let e,t="Passwords do not match";return{c(){e=g("div"),e.textContent=t,this.h()},l(c){e=v(c,"DIV",{class:!0,"data-svelte-h":!0}),j(e)!=="svelte-aya89g"&&(e.textContent=t),this.h()},h(){i(e,"class","my-5 p-3 bg-red-800 border border-red-400 text-red-100 rounded-lg")},m(c,o){T(c,e,o)},d(c){c&&h(e)}}}function Te(s){let e,t,c="Password changed successfully",o,r,l="×",d,n;return{c(){e=g("div"),t=g("span"),t.textContent=c,o=C(),r=g("button"),r.textContent=l,this.h()},l(y){e=v(y,"DIV",{class:!0});var a=S(e);t=v(a,"SPAN",{"data-svelte-h":!0}),j(t)!=="svelte-1k8fe8k"&&(t.textContent=c),o=x(a),r=v(a,"BUTTON",{class:!0,"data-svelte-h":!0}),j(r)!=="svelte-1l2hdi4"&&(r.textContent=l),a.forEach(h),this.h()},h(){i(r,"class","text-emerald-100 hover:bg-emerald-900 rounded-full px-1"),i(e,"class","my-5 p-3 bg-emerald-800 border border-emerald-400 text-emerald-100 rounded-lg flex justify-between")},m(y,a){T(y,e,a),u(e,t),u(e,o),u(e,r),d||(n=I(r,"click",s[16]),d=!0)},p:_e,d(y){y&&h(e),d=!1,n()}}}function Ue(s){let e,t,c=s[5].error+"",o,r,l,d="×",n,y;return{c(){e=g("div"),t=g("span"),o=J(c),r=C(),l=g("button"),l.textContent=d,this.h()},l(a){e=v(a,"DIV",{class:!0});var _=S(e);t=v(_,"SPAN",{});var m=S(t);o=K(m,c),m.forEach(h),r=x(_),l=v(_,"BUTTON",{class:!0,"data-svelte-h":!0}),j(l)!=="svelte-1xg1ys2"&&(l.textContent=d),_.forEach(h),this.h()},h(){i(l,"class","text-red-100 hover:bg-red-900 rounded-full px-1"),i(e,"class","my-5 p-3 bg-red-800 border border-red-400 text-red-100 rounded-lg flex justify-between")},m(a,_){T(a,e,_),u(e,t),u(t,o),u(e,r),u(e,l),n||(y=I(l,"click",s[17]),n=!0)},p(a,_){_&32&&c!==(c=a[5].error+"")&&Z(o,c)},d(a){a&&h(e),n=!1,y()}}}function Fe(s){let e,t;function c(l,d){return l[9]?Ve:je}let o=c(s),r=o(s);return{c(){e=g("div"),t=g("div"),r.c(),this.h()},l(l){e=v(l,"DIV",{class:!0});var d=S(e);t=v(d,"DIV",{class:!0});var n=S(t);r.l(n),n.forEach(h),d.forEach(h),this.h()},h(){i(t,"class","p-5 border border-slate-500 rounded max-w-md w-full bg-slate-700"),i(e,"class","flex justify-center items-center w-full h-full")},m(l,d){T(l,e,d),u(e,t),r.m(t,null)},p(l,[d]){o===(o=c(l))&&r?r.p(l,d):(r.d(1),r=o(l),r&&(r.c(),r.m(t,null)))},i:_e,o:_e,d(l){l&&h(e),r.d()}}}function qe(s,e,t){return s?e?e.length<8?{valid:!1,text:"Password must be 8 characters"}:e!==t?{valid:!1,text:"Passwords do not match"}:{valid:!0,text:"Sign Up"}:{valid:!1,text:"Enter your password"}:{valid:!1,text:"Enter your email"}}function Me(s,e,t){let c,o;Ne(s,Ie,ee=>t(9,o=ee));let r,l,d,n,y="login",a={},_={},m={};async function b(){t(7,m=await Oe({email:r,password:d})),m.error||t(1,d=t(2,n=t(3,l="")))}async function p(){t(6,_=await De({email:r,password:d})),_.error||t(1,d=t(2,n=t(3,l="")))}async function N(){t(5,a=await Be(d,l,n)),a.error||t(1,d=t(2,n=t(3,l="")))}function E(){d=this.value,t(1,d)}function w(){l=this.value,t(3,l)}function k(){n=this.value,t(2,n)}const q=()=>t(5,a={}),Q=()=>t(5,a={}),G=()=>{t(4,y="login")},W=()=>{t(4,y="signup")};function L(){r=this.value,t(0,r)}function le(){d=this.value,t(1,d)}const X=async()=>t(7,m=await Re(r));function P(){r=this.value,t(0,r)}function V(){d=this.value,t(1,d)}function $(){n=this.value,t(2,n)}const H=()=>t(6,_={});return s.$$.update=()=>{s.$$.dirty&7&&t(8,c=qe(r,d,n))},[r,d,n,l,y,a,_,m,c,o,b,p,N,E,w,k,q,Q,G,W,L,le,X,P,V,$,H]}class Ke extends Ee{constructor(e){super(),Se(this,e,Me,Fe,Pe,{})}}export{Ke as component};
