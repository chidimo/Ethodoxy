(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),o=a.n(l),c=(a(75),a(41)),i=a(26),u=a(49),s=a(50),m=Object(i.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"AUTH_USER_ID",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"":return t.id;default:return e}}}),p=Object(u.createLogger)(),h=Object(i.d)(m,Object(i.a)(p,s.a)),d=a(42),E=a(23),b=a(51),g=a.n(b),f=function(){return r.a.createElement("div",{className:"loader"},r.a.createElement(g.a,{type:"Oval",color:"black",width:"56",height:"56"}))},w=a(65),v=a(52),O=a(53),y=a(63),j=a(54),k=a(64),C=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(y.a)(this,Object(j.a)(t).call(this,e))).state={hasError:!1},a}return Object(k.a)(t,e),Object(O.a)(t,[{key:"componentDidCatch",value:function(e,t){console.log({error:e,info:t})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Something went wrong. Unable to render this part.")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(n.Component),N=a(46),S=a(33),R=a(139),x=a(24),B=a(142),I=a(143),M=a(140),z=a(144),D=a(141),T=a(146),U=a(145),L=a(60),A=a.n(L),J=a(59),P=a.n(J),_=a(57),q=a.n(_),F=a(58),G=a.n(F),H=a(61),W=a.n(H),K=Object(R.a)(function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(S.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(S.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(x.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(x.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(S.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(S.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(S.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}),Q=function(){var e=K(),t=r.a.useState(null),a=Object(N.a)(t,2),n=a[0],l=a[1],o=r.a.useState(null),c=Object(N.a)(o,2),i=c[0],u=c[1],s=Boolean(n),m=Boolean(i);function p(){u(null)}function h(){l(null),p()}var d=r.a.createElement(U.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:s,onClose:h},r.a.createElement(T.a,{onClick:h},"Profile"),r.a.createElement(T.a,{onClick:h},"My account")),E=r.a.createElement(U.a,{anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:m,onClose:p},r.a.createElement(T.a,null,r.a.createElement(M.a,{"aria-label":"Show 4 new mails",color:"inherit"},r.a.createElement(D.a,{badgeContent:4,color:"secondary"},r.a.createElement(q.a,null))),r.a.createElement("p",null,"Messages")),r.a.createElement(T.a,null,r.a.createElement(M.a,{"aria-label":"Show 11 new notifications",color:"inherit"},r.a.createElement(D.a,{badgeContent:11,color:"secondary"},r.a.createElement(G.a,null))),r.a.createElement("p",null,"Notifications")),r.a.createElement(T.a,{onClick:function(e){l(e.currentTarget)}},r.a.createElement(M.a,{"aria-label":"Account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},r.a.createElement(P.a,null)),r.a.createElement("p",null,"Profile")));return r.a.createElement("div",{className:e.grow},r.a.createElement(B.a,{position:"static"},r.a.createElement(I.a,null,r.a.createElement(M.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"Open drawer"},r.a.createElement(A.a,null)),r.a.createElement(z.a,{className:e.title,variant:"h6",noWrap:!0},"Ethodoxy"),r.a.createElement("div",{className:e.grow}),r.a.createElement("div",{className:e.sectionMobile},r.a.createElement(M.a,{"aria-label":"Show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)},color:"inherit"},r.a.createElement(W.a,null))))),E,d)},V=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"Built with ",r.a.createElement("code",null,"material UI")," and ",r.a.createElement("code",null,"React")))},X=function(e){var t=e.component,a=Object(w.a)(e,["component"]);return r.a.createElement(E.a,Object.assign({},a,{render:function(e){return r.a.createElement(C,null,r.a.createElement("div",null,r.a.createElement(Q,null),r.a.createElement("main",{className:"container",id:"public-route-layout"},r.a.createElement(t,e))),r.a.createElement(V,null))}}))},Y=function(e){var t=e.location;return r.a.createElement("section",{className:"container",id:"error404"},r.a.createElement("h1",null,"Error: 404"),r.a.createElement("p",null,"The requested url ",r.a.createElement("span",{id:"address404"},t.pathname)," ","was not found on the server."))},Z=Object(n.lazy)(function(){return a.e(3).then(a.bind(null,148))}),$=function(){return r.a.createElement(d.a,null,r.a.createElement(n.Suspense,{fallback:r.a.createElement(f,null)},r.a.createElement(E.c,null,r.a.createElement(X,{exact:!0,path:"/React-Redux-Starter/",component:Z}),r.a.createElement(E.a,{component:Y}))))},ee=function(){return r.a.createElement(c.a,{store:h},r.a.createElement($,null))};o.a.render(r.a.createElement(ee,null),document.getElementById("root"))},70:function(e,t,a){e.exports=a(110)},75:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.58e9abea.chunk.js.map