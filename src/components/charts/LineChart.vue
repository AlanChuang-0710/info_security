<script>
export default {
  name: "",
  props: ["name", "chart", "option"],
  data() {
    return {
      nameTemp: this.name,
      chartTemp: this.chart,
      optionTemp: this.option,
    };
  },
  methods: {
    init() {
      let linechart = this.$refs[this.nameTemp];
      this.$echarts.dispose(linechart);
      this.chartTemp = this.$echarts.init(linechart, {
        backgroundColor: "transparent",
      });
      this.chartTemp.setOption(this.optionTemp);
    },
    onResize() {
      if (this.chartTemp) {
        this.chartTemp.resize();
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
    <div>
      <div :ref="name" style="height: 100px"></div>
    </div>
    <q-resize-observer @resize="onResize" />
  </div>
</template>
<style lang="scss" scoped>
</style>