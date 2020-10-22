<template>
  <div class="MyProject" style="">
    <div class="myproject-components" >
      <div class="layout">
        <div class="body">
          <div class="w" style="position: relative;">
            <div class="content">
              <div class="title">近期的个人项目和创作</div>
              <div class="item-box">

                <div class="item" v-for="(item, index) in data" :key="'myproject-components' + index">
                  <router-link :to="'/content/' + item.id">
                  <div class="filter" :style="filter">
                    <div class="infobox">
                    <div class="name">{{item.title}}</div>
                    <div class="info">{{item.info}}</div>
                    <div class="morebutton">了解详细></div>
                    </div>
                  </div>
                  <img class="cover" :src="item.cover" />
                  </router-link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myproject",
  data() {
    return {
      filter: {
        backgroundImage:
          "url(" + require("@/assets/home/myproject-1.png") + ")",
      },
      data:[
        {
          title: "Niputv动漫视频网",
          info: "18年的项目 因为没有时间去继续弄了所以开源了 可以参考里面的代码和设计",
          cover: require("@/assets/img/project-cover.png"),
          id:1
        },
        {
          title: "Niputv动漫视频网",
          info: "18年的项目 因为没有时间去继续弄了所以开源了 可以参考里面的代码和设计",
          cover: require("@/assets/img/project-cover.png"),
          id:2
        }
      ]
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.myproject-components {
  display: flow-root;
  .body {
    display: flow-root;
    background-color: #444a51;
    width: 100%;
    min-height: 245px;
    margin-top: 130px;
  }
  .content {
    margin-top: -130px;
    width: 100%;
    .title{
      width: 100%;
      font-size: 18px;
      color: #444a51;
      padding-bottom: 38px;
    }
    .item-box{
      display: flow-root;
      min-width: 975px;
      width: 50%;
    }
    .item{
      border-radius: 3px;
      overflow: hidden;
      float: left;
      margin-right: 25px;
      width: calc(50% - 25px);
      min-height: 100px;
      position: relative;
      .cover{
        width: 100%;
      }
      .filter{
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100%;
        position: absolute;
        .infobox{
          position: relative;
          margin: 5%;
          color: #ffffff;
          height: 100%;
        }
        .name{
          font-size: 18px;
        }
        .info{
          margin-top: 15px;
          font-size: 14px;
        }
        .morebutton{
          color: #ffffff;
          position: absolute;
          bottom: 50px;
          right: 0;
          font-size: 12px;
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
.myproject-components {
  margin-top: 130px;
  .body{
    padding-bottom: 80px;
    min-height: initial;
  }
  .content {
    .item-box{
      min-width: 100%;
      width: calc(100% + 25px);
    }
  }
}
}

@media screen and (max-width: 768px) {
.myproject-components {
  margin-top: 130px;
  .body {
    padding-bottom: 40px;
    min-height: initial;
    background-color: #444a51;
    width: 100%;
  }
  .content {
    
    .item-box{
      min-width: 100%;
      width: calc(100%);
    }
    .item{
      margin-bottom: 35px;
      float: left;
      margin-right: 25px;
      width: calc(100%);
    }
  }
}
}
</style>