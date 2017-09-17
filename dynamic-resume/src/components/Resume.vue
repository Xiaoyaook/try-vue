<template>
  <div class="rt-resume">
    <div v-if="enableHtml" v-html="compileMarkdown"></div>
    <pre v-else >{{ nowCode }}</pre>
  </div>
</template>

<script>
  import marked from 'marked'

  export default {
    props: ['nowCode', 'enableHtml'], // 这里是动态props,这里只是注册属性,还需要在父组件把这个属性传过来
    computed: {
      compileMarkdown: function () {
        return marked(this.nowCode)
      }
    }
  }
</script>

<style></style>
