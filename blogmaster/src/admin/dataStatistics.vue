<template>
  <div>
    <ve-line :data="chartData"></ve-line>
  </div>
</template>

<script>
import VeLine from 'v-charts/lib/line.common'
export default {
  components: { VeLine },
  data () {
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
      }
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.getSysLogThisMonth().then(res => {
        if (res.code === 0) {
          this.chartData.rows = res.data
        } else {
          console.log("syslog获取失败")
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style></style>
