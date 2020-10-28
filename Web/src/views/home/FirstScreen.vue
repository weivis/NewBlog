<template>
  <div class="FirstScreen">
    <div class="firstScreenComponents">
      <div class="body" :style="body">
        <div class="h" v-parallax="0.2" style="margin-top:0px">
          <div class="live2d-lvjing">
            <img src="@/assets/home/live2d-lvjing.png" />
            <div></div>
          </div>
          <live2d class="live2d" v-parallax="0.2" />
          <div class="w">
            <div class="txtbox">
              <div class="mycover">
                <div class="title">欢迎来到WeiVi的主页</div>
                <div class="info">
                  我是WeiVi, 可以叫我唯酱, 我没有学历,
                  因为校园暴力初一没读完早早离开学校,<br />
                  凭着自己的努力, 从设计, 到动画, 到编程,
                  通过自学使得自己掌握这些技能 ,如今在某科技公司担任全栈开发.<br />
                  点击上方导航栏可以了解更多作品 或下滑页面.
                </div>
              </div>

              <div class="avt">
                <div class="title">我的在做项目</div>
                <div class="list">
                  <div
                    class="item"
                    v-for="(item, index) in project"
                    :key="'FirstScreen-project' + index"
                  >
                    <router-link :to="'/content/' + item.id">{{
                      item.title
                    }}</router-link>
                  </div>
                </div>
              </div>

              <div class="avt">
                <div class="title">我的最新文章</div>
                <div class="list">
                  <div
                    class="item"
                    v-for="(item, index) in article"
                    :key="'FirstScreen-article' + index"
                  >
                    <router-link :to="'/content/' + item.id">{{
                      item.title
                    }}</router-link>
                  </div>
                </div>
              </div>

              <div class="newbangumi">
                <a
                  href="https://www.bilibili.com/bangumi/media/md28228414/"
                  target="_blank"
                >
                  <div class="title">
                    <div class="txt">近期个人番剧推荐 :</div>
                    <div class="name">{{bangumi.name}}</div>
                  </div>
                  <div class="cover">
                    <div class="lvjing">
                      <img
                        src="@/assets/home/FirstScreen-newbangumi-cover-first.png"
                      />
                    </div>
                    <img :src="bangumi.cover" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Queryarticle } from "@/api/article";
import Live2d from "./Live2d.vue";
export default {
  name: "firstscreen",
  data() {
    return {
      body: {
        backgroundImage:
          "url(" + require("@/assets/home/background1.png") + ")",
      },
      project: [{ title: "Sbpaper 沙雕趣味论文网站", id: "1" }],
      article: [
        { title: "Python + AE云视频渲染解决方案", id: "2" },
        { title: "视频处理转码分发上传解决方案", id: "3" },
      ],
      bangumi:{
        name:"放学后海堤日记",
        cover:require("@/assets/img/bangumi-cover.png")
      }
    };
  },
  components: {
    Live2d,
  },
  methods: {
    getList() {
      this.$http(Queryarticle({
        category: 2,
        indexshow: true,
        per_page: 4
      }), (res) => {
        if (res.code == 200) {
          this.article = res.data.result;
        } else {
          this.$message({
            message: res.msg,
            type: "error",
            duration: 5 * 1000,
          });
        }
      });

      this.$http(Queryarticle({
        category: 3,
        indexshow: true,
        per_page: 2
      }), (res) => {
        // console.log(res);
        if (res.code == 200) {
          this.project = res.data.result;
        } else {
          this.$message({
            message: res.msg,
            type: "error",
            duration: 5 * 1000,
          });
        }
      });
    },
  },
  created() {
    this.getList();
  },
};
</script>

<style lang="scss" scoped>
.live2d-wrap {
  z-index: 50;
  position: absolute;
  right: 15%;
  width: 400px;
  left: inherit;
  bottom: -40px;
}
.live2d-lvjing {
  display: none;
  div{
    margin-top: -10px;
    background-color: #ffffff;
    height: 50vh;
    width: 100%;
  }
}
.firstScreenComponents {
  .body {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
    background-position: top right;
    background-repeat: no-repeat;
  }
  .h {
    height: 770px;
    margin-bottom: 60px;
  }
  .w {
    max-width: 1300px;
    width: 80%;
    margin: 0 auto;
  }
}

.txtbox {
  width: 50%;
  position: absolute;
  bottom: 80px;
  font-family: "Microsoft YaHei", "Microsoft YaHei UI";
  color: #000;
}

.mycover {
  margin-bottom: 60px;
  font-weight: lighter;
  .title {
    font-size: 36px;
  }
  .info {
    margin-top: 10px;
    font-size: 14px;
  }
}

.avt {
  margin-bottom: 20px;
  .title {
    font-size: 18px;
  }
  .list {
    margin-top: 10px;
    min-height: 70px;
    // background-color: #000;
  }
  .item {
    font-size: 12px;
    margin-bottom: 10px;
  }
}

.newbangumi {
  margin-top: 60px;
  width: 100%;
  max-width: 426px;
  height: 82px;
  border: 1px solid #e4f6fc;
  position: relative;
  .title {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 10;
    padding: 20px;
    .txt {
      font-size: 14px;
    }
    .name {
      font-size: 18px;
    }
  }
  .cover {
    float: right;
    position: relative;
    .lvjing {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 50%;
      .img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

@media screen and (max-width: 1500px) {
  .live2d-wrap {
    position: absolute;
    right: 8%;
    width: 400px;
    left: inherit;
    bottom: -30px;
  }
}

@media screen and (max-width: 1200px) {
  .live2d-wrap {
    position: absolute;
    right: 5%;
    width: 400px;
    left: inherit;
    bottom: -30px;
  }
  .txtbox {
    width: 40%;
    position: absolute;
    bottom: 80px;
    font-family: "Microsoft YaHei", "Microsoft YaHei UI";
    color: #000;
  }
}

@media screen and (max-width: 768px) {
  .live2d-wrap {
    position: absolute;
    margin: 0 auto;
    top: -65px;
    right: 0;
    left: -60px;
    z-index: 10;
    height: 90vh;
    overflow: hidden;
  }
  .txtbox {
    z-index: 80;
    width: 80%;
    position: absolute;
    top: 70vh;
    font-family: "Microsoft YaHei", "Microsoft YaHei UI";
    color: #000;
  }
  .newbangumi {
    background-color: #ffffff;
    margin-top: 60px;
    width: 100%;
    max-width: 100%;
  }
  .firstScreenComponents {
    .body {
      overflow: inherit;
      position: relative;
      width: 100%;
      height: 100%;
      background-position: top right;
      background-repeat: no-repeat;
    }
    .h {
      height: calc(100vh + 500px);
    }
    .w {
      max-width: 1300px;
      width: 80%;
      margin: 0 auto;
    }
  }
  .live2d-lvjing {
    z-index: 50;
    position: absolute;
    top: 35vh;
    display: inherit;
  }
}
</style>