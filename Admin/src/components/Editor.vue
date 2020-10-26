<template>
  <div id="editor">
    <vue-editor ref="editor" v-model="strHtml" :disabled='!!disabled' useCustomImageHandler  @image-added="handleImageAdded"></vue-editor>
  </div>
</template>
<script>
import { VueEditor } from "vue2-editor";
import { upload } from "@/api/common";
export default {
  name: "Editor",
  props: ["content", "disabled"],
  data() {
    return {
      strHtml: ""
    };
  },
  components: { VueEditor },
  watch: {
    $attrs(val) {
      this.strHtml = val.value;
    },
    strHtml(newval) {
      this.$emit("input", newval);
    }
  },
  methods: {
    handleImageAdded: function(file, Editor, cursorLocation, resetUploader) {

      const formData = new FormData();
      formData.append("file", file);
      formData.append("uploadKey", "articleimg");
      this.$http(upload(formData), (res) => {
        console.log(res);
        if (res.code == 200) {
          let url = res.data.lodpath
          Editor.insertEmbed(cursorLocation, 'image', `${url}`)
          resetUploader()
        } else {
          this.$message({
            message: res.msg,
            type: "error",
            duration: 5 * 1000,
          });
        }
      })

    }
  }
};
</script>