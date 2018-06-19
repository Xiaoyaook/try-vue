<template>
  <header class="header">
    <h1 class="logo">Seckill Frontend by Vue</h1>
    <p v-if="isLogging">欢迎</p>
    <p v-else>您还没有登录,请先<router-link :to="'/login'">登录</router-link></p>
  </header>
</template>

<script>
export default {
  data: function () {
    return {
      isLogging: false
    }
  },
  created () {
    this.checkLogin()
  },
  methods: {
    checkLogin () {
      // 检查是否存在session
      if (this.getCookie('token')) {
        this.isLogging = true
      }
    }
  }
}
</script>

<style></style>
