(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[491],{84664:function(Q){Q.exports={formWrap:"formWrap___276Lb",rowWrap:"rowWrap___1Q2qE",listWrap:"listWrap___2GzdK",userName:"userName___3K3PK"}},55632:function(Q){Q.exports={treeWrap:"treeWrap___LOi_-",cover:"cover___3a6dl"}},31567:function(Q,K,e){"use strict";var ee=e(19597),b=e(2291),te=e(37482),m=e(3810),t=e(44742),o=e(67294),W=e(48786);K.Z=function(y){var X=y.buttons,M=y.maxNumber,S=M===void 0?2:M,Y=y.className,fe=y.style,ne=X.filter(function(r){return!r.hidden}),ae=ne.length,ve=function(h){var w=h,I=[];return h.length>S&&(w=h.slice(0,S-1),I=h.slice(S-1)),[w,I]},ue=(0,o.useMemo)(function(){return ve(ne)},[ne]),f=(0,t.Z)(ue,2),he=f[0],C=f[1];return o.createElement("div",{className:Y,style:fe},he.map(function(r,h){var w=r.name,I=r.key,ie=r.onClick,re=r.path,U=o.createElement("a",{style:{marginRight:18},key:I,onClick:re?function(){return W.m8.push(re)}:ie},w);return h!==ae-1?o.createElement(o.Fragment,{key:I},U):U}),C.length>0&&o.createElement(b.Z,{overlay:o.createElement(m.Z,null,C.map(function(r){return o.createElement(m.Z.Item,{onClick:r.path?function(){return W.m8.push(r.path)}:function(){var h;return(h=r.onClick)===null||h===void 0?void 0:h.call(r)}},r.name)}))},o.createElement("a",null,"\u66F4\u591A")))}},57044:function(Q,K,e){"use strict";var ee=e(87753),b=e(98570),te=e(67294);K.Z=function(m){var t=m.value,o=m.onChange,W=m.treeData,y=W===void 0?[]:W,X=function(S){o==null||o(S)};return te.createElement(b.Z,{checkable:!0,onCheck:function(S){return X(S)},checkedKeys:t,treeData:y})}},84850:function(Q,K,e){"use strict";e.d(K,{Z:function(){return te}});var ee=e(44742),b=e(67294);function te(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=(0,b.useState)(!1),o=(0,ee.Z)(t,2),W=o[0],y=o[1],X=(0,b.useState)(""),M=(0,ee.Z)(X,2),S=M[0],Y=M[1];return(0,b.useEffect)(function(){y(m)},[]),{spinning:W,setSpinning:y,tip:S,setTip:Y}}},88491:function(Q,K,e){"use strict";e.r(K),e.d(K,{default:function(){return xe}});var ee=e(13753),b=e(48429),te=e(14643),m=e(92909),t=e(67294),o=e(21191),W=e(49101),y=e(31567),X=e(26780),M=e(46567),S=e(58210),Y=e(87240),fe=e(37092),ne=e(91911),ae=e(13378),ve=e(68137),ue=e(50532),f=e(56361),he=e(67604),C=e(66498),r=e(44742),h=e(46368),w=e(47376),I=e(66827),ie=e(84850),re=e(48786),U=e(66594),Ce=e(57044),Ie=e(55632),ge=e.n(Ie),Ze={labelCol:{span:3},wrapperCol:{span:20}},De={labelCol:{span:3},wrapperCol:{span:10}},ye=function(u){var F=u.visible,d=u.toggleVisible,i=u.formData,H=u.loading,L=u.reload,g=u.currentUser,R=C.Z.useForm(),k=(0,r.Z)(R,1),n=k[0],E=(0,ie.Z)(),P=E.tip,A=E.setTip,Z=i.id,B=g||{},G=B.orgCode,z=(0,re.tT)("@@initialState"),N=z.initialState,le=N||{},v=le.authResourceData,s=(0,t.useState)(!1),a=(0,r.Z)(s,2),c=a[0],D=a[1];(0,t.useEffect)(function(){if(!(0,h.Z)(i)){var T=i||{},J=T.resourceList,se=J===void 0?[]:J,de=se.map(function(x){return x.id});n.setFieldsValue((0,f.Z)((0,f.Z)({},i),{},{resourceIds:de,modalResourceIds:de}))}return function(){n.resetFields()}},[i]);var V=function(){d(),n.resetFields()},_=function(J){A("\u6570\u636E\u4FDD\u5B58\u4E2D\uFF0C\u8BF7\u7A0D\u5019...");var se=(0,f.Z)((0,f.Z)({},J),{},{clientKey:U.OW.clientId,id:Z,businessValue:G});return API.authorization.resourceRole.resourceSave.fetch(se)},oe=(0,I.QT)(_,{manual:!0,onSuccess:function(){m.default.success("\u4FDD\u5B58\u6210\u529F"),n.resetFields(),d(),L==null||L()}}),O=oe.run,q=oe.loading;return t.createElement(C.Z,(0,ae.Z)({form:n,onFinish:O},De),t.createElement(M.Z,{centered:!0,visible:F,forceRender:!0,maskClosable:!1,title:"".concat((0,w.Z)(Z)?"\u65B0\u5EFA":"\u7F16\u8F91","\u89D2\u8272"),okButtonProps:{htmlType:"submit"},width:800,onOk:function(){return n.submit()},onCancel:V,confirmLoading:q},t.createElement(Y.Z,{spinning:H&&q,tip:P},t.createElement(C.Z.Item,{label:"\u89D2\u8272\u540D\u79F0",name:"role",rules:[{whitespace:!0},{required:!0}]},t.createElement(ue.Z,{placeholder:"\u8BF7\u8F93\u5165"})),t.createElement(C.Z.Item,(0,ae.Z)({label:"\u89D2\u8272\u63CF\u8FF0",name:"comment"},Ze,{rules:[{whitespace:!0}]}),t.createElement(ue.Z,{placeholder:"\u8BF7\u8F93\u5165"})),t.createElement("div",{className:ge().treeWrap},t.createElement("div",{className:ge().cover,onClick:function(){return D(!0)}}),t.createElement(C.Z.Item,{label:"\u62E5\u6709\u8D44\u6E90",name:"resourceIds"},t.createElement(ne.Z,{treeData:v,allowClear:!0,multiple:!0,placeholder:"\u8BF7\u9009\u62E9"}))))),t.createElement(M.Z,{centered:!0,visible:c,forceRender:!0,maskClosable:!1,title:"\u62E5\u6709\u8D44\u6E90",width:412,onOk:function(){n.setFieldsValue({resourceIds:n.getFieldValue("modalResourceIds")}),D(!1)},onCancel:function(){n.setFieldsValue({modalResourceIds:n.getFieldValue("resourceIds")}),D(!1)},confirmLoading:q},t.createElement(C.Z.Item,{label:"\u62E5\u6709\u8D44\u6E90",name:"modalResourceIds",noStyle:!0},t.createElement(Ce.Z,{treeData:v}))))},Me=(0,re.$j)(function(l){var u=l.user;return{currentUser:u.currentUser}})(ye),Ue=e(66518),Ee=e(95322),ze=e(44862),Re=e(42091),Ae=e(50189),Se=e(3855),Fe=e(84664),ce=e.n(Fe),me=e(89193),Le={page:1,pageSize:6},Pe={labelCol:{span:6},wrapperCol:{span:16}},Oe=function(l){var u=l.visible,F=l.toggleVisible,d=l.formData,i=l.reload,H=C.Z.useForm(),L=(0,r.Z)(H,1),g=L[0],R=(0,ie.Z)(),k=R.tip,n=R.setTip,E=d.id,P=(0,t.useState)([]),A=(0,r.Z)(P,2),Z=A[0],B=A[1],G=(0,me.x)(Le),z=(0,r.Z)(G,2),N=z[0],le=z[1],v=(0,I.QT)(API.platform.sysUser.pageList.fetch,{manual:!0}),s=v.data,a=v.run,c=v.loading,D=(0,I.QT)(API.authorization.resourceRole.resourceRoleDetailUser.fetch,{manual:!0,onSuccess:function(p){var $=p.userIdList,j=$===void 0?[]:$;B(j)}}),V=D.run,_=D.loading;(0,t.useEffect)(function(){u&&(a(N),V({clientKey:U.OW.clientId,roleId:E}))},[u,N]),(0,t.useEffect)(function(){return(0,h.Z)(d)||g.setFieldsValue((0,f.Z)({},d)),function(){g.resetFields()}},[d]);var oe=function(){F(),g.resetFields()},O=function(){return n("\u6570\u636E\u4FDD\u5B58\u4E2D\uFF0C\u8BF7\u7A0D\u5019..."),API.authorization.resourceRole.resourceSave.fetch({clientKey:U.OW.clientId,id:E,userIds:Z.map(function(p){return+p}),resourceIds:d.resourceIds,role:d.role})},q=(0,I.QT)(O,{manual:!0,onSuccess:function(){m.default.success("\u6388\u6743\u6210\u529F"),g.resetFields(),F(),i==null||i()}}),T=q.run,J=q.loading,se=function(p,$){var j=(0,Ae.Z)(Z);p.target.checked?j.push(+$.userId):j=j.filter(function(Ke){return Ke!==$.userId}),B(j)},de=function(p){return t.createElement(Ee.ZP.Item,null,t.createElement(Re.Z,{checked:Z.includes(+p.userId),onChange:function(j){return se(j,p)}},t.createElement("div",{className:ce().userName},p.userName,p.phone?"(".concat(p.phone.slice(-4),")"):"")))};return t.createElement(M.Z,{centered:!0,visible:u,forceRender:!0,maskClosable:!1,title:"\u7528\u6237\u6388\u6743",okButtonProps:{htmlType:"submit"},width:442,onOk:function(){return g.submit()},onCancel:oe,confirmLoading:J,wrapClassName:"auth-modal"},t.createElement(Y.Z,{spinning:c&&J&&_,tip:k},t.createElement(C.Z,(0,ae.Z)({form:g,onFinish:T},Pe,{className:ce().formWrap}),t.createElement(C.Z.Item,{label:"\u4F01\u4E1A\u7F16\u7801",name:"account",tooltip:{icon:t.createElement(Se.Z,null),title:"\u4F01\u4E1A\u7F16\u7801\u5C06\u4F5C\u4E3A\u4F01\u4E1A\u4E0B\u6240\u6709\u8D26\u53F7\u540E\u7F00"},noStyle:!0},t.createElement(Ee.ZP,{loading:c,className:ce().listWrap,size:"small",dataSource:s==null?void 0:s.list,pagination:(0,f.Z)((0,f.Z)({},N),{},{current:N.page,onChange:function(p){le(function($){$.page=p})},showQuickJumper:!0}),renderItem:de})))))},Te=e(68699),be=e(94043),pe=e.n(be),We=e(27870),Be=function(){var l=(0,t.useRef)(),u=(0,me.x)({visible:!1,formData:{},loading:!1}),F=(0,r.Z)(u,2),d=F[0],i=F[1],H=(0,me.x)({visible:!1,formData:{}}),L=(0,r.Z)(H,2),g=L[0],R=L[1],k=l.current||{},n=k.reload,E=(0,I.QT)(API.authorization.role.update.fetch,{manual:!0,onSuccess:function(){m.default.success("\u64CD\u4F5C\u6210\u529F"),n==null||n()}}),P=E.run,A=(0,I.QT)(API.authorization.resourceRole.resourceDelete.fetch,{manual:!0,onSuccess:function(){m.default.success("\u5220\u9664\u6210\u529F"),n==null||n()}}),Z=A.run,B=function(){var v=(0,Te.Z)(pe().mark(function s(a){var c,D,V,_;return pe().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,API.platform.sysRole.pageList.fetch((0,We.HO)((0,f.Z)((0,f.Z)({},a),{},{page:(a==null?void 0:a.current)||U.ii.page,pageSize:(a==null?void 0:a.pageSize)||U.ii.pageSize})));case 2:return c=O.sent,D=c.list,V=c.page,_=c.total,O.abrupt("return",{data:D||[],page:V,success:!0,total:_});case 7:case"end":return O.stop()}},s)}));return function(a){return v.apply(this,arguments)}}(),G=function(s){i(function(a){a.visible=!0,a.loading=!0,a.formData=s})},z=function(){i(function(s){s.visible=!0,s.formData={}})},N=function(s){var a=s.resourceList,c=a===void 0?[]:a;R(function(D){D.visible=!0,D.formData=(0,f.Z)((0,f.Z)({},s),{},{resourceIds:c.map(function(V){return V.id})})})},le=function(s){var a={edit:i,auth:R};a[s](function(c){c.visible=!1,c.loading=!1,c.formData={}})};return{actionRef:l,reload:n,editModalConfig:d,setEditModalConfig:i,authModalConfig:g,setAuthModalConfig:R,handleDisable:P,handleDelete:Z,fetchList:B,handleRoleEdit:G,handleRoleAdd:z,handleAuthorize:N,handleModalHide:le}},xe=function(){var l=Be(),u=l.actionRef,F=l.reload,d=l.editModalConfig,i=l.fetchList,H=l.handleRoleAdd,L=l.handleRoleEdit,g=l.handleModalHide,R=l.authModalConfig,k=l.handleAuthorize,n=[{title:"\u89D2\u8272\u540D\u79F0",dataIndex:"role",align:"left",copyable:!1,valueType:"text",hideInSearch:!1},{title:"\u89D2\u8272\u63CF\u8FF0",dataIndex:"comment",align:"left",copyable:!1,valueType:"text",hideInSearch:!0},{title:"\u62E5\u6709\u8D44\u6E90",dataIndex:"resourceList",align:"left",copyable:!1,valueType:"text",hideInSearch:!0,render:function(P,A){var Z=A||{},B=Z.resourceList,G=B===void 0?[]:B;return G.map(function(z){return z.description}).join(",")}},{title:"\u64CD\u4F5C",dataIndex:"id",align:"left",copyable:!1,valueType:"text",hideInSearch:!0,render:function(P,A){return t.createElement(y.Z,{buttons:[{name:"\u7F16\u8F91",key:"edit",onClick:function(){return L(A)}},{name:"\u6388\u6743",key:"authorize",onClick:function(){return k(A)}}]})}}];return t.createElement(t.Fragment,null,t.createElement(o.ZP,{style:{padding:"18px 22px"},actionRef:u,request:i,onRequestError:function(P){console.error(P.message),m.default.error("\u6570\u636E\u52A0\u8F7D\u5931\u8D25,".concat(P.message))},columns:n,bordered:!0,rowKey:"id",pagination:{size:"default"},dateFormatter:"string",headerTitle:"\u83DC\u5355\u6743\u9650\u5217\u8868",tableAlertRender:!1,toolBarRender:function(){return[t.createElement(b.Z,{onClick:H,key:"add",type:"primary"},t.createElement(W.Z,null),"\u65B0\u5EFA")]}}),t.createElement(Me,{visible:d.visible,formData:d.formData,loading:d.loading,toggleVisible:function(){return g("edit")},reload:F}),t.createElement(Oe,{visible:R.visible,formData:R.formData,toggleVisible:function(){return g("auth")},reload:F}))}}}]);
