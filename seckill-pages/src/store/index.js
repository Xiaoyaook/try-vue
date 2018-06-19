import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'

Vue.use(Vuex)

// 使用Vuex保存user信息
export default new Vuex.Store({
  modules: {
    user
  }
})
