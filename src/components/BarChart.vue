<template>
  <canvas ref="barChart" id="barChart" width="400" height="400"></canvas>
</template>

<script>
// import Chart from "chart.js";

export default {
  name: "BarChart",
  props:['propsdata'],
  mounted() { // getElementById 쿼리접근자를 썼기때문에 mount된 후에
    const barChart = new this.$_Chart(this.$refs.barChart, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: this.propsdata
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    console.log(barChart)
  }
}
</script>

<style scoped>

</style>