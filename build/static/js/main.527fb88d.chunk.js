(this.webpackJsonpturnero=this.webpackJsonpturnero||[]).push([[0],{126:function(e,a,t){e.exports=t(157)},157:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(12),c=t.n(o),l=t(92),i=t(93),u=t(103),s=t(100),m=t(29),p=t(43),d=t(16),f=t(11),b=t.n(f),h=t(19),E=t(5),g=t(193),O=t(195),v=t(190),y=t(192),j=t(194),R=t(191),x=t(56),w=t.n(x),C=t(159),k=Object(n.createContext)(),A=Object(n.createContext)(),T=t(94),S=t.n(T).a.create({baseURL:"http://54.232.196.67:4000"}),N=Object(E.a)((function(e){return{head:{backgroundColor:"#3f51b5",color:e.palette.common.white},body:{fontSize:14}}}))(v.a),D=Object(E.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}}))(R.a),_=function(e){var a=e.titulos,t=e.turnosDisponibles,o=e.dateFormated,c=Object(n.useContext)(k).eliminarTurno,l=Object(n.useContext)(A).usuario,i=function(){var e=Object(h.a)(b.a.mark((function e(a){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get("/api/usuarios/".concat(a.cliente));case 2:t=e.sent,w.a.fire({title:"<h5>cliente: ".concat(t.data.nombre,"</h5>"),html:"<p>email: ".concat(t.data.email,'</p><p><a href="https://wa.me/+54').concat(t.data.telefono,'">Telefono: ').concat(t.data.telefono,"</a></p><p>Desea eliminar el turno?</p>"),icon:"question",showConfirmButton:!0,showCancelButton:!0}).then((function(e){e.value&&c(a._id)}));case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement(y.a,{component:C.a},r.a.createElement(g.a,{"aria-label":"customized table"},r.a.createElement(j.a,null,r.a.createElement(R.a,null,a.map((function(e,a){return r.a.createElement(N,{key:a,align:"center"},e," ",o)})))),r.a.createElement(O.a,null,t.map((function(e,a){return r.a.createElement(D,{key:a},r.a.createElement(N,{component:"th",scope:"row",align:"center",onClick:function(){return a=e,void("Admin"!==l.rol?w.a.fire({title:"Atenci\xf3n",text:"Estas seguro de eliminar el turno para el d\xeda ".concat(a.fecha," a las ").concat(a.hora,"?"),icon:"question",showConfirmButton:!0,showCancelButton:!0}).then((function(e){e.value&&c(a._id)})):i(a));var a}},e.hora," ",e.fecha))}))))))},I=t(200),B=t(207),U=t(196),M=t(197),Y=t(198),G=t(199),L=Object(U.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),q=function(){var e=L(),a=Object(n.useContext)(A),t=a.usuario,o=a.usuarioAutenticado,c=a.cerrarSesion;return Object(n.useEffect)((function(){o()}),[]),r.a.createElement("div",{className:e.root},r.a.createElement(M.a,{position:"static"},r.a.createElement(Y.a,null,t&&r.a.createElement(G.a,{variant:"h6",className:e.title},"Hola ",r.a.createElement("span",null,t.nombre)),r.a.createElement(I.a,{color:"inherit",onClick:function(){return c()}},"Cerrar Sesi\xf3n"))))},W=function(e){var a=Object(n.useContext)(A),t=a.usuarioAutenticado,o=a.usuario,c=Object(n.useContext)(k),l=c.turnos,i=c.obtenerTurnos,u=Object(n.useState)(!1),s=Object(d.a)(u,2),m=s[0],p=s[1];Object(n.useEffect)((function(){t(),i()}),[]);return r.a.createElement("div",{className:"mt-3"},r.a.createElement(q,null),r.a.createElement(_,{titulos:["Mis Turnos"],turnosDisponibles:l}),r.a.createElement("div",{className:"mt-5 d-flex justify-content-center"},r.a.createElement(I.a,{variant:"contained",color:"primary",onClick:function(){l.length>=2&&"Admin"!==o.rol?(p(!0),setTimeout((function(){p(!1)}),3e3)):e.history.push("/turnero")},disabled:m},"Agregar Turno")),m&&r.a.createElement("div",{className:"mt-5 d-flex justify-content-center"},r.a.createElement(B.a,{severity:"warning"},"No puedes agendar mas de dos turnos")))},F=t(50),H=t(8),X=Object(n.createContext)(),P=t(209),V=t(203),z=t(205),J=t(206),K=t(69),Q=t.n(K),Z=t(202);function $(){return r.a.createElement(G.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(m.b,{color:"inherit",to:"https://material-ui.com/"},"DY")," ",(new Date).getFullYear(),".")}var ee=Object(U.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function ae(e){var a=Object(n.useContext)(X),t=a.alerta,o=a.mostrarAlerta,c=Object(n.useContext)(A),l=c.registrarUsuario,i=c.mensaje,u=c.autenticado;Object(n.useEffect)((function(){u&&e.history.push("/home"),i&&o(i.msg,i.categoria)}),[i,u,e.history]);var s=Object(n.useState)({nombre:"",rol:"",email:"",password:"",telefono:"",confirmar:""}),p=Object(d.a)(s,2),f=p[0],b=p[1],h=f.nombre,E=f.email,g=f.telefono,O=f.password,v=f.confirmar,y=function(e){b(Object(H.a)(Object(H.a)({},f),{},Object(F.a)({},e.target.name,e.target.value)))},j=ee();return r.a.createElement(Z.a,{component:"main",maxWidth:"xs"},r.a.createElement(V.a,null),r.a.createElement("div",{className:j.paper},r.a.createElement(P.a,{className:j.avatar},r.a.createElement(Q.a,null)),r.a.createElement(G.a,{component:"h1",variant:"h5"},"Crear Nueva Cuenta"),r.a.createElement("form",{className:j.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),""!==h.trim()&&""!==E.trim()&&""!==g.trim()&&""!==O.trim()?O.length<6?o("El password debe tener minimo 6 caracteres","alert-danger"):O===v?l({nombre:h,email:E,password:O,telefono:g}):o("Los password no son iguales","alert-danger"):o("Todos los campos son obligatorios","alert-danger")}},r.a.createElement(z.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"nombre",label:"Nombre",name:"nombre",autoFocus:!0,value:h,onChange:y}),r.a.createElement(z.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"telefono",label:"Telefono",name:"telefono",value:g,onChange:y}),r.a.createElement(z.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",value:E,onChange:y}),r.a.createElement(z.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:O,onChange:y}),r.a.createElement(z.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"confirmar",label:"confirmar",type:"password",id:"confirmar",value:v,onChange:y}),r.a.createElement(I.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:j.submit},"Crear Sesi\xf3n")),r.a.createElement(m.b,{to:"/"},"Volver"),t&&r.a.createElement(B.a,{severity:"error"},t.msg)),r.a.createElement(J.a,{mt:8},r.a.createElement($,null)))}var te=function(e){e?S.defaults.headers.common["x-auth-token"]=e:delete S.defaults.headers.common["x-auth-token"]},ne=t(104),re=function(e){var a=e.component,t=Object(ne.a)(e,["component"]),o=Object(n.useContext)(A),c=o.autenticado,l=o.usuarioAutenticado,i=o.cargando;return Object(n.useEffect)((function(){l()}),[]),r.a.createElement(p.b,Object.assign({},t,{render:function(e){return c||i?r.a.createElement(a,e):r.a.createElement(p.a,{to:"/"})}}))},oe=t(17),ce=t(204),le=t(99),ie=t(101),ue=t(36),se=t.n(ue),me=function(){var e=Object(E.a)((function(e){return{head:{backgroundColor:"#3f51b5",color:e.palette.common.white},body:{fontSize:14}}}))(v.a),a=Object(E.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}}))(R.a),t=Object(n.useContext)(k),o=t.agregarTurno,c=t.obtenerHorasDisponibles,l=t.turnosDisponibles,i=t.turnos,u=t.cambiarHorarioAtencion,s=Object(n.useContext)(A).usuario,p=Object(n.useState)(new Date),f=Object(d.a)(p,2),x=f[0],T=f[1],S=Object(n.useState)(se()(new Date).format("DD-MM-YYYY")),N=Object(d.a)(S,2),D=N[0],_=N[1],U=Object(n.useState)(!1),M=Object(d.a)(U,2),Y=M[0],G=M[1];Object(n.useEffect)((function(){u(se()(x).day()),c(D)}),[x,i]);var L=function(){var e=Object(h.a)(b.a.mark((function e(a){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==se()(a).day()&&1!==se()(a).day()){e.next=3;break}return console.log("este es el date ",se()(a).day()),e.abrupt("return");case 3:t=se()(a).format("DD-MM-YYYY"),_(t),T(a);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{style:{color:"black"},align:"center"},"Turnero"),r.a.createElement("div",{className:"mb-3",align:"center",style:{backgroundColor:"white"}},r.a.createElement(oe.a,{utils:le.a,locale:ie.a},r.a.createElement(ce.a,{margin:"normal",id:"date-picker-dialog",label:"Fecha de Turno",format:"dd/MM/yyyy",value:x,minDate:se()(new Date).format("YYYY/MM/DD"),maxDate:se()().day(14),onChange:L,KeyboardButtonProps:{"aria-label":"change date"}}))),0===l.length?r.a.createElement("div",{className:"alert alert-danger"},r.a.createElement("h5",null,"No quedan tunos disponibles para el dia  ",D)):r.a.createElement("div",null,r.a.createElement(y.a,{component:C.a},r.a.createElement(g.a,{"aria-label":"customized table"},r.a.createElement(j.a,null,r.a.createElement(R.a,null,r.a.createElement(e,{align:"center"},"Turnos Disponibles para el dia ",D))),r.a.createElement(O.a,null,l.map((function(t,n){return r.a.createElement(a,{key:n},r.a.createElement(e,{component:"th",scope:"row",align:"center",onClick:function(){return function(e){if(i.length>=2&&"Admin"!==s.rol)G(!0);else{var a={fecha:D,hora:e};w.a.fire({title:"Atenci\xf3n",text:"Vas a agendar un turno para el d\xeda ".concat(a.fecha," a las ").concat(a.hora),icon:"question",showConfirmButton:!0,showCancelButton:!0}).then((function(e){e.value&&(o(a),console.log("turno creado"))}))}}(t)}},t))})))))),Y&&r.a.createElement("div",{className:"mt-5 d-flex justify-content-center"},r.a.createElement(B.a,{severity:"warning"},"No puedes agendar mas de dos turnos")),r.a.createElement("div",{className:"mt-5 d-flex justify-content-center"},r.a.createElement(I.a,{variant:"contained",color:"primary"},r.a.createElement(m.b,{style:{color:"white"},to:"/home"},"Volver"))))},pe=function(e,a){switch(a.type){case"MOSTRAR_ALERTA":return{alerta:a.payload};case"OCULTAR_ALERTA":return{alerta:null};default:return e}},de=function(e){var a=Object(n.useReducer)(pe,{alerta:null}),t=Object(d.a)(a,2),o=t[0],c=t[1];return r.a.createElement(X.Provider,{value:{alerta:o.alerta,mostrarAlerta:function(e,a){c({type:"MOSTRAR_ALERTA",payload:{msg:e,categoria:a}}),setTimeout((function(){c({type:"OCULTAR_ALERTA"})}),5e3)}}},e.children)},fe=function(e,a){switch(a.type){case"REGISTRO_EXITOSO":return localStorage.setItem("token",a.payload.token),Object(H.a)(Object(H.a)({},e),{},{autenticado:!0,mensaje:null});case"LOGIN_EXITOSO":return localStorage.setItem("token",a.payload.token),Object(H.a)(Object(H.a)({},e),{},{token:a.payload.token,autenticado:!0,mensaje:null,cargando:!1});case"OBTENER_USUARIO":return Object(H.a)(Object(H.a)({},e),{},{autenticado:!0,usuario:a.payload,cargando:!1});case"REGISTRO_ERROR":case"LOGIN_ERROR":case"CERRAR_SESION":return localStorage.removeItem("token"),Object(H.a)(Object(H.a)({},e),{},{token:null,mensaje:a.payload,autenticado:null,usuario:null,cargando:!1});default:return e}},be=function(e){var a={token:localStorage.getItem("token"),autenticado:null,usuario:null,mensaje:null,cargando:!0},t=Object(n.useReducer)(fe,a),o=Object(d.a)(t,2),c=o[0],l=o[1],i=function(){var e=Object(h.a)(b.a.mark((function e(a){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.post("/api/usuarios",a);case 3:t=e.sent,console.log(t.data),l({type:"REGISTRO_EXITOSO",payload:t.data}),u(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),n={msg:e.t0.response.data.msg,categoria:"alert-danger"},l({type:"REGISTRO_ERROR",payload:n});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(a){return e.apply(this,arguments)}}(),u=function(){var e=Object(h.a)(b.a.mark((function e(){var a,t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=localStorage.getItem("token"))&&te(a),e.prev=2,e.next=5,S.get("/api/auth");case 5:t=e.sent,l({type:"OBTENER_USUARIO",payload:t.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),l({type:"LOGIN_ERROR"});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(h.a)(b.a.mark((function e(a){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.post("/api/auth",a);case 3:t=e.sent,console.log(t.data),l({type:"LOGIN_EXITOSO",payload:t.data}),u(),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response.data.msg),n={msg:e.t0.response.data.msg,categoria:"alert-danger"},l({type:"LOGIN_ERROR",payload:n});case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(A.Provider,{value:{token:c.token,autenticado:c.autenticado,usuario:c.usuario,mensaje:c.mensaje,cargando:c.cargando,registrarUsuario:i,iniciarSesion:s,usuarioAutenticado:u,cerrarSesion:function(){l({type:"CERRAR_SESION"})}}},e.children)},he=t(102),Ee=function(e,a){switch(a.type){case"OBTENER_TURNOS":return Object(H.a)(Object(H.a)({},e),{},{turnos:a.payload});case"AGREGAR_TURNO":return Object(H.a)(Object(H.a)({},e),{},{turnos:[].concat(Object(he.a)(e.turnos),[a.payload])});case"ELIMINAR_TURNO":return Object(H.a)(Object(H.a)({},e),{},{turnos:e.turnos.filter((function(e){return e._id!==a.payload}))});case"OBTENER_TURNOS_X_FECHA":return Object(H.a)(Object(H.a)({},e),{},{turnosDisponibles:e.horarioDeAtencion.filter((function(e){return-1===a.payload.indexOf(e)}))});case"CAMBIAR_HORARIO_X_DIA":if(2===a.payload||5===a.payload)return Object(H.a)(Object(H.a)({},e),{},{horarioDeAtencion:["09:00","10:00","11:00","12:00","13:00"]});if(4===a.payload||6===a.payload)return Object(H.a)(Object(H.a)({},e),{},{horarioDeAtencion:["16:00","17:00","18:00","19:00","20:00"]});if(3===a.payload)return Object(H.a)(Object(H.a)({},e),{},{horarioDeAtencion:["13:00","14:00","15:00","16:00","17:00","18:00"]});default:return e}},ge=function(e){var a=Object(n.useReducer)(Ee,{turnos:[],turnosDisponibles:[],horarioDeAtencion:[]}),t=Object(d.a)(a,2),o=t[0],c=t[1],l=function(){var e=Object(h.a)(b.a.mark((function e(){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.get("/api/turnos");case 3:a=e.sent,c({type:"OBTENER_TURNOS",payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(h.a)(b.a.mark((function e(a){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.get("api/turnos/fecha/".concat(a));case 3:return t=e.sent,n=[],e.next=7,t.data.map((function(e){return n.push(e.hora)}));case 7:c({type:"OBTENER_TURNOS_X_FECHA",payload:n}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(a){return e.apply(this,arguments)}}(),u=function(){var e=Object(h.a)(b.a.mark((function e(a){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.post("/api/turnos",a);case 3:t=e.sent,c({type:"AGREGAR_TURNO",payload:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}(),s=function(){var e=Object(h.a)(b.a.mark((function e(a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.delete("/api/turnos/".concat(a));case 3:c({type:"ELIMINAR_TURNO",payload:a}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(a){return e.apply(this,arguments)}}(),m=function(){var e=Object(h.a)(b.a.mark((function e(a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{c({type:"CAMBIAR_HORARIO_X_DIA",payload:a})}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(k.Provider,{value:{turnos:o.turnos,horarioDeAtencion:o.horarioDeAtencion,turnosDisponibles:o.turnosDisponibles,obtenerTurnos:l,agregarTurno:u,eliminarTurno:s,obtenerHorasDisponibles:i,cambiarHorarioAtencion:m}},e.children)};function Oe(){return r.a.createElement(G.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(m.b,{color:"inherit",to:"https://material-ui.com/"},"DY")," ",(new Date).getFullYear(),".")}var ve=Object(U.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function ye(e){var a=Object(n.useContext)(X),t=a.alerta,o=a.mostrarAlerta,c=Object(n.useContext)(A),l=c.mensaje,i=c.autenticado,u=c.iniciarSesion;Object(n.useEffect)((function(){i&&e.history.push("/home"),l&&o(l.msg,l.categoria)}),[l,i,e.history]);var s=Object(n.useState)({email:"",password:""}),p=Object(d.a)(s,2),f=p[0],b=p[1],h=f.email,E=f.password,g=function(e){b(Object(H.a)(Object(H.a)({},f),{},Object(F.a)({},e.target.name,e.target.value)))},O=ve();return r.a.createElement(Z.a,{component:"main",maxWidth:"xs"},r.a.createElement(V.a,null),r.a.createElement("div",{className:O.paper},r.a.createElement(P.a,{className:O.avatar},r.a.createElement(Q.a,null)),r.a.createElement(G.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:O.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),""!==h.trim()&&""!==E.trim()||o("Todos los campos son obligatorios","alert-danger"),u({email:h,password:E})}},r.a.createElement(z.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",autoFocus:!0,value:h,onChange:g}),r.a.createElement(z.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:E,onChange:g}),r.a.createElement(I.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:O.submit},"Sign In")),r.a.createElement(m.b,{to:"/nueva-cuenta"},"Crear Cuenta"),t&&r.a.createElement(B.a,{severity:"error"},t.msg)),r.a.createElement(J.a,{mt:8},r.a.createElement(Oe,null)))}var je=localStorage.getItem("token");je&&te(je);var Re=function(e){Object(u.a)(t,e);var a=Object(s.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(de,null,r.a.createElement(be,null,r.a.createElement(ge,null,r.a.createElement(m.a,null,r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/",exact:!0,component:ye}),r.a.createElement(p.b,{path:"/nueva-cuenta",exact:!0,component:ae}),r.a.createElement(re,{path:"/home",exact:!0,component:W}),r.a.createElement(re,{path:"/turnero",exact:!0,component:me}))))))}}]),t}(n.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Re,null)),document.getElementById("root"))}},[[126,1,2]]]);
//# sourceMappingURL=main.527fb88d.chunk.js.map