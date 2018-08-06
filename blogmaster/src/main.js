// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import mavonEditor from 'mavon-editor'
import api from './http/index'
import hljs from 'highlight.js';
import 'mavon-editor/dist/css/index.css'
// 全局引入css文件
import '@/assets/css/container.css'
import '@/assets/css/header.css'
import '@/assets/css/article.css'
import '@/assets/css/side.css'
import '@/assets/css/blog.css'
import 'highlight.js/styles/atelier-forest-light.css'
Vue.use(ElementUI)
Vue.use(mavonEditor)

// 使用 Vue 的自定义指令，可以在内容渲染时才搜索对应内容中的 <pre><code> 标签，控制更方便
Vue.directive('hljs', el => {
  let blocks = el.querySelectorAll('pre code');
  Array.prototype.forEach.call(blocks, hljs.highlightBlock);
});



// 可以直接在 Vue 原型上调用 $api
Vue.use(api)

Vue.prototype.setCookie = (c_name, value, expiredays) => {
  var exdate = new Date();　　　　
  exdate.setDate(exdate.getDate() + expiredays);　　　　
  document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}

Vue.prototype.setCookie = (c_name, value, expiredays) => {
  var exdate = new Date();　　　　
  exdate.setDate(exdate.getDate() + expiredays);　　　　
  document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}
function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return (arr[2]);
  else
    return null;
}
Vue.prototype.getCookie = getCookie;
Vue.prototype.delCookie =(name) => {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
