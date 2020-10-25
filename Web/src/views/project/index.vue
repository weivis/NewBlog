<template>
  <div>
    <div class="layoutPages">
      <div class="w">
        <el-row :gutter="25">
          <el-col
            :xs="24"
            :sm="12"
            :md="12"
            :lg="8"
            :xl="8"
            v-for="(item, index) in data"
            :key="'project' + index"
          >
          <div class="item">
            <router-link :to="'/content/' + item.id">
              <div class="filter" :style="filter">
                <div class="infobox">
                  <div class="name">{{ item.title }}</div>
                  <div class="info">{{ item.info }}</div>
                  <div class="morebutton">了解详细></div>
                </div>
              </div>
              <img class="cover" :src="item.cover" />
            </router-link>
            </div>
          </el-col>
        </el-row>

        <Pagination
          :total="totalItem"
          :page.sync="currentPage"
          @pagination="getList()"
          :limit.sync="pageSize"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "project",
  data() {
    return {
      filter: {
        backgroundImage:
          "url(" + require("@/assets/home/myproject-1.png") + ")",
      },
      data: [
        {
          title: "Niputv动漫视频网",
          info:
            "18年的项目 因为没有时间去继续弄了所以开源了 可以参考里面的代码和设计",
          cover: require("@/assets/img/project-cover.png"),
          id: 1,
        },
        {
          title: "Niputv动漫视频网",
          info:
            "18年的项目 因为没有时间去继续弄了所以开源了 可以参考里面的代码和设计",
          cover: require("@/assets/img/project-cover.png"),
          id: 2,
        },
        {
          title: "Niputv动漫视频网",
          info:
            "18年的项目 因为没有时间去继续弄了所以开源了 可以参考里面的代码和设计",
          cover: require("@/assets/img/project-cover.png"),
          id: 2,
        },
      ],
      currentPage: 1, // 当前页码
      totalItem: 0, // 总条目
      totalPage: 0, // 总页数
      pageSize: 10, // 每页多少条
    };
  },
  components: {},
  created() {},
  methods: {
    getList() {},
  },
};
</script>
<style lang="scss" scoped>
.item {
  border-radius: 6px;
  overflow: hidden;
  float: left;
  width: 100%;
  min-height: 100px;
  position: relative;
  margin-bottom: 50px;
  .cover {
    width: 100%;
  }
  .filter {
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    .infobox {
      position: relative;
      margin: 5%;
      color: #ffffff;
      height: 100%;
    }
    .name {
      font-size: 18px;
    }
    .info {
      margin-top: 15px;
      font-size: 14px;
    }
    .morebutton {
      color: #ffffff;
      position: absolute;
      bottom: 50px;
      right: 0;
      font-size: 12px;
    }
  }
}
</style>