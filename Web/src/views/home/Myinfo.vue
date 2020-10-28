<template>
  <div class="Myinfo"  style="background-color: #fafafa;background-color: #fafafa;">

    <div class="anime-item" style="padding-top: 0px;background-color: #fafafa;">
      <div class="item-w">
          <div class="doc" v-parallax="0.2">
          <div class="p" style="margin: 0 auto;">
            <div class="header"><img src="@/assets/home/head.png"></div>
          </div>
          <div class="main-title">{{doc.main.a}}</div>
          <div class="main-title">{{doc.main.b}}</div>
          <div class="main-title">{{doc.main.c}}</div>
        </div>
      </div>
    </div>

    <div class="anime-item" style="background-color: #ffffff;">
      <div class="item-w" style="">
        <div class="doc" v-parallax="0.2">
          <div class="main-title">熟练技术和软件</div>
          <div class="p">
            <el-tag v-for="(item, index) in doc.skill" :key="'index-skill' + index" style="margin: 10px;">{{item}}</el-tag>
          </div>
          <!-- <el-tag type="info">标签一</el-tag> -->
          <!-- <div class="common">{{doc.skill}}</div> -->
          <div class="main-title">个人荣誉及成就</div>
          <div class="min-title">{{doc.achievement}}</div>
        </div>
      </div>
    </div>

    <div class="anime-item" style="background-color: #fafafa;">
      <div class="item-w">
        <div class="doc" v-parallax="0.2">
          <div class="main-title">前言</div>
          <div class="min-title">{{doc.preface.a}}</div>
          <div class="min-title">{{doc.preface.b}}</div>
        </div>
      </div>
    </div>

    <div class="anime-item" style="background-color: #ffffff;">
      <div class="item-w">
        <div class="doc" v-parallax="0.2">
          <div class="main-title">加入程序猿契机</div>
          <div class="min-title">{{doc.chance.a}}</div>
          <div class="min-title">{{doc.chance.b}}</div>
          <div class="min-title">{{doc.chance.c}}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "myinfo",
  data() {
    return {
      doc:{
        main:{
          a:"我是WeiVi(唯酱)",
          b:"生于1999年4月, 最高学历: 初一，兴趣爱好是钓鱼，公路车骑行，音乐，烹饪，摄影，羽毛球",
          c:"现于广州工作 在某科技公司担任全栈开发"
        },
        skill:[
          "PS", "AE", "AxureRP", "Ai", "Maya(建模和动画)", "C4D", "Python", "Node", "Javascripts", "HTML", "VUE2-3", "CSS", "NW.js", "Recat", "Element", "Vant", "Mysql", "Elasticsearch", "MariaDB", "MongDB", "Scrapy", "Redis", "Tornado", "Django", "Flask", "CDN资源调控", "缓存策略" 
        ],
        // a:" AE AxureRP Ai Maya(建模和动画) C4D Python Node Javascripts HTML5 VUE2-3 CSS3 NW.js Element Mysql Elasticsearch MariaDB MongDB Scrapy Redis Tornado Django Flask",
        achievement:"2018年全国大学生创新技术应用大赛获奖者, NIputv动漫视频网创始人, Mahouo搜索作者, 动漫周边店店长, 口岸办护照识别技术发明者",
        preface:{
          a:"我从小对科技产品感兴趣，自小喜欢研究电气，做点小发明，初一时因为校园暴力，很早离开了学校并踏入了社会。",
          b:"因为个人因为喜欢动漫，在脱离校园后，并开启了创作类的学习，在家尝试制作各种动漫视频，随着兴趣爱好日益壮大，从兴趣发展成了工作做过平面设计，也做过动画设计，曾经做过MAD(动漫视频),MMD，PV(音乐MV)，负责过某音乐社团的CD发行和设计，也创建过自己的动漫视频制作团队和视频工作室。"
        },
        chance:{
          a:"当时视频类兴趣越做越大，打算给团队弄个官网，于是开始上手学习Html等打算编写简易官网，不料越陷越深，对Web产生了浓厚的兴趣，于是我的注意力也从视频动漫转移到了Web，最早通过学习Discuz和JS尝试制作动漫论坛，和个人主页MC服务器官网等。",
          b:"有一次突然想做一个自己的动漫视频网站 类似AB站，于是在网上召集小伙伴一起开发做一个动漫视频网站，我负责UI设计和前端开发，可惜团队逐渐瓦解，到最后剩下自己一个。",
          c:"于是开始尝试自己学习前后端语言和框架，开始自己制作，从最初的H5css Jq Flask Python 开始直到实现了自己的视频网站, 并陆续完成了很多网站作品, Niputv Mahouo搜索引擎，伊莉雅应援站等，也参与了布丁动画5DM早期开发calibur-tv等 。现于广州某科技公司担任全栈开发"
        }
      }
    };
  },
  components: {
  },
};
</script>

<style lang="scss" scoped>
.sx{
  height: 30vh;
  position: relative;
  overflow: hidden;
  width: 100%;
}
.anime-item{
  overflow: hidden;
  height: 120vh;
  max-height: 600px;
  background-color: #ffffff;
  padding-bottom: 20px;
  border-top: 1px solid #f4f4f4;
  padding-top: 50px;
  .item-w{
    max-width: 80%;margin: 0 auto;margin-bottom: 0;
    margin-left: 20%;
    margin-right: 20%;
    }
  .doc{
    font-weight: lighter;
    margin: 0 auto;
    margin-top: 50px;
    .p{
      // display: flex; justify-content: center;
      width: 100%;
      margin: 0 auto;
      margin-bottom: 40px;
    }
    .header{
      margin: 0 auto;
      margin-top: 90px;
      margin-bottom: 25px;
      width: 100px;
    }
    .main-title{
      margin-bottom: 65px;
      text-align: center;
      width: 100%;
      font-size: 24px;
    }
    .min-title{
      line-height: 28px;
      margin-bottom: 45px;
      text-align: center;
      font-size: 18px;
    }
    // .common{
    //   margin-bottom: 40px;
    //   font-size: 14px;
    //   text-align: center;
    // }
  }
}

@media screen and (max-width: 992px) {
  .anime-item{
  background-color: #ffffff;
  padding-bottom: 20px;
  // border-bottom: 1px solid #cecece;
  padding-top: 50px;
  max-height: 100%;
  .item-w{
    max-width: 90%;margin: 0 auto;margin-bottom: 0;
    margin-left: 10%;
    margin-right: 10%;
    }
  }
}

</style>