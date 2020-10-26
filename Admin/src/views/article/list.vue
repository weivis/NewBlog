<template>
  <div>
    <el-row class="input">
      <div class="l">
        文章分类
        <el-radio-group v-model="form.category">
          <el-radio-button :label="0">全部</el-radio-button>
          <el-radio-button :label="1">作品</el-radio-button>
          <el-radio-button :label="2">文章</el-radio-button>
          <el-radio-button :label="3">项目</el-radio-button>
        </el-radio-group>
      </div>

      <div class="l">
        返回条数
        <el-select v-model="form.per_page" placeholder="返回条数">
          <el-option :label="10" :value="10">10</el-option>
          <el-option :label="20" :value="20">20</el-option>
          <el-option :label="30" :value="30">30</el-option>
        </el-select>
      </div>

      <el-button type="primary" @click="getList()">查询</el-button>
    </el-row>

    <el-row class="input">
      <div class="l">
        是否只获取隐藏文章
        <el-radio-group v-model="form.hidden">
          <el-radio-button :label="0">全部</el-radio-button>
          <el-radio-button :label="1">是</el-radio-button>
        </el-radio-group>
      </div>

      <div class="l">
        是否只获取首页展示文章
        <el-radio-group v-model="form.indexshow">
          <el-radio-button :label="0">全部</el-radio-button>
          <el-radio-button :label="1">是</el-radio-button>
        </el-radio-group>
      </div>

      <div class="l" v-if="form.category == 1">
        二级分类
        <el-radio-group v-model="form.subcategory" class="common elmr">
          <el-radio-button :label="1">设计作品</el-radio-button>
          <el-radio-button :label="2">视频作品</el-radio-button>
        </el-radio-group>
      </div>
    </el-row>

    <el-table :data="tableData" style="width: 100%" class="tableData">
      <el-table-column prop="id" label="ID" width="50"></el-table-column>

      <el-table-column prop="head" label="封面" width="100">
        <template slot-scope="scope">
          <el-image
            style="width: 90%; height: auto"
            :src="scope.row.cover"
          ></el-image>
        </template>
      </el-table-column>

      <el-table-column label="一级分类" width="150">
        <template slot-scope="scope">
          <span v-if="scope.row.category == 1">作品</span>
          <span v-if="scope.row.category == 2">文章</span>
          <span v-if="scope.row.category == 3">项目</span>
        </template>
      </el-table-column>

      <el-table-column label="二级分类" width="150"  v-if="form.category == 1">
        <template slot-scope="scope">
          <span v-if="scope.row.subcategory == 1">设计作品</span>
          <span v-if="scope.row.subcategory == 2">视频作品</span>
        </template>
      </el-table-column>

      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="introduce" label="简介"></el-table-column>

      <el-table-column label="下架状态" width="100">
        <template slot-scope="scope">
          <span v-if="scope.row.hidden == false">上架</span>
          <span v-if="scope.row.hidden == true">下架</span>
        </template>
      </el-table-column>

      <el-table-column label="首页展示" width="100">
        <template slot-scope="scope">
          <span v-if="scope.row.indexshow == false">不展示</span>
          <span v-if="scope.row.indexshow == true">展示</span>
        </template>
      </el-table-column>

      <el-table-column label="更多" width="400px">
        <template slot-scope="scope">
          <el-button @click="change({id:scope.row.id, change:2})" v-if="scope.row.hidden == false" type="success" style="margin-right: 10px;" >下架</el-button>
          <el-button @click="change({id:scope.row.id, change:2})" v-if="scope.row.hidden == true" type="info" style="margin-right: 10px;">上架</el-button>

          <el-button @click="change({id:scope.row.id, change:1})" v-if="scope.row.indexshow == true" type="success" style="margin-right: 10px;">取消首页展示</el-button>
          <el-button @click="change({id:scope.row.id, change:1})" v-if="scope.row.indexshow == false" style="margin-right: 10px;">首页展示</el-button>

          <a :href="'/article/edit?id=' + scope.row.id" target="_blank" style="margin-right: 10px;"><el-button>编辑</el-button></a>

          <el-button @click="change({id:scope.row.id, change:3})">删除</el-button>
          
        </template>
      </el-table-column>

    </el-table>

    <el-row class="input">
      <Pagination
        @pagination="getList()"
        :page.sync="currentPage"
        :pageCount.sync = totalPage
        :total.sync="total"
        v-if="total > 0"
      />
    </el-row>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination.vue";
import { Queryarticle, Putchange } from "@/api/article";
export default {
  name: "list",
  data() {
    return {
      form: {
        category: 0,
        subcategory: 0,
        hidden: 0,
        indexshow: 0,
        per_page: 10,
      },
      tableData: [],
      currentPage: null, // 当前页码
      total: null, // 总条目
      totalPage: null, // 总页数
    };
  },
  methods: {
    getList() {
      this.$http(Queryarticle({
        querypage: this.currentPage,
        category: this.form.category,
        subcategory: this.form.subcategory,
        hidden: this.form.hidden,
        indexshow: this.form.indexshow,
        per_page: this.form.per_page
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
    },
    change(data) {
      this.$http(Putchange(data), (res) => {
        console.log(res);
        if (res.code == 200) {
          this.getList()
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

<style rel="stylesheet/scss" lang="scss" scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 100%;
}
.rowbtom {
  margin-bottom: 15px;
}
</style>