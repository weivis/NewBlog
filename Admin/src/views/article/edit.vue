<template>
  <div>
    <el-row class="input" v-if="doc.id"> 文章ID: {{ doc.id }} </el-row>

    <el-row class="input">
      <el-upload
        class="upload-demo"
        :show-file-list="false"
        drag
        action
        :http-request="upLoad"
        multiple
      >
        <img v-if="shownowcover" :src="shownowcover" class="avatar" />
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      </el-upload>
    </el-row>

    <el-row class="input">
      一级分类
      <el-radio-group v-model="doc.category" style="margin-right: 15px">
        <el-radio-button :label="1">作品</el-radio-button>
        <el-radio-button :label="2">文章</el-radio-button>
        <el-radio-button :label="3">项目</el-radio-button>
      </el-radio-group>

      二级分类
      <el-radio-group v-model="doc.subcategory" style="margin-right: 15px">
        <el-radio-button :label="1">设计作品</el-radio-button>
        <el-radio-button :label="2">视频作品</el-radio-button>
      </el-radio-group>
    </el-row>

    <el-row class="input">
      <el-input placeholder="请输入内容" v-model="doc.title">
        <template slot="prepend">标题</template>
      </el-input>
    </el-row>

    <el-row class="input">
      <el-input placeholder="请输入内容" v-model="doc.introduce">
        <template slot="prepend">介绍</template>
      </el-input>
    </el-row>

    <el-row class="input"
      ><editor v-model="doc.content" :content="doc.content" class="editor"
    /></el-row>

    <el-row><el-button @click="putdoc()">确定</el-button></el-row>
  </div>
</template>

<script>
import { Getitem, Putarticle } from "@/api/article";
import { upload } from "@/api/common";
import editor from "@/components/Editor.vue";
export default {
  name: "edit",
  data() {
    return {
      doc: {
        id: "",
        title: "",
        introduce: "",
        content: "",
        category: "",
        subcategory: null,
        cover: "",
      },
      shownowcover: "",
    };
  },
  methods: {
    putdoc() {
      let docdata = this.doc;
      this.$http(
        Putarticle({
          id: docdata.id,
          title: docdata.title,
          introduce: docdata.introduce,
          content: docdata.content,
          category: docdata.category,
          subcategory: docdata.subcategory,
          cover: docdata.cover,
        }),
        (res) => {
          console.log(res);
          if (res.code == 200) {
            this.$message({
              message: res.msg,
              duration: 5 * 1000,
            });
          } else {
            this.$message({
              message: res.msg,
              type: "error",
              duration: 5 * 1000,
            });
          }
        }
      );
    },
    upLoad(file) {
      const formData = new FormData();
      formData.append("file", file.file);
      formData.append("uploadKey", "articlecover");

      this.$http(upload(formData), (res) => {
        console.log(res);
        if (res.code == 200) {
          this.doc.cover = res.data.filename;
          this.shownowcover = res.data.lodpath;
        } else {
          this.$message({
            message: res.msg,
            type: "error",
            duration: 5 * 1000,
          });
        }
      });
    },
    GetItem(id) {
      this.$http(
        Getitem({
          id: id,
        }),
        (res) => {
          console.log(res);
          if (res.code == 200) {
            let doc = this.doc;
            let data = res.data;
            doc.id = data.id;
            doc.title = data.title;
            doc.cover = data.coverfile;
            doc.introduce = data.introduce;
            doc.category = data.category;
            doc.subcategory = data.subcategory;
            doc.content = data.content;
            this.shownowcover = data.cover;
          } else {
            this.$message({
              message: res.msg,
              type: "error",
              duration: 5 * 1000,
            });
          }
        }
      );
    },
  },
  components: {
    editor,
  },
  created() {
    let id = this.$route.query.id;
    if (id) {
      this.GetItem(id);
    }
  },
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 100%;
  display: block;
}
</style>