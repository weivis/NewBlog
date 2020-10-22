<template>
  <transition name="fade-transform" mode="out-in" >
    <div class="Home">
      <firstscreen/>
      <morecontent/>
      <myinfo/>
      <myproject/>
      <mydesginopus/>
    </div>
  </transition>
</template>

<script>
import firstscreen from './FirstScreen.vue'
import morecontent from './MoreContent.vue'
import myinfo from './Myinfo.vue'
import myproject from './Myproject.vue'
import mydesginopus from './MyDesginOpus.vue'
export default {
  name: "Home",
  data() {
    return {
    };
  },
  components: {
    firstscreen,
    morecontent,
    myinfo,
    myproject,
    mydesginopus
  },
  methods: {
  },
  created() {
  }
};
</script>
<style lang="scss" scoped>
</style>