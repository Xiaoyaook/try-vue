<template lang="html">
<div>
  <el-table
    :data="tableData"
    border
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      prop="id"
      label="编号"
      sortable
      width="60">
    </el-table-column>
    <el-table-column
      prop="title"
      label="标题"
      width="120">
    </el-table-column>
    <el-table-column
      prop="summary"
      label="描述"
      width="150">
    </el-table-column>
    <el-table-column
      prop="categoryName"
      label="分类"
      width="100">
    </el-table-column>
    <el-table-column
      prop="createBy"
      label="发布时间"
      width="180">
    </el-table-column>
    <el-table-column
      prop="content"
      label="内容">
    </el-table-column>
    <el-table-column
      label="操作"
      width="210">
      <template scope="scope">
        <el-button
          @click="handle(scope.$index, scope.row)"
          type="info"
          size="small">查看/编辑
        </el-button>
        <el-button
          @click="handleDelete(scope.$index, scope.row)"
          type="danger"
          size="small">删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
export default {
  data () {
    return {
      page: 1,
      // busy: true, //是否还有数据要加载
      tableData:[]
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
//      var param = { 之后添加分页功能后，需要传的参数
//        page: this.page,
//        pageSize: this.pageSize,
//      }
//      axios.get("/api/articleList_admin",{
//        params: param //传入到后端的参数集
//      }).then((result)=>{
//        let res = result.data
//        if (res.status == "0"){
//          this.tableData = res.result.list;
//        } else {
//          this.tableData = [];
//        }
//      })
      this.$api.listArticle().then(res => {
        if (res.code === 0) {
          this.tableData = res.data
        }
      }).catch(error => {
        console.log(error)
      })
    },
    handleDelete (index) {
      let articleId = this.tableData[index].id;
      this.$confirm('将删除该文章, 是否继续?', '警告', {
		    confirmButtonText: '确定',
		    cancelButtonText: '取消',
		    type: 'warning'
		  }).then(()=>{
          this.$api.deleteArticle({
            id: articleId
          }).then(res => {
            console.log(res)
            if (res.code === 0) {
              this.$message({
              type: 'success',
              message: '文章已删除'
              })
              this.init()
            } else {
              this.$message.error('未删除成功')
            }
          }).catch(error => {
            console.log(error)
          })
      })
    },
    handle (index) {
      let articleId = this.tableData[index].id;
      this.$router.push({path :'/admin/adminChange', query: { articleId:articleId }})
    }
  }
}
</script>

<style lang="css">
.row-bg {
    /*background-color: #f9fafc;*/
    background-color: #99a9bf;
    width: 100%;
    height: 837px;
    border-radius: 2px;
}
</style>
