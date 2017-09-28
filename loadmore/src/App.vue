<template>
  <div id="app">
    <List :list="list"></List>
  </div>
</template>

<script>
import List from './components/List.vue'

export default {
  name: 'app',
  components: {
    List
  },
  data: function () {
    return {
      list: []
    }
  },
  created: function () {
    for (let i = 0; i < 200; i++) {
      this.list.push('count ' + i)
    }
  }
}
</script>

<style>

</style>
