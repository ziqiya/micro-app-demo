(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[553,722],{46769:function(O){O.exports={formWrap:"formWrap___26yWO",uploadWrap:"uploadWrap___G6C_G"}},68504:function(O,b,e){"use strict";e.r(b),e.d(b,{default:function(){return ie}});var de=e(13753),V=e(48429),ce=e(14643),A=e(92909),$=e(68699),me=e(26780),H=e(46567),fe=e(97140),D=e(93228),Q=e(94043),M=e.n(Q),t=e(67294),J=e(21191),c=e(66594),K=e(49101),L=e(96689),X=e(31567),ve=e(58210),Y=e(87240),k=e(13378),he=e(68137),R=e(50532),m=e(56361),pe=e(67604),f=e(66498),W=e(44742),w=e(46368),q=e(47376),P=e(66827),_=e(84850),ee=e(3678),te=e(12049),ae=e(32615),ne=e(46769),z=e.n(ne),G=e(42348),N={labelCol:{span:6},wrapperCol:{span:16}},le=function(i){var h=i.visible,p=i.toggleVisible,l=i.formData,g=i.loading,r=i.reload,d=f.Z.useForm(),U=(0,W.Z)(d,1),u=U[0],E=(0,_.Z)(),I=E.tip,x=E.setTip,Z=l.id;(0,t.useEffect)(function(){return(0,w.Z)(l)||u.setFieldsValue((0,m.Z)((0,m.Z)({},l),{},{avatar:l!=null&&l.avatar?[{uid:"1",name:"\u5934\u50CF",status:"done",url:l==null?void 0:l.avatar,size:0}]:[]})),function(){u.resetFields()}},[l]);var C=function(){p(),u.resetFields()},T=function(v){x("\u6570\u636E\u4FDD\u5B58\u4E2D\uFF0C\u8BF7\u7A0D\u5019...");var y=(0,m.Z)((0,m.Z)((0,m.Z)({},l),v),{},{avatar:v.avatar.map(function(F){return F.url||F.response.data.url})[0]});return Z?API.platform.sysUser.update.fetch((0,m.Z)({},y)):API.platform.sysUser.save.fetch(y)},s=(0,P.QT)(T,{manual:!0,onSuccess:function(){A.default.success("\u4FDD\u5B58\u6210\u529F"),u.resetFields(),p(),r==null||r()}}),n=s.run,a=s.loading;return t.createElement(H.Z,{centered:!0,visible:h,forceRender:!0,maskClosable:!1,title:"".concat((0,q.Z)(Z)?"\u65B0\u589E":"\u7F16\u8F91","\u7528\u6237"),okButtonProps:{htmlType:"submit"},width:800,onOk:function(){return u.submit()},onCancel:C,confirmLoading:a},t.createElement(Y.Z,{spinning:g&&a,tip:I},t.createElement(f.Z,(0,k.Z)({form:u,onFinish:n},N,{className:z().formWrap}),t.createElement(f.Z.Item,{label:"\u767B\u5F55\u8D26\u53F7",name:"userName",rules:[{whitespace:!0},{required:!0}]},t.createElement(R.Z,{placeholder:"\u8BF7\u8F93\u5165"})),t.createElement(f.Z.Item,{label:"\u7528\u6237\u6635\u79F0",name:"name",rules:[{whitespace:!0}]},t.createElement(R.Z,{placeholder:"\u8BF7\u8F93\u5165"})),t.createElement(f.Z.Item,{label:"\u624B\u673A\u53F7",name:"phone",rules:[{whitespace:!0},{required:!0,validator:G.tH}]},t.createElement(R.Z,{placeholder:"\u8BF7\u8F93\u5165"})),t.createElement(f.Z.Item,{label:"\u90AE\u7BB1",name:"email",rules:[{whitespace:!0},{required:!0,validator:G.Le}]},t.createElement(R.Z,{placeholder:"\u8BF7\u8F93\u5165"})),t.createElement("div",{className:z().uploadWrap},t.createElement(ee.Z,{formItemProps:N,label:"\u5934\u50CF",name:"avatar",maxCount:1,accept:te.b1.\u56FE\u7247.join(","),uploadProps:{listType:"picture-card"},required:!0,requiredMessage:"\u8BF7\u4E0A\u4F20"},t.createElement(ae.Z,null))),t.createElement(f.Z.Item,{label:"\u6027\u522B",name:"sex"},t.createElement(D.Z,{placeholder:"\u8BF7\u9009\u62E9",options:(0,L.MM)(c.TG)})),t.createElement(f.Z.Item,{label:"\u72B6\u6001",name:"status"},t.createElement(D.Z,{placeholder:"\u8BF7\u9009\u62E9",options:(0,L.MM)(c.w6)})))))},re=e(27870),se=e(89193),ue=function(){var i=(0,t.useRef)(),h=(0,se.x)({visible:!1,formData:{},loading:!1}),p=(0,W.Z)(h,2),l=p[0],g=p[1],r=i.current||{},d=r.reload,U=(0,P.QT)(API.platform.sysUser.updateStatus.fetch,{manual:!0,onSuccess:function(){A.default.success("\u64CD\u4F5C\u6210\u529F"),d==null||d()}}),u=U.run,E=(0,P.QT)(API.authorization.resourceRole.resourceDelete.fetch,{manual:!0,onSuccess:function(){A.default.success("\u5220\u9664\u6210\u529F"),d==null||d()}}),I=E.run,x=function(){var s=(0,$.Z)(M().mark(function n(a){var o,v,y,F;return M().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,API.platform.sysUser.pageList.fetch((0,re.HO)((0,m.Z)((0,m.Z)({},a),{},{page:(a==null?void 0:a.current)||c.ii.page,pageSize:(a==null?void 0:a.pageSize)||c.ii.pageSize})));case 2:return o=S.sent,v=o.list,y=o.page,F=o.total,S.abrupt("return",{data:v||[],page:y,success:!0,total:F});case 7:case"end":return S.stop()}},n)}));return function(a){return s.apply(this,arguments)}}(),Z=function(n){g(function(a){a.visible=!0,a.loading=!0,a.formData=n})},C=function(){g(function(n){n.visible=!0,n.formData={}})},T=function(){return g(function(n){n.visible=!1,n.loading=!1,n.formData={}})};return{actionRef:i,reload:d,editModalConfig:l,handleUpdateStatus:u,handleDelete:I,fetchList:x,handleUserAdd:C,handleUserEdit:Z,handleModalHide:T}},j=e(48786),oe=function(h){var p=h.currentUser,l=(0,j.tT)("company"),g=l.companyMapOptions,r=ue(),d=r.actionRef,U=r.reload,u=r.editModalConfig,E=r.fetchList,I=r.handleUpdateStatus,x=r.handleUserAdd,Z=r.handleUserEdit,C=r.handleModalHide,T=[{title:"\u767B\u5F55\u8D26\u53F7",dataIndex:"userName",align:"left",copyable:!1,valueType:"text",hideInSearch:!1},{title:"\u7528\u6237\u6635\u79F0",dataIndex:"name",align:"left",copyable:!1,valueType:"text",hideInSearch:!1},{title:"\u4F01\u4E1A\u540D\u79F0",dataIndex:"orgId",align:"left",copyable:!1,valueType:"text",hideInSearch:!!p.orgId,hideInTable:!0,renderFormItem:function(){return t.createElement(D.Z,{allowClear:!0,options:g})}},{title:"\u624B\u673A\u53F7",dataIndex:"phone",align:"left",valueType:"text",hideInSearch:!1,hideInTable:!0},{title:"\u8D1F\u8D23\u4EBA\u624B\u673A\u53F7",dataIndex:"phone",align:"left",copyable:!1,valueType:"text",hideInSearch:!0},{title:"\u90AE\u7BB1",dataIndex:"email",align:"left",copyable:!1,valueType:"text",hideInSearch:!0},{title:"\u5934\u50CF",dataIndex:"avatar",align:"left",copyable:!1,valueType:"text",hideInSearch:!0,render:function(n,a){return t.createElement("img",{alt:"\u5934\u50CF",src:a.avatar,width:72})}},{title:"\u6027\u522B",dataIndex:"sex",align:"left",copyable:!1,valueType:"text",hideInSearch:!0,valueEnum:c.TG},{title:"\u72B6\u6001",dataIndex:"status",align:"left",copyable:!1,valueType:"text",hideInSearch:!1,valueEnum:(0,L.BJ)(c.w6)},{title:"\u64CD\u4F5C",dataIndex:"id",align:"left",copyable:!1,valueType:"text",hideInSearch:!0,render:function(n,a){return t.createElement(X.Z,{buttons:[{name:"\u7F16\u8F91",key:"edit",onClick:function(){return Z(a)}},{name:"\u7981\u7528",key:"disable",onClick:function(){return H.Z.confirm({title:"\u786E\u8BA4\u7981\u7528\uFF1F",onOk:function(){return a.id&&I({status:c.w6.\u7981\u7528,id:a.id})}})},hidden:c.w6.\u7981\u7528===+a.status},{name:"\u542F\u7528",key:"enable",onClick:function(){var o=(0,$.Z)(M().mark(function y(){return M().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.abrupt("return",a.id&&I({status:c.w6.\u6B63\u5E38,id:a.id}));case 1:case"end":return B.stop()}},y)}));function v(){return o.apply(this,arguments)}return v}(),hidden:c.w6.\u7981\u7528!==+a.status}]})}}];return t.createElement(t.Fragment,null,t.createElement(J.ZP,{style:{padding:"18px 22px"},actionRef:d,request:E,onRequestError:function(n){console.error(n.message),A.default.error("\u6570\u636E\u52A0\u8F7D\u5931\u8D25,".concat(n.message))},columns:T,bordered:!0,rowKey:"id",pagination:{size:"default"},dateFormatter:"string",headerTitle:"\u7528\u6237\u5217\u8868",tableAlertRender:!1,toolBarRender:function(){return[t.createElement(V.Z,{onClick:x,key:"add",type:"primary"},t.createElement(K.Z,null),"\u65B0\u5EFA")]}}),t.createElement(le,{visible:u.visible,formData:u.formData,loading:u.loading,toggleVisible:C,reload:U}))},ie=(0,j.$j)(function(i){var h=i.user;return{currentUser:h.currentUser}})(oe)}}]);
