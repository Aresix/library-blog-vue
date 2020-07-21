<template>
  <div class="background">
    <UserInfo/>
    <UserBooks/>
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
    background-size: 1000% 100%;
    /*background-origin: padding-box;*/
    /*position: absolute;*/
    /*margin-top: -20px;*/
    width: 100%;
    /*height: 1060px;*/
    height: 100%;
    background: url("../../assets/bg4.jpg") repeat-y right top;
    padding-top: 20px;
  }
</style>
