<template>
  <transition name="fade-transform" mode="out-in" >
    <div class="Home">
      <firstscreen/>
      <morecontent/>
    </div>
  </transition>
</template>

<script>
import firstscreen from './FirstScreen.vue'
import morecontent from './MoreContent.vue'
export default {
  name: "Home",
  data() {
    return {
    };
  },
  components: {
    firstscreen,
    morecontent
  },
  methods: {
  },
  created() {
  }
};
</script>
<style lang="scss" scoped>
</style>