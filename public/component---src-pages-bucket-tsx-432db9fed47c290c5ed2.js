"use strict";(self.webpackChunkfirstleaf_challenge=self.webpackChunkfirstleaf_challenge||[]).push([[597],{6209:function(e,t,n){n.d(t,{A:function(){return a}});var l=n(6540);var a=function(e){let{seconds:t,label:n="Reserving your wines for",loop:a=!1,customClass:c="",onFinish:s=()=>{}}=e;const{0:o,1:u}=(0,l.useState)(t);(0,l.useEffect)((()=>{const e=setInterval((()=>{u((e=>e>0?e-1:a?t:0))}),1e3);return()=>clearInterval(e)}),[a,o]),(0,l.useEffect)((()=>{0===o&&s()}),[o,s]);const r=(0,l.useMemo)((()=>Math.floor(o/60)),[o]),i=(0,l.useMemo)((()=>o%60),[o]),m=(0,l.useMemo)((()=>`00:${`0${r}`.slice(-2)}:${`0${i}`.slice(-2)}`),[r,i]);return l.createElement("div",{className:`index-module--countdown--a2363 ${c}`},n&&l.createElement("div",{className:"index-module--label--41e86 countdown-label"},n),l.createElement("div",{className:"index-module--counter--9f104 countdown-counter"},m))}},9562:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var l=n(6540),a=n(6209);const c=e=>{let{batchSize:t,onBatchFull:n,...a}=e;const{0:c,1:s}=(0,l.useState)(0);return l.createElement("button",Object.assign({type:"button",onClick:()=>{const e=c%t==0&&c>1;s(c+1),e&&n(t)},className:"index-module--button--75c6f"},a),c," glasses poured")};var s=()=>{const{0:e,1:t}=(0,l.useState)(0),{0:n,1:s}=(0,l.useState)(!1);return l.createElement(l.Fragment,null,n&&l.createElement("h1",null,"Total ",e),!n&&!!e&&l.createElement(a.A,{key:(new Date).toISOString(),seconds:5,label:"",onFinish:()=>s(!0)}),l.createElement(c,{onBatchFull:()=>{t(e+1)},batchSize:3,disabled:n}))};var o=()=>l.createElement("div",null,l.createElement("h1",null,"Sample content"),l.createElement(s,null))}}]);
//# sourceMappingURL=component---src-pages-bucket-tsx-432db9fed47c290c5ed2.js.map