(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31cc2556"],{"1da4":function(t,e,a){"use strict";var n=a("3a6e"),o=a.n(n);o.a},2934:function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"a",(function(){return r}));var n=a("b775");function o(t){return Object(n["a"])({url:"/upload/",method:"post",data:t,headers:{"Content-Type":"multipart/form-data"}})}function r(t){return Object(n["a"])({url:"/auth/adminLogin",method:"post",data:t})}},"3a6e":function(t,e,a){},4745:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{staticClass:"input"},[a("el-upload",{staticClass:"upload-demo",attrs:{"show-file-list":!1,drag:"",action:"","http-request":t.upLoad,multiple:""}},[t.lodpath?a("img",{staticClass:"avatar",attrs:{src:t.lodpath}}):t._e(),a("i",{staticClass:"el-icon-upload"}),a("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),a("em",[t._v("点击上传")])])])],1),a("el-row",[a("el-button",{on:{click:function(e){return t.push()}}},[t._v("确定")])],1)],1)},o=[],r=a("cfc6"),u=a("2934"),s={name:"photograph",data:function(){return{filename:"",lodpath:""}},components:{},methods:{upLoad:function(t){var e=this,a=new FormData;a.append("file",t.file),a.append("uploadKey","photograph"),this.$http(Object(u["b"])(a),(function(t){console.log(t),200==t.code?(e.filename=t.data.filename,e.lodpath=t.data.lodpath):e.$message({message:t.msg,type:"error",duration:5e3})}))},push:function(){var t=this;this.$http(Object(r["b"])({filename:this.filename}),(function(e){console.log(e),200==e.code?(t.$message({message:e.msg,duration:5e3}),t.$router.push({name:"photographall"})):t.$message({message:e.msg,type:"error",duration:5e3})}))}},created:function(){}},i=s,c=(a("1da4"),a("2877")),l=Object(c["a"])(i,n,o,!1,null,"eab42a78",null);e["default"]=l.exports},cfc6:function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return u}));var n=a("b775");function o(t){return Object(n["a"])({url:"/photograph/Del",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/photograph/Put",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/photograph/Query",method:"post",data:t})}}}]);
//# sourceMappingURL=chunk-31cc2556.6746b099.js.map