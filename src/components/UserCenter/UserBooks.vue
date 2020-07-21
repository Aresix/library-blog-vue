<template>
    <div>
      <el-card class="box-card" shadow="hover" >
        <div slot="header" style="text-align: left" class="clearfix">
          <span>我的喜欢</span>
        </div>
        <el-table
          :data="likeBookList"
          height="350"
          class="bookcard">
          <template slot="empty">快去书架上发现自己喜欢的书吧！</template>
          <el-table-column
            prop="num"
            label="序号"
            width="80">
          </el-table-column>
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="book"
            label="书名">
          </el-table-column>
          <el-table-column
            prop="author"
            label="作者">
          </el-table-column>
          <el-table-column
            width="110"
            label="操作">
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">不再喜欢</el-button>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
</template>

<script>
    export default {
        name: 'UserBooks',
      data () {
          return {
            likeBookList: []
          }
      }
    }
</script>

<style scoped>
  .text {
    font-size: 16px;
    text-align: center;
    font-weight: bold;
    color: #105e51;
    line-height: 36px;
    /*margin-bottom: 10px;*/
  }

  .item {
    margin-top: 25px;
    /*margin-bottom: 18px;*/
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

  .bookcard {
    width: 100%;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.3);
    margin: 0;
  }
</style>
