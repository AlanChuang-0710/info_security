<script>
import axios from "axios";
export default {
  name: "TableVulnerabilities",
  data() {
    return {
      // form
      form_general: {
        id: "",
        title: "",
        severity: "",
        cvss: "",
        cwe: "",
        description: "",
      },
      //tab
      tabCreateVul: "general",
      // dialog
      modalCreateVul: false,
      //table,
      filter: "",
      tableLoading: false,
      visibleVulnerabilitiesColumns: [
        "name",
        "published",
        "cwe",
        "projects",
        "severity",
      ],
      vulnerabilitiesColumns: [
        {
          name: "name",
          required: true,
          label: "Name",
          align: "left",
          field: "name",
          sortable: false,
        },
        {
          name: "published",
          // required: true,
          label: "Published",
          align: "left",
          field: "published",
          sortable: true,
        },
        {
          name: "cwe",
          // required: true,
          label: "CWE",
          align: "left",
          field: "cwe",
          sortable: true,
        },
        {
          name: "projects",
          // required: true,
          label: "Projects",
          align: "left",
          field: "projects",
          sortable: false,
        },
        {
          name: "severity",
          // required: true,
          label: "Severity",
          align: "left",
          field: "severity",
          sortable: false,
        },
      ],
      vulnerabilitiesData: [],
      // vulnerabilitiesData: [
      //   {
      //     name: "CVE-2011-4905",
      //     published: "1 Oct 1988",
      //     cwe: "CWE-399",
      //     projects: "0",
      //     severity: "Critical",
      //   },
      // ],
    };
  },
  methods: {
    getData() {
      // `${this.$api.BASE_URL}/${this.$api.URL_VULNERABILITY}`

      let url = `${this.$api.BASE_URL}/${this.$api.URL_VULNERABILITY}`;
      this.tableLoading = true
      axios
        .get(url, {
          headers: {
            "X-api-key": `${this.$api.api_key}`,
          },
        })
        .then((res) => {
          console.log("vulnerabilities res =>", res.data);
          this.tableLoading = false
          const newArr = res.data.map((item) => {
            return {
              name: item.vulnId,
              published: item.published,
              cwe: item.cwe ? item.cwe.cweId : null,
              projects: item.projects ? item.projects : null,
              severity: item.severity,
            };
          });
          this.vulnerabilitiesData = newArr;
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
  },
  mounted() {
    this.getData();
  },
};
</script>
<template>
  <div>
    <!-- 
      Critical: red
      High: orange
      Medium: yellow
     -->
    <q-table
      dark
      :data="vulnerabilitiesData"
      :columns="vulnerabilitiesColumns"
      row-key="name"
      :filter="filter"
      :loading="tableLoading"
      :visible-columns="visibleVulnerabilitiesColumns"
    >
      <template v-slot:top>
        <q-btn
          outline
          label="+ Create Vulnerabilities"
          @click="modalCreateVul = true"
        />
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
            v-model="visibleVulnerabilitiesColumns"
            multiple
            dense
            options-dense
            :display-value="$q.lang.table.columns"
            emit-value
            map-options
            :options="vulnerabilitiesColumns"
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
        <q-tr no-hover :props="props">
          <q-td v-if="visibleVulnerabilitiesColumns.includes('name')">
            <span class="bg-light-blue-2 text-grey-9 q-pa-xs">NVD</span>
            {{ props.row.name }}
          </q-td>
          <q-td v-if="visibleVulnerabilitiesColumns.includes('published')">
            {{ props.row.published }}
          </q-td>
          <q-td v-if="visibleVulnerabilitiesColumns.includes('cwe')">
            {{ props.row.cwe }}
          </q-td>
          <q-td v-if="visibleVulnerabilitiesColumns.includes('projects')">
            {{ props.row.projects }}
          </q-td>
          <q-td v-if="visibleVulnerabilitiesColumns.includes('severity')">
            <q-btn
              size="10px"
              padding="xs"
              square
              :color="
                props.row.severity === 'CRITICAL'
                  ? 'red-6'
                  : props.row.severity === 'HIGH'
                  ? 'orange-6'
                  : 'amber-6'
              "
              icon="pest_control"
            />
            {{ props.row.severity }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <!-- dialog-新增 vul -->
    <q-dialog v-model="modalCreateVul">
      <div style="background-color: #fff; width: 800px; max-width: 80%">
        <div class="q-pa-md">
          <div class="text-h6">Create Vulnerabilities</div>
        </div>
        <div class="q-px-md">
          <q-tabs
            v-model="tabCreateVul"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="left"
            narrow-indicator
          >
            <q-tab name="general" label="General" />
            <q-tab name="extended" label="Extended" />
          </q-tabs>
          <q-tab-panels v-model="tabCreateVul" animated>
            <q-tab-panel name="general">
              <div class="q-mt-md q-mb-lg">
                Vulnerability ID<span class="required">＊</span>
                <div class="flex items-center">
                  <q-input
                    ref="id"
                    style="flex: 1 0 0"
                    outlined
                    dense
                    v-model="form_general['id']"
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
                Title
                <div class="flex items-center">
                  <q-input
                    style="flex: 1 0 0"
                    outlined
                    dense
                    v-model="form_general['title']"
                    class="q-mr-md"
                  />
                  <q-icon name="info" size="20px">
                    <q-tooltip>
                      The name of the component as provided by the supplier
                    </q-tooltip>
                  </q-icon>
                </div>
              </div>
              <div class="flex items-center q-mb-lg">
                <div style="flex: 1 0 0">
                  Severity
                  <div class="flex items-center">
                    <q-input
                      style="flex: 1 0 0"
                      outlined
                      dense
                      v-model="form_general['severity']"
                      class="q-mr-md"
                    />
                    <q-icon name="info" size="20px">
                      <q-tooltip>
                        The name of the component as provided by the supplier
                      </q-tooltip>
                    </q-icon>
                  </div>
                </div>
                <div style="flex: 1 0 0" class="q-pl-md">
                  CVSS Severity
                  <div class="flex items-center">
                    <q-input
                      style="flex: 1 0 0"
                      outlined
                      dense
                      v-model="form_general['cvss']"
                      class="q-mr-md"
                    />
                    <q-icon name="info" size="20px">
                      <q-tooltip>
                        The name of the component as provided by the supplier
                      </q-tooltip>
                    </q-icon>
                  </div>
                </div>
              </div>
              <div class="q-mt-md q-mb-lg">
                CWE
                <q-input
                  ref="cwe"
                  style="flex: 1 0 0"
                  outlined
                  dense
                  v-model="form_general['cwe']"
                >
                  <template v-slot:append>
                    <q-icon name="add" class="cursor-pointer" />
                  </template>
                </q-input>
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
            <q-tab-panel name="extended">
              <div class="text-h6">extended</div>
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
            <q-btn label="create" color="primary" />
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