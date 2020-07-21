<template>
  <div class="backgroud">
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
  .backgroud {
    background-size: cover;
    position: absolute;
    width: 100%;
    /*height: 1060px;*/
    height: 100%;
    background: url("../../assets/bg4.jpg") no-repeat;
  }
</style>
