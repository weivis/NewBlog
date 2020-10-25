<template>
  <div class="MyDesginOpus">
    <div class="mydesginopus-components">
      <div class="layout">
        <div class="w">
          <div class="title">
            个人设计作品
            <router-link to="/article"><div class="more">更多 ></div></router-link>
          </div>

          <el-row :gutter="10">
            <el-col :xs="12" :sm="8" :md="6" :lg="4" :xl="4" v-for="(item, index) in data" :key="'mydesginopus-components' + index">
              <router-link :to="'/content/' + item.id">
              <div class="item">
              <img class="cover" :src=item.cover>
              <div class="itemtitle">{{item.title}}</div>
              </div>
              </router-link>
            </el-col>
          </el-row>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mydesginopus",
  data() {
    return {
      data:[
        {
          cover:"https://www.weivird.com/static/article/cover/20200507181034047.png",
          title:"我的动漫视频网站设计以前自己开发的一个动漫视频网站",
          id:1
        },
                {
          cover:"https://www.weivird.com/static/article/cover/20200507181034047.png",
          title:"我的动漫视频网站设计以前自己开发的一个动漫视频网站",
          id:1
        },        {
          cover:"https://www.weivird.com/static/article/cover/20200507181034047.png",
          title:"我的动漫视频网站设计以前自己开发的一个动漫视频网站",
          id:1
        },        {
          cover:"https://www.weivird.com/static/article/cover/20200507181034047.png",
          title:"我的动漫视频网站设计以前自己开发的一个动漫视频网站",
          id:1
        },        {
          cover:"https://www.weivird.com/static/article/cover/20200507181034047.png",
          title:"我的动漫视频网站设计以前自己开发的一个动漫视频网站",
          id:1
        },        {
          cover:"https://www.weivird.com/static/article/cover/20200507181034047.png",
          title:"我的动漫视频网站设计以前自己开发的一个动漫视频网站",
          id:1
        }
      ]
    };
  },
  components: {
  },
};
</script>

<style lang="scss" scoped>
.mydesginopus-components{
  .title{
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 18px;color: #3a80ff;
    .more{
      float: right;
    }
  }
  .item{
    margin-bottom: 50px;
    width: 100%;
    .cover{
      width: 100%;
    }
    .itemtitle{
    margin-top: 5px;
    width:100%;
    font-size: 14px;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    }
  }
}
</style>