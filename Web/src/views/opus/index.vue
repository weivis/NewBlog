<template>
  <div>
    <div class="layoutPages">
      <div class="w">
        <el-row :gutter="25">
          <el-col
            :xs="24"
            :sm="8"
            :md="6"
            :lg="6"
            :xl="4"
            v-for="(item, index) in tableData"
            :key="'opus' + index"
          >
            <router-link target="_blank" :to="'/content/' + item.id">
              <div class="item">
                <div class="cover">
                  <img :src="item.cover" />
                </div>
                <div class="box">
                  <div class="title">{{ item.title }}</div>
                  <div class="introduce">{{ item.introduce }}</div>
                </div>
              </div>
            </router-link>
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
  name: "opus",
  data() {
    return {
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
        category: 1,
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
  width: 100%;
  margin-bottom: 60px;
  .cover {
    margin-bottom: 15px;
    img {
      width: 100%;
      border-radius: 4px;
      overflow: hidden;
      border: 2px solid #e6e6e6;
    }
  }
  .box {
    min-height: 65px;
  }
  .title {
    font-size: 16px;
    margin-bottom: 5px;
  }
  .introduce {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    font-size: 14px;
    color: rgba(0, 0, 0, 0.57);
  }
}
</style>