webpackJsonp([1],{"0pBo":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"wrapper"},[n("div",{staticClass:"dialog"},[n("header",[e._v(e._s(e.title)+"\n            "),n("span",{staticClass:"close",on:{click:e.close}},[e._v("X")])]),e._v(" "),n("main",[e._t("default")],2)])])},r=[],s={render:i,staticRenderFns:r};t.a=s},"5AjW":function(e,t,n){"use strict";t.a={name:"MyDialog",props:["title","visible"],methods:{close:function(){this.$emit("close")}}}},"8av4":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{previewMode:e.previewMode},attrs:{id:"app"}},[n("Topbar",{staticClass:"topbar",on:{preview:e.preview}}),e._v(" "),n("main",[n("Editor",{staticClass:"editor",attrs:{resume:e.resume}}),e._v(" "),n("Preview",{staticClass:"preview",attrs:{resume:e.resume}})],1),e._v(" "),n("el-button",{attrs:{id:"editPreview"},on:{click:e.exitPreview}},[e._v("退出预览")])],1)},r=[],s={render:i,staticRenderFns:r};t.a=s},AMgE:function(e,t){},BVti:function(e,t,n){"use strict";var i=n("zYOK"),r=n("LGt6"),s=n("VU/8"),a=s(i.a,r.a,!1,null,null,null);t.a=a.exports},KvDf:function(e,t,n){"use strict";function i(e){n("RbM9")}var r=n("fV88"),s=n("SAdd"),a=n("VU/8"),o=i,c=a(r.a,s.a,!1,o,null,null);t.a=c.exports},LGt6:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v(e._s(e.title))]),e._v(" "),n("el-form",[e._l(e.items,function(t,i){return n("div",{key:i,staticClass:"container"},[e._l(e.keys,function(i){return n("el-form-item",{key:i,attrs:{label:e.labels[i]}},[n("el-input",{model:{value:t[i],callback:function(n){e.$set(t,i,n)},expression:"work[key]"}})],1)}),e._v(" "),n("i",{staticClass:"el-icon-circle-close",on:{click:function(t){e.removeWorkHistory(i)}}}),e._v(" "),n("hr")],2)}),e._v(" "),n("el-button",{staticStyle:{"margin-top":"20px"},attrs:{type:"primary"},on:{click:e.addWorkHistory}},[e._v("点击添加")])],2)],1)},r=[],s={render:i,staticRenderFns:r};t.a=s},M93x:function(e,t,n){"use strict";function i(e){n("AMgE")}var r=n("xJD8"),s=n("8av4"),a=n("VU/8"),o=i,c=a(r.a,s.a,!1,o,null,null);t.a=c.exports},"Mf+r":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("个人信息")]),e._v(" "),n("el-form",[n("el-form-item",{attrs:{label:"名称"}},[n("el-input",{model:{value:e.profile.name,callback:function(t){e.$set(e.profile,"name",t)},expression:"profile.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"城市"}},[n("el-input",{model:{value:e.profile.city,callback:function(t){e.$set(e.profile,"city",t)},expression:"profile.city"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"出生年月"}},[n("el-input",{model:{value:e.profile.birth,callback:function(t){e.$set(e.profile,"birth",t)},expression:"profile.birth"}})],1)],1)],1)},r=[],s={render:i,staticRenderFns:r};t.a=s},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),r=n("M93x"),s=n("NcP2"),a=(n.n(s),n("uMhA")),o=(n.n(a),n("zL8q")),c=n.n(o),l=n("q8zI");n.n(l);i.default.use(c.a),i.default.config.productionTip=!1,new i.default({el:"#app",template:"<App />",components:{App:r.a}})},NcP2:function(e,t){},RbM9:function(e,t){},SAdd:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"preview"}},[n("h1",[e._v(e._s(e.resume.profile.name))]),e._v(" "),n("p",[e._v(e._s(e.resume.profile.city))]),e._v(" "),n("p",[e._v(e._s(e.resume.profile.birth))]),e._v(" "),e.filter(e.resume.workHistory).length>0?n("section",[n("h2",[e._v("工作经历")]),e._v(" "),n("ul",e._l(e.filter(e.resume.workHistory),function(t){return n("li",[n("p",[e._v("公司："),n("span",[e._v(e._s(t.company))])]),e._v(" "),n("p",[e._v("工作内容："),n("span",[e._v(e._s(t.content))])])])}))]):e._e(),e._v(" "),e.filter(e.resume.studyHistory).length>0?n("section",[n("h2",[e._v("学习经历")]),e._v(" "),n("ul",e._l(e.filter(e.resume.studyHistory),function(t){return n("li",[n("p",[e._v("学校："),n("span",[e._v(e._s(t.school))])]),e._v(" "),n("p",[e._v("时间："),n("span",[e._v(e._s(t.duration))])]),e._v(" "),n("p",[e._v("学位："),n("span",[e._v(e._s(t.degree))])])])}))]):e._e(),e._v(" "),e.filter(e.resume.projects).length>0?n("section",[n("h2",[e._v("项目经历")]),e._v(" "),n("ul",e._l(e.filter(e.resume.projects),function(t){return n("li",[n("p",[e._v("项目："),n("span",[e._v(e._s(t.name))])]),e._v(" "),n("p",[e._v("项目内容："),n("span",[e._v(e._s(t.content))])])])}))]):e._e(),e._v(" "),e.filter(e.resume.wards).length>0?n("section",[n("h2",[e._v("荣获奖励")]),e._v(" "),n("ul",e._l(e.filter(e.resume.wards),function(t){return n("li",[n("p",[e._v("奖励详情："),n("span",[e._v(e._s(t.name))])])])}))]):e._e(),e._v(" "),n("section",{attrs:{id:"contact"}},[n("p",[e._v(e._s(e.resume.contacts.qq))]),e._v(" "),n("p",[e._v(e._s(e.resume.contacts.phone))]),e._v(" "),n("p",[e._v(e._s(e.resume.contacts.email))])])])},r=[],s={render:i,staticRenderFns:r};t.a=s},V3b2:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"topbar"}},[n("div",{staticClass:"logo"},[e._v("\n        Resumer\n    ")]),e._v(" "),n("div",{staticClass:"actions"},[n("el-button",{attrs:{type:"primary",href:"#"},on:{click:function(t){t.preventDefault(),e.signUpDialogVisible=!0}}},[e._v("注册")]),e._v(" "),n("MyDialog",{attrs:{title:"注册",visible:e.signUpDialogVisible},on:{close:function(t){e.signUpDialogVisible=!1}}},[e._v("\n            我就是 slot 内容\n        ")]),e._v(" "),n("el-button",[e._v("登录")]),e._v(" "),n("el-button",{attrs:{type:"primary"}},[e._v("保存")]),e._v(" "),n("el-button",{on:{click:e.preview}},[e._v("预览")])],1)])},r=[],s={render:i,staticRenderFns:r};t.a=s},"ZU+E":function(e,t){},ZzzE:function(e,t,n){"use strict";function i(e){n("ZU+E")}var r=n("5AjW"),s=n("0pBo"),a=n("VU/8"),o=i,c=a(r.a,s.a,!1,o,"data-v-a5cfde12",null);t.a=c.exports},"aek+":function(e,t,n){"use strict";function i(e){n("k/Ew")}var r=n("pIzI"),s=n("kvbX"),a=n("VU/8"),o=i,c=a(r.a,s.a,!1,o,null,null);t.a=c.exports},eCgV:function(e,t,n){"use strict";var i=n("ZzzE");t.a={name:"Topbar",data:function(){return{signUpDialogVisible:!1}},components:{MyDialog:i.a},methods:{preview:function(){this.$emit("preview")}}}},fV88:function(e,t,n){"use strict";t.a={props:["resume"],methods:{filter:function(e){var t=this;return e.filter(function(e){return!t.isEmpty(e)})},isEmpty:function(e){var t=!0;for(var n in e)if(e[n]){t=!1;break}return t}}}},"k/Ew":function(e,t){},kvbX:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"editor"}},[n("nav",[n("ol",e._l([0,1,2,3,4,5],function(t){return n("li",{key:t,class:{active:e.currentTab===t},on:{click:function(n){e.currentTab=t}}},[n("svg",{staticClass:"icon"},[n("use",{attrs:{"xlink:href":"#icon-"+e.icons[t]}})])])}))]),e._v(" "),n("ol",{staticClass:"panes"},[n("li",{class:{active:0===e.currentTab}},[n("ProfileEditor",{attrs:{profile:e.resume.profile}})],1),e._v(" "),n("li",{class:{active:1===e.currentTab}},[n("ArrayEditor",{attrs:{items:e.resume.workHistory,labels:{company:"公司",content:"工作内容"},title:"工作经历"}})],1),e._v(" "),n("li",{class:{active:2===e.currentTab}},[n("ArrayEditor",{attrs:{items:e.resume.studyHistory,labels:{school:"学校",duration:"时间",degree:"学位"},title:"学习经历"}})],1),e._v(" "),n("li",{class:{active:3===e.currentTab}},[n("ArrayEditor",{attrs:{items:e.resume.projects,labels:{name:"项目",content:"项目内容"},title:"项目经历"}})],1),e._v(" "),n("li",{class:{active:4===e.currentTab}},[n("ArrayEditor",{attrs:{items:e.resume.wards,labels:{name:"奖励详情"},title:"获得奖励"}})],1),e._v(" "),n("li",{class:{active:5===e.currentTab}},[n("h2",[e._v("联系方式")]),e._v(" "),n("el-form",[n("el-form-item",{attrs:{label:"QQ"}},[n("el-input",{model:{value:e.resume.contacts.qq,callback:function(t){e.$set(e.resume.contacts,"qq",t)},expression:"resume.contacts.qq"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"手机"}},[n("el-input",{model:{value:e.resume.contacts.phone,callback:function(t){e.$set(e.resume.contacts,"phone",t)},expression:"resume.contacts.phone"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"邮箱"}},[n("el-input",{model:{value:e.resume.contacts.email,callback:function(t){e.$set(e.resume.contacts,"email",t)},expression:"resume.contacts.email"}})],1)],1)],1)])])},r=[],s={render:i,staticRenderFns:r};t.a=s},n1Xq:function(e,t){},pIzI:function(e,t,n){"use strict";var i=n("t6oR"),r=n("BVti");t.a={components:{ProfileEditor:i.a,ArrayEditor:r.a},props:["resume"],data:function(){return{currentTab:0,icons:["shenfengzheng4","shubao","shu","xiangmu","jiangbei","dianhua"]}}}},q8zI:function(e,t){},t6oR:function(e,t,n){"use strict";var i=n("tTnZ"),r=n("Mf+r"),s=n("VU/8"),a=s(i.a,r.a,!1,null,null,null);t.a=a.exports},tTnZ:function(e,t,n){"use strict";t.a={props:["profile"]}},uMhA:function(e,t){},v4YQ:function(e,t,n){"use strict";function i(e){n("n1Xq")}var r=n("eCgV"),s=n("V3b2"),a=n("VU/8"),o=i,c=a(r.a,s.a,!1,o,null,null);t.a=c.exports},xJD8:function(e,t,n){"use strict";var i=n("v4YQ"),r=n("aek+"),s=n("KvDf");t.a={data:function(){return{previewMode:!1,resume:{profile:{name:"",city:"",birth:""},workHistory:[{company:"",content:""}],studyHistory:[{school:"",duration:"",degree:""}],projects:[{name:"",content:""}],wards:[{name:""}],contacts:[{qq:"",email:"",phone:""}]}}},methods:{exitPreview:function(){this.previewMode=!1},preview:function(){this.previewMode=!0}},components:{Topbar:i.a,Editor:r.a,Preview:s.a}}},zYOK:function(e,t,n){"use strict";var i=n("fZjL"),r=n.n(i);t.a={props:["items","labels","title"],computed:{keys:function(){return r()(this.items[0])}},methods:{addWorkHistory:function(){var e={};this.keys.map(function(t){e[t]=""}),this.items.push({empty:e})},removeWorkHistory:function(e){this.items.splice(e,1)}}}}},["NHnr"]);
//# sourceMappingURL=app.aad9fc7bc1e238b0c708.js.map