(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[335],{34950:function(V,S){"use strict";Object.defineProperty(S,"__esModule",{value:!0});var e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"}}]},name:"exclamation-circle",theme:"outlined"};S.default=e},3855:function(V,S,e){"use strict";var q,$=e(95318),_=e(20862);q={value:!0},S.Z=void 0;var C=_(e(67294)),H=$(e(34950)),G=$(e(92074)),D=function(t,Y){return C.createElement(G.default,Object.assign({},t,{ref:Y,icon:H.default}))};D.displayName="ExclamationCircleOutlined";var X=C.forwardRef(D);S.Z=X},78863:function(V){V.exports={formWrap:"formWrap___3eS8c",rowWrap:"rowWrap___3VEOz",description:"description___bi6uK"}},79920:function(V){V.exports={formWrap:"formWrap___19ekr",rowWrap:"rowWrap___1jzhp",description:"description___2a_68"}},24342:function(V,S,e){"use strict";var q=e(13378),$=e(56361),_=e(3911),C=e(67294),H=e(87542);S.Z=function(G){var D=G.value,X=D===void 0?[]:D,T=G.onChange,t=(0,_.Z)(G,["value","onChange"]),Y={selectedRowKeys:X,onChange:function(te){T==null||T(te)}};return C.createElement(H.ZP,(0,q.Z)({rowSelection:(0,$.Z)((0,$.Z)({},Y),{},{checkStrictly:!0})},t))}},34335:function(V,S,e){"use strict";e.r(S),e.d(S,{default:function(){return $e}});var q=e(13753),$=e(48429),_=e(14643),C=e(92909),H=e(68699),G=e(26780),D=e(46567),X=e(94043),T=e.n(X),t=e(67294),Y=e(87542),Z=e(66594),te=e(49101),re=e(96689),he=e(31567),Qe=e(58210),oe=e(87240),ae=e(13378),He=e(97140),pe=e(93228),Ge=e(74393),ge=e(88995),Je=e(68137),z=e(50532),Xe=e(68059),Ee=e(84737),P=e(56361),Ye=e(67604),d=e(66498),ee=e(44742),ye=e(47376),b=e(66827),ue=e(84850),Ce=e(3678),Ze=e(95951),Fe=e(32615),Ie=e(3855),Ae=e(79920),k=e.n(Ae),ie=e(42348),Se=e(35510),De=e.n(Se),be=e(56051),se=e.n(be),ne=e(27870),Oe=e(48786),Re=function(c){return c&&c<se()().endOf("day")},de={labelCol:{span:8},wrapperCol:{span:14}},Me={labelCol:{span:4},wrapperCol:{span:19}},Te=function(a){var c=a.visible,F=a.toggleVisible,m=a.formData,p=a.reload,x=d.Z.useForm(),B=(0,ee.Z)(x,1),g=B[0],i=(0,ue.Z)(),L=i.tip,r=i.setTip,f=m.id,K=(0,Oe.tT)("company"),O=K.reloadCompanyData,I=(0,b.QT)(API.platform.sysOrg.detail.fetch,{onSuccess:function(l){g.setFieldsValue((0,P.Z)((0,P.Z)({},l),{},{validBefore:l.validBefore?se()(l.validBefore):null,logo:l!=null&&l.logo?[{uid:"1",name:"logo",status:"done",url:l==null?void 0:l.logo,size:0}]:[]}))},manual:!0}),o=I.run,E=I.loading;(0,t.useEffect)(function(){return c&&f&&o({id:f}),function(){g.resetFields()}},[f,c]);var W=function(){F(),g.resetFields()},j=function(){g.resetFields(),F(),p==null||p(),O()},N=(0,b.QT)(API.platform.sysOrg.update.fetch,{onSuccess:function(){j(),C.default.success("\u4FDD\u5B58\u6210\u529F")},manual:!0}),R=N.run,w=N.loading,v=(0,b.QT)(API.platform.sysOrg.save.fetch,{onSuccess:function(l){j(),l&&Ee.default.success({message:"\u79DF\u6237\u65B0\u5EFA\u6210\u529F",description:"\u5BC6\u7801\u4E3A: ".concat(l),duration:null})},manual:!0}),s=v.run,n=v.loading,h=function(l){r("\u6570\u636E\u4FDD\u5B58\u4E2D\uFF0C\u8BF7\u7A0D\u5019...");var J=(0,ne.HO)((0,P.Z)((0,P.Z)((0,P.Z)({},m),l),{},{logo:l.logo.map(function(U){return U.url||U.response.data.url})[0]}));return f?R(J):s(J)},Q=(0,b.QT)(h,{manual:!0}),y=Q.run,A=Q.loading,M=E||A||w||n;return t.createElement(D.Z,{centered:!0,visible:c,forceRender:!0,maskClosable:!1,title:"".concat((0,ye.Z)(f)?"\u65B0\u5EFA":"\u7F16\u8F91","\u4F01\u4E1A"),okButtonProps:{htmlType:"submit"},width:800,onOk:function(){return g.submit()},onCancel:W,confirmLoading:M},t.createElement(oe.Z,{spinning:M,tip:L},t.createElement(d.Z,(0,ae.Z)({form:g,onFinish:y},de,{className:k().formWrap}),t.createElement(d.Z.Item,{label:"\u4F01\u4E1A\u7F16\u7801",name:"orgCode",tooltip:{icon:t.createElement(Ie.Z,null),title:`\u4F01\u4E1A\u7F16\u7801\u5C06\u4F5C\u4E3A\u4F01\u4E1A\u4E0B\u6240\u6709\u8D26\u53F7\u540E\u7F00
\u9700\u8981\u8F93\u516520\u4F4D\u4EE5\u5185\u5B57\u6BCD\uFF0C\u533A\u5206\u5927\u5C0F\u5199`},rules:[{whitespace:!0},{required:!0},{validator:ie.T0}]},t.createElement(z.Z,{disabled:!!f,placeholder:"\u8BF7\u8F93\u5165"})),t.createElement(d.Z.Item,{label:"\u4F01\u4E1A\u540D\u79F0",name:"orgName",rules:[{whitespace:!0},{required:!0}]},t.createElement(z.Z,{placeholder:"\u8BF7\u8F93\u5165"})),t.createElement("div",{className:k().rowWrap},t.createElement(Ce.Z,{formItemProps:de,label:"\u4F01\u4E1Alogo",name:"logo",maxCount:1,accept:Ze.b1.\u56FE\u7247.join(","),uploadProps:{listType:"picture-card"},required:!0,requiredMessage:"\u8BF7\u4E0A\u4F20"},t.createElement(Fe.Z,null))),t.createElement("div",{className:k().rowWrap},t.createElement(d.Z.Item,{label:"\u4F01\u4E1A\u4EE3\u7801",name:"enterpriseCode",rules:[{whitespace:!0}]},t.createElement(z.Z,{placeholder:"\u8BF7\u8F93\u5165"}))),t.createElement(d.Z.Item,{label:"\u8D1F\u8D23\u4EBA",name:"director",rules:[{whitespace:!0},{required:!0}]},t.createElement(z.Z,{placeholder:"\u8BF7\u8F93\u5165"})),t.createElement(d.Z.Item,{label:"\u8D1F\u8D23\u4EBA\u624B\u673A\u53F7",name:"phone",rules:[{whitespace:!0},{required:!0},{validator:ie.tH}]},t.createElement(z.Z,{placeholder:"\u8BF7\u8F93\u5165"})),!!f&&t.createElement(d.Z.Item,{label:"\u7BA1\u7406\u5458\u8D26\u53F7",name:"directorUsername",rules:[{whitespace:!0}]},t.createElement(z.Z,{disabled:!0,placeholder:"\u8BF7\u8F93\u5165"})),t.createElement(d.Z.Item,{label:"\u6709\u6548\u671F",name:"validBefore",rules:[{required:!0}]},t.createElement(ge.Z,{disabledDate:Re})),!!f&&t.createElement(t.Fragment,null,t.createElement(d.Z.Item,{label:"\u72B6\u6001",name:"status",rules:[{required:!0}]},t.createElement(pe.Z,{options:(0,re.MM)(Z.w6),placeholder:"\u8BF7\u9009\u62E9"})),t.createElement(d.Z.Item,{label:"\u5F53\u524D\u7528\u6237\u6570",name:"userNum"},t.createElement(z.Z,{disabled:!0,placeholder:"\u8BF7\u8F93\u5165"}))),t.createElement("div",{className:De()(k().rowWrap,k().description)},t.createElement(d.Z.Item,(0,ae.Z)({label:"\u63CF\u8FF0",name:"description",rules:[{whitespace:!0},{required:!0}]},Me),t.createElement(z.Z,{placeholder:"\u8BF7\u8F93\u5165"}))))))},Pe=e(3911),le=e(46368),xe=e(78863),Be=e.n(xe),Le=e(96486),We=e(24342),ze=e(95760),je={labelCol:{span:6},wrapperCol:{span:16}},Ue=function(a){var c=a.visible,F=a.toggleVisible,m=a.formData,p=a.loading,x=a.reload,B=d.Z.useForm(),g=(0,ee.Z)(B,1),i=g[0],L=(0,ue.Z)(),r=L.tip,f=L.setTip,K=m.id,O=m.directorRoleId,I=m.orgCode,o=(0,b.QT)(API.platform.sysUser.myResourceList.fetch,{refreshDeps:[I],ready:!!I}),E=o.data,W=o.loading,j=(0,t.useMemo)(function(){return(0,ze.r)(E)},[E]),N=(0,b.QT)(function(y){return API.platform.sysOrg.resourceList.fetch({id:y})},{manual:!0,onSuccess:function(A){var M=[],u=function l(J){J.forEach(function(U){var Ke=U.id,me=U.privilegeList,fe=me===void 0?[]:me,ve=U.children;M.push(Ke),(0,le.Z)(fe)||fe.forEach(function(Ne){M.push(Ne.id)}),(0,le.Z)(ve)||l(ve)})};u(A),i.setFieldsValue({resourceIds:M})}}),R=N.run;(0,t.useEffect)(function(){c&&R(K)},[c]),(0,t.useEffect)(function(){return(0,le.Z)(m)||i.setFieldsValue(m),function(){i.resetFields()}},[m]);var w=function(){F(),i.resetFields()},v=function(A){var M=A.resourceIds,u=M===void 0?[]:M,l=(0,Pe.Z)(A,["resourceIds"]);f("\u6570\u636E\u4FDD\u5B58\u4E2D\uFF0C\u8BF7\u7A0D\u5019...");var J=(0,ne.HO)((0,P.Z)((0,P.Z)({},l),{},{clientKey:Z.OW.clientId,id:O,resourceIds:u.filter(function(U){return(0,Le.isNumber)(U)})}));return API.platform.sysRole.resourceSave.fetch(J)},s=(0,b.QT)(v,{manual:!0,onSuccess:function(){C.default.success("\u4FDD\u5B58\u6210\u529F"),i.resetFields(),F(),x==null||x()}}),n=s.run,h=s.loading,Q=[{title:"\u8D44\u6E90\u540D\u79F0",dataIndex:"description",align:"left",copyable:!1,valueType:"text"},{title:"\u8D44\u6E90\u6807\u8BC6",dataIndex:"resourceKey",align:"left",copyable:!1,valueType:"text"},{title:"\u8D44\u6E90\u7C7B\u578B",dataIndex:"type",align:"left",copyable:!1,valueType:"text",render:function(A){return A===Z.o4.\u8DEF\u7531\u7EA7\u8D44\u6E90?"\u8DEF\u7531\u7EA7\u8D44\u6E90":"\u9875\u9762\u7EA7\u8D44\u6E90"}}];return t.createElement(D.Z,{centered:!0,visible:c,forceRender:!0,maskClosable:!1,title:"\u4F01\u4E1A\u6388\u6743",okButtonProps:{htmlType:"submit"},width:800,onOk:function(){return i.submit()},onCancel:w,confirmLoading:h},t.createElement(oe.Z,{spinning:W||p&&h,tip:r},t.createElement(d.Z,(0,ae.Z)({form:i,onFinish:n},je,{className:Be().formWrap}),t.createElement(d.Z.Item,{label:"\u6743\u9650\u5217\u8868",name:"resourceIds",noStyle:!0},t.createElement(We.Z,{search:!1,rowKey:"id",columns:Q,dataSource:j})))))},ce=e(89193),Ve=function(){var a=(0,t.useRef)(),c=(0,ce.x)({visible:!1,formData:{},loading:!1}),F=(0,ee.Z)(c,2),m=F[0],p=F[1],x=(0,ce.x)({visible:!1,formData:{},loading:!1}),B=(0,ee.Z)(x,2),g=B[0],i=B[1],L=a.current||{},r=L.reload,f=(0,b.QT)(API.platform.sysOrg.resetPassword.fetch,{manual:!0,onSuccess:function(){C.default.success("\u91CD\u7F6E\u6210\u529F"),r==null||r()}}),K=f.run,O=(0,b.QT)(API.platform.sysOrg.updateStatus.fetch,{manual:!0,onSuccess:function(){C.default.success("\u64CD\u4F5C\u6210\u529F"),r==null||r()}}),I=O.run,o=(0,b.QT)(API.authorization.resourceRole.resourceDelete.fetch,{manual:!0,onSuccess:function(){C.default.success("\u5220\u9664\u6210\u529F"),r==null||r()}}),E=o.run,W=function(){var v=(0,H.Z)(T().mark(function s(n){var h,Q,y,A;return T().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,API.platform.sysOrg.pageList.fetch((0,ne.HO)((0,P.Z)((0,P.Z)({},n),{},{page:(n==null?void 0:n.current)||Z.ii.page,pageSize:(n==null?void 0:n.pageSize)||Z.ii.pageSize})));case 2:return h=u.sent,Q=h.list,y=h.page,A=h.total,u.abrupt("return",{data:Q||[],page:y,success:!0,total:A});case 7:case"end":return u.stop()}},s)}));return function(n){return v.apply(this,arguments)}}(),j=function(s){p(function(n){n.visible=!0,n.loading=!0,n.formData=s})},N=function(){p(function(s){s.visible=!0,s.formData={}})},R=function(s){i(function(n){n.visible=!0,n.loading=!0,n.formData=s})},w=function(s){var n={edit:p,auth:i};n[s](function(h){h.visible=!1,h.loading=!1,h.formData={}})};return{actionRef:a,reload:r,editModalConfig:m,setEditModalConfig:p,authModalConfig:g,setAuthModalConfig:i,handleDelete:E,fetchList:W,handleCompanyEdit:j,handleUpdateStatus:I,handleResetPassword:K,handleCompanyAdd:N,handleAuthorize:R,handleModalHide:w}},$e=function(){var a=Ve(),c=a.actionRef,F=a.reload,m=a.editModalConfig,p=a.fetchList,x=a.handleResetPassword,B=a.handleUpdateStatus,g=a.handleCompanyAdd,i=a.handleCompanyEdit,L=a.handleModalHide,r=a.authModalConfig,f=a.handleAuthorize,K=[{title:"\u4F01\u4E1A\u7F16\u7801",dataIndex:"orgCode",align:"left",copyable:!1,valueType:"text",hideInSearch:!1},{title:"\u4F01\u4E1A\u540D\u79F0",dataIndex:"orgName",align:"left",copyable:!1,valueType:"text",hideInSearch:!1},{title:"\u8D1F\u8D23\u4EBA",dataIndex:"director",align:"left",copyable:!1,valueType:"text",hideInSearch:!1},{title:"\u8D1F\u8D23\u4EBA\u624B\u673A\u53F7",dataIndex:"phone",align:"left",copyable:!1,valueType:"text",hideInSearch:!1},{title:"\u72B6\u6001",dataIndex:"status",align:"left",copyable:!1,valueType:"text",hideInSearch:!1,valueEnum:(0,re.BJ)(Z.w6)},{title:"\u6709\u6548\u671F",dataIndex:"validBefore",align:"left",copyable:!1,valueType:"date",hideInSearch:!1,hideInTable:!0},{title:"\u6709\u6548\u671F",dataIndex:"validBefore",align:"left",copyable:!1,valueType:"date",hideInSearch:!0},{title:"\u64CD\u4F5C",dataIndex:"id",align:"left",copyable:!1,valueType:"text",hideInSearch:!0,render:function(I,o){return t.createElement(he.Z,{buttons:[{name:"\u7F16\u8F91",key:"edit",onClick:function(){return i(o)}},{name:"\u6388\u6743",key:"authorize",onClick:function(){return f(o)}},{name:"\u7981\u7528",key:"disable",onClick:function(){return D.Z.confirm({title:"\u786E\u8BA4\u7981\u7528\uFF1F",onOk:function(){return o.id&&B({status:Z.w6.\u7981\u7528,id:"".concat(o.id)})}})},hidden:Z.w6.\u7981\u7528===+o.status},{name:"\u542F\u7528",key:"enable",onClick:function(){var E=(0,H.Z)(T().mark(function j(){return T().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.abrupt("return",o.id&&B({status:Z.w6.\u6B63\u5E38,id:"".concat(o.id)}));case 1:case"end":return R.stop()}},j)}));function W(){return E.apply(this,arguments)}return W}(),hidden:Z.w6.\u7981\u7528!==+o.status},{name:"\u91CD\u7F6E\u5BC6\u7801",key:"reset",onClick:function(){return D.Z.confirm({title:"\u786E\u8BA4\u91CD\u7F6E\u5BC6\u7801\uFF1F",onOk:function(){return o.id&&x({id:"".concat(o.id)})}})}}]})}}];return t.createElement(t.Fragment,null,t.createElement(Y.ZP,{style:{padding:"18px 22px"},actionRef:c,request:p,onRequestError:function(I){console.error(I.message),C.default.error("\u6570\u636E\u52A0\u8F7D\u5931\u8D25,".concat(I.message))},columns:K,bordered:!0,rowKey:"id",pagination:{size:"default"},dateFormatter:"string",headerTitle:"\u4F01\u4E1A\u5217\u8868",tableAlertRender:!1,toolBarRender:function(){return[t.createElement($.Z,{onClick:g,key:"add",type:"primary"},t.createElement(te.Z,null),"\u65B0\u5EFA")]}}),t.createElement(Te,{visible:m.visible,formData:m.formData,toggleVisible:function(){return L("edit")},reload:F}),t.createElement(Ue,{visible:r.visible,formData:r.formData,loading:r.loading,toggleVisible:function(){return L("auth")},reload:F}))}}}]);
