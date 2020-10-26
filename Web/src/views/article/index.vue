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
            v-for="(item, index) in tableData"
            :key="'project' + index"
          >
            <div class="item">
              <router-link :to="'/content/' + item.id">
                <div class="coverw">
                  <img class="cover" :src="item.cover" />
                </div>
                <div class="infobox">
                  <div class="name">{{ item.title }}</div>
                  <div class="info">{{ item.introduce }}</div>
                </div>
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
  name: "index",
  data() {
    return {
      tableData: [],
      currentPage: 1, // 当前页码
      total: 0, // 总条目
      totalPage: 0, // 总页数
      // pageSize: 10, // 每页多少条
    };
  },
  methods: {
    getList() {
      this.$http(Queryarticle({
        querypage: this.currentPage,
        category: 2,
        // subcategory: this.form.subcategory,
        // hidden: this.form.hidden,
        // indexshow: this.form.indexshow,
        // per_page: 10
      }), (res) => {
        console.log(res);
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