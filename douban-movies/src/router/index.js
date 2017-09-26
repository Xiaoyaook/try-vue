import Vue from 'vue'
import Router from 'vue-router'
import Movies from '@/page/movies'
import MovieList from '@/page/movieList'
import MovieDetail from '@/page/movieDetail'
import SearchList from '@/page/searchList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Movies
    },
    {
      path: '/movies',
      name: 'movies',
      component: Movies
    },
    {
      path: '/movie/search',
      name: 'searchList',
      component: SearchList
    },
    {
      path: '/movie/subject/:id',
      name: 'movieDetail',
      component: MovieDetail
    },
    {
      path: '/movie/list',
      name: 'movieList',
      component: MovieList
    }
  ]
})
