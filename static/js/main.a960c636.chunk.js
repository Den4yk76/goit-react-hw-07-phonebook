(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{57:function(t,e,n){},59:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(10),o=n.n(r),u=n(6),i=n(3),s=n(23),b=n(24),l=n(27),d=n(26),j=n(7),f=n.n(j),O=n(2),h=Object(O.b)("contacts/fetchContactsRequest"),m=Object(O.b)("contacts/fetchContactsSuccess"),p=Object(O.b)("contacts/fetchContactsError"),C=Object(O.b)("contacts/addContactRequest"),x=Object(O.b)("contacts/addContactSuccess"),v=Object(O.b)("contacts/addContactError"),g=Object(O.b)("contacts/deleteContactRequest"),y=Object(O.b)("contacts/deleteContactSuccess"),A=Object(O.b)("contacts/deleteContactError"),k=Object(O.b)("contacts/find");f.a.defaults.baseURL="https://619362fcd3ae6d0017da852d.mockapi.io";var S=function(t,e){return function(n){n(C());var c={name:t,number:e};f.a.post("/contacts",c).then((function(t){return n(x(t.data))})).catch((function(t){return n(v(t))}))}},w=function(t){return function(e){e(g()),f.a.delete("/contacts/".concat(t)).then((function(){return e(y(t))})).catch((function(t){return e(A(t))}))}},N=function(){return function(t){t(h()),f.a.get("/contacts").then((function(e){return t(m(e.data))})).catch((function(e){return t(p(e))}))}},z=n(1),q=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.onSubmit=function(e){e.preventDefault(),t.props.addContact(t.state.name,t.state.number),t.setState({name:"",number:""})},t.onChange=function(e){var n=e.currentTarget,c=n.name,a=n.value;t.setState(Object(i.a)({},c,a))},t}return Object(b.a)(n,[{key:"render",value:function(){return Object(z.jsxs)("form",{className:"form",onSubmit:this.onSubmit,children:[Object(z.jsxs)("label",{className:"label",children:["Name"," ",Object(z.jsx)("input",{value:this.state.name,className:"label",type:"text",name:"name",onChange:this.onChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(z.jsxs)("label",{className:"label",children:["Phone"," ",Object(z.jsx)("input",{value:this.state.number,className:"label",type:"tel",name:"number",onChange:this.onChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(z.jsx)("button",{className:"button",type:"submit",children:"Submit"})]})}}]),n}(c.Component),Z=Object(u.b)(null,(function(t){return{addContact:function(e,n){return t(S(e,n))}}}))(q);var E=Object(u.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{fetchContacts:function(){return t(N())},deleteContact:function(e){return t(w(e))}}}))((function(t){var e=t.contacts,n=t.deleteContact,a=t.fetchContacts;return Object(c.useEffect)((function(){a()}),[]),e.map((function(t){return Object(z.jsxs)("li",{children:[t.name,": ",t.number,Object(z.jsx)("button",{className:"button",type:"button",id:t.id,onClick:function(t){n(t.target.id)},children:"Delete"})]},t.id)}))}));var R=Object(u.b)((function(t){return{contacts:t.contacts.items,filter:t.contacts.filter}}),(function(t){return{deleteContact:function(e){return t(w(e))}}}))((function(t){var e=t.contacts,n=t.filter,c=t.deleteContact;return e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())})).map((function(t){return Object(z.jsxs)("li",{children:[t.name,": ",t.number,Object(z.jsx)("button",{className:"button",type:"button",id:t.id,onClick:function(t){c(t.target.id)},children:"Delete"})]},t.id)}))}));var F=Object(u.b)((function(t){return{contacts:t.contacts.items,filter:t.contacts.filter}}),(function(t){return{changeFilter:function(e){return t(k(e))}}}))((function(t){var e=t.filter,n=t.changeFilter;return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("h3",{children:"Find contacts by name"}),Object(z.jsx)("input",{type:"text",name:"name",onChange:function(t){return n(t.currentTarget.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(z.jsx)("ul",{children:e?Object(z.jsx)(R,{}):Object(z.jsx)(E,{})})]})}));n(57);function J(){return Object(z.jsxs)("div",{children:[Object(z.jsx)("h1",{children:"Phonebook"}),Object(z.jsx)(Z,{}),Object(z.jsx)("h2",{children:"Contacts"}),Object(z.jsx)(F,{})]})}var L,M,B=n(11),D=n(5);f.a.defaults.baseURL="https://619362fcd3ae6d0017da852d.mockapi.io";var T=Object(O.c)([],(L={},Object(i.a)(L,m,(function(t,e){return e.payload})),Object(i.a)(L,x,(function(t,e){var n=e.payload;return[].concat(Object(B.a)(t),[n])})),Object(i.a)(L,y,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),L)),P=Object(O.c)(!1,(M={},Object(i.a)(M,h,(function(){return!0})),Object(i.a)(M,m,(function(){return!1})),Object(i.a)(M,p,(function(){return!1})),Object(i.a)(M,C,(function(){return!0})),Object(i.a)(M,x,(function(){return!1})),Object(i.a)(M,v,(function(){return!1})),Object(i.a)(M,g,(function(){return!0})),Object(i.a)(M,y,(function(){return!1})),Object(i.a)(M,A,(function(){return!1})),M)),U=Object(O.c)("",Object(i.a)({},k,(function(t,e){return e.payload}))),$=Object(D.b)({items:T,filter:U,loading:P}),I=n(25),G=n.n(I),H=[].concat(Object(B.a)(Object(O.d)()),[function(t){return function(t){return function(e){console.log("My middleware",e),t(e)}}},G.a]),K=Object(O.a)({reducer:{contacts:$},middleware:H,devTools:!1});o.a.render(Object(z.jsx)(a.a.StrictMode,{children:Object(z.jsx)(u.a,{store:K,children:Object(z.jsx)(J,{})})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.a960c636.chunk.js.map