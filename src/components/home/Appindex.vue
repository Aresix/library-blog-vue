/* eslint-disable */
/* 关于首页部分的内容给，写在这里！！比如动态更新什么的，还有侧边导航栏 */
<template>
<!--    <div>-->
<!--      今天也想见花陵呀！！！-->
<!--      <br><br>-->
<!--      Hello, World!-->
<!--      <br><br>-->
<!--      你好，世界！-->
<!--    </div>-->
  <div>
    <el-container>
      <el-main>
        <h2>大众书评</h2>
        <BookCard/>
      </el-main>
      <el-aside width="300px">
        <clock style="margin-top: 20px"/>
        <iframe class="bgm" src="//music.163.com/outchain/player?type=2&id=1462392175&auto=1&height=32"></iframe>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
    import BookCard from './BookCard'
    import Clock from 'vue-clock2'
    export default {
        name: 'AppIndex',
      components: {Clock, BookCard}
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
</style>
