<template>
  <div>
    <h1>秒杀订单详情</h1>
    <div>
      <p class="goodsName">商品名称: {{ goods.goodsName }}</p>
      <p class="goodsImg"><img :src="goods.goodsImg" /></p>
      <p class="orderPrice">订单价格: {{ order.goodsPrice }}</p>
      <p class="createDate">下单时间: {{ new Date(order.createDate).toLocaleString() }}</p>
      <p class="orderStatus">订单状态: {{ status }}</p>
      <button>立即支付</button>
    </div>
    <div>
      <p>收货人: <span>ziliang</span></p>
      <p>收货地址: <span>西青</span></p>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      id: this.$route.params.id,
      goods: {},
      order: {},
      status: ''
    }
  },
  created () {
    this.getOrderDetail()
  },
  methods: {
    getOrderDetail () {
      this.$api.get('/order/detail/' + this.id, null, r => {
        if (r.code === 0) {
          this.render(r.data)
        } else {
          console.log(r.msg)
        }
      }, r => {
        if (r.code === 0) {
          this.render(r.data)
        } else {
          console.log(r.msg)
        }
      })
    },
    render (detail) {
      this.goods = detail.goods
      this.order = detail.order
      if (detail.order.status === 0) {
        this.status = '未支付'
      } else if (detail.order.status === 1) {
        this.status = '待发货'
      }
    }
  }
}
</script>

<style></style>
