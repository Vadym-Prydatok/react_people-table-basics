(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c(5),r=(c(20),c(21),c(22),c(2)),s=c(6),i=c.n(s),j=c(8),l=c(11),o=c(4),b=c(1),h=(c(23),c(0)),d=function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(h.jsx)("div",{className:"Loader__content"})})},O=function(e){var t=e.person,c=e.mother,n=e.father,r=t.name,s=t.sex,j=t.born,l=t.died,o=t.slug;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("td",{children:Object(h.jsx)(a.b,{to:"/people/".concat(o),className:i()({"has-text-danger":"f"===s}),children:r})}),Object(h.jsx)("td",{children:s}),Object(h.jsx)("td",{children:j}),Object(h.jsx)("td",{children:l}),Object(h.jsx)("td",{children:"string"===typeof c?c:Object(h.jsx)(a.b,{to:"../".concat(c.slug),className:"has-text-danger",children:c.name})}),Object(h.jsx)("td",{children:"string"===typeof n?n:Object(h.jsx)(a.b,{to:"../".concat(n.slug),children:n.name})})]})},x=function(e){var t=e.people,c=Object(r.h)().slug,n=void 0===c?"":c,a=function(e){if(!e)return"-";var c=t.find((function(t){return t.name===e}));return c||e};return Object(h.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"Sex"}),Object(h.jsx)("th",{children:"Born"}),Object(h.jsx)("th",{children:"Died"}),Object(h.jsx)("th",{children:"Mother"}),Object(h.jsx)("th",{children:"Father"})]})}),Object(h.jsx)("tbody",{children:t.map((function(e){return Object(h.jsx)("tr",{"data-cy":"person",className:i()({"has-background-warning":e.slug===n}),children:Object(h.jsx)(O,{person:e,mother:a(e.motherName),father:a(e.fatherName)})},e.name)}))})]})};function u(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var p=function(){var e=Object(b.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(b.useState)(!1),r=Object(o.a)(a,2),s=r[0],i=r[1],O=Object(b.useState)(!1),p=Object(o.a)(O,2),m=p[0],f=p[1],v=function(){var e=Object(l.a)(Object(j.a)().mark((function e(){var t;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!0),e.next=4,u();case 4:t=e.sent,n(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),f(!0);case 11:return e.prev=11,i(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return Object(b.useEffect)((function(){v()}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:"title",children:"People Page"}),Object(h.jsx)("div",{className:"block",children:Object(h.jsx)("div",{className:"box table-container",children:s?Object(h.jsx)(d,{}):Object(h.jsxs)(h.Fragment,{children:[m&&Object(h.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!c.length&&Object(h.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),Object(h.jsx)(x,{people:c})]})})})]})},m=function(){return Object(h.jsxs)("div",{"data-cy":"app",children:[Object(h.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"navbar-brand",children:[Object(h.jsx)(a.c,{className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},to:"/",children:"Home"}),Object(h.jsx)(a.c,{className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},to:"/people",children:"People"})]})})}),Object(h.jsx)("main",{className:"section",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)(r.d,{children:[Object(h.jsx)(r.b,{path:"*",element:Object(h.jsx)("h1",{className:"title",children:"Page not found"})}),Object(h.jsx)(r.b,{path:"/",element:Object(h.jsx)("h1",{className:"title",children:"Home Page"})}),Object(h.jsx)(r.b,{path:"/home",element:Object(h.jsx)(r.a,{to:"/",replace:!0})}),Object(h.jsxs)(r.b,{path:"/people",children:[Object(h.jsx)(r.b,{index:!0,element:Object(h.jsx)(p,{})}),Object(h.jsx)(r.b,{path:":slug",element:Object(h.jsx)(p,{})})]})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(h.jsx)(a.a,{children:Object(h.jsx)(m,{})}))}},[[25,1,2]]]);
//# sourceMappingURL=main.5ad23732.chunk.js.map