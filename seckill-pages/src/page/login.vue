<template>
  <div class="login_form">
    <div>
      <label for="mobile">请输入手机号码</label>
      <input id="mobile" placeholder="手机号码" v-model="mobile" minlength="11" maxlength="11" />
    </div>
    <div>
      <label for="password">请输入密码</label>
      <input id="password" placeholder="密码" v-model="password" minlength="6" maxlength="16" />
    </div>
    <button @click="login">登录</button>
  </div>
</template>

<script>
import md5 from 'js-md5'

export default {
  data: function () {
    return {
      mobile: '',
      password: ''
    }
  },
  methods: {
    login () {
      //
      let reg = /^(1\d{10})$/
      if (!(reg.test(this.mobile))) {
        alert('不是完整的11位手机号或者正确的手机号前七位')
        return false
      }
      this.doLogin()
    },
    doLogin () {
      const salt = '1a2b3c4d'
      let pass = '' + salt.charAt(0) + salt.charAt(2) + this.password + salt.charAt(5) + salt.charAt(4)
      let formPass = md5(pass)
      console.log(this.mobile)
      this.$api.post('login/do_login', {
        mobile: this.mobile,
        password: formPass
      }, r => {
        if (r.code === 0) {
          console.log('登录成功')
          // 这里直接跳转,如果没有Cookie我们等下去设置一个全局SetCookie方法
          // this.$router.push('/')
        } else {
          console.log('登录失败')
        }
      }, r => {
        if (r.code === 0) {
          console.log('登录成功')
          // this.$router.push('/')
        } else {
          console.log('登录失败')
        }
      })
    }
  }
}
</script>

<style></style>
