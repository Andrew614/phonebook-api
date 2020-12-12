(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),c=t.n(u),l=t(14),o=t(3),i=function(e){var n=e.handleNewName,t=e.handleNewNumber,a=e.addContact,u=e.newName,c=e.newNumber;return r.a.createElement("form",{onSubmit:a},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:u,onChange:n})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:c,onChange:t})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},m=function(e){var n=e.filteredName,t=e.handleFilteredName;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},d=function(e){var n=e.person,t=e.handleDelete;return r.a.createElement("div",null,r.a.createElement("p",null,n.name," ",n.number,r.a.createElement("button",{onClick:function(){return t(n.id)}},"delete")))},f=function(e){var n=e.filteredName,t=e.people,a=e.handleDelete;return(n?t.filter(function(e){return e.name.toLowerCase().match(n.toLowerCase())}):t).map(function(e){return r.a.createElement(d,{key:e.name,person:e,handleDelete:a})})},h=t(2),b=t.n(h),p="/api/persons",s=function(){return b.a.get(p).then(function(e){return e.data})},E=function(e){return b.a.post(p,e).then(function(e){return e.data})},v=function(e){return b.a.delete("".concat(p,"/").concat(e)).then(function(e){return e.data})},w=function(e,n){b.a.put("".concat(p,"/").concat(e),n)},N=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),d=Object(o.a)(c,2),h=d[0],b=d[1],p=Object(a.useState)(""),N=Object(o.a)(p,2),j=N[0],O=N[1],C=Object(a.useState)(""),g=Object(o.a)(C,2),k=g[0],D=g[1];Object(a.useEffect)(function(){s().then(function(e){return u(e)})},[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(m,{filteredName:k,handleFilteredName:function(e){D(e.target.value)}}),r.a.createElement("h2",null,"Add A New Contact"),r.a.createElement(i,{handleNewName:function(e){b(e.target.value)},handleNewNumber:function(e){O(e.target.value)},addContact:function(e){e.preventDefault();var n={name:h,number:j};if(t.includes(t.find(function(e){return e.name===n.name}))){if(window.confirm("".concat(n.name," is already added to phonebook, replace the old number with a new one?"))){var a=t.find(function(e){return e.name===n.name});w(a.id,n).then(function(e){u(t.map(function(n){return n.id===a.id?e:n}))})}}else E(n).then(function(e){u([].concat(Object(l.a)(t),[e]))});b(""),O("")},newName:h,newNumber:j}),r.a.createElement("h2",null,"Numbers"),r.a.createElement("div",null,r.a.createElement(f,{people:t,filteredName:k,handleDelete:function(e){var n=t.find(function(n){return n.id===e});window.confirm("Delete ".concat(n.name,"?"))&&v(e).then(function(){u(t.filter(function(n){return n.id!==e}))})}})))};c.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.260c9ebd.chunk.js.map