(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[818],{34950:function(z,Z){"use strict";Object.defineProperty(Z,"__esModule",{value:!0});var e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"}}]},name:"exclamation-circle",theme:"outlined"};Z.default=e},3855:function(z,Z,e){"use strict";var te,U=e(95318),k=e(20862);te={value:!0},Z.Z=void 0;var m=k(e(67294)),Q=U(e(34950)),H=U(e(92074)),R=function(t,J){return m.createElement(H.default,Object.assign({},t,{ref:J,icon:Q.default}))};R.displayName="ExclamationCircleOutlined";var G=m.forwardRef(R);Z.Z=G},78863:function(z){z.exports={formWrap:"formWrap___3eS8c",rowWrap:"rowWrap___3VEOz",description:"description___bi6uK"}},79920:function(z){z.exports={formWrap:"formWrap___19ekr",rowWrap:"rowWrap___1jzhp",description:"description___2a_68"}},57044:function(z,Z,e){"use strict";var te=e(87753),U=e(98570),k=e(67294),m=e(96486),Q=e.n(m);Z.Z=function(H){var R=H.value,G=R===void 0?[]:R,T=H.onChange,t=H.treeData,J=t===void 0?[]:t,p=function(ae,ne){var le=ne||{},w=le.node,X=le.checked,ue=w||{},q=ue.children,ie=q===void 0?[]:q,I=ae.checked,g=function se(o){if(!(!o||(0,m.isEmpty)(o))){var j=o.map(function(F){return F.key});X||(I=I.filter(function(F){return!j.includes(F)})),o.forEach(function(F){(0,m.isEmpty)(F.children)||se(F.children)})}};g(ie),T==null||T(I)};return k.createElement(U.Z,{checkable:!0,defaultExpandAll:!0,onCheck:p,checkedKeys:G,treeData:J,checkStrictly:!0})}},39818:function(z,Z,e){"use strict";e.r(Z),e.d(Z,{default:function(){return We}});var te=e(13753),U=e(48429),k=e(14643),m=e(92909),Q=e(68699),H=e(26780),R=e(46567),G=e(94043),T=e.n(G),t=e(67294),J=e(21191),p=e(66594),oe=e(49101),ae=e(96689),ne=e(31567),le=e(58210),w=e(87240),X=e(13378),ue=e(74393),q=e(88995),ie=e(68137),I=e(50532),g=e(56361),se=e(67604),o=e(66498),j=e(44742),F=e(46368),ve=e(47376),L=e(66827),de=e(84850),he=e(3678),pe=e(95951),ge=e(32615),Ee=e(3855),ye=e(79920),Y=e.n(ye),Ce=e(42348),Ze=e(35510),Ie=e.n(Ze),Fe=e(56051),Ae=e.n(Fe),re=e(27870),ce=e(48786),me={labelCol:{span:8},wrapperCol:{span:14}},De={labelCol:{span:4},wrapperCol:{span:19}},Se=function(a){var x=a.visible,E=a.toggleVisible,n=a.formData,A=a.loading,f=a.reload,P=o.Z.useForm(),V=(0,j.Z)(P,1),r=V[0],y=(0,de.Z)(),c=y.tip,$=y.setTip,v=n.id,B=(0,ce.tT)("company"),i=B.reloadCompanyData;(0,t.useEffect)(function(){return(0,F.Z)(n)||r.setFieldsValue((0,g.Z)((0,g.Z)({},n),{},{validBefore:n.validBefore?Ae()(n.validBefore):null,logo:n!=null&&n.logo?[{uid:"1",name:"logo",status:"done",url:n==null?void 0:n.logo,size:0}]:[]})),function(){r.resetFields()}},[n]);var D=function(){E(),r.resetFields()},b=(0,L.QT)(API.platform.sysOrg.update.fetch,{onSuccess:function(){return i()},manual:!0}),K=b.run,N=(0,L.QT)(API.platform.sysOrg.save.fetch,{onSuccess:function(){return i()},manual:!0}),S=N.run,C=function(O){$("\u6570\u636E\u4FDD\u5B58\u4E2D\uFF0C\u8BF7\u7A0D\u5019...");var h=(0,re.HO)((0,g.Z)((0,g.Z)((0,g.Z)({},n),O),{},{logo:O.logo.map(function(W){return W.url||W.response.data.url})[0]}));return v?K(h):S(h)},u=(0,L.QT)(C,{manual:!0,onSuccess:function(){m.default.success("\u4FDD\u5B58\u6210\u529F"),r.resetFields(),E(),f==null||f()}}),l=u.run,d=u.loading;return t.createElement(R.Z,{centered:!0,visible:x,forceRender:!0,maskClosable:!1,title:"".concat((0,ve.Z)(v)?"\u65B0\u5EFA":"\u7F16\u8F91","\u4F01\u4E1A"),okButtonProps:{htmlType:"submit"},width:800,onOk:function(){return r.submit()},onCancel:D,confirmLoading:d},t.createElement(w.Z,{spinning:A&&d,tip:c},t.createElement(o.Z,(0,X.Z)({form:r,onFinish:l},me,{className:Y().formWrap}),t.createElement(o.Z.Item,{label:"\u4F01\u4E1A\u7F16\u7801",name:"orgCode",tooltip:{icon:t.createElement(Ee.Z,null),title:"\u4F01\u4E1A\u7F16\u7801\u5C06\u4F5C\u4E3A\u4F01\u4E1A\u4E0B\u6240\u6709\u8D26\u53F7\u540E\u7F00"},rules:[{whitespace:!0},{required:!0}]},t.createElement(I.Z,{placeholder:"\u8BF7\u8F93\u5165"})),t.createElement(o.Z.Item,{label:"\u4F01\u4E1A\u540D\u79F0",name:"orgName",rules:[{whitespace:!0}]},t.createElement(I.Z,{placeholder:"\u8BF7\u8F93\u5165"})),t.createElement("div",{className:Y().rowWrap},t.createElement(he.Z,{formItemProps:me,label:"\u4F01\u4E1Alogo",name:"logo",maxCount:1,accept:pe.b1.\u56FE\u7247.join(","),uploadProps:{listType:"picture-card"},required:!0,requiredMessage:"\u8BF7\u4E0A\u4F20"},t.createElement(ge.Z,null))),t.createElement("div",{className:Y().rowWrap},t.createElement(o.Z.Item,{label:"\u4F01\u4E1A\u4EE3\u7801",name:"enterpriseCode",rules:[{whitespace:!0}]},t.createElement(I.Z,{placeholder:"\u8BF7\u8F93\u5165"}))),t.createElement(o.Z.Item,{label:"\u8D1F\u8D23\u4EBA",name:"director",rules:[{whitespace:!0}]},t.createElement(I.Z,{placeholder:"\u8BF7\u8F93\u5165"})),t.createElement(o.Z.Item,{label:"\u8D1F\u8D23\u4EBA\u624B\u673A\u53F7",name:"phone",rules:[{whitespace:!0},{required:!0},{validator:Ce.tH}]},t.createElement(I.Z,{placeholder:"\u8BF7\u8F93\u5165"})),t.createElement(o.Z.Item,{label:"\u6709\u6548\u671F",name:"validBefore"},t.createElement(q.Z,null)),t.createElement("div",{className:Ie()(Y().rowWrap,Y().description)},t.createElement(o.Z.Item,(0,X.Z)({label:"\u63CF\u8FF0",name:"description",rules:[{whitespace:!0}]},De),t.createElement(I.Z,{placeholder:"\u8BF7\u8F93\u5165"}))))))},Oe=e(3911),Me=e(78863),Re=e.n(Me),Te=e(57044),xe=e(96486),Be={labelCol:{span:6},wrapperCol:{span:16}},Pe=function(a){var x=a.visible,E=a.toggleVisible,n=a.formData,A=a.loading,f=a.reload,P=o.Z.useForm(),V=(0,j.Z)(P,1),r=V[0],y=(0,de.Z)(),c=y.tip,$=y.setTip,v=n.directorRoleId,B=(0,ce.tT)("@@initialState"),i=B.initialState,D=i||{},b=D.authResourceData,K=(0,L.QT)(function(s){return API.authorization.resource.listUserResourceData.fetch({clientKey:p.OW.clientId,roleId:s})},{manual:!0,onSuccess:function(O){var h=[];O.forEach(function(W){var M=W.id,_=W.privilegeList,ee=_===void 0?[]:_;h.push(M),(0,F.Z)(ee)||ee.forEach(function(ze){h.push(ze.id)})}),r.setFieldsValue({resourceIds:h})}}),N=K.run;(0,t.useEffect)(function(){x&&N(v)},[x]),(0,t.useEffect)(function(){return(0,F.Z)(n)||r.setFieldsValue(n),function(){r.resetFields()}},[n]);var S=function(){E(),r.resetFields()},C=function(O){var h=O.resourceIds,W=h===void 0?[]:h,M=(0,Oe.Z)(O,["resourceIds"]);$("\u6570\u636E\u4FDD\u5B58\u4E2D\uFF0C\u8BF7\u7A0D\u5019...");var _=(0,re.HO)((0,g.Z)((0,g.Z)({},M),{},{clientKey:p.OW.clientId,id:v,resourceIds:W.filter(function(ee){return(0,xe.isNumber)(ee)})}));return API.platform.sysRole.resourceSave.fetch(_)},u=(0,L.QT)(C,{manual:!0,onSuccess:function(){m.default.success("\u4FDD\u5B58\u6210\u529F"),r.resetFields(),E(),f==null||f()}}),l=u.run,d=u.loading;return t.createElement(R.Z,{centered:!0,visible:x,forceRender:!0,maskClosable:!1,title:"\u4F01\u4E1A\u6388\u6743",okButtonProps:{htmlType:"submit"},width:412,onOk:function(){return r.submit()},onCancel:S,confirmLoading:d},t.createElement(w.Z,{spinning:A&&d,tip:c},t.createElement(o.Z,(0,X.Z)({form:r,onFinish:l},Be,{className:Re().formWrap}),t.createElement(o.Z.Item,{label:"\u6743\u9650\u5217\u8868",name:"resourceIds",noStyle:!0},t.createElement(Te.Z,{treeData:b})))))},fe=e(89193),be=function(){var a=(0,t.useRef)(),x=(0,fe.x)({visible:!1,formData:{},loading:!1}),E=(0,j.Z)(x,2),n=E[0],A=E[1],f=(0,fe.x)({visible:!1,formData:{},loading:!1}),P=(0,j.Z)(f,2),V=P[0],r=P[1],y=a.current||{},c=y.reload,$=(0,L.QT)(API.platform.sysOrg.updateStatus.fetch,{manual:!0,onSuccess:function(){m.default.success("\u64CD\u4F5C\u6210\u529F"),c==null||c()}}),v=$.run,B=(0,L.QT)(API.authorization.resourceRole.resourceDelete.fetch,{manual:!0,onSuccess:function(){m.default.success("\u5220\u9664\u6210\u529F"),c==null||c()}}),i=B.run,D=function(){var C=(0,Q.Z)(T().mark(function u(l){var d,s,O,h;return T().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,API.platform.sysOrg.pageList.fetch((0,re.HO)((0,g.Z)((0,g.Z)({},l),{},{page:(l==null?void 0:l.current)||p.ii.page,pageSize:(l==null?void 0:l.pageSize)||p.ii.pageSize})));case 2:return d=M.sent,s=d.list,O=d.page,h=d.total,M.abrupt("return",{data:s||[],page:O,success:!0,total:h});case 7:case"end":return M.stop()}},u)}));return function(l){return C.apply(this,arguments)}}(),b=function(u){A(function(l){l.visible=!0,l.loading=!0,l.formData=u})},K=function(){A(function(u){u.visible=!0,u.formData={}})},N=function(u){r(function(l){l.visible=!0,l.loading=!0,l.formData=u})},S=function(u){var l={edit:A,auth:r};l[u](function(d){d.visible=!1,d.loading=!1,d.formData={}})};return{actionRef:a,reload:c,editModalConfig:n,setEditModalConfig:A,authModalConfig:V,setAuthModalConfig:r,handleDelete:i,fetchList:D,handleCompanyEdit:b,handleUpdateStatus:v,handleCompanyAdd:K,handleAuthorize:N,handleModalHide:S}},We=function(){var a=be(),x=a.actionRef,E=a.reload,n=a.editModalConfig,A=a.fetchList,f=a.handleUpdateStatus,P=a.handleCompanyAdd,V=a.handleCompanyEdit,r=a.handleModalHide,y=a.authModalConfig,c=a.handleAuthorize,$=[{title:"\u4F01\u4E1A\u7F16\u7801",dataIndex:"orgCode",align:"left",copyable:!1,valueType:"text",hideInSearch:!1},{title:"\u4F01\u4E1A\u540D\u79F0",dataIndex:"orgName",align:"left",copyable:!1,valueType:"text",hideInSearch:!1},{title:"\u8D1F\u8D23\u4EBA",dataIndex:"director",align:"left",copyable:!1,valueType:"text",hideInSearch:!1},{title:"\u8D1F\u8D23\u4EBA\u624B\u673A\u53F7",dataIndex:"phone",align:"left",copyable:!1,valueType:"text",hideInSearch:!1},{title:"\u72B6\u6001",dataIndex:"status",align:"left",copyable:!1,valueType:"text",hideInSearch:!1,valueEnum:(0,ae.BJ)(p.w6)},{title:"\u6709\u6548\u671F",dataIndex:"validBefore",align:"left",copyable:!1,valueType:"date",hideInSearch:!1,hideInTable:!0},{title:"\u6709\u6548\u671F",dataIndex:"validBefore",align:"left",copyable:!1,valueType:"dateTime",hideInSearch:!0},{title:"\u64CD\u4F5C",dataIndex:"id",align:"left",copyable:!1,valueType:"text",hideInSearch:!0,render:function(B,i){return t.createElement(ne.Z,{buttons:[{name:"\u7F16\u8F91",key:"edit",onClick:function(){return V(i)}},{name:"\u6388\u6743",key:"authorize",onClick:function(){return c(i)}},{name:"\u7981\u7528",key:"disable",onClick:function(){return R.Z.confirm({title:"\u786E\u8BA4\u7981\u7528\uFF1F",onOk:function(){return i.id&&f({status:p.w6.\u7981\u7528,id:"".concat(i.id)})}})},hidden:p.w6.\u7981\u7528===+i.status},{name:"\u542F\u7528",key:"enable",onClick:function(){var D=(0,Q.Z)(T().mark(function K(){return T().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.abrupt("return",i.id&&f({status:p.w6.\u6B63\u5E38,id:"".concat(i.id)}));case 1:case"end":return S.stop()}},K)}));function b(){return D.apply(this,arguments)}return b}(),hidden:p.w6.\u7981\u7528!==+i.status}]})}}];return t.createElement(t.Fragment,null,t.createElement(J.ZP,{style:{padding:"18px 22px"},actionRef:x,request:A,onRequestError:function(B){console.error(B.message),m.default.error("\u6570\u636E\u52A0\u8F7D\u5931\u8D25,".concat(B.message))},columns:$,bordered:!0,rowKey:"id",pagination:{size:"default"},dateFormatter:"string",headerTitle:"\u4F01\u4E1A\u5217\u8868",tableAlertRender:!1,toolBarRender:function(){return[t.createElement(U.Z,{onClick:P,key:"add",type:"primary"},t.createElement(oe.Z,null),"\u65B0\u5EFA")]}}),t.createElement(Se,{visible:n.visible,formData:n.formData,loading:n.loading,toggleVisible:function(){return r("edit")},reload:E}),t.createElement(Pe,{visible:y.visible,formData:y.formData,loading:y.loading,toggleVisible:function(){return r("auth")},reload:E}))}}}]);