(this["webpackJsonpchmura-movies"]=this["webpackJsonpchmura-movies"]||[]).push([[0],{11:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),r=n(5),a=n.n(r),i=(n(11),n(4)),o=n.n(i),u=n(6),l=n(2),d=n(0);var h=function(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=e[0],s=e[1],r=Object(c.useState)(),a=Object(l.a)(r,2),i=a[0],h=a[1],j=Object(c.useState)(),b=Object(l.a)(j,2),m=b[0],f=b[1],O=Object(c.useState)([]),v=Object(l.a)(O,2),x=v[0],p=v[1],I=Object(c.useState)([]),A=Object(l.a)(I,2),g=A[0],y=A[1],w=Object(c.useState)([]),N=Object(l.a)(w,2),S=N[0],C=N[1],B=Object(c.useState)(""),k=Object(l.a)(B,2),E=k[0],M=k[1],T=Object(c.useState)(""),q=Object(l.a)(T,2),F=q[0],P=q[1];return Object(c.useEffect)((function(){Promise.all([fetch("https://switch-yam-equator.azurewebsites.net/api/movies",{method:"GET",headers:{"x-chmura-cors":"bcbaca57-51d3-45f9-8e32-0767c655575b"}}).then((function(t){return t.json()})),fetch("https://switch-yam-equator.azurewebsites.net/api/actors",{method:"GET",headers:{"x-chmura-cors":"bcbaca57-51d3-45f9-8e32-0767c655575b"}}).then((function(t){return t.json()}))]).then(function(){var t=Object(u.a)(o.a.mark((function t(e){var n,c,r,a,u,d,h,j;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(l.a)(e,2),c=n[0],r=n[1],t.next=3,r.sort((function(t,e){return t.name<e.name?-1:t.name>e.name?1:0}));case 3:return s(r),t.next=6,c.filter((function(t){return t.actors.includes(i)}));case 6:return a=t.sent,t.next=9,a.sort((function(t,e){return t.title<e.title?-1:t.title>e.title?1:0}));case 9:return y(a),u=[],a.forEach((function(t){t.actors.forEach((function(e){var n=u.findIndex((function(t){return t.actorId===e}));n>=0?u[n].costarAMovies.push(t.title):u.push({actorId:e,costarAMovies:[t.title]})}))})),t.next=14,c.filter((function(t){return t.actors.includes(m)}));case 14:return d=t.sent,t.next=17,d.sort((function(t,e){return t.title<e.title?-1:t.title>e.title?1:0}));case 17:p(d),h=[],d.forEach((function(t){t.actors.forEach((function(e){var n=h.findIndex((function(t){return t.actorId===e}));n>=0?h[n].costarBMovies.push(t.title):h.push({actorId:e,costarBMovies:[t.title]})}))})),j=[],u.forEach((function(t){var e=t.actorId,n=r.findIndex((function(t){return t.actorId===e})),c=r[n].name,s=h.filter((function(t){return t.actorId===e}));s.length>0&&j.push({actorId:t.actorId,name:c,KRMovies:s[0].costarBMovies,NCMovies:t.costarAMovies})})),C(j);case 23:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.log(t)}))}),[i,m]),Object(d.jsxs)("div",{className:"movie-div",children:[Object(d.jsxs)("div",{className:"actor-selector",children:[Object(d.jsx)("h3",{children:"Select Actor A"}),Object(d.jsxs)("select",{value:i,onChange:function(t){h(parseInt(t.target.value)),M("")},children:[Object(d.jsx)("option",{children:"Select actor A"},"defaultA"),n.map((function(t){return Object(d.jsx)("option",{value:t.actorId,children:t.name},t.actorId)}))]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Actor A's movies:"}),g.map((function(t){return Object(d.jsx)("li",{children:t.title},t.movieId)}))]})]}),Object(d.jsxs)("div",{className:"actor-selector",children:[Object(d.jsx)("h3",{children:"Select Actor B"}),Object(d.jsxs)("select",{value:m,onChange:function(t){f(parseInt(t.target.value)),M("")},children:[Object(d.jsx)("option",{children:"Select actor B"},"defaultB"),n.map((function(t){return Object(d.jsx)("option",{value:t.actorId,children:t.name},t.actorId)}))]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Actor B's movies:"}),x.map((function(t){return Object(d.jsx)("li",{children:t.title},t.movieId)}))]})]}),Object(d.jsxs)("div",{className:"result-pane",children:[Object(d.jsxs)("div",{className:"results-list",children:[Object(d.jsx)("h3",{children:"Costars Actor A and Actor B have in common:"}),S.map((function(t){return Object(d.jsx)("li",{children:t.name},t.actorId)}))]}),Object(d.jsxs)("div",{className:"submit-box",children:[Object(d.jsx)("button",{className:"submit-button",onClick:function(){var t=JSON.stringify(S);fetch("https://switch-yam-equator.azurewebsites.net/api/validation",{method:"POST",headers:{"x-chmura-cors":"bcbaca57-51d3-45f9-8e32-0767c655575b","Content-Type":"application/json"},body:t}).then((function(t){return M(t.status),200!==t.status?t.json():t.status})).then((function(t){t.error&&(P(t.error),console.log(t.error))})).catch((function(t){console.log(t)}))},children:"Submit answer"}),Object(d.jsxs)("div",{className:"submit-text-div",children:["Response status: ",Object(d.jsx)("span",{className:200===E?"green-text":"red-text",children:E})]}),200===E?Object(d.jsx)("div",{className:"submit-text-div",children:"Correct response!"}):""===E?Object(d.jsx)("div",{className:"submit-text-div",children:"Awaiting submission..."}):Object(d.jsxs)("div",{className:"submit-text-div",children:["Incorrect response - ",F]})]})]})]})};n(14),n(15);var j=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Chmura Code Assessment: Common Costar Finder"}),Object(d.jsxs)("div",{className:"directions-box",children:[Object(d.jsx)("b",{children:"Directions:"})," Use the drop down menus to select any combination of actors. Actors that have costarred in both a movie with Actor A and Actor B (not necessarily at the same time) will be displayed in the right-hand panel.",Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"Validation:"})," To validate the app is working properly, set Actor A to ",Object(d.jsx)("b",{children:"Nicolas Cage"})," and set Actor B to ",Object(d.jsx)("b",{children:"Keanu Reeves"}),', then click the "submit" button to send that request to the API and validate. (Costar\'s movies are stored in the request object but not displayed on the page.)']}),Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"Thank you!"})," for the opportunity to apply, I really had fun working on this assessment and hopefully it demonstrates some of my skillset!"]})]}),Object(d.jsx)(h,{})]})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),c(t),s(t),r(t),a(t)}))};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.34a3cf96.chunk.js.map