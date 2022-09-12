import{I as F,J as Se,K as we,c as M,i as K,L as Ce,b as ke,G as Ie,M as xe,o as Be,n as Re,p as $e,N as Ae,h as p,z as Pe,O as ee,r as te,e as Ne,u as Oe}from"./use-translate.4bd55976.js";import{n as R,t as E,d as W,m as ze,c as j,u as Le,w as ie}from"./with-install.4d0ca77e.js";import{A as V,D as C,e as h,Q as oe,x,y as B,N as je,H as _e,q as I,L as Ee,B as Me,E as Ve,I as De,j as He,v as We}from"./vue-libs.34a885a4.js";import{u as re}from"./use-id.50875a37.js";import{u as q}from"./use-expose.2b4664c4.js";import{a as Ze,r as Fe}from"./use-route.d291d507.js";import{S as Ke,a as qe}from"./index.2a52fe0c.js";import{b as Ue}from"./constant.80c6de18.js";import{c as Xe}from"./interceptor.442e99c6.js";import{u as Ye}from"./use-refs.f3963423.js";import{o as Ge}from"./on-popup-reopen.550cf80c.js";import{S as Je}from"./index.e7b5d703.js";import{B as Qe}from"./index.3e55758c.js";function pe(e,o,i){let f=0;const a=e.scrollLeft,b=i===0?1:Math.round(i*1e3/16);function c(){e.scrollLeft+=(o-a)/b,++f<b&&F(c)}c()}function et(e,o,i,f){let a=Se(e);const b=a<o,c=i===0?1:Math.round(i*1e3/16),u=(o-a)/c;function l(){a+=u,(b&&a>o||!b&&a<o)&&(a=o),we(e,a),b&&a<o||!b&&a>o?F(l):f&&F(f)}l()}function tt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!oe(e)}const[nt,ne]=M("tab"),at=V({name:nt,props:{id:String,dot:Boolean,type:String,color:String,title:String,badge:R,shrink:Boolean,isActive:Boolean,disabled:Boolean,controls:String,scrollable:Boolean,activeColor:String,inactiveColor:String,showZeroBadge:E},setup(e,{slots:o}){const i=C(()=>{const a={},{type:b,color:c,disabled:u,isActive:l,activeColor:m,inactiveColor:T}=e;c&&b==="card"&&(a.borderColor=c,u||(l?a.backgroundColor=c:a.color=c));const y=l?m:T;return y&&(a.color=y),a}),f=()=>{const a=h("span",{class:ne("text",{ellipsis:!e.scrollable})},[o.title?o.title():e.title]);return e.dot||K(e.badge)&&e.badge!==""?h(Qe,{dot:e.dot,content:e.badge,showZero:e.showZeroBadge},tt(a)?a:{default:()=>[a]}):a};return()=>h("div",{id:e.id,role:"tab",class:[ne([e.type,{grow:e.scrollable&&!e.shrink,shrink:e.shrink,active:e.isActive,disabled:e.disabled}])],style:i.value,tabindex:e.disabled?void 0:e.isActive?0:-1,"aria-selected":e.isActive,"aria-disabled":e.disabled||void 0,"aria-controls":e.controls},[f()])}});function it(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!oe(e)}const[ot,ae]=M("tabs"),rt=V({name:ot,props:{count:W(Number),inited:Boolean,animated:Boolean,duration:W(R),swipeable:Boolean,lazyRender:Boolean,currentIndex:W(Number)},emits:["change"],setup(e,{emit:o,slots:i}){const f=x(),a=u=>o("change",u),b=()=>{var l;const u=(l=i.default)==null?void 0:l.call(i);return e.animated||e.swipeable?h(Ke,{ref:f,loop:!1,class:ae("track"),duration:+e.duration*1e3,touchable:e.swipeable,lazyRender:e.lazyRender,showIndicators:!1,onChange:a},it(u)?u:{default:()=>[u]}):u},c=u=>{const l=f.value;l&&l.state.active!==u&&l.swipeTo(u,{immediate:!e.inited})};return B(()=>e.currentIndex,c),je(()=>{c(e.currentIndex)}),q({swipeRef:f}),()=>h("div",{class:ae("content",{animated:e.animated||e.swipeable})},[b()])}}),[le,_]=M("tabs"),lt={type:ze("line"),color:String,border:Boolean,sticky:Boolean,shrink:Boolean,active:j(0),duration:j(.3),animated:Boolean,ellipsis:E,swipeable:Boolean,scrollspy:Boolean,offsetTop:j(0),background:String,lazyRender:E,lineWidth:R,lineHeight:R,beforeChange:Function,swipeThreshold:j(5),titleActiveColor:String,titleInactiveColor:String},ce=Symbol(le),ct=V({name:le,props:lt,emits:["change","scroll","rendered","clickTab","update:active"],setup(e,{emit:o,slots:i}){let f,a,b;const c=x(),u=x(),l=x(),m=x(),T=re(),S=Ce(c),[y,D]=Ye(),{children:d,linkChildren:U}=ke(ce),s=_e({inited:!1,position:"",lineStyle:{},currentIndex:-1}),k=C(()=>d.length>e.swipeThreshold||!e.ellipsis||e.shrink),$=C(()=>({borderColor:e.color,background:e.background})),A=(t,n)=>{var r;return(r=t.name)!=null?r:n},X=C(()=>{const t=d[s.currentIndex];if(t)return A(t,s.currentIndex)}),H=C(()=>Ie(e.offsetTop)),Y=C(()=>e.sticky?H.value+f:0),P=t=>{const n=u.value,r=y.value;if(!k.value||!n||!r||!r[s.currentIndex])return;const v=r[s.currentIndex].$el,g=v.offsetLeft-(n.offsetWidth-v.offsetWidth)/2;pe(n,g,t?0:+e.duration)},w=()=>{const t=s.inited;I(()=>{const n=y.value;if(!n||!n[s.currentIndex]||e.type!=="line"||Ae(c.value))return;const r=n[s.currentIndex].$el,{lineWidth:v,lineHeight:g}=e,z=r.offsetLeft+r.offsetWidth/2,L={width:p(v),backgroundColor:e.color,transform:`translateX(${z}px) translateX(-50%)`};if(t&&(L.transitionDuration=`${e.duration}s`),K(g)){const Q=p(g);L.height=Q,L.borderRadius=Q}s.lineStyle=L})},de=t=>{const n=t<s.currentIndex?-1:1;for(;t>=0&&t<d.length;){if(!d[t].disabled)return t;t+=n}},N=t=>{const n=de(t);if(!K(n))return;const r=d[n],v=A(r,n),g=s.currentIndex!==null;s.currentIndex=n,v!==e.active&&(o("update:active",v),g&&o("change",v,r.title))},O=t=>{const n=d.find((v,g)=>A(v,g)===t),r=n?d.indexOf(n):0;N(r)},G=(t=!1)=>{if(e.scrollspy){const n=d[s.currentIndex].$el;if(n&&S.value){const r=ee(n,S.value)-Y.value;a=!0,et(S.value,r,t?0:+e.duration,()=>{a=!1})}}},ue=(t,n,r)=>{const{title:v,disabled:g}=d[n],z=A(d[n],n);g||(Xe(e.beforeChange,{args:[z],done:()=>{N(n),G()}}),Ze(t)),o("clickTab",{name:z,title:v,event:r,disabled:g})},fe=t=>{b=t.isFixed,o("scroll",t)},be=t=>{I(()=>{O(t),G(!0)})},ve=()=>{for(let t=0;t<d.length;t++){const{top:n}=te(d[t].$el);if(n>Y.value)return t===0?0:t-1}return d.length-1},he=()=>{if(e.scrollspy&&!a){const t=ve();N(t)}},me=()=>d.map((t,n)=>h(at,Me({key:t.id,id:`${T}-${n}`,ref:D(n),type:e.type,color:e.color,style:t.titleStyle,class:t.titleClass,shrink:e.shrink,isActive:n===s.currentIndex,controls:t.id,scrollable:k.value,activeColor:e.titleActiveColor,inactiveColor:e.titleInactiveColor,onClick:r=>ue(t,n,r)},$e(t,["dot","badge","title","disabled","showZeroBadge"])),{title:t.$slots.title})),ge=()=>{if(e.type==="line"&&d.length)return h("div",{class:_("line"),style:s.lineStyle},null)},J=()=>{var r,v;const{type:t,border:n}=e;return h("div",{ref:l,class:[_("wrap"),{[Ue]:t==="line"&&n}]},[h("div",{ref:u,role:"tablist",class:_("nav",[t,{shrink:e.shrink,complete:k.value}]),style:$.value,"aria-orientation":"horizontal"},[(r=i["nav-left"])==null?void 0:r.call(i),me(),ge(),(v=i["nav-right"])==null?void 0:v.call(i)])])};B([()=>e.color,xe],w),B(()=>e.active,t=>{t!==X.value&&O(t)}),B(()=>d.length,()=>{s.inited&&(O(e.active),w(),I(()=>{P(!0)}))}),B(()=>s.currentIndex,()=>{P(),w(),b&&!e.scrollspy&&Pe(Math.ceil(ee(c.value)-H.value))});const ye=()=>{O(e.active),I(()=>{s.inited=!0,l.value&&(f=te(l.value).height),P(!0)})},Te=(t,n)=>o("rendered",t,n);return q({resize:()=>{w(),I(()=>{var t,n;return(n=(t=m.value)==null?void 0:t.swipeRef.value)==null?void 0:n.resize()})},scrollTo:be}),Ee(w),Ge(w),Be(ye),Re("scroll",he,{target:S,passive:!0}),U({id:T,props:e,setLine:w,onRendered:Te,currentName:X,scrollIntoView:P}),()=>{var t;return h("div",{ref:c,class:_([e.type])},[e.sticky?h(Je,{container:c.value,offsetTop:H.value,onScroll:fe},{default:()=>{var n;return[J(),(n=i["nav-bottom"])==null?void 0:n.call(i)]}}):[J(),(t=i["nav-bottom"])==null?void 0:t.call(i)],h(rt,{ref:m,count:d.length,inited:s.inited,animated:e.animated,duration:e.duration,swipeable:e.swipeable,lazyRender:e.lazyRender,currentIndex:s.currentIndex,onChange:N},{default:()=>{var n;return[(n=i.default)==null?void 0:n.call(i)]}})])}}}),se=Symbol(),$t=()=>Ve(se,null),[st,Z]=M("tab"),dt=Ne({},Fe,{dot:Boolean,name:R,badge:R,title:String,disabled:Boolean,titleClass:Le,titleStyle:[String,Object],showZeroBadge:E}),ut=V({name:st,props:dt,setup(e,{slots:o}){const i=re(),f=x(!1),{parent:a,index:b}=Oe(ce);if(!a)return;const c=()=>{var m;return(m=e.name)!=null?m:b.value},u=()=>{f.value=!0,a.props.lazyRender&&I(()=>{a.onRendered(c(),e.title)})},l=C(()=>{const m=c()===a.currentName.value;return m&&!f.value&&u(),m});return B(()=>e.title,()=>{a.setLine(),a.scrollIntoView()}),De(se,l),()=>{var k;const m=`${a.id}-${b.value}`,{animated:T,swipeable:S,scrollspy:y,lazyRender:D}=a.props;if(!o.default&&!T)return;const d=y||l.value;if(T||S)return h(qe,{id:i,role:"tabpanel",class:Z("panel-wrapper",{inactive:!l.value}),tabindex:l.value?0:-1,"aria-hidden":!l.value,"aria-labelledby":m},{default:()=>{var $;return[h("div",{class:Z("panel")},[($=o.default)==null?void 0:$.call(o)])]}});const s=f.value||y||!D?(k=o.default)==null?void 0:k.call(o):null;return q({id:i}),He(h("div",{id:i,role:"tabpanel",class:Z("panel"),tabindex:d?0:-1,"aria-labelledby":m},[s]),[[We,d]])}}}),ft=ie(ut),At=ft,bt=ie(ct),Pt=bt;export{bt as T,Pt as V,ft as a,At as b,$t as u};
