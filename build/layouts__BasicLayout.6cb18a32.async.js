(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[34],{57775:function(Q,h,e){"use strict";e.r(h);var L=e(13378),D=e(44742),f=e(56361),V=e(50111),W=e(55419),X=e(13753),I=e(48429),T=e(92374),n=e(67294),u=e(54276),i=e(48786),O=e(15486),g=e(62210),A=e(82405),B=e(54200),K=e.n(B),Y=e(75263),y=e(66845),d=e.n(y),S=e(35510),Z=e.n(S),v=e(96486),k=e.n(v),j=n.createElement(W.ZP,{status:403,title:"403",subTitle:"Sorry, you are not authorized to access this page.",extra:n.createElement(I.Z,{type:"primary"},n.createElement(u.rU,{to:"/user/login"},"Go Login"))}),b=function o(_){return _.map(function(a){if(a.hidden)return null;var E=(0,f.Z)((0,f.Z)({},a),{},{children:a.children?o(a.children):void 0});return O.Z.check(a.authority,E,null)})},z=function(_){var a=_.dispatch,E=_.children,$=_.settings,P=_.location,m=P===void 0?{pathname:"/"}:P,C=(0,n.useRef)([]),x=(0,n.useState)(!1),R=(0,D.Z)(x,2),w=R[0],q=R[1],N=(0,n.useState)(!1),p=(0,D.Z)(N,2),ee=p[0],te=p[1];(0,n.useEffect)(function(){a&&a({type:"user/fetchCurrent"})},[]),(0,n.useEffect)(function(){var l=_.location||{},t=l.pathname,s=t===void 0?"":t;/^\/authorization\/?$/.test(s)&&i.m8.replace("/authorization/resource/list")},[_]);var G=function(t){a&&a({type:"global/changeLayoutCollapsed",payload:t})},U=function(t,s){var c=t.customIcon,M=t.name,r=t.pro_layout_parentKeys,F=r===void 0?[]:r,J=!(0,v.isEmpty)(F);return n.createElement("div",{className:Z()(J?d().childMenuItem:d().menuItemWrap)},n.createElement("img",{src:e(56680)("./".concat(c,".png")),alt:M}),n.createElement("div",{className:d().menuTitle},s))},H=(0,n.useMemo)(function(){return(0,A.nG)(m.pathname||"/",C.current).pop()||{authority:void 0}},[m.pathname]);return n.createElement(T.ZP,(0,L.Z)({logo:K()},_,$,{onCollapse:G,onMenuHeaderClick:function(){return i.m8.push("/")},menuItemRender:function(t,s){return t.isUrl||!t.path||m.pathname===t.path?U(t,s):n.createElement(u.rU,{to:t.path},U(t,s))},splitMenus:!0,itemRender:function(t,s,c,M){var r=c.indexOf(t)===0;return r?n.createElement(u.rU,{to:M.join("/")},t.breadcrumbName):n.createElement("span",null,t.breadcrumbName)},footerRender:function(){return null},menuDataRender:b,rightContentRender:function(){return n.createElement(g.Z,null)},postMenuData:function(t){return C.current=t||[],t||[]}}),n.createElement(O.Z,{authority:H.authority,noMatch:j},E))};h.default=(0,i.$j)(function(o){var _=o.global,a=o.settings;return{collapsed:_.collapsed,settings:a}})(z)}}]);