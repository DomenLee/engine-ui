import{V as k,a as f}from"./index-e2084819.js";import{V as p,_ as v,c as w,a as H}from"./use-translate-ee29e3a6.js";import{u as F}from"./use-expose-036fc7b9.js";import{A as y,D as b,x as g,e as o,u as x,r as V,o as N,a as P,w as r,C as t,d as h,t as D,F as B}from"./vue-libs-b2a2f6f9.js";import{c as W,m as A,t as E,w as G}from"./with-install-80752cfa.js";import{s as I}from"./function-call-cc6dccb0.js";import"./constant-a81ffd37.js";import"./use-route-efd4b866.js";import"./index-371c1dc5.js";import"./index-3a4224e7.js";import"./mount-component-eb64eb4f.js";import"./index-b4bc783b.js";import"./use-touch-8f92051d.js";import"./use-lazy-render-927fe2b4.js";import"./on-popup-reopen-e5b691e6.js";import"./index-a0e83f53.js";import"./interceptor-b9f6d9ac.js";import"./index-6e04c06e.js";function M(e,s){const{days:a}=s;let{hours:l,minutes:i,seconds:c,milliseconds:m}=s;if(e.includes("DD")?e=e.replace("DD",p(a)):l+=a*24,e.includes("HH")?e=e.replace("HH",p(l)):i+=l*60,e.includes("mm")?e=e.replace("mm",p(i)):c+=i*60,e.includes("ss")?e=e.replace("ss",p(c)):m+=c*1e3,e.includes("S")){const u=p(m,3);e.includes("SSS")?e=e.replace("SSS",u):e.includes("SS")?e=e.replace("SS",u.slice(0,2)):e=e.replace("S",u.charAt(0))}return e}const[U,z]=w("count-down"),R={time:W(0),format:A("HH:mm:ss"),autoStart:E,millisecond:Boolean},T=y({name:U,props:R,emits:["change","finish"],setup(e,{emit:s,slots:a}){const{start:l,pause:i,reset:c,current:m}=v({time:+e.time,millisecond:e.millisecond,onChange:C=>s("change",C),onFinish:()=>s("finish")}),u=b(()=>M(e.format,m.value)),n=()=>{c(+e.time),e.autoStart&&l()};return g(()=>e.time,n,{immediate:!0}),F({start:l,pause:i,reset:n}),()=>o("div",{role:"timer",class:z()},[a.default?a.default(m.value):u.value])}}),Z=G(T),_=Z,j={class:"block"},q=h("span",{class:"colon"},":",-1),J={class:"block"},K=h("span",{class:"colon"},":",-1),L={class:"block"},pe=y({__name:"index",setup(e){const s=H({"zh-CN":{reset:"重置",pause:"暂停",start:"开始",finished:"倒计时结束",millisecond:"毫秒级渲染",customStyle:"自定义样式",customFormat:"自定义格式",manualControl:"手动控制",formatWithDay:"DD 天 HH 时 mm 分 ss 秒"},"en-US":{reset:"Reset",pause:"Pause",start:"Start",finished:"Finished",millisecond:"Millisecond",customStyle:"Custom Style",customFormat:"Custom Format",manualControl:"Manual Control",formatWithDay:"DD Day, HH:mm:ss"}}),a=x(30*60*60*1e3),l=x(),i=()=>{var n;(n=l.value)==null||n.start()},c=()=>{var n;(n=l.value)==null||n.pause()},m=()=>{var n;(n=l.value)==null||n.reset()},u=()=>I(s("finished"));return(n,C)=>{const d=V("demo-block");return N(),P(B,null,[o(d,{title:t(s)("basicUsage")},{default:r(()=>[o(t(_),{time:a.value},null,8,["time"])]),_:1},8,["title"]),o(d,{title:t(s)("customFormat")},{default:r(()=>[o(t(_),{time:a.value,format:t(s)("formatWithDay")},null,8,["time","format"])]),_:1},8,["title"]),o(d,{title:t(s)("millisecond")},{default:r(()=>[o(t(_),{millisecond:"",time:a.value,format:"HH:mm:ss:SS"},null,8,["time"])]),_:1},8,["title"]),o(d,{title:t(s)("customStyle")},{default:r(()=>[o(t(_),{time:a.value},{default:r(S=>[h("span",j,D(S.hours),1),q,h("span",J,D(S.minutes),1),K,h("span",L,D(S.seconds),1)]),_:1},8,["time"])]),_:1},8,["title"]),o(d,{title:t(s)("manualControl")},{default:r(()=>[o(t(_),{ref_key:"countDown",ref:l,millisecond:"",time:3e3,"auto-start":!1,format:"ss:SSS",onFinish:u},null,512),o(t(k),{clickable:"","column-num":3},{default:r(()=>[o(t(f),{icon:"play-circle-o",text:t(s)("start"),onClick:i},null,8,["text"]),o(t(f),{icon:"pause-circle-o",text:t(s)("pause"),onClick:c},null,8,["text"]),o(t(f),{icon:"replay",text:t(s)("reset"),onClick:m},null,8,["text"])]),_:1})]),_:1},8,["title"])],64)}}});export{pe as default};
