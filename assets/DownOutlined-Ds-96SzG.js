import{a as t,b as K,C as R,I as j,e as E}from"./index-Co8FZznv.js";import{K as r,x as $,b as D}from"./EllipsisOutlined-CcDjwxok.js";const z=new r("antMoveDownIn",{"0%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),L=new r("antMoveDownOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0}}),S=new r("antMoveLeftIn",{"0%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),U=new r("antMoveLeftOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),W=new r("antMoveRightIn",{"0%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),B=new r("antMoveRightOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),H=new r("antMoveUpIn",{"0%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),T=new r("antMoveUpOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0}}),F={"move-up":{inKeyframes:H,outKeyframes:T},"move-down":{inKeyframes:z,outKeyframes:L},"move-left":{inKeyframes:S,outKeyframes:U},"move-right":{inKeyframes:W,outKeyframes:B}},G=(e,n)=>{const{antCls:o}=e,a=`${o}-${n}`,{inKeyframes:i,outKeyframes:u}=F[n];return[$(a,i,u,e.motionDurationMid),{[`
        ${a}-enter,
        ${a}-appear
      `]:{opacity:0,animationTimingFunction:e.motionEaseOutCirc},[`${a}-leave`]:{animationTimingFunction:e.motionEaseInOutCirc}}]};function _(e){return n=>t.createElement(K,{theme:{token:{motion:!1,zIndexPopupBase:0}}},t.createElement(e,Object.assign({},n)))}const J=(e,n,o,a,i)=>_(m=>{const{prefixCls:y,style:w}=m,l=t.useRef(null),[h,I]=t.useState(0),[b,M]=t.useState(0),[d,C]=D(!1,{value:m.open}),{getPrefixCls:P}=t.useContext(R),p=P(a||"select",y);t.useEffect(()=>{if(C(!0),typeof ResizeObserver<"u"){const g=new ResizeObserver(s=>{const f=s[0].target;I(f.offsetHeight+8),M(f.offsetWidth)}),v=setInterval(()=>{var s;const f=i?`.${i(p)}`:`.${p}-dropdown`,O=(s=l.current)===null||s===void 0?void 0:s.querySelector(f);O&&(clearInterval(v),g.observe(O))},10);return()=>{clearInterval(v),g.disconnect()}}},[]);let c=Object.assign(Object.assign({},m),{style:Object.assign(Object.assign({},w),{margin:0}),open:d,visible:d,getPopupContainer:()=>l.current});o&&(c=o(c)),n&&Object.assign(c,{[n]:{overflow:{adjustX:!1,adjustY:!1}}});const x={paddingBottom:h,position:"relative",minWidth:b};return t.createElement("div",{ref:l,style:x},t.createElement(e,Object.assign({},c)))});var q={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},X=function(n,o){return t.createElement(j,E({},n,{ref:o,icon:q}))},Q=t.forwardRef(X);export{Q as R,J as g,G as i,_ as w};
