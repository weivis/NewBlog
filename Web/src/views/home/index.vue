<template>
  <transition name="fade-transform" mode="out-in">
    <div class="Home">
      <firstscreen />
      <morecontent />
      <myinfo />
      <myproject style="position: relative; z-index: 50" />
      <div v-parallax="0.2">
        <mydesginopus />
        <myarticle />
      </div>
    </div>
  </transition>
</template>

<script>
import firstscreen from "./FirstScreen.vue";
import morecontent from "./MoreContent.vue";
import myinfo from "./Myinfo.vue";
import myproject from "./Myproject.vue";
import mydesginopus from "./MyDesginOpus.vue";
import myarticle from "./MyArticle.vue";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    firstscreen,
    morecontent,
    myinfo,
    myproject,
    mydesginopus,
    myarticle,
  },
  methods: {},
  created() {},
};
</script>
<style lang="scss" scoped>
</style>