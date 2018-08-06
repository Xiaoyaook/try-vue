<template lang="html">
  <div class="admin-container">
    <mavon-editor class="set" v-model="value" @change="getContent"></mavon-editor>
    <div class="footer">
      <el-popover
        ref="popover5"
        placement="top"
        width="160"
        v-model="visible2">
        <p>确定提交吗？</p>
        <div style="text-align: right; margin: 0">
          <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
          <el-button type="primary" size="mini" @click="modifyArticle">确定</el-button>
        </div>
      </el-popover>
      <el-button v-popover:popover5 class="submit">修改</el-button>
      <div class="left">
      <el-button>修改信息</el-button>
      <el-button>修改分类</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      content: '',
      article: {},
      visible2: false,
    }
  },
  mounted () {
    this.getValue()
  },
  methods: {
    // 这里我们不需要渲染成HTML的内容，直接取md源码,故取value
    getContent (value,render) {
      this.content = value
    },
    getValue () {
      let articleId = this.$route.query.articleId
      let param = {
        id: articleId
      }
//      axios.get("/api/articleDetial", {
//        params: param
//      }).then((result) => {
//        let res = result.data
//        if (res.status == "0") {
//          this.value = res.result.content
//        } else {
//          this.value = ''
//        }
//      })
      this.$api.getArticleMD(param).then(res => {
        if (res.code === 0) {
          this.article = res.data
          this.value = res.data.content
        }
      }).catch(error => {
        console.log(error)
      })
    },
    modifyArticle () {
//      let articleId = this.$route.query.articleId
//      axios.post("/api/articleModify", {
//        articleId: articleId,
//        content: this.content
//      }).then((response)=>{
//        let res = response.data
//        if (res.status == '0') {
//          this.$message({
//            type: 'success',
//            message: '文章已修改'
//          })
//          this.visible2 = false
//        } else {
//          this.$message.error('未修改')
//        }
//      })
      this.article.content = this.content
      // article 携带Date类型的createBy会报错，故直接删去
      delete this.article.createBy
      this.$api.updateArticle(this.article).then(res => {
        if (res.code === 0) {
          this.$message({
            type: 'success',
            message: '文章已修改'
          })
          this.visible2 = false
        } else {
          this.$message.error('未修改')
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="css">
</style>
