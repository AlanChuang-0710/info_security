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
import CardSocial from "@/components/cards/CardSocial";
export default {
  name: "Dashboard3",
  components: {
    CardSocial,
  },
  data() {
    return {
      sales_options: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // Coordinate axis indicator, coordinate axis trigger is valid
            type: "shadow", // The default is a straight line, optional:'line' |'shadow'
          },
        },
        grid: {
          left: "2%",
          right: "2%",
          top: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
          },
        ],
        yAxis: [
          {
            type: "value",
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "Fashions",
            type: "bar",
            data: [40, 45, 27, 50, 32, 50, 70, 30, 30, 40, 67, 29],
            color: "#546bfa",
          },
          {
            name: "Electronics",
            type: "bar",
            data: [124, 100, 20, 120, 117, 70, 110, 90, 50, 90, 20, 50],
            color: "#3a9688",
          },
          {
            name: "Toys",
            type: "bar",
            data: [17, 2, 0, 29, 20, 10, 23, 0, 8, 20, 11, 30],
            color: "#02a9f4",
          },
          {
            name: "Vouchers",
            type: "bar",
            data: [20, 100, 80, 14, 90, 86, 100, 70, 120, 50, 30, 60],
            color: "#f88c2b",
          },
        ],
      },
      pie_options: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          bottom: 10,
          left: "center",
          data: ["Fashions", "Electronics", "Toys", "Vouchers"],
        },
        series: [
          {
            name: "Sales",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: false,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              {
                value: 335,
                name: "Fashions",
                itemStyle: {
                  color: "#546bfa",
                },
              },
              {
                value: 310,
                name: "Electronics",
                itemStyle: {
                  color: "#3a9688",
                },
              },
              {
                value: 234,
                name: "Toys",
                itemStyle: {
                  color: "#02a9f4",
                },
              },
              {
                value: 135,
                name: "Vouchers",
                itemStyle: {
                  color: "#f88c2b",
                },
              },
            ],
          },
        ],
      },
      area_options: {
        color: ["#red", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data: ["Line 1", "Line 2", "Line 3", "Line 4", "Line 5"],
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "Line 1",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(128, 255, 165)",
                },
                {
                  offset: 1,
                  color: "rgb(1, 191, 236)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [140, 232, 101, 264, 90, 340, 250],
          },
          {
            name: "Line 2",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(0, 221, 255)",
                },
                {
                  offset: 1,
                  color: "rgb(77, 119, 255)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [120, 282, 111, 234, 220, 340, 310],
          },
          {
            name: "Line 3",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(55, 162, 255)",
                },
                {
                  offset: 1,
                  color: "rgb(116, 21, 219)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [320, 132, 201, 334, 190, 130, 220],
          },
          {
            name: "Line 4",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(255, 0, 135)",
                },
                {
                  offset: 1,
                  color: "rgb(135, 0, 157)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [220, 402, 231, 134, 190, 230, 120],
          },
          {
            name: "Line 5",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            label: {
              show: true,
              position: "top",
            },
            areaStyle: {
              opacity: 0.8,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(255, 191, 0)",
                },
                {
                  offset: 1,
                  color: "rgb(224, 62, 76)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [220, 302, 181, 234, 210, 290, 150],
          },
        ],
      },
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
        xAxis: { type: "category" },
        yAxis: { gridIndex: 0 },
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
      line_bar_options: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        // toolbox: {
        //   feature: {
        //     dataView: { show: true, readOnly: false },
        //     magicType: { show: true, type: ["line", "bar"] },
        //     restore: { show: true },
        //     saveAsImage: { show: true },
        //   },
        // },
        legend: {
          data: ["Evaporation", "Precipitation", "Temperature"],
        },
        xAxis: [
          {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "Precipitation",
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: "{value} ml",
            },
          },
          {
            type: "value",
            name: "Temperature",
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: "{value} °C",
            },
          },
        ],
        series: [
          {
            name: "Evaporation",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " ml";
              },
            },
            data: [
              2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4,
              3.3,
            ],
          },
          {
            name: "Precipitation",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " ml";
              },
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0,
              2.3,
            ],
          },
          {
            name: "Temperature",
            type: "line",
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value + " °C";
              },
            },
            data: [
              2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2,
            ],
          },
        ],
      },
      radar_options: {
        legend: {
          data: ["Allocated Budget", "Actual Spending"],
          left: "left",
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: "Sales", max: 6500 },
            { name: "Administration", max: 16000 },
            { name: "Information Technology", max: 30000 },
            { name: "Customer Support", max: 38000 },
            { name: "Development", max: 52000 },
            { name: "Marketing", max: 25000 },
          ],
        },
        series: [
          {
            name: "Budget vs spending",
            type: "radar",
            data: [
              {
                value: [4200, 3000, 20000, 35000, 50000, 18000],
                name: "Allocated Budget",
              },
              {
                value: [5000, 14000, 28000, 26000, 42000, 21000],
                name: "Actual Spending",
              },
            ],
          },
        ],
      },
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
            center: ["50%", "80%"],
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
                name: "Grade Rating",
              },
            ],
          },
        ],
      },
      gaugeRing_options: {
        series: [
          {
            type: "gauge",
            startAngle: 90,
            endAngle: -270,
            radius: "100%",
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
      graphData: null,
      graphLabel_options: {},
      sales_chart: null,
      pie_chart: null,
      area_chart: null,
      mix_chart: null,
      line_bar_chart: null,
      radar_chart: null,
      gauge_chart: null,
      gaugeRing_chart: null,
      graphLabel_chart: null,
    };
  },
  methods: {
    init() {
      let salesChart = document.getElementById("saleschart");
      this.$echarts.dispose(salesChart);
      this.sales_chart = this.$echarts.init(salesChart, {
        backgroundColor: "#363636"
      });
      this.sales_chart.setOption(this.sales_options);

      let piechart = document.getElementById("piechart");
      this.$echarts.dispose(piechart);
      this.pie_chart = this.$echarts.init(piechart, {
        backgroundColor: "#363636"
      });
      this.pie_chart.setOption(this.pie_options);

      let areachart = document.getElementById("areachart");
      this.$echarts.dispose(areachart);
      this.area_chart = this.$echarts.init(areachart, {
        backgroundColor: "#363636"
      });
      this.area_chart.setOption(this.area_options);

      let mixchart = document.getElementById("mixchart");
      this.$echarts.dispose(mixchart);
      this.mix_chart = this.$echarts.init(mixchart, {
        backgroundColor: "#363636"
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

      let lineBarChart = document.getElementById("lineBarChart");
      this.$echarts.dispose(lineBarChart);
      this.line_bar_chart = this.$echarts.init(lineBarChart, {
        backgroundColor: "#363636"
      });
      this.line_bar_chart.setOption(this.line_bar_options);

      let radarchart = document.getElementById("radarchart");
      this.$echarts.dispose(radarchart);
      this.radar_chart = this.$echarts.init(radarchart, {
        backgroundColor: "#363636"
      });
      this.radar_chart.setOption(this.radar_options);

      let gaugechart = document.getElementById("gaugechart");
      this.$echarts.dispose(gaugechart);
      this.gauge_chart = this.$echarts.init(gaugechart, {
        backgroundColor: "#363636"
      });
      this.gauge_chart.setOption(this.gauge_options);

      let gaugeRingchart = document.getElementById("gaugeRingchart");
      this.$echarts.dispose(gaugeRingchart);
      this.gaugeRing_chart = this.$echarts.init(gaugeRingchart, {
        backgroundColor: "#363636"
      });
      this.gaugeRing_chart.setOption(this.gaugeRing_options);
      this.dancing(this.gaugeRing_chart);

      let graphLabelChart = document.getElementById("graphLabelChart");
      this.$echarts.dispose(graphLabelChart);
      this.graphLabel_chart = this.$echarts.init(graphLabelChart, {
        backgroundColor: "#363636"
      });
      this.getGraphLabelChart();
    },
    getGraphLabelChart() {
      this.graphLabel_chart.showLoading();
      import("@/json/graph.json").then((graph) => {
        this.graphLabel_chart.hideLoading();
        this.graphLabel_options = {
          legend: [
            {
              data: graph.categories.map((a) => {
                return a.name;
              }),
            },
          ],
          series: [
            {
              name: "Les Miserables",
              type: "graph",
              layout: "none",
              data: graph.nodes,
              links: graph.links,
              categories: graph.categories,
              roam: true,
              label: {
                show: true,
                position: "right",
                formatter: "{b}",
              },
              labelLayout: {
                hideOverlap: true,
              },
              scaleLimit: {
                min: 0.4,
                max: 2,
              },
              lineStyle: {
                color: "source",
                curveness: 0.3,
              },
            },
          ],
        };
        // console.log(this.graphLabel_options);
        this.graphLabel_chart.setOption(this.graphLabel_options);
      });
    },
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
    onResize() {
      if (this.sales_chart) {
        this.sales_chart.resize();
      }
      if (this.pie_chart) {
        this.pie_chart.resize();
      }
      if (this.area_chart) {
        this.area_chart.resize();
      }
      if (this.mix_chart) {
        this.mix_chart.resize();
      }
      if (this.line_bar_chart) {
        this.line_bar_chart.resize();
      }
      if (this.radar_chart) {
        this.radar_chart.resize();
      }
      if (this.gauge_chart) {
        this.gauge_chart.resize();
      }
      if (this.gaugeRing_chart) {
        this.gaugeRing_chart.resize();
      }
      if (this.graphLabel_chart) {
        this.graphLabel_chart.resize();
      }
    },
    changeTheme() {
      let salesChart = document.getElementById("saleschart");
      this.$echarts.dispose(salesChart);
      this.sales_chart = this.$echarts.init(salesChart, "dark");
      this.sales_chart.setOption(this.sales_options);
    },
  },
  mounted() {
    this.init();
  },
};
</script>
<template>
  <div style="background-color: #363636">
    <q-page class="q-pa-sm">
      <card-social icon_position="right" />

      <q-card class="q-mt-sm" style="background-color: #363636">
        <q-card-section class="text-h6 q-pb-none">
          <q-item>
            <q-item-section avatar class="">
              <q-icon color="blue" name="fas fa-chart-line" size="44px" />
            </q-item-section>

            <q-item-section>
              <div class="text-h6 text-white">Product Sales Stats</div>
            </q-item-section>
          </q-item>
        </q-card-section>
        <q-card-section class="row">
          <div class="col-lg-7 col-sm-12 col-xs-12 col-md-7">
            <div class="row">
              <div class="col-lg-3 col-md-3 col-xs-6 col-sm-6">
                <q-item>
                  <q-item-section top avatar>
                    <q-avatar
                      color="blue"
                      text-color="white"
                      icon="bluetooth"
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-h6 text-blue text-bold"
                      >4321</q-item-label
                    >
                    <q-item-label caption class="text-white"
                      >Fashions</q-item-label
                    >
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-lg-3 col-md-3 col-xs-6 col-sm-6">
                <q-item>
                  <q-item-section top avatar>
                    <q-avatar
                      color="grey-8"
                      text-color="white"
                      icon="bluetooth"
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-h6 text-grey-1 text-bold"
                      >9876</q-item-label
                    >
                    <q-item-label caption class="text-white"
                      >Electronics</q-item-label
                    >
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-lg-3 col-md-3 col-xs-6 col-sm-6">
                <q-item>
                  <q-item-section top avatar>
                    <q-avatar
                      color="green-6"
                      text-color="white"
                      icon="bluetooth"
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-h6 text-green-6 text-bold"
                      >345</q-item-label
                    >
                    <q-item-label caption class="text-white">Toys</q-item-label>
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-lg-3 col-md-3 col-xs-6 col-sm-6">
                <q-item>
                  <q-item-section top avatar>
                    <q-avatar
                      color="orange-8"
                      text-color="white"
                      icon="bluetooth"
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-h6 text-orange-8 text-bold"
                      >1021</q-item-label
                    >
                    <q-item-label caption class="text-white"
                      >Vouchers</q-item-label
                    >
                  </q-item-section>
                </q-item>
              </div>
            </div>
            <div>
              <div ref="saleschart" id="saleschart" style="height: 250px"></div>
              <!-- <div class="flex justify-center">
                <q-btn
                  color="dark"
                  flat
                  label="更改主題色"
                  @click="changeTheme"
                />
              </div> -->
            </div>
          </div>
          <div class="col-lg-5 col-sm-12 col-xs-12 col-md-5">
            <q-item>
              <q-item-section avatar class="">
                <q-icon
                  color="blue"
                  name="fas fa-gift"
                  class="q-pl-md"
                  size="24px"
                />
              </q-item-section>

              <q-item-section>
                <div class="text-h6 text-white q-mb-sm">TODAY SALES</div>
              </q-item-section>
            </q-item>
            <div>
              <div ref="piechart" id="piechart" style="height: 250px"></div>
            </div>
          </div>
        </q-card-section>
        <q-card-section class="row">
          <div class="col-lg-6 col-sm-12 col-xs-12 col-md-6">
            <div>
              <div ref="areachart" id="areachart" style="height: 250px"></div>
            </div>
          </div>
          <div class="col-lg-6 col-sm-12 col-xs-12 col-md-6">
            <div>
              <div ref="mixchart" id="mixchart" style="height: 250px"></div>
            </div>
          </div>
        </q-card-section>

        <q-card-section class="row">
          <div class="col-lg-12 col-sm-12 col-xs-12 col-md-12">
            <div>
              <div
                ref="lineBarChart"
                id="lineBarChart"
                style="height: 250px"
              ></div>
            </div>
          </div>
          <div class="col-lg-12 col-sm-12 col-xs-12 col-md-12">
            <div>
              <div ref="radarchart" id="radarchart" style="height: 250px"></div>
            </div>
          </div>
        </q-card-section>

        <q-card-section class="row">
          <div class="col-lg-6 col-sm-12 col-xs-12 col-md-6">
            <div>
              <div ref="gaugechart" id="gaugechart" style="height: 250px"></div>
            </div>
          </div>
          <div class="col-lg-6 col-sm-12 col-xs-12 col-md-6">
            <div>
              <div
                ref="gaugeRingchart"
                id="gaugeRingchart"
                style="height: 250px"
              ></div>
            </div>
          </div>
        </q-card-section>

        <q-card-section class="row">
          <div class="col-lg-12 col-sm-12 col-xs-12 col-md-12">
            <div>
              <div
                ref="graphLabelChart"
                id="graphLabelChart"
                style="height: 500px"
              ></div>
            </div>
          </div>
        </q-card-section>
      </q-card>
      <q-resize-observer @resize="onResize" />
    </q-page>
  </div>
</template>
<style lang="scss" scoped>
</style>