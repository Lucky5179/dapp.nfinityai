var F=Object.defineProperty;var G=(t,e,n)=>e in t?F(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>G(t,typeof e!="symbol"?e+"":e,n);function M(){}const mt=t=>t;function U(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function pt(){return Object.create(null)}function K(t){t.forEach(J)}function Q(t){return typeof t=="function"}function yt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let p;function gt(t,e){return t===e?!0:(p||(p=document.createElement("a")),p.href=e,t===p.href)}function bt(t){return Object.keys(t).length===0}function P(t,...e){if(t==null){for(const i of e)i(void 0);return M}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function xt(t){let e;return P(t,n=>e=n)(),e}function wt(t,e,n){t.$$.on_destroy.push(P(e,n))}function Et(t,e,n,i){if(t){const s=S(t,e,n,i);return t[0](s)}}function S(t,e,n,i){return t[1]&&i?U(n.ctx.slice(),t[1](i(e))):n.ctx}function vt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)o[l]=e.dirty[l]|s[l];return o}return e.dirty|s}return e.dirty}function Tt(t,e,n,i,s,o){if(s){const r=S(e,n,i,o);t.p(r,s)}}function Nt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function kt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function At(t){const e={};for(const n in t)e[n]=!0;return e}function Ct(t){return t??""}function jt(t,e,n){return t.set(n),e}function Dt(t){return t&&Q(t.destroy)?t.destroy:M}function Ht(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}let x=!1;function Lt(){x=!0}function Mt(){x=!1}function V(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function X(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&c.push(u)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,u=(s>0&&e[n[s]].claim_order<=a?s+1:V(1,s,I=>e[n[I]].claim_order,a))-1;i[c]=n[u]+1;const j=u+1;n[j]=c,s=Math.max(j,s)}const o=[],r=[];let l=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);l>=c;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);o.reverse(),r.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<r.length;c++){for(;a<o.length&&r[c].claim_order>=o[a].claim_order;)a++;const u=a<o.length?o[a]:null;t.insertBefore(r[c],u)}}function O(t,e){t.appendChild(e)}function Y(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Pt(t){const e=w("style");return e.textContent="/* empty */",Z(Y(t),e),e.sheet}function Z(t,e){return O(t.head||t,e),e.sheet}function $(t,e){if(x){for(X(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function tt(t,e,n){t.insertBefore(e,n||null)}function et(t,e,n){x&&!n?$(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function g(t){t.parentNode&&t.parentNode.removeChild(t)}function St(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function Ot(){return A(" ")}function zt(){return A("")}function D(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function qt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function C(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const nt=["width","height"];function it(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&nt.indexOf(i)===-1?t[i]=e[i]:C(t,i,e[i])}function Bt(t,e){for(const n in e)C(t,n,e[n])}function st(t,e){Object.keys(e).forEach(n=>{rt(t,n,e[n])})}function rt(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:C(t,e,n)}function Rt(t){return/-/.test(t)?st:it}function Wt(t){return t.dataset.svelteH}function It(t){return t===""?null:+t}function Ft(t){return Array.from(t.childNodes)}function q(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,e,n,i,s=!1){q(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function R(t,e,n,i){return B(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||o.push(l.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Gt(t,e,n){return R(t,e,n,w)}function Ut(t,e,n){return R(t,e,n,z)}function ot(t,e){return B(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>A(e),!0)}function Jt(t){return ot(t," ")}function H(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function Kt(t,e){const n=H(t,"HTML_TAG_START",0),i=H(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new E(e);q(t);const s=t.splice(n,i-n+1);g(s[0]),g(s[s.length-1]);const o=s.slice(1,s.length-1);if(o.length===0)return new E(e);for(const r of o)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new E(e,o)}function Qt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Vt(t,e){t.value=e??""}function Xt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function Yt(t,e,n){for(let i=0;i<t.options.length;i+=1){const s=t.options[i];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}let y;function ct(){if(y===void 0){y=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{y=!0}}return y}function Zt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=w("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=ct();let o;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=D(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{o=D(i.contentWindow,"resize",e),e()}),O(t,i),()=>{(s||o&&i.contentWindow)&&o(),g(i)}}function $t(t,e,n){t.classList.toggle(e,!!n)}function lt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function te(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const o=s.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(s)):o===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class at{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=z(n.nodeName):this.e=w(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)tt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(g)}}class E extends at{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)et(this.t,this.n[i],n)}}function ee(t,e){return new t(e)}let b;function v(t){b=t}function h(){if(!b)throw new Error("Function called outside component initialization");return b}function ne(t){h().$$.on_mount.push(t)}function ie(t){h().$$.after_update.push(t)}function se(t){h().$$.on_destroy.push(t)}function re(){const t=h();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const o=lt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,o)}),!o.defaultPrevented}return!0}}function oe(t,e){return h().$$.context.set(t,e),e}function ce(t){return h().$$.context.get(t)}function le(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const m=[],L=[];let d=[];const N=[],W=Promise.resolve();let k=!1;function ut(){k||(k=!0,W.then(_t))}function ae(){return ut(),W}function ft(t){d.push(t)}function ue(t){N.push(t)}const T=new Set;let _=0;function _t(){if(_!==0)return;const t=b;do{try{for(;_<m.length;){const e=m[_];_++,v(e),dt(e.$$)}}catch(e){throw m.length=0,_=0,e}for(v(null),m.length=0,_=0;L.length;)L.pop()();for(let e=0;e<d.length;e+=1){const n=d[e];T.has(n)||(T.add(n),n())}d.length=0}while(m.length);for(;N.length;)N.pop()();k=!1,T.clear(),v(t)}function dt(t){if(t.fragment!==null){t.update(),K(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ft)}}function fe(t){const e=[],n=[];d.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),d=e}export{bt as $,D as A,Kt as B,Rt as C,P as D,K as E,Ct as F,U as G,E as H,Xt as I,ft as J,Zt as K,mt as L,Ht as M,re as N,Et as O,Tt as P,Nt as Q,vt as R,ie as S,ee as T,ae as U,xt as V,Y as W,Pt as X,lt as Y,pt as Z,_t as _,Ot as a,fe as a0,b as a1,v as a2,J as a3,m as a4,ut as a5,Lt as a6,Mt as a7,jt as a8,qt as a9,le as aa,te as ab,z as ac,Ut as ad,At as ae,Vt as af,kt as ag,it as ah,Bt as ai,It as aj,Yt as ak,oe as al,ce as am,L as b,Gt as c,Ft as d,w as e,Jt as f,g,C as h,et as i,$ as j,Dt as k,ue as l,Q as m,wt as n,ne as o,se as p,ot as q,Qt as r,yt as s,A as t,zt as u,St as v,Wt as w,M as x,gt as y,$t as z};
