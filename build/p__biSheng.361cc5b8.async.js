(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[987],{78732:function(d,i,t){"use strict";var s=t(58210),c=t(87240),r=t(67294);i.Z=function(_){var a=_.loading;return a&&r.createElement(c.Z,{size:"large",className:"loadingIcon"})}},30304:function(d,i,t){"use strict";t.r(i);var s=t(56361),c=t(44742),r=t(67294),_=t(19170),a=t.n(_),o=t(75263),f=t(48786),u=t(78732),l=t(34416),e=t(66594),n;function E(v){var D=(0,r.useState)(!0),O=(0,c.Z)(D,2),U=O[0],P=O[1];function M(m){var h=m||{},g=h.payload,A=h.type,I=v.dispatch;if(A==="setCurrentUser"){var L=g||{},p=L.realname,B=L.avatar,C=(0,s.Z)((0,s.Z)({},g),{},{userName:p,avatar:B});I({type:"user/setCurrentUser",payload:C}),n=C}}return(0,r.useEffect)(function(){return o.ZP.addDataListener("biSheng",M),function(){o.ZP.removeDataListener("biSheng",M),o.ZP.clearDataListener("biSheng")}},[]),a()("div",{style:{height:"100%"}},a()(u.Z,{loading:U}),a()("micro-app",{name:e.u6.BI_SHENG,baseRoute:"/".concat(e.u6.BI_SHENG),url:"".concat(l.Z.biSheng),"keep-alive":!0,onMounted:function(){return P(!1)},onAftershow:function(){n&&v.dispatch({type:"user/setCurrentUser",payload:n}),P(!1)},data:{logoutUrl:l.G}}))}i.default=(0,f.$j)(function(v){var D=v.user;return{currentUser:D.currentUser}})(E)},19170:function(d,i,t){var s=t(67294),c=["oncreated","onbeforemount","onmounted","onunmount","onerror","ondatachange","onbeforeshow","onaftershow","onafterhidden"];function r(_,a){for(var o=arguments.length,f=new Array(o>2?o-2:0),u=2;u<o;u++)f[u-2]=arguments[u];if(typeof _!="string"||!/^micro-app(-\S+)?/.test(_)||!a)return s.createElement.apply(null,[_,a].concat(f));var l=Object.assign({},a);return l.ref=function(e){if(typeof a.ref=="function"?a.ref(e):typeof a.ref=="object"&&(a.ref.current=e),e){toString.call(a.data)==="[object Object]"&&e.data!==a.data&&(e.data=a.data);for(var n in a)if(Object.prototype.hasOwnProperty.call(a,n)&&c.includes(n.toLowerCase())&&typeof a[n]=="function"&&(!e[n]||e[n]!==a[n])){var E=n.toLowerCase().replace("on","");e[n]&&e.removeEventListener(E,e[n],!1),e.addEventListener(E,a[n],!1),e[n]=a[n]}}},s.createElement.apply(null,[_,l].concat(f))}d.exports=r,d.exports.default=r}}]);
