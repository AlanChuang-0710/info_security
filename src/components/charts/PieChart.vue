<script>
export default {
  name: "",
  data() {
    return {
      pie_options: {
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "50%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              scale: false,
              label: {
                show: true,
                color: "#363636",
                fontSize: "18",
                backgroundColor: "#eee",
                borderRadius: 50,
                padding: 10
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 80, name: "80" },
              { value: 70, name: "70" },
              { value: 76, name: "76" },
            ],
          },
        ],
      },
      pie_chart: null,
    };
  },
  methods: {
    init() {
      let piechart = document.getElementById("piechart");
      this.$echarts.dispose(piechart);
      this.pie_chart = this.$echarts.init(piechart, {
        backgroundColor: "#363636",
      });
      this.pie_chart.setOption(this.pie_options);
    },
    onResize() {
      if (this.pie_chart) {
        this.pie_chart.resize();
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
      <div ref="piechart" id="piechart" style="height: 550px"></div>
    </div>
    <q-resize-observer @resize="onResize" />
  </div>
</template>
<style lang="scss" scoped>
</style>