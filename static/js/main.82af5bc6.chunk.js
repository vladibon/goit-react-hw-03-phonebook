(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={container:"Container_container__3RIox"}},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(10),i=n.n(r),o=(n(18),n(19),n(12)),s=n(2),u=n(3),l=n(5),b=n(4),d=n(13),h=n(11),j=n.n(h),m=n(0),f=function(e){var t=e.children;return Object(m.jsx)("div",{className:j.a.container,children:t})},p=n(6),O=n(9),v=n(7),C=n.n(v),x={name:"",number:""},g=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state=Object(O.a)({},x),e.handleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(p.a)({},a,c))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState(Object(O.a)({},x))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(m.jsxs)("form",{className:C.a.form,onSubmit:this.handleSubmit,children:[Object(m.jsxs)("label",{children:["Name",Object(m.jsx)("input",{className:C.a.input,type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange})]}),Object(m.jsxs)("label",{children:["Number",Object(m.jsx)("input",{className:C.a.input,type:"tel",name:"number",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange})]}),Object(m.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),y=function(e){var t=e.value,n=e.onChange;return Object(m.jsxs)("label",{children:["Find contacts by name",Object(m.jsx)("input",{type:"text",name:"filter",value:t,onChange:n})]})},S=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).findMatches=function(t){return t.toLowerCase().includes(e.props.filter.toLowerCase().trim())},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.contacts,a=t.deleteContact;return Object(m.jsx)("ul",{children:n.map((function(t){var n=t.id,c=t.name,r=t.number;return e.findMatches(c)&&Object(m.jsxs)("li",{children:[Object(m.jsxs)("p",{children:[c,": ",r]}),Object(m.jsx)("button",{type:"button",onClick:function(){return a(n)},children:"Delete"})]},n)}))})}}]),n}(a.Component),A=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],k=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[].concat(A),filter:""},e.handleSubmit=function(t){e.state.contacts.find((function(e){return e.name===t.name}))?alert("".concat(t.name," is already in contacts.")):e.saveContact(t)},e.saveContact=function(t){var n=t.name,a=t.number;e.setState((function(e){return{contacts:[].concat(Object(o.a)(e.contacts),[{id:Object(d.a)(8),name:n,number:a}])}}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.handleFilterChange=function(t){var n=t.target.value;e.setState({filter:n})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter;return Object(m.jsxs)(f,{children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(g,{onSubmit:this.handleSubmit}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(y,{value:n,onChange:this.handleFilterChange}),Object(m.jsx)(S,{contacts:t,filter:n,deleteContact:this.deleteContact})]})}}]),n}(a.Component),w=k;i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(w,{})}),document.getElementById("root"))},7:function(e,t,n){}},[[21,1,2]]]);
//# sourceMappingURL=main.82af5bc6.chunk.js.map