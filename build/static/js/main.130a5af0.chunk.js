(this.webpackJsonpturnero=this.webpackJsonpturnero||[]).push([[0],{126:function(e,t,a){e.exports=a(157)},157:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),l=a(92),i=a(93),u=a(103),s=a(100),m=a(29),d=a(42),p=a(16),f=a(13),b=a.n(f),E=a(21),g=a(5),h=a(193),O=a(195),v=a(190),y=a(192),j=a(194),x=a(191),R=a(56),w=a.n(R),C=a(159),k=Object(n.createContext)(),T=Object(n.createContext)(),S=a(94),N=a.n(S).a.create({baseURL:"http://54.233.102.82:4000"}),A=Object(g.a)((function(e){return{head:{backgroundColor:"#3f51b5",color:e.palette.common.white},body:{fontSize:14}}}))(v.a),D=Object(g.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}}))(x.a),_=function(e){var t=e.titulos,a=e.turnosDisponibles,o=e.dateFormated,c=Object(n.useContext)(k).eliminarTurno,l=Object(n.useContext)(T).usuario,i=function(){var e=Object(E.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("/api/usuarios/".concat(t.cliente));case 2:a=e.sent,w.a.fire({title:"<h5>cliente: ".concat(a.data.nombre,"</h5>"),html:"<p>email: ".concat(a.data.email,'</p><p><a href="https://wa.me/+54').concat(a.data.telefono,'">Telefono: ').concat(a.data.telefono,"</a></p><p>Desea eliminar el turno?</p>"),icon:"question",showConfirmButton:!0,showCancelButton:!0}).then((function(e){e.value&&c(t._id)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement(y.a,{component:C.a},r.a.createElement(h.a,{"aria-label":"customized table"},r.a.createElement(j.a,null,r.a.createElement(x.a,null,t.map((function(e,t){return r.a.createElement(A,{key:t,align:"center"},e," ",o)})))),r.a.createElement(O.a,null,a.map((function(e,t){return r.a.createElement(D,{key:t},r.a.createElement(A,{component:"th",scope:"row",align:"center",onClick:function(){return t=e,void("Admin"!==l.rol?w.a.fire({title:"Atenci\xf3n",text:"Estas seguro de eliminar el turno para el d\xeda ".concat(t.fecha," a las ").concat(t.hora,"?"),icon:"question",showConfirmButton:!0,showCancelButton:!0}).then((function(e){e.value&&c(t._id)})):i(t));var t}},e.hora," ",e.fecha))}))))))},I=a(200),U=a(207),Y=a(196),B=a(197),G=a(198),L=a(199),M=Object(Y.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),q=function(){var e=M(),t=Object(n.useContext)(T),a=t.usuario,o=t.usuarioAutenticado,c=t.cerrarSesion;return Object(n.useEffect)((function(){o()}),[]),r.a.createElement("div",{className:e.root},r.a.createElement(B.a,{position:"static"},r.a.createElement(G.a,null,a&&r.a.createElement(L.a,{variant:"h6",className:e.title},"Hola ",r.a.createElement("span",null,a.nombre)),r.a.createElement(I.a,{color:"inherit",onClick:function(){return c()}},"Cerrar Sesi\xf3n"))))},W=function(e){var t=Object(n.useContext)(T),a=t.usuarioAutenticado,o=t.usuario,c=Object(n.useContext)(k),l=c.turnos,i=c.obtenerTurnos,u=Object(n.useState)(!1),s=Object(p.a)(u,2),m=s[0],d=s[1];Object(n.useEffect)((function(){a(),i()}),[]);return r.a.createElement("div",{className:"mt-3"},r.a.createElement(q,null),r.a.createElement(_,{titulos:["Mis Turnos"],turnosDisponibles:l}),r.a.createElement("div",{className:"mt-5 d-flex justify-content-center"},r.a.createElement(I.a,{variant:"contained",color:"primary",onClick:function(){l.length>=2&&"Admin"!==o.rol?(d(!0),setTimeout((function(){d(!1)}),3e3)):e.history.push("/turnero")},disabled:m},"Agregar Turno")),m&&r.a.createElement("div",{className:"mt-5 d-flex justify-content-center"},r.a.createElement(U.a,{severity:"warning"},"No puedes agendar mas de dos turnos")))},F=a(50),P=a(10),X=Object(n.createContext)(),H=a(209),V=a(203),z=a(205),J=a(206),K=a(69),Q=a.n(K),Z=a(202);function $(){return r.a.createElement(L.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(m.b,{color:"inherit",to:"https://material-ui.com/"},"DY")," ",(new Date).getFullYear(),".")}var ee=Object(Y.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function te(e){var t=Object(n.useContext)(X),a=t.alerta,o=t.mostrarAlerta,c=Object(n.useContext)(T),l=c.registrarUsuario,i=c.mensaje,u=c.autenticado;Object(n.useEffect)((function(){u&&e.history.push("/home"),i&&o(i.msg,i.categoria)}),[i,u,e.history]);var s=Object(n.useState)({nombre:"",rol:"",email:"",password:"",telefono:"",confirmar:""}),d=Object(p.a)(s,2),f=d[0],b=d[1],E=f.nombre,g=f.email,h=f.telefono,O=f.password,v=f.confirmar,y=function(e){b(Object(P.a)(Object(P.a)({},f),{},Object(F.a)({},e.target.name,e.target.value)))},j=ee();return r.a.createElement(Z.a,{component:"main",maxWidth:"xs"},r.a.createElement(V.a,null),r.a.createElement("div",{className:j.paper},r.a.createElement(H.a,{className:j.avatar},r.a.createElement(Q.a,null)),r.a.createElement(L.a,{component:"h1",variant:"h5"},"Crear Nueva Cuenta"),r.a.createElement("form",{className:j.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),""!==E.trim()&&""!==g.trim()&&""!==h.trim()&&""!==O.trim()?O.length<6?o("El password debe tener minimo 6 caracteres","alert-danger"):O===v?l({nombre:E,email:g,password:O,telefono:h}):o("Los password no son iguales","alert-danger"):o("Todos los campos son obligatorios","alert-danger")}},r.a.createElement(z.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"nombre",label:"Nombre",name:"nombre",autoFocus:!0,value:E,onChange:y}),r.a.createElement(z.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"telefono",label:"Telefono",name:"telefono",value:h,onChange:y}),r.a.createElement(z.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",value:g,onChange:y}),r.a.createElement(z.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:O,onChange:y}),r.a.createElement(z.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"confirmar",label:"confirmar",type:"password",id:"confirmar",value:v,onChange:y}),r.a.createElement(I.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:j.submit},"Crear Sesi\xf3n")),r.a.createElement(m.b,{to:"/"},"Volver"),a&&r.a.createElement(U.a,{severity:"error"},a.msg)),r.a.createElement(J.a,{mt:8},r.a.createElement($,null)))}var ae=function(e){e?N.defaults.headers.common["x-auth-token"]=e:delete N.defaults.headers.common["x-auth-token"]},ne=a(104),re=function(e){var t=e.component,a=Object(ne.a)(e,["component"]),o=Object(n.useContext)(T),c=o.autenticado,l=o.usuarioAutenticado,i=o.cargando;return Object(n.useEffect)((function(){l()}),[]),r.a.createElement(d.b,Object.assign({},a,{render:function(e){return c||i?r.a.createElement(t,e):r.a.createElement(d.a,{to:"/"})}}))},oe=a(17),ce=a(204),le=a(99),ie=a(101),ue=a(46),se=a.n(ue),me=function(){var e=Object(g.a)((function(e){return{head:{backgroundColor:"#3f51b5",color:e.palette.common.white},body:{fontSize:14}}}))(v.a),t=Object(g.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}}))(x.a),a=Object(n.useContext)(k),o=a.agregarTurno,c=a.obtenerHorasDisponibles,l=a.turnosDisponibles,i=a.turnos,u=Object(n.useContext)(T).usuario,s=Object(n.useState)(new Date),d=Object(p.a)(s,2),f=d[0],R=d[1],S=Object(n.useState)(se()(new Date).format("DD-MM-YYYY")),N=Object(p.a)(S,2),A=N[0],D=N[1],_=Object(n.useState)(!1),Y=Object(p.a)(_,2),B=Y[0],G=Y[1];Object(n.useEffect)((function(){c(A)}),[f,i]);var L=function(){var e=Object(E.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==se()(t).day()){e.next=3;break}return console.log("este es el date ",se()(t).day()),e.abrupt("return");case 3:a=se()(t).format("DD-MM-YYYY"),D(a),R(t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{style:{color:"black"},align:"center"},"Turnero"),r.a.createElement("div",{className:"mb-3",align:"center",style:{backgroundColor:"white"}},r.a.createElement(oe.a,{utils:le.a,locale:ie.a},r.a.createElement(ce.a,{margin:"normal",id:"date-picker-dialog",label:"Fecha de Turno",format:"dd/MM/yyyy",value:f,minDate:se()(new Date).format("YYYY/MM/DD"),maxDate:se()().day(14),onChange:L,KeyboardButtonProps:{"aria-label":"change date"}}))),0===l.length?r.a.createElement("div",{className:"alert alert-danger"},r.a.createElement("h5",null,"No quedan tunos disponibles para el dia  ",A)):r.a.createElement("div",null,r.a.createElement(y.a,{component:C.a},r.a.createElement(h.a,{"aria-label":"customized table"},r.a.createElement(j.a,null,r.a.createElement(x.a,null,r.a.createElement(e,{align:"center"},"Turnos Disponibles para el dia ",A))),r.a.createElement(O.a,null,l.map((function(a,n){return r.a.createElement(t,{key:n},r.a.createElement(e,{component:"th",scope:"row",align:"center",onClick:function(){return function(e){if(i.length>=2&&"Admin"!==u.rol)G(!0);else{var t={fecha:A,hora:e};w.a.fire({title:"Atenci\xf3n",text:"Vas a agendar un turno para el d\xeda ".concat(t.fecha," a las ").concat(t.hora),icon:"question",showConfirmButton:!0,showCancelButton:!0}).then((function(e){e.value&&(o(t),console.log("turno creado"))}))}}(a)}},a))})))))),B&&r.a.createElement("div",{className:"mt-5 d-flex justify-content-center"},r.a.createElement(U.a,{severity:"warning"},"No puedes agendar mas de dos turnos")),r.a.createElement("div",{className:"mt-5 d-flex justify-content-center"},r.a.createElement(I.a,{variant:"contained",color:"primary"},r.a.createElement(m.b,{style:{color:"white"},to:"/home"},"Volver"))))},de=function(e,t){switch(t.type){case"MOSTRAR_ALERTA":return{alerta:t.payload};case"OCULTAR_ALERTA":return{alerta:null};default:return e}},pe=function(e){var t=Object(n.useReducer)(de,{alerta:null}),a=Object(p.a)(t,2),o=a[0],c=a[1];return r.a.createElement(X.Provider,{value:{alerta:o.alerta,mostrarAlerta:function(e,t){c({type:"MOSTRAR_ALERTA",payload:{msg:e,categoria:t}}),setTimeout((function(){c({type:"OCULTAR_ALERTA"})}),5e3)}}},e.children)},fe=function(e,t){switch(t.type){case"REGISTRO_EXITOSO":return localStorage.setItem("token",t.payload.token),Object(P.a)(Object(P.a)({},e),{},{autenticado:!0,mensaje:null});case"LOGIN_EXITOSO":return localStorage.setItem("token",t.payload.token),Object(P.a)(Object(P.a)({},e),{},{token:t.payload.token,autenticado:!0,mensaje:null,cargando:!1});case"OBTENER_USUARIO":return Object(P.a)(Object(P.a)({},e),{},{autenticado:!0,usuario:t.payload,cargando:!1});case"REGISTRO_ERROR":case"LOGIN_ERROR":case"CERRAR_SESION":return localStorage.removeItem("token"),Object(P.a)(Object(P.a)({},e),{},{token:null,mensaje:t.payload,autenticado:null,usuario:null,cargando:!1});default:return e}},be=function(e){var t={token:localStorage.getItem("token"),autenticado:null,usuario:null,mensaje:null,cargando:!0},a=Object(n.useReducer)(fe,t),o=Object(p.a)(a,2),c=o[0],l=o[1],i=function(){var e=Object(E.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.post("/api/usuarios",t);case 3:a=e.sent,console.log(a.data),l({type:"REGISTRO_EXITOSO",payload:a.data}),u(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),n={msg:e.t0.response.data.msg,categoria:"alert-danger"},l({type:"REGISTRO_ERROR",payload:n});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(E.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=localStorage.getItem("token"))&&ae(t),e.prev=2,e.next=5,N.get("/api/auth");case 5:a=e.sent,l({type:"OBTENER_USUARIO",payload:a.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),l({type:"LOGIN_ERROR"});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(E.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.post("/api/auth",t);case 3:a=e.sent,console.log(a.data),l({type:"LOGIN_EXITOSO",payload:a.data}),u(),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response.data.msg),n={msg:e.t0.response.data.msg,categoria:"alert-danger"},l({type:"LOGIN_ERROR",payload:n});case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(T.Provider,{value:{token:c.token,autenticado:c.autenticado,usuario:c.usuario,mensaje:c.mensaje,cargando:c.cargando,registrarUsuario:i,iniciarSesion:s,usuarioAutenticado:u,cerrarSesion:function(){l({type:"CERRAR_SESION"})}}},e.children)},Ee=a(102),ge=function(e,t){switch(t.type){case"OBTENER_TURNOS":return Object(P.a)(Object(P.a)({},e),{},{turnos:t.payload});case"AGREGAR_TURNO":return Object(P.a)(Object(P.a)({},e),{},{turnos:[].concat(Object(Ee.a)(e.turnos),[t.payload])});case"ELIMINAR_TURNO":return Object(P.a)(Object(P.a)({},e),{},{turnos:e.turnos.filter((function(e){return e._id!==t.payload}))});case"OBTENER_TURNOS_X_FECHA":return Object(P.a)(Object(P.a)({},e),{},{turnosDisponibles:e.horarioDeAtencion.filter((function(e){return-1===t.payload.indexOf(e)}))});default:return e}},he=function(e){var t=Object(n.useReducer)(ge,{turnos:[],turnosDisponibles:[],horarioDeAtencion:["18:00","18:30","19:00","19:30","20:00"]}),a=Object(p.a)(t,2),o=a[0],c=a[1],l=function(){var e=Object(E.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.get("/api/turnos");case 3:t=e.sent,c({type:"OBTENER_TURNOS",payload:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(E.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.get("api/turnos/fecha/".concat(t));case 3:return a=e.sent,n=[],e.next=7,a.data.map((function(e){return n.push(e.hora)}));case 7:c({type:"OBTENER_TURNOS_X_FECHA",payload:n}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(E.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.post("/api/turnos",t);case 3:a=e.sent,c({type:"AGREGAR_TURNO",payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(E.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.delete("/api/turnos/".concat(t));case 3:c({type:"ELIMINAR_TURNO",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(k.Provider,{value:{turnos:o.turnos,horarioDeAtencion:o.horarioDeAtencion,turnosDisponibles:o.turnosDisponibles,obtenerTurnos:l,agregarTurno:u,eliminarTurno:s,obtenerHorasDisponibles:i}},e.children)};function Oe(){return r.a.createElement(L.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(m.b,{color:"inherit",to:"https://material-ui.com/"},"DY")," ",(new Date).getFullYear(),".")}var ve=Object(Y.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function ye(e){var t=Object(n.useContext)(X),a=t.alerta,o=t.mostrarAlerta,c=Object(n.useContext)(T),l=c.mensaje,i=c.autenticado,u=c.iniciarSesion;Object(n.useEffect)((function(){i&&e.history.push("/home"),l&&o(l.msg,l.categoria)}),[l,i,e.history]);var s=Object(n.useState)({email:"",password:""}),d=Object(p.a)(s,2),f=d[0],b=d[1],E=f.email,g=f.password,h=function(e){b(Object(P.a)(Object(P.a)({},f),{},Object(F.a)({},e.target.name,e.target.value)))},O=ve();return r.a.createElement(Z.a,{component:"main",maxWidth:"xs"},r.a.createElement(V.a,null),r.a.createElement("div",{className:O.paper},r.a.createElement(H.a,{className:O.avatar},r.a.createElement(Q.a,null)),r.a.createElement(L.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:O.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),""!==E.trim()&&""!==g.trim()||o("Todos los campos son obligatorios","alert-danger"),u({email:E,password:g})}},r.a.createElement(z.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",autoFocus:!0,value:E,onChange:h}),r.a.createElement(z.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:g,onChange:h}),r.a.createElement(I.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:O.submit},"Sign In")),r.a.createElement(m.b,{to:"/nueva-cuenta"},"Crear Cuenta"),a&&r.a.createElement(U.a,{severity:"error"},a.msg)),r.a.createElement(J.a,{mt:8},r.a.createElement(Oe,null)))}var je=localStorage.getItem("token");je&&ae(je);var xe=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(pe,null,r.a.createElement(be,null,r.a.createElement(he,null,r.a.createElement(m.a,null,r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/",exact:!0,component:ye}),r.a.createElement(d.b,{path:"/nueva-cuenta",exact:!0,component:te}),r.a.createElement(re,{path:"/home",exact:!0,component:W}),r.a.createElement(re,{path:"/turnero",exact:!0,component:me}))))))}}]),a}(n.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(xe,null)),document.getElementById("root"))}},[[126,1,2]]]);
//# sourceMappingURL=main.130a5af0.chunk.js.map