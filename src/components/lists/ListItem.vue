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
              title: "Certification & Risk Assessment",
              num: 100,
              color: "green",
              content: [
                {
                  context: "Awareness training and promotion",
                },
                {
                  context: "Security preventive rehearsal",
                },
              ],
            },
            {
              title: "Inventory Management & Physical Security",
              num: 45,
              color: "red",
              content: [
                {
                  context: "Inventory Management",
                },
                {
                  context: "Physical Security",
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
                },
                {
                  context: "Incident response management",
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
                },
                {
                  context: "Security Code Scan",
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
                },
                {
                  context: "Risk assessment management",
                },
                {
                  context: "Employment background checks / NDA",
                },
                {
                  context: "Training and awareness Promotion",
                },
                {
                  context: "Phising mail testing",
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
                },
                {
                  context: "IT asset management / Security Hardening",
                },
                {
                  context: "Patch management / Anti-virus protection",
                },
                {
                  context: "Data protection / Media protection",
                },
                {
                  context: "Access control / Remote access management",
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
                },
                {
                  context: "Account / password policy",
                },
                {
                  context: "Privilege Account management",
                },
                {
                  context: "Non-organizational user management",
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
                },
                {
                  context: "Network compartment (Intranet)",
                },
                {
                  context: "Internet access protection",
                },
                {
                  context: "Email protection",
                },
                {
                  context: "Cloud security",
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
                  {{ sector.context }}
                </li>
              </ul>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </div>
    </q-card-section>
  </div>
</template>
<style lang="scss" scoped>
ul {
  padding-inline-start: 20px;
}
</style>