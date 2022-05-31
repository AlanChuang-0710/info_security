<script>
export default {
  name: "",
  data() {
    return {
      lineChange_options: {
        // legend: {},
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu"],
          axisLine: {
            lineStyle: {
              color: "#c7c7cb",
            },
          },
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value}",
          },
          axisLine: {
            lineStyle: {
              color: "#c7c7cb",
            },
          },
        },
        series: [
          {
            name: "Highest",
            type: "line",
            data: [10, 12, 12, 9],
            markPoint: {
              data: [
                { type: "max", name: "Max" },
                { type: "min", name: "Min" },
              ],
            },
            // markLine: {
            //   data: [{ type: "average", name: "Avg" }],
            // },
          },
          {
            name: "Lowest",
            type: "line",
            data: [1, -2, 2, 5],
            markPoint: {
              data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }],
            },
            // markLine: {
            //   data: [
            //     { type: "average", name: "Avg" },
            //     [
            //       {
            //         symbol: "none",
            //         x: "90%",
            //         yAxis: "max",
            //       },
            //       {
            //         symbol: "circle",
            //         label: {
            //           position: "start",
            //           formatter: "Max",
            //         },
            //         type: "max",
            //         name: "最高点",
            //       },
            //     ],
            //   ],
            // },
          },
        ],
      },
      lineChange_chart: null,
    };
  },
  methods: {
    init() {
      let lineChangeChart = document.getElementById("lineChangeChart");
      this.$echarts.dispose(lineChangeChart);
      this.lineChange_chart = this.$echarts.init(lineChangeChart, {
        backgroundColor: "#363636",
      });
      this.lineChange_chart.setOption(this.lineChange_options);
    },
    onResize() {
      if (this.lineChange_chart) {
        this.lineChange_chart.resize();
      }
    },
  },
  mounted() {
    this.init();
  },
};
</script>
<template>
  <div>
    <div>
      <div
        ref="lineChangeChart"
        id="lineChangeChart"
        style="height: 250px"
      ></div>
    </div>
    <q-resize-observer @resize="onResize" />
  </div>
</template>
<style lang="scss" scoped>
</style>