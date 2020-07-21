<template>
  <div>
    <el-button style="float: right; padding: 0; margin-bottom: 3px" icon="el-icon-edit" type="text" @click="UserEditVisible = true">编辑信息</el-button>
    <el-dialog
      title="修改个人信息"
      style="padding: 20px; margin-left: 240px; margin-right: 240px; border-radius: 20px"
      :visible.sync="UserEditVisible"
      @close="erase">
      <el-form v-model="basicInfo" style="text-align: left" ref="infoForm">
        <el-form-item label="上传头像" :label-width="formLabelWidth" prop = "avatar">
          <el-input v-model="basicInfo.avatar" autocomplete="off" placeholder="点击下方按钮就好啦~"/>
          <avatar-upload @onUpload="uploadImg" ref="avatarUpload"/>
        </el-form-item>
        <el-form-item label="修改昵称" :label-width="formLabelWidth" prop = "nickname">
          <el-input v-model="basicInfo.nickname" minlength="1" maxlength="15" show-word-limit autocomplete="off"/>
        </el-form-item>
        <el-form-item label="填写简介" :label-width="formLabelWidth" prop = "intro">
          <el-input v-model="basicInfo.content" type="textarea" autosize maxlength="200" show-word-limit autocomplete="off"/>
        </el-form-item>
        <el-form-item prop="id" style="height: 0">
          <el-input type="hidden" v-model="basicInfo.id" autocomplete="off"/>
        </el-form-item>
        <el-form-item prop="username" style="height: 0">
          <el-input type="hidden" v-model="basicInfo.username" autocomplete="off"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="UserEditVisible = false">取 消</el-button>
        <el-button type="primary" @click="onUserSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
    import ImgUpload from '../common/ImgUpload'
    import AvatarUpload from '../common/AvatarUpload'
    export default {
      name: 'UserEdit',
      components: {AvatarUpload, ImgUpload},
      data () {
        return {
          UserEditVisible: false,
          basicInfo: {
            id: '',
            nickname: '',
            avatar: '',
            content: '',
            username: JSON.parse(localStorage.getItem('user')).username
          },
          formLabelWidth: '120px'
          // imgUrl: '/users/'+this.basicInfo.username
        }
      },
      methods: {
        erase () {
          this.basicInfo = {
            id: '',
            nickname: '',
            avatar: '',
            username: '',
            content: ''
          }
        },
        onUserSubmit () {
          this.$axios
            .post('/users/' + this.basicInfo.username, {
              id: this.basicInfo.id,
              nickname: this.basicInfo.nickname,
              avatar: this.basicInfo.avatar,
              username: this.basicInfo.username,
              content: this.basicInfo.content
          }).then(resp => {
            // console.log('墨墨！')
            if (resp && resp.status === 200) {
              // console.log('行不行？？？')
              this.UserEditVisible = false
              this.$emit('onUserSubmit')
            }
          })
        },
        uploadImg () {
          this.basicInfo.avatar = this.$refs.avatarUpload.url
        }
      }
    }
</script>

<style scoped>

</style>
