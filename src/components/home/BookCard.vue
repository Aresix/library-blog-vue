<template>
    <div>
      <el-row style="height: 1400px">
        <!--Search!!-->
        <div v-for="item in com.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        :key="item.com_id">
          <el-card class="boxCard">
            <div slot="header" style="text-align: right" class="clearfix">
              <img src="../../assets/card_decoration.png" style="height: 20px; float: left">
              《{{item.book}}》
            </div>
            <div style="text-align: left; width: 120px; font-size: 18px">
              <img src="../../assets/name_decoration.png" style="width: 15px">   {{item.commenter}}:<br>
            </div>
            <div>
              {{item.body}}
            </div>
          </el-card>
        </div>
      </el-row>
      <br>
      <el-row>
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pagesize"
          :total="com.length">
        </el-pagination>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: 'BookCard',
      data () {
          return {
            com: [
              // {id: '', book: '白夜行', author: '嵬漪', content: '就当是一场梦，醒了很久还是很感动'}
            ],
            currentPage: 1,
            pagesize: 7
          }
      },
      mounted () {
          this.loadComments()
      },
      methods: {
        loadComments () {
          var _this = this
          this.$axios
            .get('/comments')
            .then(resp => {
              if (resp && resp.status === 200) {
                _this.com = resp.data
              }
            })
            .catch(function (response) {
              console.log(response)
            })
        },
        handleCurrentChange: function (currentPage) {
          this.currentPage = currentPage
        }
      }
    }
</script>

<style scoped>
  .boxCard {
    margin-left: 200px;
    margin-right: 200px;
    margin-top: 20px;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.8);
    /*background-image: url("../../assets/card2.png");*/
    /*background-size: cover;*/
    /*opacity: 0.8;*/
    border: 1px solid #eaeaea;
    box-shadow: 0 0 15px #cac6c6;
  }
  .clearfix {
    text-shadow: #2c3e50;
    font-size: 20px;
  }
</style>
