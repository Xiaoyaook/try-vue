<template lang="html">
<div class="article-list">
  <article class="block post wysiwyg" v-for="item in list">
    <h2>{{item.title}}</h2>
    <p class="article-meta">发布于 {{item.createBy}}</p>
    <div class="ui ribbon label red">
      <a href="">{{item.categoryName}}</a>
    </div>
    <div class="abstract" v-html="item.summary">
    </div>
    <p class="more"><router-link :to="{ path:'/article/' + item.id }">阅读全文</router-link></p>
  </article>
  <div class="pages">
    <a href="javascript:;" @click="go(page-=1)" style="float: left;">上一页</a>
    <a href="javascript:;" @click="go(page+=1)" style="float: right;">下一页</a>
  </div>
</div>
</template>

<script>
export default {
  props:[
    'tagSelect'
  ],
  data () {
    return {
      list: [],
      page: 1,
//      count: 0
    }
  },
  watch: {
    tagSelect () {
      this.getArticleListByCategory()
    }
  },
  mounted () {
    this.getArticleList()
  },
  methods: {
    getArticleListByCategory () {
      this.$api.listArticleByCategory({
        id: this.tagSelect,
        pageNum: this.page
      }).then(res => {
        if (res.code === 0) {
          if (res.data === {}) { // 数据为空，回上一页
            this.page -= 1
            return
          }
          this.list = res.data
        }
      }).catch(error => {
        console.log(error)
      })
    },
    getArticleList () {
      this.$api.listArticle({
        pageNum: this.page
      }).then(res => {
        if (res.code === 0) {
          if (res.data === {}) { // 数据为空，回上一页
            this.page -= 1
            return
          }
          this.list = res.data
        }
      }).catch(error => {
        console.log(error)
      })
    },
    go () {
      if (this.page<1) {
        this.page = 1
        return
      } else {
        this.getArticleList()
      }
    }
  }
}
</script>

<style media="screen">
.article-list {
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  /*box-shadow: 1px 1px 2px rgba(0,0,0,0.08)*/
  box-shadow: 0 16px 24px 1px rgba(0, 0, 0, 0.14),
              0 6px 50px 1px rgba(0, 0, 0, 0.12),
              0 6px 10px -5px rgba(0, 0, 0, 0.2);
}
</style>
