<template>
  <div>
    <p class="detailHeader">秒杀商品详情</p>
    <div class="detailTips">
      <span id="userTip" v-if="!user"> 您还没有登录，请登陆后再操作<br/></span>
      <span>没有收货地址的提示。。。</span>
    </div>
    <div class="goodDetail">
      <p class="goodsName">{{ goods.goodsName }}</p>
      <p class="goodsDetail">{{ goods.goodsDetail }}</p>
      <p class="stockCount">{{ goods.stockCount }}</p>
      <p class="seckillPrice">{{ goods.seckillPrice }}</p>
    </div>
    <div class="seckillTime">
      <span id="startTime">{{ new Date(goods.startDate).toLocaleString() }}</span>
      <span class="secikillTip" v-if="remainSeconds > 0">{{ '秒杀倒计时：' + remainSeconds + '秒' }}</span>
      <span class="secikillTip" v-else-if="remainSeconds === 0">秒杀进行中</span>
      <span class="secikillTip" v-else>秒杀已经结束</span>
    </div>
    <div class="seckillZone">
      <img id="verifyCodeImg" width="80" height="32"  v-show="seckillStart" :src="verifyImageSrc" @click="getVerifyCode"/>
      <input id="verifyCode" v-model="verifyNum" v-show="seckillStart"/>
      <button type="button" id="buyButton" @click="getSeckillPath" :disabled="!seckillStart">立即秒杀</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      goods: {},
      user: {},
      remainSeconds: 0,
      id: this.$route.params.id,
      verifyImageSrc: '',
      verifyNum: 0,
      seckillStart: false
    }
  },
  created () {
    this.getDetail()
  },
  mounted: function () {
    this.countDown()
  },
  methods: {
    getDetail () {
      this.$api.get('goods/detail/' + this.id, null, r => {
        this.goods = r.data.goods
        this.remainSeconds = r.data.remainSeconds
        this.user = r.data.user
      }, r => {
        this.goods = r.data.goods
        this.remainSeconds = r.data.remainSeconds
        this.user = r.data.user
      })
    },
    countDown () {
      let timeout
      if (this.remainSeconds > 0) { // 秒杀还未开始
        const that = this
        timeout = setTimeout(function () {
          that.remainSeconds = that.remainSeconds - 1
          that.countDown()
        }, 1000)
      } else if (this.remainSeconds === 0) { // 秒杀进行中
        this.seckillStart = true
        if (timeout) {
          clearTimeout(timeout)
        }
        this.getVerifyCode()
      } else { // 秒杀结束
        this.seckillStart = false
      }
    },
    getSeckillPath () {
      this.$api.get('seckill/path?goodsId=' + this.goods.id + '&verifyCode=' + this.verifyNum, null, r => {
        if (r.code === 0) {
          let path = r.data
          this.doSeckill(path)
        } else {
          console.log(r.code + r.msg)
        }
      }, r => {
        if (r.code === 0) {
          let path = r.data
          this.doSeckill(path)
        } else {
          console.log(r.code + r.msg)
        }
      })
    },
    doSeckill (path) {
      this.$api.post('seckill/' + path + '/do_seckill', {
        goodsId: this.goods.id
      }, r => {
        if (r.code === 0) {
          this.getSeckillResult(this.goods.id)
        } else {
          console.log(r.code + r.msg)
        }
      }, r => {
        if (r.code === 0) {
          this.getSeckillResult(this.goods.id)
        } else {
          console.log(r.code + r.msg)
        }
      })
    },
    getSeckillResult (goodsId) {
      this.$api.get('seckill/result?goodsId=' + goodsId, null, r => {
        if (r.code === 0) {
          let result = r.data
          if (result < 0) {
            console.log('秒杀失败')
          } else if (result === 0) { // 继续轮询
            setTimeout(function () {
              this.getSeckillResult(goodsId)
            }, 200)
          } else {
            console.log('秒杀成功,跳转订单页面')
            this.$router.push('/order_detail/' + result)
          }
        } else {
          console.log(r.msg)
        }
      }, r => {
        console.log(r.msg)
      })
    },
    getVerifyCode () {
      // 由于跨域问题,这里写死,部署后可以不需要这部分
      this.verifyImageSrc = 'http://localhost:8080/seckill/verifyCode?goodsId=' + this.id
      //      this.$api.get('seckill/verifyCode?goodsId=' + this.id, null, r => {
      //          this.verifyImageSrc = r.data
      //      }, r => {
      //        this.verifyImageSrc = r.data
      //      })
    }
  }
}
</script>

<style></style>
