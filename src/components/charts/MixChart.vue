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
            ["product", "2012", "2013", "2014", "2015", "2016", "2017"],
            ["Milk Tea", 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
            ["Matcha Latte", 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
            ["Cheese Cocoa", 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
            ["Walnut Brownie", 25.2, 37.1, 41.2, 18, 33.9, 49.1],
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
          //圓餅圖
          {
            type: "pie",
            id: "pie",
            radius: "30%",
            center: ["50%", "25%"],
            emphasis: {
              focus: "self",
            },
            // label: {
            //   formatter: "{b}: {@2012} ({d}%)",
            // },
            encode: {
              itemName: "product",
              value: "2012",
              tooltip: "2012",
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
    <q-card class="bg-transparent no-shadow no-border q-mt-sm">
      <q-card-section class="q-pa-none">
        <div class="row q-col-gutter-sm">
          <div class="col-lg-6 col-sm-12 col-xs-12 col-md-6">
            <div>
              <div ref="mixchart" id="mixchart" style="height: 250px"></div>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<style lang="scss" scoped>
</style>