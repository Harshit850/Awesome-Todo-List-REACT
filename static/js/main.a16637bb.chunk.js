(this["webpackJsonptodolist-react"]=this["webpackJsonptodolist-react"]||[]).push([[0],{14:function(t,e,o){},15:function(t,e,o){"use strict";o.r(e);var c=o(0),s=o(1),n=o(7),a=o.n(n),l=o(3),i=(o(14),o(8)),d=function(t){var e=t.inputText,o=t.setInputText,s=t.todos,n=t.setTodos,a=t.setStatus;return Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{value:e,type:"text",required:!0,className:"todo-input",onChange:function(t){o(t.target.value)},placeholder:"Enter Task"}),Object(c.jsx)("button",{className:"todo-button",type:"submit",onClick:function(t){t.preventDefault(),n([].concat(Object(i.a)(s),[{text:e,completed:!1,id:Math.floor(1e3*Math.random()+1)}])),o("")},children:Object(c.jsx)("i",{className:"fas fa-plus-square"})}),Object(c.jsx)("div",{className:"select",children:Object(c.jsxs)("select",{name:"todos",onClick:function(t){a(t.target.value)},className:"filter-todo",children:[Object(c.jsx)("option",{value:"all",children:"All"}),Object(c.jsx)("option",{value:"completed",children:"Completed"}),Object(c.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},r=o(6),u=function(t){var e=t.text,o=t.todo,s=t.todos,n=t.setTodos;return Object(c.jsxs)("div",{className:"todo",children:[Object(c.jsxs)("li",{className:"todo-item ".concat(o.completed?"completed":""),children:[" ",e," "]}),Object(c.jsx)("button",{className:"complete-btn",onClick:function(){n(s.map((function(t){return t.id===o.id?Object(r.a)(Object(r.a)({},t),{},{completed:!t.completed}):t})))},children:Object(c.jsx)("i",{className:"fas fa-check"})}),Object(c.jsx)("button",{className:"trash-btn",onClick:function(){n(s.filter((function(t){return t.id!==o.id})))},children:Object(c.jsx)("i",{className:"fas fa-trash"})})]})},j=function(t){var e=t.todos,o=t.setTodos,s=t.filteredTodos;return Object(c.jsx)("div",{className:"todo-container",children:Object(c.jsx)("ul",{className:"todo-list",children:s.map((function(t){return Object(c.jsx)(u,{text:t.text,todos:e,todo:t,setTodos:o},t.id)}))})})},b=function(){Object(s.useEffect)((function(){g()}),[]);var t=Object(s.useState)(""),e=Object(l.a)(t,2),o=e[0],n=e[1],a=Object(s.useState)([]),i=Object(l.a)(a,2),r=i[0],u=i[1],b=Object(s.useState)("all"),f=Object(l.a)(b,2),m=f[0],O=f[1],p=Object(s.useState)([]),x=Object(l.a)(p,2),h=x[0],v=x[1];Object(s.useEffect)((function(){T(),N()}),[r,m]);var N=function(){switch(m){case"completed":v(r.filter((function(t){return!0===t.completed})));break;case"uncompleted":v(r.filter((function(t){return!1===t.completed})));break;default:v(r)}},T=function(){localStorage.setItem("todos",JSON.stringify(r))},g=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todos"));console.log(t),u(t)}},S=new Date,k=S.getUTCMonth()+1,C=S.getUTCDate()+"/"+k;return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{children:Object(c.jsxs)("h1",{children:[C," Todo List"]})}),Object(c.jsx)(d,{inputText:o,setInputText:n,todos:r,setTodos:u,setStatus:O}),Object(c.jsx)(j,{todos:r,setTodos:u,filteredTodos:h})]})};a.a.render(Object(c.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a16637bb.chunk.js.map