(this.webpackJsonpgif_proyect=this.webpackJsonpgif_proyect||[]).push([[0],{139:function(e,t,n){e.exports=n.p+"static/media/react-logo.2a485c25.png"},154:function(e,t,n){e.exports=n(196)},159:function(e,t,n){},196:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"setToken",(function(){return L}));var r={};n.r(r),n.d(r,"moreGifAction",(function(){return ve}));var c=n(0),o=n.n(c),i=n(10),s=n.n(i),u=(n(159),n(76)),l=n(13),m=n(235),p=Object(m.a)({header:{background:"black","background-image":"url(https://developers.giphy.com/static/img/dev-logo-lg.7404c00322a8.gif)","background-size":"auto",height:"70px","background-repeat":"no-repeat","background-position-y":"center","background-position-x":"center",width:"100%"}}),d=function(){var e=p();return o.a.createElement("section",{className:e.header})},f=n(97),g=function(){return sessionStorage.getItem("token")},b=function(e){var t=e.component,n=Object(f.a)(e,["component"]),a=g();return o.a.createElement(l.b,Object.assign({},n,{render:function(e){return a?o.a.createElement(t,Object.assign({},e,n)):o.a.createElement(l.a,{to:"/login"})}}))},h=function(e){var t=e.component,n=Object(f.a)(e,["component"]),a=g();return o.a.createElement(l.b,Object.assign({},n,{render:function(e){return a?o.a.createElement(l.a,{to:"/"}):o.a.createElement(t,e)}}))},v=n(34),E=n(244),y=n(245),x=n(246),k=n(247),j=n(248),O=n(46),w=n(12),I=n.n(w),C=n(24),N=n(111),A=n(251),B=n(243),S=n(136),T=n.n(S),q=n(240),z=n(137),_=n.n(z),G=n(253),F=n(239),M=n(252),P=n(242),R=n(241),W=n(138),J=n.n(W),L=function(e){return function(t){return t({type:"set_token",payload:e})}},U=n(109),K=n(101),V=K.a().shape({email:K.b().email("Ingrese un email valido").max(50,"Maximo 50 caracteres").required("Este campo es requerido"),password:K.b().min(4,"M\xednimo 2 caracteres").max(30,"Maximo 40 caracteres").required("Este campo es requerido")}),H={email:"",password:""},X=function(e){return new Promise((function(t,n){setTimeout((function(){if("admin@admin.com"==e.email&&"admin"==e.password){return n="fakeToken",sessionStorage.setItem("token",n),t({status:"ok",token:"fakeToken"})}return t({status:"error"});var n}),500)}))},D=Object(m.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#7E88C1"}}})),Q=Object(O.a)({},a),Y=Object(v.b)(null,Q)((function(e){var t=D(),n=Object(l.g)(),a=Object(c.useState)(!1),r=Object(N.a)(a,2),i=r[0],s=r[1],u=Object(c.useState)(!1),m=Object(N.a)(u,2),p=m[0],d=m[1],f=function(){var t=Object(C.a)(I.a.mark((function t(a){var r;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(!0),t.next=3,X(a);case 3:return r=t.sent,s(!1),r.hasOwnProperty("token")&&(e.setToken(r.token),n.replace("/")),d(!0),t.abrupt("return");case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement(G.a,{className:t.backdrop,open:i},o.a.createElement(F.a,{color:"inherit"})),o.a.createElement(U.b,{validationSchema:V,initialValues:H,onSubmit:f,render:function(e){var t=e.handleChange,n=e.values,a=e.errors,r=e.touched;return o.a.createElement(U.a,null,o.a.createElement(A.a,{fullWidth:!0,error:a.email&&r.email,label:"Usuario",type:"email",placeholder:"Ingrese su usuario",variant:"outlined",helperText:a.email,name:"email",onChange:t,value:n.email,style:{paddingBottom:"2em"},InputProps:{startAdornment:o.a.createElement(q.a,{position:"start"},o.a.createElement(T.a,null))}}),o.a.createElement(A.a,{fullWidth:!0,error:a.password&&r.password,label:"Contrase\xf1a",type:"password",placeholder:"Ingrese su contrase\xf1a",variant:"outlined",helperText:a.password,name:"password",onChange:t,value:n.password,style:{paddingBottom:"2em"},InputProps:{startAdornment:o.a.createElement(q.a,{position:"start"},o.a.createElement(_.a,null))}}),o.a.createElement(R.a,{in:p,style:{paddingBottom:"2em"}},o.a.createElement(M.a,{severity:"error",action:o.a.createElement(P.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){d(!1)}},o.a.createElement(J.a,{fontSize:"inherit"}))},"Usuario o contrase\xf1a incorrectas :(")),o.a.createElement(B.a,{fullWidth:!0,size:"large",variant:"contained",color:"primary",type:"submit"},"Login"))}}))})),Z=n(139),$=n.n(Z),ee=Object(m.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},imageBg:{width:"100%"},imageBgArea:{background:"#7E88C1",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center","@media only screen and (max-width: 599px)":{display:"none"}},imageBgXs:{display:"none","@media only screen and (max-width: 599px)":{display:"block",position:"absolute",opacity:".4"}},formArea:{background:"#7d728a2b",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",flex:1,"@media only screen and (max-width: 599px)":{background:"#7E88C1"}}}})),te=function(e){var t=ee();return o.a.createElement(E.a,{container:!0},o.a.createElement(E.a,{item:!0,xs:12,sm:7,className:t.imageBgArea},o.a.createElement("img",{src:$.a,alt:"background",className:t.imageBg})),o.a.createElement(E.a,{item:!0,xs:12,sm:5,className:t.formArea},o.a.createElement(y.a,{maxWidth:"md"},o.a.createElement(x.a,{className:t.root},o.a.createElement(k.a,{title:"Inicia sesion"}),o.a.createElement(j.a,null,o.a.createElement(Y,null))))))},ne=n(250),ae=n(249),re=n(81),ce=n(140),oe=n.n(ce),ie=Object(m.a)({cardContent:{height:"50px"},cardFotter:{display:"flex",alignItems:"center"}}),se=function(e){var t=e.gif,n=e.heightImage,a=ie();return t?o.a.createElement(x.a,null,o.a.createElement(ae.a,{component:"img",alt:t.title,height:n,image:t.images.original.url,title:t.title}),o.a.createElement(j.a,{className:a.cardContent},o.a.createElement(re.a,{gutterBottom:!0,component:"p"},t.title)),o.a.createElement(ne.a,null,o.a.createElement("div",{className:a.cardFotter},o.a.createElement(oe.a,null),o.a.createElement(re.a,{component:"span"},t.username||"giphy")))):null};se.defaultProps={heightImage:"140"};var ue=se,le=n(141),me=n.n(le),pe=n(74),de=n(142),fe=n.n(de),ge=me.a.create({baseURL:pe.a});ge.interceptors.request.use((function(e){return e.url+="?".concat(fe.a.stringify(pe.b,{arrayFormat:"brackets"})),e})),ge.interceptors.response.use((function(e){return e}),(function(e){return e.response?e.response:{data:{data:null},status:500}}));var be={get:function(){var e=Object(C.a)(I.a.mark((function e(t,n){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ge.get("".concat(t),{params:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),post:function(){var e=Object(C.a)(I.a.mark((function e(t,n){var a,r=arguments;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>2&&void 0!==r[2]?r[2]:pe.b,e.next=3,ge.post("/".concat(t),n,{headers:a});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),put:function(){var e=Object(C.a)(I.a.mark((function e(t,n){var a,r=arguments;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>2&&void 0!==r[2]?r[2]:pe.b,e.next=3,ge.put("/".concat(t),n,{headers:a});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),patch:function(){var e=Object(C.a)(I.a.mark((function e(t,n){var a,r=arguments;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>2&&void 0!==r[2]?r[2]:pe.b,e.next=3,ge.patch("/".concat(t),n,{headers:a});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),delete:function(e){return ge.delete(e)}},he=function(){var e=Object(C.a)(I.a.mark((function e(){var t,n,a,r=arguments;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:0,n="trending",e.next=4,be.get(n,{offset:t});case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ve=function(e){return function(){var t=Object(C.a)(I.a.mark((function t(n){var a;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ee(e);case 2:return a=t.sent,t.abrupt("return",n({type:"more_data",payload:a}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Ee=function(){var e=Object(C.a)(I.a.mark((function e(t){var n,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he(t);case 2:return n=e.sent,a=n.data,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ye=Object(m.a)({container:{display:"flex",justifyContent:"center",alignItems:"center"}}),xe=Object(O.a)({},r),ke=Object(v.b)((function(e){return{state:e}}),xe)((function(e){var t=ye();return o.a.createElement("div",{className:t.container},o.a.createElement(B.a,{size:"large",variant:"contained",color:"primary",type:"buttom",onClick:function(){var t=e.state.offset;e.moreGifAction(t)}},"Load More"))})),je=Object(m.a)({gridContainer:{marginTop:"4em"},container:{paddingBottom:"1em"}}),Oe=Object(O.a)({},r),we=Object(v.b)((function(e){return{state:e.gifReducer}}),Oe)((function(e){var t=je();return Object(c.useEffect)((function(){e.moreGifAction(e.state.offset)}),[]),e.state.list?o.a.createElement(y.a,{className:t.container},o.a.createElement(E.a,{container:!0,spacing:2,className:t.gridContainer},e.state.list.map((function(e,t){return o.a.createElement(E.a,{item:!0,xs:6,sm:4,md:3,lg:3,key:"gif-".concat(t)},o.a.createElement(ue,{gif:e}))}))),o.a.createElement(ke,null)):null})),Ie=Object(v.b)((function(e){return{user:e.userReducer}}))((function(e){return o.a.createElement(u.a,{basename:"/"},e.user.token?o.a.createElement(d,null):null,o.a.createElement(l.d,null,o.a.createElement(h,{exact:!0,path:"/login",component:te}),o.a.createElement(b,{exact:!0,path:"/",component:we})))})),Ce=n(55),Ne=n(143),Ae=n(110),Be={offset:0,list:null},Se=function(e,t){var n=t.payload,a=Object(O.a)({},e);return a.list?a.list=[].concat(Object(Ae.a)(a.list),Object(Ae.a)(n)):a.list=n,a.offset=a.list.length+1,a},Te={token:g()||null},qe=Object(Ce.c)({gifReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"more_data":return Se(e,t);default:return e}},userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"set_token":return{token:t.payload};default:return e}}}),ze=Object(Ce.d)(qe,Be,Object(Ce.a)(Ne.a));var _e=function(){return o.a.createElement(v.a,{store:ze},o.a.createElement(Ie,null))};s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(_e,null)),document.getElementById("root"))},74:function(e){e.exports=JSON.parse('{"a":"http://api.giphy.com/v1/gifs/","b":{"limit":25,"rating":"g","lang":"en","api_key":"8qp5AGfT6fOKxqoH7bVFcGjsaEnmKEyk"}}')}},[[154,1,2]]]);
//# sourceMappingURL=main.7dde2bd9.chunk.js.map