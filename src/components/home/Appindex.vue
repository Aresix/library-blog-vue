/* eslint-disable */
/* 关于首页部分的内容给，写在这里！！比如动态更新什么的，还有侧边导航栏 */
<template>
  <div class="background">
    <el-container>
      <el-main>
        <h2>大众书评</h2>
        <BookCard/>
      </el-main>
      <el-aside width="300px">
        <clock style="margin-top: 20px"/>
        <Calendar style="width: 298px;text-align: center;margin-top: 10px;font-size: 20px; font-weight: bold"/>
        <iframe class="bgm" src="//music.163.com/outchain/player?type=2&id=1462392175&auto=1&height=32"></iframe>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
    import BookCard from './BookCard'
    import Clock from 'vue-clock2'
    import Calendar from '../common/Calendar'
    export default {
        name: 'AppIndex',
      components: {Calendar, Clock, BookCard}
    }
</script>

<style scoped>
  .bgm {
    border: none;
    margin: 0;
    width: 298px;
    height: 52px;
    alignment: bottom;
    margin-top: 20px;
  }
  .background {
    background-size: 1000% 100%;
    /*position: absolute;*/
    /*background-attachment: fixed;*/
    width: 100%;
    /*height: 1060px;*/
    height: 100%;
    /*margin-top: -80px;*/
    background: url("../../assets/bg4.jpg") repeat-y center top;
  }
</style>
