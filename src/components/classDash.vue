<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="4">
        <apexchart type="pie" width="380" :options="chartData.chartOptions" :series="chartData.series"></apexchart>
      </v-col>
    </v-row>
    <v-row class="mt-12" justify="center">
      <h2 style="color: rgb(84,84,84)">*DATA WILL BE AVAILABLE ONCE ANALYSIS STARTS*</h2>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'classDash',
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
