"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[919],{46416:function(e,t,n){n.d(t,{Z:function(){return ze}});var r=n(83963),o=n(67294),a=n(85623),i=n(33939),c=n(38442),l=n(79453),u=n(97345),s=n(94184),f=n.n(s),d=n(87462),p=n(15671),v=n(43144),m=n(32531),h=n(73568),y=n(4942),g=n(45987),b=n(87757),w=n.n(b),E=n(71002),Z=n(15861),P=n(74902),k=n(1413),O="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/),x="aria-",C="data-";function D(e,t){return 0===e.indexOf(t)}function S(e){var t=e.responseText||e.response;if(!t)return t;try{return JSON.parse(t)}catch(e){return t}}function I(e){var t=new XMLHttpRequest;e.onProgress&&t.upload&&(t.upload.onprogress=function(t){t.total>0&&(t.percent=t.loaded/t.total*100),e.onProgress(t)});var n=new FormData;e.data&&Object.keys(e.data).forEach((function(t){var r=e.data[t];Array.isArray(r)?r.forEach((function(e){n.append("".concat(t,"[]"),e)})):n.append(t,e.data[t])})),e.file instanceof Blob?n.append(e.filename,e.file,e.file.name):n.append(e.filename,e.file),t.onerror=function(t){e.onError(t)},t.onload=function(){return t.status<200||t.status>=300?e.onError(function(e,t){var n="cannot ".concat(e.method," ").concat(e.action," ").concat(t.status,"'"),r=new Error(n);return r.status=t.status,r.method=e.method,r.url=e.action,r}(e,t),S(t)):e.onSuccess(S(t),t)},t.open(e.method,e.action,!0),e.withCredentials&&"withCredentials"in t&&(t.withCredentials=!0);var r=e.headers||{};return null!==r["X-Requested-With"]&&t.setRequestHeader("X-Requested-With","XMLHttpRequest"),Object.keys(r).forEach((function(e){null!==r[e]&&t.setRequestHeader(e,r[e])})),t.send(n),{abort:function(){t.abort()}}}var R=+new Date,F=0;function N(){return"rc-upload-".concat(R,"-").concat(++F)}var M={};function j(e,t){0}function L(e,t,n){t||M[n]||(e(!1,n),M[n]=!0)}var A=function(e,t){L(j,e,t)},U=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",o=e.type||"",a=o.replace(/\/.*$/,"");return n.some((function(e){var t=e.trim();if(/^\*(\/\*)?$/.test(e))return!0;if("."===t.charAt(0)){var n=r.toLowerCase(),i=t.toLowerCase(),c=[i];return".jpg"!==i&&".jpeg"!==i||(c=[".jpg","jpeg"]),c.some((function(e){return n.endsWith(e)}))}return/\/\*$/.test(t)?a===t.replace(/\/.*$/,""):o===t||!!/^\w+$/.test(t)&&(A(!1,"Upload takes an invalidate 'accept' type '".concat(t,"'.Skip for check.")),!0)}))}return!0};var _=function(e,t,n){var r=function e(r,o){r.path=o||"",r.isFile?r.file((function(e){n(e)&&(r.fullPath&&!e.webkitRelativePath&&(Object.defineProperties(e,{webkitRelativePath:{writable:!0}}),e.webkitRelativePath=r.fullPath.replace(/^\//,""),Object.defineProperties(e,{webkitRelativePath:{writable:!1}})),t([e]))})):r.isDirectory&&function(e,t){var n=e.createReader(),r=[];!function e(){n.readEntries((function(n){var o=Array.prototype.slice.apply(n);r=r.concat(o),o.length?e():t(r)}))}()}(r,(function(t){t.forEach((function(t){e(t,"".concat(o).concat(r.name,"/"))}))}))};e.forEach((function(e){r(e.webkitGetAsEntry())}))},T=function(e){(0,m.Z)(n,e);var t=(0,h.Z)(n);function n(){var e;return(0,p.Z)(this,n),(e=t.apply(this,arguments)).state={uid:N()},e.reqs={},e.onChange=function(t){var n=e.props,r=n.accept,o=n.directory,a=t.target.files,i=(0,P.Z)(a).filter((function(e){return!o||U(e,r)}));e.uploadFiles(i),e.reset()},e.onClick=function(t){var n=e.fileInput;if(n){var r=e.props,o=r.children,a=r.onClick;if(o&&"button"===o.type){var i=n.parentNode;i.focus(),i.querySelector("button").blur()}n.click(),a&&a(t)}},e.onKeyDown=function(t){"Enter"===t.key&&e.onClick(t)},e.onFileDrop=function(t){var n=e.props.multiple;if(t.preventDefault(),"dragover"!==t.type)if(e.props.directory)_(Array.prototype.slice.call(t.dataTransfer.items),e.uploadFiles,(function(t){return U(t,e.props.accept)}));else{var r=(0,P.Z)(t.dataTransfer.files).filter((function(t){return U(t,e.props.accept)}));!1===n&&(r=r.slice(0,1)),e.uploadFiles(r)}},e.uploadFiles=function(t){var n=(0,P.Z)(t),r=n.map((function(t){return t.uid=N(),e.processFile(t,n)}));Promise.all(r).then((function(t){var n=e.props.onBatchStart;null==n||n(t.map((function(e){return{file:e.origin,parsedFile:e.parsedFile}}))),t.filter((function(e){return null!==e.parsedFile})).forEach((function(t){e.post(t)}))}))},e.processFile=function(){var t=(0,Z.Z)(w().mark((function t(n,r){var o,a,i,c,l,u,s,f,d;return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=e.props.beforeUpload,a=n,!o){t.next=14;break}return t.prev=3,t.next=6,o(n,r);case 6:a=t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(3),a=!1;case 12:if(!1!==a){t.next=14;break}return t.abrupt("return",{origin:n,parsedFile:null,action:null,data:null});case 14:if("function"!=typeof(i=e.props.action)){t.next=21;break}return t.next=18,i(n);case 18:c=t.sent,t.next=22;break;case 21:c=i;case 22:if("function"!=typeof(l=e.props.data)){t.next=29;break}return t.next=26,l(n);case 26:u=t.sent,t.next=30;break;case 29:u=l;case 30:return s="object"!==(0,E.Z)(a)&&"string"!=typeof a||!a?n:a,f=s instanceof File?s:new File([s],n.name,{type:n.type}),(d=f).uid=n.uid,t.abrupt("return",{origin:n,data:u,parsedFile:d,action:c});case 35:case"end":return t.stop()}}),t,null,[[3,9]])})));return function(e,n){return t.apply(this,arguments)}}(),e.saveFileInput=function(t){e.fileInput=t},e}return(0,v.Z)(n,[{key:"componentDidMount",value:function(){this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.abort()}},{key:"post",value:function(e){var t=this,n=e.data,r=e.origin,o=e.action,a=e.parsedFile;if(this._isMounted){var i=this.props,c=i.onStart,l=i.customRequest,u=i.name,s=i.headers,f=i.withCredentials,d=i.method,p=r.uid,v=l||I,m={action:o,filename:u,data:n,file:a,headers:s,withCredentials:f,method:d||"post",onProgress:function(e){var n=t.props.onProgress;null==n||n(e,a)},onSuccess:function(e,n){var r=t.props.onSuccess;null==r||r(e,a,n),delete t.reqs[p]},onError:function(e,n){var r=t.props.onError;null==r||r(e,n,a),delete t.reqs[p]}};c(r),this.reqs[p]=v(m)}}},{key:"reset",value:function(){this.setState({uid:N()})}},{key:"abort",value:function(e){var t=this.reqs;if(e){var n=e.uid?e.uid:e;t[n]&&t[n].abort&&t[n].abort(),delete t[n]}else Object.keys(t).forEach((function(e){t[e]&&t[e].abort&&t[e].abort(),delete t[e]}))}},{key:"render",value:function(){var e,t=this.props,n=t.component,r=t.prefixCls,a=t.className,i=t.disabled,c=t.id,l=t.style,u=t.multiple,s=t.accept,p=t.children,v=t.directory,m=t.openFileDialogOnClick,h=t.onMouseEnter,b=t.onMouseLeave,w=t.capture,E=(0,g.Z)(t,["component","prefixCls","className","disabled","id","style","multiple","accept","children","directory","openFileDialogOnClick","onMouseEnter","onMouseLeave","capture"]),Z=f()((e={},(0,y.Z)(e,r,!0),(0,y.Z)(e,"".concat(r,"-disabled"),i),(0,y.Z)(e,a,a),e)),P=v?{directory:"directory",webkitdirectory:"webkitdirectory"}:{},S=i?{}:{onClick:m?this.onClick:function(){},onKeyDown:m?this.onKeyDown:function(){},onMouseEnter:h,onMouseLeave:b,onDrop:this.onFileDrop,onDragOver:this.onFileDrop,tabIndex:"0"};return o.createElement(n,(0,d.Z)({},S,{className:Z,role:"button",style:l}),o.createElement("input",(0,d.Z)({},function(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t=!1===n?{aria:!0,data:!0,attr:!0}:!0===n?{aria:!0}:(0,k.Z)({},n);var r={};return Object.keys(e).forEach((function(n){(t.aria&&("role"===n||D(n,x))||t.data&&D(n,C)||t.attr&&O.includes(n))&&(r[n]=e[n])})),r}(E,{aria:!0,data:!0}),{id:c,type:"file",ref:this.saveFileInput,onClick:function(e){return e.stopPropagation()},key:this.state.uid,style:{display:"none"},accept:s},P,{multiple:u,onChange:this.onChange},null!=w?{capture:w}:{})),p)}}]),n}(o.Component),z=T;function H(){}var V=function(e){(0,m.Z)(n,e);var t=(0,h.Z)(n);function n(){var e;return(0,p.Z)(this,n),(e=t.apply(this,arguments)).saveUploader=function(t){e.uploader=t},e}return(0,v.Z)(n,[{key:"abort",value:function(e){this.uploader.abort(e)}},{key:"render",value:function(){return o.createElement(z,(0,d.Z)({},this.props,{ref:this.saveUploader}))}}]),n}(o.Component);V.defaultProps={component:"span",prefixCls:"rc-upload",data:{},headers:{},name:"file",multipart:!1,onStart:H,onError:H,onSuccess:H,multiple:!1,beforeUpload:null,customRequest:null,withCredentials:!1,openFileDialogOnClick:!0};var q=V,W=n(5663),B=n(73935),K=n(53124),$=n(98866),G=n(23715),X=n(80779),J=n(58453),Q={icon:function(e,t){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M534 352V136H232v752h560V394H576a42 42 0 01-42-42z",fill:t}},{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0042 42h216v494z",fill:e}}]}},name:"file",theme:"twotone"},Y=n(35005),ee=function(e,t){return o.createElement(Y.Z,(0,J.Z)((0,J.Z)({},e),{},{ref:t,icon:Q}))};ee.displayName="FileTwoTone";var te=o.forwardRef(ee),ne=n(77322),re={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z"}}]},name:"paper-clip",theme:"outlined"},oe=function(e,t){return o.createElement(Y.Z,(0,J.Z)((0,J.Z)({},e),{},{ref:t,icon:re}))};oe.displayName="PaperClipOutlined";var ae=o.forwardRef(oe),ie={icon:function(e,t){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z",fill:e}},{tag:"path",attrs:{d:"M424.6 765.8l-150.1-178L136 752.1V792h752v-30.4L658.1 489z",fill:t}},{tag:"path",attrs:{d:"M136 652.7l132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136v420.7zM304 280a88 88 0 110 176 88 88 0 010-176z",fill:t}},{tag:"path",attrs:{d:"M276 368a28 28 0 1056 0 28 28 0 10-56 0z",fill:t}},{tag:"path",attrs:{d:"M304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z",fill:e}}]}},name:"picture",theme:"twotone"},ce=function(e,t){return o.createElement(Y.Z,(0,J.Z)((0,J.Z)({},e),{},{ref:t,icon:ie}))};ce.displayName="PictureTwoTone";var le=o.forwardRef(ce),ue=n(2210),se=n(71577),fe=n(57838),de=n(33603),pe=n(96159);function ve(e){return(0,r.Z)((0,r.Z)({},e),{lastModified:e.lastModified,lastModifiedDate:e.lastModifiedDate,name:e.name,size:e.size,type:e.type,uid:e.uid,percent:0,originFileObj:e})}function me(e,t){var n=(0,l.Z)(t),r=n.findIndex((function(t){return t.uid===e.uid}));return-1===r?n.push(e):n[r]=e,n}function he(e,t){var n=void 0!==e.uid?"uid":"name";return t.filter((function(t){return t[n]===e[n]}))[0]}var ye=function(e){return 0===e.indexOf("image/")},ge=function(e){if(e.type&&!e.thumbUrl)return ye(e.type);var t=e.thumbUrl||e.url||"",n=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split("/"),t=e[e.length-1].split(/#|\?/)[0];return(/\.[^./\\]*$/.exec(t)||[""])[0]}(t);return!(!/^data:image\//.test(t)&&!/(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico|heic|heif)$/i.test(n))||!/^data:/.test(t)&&!n},be=200;function we(e){return new Promise((function(t){if(e.type&&ye(e.type)){var n=document.createElement("canvas");n.width=be,n.height=be,n.style.cssText="position: fixed; left: 0; top: 0; width: ".concat(be,"px; height: ").concat(be,"px; z-index: 9999; display: none;"),document.body.appendChild(n);var r=n.getContext("2d"),o=new Image;if(o.onload=function(){var e=o.width,a=o.height,i=be,c=be,l=0,u=0;e>a?u=-((c=a*(be/e))-i)/2:l=-((i=e*(be/a))-c)/2,r.drawImage(o,l,u,i,c);var s=n.toDataURL();document.body.removeChild(n),t(s)},o.crossOrigin="anonymous",e.type.startsWith("image/svg+xml")){var a=new FileReader;a.addEventListener("load",(function(){a.result&&(o.src=a.result)})),a.readAsDataURL(e)}else o.src=window.URL.createObjectURL(e)}else t("")}))}var Ee={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},Ze=function(e,t){return o.createElement(Y.Z,(0,J.Z)((0,J.Z)({},e),{},{ref:t,icon:Ee}))};Ze.displayName="DeleteOutlined";var Pe=o.forwardRef(Ze),ke={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"download",theme:"outlined"},Oe=function(e,t){return o.createElement(Y.Z,(0,J.Z)((0,J.Z)({},e),{},{ref:t,icon:ke}))};Oe.displayName="DownloadOutlined";var xe=o.forwardRef(Oe),Ce=n(43481),De=n(92801),Se=n(84908),Ie=o.forwardRef((function(e,t){var n,i,c,l=e.prefixCls,s=e.className,d=e.style,p=e.locale,v=e.listType,m=e.file,h=e.items,y=e.progress,g=e.iconRender,b=e.actionIconRender,w=e.itemRender,E=e.isImgUrl,Z=e.showPreviewIcon,P=e.showRemoveIcon,k=e.showDownloadIcon,O=e.previewIcon,x=e.removeIcon,C=e.downloadIcon,D=e.onPreview,S=e.onDownload,I=e.onClose,R=m.status,F=o.useState(R),N=(0,u.Z)(F,2),M=N[0],j=N[1];o.useEffect((function(){"removed"!==R&&j(R)}),[R]);var L=o.useState(!1),A=(0,u.Z)(L,2),U=A[0],_=A[1],T=o.useRef();o.useEffect((function(){return T.current=setTimeout((function(){_(!0)}),300),function(){window.clearTimeout(T.current)}}),[]);var z="".concat(l,"-span"),H=g(m),V=o.createElement("div",{className:"".concat(l,"-text-icon")},H);if("picture"===v||"picture-card"===v)if("uploading"===M||!m.thumbUrl&&!m.url){var q,W=f()((q={},(0,a.Z)(q,"".concat(l,"-list-item-thumbnail"),!0),(0,a.Z)(q,"".concat(l,"-list-item-file"),"uploading"!==M),q));V=o.createElement("div",{className:W},H)}else{var B,$=(null==E?void 0:E(m))?o.createElement("img",{src:m.thumbUrl||m.url,alt:m.name,className:"".concat(l,"-list-item-image"),crossOrigin:m.crossOrigin}):H,G=f()((B={},(0,a.Z)(B,"".concat(l,"-list-item-thumbnail"),!0),(0,a.Z)(B,"".concat(l,"-list-item-file"),E&&!E(m)),B));V=o.createElement("a",{className:G,onClick:function(e){return D(m,e)},href:m.url||m.thumbUrl,target:"_blank",rel:"noopener noreferrer"},$)}var X,J=f()((n={},(0,a.Z)(n,"".concat(l,"-list-item"),!0),(0,a.Z)(n,"".concat(l,"-list-item-").concat(M),!0),(0,a.Z)(n,"".concat(l,"-list-item-list-type-").concat(v),!0),n)),Q="string"==typeof m.linkProps?JSON.parse(m.linkProps):m.linkProps,Y=P?b(("function"==typeof x?x(m):x)||o.createElement(Pe,null),(function(){return I(m)}),l,p.removeFile):null,ee=k&&"done"===M?b(("function"==typeof C?C(m):C)||o.createElement(xe,null),(function(){return S(m)}),l,p.downloadFile):null,te="picture-card"!==v&&o.createElement("span",{key:"download-delete",className:f()("".concat(l,"-list-item-card-actions"),{picture:"picture"===v})},ee,Y),ne=f()("".concat(l,"-list-item-name")),re=m.url?[o.createElement("a",(0,r.Z)({key:"view",target:"_blank",rel:"noopener noreferrer",className:ne,title:m.name},Q,{href:m.url,onClick:function(e){return D(m,e)}}),m.name),te]:[o.createElement("span",{key:"view",className:ne,onClick:function(e){return D(m,e)},title:m.name},m.name),te],oe=Z?o.createElement("a",{href:m.url||m.thumbUrl,target:"_blank",rel:"noopener noreferrer",style:m.url||m.thumbUrl?void 0:{pointerEvents:"none",opacity:.5},onClick:function(e){return D(m,e)},title:p.previewFile},"function"==typeof O?O(m):O||o.createElement(Ce.Z,null)):null,ae="picture-card"===v&&"uploading"!==M&&o.createElement("span",{className:"".concat(l,"-list-item-actions")},oe,"done"===M&&ee,Y);X=m.response&&"string"==typeof m.response?m.response:(null===(i=m.error)||void 0===i?void 0:i.statusText)||(null===(c=m.error)||void 0===c?void 0:c.message)||p.uploadError;var ie=o.createElement("span",{className:z},V,re),ce=(0,o.useContext(K.E_).getPrefixCls)(),le=o.createElement("div",{className:J},o.createElement("div",{className:"".concat(l,"-list-item-info")},ie),ae,U&&o.createElement(ue.Z,{motionName:"".concat(ce,"-fade"),visible:"uploading"===M,motionDeadline:2e3},(function(e){var t=e.className,n="percent"in m?o.createElement(De.Z,(0,r.Z)({},y,{type:"line",percent:m.percent})):null;return o.createElement("div",{className:f()("".concat(l,"-list-item-progress"),t)},n)}))),se=f()("".concat(l,"-list-").concat(v,"-container"),s),fe="error"===M?o.createElement(Se.Z,{title:X,getPopupContainer:function(e){return e.parentNode}},le):le;return o.createElement("div",{className:se,style:d,ref:t},w?w(fe,m,h,{download:S.bind(null,m),preview:D.bind(null,m),remove:I.bind(null,m)}):fe)})),Re=(0,r.Z)({},de.ZP);delete Re.onAppearEnd,delete Re.onEnterEnd,delete Re.onLeaveEnd;var Fe=function(e,t){var n,i=e.listType,c=void 0===i?"text":i,s=e.previewFile,d=void 0===s?we:s,p=e.onPreview,v=e.onDownload,m=e.onRemove,h=e.locale,y=e.iconRender,g=e.isImageUrl,b=void 0===g?ge:g,w=e.prefixCls,E=e.items,Z=void 0===E?[]:E,P=e.showPreviewIcon,k=void 0===P||P,O=e.showRemoveIcon,x=void 0===O||O,C=e.showDownloadIcon,D=void 0!==C&&C,S=e.removeIcon,I=e.previewIcon,R=e.downloadIcon,F=e.progress,N=void 0===F?{strokeWidth:2,showInfo:!1}:F,M=e.appendAction,j=e.appendActionVisible,L=void 0===j||j,A=e.itemRender,U=(0,fe.Z)(),_=o.useState(!1),T=(0,u.Z)(_,2),z=T[0],H=T[1];o.useEffect((function(){"picture"!==c&&"picture-card"!==c||(Z||[]).forEach((function(e){"undefined"!=typeof document&&"undefined"!=typeof window&&window.FileReader&&window.File&&(e.originFileObj instanceof File||e.originFileObj instanceof Blob)&&void 0===e.thumbUrl&&(e.thumbUrl="",d&&d(e.originFileObj).then((function(t){e.thumbUrl=t||"",U()})))}))}),[c,Z,d]),o.useEffect((function(){H(!0)}),[]);var V=function(e,t){if(p)return null==t||t.preventDefault(),p(e)},q=function(e){"function"==typeof v?v(e):e.url&&window.open(e.url)},W=function(e){null==m||m(e)},B=function(e){if(y)return y(e,c);var t="uploading"===e.status,n=b&&b(e)?o.createElement(le,null):o.createElement(te,null),r=t?o.createElement(ne.Z,null):o.createElement(ae,null);return"picture"===c?r=t?o.createElement(ne.Z,null):n:"picture-card"===c&&(r=t?h.uploading:n),r},$=function(e,t,n,a){var i={type:"text",size:"small",title:a,onClick:function(n){t(),(0,pe.l$)(e)&&e.props.onClick&&e.props.onClick(n)},className:"".concat(n,"-list-item-card-actions-btn")};if((0,pe.l$)(e)){var c=(0,pe.Tm)(e,(0,r.Z)((0,r.Z)({},e.props),{onClick:function(){}}));return o.createElement(se.Z,(0,r.Z)({},i,{icon:c}))}return o.createElement(se.Z,(0,r.Z)({},i),o.createElement("span",null,e))};o.useImperativeHandle(t,(function(){return{handlePreview:V,handleDownload:q}}));var G=o.useContext(K.E_),X=G.getPrefixCls,J=G.direction,Q=X("upload",w),Y=f()((n={},(0,a.Z)(n,"".concat(Q,"-list"),!0),(0,a.Z)(n,"".concat(Q,"-list-").concat(c),!0),(0,a.Z)(n,"".concat(Q,"-list-rtl"),"rtl"===J),n)),ee=(0,l.Z)(Z.map((function(e){return{key:e.uid,file:e}}))),re="picture-card"===c?"animate-inline":"animate",oe={motionDeadline:2e3,motionName:"".concat(Q,"-").concat(re),keys:ee,motionAppear:z};return"picture-card"!==c&&(oe=(0,r.Z)((0,r.Z)({},Re),oe)),o.createElement("div",{className:Y},o.createElement(ue.V,(0,r.Z)({},oe,{component:!1}),(function(e){var t=e.key,n=e.file,r=e.className,a=e.style;return o.createElement(Ie,{key:t,locale:h,prefixCls:Q,className:r,style:a,file:n,items:Z,progress:N,listType:c,isImgUrl:b,showPreviewIcon:k,showRemoveIcon:x,showDownloadIcon:D,removeIcon:S,previewIcon:I,downloadIcon:R,iconRender:B,actionIconRender:$,itemRender:A,onPreview:V,onDownload:q,onClose:W})})),M&&o.createElement(ue.Z,(0,r.Z)({},oe,{visible:L,forceRender:!0}),(function(e){var t=e.className,n=e.style;return(0,pe.Tm)(M,(function(e){return{className:f()(e.className,t),style:(0,r.Z)((0,r.Z)((0,r.Z)({},n),{pointerEvents:t?"none":void 0}),e.style)}}))})))};var Ne=o.forwardRef(Fe),Me=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{l(r.next(e))}catch(e){a(e)}}function c(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((r=r.apply(e,t||[])).next())}))},je="__LIST_IGNORE_".concat(Date.now(),"__"),Le=function(e,t){var n,s=e.fileList,d=e.defaultFileList,p=e.onRemove,v=e.showUploadList,m=void 0===v||v,h=e.listType,y=void 0===h?"text":h,g=e.onPreview,b=e.onDownload,w=e.onChange,E=e.onDrop,Z=e.previewFile,P=e.disabled,k=void 0!==P&&P,O=e.locale,x=e.iconRender,C=e.isImageUrl,D=e.progress,S=e.prefixCls,I=e.className,R=e.type,F=void 0===R?"select":R,N=e.children,M=e.style,j=e.itemRender,L=e.maxCount,A=e.data,U=void 0===A?{}:A,_=e.multiple,T=void 0!==_&&_,z=e.action,H=void 0===z?"":z,V=e.accept,J=void 0===V?"":V,Q=e.supportServerRender,Y=void 0===Q||Q,ee=o.useContext($.Z),te=k||ee,ne=(0,W.Z)(d||[],{value:s,postState:function(e){return null!=e?e:[]}}),re=(0,u.Z)(ne,2),oe=re[0],ae=re[1],ie=o.useState("drop"),ce=(0,u.Z)(ie,2),le=ce[0],ue=ce[1],se=o.useRef();o.useMemo((function(){var e=Date.now();(s||[]).forEach((function(t,n){t.uid||Object.isFrozen(t)||(t.uid="__AUTO__".concat(e,"_").concat(n,"__"))}))}),[s]);var fe=function(e,t,n){var r=(0,l.Z)(t);1===L?r=r.slice(-1):L&&(r=r.slice(0,L)),(0,B.flushSync)((function(){ae(r)}));var o={file:e,fileList:r};n&&(o.event=n),null==w||w(o)},de=function(e){var t=e.filter((function(e){return!e.file[je]}));if(t.length){var n=t.map((function(e){return ve(e.file)})),r=(0,l.Z)(oe);n.forEach((function(e){r=me(e,r)})),n.forEach((function(e,n){var o=e;if(t[n].parsedFile)e.status="uploading";else{var a,i=e.originFileObj;try{a=new File([i],i.name,{type:i.type})}catch(e){(a=new Blob([i],{type:i.type})).name=i.name,a.lastModifiedDate=new Date,a.lastModified=(new Date).getTime()}a.uid=e.uid,o=a}fe(o,r)}))}},pe=function(e,t,n){try{"string"==typeof e&&(e=JSON.parse(e))}catch(e){}if(he(t,oe)){var r=ve(t);r.status="done",r.percent=100,r.response=e,r.xhr=n;var o=me(r,oe);fe(r,o)}},ye=function(e,t){if(he(t,oe)){var n=ve(t);n.status="uploading",n.percent=e.percent;var r=me(n,oe);fe(n,r,e)}},ge=function(e,t,n){if(he(n,oe)){var r=ve(n);r.error=e,r.response=t,r.status="error";var o=me(r,oe);fe(r,o)}},be=function(e){var t;Promise.resolve("function"==typeof p?p(e):p).then((function(n){var o;if(!1!==n){var a=function(e,t){var n=void 0!==e.uid?"uid":"name",r=t.filter((function(t){return t[n]!==e[n]}));return r.length===t.length?null:r}(e,oe);a&&(t=(0,r.Z)((0,r.Z)({},e),{status:"removed"}),null==oe||oe.forEach((function(e){var n=void 0!==t.uid?"uid":"name";e[n]!==t[n]||Object.isFrozen(e)||(e.status="removed")})),null===(o=se.current)||void 0===o||o.abort(t),fe(t,a))}}))},we=function(e){ue(e.type),"drop"===e.type&&(null==E||E(e))};o.useImperativeHandle(t,(function(){return{onBatchStart:de,onSuccess:pe,onProgress:ye,onError:ge,fileList:oe,upload:se.current}}));var Ee=o.useContext(K.E_),Ze=Ee.getPrefixCls,Pe=Ee.direction,ke=Ze("upload",S),Oe=(0,r.Z)((0,r.Z)({onBatchStart:de,onError:ge,onProgress:ye,onSuccess:pe},e),{data:U,multiple:T,action:H,accept:J,supportServerRender:Y,prefixCls:ke,disabled:te,beforeUpload:function(t,n){return Me(void 0,void 0,void 0,(0,i.Z)().mark((function r(){var o,a,l,u;return(0,i.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=e.beforeUpload,a=e.transformFile,l=t,!o){r.next=13;break}return r.next=5,o(t,n);case 5:if(!1!==(u=r.sent)){r.next=8;break}return r.abrupt("return",!1);case 8:if(delete t[je],u!==je){r.next=12;break}return Object.defineProperty(t,je,{value:!0,configurable:!0}),r.abrupt("return",!1);case 12:"object"===(0,c.Z)(u)&&u&&(l=u);case 13:if(!a){r.next=17;break}return r.next=16,a(l);case 16:l=r.sent;case 17:return r.abrupt("return",l);case 18:case"end":return r.stop()}}),r)})))},onChange:void 0});delete Oe.className,delete Oe.style,N&&!te||delete Oe.id;var xe=function(e,t){return m?o.createElement(G.Z,{componentName:"Upload",defaultLocale:X.Z.Upload},(function(n){var a="boolean"==typeof m?{}:m,i=a.showRemoveIcon,c=a.showPreviewIcon,l=a.showDownloadIcon,u=a.removeIcon,s=a.previewIcon,f=a.downloadIcon;return o.createElement(Ne,{prefixCls:ke,listType:y,items:oe,previewFile:Z,onPreview:g,onDownload:b,onRemove:be,showRemoveIcon:!te&&i,showPreviewIcon:c,showDownloadIcon:l,removeIcon:u,previewIcon:s,downloadIcon:f,iconRender:x,locale:(0,r.Z)((0,r.Z)({},n),O),isImageUrl:C,progress:D,appendAction:e,appendActionVisible:t,itemRender:j})})):e};if("drag"===F){var Ce,De=f()(ke,(Ce={},(0,a.Z)(Ce,"".concat(ke,"-drag"),!0),(0,a.Z)(Ce,"".concat(ke,"-drag-uploading"),oe.some((function(e){return"uploading"===e.status}))),(0,a.Z)(Ce,"".concat(ke,"-drag-hover"),"dragover"===le),(0,a.Z)(Ce,"".concat(ke,"-disabled"),te),(0,a.Z)(Ce,"".concat(ke,"-rtl"),"rtl"===Pe),Ce),I);return o.createElement("span",null,o.createElement("div",{className:De,onDrop:we,onDragOver:we,onDragLeave:we,style:M},o.createElement(q,(0,r.Z)({},Oe,{ref:se,className:"".concat(ke,"-btn")}),o.createElement("div",{className:"".concat(ke,"-drag-container")},N))),xe())}var Se,Ie=f()(ke,(n={},(0,a.Z)(n,"".concat(ke,"-select"),!0),(0,a.Z)(n,"".concat(ke,"-select-").concat(y),!0),(0,a.Z)(n,"".concat(ke,"-disabled"),te),(0,a.Z)(n,"".concat(ke,"-rtl"),"rtl"===Pe),n)),Re=(Se=N?void 0:{display:"none"},o.createElement("div",{className:Ie,style:Se},o.createElement(q,(0,r.Z)({},Oe,{ref:se}))));return"picture-card"===y?o.createElement("span",{className:f()("".concat(ke,"-picture-card-wrapper"),I)},xe(Re,!!N)):o.createElement("span",{className:I},Re,xe())};var Ae=o.forwardRef(Le),Ue=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};var _e=o.forwardRef((function(e,t){var n=e.style,a=e.height,i=Ue(e,["style","height"]);return o.createElement(Ae,(0,r.Z)({ref:t},i,{type:"drag",style:(0,r.Z)((0,r.Z)({},n),{height:a})}))})),Te=Ae;Te.Dragger=_e,Te.LIST_IGNORE=je;var ze=Te},60106:function(e,t,n){function r(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map((function(e){return"'"+e+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function o(e){return!!e&&!!e[q]}function a(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);return!t||t===Object.prototype}(e)||Array.isArray(e)||!!e[V]||!!e.constructor[V]||d(e)||p(e))}function i(e,t,n){void 0===n&&(n=!1),0===c(e)?(n?Object.keys:W)(e).forEach((function(r){n&&"symbol"==typeof r||t(r,e[r],e)})):e.forEach((function(n,r){return t(r,n,e)}))}function c(e){var t=e[q];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:d(e)?2:p(e)?3:0}function l(e,t){return 2===c(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function u(e,t){return 2===c(e)?e.get(t):e[t]}function s(e,t,n){var r=c(e);2===r?e.set(t,n):3===r?(e.delete(t),e.add(n)):e[t]=n}function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function d(e){return _&&e instanceof Map}function p(e){return T&&e instanceof Set}function v(e){return e.o||e.t}function m(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=B(e);delete t[q];for(var n=W(t),r=0;r<n.length;r++){var o=n[r],a=t[o];!1===a.writable&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function h(e,t){g(e)||o(e)||!a(e)||(c(e)>1&&(e.set=e.add=e.clear=e.delete=y),Object.freeze(e),t&&i(e,(function(e,t){return h(t,!0)}),!0))}function y(){r(2)}function g(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function b(e){var t=K[e];return t||r(18,e),t}function w(){return A}function E(e,t){t&&(b("Patches"),e.u=[],e.s=[],e.v=t)}function Z(e){P(e),e.p.forEach(O),e.p=null}function P(e){e===A&&(A=e.l)}function k(e){return A={p:[],l:A,h:e,m:!0,_:0}}function O(e){var t=e[q];0===t.i||1===t.i?t.j():t.g=!0}function x(e,t){t._=t.p.length;var n=t.p[0],o=void 0!==e&&e!==n;return t.h.O||b("ES5").S(t,e,o),o?(n[q].P&&(Z(t),r(4)),a(e)&&(e=C(t,e),t.l||S(t,e)),t.u&&b("Patches").M(n[q],e,t.u,t.s)):e=C(t,n,[]),Z(t),t.u&&t.v(t.u,t.s),e!==H?e:void 0}function C(e,t,n){if(g(t))return t;var r=t[q];if(!r)return i(t,(function(o,a){return D(e,r,t,o,a,n)}),!0),t;if(r.A!==e)return t;if(!r.P)return S(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var o=4===r.i||5===r.i?r.o=m(r.k):r.o;i(3===r.i?new Set(o):o,(function(t,a){return D(e,r,o,t,a,n)})),S(e,o,!1),n&&e.u&&b("Patches").R(r,n,e.u,e.s)}return r.o}function D(e,t,n,r,i,c){if(o(i)){var u=C(e,i,c&&t&&3!==t.i&&!l(t.D,r)?c.concat(r):void 0);if(s(n,r,u),!o(u))return;e.m=!1}if(a(i)&&!g(i)){if(!e.h.N&&e._<1)return;C(e,i),t&&t.A.l||S(e,i)}}function S(e,t,n){void 0===n&&(n=!1),e.h.N&&e.m&&h(t,n)}function I(e,t){var n=e[q];return(n?v(n):e)[t]}function R(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function F(e){e.P||(e.P=!0,e.l&&F(e.l))}function N(e){e.o||(e.o=m(e.t))}function M(e,t,n){var r=d(t)?b("MapSet").T(t,n):p(t)?b("MapSet").F(t,n):e.O?function(e,t){var n=Array.isArray(e),r={i:n?1:0,A:t?t.A:w(),P:!1,I:!1,D:{},l:t,t:e,k:null,o:null,j:null,C:!1},o=r,a=$;n&&(o=[r],a=G);var i=Proxy.revocable(o,a),c=i.revoke,l=i.proxy;return r.k=l,r.j=c,l}(t,n):b("ES5").J(t,n);return(n?n.A:w()).p.push(r),r}function j(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return m(e)}n.d(t,{x:function(){return te}});var L,A,U="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),_="undefined"!=typeof Map,T="undefined"!=typeof Set,z="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=U?Symbol.for("immer-nothing"):((L={})["immer-nothing"]=!0,L),V=U?Symbol.for("immer-draftable"):"__$immer_draftable",q=U?Symbol.for("immer-state"):"__$immer_state",W=("undefined"!=typeof Symbol&&Symbol.iterator,"undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames),B=Object.getOwnPropertyDescriptors||function(e){var t={};return W(e).forEach((function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)})),t},K={},$={get:function(e,t){if(t===q)return e;var n=v(e);if(!l(n,t))return function(e,t,n){var r,o=R(t,n);return o?"value"in o?o.value:null===(r=o.get)||void 0===r?void 0:r.call(e.k):void 0}(e,n,t);var r=n[t];return e.I||!a(r)?r:r===I(e.t,t)?(N(e),e.o[t]=M(e.A.h,r,e)):r},has:function(e,t){return t in v(e)},ownKeys:function(e){return Reflect.ownKeys(v(e))},set:function(e,t,n){var r=R(v(e),t);if(null==r?void 0:r.set)return r.set.call(e.k,n),!0;if(!e.P){var o=I(v(e),t),a=null==o?void 0:o[q];if(a&&a.t===n)return e.o[t]=n,e.D[t]=!1,!0;if(f(n,o)&&(void 0!==n||l(e.t,t)))return!0;N(e),F(e)}return e.o[t]=n,e.D[t]=!0,!0},deleteProperty:function(e,t){return void 0!==I(e.t,t)||t in e.t?(e.D[t]=!1,N(e),F(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=v(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty:function(){r(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){r(12)}},G={};i($,(function(e,t){G[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),G.deleteProperty=function(e,t){return $.deleteProperty.call(this,e[0],t)},G.set=function(e,t,n){return $.set.call(this,e[0],t,n,e[0])};var X=function(){function e(e){this.O=z,this.N=!1,"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var t=e.prototype;return t.produce=function(e,t,n){if("function"==typeof e&&"function"!=typeof t){var o=t;t=e;var i=this;return function(e){var n=this;void 0===e&&(e=o);for(var r=arguments.length,a=Array(r>1?r-1:0),c=1;c<r;c++)a[c-1]=arguments[c];return i.produce(e,(function(e){var r;return(r=t).call.apply(r,[n,e].concat(a))}))}}var c;if("function"!=typeof t&&r(6),void 0!==n&&"function"!=typeof n&&r(7),a(e)){var l=k(this),u=M(this,e,void 0),s=!0;try{c=t(u),s=!1}finally{s?Z(l):P(l)}return"undefined"!=typeof Promise&&c instanceof Promise?c.then((function(e){return E(l,n),x(e,l)}),(function(e){throw Z(l),e})):(E(l,n),x(c,l))}if(!e||"object"!=typeof e){if((c=t(e))===H)return;return void 0===c&&(c=e),this.N&&h(c,!0),c}r(21,e)},t.produceWithPatches=function(e,t){var n,r,o=this;return"function"==typeof e?function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return o.produceWithPatches(t,(function(t){return e.apply(void 0,[t].concat(r))}))}:[this.produce(e,t,(function(e,t){n=e,r=t})),n,r]},t.createDraft=function(e){a(e)||r(8),o(e)&&(e=function(e){return o(e)||r(22,e),function e(t){if(!a(t))return t;var n,r=t[q],o=c(t);if(r){if(!r.P&&(r.i<4||!b("ES5").K(r)))return r.t;r.I=!0,n=j(t,o),r.I=!1}else n=j(t,o);return i(n,(function(t,o){r&&u(r.t,t)===o||s(n,t,e(o))})),3===o?new Set(n):n}(e)}(e));var t=k(this),n=M(this,e,void 0);return n[q].C=!0,P(t),n},t.finishDraft=function(e,t){var n=(e&&e[q]).A;return E(n,t),x(void 0,n)},t.setAutoFreeze=function(e){this.N=e},t.setUseProxies=function(e){e&&!z&&r(20),this.O=e},t.applyPatches=function(e,t){var n;for(n=t.length-1;n>=0;n--){var r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}var a=b("Patches").$;return o(e)?a(e,t):this.produce(e,(function(e){return a(e,t.slice(n+1))}))},e}(),J=new X,Q=J.produce,Y=(J.produceWithPatches.bind(J),J.setAutoFreeze.bind(J),J.setUseProxies.bind(J),J.applyPatches.bind(J),J.createDraft.bind(J),J.finishDraft.bind(J),Q),ee=n(67294);function te(e){var t=(0,ee.useState)(e),n=t[1];return[t[0],(0,ee.useCallback)((function(e){n(Y(e))}),[])]}}}]);