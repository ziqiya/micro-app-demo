(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[492],{78732:function(h,E,e){"use strict";var u=e(58210),n=e(87240),_=e(67294);E.Z=function(s){var a=s.loading;return a&&_.createElement(n.Z,{size:"large",className:"loadingIcon"})}},61126:function(h,E,e){"use strict";e.r(E);var u=e(99463),n=e(26780),_=e(46567),s=e(60360),a=e(66646),m=e(78845),o=e(35317),c=e(19170),i=e.n(c),r=e(67294),l=e(7085),d=e(75263),A=e(48786),T=e(78732),v=e(66594),U=e(34416),S=i()(l.Z,{style:{fontSize:30},spin:!0}),N=function(P){(0,m.Z)(D,P);var M=(0,o.Z)(D);function D(){var t;(0,s.Z)(this,D);for(var p=arguments.length,C=new Array(p),O=0;O<p;O++)C[O]=arguments[O];return t=M.call.apply(M,[this].concat(C)),t.state={data:{name:"\u521D\u59CB\u5316\u6570\u636E"},name:"dataFront",showLoading:!0,showMicroApp:!0,testNum:0,modal1:!1},t.handleCreated=function(){console.log("\u751F\u547D\u5468\u671F\uFF1Acreated -- ".concat(t.state.name))},t.beforemount=function(f){console.log("\u751F\u547D\u5468\u671F\uFF1Abeforemount -- ".concat(t.state.name),f)},t.mounted=function(){console.timeEnd("mounted-".concat(t.state.name)),console.log("\u751F\u547D\u5468\u671F\uFF1Amounted -- ".concat(t.state.name),document.querySelector("micro-app")),t.setState({showLoading:!1}),d.ZP.setGlobalData({showDropDown:!0})},t.unmount=function(){console.log("\u751F\u547D\u5468\u671F\uFF1Aunmount -- ".concat(t.state.name),document.querySelector("#micro-app-template-style"))},t.error=function(f){console.log("\u751F\u547D\u5468\u671F\uFF1Aerror -- ".concat(t.state.name),f)},t.handleBeforeshow=function(f){console.log("\u751F\u547D\u5468\u671F\uFF1Akeep-alive beforeshow -- ".concat(t.state.name),f)},t.handleAftershow=function(f){d.ZP.setGlobalData({showDropDown:!0}),console.timeEnd("mounted-".concat(t.state.name)),console.log("\u751F\u547D\u5468\u671F\uFF1Akeep-alive aftershow -- ".concat(t.state.name),document.querySelector("micro-app")),t.setState({showLoading:!1})},t.handleAfterhidden=function(f){console.log("\u751F\u547D\u5468\u671F\uFF1Akeep-alive afterhidden -- ".concat(t.state.name),f),d.ZP.setGlobalData({showDropDown:!1})},t.changeData=function(){t.setState({data:{name:+new Date}})},t.dispatchData=function(){d.ZP.setData(t.state.name,{dispatch:"data from dispatch"+ +new Date})},t.dispatchGlobalData=function(){d.ZP.setGlobalData({name:"\u5168\u5C40\u6570\u636E"+ +new Date})},t.handleDataChange=function(f){console.log("\u901A\u8FC7\u751F\u547D\u5468\u5468\u671F\u76D1\u542C\u5230\u6765\u81EA\u5B50\u5E94\u7528\u7684\u6570\u636E",f),_.Z.info({title:"\u6765\u81EA\u5B50\u5E94\u7528\u7684\u6570\u636E",content:i()("div",null,i()("p",null,JSON.stringify(f.detail.data))),onOk:function(){}})},t.toggleShow=function(){t.setState({showMicroApp:!t.state.showMicroApp})},t.changeNameUrl=function(){t.setState({name:"vue2",url:"".concat(U.Z.vue2,"micro-app/vue2")})},t.handleModal=function(){t.setState({modal1:!t.state.modal1})},t.handleUnmountMySelf=function(){t.setState({showMicroApp:!1},function(){(0,d.wp)(t.state.name,{clearAliveState:!0}).then(function(){console.log("unmountApp\u65B9\u6CD5 -- \u5378\u8F7D\u6210\u529F")})})},t.handleGlobalDataForBaseApp=function(f){console.log("\u8FD9\u662F\u5168\u5C40\u6570\u636E--\u57FA\u5EA7\u5E94\u7528-".concat(t.state.name),f)},t}return(0,a.Z)(D,[{key:"componentDidMount",value:function(){console.time("mounted-".concat(this.state.name)),d.ZP.addDataListener(this.state.name,function(p){console.log("\u6765\u81EA\u5B50\u5E94\u7528dataFront\u7684\u6570\u636E",p)}),this.props.dispatch({type:"user/setCurrentUser",payload:{userName:"admin",avatar:v.q$}}),d.ZP.addGlobalDataListener(this.handleGlobalDataForBaseApp)}},{key:"componentWillUnmount",value:function(){d.ZP.clearDataListener(this.state.name),d.ZP.removeGlobalDataListener(this.handleGlobalDataForBaseApp)}},{key:"render",value:function(){var p;return i()(r.Fragment,null,i()(T.Z,{loading:this.state.showLoading}),i()("micro-app",(p={name:v.u6.DATA_FRONT,baseRoute:"/".concat(v.u6.DATA_FRONT),url:"".concat(U.Z.dataFront,"micro-app/dataFront"),data:this.state.data,onCreated:this.handleCreated,onBeforemount:this.beforemount,onMounted:this.mounted,onUnmount:this.unmount,onError:this.error,onBeforeshow:this.handleBeforeshow,onAftershow:this.handleAftershow,onAfterhidden:this.handleAfterhidden,onDataChange:this.handleDataChange},(0,u.Z)(p,"data",{logoutUrl:U.G}),(0,u.Z)(p,"keep-alive",!0),p)))}}]),D}(r.Component);E.default=(0,A.$j)(function(P){var M=P.user;return{currentUser:M.currentUser}})(N)},19170:function(h,E,e){var u=e(67294),n=["oncreated","onbeforemount","onmounted","onunmount","onerror","ondatachange","onbeforeshow","onaftershow","onafterhidden"];function _(s,a){for(var m=arguments.length,o=new Array(m>2?m-2:0),c=2;c<m;c++)o[c-2]=arguments[c];if(typeof s!="string"||!/^micro-app(-\S+)?/.test(s)||!a)return u.createElement.apply(null,[s,a].concat(o));var i=Object.assign({},a);return i.ref=function(r){if(typeof a.ref=="function"?a.ref(r):typeof a.ref=="object"&&(a.ref.current=r),r){toString.call(a.data)==="[object Object]"&&r.data!==a.data&&(r.data=a.data);for(var l in a)if(Object.prototype.hasOwnProperty.call(a,l)&&n.includes(l.toLowerCase())&&typeof a[l]=="function"&&(!r[l]||r[l]!==a[l])){var d=l.toLowerCase().replace("on","");r[l]&&r.removeEventListener(d,r[l],!1),r.addEventListener(d,a[l],!1),r[l]=a[l]}}},u.createElement.apply(null,[s,i].concat(o))}h.exports=_,h.exports.default=_},31064:function(h,E,e){"use strict";e.d(E,{m:function(){return m}});var u=function(){return{height:0,opacity:0}},n=function(c){return{height:c.scrollHeight,opacity:1}},_=function(c){return{height:c.offsetHeight}},s=function(c,i){return i.propertyName==="height"},a={motionName:"ant-motion-collapse",onAppearStart:u,onEnterStart:u,onAppearActive:n,onEnterActive:n,onLeaveStart:_,onLeaveActive:u,onAppearEnd:s,onEnterEnd:s,onLeaveEnd:s,motionDeadline:500},m=function(c,i,r){return r!==void 0?r:"".concat(c,"-").concat(i)};E.Z=a},55835:function(h,E,e){"use strict";e.d(E,{jD:function(){return n},GL:function(){return _},fk:function(){return a}});var u=e(20064),n=function(){return(0,u.Z)()&&window.document.documentElement},_=function(o){if(n()){var c=Array.isArray(o)?o:[o],i=window.document.documentElement;return c.some(function(r){return r in i.style})}return!1},s,a=function(){if(!n())return!1;if(s!==void 0)return s;var o=document.createElement("div");return o.style.display="flex",o.style.flexDirection="column",o.style.rowGap="1px",o.appendChild(document.createElement("div")),o.appendChild(document.createElement("div")),document.body.appendChild(o),s=o.scrollHeight===1,document.body.removeChild(o),s}},80207:function(h,E,e){"use strict";e.d(E,{Z:function(){return u}});function u(n,_){return n?n.contains(_):!1}},52621:function(h,E){"use strict";var e={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(n){var _=n.keyCode;if(n.altKey&&!n.ctrlKey||n.metaKey||_>=e.F1&&_<=e.F12)return!1;switch(_){case e.ALT:case e.CAPS_LOCK:case e.CONTEXT_MENU:case e.CTRL:case e.DOWN:case e.END:case e.ESC:case e.HOME:case e.INSERT:case e.LEFT:case e.MAC_FF_META:case e.META:case e.NUMLOCK:case e.NUM_CENTER:case e.PAGE_DOWN:case e.PAGE_UP:case e.PAUSE:case e.PRINT_SCREEN:case e.RIGHT:case e.SHIFT:case e.UP:case e.WIN_KEY:case e.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(n){if(n>=e.ZERO&&n<=e.NINE||n>=e.NUM_ZERO&&n<=e.NUM_MULTIPLY||n>=e.A&&n<=e.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&n===0)return!0;switch(n){case e.SPACE:case e.QUESTION_MARK:case e.NUM_PLUS:case e.NUM_MINUS:case e.NUM_PERIOD:case e.NUM_DIVISION:case e.SEMICOLON:case e.DASH:case e.EQUALS:case e.COMMA:case e.PERIOD:case e.SLASH:case e.APOSTROPHE:case e.SINGLE_QUOTE:case e.OPEN_SQUARE_BRACKET:case e.BACKSLASH:case e.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};E.Z=e},75840:function(h,E,e){"use strict";var u=e(67294),n=e(73935),_=e(20064),s=(0,u.forwardRef)(function(a,m){var o=a.didUpdate,c=a.getContainer,i=a.children,r=(0,u.useRef)();(0,u.useImperativeHandle)(m,function(){return{}});var l=(0,u.useRef)(!1);return!l.current&&(0,_.Z)()&&(r.current=c(),l.current=!0),(0,u.useEffect)(function(){o==null||o(a)}),(0,u.useEffect)(function(){return function(){var d,A;(d=r.current)===null||d===void 0||(A=d.parentNode)===null||A===void 0||A.removeChild(r.current)}},[]),r.current?n.createPortal(i,r.current):null});E.Z=s}}]);
