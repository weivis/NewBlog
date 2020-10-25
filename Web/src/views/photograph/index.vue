<template>
  <div class="body">
    <div class="layout">
      <div class="w">
        <div class="waterfall">
          <div
            class="item"
            v-for="(item, index) in list"
            :key="'photograph' + index"
          >
            <img :src="item.src" />
          </div>
        </div>

        <div @click="getData" class="LoadMore">LoadMore</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "photograph",
  components: {},
  data() {
    return {
      list: [
        {
          src:
            "https://illya-support.weivird.com/static/com/photo/cover/20200702060546293.jpg",
        },
        {
          src:
            "https://illya-support.weivird.com/static/com/bangumi/cover/20200702042640463.jpg",
        },
        {
          src:
            "https://illya-support.weivird.com/static/com/photo/cover/20200702060546293.jpg",
        },
        {
          src:
            "https://illya-support.weivird.com/static/com/bangumi/cover/20200702042640463.jpg",
        },
        {
          src:
            "https://illya-support.weivird.com/static/com/photo/cover/20200702060546293.jpg",
        },
      ],
    };
  },
  methods: {
    getData() {
      this.list = this.list.concat(this.list);
    },
  },
  created() {
    this.getData();
  },
};
</script>
<style lang="scss" scoped>
.body {
  padding-top: 40px;
  overflow: hidden;
  width: 100%;
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