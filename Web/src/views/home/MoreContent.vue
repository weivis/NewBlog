<template>

  <div class="MoreContent">
    <div class="morecontent-components">
      <div class="body">
        <div class="layout">
          <div class="w">
            <div class="title">更多</div>

            <div class="content">
              <el-row :gutter="30">
                <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6"
                  v-for="(item, index) in list"
                  :key="'morecontent' + index"
                >
                  <div class="item">

                    <router-link :to="'/content/' + item.data" v-if="item.totype == 1">
                      <div class="cover"><img :src="item.cover" /></div>
                      <div class="maintitle">{{ item.introduce }}</div>
                      <div class="title">{{ item.title }}</div>
                      <div class="url">了解更多</div>
                    </router-link>

                    <a :href="item.data" target="_blank" v-if="item.totype == 2">
                      <div class="cover"><img :src="item.cover" /></div>
                      <div class="maintitle">{{ item.introduce }}</div>
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
import { Query } from "@/api/components";
export default {
  name: "morecontent",
  data() {
    return {
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
  methods: {
    getList() {
      this.$http(
        Query({
          components: 'indexmore',
          limit: 4,
        }),
        (res) => {
          // console.log(res);
          if (res.code == 200) {
            // this.total = res.data.total;
            // this.currentPage = res.data.currentPage;
            // this.totalPage = res.data.totalPages;
            this.list = res.data;
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
  created() {
    this.getList();
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
        max-height: 210px;
        overflow: hidden;
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