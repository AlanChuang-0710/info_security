<script>
export default {
  name: "ListItem",
  data() {
    return {
      modal: false,
      data: [
        {
          type: "Network and IT",
          btnColor: "green-4",
          number: 95,
          detail: [
            {
              title: "Certification & Risk Assessment",
              num: 100,
              color: "red",
              content: [
                {
                  context: "Awareness training and promotion",
                  color: "green",
                },
                {
                  context: "Security preventive rehearsal",
                  color: "red",
                },
              ],
            },
            {
              title: "Inventory Management & Physical Security",
              num: 45,
              color: "green",
              content: [
                {
                  context: "Inventory Management",
                  color: "",
                },
                {
                  context: "Physical Security",
                  color: "",
                },
              ],
            },
            {
              title: "Cybersecurity Incident Detection & Response",
              num: 66,
              color: "orange",
              content: [
                {
                  context: "SOC operation",
                  color: "",
                },
                {
                  context: "Incident response management",
                  color: "",
                },
              ],
            },
            {
              title: "System Development & Application Security",
              num: 10,
              color: "green",
              content: [
                {
                  context: "AP Security guidelines",
                  color: "",
                },
                {
                  context: "Security Code Scan",
                  color: "",
                },
              ],
            },
            {
              title: "Organization Policy & Human Resources Security",
              num: 75,
              color: "green",
              content: [
                {
                  context: "Security team arrangement / policy readiness",
                  color: "",
                },
                {
                  context: "Risk assessment management",
                  color: "",
                },
                {
                  context: "Employment background checks / NDA",
                  color: "",
                },
                {
                  context: "Training and awareness Promotion",
                  color: "",
                },
                {
                  context: "Phising mail testing",
                  color: "",
                },
              ],
            },
            {
              title: "Computer Operation & Information Management",
              num: 98,
              color: "green",
              content: [
                {
                  context: "BYOD security control",
                  color: "",
                },
                {
                  context: "IT asset management / Security Hardening",
                  color: "",
                },
                {
                  context: "Patch management / Anti-virus protection",
                  color: "",
                },
                {
                  context: "Data protection / Media protection",
                  color: "",
                },
                {
                  context: "Access control / Remote access management",
                  color: "",
                },
              ],
            },
            {
              title: "Identify & Access Management",
              num: 75,
              color: "green",
              content: [
                {
                  context: "Authentication and authorization",
                  color: "",
                },
                {
                  context: "Account / password policy",
                  color: "",
                },
                {
                  context: "Privilege Account management",
                  color: "",
                },
                {
                  context: "Non-organizational user management",
                  color: "",
                },
              ],
            },
            {
              title: "Network Security & Change Management",
              num: 98,
              color: "green",
              content: [
                {
                  context: "Boundary protection (DMZ)",
                  color: "",
                },
                {
                  context: "Network compartment (Intranet)",
                  color: "",
                },
                {
                  context: "Internet access protection",
                  color: "",
                },
                {
                  context: "Email protection",
                  color: "",
                },
                {
                  context: "Cloud security",
                  color: "",
                },
              ],
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
              content: [{}],
            },
            {
              title: "Cloud",
              num: 45,
              color: "red",
              content: [{}],
            },
            {
              title: "DNS",
              num: 66,
              color: "orange",
              content: [{}],
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
              content: [{}],
            },
            {
              title: "Cloud",
              num: 45,
              color: "red",
              content: [{}],
            },
            {
              title: "DNS",
              num: 66,
              color: "orange",
              content: [{}],
            },
            {
              title: "Mail Server",
              num: 10,
              color: "green",
              content: [{}],
            },
            {
              title: "TLS",
              num: 75,
              color: "green",
              content: [{}],
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
      class="text-white row q-col-gutter-md"
      style="background-color: #363636"
    >
      <div class="col-md-4 col-xs-12" v-for="(item, idx) in data" :key="idx">
        <div class="flex justify-between items-center q-px-md q-mb-md">
          <div>{{ item.type }}</div>
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
        <q-expansion-item
          v-for="(ele, id) in item.detail"
          :key="id"
          dense-toggle
          expand-icon-class="#fff"
          expand-separator
          :header-style="{ borderBottom: '1px solid #fff' }"
        >
          <template v-slot:header>
            <q-item-section>
              <div class="ellipsis" style="width: 90%">{{ ele.title }}</div>
            </q-item-section>

            <div class="circle" :style="`background-color: ${ele.color}`"></div>
            <!-- <q-item-section
              side
              :style="`border-bottom: 2px solid ${ele.color}; padding-left: 0!important;`"
            >
              {{ ele.num }}
            </q-item-section> -->
          </template>
          <q-card>
            <q-card-section>
              <ul class="text-dark">
                <li v-for="(sector, id) in ele.content" :key="id">
                  <div class="flex items-center">
                    <div @click="modal = true" class="cursor-pointer">
                      {{ sector.context }}
                    </div>
                    <div
                      class="circle-2 q-ml-md"
                      :style="`background-color: ${sector.color}`"
                    ></div>
                  </div>
                </li>
              </ul>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </div>
    </q-card-section>
    <q-dialog v-model="modal">
      <q-card bordered style="width: 350px; max-width: 350px">
        <q-card-section class="flex column justify-center items-center">
          <q-btn round color="negative" icon="error_outline" class="q-mb-sm" />
          <div class="text-h5 q-mt-sm q-mb-xs">Problem Issue</div>
          <p>Information security is a problem</p>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
<style lang="scss" scoped>
ul {
  padding-inline-start: 20px;
}
.circle {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  transform: translateY(100%);
}
.circle-2 {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
</style>