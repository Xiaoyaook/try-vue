<template>
  <div>
    <ul>
      <li v-for="i in list" :key="i.id">
        <p>{{ i.title }}</p>
        <p>{{ i.summary }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      list: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.listAllArticle().then(res => {
        console.log(res)
        this.list = res.data
        console.log(this.list)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style></style>
