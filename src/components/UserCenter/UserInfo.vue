<template>
  <el-card class="box-card" shadow="hover" >
    <div slot="header" style="text-align: left" class="clearfix">
      <span>个人信息</span>
      <el-button style="float: right; padding: 3px 0" type="text">编辑信息</el-button>
    </div>
    <el-avatar @select="uploadAvatar" :size="100" class="avatar" :src="circleUrl"/>
    <div v-for="(item, i) in attributes" :key="i" class="text item">
      {{item.attri}}： {{item.content}}
    </div>
  </el-card>
</template>

<script>
  export default {
    name: 'UserInfo',
    data () {
      return {
        attributes: [
          {attri: '用户名', content: '许墨！！！！'},
          {attri: '简介', content: '这个人很懒，什么都没有留下'}
        ],
        circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
      }
    },
    methods: {
      uploadAvatar () {
        // TODO: 上传头像（上传图片）
      }
    }
  }
</script>

<style scoped>
  .text {
    font-size: 16px;
    text-align: center;
  }

  .item {
    margin-top: 25px;
    /*margin-bottom: 18px;*/
  }

  .avatar {
    border: 2px solid #eaeaea;
  }

  .clearfix {
    text-shadow: #2c3e50;
    font-size: 20px;
  }

  .box-card {
    /*width: 800px;*/
    margin-left: 200px;
    margin-right: 200px;
    margin-top: 20px;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid #eaeaea;
    box-shadow: 0 0 15px #cac6c6;
  }
</style>
