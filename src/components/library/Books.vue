<template>
    <div>
      <el-row style="height: 700px;">
        <SearchBar @onSearch="searchResult" ref="searchBar"/>
        <el-tooltip effect="dark" placement="right"
                    v-for="item in books.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                    :key="item.id">
          <p slot="content" style="font-size: 14px;margin-bottom: 6px;">{{item.title}}</p>
          <p slot="content" style="font-size: 14px;margin-bottom: 6px;">
            <span>{{item.author}}</span>
            <span>{{item.translator}}</span>
            <span>{{item.year}}</span>
            <span>{{item.press}}</span>
          </p>
          <p slot="content" style="font-size: 14px;margin-bottom: 6px;">
            <span>豆瓣评分:{{item.grade}}</span>
            <span>参考价格:{{item.price}}</span>
          </p>
          <el-card style="width: 160px; margin-bottom: 20px; height:270px;float: left;margin-right: 15px" class="movie"
                   bodyStyle="padding:10px" shadow="hover">
            <div class="cover" @click="editBook(item)">
              <img :src="item.cover" alt="封面">
            </div>
            <div class="info">
              <div class="title">
                <a href="">{{item.title}}</a>
              </div>
<!--              <el-checkbox v-model="item.like" @checked="likeBook(item.id)" class="likeBooks">喜欢</el-checkbox>-->
              <i class="el-icon-delete" @click="deleteBook(item.id)"/>
            </div>
            <div class="author">{{item.author}}</div>
          </el-card>
        </el-tooltip>
        <edit-form @onSubmit="loadBooks()" ref="edit"/>
      </el-row>
      <br>
      <el-row>
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pagesize"
          :total="books.length">
        </el-pagination>
      </el-row>
    </div>
</template>

