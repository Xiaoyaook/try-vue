<template lang="html">
  <div class="about">
    <nav-header></nav-header>
    <div class="headpic">
      <div class="container headtitle full">
        <div class="title">
          <h1 href="/blog">Xiaoyaook</h1>
        </div>
      </div>
    </div>
    <div class="container full">
      <div class="list">
        <div>
          <div class="full-content">
            <div class="messages-text post-content">
              <div style="height: 600px;">
                <h2 style="margin-bottom: 20px;">About</h2>
                <i>世界上唯有两样东西能让我们的内心受到深深的震撼，一是我们头顶浩瀚灿烂的星空，一是我们心中崇高的的道德法则。</i>
                <br>
                <p style="margin-bottom: 20px;padding-top: 20px;">
                  github地址 : <a href="https://github.com/Xiaoyaook/try-vue/tree/master/blogmaster">https://github.com/Xiaoyaook/try-vue/tree/master/blogmaster</a>
                </p>
                <p style="margin-bottom: 20px;">
                  server部分地址: <a href="https://github.com/Xiaoyaook/blog">https://github.com/Xiaoyaook/blog</a>
                </p>
                <img src="/static/sky.png" alt="mysky">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from '@/components/Header.vue'
import NavFooter from '@/components/Footer.vue'
export default {
  components: {
    NavHeader,
    NavFooter,
  }
}
</script>

<style lang="css">
.about {
  background-color: #fff;
}
@media (max-width: 800px) {
  .about img {
    width: 100%;
  }
}
</style>
