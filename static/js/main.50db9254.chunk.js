(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={phonebook:"Phonebook_phonebook__adSca",form:"Phonebook_form__35-SK",titleHead:"Phonebook_titleHead__9_Gut",title:"Phonebook_title__AF7I7",input:"Phonebook_input__okDCu",labelFilter:"Phonebook_labelFilter__lZ62x",submitButton:"Phonebook_submitButton__1f_Aw"}},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),o=n(8),r=n.n(o),i=(n(16),n(10)),s=n(3),l=n(4),u=n(6),b=n(5),h=n(1),d=n.n(h),m=n(0),j=function(t){var e=t.children;return Object(m.jsx)("div",{className:d.a.phonebook,children:e})},f=function(t){var e=t.contacts,n=t.onDelete;return Object(m.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(m.jsxs)("li",{children:[a,": ",c,Object(m.jsx)("button",{onClick:function(){return n(e)},children:"Delete"})]},e)}))})},p=function(t){var e=t.value,n=t.onChangeFilter;return Object(m.jsxs)("label",{className:d.a.labelFilter,children:[" Find contacts by name",Object(m.jsx)("input",{className:d.a.input,type:"text",value:e,onChange:n})]})},O=n(9),v=n(19),C=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameId=Object(v.a)(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(O.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onHandleChange(t.state),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("form",{className:d.a.form,onSubmit:this.handleSubmit,children:[Object(m.jsx)("label",{htmlFor:this.nameId,children:" Name  "}),Object(m.jsx)("input",{className:d.a.input,onChange:this.handleChange,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",id:this.nameId,title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(m.jsx)("label",{htmlFor:this.nameId,children:" Number "}),Object(m.jsx)("input",{className:d.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",onChange:this.handleChange,required:!0}),Object(m.jsx)("button",{className:d.a.submitButton,type:"submit",onSubmit:this.handleSubmit,children:"Add contact"})]})}}]),n}(a.Component),x=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.nameId=Object(v.a)(),t.addContact=function(e){var n=e.name,a=e.number,c={id:Object(v.a)(),name:n,number:a};t.setState((function(t){return void 0!==t.contacts.find((function(t){return t.name===c.name}))?alert("".concat(c.name," is already in contacts")):{contacts:[c].concat(Object(i.a)(t.contacts))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.deleteContacts=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.getVisibleContacts=function(){var e=t.state.contacts,n=t.state.filter.toLocaleLowerCase();return e.filter((function(t){return t.name.toLocaleLowerCase().includes(n)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(m.jsxs)(j,{children:[Object(m.jsx)("h1",{className:d.a.titleHead,children:"Phonebook"}),Object(m.jsx)(C,{onHandleChange:this.addContact}),Object(m.jsx)("h2",{className:d.a.title,children:"Contacts"}),Object(m.jsx)(p,{value:t,onChangeFilter:this.changeFilter}),Object(m.jsx)(f,{onDelete:this.deleteContacts,contacts:e})]})}}]),n}(a.Component);r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.50db9254.chunk.js.map