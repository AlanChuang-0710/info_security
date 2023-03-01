<script>
import ListItem from "@/components/lists/ListItem.vue";

import PieChart from "@/components/charts/PieChart.vue";
import LineChart from "@/components/charts/LineChart.vue";
import LineChangeChart from "@/components/charts/LineChangeChart.vue";
import MapChart from "@/components/charts/MapChart.vue";
import MapChartView from "@/components/charts/MapChartView.vue";
import GaugeRingChart from "@/components/charts/GaugeRingChart.vue";
import HighMapChart from "@/components/charts/HighMapChart.vue";
import LineGradient from "@/components/charts/LineGradient.vue";
export default {
  name: "",
  components: {
    ListItem,
    PieChart,
    LineChart,
    LineChangeChart,
    MapChart,
    MapChartView,
    GaugeRingChart,
    HighMapChart,
    LineGradient,
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
            smooth: true,
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
            smooth: true,
          },
        ],
      },
      line_chart: null,
      line_chart2: null,
      health: [
        {
          title: "健康",
          content: "沒有特別資安事件",
        },
        {
          title: "警告",
          content: "沒有觸發嚴重的資安事件",
        },
      ],
      secure: [
        {
          title: "健康",
          content: "沒有要處理的案件單",
        },
        {
          title: "警告",
          content: "尚有未處理的案件單",
        },
        {
          title: "危險",
          content: "未處理的案件單過期",
        },
      ],
      watch: [
        {
          title: "健康",
          content: "占用主機資源 70%以內",
        },
        {
          title: "警告",
          content: "占用主機資源 70% ~ 90%",
        },
        {
          title: "危險",
          content: "占用主機資源已超過 90%",
        },
      ],
    };
  },
};
</script>
<template>
  <div style="background-color: #2c2c2c">
    <q-page class="text-white q-pa-sm">
      <q-list>
        <q-item>
          <q-item-section avatar>
            <q-icon color="grey" name="fas fa-chart-line" size="44px" />
          </q-item-section>
          <q-item-section>
            <div class="text-h6 text-white">資安合規儀表板</div>
          </q-item-section>
        </q-item>
      </q-list>
      <q-card
        class="q-mb-md"
        style="background-color: #2c2c2c; box-shadow: none"
      >
        <q-card-section class="row q-col-gutter-sm">
          <div class="col-md-8 col-xs-12 q-pl-none">
            <div class="row">
              <div class="col-md-6 col-12">
                <div class="text-weight-bold q-mb-lg" style="font-size: 18px;">
                  場域健康狀態摘要
                </div>
                <!-- <pie-chart></pie-chart> -->
                <!-- <gauge-ring-chart></gauge-ring-chart>
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
                </aside> -->
                <main
                  class="flex column justify-center items-center q-gutter-y-md q-mb-lg q-py-sm"
                  style="border: 1px solid #eee; border-radius: 10px;"
                >
                  <div class="text-h6 q-ma-none">場域健康狀態</div>
                  <div>
                    <q-btn
                      class="cursor-inherit"
                      outline
                      round
                      color="secondary"
                      icon="done"
                    />
                  </div>
                  <div class="text-h6 text-secondary">健康</div>
                  <ul>
                    <li
                      v-for="(item, idx) in health" :key="idx"
                      :class="item.title === '健康' ? 'text-secondary' : ''"
                    >
                      {{ item.title }}: {{ item.content }}
                    </li>
                  </ul>
                </main>
                <main
                  class="flex column justify-center items-center q-gutter-y-md q-mb-lg q-py-sm"
                  style="border: 1px solid #eee; border-radius: 10px;"
                >
                  <div class="text-h6 q-ma-none">場域資安處理狀態</div>
                  <div>
                    <q-btn
                      class="cursor-inherit"
                      outline
                      round
                      color="secondary"
                      icon="done"
                    />
                  </div>
                  <div class="text-h6 text-secondary">健康</div>
                  <ul>
                    <li
                      v-for="(item, idx) in secure" :key="idx"
                      :class="item.title === '健康' ? 'text-secondary' : ''"
                    >
                      {{ item.title }}: {{ item.content }}
                    </li>
                  </ul>
                </main>
                <main
                  class="flex column justify-center items-center q-gutter-y-md q-mb-lg q-py-sm"
                  style="border: 1px solid #eee; border-radius: 10px;"
                >
                  <div class="text-h6 q-ma-none">主機監控</div>
                  <div>
                    <q-btn
                      class="cursor-inherit"
                      outline
                      round
                      color="secondary"
                      icon="done"
                    />
                  </div>
                  <div class="text-h6 text-secondary">健康</div>
                  <ul>
                    <li
                      v-for="(item, idx) in watch" :key="idx"
                    >
                      {{ item.title }}: {{ item.content }}
                    </li>
                  </ul>
                </main>
              </div>
              <!-- <q-separator
                color="black"
                size="1px"
                vertical
                style="height: 100%"
              /> -->
              <div class="col-md-6 col-12" style="border-left: 0px solid red">
                <div class="q-pa-sm">
                  <div class="text-weight-bold" style="font-size: 18px; margin-bottom: 2px">
                    4大告警類型一週趨勢圖
                  </div>
                  <lineChange-chart></lineChange-chart>
                </div>
                <div style="border-top: 0px solid red" class="q-pa-sm">
                  <div class="flex justify-between q-pa-sm">
                    <div class="text-weight-bold" style="font-size: 18px; margin-bottom: 2px">
                      IPPX 阻擋趨勢圖
                    </div>
                  </div>
                  <!-- <line-chart
                    name="line2"
                    :chart="line_chart2"
                    :option="line_options2"
                  ></line-chart> -->
                  <line-gradient></line-gradient>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-xs-12">
            <!-- <div
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
            </div> -->
            <div style="">
              <div class="text-weight-bold q-mb-md q-pt-sm" style="font-size: 18px;">
                <span>資安攻擊分佈圖</span>
                <!-- <img
                  src="../assets/map.jpg"
                  style="width: 100%"
                  class="q-mt-sm"
                /> -->
                <!-- <map-chart></map-chart> -->
                <!-- <map-chart-view></map-chart-view> -->
                <high-map-chart></high-map-chart>
              </div>
            </div>
          </div>
        </q-card-section>
        <!-- <q-card-section class="row q-col-gutter-sm">
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
          <div class="col-md-4 col-12 q-pa-sm">
            <div class="flex justify-between">
              <div class="text-caption text-weight-medium">DATA STRUCTURE</div>
              <q-badge color="blue"> UPGRADE</q-badge>
            </div>
            <q-list
              bordered
              separator
              class="q-my-md"
              style="background-color: #363636"
            >
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
        </q-card-section> -->
      </q-card>
      <q-card style="background-color: #363636; box-shadow: none">
        <q-list>
          <q-item>
            <q-item-section>
              <div class="intro text-weight-bold">資安合規狀態總覽</div>
            </q-item-section>
          </q-item>
        </q-list>
        <list-item></list-item>
      </q-card>
      <!-- <map-chart-view></map-chart-view> -->
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
ul {
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
}
</style>
