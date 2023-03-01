<script>
import EventBus from "../../shared/eventbus";
export default {
  name: "",
  props: ["name", "chart", "option", "height"],
  data() {
    return {
      nameTemp: this.name,
      chartTemp: this.chart,
      optionTemp: this.option,
      heightTemp: this.height,
      // pie_options: {
      //   series: [
      //     {
      //       name: "Access From",
      //       type: "pie",
      //       radius: ["40%", "50%"],
      //       avoidLabelOverlap: false,
      //       label: {
      //         show: false,
      //         position: "center",
      //       },
      //       emphasis: {
      //         scale: false,
      //         label: {
      //           show: true,
      //           color: "#363636",
      //           fontSize: "18",
      //           backgroundColor: "#eee",
      //           borderRadius: 50,
      //           padding: 10
      //         },
      //       },
      //       labelLine: {
      //         show: false,
      //       },
      //       data: [
      //         { value: 80, name: "80" },
      //         { value: 70, name: "70" },
      //         { value: 76, name: "76" },
      //       ],
      //     },
      //   ],
      // },
      // pie_chart: null,
    };
  },
  methods: {
    init() {
      let piechart = this.$refs[this.nameTemp];
      this.$echarts.dispose(piechart);
      this.chartTemp = this.$echarts.init(piechart, {
        backgroundColor: "transparent",
      });
      this.chartTemp.setOption(this.optionTemp);
      setTimeout(() => {
        this.chartTemp.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
        });
      }, 500);

      // let piechart = document.getElementById("piechart");
      // this.$echarts.dispose(piechart);
      // this.pie_chart = this.$echarts.init(piechart, {
      //   backgroundColor: "#363636",
      // });
      // this.pie_chart.setOption(this.pie_options);
    },
    onResize() {
      if (this.chartTemp) {
        this.chartTemp.resize();
      }
    },
  },
  mounted() {
    EventBus.$on("callPieChartData", () => {
      this.init();
    });
  },
  beforeDestroy() {
    //移除EventBus重複監聽
    EventBus.$off("callPieChartData");
  },
};
</script>
<template>
  <div>
    <div>
      <div :ref="name" :style="`height: ${heightTemp}`"></div>
      <!-- <div ref="piechart" id="piechart" style="height: 550px"></div> -->
    </div>
    <q-resize-observer @resize="onResize" />
  </div>
</template>
<style lang="scss" scoped>
</style>