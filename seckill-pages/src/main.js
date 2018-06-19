// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api/index.js'
import store from './store/index'

// 将API方法绑定到全局
Vue.prototype.$api = api

// 获取cookie
function getCookie (name) {
  if (document.cookie.length > 0) {
    // (^| )name=([^;]*)(;|$),match[0]为与整个正则表达式匹配的字符串，match[i]为正则表达式捕获数组相匹配的数组；
    var arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'))
    if (arr !== null) {
      return unescape(arr[2])
    }
    return null
  }
}
Vue.prototype.getCookie = getCookie

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
