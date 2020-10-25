<template>
  <div class="Main">
    <div class="content-main main-content width-normal">
      <div class="loginbox">
        <div class="login-title">登录</div>
        <el-input
          v-model="account"
          class="txt-input"
          placeholder="账户"
          prefix-icon="el-icon-user"
        ></el-input>
        <el-input
          v-model="password"
          class="txt-input"
          placeholder="密码"
          prefix-icon="el-icon-key"
          show-password
        ></el-input>
        <div style="text-align: center; margin-top: 110px">
          <el-button
            type="primary"
            round
            align="center"
            @click.native="loginstart"
            >立即登录</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { authAdminLogin } from "@/api/common";
import { signin } from "@/utils/auth";
export default {
  name: "login",
  created() {},
  data() {
    return {
      account: "",
      password: "",
    };
  },
  methods: {
    seedauth() {
      if (this.password == "") {
        this.$message({
          message: "密码不能为空",
          type: "error",
        });
        return false;
      } else {
        return true;
      }
    },
    loginstart() {
      if (this.seedauth() == false) {
        return console.log("终止");
      }
      this.$message({
        message: "正在登录中",
        type: "success",
      });
      this.$http(
        authAdminLogin({
          account: this.account,
          password: this.password,
        }),
        (res) => {
          console.log(res);
          if (res.code == 200) {
            this.$message({
              message: "登录成功",
              type: "success",
            });
            signin(res.data.token);
            this.$router.push({ name: "home" });
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
};
</script>
<style type="css">
.el-divider__text {
  background-color: #fbfbfb;
  color: #9e9e9e;
}
</style>

<style lang="scss" scoped>
a,
li,
ul {
  text-decoration: none;
  list-style-type: none;
}

html,
body {
  margin: 0;
  padding: 0;
  border: 0;
}
.Main {
  min-height: calc(100vh - 0px);
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  .loginbox {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border-radius: 3px;
    width: 300px;
    height: 300px;
    z-index: 999;
    padding: 20px;
  }
  .login-title {
    color: #8a8a8a;
    margin: 0;
    border: 0;
    width: 100%;
    padding: 0;
    font-size: 14px;
    text-align: center;
  }
  .txt-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 100%;
    margin-top: 20px;
  }
}
</style>