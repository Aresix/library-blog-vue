<template>
  <div>
    <el-card class="box-card" shadow="hover" >
      <div slot="header" style="text-align: left" class="clearfix">
        <span>个人信息</span>
        <UserEdit/>
        <!--      <el-button style="float: right; padding: 3px 0" type="text" @click="UserEditVisible = true">编辑信息</el-button>-->
      </div>
      <el-avatar :size="100" class="avatar" :src="item.avatar"/>
      <div class="text item">
        昵称： {{item.nickname}}<br>
        用户名： {{item.username}}<br>
        简介： {{item.content}}
      </div>
    </el-card>
  </div>
</template>

<script>
  import ImgUpload from '../common/ImgUpload'
  import UserEdit from './UserEdit'
  import {mapState} from 'vuex'
  export default {
    name: 'UserInfo',
    components: {UserEdit, ImgUpload},
    data () {
      return {
        formLabelWidth: '120px',
        // circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        item: {
          avatar: '',
          nickname: '', // 随机数随便生成一个
          username: JSON.parse(localStorage.getItem('user')).username, // 注册的那个
          content: '' // 默认“这个人很懒，什么都没有写”
        }
      }
    },
    computed: mapState({
      username: state => state.user
    }),
    mounted: function () {
      this.loadUserInfo()
    },
    methods: {
      loadUserInfo () {
        var _this = this
        // console.log(this.item.username)
        this.$axios
          .get('/users/' + this.item.username)
          .then(resp => {
            if (resp && resp.status === 200) {
              _this.item = resp.data
              // console.log(_this.item.avatar)
              this.loadUserInfo()
            }
          })
          .catch(function (response) {
            console.log(response)
          })
      },
      editInfo () {
        // this.UserEditVisible = true
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

  .avatar {
    border: 2px solid #eaeaea;
    position: center;
    background-size: cover;
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
    /*background-image: url("../../assets/card2.png");*/
    /*background-size: cover;*/
    /*opacity: 0.8;*/
    border: 1px solid #eaeaea;
    box-shadow: 0 0 15px #cac6c6;
  }
</style>
