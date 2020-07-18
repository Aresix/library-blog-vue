<template>
  <el-menu
    :default-active="'/index'"
    router
    mode="horizontal"
    background-color="#00FA9A"
    text-color="#fff"
    active-text-color="#764DB3">
    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
      {{ item.navItem }}
    </el-menu-item>
    <a href="#nowhere" style="color: #222;float: right;padding: 20px;">更多功能</a>
    <i class="el-icon-menu " style="float:right;font-size: 45px;color: #222;padding-top: 8px"/>
    <span style="position: absolute;padding-top: 20px;right: 43%;font-size: 20px;font-weight: bold">🦋私人图书馆</span>
  </el-menu>
</template>

<script>
    export default {
        name: 'NavMenu',
        data () {
          return {
            navList: [
              {name: '/index', navItem: '首页'},
              {name: '/library', navItem: '书架'},
              {name: '/admin', navItem: '个人中心'}
            ]
          }
        }
    }
</script>

<style scoped>
  a{
    text-decoration: none;
  }

  span {
    pointer-events: none;
  }
</style>
