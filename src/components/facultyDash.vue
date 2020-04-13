<template>
  <v-container>
    <apexchart type="pie" width="380" :options="chartData.chartOptions" :series="chartData.series"></apexchart>
  </v-container>
</template>

<script>
export default {
  name: 'facultyDash',
  props: {
    data: Object
  },
  data: () => ({
    chartData: {
      series: [44, 26, 20],
      chartOptions: {
        chart: {
          width: 380,
          type: 'pie',
          foreColor: 'white'
        },
        labels: ['Happy', 'Neutral', 'Unhappy'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      }
    }
  })
}
</script>

<style scoped>

</style>
