<script>
export default {
  name: "TableProject",
  data() {
    return {
      // form
      form_general: {
        projectName: "",
        version: "",
        classifier: "",
        description: "",
        tags: "",
      },
      classifier_options: ["a", "b"],
      // tab
      tabCreatePj: "general",
      // dialog
      modalCreatePj: false,
      // table
      filter: "",
      toggle: true,
      visibleProjectColumns: [
        "projectName",
        "version",
        "classifier",
        "lastBOMImport",
        "bomFormat",
        "riskScore",
        "active",
        "policyViolations",
        "vulnerabilities",
      ],
      projectColumns: [
        {
          name: "projectName",
          required: true,
          label: "Project Name",
          align: "left",
          field: "projectName",
          sortable: true,
        },
        {
          name: "version",
          // required: true,
          label: "Version",
          align: "left",
          field: "version",
          sortable: true,
        },
        {
          name: "classifier",
          // required: true,
          label: "Classifier",
          align: "left",
          field: "classifier",
          sortable: true,
        },
        {
          name: "lastBOMImport",
          // required: true,
          label: "Last BOM Import",
          align: "left",
          field: "lastBOMImport",
          sortable: true,
        },
        {
          name: "bomFormat",
          // required: true,
          label: "BOM Format",
          align: "left",
          field: "bomFormat",
          sortable: true,
        },
        {
          name: "riskScore",
          // required: true,
          label: "Risk Score",
          align: "left",
          field: "riskScore",
          sortable: true,
        },
        {
          name: "active",
          // required: true,
          label: "Active",
          align: "left",
          field: "active",
          sortable: false,
        },
        {
          name: "policyViolations",
          // required: true,
          label: "Policy Violations",
          align: "left",
          field: "policyViolations",
          sortable: false,
        },
        {
          name: "vulnerabilities",
          // required: true,
          label: "Vulnerabilities",
          align: "left",
          field: "vulnerabilities",
          sortable: false,
        },
      ],
      projectData: [
        {
          projectName: "FR Platform Check",
          version: "1.0",
          classifier: "APPLICATION",
          lastBOMImport: "-",
          bomFormat: "-",
          riskScore: 0,
          active: true,
          policyViolations: 0,
          vulnerabilities: 0,
        },
        {
          projectName: "HardwareTest",
          version: "1.2",
          classifier: "DEVICE",
          lastBOMImport: "-",
          bomFormat: "-",
          riskScore: 0,
          active: false,
          policyViolations: 0,
          vulnerabilities: 0,
        },
        {
          projectName: "HardwareTest",
          version: "1.1",
          classifier: "DEVICE",
          lastBOMImport: "-",
          bomFormat: "-",
          riskScore: 0,
          active: false,
          policyViolations: 0,
          vulnerabilities: 0,
        },
        {
          projectName: "HardwareTest",
          version: "1",
          classifier: "DEVICE",
          lastBOMImport: "-",
          bomFormat: "-",
          riskScore: 0,
          active: false,
          policyViolations: 0,
          vulnerabilities: 0,
        },
        {
          projectName: "TESTtwo",
          version: "0.8",
          classifier: "APPLICATION",
          lastBOMImport: "-",
          bomFormat: "-",
          riskScore: 0,
          active: false,
          policyViolations: 0.5,
          vulnerabilities: 0.3,
        },
      ],
      // visibleColumns: ["calories", "desc", "protein", "sodium", "iron"],
      // columns: [
      //   {
      //     name: "name",
      //     required: true,
      //     label: "Dessert (100g serving)",
      //     align: "left",
      //     field: (row) => row.name,
      //     format: (val) => `${val}`,
      //     sortable: true,
      //   },
      //   {
      //     name: "calories",
      //     align: "center",
      //     label: "Calories",
      //     field: "calories",
      //     sortable: true,
      //   },
      //   { name: "fat", label: "Fat", field: "fat", sortable: true },
      //   { name: "carbs", label: "Carbs", field: "carbs" },
      //   { name: "protein", label: "Protein", field: "protein" },
      //   { name: "sodium", label: "Sodium ", field: "sodium" },
      //   {
      //     name: "calcium",
      //     label: "Calcium ",
      //     field: "calcium",
      //     sortable: true,
      //     sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
      //   },
      //   {
      //     name: "iron",
      //     label: "Iron ",
      //     field: "iron",
      //     sortable: true,
      //     sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
      //   },
      // ],
      // data: [
      //   {
      //     name: "Frozen Yogurt",
      //     calories: 159,
      //     fat: 6.0,
      //     carbs: 24,
      //     protein: 4.0,
      //     sodium: 87,
      //     calcium: "14%",
      //     iron: "1%",
      //   },
      //   {
      //     name: "Ice cream sandwich",
      //     calories: 237,
      //     fat: 9.0,
      //     carbs: 37,
      //     protein: 4.3,
      //     sodium: 129,
      //     calcium: "8%",
      //     iron: "1%",
      //   },
      //   {
      //     name: "Eclair",
      //     calories: 262,
      //     fat: 16.0,
      //     carbs: 23,
      //     protein: 6.0,
      //     sodium: 337,
      //     calcium: "6%",
      //     iron: "7%",
      //   },
      //   {
      //     name: "Cupcake",
      //     calories: 305,
      //     fat: 3.7,
      //     carbs: 67,
      //     protein: 4.3,
      //     sodium: 413,
      //     calcium: "3%",
      //     iron: "8%",
      //   },
      //   {
      //     name: "Gingerbread",
      //     calories: 356,
      //     fat: 16.0,
      //     carbs: 49,
      //     protein: 3.9,
      //     sodium: 327,
      //     calcium: "7%",
      //     iron: "16%",
      //   },
      //   {
      //     name: "Jelly bean",
      //     calories: 375,
      //     fat: 0.0,
      //     carbs: 94,
      //     protein: 0.0,
      //     sodium: 50,
      //     calcium: "0%",
      //     iron: "0%",
      //   },
      //   {
      //     name: "Lollipop",
      //     calories: 392,
      //     fat: 0.2,
      //     carbs: 98,
      //     protein: 0,
      //     sodium: 38,
      //     calcium: "0%",
      //     iron: "2%",
      //   },
      //   {
      //     name: "Honeycomb",
      //     calories: 408,
      //     fat: 3.2,
      //     carbs: 87,
      //     protein: 6.5,
      //     sodium: 562,
      //     calcium: "0%",
      //     iron: "45%",
      //   },
      //   {
      //     name: "Donut",
      //     calories: 452,
      //     fat: 25.0,
      //     carbs: 51,
      //     protein: 4.9,
      //     sodium: 326,
      //     calcium: "2%",
      //     iron: "22%",
      //   },
      //   {
      //     name: "KitKat",
      //     calories: 518,
      //     fat: 26.0,
      //     carbs: 65,
      //     protein: 7,
      //     sodium: 54,
      //     calcium: "12%",
      //     iron: "6%",
      //   },
      // ],
    };
  },
  computed: {},
  methods: {
    formula(val) {
      return val * 100 + "%";
    },
    toSinglePage(val) {
      console.log(val);
    },
  },
};
</script>
<template>
  <div class="q-pa-md">
    <!-- 
      q-select:
      :display-value => 下拉選單選中項目之呈現方式
      option-value => 對應下拉選單與表格欄位
    -->
    <q-table
      :data="projectData"
      :columns="projectColumns"
      row-key="Version"
      :filter="filter"
      :visible-columns="visibleProjectColumns"
    >
      <template v-slot:top>
        <q-btn outline label="+ Create Project" @click="modalCreatePj = true" />
        <q-toggle
          v-model="toggle"
          checked-icon="check"
          color="green"
          unchecked-icon="clear"
        />
        <span>Show inactive projects</span>
        <q-space />

        <div class="flex justify-center items-center">
          <q-input
            dense
            debounce="300"
            v-model="filter"
            placeholder="Search"
            class="q-mr-md"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
          <div class="q-mr-md">
            <q-icon
              class="q-pt-sm"
              style="border: 0px solid transparent"
              size="sm"
              name="slow_motion_video"
            />
          </div>
          <q-select
            v-model="visibleProjectColumns"
            multiple
            dense
            options-dense
            :display-value="$q.lang.table.columns"
            emit-value
            map-options
            :options="projectColumns"
            option-value="field"
            options-selected-class="text-warning"
            style="min-width: 50px"
          />
        </div>
      </template>
      <template v-slot:header="props">
        <q-tr :props="props" no-hover>
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>
      <template v-slot:body="props">
        <tr no-hover :props="props">
          <td>
            <div
              class="cursor-pointer"
              @click="toSinglePage(props.row.projectName)"
            >
              {{ props.row.projectName }}
            </div>
          </td>
          <td v-if="visibleProjectColumns.includes('version')">
            {{ props.row.version }}
          </td>
          <td v-if="visibleProjectColumns.includes('classifier')">
            {{ props.row.classifier }}
          </td>
          <td v-if="visibleProjectColumns.includes('lastBOMImport')">
            {{ props.row.lastBOMImport }}
          </td>
          <td v-if="visibleProjectColumns.includes('bomFormat')">
            {{ props.row.bomFormat }}
          </td>
          <td v-if="visibleProjectColumns.includes('riskScore')">
            {{ props.row.riskScore }}
          </td>
          <td v-if="visibleProjectColumns.includes('active')">
            <q-checkbox v-model="props.row.active" />
          </td>
          <td v-if="visibleProjectColumns.includes('policyViolations')">
            <q-linear-progress
              rounded
              color="warning"
              size="14px"
              :value="props.row.policyViolations"
            >
              <div class="absolute-full flex flex-center">
                <q-badge
                  style="background: transparent !important"
                  class="q-pa-none"
                  color="white"
                  text-color="primary"
                  :label="props.row.policyViolations"
                />
              </div>
            </q-linear-progress>
          </td>
          <td v-if="visibleProjectColumns.includes('vulnerabilities')">
            <q-linear-progress
              rounded
              color="warning"
              size="14px"
              :value="props.row.vulnerabilities"
            >
              <div class="absolute-full flex flex-center">
                <q-badge
                  style="background: transparent !important"
                  class="q-pa-none"
                  color="white"
                  text-color="primary"
                  :label="props.row.vulnerabilities"
                />
              </div>
            </q-linear-progress>
          </td>
        </tr>
      </template>
    </q-table>

    <!-- dialog-新增專案 -->
    <q-dialog v-model="modalCreatePj">
      <div
        class="aa"
        style="background-color: #fff; width: 800px; max-width: 80%"
      >
        <div class="q-pa-md">
          <div class="text-h6">Create Project</div>
        </div>
        <div class="q-px-md">
          <q-tabs
            v-model="tabCreatePj"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="left"
            narrow-indicator
          >
            <q-tab name="general" label="General" />
            <q-tab name="identity" label="Identity" />
          </q-tabs>
          <q-tab-panels v-model="tabCreatePj" animated>
            <q-tab-panel name="general">
              <div class="q-mt-md q-mb-lg">
                Project Name<span class="required">＊</span>
                <div class="flex items-center">
                  <q-input
                    style="flex: 1 0 0"
                    outlined
                    dense
                    v-model="form_general['projectName']"
                    class="q-mr-md"
                    :rules="[(val) => val && val.length > 0]"
                    hide-bottom-space
                  />
                  <q-btn icon="camera_enhance" color="primary" size="10px">
                    <q-tooltip>
                      The name of the component as provided by the supplier
                    </q-tooltip>
                  </q-btn>
                </div>
              </div>
              <div class="q-mb-lg">
                Version
                <div class="flex items-center">
                  <q-input
                    style="flex: 1 0 0"
                    outlined
                    dense
                    v-model="form_general['version']"
                    class="q-mr-md"
                  />
                  <q-btn icon="camera_enhance" color="primary" size="10px">
                    <q-tooltip>
                      The name of the component as provided by the supplier
                    </q-tooltip>
                  </q-btn>
                </div>
              </div>
              <div class="q-mb-lg">
                Classifier<span class="required">＊</span>
                <div class="flex items-center">
                  <q-select
                    style="flex: 1 0 0"
                    outlined
                    dense
                    v-model="form_general['classifier']"
                    :options="classifier_options"
                    class="q-mr-md"
                    :rules="[(val) => val && val.length > 0]"
                    hide-bottom-space
                  />
                  <q-btn icon="camera_enhance" color="primary" size="10px">
                    <q-tooltip>
                      The name of the component as provided by the supplier
                    </q-tooltip>
                  </q-btn>
                </div>
              </div>
              <div class="q-mb-lg">
                Description
                <q-input
                  type="textarea"
                  outlined
                  dense
                  v-model="form_general['description']"
                />
              </div>
              <div>
                Tags
                <q-input
                  placeholder="Add Tag"
                  outlined
                  dense
                  v-model="form_general['tags']"
                />
              </div>
            </q-tab-panel>
            <q-tab-panel name="identity">
              <div class="text-h6">identity</div>
            </q-tab-panel>
          </q-tab-panels>
          <div class="q-py-md flex justify-end">
            <q-btn
              v-close-popup
              label="close"
              color="white"
              text-color="black"
              class="q-mr-lg"
            />
            <q-btn v-close-popup label="create" color="primary" />
          </div>
        </div>
      </div>
    </q-dialog>
  </div>
</template>
<style lang="scss" scoped>
.required {
  color: #e65757;
}
</style>