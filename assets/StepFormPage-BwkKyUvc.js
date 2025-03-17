import{ag as y,ah as v,a as h,j as e,u as A}from"./index-DvwZ1ndD.js";import{F as s,I as m}from"./index-LAAA1Ant.js";import{S as j}from"./index-CmLE8IvL.js";import{B as p}from"./button-B5FVim-W.js";import{R as S}from"./index-CDytar1G.js";import{D as c}from"./index-B-BlGuAb.js";import{C as b}from"./index-D6foZhgD.js";import{S as i}from"./index-B2RIUk_K.js";import"./EllipsisOutlined-cGCnUEvk.js";import"./index-asrSBQnC.js";import"./useZIndex-Bt6rU4C2.js";import"./row-B9vjbNk2.js";import"./useBreakpoint-DphuYZGY.js";import"./ExclamationCircleFilled-C4GMxJ2L.js";import"./useVariants-hQXDSmxG.js";import"./index-ein2jE-F.js";import"./Input-Bd9bCN9f.js";import"./DownOutlined-DGXJqiFI.js";import"./CheckOutlined-DDLOQXCb.js";import"./index-BwYQGDl4.js";import"./Dropdown-BSTMA70P.js";import"./progress-D_D4uyHL.js";const u=y(v(r=>({step:0,transferInfo:null,setStep:n=>r(()=>({step:n})),setTransferInfo:n=>r(()=>({transferInfo:n}))}),{name:"step-storage"})),f=()=>{const r=u(),{step:n,transferInfo:t}=r,[l]=s.useForm(),o={labelCol:{span:6},wrapperCol:{span:14}},a={paymentAccount:[{required:!0,message:"请选择付款账户"}],receiverAccount:[{required:!0,message:"请选择收款账户"}],receiver:[{required:!0,message:"请输入收款人姓名"}],transferAmount:[{required:!0,message:"请输入转账金额"}]};h.useEffect(()=>{t&&l.setFieldsValue(t)},[t,l]);const d=()=>{l.validateFields().then(x=>{r.setTransferInfo(x),r.setStep(n+1)})};return e.jsxs(s,{form:l,layout:"horizontal",initialValues:{paymentAccount:"my-admin-vue3@alipay.com",receiverAccount:"test@example.com",receiver:"Alex",transferAmount:"100.00"},labelCol:o.labelCol,wrapperCol:o.wrapperCol,rules:a,children:[e.jsx(s.Item,{label:"付款账户",name:"paymentAccount",rules:a.paymentAccount,children:e.jsx(j,{placeholder:"my-admin-vue3@alipay.com",children:e.jsx(j.Option,{value:"my-admin-vue3@alipay.com",children:"my-admin-vue3@alipay.com"})})}),e.jsx(s.Item,{label:"收款账户",name:"receiverAccount",rules:a.receiverAccount,children:e.jsx(m,{maxLength:50})}),e.jsx(s.Item,{label:"收款人姓名",name:"receiver",rules:a.receiver,children:e.jsx(m,{maxLength:20})}),e.jsx(s.Item,{label:"转账金额",name:"transferAmount",rules:a.transferAmount,children:e.jsx(m,{type:"number",maxLength:20})}),e.jsx(s.Item,{wrapperCol:{span:14,offset:6},children:e.jsx(p,{type:"primary",onClick:d,children:"下一步"})})]})},C=()=>{const r=u(),{step:n,transferInfo:t}=r,[l]=s.useForm(),o={labelCol:{span:6},wrapperCol:{span:16}},a={paySecret:[{required:!0,message:"请输入支付密码"}]};h.useEffect(()=>{t&&l.setFieldsValue({paymentAccount:t.paymentAccount,receiverAccount:t.receiverAccount,receiver:t.receiver,transferAmount:t.transferAmount})},[t,l]);const d=()=>{l.validateFields().then(()=>{r.setStep(n+1)})},x=()=>{r.setStep(n-1)};return e.jsxs(s,{form:l,layout:"horizontal",initialValues:{},labelCol:o.labelCol,wrapperCol:o.wrapperCol,rules:a,children:[e.jsx(s.Item,{label:"付款账户",name:"paymentAccount",children:e.jsx("span",{children:t==null?void 0:t.paymentAccount})}),e.jsx(s.Item,{label:"收款账户",name:"receiverAccount",children:e.jsx("span",{children:t==null?void 0:t.receiverAccount})}),e.jsx(s.Item,{label:"收款人姓名",name:"receiver",children:e.jsx("span",{children:t==null?void 0:t.receiver})}),e.jsx(s.Item,{label:"转账金额",name:"transferAmount",children:e.jsx("span",{children:t==null?void 0:t.transferAmount})}),e.jsx(s.Item,{label:"支付密码",name:"paySecret",rules:a.paySecret,children:e.jsx(m.Password,{maxLength:20})}),e.jsxs(s.Item,{wrapperCol:{span:14,offset:6},children:[e.jsx(p,{type:"default",onClick:x,children:"上一步"}),e.jsx(p,{style:{marginLeft:10},type:"primary",onClick:d,children:"下一步"})]})]})},g=()=>{const r=A(),n=u(),{transferInfo:t}=n,l=()=>{r("/")};return e.jsx("div",{children:e.jsxs(S,{title:"转账成功",children:[e.jsxs(c,{column:1,bordered:!0,size:"small",children:[e.jsx(c.Item,{label:"付款账户",children:t==null?void 0:t.paymentAccount}),e.jsx(c.Item,{label:"收款账户",children:t==null?void 0:t.receiverAccount}),e.jsx(c.Item,{label:"收款人姓名",children:t==null?void 0:t.receiver}),e.jsx(c.Item,{label:"转账金额",children:t==null?void 0:t.transferAmount})]}),e.jsx("div",{style:{textAlign:"center"},children:e.jsx(p,{style:{marginTop:"24px"},type:"primary",onClick:l,children:"确定"})})]})})},U=()=>{const r=u(),{step:n}=r;h.useEffect(()=>{console.log("stepStore",r),r.setTransferInfo(null),r.setStep(0)},[]);const t=()=>{switch(n){case 0:return e.jsx(f,{});case 1:return e.jsx(C,{});case 2:return e.jsx(g,{});default:return null}};return e.jsx(b,{style:{borderRadius:"10px",border:"none"},children:e.jsxs("div",{className:"step-form-page",children:[e.jsxs(i,{current:n,children:[e.jsx(i.Step,{title:"填写转账信息"}),e.jsx(i.Step,{title:"确认转账信息"}),e.jsx(i.Step,{title:"完成"})]}),e.jsx("div",{className:"step-form-action",children:t()})]})})};export{U as default};