<script>
    import EditForm from './EditForm'
    import SearchBar from './SearchBar'
    import {mapState} from 'vuex'
    export default {
      name: 'Books',
      components: {SearchBar, EditForm},
      data () {
        return {
          books: [],
          currentPage: 1,
          pagesize: 10
          // like: '',
          // likelist: [],
          // username: JSON.parse(localStorage.getItem('user')).username
          // books: [
          //   {
          //     cover: 'http://lib.zjsru.edu.cn/__local/E/E9/5A/33C68A6BBF6CBC694B427CFF09D_489C6387_1183A.jpg',
          //     // cover: 'https://i.loli.net/2019/04/10/5cada7e73d601.jpg',
          //     // cover: 'https://evol.papegames.cn/public/newsimages/1279014595205402624.jpg',
          //     title: '白夜行',
          //     author: '东野圭吾',
          //     translator: '刘姿君译',
          //     year: '2008',
          //     grade: '评分：8.8',
          //     press: '南海出版公司'
          //     // abs: '故事围绕着一对有着不同寻常情愫的小学生展开。1973年，大阪的一栋废弃建筑内发现了一具男尸，此后19年，嫌疑人之女雪穗与被害者之子桐原亮司走上截然不同的人生道路，一个跻身上流社会，一个却在底层游走，而他们身边的人，却接二连三地离奇死去，警察经过19年的艰苦追踪，终于使真相大白。'
          //   }
          // ]
        }
      },
      // computed: mapState({
      //   username: state => state.user
      // }),
      mounted: function () {
        this.loadBooks()
        // this.doesLike()
        console.log('许墨！')
      },
      methods: {
        loadBooks () {
          var _this = this
          this.$axios
            .get('/books')
            // .then(resp => {
            // console.log('周棋洛：' + resp + '\t' + resp.state)
            // if (resp && resp.state === 200) {
            //   _this.books = resp.data
            // }
            .then(function (response) {
              console.log(response)
              // console.log('……我就不信没有输出' + response.status + response.data)
              if (response && response.status === 200) {
                  _this.books = response.data
                console.log('兄弟萌，把成功打在公屏上！')
              }
            })
            .catch(function (response) {
              console.log(response)
              console.log('计算器听完都不归零了！！！！')
            })
          // })
        },
        handleCurrentChange: function (currentPage) {
          this.currentPage = currentPage
          console.log(this.currentPage)
        },
        searchResult () {
          var _this = this
          this.$axios
            .get('/search?keywords=' + this.$refs.searchBar.keywords, {})
            .then(function (resp) {
            if (resp && resp.status === 200) {
              _this.books = resp.data
            }
          })
        },
        deleteBook (id) {
          this.$confirm('此操作将永久删除该书籍，是否继续？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$axios
            .post('/delete', {id: id}).then(resp => {
              if (resp && resp.status === 200) {
                this.loadBooks()
              }
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '操作已取消'
            })
          })
        },
        // doesLike (id) {
        //   var _this = this
        //   var uid = 0
        //   this.$axios
        //     .get('/users/' + this.username)
        //     .then(resp => {
        //       if (resp && resp.status === 200) {
        //         uid = resp.data.id
        //         console.log('果然是墨墨的小骗子！' + uid)
        //       }
        //     })
        //     .catch(function (response) {
        //       console.log(response)
        //     })
        //   this.$axios
        //     .get('/likebooks/' + uid)
        //     .then(resp => {
        //       if (resp && resp.status === 200) {
        //         _this.likelist = resp.data
        //         console.log(_this.likelist)
        //       }
        //     })
        //     .catch(function (response) {
        //       console.log(response)
        //     })
        //     // 如果在榜上就显示喜欢
        //     for (var i = 0; i < _this.likelist.length; i++) {
        //       _this.item.like = false
        //       if (_this.item.id === _this.likelist[i].id) {
        //         _this.item.like = true
        //         break
        //       }
        //     }
        // },
        // likeBook (item) {
        //   // this.like = !this.like
        //   // console.log(item)
        //   var _this = this
        //   var uid = 0
        //   this.$axios
        //     .get('/user/' + this.username)
        //     .then(resp => {
        //       if (resp && resp.status === 200) {
        //         uid = resp.data.id
        //         console.log('小骗子只有嵬漪一个！' + uid)
        //       }
        //     })
        //     .catch(function (response) {
        //       console.log(response)
        //     })
        //
        //   this.$axios
        //     .post('/likebooks/' + uid, {
        //       uid: uid,
        //       bid: this.books.id
        //     }).then(resp => {
        //       if (resp && resp.status === 200) {
        //         this.books.like = true
        //         this.$emit('likeBook')
        //       }
        //   })
        //   // 向数据库发送 信息就vans了 一个是 用户名对应的id 还有一个是item的id
        //   // TODO:改从数据库读值 这不就又要将一张表了吗 ++ 淦
        // },
        editBook (item) {
          this.$refs.edit.dialogFormVisible = true
          this.$refs.edit.form = {
            id: item.id,
            cover: item.cover,
            title: item.title,
            author: item.author,
            translator: item.translator,
            year: item.year,
            press: item.press,
            grade: item.grade,
            category: {
              id: item.category.id.toString(),
              name: item.category.name
            }
          }
        }
      }
    }
</script>

<style scoped>
  .cover {
    width: 115px;
    height: 172px;
    margin-bottom: 7px;
    overflow: hidden;
    cursor: pointer;
  }

  img {
    width: 115px;
    height: 172px;
  }

  .title {
    font-size: 14px;
    text-align: left;
  }

  .author {
    color: #333;
    width: 102px;
    font-size: 13px;
    margin-bottom: 6px;
    text-align: left;
  }

  /*.abstract {*/
  /*  display: block;*/
  /*  line-height: 17px;*/
  /*}*/

  .el-icon-delete {
    cursor: pointer;
    float: right;
  }

  .switch {
    display: flex;
    position: absolute;
    left: 780px;
    top: 25px;
  }

  a {
    text-decoration: none;
  }

  a:link, a:visited, a:focus {
    color: #3377aa;
  }

  .likeBooks {
    margin-right: -50px;
  }
</style>
