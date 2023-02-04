import{c as _,i as be,e as E,H as z,u as ae,n as le,l as ce,b as ie,I as ge,J as F,p as W}from"./use-translate-ee29e3a6.js";import{u as se}from"./use-expose-036fc7b9.js";import{L as Te}from"./index-6e04c06e.js";import{u as pe}from"./use-touch-8f92051d.js";import{n as K,d as I,b as V,c as Y,t as xe,m as Oe}from"./with-install-80752cfa.js";import{A as $,u as y,R as Ce,e as m,Q as ke,D as k,x as L,B as ye,q as X}from"./vue-libs-b2a2f6f9.js";import{H as Z,a as Se}from"./constant-a81ffd37.js";import{T as Ee,a as Pe}from"./index-34177d1e.js";const[we,O,ee]=_("picker"),ue=e=>e.find(a=>!a.disabled)||e[0];function Be(e,a){const n=e[0];if(n){if(Array.isArray(n))return"multiple";if(a.children in n)return"cascade"}return"default"}function J(e,a){a=z(a,0,e.length);for(let n=a;n<e.length;n++)if(!e[n].disabled)return n;for(let n=a-1;n>=0;n--)if(!e[n].disabled)return n;return 0}const te=(e,a,n)=>a!==void 0&&!!e.find(i=>i[n.value]===a);function Q(e,a,n){const i=e.findIndex(h=>h[n.value]===a),l=J(e,i);return e[l]}function He(e,a,n){const i=[];let l={[a.children]:e},h=0;for(;l&&l[a.children];){const f=l[a.children],b=n.value[h];if(l=be(b)?Q(f,b,a):void 0,!l&&f.length){const u=ue(f)[a.value];l=Q(f,u,a)}h++,i.push(f)}return i}function De(e){const{transform:a}=window.getComputedStyle(e),n=a.slice(7,a.length-1).split(", ")[5];return Number(n)}function Me(e){return E({text:"text",value:"value",children:"children"},e)}const ne=200,oe=300,Ne=15,[re,G]=_("picker-column"),me=Symbol(re),Ie=$({name:re,props:{value:K,fields:I(Object),options:V(),readonly:Boolean,allowHtml:Boolean,optionHeight:I(Number),swipeDuration:I(K),visibleOptionNum:I(K)},emits:["change","clickOption"],setup(e,{emit:a,slots:n}){let i,l,h,f,b;const u=y(),g=y(),d=y(0),v=y(0),T=pe(),p=()=>e.options.length,S=()=>e.optionHeight*(+e.visibleOptionNum-1)/2,C=c=>{const r=J(e.options,c),t=-r*e.optionHeight,o=()=>{const s=e.options[r][e.fields.value];s!==e.value&&a("change",s)};i&&t!==d.value?b=o:o(),d.value=t},x=()=>e.readonly||!e.options.length,A=c=>{i||x()||(b=null,v.value=ne,C(c),a("clickOption",e.options[c]))},w=c=>z(Math.round(-c/e.optionHeight),0,p()-1),B=(c,r)=>{const t=Math.abs(c/r);c=d.value+t/.003*(c<0?-1:1);const o=w(c);v.value=+e.swipeDuration,C(o)},H=()=>{i=!1,v.value=0,b&&(b(),b=null)},U=c=>{if(!x()){if(T.start(c),i){const r=De(g.value);d.value=Math.min(0,r-S())}v.value=0,l=d.value,h=Date.now(),f=l,b=null}},j=c=>{if(x())return;T.move(c),T.isVertical()&&(i=!0,ce(c,!0)),d.value=z(l+T.deltaY.value,-(p()*e.optionHeight),e.optionHeight);const r=Date.now();r-h>oe&&(h=r,f=d.value)},D=()=>{if(x())return;const c=d.value-f,r=Date.now()-h;if(r<oe&&Math.abs(c)>Ne){B(c,r);return}const o=w(d.value);v.value=ne,C(o),setTimeout(()=>{i=!1},0)},M=()=>{const c={height:`${e.optionHeight}px`};return e.options.map((r,t)=>{const o=r[e.fields.text],{disabled:s}=r,N=r[e.fields.value],P={role:"button",style:c,tabindex:s?-1:0,class:[G("item",{disabled:s,selected:N===e.value}),r.className],onClick:()=>A(t)},he={class:"van-ellipsis",[e.allowHtml?"innerHTML":"textContent"]:o};return m("li",P,[n.option?n.option(r):m("div",he,null)])})};return ae(me),se({stopMomentum:H}),Ce(()=>{const c=e.options.findIndex(o=>o[e.fields.value]===e.value),t=-J(e.options,c)*e.optionHeight;d.value=t}),le("touchmove",j,{target:u}),()=>m("div",{ref:u,class:G(),onTouchstartPassive:U,onTouchend:D,onTouchcancel:D},[m("ul",{ref:g,style:{transform:`translate3d(0, ${d.value+S()}px, 0)`,transitionDuration:`${v.value}ms`,transitionProperty:v.value?"all":"none"},class:G("wrapper"),onTransitionend:H},[M()])])}}),[Ve]=_("picker-toolbar"),R={title:String,cancelButtonText:String,confirmButtonText:String},_e=["cancel","confirm","title","toolbar"],$e=Object.keys(R),de=$({name:Ve,props:R,emits:["confirm","cancel"],setup(e,{emit:a,slots:n}){const i=()=>{if(n.title)return n.title();if(e.title)return m("div",{class:[O("title"),"van-ellipsis"]},[e.title])},l=()=>a("cancel"),h=()=>a("confirm"),f=()=>{const u=e.cancelButtonText||ee("cancel");return m("button",{type:"button",class:[O("cancel"),Z],onClick:l},[n.cancel?n.cancel():u])},b=()=>{const u=e.confirmButtonText||ee("confirm");return m("button",{type:"button",class:[O("confirm"),Z],onClick:h},[n.confirm?n.confirm():u])};return()=>m("div",{class:O("toolbar")},[n.toolbar?n.toolbar():[f(),i(),b()]])}});function Re(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!ke(e)}const[fe,q]=_("picker-group"),ve=Symbol(fe),Ae=E({tabs:V(),nextStepText:String},R),Qe=$({name:fe,props:Ae,emits:["confirm","cancel"],setup(e,{emit:a,slots:n}){const i=y(0),{children:l,linkChildren:h}=ie(ve);h();const f=()=>i.value<e.tabs.length-1&&e.nextStepText,b=()=>{f()?i.value++:a("confirm",l.map(g=>g.confirm()))},u=()=>a("cancel");return()=>{var T;let g;const d=(T=n.default)==null?void 0:T.call(n),v=f()?e.nextStepText:e.confirmButtonText;return m("div",{class:q()},[m(de,{title:e.title,cancelButtonText:e.cancelButtonText,confirmButtonText:v,onConfirm:b,onCancel:u},null),m(Ee,{active:i.value,"onUpdate:active":p=>i.value=p,class:q("tabs"),shrink:!0,animated:!0},Re(g=e.tabs.map((p,S)=>m(Pe,{title:p,titleClass:q("tab-title")},{default:()=>[d==null?void 0:d[S]]})))?g:{default:()=>[g]})])}}}),Ue=E({loading:Boolean,readonly:Boolean,allowHtml:Boolean,optionHeight:Y(44),showToolbar:xe,swipeDuration:Y(1e3),visibleOptionNum:Y(6)},R),je=E({},Ue,{columns:V(),modelValue:V(),toolbarPosition:Oe("top"),columnsFieldNames:Object}),We=$({name:we,props:je,emits:["confirm","cancel","change","clickOption","update:modelValue"],setup(e,{emit:a,slots:n}){const i=y(),l=y(e.modelValue.slice(0)),{parent:h}=ae(ve),{children:f,linkChildren:b}=ie(me);b();const u=k(()=>Me(e.columnsFieldNames)),g=k(()=>ge(e.optionHeight)),d=k(()=>Be(e.columns,u.value)),v=k(()=>{const{columns:t}=e;switch(d.value){case"multiple":return t;case"cascade":return He(t,u.value,l);default:return[t]}}),T=k(()=>v.value.some(t=>t.length)),p=k(()=>v.value.map((t,o)=>Q(t,l.value[o],u.value))),S=k(()=>v.value.map((t,o)=>t.findIndex(s=>s[u.value.value]===l.value[o]))),C=(t,o)=>{if(l.value[t]!==o){const s=l.value.slice(0);s[t]=o,l.value=s}},x=()=>({selectedValues:l.value.slice(0),selectedOptions:p.value,selectedIndexes:S.value}),A=(t,o)=>{C(o,t),d.value==="cascade"&&l.value.forEach((s,N)=>{const P=v.value[N];te(P,s,u.value)||C(N,P.length?P[0][u.value.value]:void 0)}),X(()=>{a("change",E({columnIndex:o},x()))})},w=(t,o)=>a("clickOption",E({columnIndex:o,currentOption:t},x())),B=()=>{f.forEach(o=>o.stopMomentum());const t=x();return X(()=>{a("confirm",t)}),t},H=()=>a("cancel",x()),U=()=>v.value.map((t,o)=>m(Ie,{value:l.value[o],fields:u.value,options:t,readonly:e.readonly,allowHtml:e.allowHtml,optionHeight:g.value,swipeDuration:e.swipeDuration,visibleOptionNum:e.visibleOptionNum,onChange:s=>A(s,o),onClickOption:s=>w(s,o)},{option:n.option})),j=t=>{if(T.value){const o={height:`${g.value}px`},s={backgroundSize:`100% ${(t-g.value)/2}px`};return[m("div",{class:O("mask"),style:s},null),m("div",{class:[Se,O("frame")],style:o},null)]}},D=()=>{const t=g.value*+e.visibleOptionNum,o={height:`${t}px`};return m("div",{ref:i,class:O("columns"),style:o},[U(),j(t)])},M=()=>{if(e.showToolbar&&!h)return m(de,ye(W(e,$e),{onConfirm:B,onCancel:H}),W(n,_e))};L(v,t=>{t.forEach((o,s)=>{o.length&&!te(o,l.value[s],u.value)&&C(s,ue(o)[u.value.value])})},{immediate:!0});let c;return L(()=>e.modelValue,t=>{!F(t,l.value)&&!F(t,c)&&(l.value=t.slice(0))},{deep:!0}),L(l,t=>{F(t,e.modelValue)||(c=t.slice(0),a("update:modelValue",c))},{immediate:!0}),le("touchmove",ce,{target:i}),se({confirm:B,getSelectedOptions:()=>p.value}),()=>{var t,o;return m("div",{class:O()},[e.toolbarPosition==="top"?M():null,e.loading?m(Te,{class:O("loading")},null):null,(t=n["columns-top"])==null?void 0:t.call(n),D(),(o=n["columns-bottom"])==null?void 0:o.call(n),e.toolbarPosition==="bottom"?M():null])}}});export{We as _,Qe as a,Ue as p};
