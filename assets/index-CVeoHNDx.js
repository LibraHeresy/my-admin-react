import{a as i,I as Se,e as xe,f as p,C as U,c as T,an as Be,Z as ye,aj as we,a5 as Oe,L as He,a3 as oe,r as Te,K as ne,ak as ze,A as Ee}from"./index-Co8FZznv.js";import{g as J,o as Y,D as re,L as je,t as Me,M as ke,c as Q,m as ie,f as le,N as Ne,S as De,u as Pe,I as Re,H as Ae,C as Le,O as We}from"./EllipsisOutlined-CcDjwxok.js";import{R as ae}from"./LeftOutlined-DDbD1o-7.js";import{T as _e,C as Xe,i as qe}from"./index-VnHIrFi4.js";import{a as Ge}from"./button-icN4l-0r.js";import{u as Fe}from"./useZIndex-Bso29JQ4.js";var Ve={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"},Ye=function(t,e){return i.createElement(Se,xe({},t,{ref:e,icon:Ve}))},Ze=i.forwardRef(Ye);const Ke=i.createContext({siderHook:{addSider:()=>null,removeSider:()=>null}}),Ue=o=>{const{antCls:t,componentCls:e,colorText:r,footerBg:n,headerHeight:a,headerPadding:s,headerColor:c,footerPadding:l,fontSize:m,bodyBg:u,headerBg:$}=o;return{[e]:{display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:u,"&, *":{boxSizing:"border-box"},[`&${e}-has-sider`]:{flexDirection:"row",[`> ${e}, > ${e}-content`]:{width:0}},[`${e}-header, &${e}-footer`]:{flex:"0 0 auto"},"&-rtl":{direction:"rtl"}},[`${e}-header`]:{height:a,padding:s,color:c,lineHeight:p(a),background:$,[`${t}-menu`]:{lineHeight:"inherit"}},[`${e}-footer`]:{padding:l,color:r,fontSize:m,background:n},[`${e}-content`]:{flex:"auto",color:r,minHeight:0}}},pe=o=>{const{colorBgLayout:t,controlHeight:e,controlHeightLG:r,colorText:n,controlHeightSM:a,marginXXS:s,colorTextLightSolid:c,colorBgContainer:l}=o,m=r*1.25;return{colorBgHeader:"#001529",colorBgBody:t,colorBgTrigger:"#002140",bodyBg:t,headerBg:"#001529",headerHeight:e*2,headerPadding:`0 ${m}px`,headerColor:n,footerPadding:`${a}px ${m}px`,footerBg:t,siderBg:"#001529",triggerHeight:r+s*2,triggerBg:"#002140",triggerColor:c,zeroTriggerWidth:r,zeroTriggerHeight:r,lightSiderBg:l,lightTriggerBg:l,lightTriggerColor:n}},be=[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]],Ct=J("Layout",o=>[Ue(o)],pe,{deprecatedTokens:be}),Je=o=>{const{componentCls:t,siderBg:e,motionDurationMid:r,motionDurationSlow:n,antCls:a,triggerHeight:s,triggerColor:c,triggerBg:l,headerHeight:m,zeroTriggerWidth:u,zeroTriggerHeight:$,borderRadiusLG:g,lightSiderBg:f,lightTriggerColor:d,lightTriggerBg:b,bodyBg:h}=o;return{[t]:{position:"relative",minWidth:0,background:e,transition:`all ${r}, background 0s`,"&-has-trigger":{paddingBottom:s},"&-right":{order:1},[`${t}-children`]:{height:"100%",marginTop:-.1,paddingTop:.1,[`${a}-menu${a}-menu-inline-collapsed`]:{width:"auto"}},[`&-zero-width ${t}-children`]:{overflow:"hidden"},[`${t}-trigger`]:{position:"fixed",bottom:0,zIndex:1,height:s,color:c,lineHeight:p(s),textAlign:"center",background:l,cursor:"pointer",transition:`all ${r}`},[`${t}-zero-width-trigger`]:{position:"absolute",top:m,insetInlineEnd:o.calc(u).mul(-1).equal(),zIndex:1,width:u,height:$,color:c,fontSize:o.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:e,borderRadius:`0 ${p(g)} ${p(g)} 0`,cursor:"pointer",transition:`background ${n} ease`,"&::after":{position:"absolute",inset:0,background:"transparent",transition:`all ${n}`,content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:o.calc(u).mul(-1).equal(),borderRadius:`${p(g)} 0 0 ${p(g)}`}},"&-light":{background:f,[`${t}-trigger`]:{color:d,background:b},[`${t}-zero-width-trigger`]:{color:d,background:b,border:`1px solid ${h}`,borderInlineStart:0}}}}},Qe=J(["Layout","Sider"],o=>[Je(o)],pe,{deprecatedTokens:be});var et=function(o,t){var e={};for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&t.indexOf(r)<0&&(e[r]=o[r]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(o);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(o,r[n])&&(e[r[n]]=o[r[n]]);return e};const se={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},tt=o=>!Number.isNaN(Number.parseFloat(o))&&isFinite(o),ee=i.createContext({}),ot=(()=>{let o=0;return function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return o+=1,`${t}${o}`}})(),St=i.forwardRef((o,t)=>{const{prefixCls:e,className:r,trigger:n,children:a,defaultCollapsed:s=!1,theme:c="dark",style:l={},collapsible:m=!1,reverseArrow:u=!1,width:$=200,collapsedWidth:g=80,zeroWidthTriggerStyle:f,breakpoint:d,onCollapse:b,onBreakpoint:h}=o,v=et(o,["prefixCls","className","trigger","children","defaultCollapsed","theme","style","collapsible","reverseArrow","width","collapsedWidth","zeroWidthTriggerStyle","breakpoint","onCollapse","onBreakpoint"]),{siderHook:B}=i.useContext(Ke),[S,w]=i.useState("collapsed"in o?o.collapsed:s),[O,z]=i.useState(!1);i.useEffect(()=>{"collapsed"in o&&w(o.collapsed)},[o.collapsed]);const M=(y,H)=>{"collapsed"in o||w(y),b==null||b(y,H)},{getPrefixCls:E,direction:I}=i.useContext(U),C=E("layout-sider",e),[N,j,D]=Qe(C),x=i.useRef(null);x.current=y=>{z(y.matches),h==null||h(y.matches),S!==y.matches&&M(y.matches,"responsive")},i.useEffect(()=>{function y(q){return x.current(q)}let H;if(typeof window<"u"){const{matchMedia:q}=window;if(q&&d&&d in se){H=q(`screen and (max-width: ${se[d]})`);try{H.addEventListener("change",y)}catch{H.addListener(y)}y(H)}}return()=>{try{H==null||H.removeEventListener("change",y)}catch{H==null||H.removeListener(y)}}},[d]),i.useEffect(()=>{const y=ot("ant-sider-");return B.addSider(y),()=>B.removeSider(y)},[]);const P=()=>{M(!S,"clickTrigger")},L=Y(v,["collapsed"]),A=S?g:$,k=tt(A)?`${A}px`:String(A),W=parseFloat(String(g||0))===0?i.createElement("span",{onClick:P,className:T(`${C}-zero-width-trigger`,`${C}-zero-width-trigger-${u?"right":"left"}`),style:f},n||i.createElement(Ze,null)):null,G=I==="rtl"==!u,_={expanded:G?i.createElement(re,null):i.createElement(ae,null),collapsed:G?i.createElement(ae,null):i.createElement(re,null)}[S?"collapsed":"expanded"],X=n!==null?W||i.createElement("div",{className:`${C}-trigger`,onClick:P,style:{width:k}},n||_):null,ve=Object.assign(Object.assign({},l),{flex:`0 0 ${k}`,maxWidth:k,minWidth:k,width:k}),Ie=T(C,`${C}-${c}`,{[`${C}-collapsed`]:!!S,[`${C}-has-trigger`]:m&&n!==null&&!W,[`${C}-below`]:!!O,[`${C}-zero-width`]:parseFloat(k)===0},r,j,D),Ce=i.useMemo(()=>({siderCollapsed:S}),[S]);return N(i.createElement(ee.Provider,{value:Ce},i.createElement("aside",Object.assign({className:Ie},L,{style:ve,ref:t}),i.createElement("div",{className:`${C}-children`},a),m||O&&W?X:null)))}),F=i.createContext({prefixCls:"",firstLevel:!0,inlineCollapsed:!1});var nt=function(o,t){var e={};for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&t.indexOf(r)<0&&(e[r]=o[r]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(o);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(o,r[n])&&(e[r[n]]=o[r[n]]);return e};const $e=o=>{const{prefixCls:t,className:e,dashed:r}=o,n=nt(o,["prefixCls","className","dashed"]),{getPrefixCls:a}=i.useContext(U),s=a("menu",t),c=T({[`${s}-item-divider-dashed`]:!!r},e);return i.createElement(je,Object.assign({className:c},n))},he=o=>{var t;const{className:e,children:r,icon:n,title:a,danger:s,extra:c}=o,{prefixCls:l,firstLevel:m,direction:u,disableMenuItemTitleTooltip:$,inlineCollapsed:g}=i.useContext(F),f=S=>{const w=r==null?void 0:r[0],O=i.createElement("span",{className:T(`${l}-title-content`,{[`${l}-title-content-with-extra`]:!!c||c===0})},r);return(!n||i.isValidElement(r)&&r.type==="span")&&r&&S&&m&&typeof w=="string"?i.createElement("div",{className:`${l}-inline-collapsed-noicon`},w.charAt(0)):O},{siderCollapsed:d}=i.useContext(ee);let b=a;typeof a>"u"?b=m?r:"":a===!1&&(b="");const h={title:b};!d&&!g&&(h.title=null,h.open=!1);const v=Me(r).length;let B=i.createElement(ke,Object.assign({},Y(o,["title","icon","danger"]),{className:T({[`${l}-item-danger`]:s,[`${l}-item-only-child`]:(n?v+1:v)===1},e),title:typeof a=="string"?a:void 0}),Q(n,{className:T(i.isValidElement(n)?(t=n.props)===null||t===void 0?void 0:t.className:"",`${l}-item-icon`)}),f(g));return $||(B=i.createElement(_e,Object.assign({},h,{placement:u==="rtl"?"left":"right",classNames:{root:`${l}-inline-collapsed-tooltip`}}),B)),B};var rt=function(o,t){var e={};for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&t.indexOf(r)<0&&(e[r]=o[r]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(o);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(o,r[n])&&(e[r[n]]=o[r[n]]);return e};const V=i.createContext(null),xt=i.forwardRef((o,t)=>{const{children:e}=o,r=rt(o,["children"]),n=i.useContext(V),a=i.useMemo(()=>Object.assign(Object.assign({},n),r),[n,r.prefixCls,r.mode,r.selectable,r.rootClassName]),s=Be(e),c=ye(t,s?we(e):null);return i.createElement(V.Provider,{value:a},i.createElement(Xe,{space:!0},s?i.cloneElement(e,{ref:c}):e))}),it=o=>{const{componentCls:t,motionDurationSlow:e,horizontalLineHeight:r,colorSplit:n,lineWidth:a,lineType:s,itemPaddingInline:c}=o;return{[`${t}-horizontal`]:{lineHeight:r,border:0,borderBottom:`${p(a)} ${s} ${n}`,boxShadow:"none","&::after":{display:"block",clear:"both",height:0,content:'"\\20"'},[`${t}-item, ${t}-submenu`]:{position:"relative",display:"inline-block",verticalAlign:"bottom",paddingInline:c},[`> ${t}-item:hover,
        > ${t}-item-active,
        > ${t}-submenu ${t}-submenu-title:hover`]:{backgroundColor:"transparent"},[`${t}-item, ${t}-submenu-title`]:{transition:[`border-color ${e}`,`background ${e}`].join(",")},[`${t}-submenu-arrow`]:{display:"none"}}}},lt=o=>{let{componentCls:t,menuArrowOffset:e,calc:r}=o;return{[`${t}-rtl`]:{direction:"rtl"},[`${t}-submenu-rtl`]:{transformOrigin:"100% 0"},[`${t}-rtl${t}-vertical,
    ${t}-submenu-rtl ${t}-vertical`]:{[`${t}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateY(${p(r(e).mul(-1).equal())})`},"&::after":{transform:`rotate(45deg) translateY(${p(e)})`}}}}},ce=o=>Object.assign({},Oe(o)),de=(o,t)=>{const{componentCls:e,itemColor:r,itemSelectedColor:n,subMenuItemSelectedColor:a,groupTitleColor:s,itemBg:c,subMenuItemBg:l,itemSelectedBg:m,activeBarHeight:u,activeBarWidth:$,activeBarBorderWidth:g,motionDurationSlow:f,motionEaseInOut:d,motionEaseOut:b,itemPaddingInline:h,motionDurationMid:v,itemHoverColor:B,lineType:S,colorSplit:w,itemDisabledColor:O,dangerItemColor:z,dangerItemHoverColor:M,dangerItemSelectedColor:E,dangerItemActiveBg:I,dangerItemSelectedBg:C,popupBg:N,itemHoverBg:j,itemActiveBg:D,menuSubMenuBg:x,horizontalItemSelectedColor:P,horizontalItemSelectedBg:L,horizontalItemBorderRadius:A,horizontalItemHoverBg:k}=o;return{[`${e}-${t}, ${e}-${t} > ${e}`]:{color:r,background:c,[`&${e}-root:focus-visible`]:Object.assign({},ce(o)),[`${e}-item`]:{"&-group-title, &-extra":{color:s}},[`${e}-submenu-selected > ${e}-submenu-title`]:{color:a},[`${e}-item, ${e}-submenu-title`]:{color:r,[`&:not(${e}-item-disabled):focus-visible`]:Object.assign({},ce(o))},[`${e}-item-disabled, ${e}-submenu-disabled`]:{color:`${O} !important`},[`${e}-item:not(${e}-item-selected):not(${e}-submenu-selected)`]:{[`&:hover, > ${e}-submenu-title:hover`]:{color:B}},[`&:not(${e}-horizontal)`]:{[`${e}-item:not(${e}-item-selected)`]:{"&:hover":{backgroundColor:j},"&:active":{backgroundColor:D}},[`${e}-submenu-title`]:{"&:hover":{backgroundColor:j},"&:active":{backgroundColor:D}}},[`${e}-item-danger`]:{color:z,[`&${e}-item:hover`]:{[`&:not(${e}-item-selected):not(${e}-submenu-selected)`]:{color:M}},[`&${e}-item:active`]:{background:I}},[`${e}-item a`]:{"&, &:hover":{color:"inherit"}},[`${e}-item-selected`]:{color:n,[`&${e}-item-danger`]:{color:E},"a, a:hover":{color:"inherit"}},[`& ${e}-item-selected`]:{backgroundColor:m,[`&${e}-item-danger`]:{backgroundColor:C}},[`&${e}-submenu > ${e}`]:{backgroundColor:x},[`&${e}-popup > ${e}`]:{backgroundColor:N},[`&${e}-submenu-popup > ${e}`]:{backgroundColor:N},[`&${e}-horizontal`]:Object.assign(Object.assign({},t==="dark"?{borderBottom:0}:{}),{[`> ${e}-item, > ${e}-submenu`]:{top:g,marginTop:o.calc(g).mul(-1).equal(),marginBottom:0,borderRadius:A,"&::after":{position:"absolute",insetInline:h,bottom:0,borderBottom:`${p(u)} solid transparent`,transition:`border-color ${f} ${d}`,content:'""'},"&:hover, &-active, &-open":{background:k,"&::after":{borderBottomWidth:u,borderBottomColor:P}},"&-selected":{color:P,backgroundColor:L,"&:hover":{backgroundColor:L},"&::after":{borderBottomWidth:u,borderBottomColor:P}}}}),[`&${e}-root`]:{[`&${e}-inline, &${e}-vertical`]:{borderInlineEnd:`${p(g)} ${S} ${w}`}},[`&${e}-inline`]:{[`${e}-sub${e}-inline`]:{background:l},[`${e}-item`]:{position:"relative","&::after":{position:"absolute",insetBlock:0,insetInlineEnd:0,borderInlineEnd:`${p($)} solid ${n}`,transform:"scaleY(0.0001)",opacity:0,transition:[`transform ${v} ${b}`,`opacity ${v} ${b}`].join(","),content:'""'},[`&${e}-item-danger`]:{"&::after":{borderInlineEndColor:E}}},[`${e}-selected, ${e}-item-selected`]:{"&::after":{transform:"scaleY(1)",opacity:1,transition:[`transform ${v} ${d}`,`opacity ${v} ${d}`].join(",")}}}}}},me=o=>{const{componentCls:t,itemHeight:e,itemMarginInline:r,padding:n,menuArrowSize:a,marginXS:s,itemMarginBlock:c,itemWidth:l,itemPaddingInline:m}=o,u=o.calc(a).add(n).add(s).equal();return{[`${t}-item`]:{position:"relative",overflow:"hidden"},[`${t}-item, ${t}-submenu-title`]:{height:e,lineHeight:p(e),paddingInline:m,overflow:"hidden",textOverflow:"ellipsis",marginInline:r,marginBlock:c,width:l},[`> ${t}-item,
            > ${t}-submenu > ${t}-submenu-title`]:{height:e,lineHeight:p(e)},[`${t}-item-group-list ${t}-submenu-title,
            ${t}-submenu-title`]:{paddingInlineEnd:u}}},at=o=>{const{componentCls:t,iconCls:e,itemHeight:r,colorTextLightSolid:n,dropdownWidth:a,controlHeightLG:s,motionEaseOut:c,paddingXL:l,itemMarginInline:m,fontSizeLG:u,motionDurationFast:$,motionDurationSlow:g,paddingXS:f,boxShadowSecondary:d,collapsedWidth:b,collapsedIconSize:h}=o,v={height:r,lineHeight:p(r),listStylePosition:"inside",listStyleType:"disc"};return[{[t]:{"&-inline, &-vertical":Object.assign({[`&${t}-root`]:{boxShadow:"none"}},me(o))},[`${t}-submenu-popup`]:{[`${t}-vertical`]:Object.assign(Object.assign({},me(o)),{boxShadow:d})}},{[`${t}-submenu-popup ${t}-vertical${t}-sub`]:{minWidth:a,maxHeight:`calc(100vh - ${p(o.calc(s).mul(2.5).equal())})`,padding:"0",overflow:"hidden",borderInlineEnd:0,"&:not([class*='-active'])":{overflowX:"hidden",overflowY:"auto"}}},{[`${t}-inline`]:{width:"100%",[`&${t}-root`]:{[`${t}-item, ${t}-submenu-title`]:{display:"flex",alignItems:"center",transition:[`border-color ${g}`,`background ${g}`,`padding ${$} ${c}`].join(","),[`> ${t}-title-content`]:{flex:"auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},"> *":{flex:"none"}}},[`${t}-sub${t}-inline`]:{padding:0,border:0,borderRadius:0,boxShadow:"none",[`& > ${t}-submenu > ${t}-submenu-title`]:v,[`& ${t}-item-group-title`]:{paddingInlineStart:l}},[`${t}-item`]:v}},{[`${t}-inline-collapsed`]:{width:b,[`&${t}-root`]:{[`${t}-item, ${t}-submenu ${t}-submenu-title`]:{[`> ${t}-inline-collapsed-noicon`]:{fontSize:u,textAlign:"center"}}},[`> ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-submenu > ${t}-submenu-title,
          > ${t}-submenu > ${t}-submenu-title`]:{insetInlineStart:0,paddingInline:`calc(50% - ${p(o.calc(h).div(2).equal())} - ${p(m)})`,textOverflow:"clip",[`
            ${t}-submenu-arrow,
            ${t}-submenu-expand-icon
          `]:{opacity:0},[`${t}-item-icon, ${e}`]:{margin:0,fontSize:h,lineHeight:p(r),"+ span":{display:"inline-block",opacity:0}}},[`${t}-item-icon, ${e}`]:{display:"inline-block"},"&-tooltip":{pointerEvents:"none",[`${t}-item-icon, ${e}`]:{display:"none"},"a, a:hover":{color:n}},[`${t}-item-group-title`]:Object.assign(Object.assign({},He),{paddingInline:f})}}]},ue=o=>{const{componentCls:t,motionDurationSlow:e,motionDurationMid:r,motionEaseInOut:n,motionEaseOut:a,iconCls:s,iconSize:c,iconMarginInlineEnd:l}=o;return{[`${t}-item, ${t}-submenu-title`]:{position:"relative",display:"block",margin:0,whiteSpace:"nowrap",cursor:"pointer",transition:[`border-color ${e}`,`background ${e}`,`padding calc(${e} + 0.1s) ${n}`].join(","),[`${t}-item-icon, ${s}`]:{minWidth:c,fontSize:c,transition:[`font-size ${r} ${a}`,`margin ${e} ${n}`,`color ${e}`].join(","),"+ span":{marginInlineStart:l,opacity:1,transition:[`opacity ${e} ${n}`,`margin ${e}`,`color ${e}`].join(",")}},[`${t}-item-icon`]:Object.assign({},ze()),[`&${t}-item-only-child`]:{[`> ${s}, > ${t}-item-icon`]:{marginInlineEnd:0}}},[`${t}-item-disabled, ${t}-submenu-disabled`]:{background:"none !important",cursor:"not-allowed","&::after":{borderColor:"transparent !important"},a:{color:"inherit !important",cursor:"not-allowed",pointerEvents:"none"},[`> ${t}-submenu-title`]:{color:"inherit !important",cursor:"not-allowed"}}}},ge=o=>{const{componentCls:t,motionDurationSlow:e,motionEaseInOut:r,borderRadius:n,menuArrowSize:a,menuArrowOffset:s}=o;return{[`${t}-submenu`]:{"&-expand-icon, &-arrow":{position:"absolute",top:"50%",insetInlineEnd:o.margin,width:a,color:"currentcolor",transform:"translateY(-50%)",transition:`transform ${e} ${r}, opacity ${e}`},"&-arrow":{"&::before, &::after":{position:"absolute",width:o.calc(a).mul(.6).equal(),height:o.calc(a).mul(.15).equal(),backgroundColor:"currentcolor",borderRadius:n,transition:[`background ${e} ${r}`,`transform ${e} ${r}`,`top ${e} ${r}`,`color ${e} ${r}`].join(","),content:'""'},"&::before":{transform:`rotate(45deg) translateY(${p(o.calc(s).mul(-1).equal())})`},"&::after":{transform:`rotate(-45deg) translateY(${p(s)})`}}}}},st=o=>{const{antCls:t,componentCls:e,fontSize:r,motionDurationSlow:n,motionDurationMid:a,motionEaseInOut:s,paddingXS:c,padding:l,colorSplit:m,lineWidth:u,zIndexPopup:$,borderRadiusLG:g,subMenuItemBorderRadius:f,menuArrowSize:d,menuArrowOffset:b,lineType:h,groupTitleLineHeight:v,groupTitleFontSize:B}=o;return[{"":{[e]:Object.assign(Object.assign({},oe()),{"&-hidden":{display:"none"}})},[`${e}-submenu-hidden`]:{display:"none"}},{[e]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Te(o)),oe()),{marginBottom:0,paddingInlineStart:0,fontSize:r,lineHeight:0,listStyle:"none",outline:"none",transition:`width ${n} cubic-bezier(0.2, 0, 0, 1) 0s`,"ul, ol":{margin:0,padding:0,listStyle:"none"},"&-overflow":{display:"flex",[`${e}-item`]:{flex:"none"}},[`${e}-item, ${e}-submenu, ${e}-submenu-title`]:{borderRadius:o.itemBorderRadius},[`${e}-item-group-title`]:{padding:`${p(c)} ${p(l)}`,fontSize:B,lineHeight:v,transition:`all ${n}`},[`&-horizontal ${e}-submenu`]:{transition:[`border-color ${n} ${s}`,`background ${n} ${s}`].join(",")},[`${e}-submenu, ${e}-submenu-inline`]:{transition:[`border-color ${n} ${s}`,`background ${n} ${s}`,`padding ${a} ${s}`].join(",")},[`${e}-submenu ${e}-sub`]:{cursor:"initial",transition:[`background ${n} ${s}`,`padding ${n} ${s}`].join(",")},[`${e}-title-content`]:{transition:`color ${n}`,"&-with-extra":{display:"inline-flex",alignItems:"center",width:"100%"},[`> ${t}-typography-ellipsis-single-line`]:{display:"inline",verticalAlign:"unset"},[`${e}-item-extra`]:{marginInlineStart:"auto",paddingInlineStart:o.padding}},[`${e}-item a`]:{"&::before":{position:"absolute",inset:0,backgroundColor:"transparent",content:'""'}},[`${e}-item-divider`]:{overflow:"hidden",lineHeight:0,borderColor:m,borderStyle:h,borderWidth:0,borderTopWidth:u,marginBlock:u,padding:0,"&-dashed":{borderStyle:"dashed"}}}),ue(o)),{[`${e}-item-group`]:{[`${e}-item-group-list`]:{margin:0,padding:0,[`${e}-item, ${e}-submenu-title`]:{paddingInline:`${p(o.calc(r).mul(2).equal())} ${p(l)}`}}},"&-submenu":{"&-popup":{position:"absolute",zIndex:$,borderRadius:g,boxShadow:"none",transformOrigin:"0 0",[`&${e}-submenu`]:{background:"transparent"},"&::before":{position:"absolute",inset:0,zIndex:-1,width:"100%",height:"100%",opacity:0,content:'""'},[`> ${e}`]:Object.assign(Object.assign(Object.assign({borderRadius:g},ue(o)),ge(o)),{[`${e}-item, ${e}-submenu > ${e}-submenu-title`]:{borderRadius:f},[`${e}-submenu-title::after`]:{transition:`transform ${n} ${s}`}})},"\n          &-placement-leftTop,\n          &-placement-bottomRight,\n          ":{transformOrigin:"100% 0"},"\n          &-placement-leftBottom,\n          &-placement-topRight,\n          ":{transformOrigin:"100% 100%"},"\n          &-placement-rightBottom,\n          &-placement-topLeft,\n          ":{transformOrigin:"0 100%"},"\n          &-placement-bottomLeft,\n          &-placement-rightTop,\n          ":{transformOrigin:"0 0"},"\n          &-placement-leftTop,\n          &-placement-leftBottom\n          ":{paddingInlineEnd:o.paddingXS},"\n          &-placement-rightTop,\n          &-placement-rightBottom\n          ":{paddingInlineStart:o.paddingXS},"\n          &-placement-topRight,\n          &-placement-topLeft\n          ":{paddingBottom:o.paddingXS},"\n          &-placement-bottomRight,\n          &-placement-bottomLeft\n          ":{paddingTop:o.paddingXS}}}),ge(o)),{[`&-inline-collapsed ${e}-submenu-arrow,
        &-inline ${e}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateX(${p(b)})`},"&::after":{transform:`rotate(45deg) translateX(${p(o.calc(b).mul(-1).equal())})`}},[`${e}-submenu-open${e}-submenu-inline > ${e}-submenu-title > ${e}-submenu-arrow`]:{transform:`translateY(${p(o.calc(d).mul(.2).mul(-1).equal())})`,"&::after":{transform:`rotate(-45deg) translateX(${p(o.calc(b).mul(-1).equal())})`},"&::before":{transform:`rotate(45deg) translateX(${p(b)})`}}})},{[`${t}-layout-header`]:{[e]:{lineHeight:"inherit"}}}]},ct=o=>{var t,e,r;const{colorPrimary:n,colorError:a,colorTextDisabled:s,colorErrorBg:c,colorText:l,colorTextDescription:m,colorBgContainer:u,colorFillAlter:$,colorFillContent:g,lineWidth:f,lineWidthBold:d,controlItemBgActive:b,colorBgTextHover:h,controlHeightLG:v,lineHeight:B,colorBgElevated:S,marginXXS:w,padding:O,fontSize:z,controlHeightSM:M,fontSizeLG:E,colorTextLightSolid:I,colorErrorHover:C}=o,N=(t=o.activeBarWidth)!==null&&t!==void 0?t:0,j=(e=o.activeBarBorderWidth)!==null&&e!==void 0?e:f,D=(r=o.itemMarginInline)!==null&&r!==void 0?r:o.marginXXS,x=new ne(I).setA(.65).toRgbString();return{dropdownWidth:160,zIndexPopup:o.zIndexPopupBase+50,radiusItem:o.borderRadiusLG,itemBorderRadius:o.borderRadiusLG,radiusSubMenuItem:o.borderRadiusSM,subMenuItemBorderRadius:o.borderRadiusSM,colorItemText:l,itemColor:l,colorItemTextHover:l,itemHoverColor:l,colorItemTextHoverHorizontal:n,horizontalItemHoverColor:n,colorGroupTitle:m,groupTitleColor:m,colorItemTextSelected:n,itemSelectedColor:n,subMenuItemSelectedColor:n,colorItemTextSelectedHorizontal:n,horizontalItemSelectedColor:n,colorItemBg:u,itemBg:u,colorItemBgHover:h,itemHoverBg:h,colorItemBgActive:g,itemActiveBg:b,colorSubItemBg:$,subMenuItemBg:$,colorItemBgSelected:b,itemSelectedBg:b,colorItemBgSelectedHorizontal:"transparent",horizontalItemSelectedBg:"transparent",colorActiveBarWidth:0,activeBarWidth:N,colorActiveBarHeight:d,activeBarHeight:d,colorActiveBarBorderSize:f,activeBarBorderWidth:j,colorItemTextDisabled:s,itemDisabledColor:s,colorDangerItemText:a,dangerItemColor:a,colorDangerItemTextHover:a,dangerItemHoverColor:a,colorDangerItemTextSelected:a,dangerItemSelectedColor:a,colorDangerItemBgActive:c,dangerItemActiveBg:c,colorDangerItemBgSelected:c,dangerItemSelectedBg:c,itemMarginInline:D,horizontalItemBorderRadius:0,horizontalItemHoverBg:"transparent",itemHeight:v,groupTitleLineHeight:B,collapsedWidth:v*2,popupBg:S,itemMarginBlock:w,itemPaddingInline:O,horizontalLineHeight:`${v*1.15}px`,iconSize:z,iconMarginInlineEnd:M-z,collapsedIconSize:E,groupTitleFontSize:z,darkItemDisabledColor:new ne(I).setA(.25).toRgbString(),darkItemColor:x,darkDangerItemColor:a,darkItemBg:"#001529",darkPopupBg:"#001529",darkSubMenuItemBg:"#000c17",darkItemSelectedColor:I,darkItemSelectedBg:n,darkDangerItemSelectedBg:a,darkItemHoverBg:"transparent",darkGroupTitleColor:x,darkItemHoverColor:I,darkDangerItemHoverColor:C,darkDangerItemSelectedColor:I,darkDangerItemActiveBg:a,itemWidth:N?`calc(100% + ${j}px)`:`calc(100% - ${D*2}px)`}},dt=function(o){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:o,e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return J("Menu",n=>{const{colorBgElevated:a,controlHeightLG:s,fontSize:c,darkItemColor:l,darkDangerItemColor:m,darkItemBg:u,darkSubMenuItemBg:$,darkItemSelectedColor:g,darkItemSelectedBg:f,darkDangerItemSelectedBg:d,darkItemHoverBg:b,darkGroupTitleColor:h,darkItemHoverColor:v,darkItemDisabledColor:B,darkDangerItemHoverColor:S,darkDangerItemSelectedColor:w,darkDangerItemActiveBg:O,popupBg:z,darkPopupBg:M}=n,E=n.calc(c).div(7).mul(5).equal(),I=ie(n,{menuArrowSize:E,menuHorizontalHeight:n.calc(s).mul(1.15).equal(),menuArrowOffset:n.calc(E).mul(.25).equal(),menuSubMenuBg:a,calc:n.calc,popupBg:z}),C=ie(I,{itemColor:l,itemHoverColor:v,groupTitleColor:h,itemSelectedColor:g,subMenuItemSelectedColor:g,itemBg:u,popupBg:M,subMenuItemBg:$,itemActiveBg:"transparent",itemSelectedBg:f,activeBarHeight:0,activeBarBorderWidth:0,itemHoverBg:b,itemDisabledColor:B,dangerItemColor:m,dangerItemHoverColor:S,dangerItemSelectedColor:w,dangerItemActiveBg:O,dangerItemSelectedBg:d,menuSubMenuBg:$,horizontalItemSelectedColor:g,horizontalItemSelectedBg:f});return[st(I),it(I),at(I),de(I,"light"),de(C,"dark"),lt(I),Ge(I),le(I,"slide-up"),le(I,"slide-down"),qe(I,"zoom-big")]},ct,{deprecatedTokens:[["colorGroupTitle","groupTitleColor"],["radiusItem","itemBorderRadius"],["radiusSubMenuItem","subMenuItemBorderRadius"],["colorItemText","itemColor"],["colorItemTextHover","itemHoverColor"],["colorItemTextHoverHorizontal","horizontalItemHoverColor"],["colorItemTextSelected","itemSelectedColor"],["colorItemTextSelectedHorizontal","horizontalItemSelectedColor"],["colorItemTextDisabled","itemDisabledColor"],["colorDangerItemText","dangerItemColor"],["colorDangerItemTextHover","dangerItemHoverColor"],["colorDangerItemTextSelected","dangerItemSelectedColor"],["colorDangerItemBgActive","dangerItemActiveBg"],["colorDangerItemBgSelected","dangerItemSelectedBg"],["colorItemBg","itemBg"],["colorItemBgHover","itemHoverBg"],["colorSubItemBg","subMenuItemBg"],["colorItemBgActive","itemActiveBg"],["colorItemBgSelectedHorizontal","horizontalItemSelectedBg"],["colorActiveBarWidth","activeBarWidth"],["colorActiveBarHeight","activeBarHeight"],["colorActiveBarBorderSize","activeBarBorderWidth"],["colorItemBgSelected","itemSelectedBg"]],injectStyle:e,unitless:{groupTitleLineHeight:!0}})(o,t)},fe=o=>{var t;const{popupClassName:e,icon:r,title:n,theme:a}=o,s=i.useContext(F),{prefixCls:c,inlineCollapsed:l,theme:m}=s,u=Ne();let $;if(!r)$=l&&!u.length&&n&&typeof n=="string"?i.createElement("div",{className:`${c}-inline-collapsed-noicon`},n.charAt(0)):i.createElement("span",{className:`${c}-title-content`},n);else{const d=i.isValidElement(n)&&n.type==="span";$=i.createElement(i.Fragment,null,Q(r,{className:T(i.isValidElement(r)?(t=r.props)===null||t===void 0?void 0:t.className:"",`${c}-item-icon`)}),d?n:i.createElement("span",{className:`${c}-title-content`},n))}const g=i.useMemo(()=>Object.assign(Object.assign({},s),{firstLevel:!1}),[s]),[f]=Fe("Menu");return i.createElement(F.Provider,{value:g},i.createElement(De,Object.assign({},Y(o,["icon"]),{title:$,popupClassName:T(c,e,`${c}-${a||m}`),popupStyle:Object.assign({zIndex:f},o.popupStyle)})))};var mt=function(o,t){var e={};for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&t.indexOf(r)<0&&(e[r]=o[r]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(o);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(o,r[n])&&(e[r[n]]=o[r[n]]);return e};function K(o){return o===null||o===!1}const ut={item:he,submenu:fe,divider:$e},gt=i.forwardRef((o,t)=>{var e;const r=i.useContext(V),n=r||{},{getPrefixCls:a,getPopupContainer:s,direction:c,menu:l}=i.useContext(U),m=a(),{prefixCls:u,className:$,style:g,theme:f="light",expandIcon:d,_internalDisableMenuItemTitleTooltip:b,inlineCollapsed:h,siderCollapsed:v,rootClassName:B,mode:S,selectable:w,onClick:O,overflowedIndicatorPopupClassName:z}=o,M=mt(o,["prefixCls","className","style","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","rootClassName","mode","selectable","onClick","overflowedIndicatorPopupClassName"]),E=Y(M,["collapsedWidth"]);(e=n.validator)===null||e===void 0||e.call(n,{mode:S});const I=Ee(function(){var R;O==null||O.apply(void 0,arguments),(R=n.onClick)===null||R===void 0||R.call(n)}),C=n.mode||S,N=w??n.selectable,j=h??v,D={horizontal:{motionName:`${m}-slide-up`},inline:Le(m),other:{motionName:`${m}-zoom-big`}},x=a("menu",u||n.prefixCls),P=Pe(x),[L,A,k]=dt(x,P,!r),W=T(`${x}-${f}`,l==null?void 0:l.className,$),G=i.useMemo(()=>{var R,_;if(typeof d=="function"||K(d))return d||null;if(typeof n.expandIcon=="function"||K(n.expandIcon))return n.expandIcon||null;if(typeof(l==null?void 0:l.expandIcon)=="function"||K(l==null?void 0:l.expandIcon))return(l==null?void 0:l.expandIcon)||null;const X=(R=d??(n==null?void 0:n.expandIcon))!==null&&R!==void 0?R:l==null?void 0:l.expandIcon;return Q(X,{className:T(`${x}-submenu-expand-icon`,i.isValidElement(X)?(_=X.props)===null||_===void 0?void 0:_.className:void 0)})},[d,n==null?void 0:n.expandIcon,l==null?void 0:l.expandIcon,x]),te=i.useMemo(()=>({prefixCls:x,inlineCollapsed:j||!1,direction:c,firstLevel:!0,theme:f,mode:C,disableMenuItemTitleTooltip:b}),[x,j,c,b,f]);return L(i.createElement(V.Provider,{value:null},i.createElement(F.Provider,{value:te},i.createElement(Re,Object.assign({getPopupContainer:s,overflowedIndicator:i.createElement(Ae,null),overflowedIndicatorPopupClassName:T(x,`${x}-${f}`,z),mode:C,selectable:N,onClick:I},E,{inlineCollapsed:j,style:Object.assign(Object.assign({},l==null?void 0:l.style),g),className:W,prefixCls:x,direction:c,defaultMotions:D,expandIcon:G,ref:t,rootClassName:T(B,A,n.rootClassName,k,P),_internalComponents:ut})))))}),Z=i.forwardRef((o,t)=>{const e=i.useRef(null),r=i.useContext(ee);return i.useImperativeHandle(t,()=>({menu:e.current,focus:n=>{var a;(a=e.current)===null||a===void 0||a.focus(n)}})),i.createElement(gt,Object.assign({ref:e},o,r))});Z.Item=he;Z.SubMenu=fe;Z.Divider=$e;Z.ItemGroup=We;export{Ke as L,Z as M,xt as O,St as S,ee as a,Ct as u};
