import{R as i,a as f,c as p,z as Ce,w as j,e as ge,x as X,G as Se,y as me,_ as Ne,i as Re,M as _e,T as Ae}from"./index-Co8FZznv.js";import{b as Fe,o as Ie,u as Oe,l as $e,n as Be,q as je}from"./EllipsisOutlined-CcDjwxok.js";import{C as pe}from"./index-VnHIrFi4.js";import{R as Pe,u as ke}from"./useVariants-BiV9jpcP.js";import{q as ze,u as De,f as xe,h as Ke}from"./index-BWMbFT-h.js";function Te(e){return!!(e.addonBefore||e.addonAfter)}function Me(e){return!!(e.prefix||e.suffix||e.allowClear)}function he(e,a,r){var n=a.cloneNode(!0),t=Object.create(e,{target:{value:n},currentTarget:{value:n}});return n.value=r,typeof a.selectionStart=="number"&&typeof a.selectionEnd=="number"&&(n.selectionStart=a.selectionStart,n.selectionEnd=a.selectionEnd),n.setSelectionRange=function(){a.setSelectionRange.apply(a,arguments)},t}function ye(e,a,r,n){if(r){var t=a;if(a.type==="click"){t=he(a,e,""),r(t);return}if(e.type!=="file"&&n!==void 0){t=he(a,e,n),r(t);return}r(t)}}function Ve(e,a){if(e){e.focus(a);var r=a||{},n=r.cursor;if(n){var t=e.value.length;switch(n){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(t,t);break;default:e.setSelectionRange(0,t)}}}}var We=i.forwardRef(function(e,a){var r,n,t,x=e.inputElement,h=e.children,v=e.prefixCls,F=e.prefix,I=e.suffix,b=e.addonBefore,O=e.addonAfter,Y=e.className,se=e.style,T=e.disabled,M=e.readOnly,Z=e.focused,P=e.triggerFocus,y=e.allowClear,U=e.value,G=e.handleReset,_=e.hidden,u=e.classes,l=e.classNames,k=e.dataAttrs,w=e.styles,C=e.components,z=e.onClear,ee=h??x,s=(C==null?void 0:C.affixWrapper)||"span",V=(C==null?void 0:C.groupWrapper)||"span",E=(C==null?void 0:C.wrapper)||"span",d=(C==null?void 0:C.groupAddon)||"span",$=f.useRef(null),H=function(D){var L;(L=$.current)!==null&&L!==void 0&&L.contains(D.target)&&(P==null||P())},te=Me(e),N=f.cloneElement(ee,{value:U,className:p((r=ee.props)===null||r===void 0?void 0:r.className,!te&&(l==null?void 0:l.variant))||null}),W=f.useRef(null);if(i.useImperativeHandle(a,function(){return{nativeElement:W.current||$.current}}),te){var R=null;if(y){var q=!T&&!M&&U,J="".concat(v,"-clear-icon"),ne=Ce(y)==="object"&&y!==null&&y!==void 0&&y.clearIcon?y.clearIcon:"✖";R=i.createElement("button",{type:"button",onClick:function(D){G==null||G(D),z==null||z()},onMouseDown:function(D){return D.preventDefault()},className:p(J,j(j({},"".concat(J,"-hidden"),!q),"".concat(J,"-has-suffix"),!!I))},ne)}var S="".concat(v,"-affix-wrapper"),ue=p(S,j(j(j(j(j({},"".concat(v,"-disabled"),T),"".concat(S,"-disabled"),T),"".concat(S,"-focused"),Z),"".concat(S,"-readonly"),M),"".concat(S,"-input-with-clear-btn"),I&&y&&U),u==null?void 0:u.affixWrapper,l==null?void 0:l.affixWrapper,l==null?void 0:l.variant),m=(I||y)&&i.createElement("span",{className:p("".concat(v,"-suffix"),l==null?void 0:l.suffix),style:w==null?void 0:w.suffix},R,I);N=i.createElement(s,ge({className:ue,style:w==null?void 0:w.affixWrapper,onClick:H},k==null?void 0:k.affixWrapper,{ref:$}),F&&i.createElement("span",{className:p("".concat(v,"-prefix"),l==null?void 0:l.prefix),style:w==null?void 0:w.prefix},F),N,m)}if(Te(e)){var A="".concat(v,"-group"),B="".concat(A,"-addon"),ae="".concat(A,"-wrapper"),oe=p("".concat(v,"-wrapper"),A,u==null?void 0:u.wrapper,l==null?void 0:l.wrapper),ie=p(ae,j({},"".concat(ae,"-disabled"),T),u==null?void 0:u.group,l==null?void 0:l.groupWrapper);N=i.createElement(V,{className:ie,ref:W},i.createElement(E,{className:oe},b&&i.createElement(d,{className:B},b),N,O&&i.createElement(d,{className:B},O)))}return i.cloneElement(N,{className:p((n=N.props)===null||n===void 0?void 0:n.className,Y)||null,style:X(X({},(t=N.props)===null||t===void 0?void 0:t.style),se),hidden:_})}),Le=["show"];function Ue(e,a){return f.useMemo(function(){var r={};a&&(r.show=Ce(a)==="object"&&a.formatter?a.formatter:!!a),r=X(X({},r),e);var n=r,t=n.show,x=Se(n,Le);return X(X({},x),{},{show:!!t,showFormatter:typeof t=="function"?t:void 0,strategy:x.strategy||function(h){return h.length}})},[e,a])}var Ge=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","onKeyUp","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","count","type","classes","classNames","styles","onCompositionStart","onCompositionEnd"],He=f.forwardRef(function(e,a){var r=e.autoComplete,n=e.onChange,t=e.onFocus,x=e.onBlur,h=e.onPressEnter,v=e.onKeyDown,F=e.onKeyUp,I=e.prefixCls,b=I===void 0?"rc-input":I,O=e.disabled,Y=e.htmlSize,se=e.className,T=e.maxLength,M=e.suffix,Z=e.showCount,P=e.count,y=e.type,U=y===void 0?"text":y,G=e.classes,_=e.classNames,u=e.styles,l=e.onCompositionStart,k=e.onCompositionEnd,w=Se(e,Ge),C=f.useState(!1),z=me(C,2),ee=z[0],s=z[1],V=f.useRef(!1),E=f.useRef(!1),d=f.useRef(null),$=f.useRef(null),H=function(o){d.current&&Ve(d.current,o)},te=Fe(e.defaultValue,{value:e.value}),N=me(te,2),W=N[0],R=N[1],q=W==null?"":String(W),J=f.useState(null),ne=me(J,2),S=ne[0],ue=ne[1],m=Ue(P,Z),A=m.max||T,B=m.strategy(q),ae=!!A&&B>A;f.useImperativeHandle(a,function(){var c;return{focus:H,blur:function(){var g;(g=d.current)===null||g===void 0||g.blur()},setSelectionRange:function(g,de,le){var Q;(Q=d.current)===null||Q===void 0||Q.setSelectionRange(g,de,le)},select:function(){var g;(g=d.current)===null||g===void 0||g.select()},input:d.current,nativeElement:((c=$.current)===null||c===void 0?void 0:c.nativeElement)||d.current}}),f.useEffect(function(){E.current&&(E.current=!1),s(function(c){return c&&O?!1:c})},[O]);var oe=function(o,g,de){var le=g;if(!V.current&&m.exceedFormatter&&m.max&&m.strategy(g)>m.max){if(le=m.exceedFormatter(g,{max:m.max}),g!==le){var Q,ve;ue([((Q=d.current)===null||Q===void 0?void 0:Q.selectionStart)||0,((ve=d.current)===null||ve===void 0?void 0:ve.selectionEnd)||0])}}else if(de.source==="compositionEnd")return;R(le),d.current&&ye(d.current,o,n,le)};f.useEffect(function(){if(S){var c;(c=d.current)===null||c===void 0||c.setSelectionRange.apply(c,Ne(S))}},[S]);var ie=function(o){oe(o,o.target.value,{source:"change"})},re=function(o){V.current=!1,oe(o,o.currentTarget.value,{source:"compositionEnd"}),k==null||k(o)},D=function(o){h&&o.key==="Enter"&&!E.current&&(E.current=!0,h(o)),v==null||v(o)},L=function(o){o.key==="Enter"&&(E.current=!1),F==null||F(o)},fe=function(o){s(!0),t==null||t(o)},K=function(o){E.current&&(E.current=!1),s(!1),x==null||x(o)},ce=function(o){R(""),H(),d.current&&ye(d.current,o,n)},be=ae&&"".concat(b,"-out-of-range"),we=function(){var o=Ie(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","count","classes","htmlSize","styles","classNames","onClear"]);return i.createElement("input",ge({autoComplete:r},o,{onChange:ie,onFocus:fe,onBlur:K,onKeyDown:D,onKeyUp:L,className:p(b,j({},"".concat(b,"-disabled"),O),_==null?void 0:_.input),style:u==null?void 0:u.input,ref:d,size:Y,type:U,onCompositionStart:function(de){V.current=!0,l==null||l(de)},onCompositionEnd:re}))},Ee=function(){var o=Number(A)>0;if(M||m.show){var g=m.showFormatter?m.showFormatter({value:q,count:B,maxLength:A}):"".concat(B).concat(o?" / ".concat(A):"");return i.createElement(i.Fragment,null,m.show&&i.createElement("span",{className:p("".concat(b,"-show-count-suffix"),j({},"".concat(b,"-show-count-has-suffix"),!!M),_==null?void 0:_.count),style:X({},u==null?void 0:u.count)},g),M)}return null};return i.createElement(We,ge({},w,{prefixCls:b,className:p(se,be),handleReset:ce,value:q,focused:ee,triggerFocus:H,suffix:Ee(),disabled:O,classes:G,classNames:_,styles:u}),we())});const qe=e=>{let a;return typeof e=="object"&&(e!=null&&e.clearIcon)?a=e:e&&(a={clearIcon:i.createElement(Pe,null)}),a};function Je(e,a){const r=f.useRef([]),n=()=>{r.current.push(setTimeout(()=>{var t,x,h,v;!((t=e.current)===null||t===void 0)&&t.input&&((x=e.current)===null||x===void 0?void 0:x.input.getAttribute("type"))==="password"&&(!((h=e.current)===null||h===void 0)&&h.input.hasAttribute("value"))&&((v=e.current)===null||v===void 0||v.input.removeAttribute("value"))}))};return f.useEffect(()=>(a&&n(),()=>r.current.forEach(t=>{t&&clearTimeout(t)})),[]),n}function Qe(e){return!!(e.prefix||e.suffix||e.allowClear||e.showCount)}var Xe=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const at=f.forwardRef((e,a)=>{const{prefixCls:r,bordered:n=!0,status:t,size:x,disabled:h,onBlur:v,onFocus:F,suffix:I,allowClear:b,addonAfter:O,addonBefore:Y,className:se,style:T,styles:M,rootClassName:Z,onChange:P,classNames:y,variant:U}=e,G=Xe(e,["prefixCls","bordered","status","size","disabled","onBlur","onFocus","suffix","allowClear","addonAfter","addonBefore","className","style","styles","rootClassName","onChange","classNames","variant"]),{getPrefixCls:_,direction:u,allowClear:l,autoComplete:k,className:w,style:C,classNames:z,styles:ee}=Re("input"),s=_("input",r),V=f.useRef(null),E=Oe(s),[d,$,H]=ze(s,Z),[te]=De(s,E),{compactSize:N,compactItemClassnames:W}=$e(s,u),R=Be(K=>{var ce;return(ce=x??N)!==null&&ce!==void 0?ce:K}),q=i.useContext(_e),J=h??q,{status:ne,hasFeedback:S,feedbackIcon:ue}=f.useContext(je),m=Ke(ne,t),A=Qe(e)||!!S;f.useRef(A);const B=Je(V,!0),ae=K=>{B(),v==null||v(K)},oe=K=>{B(),F==null||F(K)},ie=K=>{B(),P==null||P(K)},re=(S||I)&&i.createElement(i.Fragment,null,I,S&&ue),D=qe(b??l),[L,fe]=ke("input",U,n);return d(te(i.createElement(He,Object.assign({ref:Ae(a,V),prefixCls:s,autoComplete:k},G,{disabled:J,onBlur:ae,onFocus:oe,style:Object.assign(Object.assign({},C),T),styles:Object.assign(Object.assign({},ee),M),suffix:re,allowClear:D,className:p(se,Z,H,E,W,w),onChange:ie,addonBefore:Y&&i.createElement(pe,{form:!0,space:!0},Y),addonAfter:O&&i.createElement(pe,{form:!0,space:!0},O),classNames:Object.assign(Object.assign(Object.assign({},y),z),{input:p({[`${s}-sm`]:R==="small",[`${s}-lg`]:R==="large",[`${s}-rtl`]:u==="rtl"},y==null?void 0:y.input,z.input,$),variant:p({[`${s}-${L}`]:fe},xe(s,m)),affixWrapper:p({[`${s}-affix-wrapper-sm`]:R==="small",[`${s}-affix-wrapper-lg`]:R==="large",[`${s}-affix-wrapper-rtl`]:u==="rtl"},$),wrapper:p({[`${s}-group-rtl`]:u==="rtl"},$),groupWrapper:p({[`${s}-group-wrapper-sm`]:R==="small",[`${s}-group-wrapper-lg`]:R==="large",[`${s}-group-wrapper-rtl`]:u==="rtl",[`${s}-group-wrapper-${L}`]:fe},xe(`${s}-group-wrapper`,m,S),$)})}))))});export{We as B,at as I,Ue as a,qe as g,ye as r,Ve as t,Je as u};
