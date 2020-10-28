<template>
  <div class="layout-Footer">
    <div class="footer">
      <div class="layout">
        <div class="w">

          <div class="content">
            <el-row :gutter="24">
              <el-col :xs="24" :sm="4" :md="4" :lg="4" :xl="4" class="tab">
                <div class="name">WeiVi</div>
                <div class="footer-mun">
                  <div class="item" v-for="(item,index) in weivi" :key="'footer-mun-weivi' + index">
                    <router-link :to="item.to">
                      <div>{{item.title}}</div>
                    </router-link>
                  </div>
                    <a class="item" href="https://shop267885373.taobao.com/index.htm" target="_blank">
                      <div>TA的淘宝店</div>
                    </a>
                </div>
              </el-col>

              <el-col :xs="24" :sm="4" :md="4" :lg="4" :xl="4" class="tab">
                <div class="name">文章</div>
                <div class="footer-mun">
                  <div class="item" v-for="(item,index) in article" :key="'footer-mun-article' + index">
                    <router-link :to="'/content/' + item.id">
                      <div>{{item.title}}</div>
                    </router-link>
                  </div>
                  <div class="item">
                    <router-link to="/article">
                      <div>查看更多 》</div>
                    </router-link>
                  </div>
                </div>
              </el-col>

              <el-col :xs="24" :sm="4" :md="4" :lg="4" :xl="4" class="tab">
                <div class="name">项目和创作</div>
                <div class="footer-mun">
                  <div class="item" v-for="(item,index) in project" :key="'footer-mun-project' + index">
                    <router-link :to="'/content/' + item.id">
                      <div>{{item.title}}</div>
                    </router-link>
                  </div>
                  <div class="item">
                    <router-link to="/project">
                      <div>查看更多 》</div>
                    </router-link>
                  </div>
                </div>
              </el-col>

              <el-col :xs="24" :sm="4" :md="4" :lg="4" :xl="4" class="tab">
                <div class="name">更多</div>
                <div class="footer-mun">
                  <div class="item" v-for="(item,index) in more" :key="'footer-mun-more' + index">
                    <a :href="item.to" target="_blank">
                      <div>{{item.title}}</div>
                    </a>
                  </div>
                </div>
              </el-col>

              <el-col :xs="24" :sm="4" :md="4" :lg="4" :xl="4" class="tab">
                <div class="name">TA的个人网站</div>
                <div class="footer-mun">
                  <div class="item" v-for="(item,index) in com" :key="'footer-mun-com' + index">
                    <a :href="item.to" target="_blank">
                      <div>{{item.title}}</div>
                    </a>
                  </div>
                </div>
              </el-col>

              <el-col :xs="24" :sm="4" :md="4" :lg="4" :xl="4" class="tab">
                <div class="name">联系方式</div>
                <div class="footer-mun">
                  <div class="item" v-for="(item,index) in contact" :key="'footer-mun-contact' + index">
                    <a :href="item.to" target="_blank">
                      <div>{{item.title}}</div>
                    </a>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        
          <div class="footer-bottom">
            <a class="footer-bottom-l">感谢浏览我的个人主页 我是WeiVi 如果遇到问题可以通过上方的联系方式和我沟通 感谢来访 : )</a>
            <a class="footer-bottom-r">© WeiVi 2014-2020</a>
            <a class="footer-bottom-r" href="https://beian.miit.gov.cn/" target="_blank">粤ICP备20033641号</a>
            <a class="footer-bottom-r">网页插图来自网络</a>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Queryarticle } from "@/api/article";
export default {
  name: "Footer",
  components: {
    //定义组件
  },
  data() {
    return {
        weivi:[
            {
                title:"所有作品",
                to:"/opus"
            },
            {
                title:"项目和创作",
                to:"/opus"
            },
            {
                title:"全部文章",
                to:"/opus"
            }
        ],
        article:[
        ],
        project:[
        ],
        more:[
            {
                title:"BiliBili",
                to:"https://space.bilibili.com/4028423"
            },
            {
                title:"Github",
                to:"https://github.com/weivis"
            },
            {
                title:"Weibo",
                to:"https://weibo.com/9shen"
            },
            {
                title:"Instagram",
                to:"https://www.instagram.com/happys_wei/"
            },
            {
                title:"Oschina",
                to:"https://my.oschina.net/u/4729977"
            }
        ],
        com:[
            {
                title:"魔法少女☆伊莉雅同人爱好者网站",
                to:"https://illya-support.weivird.com/"
            }
        ],
        contact:[
            {
                title:"442981412@qq.com",
                to:""
            },
            {
                title:"点此添加TA的QQ群",
                to:"https://jq.qq.com/?_wv=1027&k=qA2cdv8L"
            }
        ]
    };
  },
  methods: {
    getList() {
      this.$http(Queryarticle({
        category: 2,
        indexshow: true,
        per_page: 4
      }), (res) => {
        if (res.code == 200) {
          this.article = res.data.result;
        } else {
          this.$message({
            message: res.msg,
            type: "error",
            duration: 5 * 1000,
          });
        }
      });

      this.$http(Queryarticle({
        category: 3,
        indexshow: true,
        per_page: 2
      }), (res) => {
        // console.log(res);
        if (res.code == 200) {
          this.project = res.data.result;
        } else {
          this.$message({
            message: res.msg,
            type: "error",
            duration: 5 * 1000,
          });
        }
      });
    },
  },
  created() {
    this.getList();
  },
};
</script>