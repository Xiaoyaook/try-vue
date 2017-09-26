<template>
  <div id="movies">
    <section class="grid has-search-bar">
      <div>
        <h2>正在上映的电影 <router-link :to="{ name: 'movieList', query: { type: 'in_theaters' }}" class="more">更多</router-link></h2>
        <div class="card">
          <router-link :to="{name: 'movieDetail', params: {id: nowMovie.id}}" class="item" v-for="nowMovie in nowMovies" :key="nowMovie.id">
            <div class="cover">
              <div class="wp">
                <img class="img-show" :src="nowMovie.images.medium">
              </div>
              <div class="info">
                <h3>{{ nowMovie.title }}</h3>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div>
        <h2>即将上映的电影 <router-link :to="{ name: 'movieList', query: { type: 'coming_soon' }}" class="more">更多</router-link></h2>
        <div class="card">
          <div class="card">
            <router-link :to="{name: 'movieDetail', params: {id: willMovie.id}}" class="item" v-for="willMovie in willMovies" :key="willMovie.id">
              <div class="cover">
                <div class="wp">
                  <img class="img-show" :src="willMovie.images.medium">
                </div>
                <div class="info">
                  <h3>{{ willMovie.title }}</h3>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        nowMovies: [],
        willMovies: []
      }
    },
    created: function () {
      this.$api.get('/movie/in_theaters', null, r => {
        this.nowMovies = r.subjects.slice(0, 9)
        console.log('don')
      }, r => {
        this.nowMovies = r.subjects.slice(0, 9)
        console.log('done')
      })
      this.$api.get('/movie/coming_soon', null, r => {
        this.willMovies = r.subjects.slice(0, 9)
        console.log('wdon')
      }, r => {
        this.willMovies = r.subjects.slice(0, 9)
        console.log('wdone')
      })
    }
  }
</script>

<style>

</style>
