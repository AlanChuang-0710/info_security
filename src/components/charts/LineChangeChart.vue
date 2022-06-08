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
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
            name: "One",
            type: "line",
            data: [200, 130, 110, 95, 127, 287, 65],
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
            name: "Two",
            type: "line",
            data: [100, 255, 230, 135, 98, 120, 272],
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
          {
            name: "Three",
            type: "line",
            data: [123, 267, 300, 283, 127, 178, 65],
            markPoint: {
              data: [
                { type: "max", name: "Max" },
                { type: "min", name: "Min" },
              ],
            },
          },
          {
            name: "Four",
            type: "line",
            data: [290, 139, 115, 95, 88, 260, 65],
            markPoint: {
              data: [
                { type: "max", name: "Max" },
                { type: "min", name: "Min" },
              ],
            },
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
<style lang="scss" scoped></style>
