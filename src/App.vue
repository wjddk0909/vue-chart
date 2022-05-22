<template>
  <div id="app">
    <h2>Chart.js</h2>
    <bar-chart></bar-chart>
  </div>
</template>

<script>
import BarChart from './components/BarChart'

export default {
  name: "App",
  // 컴포넌트 속성 && 인스턴스 옵션
  components: {
    BarChart,
  }
}
</script>

<style>

</style>
