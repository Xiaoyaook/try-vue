<template>
  <div id="app">
    <vheader></vheader>
    <router-view></router-view>
  </div>
</template>

<script>
import vheader from './components/header.vue'
export default {
  name: 'app',
  components: {
    vheader
  }
}
</script>

<style lang="scss">
  @import "assets/list.scss";
</style>
