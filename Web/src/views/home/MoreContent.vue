<template>

  <div class="MoreContent">
    <div class="morecontent-components">
      <div class="body">
        <div class="layout">
          <div class="w">
            <div class="title">更多</div>

            <div class="content">
              <el-row :gutter="gutter">
                <el-col
                  :span="span"
                  v-for="(item, index) in list"
                  :key="'morecontent' + index"
                >
                  <div class="item">

                    <router-link :to="'/content/' + item.link" v-if="item.line_type == 0">
                      <div class="cover"><img :src="item.cover" /></div>
                      <div class="maintitle">{{ item.maintitle }}</div>
                      <div class="title">{{ item.title }}</div>
                      <div class="url">了解更多</div>
                    </router-link>

                    <a :href="item.link" target="_blank" v-if="item.line_type == 1">
                      <div class="cover"><img :src="item.cover" /></div>
                      <div class="maintitle">{{ item.maintitle }}</div>
                      <div class="title">{{ item.title }}</div>
                      <div class="url">了解更多</div>
                    </a>

                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "morecontent",
  data() {
    return {
      screenWidthmorecontent: document.body.clientWidth,
      gutter: 30,
      span: 12,
      list: [
        {
          cover:"https://illya-support.weivird.com/static/com/video/cover/20200703192730548.jpg",
          maintitle: "呀咪动漫周边店首页设计",
          title: "18年我开的一家淘宝动漫周边店的店铺设计",
          link:"",
          line_type: 0
        },
        {
          cover:"https://illya-support.weivird.com/static/com/video/cover/20200703192730548.jpg",
          maintitle: "呀咪动漫周边店首页设计",
          title: "18年我开的一家淘宝动漫周边店的店铺设计",
          link:"",
          line_type: 0
        },
        {
          cover:"https://illya-support.weivird.com/static/com/video/cover/20200703192730548.jpg",
          maintitle: "呀咪动漫周边店首页设计",
          title: "18年我开的一家淘宝动漫周边店的店铺设计",
          link:"",
          line_type: 0
        },
        {
          cover:"https://illya-support.weivird.com/static/com/video/cover/20200703192730548.jpg",
          maintitle: "呀咪动漫周边店首页设计",
          title: "18年我开的一家淘宝动漫周边店的店铺设计",
          link:"",
          line_type: 0
        },
      ],
    };
  },
  components: {},
  created() {
    if (document.body.clientWidth > 992) {
      this.gutter = 30;
      this.span = 6;
    } else {
      this.gutter = 30;
      this.span = 12;
    }
  },
  watch: {
    screenWidthmorecontent(val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidthmorecontent值改变，就将其重新赋给data里的screenWidthmorecontent
        this.screenWidthmorecontent = val;
        this.timer = true;
        let that = this;
        setTimeout(function () {
          // 打印screenWidthmorecontent变化的值
          if (that.screenWidthmorecontent < 992) {
            that.gutter = 30;
            that.span = 12;
          } else {
            that.gutter = 30;
            that.span = 6;
          }
          console.log(that.screenWidthmorecontent);
          that.timer = false;
        }, 400);
      }
    },
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidthmorecontent = window.screenWidth;
      })();
    };
  },
};
</script>

<style lang="scss" scoped>
.morecontent-components {
  .body {
    position: relative;
    z-index: 60;
    overflow: hidden;
    min-height: 500px;
    background-color: #333333;
    width: 100%;
  }
  .title {
    font-size: 18px;
    font-weight: lighter;
    color: #ffffff;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .content {
    .item {
      margin-bottom: 30px;
      position: relative;
      padding-bottom: 20px;
      .cover {
        width: 100%;
        img {
          width: 100%;
        }
        margin-bottom: 40px;
      }
      .maintitle {
        font-size: 16px;
        color: #ffffff;
      }
      .title {
        font-size: 12px;
        margin-top: 10px;
        color: #ffffff;
      }
      .url {
        color: #39bbff;
        font-size: 12px;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
  }
}
</style>