(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b061bd2"],{"230c":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"layoutPages"},[e("div",{staticClass:"w"},[e("el-row",{attrs:{gutter:25}},t._l(t.tableData,(function(a,n){return e("el-col",{key:"project"+n,attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[e("div",{staticClass:"item"},[e("router-link",{attrs:{to:"/content/"+a.id}},[e("div",{staticClass:"coverw"},[e("img",{staticClass:"cover",attrs:{src:a.cover}})]),e("div",{staticClass:"infobox"},[e("div",{staticClass:"name"},[t._v(t._s(a.title))]),e("div",{staticClass:"info"},[t._v(t._s(a.introduce))])])])],1)])})),1),t.total>0?e("Pagination",{attrs:{page:t.currentPage,pageCount:t.totalPage,total:t.total},on:{pagination:function(a){return t.getList()},"update:page":function(a){t.currentPage=a},"update:pageCount":function(a){t.totalPage=a},"update:page-count":function(a){t.totalPage=a},"update:total":function(a){t.total=a}}}):t._e()],1)])])},o=[],s=e("2423"),i=e("1799"),r={name:"index",data:function(){return{tableData:[],currentPage:1,total:0,totalPage:0}},methods:{getList:function(){var t=this;this.$http(Object(s["b"])({querypage:this.currentPage,category:2}),(function(a){200==a.code?(t.total=a.data.total,t.currentPage=a.data.currentPage,t.totalPage=a.data.totalPages,t.tableData=a.data.result):t.$message({message:a.msg,type:"error",duration:5e3})}))}},components:{Pagination:i["a"]},created:function(){this.getList()}},c=r,u=(e("960b"),e("2877")),l=Object(u["a"])(c,n,o,!1,null,"5e4df488",null);a["default"]=l.exports},"960b":function(t,a,e){"use strict";var n=e("a662"),o=e.n(n);o.a},a662:function(t,a,e){}}]);
//# sourceMappingURL=chunk-1b061bd2.433b7ac1.js.map