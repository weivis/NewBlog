<template>
  <div class="MyArticle">
    <div class="myarticle-components">
      <div class="layout">
        <div class="w">
          <div class="title">
            个人文章
            <router-link to="/opus"><div class="more">更多 ></div></router-link>
          </div>

          <div class="content">
            <el-row :gutter="24">
              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" v-for="(item, index) in data" :key="'myarticle-components' + index">
                <router-link :to="'/content/' + item.id">
                  <div class="item">
                    <div class="name">{{item.title}}</div>
                    <div class="info">{{item.info}}</div>
                  </div>
                </router-link>
              </el-col>
            </el-row>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myarticle",
  data() {
    return {
      data:[
        {
          title:"Niputv动漫视频网",
          info:"18年的项目 因为没有时间去继续弄了所以开源了 可以参考里面的代码和设计",
          id: 1
        },
        {
          title:"Niputv动漫视频网",
          info:"18年的项目 因为没有时间去继续弄了所以开源了 可以参考里面的代码和设计",
          id: 1
        },
        {
          title:"Niputv动漫视频网",
          info:"18年的项目 因为没有时间去继续弄了所以开源了 可以参考里面的代码和设计",
          id: 1
        },
        {
          title:"Niputv动漫视频网",
          info:"18年的项目 因为没有时间去继续弄了所以开源了 可以参考里面的代码和设计",
          id: 1
        },
        {
          title:"Niputv动漫视频网",
          info:"18年的项目 因为没有时间去继续弄了所以开源了 可以参考里面的代码和设计",
          id: 1
        },
        {
          title:"Niputv动漫视频网",
          info:"18年的项目 因为没有时间去继续弄了所以开源了 可以参考里面的代码和设计",
          id: 1
        }
      ]
    };
  },
  components: {
  },
};
</script>

<style lang="scss" scoped>
.myarticle-components{
  margin-bottom: 150px;
  .title{
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 18px;color: #3a80ff;
    .more{
      float: right;
    }
  }
  .content{
    .item{
      width: 100%;
      margin-bottom: 48px;
      .name{
        font-size: 14px;
        margin-bottom: 8px;
      }
      .info{
        font-size: 12px;
      }
    }
  }
}
</style>