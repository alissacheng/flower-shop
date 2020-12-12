(this["webpackJsonpflower-shop"]=this["webpackJsonpflower-shop"]||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(0),r=n.n(o),s=n(19),a=n.n(s),u=(n(26),n(4)),i=n.n(u),l=n(8),b=n(10),d=n(12),j=n(2),h=(n(28),n(17));var f=function(e){var t=e.name,n=e.colors,o=e.scent,r=e.addToBouquet;return Object(c.jsxs)("div",{className:"flower-container__item",children:[Object(c.jsx)("h3",{children:t}),Object(c.jsxs)("p",{children:["Scent: ",o]}),Object(c.jsxs)("form",{className:"color-optionss",children:[n.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{type:"checkbox",id:e+"-"+t,name:t+"-colors",value:e+"-"+t}),Object(c.jsx)("label",{htmlFor:e+"-"+t,children:e})]},e+"-"+t)})),Object(c.jsx)("button",{onClick:function(e){e.preventDefault();var c=[];n.forEach((function(e){var n=e+"-"+t;document.getElementById(n).checked&&c.push(e)})),c.length>0&&r(t,c)},children:"Add to Bouquet +"})]})]})},p={Accept:"application/json","Content-Type":"application/json"};var m=function(e){var t=e.bouquetId,n=e.bouquetName,r=Object(o.useState)([]),s=Object(b.a)(r,2),a=s[0],u=s[1],d=Object(o.useState)([]),j=Object(b.a)(d,2),m=j[0],x=j[1];Object(o.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/flowers/",{method:"GET",headers:p});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,u(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),function(){var e=Object(l.a)(i.a.mark((function e(){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/bouquets/".concat(t),{method:"GET",headers:p});case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,x(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[m]);var O=function(e,n){t?n.forEach(function(){var n=Object(l.a)(i.a.mark((function n(c){var o,r,s,a;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o={flower:e,color:c},r=!1,m.forEach((function(t){t.color===c&&t.flower===e&&(r=!0)})),r){n.next=11;break}return n.next=6,fetch("http://localhost:5000/bouquets/".concat(t),{method:"PATCH",headers:p,body:JSON.stringify(o)});case 6:return s=n.sent,n.next=9,s.json();case 9:a=n.sent,x(a.items);case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()):console.log("select a bouquet first")},v=function(){var e=Object(l.a)(i.a.mark((function e(n,c){var o,r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=11;break}return o={flower:n,color:c},e.next=4,fetch("http://localhost:5000/bouquets/".concat(t,"/remove"),{method:"PATCH",headers:p,body:JSON.stringify(o)});case 4:return r=e.sent,e.next=7,r.json();case 7:s=e.sent,x(s.items),e.next=12;break;case 11:console.log("select a bouquet first");case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.jsxs)("section",{className:"flower-shop",children:[Object(c.jsxs)("h2",{children:["Select flowers to add to your ",n," bouquet"]}),Object(c.jsxs)("button",{className:"toggle-bouquet-items",onClick:function(e){e.preventDefault(),document.querySelector(".bouquet-items").classList.toggle("active"),e.target.classList.toggle("active")},children:[n," items"]}),Object(c.jsx)("div",{className:"bouquet-items",children:m.length>0?m.map((function(e,t){var n="",o=e.flower.split("");"s"===o[o.length-1]?n=e.flower:"y"===o[o.length-1]?(o.pop(),n=o.join("")+"ies"):n=e.flower+"s";var r=e.color.split(""),s=r.shift().toUpperCase()+r.join("");return Object(c.jsxs)("div",{className:"bouquet-items__one",children:[Object(c.jsx)("button",{className:"flex-center",onClick:function(){v(e.flower,e.color)},children:Object(c.jsx)("img",{src:"./trash.png",alt:"trash icon"})}),Object(c.jsxs)("p",{children:[t+1,". ",s," ",n]})]})})):Object(c.jsx)("p",{children:"No flowers added yet!"})}),Object(c.jsx)("div",{className:"flower-container",children:a.map((function(e){return Object(c.jsx)(f,Object(h.a)(Object(h.a)({},e),{},{addToBouquet:O}),e._id)}))})]})};var x=function(){var e=Object(o.useState)(null),t=Object(b.a)(e,2),n=t[0],r=t[1],s=Object(o.useState)(null),a=Object(b.a)(s,2),u=a[0],h=a[1],f=Object(o.useState)(),p=Object(b.a)(f,2),x=p[0],O=p[1],v={Accept:"application/json","Content-Type":"application/json"};Object(o.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/bouquets/",{method:"GET",headers:v});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,O(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n,x]);var q=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,c,o,s,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=document.getElementById("bouquet-name").value,c=!1,x.forEach((function(e){e.name===n&&(c=!0)})),c&&""===n&&" "===n){e.next=18;break}return o={name:n},e.next=8,fetch("http://localhost:5000/bouquets",{method:"POST",headers:v,body:JSON.stringify(o)});case 8:return s=e.sent,e.next=11,s.json();case 11:a=e.sent,console.log("data",a),h(n),r(a._id),document.getElementById("new-bouquet").style.display="none",e.next=19;break;case 18:""===n||" "===n?alert("Please enter a valid name for your bouquet"):alert("You already have a bouquet with that name. Please name it something unique.");case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)(d.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{className:"header",children:Object(c.jsx)("h1",{children:"Alissa's Flower Shop"})}),Object(c.jsxs)("main",{children:[Object(c.jsxs)("section",{children:[n?Object(c.jsx)("div",{children:Object(c.jsxs)(d.b,{to:"/add-flowers",children:["Click here to add flowers to your ",u," bouquet!"]})}):null,Object(c.jsxs)("div",{className:"bouquet-options",children:[Object(c.jsx)("button",{onClick:function(){document.getElementById("new-bouquet").style.display="block"},children:"Create a new bouquet"})," ",Object(c.jsx)("p",{children:"OR"})," ",Object(c.jsx)("button",{onClick:function(){document.getElementById("bouquet-list").style.display="block"},children:"Select a previous bouquet to edit!"})]}),Object(c.jsxs)("form",{className:"new-bouquet",id:"new-bouquet",onSubmit:q,children:[Object(c.jsx)("label",{htmlFor:"bouquet-name",children:"Bouquet Name:"}),Object(c.jsx)("input",{type:"text",id:"bouquet-name",name:"bouquet-name"}),Object(c.jsx)("input",{type:"submit",value:"Create bouquet!"})]}),Object(c.jsxs)("div",{className:"bouquet-list",id:"bouquet-list",children:[Object(c.jsx)("h3",{children:"Your Bouquets:"}),x?x.map((function(e){return Object(c.jsx)(d.b,{to:"/add-flowers",children:Object(c.jsx)("button",{onClick:function(){var t;r((t=e)._id),h(t.name),document.getElementById("bouquet-list").style.display="none"},children:e.name})})})):null]})]}),n?Object(c.jsx)(j.a,{path:"/add-flowers",render:function(){return Object(c.jsx)(m,{bouquetId:n,bouquetName:u})}}):null]})]})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),r(e),s(e)}))};a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),O()}},[[34,1,2]]]);
//# sourceMappingURL=main.ff546f28.chunk.js.map