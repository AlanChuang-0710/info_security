<script>
import CardMsg from "@/components/cards/CardMsg.vue";
import CardList from "@/components/cards/CardList.vue";
import MixChart from "@/components/charts/MixChart.vue";
import GaugeChart from "@/components/charts/GaugeChart.vue";
import GaugeRingChart from "@/components/charts/GaugeRingChart.vue";
export default {
  name: "Dashboard4",
  components: {
    CardMsg,
    CardList,
    MixChart,
    GaugeChart,
    GaugeRingChart,
  },
  data() {
    return {
      gauge_options: {
        series: [
          {
            type: "gauge",
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 1,
            //指針刻度的分割段數
            splitNumber: 8,
            radius: "100%",
            //橫座標與縱座標。
            center: ["50%", "75%"],
            axisLine: {
              lineStyle: {
                width: 6,
                color: [
                  [0.25, "#FF6E76"],
                  [0.5, "#FDDD60"],
                  [0.75, "#58D9F9"],
                  [1, "#7CFFB2"],
                ],
              },
            },
            //三角指針
            pointer: {
              icon: "triangle",
              length: "12%",
              width: 10,
              offsetCenter: [0, "-60%"],
              itemStyle: {
                color: "auto",
              },
            },
            //細秒針
            axisTick: {
              length: 12,
              lineStyle: {
                color: "auto",
                width: 1,
              },
            },
            //粗秒針
            splitLine: {
              length: 20,
              lineStyle: {
                color: "auto",
                width: 3,
              },
            },
            //A~D
            axisLabel: {
              color: "#464646",
              fontSize: 15,
              distance: -60,
              formatter: function (value) {
                if (value === 0.875) {
                  return "A";
                } else if (value === 0.625) {
                  return "B";
                } else if (value === 0.375) {
                  return "C";
                } else if (value === 0.125) {
                  return "D";
                }
                return "";
              },
            },
            //指針name
            title: {
              offsetCenter: [0, "-20%"],
              fontSize: 15,
              color: "#fff",
            },
            //分數
            detail: {
              fontSize: 10,
              offsetCenter: [0, "0%"],
              valueAnimation: true,
              formatter: function (value) {
                return Math.round(value * 100) + "分";
              },
              color: "auto",
            },
            //指針name
            data: [
              {
                value: 0.7,
                name: "Late Tasks",
              },
            ],
          },
        ],
      },
      gauge_options2: {
        series: [
          {
            type: "gauge",
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 1,
            //指針刻度的分割段數
            splitNumber: 8,
            radius: "100%",
            //橫座標與縱座標。
            center: ["50%", "75%"],
            axisLine: {
              lineStyle: {
                width: 6,
                color: [
                  [0.25, "#FF6E76"],
                  [0.5, "#FDDD60"],
                  [0.75, "#58D9F9"],
                  [1, "#7CFFB2"],
                ],
              },
            },
            //三角指針
            pointer: {
              icon: "triangle",
              length: "12%",
              width: 10,
              offsetCenter: [0, "-60%"],
              itemStyle: {
                color: "#fff",
              },
            },
            //細秒針
            axisTick: {
              length: 12,
              lineStyle: {
                color: "auto",
                width: 1,
              },
            },
            //粗秒針
            splitLine: {
              length: 20,
              lineStyle: {
                color: "auto",
                width: 3,
              },
            },
            //A~D
            axisLabel: {
              color: "#464646",
              fontSize: 15,
              distance: -60,
              formatter: function (value) {
                if (value === 0.875) {
                  return "A";
                } else if (value === 0.625) {
                  return "B";
                } else if (value === 0.375) {
                  return "C";
                } else if (value === 0.125) {
                  return "D";
                }
                return "";
              },
            },
            //指針name
            title: {
              offsetCenter: [0, "-20%"],
              fontSize: 15,
              color: "#fff",
            },
            //分數
            detail: {
              fontSize: 10,
              offsetCenter: [0, "0%"],
              valueAnimation: true,
              formatter: function (value) {
                return Math.round(value * 100) + "分";
              },
              color: "auto",
            },
            //指針name
            data: [
              {
                value: 0.7,
                name: "Complete Incident",
              },
            ],
          },
        ],
      },
      gauge_chart: null,
      gauge_chart2: null,
    };
  },
};
</script>
<template>
  <div style="background-color: #363636">
    <q-page class="q-pa-sm">
      <card-msg></card-msg>
      <div class="row q-col-gutter-sm">
        <!-- 同 chart 引入  -->
        <gauge-chart name="gauge1" :chart="gauge_chart" :option="gauge_options"></gauge-chart>
        <gauge-chart name="gauge2" :chart="gauge_chart2" :option="gauge_options2"></gauge-chart>
        <gauge-ring-chart></gauge-ring-chart>
      </div>
      <card-list></card-list>
      <mix-chart></mix-chart>
    </q-page>
  </div>
</template>
<style lang="scss" scoped>
</style>