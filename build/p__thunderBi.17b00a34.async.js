(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[636],{78732:function(E,f,a){"use strict";var u=a(58210),c=a(87240),_=a(67294);f.Z=function(r){var t=r.loading;return t&&_.createElement(c.Z,{size:"large",className:"loadingIcon"})}},76013:function(E,f,a){"use strict";a.r(f);var u=a(56361),c=a(44742),_=a(67294),r=a(19170),t=a.n(r),o=a(75263),d=a(48786),i=a(78732),l=a(34416),e;function n(s){var v=(0,_.useState)(!0),D=(0,c.Z)(v,2),g=D[0],O=D[1];function P(m){var M=m||{},h=M.payload,C=M.type,U=s.dispatch;if(C==="setCurrentUser"){var B=h.name,p=h.profile_image_url,L=(0,u.Z)((0,u.Z)({},h),{},{userName:B,avatar:p});U({type:"user/setCurrentUser",payload:L}),e=L}}return(0,_.useEffect)(function(){return o.ZP.addDataListener("thunderBi",P),function(){o.ZP.removeDataListener("thunderBi",P),o.ZP.clearDataListener("thunderBi")}},[]),t()("div",{style:{height:"100%"}},t()(i.Z,{loading:g}),t()("micro-app",{name:"thunderBi",baseRoute:"/thunderBi",url:l.Z.thunderBi,onMounted:function(){return O(!1)},onAftershow:function(){e&&s.dispatch({type:"user/setCurrentUser",payload:e}),O(!1)},"keep-alive":!0,data:{logoutUrl:l.G}}))}f.default=(0,d.$j)(function(s){var v=s.user;return{currentUser:v.currentUser}})(n)},19170:function(E,f,a){var u=a(67294),c=["oncreated","onbeforemount","onmounted","onunmount","onerror","ondatachange","onbeforeshow","onaftershow","onafterhidden"];function _(r,t){for(var o=arguments.length,d=new Array(o>2?o-2:0),i=2;i<o;i++)d[i-2]=arguments[i];if(typeof r!="string"||!/^micro-app(-\S+)?/.test(r)||!t)return u.createElement.apply(null,[r,t].concat(d));var l=Object.assign({},t);return l.ref=function(e){if(typeof t.ref=="function"?t.ref(e):typeof t.ref=="object"&&(t.ref.current=e),e){toString.call(t.data)==="[object Object]"&&e.data!==t.data&&(e.data=t.data);for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&c.includes(n.toLowerCase())&&typeof t[n]=="function"&&(!e[n]||e[n]!==t[n])){var s=n.toLowerCase().replace("on","");e[n]&&e.removeEventListener(s,e[n],!1),e.addEventListener(s,t[n],!1),e[n]=t[n]}}},u.createElement.apply(null,[r,l].concat(d))}E.exports=_,E.exports.default=_}}]);