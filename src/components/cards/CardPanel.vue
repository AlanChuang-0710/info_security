<script>
import LineChart from "@/components/charts/LineChart.vue";
export default {
  name: "CardPanel",
  components: {
    LineChart,
  },
  props: {
    icon_position: {
      required: false,
      default: "left",
    },
  },
  data() {
    return {
      panels: [
        {
          title: "Portfolio Vulnerabilities",
          value: "200",
          color1: "#5064b5",
        },
        {
          title: "Projects at Risk",
          value: "500",
          color1: "#f37169",
        },
        {
          title: "Vulnerable Components",
          value: "50",
          color1: "#ea6a7f",
        },
        {
          title: "Inherited Risk Score",
          value: "1020",
          color1: "#a270b1",
        },
      ],
      // line chart
      line_chart: null,
      line_options: {
        color: "#c7c7cb",
        xAxis: {
          type: "category",
          show: false,
          data: ["Mar 07", "Mar 14", "Mar 21", "Mar 28"],
          axisLine: {
            lineStyle: {
              color: "#c7c7cb",
            },
          },
        },
        yAxis: {
          type: "value",
          show: false,
          axisLine: {
            lineStyle: {
              color: "#c7c7cb",
            },
          },
        },
        tooltip: {
          show: true,
          trigger: "axis",
          axisPointer: {
            type: "none",
          },
        },
        series: [
          {
            data: [150, 230, 224, 218],
            type: "line",
            smooth: false,
            center: ["50%", "50%"],
          },
        ],
      },
    };
  },
  computed: {},
};
</script>
<template>
  <div>
    <q-card class="bg-transparent no-shadow no-border">
      <q-card-section class="q-pa-none">
        <div class="row q-col-gutter-sm">
          <div
            v-for="(item, index) in panels"
            :key="index"
            class="col-md-3 col-sm-12 col-xs-12"
          >
            <q-item
              :style="`background-color: ${item.color1}`"
              class="q-pa-none"
            >
              <q-item-section class="q-pa-md q-ml-none text-white">
                <q-item-label class="text-white text-h6 text-weight-bolder">{{
                  item.value
                }}</q-item-label>
                <q-item-label>{{ item.title }}</q-item-label>
                <line-chart
                  name="line"
                  :chart="line_chart"
                  :option="line_options"
                ></line-chart>
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