(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(1),c=a(0),l=a.n(c),u=a(2);var s=a(5),o=a.n(s),i=(a(12),null),m=Object(c.createContext)();function d(){var e=Object(c.useContext)(m).state.squares;return l.a.createElement(c.Fragment,null,e&&l.a.createElement(c.Fragment,null,l.a.createElement("div",{className:"board-row"},l.a.createElement(b,{boardId:0},e[0]),l.a.createElement(b,{boardId:1},e[1]),l.a.createElement(b,{boardId:2},e[2])),l.a.createElement("div",{className:"board-row"},l.a.createElement(b,{boardId:3},e[3]),l.a.createElement(b,{boardId:4},e[4]),l.a.createElement(b,{boardId:5},e[5])),l.a.createElement("div",{className:"board-row"},l.a.createElement(b,{boardId:6},e[6]),l.a.createElement(b,{boardId:7},e[7]),l.a.createElement(b,{boardId:8},e[8]))))}function b(e){var t=Object(c.useContext)(m),a=t.state,n=t.dispatch,u=a.squares,s=a.stepNumber,o=a.xIsNext,i=Object(r.a)({},u);return l.a.createElement("button",Object.assign({},e,{onClick:function(){E(u)||u[e.boardId]||(i[e.boardId]=o?"X":"O",n({type:"SQUARE_CLICKED",squares:i,stepNumber:s+1,xIsNext:!o}))},className:"square"}))}function E(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var r=Object(n.a)(t[a],3),c=r[0],l=r[1],u=r[2];if(e[c]&&e[c]===e[l]&&e[c]===e[u])return e[c]}return null}o.a.render(l.a.createElement((function(){var e=function(e,t){var a=Object(c.useRef)([t]),r=Object(c.useState)(0),l=Object(n.a)(r,2),u=l[0],s=l[1];function o(){return u>0}function i(){return u<a.current.length-1}return[a.current[u],function(t){var r=e(a.current[u],t);a.current=a.current.slice(0,u+1),a.current.push(r),s(a.current.length-1)},o,function(){s(o()?u-1:u)},i,function(){s(i()?u+1:u)},function(){a.current=a.current.slice(0,1),s(0)}]}((function(e,t){switch(t.type){case"SQUARE_CLICKED":return Object(r.a)({},e,{squares:t.squares,stepNumber:t.stepNumber,xIsNext:t.xIsNext});default:return Object(r.a)({},e)}}),i||{squares:Array(9).fill(null),stepNumber:0,xIsNext:!1}),t=Object(n.a)(e,7),a=t[0],s=t[1],o=t[2],b=t[3],f=t[4],v=t[5],I=t[6],N=a.squares,p=a.xIsNext;Object(c.useEffect)((function(){i=a}));var x,O={state:a,dispatch:s},j=E(N),g=!1;return j?(x="Winner: "+j,g=!0):!function(e){e instanceof Object&&(e=Object.values(e));if(Array.isArray(e))return!e.includes(null);return!1}(N)?x="Next player: "+(p?"X":"O"):(x="Tie!",g=!0),l.a.createElement("div",{className:"game"},l.a.createElement("div",{className:"game-board"},l.a.createElement("h1",null,"Tic-Tac-Toe"),l.a.createElement(m.Provider,{value:O},l.a.createElement(d,null)),l.a.createElement("div",{className:"game-info"},l.a.createElement("div",null,x),g?l.a.createElement("button",{onClick:I},"Reset ",l.a.createElement(u.b,null)):l.a.createElement(c.Fragment,null,l.a.createElement("button",{onClick:b,disabled:!o()},"Undo ",l.a.createElement(u.c,null)),l.a.createElement("button",{onClick:v,disabled:!f()},"Redo ",l.a.createElement(u.a,null))))))}),null),document.getElementById("root"))},6:function(e,t,a){e.exports=a(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.b353399c.chunk.js.map