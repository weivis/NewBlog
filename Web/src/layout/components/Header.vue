<template>
  <div class="layout-Header">

    <div class="openmubutt" v-if="navopbutton" @click="oepnnav()"><i class="el-icon-s-fold"></i></div>

    <div class="common-header">
      <div class="layout">
        <div class="w">

          <div class="header">
            <img :src="logo.pic">
          </div>

          <div class="name">
            <div class="en">{{logo.en}}</div>
            <div class="cn">{{logo.cn}}</div>
          </div>

          <div class="nav" v-if="navop">
            <div v-for="(item, index) in $router.options.routes" :key="index" class="box" @click="oepnnav()">
              <router-link class="normal" :to="item.path" v-if="!item.hidden" exact>
                <div class="item">
                  {{item.navname}}
                </div>
              </router-link>
            </div>
          </div>

          <div class="morecom">
            <div class="item"><a  target="_blank" :href="morecom.bili"><img src="@/assets/header/bilibili.png"></a></div>
            <div class="item"><a  target="_blank" :href="morecom.github"><img src="@/assets/header/github.png"></a></div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {
  },
  data() {
    return {
      navop: true,
      navopbutton: false,
      screenWidth: document.body.clientWidth,
      logo:{
        en:"By WeiVi.rd",
        cn:"唯酱的个人主页",
        pic: require("@/assets/header/logo.png")
      },
      morecom:{
        bili:'https://space.bilibili.com/4028423',
        github:'https://github.com/weivis'
      }
    };
  },
  created(){
      if(document.body.clientWidth > 768){
          this.navop = true
          this.navopbutton = false
      }else{
          this.navop = false
          this.navopbutton = true
      }
  },
  watch: {
    screenWidth(val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = val;
        this.timer = true;
        let that = this;
        setTimeout(function() {
          // 打印screenWidth变化的值
          if (that.screenWidth < 768) {
              that.navop = false
              that.navopbutton = true
          } else {
            that.navop = true;
            that.navopbutton = false
          }
          console.log(that.screenWidth);
          that.timer = false;
        }, 400);
      }
    }
  },
  methods:{
      oepnnav(){
        if (this.navopbutton == true){
          if (this.navop == false){
              this.navop = true
          }else{
              this.navop = false
          }
        }
      }
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
  },
};
</script>