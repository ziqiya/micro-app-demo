(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[987],{78732:function(d,i,_){"use strict";var s=_(58210),c=_(87240),o=_(67294);i.Z=function(e){var a=e.loading;return a&&o.createElement(c.Z,{size:"large",className:"loadingIcon"})}},30304:function(d,i,_){"use strict";_.r(i);var s=_(56361),c=_(44742),o=_(67294),e=_(19170),a=_.n(e),r=_(75263),f=_(48786),u=_(78732),l=_(34416),t=_(66594),n;console.log("__MICRO_APP_BASE_ROUTE__",window.__MICRO_APP_BASE_ROUTE__);function E(v){var O=(0,o.useState)(!0),P=(0,c.Z)(O,2),U=P[0],D=P[1];function M(m){var h=m||{},C=h.payload,I=h.type,A=v.dispatch;if(I==="setCurrentUser"){var L=C||{},B=L.realname,R=L.avatar,g=(0,s.Z)((0,s.Z)({},C),{},{userName:B,avatar:R});A({type:"user/setCurrentUser",payload:g}),n=g}}return(0,o.useEffect)(function(){return r.ZP.addDataListener(t.u6.BI_SHENG,M),function(){r.ZP.removeDataListener(t.u6.BI_SHENG,M),r.ZP.clearDataListener(t.u6.BI_SHENG)}},[]),a()("div",{style:{height:"100%"}},a()(u.Z,{loading:U}),a()("micro-app",{name:t.u6.BI_SHENG,baseRoute:"/".concat(t.u6.BI_SHENG),url:"".concat(l.Z.biSheng),"keep-alive":!0,onMounted:function(){return D(!1)},onAftershow:function(){n&&v.dispatch({type:"user/setCurrentUser",payload:n}),D(!1)},data:{logoutUrl:l.G}}))}i.default=(0,f.$j)(function(v){var O=v.user;return{currentUser:O.currentUser}})(E)},19170:function(d,i,_){var s=_(67294),c=["oncreated","onbeforemount","onmounted","onunmount","onerror","ondatachange","onbeforeshow","onaftershow","onafterhidden"];function o(e,a){for(var r=arguments.length,f=new Array(r>2?r-2:0),u=2;u<r;u++)f[u-2]=arguments[u];if(typeof e!="string"||!/^micro-app(-\S+)?/.test(e)||!a)return s.createElement.apply(null,[e,a].concat(f));var l=Object.assign({},a);return l.ref=function(t){if(typeof a.ref=="function"?a.ref(t):typeof a.ref=="object"&&(a.ref.current=t),t){toString.call(a.data)==="[object Object]"&&t.data!==a.data&&(t.data=a.data);for(var n in a)if(Object.prototype.hasOwnProperty.call(a,n)&&c.includes(n.toLowerCase())&&typeof a[n]=="function"&&(!t[n]||t[n]!==a[n])){var E=n.toLowerCase().replace("on","");t[n]&&t.removeEventListener(E,t[n],!1),t.addEventListener(E,a[n],!1),t[n]=a[n]}}},s.createElement.apply(null,[e,l].concat(f))}d.exports=o,d.exports.default=o}}]);