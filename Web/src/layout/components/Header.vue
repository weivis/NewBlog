<template>
  <div class="layout-Header">
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

          <div class="nav">
            <div v-for="(item, index) in $router.options.routes" :key="index" class="box">
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
  methods:{
  },
  data() {
    return {
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
  },
  watch: {
  },
  mounted() {
  },
};
</script>