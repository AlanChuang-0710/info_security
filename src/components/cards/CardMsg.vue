<script>
export default {
  name: "CardMsg",
  data() {
    return {
      cardDetail: [
        {
          title: "Late Tasks",
          value: "600",
          badge: {
            percent: "10%",
          },
          color: "#f88c2b",
        },
        {
          title: "Complete Incident",
          value: "200",
          badge: null,
          color: "#f37169",
        },
        {
          title: "Late Incident",
          value: "600",
          badge: {
            percent: "0%",
          },
          color: "#7cb342",
        },
      ],
    };
  },
};
</script>
<template>
  <div>
    <q-card class="bg-transparent no-shadow no-border">
      <q-card-section class="q-pa-none">
        <div class="row q-col-gutter-sm">
          <div
            v-for="(item, index) in cardDetail"
            :key="index"
            class="col-md-4 col-sm-12 col-xs-12"
          >
            <q-item
              :style="`background-color: ${item.color}`"
              class="relative-position"
            >
              <div class="absolute" style="top: 3px; right: 10px">
                <q-icon color="white" name="more_vert" />
              </div>
              <q-item-section class="text-center">
                <h3 class="q-my-none">
                  <div class="flex justify-center items-center">
                    <div class="text-white q-mr-sm q-pt-xs">
                      {{ item.value }}
                    </div>
                    <div class="flex items-center">
                      <q-badge
                        v-if="item.badge"
                        class="q-px-md q-py-xs"
                        rounded
                        color="white"
                        text-color="black"
                        :label="`${item.badge.percent}`"
                      />
                    </div>
                  </div>
                </h3>
                <div class="text-white" style="text-decoration: underline">
                  {{ item.title }}
                </div>
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