import{V as i}from"./index.ed2e8d02.js";import{V as F}from"./index.e4783dea.js";import{c as r}from"./index.a54b3812.js";import{s as m,b as x,d as E,V as w,a as d,c as B}from"./index.1c735655.js";import{a as I}from"./use-translate.4bd55976.js";import{A as D,x as v,r as b,o as y,a as $,e as s,w as a,C as t,F as h}from"./vue-libs.34a885a4.js";import"./with-install.4d0ca77e.js";import"./use-route.d291d507.js";import"./index.3a83314f.js";import"./index.3e55758c.js";import"./index.54ff12fb.js";import"./constant.80c6de18.js";import"./interceptor.442e99c6.js";import"./use-expose.2b4664c4.js";import"./use-touch.d7fba47b.js";import"./use-lazy-render.a4c2132f.js";import"./on-popup-reopen.550cf80c.js";import"./index.0e81d5df.js";import"./index.cef67cd8.js";import"./mount-component.60637ff5.js";const Z=D({__name:"index",setup(V){const o=I({"zh-CN":{fail:"\u5931\u8D25\u63D0\u793A",text:"\u63D0\u793A\u5185\u5BB9",text2:"\u6210\u529F\u6587\u6848",text3:"\u5931\u8D25\u6587\u6848",text4:u=>`\u5012\u8BA1\u65F6 ${u} \u79D2`,title1:"\u6587\u5B57\u63D0\u793A",title2:"\u52A0\u8F7D\u63D0\u793A",title3:"\u6210\u529F/\u5931\u8D25\u63D0\u793A",success:"\u6210\u529F\u63D0\u793A",customIcon:"\u81EA\u5B9A\u4E49\u56FE\u6807",customImage:"\u81EA\u5B9A\u4E49\u56FE\u7247",loadingType:"\u81EA\u5B9A\u4E49\u52A0\u8F7D\u56FE\u6807",positionTop:"\u9876\u90E8\u5C55\u793A",useComponent:"\u4F7F\u7528 Toast \u7EC4\u4EF6",updateMessage:"\u52A8\u6001\u66F4\u65B0\u63D0\u793A",positionBottom:"\u5E95\u90E8\u5C55\u793A",customPosition:"\u81EA\u5B9A\u4E49\u4F4D\u7F6E"},"en-US":{fail:"Fail",text:"Some messages",text2:"Success",text3:"Fail",text4:u=>`${u} seconds`,title1:"Text",title2:"Loading",title3:"Success/Fail",success:"Success",customIcon:"Custom Icon",customImage:"Custom Image",loadingType:"Loading Type",positionTop:"Top",useComponent:"Use Toast Component",updateMessage:"Update Message",positionBottom:"Bottom",customPosition:"Custom Position"}}),c=u=>{d({forbidClick:!0,message:o("loading"),loadingType:u})},g=()=>{m({message:o("positionTop"),position:"top"})},C=()=>{m({message:o("positionBottom"),position:"bottom"})},k=()=>{m({message:o("customIcon"),icon:"like-o"})},T=()=>{m({message:o("customImage"),icon:r("logo.png")})},f=()=>{const u=d({duration:0,forbidClick:!0,message:o("text4",3)});let e=3;const l=setInterval(()=>{e--,e?u.message=o("text4",e):(clearInterval(l),B())},1e3)},p=v(!1),A=r("cat.jpeg");return(u,e)=>{const l=b("demo-block");return y(),$(h,null,[s(l,{card:"",title:t(o)("basicUsage")},{default:a(()=>[s(t(i),{"is-link":"",title:t(o)("title1"),onClick:e[0]||(e[0]=n=>t(m)(t(o)("text")))},null,8,["title"]),s(t(i),{"is-link":"",title:t(o)("title2"),onClick:e[1]||(e[1]=n=>c())},null,8,["title"]),s(t(i),{"is-link":"",title:t(o)("success"),onClick:e[2]||(e[2]=n=>t(x)(t(o)("text2")))},null,8,["title"]),s(t(i),{"is-link":"",title:t(o)("fail"),onClick:e[3]||(e[3]=n=>t(E)(t(o)("text3")))},null,8,["title"])]),_:1},8,["title"]),s(l,{card:"",title:t(o)("customIcon")},{default:a(()=>[s(t(i),{"is-link":"",title:t(o)("customIcon"),onClick:k},null,8,["title"]),s(t(i),{"is-link":"",title:t(o)("customImage"),onClick:T},null,8,["title"]),s(t(i),{"is-link":"",title:t(o)("loadingType"),onClick:e[4]||(e[4]=n=>c("spinner"))},null,8,["title"])]),_:1},8,["title"]),s(l,{card:"",title:t(o)("customPosition")},{default:a(()=>[s(t(i),{"is-link":"",title:t(o)("positionTop"),onClick:g},null,8,["title"]),s(t(i),{"is-link":"",title:t(o)("positionBottom"),onClick:C},null,8,["title"])]),_:1},8,["title"]),s(l,{card:"",title:t(o)("updateMessage")},{default:a(()=>[s(t(i),{"is-link":"",title:t(o)("updateMessage"),onClick:f},null,8,["title"])]),_:1},8,["title"]),s(l,{card:"",title:t(o)("useComponent")},{default:a(()=>[s(t(i),{"is-link":"",title:t(o)("useComponent"),onClick:e[5]||(e[5]=n=>p.value=!0)},null,8,["title"]),s(t(w),{show:p.value,"onUpdate:show":e[6]||(e[6]=n=>p.value=n),style:{padding:"0"}},{message:a(()=>[s(t(F),{src:t(A),width:"200",height:"140",style:{display:"block"}},null,8,["src"])]),_:1},8,["show"])]),_:1},8,["title"])],64)}}});export{Z as default};
