(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(1),c=a(0),u=a.n(c),l=a(3);var s=a(5),o=a.n(s),d=(a(12),null),i=Object(c.createContext)();function m(){var e=Object(c.useContext)(i).state.squares;return u.a.createElement(c.Fragment,null,e&&u.a.createElement(c.Fragment,null,u.a.createElement("div",{className:"board-row"},u.a.createElement(b,{boardId:0},e[0]),u.a.createElement(b,{boardId:1},e[1]),u.a.createElement(b,{boardId:2},e[2])),u.a.createElement("div",{className:"board-row"},u.a.createElement(b,{boardId:3},e[3]),u.a.createElement(b,{boardId:4},e[4]),u.a.createElement(b,{boardId:5},e[5])),u.a.createElement("div",{className:"board-row"},u.a.createElement(b,{boardId:6},e[6]),u.a.createElement(b,{boardId:7},e[7]),u.a.createElement(b,{boardId:8},e[8]))))}function b(e){var t=Object(c.useContext)(i),a=t.state,n=t.dispatch,l=a.squares,s=a.stepNumber,o=a.xIsNext,d=Object(r.a)({},l);return u.a.createElement("button",Object.assign({},e,{onClick:function(){E(l)||l[e.boardId]||(d[e.boardId]=o?"X":"O",n({type:"SQUARE_CLICKED",squares:d,stepNumber:s+1,xIsNext:!o}))},className:"square"}))}function E(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var r=Object(n.a)(t[a],3),c=r[0],u=r[1],l=r[2];if(e[c]&&e[c]===e[u]&&e[c]===e[l])return e[c]}return null}o.a.render(u.a.createElement(function(){var e=function(e,t){var a=Object(c.useRef)([t]),r=Object(c.useState)(0),u=Object(n.a)(r,2),l=u[0],s=u[1];function o(){return l>0}function d(){return l<a.current.length-1}return[a.current[l],function(t){var r=e(a.current[l],t);a.current=a.current.slice(0,l+1),a.current.push(r),s(a.current.length-1)},o,function(){s(o()?l-1:l)},d,function(){s(d()?l+1:l)}]}(function(e,t){switch(t.type){case"SQUARE_CLICKED":return Object(r.a)({},e,{squares:t.squares,stepNumber:t.stepNumber,xIsNext:t.xIsNext});default:return Object(r.a)({},e)}},d||{squares:Array(9).fill(null),stepNumber:0,xIsNext:!1}),t=Object(n.a)(e,6),a=t[0],s=t[1],o=t[2],b=t[3],f=t[4],v=t[5],I=a.squares,N=a.xIsNext;Object(c.useEffect)(function(){d=a});var p,x={state:a,dispatch:s},O=E(I);return p=O?"Winner: "+O:function(e){return e instanceof Object&&(e=Object.values(e)),!!Array.isArray(e)&&!e.includes(null)}(I)?"Tie!":"Next player: "+(N?"X":"O"),u.a.createElement("div",{className:"game"},u.a.createElement("div",{className:"game-board"},u.a.createElement("h1",null,"Tic-Tac-Toe"),u.a.createElement(i.Provider,{value:x},u.a.createElement(m,null)),u.a.createElement("div",{className:"game-info"},u.a.createElement("div",null,p),u.a.createElement("button",{onClick:b,disabled:!o()},"Undo ",u.a.createElement(l.b,null)),u.a.createElement("button",{onClick:v,disabled:!f()},"Redo ",u.a.createElement(l.a,null)))))},null),document.getElementById("root"))},6:function(e,t,a){e.exports=a(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.10d0a06f.chunk.js.map