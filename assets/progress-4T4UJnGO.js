import{a as s,y as ue,a0 as de,z as X,x as re,G as ge,e as fe,c as M,ai as ee,r as pe,f as me,K as ve,C as ye}from"./index-Co8FZznv.js";import{a as he}from"./ExclamationCircleFilled-CVXAKIpE.js";import{R as Ce}from"./CheckOutlined-CqX1XXwI.js";import{R as $e,a as be}from"./useVariants-BiV9jpcP.js";import{g as Se,m as xe,K as ke,o as Pe}from"./EllipsisOutlined-CcDjwxok.js";import{T as we}from"./index-VnHIrFi4.js";var Ee={percent:0,prefixCls:"rc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,trailColor:"#D9D9D9",trailWidth:1,gapPosition:"bottom"},Ie=function(){var t=s.useRef([]),r=s.useRef(null);return s.useEffect(function(){var o=Date.now(),n=!1;t.current.forEach(function(c){if(c){n=!0;var i=c.style;i.transitionDuration=".3s, .3s, .3s, .06s",r.current&&o-r.current<100&&(i.transitionDuration="0s, 0s")}}),n&&(r.current=Date.now())}),t.current},oe=0,Oe=de();function je(){var e;return Oe?(e=oe,oe+=1):e="TEST_OR_SSR",e}const De=function(e){var t=s.useState(),r=ue(t,2),o=r[0],n=r[1];return s.useEffect(function(){n("rc_progress_".concat(je()))},[]),e||o};var ne=function(t){var r=t.bg,o=t.children;return s.createElement("div",{style:{width:"100%",height:"100%",background:r}},o)};function se(e,t){return Object.keys(e).map(function(r){var o=parseFloat(r),n="".concat(Math.floor(o*t),"%");return"".concat(e[r]," ").concat(n)})}var Ne=s.forwardRef(function(e,t){var r=e.prefixCls,o=e.color,n=e.gradientId,c=e.radius,i=e.style,l=e.ptg,a=e.strokeLinecap,g=e.strokeWidth,u=e.size,f=e.gapDegree,m=o&&X(o)==="object",h=m?"#FFF":void 0,y=u/2,C=s.createElement("circle",{className:"".concat(r,"-circle-path"),r:c,cx:y,cy:y,stroke:h,strokeLinecap:a,strokeWidth:g,opacity:l===0?0:1,style:i,ref:t});if(!m)return C;var S="".concat(n,"-conic"),p=f?"".concat(180+f/2,"deg"):"0deg",v=se(o,(360-f)/360),O=se(o,1),P="conic-gradient(from ".concat(p,", ").concat(v.join(", "),")"),$="linear-gradient(to ".concat(f?"bottom":"top",", ").concat(O.join(", "),")");return s.createElement(s.Fragment,null,s.createElement("mask",{id:S},C),s.createElement("foreignObject",{x:0,y:0,width:u,height:u,mask:"url(#".concat(S,")")},s.createElement(ne,{bg:$},s.createElement(ne,{bg:P}))))}),G=100,J=function(t,r,o,n,c,i,l,a,g,u){var f=arguments.length>10&&arguments[10]!==void 0?arguments[10]:0,m=o/100*360*((360-i)/360),h=i===0?0:{bottom:0,top:180,left:90,right:-90}[l],y=(100-n)/100*r;g==="round"&&n!==100&&(y+=u/2,y>=r&&(y=r-.01));var C=G/2;return{stroke:typeof a=="string"?a:void 0,strokeDasharray:"".concat(r,"px ").concat(t),strokeDashoffset:y+f,transform:"rotate(".concat(c+m+h,"deg)"),transformOrigin:"".concat(C,"px ").concat(C,"px"),transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",fillOpacity:0}},Ae=["id","prefixCls","steps","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","style","className","strokeColor","percent"];function ie(e){var t=e??[];return Array.isArray(t)?t:[t]}var _e=function(t){var r=re(re({},Ee),t),o=r.id,n=r.prefixCls,c=r.steps,i=r.strokeWidth,l=r.trailWidth,a=r.gapDegree,g=a===void 0?0:a,u=r.gapPosition,f=r.trailColor,m=r.strokeLinecap,h=r.style,y=r.className,C=r.strokeColor,S=r.percent,p=ge(r,Ae),v=G/2,O=De(o),P="".concat(O,"-gradient"),$=v-i/2,b=Math.PI*2*$,I=g>0?90+g/2:-90,x=b*((360-g)/360),w=X(c)==="object"?c:{count:c,gap:2},d=w.count,K=w.gap,H=ie(S),A=ie(C),_=A.find(function(E){return E&&X(E)==="object"}),W=_&&X(_)==="object",D=W?"butt":m,B=J(b,x,0,100,I,g,u,f,D,i),V=Ie(),j=function(){var R=0;return H.map(function(L,T){var Y=A[T]||A[A.length-1],F=J(b,x,R,L,I,g,u,Y,D,i);return R+=L,s.createElement(Ne,{key:T,color:Y,ptg:L,radius:$,prefixCls:n,gradientId:P,style:F,strokeLinecap:D,strokeWidth:i,gapDegree:g,ref:function(Z){V[T]=Z},size:G})}).reverse()},k=function(){var R=Math.round(d*(H[0]/100)),L=100/d,T=0;return new Array(d).fill(null).map(function(Y,F){var U=F<=R-1?A[0]:f,Z=U&&X(U)==="object"?"url(#".concat(P,")"):void 0,te=J(b,x,T,L,I,g,u,U,"butt",i,K);return T+=(x-te.strokeDashoffset+K)*100/x,s.createElement("circle",{key:F,className:"".concat(n,"-circle-path"),r:$,cx:v,cy:v,stroke:Z,strokeWidth:i,opacity:1,style:te,ref:function(le){V[F]=le}})})};return s.createElement("svg",fe({className:M("".concat(n,"-circle"),y),viewBox:"0 0 ".concat(G," ").concat(G),style:h,id:o,role:"presentation"},p),!d&&s.createElement("circle",{className:"".concat(n,"-circle-trail"),r:$,cx:v,cy:v,stroke:f,strokeLinecap:D,strokeWidth:l||i,style:B}),d?k():j())};function N(e){return!e||e<0?0:e>100?100:e}function q(e){let{success:t,successPercent:r}=e,o=r;return t&&"progress"in t&&(o=t.progress),t&&"percent"in t&&(o=t.percent),o}const We=e=>{let{percent:t,success:r,successPercent:o}=e;const n=N(q({success:r,successPercent:o}));return[n,N(N(t)-n)]},Le=e=>{let{success:t={},strokeColor:r}=e;const{strokeColor:o}=t;return[o||ee.green,r||null]},Q=(e,t,r)=>{var o,n,c,i;let l=-1,a=-1;if(t==="step"){const g=r.steps,u=r.strokeWidth;typeof e=="string"||typeof e>"u"?(l=e==="small"?2:14,a=u??8):typeof e=="number"?[l,a]=[e,e]:[l=14,a=8]=Array.isArray(e)?e:[e.width,e.height],l*=g}else if(t==="line"){const g=r==null?void 0:r.strokeWidth;typeof e=="string"||typeof e>"u"?a=g||(e==="small"?6:8):typeof e=="number"?[l,a]=[e,e]:[l=-1,a=8]=Array.isArray(e)?e:[e.width,e.height]}else(t==="circle"||t==="dashboard")&&(typeof e=="string"||typeof e>"u"?[l,a]=e==="small"?[60,60]:[120,120]:typeof e=="number"?[l,a]=[e,e]:Array.isArray(e)&&(l=(n=(o=e[0])!==null&&o!==void 0?o:e[1])!==null&&n!==void 0?n:120,a=(i=(c=e[0])!==null&&c!==void 0?c:e[1])!==null&&i!==void 0?i:120));return[l,a]},Re=3,Te=e=>Re/e*100,Me=e=>{const{prefixCls:t,trailColor:r=null,strokeLinecap:o="round",gapPosition:n,gapDegree:c,width:i=120,type:l,children:a,success:g,size:u=i,steps:f}=e,[m,h]=Q(u,"circle");let{strokeWidth:y}=e;y===void 0&&(y=Math.max(Te(m),6));const C={width:m,height:h,fontSize:m*.15+6},S=s.useMemo(()=>{if(c||c===0)return c;if(l==="dashboard")return 75},[c,l]),p=We(e),v=n||l==="dashboard"&&"bottom"||void 0,O=Object.prototype.toString.call(e.strokeColor)==="[object Object]",P=Le({success:g,strokeColor:e.strokeColor}),$=M(`${t}-inner`,{[`${t}-circle-gradient`]:O}),b=s.createElement(_e,{steps:f,percent:f?p[1]:p,strokeWidth:y,trailWidth:y,strokeColor:f?P[1]:P,strokeLinecap:o,trailColor:r,prefixCls:t,gapDegree:S,gapPosition:v}),I=m<=20,x=s.createElement("div",{className:$,style:C},b,!I&&a);return I?s.createElement(we,{title:a},x):x},z="--progress-line-stroke-color",ce="--progress-percent",ae=e=>{const t=e?"100%":"-100%";return new ke(`antProgress${e?"RTL":"LTR"}Active`,{"0%":{transform:`translateX(${t}) scaleX(0)`,opacity:.1},"20%":{transform:`translateX(${t}) scaleX(0)`,opacity:.5},to:{transform:"translateX(0) scaleX(1)",opacity:0}})},Be=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:Object.assign(Object.assign({},pe(e)),{display:"inline-block","&-rtl":{direction:"rtl"},"&-line":{position:"relative",width:"100%",fontSize:e.fontSize},[`${t}-outer`]:{display:"inline-flex",alignItems:"center",width:"100%"},[`${t}-inner`]:{position:"relative",display:"inline-block",width:"100%",flex:1,overflow:"hidden",verticalAlign:"middle",backgroundColor:e.remainingColor,borderRadius:e.lineBorderRadius},[`${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.defaultColor}},[`${t}-success-bg, ${t}-bg`]:{position:"relative",background:e.defaultColor,borderRadius:e.lineBorderRadius,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`},[`${t}-layout-bottom`]:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",[`${t}-text`]:{width:"max-content",marginInlineStart:0,marginTop:e.marginXXS}},[`${t}-bg`]:{overflow:"hidden","&::after":{content:'""',background:{_multi_value_:!0,value:["inherit",`var(${z})`]},height:"100%",width:`calc(1 / var(${ce}) * 100%)`,display:"block"},[`&${t}-bg-inner`]:{minWidth:"max-content","&::after":{content:"none"},[`${t}-text-inner`]:{color:e.colorWhite,[`&${t}-text-bright`]:{color:"rgba(0, 0, 0, 0.45)"}}}},[`${t}-success-bg`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,backgroundColor:e.colorSuccess},[`${t}-text`]:{display:"inline-block",marginInlineStart:e.marginXS,color:e.colorText,lineHeight:1,width:"2em",whiteSpace:"nowrap",textAlign:"start",verticalAlign:"middle",wordBreak:"normal",[r]:{fontSize:e.fontSize},[`&${t}-text-outer`]:{width:"max-content"},[`&${t}-text-outer${t}-text-start`]:{width:"max-content",marginInlineStart:0,marginInlineEnd:e.marginXS}},[`${t}-text-inner`]:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",marginInlineStart:0,padding:`0 ${me(e.paddingXXS)}`,[`&${t}-text-start`]:{justifyContent:"start"},[`&${t}-text-end`]:{justifyContent:"end"}},[`&${t}-status-active`]:{[`${t}-bg::before`]:{position:"absolute",inset:0,backgroundColor:e.colorBgContainer,borderRadius:e.lineBorderRadius,opacity:0,animationName:ae(),animationDuration:e.progressActiveMotionDuration,animationTimingFunction:e.motionEaseOutQuint,animationIterationCount:"infinite",content:'""'}},[`&${t}-rtl${t}-status-active`]:{[`${t}-bg::before`]:{animationName:ae(!0)}},[`&${t}-status-exception`]:{[`${t}-bg`]:{backgroundColor:e.colorError},[`${t}-text`]:{color:e.colorError}},[`&${t}-status-exception ${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorError}},[`&${t}-status-success`]:{[`${t}-bg`]:{backgroundColor:e.colorSuccess},[`${t}-text`]:{color:e.colorSuccess}},[`&${t}-status-success ${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorSuccess}}})}},Fe=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:{[`${t}-circle-trail`]:{stroke:e.remainingColor},[`&${t}-circle ${t}-inner`]:{position:"relative",lineHeight:1,backgroundColor:"transparent"},[`&${t}-circle ${t}-text`]:{position:"absolute",insetBlockStart:"50%",insetInlineStart:0,width:"100%",margin:0,padding:0,color:e.circleTextColor,fontSize:e.circleTextFontSize,lineHeight:1,whiteSpace:"normal",textAlign:"center",transform:"translateY(-50%)",[r]:{fontSize:e.circleIconFontSize}},[`${t}-circle&-status-exception`]:{[`${t}-text`]:{color:e.colorError}},[`${t}-circle&-status-success`]:{[`${t}-text`]:{color:e.colorSuccess}}},[`${t}-inline-circle`]:{lineHeight:1,[`${t}-inner`]:{verticalAlign:"bottom"}}}},Xe=e=>{const{componentCls:t}=e;return{[t]:{[`${t}-steps`]:{display:"inline-block","&-outer":{display:"flex",flexDirection:"row",alignItems:"center"},"&-item":{flexShrink:0,minWidth:e.progressStepMinWidth,marginInlineEnd:e.progressStepMarginInlineEnd,backgroundColor:e.remainingColor,transition:`all ${e.motionDurationSlow}`,"&-active":{backgroundColor:e.defaultColor}}}}}},Ge=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:{[`${t}-small&-line, ${t}-small&-line ${t}-text ${r}`]:{fontSize:e.fontSizeSM}}}},Ke=e=>({circleTextColor:e.colorText,defaultColor:e.colorInfo,remainingColor:e.colorFillSecondary,lineBorderRadius:100,circleTextFontSize:"1em",circleIconFontSize:`${e.fontSize/e.fontSizeSM}em`}),He=Se("Progress",e=>{const t=e.calc(e.marginXXS).div(2).equal(),r=xe(e,{progressStepMarginInlineEnd:t,progressStepMinWidth:t,progressActiveMotionDuration:"2.4s"});return[Be(r),Fe(r),Xe(r),Ge(r)]},Ke);var Ve=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r};const Ue=e=>{let t=[];return Object.keys(e).forEach(r=>{const o=parseFloat(r.replace(/%/g,""));Number.isNaN(o)||t.push({key:o,value:e[r]})}),t=t.sort((r,o)=>r.key-o.key),t.map(r=>{let{key:o,value:n}=r;return`${n} ${o}%`}).join(", ")},qe=(e,t)=>{const{from:r=ee.blue,to:o=ee.blue,direction:n=t==="rtl"?"to left":"to right"}=e,c=Ve(e,["from","to","direction"]);if(Object.keys(c).length!==0){const l=Ue(c),a=`linear-gradient(${n}, ${l})`;return{background:a,[z]:a}}const i=`linear-gradient(${n}, ${r}, ${o})`;return{background:i,[z]:i}},ze=e=>{const{prefixCls:t,direction:r,percent:o,size:n,strokeWidth:c,strokeColor:i,strokeLinecap:l="round",children:a,trailColor:g=null,percentPosition:u,success:f}=e,{align:m,type:h}=u,y=i&&typeof i!="string"?qe(i,r):{[z]:i,background:i},C=l==="square"||l==="butt"?0:void 0,S=n??[-1,c||(n==="small"?6:8)],[p,v]=Q(S,"line",{strokeWidth:c}),O={backgroundColor:g||void 0,borderRadius:C},P=Object.assign(Object.assign({width:`${N(o)}%`,height:v,borderRadius:C},y),{[ce]:N(o)/100}),$=q(e),b={width:`${N($)}%`,height:v,borderRadius:C,backgroundColor:f==null?void 0:f.strokeColor},I={width:p<0?"100%":p},x=s.createElement("div",{className:`${t}-inner`,style:O},s.createElement("div",{className:M(`${t}-bg`,`${t}-bg-${h}`),style:P},h==="inner"&&a),$!==void 0&&s.createElement("div",{className:`${t}-success-bg`,style:b})),w=h==="outer"&&m==="start",d=h==="outer"&&m==="end";return h==="outer"&&m==="center"?s.createElement("div",{className:`${t}-layout-bottom`},x,a):s.createElement("div",{className:`${t}-outer`,style:I},w&&a,x,d&&a)},Qe=e=>{const{size:t,steps:r,rounding:o=Math.round,percent:n=0,strokeWidth:c=8,strokeColor:i,trailColor:l=null,prefixCls:a,children:g}=e,u=o(r*(n/100)),m=t??[t==="small"?2:14,c],[h,y]=Q(m,"step",{steps:r,strokeWidth:c}),C=h/r,S=Array.from({length:r});for(let p=0;p<r;p++){const v=Array.isArray(i)?i[p]:i;S[p]=s.createElement("div",{key:p,className:M(`${a}-steps-item`,{[`${a}-steps-item-active`]:p<=u-1}),style:{backgroundColor:p<=u-1?v:l,width:C,height:y}})}return s.createElement("div",{className:`${a}-steps-outer`},S,g)};var Ye=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r};const Ze=["normal","exception","active","success"],it=s.forwardRef((e,t)=>{const{prefixCls:r,className:o,rootClassName:n,steps:c,strokeColor:i,percent:l=0,size:a="default",showInfo:g=!0,type:u="line",status:f,format:m,style:h,percentPosition:y={}}=e,C=Ye(e,["prefixCls","className","rootClassName","steps","strokeColor","percent","size","showInfo","type","status","format","style","percentPosition"]),{align:S="end",type:p="outer"}=y,v=Array.isArray(i)?i[0]:i,O=typeof i=="string"||Array.isArray(i)?i:void 0,P=s.useMemo(()=>{if(v){const j=typeof v=="string"?v:Object.values(v)[0];return new ve(j).isLight()}return!1},[i]),$=s.useMemo(()=>{var j,k;const E=q(e);return parseInt(E!==void 0?(j=E??0)===null||j===void 0?void 0:j.toString():(k=l??0)===null||k===void 0?void 0:k.toString(),10)},[l,e.success,e.successPercent]),b=s.useMemo(()=>!Ze.includes(f)&&$>=100?"success":f||"normal",[f,$]),{getPrefixCls:I,direction:x,progress:w}=s.useContext(ye),d=I("progress",r),[K,H,A]=He(d),_=u==="line",W=_&&!c,D=s.useMemo(()=>{if(!g)return null;const j=q(e);let k;const E=m||(L=>`${L}%`),R=_&&P&&p==="inner";return p==="inner"||m||b!=="exception"&&b!=="success"?k=E(N(l),N(j)):b==="exception"?k=_?s.createElement($e,null):s.createElement(be,null):b==="success"&&(k=_?s.createElement(he,null):s.createElement(Ce,null)),s.createElement("span",{className:M(`${d}-text`,{[`${d}-text-bright`]:R,[`${d}-text-${S}`]:W,[`${d}-text-${p}`]:W}),title:typeof k=="string"?k:void 0},k)},[g,l,$,b,u,d,m]);let B;u==="line"?B=c?s.createElement(Qe,Object.assign({},e,{strokeColor:O,prefixCls:d,steps:typeof c=="object"?c.count:c}),D):s.createElement(ze,Object.assign({},e,{strokeColor:v,prefixCls:d,direction:x,percentPosition:{align:S,type:p}}),D):(u==="circle"||u==="dashboard")&&(B=s.createElement(Me,Object.assign({},e,{strokeColor:v,prefixCls:d,progressStatus:b}),D));const V=M(d,`${d}-status-${b}`,{[`${d}-${u==="dashboard"&&"circle"||u}`]:u!=="line",[`${d}-inline-circle`]:u==="circle"&&Q(a,"circle")[0]<=20,[`${d}-line`]:W,[`${d}-line-align-${S}`]:W,[`${d}-line-position-${p}`]:W,[`${d}-steps`]:c,[`${d}-show-info`]:g,[`${d}-${a}`]:typeof a=="string",[`${d}-rtl`]:x==="rtl"},w==null?void 0:w.className,o,n,H,A);return K(s.createElement("div",Object.assign({ref:t,style:Object.assign(Object.assign({},w==null?void 0:w.style),h),className:V,role:"progressbar","aria-valuenow":$,"aria-valuemin":0,"aria-valuemax":100},Pe(C,["trailColor","strokeWidth","width","gapDegree","gapPosition","strokeLinecap","success","successPercent"])),B))});export{it as P};
