(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(7),c=n.n(o),r=(n(14),n(8)),l=n(1),s=n(4),u=n(2);n(15);function d(e){var t=Object(i.useState)(""),n=Object(u.a)(t,2),o=n[0],c=n[1],r=Object(i.useState)(null),l=Object(u.a)(r,2),s=l[0],d=l[1],m=function(){""!==o.trim()?(e.addTask(o.trim(),e.todoListID),c("")):d("Title is required")};return a.a.createElement("div",null,a.a.createElement("h3",null,e.title,a.a.createElement("button",{onClick:function(){e.removeTodoList(e.todoListID)}},"X")),a.a.createElement("div",null,a.a.createElement("input",{value:o,onChange:function(e){c(e.currentTarget.value)},onKeyPress:function(e){d(null),13===e.charCode&&m()},className:s?"error":""}),a.a.createElement("button",{onClick:m},"+"),s&&a.a.createElement("div",{className:"error-message"},s)),a.a.createElement("ul",null,e.tasks.map((function(t){return a.a.createElement("li",{key:t.id,className:t.isDone?"is-done":""},a.a.createElement("input",{type:"checkbox",onChange:function(n){e.changeTaskStatus(t.id,n.currentTarget.checked,e.todoListID)},checked:t.isDone}),a.a.createElement("span",null,t.title),a.a.createElement("button",{onClick:function(){return e.removeTask(t.id,e.todoListID)}},"x"))}))),a.a.createElement("div",null,a.a.createElement("button",{className:"all"===e.filter?"active-filter":"",onClick:function(){return e.changeTodolistFilter("all",e.todoListID)}},"All"),a.a.createElement("button",{className:"active"===e.filter?"active-filter":"",onClick:function(){return e.changeTodolistFilter("active",e.todoListID)}},"Active"),a.a.createElement("button",{className:"completed"===e.filter?"active-filter":"",onClick:function(){return e.changeTodolistFilter("completed",e.todoListID)}},"Completed")))}var m=n(18);var f=function(){var e,t=Object(m.a)(),n=Object(m.a)(),o=Object(i.useState)([{id:t,title:"What to learn",filter:"all"},{id:n,title:"What to buy",filter:"all"}]),c=Object(u.a)(o,2),f=c[0],b=c[1],j=Object(i.useState)((e={},Object(s.a)(e,t,[{id:Object(m.a)(),title:"HTML&CSS",isDone:!0},{id:Object(m.a)(),title:"JS",isDone:!0},{id:Object(m.a)(),title:"ReactJS",isDone:!1},{id:Object(m.a)(),title:"Rest API",isDone:!1},{id:Object(m.a)(),title:"GraphQL",isDone:!1}]),Object(s.a)(e,n,[{id:Object(m.a)(),title:"Books",isDone:!1},{id:Object(m.a)(),title:"NoteBook",isDone:!0},{id:Object(m.a)(),title:"Scooter",isDone:!1},{id:Object(m.a)(),title:"Car",isDone:!0},{id:Object(m.a)(),title:"BTC",isDone:!1}]),e)),O=Object(u.a)(j,2),v=O[0],h=O[1];function k(e,t){v[t]=v[t].filter((function(t){return t.id!==e})),h(Object(l.a)({},v))}function D(e,t){var n={id:Object(m.a)(),title:e,isDone:!1};v[t]=[n].concat(Object(r.a)(v[t])),h(Object(l.a)({},v))}function p(e,t,n){v[n]=v[n].map((function(n){return n.id===e?Object(l.a)(Object(l.a)({},n),{},{isDone:t}):n})),h(Object(l.a)({},v))}function E(e,t){b(f.map((function(n){return n.id===t?Object(l.a)(Object(l.a)({},n),{},{filter:e}):n})))}function T(e){b(f.filter((function(t){return t.id!==e}))),delete v[e]}var g=f.map((function(e){var t=v[e.id];return"active"===e.filter&&(t=v[e.id].filter((function(e){return!1===e.isDone}))),"completed"===e.filter&&(t=v[e.id].filter((function(e){return!0===e.isDone}))),a.a.createElement(d,{key:e.id,title:e.title,todoListID:e.id,tasks:t,removeTask:k,changeTodolistFilter:E,addTask:D,changeTaskStatus:p,removeTodoList:T,filter:e.filter})}));return a.a.createElement("div",{className:"App"},g)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.2462b5f5.chunk.js.map