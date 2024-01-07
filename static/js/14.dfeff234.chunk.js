"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[14],{1014:(n,e,t)=>{t.r(e),t.d(e,{default:()=>V});var r,a=t(2791),i=t(2506),s=t(5984),o=t(7694),l=t.n(o),d=t(8007),c=t(8328),u=t(168),m=t(225);const x=(0,m.Z)(i.l0)(r||(r=(0,u.Z)(["\n  padding: 10px;\n  border: solid 1px green;\n  border-radius: 8px;\n\n  input {\n    margin-bottom: 8px;\n  }\n"])));var p=t(184);const b=d.Ry({name:d.Z_().required("Name is required"),number:d.Z_().min(8).max(12).typeError("from 8 to 12 symbols").required("Number is required")}),h={id:(0,s.x0)(),name:"",number:""},g=()=>{const{data:n}=(0,c.wY)(void 0),[e,{isLoading:t}]=(0,c.Tn)();return(0,p.jsx)(i.J9,{initialValues:h,onSubmit:(t,r)=>{let{resetForm:a}=r;const{name:i}=t;if(n.find((n=>n.name.toLowerCase()===i.toLowerCase())))return l().Notify.failure("".concat(i," is already in contacts."));e(t),a({values:{...h,id:(0,s.x0)()}})},validationSchema:b,children:(0,p.jsxs)(x,{children:[(0,p.jsx)("label",{htmlFor:"name",children:"Name"}),(0,p.jsx)("br",{}),(0,p.jsx)(i.gN,{id:"name",name:"name",type:"text"}),(0,p.jsx)(i.Bc,{name:"name",component:"div"}),(0,p.jsx)("br",{}),(0,p.jsx)("label",{htmlFor:"number",children:"Number"}),(0,p.jsx)("br",{}),(0,p.jsx)(i.gN,{id:"number",name:"number",type:"tel"}),(0,p.jsx)(i.Bc,{name:"number",component:"div"}),(0,p.jsx)("br",{}),(0,p.jsx)("button",{type:"submit",disabled:t,children:t?"Adding contact...":"Add Contact"})]})})};var j,f,Z,v=t(4420),y=t(8428);const w=m.Z.ul(j||(j=(0,u.Z)(["\n  padding-left: 10px;\n  span {\n    margin-right: 8px;\n  }\n"]))),C=m.Z.li(f||(f=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n\n  :not(:last-of-type) {\n    margin-bottom: 8px;\n  }\n"]))),N=m.Z.div(Z||(Z=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-left: auto;\n"])));var _=t(7613),k=t(5602),S=t(1442),q=t(3971);const L={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",boxShadow:24,p:4},F=d.Ry({name:d.Z_().required("Name is required"),number:d.Z_().required("Number is required")}),T=n=>{let{contact:e,onClose:t,open:r}=n;const[a]=(0,c.wv)();if(!e)return null;return(0,p.jsx)(_.Z,{open:r,onClose:t,children:(0,p.jsx)(k.Z,{sx:L,children:(0,p.jsx)(i.J9,{initialValues:e,onSubmit:async(n,r)=>{let{setSubmitting:i}=r;await a({contactId:e.id,...n}),i(!1),t()},validationSchema:F,children:n=>{let{isSubmitting:e}=n;return(0,p.jsxs)(i.l0,{children:[(0,p.jsx)(i.gN,{as:S.Z,name:"name",label:"Name",fullWidth:!0,margin:"normal"}),(0,p.jsx)(i.gN,{as:S.Z,name:"number",label:"Number",fullWidth:!0,margin:"normal"}),(0,p.jsx)(q.Z,{type:"submit",variant:"contained",disabled:e,children:"Update"})]})}})})})},z=()=>{const[n,e]=(0,a.useState)(!1),[t,r]=(0,a.useState)(),{data:i}=(0,c.wY)(void 0),[s,{isLoading:o}]=(0,c.MG)(),[l,d]=(0,a.useState)(""),u=(0,v.v9)(y.zK),m=(()=>{if(!i)return;if(!u)return[...i];const n=u.toLowerCase();return[...i].filter((e=>e.name.toLowerCase().includes(n)))})()||[];return(0,a.useEffect)((()=>{!o&&l&&d("")}),[l,o]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(w,{children:m.map(((n,t)=>(0,p.jsxs)(C,{children:[(0,p.jsx)("span",{children:t+1}),n.name,", ",n.number,(0,p.jsxs)(N,{children:[(0,p.jsx)("button",{onClick:()=>(n=>{e(!0),r(n)})(n),children:"edit"}),(0,p.jsx)("button",{type:"button",onClick:()=>(async n=>{s(n),d(n)})(n.id),disabled:o,children:n.id===l?"deleting...":"delete"})]})]},n.id)))}),(0,p.jsx)(T,{contact:t,onClose:()=>e(!1),open:n})]})};var A,B;const E=m.Z.label(A||(A=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding-left: 10px;\n  gap: 4px;\n"]))),I=m.Z.input(B||(B=(0,u.Z)(["\n  max-width: 50%;\n"]))),J=()=>{const n=(0,v.I0)(),e=(0,v.v9)(y.zK);return(0,p.jsxs)(E,{children:["Find contact by name",(0,p.jsx)(I,{type:"text",value:e,onChange:e=>{n((0,y.Tv)(e.currentTarget.value))}})]})};var K;const R=m.Z.div(K||(K=(0,u.Z)(["\n  width: 400px;\n  margin: 50px auto 0;\n  background-color: lightgray;\n  padding: 16px;\n  border-radius: 8px;\n"]))),V=()=>(0,p.jsxs)(R,{children:[(0,p.jsx)(g,{}),(0,p.jsx)("h2",{children:"Contacts"}),(0,p.jsx)(J,{}),(0,p.jsx)(z,{})]})}}]);
//# sourceMappingURL=14.dfeff234.chunk.js.map