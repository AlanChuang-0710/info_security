<script>
export default {
  name: "",
  props: ['name', 'chart', 'option'],

  data() {
    return {
      nameTemp: this.name,
      chartTemp: this.chart,
      optionTemp: this.option
    };
  },
  methods: {
    init() {
      let gaugechart = this.$refs[this.nameTemp]
      this.$echarts.dispose(gaugechart);
      this.chartTemp = this.$echarts.init(gaugechart, {
        backgroundColor: "#363636",
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
  <div class="col-md-4 col-sm-12 col-xs-12">
    <q-card class="bg-transparent no-shadow no-border q-mt-sm">
      <q-card-section class="q-pa-none">
        <div>
          <div :ref="name" style="height: 300px"></div>
        </div>
      </q-card-section>
    </q-card>
    <q-resize-observer @resize="onResize" />
  </div>
</template>
<style lang="scss" scoped>
</style>