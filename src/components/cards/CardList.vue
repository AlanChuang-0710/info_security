<script>
export default {
  name: "CardList",
  data() {
    return {
      model: false,
      listDetail: [
        {
          title: "Unassigned incidents",
          subTitle: "SnapShop",
          item: [
            {
              title: "Some mail sampleSome mail sample",
              status: "Critical",
              color: "red",
              isShow: true,
            },
            {
              title: "Alert mail sampleSome mail sample",
              status: "Medium",
              color: "orange",
              isShow: true,
            },
            {
              title: "Pass mail sampleSome mail sample",
              status: "Low",
              color: "green",
              isShow: true,
            },
          ],
        },
        {
          title: "Late incidents",
          subTitle: "SnapShop",
          item: [
            {
              title: "Some mail sampleSome mail sample",
              status: "Critical",
              color: "red",
              isShow: false,
            },
            {
              title: "Alert mail sampleSome mail sample",
              status: "Medium",
              color: "orange",
              isShow: false,
            },
            {
              title: "Pass mail sampleSome mail sample",
              status: "Low",
              color: "green",
              isShow: false,
            },
          ],
        },
        {
          title: "Overdue Tasks",
          subTitle: "SnapShop",
          item: [
            {
              title: "Some mail sampleSome mail sample",
              status: "Critical",
              color: "red",
              isShow: true,
            },
            {
              title: "Alert mail sampleSome mail sample",
              status: "Medium",
              color: "orange",
              isShow: true,
            },
            {
              title: "Pass mail sampleSome mail sample",
              status: "Low",
              color: "green",
              isShow: true,
            },
          ],
        },
      ],
    };
  },
  methods: {
    showModal(e) {
      this.model = true
    }
  },
};
</script>
<template>
  <div>
    <q-card class="bg-transparent no-shadow no-border q-mt-sm">
      <q-card-section class="q-pa-none">
        <div class="row q-col-gutter-sm">
          <div
            v-for="(item, index) in listDetail"
            :key="index"
            class="col-lg-4 col-sm-12 col-xs-12 col-md-4"
          >
            <q-item class="relative-position" style="background-color: #4d4d4d">
              <div class="absolute" style="top: 3px; right: 10px">
                <q-icon color="white" name="more_vert" />
              </div>
              <q-item-section>
                <h6 class="text-white q-my-none">{{ item.title }}</h6>
                <div style="color: #eee">{{ item.subTitle }}</div>
                <ul>
                  <li v-for="(ele, idx) in item.item" :key="idx">
                    <div class="flex justify-start">
                      <div
                        class="ellipsis cursor-pointer"
                        style="width: 60%; color: #9adcfa"
                        @click="showModal"
                      >
                        {{ ele.title }}
                      </div>
                      <div style="width: 35%" class="text-left q-pl-md">
                        <div
                          v-if="ele.isShow"
                          class="circle"
                          :style="`background-color: ${ele.color}`"
                        ></div>
                        <span style="color: #eee">{{ ele.status }}</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </q-item-section>
            </q-item>
          </div>
        </div>
      </q-card-section>
    </q-card>
    <!-- Dialog -->
    <q-dialog v-model="model">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
          perferendis totam, ea at omnis vel numquam exercitationem aut, natus
          minima, porro labore.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<style lang="scss" scoped>
.circle {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 10px 0 0;
  transform: translateY(15%);
}
ul {
  padding-inline-start: 0px;
  list-style-type: none;
}
</style>