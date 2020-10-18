<template>
  <div class="layout-Nav">
        <el-menu :default-openeds="['0','1']" :router="$route">



            <el-menu-item v-for="(item2, index2) in $router.options.routes"
                          :key="index2"
                          :index="item2.path"
                          :class="$route.path==item2.path?'is-active':''"><template slot="title" v-if="!item2.hidden"><i class="el-icon-message"></i>{{item2.name}}</template>	
            </el-menu-item>

          <!-- <el-submenu v-for="(item,index) in $router.options.routes"   
                      :key="index"
                      :index="index+''">

            <template slot="title"><i class="el-icon-message"></i>{{item.name}}</template>	
          </el-submenu> -->

        </el-menu>
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

<style lang="scss" scoped>
</style>