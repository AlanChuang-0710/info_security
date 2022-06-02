import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

import './quasar';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

//ECharts 全局
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts


//HightChart
import HighchartsVue from "highcharts-vue";
import Highcharts from "highcharts";
import mapInit from "highcharts/modules/map";
import mapData from "@highcharts/map-collection/custom/world.geo.json";

mapInit(Highcharts);
Highcharts.maps["myMapName"] = mapData;

Vue.use(HighchartsVue);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
