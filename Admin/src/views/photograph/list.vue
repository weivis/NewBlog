<template>
  <div>
    <el-table :data="tableData" style="width: 100%;">
      <el-table-column prop="id" label="ID" width="100px" align="center"></el-table-column>

      <el-table-column prop="head" label="封面" >
        <template slot-scope="scope">
          <div style="height: 150px;width: 100%;"><img :src="scope.row.cover" style="height: 100%;" /></div>
        </template>
      </el-table-column>

      <el-table-column label="更多">
        <template slot-scope="scope">
          <el-button @click="del(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>

    </el-table>
    <el-row class="input">

      <Pagination
        @pagination="getList()"
        :page.sync="currentPage"
        :pageCount.sync="totalPage"
        :total.sync="total"
        v-if="total > 0"
      />

    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Pagination from "@/components/Pagination.vue";
import { Del, Query } from "@/api/photograph";
export default {
  name: "photograph",
  data() {
    return {
      tableData: [],
      currentPage: null, // 当前页码
      total: null, // 总条目
      totalPage: null, // 总页数
      uploadcache: {
        filename: "",
        lodpath: "",
      },
    };
  },
  components: {
    Pagination,
  },
  methods: {
    getList() {
      this.$http(
        Query({
          querypage: this.currentPage,
          per_page: 10,
        }),
        (res) => {
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
        }
      );
    },
    del(id) {
      this.$http(
        Del({
          id: id,
        }),
        (res) => {
          console.log(res);
          if (res.code == 200) {
            this.getList();
          } else {
            this.$message({
              message: res.msg,
              type: "error",
              duration: 5 * 1000,
            });
          }
        }
      );
    },
  },
  created() {
    this.getList();
  },
};
</script>
<style lang="scss" scoped>
</style>