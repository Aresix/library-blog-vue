<template>
  <el-upload
    class="img-upload"
    ref="upload"
    action="http://localhost:8443/api/users/avatar"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :on-success="handleSuccess"
    multiple
    :limit="1"
    :on-exceed="handleExceed"
    :file-list="fileList">
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip" style="color: red">只能上传JPG/PNG文件，且文件大小不超过500KB！</div>
  </el-upload>
</template>

<script>
    export default {
        name: 'AvatarUpload',
      data () {
          return {
            fileList: [],
            url: ''
          }
      },
      methods: {
        handleRemove (file, fileList) {

        },
        handlePreview (file) {

        },
        handleExceed (files, fileList) {
          this.$message.warning(`当前限制选择1个文件，您已选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
        },
        beforeRemove (file, fileList) {
          return this.$confirm(`确定移除 ${file.name} ?`)
        },
        handleSuccess (response) {
          this.url = response
          this.$emit('onUpload')
          this.$message.warning('上传成功')
        },
        clear () {
          this.$refs.upload.clearFiles()
        }
      }
    }
</script>

<style scoped>

</style>
