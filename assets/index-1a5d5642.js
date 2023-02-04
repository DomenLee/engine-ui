import{C as g}from"./index-9cb93dc5.js";import{F as C}from"./index-7be1458c.js";import{F as b}from"./index-e7e43f42.js";import{B as _}from"./index-788b5356.js";import{S}from"./index-8ccf840f.js";import{A as v,H as D,x as w,e as a,u as x,r as y,o as V,c as B,w as E,C as u}from"./vue-libs-b2a2f6f9.js";import{e as m,c as k,y as F,a as L}from"./use-translate-ee29e3a6.js";import{w as T}from"./with-install-80752cfa.js";import{s as h}from"./function-call-cc6dccb0.js";import"./use-route-efd4b866.js";import"./index-371c1dc5.js";import"./index-3a4224e7.js";import"./use-expose-036fc7b9.js";import"./constant-a81ffd37.js";import"./use-id-92cebd14.js";import"./index-6e04c06e.js";import"./mount-component-eb64eb4f.js";import"./index-b4bc783b.js";import"./use-touch-8f92051d.js";import"./use-lazy-render-927fe2b4.js";import"./on-popup-reopen-e5b691e6.js";import"./index-a0e83f53.js";import"./interceptor-b9f6d9ac.js";const[U,s,n]=k("contact-edit"),d={tel:"",name:""},I={isEdit:Boolean,isSaving:Boolean,isDeleting:Boolean,showSetDefault:Boolean,setDefaultLabel:String,contactInfo:{type:Object,default:()=>m({},d)},telValidator:{type:Function,default:F}},N=v({name:U,props:I,emits:["save","delete","changeDefault"],setup(t,{emit:l}){const e=D(m({},d,t.contactInfo)),i=()=>{t.isSaving||l("save",e)},c=()=>l("delete",e),f=()=>a("div",{class:s("buttons")},[a(_,{block:!0,round:!0,type:"primary",text:n("save"),class:s("button"),loading:t.isSaving,nativeType:"submit"},null),t.isEdit&&a(_,{block:!0,round:!0,text:n("delete"),class:s("button"),loading:t.isDeleting,onClick:c},null)]),p=()=>a(S,{modelValue:e.isDefault,"onUpdate:modelValue":o=>e.isDefault=o,onChange:o=>l("changeDefault",o)},null),r=()=>{if(t.showSetDefault)return a(g,{title:t.setDefaultLabel,class:s("switch-cell"),border:!1},{"right-icon":p})};return w(()=>t.contactInfo,o=>m(e,d,o)),()=>a(C,{class:s(),onSubmit:i},{default:()=>[a("div",{class:s("fields")},[a(b,{modelValue:e.name,"onUpdate:modelValue":o=>e.name=o,clearable:!0,label:n("name"),rules:[{required:!0,message:n("nameEmpty")}],maxlength:"30",placeholder:n("name")},null),a(b,{modelValue:e.tel,"onUpdate:modelValue":o=>e.tel=o,clearable:!0,type:"tel",label:n("tel"),rules:[{validator:t.telValidator,message:n("telInvalid")}],placeholder:n("tel")},null)]),r(),f()]})}}),A=T(N),O=A,ie=v({__name:"index",setup(t){const l=L({"zh-CN":{defaultLabel:"设为默认联系人"},"en-US":{defaultLabel:"Set as the default contact"}}),e=x({tel:"",name:""}),i=()=>h(l("save")),c=()=>h(l("delete"));return(f,p)=>{const r=y("demo-block");return V(),B(r,{title:u(l)("basicUsage")},{default:E(()=>[a(u(O),{"is-edit":"","show-set-default":"","contact-info":e.value,"set-default-label":u(l)("defaultLabel"),onSave:i,onDelete:c},null,8,["contact-info","set-default-label"])]),_:1},8,["title"])}}});export{ie as default};
