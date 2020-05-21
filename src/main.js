import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'
import axios from 'axios'
import './assets/fonts/iconfont.css'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
axios.interceptors.request.use(config => {
  // console.log(config)
  // 后台验证规则
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 最后必须 return config
  return config
})
Vue.prototype.$http = axios
// 导入字体图标
// import './assets/iconfont/iconfont.js'
// import './assets/iconfont/iconfont.css'

// 我是注释
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
