(this.webpackJsonpreact_project_1=this.webpackJsonpreact_project_1||[]).push([[4],{301:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__CsiYz",dialogs_items:"Dialogs_dialogs_items__I5NKX",messages:"Dialogs_messages__2hVU5",dialog:"Dialogs_dialog__2_rvT"}},307:function(e,a,t){"use strict";t.r(a);var n=t(132),s=t(0),i=t.n(s),l=t(301),o=t.n(l),r=t(12),c=function(e){return i.a.createElement("div",{className:o.a.dialog},i.a.createElement(r.b,{to:"/dialogs/"+e.id},e.name))},m=function(e){return i.a.createElement("div",{className:o.a.message},e.message)},d=t(10),g=t(92),u=t(134),_=t(28),E=t(68),b=Object(E.a)(50),f=Object(u.a)({form:"dialogAddMessageForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(g.a,{component:_.b,validate:[E.b,b],name:"newMessageText",placeholder:"Enter your message"})),i.a.createElement("div",null,i.a.createElement("button",null,"Send")))})),p=function(e){var a=e.dialogsPage,t=a.dialogsData.map((function(e){return i.a.createElement(c,{key:e.id,name:e.name,id:e.id})})),n=a.messagesData.map((function(e){return i.a.createElement(m,{key:e.id,message:e.message})}));return e.isAuth?i.a.createElement("div",{className:o.a.dialogs},i.a.createElement("div",{className:o.a.dialogs_items},t),i.a.createElement("div",{className:o.a.messages},i.a.createElement("div",null,n)),i.a.createElement(f,{onSubmit:function(a){e.sendMessage(a.newMessageText)}})):i.a.createElement(d.a,{to:"/login"})},v=t(11),h=t(58),j=t(8);a.default=Object(j.d)(Object(v.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(a){e(Object(n.b)(a))}}})),h.a)(p)}}]);
//# sourceMappingURL=4.cde06e2d.chunk.js.map