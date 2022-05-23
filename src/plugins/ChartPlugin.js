import Chart from 'chart.js'

export default {
    install(Vue) {
        Vue.prototype.$_Chart = Chart; // -> BarChart.vue : this.$_Chart행, $_ 는 플러그인의 속성 또는 함수 접두사
    }
}