<script>
import CardPanel from "@/components/cards/CardPanel";
import TableProject from "@/components/tables/TableProject";
export default {
  name: "ProjectList",
  components: {
    CardPanel,
    TableProject
  },
  data() {
    return {

    };
  },
};
</script>
<template>
  <div class="q-pa-md" style="background-color: rgb(54, 54, 54); height: 100%;">
    <card-panel class="q-pb-md" />
    <!-- <q-btn outline label="+ Create Project" /> -->
    <table-project />
  </div>
</template>
<style lang="scss">
</style>