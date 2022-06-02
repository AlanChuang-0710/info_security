<script>
export default {
  name: "ListItem",
  data() {
    return {
      data: [
        {
          type: "Network and IT",
          btnColor: "green-4",
          number: 95,
          detail: [
            {
              title: "Asset Reputation",
              num: 100,
              color: "green",
            },
            {
              title: "Cloud",
              num: 45,
              color: "red",
            },
            {
              title: "DNS",
              num: 66,
              color: "orange",
            },
            {
              title: "Mail Server",
              num: 10,
              color: "green",
            },
            {
              title: "TLS",
              num: 75,
              color: "green",
            },
            {
              title: "Web Server",
              num: 98,
              color: "green",
            },
          ],
        },
        {
          type: "Application",
          btnColor: "orange",
          number: 63,
          detail: [
            {
              title: "Asset Reputation",
              num: 100,
              color: "green",
            },
            {
              title: "Cloud",
              num: 45,
              color: "red",
            },
            {
              title: "DNS",
              num: 66,
              color: "orange",
            },
          ],
        },
        {
          type: "Human",
          btnColor: "orange",
          number: 75,
          detail: [
            {
              title: "Asset Reputation",
              num: 100,
              color: "green",
            },
            {
              title: "Cloud",
              num: 45,
              color: "red",
            },
            {
              title: "DNS",
              num: 66,
              color: "orange",
            },
            {
              title: "Mail Server",
              num: 10,
              color: "green",
            },
            {
              title: "TLS",
              num: 75,
              color: "green",
            },
          ],
        },
      ],
    };
  },
};
</script>
<template>
  <div>
    <q-card-section
      class="text-dark row q-col-gutter-md"
      style="background-color: #363636"
    >
      <div class="col-md-4 col-xs-12" v-for="(item, idx) in data" :key="idx">
        <div class="flex justify-between items-center q-px-md q-mb-md">
          <div class="text-white">{{ item.type }}</div>
          <q-btn
            class="cursor-inherit"
            no-caps
            :ripple="false"
            round
            :label="item.number"
            size="10px"
            :color="item.btnColor"
          ></q-btn>
        </div>
        <q-list>
          <q-item
            class="bg-white q-mt-md q-mb-sm"
            style="border-radius: 5px"
            v-for="(ele, id) in item.detail"
            :key="id"
          >
            <q-item-section>{{ ele.title }}</q-item-section>
            <q-item-section avatar>
              <div :style="`border-bottom: 2px solid ${ele.color}`">
                {{ ele.num }}
              </div>
            </q-item-section>
          </q-item>
        </q-list>
        <!-- expansion -->
        <!-- <q-expansion-item
            dark
            dense-toggle
            default-opened
            expand-icon-class="#fff"
            expand-separator
            label="Asset Reputation"
            :header-style="{ borderBottom: '1px solid #fff' }"
        >
          <q-card>
            <q-card-section>
              <div class="text-dark">詳細資料</div>
            </q-card-section>
          </q-card>
        </q-expansion-item> -->

        <!-- dropdown -->
        <!-- <q-btn-dropdown color="primary" label="Dropdown Button">
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>Photos</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown> -->
      </div>
    </q-card-section>
  </div>
</template>
<style lang="scss" scoped>
</style>