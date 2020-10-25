<template>
  <section class="app-main">
    <transition
      name="fade-transform"
      mode="out-in"
    >
      <div class="layout-style">
        <div class="w"><router-view :key="key"></router-view></div>
      </div>
      

    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  }
}
</script>
<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 60px);
  position: relative;
  overflow: hidden;
}
</style>
