import{u as x,r as L}from"./use-route-efd4b866.js";import{I as f}from"./index-371c1dc5.js";import{A as y,e as t}from"./vue-libs-b2a2f6f9.js";import{c as V,e as D,i as c}from"./use-translate-ee29e3a6.js";import{m as I,n as o,t as B,u,w as A}from"./with-install-80752cfa.js";const[q,i]=V("cell"),z={tag:I("div"),icon:String,size:String,title:o,value:o,label:o,center:Boolean,isLink:Boolean,border:B,required:Boolean,iconPrefix:String,valueClass:u,labelClass:u,titleClass:u,titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}},N=D({},z,L),R=y({name:q,props:N,setup(e,{slots:n}){const b=x(),m=()=>{if(n.label||c(e.label))return t("div",{class:[i("label"),e.labelClass]},[n.label?n.label():e.label])},g=()=>{var a;if(n.title||c(e.title)){const l=(a=n.title)==null?void 0:a.call(n);return Array.isArray(l)&&l.length===0?void 0:t("div",{class:[i("title"),e.titleClass],style:e.titleStyle},[l||t("span",null,[e.title]),m()])}},h=()=>{const a=n.value||n.default;if(a||c(e.value))return t("div",{class:[i("value"),e.valueClass]},[a?a():t("span",null,[e.value])])},C=()=>{if(n.icon)return n.icon();if(e.icon)return t(f,{name:e.icon,class:i("left-icon"),classPrefix:e.iconPrefix},null)},v=()=>{if(n["right-icon"])return n["right-icon"]();if(e.isLink){const a=e.arrowDirection&&e.arrowDirection!=="right"?`arrow-${e.arrowDirection}`:"arrow";return t(f,{name:a,class:i("right-icon")},null)}};return()=>{const{tag:a,size:l,center:w,border:P,isLink:k,required:S}=e,r=e.clickable??k,s={center:w,required:S,clickable:r,borderless:!P};return l&&(s[l]=!!l),t(a,{class:i(s),role:r?"button":void 0,tabindex:r?0:void 0,onClick:b},{default:()=>{var d;return[C(),g(),h(),v(),(d=n.extra)==null?void 0:d.call(n)]}})}}}),T=A(R),G=T;export{T as C,G as V,z as c};
