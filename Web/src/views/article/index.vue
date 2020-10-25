<template>
  <div>
    <div class="layoutPages">
      <div class="w">
        <el-row :gutter="25">
          <el-col
            :xs="24"
            :sm="12"
            :md="12"
            :lg="12"
            :xl="12"
            v-for="(item, index) in data"
            :key="'project' + index"
          >
            <div class="item">
              <router-link :to="'/content/' + item.id">
                <div class="coverw">
                  <img class="cover" :src="item.cover" />
                </div>
                <div class="infobox">
                  <div class="name">{{ item.title }}</div>
                  <div class="info">{{ item.info }}</div>
                </div>
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
  name: "index",
  data() {
    return {
      data: [
        {
          title: "Niputv动漫视频网",
          info:
            "18年的项目 因为没有时间去继续弄了所以开源了 可以参考里面的代码和设计",
          cover:
            "https://www.weivird.com/static/article/cover/20200508101452773.png",
          id: 1,
        },
        {
          title: "Niputv动漫视频网",
          info:
            "18年的项目 因为没有时间去继续弄了所以开源了 可以参考里面的代码和设计",
          cover:
            "https://www.weivird.com/static/article/cover/20200508101452773.png",
          id: 2,
        },
        {
          title: "Niputv动漫视频网",
          info:
            "18年的项目 因为没有时间去继续弄了所以开源了 可以参考里面的代码和设计",
          cover:
            "https://www.weivird.com/static/article/cover/20200508101452773.png",
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
  methods: {},
  created() {},
};
</script>
<style lang="scss" scoped>
.item {
  margin-bottom: 25px;
  overflow: hidden;
  width: 100%;
  .coverw {
    float: left;
    width: 250px;
    .cover {
      border-radius: 4px;
      overflow: hidden;
      width: 100%;
    }
  }
  .infobox {
    float: right;
    width: calc(100% - 275px);
    .name {
      margin-top: 1%;
      font-size: 16px;
      margin-bottom: 10px;
    }
    .info {
      font-size: 12px;
    }
  }
}
</style>