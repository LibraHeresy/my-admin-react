import{R as a,s as u}from"./index-Co8FZznv.js";const d=a.createContext(void 0),e=100,C=10,x=e*C,i={Modal:e,Drawer:e,Popover:e,Popconfirm:e,Tooltip:e,Tour:e,FloatButton:e},f={SelectLike:50,Dropdown:50,DatePicker:50,Menu:50,ImagePreview:1};function O(t){return t in i}const I=(t,o)=>{const[,c]=u(),n=a.useContext(d),l=O(t);let r;if(o!==void 0)r=[o,o];else{let s=n??0;l?s+=(n?0:c.zIndexPopupBase)+i[t]:s+=f[t],r=[n===void 0?o:s,s]}return r};export{x as C,I as u,d as z};
