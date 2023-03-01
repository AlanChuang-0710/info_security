<script>
import EventBus from "../../shared/eventbus";
export default {
  name: "",
  props: ["name", "chart", "option", "height"],
  data() {
    return {
      nameTemp: this.name,
      chartTemp: this.chart,
      optionTemp: this.option,
      heightTemp: this.height,
    };
  },
  methods: {
    init() {
      let lineStackchart = this.$refs[this.nameTemp];
      this.$echarts.dispose(lineStackchart);
      this.chartTemp = this.$echarts.init(lineStackchart, "dark");
      this.chartTemp.setOption(this.optionTemp);
    },
    onResize() {
      if (this.chartTemp) {
        this.chartTemp.resize();
      }
    },
  },
  mounted() {
    // this.init();
    EventBus.$on("callLineStackChartData", () => {
      this.init();
    });
  },
  beforeDestroy() {
    //移除EventBus重複監聽
    EventBus.$off("callLineStackChartData");
  },
};
</script>
<template>
  <div>
    <div>
      <div :ref="name" :style="`height: ${heightTemp}`"></div>
    </div>
    <q-resize-observer @resize="onResize" />
  </div>
</template>
<style lang="scss" scoped>
</style>