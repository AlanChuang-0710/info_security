<script>
//gaugeRing Data
const gaugeData = [
  {
    value: 20,
    name: "Perfect",
    title: {
      offsetCenter: ["0%", "-50%"],
    },
    detail: {
      valueAnimation: true,
      offsetCenter: ["0%", "-30%"],
    },
  },
  {
    value: 40,
    name: "Good",
    title: {
      offsetCenter: ["0%", "-10%"],
    },
    detail: {
      valueAnimation: true,
      offsetCenter: ["0%", "10%"],
    },
  },
  {
    value: 60,
    name: "Commonly",
    title: {
      offsetCenter: ["0%", "30%"],
    },
    detail: {
      valueAnimation: true,
      offsetCenter: ["0%", "50%"],
    },
  },
];
export default {
  name: "",
  data() {
    return {
      gaugeRing_options: {
        series: [
          {
            type: "gauge",
            startAngle: 90,
            endAngle: -270,
            radius: "80%",
            center: ["50%", "50%"],
            pointer: {
              show: false,
            },
            progress: {
              show: true,
              overlap: false,
              roundCap: true,
              clip: false,
              itemStyle: {
                borderWidth: 1,
                borderColor: "#464646",
              },
            },
            axisLine: {
              lineStyle: {
                width: 20,
              },
            },
            splitLine: {
              show: false,
              distance: 0,
              length: 10,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
              distance: 50,
            },
            data: gaugeData,
            title: {
              fontSize: 10,
              color: "#fff"
            },
            detail: {
              width: 50,
              height: 14,
              fontSize: 10,
              color: "auto",
              borderColor: "auto",
              borderRadius: 20,
              borderWidth: 1,
              formatter: "{value}%",
              lineHeight: 30,
            },
          },
        ],
      },
      gaugeRing_chart: null,
    };
  },
  methods: {
    dancing(chart) {
      setInterval(() => {
        gaugeData[0].value = +(Math.random() * 100).toFixed(2);
        gaugeData[1].value = +(Math.random() * 100).toFixed(2);
        gaugeData[2].value = +(Math.random() * 100).toFixed(2);
        this.gaugeRing_chart.setOption({
          series: [
            {
              data: gaugeData,
              pointer: {
                show: false,
              },
            },
          ],
        });
      }, 2000);
    },
    init() {
      let gaugeRingchart = document.getElementById("gaugeRingchart");
      this.$echarts.dispose(gaugeRingchart);
      this.gaugeRing_chart = this.$echarts.init(gaugeRingchart, {
        backgroundColor: "#363636",
      });
      this.gaugeRing_chart.setOption(this.gaugeRing_options);
      this.dancing(this.gaugeRing_chart);
    },
    onResize() {
      if (this.gaugeRing_chart) {
        this.gaugeRing_chart.resize();
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
    <!-- <q-card class="bg-transparent no-shadow no-border q-mt-sm">
      <q-card-section class="q-pa-none"> -->
        <div>
          <div ref="gaugeRingchart" id="gaugeRingchart" style="height: 550px"></div>
        </div>
      <!-- </q-card-section>
    </q-card> -->
    <q-resize-observer @resize="onResize" />
  </div>
</template>
<style lang="scss" scoped>
</style>