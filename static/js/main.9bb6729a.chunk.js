(this.webpackJsonppassword=this.webpackJsonppassword||[]).push([[0],[,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),c=s(5),r=s.n(c),l=(s(13),s(6)),i=s(2),h=s(3),o=s(8),d=s(7),g=(s(14),s(15),s(16),s(0));var j=function(){return Object(g.jsx)("div",{className:"header",children:Object(g.jsx)("div",{className:"pagetitle",children:"Password Generator"})})};s(18);var u=function(e){return Object(g.jsxs)("div",{className:"toggle-box",children:[Object(g.jsxs)("div",{className:"toggle1 toggle",children:[Object(g.jsx)("input",{type:"checkbox",id:"t1",checked:e.state.upperCase,className:"type-toggle",name:"upperCase",onChange:function(t){return e.handleCheckbox(t)}}),Object(g.jsx)("label",{for:"t1",className:"check",children:Object(g.jsxs)("svg",{width:"35px",height:"35px",viewBox:"0 0 18 18",className:"toggle-svg",children:[Object(g.jsx)("path",{d:"M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"}),Object(g.jsx)("polyline",{points:"1 9 7 14 15 4"})]})}),Object(g.jsx)("label",{className:"toggle-labels",children:"UpperCase"})]}),Object(g.jsxs)("div",{className:"toggle2 toggle",children:[Object(g.jsx)("input",{type:"checkbox",id:"t2",checked:e.state.lowerCase,className:"type-toggle",name:"lowerCase",onChange:function(t){return e.handleCheckbox(t)}}),Object(g.jsx)("label",{for:"t2",className:"check",children:Object(g.jsxs)("svg",{width:"35px",height:"35px",viewBox:"0 0 18 18",className:"toggle-svg",children:[Object(g.jsx)("path",{d:"M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"}),Object(g.jsx)("polyline",{points:"1 9 7 14 15 4"})]})}),Object(g.jsx)("label",{className:"toggle-labels",children:"LowerCase"})]}),Object(g.jsxs)("div",{className:"toggle3 toggle",children:[Object(g.jsx)("input",{type:"checkbox",id:"t3",className:"type-toggle",name:"numeric",onChange:function(t){return e.handleCheckbox(t)}}),Object(g.jsx)("label",{for:"t3",className:"check",children:Object(g.jsxs)("svg",{width:"35px",height:"35px",viewBox:"0 0 18 18",className:"toggle-svg",children:[Object(g.jsx)("path",{d:"M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"}),Object(g.jsx)("polyline",{points:"1 9 7 14 15 4"})]})}),Object(g.jsx)("label",{className:"toggle-labels",children:"Digits"})]}),Object(g.jsxs)("div",{className:"toggle4 toggle",children:[Object(g.jsx)("input",{type:"checkbox",id:"t4",className:"type-toggle",name:"symbol",onChange:function(t){return e.handleCheckbox(t)}}),Object(g.jsx)("label",{for:"t4",className:"check",children:Object(g.jsxs)("svg",{width:"35px",height:"35px",viewBox:"0 0 18 18",className:"toggle-svg",children:[Object(g.jsx)("path",{d:"M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"}),Object(g.jsx)("polyline",{points:"1 9 7 14 15 4"})]})}),Object(g.jsx)("label",{className:"toggle-labels",children:"Symbols"})]})]})},b=function(){function e(){Object(i.a)(this,e),this.characters=""}return Object(h.a)(e,[{key:"setLength",value:function(e){return this.length=e,this}},{key:"setUpperCase",value:function(e){return e&&(this.characters+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"),this}},{key:"setLowerCase",value:function(e){return e&&(this.characters+="abcdefghijklmnopqrstuvwxyz"),this}},{key:"setNumberCase",value:function(e){return e&&(this.characters+="0123456789"),this}},{key:"setSymbol",value:function(e){return e&&(this.characters+="!@$%^&*()<>,.?/[]{}-=_+"),this}},{key:"generate",value:function(){var e=this.characters;if(e.length<=0)return"May'be you're in search of unknown! Keep looking";for(var t,s,a="",n=0;n<this.length;++n)a+=e[(t=0,s=e.length-1,Math.floor(Math.random()*(s-t+1))+t)];return a}}]),e}();var p=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={length:8,newLength:8,pwd:"",upperCase:!0,lowerCase:!0,numeric:!1,symbol:!1},a}return Object(h.a)(s,[{key:"componentDidMount",value:function(){this.generatePwd()}},{key:"generatePwd",value:function(){var e=this.state,t=e.upperCase,s=e.lowerCase,a=e.numeric,n=e.symbol,c=e.length,r=(new b).setLength(c).setLowerCase(s).setUpperCase(t).setNumberCase(a).setSymbol(n).generate();this.setState({pwd:r})}},{key:"handleCheckbox",value:function(e){var t=this,s=e.target,a=s.name,n=s.checked;this.setState(Object(l.a)({},a,n),(function(){return t.generatePwd()}))}},{key:"strength",value:function(){var e=this.state.length;return e>30?"What is this monstrosity?":e>20?"Very Strong":10===e||11===e?"Fairly Strong Password":e>10?"Strong Password":e>4?"Weak":"Even a child can predict this"}},{key:"handleLenghtChange",value:function(e){var t=this,s=e.target.value;s>=40&&(s=40),this.setState({length:s},(function(){return t.generatePwd()}))}},{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(j,{}),Object(g.jsxs)("div",{className:"password-generator",children:[Object(g.jsxs)("div",{className:"password-output",children:[Object(g.jsx)("span",{className:"password-output-span",ref:function(t){return e.textArea=t},children:this.state.pwd}),Object(g.jsx)("button",{className:"generate-button",type:"button",onClick:function(){e.generatePwd(e.state)},children:"Generate"}),Object(g.jsx)("button",{className:"copy-button",type:"button",onClick:function(){navigator.clipboard.writeText(e.state.pwd)},children:"Copy Password"})]}),Object(g.jsxs)("div",{className:"slider",children:[Object(g.jsx)("div",{className:"password-strength",children:this.strength()}),Object(g.jsxs)("div",{className:"slider-label",children:["Length : ",this.state.length]}),Object(g.jsx)("input",{className:"length-slider",type:"range",min:"4",max:"40",step:"1",value:this.state.length,onChange:function(t){return e.handleLenghtChange(t)}})]}),Object(g.jsx)("div",{className:"toggle-div",children:Object(g.jsx)(u,{state:this.state,handleCheckbox:function(t){return e.handleCheckbox(t)}})})]}),Object(g.jsxs)("div",{className:"footer",children:["Made with ",Object(g.jsx)("i",{className:"fas fa-heart heart",children:" "})," and React by"," ",Object(g.jsx)("a",{href:"https://github.com/Arshanshagarwal",className:"footer-link",children:"Arshansh"})]})]})}}]),s}(a.Component);r.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(p,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.9bb6729a.chunk.js.map