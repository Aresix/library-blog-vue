<template>
  <el-menu
    class="categories"
    default-active="0"
    @select="handleSelect"
    active-text-color="#94E61A">
    <el-menu-item index="0">
      <i class="el-icon-menu"/>
      <span slot="title">全部</span>
    </el-menu-item>
    <el-menu-item index="1">
      <i class="el-icon-menu"/>
      <span slot="title">文学</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-menu"/>
      <span slot="title">流行</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-menu"/>
      <span slot="title">文化</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-menu"/>
      <span slot="title">生活</span>
    </el-menu-item>
    <el-menu-item index="5">
      <i class="el-icon-menu"/>
      <span slot="title">悬疑</span>
    </el-menu-item>
    <el-menu-item index="6">
      <i class="el-icon-menu"/>
      <span slot="title">科技</span>
    </el-menu-item>
    <el-menu-item index="7">
      <i class="el-icon-menu"/>
      <span slot="title">其他</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
    export default {
      name: 'SideMenu',
      data () {
        return {
          cid: ''
        }
      },
      methods: {
        handleSelect (key, keyPath) {
          this.cid = key
          console.log(this.cid + '喜欢原来的墨墨呜呜呜' + key + keyPath)
          this.$emit('indexSelect')
        }
      }
    }
</script>

<style scoped>
  /*.genre {*/
  /*  position: fixed;*/
  /*  margin-left: 5px;*/
  /*  left: -600px;*/
  /*  top: 100px;*/
  /*  width: 150px;*/
  /*}*/
</style>
