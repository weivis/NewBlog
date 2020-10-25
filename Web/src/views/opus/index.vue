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
            v-for="(item, index) in data.data.list"
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
  name: "opus",
  data() {
    return {
      currentPage: 1, // 当前页码
      totalItem: 0, // 总条目
      totalPage: 0, // 总页数
      pageSize: 10, // 每页多少条
      data: {
        code: 200,
        data: {
          dataPges: 1,
          list: [
            {
              article_type: 1,
              content_type: 1,
              cover:
                "https://www.weivird.com/static/article/cover/20200507195336389.jpg",
              id: 10,
              index: false,
              introduce:
                "\u81ea\u5df1\u5f00\u53d1\u7684\u667a\u80fd\u52a9\u624b",
              is_delete: false,
              status: 0,
              title: "\u4f0a\u8389\u96c5\u4eba\u5de5\u667a\u80fd\u52a9\u624b",
              upload_time: "2020-05-07 19:37:39",
              upload_userid: 1,
            },
            {
              article_type: 1,
              content_type: 1,
              cover:
                "https://www.weivird.com/static/article/cover/20200507193319177.png",
              id: 9,
              index: false,
              introduce:
                "\u68cb\u7c7b\u624b\u6e38\u6e38\u620f \u91c7\u7528\u9f99\u738b\u7684\u5de5\u4f5c\u4f5c\u4e3a\u9898\u6750",
              is_delete: false,
              status: 0,
              title: "\u4e2a\u4eba\u624b\u6e38\u8bbe\u8ba1",
              upload_time: "2020-05-07 19:34:16",
              upload_userid: 1,
            },
            {
              article_type: 1,
              content_type: 1,
              cover:
                "https://www.weivird.com/static/article/cover/20200507181758138.jpg",
              id: 8,
              index: false,
              introduce:
                "\u4ee5\u524d\u81ea\u5df1\u5f00\u53d1\u7684\u4e00\u4e2a\u52a8\u6f2b\u89c6\u9891\u7f51\u7ad9",
              is_delete: false,
              status: 0,
              title:
                "\u6211\u7684\u52a8\u6f2b\u89c6\u9891\u7f51\u7ad9\u8bbe\u8ba1",
              upload_time: "2020-05-07 18:20:16",
              upload_userid: 1,
            },
            {
              article_type: 1,
              content_type: 1,
              cover:
                "https://www.weivird.com/static/article/cover/20200507181627309.png",
              id: 7,
              index: false,
              introduce:
                "\u6211\u8bbe\u8ba1\u7684\u4e00\u4e2a\u516c\u5b89\u9879\u76ee\u7684\u754c\u9762",
              is_delete: false,
              status: 0,
              title: "\u516c\u5b89\u8f6f\u4ef6\u5916\u89c2\u8bbe\u8ba1",
              upload_time: "2020-05-07 18:17:29",
              upload_userid: 1,
            },
            {
              article_type: 1,
              content_type: 1,
              cover:
                "https://www.weivird.com/static/article/cover/20200507181404441.png",
              id: 6,
              index: false,
              introduce:
                "\u4ee5\u524d\u81ea\u5df1\u505a\u7684\u4e00\u4e2a300\u6e38\u620f\u76d2\u5b50",
              is_delete: false,
              status: 0,
              title: "300\u82f1\u96c4\u6e38\u620f\u76d2\u5b50\u8bbe\u8ba1",
              upload_time: "2020-05-07 18:15:23",
              upload_userid: 1,
            },
            {
              article_type: 1,
              content_type: 1,
              cover:
                "https://www.weivird.com/static/article/cover/20200507181034047.png",
              id: 5,
              index: false,
              introduce:
                "\u4ee5\u524d\u5e2e\u522b\u4eba\u8bbe\u8ba1\u7684\u4e00\u4e2a\u5b98\u7f51",
              is_delete: false,
              status: 0,
              title:
                "\u661f\u5955\u89c6\u9891\u5de5\u4f5c\u5ba4\u5b98\u7f51\u8bbe\u8ba1",
              upload_time: "2020-05-07 18:12:01",
              upload_userid: 1,
            },
            {
              article_type: 1,
              content_type: 1,
              cover:
                "https://www.weivird.com/static/article/cover/20200507180635283.png",
              id: 4,
              index: false,
              introduce:
                "\u5c3c\u5657\u4e91 \u57fa\u4e8e\u4e91\u7684\u5728\u7ebf\u89c6\u9891\u5236\u4f5c\u751f\u6210\u5e73\u53f0",
              is_delete: false,
              status: 0,
              title: "\u5c3c\u5657\u4e91WebUi\u8bbe\u8ba1",
              upload_time: "2020-05-07 18:08:19",
              upload_userid: 1,
            },
            {
              article_type: 1,
              content_type: 1,
              cover:
                "https://www.weivird.com/static/article/cover/20200507180326823.png",
              id: 3,
              index: false,
              introduce:
                "\u5916\u5305\u7684\u6dd8\u5b9d\u5e97\u94fa\u8bbe\u8ba1",
              is_delete: false,
              status: 0,
              title:
                "\u52a8\u6f2b\u89c6\u9891\u5236\u4f5c\u6dd8\u5b9d\u5e97\u9996\u9875\u8bbe\u8ba1",
              upload_time: "2020-05-07 18:02:33",
              upload_userid: 1,
            },
            {
              article_type: 1,
              content_type: 1,
              cover:
                "https://www.weivird.com/static/article/cover/20200507174552381.png",
              id: 2,
              index: false,
              introduce:
                "\u9879\u76ee\u5728git\u4e0a \u8fd9\u4e9b\u662fui\u7684\u8bbe\u8ba1\u6548\u679c\u56fe",
              is_delete: false,
              status: 0,
              title:
                "\u81ea\u5df1\u8bbe\u8ba1\u7684\u533a\u5757\u94fe\u767e\u79d1\u5168\u4e66\u7684\u754c\u9762",
              upload_time: "2020-05-07 17:28:48",
              upload_userid: 1,
            },
            {
              article_type: 1,
              content_type: 1,
              cover:
                "https://www.weivird.com/static/article/cover/20200507170247636.jpg",
              id: 1,
              index: false,
              introduce:
                "18\u5e74\u6211\u5f00\u7684\u4e00\u5bb6\u6dd8\u5b9d\u52a8\u6f2b\u5468\u8fb9\u5e97\u7684\u5e97\u94fa\u8bbe\u8ba1",
              is_delete: false,
              status: 0,
              title:
                "Yami | \u5440\u54aa\u52a8\u6f2b\u5468\u8fb9\u5e97\u9996\u9875\u8bbe\u8ba1",
              upload_time: "2020-05-07 17:04:47",
              upload_userid: 1,
            },
          ],
          nowPage: 1,
          queryCount: 10,
        },
        msg: "OK",
      },
    };
  },
  components: {},
  created() {},
  methods: {
    getList() {
      console.log();
    },
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