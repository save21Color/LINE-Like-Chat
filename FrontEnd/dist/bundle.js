!function(e){function t(t){for(var r,c,s=t[0],u=t[1],i=t[2],p=0,m=[];p<s.length;p++)c=s[p],o[c]&&m.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(l&&l(t);m.length;)m.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={0:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var l=u;a.push([378,1]),n()}({368:function(e,t){},378:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(23),a=n(21),c=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),s=function(e){function t(t){return e.call(this,t)||this}return c(t,e),t.prototype.render=function(){return r.createElement("div",null,"main.")},t}(r.Component),u=n(27),i=Object(u.actionCreatorFactory)(),l={login:i("LOGIN"),logout:i("LOGOUT"),changeShowPassword:i("CHANGE_SHOWPASSWORD"),updateUserid:i("UPDATE_USERID"),updatePassword:i("UPDATE_PASSWORD")},p=n(33),m=n.n(p),f=n(103),d=n.n(f),h=n(52),O=n.n(h),b=n(160),g=n.n(b),E=n(159),v=n.n(E),y=n(158),w=n.n(y),j=n(24),N=n.n(j),I=n(156),_=n.n(I),C=n(161),S=n.n(C),T=n(157),A=n.n(T),R=n(43),P=n.n(R),U=n(379),x=Object(U.withStyles)({card:{maxWidth:400,height:300},fullScreen:{height:"100%"}})(function(e){return r.createElement("div",{className:e.classes.fullScreen},r.createElement(N.a,{className:e.classes.fullScreen,container:!0,alignItems:"center",justify:"center",direction:"row"},r.createElement(N.a,{item:!0,xs:12},r.createElement(N.a,{container:!0,alignItems:"center",justify:"center",direction:"row"},r.createElement(_.a,{className:e.classes.card},r.createElement(A.a,null,r.createElement(N.a,{container:!0,alignItems:"center",justify:"center",direction:"row"},r.createElement(N.a,{item:!0,xs:12},r.createElement(P.a,{type:"text",value:e.userid,label:"email",fullWidth:!0,onChange:function(t){return e.updateUserid(t.target.value)},InputProps:{startAdornment:r.createElement(O.a,{position:"start"},r.createElement(d.a,null,"account_box")),endAdornment:r.createElement(O.a,{position:"end"},"@cs-ltd.co.jp")}})),r.createElement(N.a,{item:!0,xs:12},r.createElement(P.a,{type:e.showPassword?"text":"password",value:e.password,label:"password",fullWidth:!0,onChange:function(t){return e.updatePassword(t.target.value)},InputProps:{startAdornment:r.createElement(O.a,{position:"start"},r.createElement(d.a,null,"lock")),endAdornment:r.createElement(O.a,{position:"end"},r.createElement(w.a,{"aria-label":"Toggle password visibility",onClick:e.changeShowPassword},e.showPassword?r.createElement(v.a,null):r.createElement(g.a,null)))}})))),r.createElement(S.a,null,r.createElement(m.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:function(){e.login(),e.history.push("/main")}},"ログイン")))))))}),L=n(380);var D=Object(L.a)(Object(a.connect)(function(e){return Object.assign({},e.login)},function(e){return{updateUserid:function(t){return e(l.updateUserid(t))},updatePassword:function(t){return e(l.updatePassword(t))},changeShowPassword:function(){return e(l.changeShowPassword())},login:function(){return e(l.login())},logout:function(){return e(l.logout())}}})(x)),M=Object(u.actionCreatorFactory)(),k={connectRoom:M("CONNECT_ROOM"),exitRoom:M("EXIT_CHATROOM"),updateTodo:M("UPDATE_TODO"),nowinputTodo:M("NOWINPUT_TODO"),removeNowInput:M("REMOVE_NOWINPUT"),updateName:M("UPDATE_NAME"),sendTodo:M("SEND_TODO"),receiveTodo:M("RECEIVE_TODO"),removeTodo:M("REMOVE_TODO"),requestAllLog:M("REQUEST_ALLLOG"),receiveAllLog:M("RECEIVE_ALLLOG")},G=n(74),W=n.n(G),V=n(104),q=n.n(V),B=n(77),H=n.n(B),J=n(78),F=n.n(J),Q=n(70),X=n.n(Q),z=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),K=function(e){function t(t){var n=e.call(this,t)||this;return n.state={roomId:t.roomId,roomName:t.roomName,userId:t.userId,userName:t.userName,textValue:"",isEnter:!0,message:[],input:t.input},n}return z(t,e),t.prototype.componentWillMount=function(){this.props.connectRoom(),this.props.requestAllLog()},t.prototype.render=function(){var e=this;return r.createElement("div",{className:this.props.classes.root,id:"ChatArea"},r.createElement("div",{className:"Message"},r.createElement(H.a,{position:"static",color:"default"},r.createElement(F.a,null,r.createElement(X.a,{color:"inherit"},this.props.roomId," : ",this.props.roomName))),this.props.message.map(function(t){for(var n=t.split(":"),o=n[0],a=n[1],c=n[2],s=c.length/20,u=[],i=1;i<=s;i+=1){var l=20*i;u.push(""+c.slice(0,l)+r.createElement("br",null)+c.slice(l))}return r.createElement("div",{className:e.props.classes.msg},e.props.userId===o?r.createElement(N.a,{className:e.props.classes.send},r.createElement(W.a,{className:e.props.classes.name},a),r.createElement("br",null),r.createElement(q.a,{className:e.props.classes.Chip,label:c,color:"primary"})):r.createElement(N.a,{className:e.props.classes.receive},r.createElement(W.a,{className:e.props.classes.name},a),r.createElement("br",null),r.createElement(q.a,{className:e.props.classes.Chip,label:""+c,color:"secondary"})),r.createElement("br",null))})),r.createElement("div",{className:"ChatBox"},r.createElement("div",{className:this.props.classes.inputState},this.props.input.isInput?r.createElement("div",null,this.props.input.userName,"さんが入力しています..."):r.createElement("div",null)),r.createElement(N.a,null,r.createElement(P.a,{multiline:!0,rows:1,label:"name",name:"name",value:this.props.userName,onChange:function(t){e.props.updateName(t.target.value)}})),r.createElement(N.a,null,r.createElement(P.a,{multiline:!0,rows:4,name:"text",label:"chat",value:this.props.textValue,onChange:function(t){e.props.updateTodo(e.props.userId+":"+e.props.userName+":"+t.target.value)}}))),r.createElement("br",null),r.createElement(m.a,{variant:"raised",color:"primary",onClick:function(){e.props.sendTodo(e.props.userId+":"+e.props.userName+":"+e.props.textValue),e.props.removeTodo()}},"送信"),r.createElement(m.a,{variant:"contained",onClick:function(){e.props.exitRoom(),e.props.history.push("/main")}},"退出"))},t}(r.Component),Y=Object(U.withStyles)({root:{height:"100%",overflow:"auto"},msg:{position:"relative",width:"400px",height:"100px"},inputState:{fontSize:"0.8em",font:"grey"},name:{fontSize:"0.7em"},send:{textAlign:"right"},receive:{textAlign:"left"},Chip:{font:"grey"}})(K);var Z=Object(L.a)(Object(a.connect)(function(e){return Object.assign({},e.chatroom)},function(e){return{connectRoom:function(){return e(k.connectRoom())},exitRoom:function(){return e(k.exitRoom())},updateTodo:function(t){return e(k.updateTodo(t))},nowinputTodo:function(t){return e(k.nowinputTodo(t))},removeNowInput:function(t){return e(k.removeNowInput(t))},updateName:function(t){return e(k.updateName(t))},sendTodo:function(t){return e(k.sendTodo(t))},removeTodo:function(){return e(k.removeTodo())},requestAllLog:function(){return e(k.requestAllLog())},receiveAllLog:function(t){return e(k.receiveAllLog(t))},receiveTodo:function(t){return e(k.receiveTodo(t))}}})(Y)),$=n(50),ee=n(34),te=n(28),ne=Object(te.reducerWithInitialState)({userid:"",password:"",showPassword:!1,isSuccess:!1}).case(l.updateUserid,function(e,t){return Object.assign({},e,{userid:t})}).case(l.updatePassword,function(e,t){return Object.assign({},e,{password:t})}).case(l.changeShowPassword,function(e){var t=!e.showPassword;return Object.assign({},e,{showPassword:t})}).case(l.login,function(e){return localStorage.setItem("currentUser",JSON.stringify({currentUser:e.userid,password:e.password,isLoggedIn:!0})),e.isSuccess=!0,Object.assign({},e)}).case(l.logout,function(e){return Object.assign({},e,{})}),re={init:Object(u.actionCreatorFactory)()("INIT")},oe=Object(te.reducerWithInitialState)({currentUser:"",password:"",isLoggedIn:!1}).case(re.init,function(e){return Object.assign({},e,{})}),ae={updateOpenChat:Object(u.actionCreatorFactory)()("UPDATE_OPEN_CHAT")},ce=Object(u.actionCreatorFactory)(),se={requestAllChat:ce("REQUEST_ALL_CHAT"),receiveAllChat:ce("RECEIVE_ALL_CHAT"),updateOpen:ce("UPDATE_OPEN"),updateSelectedRoom:ce("UPDATE_SELECTED_ROOM")},ue=Object(te.reducerWithInitialState)({openChat:!1}).case(ae.updateOpenChat,function(e,t){return Object.assign({},e,{openChat:t})}).case(se.updateSelectedRoom,function(e){return Object.assign({},e,{openChat:!1})}),ie={userId:function(){var e=localStorage.getItem("currentUser");return e?JSON.parse(e).currentUser:""}(),roomList:[],open:!1,selectedRoom:{roomId:"",roomName:""}},le=Object(te.reducerWithInitialState)(ie).case(se.requestAllChat,function(e,t){return Object.assign({},e,{userId:t})}).case(se.receiveAllChat,function(e,t){return e.roomList=t,Object.assign({},e)}).case(se.updateOpen,function(e,t){return Object.assign({},e,{open:t})}).case(k.exitRoom,function(e){return e.open=!1,Object.assign({},e,{open:e.open})}).case(se.updateSelectedRoom,function(e,t){var n={roomId:t.roomId,roomName:t.roomName};return Object.assign({},e,{selectedRoom:n})}),pe=Object(te.reducerWithInitialState)({roomId:"",roomName:"",userId:"",userName:"名無し",textValue:"",isEnter:!1,message:[],input:{isInput:!1,userName:""}}).case(k.exitRoom,function(e){return e.isEnter=!1,e.roomId="",e.roomName="",e.message=[],e.textValue="",e.input.isInput=!1,e.input.userName="",localStorage.removeItem("selectedRoom"),Object.assign({},e)}).case(k.connectRoom,function(e){var t,n=localStorage.getItem("currentUser");return t=n?JSON.parse(n):{currentUser:"NullId"},e.userId=t.currentUser,Object.assign({},e,{userId:e.userId})}).case(k.updateTodo,function(e,t){var n=t.split(":");return e.textValue=n[2],Object.assign({},e)}).case(k.nowinputTodo,function(e,t){return e.userName!==t.userName?(e.input.userName=t.userName,e.input.isInput=!0,sessionStorage.setItem("inputNow",JSON.stringify({userName:e.input.userName,isInput:e.input.isInput})),Object.assign({},e,{inputState:t})):e}).case(k.removeNowInput,function(e,t){return console.log("入力状況をリセットします"),e.userName!==t.userName&&e.input.userName===t.userName?(e.input.isInput=t.isInput,e.input.userName="",Object.assign({},e,{inputState:t})):e}).case(k.updateName,function(e,t){return e.userName=t,Object.assign({},e)}).case(k.sendTodo,function(e,t){return Object.assign({},e,{message:e.message.concat(t)})}).case(k.receiveTodo,function(e,t){sessionStorage.setItem("receive",JSON.stringify({log:t}));var n=t.split(":");return e.input.userName="",e.input.isInput=!1,e.userId!==n[0]?Object.assign({},e,{message:e.message.concat(t)}):e}).case(k.removeTodo,function(e){return e.textValue="",Object.assign({},e)}).case(k.receiveAllLog,function(e,t){return e.message=t,Object.assign({},e)}).case(se.updateSelectedRoom,function(e,t){return e.roomId=t.roomId,e.roomName=t.roomName,sessionStorage.setItem("nowRoom",JSON.stringify({roomId:t.roomId,roomName:t.roomName})),Object.assign({},e)}).case(k.requestAllLog,function(e){return Object.assign({},e)}),me=Object(ee.c)({login:ne,user:ne,authentication:oe,appMenu:ue,chatMenu:le,chatroom:pe}),fe=n(162),de=n.n(fe),he=n(51),Oe=n(7),be=n(79),ge=n.n(be),Ee=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function c(e){try{u(r.next(e))}catch(e){a(e)}}function s(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(c,s)}u((r=r.apply(e,t||[])).next())})},ve=function(e,t){var n,r,o,a,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,r=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){c=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){c.label=a[1];break}if(6===a[0]&&c.label<o[1]){c.label=o[1],o=a;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(a);break}o[2]&&c.ops.pop(),c.trys.pop();continue}a=t.call(e,c)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},ye=function(){return Ee(void 0,void 0,void 0,function(){return ve(this,function(e){switch(e.label){case 0:return[4,ge.a.get("/ChatRoomList/req")];case 1:return[2,e.sent()]}})})};function we(){var e;return ve(this,function(t){switch(t.label){case 0:return[4,Object(Oe.a)(ye)];case 1:return e=t.sent(),[4,Object(Oe.e)(se.receiveAllChat(e.data))];case 2:return t.sent(),[2]}})}function je(){return ve(this,function(e){switch(e.label){case 0:return[4,Object(Oe.g)("REQUEST_ALL_CHAT",we)];case 1:return e.sent(),[2]}})}var Ne,Ie=function(e,t){var n,r,o,a,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,r=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){c=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){c.label=a[1];break}if(6===a[0]&&c.label<o[1]){c.label=o[1],o=a;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(a);break}o[2]&&c.ops.pop(),c.trys.pop();continue}a=t.call(e,c)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};function _e(e){return Ie(this,function(t){switch(t.label){case 0:return Ne={roomId:e.payload.roomId,roomName:e.payload.roomName},[4,Object(Oe.e)(ae.updateOpenChat(!1))];case 1:return t.sent(),[2]}})}function Ce(){return Ie(this,function(e){switch(e.label){case 0:return[4,Object(Oe.g)("UPDATE_SELECTED_ROOM",_e)];case 1:return e.sent(),[2]}})}var Se,Te=n(163),Ae=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function c(e){try{u(r.next(e))}catch(e){a(e)}}function s(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(c,s)}u((r=r.apply(e,t||[])).next())})},Re=function(e,t){var n,r,o,a,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,r=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){c=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){c.label=a[1];break}if(6===a[0]&&c.label<o[1]){c.label=o[1],o=a;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(a);break}o[2]&&c.ops.pop(),c.trys.pop();continue}a=t.call(e,c)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},Pe={roomId:"",roomName:""},Ue="名無し";function xe(){return new Promise(function(e,t){e(),t()}).then(function(){return Te()})}function Le(){return Ae(this,void 0,void 0,function(){var e;return Re(this,function(t){switch(t.label){case 0:return[4,ge.a.get("/ChatRoom/sendReq")];case 1:return e=t.sent(),console.log(e),[2,e]}})})}function De(e){return Object(he.c)(function(t){return e.on("RECEIVE_TODO",function(e){t(k.receiveTodo(e))}),e.on("RECEIVE_ALLLOG",function(e){t(k.receiveAllLog(e))}),e.on("NOWINPUT_TODO",function(e){if(e.split(":")[2]){n={isInput:!0,userName:e.split(":")[1]};t(k.nowinputTodo(n))}else{var n={isInput:!1,userName:e.split(":")[1]};t(k.removeNowInput(n))}}),function(){}})}function Me(e){var t,n;return Re(this,function(r){switch(r.label){case 0:return t=void 0,[4,Object(Oe.f)("SEND_TODO")];case 1:return t=r.sent(),[4,Object(Oe.c)()];case 2:return r.sent()?[3,3]:(Ue=t.payload.split(":")[1],n=t.payload,e.emit("SEND_TODO",n,Se.currentUser,Pe.roomId),[3,0]);case 3:return[2]}})}function ke(e){var t,n;return Re(this,function(r){switch(r.label){case 0:return[4,Object(Oe.f)("REQUEST_ALLLOG")];case 1:return t=r.sent(),e.emit("DEBUG",t),[4,Object(Oe.a)(Le)];case 2:return n=r.sent(),[4,Object(Oe.e)(k.receiveAllLog(n.data))];case 3:return r.sent(),[2]}})}function Ge(e){var t,n;return Re(this,function(r){switch(r.label){case 0:return e.emit("DEBUG","wait..."),[4,Object(Oe.a)(De,e)];case 1:t=r.sent(),r.label=2;case 2:return[4,Object(Oe.f)(t)];case 3:return n=r.sent(),[4,Object(Oe.c)()];case 4:return r.sent()?[3,6]:(e.emit("DEBUG",n),[4,Object(Oe.e)(n)]);case 5:return r.sent(),[3,2];case 6:return[2]}})}function We(e){var t;return Re(this,function(n){switch(n.label){case 0:return[4,Object(Oe.f)("UPDATE_TODO")];case 1:return t=n.sent(),[4,Object(Oe.c)()];case 2:return n.sent()?[3,3]:(e.emit("DEBUG",t.payload),e.emit("UPDATE_TODO",t.payload),[3,0]);case 3:return[2]}})}function Ve(e){var t,n,r,o;return Re(this,function(a){switch(a.label){case 0:return[4,Object(Oe.f)("CONNECT_ROOM")];case 1:return a.sent(),t=localStorage.getItem("currentUser"),Se=t?JSON.parse(t):{currentUser:"NullId"},Pe.roomId=Ne.roomId,Pe.roomName=Ne.roomName,e.emit("ENTER_ROOM",Pe.roomId,Pe.roomName,Se.currentUser),sessionStorage.setItem("selectedRoom",JSON.stringify({selectRoom:Ne})),[4,Object(Oe.d)(Me,e)];case 2:return n=a.sent(),[4,Object(Oe.d)(Ge,e)];case 3:return r=a.sent(),[4,Object(Oe.d)(We,e)];case 4:return o=a.sent(),e.emit("INFORMATION",Ue+"さんが入室しました。"),Object(he.b)(1e3),[4,Object(Oe.f)("EXIT_CHATROOM")];case 5:return a.sent(),[4,Object(Oe.b)(n)];case 6:return a.sent(),[4,Object(Oe.b)(r)];case 7:return a.sent(),[4,Object(Oe.b)(o)];case 8:return a.sent(),[2]}})}function qe(){var e,t,n;return Re(this,function(r){switch(r.label){case 0:return[4,Object(Oe.a)(xe)];case 1:e=r.sent(),r.label=2;case 2:return[4,Object(Oe.d)(ke,e)];case 3:return t=r.sent(),[4,Object(Oe.d)(Ve,e)];case 4:return n=r.sent(),[4,Object(Oe.f)("EXIT_CHATROOM")];case 5:return r.sent(),e.emit("EXIT_CHATROOM",Se.currentUser),e.emit("INFORMATION",Ue+"さんが退出しました。"),e.emit("DEBUG",t),e.emit("DEBUG",n),[4,Object(Oe.b)(n)];case 6:return r.sent(),[4,Object(Oe.b)(t)];case 7:return r.sent(),e.emit("DEBUG",t),e.emit("DEBUG",n),[4,Object(Oe.g)("UPDATE_SELECTED_ROOM",_e)];case 8:return r.sent(),[4,Object(Oe.g)("REQUEST_ALL_CHAT",we)];case 9:return r.sent(),[3,2];case 10:return[2]}})}function Be(){return Re(this,function(e){switch(e.label){case 0:return[4,Object(Oe.d)(qe)];case 1:return e.sent(),[2]}})}var He=de()(),Je=(0,he.a)(),Fe=Object(ee.d)(Object(ee.a)(Object($.routerMiddleware)(He),Je));var Qe=n(383),Xe=n(381),ze=n(382),Ke=n(80),Ye=n.n(Ke),Ze=n(168),$e=n.n(Ze),et=n(75),tt=n.n(et),nt=n(105),rt=n.n(nt),ot=n(164),at=n.n(ot),ct=n(106),st=n.n(ct),ut=n(167),it=n.n(ut),lt=n(165),pt=n.n(lt),mt=n(166),ft=n.n(mt),dt=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),ht=function(e){function t(t){var n=e.call(this,t)||this;return n.state={userId:t.userId,roomList:t.roomList,open:!1,selectedRoom:t.selectedRoom},n}return dt(t,e),t.prototype.componentWillMount=function(){this.props.requestAllChat(this.props.userId)},t.prototype.render=function(){var e=this,t=this.props.classes;return r.createElement("div",null,r.createElement(tt.a,{className:t.root,component:"nav"},r.createElement(rt.a,{button:!0,onClick:function(){return e.props.updateOpen(!e.props.open)}},r.createElement(at.a,null,r.createElement(Ye.a,null)),r.createElement(st.a,{inset:!0,primary:"chat"}),this.state.open?r.createElement(pt.a,null):r.createElement(ft.a,null)),r.createElement(it.a,{in:this.props.open,timeout:"auto",unmountOnExit:!0},r.createElement(tt.a,{component:"div",disablePadding:!0},this.props.roomList.map(function(n){return r.createElement(rt.a,{button:!0,className:t.nested,onClick:function(){e.props.updateSelectedRoom(n),e.props.history.push("/ChatRoom")}},r.createElement(st.a,{inset:!0,primary:n.roomName}))})))))},t}(r.Component),Ot=Object(U.withStyles)(function(e){return Object(U.createStyles)({root:{width:200},nested:{paddingLeft:4*e.spacing.unit,fontSize:8}})})(ht);var bt=Object(L.a)(Object(a.connect)(function(e){return Object.assign({},e.chatMenu)},function(e){return{requestAllChat:function(t){return e(se.requestAllChat(t))},receiveAllChat:function(t){return e(se.receiveAllChat(t))},updateOpen:function(t){return e(se.updateOpen(t))},updateSelectedRoom:function(t){return e(se.updateSelectedRoom(t))}}})(Ot)),gt=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Et=function(e){function t(t){var n=e.call(this,t)||this;return n.state={openChat:n.props.openChat},n}return gt(t,e),t.prototype.render=function(){var e=this,t=this.props.classes;return r.createElement("div",{className:t.root},r.createElement(H.a,{position:"static"},r.createElement(F.a,null,r.createElement(m.a,{className:t.menuButton,color:"inherit",onClick:function(){return e.props.updateOpenChat(!e.props.openChat)}},r.createElement(Ye.a,null),"chat"),r.createElement($e.a,{open:this.props.openChat,onClose:function(){return e.props.updateOpenChat(!1)}},r.createElement("div",{tabIndex:0,role:"button",onKeyDown:function(){return e.props.updateOpenChat(!1)}},r.createElement(bt,null))))))},t}(r.Component),vt=Object(U.withStyles)(function(e){return Object(U.createStyles)({root:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},nested:{paddingLeft:4*e.spacing.unit}})})(Et);var yt=Object(L.a)(Object(a.connect)(function(e){return Object.assign({},e.appMenu)},function(e){return{updateOpenChat:function(t){return e(ae.updateOpenChat(t))}}})(vt)),wt=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),jt=function(e){function t(t){var n=e.call(this,t)||this;return n.state={currentUser:"",password:"",isLoggedIn:!1},n}return wt(t,e),t.prototype.componentWillMount=function(){this.getCurrentUser()},t.prototype.getCurrentUser=function(){var e=localStorage.getItem("currentUser");if(e){var t=JSON.parse(e);this.setState({currentUser:t.userid,password:t.password,isLoggedIn:!0})}},t.prototype.componentWillReceiveProps=function(e){console.log(e),this.getCurrentUser(),console.log(this.state)},t.prototype.render=function(){return this.state.isLoggedIn?r.createElement("div",null,r.createElement(yt,null),r.createElement(Xe.a,{children:this.props.children})):r.createElement(ze.a,{to:"/login"})},t}(r.Component);var Nt=Object(a.connect)(function(e){return Object.assign({},e.authentication)},function(e){return{getCurrentUser:function(){return e(re.init())}}})(jt),It=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),_t=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return It(t,e),t.prototype.render=function(){return r.createElement("div",{className:this.props.classes.root},r.createElement($.ConnectedRouter,{history:He},r.createElement(Qe.a,null,r.createElement(Xe.a,{exact:!0,path:"/login",component:D}),r.createElement(Nt,null,r.createElement(Qe.a,null,r.createElement(Xe.a,{exact:!0,path:"/main",component:s}),r.createElement(Xe.a,{exact:!0,path:"/ChatRoom",component:Z}),r.createElement(Xe.a,{render:function(){return r.createElement(ze.a,{to:"/login"})}}))))))},t}(r.Component),Ct=Object(U.withStyles)({root:{height:"100%"}})(_t);n.d(t,"store",function(){return St});var St=function(e){var t=Object(ee.e)(Object($.connectRouter)(He)(me),e,Fe);return Je.run(je),Je.run(Ce),Je.run(Be),t}({value:""});o.render(r.createElement(a.Provider,{store:St},r.createElement(Ct,null)),document.getElementById("root"))}});