<template>
  <div class="time">{{date}}</div>
</template>

<script>
  export default {
    name: 'Calendar',
    data: function () {
      return {
        date: new Date()
      }
    },
    created () {
    },
    mounted () {
      let _this = this
      this.timer = setInterval(function () {
        _this.date = new Date().toLocaleDateString()
      })
    },
    beforeDestroy: function () {
      if (this.timer) {
        clearInterval(this.timer)
      }
    }
  }
</script>

<style scoped>
</style>
