<script>
import LineStackChart from "@/components/charts/LineStackChart.vue";
import EventBus from "../../shared/eventbus";
import common from "../../shared/common";
import axios from "axios";

export default {
  name: "CardPanel",
  components: {
    LineStackChart,
  },
  props: {
    icon_position: {
      required: false,
      default: "left",
    },
  },
  data() {
    return {
      portfolioVulnerabilities: 0,
      vulnerableProjects: 0,
      vulnerableComponents: 0,
      inheritedRiskScore: 0,

      // lline stack chart 1
      line_stack_chart_1: null,
      line_stack_options_1: {
        color: "#21A8D9",
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: null,
        },
        yAxis: {
          show: false,
          type: "value",
        },
        grid: {
          show: false,
        },
        series: [
          {
            name: "Vulnerabilities",
            type: "line",
            data: null,
          },
        ],
      },
      line_stack_height_1: "80px",

      // lline stack chart 2
      line_stack_chart_2: null,
      line_stack_options_2: {
        color: "#A66BF8",
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: null,
        },
        yAxis: {
          show: false,
          type: "value",
        },
        grid: {
          show: false,
        },
        series: [
          {
            name: "Projects",
            type: "line",
            data: null,
          },
        ],
      },
      line_stack_height_2: "80px",

      // lline stack chart 3
      line_stack_chart_3: null,
      line_stack_options_3: {
        color: "#6D6BF8",
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: null,
        },
        yAxis: {
          show: false,
          type: "value",
        },
        grid: {
          show: false,
        },
        series: [
          {
            name: "Components",
            type: "line",
            data: null,
          },
        ],
      },
      line_stack_height_3: "80px",

      // lline stack chart 4
      line_stack_chart_4: null,
      line_stack_options_4: {
        color: "#F86D6B",
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: null,
        },
        yAxis: {
          show: false,
          type: "value",
        },
        grid: {
          show: false,
        },
        series: [
          {
            name: "Risk Score",
            type: "line",
            data: null,
          },
        ],
      },
      line_stack_height_4: "80px",
    };
  },
  methods: {
    getChartData() {
      const daysBack = 90;
      let url = `${this.$api.BASE_URL}/${this.$api.URL_METRICS}/portfolio/${daysBack}/days`;
      console.log("getChartData url =>", url);

      axios
        .get(url, {
          headers: {
            "X-api-key": `${this.$api.api_key}`,
          },
        })
        .then((res) => {
          console.log("getChartData res =>", res);
          if (res.status === 200) {
            this.portfolioVulnerabilities =
              res.data[res.data.length - 1].vulnerabilities;
            this.vulnerableProjects =
              res.data[res.data.length - 1].vulnerableProjects;
            this.vulnerableComponents =
              res.data[res.data.length - 1].vulnerableComponents;
            this.inheritedRiskScore =
              res.data[res.data.length - 1].inheritedRiskScore;

            let chartLabels = [];
            let chartData = [];
            let AtRiskData = [];
            let ComponentData = [];
            let RiskScoreData = [];

            for (let i = 0; i < res.data.length; i++) {
              chartLabels.push(
                common.formatTimestamp(res.data[i].firstOccurrence)
              );
              chartData.push(res.data[i].vulnerabilities);
              AtRiskData.push(res.data[i].vulnerableProjects);
              ComponentData.push(res.data[i].vulnerableComponents);
              RiskScoreData.push(res.data[i].inheritedRiskScore);
            }
            // console.log(chartLabels, chartData, AtRiskData, ComponentData, RiskScoreData);

            this.line_stack_options_1.xAxis.data = chartLabels;
            this.line_stack_options_1.series[0].data = chartData;

            this.line_stack_options_2.xAxis.data = chartLabels;
            this.line_stack_options_2.series[0].data = AtRiskData;

            this.line_stack_options_3.xAxis.data = chartLabels;
            this.line_stack_options_3.series[0].data = ComponentData;

            this.line_stack_options_4.xAxis.data = chartLabels;
            this.line_stack_options_4.series[0].data = RiskScoreData;

            EventBus.$emit("callLineStackChartData", null);
          }
        })
        .catch((err) => {
          console.log(err);
          this.$q.notify({
            message: err,
            position: "top-right",
            type: "negative",
            color: "negative",
          });
        });
    },
  },
  mounted() {
    this.getChartData();
  },
};
</script>
<template>
  <div>
    <q-card class="bg-transparent no-shadow no-border">
      <q-card-section class="q-pa-none">
        <div class="row q-col-gutter-sm">
          <div class="col-md-3 col-sm-12 col-xs-12">
            <q-item class="q-pa-none" style="background-color: black">
              <q-item-section class="q-pa-md q-ml-none text-white">
                <q-item-label class="text-white text-h6 text-weight-bolder"
                  >{{ portfolioVulnerabilities }}</q-item-label
                >
                <q-item-label>Portfolio Vulnerabilities</q-item-label>
                <line-stack-chart
                  name="lineStack1"
                  :chart="line_stack_chart_1"
                  :option="line_stack_options_1"
                  :height="line_stack_height_1"
                >
                </line-stack-chart>
              </q-item-section>
            </q-item>
          </div>
          <div class="col-md-3 col-sm-12 col-xs-12">
            <q-item class="q-pa-none" style="background-color: black">
              <q-item-section class="q-pa-md q-ml-none text-white">
                <q-item-label class="text-white text-h6 text-weight-bolder"
                  >{{ vulnerableProjects }}</q-item-label
                >
                <q-item-label>Projects at Risk</q-item-label>
                <line-stack-chart
                  name="lineStack2"
                  :chart="line_stack_chart_2"
                  :option="line_stack_options_2"
                  :height="line_stack_height_2"
                >
                </line-stack-chart>
              </q-item-section>
            </q-item>
          </div>
          <div class="col-md-3 col-sm-12 col-xs-12">
            <q-item class="q-pa-none" style="background-color: black">
              <q-item-section class="q-pa-md q-ml-none text-white">
                <q-item-label class="text-white text-h6 text-weight-bolder"
                  >{{ vulnerableComponents }}</q-item-label
                >
                <q-item-label>Vulnerable Components</q-item-label>
                <line-stack-chart
                  name="lineStack3"
                  :chart="line_stack_chart_3"
                  :option="line_stack_options_3"
                  :height="line_stack_height_3"
                >
                </line-stack-chart>
              </q-item-section>
            </q-item>
          </div>
          <div class="col-md-3 col-sm-12 col-xs-12">
            <q-item class="q-pa-none" style="background-color: black">
              <q-item-section class="q-pa-md q-ml-none text-white">
                <q-item-label class="text-white text-h6 text-weight-bolder"
                  >{{ inheritedRiskScore }}</q-item-label
                >
                <q-item-label>Inherited Risk Score</q-item-label>
                <line-stack-chart
                  name="lineStack4"
                  :chart="line_stack_chart_4"
                  :option="line_stack_options_4"
                  :height="line_stack_height_4"
                >
                </line-stack-chart>
              </q-item-section>
            </q-item>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<style lang="scss" scoped>
</style>