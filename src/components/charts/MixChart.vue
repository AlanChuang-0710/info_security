<script>
export default {
  name: "",
  data() {
    return {
      mix_options: {
        color: ['#850f02', '#fd292c', '#ff9210','#35ff47', '#eee'],
        legend: {
          show: true,
          textStyle: {
            color: "#fff",
          },
          // selectorLabel: {
          //   distance: 5,
          // },
        },
        tooltip: {
          trigger: "axis",
          showContent: false,
        },
        dataset: {
          source: [
            ["product", "5/20", "5/21", "5/22", "5/23", "5/24", "5/25"],
            ["Critical", 56, 82, 88, 70, 53, 85],
            ["High", 51, 51, 55, 53, 73, 68],
            ["Medium", 40, 62, 69, 36, 45, 32],
            ["Low", 25, 37, 41, 18, 33, 49],
            ["Unknown", 40, 37, 41, 18, 33, 29],
          ],
        },
        xAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
        },
        yAxis: {
          gridIndex: 0,
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
        },
        grid: { top: "45%" },
        series: [
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row",
            emphasis: { focus: "series" },
          },
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row",
            emphasis: { focus: "series" },
          },
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row",
            emphasis: { focus: "series" },
          },
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row",
            emphasis: { focus: "series" },
          },
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row",
            emphasis: { focus: "series" },
          },
          //圓餅圖
          {
            type: "pie",
            id: "pie",
            radius: "33%",
            center: ["50%", "25%"],
            emphasis: {
              focus: "self",
            },
            label: {
              formatter: "{b}: ({d}) ",
            },
            encode: {
              y: 2,
              itemName: "product",
              value: "5/20",
              tooltip: "5/20",
            },
          },
        ],
      },
      mix_chart: null,
    };
  },
  methods: {
    init() {
      let mixchart = document.getElementById("mixchart");
      this.$echarts.dispose(mixchart);
      this.mix_chart = this.$echarts.init(mixchart, {
        backgroundColor: "#363636",
      });
      this.mix_chart.setOption(this.mix_options);
      this.mix_chart.on("updateAxisPointer", (event) => {
        console.log("update event ....");
        const xAxisInfo = event.axesInfo[0];

        if (xAxisInfo) {
          const dimension = xAxisInfo.value + 1;

          this.mix_chart.setOption({
            series: {
              id: "pie",
              label: {
                formatter: "{b}: {@[" + dimension + "]} ({d}%)",
              },
              encode: {
                value: dimension,
                tooltip: dimension,
              },
            },
          });
        }
      });
    },
    onResize() {
      if (this.mix_chart) {
        this.mix_chart.resize();
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
    <q-card class="bg-transparent no-shadow no-border q-mt-lg">
      <q-card-section class="q-pa-none">
        <div class="row q-col-gutter-sm">
          <div class="col-lg-12 col-sm-12 col-xs-12 col-md-12">
            <div>
              <div ref="mixchart" id="mixchart" style="height: 550px"></div>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
    <q-resize-observer @resize="onResize" />
  </div>
</template>
<style lang="scss" scoped>
</style>