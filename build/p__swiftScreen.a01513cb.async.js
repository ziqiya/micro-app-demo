(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[154],{78732:function(E,f,e){"use strict";var i=e(58210),c=e(87240),_=e(67294);f.Z=function(r){var t=r.loading;return t&&_.createElement(c.Z,{size:"large",className:"loadingIcon"})}},38571:function(E,f,e){"use strict";e.r(f);var i=e(56361),c=e(44742),_=e(67294),r=e(19170),t=e.n(r),o=e(75263),l=e(48786),u=e(78732),d=e(34416),a;function n(s){var v=(0,_.useState)(!0),O=(0,c.Z)(v,2),g=O[0],P=O[1];function M(m){var L=m||{},D=L.payload,C=L.type,U=s.dispatch;if(C==="setCurrentUser"){var p=D.name,A=D.profile_image_url,h=(0,i.Z)((0,i.Z)({},D),{},{userName:p,avatar:A});U({type:"user/setCurrentUser",payload:h}),a=h}}return(0,_.useEffect)(function(){return o.ZP.addDataListener("swiftScreen",M),function(){o.ZP.removeDataListener("swiftScreen",M),o.ZP.clearDataListener("swiftScreen")}},[]),t()("div",{style:{height:"100%"}},t()(u.Z,{loading:g}),t()("micro-app",{name:"swiftScreen",url:d.Z.swiftScreen,onMounted:function(){return P(!1)},onAftershow:function(){a&&s.dispatch({type:"user/setCurrentUser",payload:a}),P(!1)},baseRoute:"/swift-screen","keep-alive":!0,data:{logoutUrl:d.G}}))}f.default=(0,l.$j)(function(s){var v=s.user;return{currentUser:v.currentUser}})(n)},19170:function(E,f,e){var i=e(67294),c=["oncreated","onbeforemount","onmounted","onunmount","onerror","ondatachange","onbeforeshow","onaftershow","onafterhidden"];function _(r,t){for(var o=arguments.length,l=new Array(o>2?o-2:0),u=2;u<o;u++)l[u-2]=arguments[u];if(typeof r!="string"||!/^micro-app(-\S+)?/.test(r)||!t)return i.createElement.apply(null,[r,t].concat(l));var d=Object.assign({},t);return d.ref=function(a){if(typeof t.ref=="function"?t.ref(a):typeof t.ref=="object"&&(t.ref.current=a),a){toString.call(t.data)==="[object Object]"&&a.data!==t.data&&(a.data=t.data);for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&c.includes(n.toLowerCase())&&typeof t[n]=="function"&&(!a[n]||a[n]!==t[n])){var s=n.toLowerCase().replace("on","");a[n]&&a.removeEventListener(s,a[n],!1),a.addEventListener(s,t[n],!1),a[n]=t[n]}}},i.createElement.apply(null,[r,d].concat(l))}E.exports=_,E.exports.default=_}}]);