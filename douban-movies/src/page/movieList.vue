<template>
  <div>
    <section class="grid has-search-bar">
      <h2>{{ title }}</h2>
      <div class="card" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <router-link to="{name: 'movieDetail', params: {id: Movie.id}}" class="item" v-for="Movie in Movies" :key="Movie.id">
          <div class="cover">
            <div class="wp">
              <img class="img-show" :src="Movie.images.medium">
            </div>
            <div class="info">
              <h3>{{ Movie.title }}</h3>
            </div>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
  import api from '../api/index.js'
  import infiniteScroll from 'vue-infinite-scroll'

  export default {
    directives: {infiniteScroll},
    data: function () {
      return {
        Movies: [],
        type: '',
        title: '',
        total: '',
        busy: false,
        start: 0,
        limit: 9
      }
    },
    computed: {
      path: function () {
        return '/movie/' + this.type + '?start=' + this.start + '&count=' + this.limit
      }
    },
    created: function () {
      this.type = this.$route.query.type
      this.loadMore()
    },
    methods: {
      loadMore: function () {
        this.start = this.Movies.length
        this.busy = true
        api.get(this.path, null, r => {
          this.title = r.title
          this.total = r.total
          this.Movies = this.Movies.concat(r.subjects)
        }, r => {
          this.title = r.title
          this.total = r.total
          this.Movies = this.Movies.concat(r.subjects)
          if (this.Movies.length < this.total) {
            this.busy = false
          }
        })
      }
    }
  }
</script>

<style></style>
