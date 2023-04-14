<script>
import LineStackChart from "@/components/charts/LineStackChart.vue";
import PieChartVal from "@/components/charts/PieChartVal.vue";
import TableComponent from "@/components/tables/TableComponent.vue";
import axios from "axios";
import EventBus from "../../../shared/eventbus";
import common from "../../../shared/common";

export default {
  name: "ProjectInfo",
  components: {
    LineStackChart,
    PieChartVal,
    TableComponent,
  },
  props: {
    uuid: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      project: {},
      currentCritical: 0,
      currentHigh: 0,
      currentMedium: 0,
      currentLow: 0,
      currentUnassigned: 0,
      currentRiskScore: 0,

      // tab
      tabPjInfo: "overview",
      tabComponentsWCount: 0,
      // linear progress
      pr_securityRisk: 0.5,
      pr_licenseRisk: 0.1,
      pr_operationalRisk: 0.8,

      // line stack chart 1
      line_stack_chart_1: null,
      line_stack_options_1: {
        color: ["#f86c6b", "#fd8c00", "#ffc107", "#4dbd74", "#777777"],
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
            name: "critical",
            type: "line",
            // stack: "Total",
            data: null,
          },
          {
            name: "high",
            type: "line",
            // stack: "Total",
            data: null,
          },
          {
            name: "medium",
            type: "line",
            // stack: "Total",
            data: null,
          },
          {
            name: "low",
            type: "line",
            // stack: "Total",
            data: null,
          },
          {
            name: "unassigned",
            type: "line",
            // stack: "Total",
            data: null,
          },
        ],
      },
      line_stack_height_1: "300px",

      // line stack chart 2
      line_stack_chart_2: null,
      line_stack_options_2: {
        color: ["#f86c6b", "#ffc107", "#20a8d8"],
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
            name: "Violation Failures",
            type: "line",
            data: null,
          },
          {
            name: "Violation Warnings",
            type: "line",
            data: null,
          },
          {
            name: "Informational Violation",
            type: "line",
            data: null,
          },
        ],
      },
      line_stack_height_2: "300px",

      // line stack chart 3
      line_stack_chart_3: null,
      line_stack_options_3: {
        color: ["#777777", "#20a8d8"],
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
            name: "Total",
            type: "line",
            data: null,
          },
          {
            name: "Vulnerable",
            type: "line",
            data: null,
          },
        ],
      },
      line_stack_height_3: "300px",

      // line stack chart 4
      line_stack_chart_4: null,
      line_stack_options_4: {
        color: ["#777777", "#4dbd74"],
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
            name: "Total Findings",
            type: "line",
            data: null,
          },
          {
            name: "Findings Audited",
            type: "line",
            data: null,
          },
        ],
      },
      line_stack_height_4: "300px",

      // pie chart 1
      pie_chart_1: null,
      pie_options_1: {
        color: "#f86c6b",
        tooltip: {
          show: false,
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["40%", "50%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              scale: true,
              scaleSize: 1,
              label: {
                show: true,
                color: "#fff",
                fontSize: "12",
                padding: 10,
              },
            },
            labelLine: {
              show: false,
            },
            data: [{ value: null, name: null }],
          },
        ],
      },
      pie_height_1: "80px",

      // pie chart 2
      pie_chart_2: null,
      pie_options_2: {
        color: "#fd8c00",
        tooltip: {
          show: false,
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["40%", "50%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              scale: true,
              scaleSize: 1,
              label: {
                show: true,
                color: "#fff",
                fontSize: "12",
                padding: 10,
              },
            },
            labelLine: {
              show: false,
            },
            data: [{ value: null, name: null }],
          },
        ],
      },
      pie_height_2: "80px",

      // pie chart 3
      pie_chart_3: null,
      pie_options_3: {
        color: "#ffc107",
        tooltip: {
          show: false,
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["40%", "50%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              scale: true,
              scaleSize: 1,
              label: {
                show: true,
                color: "#fff",
                fontSize: "12",
                padding: 10,
              },
            },
            labelLine: {
              show: false,
            },
            data: [{ value: null, name: null }],
          },
        ],
      },
      pie_height_3: "80px",

      // pie chart 4
      pie_chart_4: null,
      pie_options_4: {
        color: "#4dbd74",
        tooltip: {
          show: false,
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["40%", "50%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              scale: true,
              scaleSize: 1,
              label: {
                show: true,
                color: "#fff",
                fontSize: "12",
                padding: 10,
              },
            },
            labelLine: {
              show: false,
            },
            data: [{ value: null, name: null }],
          },
        ],
      },
      pie_height_4: "80px",

      // pie chart 5
      pie_chart_5: null,
      pie_options_5: {
        color: "#777777",
        tooltip: {
          show: false,
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["40%", "50%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              scale: true,
              scaleSize: 1,
              label: {
                show: true,
                color: "#fff",
                fontSize: "12",
                padding: 10,
              },
            },
            labelLine: {
              show: false,
            },
            data: [{ value: null, name: null }],
          },
        ],
      },
      pie_height_5: "80px",
    };
  },
  methods: {
    extractStats(metrics) {
      if (!metrics || metrics.length === 0) {
        return;
      }
      let metric = metrics[metrics.length - 1]; //Use the most recent metric
      this.currentCritical = metric.critical ? metric.critical : 0;
      this.currentHigh = metric.high ? metric.high : 0;
      this.currentMedium = metric.medium ? metric.medium : 0;
      this.currentLow = metric.low ? metric.low : 0;
      this.currentUnassigned = metric.unassigned ? metric.unassigned : 0;
      this.currentRiskScore = metric.inheritedRiskScore ? metric.inheritedRiskScore : 0;
    },
    getData() {
      let PJ_uuid = this.uuid;

      let projectUrl = `${this.$api.BASE_URL}/${this.$api.URL_PROJECT}/${PJ_uuid}`;
      console.log("projectUrl", projectUrl);

      axios
        .get(projectUrl, {
          headers: {
            "X-api-key": `${this.$api.api_key}`,
          },
        })
        .then((res) => {
          console.log("project res =>", res);
          this.project = res.data;
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

      let metricsUrl = `${this.$api.BASE_URL}/${this.$api.URL_METRICS}/project/${PJ_uuid}/current`;
      console.log("metricsUrl =>", metricsUrl);
      axios
        .get(metricsUrl, {
          headers: {
            "X-api-key": `${this.$api.api_key}`,
          },
        })
        .then((res) => {
          console.log("metricsUrl res =>", res);
          if (res.status === 200) {
            this.pie_options_1.series[0].data[0].name = res.data.critical.toString();
            this.pie_options_1.series[0].data[0].value = res.data.critical;

            this.pie_options_2.series[0].data[0].name = res.data.high.toString();
            this.pie_options_2.series[0].data[0].value = res.data.high;

            this.pie_options_3.series[0].data[0].name = res.data.medium.toString();
            this.pie_options_3.series[0].data[0].value = res.data.medium;

            this.pie_options_4.series[0].data[0].name = res.data.low.toString();
            this.pie_options_4.series[0].data[0].value = res.data.low;

            this.pie_options_5.series[0].data[0].name = res.data.unassigned.toString();
            this.pie_options_5.series[0].data[0].value = res.data.unassigned;

            EventBus.$emit("callPieChartData", null);
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

      const daysBack = 90;
      let chartUrl = `${this.$api.BASE_URL}/${this.$api.URL_METRICS}/project/${PJ_uuid}/days/${daysBack}`;
      console.log("chartUrl =>", chartUrl);

      axios
        .get(chartUrl, {
          headers: {
            "X-api-key": `${this.$api.api_key}`,
          },
        })
        .then((res) => {
          console.log("chartUrl res =>", res);
          let labels = [];

          let criticalData = [];
          let highData = [];
          let mediumData = [];
          let lowData = [];
          let unassignedData = [];

          let failData = [];
          let warnData = [];
          let infoData = [];

          let totalData = [];
          let affectedData = [];

          let auditedData = [];

          if (res.status === 200) {
            for (let i = 0; i < res.data.length; i++) {
              labels.push(common.formatTimestamp(res.data[i].firstOccurrence));

              criticalData.push(res.data[i].critical);
              highData.push(res.data[i].high);
              mediumData.push(res.data[i].medium);
              lowData.push(res.data[i].low);
              unassignedData.push(res.data[i].unassigned);

              failData.push(res.data[i].policyViolationsFail);
              warnData.push(res.data[i].policyViolationsWarn);
              infoData.push(res.data[i].policyViolationsInfo);

              totalData.push(res.data[i].components);
              affectedData.push(res.data[i].vulnerableComponents);

              auditedData.push(res.data[i].findingsAudited);

              if (i === res.data.length - 1) {
                labels.push(common.formatTimestamp(res.data[i].lastOccurrence));
                criticalData.push(res.data[i].critical);
                highData.push(res.data[i].high);
                mediumData.push(res.data[i].medium);
                lowData.push(res.data[i].low);
                unassignedData.push(res.data[i].unassigned);

                failData.push(res.data[i].policyViolationsFail);
                warnData.push(res.data[i].policyViolationsWarn);
                infoData.push(res.data[i].policyViolationsInfo);

                totalData.push(res.data[i].components);
                affectedData.push(res.data[i].vulnerableComponents);

                auditedData.push(res.data[i].findingsAudited);
              }
            }
            // console.log(
            //   labels,
            //   criticalData,
            //   highData,
            //   mediumData,
            //   lowData,
            //   unassignedData,

            //   failData,
            //   warnData,
            //   infoData,

            //   totalData,
            //   affectedData,

            //   auditedData
            // );

            this.line_stack_options_1.xAxis.data = labels;
            this.line_stack_options_1.series[0].data = criticalData;
            this.line_stack_options_1.series[1].data = highData;
            this.line_stack_options_1.series[2].data = mediumData;
            this.line_stack_options_1.series[3].data = lowData;
            this.line_stack_options_1.series[4].data = unassignedData;

            this.line_stack_options_2.xAxis.data = labels;
            this.line_stack_options_2.series[0].data = failData;
            this.line_stack_options_2.series[1].data = warnData;
            this.line_stack_options_2.series[2].data = infoData;

            this.line_stack_options_3.xAxis.data = labels;
            this.line_stack_options_3.series[0].data = totalData;
            this.line_stack_options_3.series[1].data = affectedData;

            this.line_stack_options_4.xAxis.data = labels;
            this.line_stack_options_4.series[0].data = totalData;
            this.line_stack_options_4.series[1].data = auditedData;

            EventBus.$emit("callLineStackChartData", null);
          }
          this.extractStats(res.data);
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
    this.getData();
    EventBus.$on("passComponentCount", (count) => {
      console.log("count =====", count);
      this.tabComponentsWCount = count;
    });
  },
};
</script>
<template>
  <div style="background-color: rgb(54, 54, 54)">
    <div class="q-px-md q-pt-md q-mb-md text-white">
      <div class="row q-pa-md" style="background: black">
        <div class="col-6">
          <div class="flex items-center">
            <q-icon color="white" name="grid_view" class="q-mr-md" size="24px" />
            <div class="text-h6">{{ project.name }}</div>
          </div>
        </div>
        <div class="col-6">
          <div class="flex justify-end">
            <div style="width: 80px">
              <pie-chart-val
                name="pie1"
                :chart="pie_chart_1"
                :option="pie_options_1"
                :height="pie_height_1"
              ></pie-chart-val>
            </div>
            <div style="width: 80px">
              <pie-chart-val
                name="pie2"
                :chart="pie_chart_2"
                :option="pie_options_2"
                :height="pie_height_2"
              ></pie-chart-val>
            </div>
            <div style="width: 80px">
              <pie-chart-val
                name="pie3"
                :chart="pie_chart_3"
                :option="pie_options_3"
                :height="pie_height_3"
              ></pie-chart-val>
            </div>
            <div style="width: 80px">
              <pie-chart-val
                name="pie4"
                :chart="pie_chart_4"
                :option="pie_options_4"
                :height="pie_height_4"
              ></pie-chart-val>
            </div>
            <div style="width: 80px">
              <pie-chart-val
                name="pie5"
                :chart="pie_chart_5"
                :option="pie_options_5"
                :height="pie_height_5"
              ></pie-chart-val>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="q-px-md">
      <q-tabs
        v-model="tabPjInfo"
        dense
        class="text-grey"
        active-color="white"
        indicator-color="primary"
        align="left"
        narrow-indicator
      >
        <q-tab name="overview" label="Overview" />
        <q-tab name="components" :label="`Components: ${tabComponentsWCount}`" />
      </q-tabs>
      <q-tab-panels v-model="tabPjInfo" animated style="background-color: rgb(54, 54, 54)" keep-alive>
        <q-tab-panel name="overview" class="q-pa-none">
          <div style="background: black" class="q-mb-md">
            <div class="q-pa-md">
              <div style="color: #fff">Project Vulnerabilities</div>
              <small style="color: #fff">Last Measurement: 25 Oct 2022 at 10:28:49</small>
            </div>
            <line-stack-chart
              name="lineStack1"
              :chart="line_stack_chart_1"
              :option="line_stack_options_1"
              :height="line_stack_height_1"
            >
            </line-stack-chart>
          </div>
          <div class="row q-py-md q-px-sm q-mb-md bg-dark text-white">
            <div class="col-2">
              <main class="q-pa-md" :style="`border-left: 3px solid #f86c6b;`">
                <div>Critical</div>
                <div>{{ currentCritical }}</div>
              </main>
            </div>
            <div class="col-2">
              <main class="q-pa-md" :style="`border-left: 3px solid #fd8c00;`">
                <div>High</div>
                <div>{{ currentHigh }}</div>
              </main>
            </div>
            <div class="col-2">
              <main class="q-pa-md" :style="`border-left: 3px solid #ffc107;`">
                <div>Medium</div>
                <div>{{ currentMedium }}</div>
              </main>
            </div>
            <div class="col-2">
              <main class="q-pa-md" :style="`border-left: 3px solid #4dbd74;`">
                <div>Low</div>
                <div>{{ currentLow }}</div>
              </main>
            </div>
            <div class="col-2">
              <main class="q-pa-md" :style="`border-left: 3px solid #777777;`">
                <div>Unassigned</div>
                <div>{{ currentUnassigned }}</div>
              </main>
            </div>
            <div class="col-2">
              <main class="q-pa-md" :style="`border-left: 3px solid #20a8d8;`">
                <div>RiskScore</div>
                <div>{{ currentRiskScore }}</div>
              </main>
            </div>
          </div>
          <div class="row justify-center items-start">
            <div class="col-6 q-mb-md" style="background: black">
              <div class="q-pa-md">
                <div style="color: #fff">Policy Violations</div>
                <small style="color: #fff">Policy Violations by State</small>
                <line-stack-chart
                  name="lineStack2"
                  :chart="line_stack_chart_2"
                  :option="line_stack_options_2"
                  :height="line_stack_height_2"
                >
                </line-stack-chart>
              </div>
            </div>
            <div class="col-6 q-mb-md" style="background: black">
              <div class="q-pa-md">
                <div style="color: #fff">Policy Violations</div>
                <small style="color: #fff">Policy Violations by Classification</small>
                <!-- 控制高度對齊 -->
                <main style="color: #eee; height: 300px" class="q-pt-md">
                  <div class="q-pb-md">
                    <div>Security Risk</div>
                    <q-linear-progress rounded color="warning" size="8px" :value="pr_securityRisk" />
                  </div>
                  <div class="q-pb-md">
                    <div>License Risk</div>
                    <q-linear-progress rounded color="warning" size="8px" :value="pr_licenseRisk" />
                  </div>
                  <div class="q-pb-md">
                    <div>Operational Risk</div>
                    <q-linear-progress rounded color="warning" size="8px" :value="pr_operationalRisk" />
                  </div>
                </main>
              </div>
            </div>
            <div class="col-6" style="background: black">
              <div class="q-pa-md">
                <div style="color: #fff">Components</div>
              </div>
              <line-stack-chart
                name="lineStack3"
                :chart="line_stack_chart_3"
                :option="line_stack_options_3"
                :height="line_stack_height_3"
              >
              </line-stack-chart>
            </div>
            <div class="col-6" style="background: black">
              <div class="q-pa-md">
                <div style="color: #fff">Auditing Progress</div>
              </div>
              <line-stack-chart
                name="lineStack4"
                :chart="line_stack_chart_4"
                :option="line_stack_options_4"
                :height="line_stack_height_4"
              >
              </line-stack-chart>
            </div>
          </div>
        </q-tab-panel>
        <q-tab-panel name="components" style="background-color: rgb(54, 54, 54); height: 100vh" class="q-pa-none">
          <table-component :uuid="uuid" />
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
