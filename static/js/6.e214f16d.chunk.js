(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{179:function(e,t,a){"use strict";var n=a(41),r=a.n(n),o=a(50),i=a(27),c=a.n(i),s=a(180),u=a.n(s),p={getPaginatedItems:function(){var e=Object(o.a)(r.a.mark(function e(t){var a,n,o,i,s,u;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=[],n=t;case 2:if(!n){e.next=12;break}return e.next=5,c.a.get(n);case 5:o=e.sent,i=o.data,s=i.results,u=i.next,a=a.concat(s),n=u,e.next=2;break;case 12:return e.abrupt("return",a);case 13:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),formatText:function(e,t){switch(t){case"upper":return e.toUpperCase();case"lower":return e.toLowerCase();case"title":return u()(e);default:return e}}};t.a=p},180:function(e,t,a){var n=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;e.exports=function(e){return i(e,n)},e.exports.toTitleCase=e.exports;var r=a(181).concat(a(182)).concat(a(183)).concat(n.source.replace(/(^\^\(|\)\$$)/g,"").split("|")).concat(["is"]),o=new RegExp("^("+r.join("|")+")$","i");function i(e,t){return e?e.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(e,a,n){return a>0&&a+e.length!==n.length&&e.search(t)>-1&&":"!==n.charAt(a-2)&&("-"!==n.charAt(a+e.length)||"-"===n.charAt(a-1))&&n.charAt(a-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)}):e}e.exports.toLaxTitleCase=function(e){return i(e,o)}},181:function(e,t){e.exports=["the","a","an","some"]},182:function(e,t){e.exports=["a","abaft","aboard","about","above","absent","across","afore","after","against","along","alongside","amid","amidst","among","amongst","an","apropos","apud","around","as","aside","astride","at","athwart","atop","barring","before","behind","below","beneath","beside","besides","between","beyond","but","by","circa","concerning","despite","down","during","except","excluding","failing","following","for","forenenst","from","given","in","including","inside","into","like","mid","midst","minus","modulo","near","next","notwithstanding","o'","of","off","on","onto","opposite","out","outside","over","pace","past","per","plus","pro","qua","regarding","round","sans","save","since","than","through","throughout","thru","thruout","till","times","to","toward","towards","under","underneath","unlike","until","unto","up","upon","versus","via","vice","vis-\xe0-vis","with","within","without","worth"]},183:function(e,t){e.exports=["as","because","for","and","nor","but","or","yet","so"]},193:function(e,t,a){"use strict";a.r(t);var n=a(45),r=a(0),o=a.n(r),i=a(34),c=a(35),s=a(41),u=a.n(s),p=a(50),l=a(27),d=a.n(l),f=a(51),g=a(20),b={getChallonerPaginated:function(e){return{type:g.b.GET_CHALLONER_PAGINATED,data:e}}},m={getChallonerPaginated:function(e){return function(){var t=Object(p.a)(u.a.mark(function t(a){var n,r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a(Object(f.showLoading)()),t.next=3,d.a.get("/commentary/?page=".concat(e));case 3:n=t.sent,r=n.data,a(b.getChallonerPaginated(r)),a(Object(f.hideLoading)());case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}},h=a(1),O=a(2),v=a(12),x=(a(3),a(4)),E=a(5),w=a(7),k=o.a.forwardRef(function(e,t){var a=e.classes,n=e.className,r=e.component,i=void 0===r?"div":r,c=e.fixed,s=void 0!==c&&c,u=e.maxWidth,p=void 0===u?"lg":u,l=Object(O.a)(e,["classes","className","component","fixed","maxWidth"]);return o.a.createElement(i,Object(h.a)({className:Object(x.a)(a.root,n,s&&a.fixed,!1!==p&&a["maxWidth".concat(Object(w.a)(String(p)))]),ref:t},l))}),j=Object(E.a)(function(e){var t;return{root:(t={width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},Object(v.a)(t,e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),Object(v.a)(t,e.breakpoints.up("md"),{paddingLeft:e.spacing(4),paddingRight:e.spacing(4)}),t),fixed:Object.keys(e.breakpoints.values).reduce(function(t,a){var n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:n}),t},{}),maxWidthXs:Object(v.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(v.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(v.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(v.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(v.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}},{name:"MuiContainer"})(k),A=function(e){var t=e.page,a=e.dispatch,n=e.numberOfPages;return o.a.createElement(j,null,o.a.createElement("a",{href:"/#",className:1===t?"disabled":"active",onClick:function(e){e.preventDefault(),a({type:"NAVIGATE_BACKWARD"})}},o.a.createElement("span",null,"<")),function(){for(var e=[],t=function(t){e.push(o.a.createElement("span",{key:t+1},o.a.createElement("a",{href:"/#",className:"skip === page ? 'uk-active' : ''",onClick:function(e){e.preventDefault(),a({type:"GO_TO_PAGE_NUMBER",page:t+1})}},t+1)))},r=0;r<n;r++)t(r);return e}(),o.a.createElement("a",{href:"/#",className:t===n?"active":"disabled",onClick:function(e){e.preventDefault(),a({type:"NAVIGATE_FORWARD"})}},o.a.createElement("span",null,">")))};function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(a,!0).forEach(function(t){Object(v.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var R={paginationReducer:function(e,t){switch(t.type){case"GO_TO_PAGE_NUMBER":return y({},e,{page:t.page});case"NAVIGATE_FORWARD":return y({},e,{page:e.page===e.numberOfPages?e.page:e.page+1});case"NAVIGATE_BACKWARD":return y({},e,{page:1===e.page?e.page:e.page-1});case"UPDATE_NUMBER_OF_PAGES":return y({},e,{numberOfPages:t.numberOfPages});default:return e}},errorSuccessReducer:function(e,t){switch(t.type){case"UPDATE_FORM_ERROR_STATE":return y({},e,{error:t.error,errorMsg:t.errorMsg});case"UPDATE_OPERATION_SUCCESS":return y({},e,{success:t.success});default:return e}}},_=a(179);t.default=function(){var e=Object(i.useDispatch)(),t=Object(i.useSelector)(function(e){return e.commReducer}),a=t.count,s=t.results,u=Math.ceil(a/50),p=Object(r.useReducer)(R.paginationReducer,{page:1,numberOfPages:u}),l=Object(n.a)(p,2),d=l[0],f=l[1];return Object(r.useEffect)(function(){f({type:"UPDATE_NUMBER_OF_PAGES",numberOfPages:u})},[u]),Object(r.useEffect)(function(){m.getChallonerPaginated(d.page)(e)},[e,d]),o.a.createElement("div",null,s.map(function(e,t){var a=e.id,n=e.text,r=e.book_name,i=e.chapter,s=e.verse,u=e.book;return o.a.createElement("div",{key:a},o.a.createElement("p",null,_.a.formatText(r,"title")," ",i," v. ",s),o.a.createElement("p",null,t+1,". ",n),o.a.createElement(c.b,{to:"/douay-rheims-bible/book/".concat(u.id)},"Reference"),o.a.createElement("hr",null))}),o.a.createElement(A,{page:d.page,numberOfPages:u,dispatch:f}))}}}]);
//# sourceMappingURL=6.e214f16d.chunk.js.map