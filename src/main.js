// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
// import { Button, Select, Form, FormItem, Input } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'

// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
Vue.use(ElementUI)

// 栓塞制反向代理，前端请求默认发送到http://localhost:8443/api
var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8443/api'

// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.user.username) {
      next()
    } else {
      next({
        path: 'login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  // 注意这里 （使用钩子函数判断是否拦截
  store,
  components: {App},
  template: '<App/>'
})
