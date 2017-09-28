<template>
  <div>
    <transition name="loading">
      <div id="loading" v-show="show">
        <span class="wait">Loading...</span>
      </div>
    </transition>
    <div class="array">
      <ul>
        <li v-for="item in array">{{ item }}</li>
      </ul>
      <a class="btn" @click="loadmore()">NEXT</a>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['list'],
    data: function () {
      return {
        limit: 15,
        array: [],
        show: false
      }
    },
    created: function () {
      this.loadmore()
    },
    methods: {
      loadmore: function () {
        this.show = true
        if (this.array.length < this.list.length) {
          this.array = this.array.concat(this.list.slice(this.array.length, this.array.length + this.limit))
        }
        setTimeout(() => {
          this.show = false
        }, 2000)
      }
    }
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }
  ul {
    list-style: none;
  }
  li {
    background: #fff;
    border-bottom: 1px solid #e0e0e0;
    padding: 20px;
  }
  li:nth-child(2n) {
    background: #fafafa;
  }
  .btn {
    position: fixed;
    bottom: 0;
    height: 3em;
    line-height: 3em;
    width: 100%;
    background-color: black;
    color: white;
    text-align: center;
  }

  #loading {
    position: fixed;
    bottom: 0;
    height: 100%;
    width: 100%;
    background-color: black;
  }
  .wait {
    position: absolute;
    left: 48%;
    top: 50%;
    color: white;
  }
  .loading-enter-active {
    animation: expand .5s 1 cubic-bezier(0, 1, 0, 1) both;
  }
  .loading-leave-active {
    animation: collapse .5s 1 cubic-bezier(0, 1, 0, 1) both;
    top: 0;
    bottom: auto; /* 这里的top和bottom 是结束时向上拉的关键*/
  }
  @keyframes expand {
    0% {
      height: 3em;
      transform: translate3d(0, 0, 0);
    }
    100% {
      height: 100%;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes collapse {
    0% {
      height: 100%;
      transform: translate3d(0, 0, 0);
    }
    100% {
      height: 3em;
      transform: translate3d(0, 0, 0);
    }
  }
</style>
