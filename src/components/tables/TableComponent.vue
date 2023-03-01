<script>
import axios from "axios";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
import EventBus from "../../shared/eventbus";
export default {
  name: "TableInfo",
  props: {
    uuid: {
      type: String,
      required: true,
    },
  },
  inject: ["reloadPage"],
  data() {
    return {
      component: {
        uuid: "",
      },
      inputFile: null,
      uploadPercentage: undefined,
      inputFileOther: null,
      // form
      form_identity: {
        name: "",
        version: "",
        classifier: "",
        group: "",
        purl: "",
        cpe: "",
        swidTagId: "",
      },
      form_extended: {
        filename: "",
        license: "",
        description: "",
      },
      new_form: {
        testDevice: "",
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
      tabAddCp: "identity",
      // dialog
      isNew: false,
      modalAddCp: false,
      modalUploadBom: false,
      modalUploadBomOther: false,
      position: "top",
      // table
      filter: "",
      tableLoading: false,
      selected: [],
      visibleComponentColumns: [
        "name",
        "version",
        "group",
        "internal",
        "license",
        "riskScore",
        "vulnerabilities",
      ],
      componentColumns: [
        {
          name: "name",
          required: true,
          label: "Component",
          align: "left",
          field: "name",
          sortable: false,
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
          name: "group",
          // required: true,
          label: "Group",
          align: "left",
          field: "group",
          sortable: true,
        },
        {
          name: "internal",
          // required: true,
          label: "Internal",
          align: "left",
          field: "internal",
          sortable: true,
        },
        {
          name: "license",
          // required: true,
          label: "License",
          align: "left",
          field: "license",
          sortable: false,
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
          name: "vulnerabilities",
          // required: true,
          label: "Vulnerabilities",
          align: "left",
          field: "vulnerabilities",
          sortable: false,
        },
      ],
      componentData: [],
      // componentData: [
      //   {
      // name: "FR Platform Check",
      // version: "1.0",
      // group: "group",
      // internal: "-",
      // license: "-",
      // riskScore: 0,
      // vulnerabilities: 0,
      //   },
      //   {
      //     name: "HardwareTest1",
      //     version: "1.2",
      //     group: "vendor",
      //     internal: "-",
      //     license: "-",
      //     riskScore: 0,
      //     vulnerabilities: 0,
      //   },
      //   {
      //     name: "HardwareTest2",
      //     version: "1.1",
      //     group: "vendor",
      //     internal: "-",
      //     license: "-",
      //     riskScore: 0,
      //     vulnerabilities: 0,
      //   },
      //   {
      //     name: "HardwareTest3",
      //     version: "1",
      //     group: "vendor",
      //     internal: "-",
      //     license: "-",
      //     riskScore: 0,
      //     vulnerabilities: 0,
      //   },
      //   {
      //     name: "TESTtwo",
      //     version: "0.8",
      //     group: "group",
      //     internal: "-",
      //     license: "-",
      //     riskScore: 0,
      //     vulnerabilities: 0.8,
      //   },
      // ],
    };
  },
  watch: {
    // uploadPercentage: {
    //   handler(val) {
    //     console.log('uploadPercentage=>',val);
    //   }
    // }
  },
  methods: {
    createComponent() {
      if (!this.form_identity["name"] || !this.form_identity["version"]) {
        this.$refs.name.validate();
        this.$refs.version.validate();
        this.$refs.classifier.validate();
        return;
      }
      let PJ_uuid = this.uuid;
      let url = `${this.$api.BASE_URL}/${this.$api.URL_COMPONENT}/project/${PJ_uuid}`;
      console.log(url);

      this.tableLoading = true
      axios
        .put(
          url,
          {
            name: this.form_identity.name,
            version: this.form_identity.version,
            classifier:
              this.form_identity.classifier != "Operating system"
                ? this.form_identity.classifier.toUpperCase()
                : "OPERATING_SYSTEM",
            group: this.form_identity.group,
            purl: this.form_identity.purl,
            cpe: this.form_identity.cpe != "" ? this.form_identity.cpe : null,
            swidTagId: this.form_identity.swidTagId,
            // description: this.form_identity.description,
            // license: this.selectedLicense,
            // filename: this.form_identity.filename,
            // classifier: this.form_identity.classifier,
            // copyright: this.form_identity.copyright,
            // md5: this.form_identity.md5,
            // sha1: this.form_identity.sha1,
            // sha256: this.form_identity.sha256,
            // sha512: this.form_identity.sha512,
            // sha3_256: this.form_identity.sha3_256,
            // sha3_512: this.form_identity.sha3_512,
            // notes: this.form_identity.notes,
          },
          {
            headers: {
              "X-api-key": `${this.$api.api_key}`,
            },
          }
        )
        .then((res) => {
          console.log("addCom res =>", res);
          this.tableLoading = false
          this.refreshTable(res.data);
          this.$q.notify({
            message: `已成功送出`,
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
          this.modalAddCp = false;
        });
      this.resetValues();
    },
    resetValues() {
      this.form_identity = {
        name: null,
        version: null,
        classifier: null,
        group: null,
        purl: null,
        cpe: null,
        swidTagId: null,
      };
    },
    removeComponent(selected) {
      if (selected.length === 0) return;

      for (let i = 0; i < selected.length; i++) {
        let url = `${this.$api.BASE_URL}/${this.$api.URL_COMPONENT}/${selected[i].uuid}`;
        console.log(url);

        this.tableLoading = true
        axios
          .delete(url, {
            headers: {
              "X-api-key": `${this.$api.api_key}`,
            },
          })
          .then((res) => {
            console.log("delete res =>", res);
            this.tableLoading = false

            const newArr = this.componentData.filter((ele) => {
              return selected.indexOf(ele) === -1;
            });
            this.componentData = newArr;

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
            this.selected = [];
          });
      }

      // let CM_uuid = "deb7da1a-3405-4897-8778-a1924b88df5c";
      // let url = `${this.$api.BASE_URL}/${this.$api.URL_COMPONENT}/${CM_uuid}`;
    },
    formula(val) {
      return val * 100 + "%";
    },
    toSinglePage(val) {
      console.log(val);
    },
    refreshTable(data) {
      this.componentData.push({
        name: data.name,
        version: data.version,
        classifier: data.classifier,
        group: data.group ? data.group : "-",
        internal: data.isInternal,
        license: data.license ? data.license : "-",
        riskScore: data.project.lastInheritedRiskScore
          ? data.project.lastInheritedRiskScore
          : "-",
        vulnerabilities: data.metrics ? data.metrics.vulnerabilities : 0,
        uuid: data.uuid,
        // purl: data.purl ? data.purl : "-",
        // cpe: data.cpe ? data.cpe : "-",
        // swidTagId: data.swidTagId ? data.swidTagId : "-",
      });
    },
    uploadOther() {
      let url = `https://sbomapi.lale.fun/frapi/file-upload`;
      let data = new FormData();
      data.set("file", this.inputFileOther);
      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      axios
        .post(url, data, config)
        .then((res) => {
          this.executeSYFT();
          console.log("upload other res =>", res);
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
          this.modalUploadBomOther = false;
        });
    },
    executeSYFT() {
      let url = `https://sbomapi.lale.fun/frapi/executeSYFT`;

      let data = {
        source: this.inputFileOther.name,
        filename: this.inputFileOther.name + ".json",
      };

      axios
        .post(url, data)
        .then((res) => {
          this.uploadSBOM();
          console.log("executeSYFT res =>", res);
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
          this.modalUploadBomOther = false;
        });
    },
    uploadSBOM() {
      let url = `https://sbomapi.lale.fun/frapi/uploadSBOM`;

      let data = {
        filename: this.inputFileOther.name + ".json",
        uuid: this.uuid,
        apiKey: `${this.$api.api_key}`,
      };

      this.tableLoading = true
      axios
        .post(url, data)
        .then((res) => {
          console.log("uploadSBOM res =>", res);
          this.tableLoading = false
          this.$q.notify({
            message: `已成功上傳`,
            position: "top-right",
            type: "positive",
            color: "positive",
          });

          setTimeout(() => {
            this.reloadPage();
          }, 1000);
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
          this.modalUploadBomOther = false;
        });
    },
    upload() {
      //20221026 Billy
      let PJ_uuid = this.uuid;
      let data = new FormData();

      data.set("project", PJ_uuid);
      data.set("bom", this.inputFile);
      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
          "X-api-key": `${this.$api.api_key}`,
        },
        onUploadProgress: function (event) {
          this.uploadPercentage = parseInt(
            Math.round((event.loaded / event.total) * 100)
          );
        }.bind(this),
      };
      let url = `${this.$api.BASE_URL}/${this.$api.URL_BOM}`;

      this.tableLoading = true
      axios
        .post(url, data, config)
        .then((res) => {
          console.log("upload res => ", res);
          this.tableLoading = false

          this.$q.notify({
            message: `已成功上傳`,
            position: "top-right",
            type: "positive",
            color: "positive",
          });

          setTimeout(() => {
            this.reloadPage();
          }, 1000);
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
      // .finally(() => {
      //   this.modalUploadBom = false;
      // });
    },
    downloadBom(data) {
      //let url = `${this.$api.BASE_URL}/${this.$api.URL_BOM}/cyclonedx/project/${this.uuid}`;
      let PJ_uuid = this.uuid;
      let url = `${this.$api.BASE_URL}/${this.$api.URL_BOM}/cyclonedx/project/${PJ_uuid}`; //20221026 Billy ＨotCode UUID
      //3c1da848-1777-499c-ae36-d61d4e214914
      console.log(url);
      axios
        .request({
          headers: {
            "X-api-key": `${this.$api.api_key}`,
          },
          responseType: "blob",
          url: url,
          method: "get",
          params: {
            format: "json",
            variant: data,
            download: "true",
          },
        })
        .then((res) => {
          console.log("download res =>", res);
          const url = window.URL.createObjectURL(new Blob([res.data]));
          const link = document.createElement("a");
          link.href = url;
          let filename = "bom.json";
          let disposition = res.headers["content-disposition"];
          if (disposition && disposition.indexOf("attachment") !== -1) {
            let filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
            let matches = filenameRegex.exec(disposition);
            if (matches != null && matches[1]) {
              filename = matches[1].replace(/['"]/g, "");
            }
          }
          link.setAttribute("download", filename);
          document.body.appendChild(link);
          link.click();
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
    alert() {
      this.$q.notify({
        message: "寄發通知信成功",
        position: "top-right",
        type: "positive",
        color: "positive",
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        for (let key in this.form_identity) {
          this.form_identity[key] = "";
        }
        this.isNew = true;
      } else {
        this.form_identity = Object.assign({}, item);
        this.component.uuid = item.uuid;
        this.isNew = false;
      }
      this.modalAddCp = true;
    },
    updateComponent() {
      this.modalAddCp = false;
      let url = `${this.$api.BASE_URL}/${this.$api.URL_COMPONENT}`;

      this.tableLoading = true
      axios
        .post(
          url,
          {
            name: this.form_identity.name,
            version: this.form_identity.version,
            classifier: this.form_identity.classifier,
            group: this.form_identity.group,
            purl: this.form_identity.purl,
            cpe: this.form_identity.cpe,
            swidTagId: this.form_identity.swidTagId,
            uuid: this.component.uuid,
            // author: this.form_identity.author,
            // description: this.form_identity.description,
            // license: this.selectedLicense,
            // filename: this.form_identity.filename,
            // copyright: this.form_identity.copyright,
            // md5: this.form_identity.md5,
            // sha1: this.form_identity.sha1,
            // sha256: this.form_identity.sha256,
            // sha512: this.form_identity.sha512,
            // sha3_256: this.form_identity.sha3_256,
            // sha3_512: this.form_identity.sha3_512,
            // notes: this.form_identity.notes,
          },
          {
            headers: {
              "X-api-key": `${this.$api.api_key}`,
            },
          }
        )
        .then((res) => {
          console.log("updateComponent res =>", res);
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
          this.getComponentData();
        });
    },
    getComponentData() {
      let PJ_uuid = this.uuid;
      let componentUrl = `${this.$api.BASE_URL}/${this.$api.URL_COMPONENT}/project/${PJ_uuid}`;
      console.log("componentUrl =>", componentUrl);
      this.tableLoading = true
      axios
        .get(componentUrl, {
          headers: {
            "X-api-key": `${this.$api.api_key}`,
          },
        })
        .then((res) => {
          console.log("component res =>", res, res.data.length);
          this.tableLoading = false
          if (res.status === 200) {
            const arr = res.data.map((item) => {
              return {
                name: item.name,
                version: item.version,
                group: item.group ? item.group : null,
                internal: item.isInternal,
                license: item.license ? item.license : null,
                riskScore: item.lastInheritedRiskScore,
                vulnerabilities: item.metrics
                  ? item.metrics.vulnerabilities
                  : null,
                uuid: item.uuid,
              };
            });
            this.componentData = arr;
            EventBus.$emit("passComponentCount", res.data.length);
          }
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
    this.getComponentData();
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
      dark
      :data="componentData"
      :columns="componentColumns"
      row-key="name"
      :filter="filter"
      :loading="tableLoading"
      :visible-columns="visibleComponentColumns"
      selection="multiple"
      :selected.sync="selected"
    >
      <template v-slot:top>
        <q-btn
          class="q-mr-sm"
          outline
          label="+ Add Component"
          @click="openModal(true)"
        />
        <q-btn
          class="q-mr-sm"
          outline
          label="- Remove Component"
          @click="removeComponent(selected)"
        />
        <q-btn
          class="q-mr-sm"
          outline
          label="Upload BOM"
          @click="modalUploadBom = true"
        />
        <q-btn
          class="q-mr-sm"
          outline
          label="Download BOM"
          @click="downloadBom('inventory')"
          href="#"
        />
        <q-btn
          class="q-mr-sm"
          outline
          label="Generating SBOM"
          @click="modalUploadBomOther = true"
        />
        <q-btn class="q-mr-sm" outline label="Alert" @click="alert" />
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
            v-model="visibleComponentColumns"
            multiple
            dense
            options-dense
            :display-value="$q.lang.table.columns"
            emit-value
            map-options
            :options="componentColumns"
            option-value="field"
            options-selected-class="text-warning"
            style="min-width: 50px"
          />
        </div>
      </template>
      <template v-slot:header="props">
        <q-tr :props="props" no-hover>
          <q-th align="left">Option</q-th>
          <q-th align="left">
            <q-checkbox dark v-model="props.selected" />
          </q-th>
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
            <q-checkbox dark v-model="props.selected" />
          </q-td>
          <q-td>
            <div class="cursor-pointer" @click="toSinglePage(props.row.name)">
              {{ props.row.name }}
            </div>
          </q-td>
          <q-td v-if="visibleComponentColumns.includes('version')">
            {{ props.row.version }}
          </q-td>
          <q-td v-if="visibleComponentColumns.includes('group')">
            {{ props.row.group }}
          </q-td>
          <q-td v-if="visibleComponentColumns.includes('internal')">
            <q-checkbox dark v-model="props.row.internal" />
            <!-- {{ props.row.internal }} -->
          </q-td>
          <q-td v-if="visibleComponentColumns.includes('license')">
            {{ props.row.license }}
          </q-td>
          <q-td v-if="visibleComponentColumns.includes('riskScore')">
            {{ props.row.riskScore }}
          </q-td>
          <q-td v-if="visibleComponentColumns.includes('vulnerabilities')">
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

    <!-- dialog-新增、修改組件 -->
    <q-dialog v-model="modalAddCp">
      <div style="background-color: #fff; width: 800px; max-width: 80%">
        <div class="q-pa-md">
          <div class="text-h6">Component Details</div>
        </div>
        <div class="q-px-md">
          <q-tabs
            v-model="tabAddCp"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="left"
            narrow-indicator
          >
            <q-tab name="identity" label="Identity" />
            <q-tab name="extended" label="Extended" />
          </q-tabs>
          <q-tab-panels v-model="tabAddCp" animated>
            <q-tab-panel name="identity">
              <div class="q-mt-md q-mb-lg">
                Component Name<span class="required">＊</span>
                <div class="flex items-center">
                  <q-input
                    ref="name"
                    style="flex: 1 0 0"
                    outlined
                    dense
                    v-model="form_identity['name']"
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
                Version<span class="required">＊</span>
                <div class="flex items-center">
                  <q-input
                    ref="version"
                    style="flex: 1 0 0"
                    outlined
                    dense
                    v-model="form_identity['version']"
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
                Classifier<span class="required">＊</span>
                <div class="flex items-center">
                  <q-select
                    ref="classifier"
                    style="flex: 1 0 0"
                    outlined
                    dense
                    v-model="form_identity['classifier']"
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
                Namespace / group / vendor
                <div class="flex items-center">
                  <q-input
                    style="flex: 1 0 0"
                    outlined
                    dense
                    v-model="form_identity['group']"
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
                Package URL (PURL)
                <div class="flex items-center">
                  <q-input
                    style="flex: 1 0 0"
                    outlined
                    dense
                    v-model="form_identity['purl']"
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
                Common Platform Enumeration (CPE)
                <div class="flex items-center">
                  <q-input
                    style="flex: 1 0 0"
                    outlined
                    dense
                    v-model="form_identity['cpe']"
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
                SWID Tag ID
                <div class="flex items-center">
                  <q-input
                    style="flex: 1 0 0"
                    outlined
                    dense
                    v-model="form_identity['swidTagId']"
                    class="q-mr-md"
                  />
                  <q-icon name="info" size="20px">
                    <q-tooltip>
                      The name of the component as provided by the supplier
                    </q-tooltip>
                  </q-icon>
                </div>
              </div>
              <div
                class="q-mb-lg"
                v-if="form_identity['classifier'] === 'Device'"
              >
                New Device
                <div class="flex items-center">
                  <q-input
                    style="flex: 1 0 0"
                    outlined
                    dense
                    v-model="new_form['testDevice']"
                    class="q-mr-md"
                  />
                  <q-icon name="info" size="20px">
                    <q-tooltip>
                      The name of the component as provided by the supplier
                    </q-tooltip>
                  </q-icon>
                </div>
              </div>
            </q-tab-panel>
            <q-tab-panel name="extended">
              <div class="q-mt-md q-mb-lg">
                File Name<span class="required">＊</span>
                <div class="flex items-center">
                  <q-input
                    ref="name"
                    style="flex: 1 0 0"
                    outlined
                    dense
                    v-model="form_extended['filename']"
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
              <div class="q-mt-md q-mb-lg">
                License
                <div class="flex items-center">
                  <q-input
                    ref="name"
                    style="flex: 1 0 0"
                    outlined
                    dense
                    v-model="form_extended['license']"
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
                  v-model="form_extended['description']"
                />
              </div>
              <!-- <div
                class="q-mb-lg"
                v-if="form_identity['classifier'] === 'Device'"
              >
                New Device
                <div class="flex items-center">
                  <q-input
                    style="flex: 1 0 0"
                    outlined
                    dense
                    v-model="new_form['testDevice']"
                    class="q-mr-md"
                  />
                  <q-icon name="info" size="20px">
                    <q-tooltip>
                      The name of the component as provided by the supplier
                    </q-tooltip>
                  </q-icon>
                </div>
              </div> -->
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
            <q-btn
              v-if="isNew === true"
              label="create"
              color="primary"
              @click="createComponent"
            />
            <q-btn
              v-if="isNew === false"
              label="update"
              color="primary"
              @click="updateComponent"
            />
          </div>
        </div>
      </div>
    </q-dialog>

    <!-- dialog-上傳 BOM -->
    <q-dialog v-model="modalUploadBom" :position="position">
      <div style="background-color: #fff; width: 600px; max-width: 80%">
        <q-linear-progress :value="uploadPercentage" class="q-mt-md" />
        <div class="q-pa-md">
          <div class="text-h6">Upload BOM</div>
        </div>
        <div class="q-px-md">
          <q-input
            v-model="inputFile"
            @input="
              (val) => {
                inputFile = val[0];
              }
            "
            type="file"
          />
          <div class="q-py-md flex justify-end">
            <q-btn
              v-close-popup
              label="cancel"
              color="white"
              text-color="black"
              class="q-mr-lg"
            />
            <q-btn
              label="Reset"
              color="white"
              text-color="black"
              class="q-mr-lg"
              @click="inputFile = null"
            />
            <q-btn label="Upload" color="primary" @click="upload" />
          </div>
        </div>
      </div>
    </q-dialog>

    <!-- dialog-上傳 Other BOM -->
    <q-dialog v-model="modalUploadBomOther" :position="position">
      <div style="background-color: #fff; width: 600px; max-width: 80%">
        <div class="q-pa-md">
          <div class="text-h6">Upload BOM2</div>
        </div>
        <div class="q-px-md">
          <q-input
            v-model="inputFileOther"
            @input="
              (val) => {
                inputFileOther = val[0];
              }
            "
            type="file"
          />

          <div class="q-py-md flex justify-end">
            <q-btn
              v-close-popup
              label="cancel"
              color="white"
              text-color="black"
              class="q-mr-lg"
            />
            <q-btn
              label="Reset"
              color="white"
              text-color="black"
              class="q-mr-lg"
              @click="inputFileOther = null"
            />
            <q-btn label="Upload" color="primary" @click="uploadOther" />
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