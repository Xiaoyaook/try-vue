<template>
  <div class="goods_list">
    <my-header></my-header>
    <ul>
      <li v-for="i in list" :key="i.id">
        <router-link :to="'/detail/' + i.id">
          {{ i.id }}
        </router-link>
        {{ i.goodsName }}
      </li>
    </ul>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from '@/components/header.vue'
import myFooter from '@/components/footer.vue'

export default {
  components: { myHeader, myFooter },
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
      this.$api.get('goods/to_list', null, r => {
        this.list = r.data
      }, r => {
        this.list = r.data
      })
    }
  }
}
</script>

<style></style>
