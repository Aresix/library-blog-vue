<template>
  <div class="background">
    <el-container>
      <el-main>
        <UserInfo/>
      </el-main>
    </el-container>
<!--    <UserBooks/>-->
  </div>
</template>

<script>
    import UserInfo from './UserInfo'
    import UserBooks from './UserBooks'
    export default {
        name: 'UserCenter',
      components: {UserBooks, UserInfo},
      data () {
          return {
          }
        }
    }
</script>

<style scoped>
  .background {
    /*background-size: 100% 100%;*/
    background-size: cover;
    /*background-origin: padding-box;*/
    /*position: absolute;*/
    /*margin-top: -20px;*/
    width: 100%;
    /*height: 1060px;*/
    height: 100%;
    position: fixed;
    background: url("../../assets/bg4.jpg") repeat-y right top;
    /*padding-top: 20px;*/
  }
</style>
