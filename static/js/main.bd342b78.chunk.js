(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(8),r=n.n(c);n(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(5),o=n(2),u=n(3),s=n(1);n(15);function d(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),c=n[0],r=n[1],l=Object(a.useState)(null),o=Object(s.a)(l,2),u=o[0],d=o[1],f=function(){var t=c.trim();""!==t?(e.addItem(t),r("")):d("Title is required")};return i.a.createElement("div",null,i.a.createElement("input",{value:c,onChange:function(e){r(e.currentTarget.value)},onKeyPress:function(e){d(null),"Enter"===e.key&&f()},className:u?"error":""}),i.a.createElement("button",{onClick:f},"+"),u&&i.a.createElement("div",{className:"error-message"},u))}function f(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),c=n[0],r=n[1],l=Object(a.useState)(!1),o=Object(s.a)(l,2),u=o[0],d=o[1];return u?i.a.createElement("input",{onBlur:function(){d(!1),e.onChange(c)},value:c,autoFocus:!0,onChange:function(e){return r(e.currentTarget.value)}}):i.a.createElement("span",{onDoubleClick:function(){d(!0),r(e.title)}},e.title)}function m(e){return i.a.createElement("div",null,i.a.createElement("h3",null,i.a.createElement(f,{onChange:function(t){e.changeTodolistTitle(e.id,t)},title:e.title}),i.a.createElement("button",{onClick:function(){return e.removeTodolist(e.id)}},"x")),i.a.createElement(d,{addItem:function(t){e.addTask(t,e.id)}}),i.a.createElement("ul",null,e.tasks.map((function(t){return i.a.createElement("li",{key:t.id,className:t.isDone?"is-done":""},i.a.createElement("input",{type:"checkbox",onChange:function(n){var a=n.currentTarget.checked;e.changeTaskStatus(t.id,a,e.id)},checked:t.isDone}),i.a.createElement(f,{onChange:function(n){e.changeTaskTitle(t.id,n,e.id)},title:t.title}),i.a.createElement("button",{onClick:function(){return e.removeTask(t.id,e.id)}},"x"))}))),i.a.createElement("div",null,i.a.createElement("button",{className:"all"===e.filter?"active-filter":"",onClick:function(){return e.changeFilter("all",e.id)}},"All"),i.a.createElement("button",{className:"active"===e.filter?"active-filter":"",onClick:function(){return e.changeFilter("active",e.id)}},"Active"),i.a.createElement("button",{className:"completed"===e.filter?"active-filter":"",onClick:function(){return e.changeFilter("completed",e.id)}},"Completed")))}var b=n(18);var v=function(){var e,t=Object(b.a)(),n=Object(b.a)(),c=Object(a.useState)([{id:t,title:"What to learn",filter:"all"},{id:n,title:"What to buy",filter:"all"}]),r=Object(s.a)(c,2),f=r[0],v=r[1],j=Object(a.useState)((e={},Object(u.a)(e,t,[{id:Object(b.a)(),title:"HTML&CSS",isDone:!0},{id:Object(b.a)(),title:"JS",isDone:!0}]),Object(u.a)(e,n,[{id:Object(b.a)(),title:"Milk",isDone:!0},{id:Object(b.a)(),title:"React Book",isDone:!0}]),e)),O=Object(s.a)(j,2),h=O[0],k=O[1];function E(e,t){var n=h[t];h[t]=n.filter((function(t){return t.id!==e})),k(Object(o.a)({},h))}function g(e,t){var n={id:Object(b.a)(),title:e,isDone:!1},a=h[t];h[t]=[n].concat(Object(l.a)(a)),k(Object(o.a)({},h))}function T(e,t,n){var a=h[n].find((function(t){return t.id===e}));a&&(a.isDone=t,k(Object(o.a)({},h)))}function p(e,t,n){var a=h[n].find((function(t){return t.id===e}));a&&(a.title=t,k(Object(o.a)({},h)))}function C(e,t){var n=f.find((function(e){return e.id===t}));n&&(n.filter=e,v(Object(l.a)(f)))}function D(e){v(f.filter((function(t){return t.id!==e}))),delete h[e],k(Object(o.a)({},h))}function S(e,t){var n=f.find((function(t){return t.id===e}));n&&(n.title=t,v(Object(l.a)(f)))}return i.a.createElement("div",{className:"App"},i.a.createElement(d,{addItem:function(e){var t=Object(b.a)();v([{id:t,title:e,filter:"all"}].concat(Object(l.a)(f))),k(Object(o.a)(Object(o.a)({},h),{},Object(u.a)({},t,[])))}}),f.map((function(e){var t=h[e.id],n=t;return"active"===e.filter&&(n=t.filter((function(e){return!e.isDone}))),"completed"===e.filter&&(n=t.filter((function(e){return e.isDone}))),i.a.createElement(m,{key:e.id,id:e.id,title:e.title,tasks:n,removeTask:E,changeFilter:C,addTask:g,changeTaskStatus:T,changeTaskTitle:p,filter:e.filter,removeTodolist:D,changeTodolistTitle:S})})))};r.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.bd342b78.chunk.js.map