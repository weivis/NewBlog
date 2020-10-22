<template>
  <transition name="fade-transform" mode="out-in" >
    <div class="Home" v-animate='"animated fadeInDown"'  >
      <firstscreen/>
      <morecontent/>
      <myinfo/>
    </div>
  </transition>
</template>

<script>
import firstscreen from './FirstScreen.vue'
import morecontent from './MoreContent.vue'
import myinfo from './Myinfo.vue'
export default {
  name: "Home",
  data() {
    return {
    };
  },
  components: {
    firstscreen,
    morecontent,
    myinfo
  },
  methods: {
  },
  created() {
  }
};
</script>
<style lang="scss" scoped>
</style>