<script>
import CardMsg from "@/components/cards/CardMsg.vue";
import CardList from "@/components/cards/CardList.vue";
import MixChart from "@/components/charts/MixChart.vue";
export default {
  name: "Dashboard4",
  components: {
    CardMsg,
    CardList,
    MixChart
  },
  data() {
    return {

    };
  },
};
</script>
<template>
  <div style="background-color: #363636;">
    <q-page class="q-pa-sm">
      <card-msg></card-msg>
      <card-list></card-list>
      <mix-chart></mix-chart>
    </q-page>
  </div>
</template>
<style lang="scss" scoped>
</style>