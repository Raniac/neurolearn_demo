webpackJsonp([15],{"8tu3":function(t,n){},"E+KG":function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e("7+uW"),i={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("el-menu",{attrs:{"default-active":"1",id:"nav-menu"}},[e("div",{staticClass:"logo"},[e("router-link",{staticClass:"nav-title",attrs:{to:"/"}},[t._v("\n        NEURO-LEARN\n      ")])],1),t._v(" "),e("el-menu-item",{attrs:{index:"1"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/profile"}},[e("i",{staticClass:"el-icon-notebook-2"}),t._v(" Profile")])],1),t._v(" "),e("el-submenu",{attrs:{index:"2"}},[e("template",{slot:"title"},[e("div",[e("i",{staticClass:"el-icon-folder-opened"}),t._v(" "),e("span",{staticStyle:{"font-size":"16px",color:"#E8E8E8"}},[t._v("Projects")])])]),t._v(" "),e("el-menu-item",{attrs:{index:"2-1"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/projects/overview"}},[e("i",{staticClass:"el-icon-files"}),t._v(" Overview")])],1),t._v(" "),e("el-submenu",{attrs:{index:"2-2"}},[e("template",{slot:"title"},[e("div",[e("i",{staticClass:"el-icon-upload"}),t._v(" "),e("span",{staticStyle:{"font-size":"16px",color:"#E8E8E8"}},[t._v("Data")])])]),t._v(" "),e("el-menu-item",{attrs:{index:"2-2-1"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/projects/data/sz_with_sfmri"}},[e("i",{staticClass:"el-icon-document"}),t._v("SZ with s/fMRI")])],1),t._v(" "),e("el-menu-item",{attrs:{index:"2-2-2"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/projects/data/ad_with_smri"}},[e("i",{staticClass:"el-icon-document"}),t._v("AD with sMRI")])],1),t._v(" "),e("el-menu-item",{attrs:{index:"2-2-3"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/projects/data/sz_with_fmri"}},[e("i",{staticClass:"el-icon-document"}),t._v("SZ with fMRI")])],1)],2)],2),t._v(" "),e("el-submenu",{attrs:{index:"3"}},[e("template",{slot:"title"},[e("div",[e("i",{staticClass:"el-icon-pie-chart"}),t._v(" "),e("span",{staticStyle:{"font-size":"16px",color:"#E8E8E8"}},[t._v("Analysis")])])]),t._v(" "),e("el-menu-item",{attrs:{index:"3-1"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/analysis/overview"}},[e("i",{staticClass:"el-icon-menu"}),t._v(" Overview")])],1),t._v(" "),e("el-submenu",{attrs:{index:"3-2"}},[e("template",{slot:"title"},[e("div",[e("i",{staticClass:"el-icon-s-order"}),t._v(" "),e("span",{staticStyle:{"font-size":"16px",color:"#E8E8E8"}},[t._v("New Task")])])]),t._v(" "),e("el-menu-item",{attrs:{index:"3-2-1"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/analysis/newtask/newsa"}},[e("i",{staticClass:"el-icon-edit-outline"}),t._v("Statistical Analysis")])],1),t._v(" "),e("el-menu-item",{attrs:{index:"3-2-2"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/analysis/newtask/newml"}},[e("i",{staticClass:"el-icon-edit-outline"}),t._v("Machine Learning")])],1),t._v(" "),e("el-menu-item",{attrs:{index:"3-2-3"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/analysis/newtask/newdl"}},[e("i",{staticClass:"el-icon-edit-outline"}),t._v("Deep Learning")])],1)],2),t._v(" "),e("el-menu-item",{attrs:{index:"3-3"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/analysis/submissions"}},[e("i",{staticClass:"el-icon-document-copy"}),t._v(" Submissions")])],1),t._v(" "),e("el-menu-item",{attrs:{index:"3-4"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/analysis/viewer"}},[e("i",{staticClass:"el-icon-view"}),t._v(" Viewer")])],1)],2),t._v(" "),e("el-menu-item",{attrs:{index:"4"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/help"}},[e("i",{staticClass:"el-icon-question"}),t._v(" Help")])],1)],1)],1)},staticRenderFns:[]};var a=e("VU/8")({},i,!1,function(t){e("RjO9")},null,null).exports,l=e("mtWM"),o=e.n(l),r={data:function(){return{avatar_url:"https://avatars2.githubusercontent.com/u/17725948?s=460&v=4",search:"",submissions_table:[]}},mounted:function(){this.showSubmissions()},methods:{showSubmissions:function(){var t=this;o.a.get("http://127.0.0.1:8000/api/overview_submissions").then(function(n){var e=n.data;0===e.error_num?t.submissions_table=e.list:(t.$message.error("Failed!"),console.log(e.msg))})},goToProfile:function(){this.$router.replace({path:"/profile",component:function(t){return e.e(2).then(function(){var n=[e("GEt+")];t.apply(null,n)}.bind(this)).catch(e.oe)}})},goToAnalysis:function(){this.$router.replace({path:"/analysis/overview",component:function(t){return e.e(0).then(function(){var n=[e("2xmG")];t.apply(null,n)}.bind(this)).catch(e.oe)}})},onTaskClick:function(t){this.$router.push({path:"/analysis/viewer",query:{taskid:t}})},goToSubmissions:function(){this.$router.replace({path:"/analysis/submissions",component:function(t){return e.e(1).then(function(){var n=[e("IMhb")];t.apply(null,n)}.bind(this)).catch(e.oe)}})},signOut:function(){console.log("Signed out.")}}},c={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("el-row",{staticClass:"top-bar"},[e("div",{staticClass:"top-wrapper"},[e("div",{staticClass:"user-area pull-right"},[e("div",{staticClass:"user-avatar"},[e("span",{staticClass:"avatar-img",style:{backgroundImage:"url("+t.avatar_url+")"}}),t._v(" "),e("div",{staticClass:"avatar-drop-menu"},[e("ul",[e("li",{on:{click:t.goToProfile}},[e("i",{staticClass:"iconfont"},[t._v("")]),t._v("Raniac")]),t._v(" "),e("li",{on:{click:t.signOut}},[e("i",{staticClass:"iconfont"},[t._v("")]),t._v("Logout")])])])])]),t._v(" "),e("el-col",{staticClass:"search-area pull-right",attrs:{span:8}},[e("el-form",[e("el-form-item",[e("i",{staticClass:"el-icon-search"}),t._v(" "),e("el-input",{attrs:{placeholder:"Search"},model:{value:t.search,callback:function(n){t.search=n},expression:"search"}})],1)],1)],1),t._v(" "),e("div",{staticClass:"new-message-area pull-right"},[e("div",{staticClass:"new-message-icon"},[e("el-badge",{staticClass:"new-message-badge"},[e("el-button",{staticClass:"new-message-button",attrs:{size:"small",type:"primary",icon:"el-icon-message",circle:""},on:{click:t.goToAnalysis}})],1),t._v(" "),e("div",{staticClass:"new-message-drop-menu"},[e("ul",[t._l(t.submissions_table,function(n){return e("li",{key:n.fields.task_id,on:{click:function(e){return t.onTaskClick(n.fields.task_id)}}},[t._v(t._s(n.fields.task_id)+" "+t._s(n.fields.task_status)+"!")])}),t._v(" "),e("li",{staticStyle:{"text-align":"center",color:"#00CCFF"},on:{click:t.goToSubmissions}},[t._v("- SHOW ALL -")])],2)])],1)])],1)])},staticRenderFns:[]};var u={components:{TopBar:e("VU/8")(r,c,!1,function(t){e("cPN/")},null,null).exports}},p={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"container"}},[n("TopBar"),this._v(" "),n("transition",{attrs:{name:"slide-fade"}},[n("router-view",{staticClass:"content"})],1)],1)},staticRenderFns:[]};var v={name:"app",components:{NavMenu:a,Container:e("VU/8")(u,p,!1,function(t){e("8tu3")},null,null).exports}},h={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("NavMenu"),this._v(" "),n("Container")],1)},staticRenderFns:[]};var d=e("VU/8")(v,h,!1,function(t){e("E+KG")},null,null).exports,m=e("/ocq");s.default.use(m.a);var f=new m.a({routes:[{path:"/",component:function(t){return e.e(3).then(function(){var n=[e("vkyI")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/profile",component:function(t){return e.e(2).then(function(){var n=[e("GEt+")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/projects/overview",component:function(t){return e.e(5).then(function(){var n=[e("HAYE")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/projects/data/ad_with_smri",component:function(t){return e.e(11).then(function(){var n=[e("5ada")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/projects/data/sz_with_fmri",component:function(t){return e.e(10).then(function(){var n=[e("Dao9")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/projects/data/sz_with_sfmri",component:function(t){return e.e(8).then(function(){var n=[e("s8ZH")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/analysis/overview",component:function(t){return e.e(0).then(function(){var n=[e("2xmG")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/analysis/newtask/newdl",component:function(t){return e.e(13).then(function(){var n=[e("mFRJ")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/analysis/newtask/newml",component:function(t){return e.e(4).then(function(){var n=[e("x/tp")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/analysis/newtask/newsa",component:function(t){return e.e(7).then(function(){var n=[e("V+DE")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/analysis/submissions",component:function(t){return e.e(1).then(function(){var n=[e("IMhb")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/analysis/viewer",component:function(t){return e.e(6).then(function(){var n=[e("hXUo")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/help",component:function(t){return e.e(12).then(function(){var n=[e("bsgR")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/test",component:function(t){return e.e(9).then(function(){var n=[e("Y7I0")];t.apply(null,n)}.bind(this)).catch(e.oe)}}]}),_=e("4DWU"),k=e.n(_),C=(e("epTE"),e("BPdd")),b=e.n(C);e("Xcu2");s.default.config.productionTip=!1,s.default.use(k.a),s.default.use(k.a,{locale:b.a}),new s.default({el:"#app",router:f,components:{App:d},template:"<App/>"})},RjO9:function(t,n){},Xcu2:function(t,n){},"cPN/":function(t,n){},epTE:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.7bd9e6960cce1dedeef0.js.map