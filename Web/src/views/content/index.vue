<template>
    <div class="layoutPages">
      <div class="w">
        <!-- <div>IDData {{ $route.params.id }}</div> -->
        <div class="title">{{doc.title}}</div>
        <div class="introduce">
          <span class="item">发布于: {{doc.create_time}}</span>  |  <span class="item">{{doc.introduce}}</span>
        </div>
        <el-divider></el-divider>
        <div class="content" v-html="doc.content"></div>

      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Getitem } from "@/api/article";
export default {
  name: "content",
  data() {
    return {
        doc:null,
    };
  },
  components: {
  },
  methods: {
    GetItem(id) {
      this.$http(
        Getitem({
          id: id,
        }),
        (res) => {
          console.log(res);
          if (res.code == 200) {
            this.doc = res.data
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
    this.GetItem(this.$route.params.id);
  }
};
</script>
<style>
  img{max-width: 100% !important;}
</style>

<style lang="scss" scoped>
  .title{
    width: 100%;
    font-size: 24px;
    line-height: 24px;
    margin-top: 50px;
  }
  .introduce{
    color: #616161;
    font-size: 14px;
    width: 100%;
    overflow: hidden;
    margin-top: 10px;
  }
  .content{
    width: 100%;
    margin-top: 30px;

  }
    p {
      width: 100%;
      img {width: 100% !important;}
    }
</style>