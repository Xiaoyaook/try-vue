<template>
  <div class="lf-style">
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
      }
    }
  }
</script>

<style>

</style>
