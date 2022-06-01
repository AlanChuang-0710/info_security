<script>
import ListItem from "@/components/lists/ListItem.vue";

import PieChart from "@/components/charts/PieChart.vue";
import LineChart from "@/components/charts/LineChart.vue";
import LineChangeChart from "@/components/charts/LineChangeChart.vue";
import MapChart from "@/components/charts/MapChart.vue";
import MapChart2 from "@/components/charts/MapChart.vue";
import GaugeRingChart from "@/components/charts/GaugeRingChart.vue";
export default {
  name: "",
  components: {
    ListItem,
    PieChart,
    LineChart,
    LineChangeChart,
    MapChart,
    MapChart2,
    GaugeRingChart
  },
  data() {
    return {
      line_options: {
        color: "#c7c7cb",
        xAxis: {
          type: "category",
          data: ["Mar 07", "Mar 14", "Mar 21", "Mar 28"],
          axisLine: {
            lineStyle: {
              color: "#c7c7cb",
            },
          },
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#c7c7cb",
            },
          },
        },
        series: [
          {
            data: [150, 230, 224, 218],
            type: "line",
            smooth: true
          },
        ],
      },
      line_options2: {
        color: "#c7c7cb",
        xAxis: {
          type: "category",
          data: ["Mar 07", "Mar 14", "Mar 21", "Mar 28"],
          axisLine: {
            lineStyle: {
              color: "#c7c7cb",
            },
          },
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#c7c7cb",
            },
          },
        },
        series: [
          {
            data: [50, 135, 88, 140],
            type: "line",
            smooth: true
          },
        ],
      },
      line_chart: null,
      line_chart2: null,
    };
  },
};
</script>
<template>
  <div style="background-color: #363636">
    <q-page class="text-white q-pa-sm">
      <q-list>
        <q-item>
          <q-item-section avatar>
            <q-icon color="grey" name="fas fa-chart-line" size="44px" />
          </q-item-section>
          <q-item-section>
            <div class="text-h6 text-white">Security Profile</div>
          </q-item-section>
        </q-item>
      </q-list>
      <q-card
        class="q-mb-md"
        style="background-color: #363636; box-shadow: none"
      >
        <q-card-section class="row q-col-gutter-sm">
          <div class="col-md-8 col-xs-12 q-pl-none">
            <div class="intro">BREAKDOWN</div>
            <div class="row">
              <div class="col-md-6 col-12">
                <div class="text-caption text-weight-medium">
                  Cyber Posture Rating
                </div>
                <!-- <pie-chart></pie-chart> -->
                <gauge-ring-chart></gauge-ring-chart>
                <div
                  class="
                    flex
                    justify-between
                    items-center
                    rounded-borders
                    q-pa-sm q-mb-md
                  "
                  style="border: 1px solid #a19999"
                >
                  <q-btn
                    round
                    color="deep-orange"
                    icon="edit_location"
                    size="6px"
                    class="cursor-inherit"
                  />
                  1 critical test was discovered
                  <div class="text-weight-bold cursor-pointer">View</div>
                </div>
                <aside class="flex justify-center items-center">
                  <div class="flex items-center q-px-sm">
                    <div class="circle" style="background-color: #5470c6"></div>
                    <div>0 - 55</div>
                  </div>
                  <div class="flex items-center q-px-sm">
                    <div class="circle" style="background-color: #91cc75"></div>
                    <div>56 - 79</div>
                  </div>
                  <div class="flex items-center q-px-sm">
                    <div class="circle" style="background-color: #fac858"></div>
                    <div>80 - 100</div>
                  </div>
                </aside>
              </div>
              <!-- <q-separator
                color="black"
                size="1px"
                vertical
                style="height: 100%"
              /> -->
              <div class="col-md-6 col-12" style="border-left: 0px solid red">
                <div class="q-pa-sm">
                  <div class="text-caption text-weight-medium">
                    Industry Rating
                  </div>
                  <lineChange-chart></lineChange-chart>
                </div>
                <div style="border-top: 0px solid red" class="q-pa-sm">
                  <div class="flex justify-between q-pa-sm">
                    <div class="text-caption text-weight-medium">
                      Rating History
                    </div>
                    <q-badge color="blue"> UPGRADE</q-badge>
                  </div>
                  <line-chart
                    name="line2"
                    :chart="line_chart2"
                    :option="line_options2"
                  ></line-chart>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-xs-12">
            <div
              style="background-color: rgb(77, 77, 77)"
              class="
                column
                justify-center
                items-center
                text-center
                q-gutter-y-sm q-pa-sm q-mb-md
              "
            >
              <div class="text-deep-orange">NEW FEATURE</div>
              <div>Build Trust Early<br />in the sales process</div>
              <small
                >Share your cyber profile with vendors in a few clicks!</small
              >
              <q-btn rounded color="deep-orange" label="Build now"></q-btn>
            </div>
            <div style="background-color: rgb(77, 77, 77)">
              <div class="text-caption text-weight-medium">
                <span>ASSETS</span> 30 Assets were discovered
                <span style="text-decoration: underline" class="cursor-pointer">(view)</span>
                <map-chart></map-chart>
                <!-- <map-chart2></map-chart2> -->
              </div>
            </div>
          </div>
        </q-card-section>
        <q-card-section class="row q-col-gutter-sm">
          <div class="col-md-4 col-12 q-pa-sm">
            <div class="flex justify-between q-pb-sm">
              <div class="text-caption text-weight-medium">DARK MENTIONS</div>
              <q-badge color="blue"> UPGRADE</q-badge>
            </div>
            <line-chart
              name="line"
              :chart="line_chart"
              :option="line_options"
            ></line-chart>
          </div>
          <div
            class="col-md-4 col-12 q-pa-sm"
            style="background-color: transparent"
          >
            <div class="flex justify-between">
              <div class="text-caption text-weight-medium">DATA STRUCTURE</div>
              <q-badge color="blue"> UPGRADE</q-badge>
            </div>
            <q-list bordered separator class="q-my-md">
              <q-item class="q-py-none" style="border: 1px solid #a19999">
                <q-item-section>APT40 hacking group linked to </q-item-section>
              </q-item>
              <q-item class="q-py-none" style="border: 1px solid #a19999">
                <q-item-section>Healthcare entities linked to</q-item-section>
              </q-item>
              <q-item class="q-py-none" style="border: 1px solid #a19999">
                <q-item-section>APT40 hacking group linked to </q-item-section>
              </q-item>
              <q-item class="q-py-none" style="border: 1px solid #a19999">
                <q-item-section>Healthcare entities linked to</q-item-section>
              </q-item>
              <q-item class="q-py-none" style="border: 1px solid #a19999">
                <q-item-section>APT40 hacking group linked to </q-item-section>
              </q-item>
            </q-list>
            <div class="flex justify-end cursor-pointer">VIEW ALL</div>
          </div>
        </q-card-section>
      </q-card>
      <q-card style="background-color: #363636; box-shadow: none">
        <q-list>
          <q-item>
            <q-item-section>
              <div class="intro">POSTURE BY CATEGORIES</div>
            </q-item-section>
          </q-item>
        </q-list>
        <list-item></list-item>
      </q-card>
    </q-page>
  </div>
</template>
<style lang="scss" scoped>
.circle {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 0 10px 0 0;
  transform: translateY(15%);
}
</style>