// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 倒入 http 文件夹下的 index.js
import api from './http/index'

Vue.config.productionTip = false

// 可以直接在 Vue 原型上调用 $api
Vue.use(api)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
