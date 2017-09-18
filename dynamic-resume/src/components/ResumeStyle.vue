<template>
  <div class="lf-style" ref="container">
    <pre v-html="highlightedCode"></pre>
    <div v-html="changeStyle"></div>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  export default {
    props: ['nowStyle'],
    computed: {
      highlightedCode: function () {
        return Prism.highlight(this.nowStyle, Prism.languages.css)
      },
      changeStyle: function () {
        return '<style>' + this.nowStyle + '</style>'
      },
      methods: {
        goBottom: function () {
          this.$refs.container.scrollTop = 100000
        }
      }
    }
  }
</script>

<style>

</style>
