(this.webpackJsonprecipeapp=this.webpackJsonprecipeapp||[]).push([[0],{12:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(6),r=c.n(i),s=(c(12),c(4)),o=c.n(s),u=c(7),l=c(2),p=c(5),j=c.n(p),b=c(0),f=function(e){var t=e.title,c=e.calories,n=e.image,a=e.ingredients;return Object(b.jsxs)("div",{className:j.a.recipe,children:[Object(b.jsx)("h1",{children:t}),Object(b.jsx)("ol",{children:a.map((function(e){return Object(b.jsx)("li",{children:e.text})}))}),Object(b.jsxs)("p",{children:["Calories: ",c]}),Object(b.jsx)("img",{className:j.a.image,src:n,alt:""})]})},h=(c(15),function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(""),r=Object(l.a)(i,2),s=r[0],p=r[1],j=Object(n.useState)("Deserts"),h=Object(l.a)(j,2),d=h[0],m=h[1];Object(n.useEffect)((function(){O()}),[d]);var O=function(){var e=Object(u.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(d,"&app_id=").concat("f01500cd","&app_key=").concat("c4bb0959589f6700072fb3e7d2e75f77"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c.hits),console.log(c.hits),console.log(d);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m(s),p("")},className:"search-form",children:[Object(b.jsx)("input",{className:"search-bar",type:"text",value:s,onChange:function(e){p(e.target.value),console.log(s)}}),Object(b.jsx)("button",{className:"search-button",type:"submit",children:"Search"})]}),Object(b.jsx)("div",{className:"recipes",children:c.map((function(e){return Object(b.jsx)(f,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.label)}))})]})}),d=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root")),d()},5:function(e,t,c){e.exports={recipe:"recipe_recipe__3_DiK",image:"recipe_image__3oXZR"}}},[[16,1,2]]]);
//# sourceMappingURL=main.1b96042b.chunk.js.map