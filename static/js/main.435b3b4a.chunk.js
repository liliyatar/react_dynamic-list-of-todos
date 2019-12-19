(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){t.exports=n(16)},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(8),s=n.n(r),c=n(9),l=n(2),i=n(3),d=n(5),u=n(4),m=n(6),h=(n(15),n(1)),f=function(t){return t.user.name},p=function(t){var e=t.todo,n=e.user,a=e.id,r=e.title,s=e.completed;return o.a.createElement("tr",null,o.a.createElement("td",null,a),o.a.createElement("td",null,r),o.a.createElement("td",{className:"todo"},o.a.createElement("input",{type:"checkbox",checked:s,readOnly:!0}),o.a.createElement("span",null,s?"completed":"not completed")),o.a.createElement("td",null,o.a.createElement(f,{user:n})))},E=function(t){function e(t){var n,a=t.todos;return Object(l.a)(this,e),(n=Object(d.a)(this,Object(u.a)(e).call(this,a))).getSortedData=function(t){var e=t.target.valueOf().textContent.toLowerCase(),a=n.state.sortedField;"name"===e&&n.setState(function(t){return{todosList:Object(h.a)(t.todosList).sort(function(t,e){return t.user.name.localeCompare(e.user.name)}),sortedField:e}}),"completed"===e&&n.setState(function(t){return{todosList:Object(h.a)(t.todosList).sort(function(t,n){return t[e].toString().localeCompare(n[e].toString())}),sortedField:e}}),a===e?n.setState(function(t){return{todosList:Object(h.a)(t.todosList).reverse(),sortedField:e}}):("title"===e&&n.setState(function(t){return{todosList:Object(h.a)(t.todosList).sort(function(t,n){return t[e].localeCompare(n[e])}),sortedField:e}}),n.setState(function(t){return{todosList:Object(h.a)(t.todosList).sort(function(t,n){return t[e]-n[e]}),sortedField:e}}))},n.todos=a,n.state={todosList:Object(h.a)(n.todos),sortedField:"id"},n}return Object(m.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.state.todosList;return console.log(t.map(function(t){return t.user.name})),o.a.createElement("div",{className:"App"},o.a.createElement("h1",{className:"heading"},"Dynamic list of todos"),o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{onClick:this.getSortedData},"Id"),o.a.createElement("th",{onClick:this.getSortedData},"Title"),o.a.createElement("th",{onClick:this.getSortedData},"Completed"),o.a.createElement("th",{onClick:this.getSortedData},"Name"))),o.a.createElement("tbody",null,t.map(function(t){return o.a.createElement(p,{todo:t,key:t.id})}))))}}]),e}(o.a.Component),b=function(){return fetch("https://jsonplaceholder.typicode.com/todos").then(function(t){return t.json()})},g=function(){return fetch("https://jsonplaceholder.typicode.com/users").then(function(t){return t.json()})},j=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={data:[],isLoading:!1,hasError:!1},n.loadTodosAndUsers=function(){n.setState({isLoading:!0,hasError:!1}),b().then(function(t){g().then(function(e){n.setState({data:t.map(function(t){return Object(c.a)({},t,{user:e.find(function(e){return e.id===t.userId})})}),isLoading:!1})})}).catch(function(){n.setState({hasError:!0})}).finally(function(){n.setState({isLoading:!1})})},n}return Object(m.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.state,e=t.data,n=t.isLoading,a=t.hasError;return n?o.a.createElement("div",{className:"loader"},o.a.createElement("div",{className:"spinner"})):a?o.a.createElement("div",{className:"App"},o.a.createElement("h1",{className:"heading"},"Error"),o.a.createElement("button",{className:"loadButton",type:"button",onClick:this.loadTodosAndUsers},"Try again")):0===e.length?o.a.createElement("div",{className:"App"},o.a.createElement("h1",{className:"heading"},"Dynamic list of todos"),o.a.createElement("button",{className:"loadButton",type:"button",onClick:this.loadTodosAndUsers},"Load TodoList")):o.a.createElement(E,{todos:e})}}]),e}(o.a.Component);s.a.render(o.a.createElement(j,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.435b3b4a.chunk.js.map