<script>
import CardSocial from "@/components/cards/CardSocial";
import CardCharts from "@/components/cards/CardCharts";
import TabSocial from "@/components/tabs/TabSocial";
import CardWithImage from "@/components/cards/CardWithImage";
import TodoList from "@/components/lists/TodoList";
import CardTimeLine from "@/components/cards/CardTimeLine";
import TableVisits from "@/components/tables/TableVisits";
export default {
  name: "Dashboard",
  components: {
    CardSocial,
    CardCharts,
    TabSocial,
    CardWithImage,
    TodoList,
    CardTimeLine,
    TableVisits
  },
  data() {
    return {};
  },
};
</script>
<template>
  <div>
    <q-page class="q-pa-sm">
      <card-social icon_position="left" />

      <card-charts />

      <div class="row q-col-gutter-sm q-py-sm">
        <tab-social />
        <card-with-image />
      </div>

      <div class="row q-col-gutter-sm q-pb-sm">
        <todo-list />

        <card-time-line />
      </div>

      <table-visits />
    </q-page>
  </div>
</template>
<style lang="scss" scoped>
</style>