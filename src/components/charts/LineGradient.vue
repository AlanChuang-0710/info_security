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
        ],
      },
      lineChange_chart: null,
    };
  },
  methods: {
    init() {
      let lineGradient = document.getElementById("lineGradient");
      this.$echarts.dispose(lineGradient);
      this.lineChange_chart = this.$echarts.init(lineGradient, {
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
        ref="lineGradient"
        id="lineGradient"
        style="height: 250px"
      ></div>
    </div>
    <q-resize-observer @resize="onResize" />
  </div>
</template>
<style lang="scss" scoped></style>
