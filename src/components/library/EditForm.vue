<template>
  <div>
    <i class="el-icon-circle-plus-outline" @click="dialogFormVisible = true"/>
    <el-dialog
      title="添加/修改图书"
      :visible.sync="dialogFormVisible"
      @close="clear">
      <el-form v-model="form" style="text-align: left" ref="dataForm">
        <el-form-item label="书名" :label-width="formLabelWidth" prop="title">
          <el-input v-model="form.title" autocomplete="off" placeholder="不用加书名号“《》”"/>
        </el-form-item>
        <el-form-item label="作者" :label-width="formLabelWidth" prop="author">
          <el-input v-model="form.author" autocomplete="off"/>
        </el-form-item>
        <el-form-item label="译者" :label-width="formLabelWidth" prop="translator">
          <el-input v-model="form.translator" autocomplete="off"/>
        </el-form-item>
        <el-form-item label="出版年份" :label-width="formLabelWidth" prop="year">
          <el-date-picker
            v-model="form.year"
            type="year"
            value-format="yyyy"
            placeholder="选择年">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="出版社" :label-width="formLabelWidth" prop="press">
          <el-input v-model="form.press" autocomplete="off"/>
        </el-form-item>
        <el-form-item label="封面" :label-width="formLabelWidth" prop="cover">
          <el-input v-model="form.cover" autocomplete="off" placeholder="请给出图片URL~"/>
        </el-form-item>
        <el-form-item label="分类" :label-width="formLabelWidth" prop="cid">
          <el-select v-model="form.category.id" placeholder="请选择分类">
            <el-option label="文学" value="1"/>
            <el-option label="流行" value="2"/>
            <el-option label="文化" value="3"/>
            <el-option label="生活" value="4"/>
            <el-option label="悬疑" value="5"/>
            <el-option label="科技" value="6"/>
            <el-option label="其他" value="7"/>
          </el-select>
        </el-form-item>
        <el-form-item label="评分" :label-width="formLabelWidth" prop="grade">
          <el-rate v-model="form.grade"/>
        </el-form-item>
        <el-form-item prop="id" style="height: 0">
          <el-input type="hidden" v-model="form.id" autocomplete="off"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
    export default {
        name: 'EditForm',
        data () {
          return {
            dialogFormVisible: false,
            form: {
              id: '',
              title: '',
              author: '',
              translator: '',
              year: '',
              press: '',
              cover: '',
              grade: '',
              category: {
                id: '',
                name: ''
              }
            },
            formLabelWidth: '120px'
          }
        },
      methods: {
          clear () {
            this.form = {
              id: '',
              title: '',
              author: '',
              translator: '',
              year: '',
              press: '',
              cover: '',
              grade: 0,
              category: ''
            }
          },
        onSubmit () {
            // console.log('今天也很喜欢墨墨！')
            // console.log(this.form.id)
            // console.log(this.form.author)
            // console.log(this.form.translator)
            // console.log(this.form.year)
            // console.log(typeof (this.form.year))
            // console.log(this.form.press)
            // console.log(this.form.grade)
            // console.log(this.form.category)
            this.$axios
              .post('/books', {
                id: this.form.id,
                cover: this.form.cover,
                title: this.form.title,
                author: this.form.author,
                translator: this.form.translator,
                year: this.form.year,
                press: this.form.press,
                grade: this.form.grade,
                category: this.form.category
              }).then(resp => {
                console.log(this.form.grade + '许墨！！！')
                if (resp && resp.status === 200) {
                  this.dialogFormVisible = false
                  this.$emit('onSubmit')
                }
            })
            // 强制刷新页面
            location.reload()
        }
      }
    }
</script>

<style scoped>
  .el-icon-circle-plus-outline {
    margin: 50px 0 0 20px;
    font-size: 80px;
    float: left;
    cursor: pointer;
  }
</style>
