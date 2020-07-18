<template>
  <el-container>
    <el-aside style="width: 200px;margin-top: 10px">
      <switch/>
      <SideMenu @indexSelect="listByCategory" ref="SideMenu"/>
    </el-aside>
    <el-main>
      <Books class="books-area" ref="booksArea"/>
    </el-main>
  </el-container>
</template>

<script>
  import SideMenu from './SideMenu'
  import Books from './Books'
  export default {
      name: 'AppLibrary',
      components: {Books, SideMenu},
      methods: {
        listByCategory () {
          var _this = this
          var cid = this.$refs.SideMenu.cid
          var url = 'categories/' + cid + '/books'
          this.$axios.get(url).then(resp => {
            if (resp && resp.status === 200) {
              _this.$refs.booksArea.books = resp.data
            }
          })
        }
      }
  }
</script>

<style scoped>
  .books-area {
    width: 990px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
