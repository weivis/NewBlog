<template>
  <div>

    <el-row class="input">
      <el-upload
        class="upload-demo"
        :show-file-list="false"
        drag
        action
        :http-request="upLoad"
        multiple>
        <img v-if="lodpath" :src="lodpath" class="avatar">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      </el-upload>
    </el-row>

    <el-row><el-button @click="push()">确定</el-button></el-row>

  </div>
</template>

<script>
// @ is an alias to /src
import { Put } from "@/api/photograph";
import { upload } from "@/api/common";
export default {
  name: "photograph",
  data() {
    return {
        filename: "",
        lodpath: "",
    };
  },
  components: {
  },
  methods: {
    upLoad(file) {
      const formData = new FormData();
      formData.append("file", file.file);
      formData.append("uploadKey", "photograph");
      this.$http(upload(formData), (res) => {
        console.log(res);
        if (res.code == 200) {
          this.filename = res.data.filename;
          this.lodpath = res.data.lodpath;
        } else {
          this.$message({
            message: res.msg,
            type: "error",
            duration: 5 * 1000,
          });
        }
      });
    },
    push() {
      this.$http(
        Put({
          filename: this.filename,
        }),
        (res) => {
          console.log(res);
          if (res.code == 200) {
            this.$message({
              message: res.msg,
              duration: 5 * 1000,
            });
            this.$router.push({ name: "photographall" });
          } else {
            this.$message({
              message: res.msg,
              type: "error",
              duration: 5 * 1000,
            });
          }
        }
      );
    }
  },
  created() {
  },
};
</script>
<style lang="scss" scoped>
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
}
.rowbtom {
  margin-bottom: 15px;
}
</style>