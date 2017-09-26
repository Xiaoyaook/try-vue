<template>
  <div>
    <header class="top-nav">
      <nav  class="nav-list">
        <ul>
          <li>
            <router-link to="/movies">电影</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <div class="search-bar">
      <input class="search-input" v-model.trim="query" placeholder="输入要搜索的电影名称" @keyup.enter="search()">
      <i class="fa fa-search search-btn" aria-hidden="true" @click="search()"></i>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        query: ''
      }
    },
    methods: {
      search: function () {
        this.$router.push({name: 'searchList', query: { q: this.query }})
        this.query = ''
      }
    }
  }
</script>

<style scoped lang="scss">
  .top-nav {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9999;
    background: #fff;
    a {
      text-decoration: none;
    }
    .nav-list {
      border-bottom: 1px solid #f3f3f3;
      -webkit-box-pack:justify;
      -webkit-box-align:center;
      padding: 0 18px;
      background: #fff;
      height: 47px;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      display: -webkit-box;
      display: flex;
      nav li {
          display: inline-block;
      }
      li a {
        font-size: 15px;
        margin-right: 19px;
        color: rgb(35, 132, 232);
      }
      nav > * {
        vertical-align: middle;
      }
    }
    ul, li {
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }
  .search-bar {
    background: #fff;
    margin-top: 47px;
    position: relative;
    .search-input {
      -webkit-appearance: none;
      border: 0;
      outline: 0;
      background: #f5f5f5;
      padding: 10px 5px;
      width: 100%;
    }
    .search-btn {
      width: 20px;
      position: absolute;
      right: 5px;
      top: 9px;
      color: darkgrey;
    }
  }
</style>
