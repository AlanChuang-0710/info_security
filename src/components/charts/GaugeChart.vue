<script>
export default {
  name: "",
  props: ['name', 'chart', 'option'],

  data() {
    return {
      nameTemp: this.name,
      chartTemp: this.chart,
      optionTemp: this.option
      // gauge_options: {
      //   series: [
      //     {
      //       type: "gauge",
      //       startAngle: 180,
      //       endAngle: 0,
      //       min: 0,
      //       max: 1,
      //       //指針刻度的分割段數
      //       splitNumber: 8,
      //       radius: "100%",
      //       //橫座標與縱座標。
      //       center: ["50%", "75%"],
      //       axisLine: {
      //         lineStyle: {
      //           width: 6,
      //           color: [
      //             [0.25, "#FF6E76"],
      //             [0.5, "#FDDD60"],
      //             [0.75, "#58D9F9"],
      //             [1, "#7CFFB2"],
      //           ],
      //         },
      //       },
      //       //三角指針
      //       pointer: {
      //         icon: "triangle",
      //         length: "12%",
      //         width: 10,
      //         offsetCenter: [0, "-60%"],
      //         itemStyle: {
      //           color: "auto",
      //         },
      //       },
      //       //細秒針
      //       axisTick: {
      //         length: 12,
      //         lineStyle: {
      //           color: "auto",
      //           width: 1,
      //         },
      //       },
      //       //粗秒針
      //       splitLine: {
      //         length: 20,
      //         lineStyle: {
      //           color: "auto",
      //           width: 3,
      //         },
      //       },
      //       //A~D
      //       axisLabel: {
      //         color: "#464646",
      //         fontSize: 15,
      //         distance: -60,
      //         formatter: function (value) {
      //           if (value === 0.875) {
      //             return "A";
      //           } else if (value === 0.625) {
      //             return "B";
      //           } else if (value === 0.375) {
      //             return "C";
      //           } else if (value === 0.125) {
      //             return "D";
      //           }
      //           return "";
      //         },
      //       },
      //       //指針name
      //       title: {
      //         offsetCenter: [0, "-20%"],
      //         fontSize: 15,
      //         color: "#fff",
      //       },
      //       //分數
      //       detail: {
      //         fontSize: 10,
      //         offsetCenter: [0, "0%"],
      //         valueAnimation: true,
      //         formatter: function (value) {
      //           return Math.round(value * 100) + "分";
      //         },
      //         color: "auto",
      //       },
      //       //指針name
      //       data: [
      //         {
      //           value: 0.7,
      //           name: "Late Tasks",
      //         },
      //       ],
      //     },
      //   ],
      // },
      // gauge_chart: null,
    };
  },
  methods: {
    init() {
      let gaugechart = this.$refs[this.nameTemp]
      this.$echarts.dispose(gaugechart);
      this.chartTemp = this.$echarts.init(gaugechart, {
        backgroundColor: "#363636",
      });
      this.chartTemp.setOption(this.optionTemp);
    },
    onResize() {
      if (this.chart) {
        this.chart.resize();
      }
    },
  },
  mounted() {
    this.init();
  },
};
</script>
<template>
  <div class="col-md-4 col-sm-12 col-xs-12">
    <q-card class="bg-transparent no-shadow no-border q-mt-sm">
      <q-card-section class="q-pa-none">
        <div>
          <div :ref="name" style="height: 300px"></div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<style lang="scss" scoped>
</style>