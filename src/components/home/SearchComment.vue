<template>
    <div style="margin-bottom: 30px;display: flex;justify-content: center;align-items: center">
      <el-input
        @keyup.enter.native="Click"
        placeholder="通过书名或评论内容搜索"
        prefix-icon="el-icon-search"
        size="small"
        style="width: 400px;margin-left: 10px"
        v-model="keywords"
        clearable>
      </el-input>
      <el-button size="small" type="primary" icon="el-icon-search"
                 @click="Click">搜索</el-button>
    </div>
</template>

<script>
    export default {
      name: 'SearchComment',
      data () {
          return {
            keywords: '',
            com: [],
            cardLoading: []
          }
      },
      methods: {
        Click () {
          this.$emit('comSearch')
        }
      }
    }
</script>

<style scoped>

</style>
