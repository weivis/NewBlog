(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78e595b7"],{"707c":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"layoutPages"},[e("div",{staticClass:"w"},[e("el-row",{attrs:{gutter:25}},t._l(t.tableData,(function(a,n){return e("el-col",{key:"project"+n,attrs:{xs:24,sm:12,md:12,lg:8,xl:8}},[e("div",{staticClass:"item"},[e("router-link",{attrs:{to:"/content/"+a.id}},[e("div",{staticClass:"filter",style:t.filter},[e("div",{staticClass:"infobox"},[e("div",{staticClass:"name"},[t._v(t._s(a.title))]),e("div",{staticClass:"info"},[t._v(t._s(a.introduce))]),e("div",{staticClass:"morebutton"},[t._v("了解详细>")])])]),e("div",{staticClass:"cover"},[e("img",{attrs:{src:a.cover}})])])],1)])})),1),t.total>0?e("Pagination",{attrs:{page:t.currentPage,pageCount:t.totalPage,total:t.total},on:{pagination:function(a){return t.getList()},"update:page":function(a){t.currentPage=a},"update:pageCount":function(a){t.totalPage=a},"update:page-count":function(a){t.totalPage=a},"update:total":function(a){t.total=a}}}):t._e()],1)])])},o=[],s=e("2423"),i=e("1799"),c={name:"project",data:function(){return{filter:{backgroundImage:"url("+e("ad8d")+")"},currentPage:1,total:0,totalPage:0,tableData:[]}},methods:{getList:function(){var t=this;this.$http(Object(s["b"])({querypage:this.currentPage,category:3}),(function(a){200==a.code?(t.total=a.data.total,t.currentPage=a.data.currentPage,t.totalPage=a.data.totalPages,t.tableData=a.data.result):t.$message({message:a.msg,type:"error",duration:5e3})}))}},components:{Pagination:i["a"]},created:function(){this.getList()}},r=c,u=(e("b96d"),e("2877")),l=Object(u["a"])(r,n,o,!1,null,"6230c53b",null);a["default"]=l.exports},ad8d:function(t,a,e){t.exports=e.p+"img/myproject-1.6eeca0ac.png"},b96d:function(t,a,e){"use strict";var n=e("ce60"),o=e.n(n);o.a},ce60:function(t,a,e){}}]);
//# sourceMappingURL=chunk-78e595b7.15493f08.js.map