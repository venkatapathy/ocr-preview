(this["webpackJsonpsandhi-web"]=this["webpackJsonpsandhi-web"]||[]).push([[0],{115:function(e,t,n){},135:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);var c,a=n(0),o=n.n(a),i=n(35),r=n.n(i),s=(n(92),n(13)),l=(n(72),n(93),n(145));!function(e){e.LoadImage="LoadImage",e.LoadHocr="LoadHocr",e.SetHoverId="SetHoverId",e.LogInfo="LogInfo",e.ChangeCurPage="ChangeCurPage"}(c||(c={}));var d=n(44);var b=Object(l.a)((function(e,t){switch(t.type){case c.ChangeCurPage:return Object(d.a)(e,(function(e){e.curPageno=t.payload.curPageno}));case c.LogInfo:return Object(d.a)(e,(function(e){e.logInfo=t.payload.logInfo}));case c.LoadImage:return Object(d.a)(e,(function(e){e.pageImage=t.payload.pageImage}));case c.LoadHocr:return Object(d.a)(e,(function(e){e.hocrPage=t.payload.hocrPage}));case c.SetHoverId:return Object(d.a)(e,(function(e){e.hoverId=t.payload.hoverId}))}}),{pageImage:null,model:"",hocrPage:null,logInfo:"",curPageno:1}),u=Object(s.a)(b,3),j=u[0],h=u[1],x=(u[2],n(30)),p=n(14),g=n(28),m=n.n(g),v=n(39),O=n(54),f=n.n(O);function w(e){return N.apply(this,arguments)}function N(){return(N=Object(v.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,createImageBitmap(t);case 2:return n=e.sent,e.abrupt("return",{curWidth:n.width,curHeight:n.height,urlObject:URL.createObjectURL(t),orgWidth:n.width,orgHeight:n.height});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=n(46),I=Object(y.a)(c.ChangeCurPage,(function(e){return{payload:{curPageno:e}}})),k=(Object(y.a)(c.LogInfo,(function(e){return{payload:{logInfo:e}}})),Object(y.a)(c.SetHoverId,(function(e){return{payload:{hoverId:e}}}))),C=Object(y.a)(c.LoadImage,(function(e){return{payload:{pageImage:e}}})),H=Object(y.a)(c.LoadHocr,(function(e){return{payload:{hocrPage:e}}})),L=n(69),S=n.n(L);function P(e,t){Array.isArray(t)?S()(t.some((function(t){return t===e})),"Expected element to have class name of one of: %s, received %s.",JSON.stringify(t),e):S()(t===e,"Expected element to have class name of %s, received %s.",t,e)}function A(e){var t=e.match(/bbox ([0-9]+) ([0-9]+) ([0-9]+) ([0-9]+)/);if(!t)throw new Error("No bbox attribute found in title.");return{x0:+t[1],y0:+t[2],x1:+t[3],y1:+t[4]}}function _(e,t){var n=e.match(new RegExp("".concat(t," (-?[0-9]+(?:\\.[0-9]+)?)")));return n?parseFloat(n[1]):null}var z=function(e){return _(e,"x_fsize")},M=function(e){return _(e,"x_wconf")},E=function(e){return _(e,"x_size")};function F(e){var t,n,c,a;P(e.className,"ocrx_word");var o=null!==(t=e.getAttribute("title"))&&void 0!==t?t:"";return{type:"word",id:null!==(n=e.getAttribute("id"))&&void 0!==n?n:"",bbox:A(o),size:z(o),confidence:M(o),language:null!==(c=e.getAttribute("lang"))&&void 0!==c?c:"",text:null!==(a=e.textContent)&&void 0!==a?a:""}}function W(e){var t,n;P(e.className,["ocr_line","ocr_caption","ocr_textfloat"]);var c=null!==(t=e.getAttribute("title"))&&void 0!==t?t:"",a="line";return"ocr_caption"===e.className&&(a="caption"),"ocr_textfloat"===e.className&&(a="textfloat"),{type:a,id:null!==(n=e.getAttribute("id"))&&void 0!==n?n:"",bbox:A(c),size:E(c),children:Array.from(e.children).map(F)}}function B(e){return fetch(e).then((function(e){return e.text()})).then((function(e){return console.log("Enter2"),function(e){var t,n,c=e.querySelector(".ocr_page");if(!c)throw new Error('Could not find an element with class "ocr_page".');var a=null!==(t=c.getAttribute("title"))&&void 0!==t?t:"",o=e.querySelectorAll(".ocr_line");if(!o)throw new Error('Could not find an element with class "ocr_line".');return{type:"page",id:null!==(n=c.getAttribute("id"))&&void 0!==n?n:"",title:e.title,bbox:A(a),children:Array.from(o).map(W)}}((new DOMParser).parseFromString(e,"text/html"))}),(function(e){console.log(e)}))}var R=n(1);var T=function(e){var t=e.curPageno,n=e.dispatch,c=e.fnSetCurZoom,o=f.a.parse(window.location.search),i="https://pepmiitb.jio.com/ocr-interface/i/b/"+(null===o||void 0===o?void 0:o.b)+"/p/"+t,r="https://pepmiitb.jio.com/ocr-interface/h/b/"+(null===o||void 0===o?void 0:o.b)+"/p/"+t,s=function(e){console.log("handling page change +"+i),fetch(i).then((function(e){return e.blob()})).then(function(){var e=Object(v.a)(m.a.mark((function e(t){var c,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.type.includes("image")){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,w(t);case 4:if(c=e.sent){e.next=7;break}return e.abrupt("return");case 7:return c.curWidth=0,c.curHeight=0,n(C(c)),e.next=12,B(r);case 12:a=e.sent,n(H(a));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.log(e)}))};return Object(a.useEffect)((function(){s()}),[t]),Object(R.jsx)("div",{className:"container-fluid pv-toolbar border",children:Object(R.jsxs)("div",{className:"row align-items-left shadow",children:[Object(R.jsxs)("div",{className:"col pl-3",children:[Object(R.jsx)("span",{className:"pe-md-5",children:Object(R.jsx)("button",{type:"button",className:"btn btn-light toolbar-btn",title:"Toggle Side-pane Window",children:Object(R.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-layout-sidebar",viewBox:"0 0 16 16",children:Object(R.jsx)("path",{d:"M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm5-1v12h9a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H5zM4 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2V2z"})})})}),Object(R.jsxs)("button",{type:"button",className:"btn btn-light toolbar-btn px-2",title:"Previous Page",onClick:function(e){t-1>0&&n(I(parseInt(t-1)))},children:[Object(R.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-arrow-left-circle-fill",viewBox:"0 0 16 16",children:Object(R.jsx)("path",{d:"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"})}),"   "]}),Object(R.jsx)("span",{className:"border-start border-2 h-100 rounded-pill"}),Object(R.jsxs)("button",{type:"button",className:"btn btn-light toolbar-btn px-2",title:"Next Page",onClick:function(e){t+1>0&&n(I(parseInt(t+1)))},children:[Object(R.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-arrow-right-circle-fill",viewBox:"0 0 16 16",children:Object(R.jsx)("path",{d:"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"})}),"    "]}),Object(R.jsxs)("span",{className:"page-num",children:[Object(R.jsx)("input",{type:"text",value:t,className:"well-shadow",onChange:s}),Object(R.jsx)("span",{className:"border-0",children:"of 217"})]})]}),Object(R.jsxs)("div",{className:"col",children:[Object(R.jsx)("button",{type:"button",className:"btn btn-light toolbar-btn px-2",title:"Zoom-in",onClick:function(){return c(.25)},children:Object(R.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-zoom-in",viewBox:"0 0 16 16",children:[Object(R.jsx)("path",{fillRule:"evenodd",d:"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"}),Object(R.jsx)("path",{d:"M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"}),Object(R.jsx)("path",{fillRule:"evenodd",d:"M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"})]})}),Object(R.jsx)("span",{className:"border-start border-2 h-100 rounded-pill"}),Object(R.jsx)("button",{type:"button",className:"btn btn-light toolbar-btn px-2",title:"Zoom-out",onClick:function(){return c(-.25)},children:Object(R.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-zoom-out",viewBox:"0 0 16 16",children:[Object(R.jsx)("path",{fillRule:"evenodd",d:"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"}),Object(R.jsx)("path",{d:"M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"}),Object(R.jsx)("path",{fillRule:"evenodd",d:"M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"})]})})]})]})})},V=n(25),D=n(149),G=n(5),U=n(7),Z=n(9),J=n(8),q=function(e){Object(Z.a)(n,e);var t=Object(J.a)(n);function n(){var e;Object(G.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).image=null,e}return Object(U.a)(n,[{key:"componentDidUpdate",value:function(e){var t,n;(null===(t=e.pageImage)||void 0===t?void 0:t.urlObject)!==(null===(n=this.props.pageImage)||void 0===n?void 0:n.urlObject)&&this.loadImage()}},{key:"componentWillUnmount",value:function(){var e;null===(e=this.image)||void 0===e||e.removeEventListener("load",this.handleLoad)}},{key:"loadImage",value:function(){var e;this.image=new window.Image,this.image.src=null===(e=this.props.pageImage)||void 0===e?void 0:e.urlObject}},{key:"render",value:function(){var e=this;return Object(R.jsx)(V.a,{image:this.image,ref:function(t){e.imageNode=t},width:this.props.width,height:this.props.height})}}]),n}(o.a.Component),$=n(148),K=n(146),Q=n(147),X=n(71);function Y(e){var t=e.page,n=e.pageImage,c=e.width,i=e.height,r=e.dispatch,s=e.hoverId,l=Object(a.useRef)([]),d=function(e){r(k(e))},b=function(e,t,n,c,a){if(e)return Object(X.a)(Array.from(e),{by:"area",order:"desc",computed:{area:function(e){return e.bbox?(e.bbox.x1-e.bbox.x0)*(e.bbox.y1-e.bbox.y0):0}}}).map((function(e){var o,i;return Object(R.jsx)(V.c,{id:e.id,ref:function(t){l.current[e.id]=t},className:"ocr_lines",x:parseInt((null===(o=e.bbox)||void 0===o?void 0:o.x0)*n/(null===t||void 0===t?void 0:t.orgWidth)),y:parseInt((null===(i=e.bbox)||void 0===i?void 0:i.y0)*c/(null===t||void 0===t?void 0:t.orgHeight)),width:(e.bbox.x1-e.bbox.x0)*n/(null===t||void 0===t?void 0:t.orgWidth),height:(e.bbox.y1-e.bbox.y0)*c/(null===t||void 0===t?void 0:t.orgHeight),stroke:"red",strokeEnabled:a===e.id,onMouseEnter:function(e){d(e.target.attrs.id)},onMouseLeave:function(e){d("")}},e.id)}))};if(null===t||null===n)return Object(R.jsx)(V.b,{});var u=Object(X.a)(Array.from(t.children),{by:"area",order:"desc",computed:{area:function(e){return e.bbox?(e.bbox.x1-e.bbox.x0)*(e.bbox.y1-e.bbox.y0):0}}}).map((function(e){var t;return Object(R.jsxs)(o.a.Fragment,{children:[Object(R.jsx)(V.c,{id:e.id,ref:function(t){l.current[e.id]=t},className:"ocr_lines",x:parseInt((null===(t=e.bbox)||void 0===t?void 0:t.x0)*c/(null===n||void 0===n?void 0:n.orgWidth)),y:parseInt(e.bbox.y0*i/(null===n||void 0===n?void 0:n.orgHeight)),width:(e.bbox.x1-e.bbox.x0)*c/(null===n||void 0===n?void 0:n.orgWidth),height:(e.bbox.y1-e.bbox.y0)*i/(null===n||void 0===n?void 0:n.orgHeight)},e.id),b(e.children,n,c,i,s)]})}));return Object(R.jsx)(V.b,{children:u})}n(115),n(116);var ee=function(e){var t=e.page,n=e.hoverId,c=e.dispatch,o=Object(a.useState)(""),i=Object(s.a)(o,2);if(i[0],i[1],null==t)return Object(R.jsx)("div",{});var r=function(e,t){if(e){var n=function(e){c(k(e))};return e.map((function(e){return Object(R.jsxs)("span",{className:"ocr_word ".concat(t===e.id?"hoved":""),onMouseEnter:function(){n(e.id)},onMouseLeave:function(){n("")},children:[e.text," "]},e.id)}))}},l=t.children.map((function(e){return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("span",{className:"ocr_line",children:r(e.children,n)},e.id),Object(R.jsx)("br",{})]})}));return Object(R.jsx)("div",{children:Object(R.jsx)("p",{children:l})})},te=n(37),ne=n.n(te);n(135);var ce=function(){var e,t,n,c,o,i,r,l,d,b,u,h,x,p=j(),g=Object(s.a)(p,2),m=g[0],v=g[1],O=f.a.parse(window.location.search),w=Object(a.useState)(1),N=Object(s.a)(w,2),y=N[0],k=N[1],C=Object(a.useState)(null),H=Object(s.a)(C,2),L=(H[0],H[1]),S=Object(D.a)(),P=Object(s.a)(S,2),A=P[0],_=P[1],z=_.width,M=_.height;return Object(a.useEffect)((function(){(null===O||void 0===O?void 0:O.p)||(O.p="1"),(null===O||void 0===O?void 0:O.b)&&ne.a.get("https://pepmiitb.jio.com/ocr-interface/books/"+O.b).then((function(e){return L(e.data)})).catch((function(e){return console.log(e)})),v(I(parseInt(O.p)))}),[]),Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)("div",{className:"background",children:[Object(R.jsxs)("div",{className:"container-fluid py-0",children:[Object(R.jsx)("div",{className:"head",children:Object(R.jsx)($.a,{bg:"blue",variant:"dark",children:Object(R.jsx)(K.a,{children:Object(R.jsxs)(Q.a,{className:"head",children:[Object(R.jsx)(Q.a.Link,{href:"#file",children:"File"}),Object(R.jsx)(Q.a.Link,{href:"#edit",children:"Edit"}),Object(R.jsx)(Q.a.Link,{href:"#language",children:"Language"}),Object(R.jsx)(Q.a.Link,{href:"#reports",children:"Reports"}),Object(R.jsx)(Q.a.Link,{href:"#version",children:"Version"}),Object(R.jsx)(Q.a.Link,{href:"#download",children:"Download"}),Object(R.jsx)(Q.a.Link,{href:"#help",children:"Help"})]})})})}),Object(R.jsxs)("div",{className:"text-format",children:[Object(R.jsx)("button",{className:"button icon1",children:"icon"}),Object(R.jsx)("button",{className:"button icon2",children:"icon"}),Object(R.jsx)("button",{className:"button icon3",children:"icon"}),Object(R.jsx)("button",{className:"button icon4",children:"icon"}),Object(R.jsx)("button",{className:"button icon5",children:"icon"}),Object(R.jsx)("button",{className:"button icon6",children:"icon"}),Object(R.jsx)("button",{className:"button icon7",children:"icon"}),Object(R.jsx)("button",{className:"button icon8",children:"icon"}),Object(R.jsx)("button",{className:"button icon9",children:"icon"}),Object(R.jsx)("button",{className:"button icon10",children:"icon"}),Object(R.jsx)("button",{className:"button icon11",children:"icon"}),Object(R.jsx)("button",{className:"button icon12",children:"icon"}),Object(R.jsx)("button",{className:"button icon13",children:"icon"}),Object(R.jsx)("button",{className:"button icon14",children:"icon"}),Object(R.jsx)("button",{className:"button icon15",children:"icon"}),Object(R.jsx)("button",{className:"button icon16",children:"icon"}),Object(R.jsx)("button",{className:"button icon17",children:"icon"}),Object(R.jsx)("button",{className:"button icon18",children:"icon"}),Object(R.jsx)("button",{className:"button icon19",children:"icon"}),Object(R.jsx)("button",{className:"button icon20",children:"icon"}),Object(R.jsx)("button",{className:"button icon21",children:"icon"}),Object(R.jsx)("button",{className:"button icon22",children:"icon"}),Object(R.jsx)("button",{className:"button icon23",children:"icon"}),Object(R.jsx)("button",{className:"button icon24",children:"icon"}),Object(R.jsx)("button",{className:"button icon25",children:"icon"}),Object(R.jsx)("button",{className:"button icon26",children:"icon"}),Object(R.jsx)("button",{className:"button icon27",children:"icon"}),Object(R.jsx)("button",{className:"button icon28",children:"icon"}),Object(R.jsx)("button",{className:"button icon29",children:"icon"})]}),Object(R.jsxs)("div",{className:"format-options-background",children:[Object(R.jsx)("button",{className:"text-format-option icon1",children:"Resize Image"}),Object(R.jsx)("button",{className:"text-format-option icon2",children:"Mark Regions"}),Object(R.jsx)("button",{className:"text-format-option icon3",children:"Comments Accuracy"}),Object(R.jsx)("button",{className:"text-format-option icon3",children:"Compare Character Output"})]})]}),Object(R.jsxs)("div",{className:"container-fluid pv-container pt-2 pb-4 px-2",children:[Object(R.jsxs)("div",{className:"row wh-90 vh-100 border shadow",children:[Object(R.jsx)("div",{className:"col-md-6 shadow",ref:A,children:Object(R.jsx)("div",{className:"p-3 border pv-pane",children:Object(R.jsxs)(V.d,{width:(0!==(null===(e=m.pageImage)||void 0===e?void 0:e.curWidth)?null===(t=m.pageImage)||void 0===t?void 0:t.curWidth:z)*y,height:(0!==(null===(n=m.pageImage)||void 0===n?void 0:n.curHeight)?null===(c=m.pageImage)||void 0===c?void 0:c.curHeight:M)*y,children:[!m.pageImage&&Object(R.jsx)(V.b,{children:Object(R.jsx)(V.e,{text:null===(o=m.pageImage)||void 0===o?void 0:o.urlObject})}),Object(R.jsx)(V.b,{children:Object(R.jsx)(q,{pageImage:m.pageImage,width:(0!==(null===(i=m.pageImage)||void 0===i?void 0:i.curWidth)?null===(r=m.pageImage)||void 0===r?void 0:r.curWidth:z)*y,height:(0!==(null===(l=m.pageImage)||void 0===l?void 0:l.curHeight)?null===(d=m.pageImage)||void 0===d?void 0:d.curHeight:M)*y})}),Object(R.jsx)(Y,{page:m.hocrPage,dispatch:v,pageImage:m.pageImage,width:(0!==(null===(b=m.pageImage)||void 0===b?void 0:b.curWidth)?null===(u=m.pageImage)||void 0===u?void 0:u.curWidth:z)*y,height:(0!==(null===(h=m.pageImage)||void 0===h?void 0:h.curHeight)?null===(x=m.pageImage)||void 0===x?void 0:x.curHeight:M)*y,hoverId:m.hoverId})]})})}),Object(R.jsx)("div",{className:"col-md-6 shadow",children:Object(R.jsx)("div",{className:"p-3 border pv-pane",children:Object(R.jsx)(ee,{page:m.hocrPage,hoverId:m.hoverId,dispatch:v})})})]}),Object(R.jsxs)("div",{className:"row fixed-bottom",children:[Object(R.jsx)(T,{curPageno:m.curPageno,dispatch:v,fnSetCurZoom:function(e){k(y+e)}}),Object(R.jsx)("div",{className:"col-md-6 offset-md-4 px-3",children:m.logInfo})]})]})]})})},ae=n(12),oe=n(63),ie=n(45),re=n(18),se=n(60);var le=function(){var e,t=Object(a.useState)(!1),n=Object(s.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(!1),r=Object(s.a)(i,2),l=r[0],d=r[1],b=Object(a.useState)({}),u=Object(s.a)(b,2),j=u[0],h=u[1],p=Object(a.useState)([]),g=Object(s.a)(p,2),m=g[0],v=g[1],O=Object(a.useState)({}),f=Object(s.a)(O,2),w=f[0],N=f[1],y=Object(a.useRef)(null),I=function(){return o(!1)},k=function(){ne.a.get("https://pepmiitb.jio.com/ocr-interface/books").then((function(e){v(e.data)})).catch((function(e){N({msg:e.response.data,variant:"danger"}),d(!0)}))};Object(a.useEffect)((function(){k()}),[]);var C=m.map((function(e,t){return Object(R.jsxs)("tr",{children:[Object(R.jsx)("th",{children:t+1}),Object(R.jsx)("td",{children:e.title}),Object(R.jsx)("td",{children:e.author}),Object(R.jsx)("td",{children:e.category}),Object(R.jsx)("td",{children:Object(R.jsx)(x.b,{to:"/cli/pageview?b="+e._id.$uuid,children:"View Book"})})]},e._id.$uuid)})),H=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,c=t.id,a=Object.assign({},j);a[c]=n,h(a)};return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)(ie.a,{show:c,onHide:I,animation:!1,children:[Object(R.jsx)(ie.a.Header,{children:Object(R.jsx)(ie.a.Title,{children:"Add a book to SandHI catalog using this form"})}),Object(R.jsx)(ie.a.Body,{children:Object(R.jsxs)(re.a,{ref:y,onSubmit:function(e){e.preventDefault();var t=new FormData(y.current);ne.a.post("https://pepmiitb.jio.com/ocr-interface/books",t,{headers:{"content-type":"multipart/form-data"}}).then((function(e){N({msg:"Successfully saved the book to the SandHI catalog",variant:"success"}),d(!0),k()})).catch((function(e){var t;N({msg:null===(t=e.response)||void 0===t?void 0:t.data,variant:"danger"}),d(!0)}))},children:[Object(R.jsxs)(re.a.Group,{children:[Object(R.jsx)(re.a.Label,{children:"Book Title"}),Object(R.jsx)(re.a.Control,{type:"text",placeholder:"Enter Book Title",onChange:H,id:"title",name:"title"})]}),Object(R.jsxs)(re.a.Group,{children:[Object(R.jsx)(re.a.Label,{children:"Author of the book"}),Object(R.jsx)(re.a.Control,{type:"text",placeholder:"Enter name of the Author",onChange:H,id:"author",name:"author"})]}),Object(R.jsxs)(re.a.Group,{children:[Object(R.jsx)(re.a.Label,{children:"Category"}),Object(R.jsxs)(re.a.Control,{as:"select",id:"category",name:"category",children:[Object(R.jsx)("option",{value:"general",children:"General"}),Object(R.jsx)("option",{value:"ganitha",children:"Ganitha"}),Object(R.jsx)("option",{value:"philosophy",children:"Philosophy"}),Object(R.jsx)("option",{value:"article",children:"Article"})]})]}),Object(R.jsxs)(re.a.Group,{children:[Object(R.jsx)(re.a.Label,{children:"Number of pages"}),Object(R.jsx)(re.a.Control,{type:"text",placeholder:"Number of pages",id:"noofpages",name:"noofpages"})]}),Object(R.jsxs)(re.a.Group,{children:[Object(R.jsx)(re.a.Label,{children:"Pdf File of the book"}),Object(R.jsx)(re.a.File,{id:"uploaded_file",name:"uploaded_file"})]}),Object(R.jsx)("br",{}),Object(R.jsx)(oe.a,{variant:"primary",type:"submit",children:"Submit"}),Object(R.jsx)(se.a,(e={variant:"danger",onClose:function(){return d(!1)},dismissible:!0,show:l},Object(ae.a)(e,"variant",null===w||void 0===w?void 0:w.variant),Object(ae.a)(e,"children",null===w||void 0===w?void 0:w.msg),e))]})}),Object(R.jsx)(ie.a.Footer,{children:Object(R.jsx)(oe.a,{variant:"secondary",onClick:I,children:"Close"})})]}),Object(R.jsx)("div",{className:"container",children:Object(R.jsx)("div",{className:"row",children:Object(R.jsx)("div",{className:"col",children:Object(R.jsxs)("table",{className:"table table-striped",children:[Object(R.jsx)("thead",{children:Object(R.jsxs)("tr",{children:[Object(R.jsx)("th",{scope:"col",children:"#"}),Object(R.jsx)("th",{scope:"col",children:"Title"}),Object(R.jsx)("th",{scope:"col",children:"Author"}),Object(R.jsx)("th",{scope:"col",children:"Category"}),Object(R.jsx)("th",{scope:"col",children:"Link to the book"})]})}),Object(R.jsxs)("tbody",{children:[Object(R.jsx)("tr",{children:Object(R.jsx)("td",{colSpan:5,children:Object(R.jsxs)(x.b,{to:"/cli/search",children:[" ","Search the Catalog"]})})}),C,Object(R.jsx)("tr",{children:Object(R.jsx)("td",{colSpan:5,children:Object(R.jsx)(oe.a,{variant:"link",onClick:function(){return o(!0)},children:"Add a book to the Catalog"})})})]})]})})})})]})};n(141);function de(){var e,t,n,c,o=Object(a.useState)(""),i=Object(s.a)(o,2),r=(i[0],i[1]),l=Object(a.useState)({}),d=Object(s.a)(l,2),b=d[0],u=d[1],j=Object(a.useState)(!1),h=Object(s.a)(j,2),p=h[0],g=h[1],O=Object(a.useState)({}),f=Object(s.a)(O,2),w=f[0],N=f[1],y=null===w||void 0===w||null===(e=w.response)||void 0===e?void 0:e.docs.map((function(e,t){var n;return Object(R.jsxs)("div",{className:"card col-12 col-md-9 border-0 pt-4",children:[Object(R.jsx)(x.b,{to:"/cli/pageview?b="+e.bookuuid+"&p="+e.pageno,className:"card-link stretched-link",target:"_blank",rel:"noopener noreferrer",children:"https://pepmiitb.jio.com/ocr-interface/cli/pageview?b="+e.bookuuid+"&p="+e.pageno}),Object(R.jsxs)("div",{className:"card-title pt-2 inline-headers",children:[Object(R.jsx)("h5",{children:null===e||void 0===e?void 0:e.title}),Object(R.jsx)("span",{className:"badge bg-light text-dark rounded-pill",children:"Page "+e.pageno}),Object(R.jsx)("h6",{className:"card-subtitle mb-2 text-muted",children:e.author})]}),Object(R.jsx)("div",{className:"card-body p-0 m-0 text-muted d-inline-block text-truncate",dangerouslySetInnerHTML:{__html:null===(n=w.highlighting[e.id])||void 0===n?void 0:n.pagecontent[0]}})]},e.id)})),I=function(){var e=Object(v.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://pepmiitb.jio.com/ocr-interface/s/"+t,e.next=3,ne.a.get(n).then((function(e){N(e.data)})).catch((function(e){var t;e.response?u({msg:null===(t=e.response)||void 0===t?void 0:t.data,variant:"danger"}):u({msg:"Unkown errro in server",variant:"danger"});g(!0)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("div",{className:"container-fluid px-5 pt-5",children:Object(R.jsxs)("div",{className:"row align-items-center shadow p-2",children:[Object(R.jsx)(x.b,{to:"/cli",children:"back to Catalog"}),Object(R.jsx)("div",{className:"col-12 col-md-4 col-lg-2",children:Object(R.jsx)("p",{className:"h1",children:"Sandhi"})}),Object(R.jsx)("div",{className:"col-12 col-md-8 col-lg-8",children:Object(R.jsx)("input",{type:"text",className:"form-control form-control-lg",id:"exampleFormControlInput1",placeholder:"enter your search string",onKeyDown:function(e){if("Enter"===e.key)return I(e.target.value),void console.log(y);r(e.target.value)}})}),Object(R.jsx)(se.a,(t={variant:"danger",onClose:function(){return g(!1)},dismissible:!0,show:p},Object(ae.a)(t,"variant",null===b||void 0===b?void 0:b.variant),Object(ae.a)(t,"children",null===b||void 0===b?void 0:b.msg),t))]})}),Object(R.jsx)("div",{className:"container-fluid p-0 m-0",children:Object(R.jsx)("hr",{})}),Object(R.jsxs)("div",{className:"container",children:[Object(R.jsx)("div",{className:"row",children:Object(R.jsx)("div",{className:"col-12 col-md-4",show:null===w||void 0===w?void 0:w.response,children:Object(R.jsxs)("h6",{className:"text-muted",children:[null===w||void 0===w||null===(n=w.response)||void 0===n?void 0:n.numFound," ","results in ",(null===w||void 0===w||null===(c=w.responseHeader)||void 0===c?void 0:c.QTime)+" ","milliseconds"]})})}),Object(R.jsx)("div",{className:"row border shadow-lg pb-4",children:y})]})]})}var be=function(){var e=j(),t=Object(s.a)(e,2),n=(t[0],t[1],window.location.href);return n.split("?").length>1&&n.split("?")[1].split("&")[0],Object(R.jsx)(x.a,{children:Object(R.jsxs)(p.c,{children:[Object(R.jsx)(p.a,{path:"/cli/search",children:Object(R.jsx)(de,{})}),Object(R.jsxs)(p.a,{exact:!0,path:"/cli",children:[Object(R.jsx)("nav",{className:"navbar navbar-dark bg-primary navbar-expand-md shadow-sm rounded p-0 m-0",children:Object(R.jsxs)("div",{className:"container-fluid py-0",children:[Object(R.jsx)(x.b,{className:"navbar-brand",to:"/cli",children:"SandHI"}),Object(R.jsx)("span",{className:"navbar-text px-3 me-auto",children:"Books Catalog List"})]})}),Object(R.jsx)(le,{})]}),Object(R.jsx)(p.a,{exact:!0,path:"/cli/pageview",children:Object(R.jsx)(ce,{})})]})})},ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,150)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};r.a.render(Object(R.jsx)(o.a.StrictMode,{children:Object(R.jsx)(h,{children:Object(R.jsx)(be,{})})}),document.getElementById("root")),ue()},92:function(e,t,n){},93:function(e,t,n){}},[[142,1,2]]]);
//# sourceMappingURL=main.36c79c7c.chunk.js.map