webpackJsonp([7],{226:function(t,e,n){"use strict";function r(t){l||n(943)}Object.defineProperty(e,"__esModule",{value:!0});var s=n(489),i=n.n(s);for(var a in s)"default"!==a&&function(t){n.d(e,t,function(){return s[t]})}(a);var o=n(945),u=n.n(o),l=!1,c=n(1),f=r,d=c(i.a,u.a,!1,f,"data-v-07639e05",null);d.options.__file="src\\views\\sql\\personalSettings.vue",e.default=d.exports},238:function(t,e,n){"use strict";function r(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=s(e),this.reject=s(n)}var s=n(83);t.exports.f=function(t){return new r(t)}},240:function(t,e,n){var r=n(9),s=n(83),i=n(2)("species");t.exports=function(t,e){var n,a=r(t).constructor;return void 0===a||void 0==(n=r(a)[i])?e:s(n)}},241:function(t,e,n){var r,s,i,a=n(49),o=n(252),u=n(84),l=n(51),c=n(4),f=c.process,d=c.setImmediate,v=c.clearImmediate,p=c.MessageChannel,h=c.Dispatch,_=0,m={},g=function(){var t=+this;if(m.hasOwnProperty(t)){var e=m[t];delete m[t],e()}},y=function(t){g.call(t.data)};d&&v||(d=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return m[++_]=function(){o("function"==typeof t?t:Function(t),e)},r(_),_},v=function(t){delete m[t]},"process"==n(27)(f)?r=function(t){f.nextTick(a(g,t,1))}:h&&h.now?r=function(t){h.now(a(g,t,1))}:p?(s=new p,i=s.port2,s.port1.onmessage=y,r=a(i.postMessage,i,1)):c.addEventListener&&"function"==typeof postMessage&&!c.importScripts?(r=function(t){c.postMessage(t+"","*")},c.addEventListener("message",y,!1)):r="onreadystatechange"in l("script")?function(t){u.appendChild(l("script")).onreadystatechange=function(){u.removeChild(this),g.call(t)}}:function(t){setTimeout(a(g,t,1),0)}),t.exports={set:d,clear:v}},242:function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},243:function(t,e,n){var r=n(9),s=n(16),i=n(238);t.exports=function(t,e){if(r(t),s(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},244:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n){_.default.Notice.error({duration:10,title:e,desc:t?"":n})}Object.defineProperty(e,"__esModule",{value:!0});var i=n(247),a=r(i),o=n(6),u=r(o),l=n(50),c=r(l),f=n(91),d=r(f),v=n(89),p=n(3),h=(r(p),n(28)),_=r(h);c.default.defaults.timeout=3e4,c.default.interceptors.request.use(function(t){var e=u.default.get("token");return e&&(t.headers.Authorization="JWT "+e),t},function(t){return a.default.reject(t)}),c.default.interceptors.response.use(function(t){return t},function(t){if(console.log(_.default),t.response)switch(t.response.status){case 400:s(!1,t.response.request.statusText,t.response.request.responseText);break;case 401:d.default.commit("logout"),v.router.push({name:"login"});break;case 403:s(!1,t.response.statusText,t.response.data.detail);break;case 500:s(!1,t.response.status,t.response.statusText)}return a.default.reject(t)}),e.default=c.default},247:function(t,e,n){t.exports={default:n(248),__esModule:!0}},248:function(t,e,n){n(90),n(29),n(54),n(249),n(256),n(257),t.exports=n(5).Promise},249:function(t,e,n){"use strict";var r,s,i,a,o=n(30),u=n(4),l=n(49),c=n(87),f=n(22),d=n(16),v=n(83),p=n(250),h=n(251),_=n(240),m=n(241).set,g=n(253)(),y=n(238),b=n(242),P=n(243),S=u.TypeError,x=u.process,w=u.Promise,C="process"==c(x),L=function(){},j=s=y.f,q=!!function(){try{var t=w.resolve(1),e=(t.constructor={})[n(2)("species")]=function(t){t(L,L)};return(C||"function"==typeof PromiseRejectionEvent)&&t.then(L)instanceof e}catch(t){}}(),M=function(t){var e;return!(!d(t)||"function"!=typeof(e=t.then))&&e},k=function(t,e){if(!t._n){t._n=!0;var n=t._c;g(function(){for(var r=t._v,s=1==t._s,i=0;n.length>i;)!function(e){var n,i,a=s?e.ok:e.fail,o=e.resolve,u=e.reject,l=e.domain;try{a?(s||(2==t._h&&D(t),t._h=1),!0===a?n=r:(l&&l.enter(),n=a(r),l&&l.exit()),n===e.promise?u(S("Promise-chain cycle")):(i=M(n))?i.call(n,o,u):o(n)):u(r)}catch(t){u(t)}}(n[i++]);t._c=[],t._n=!1,e&&!t._h&&G(t)})}},G=function(t){m.call(u,function(){var e,n,r,s=t._v,i=O(t);if(i&&(e=b(function(){C?x.emit("unhandledRejection",s,t):(n=u.onunhandledrejection)?n({promise:t,reason:s}):(r=u.console)&&r.error&&r.error("Unhandled promise rejection",s)}),t._h=C||O(t)?2:1),t._a=void 0,i&&e.e)throw e.v})},O=function(t){return 1!==t._h&&0===(t._a||t._c).length},D=function(t){m.call(u,function(){var e;C?x.emit("rejectionHandled",t):(e=u.onrejectionhandled)&&e({promise:t,reason:t._v})})},F=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),k(e,!0))},I=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw S("Promise can't be resolved itself");(e=M(t))?g(function(){var r={_w:n,_d:!1};try{e.call(t,l(I,r,1),l(F,r,1))}catch(t){F.call(r,t)}}):(n._v=t,n._s=1,k(n,!1))}catch(t){F.call({_w:n,_d:!1},t)}}};q||(w=function(t){p(this,w,"Promise","_h"),v(t),r.call(this);try{t(l(I,this,1),l(F,this,1))}catch(t){F.call(this,t)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=n(254)(w.prototype,{then:function(t,e){var n=j(_(this,w));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=C?x.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&k(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=l(I,t,1),this.reject=l(F,t,1)},y.f=j=function(t){return t===w||t===a?new i(t):s(t)}),f(f.G+f.W+f.F*!q,{Promise:w}),n(31)(w,"Promise"),n(255)("Promise"),a=n(5).Promise,f(f.S+f.F*!q,"Promise",{reject:function(t){var e=j(this);return(0,e.reject)(t),e.promise}}),f(f.S+f.F*(o||!q),"Promise",{resolve:function(t){return P(o&&this===a?w:this,t)}}),f(f.S+f.F*!(q&&n(88)(function(t){w.all(t).catch(L)})),"Promise",{all:function(t){var e=this,n=j(e),r=n.resolve,s=n.reject,i=b(function(){var n=[],i=0,a=1;h(t,!1,function(t){var o=i++,u=!1;n.push(void 0),a++,e.resolve(t).then(function(t){u||(u=!0,n[o]=t,--a||r(n))},s)}),--a||r(n)});return i.e&&s(i.v),n.promise},race:function(t){var e=this,n=j(e),r=n.reject,s=b(function(){h(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return s.e&&r(s.v),n.promise}})},250:function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},251:function(t,e,n){var r=n(49),s=n(85),i=n(86),a=n(9),o=n(52),u=n(53),l={},c={},e=t.exports=function(t,e,n,f,d){var v,p,h,_,m=d?function(){return t}:u(t),g=r(n,f,e?2:1),y=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(v=o(t.length);v>y;y++)if((_=e?g(a(p=t[y])[0],p[1]):g(t[y]))===l||_===c)return _}else for(h=m.call(t);!(p=h.next()).done;)if((_=s(h,g,p.value,e))===l||_===c)return _};e.BREAK=l,e.RETURN=c},252:function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},253:function(t,e,n){var r=n(4),s=n(241).set,i=r.MutationObserver||r.WebKitMutationObserver,a=r.process,o=r.Promise,u="process"==n(27)(a);t.exports=function(){var t,e,n,l=function(){var r,s;for(u&&(r=a.domain)&&r.exit();t;){s=t.fn,t=t.next;try{s()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(u)n=function(){a.nextTick(l)};else if(!i||r.navigator&&r.navigator.standalone)if(o&&o.resolve){var c=o.resolve();n=function(){c.then(l)}}else n=function(){s.call(r,l)};else{var f=!0,d=document.createTextNode("");new i(l).observe(d,{characterData:!0}),n=function(){d.data=f=!f}}return function(r){var s={fn:r,next:void 0};e&&(e.next=s),t||(t=s,n()),e=s}}},254:function(t,e,n){var r=n(10);t.exports=function(t,e,n){for(var s in e)n&&t[s]?t[s]=e[s]:r(t,s,e[s]);return t}},255:function(t,e,n){"use strict";var r=n(4),s=n(5),i=n(7),a=n(11),o=n(2)("species");t.exports=function(t){var e="function"==typeof s[t]?s[t]:r[t];a&&e&&!e[o]&&i.f(e,o,{configurable:!0,get:function(){return this}})}},256:function(t,e,n){"use strict";var r=n(22),s=n(5),i=n(4),a=n(240),o=n(243);r(r.P+r.R,"Promise",{finally:function(t){var e=a(this,s.Promise||i.Promise),n="function"==typeof t;return this.then(n?function(n){return o(e,t()).then(function(){return n})}:t,n?function(n){return o(e,t()).then(function(){throw n})}:t)}})},257:function(t,e,n){"use strict";var r=n(22),s=n(238),i=n(242);r(r.S,"Promise",{try:function(t){var e=s.f(this),n=i(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},260:function(t,e,n){"use strict";function r(t){a||n(261)}Object.defineProperty(e,"__esModule",{value:!0});var s=n(263),i=n.n(s),a=!1,o=n(1),u=r,l=o(null,i.a,!1,u,"data-v-392a7ca6",null);l.options.__file="src\\views\\my-components\\public\\copyright.vue",e.default=l.exports},261:function(t,e,n){var r=n(262);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(15)("8580ff58",r,!1,{})},262:function(t,e,n){e=t.exports=n(14)(!1),e.push([t.i,"\ndiv[data-v-392a7ca6] {\n  margin-top: 20px;\n}\nspan[data-v-392a7ca6] {\n  color: #6c6c6c\n}\n\n",""])},263:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("center",[n("span",[t._v(" Copyright © 2018 See ")])])],1)},s=[];r._withStripped=!0;var i={render:r,staticRenderFns:s};e.default=i},296:function(t,e,n){"use strict";function r(t){return(0,l.default)({url:f,method:"get",params:t})}function s(t){return(0,l.default)({url:c,method:"get",params:t})}function i(t,e){return(0,l.default)({url:c+t+"/",method:"put",data:e})}function a(t){return(0,l.default)({url:c,method:"post",data:t})}function o(t){return(0,l.default)({url:c+t+"/",method:"delete"})}Object.defineProperty(e,"__esModule",{value:!0}),e.GetDbList=r,e.GetClusterList=s,e.UpdateCluster=i,e.CreateCluster=a,e.DeleteCluster=o;var u=n(244),l=function(t){return t&&t.__esModule?t:{default:t}}(u),c="/api/sqlmng/dbcluster/",f="/api/sqlmng/dbconfs/"},314:function(t,e,n){"use strict";function r(t){return(0,u.default)({url:l,method:"post",data:t})}function s(t){return(0,u.default)({url:c,method:"post",data:t})}function i(t){return(0,u.default)({url:f,method:"get",params:t})}function a(t){return(0,u.default)({url:f,method:"post",data:t})}Object.defineProperty(e,"__esModule",{value:!0}),e.GetSelectData=r,e.CheckSql=s,e.GetPersonalSettings=i,e.CreatePersonalSettings=a;var o=n(244),u=function(t){return t&&t.__esModule?t:{default:t}}(o),l="/api/sqlmng/autoselects/",c="/api/sqlmng/inceptioncheck/",f="/api/sqlmng/personalsettings/"},385:function(t,e,n){"use strict";function r(t){return(0,a.default)({url:o,method:"get",params:t})}function s(t){return(0,a.default)({url:o,method:"post",data:t})}Object.defineProperty(e,"__esModule",{value:!0}),e.GetMailActions=r,e.SetMailActions=s;var i=n(244),a=function(t){return t&&t.__esModule?t:{default:t}}(i),o="/api/sqlmng/mailactions/"},489:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(314),s=(n(385),n(296)),i=n(260),a=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={components:{copyright:a.default},data:function(){return{showLeader:!0,dbList:[],clusterList:[],leaderList:[],adminList:[],queryParams:{cluster:"",env:"prd"},personalSettings:{dbs:[],leader:null,admin_mail:null,mail_list_extend:""}}},created:function(){this.handleInitData()},methods:{notice:function(t,e){this.$Notice.success({title:t,duration:6,desc:e})},getDbList:function(t){var e=[];for(var n in t)e.push(t[n].id);return e},getLeaderID:function(t){var e=null;return null!=t&&(e=t.id),e},handleInitData:function(){this.handleSelect(),this.handleGetClusterList(),this.handleGetPersonalSettings()},handleChange:function(t){"prd"==t?this.showLeader=!0:"test"==t&&(this.showLeader=!1),this.handleSelect(),this.handleGetPersonalSettings()},handleGetMailActions:function(){},handleGetPersonalSettings:function(){var t=this;(0,r.GetPersonalSettings)({env:this.queryParams.env}).then(function(e){var n=e.data.results[0];t.personalSettings.dbs=t.getDbList(n.db_list),"prd"==t.queryParams.env&&(t.personalSettings.leader=t.getLeaderID(n.leader),t.personalSettings.admin_mail=n.admin_mail,t.personalSettings.mail_list_extend=n.mail_list_extend)})},handleSelect:function(){var t=this,e=this.queryParams;(0,r.GetSelectData)(e).then(function(e){t.dbList=e.data.data.dbs,t.leaderList=e.data.data.treaters,t.adminList=e.data.data.admins})},handleGetClusterList:function(){var t=this;this.spinShow=!0,(0,s.GetClusterList)(this.getClusterParams).then(function(e){t.spinShow=!1,t.clusterList=e.data.results,t.setDefaultCluster()})},setDefaultCluster:function(){0!=this.clusterList.length&&(this.queryParams.cluster=this.clusterList[0].id)},handleCreatePersonalSettings:function(){var t=this;this.personalSettings.cluster=this.queryParams.cluster,this.personalSettings.env=this.queryParams.env;var e=this.personalSettings;(0,r.CreatePersonalSettings)(e).then(function(e){200==e.status&&t.notice("服务器提示","设置 保存成功");t.handleInitData()})}}}},943:function(t,e,n){var r=n(944);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(15)("10800cd0",r,!1,{})},944:function(t,e,n){e=t.exports=n(14)(!1),e.push([t.i,"\n.left20[data-v-07639e05] {\n  margin-left: 20px\n}\n",""])},945:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Card",[n("Row",[n("Col",{attrs:{span:"12"}},[n("Alert",{attrs:{"show-icon":""}},[t._v("订阅")]),t._v(" "),n("div",[n("Form",{staticClass:"step-form",attrs:{"label-width":100}},[n("FormItem",{attrs:{label:"集群"}},[n("Select",{attrs:{filterable:""},on:{"on-change":t.handleChange},model:{value:t.queryParams.cluster,callback:function(e){t.$set(t.queryParams,"cluster",e)},expression:"queryParams.cluster"}},t._l(t.clusterList,function(e){return n("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.name))])}))],1),t._v(" "),n("FormItem",{attrs:{label:"环境"}},[n("RadioGroup",{on:{"on-change":t.handleChange},model:{value:t.queryParams.env,callback:function(e){t.$set(t.queryParams,"env",e)},expression:"queryParams.env"}},[n("Radio",{attrs:{label:"prd"}},[t._v("生产")]),t._v(" "),n("Radio",{attrs:{label:"test"}},[t._v("测试")])],1)],1),t._v(" "),n("FormItem",{attrs:{label:"数据库"}},[n("Select",{attrs:{multiple:"",filterable:""},model:{value:t.personalSettings.dbs,callback:function(e){t.$set(t.personalSettings,"dbs",e)},expression:"personalSettings.dbs"}},t._l(t.dbList,function(e){return n("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.name))])}))],1),t._v(" "),t.showLeader?n("FormItem",{attrs:{label:"工单核准人"}},[n("Select",{attrs:{filterable:""},model:{value:t.personalSettings.leader,callback:function(e){t.$set(t.personalSettings,"leader",e)},expression:"personalSettings.leader"}},t._l(t.leaderList,function(e){return n("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.username))])}))],1):t._e(),t._v(" "),t.showLeader?n("FormItem",{attrs:{label:"管理员组收件人"}},[n("Select",{attrs:{filterable:""},model:{value:t.personalSettings.admin_mail,callback:function(e){t.$set(t.personalSettings,"admin_mail",e)},expression:"personalSettings.admin_mail"}},t._l(t.adminList,function(e){return n("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.username))])}))],1):t._e(),t._v(" "),t.showLeader?n("FormItem",{attrs:{label:"邮件扩展"}},[n("Input",{attrs:{type:"textarea",rows:3,placeholder:"其它需要收件的邮箱地址，多个以空格分隔"},model:{value:t.personalSettings.mail_list_extend,callback:function(e){t.$set(t.personalSettings,"mail_list_extend",e)},expression:"personalSettings.mail_list_extend"}})],1):t._e(),t._v(" "),n("FormItem",{attrs:{label:"操作"}},[n("Button",{attrs:{type:"primary"},on:{click:t.handleCreatePersonalSettings}},[t._v("保存")])],1)],1)],1)],1),t._v(" "),n("Col",{attrs:{span:"12"}},[n("div",{staticStyle:{"margin-left":"20px"}},[n("Alert",{attrs:{type:"warning","show-icon":"",closable:""}},[n("b",[t._v("订阅设置")]),t._v(" "),n("template",{slot:"desc"},[n("p",{staticClass:"left20"},[t._v("\n              您可以在设置里指定常用的数据库及leader，提交工单时只显示这些数据供您选择。\n            ")]),t._v(" "),n("p",[n("b",[t._v("1")]),t._v(".  关于工单核准人\n            ")]),t._v(" "),n("p",{staticClass:"left20"},[n("b",[t._v("1.1")]),t._v(". 研发角色：工单核准人是同组的经理（角色/组 在用户管理里设置）。\n            ")]),t._v(" "),n("p",{staticClass:"left20"},[n("b",[t._v("1.2")]),t._v(". 经理/总监/管理员角色：工单核准人是自己。\n            ")]),t._v(" "),n("p",[n("b",[t._v("2")]),t._v(".  关于管理员组收件人\n            ")]),t._v(" "),n("p",{staticClass:"left20"},[n("b",[t._v("2.1")]),t._v(". 指定接收工单邮件的管理员。\n            ")])])],2)],1)])],1)],1),t._v(" "),n("copyright")],1)},s=[];r._withStripped=!0;var i={render:r,staticRenderFns:s};e.default=i}});