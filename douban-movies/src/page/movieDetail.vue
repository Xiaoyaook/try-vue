<template>
  <div>
    <section class="grid had-search-bar">
      <div class="movie">
        <h2>{{ Movie.title }}</h2>
        <div class="content">
          <img :src="Movie.images.large">
          <p>{{ Movie.countries[0] + ' / ' + Movie.year + ' / ' + Movie.directors[0].name + '(导演)' }}</p>
        </div>
        <div class="btn">
          <a @click="Movie.wish_count += 1">想看({{ Movie.wish_count }})</a>
          <a @click="Movie.collect_count += 1">看过({{ Movie.collect_count }})</a>
        </div>
        <div class="summary">
          <h2>{{ Movie.title }}剧情介绍</h2>
          <p>{{ Movie.summary }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import api from '../api/index.js'

  export default {
    data: function () {
      return {
        Movie: {},
        id: ''
      }
    },
    computed: {
      path: function () {
        return '/movie/subject/' + this.id
      }
    },
    created: function () {
      this.id = this.$route.params.id
      this.getMovie()
    },
    methods: {
      getMovie: function () {
        api.get(this.path, null, r => {
          this.Movie = r
        }, r => {
          this.Movie = r
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  h2 {
    font-size: 14px;
    font-weight: normal;
    box-sizing: border-box;
    max-width: 660px;
    margin: 15px auto;
    padding: 0 4%;
    color: #8e8e8e;
    text-align: center;
  }
  .content {
    img {
      display: block;
      margin: 0 auto;
    }
    p {
      text-align: center;
    }
  }
  .btn {
    margin-bottom: 30px;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    a{
      height: 30px;
      line-height: 30px;
      display: block;
      border: 1px solid #ffb712;
      border-radius: 3px;
      margin-right: 10px;
      color: #ffb712;
      font-size: 15px;
      text-align: center;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
    }
  }
</style>
