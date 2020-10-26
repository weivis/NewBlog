<template>
  <div class="body">
    <div class="layout">
      <div class="w">
        <div class="waterfall">
          <div
            class="item"
            v-for="(item, index) in tableData"
            :key="'photograph' + index"
          >
            <img :src="item.cover" />
          </div>
        </div>

        <div @click="getList" class="LoadMore" v-if="currentPage < totalPage">LoadMore</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Query } from "@/api/photograph";
export default {
  name: "photograph",
  components: {},
  data() {
    return {
      list: [
      ],
      currentPage: 0, // 当前页码
      total: 0, // 总条目
      totalPage: 0, // 总页数
      // pageSize: 10, // 每页多少条
      tableData: [],
    };
  },
  methods: {
    getList() {
      this.$http(Query({
        querypage: this.currentPage + 1,
        category: 1,
        // subcategory: this.form.subcategory,
        // hidden: this.form.hidden,
        // indexshow: this.form.indexshow,
        // per_page: 1
      }), (res) => {
        console.log(res);
        if (res.code == 200) {
          this.total = res.data.total;
          this.currentPage = res.data.currentPage;
          this.totalPage = res.data.totalPages;
          this.tableData = this.tableData.concat(res.data.result);
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
  created() {
    this.getList();
  },
};
</script>
<style lang="scss" scoped>
.body {
  padding-top: 40px;
  overflow: hidden;
  width: 100%;
  height: calc(100vh - 75px);
  background-color: #232323 !important;
  padding-bottom: 100px;
}
.waterfall {
  -moz-column-count: 4; /* Firefox */
  -webkit-column-count: 4; /* Safari 和 Chrome */
  column-count: 4;
  -moz-column-gap: 15px;
  -webkit-column-gap: 15px;
  column-gap: 15px;
  display: inline-block;
}
.item {
  break-inside: avoid;
  -moz-page-break-inside: avoid;
  -webkit-column-break-inside: avoid;
  width: 100%;
  margin-bottom: 35px;
  img {
    width: 100%;
    box-shadow: 0px 9px 3px 0px #1f1f1f;
  }
}

.LoadMore {
  margin-top: 35px;
  padding: 20px;
  text-align: center;
  font-size: 14px;
  background-color: #333333;
  color: #fff;
}

@media screen and (max-width: 1200px) {
  .waterfall {
    -moz-column-count: 4; /* Firefox */
    -webkit-column-count: 4; /* Safari 和 Chrome */
    column-count: 4;
  }
}

@media screen and (max-width: 992px) {
  .waterfall {
    -moz-column-count: 3; /* Firefox */
    -webkit-column-count: 3; /* Safari 和 Chrome */
    column-count: 3;
  }
}

@media screen and (max-width: 768px) {
  .waterfall {
    -moz-column-count: 2; /* Firefox */
    -webkit-column-count: 2; /* Safari 和 Chrome */
    column-count: 2;
  }
}
</style>