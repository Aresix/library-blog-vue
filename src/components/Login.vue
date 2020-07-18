/* eslint-disable */
<template>
  <div class="note" :style="note">
    <el-form ref="loginForm" :model="loginForm" label-width="80px" class="login-form">
      <h2 class="login-title">欢迎来到🦋私人图书馆</h2>
      <br><br>
      <el-form-item label="用户名" class="login-tip">
        <el-input v-model="loginForm.username" type="text" auto-complete="off" placeholder="请输入用户名" clearable/>
      </el-form-item>
      <el-form-item label="密码" class="login-tip">
        <el-input v-model="loginForm.password" auto-complete="off" placeholder="请输入密码" clearable show-password/>
      </el-form-item>

      <el-form-item class="btn" label-width="0" style="margin-top: 15px">
        <el-button type="primary" style="width: 30%;background: #8ac825;border: none" v-on:click="LoginIn" round>登录</el-button>
        <el-button type="primary" style="width: 30%;background: #8ac825;border: none;margin-left: 40px" v-on:click="LoginUp" round>注册</el-button>
      </el-form-item>
    </el-form>
    <p class="copyright">©Made by Aresix</p>
<!--    用户名:<input type="text" v-model="loginForm.username" placeholder="请输入用户名"/>-->
<!--    <br><br>-->
<!--    密码： <input type="password" v-model="loginForm.password" placeholder="请输入密码"/>-->
<!--    <br><br>-->
<!--    <button v-on:click="login">登录</button>-->
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        loginForm: {
          username: '',
          password: ''
        },
        // username: '',
        // password: '',
        responseResult: []
      }
  },
  methods: {
    LoginIn () {
      // 拦截未登录用户访问后续页面 + 已有登录信息，则无须重复登录
      var _this = this
      console.log(this.$store.state)
      this.$axios
        .post('/login', {
          username: this.loginForm.username,
          password: this.loginForm.password
        })
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            _this.$store.commit('login', _this.loginForm)
            var  path = this.$route.query.redirect
            this.$router.replace({path: path === '/' || path === undefined ? 'index' : path})
          } else {
            this.loginForm.username = '再想想'
          }
        })
        .catch(failResponse => {

        })
    }
  }
}
</script>

<style scoped>
  .login-form {
    width: 350px;
    background-color: rgba(255, 255, 255, 0.6);
    padding: 30px;
    border-radius: 20px;
    margin: 160px auto 160px 200px;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .note {
    background-size: cover;
    position: absolute;
    width: 100%;
    /*height: 1060px;*/
    height: 100%;
    background: url("../assets/bg4.jpg") no-repeat;
  }

  .login-title {
    color: rgba(12, 87, 7, 0.91);
    text-align: center;
  }

  .login-tip {
    color: black;
  }

  .btn {
    text-align: center;
    position: center;
  }

  .copyright {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #9443c8
  }
</style>
