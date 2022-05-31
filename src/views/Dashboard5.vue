<script>
import ListItem from "@/components/lists/ListItem.vue";
export default {
  name: "",
  components: {
    ListItem,
  },
  data() {
    return {};
  },
};
</script>
<template>
  <div style="background-color: #363636">
    <q-page class="text-white q-pa-sm">
      <q-list>
        <q-item>
          <q-item-section avatar>
            <q-icon color="grey" name="fas fa-chart-line" size="44px" />
          </q-item-section>
          <q-item-section>
            <div class="text-h6 text-white">Security Profile</div>
          </q-item-section>
        </q-item>
      </q-list>
      <q-card class="q-mb-md7" style="background-color: #363636; border: 1px solid pink" >
        <q-card-section class="row q-col-gutter-sm">
          <div class="col-md-8 col-xs-12">
            <div class="intro">BREAKDOWN</div>
            <div class="row">
              <div class="col-md-6 col-12">
                <div class="text-subtitle1 text-weight-medium">
                  Cyber Posture Rating
                </div>
                <main class="text-white">圓餅圖</main>
                <div
                  class="
                    flex
                    justify-between
                    items-center
                    rounded-borders
                    q-px-sm
                  "
                  style="border: 1px solid #000"
                >
                  <q-btn
                    round
                    color="deep-orange"
                    icon="edit_location"
                    size="6px"
                    class="cursor-inherit"
                  />
                  1 critical test was discovered
                  <div class="text-weight-bold">View</div>
                </div>
                <aside class="flex justify-center items-center">
                  <div class="flex items-center q-px-sm">
                    <div class="circle" style="background-color: red"></div>
                    <div>0 - 55</div>
                  </div>
                  <div class="flex items-center q-px-sm">
                    <div class="circle" style="background-color: yellow"></div>
                    <div>56 - 79</div>
                  </div>
                  <div class="flex items-center q-px-sm">
                    <div class="circle" style="background-color: green"></div>
                    <div>80 - 100</div>
                  </div>
                </aside>
              </div>
              <!-- <q-separator
                color="black"
                size="1px"
                vertical
                style="height: 100%"
              /> -->
              <div class="col-md-6 col-12" style="border-left: 1px solid red">
                <div>
                  <div class="text-subtitle1 text-weight-medium">
                    Industry Rating
                  </div>
                  <main class="text-white">線圖</main>
                </div>
                <div style="border-top: 1px solid red" class="q-pa-sm">
                  <div class="flex justify-between">
                    <div class="text-subtitle1 text-weight-medium">
                      Rating History
                    </div>
                    <q-badge color="blue"> UPGRADE</q-badge>
                  </div>
                  <main class="text-white">折線圖</main>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-xs-12">
            <div
              style="background-color: rgb(77, 77, 77);"
              class="
                column
                justify-center
                items-center
                text-center
                q-gutter-y-sm q-pa-sm q-mb-md
              "
            >
              <div class="text-deep-orange">NEW FEATURE</div>
              <div>Build Trust Early<br />in the sales process</div>
              <small
                >Share your cyber profile with vendors in a few clicks!</small
              >
              <q-btn rounded color="deep-orange" label="Build now"></q-btn>
            </div>
            <div style="background-color: rgb(77, 77, 77);">
              <div class="text-caption text-weight-medium">
                <span>ASSETS</span> 30 Assets were discovered
                <span style="text-decoration: underline">(view)</span>
                <main class="text-white">世界地圖</main>
              </div>
            </div>
          </div>
        </q-card-section>
        <q-card-section class="row">
          <div class="col-md-4 col-12">
            <div class="flex justify-between q-pa-sm">
              <div class="text-caption text-weight-medium">DARK MENTIONS</div>
              <q-badge color="blue"> UPGRADE</q-badge>
            </div>
          </div>
          <div class="col-md-4 col-12 q-pa-sm" style="background-color: rgb(77, 77, 77);">
            <div class="flex justify-between">
              <div class="text-caption text-weight-medium">DATA STRUCTURE</div>
              <q-badge color="blue"> UPGRADE</q-badge>
            </div>
            <q-list bordered separator class="q-my-md">
              <q-item class="q-py-none" style="border: 1px solid #a19999;" >
                <q-item-section>APT40 hacking group linked to </q-item-section>
              </q-item>
              <q-item class="q-py-none" style="border: 1px solid #a19999;" >
                <q-item-section>Healthcare entities linked to</q-item-section>
              </q-item>
            </q-list>
            <div class="flex justify-end">VIEW ALL</div>
          </div>
        </q-card-section>
      </q-card>
      <q-card style="background-color: #363636; border: 1px solid pink">
        <q-list>
          <q-item>
            <q-item-section>
              <div class="intro">POSTURE BY CATEGORIES</div>
            </q-item-section>
          </q-item>
        </q-list>
        <list-item></list-item>
      </q-card>
    </q-page>
  </div>
</template>
<style lang="scss" scoped>
.circle {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 0 10px 0 0;
  transform: translateY(15%);
}
</style>