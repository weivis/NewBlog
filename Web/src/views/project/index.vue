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
            v-for="(item, index) in tableData"
            :key="'project' + index"
          >
          <div class="item">
            <router-link :to="'/content/' + item.id">
              <div class="filter" :style="filter">
                <div class="infobox">
                  <div class="name">{{ item.title }}</div>
                  <div class="info">{{ item.introduce }}</div>
                  <div class="morebutton">了解详细></div>
                </div>
              </div>
              <div class="cover"><img :src="item.cover" /></div>
            </router-link>
            </div>
          </el-col>
        </el-row>

      <Pagination
        @pagination="getList()"
        :page.sync="currentPage"
        :pageCount.sync = totalPage
        :total.sync="total"
        v-if="total > 0"
      />

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Queryarticle } from "@/api/article";
import Pagination from "@/components/Pagination.vue";
export default {
  name: "project",
  data() {
    return {
      filter: {
        backgroundImage:
          "url(" + require("@/assets/home/myproject-1.png") + ")",
      },
      currentPage: 1, // 当前页码
      total: 0, // 总条目
      totalPage: 0, // 总页数
      // pageSize: 10, // 每页多少条
      tableData: [],
    };
  },
  methods: {
    getList() {
      this.$http(Queryarticle({
        querypage: this.currentPage,
        category: 3,
        // subcategory: this.form.subcategory,
        // hidden: this.form.hidden,
        // indexshow: this.form.indexshow,
        // per_page: 10
      }), (res) => {
        // console.log(res);
        if (res.code == 200) {
          this.total = res.data.total;
          this.currentPage = res.data.currentPage;
          this.totalPage = res.data.totalPages;
          this.tableData = res.data.result;
        } else {
          this.$message({
            message: res.msg,
            type: "error",
            duration: 5 * 1000,
          });
        }
      });
    }
  },
  components: {
    Pagination,
  },
  created() {
    this.getList();
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
    max-height: 210px;
    overflow: hidden;
    img{width: 100%;}
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