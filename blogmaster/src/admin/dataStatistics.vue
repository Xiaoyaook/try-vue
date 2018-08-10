<template>
  <div>
    <ve-line :data="chartData" :settings="chartSettings"></ve-line>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="ip"
        label="IP"
        width="180">
      </el-table-column>
      <el-table-column
        prop="remark"
        label="操作"
        width="180">
      </el-table-column>
      <el-table-column
        prop="createBy"
        label="日期">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import VeLine from 'v-charts/lib/line.common'
export default {
  components: { VeLine },
  data () {
    this.chartSettings = {
      labelMap: {
        date: '访问日期',
        count: '今日操作量'
      }
    }
    return {
      chartData: {
        columns: ['date', 'count'],
        rows: [
          { 'date': '01-01', 'count': 1231 },
          { 'date': '01-02', 'count': 1223 },
          { 'date': '01-03', 'count': 2123 },
          { 'date': '01-04', 'count': 4123 },
          { 'date': '01-05', 'count': 3123 },
          { 'date': '01-06', 'count': 7123 }
        ]
      },
      tableData: [],
      page: 1
    }
  },
  mounted () {
    this.getChartData()
    this.getTableData()
  },
  methods: {
    getChartData () {
      this.$api.getSysLogThisMonth().then(res => {
        if (res.code === 0) {
          this.chartData.rows = res.data
        } else {
          console.log("sysview数据获取失败")
        }
      }).catch(error => {
        console.log(error)
      })
    },
    getTableData () {
      this.$api.getSysLogTable({
        pageNum: this.page
      }).then( res => {
        if (res.code === 0) {
          this.tableData = res.data
        } else {
          console.log("sysview详情获取失败")
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style></style>
