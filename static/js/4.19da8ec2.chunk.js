(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{293:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__2KoMY",dialogsItems:"Dialogs_dialogsItems__zpXRm",active:"Dialogs_active__2nUXA",messages:"Dialogs_messages__3qPY5"}},298:function(e,a,t){"use strict";t.r(a);var n=t(104),s=t(0),i=t.n(s),c=t(293),o=t.n(c),r=t(17),l=function(e){return i.a.createElement("div",{className:"".concat(o.a.dialog," ").concat(o.a.active)},i.a.createElement(r.b,{to:"/dialogs/".concat(e.id)},e.name))},m=function(e){return i.a.createElement("div",{className:o.a.message},e.message)},u=t(29),d=t(87),g=t(127),p=t(41),b=t(24),f=Object(p.a)(50),E=Object(g.a)({form:"dialogAddMessageForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(d.a,{component:b.b,validate:[p.b,f],name:"newMessageBody",placeholder:"Enter your message"})),i.a.createElement("div",null,i.a.createElement("button",null,"Send")))})),v=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return i.a.createElement(l,{key:e.id,name:e.name,id:e.id})})),n=a.messages.map((function(e){return i.a.createElement(m,{key:e.id,message:e.message})}));return e.isAuth?i.a.createElement("div",{className:o.a.dialogs},i.a.createElement("div",{className:o.a.dialogsItems},t),i.a.createElement("div",{className:o.a.messages},i.a.createElement("div",null,n),i.a.createElement(E,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}}))):i.a.createElement(u.a,{to:"/login"})},h=t(11),_=t(36),j=t(37),O=t(38),y=t(39),A=function(e){return{isAuth:e.auth.isAuth}},M=t(7);a.default=Object(M.d)(Object(h.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(a){e(Object(n.a)(a))}}})),(function(e){var a=function(a){Object(y.a)(n,a);var t=Object(O.a)(n);function n(){return Object(_.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(u.a,{to:"/login"})}}]),n}(i.a.Component);return Object(h.b)(A)(a)}))(v)}}]);
//# sourceMappingURL=4.19da8ec2.chunk.js.map