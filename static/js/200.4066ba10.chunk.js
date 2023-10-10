"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[200],{6200:function(n,e,r){r.r(e),r.d(e,{default:function(){return K}});var t,i,a,c,u,o=r(1413),l=r(5705),s=r(6727),d=r(168),p=r(5867),x=(0,p.ZP)(l.l0)(t||(t=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 20px;\n  border: 2px solid black;\n  border-radius: 5px;\n  /* text-align: center; */\n\n  p {\n    margin-bottom: 5px;\n  }\n\n  label {\n    margin-top: -5px;\n  }\n\n  span {\n    color: red;\n    margin-left: 5px;\n  }\n"]))),m=p.ZP.button(i||(i=(0,d.Z)(["\n\n  display: flex;\n  align-items: center;\n  width: 150px;\n  margin: 15px auto;\n  padding: 20px 30px;\n  color: #000000;\n  background-color: #ffffff;\n  border-radius: 14px;\n  cursor: pointer;\n"]))),f=(0,p.ZP)(l.gN)(a||(a=(0,d.Z)(["\n  width: 200px;\n  height: 40px;\n"]))),h=r(9434),b=r(3634),g=r(184),j=s.Ry().shape({name:s.Z_().required("Required"),number:s.Z_().required("Required")}),v={name:"",number:""},Z=function(){var n=(0,h.v9)((function(n){return n.contacts.items})),e=(0,h.I0)();return(0,g.jsx)(l.J9,{initialValues:v,validationSchema:j,onSubmit:function(r,t){return n.find((function(n){return n.name===r.name}))?alert("".concat(r.name," is already in contacts")):n.find((function(n){return n.number===r.number}))?alert("".concat(r.number," is already in contacts")):(e((0,b.uK)((0,o.Z)({},r))),void t.resetForm())},children:(0,g.jsxs)(x,{children:[(0,g.jsxs)("label",{children:[(0,g.jsx)("p",{children:"Name:"}),(0,g.jsx)(f,{type:"text",name:"name",placeholder:"Input name"}),(0,g.jsx)(l.Bc,{name:"name",component:"span"})]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("p",{children:"Number:"}),(0,g.jsx)(f,{type:"tel",name:"number",placeholder:"Input number"}),(0,g.jsx)(l.Bc,{name:"number",component:"span"})]}),(0,g.jsx)(m,{type:"submit",children:"Add contact"})]})})},y=p.zo.ul(c||(c=(0,d.Z)(["\n  li {\n    padding: 5px 10px;\n  }\n\n  button {\n    margin-left: 10px;\n    font-size: 10px;\n  }\n"]))),k=r(2791),w=function(){var n=(0,h.v9)((function(n){return n.contacts.items})),e=(0,h.v9)((function(n){return n.filter.value})),r=(0,h.v9)((function(n){return n.contacts.error})),t=n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})),i=(0,h.I0)();return(0,k.useEffect)((function(){i((0,b.K2)())}),[i]),(0,g.jsx)(g.Fragment,{children:n>0?(0,g.jsx)("div",{children:"Loading..."}):r?(0,g.jsxs)("div",{children:["Error: ",r]}):(0,g.jsx)(y,{children:t.map((function(n){return(0,g.jsxs)("li",{children:[n.name,": ",n.number,(0,g.jsx)("button",{onClick:function(){return i((0,b.GK)(n.id))},children:"Delete"})]},n.id)}))})})},q=r(4270),C=function(n){return n.contacts.loading},I=p.ZP.div(u||(u=(0,d.Z)(["\n  background-color: lightgrey;\n  padding: 10px 5px;\n\n  span {\n    margin-left: 20px;\n  }\n\n  input {\n    margin-left: 10px;\n    height: 30px;\n  }\n"]))),_=r(4808),F=function(){var n=(0,h.v9)((function(n){return n.filter.value})),e=(0,h.I0)();return(0,g.jsx)(I,{children:(0,g.jsxs)("label",{children:[(0,g.jsx)("span",{children:"Find contacts by name:"}),(0,g.jsx)("input",{type:"text",value:n,onChange:function(n){return e((0,_.pe)(n.currentTarget.value))}})]})})},K=function(){var n=(0,h.I0)(),e=(0,h.v9)(C);return(0,k.useEffect)((function(){n((0,b.K2)())}),[n]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(q.q,{children:(0,g.jsx)("title",{children:"Your contacts"})}),(0,g.jsx)(Z,{}),(0,g.jsx)("div",{children:e&&"Request in progress..."}),(0,g.jsx)(F,{}),(0,g.jsx)(w,{})]})}}}]);
//# sourceMappingURL=200.4066ba10.chunk.js.map