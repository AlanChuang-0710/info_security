<script>
export default {
  name: "",
  data() {
    return {
      mix_options: {
        legend: {
          show: false,
        },
        tooltip: {
          trigger: "axis",
          showContent: false,
        },
        dataset: {
          source: [
            ["product", "5/20", "5/21", "5/22", "5/23", "5/24", "5/25"],
            ["Critical", 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
            ["High", 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
            ["Medium", 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
            ["Low", 25.2, 37.1, 41.2, 18, 33.9, 49.1],
            ["Unknown", 40, 37.1, 41.2, 18, 33.9, 29],
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
            radius: "30%",
            center: ["50%", "25%"],
            emphasis: {
              focus: "self",
            },
            label: {
              // formatter: "{b}: {@2012} ({d}%)",
            },
            encode: {
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
              // label: {
              //   formatter: "{b}: {@[" + dimension + "]} ({d}%)",
              // },
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
              <div ref="mixchart" id="mixchart" style="height: 400px"></div>
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