<script>
import axios from "axios";
import common from "../../shared/common";
export default {
  name: "TableProject",
  data() {
    return {
      project: {
        uuid: "",
      },
      // form
      form_general: {
        name: "",
        version: "",
        classifier: "",
        description: "",
      },
      classifier_options: [
        "Application",
        "Container",
        "Device",
        "File",
        "Firmware",
        "Framework",
        "Library",
        "Operating system",
      ],
      // tab
      tabCreatePj: "general",
      // dialog
      isNew: false,
      modalCreatePj: false,
      // table
      filter: "",
      tableLoading: false,
      toggle: true,
      visibleProjectColumns: [
        "name",
        "version",
        "classifier",
        "lastBOMImport",
        "lastBomImportFormat",
        "riskScore",
        "active",
        "policyViolations",
        "vulnerabilities",
      ],
      projectColumns: [
        {
          name: "name",
          required: true,
          label: "Project Name",
          align: "left",
          field: "name",
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
          name: "lastBomImportFormat",
          // required: true,
          label: "BOM Format",
          align: "left",
          field: "lastBomImportFormat",
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
      projectData: [],
      // projectData: [
      //   {
      // name: "FR Platform Check",
      // version: "1.0",
      // classifier: "APPLICATION",
      // lastBOMImport: "-",
      // lastBomImportFormat: "-",
      // riskScore: 0,
      // active: true,
      // policyViolations: 0,
      // vulnerabilities: 0,
      //   },
      //   {
      //     name: "HardwareTest",
      //     version: "1.2",
      //     classifier: "DEVICE",
      //     lastBOMImport: "-",
      //     lastBomImportFormat: "-",
      //     riskScore: 0,
      //     active: false,
      //     policyViolations: 0,
      //     vulnerabilities: 0,
      //   },
      //   {
      //     name: "HardwareTest",
      //     version: "1.1",
      //     classifier: "DEVICE",
      //     lastBOMImport: "-",
      //     lastBomImportFormat: "-",
      //     riskScore: 0,
      //     active: false,
      //     policyViolations: 0,
      //     vulnerabilities: 0,
      //   },
      //   {
      //     name: "HardwareTest",
      //     version: "1",
      //     classifier: "DEVICE",
      //     lastBOMImport: "-",
      //     lastBomImportFormat: "-",
      //     riskScore: 0,
      //     active: false,
      //     policyViolations: 0,
      //     vulnerabilities: 0,
      //   },
      //   {
      //     name: "TESTtwo",
      //     version: "0.8",
      //     classifier: "APPLICATION",
      //     lastBOMImport: "-",
      //     lastBomImportFormat: "-",
      //     riskScore: 0,
      //     active: false,
      //     policyViolations: 0.5,
      //     vulnerabilities: 0.3,
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
    refreshTable(data) {
      this.projectData.push({
        name: data.name,
        version: data.version ? data.version : "-",
        classifier: data.classifier,
        lastBOMImport: "-",
        lastBomImportFormat: "-",
        riskScore: 0,
        active: data.active,
        policyViolations: 0,
        vulnerabilities: 0,
        uuid: data.uuid,
      });
    },
    getData() {
      // 'https://sbomapi.lale.fun/api/v1/project'
      let url = `${this.$api.BASE_URL}/${this.$api.URL_PROJECT}`;
      // console.log(url);
      this.tableLoading = true
      axios
        .get(url, {
          headers: {
            "X-api-key": `${this.$api.api_key}`,
          },
        })
        .then((res) => {
          console.log("getPjData res =>", res.data);
          this.tableLoading = false
          const arr = res.data.map((item) => {
            return {
              name: item.name,
              version: item.version,
              classifier: item.classifier,
              lastBOMImport: item.lastBomImport ? common.formatTimestamp(item.lastBomImport, true) : "-",
              lastBomImportFormat: item.lastBomImportFormat
                ? item.lastBomImportFormat
                : "-",
              riskScore: item.lastInheritedRiskScore,
              active: item.active,
              policyViolations: item.metrics
                ? item.metrics.policyViolationsInfo
                : 0, //20221025 Billy
              vulnerabilities: item.metrics ? item.metrics.vulnerabilities : 0, //20221025 Billy
              uuid: item.uuid, //20221025 Billy
            };
          });
          this.projectData = arr;
        })
        .catch((err) => {
          console.log(err);
          this.$q.notify({
            message: err,
            position: "top-right",
            type: "negative",
            color: "negative",
          });
        });
    },
    createProject() {
      if (!this.form_general["name"] || !this.form_general["classifier"]) {
        this.$refs.name.validate();
        this.$refs.classifier.validate();
        return;
      }

      //20221025 Billy
      let url = `${this.$api.BASE_URL}/${this.$api.URL_PROJECT}`;
      // console.log(url);
      this.form_general.classifier =
        this.form_general.classifier != "Operating system"
          ? this.form_general.classifier.toUpperCase()
          : "OPERATING_SYSTEM";
      
      this.tableLoading = true
      axios
        .put(url, this.form_general, {
          headers: {
            "X-api-key": `${this.$api.api_key}`,
          },
        })
        .then((res) => {
          console.log("addPj res=>", res.data);
          this.tableLoading = false
          this.refreshTable(res.data);
          this.$q.notify({
            message: `已成功新增`,
            position: "top-right",
            type: "positive",
            color: "positive",
          });
        })
        .catch((err) => {
          console.log(err);
          this.$q.notify({
            message: err,
            position: "top-right",
            type: "negative",
            color: "negative",
          });
        })
        .finally(() => {
          this.modalCreatePj = false;
          for (let key in this.form_general) {
            this.form_general[key] = "";
          }
        });
    },
    deleteProject() {
      this.modalCreatePj = false;
      let url =
        `${this.$api.BASE_URL}/${this.$api.URL_PROJECT}/` + this.project.uuid;

      this.tableLoading = true
      axios
        .delete(url, {
          headers: {
            "X-api-key": `${this.$api.api_key}`,
          },
        })
        .then((res) => {
          console.log("deleteProject res =>", res);
          this.tableLoading = false
          this.$q.notify({
            message: `已成功刪除`,
            position: "top-right",
            type: "positive",
            color: "positive",
          });
        })
        .catch((err) => {
          console.log(err);
          this.$q.notify({
            message: err,
            position: "top-right",
            type: "negative",
            color: "negative",
          });
        })
        .finally(() => {
          this.getData();
        });
    },
    updateProject() {
      this.modalCreatePj = false;
      let url = `${this.$api.BASE_URL}/${this.$api.URL_PROJECT}`;

      this.tableLoading = true
      axios
        .post(
          url,
          {
            name: this.form_general.name,
            version: this.form_general.version,
            classifier: this.form_general.classifier,
            description: this.form_general.description,
            uuid: this.project.uuid,
            // publisher: this.form_general.publisher,
            // group: this.form_general.group,
            // cpe: this.form_general.cpe,
            // purl: this.form_general.purl,
            // swidTagId: this.form_general.swidTagId,
            // tags: tagsNode,
            // active: this.form_general.active,
            // author: this.form_general.author,
          },
          {
            headers: {
              "X-api-key": `${this.$api.api_key}`,
            },
          }
        )
        .then((res) => {
          console.log("updateProject res =>", res);
          this.tableLoading = false
          this.$q.notify({
            message: `已成功編輯`,
            position: "top-right",
            type: "positive",
            color: "positive",
          });
        })
        .catch((err) => {
          console.log(err);
          this.$q.notify({
            message: err,
            position: "top-right",
            type: "negative",
            color: "negative",
          });
        })
        .finally(() => {
          this.getData();
        });
    },
    openModal(isNew, item) {
      if (isNew) {
        for (let key in this.form_general) {
          this.form_general[key] = "";
        }
        this.isNew = true;
      } else {
        this.form_general = Object.assign({}, item);
        // console.log('2', this.form_general);
        this.project.uuid = item.uuid;
        this.isNew = false;
      }
      this.modalCreatePj = true;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<template>
  <div class="q-py-lg" style="background-color: rgb(54, 54, 54)">
    <!-- 
      q-select:
      :display-value => 下拉選單選中項目之呈現方式
      option-value => 對應下拉選單與表格欄位
    -->
    <q-table
      dark
      :data="projectData"
      :columns="projectColumns"
      row-key="Version"
      :filter="filter"
      :loading="tableLoading"
      :visible-columns="visibleProjectColumns"
    >
      <template v-slot:top>
        <q-btn outline label="+ Create Projects" @click="openModal(true)" />
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
            dark
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
              name="autorenew"
            />
          </div>
          <q-select
            dark
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
          <q-th align="left">Option</q-th>
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>
      <template v-slot:body="props">
        <q-tr no-hover :props="props">
          <q-td>
            <q-btn
              size="sm"
              color="blue-6 q-mr-sm"
              label="modify"
              @click="openModal(false, props.row)"
            />
          </q-td>
          <q-td>
            <div class="cursor-pointer">
              <router-link :to="`/ProjectList/${props.row.uuid}`">
                <span style="color: #fff; text-decoration: underline">
                  {{ props.row.name }}
                </span>
              </router-link>
            </div>
          </q-td>
          <q-td v-if="visibleProjectColumns.includes('version')">
            {{ props.row.version }}
          </q-td>
          <q-td v-if="visibleProjectColumns.includes('classifier')">
            {{ props.row.classifier }}
          </q-td>
          <q-td v-if="visibleProjectColumns.includes('lastBOMImport')">
            {{ props.row.lastBOMImport }}
          </q-td>
          <q-td v-if="visibleProjectColumns.includes('lastBomImportFormat')">
            {{ props.row.lastBomImportFormat }}
          </q-td>
          <q-td v-if="visibleProjectColumns.includes('riskScore')">
            {{ props.row.riskScore }}
          </q-td>
          <q-td v-if="visibleProjectColumns.includes('active')">
            <q-checkbox dark v-model="props.row.active" />
          </q-td>
          <q-td v-if="visibleProjectColumns.includes('policyViolations')">
            <template v-if="props.row.policyViolations">
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
            </template>
            <template v-if="!props.row.policyViolations"> 0 </template>
          </q-td>
          <q-td v-if="visibleProjectColumns.includes('vulnerabilities')">
            <template v-if="props.row.vulnerabilities">
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
            </template>
            <template v-if="!props.row.vulnerabilities"> 0 </template>
          </q-td>
        </q-tr>
      </template>
    </q-table>

    <!-- dialog-新增、修改、刪除專案 -->
    <q-dialog v-model="modalCreatePj">
      <div style="background-color: #fff; width: 800px; max-width: 80%">
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
                    ref="name"
                    style="flex: 1 0 0"
                    outlined
                    dense
                    v-model="form_general['name']"
                    class="q-mr-md"
                    :rules="[(val) => val && val.length > 0]"
                    hide-bottom-space
                  />
                  <q-icon name="info" size="20px">
                    <q-tooltip>
                      The name of the component as provided by the supplier
                    </q-tooltip>
                  </q-icon>
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
                  <q-icon name="info" size="20px">
                    <q-tooltip>
                      The name of the component as provided by the supplier
                    </q-tooltip>
                  </q-icon>
                </div>
              </div>
              <div class="q-mb-lg">
                Classifier<span class="required">＊</span>
                <div class="flex items-center">
                  <q-select
                    ref="classifier"
                    style="flex: 1 0 0"
                    outlined
                    dense
                    v-model="form_general['classifier']"
                    :options="classifier_options"
                    class="q-mr-md"
                    :rules="[(val) => val && val.length > 0]"
                    hide-bottom-space
                  />
                  <q-icon name="info" size="20px">
                    <q-tooltip>
                      The name of the component as provided by the supplier
                    </q-tooltip>
                  </q-icon>
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
            </q-tab-panel>
            <q-tab-panel name="identity">
              <div class="text-h6">identity</div>
            </q-tab-panel>
          </q-tab-panels>
          <div class="q-py-md flex justify-end">
            <q-btn
              v-if="isNew === false"
              label="delete"
              color="red-6"
              text-color="white"
              class="q-mr-lg"
              @click="deleteProject"
            />
            <q-btn
              v-close-popup
              label="close"
              color="white"
              text-color="black"
              class="q-mr-lg"
            />
            <q-btn
              v-if="isNew === true"
              label="create"
              color="primary"
              @click="createProject"
            />
            <q-btn
              v-if="isNew === false"
              label="update"
              color="primary"
              @click="updateProject"
            />
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