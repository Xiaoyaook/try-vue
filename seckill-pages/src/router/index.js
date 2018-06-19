import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Detail from '@/page/goods_detail'
import Login from '@/page/login'
import OrderDetail from '@/page/order_detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    }, {
      path: '/login',
      component: Login
    }, {
      path: '/detail/:id',
      component: Detail
    }, {
      path: '/order_detail/:id',
      component: OrderDetail
    }
  ]
})
