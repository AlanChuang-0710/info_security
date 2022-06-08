<script>
export default {
  name: "ListItem",
  data() {
    return {
      modal: false,
      data: [
        {
          type: "台積電供應商安全評估",
          btnColor: "green-4",
          number: 95,
          detail: [
            {
              title: "認證與風險評估",
              num: 100,
              color: "red",
              content: [
                {
                  context: "意識培訓和推廣",
                  color: "red",
                },
                {
                  context: "安全預防演練",
                  color: "green",
                },
              ],
            },
            {
              title: "資產管理和實體安全",
              num: 45,
              color: "green",
              content: [
                {
                  context: "資產管理",
                  color: "green",
                },
                {
                  context: "實體安全",
                  color: "green",
                },
              ],
            },
            {
              title: "網路安全事件檢測與回應",
              num: 66,
              color: "orange",
              content: [
                {
                  context: "監控中心維運",
                  color: "orange",
                },
                {
                  context: "事件回應管理",
                  color: "green",
                },
              ],
            },
            {
              title: "系統開發與應用安全",
              num: 10,
              color: "green",
              content: [
                {
                  context: "AP 安全指引",
                  color: "",
                },
                {
                  context: "安全碼掃描",
                  color: "",
                },
              ],
            },
            {
              title: "組織政策與人力資源安全",
              num: 75,
              color: "green",
              content: [
                {
                  context: "安全團隊安排/政策準備",
                  color: "",
                },
                {
                  context: "風險評估管理",
                  color: "",
                },
                {
                  context: "就業背景調查/保密協議",
                  color: "",
                },
                {
                  context: "培訓和意識提升",
                  color: "",
                },
                {
                  context: "釣魚郵件測試",
                  color: "",
                },
              ],
            },
            {
              title: "計算機操作與資訊管理",
              num: 98,
              color: "green",
              content: [
                {
                  context: "BYOD安全控制",
                  color: "",
                },
                {
                  context: "IT資產管理/安全加固",
                  color: "",
                },
                {
                  context: "補丁管理/病毒防護",
                  color: "",
                },
                {
                  context: "資料與儲存媒體保護",
                  color: "",
                },
                {
                  context: "存取控制/遠端存取管理",
                  color: "",
                },
              ],
            },
            {
              title: "識別與存取管理",
              num: 75,
              color: "green",
              content: [
                {
                  context: "身份驗證與授權",
                  color: "",
                },
                {
                  context: "帳戶/密碼政策",
                  color: "",
                },
                {
                  context: "特權帳號管理",
                  color: "",
                },
                {
                  context: "非組織用戶管理",
                  color: "",
                },
              ],
            },
            {
              title: "網路安全與變更管理",
              num: 98,
              color: "green",
              content: [
                {
                  context: "邊界保護 (DMZ)",
                  color: "",
                },
                {
                  context: "網路區隔 (Intranet)",
                  color: "",
                },
                {
                  context: "網際網路存取保護",
                  color: "",
                },
                {
                  context: "電子郵件保護",
                  color: "",
                },
                {
                  context: "雲端安全",
                  color: "",
                },
              ],
            },
          ],
        },
        {
          type: "TSMC Self-Assessment",
          btnColor: "green",
          number: 63,
          detail: [
            {
              title: "資安維運小組建立及運作",
              num: 100,
              color: "red",
              content: [
                {
                  context:
                    "公司有設置負責並推動全公司資訊安全管理(含客戶機密資訊保護)之專責單位或主管",
                  color: "red",
                },
                {
                  context:
                    "該專責單位或主管會經常性依據資安威脅或風險評估結果制定資訊安全政策與管理規範，並採取對策(含教育訓練, 管制措施, 遵循度檢查, 違規偵測與處置 以及資安事件緊急應變等)以強化公司資訊安全",
                  color: "green",
                },
              ],
            },
            {
              title: "存取管理與權限管理",
              num: 45,
              color: "green",
              content: [
                {
                  context:
                    "該專責單位或主管會經常性依據資安威脅或風險評估結果制定資訊安全政策與管理規範，並採取對策(含教育訓練, 管制措施, 遵循度檢查, 違規偵測與處置 以及資安事件緊急應變等)以強化公司資訊安全",
                  color: "green",
                },
                {
                  context:
                    "存取公司內部資訊系統須通過使用者身分認證 (Authentication) 例如: 必須登入帳號密碼",
                  color: "green",
                },
                {
                  context:
                    "帳號與權限的申請與變更須有審核流程確保符合必須存取權限 (Need-to-Access) 原則，當人員組織業務功能異動時須重新審核並更新, 若無異動也須定期檢討與更新 (至少每年一次)  (必答/4選1)",
                  color: "green",
                },
              ],
            },
            {
              title: "事務機控管",
              num: 66,
              color: "green",
              content: [
                {
                  context:
                    "公司針對印表機/影印機/傳真機等事務機設備及其它資訊複製或外傳裝置制定管理規範，且各項設備均有管理者。",
                  color: "green",
                },
              ],
            },
            {
              title: "人資及進出管制",
              num: 45,
              color: "green",
              content: [{}],
            },
            {
              title: "實體環境管制",
              num: 66,
              color: "green",
              content: [{}],
            },
            {
              title: "設備管制",
              num: 45,
              color: "green",
              content: [{}],
            },
            {
              title: "遠端連線管制",
              num: 66,
              color: "green",
              content: [{}],
            },
            {
              title: "網路管制",
              num: 45,
              color: "green",
              content: [{}],
            },
            {
              title: "分包商管理",
              num: 66,
              color: "green",
              content: [{}],
            },
            {
              title: "機敏資料保護",
              num: 45,
              color: "green",
              content: [{}],
            },
            {
              title: "資訊安全事故管理",
              num: 66,
              color: "green",
              content: [{}],
            },
            {
              title: "專案管理作業",
              num: 45,
              color: "green",
              content: [{}],
            },
          ],
        },
        {
          type: "上市上櫃公司資通安全管控指引",
          btnColor: "green",
          number: 75,
          detail: [
            {
              title: "資通安全政策及推動組織",
              num: 100,
              color: "green",
              content: [
                {
                  context:
                    "成立資通安全推動組織，組織配置適當之人力、物力與財力資源，並指派適當人員擔任資安專責主管及資安專責人員，以負責推動、協調監督及審查資通安全管理事項。",
                  color: "green",
                },
                {
                  context:
                    "訂定資通安全政策及目標，由副總經理以上主管核定，並定期檢視政策及目標且有效傳達員工其重要性。",
                  color: "green",
                },
              ],
            },
            {
              title: "核心業務及其重要性",
              num: 45,
              color: "green",
              content: [
                {
                  context: "鑑別並定期檢視公司之核心業務及應保護之機敏性資料。",
                  color: "green",
                },
              ],
            },
            {
              title: "資通系統盤點及風險評估",
              num: 66,
              color: "red",
              content: [
                {
                  context:
                    "定期盤點資通系統，並建立核心系統資訊資產清冊，以鑑別其資訊資產價值。",
                  color: "green",
                },
                {
                  context:
                    "定期辦理資安風險評估，就核心業務及核心資通系統鑑別其可能遭遇之資安風險，分析其喪失機密性、完整性及可用性之衝擊，並執行對應之資通安全管理面或技術面控制措施等。",
                  color: "red",
                },
              ],
            },
            {
              title: "資通系統發展及維護安全r",
              num: 10,
              color: "green",
              content: [{}],
            },
            {
              title: "資通安全防護及控制措施",
              num: 75,
              color: "green",
              content: [{}],
            },
            {
              title: "資通系統或資通服務委外辦理之管理措施",
              num: 66,
              color: "green",
              content: [{}],
            },
            {
              title: "資通安全事件通報應變及情資評估因應",
              num: 10,
              color: "green",
              content: [{}],
            },
            {
              title: "資通安全之持續精進及績效管理機制",
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
          <q-card style="background-color: #5b5b5b;">
            <q-card-section>
              <ul class="text-dark">
                <li
                  v-for="(sector, id) in ele.content"
                  :key="id"
                  class="q-mb-sm text-white"
                >
                  <div class="flex items-start">
                    <div
                      @click="modal = true"
                      style="width: 92%"
                      class="cursor-pointer"
                    >
                      {{ sector.context }}
                    </div>
                    <div style="width: 8%">
                      <div
                        class="circle-2 q-ml-md"
                        :style="`background-color: ${sector.color}`"
                      ></div>
                    </div>
                  </div>
                </li>
              </ul>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </div>
    </q-card-section>
    <q-dialog v-model="modal">
      <q-card style="width: 450px; max-width: 450px; background-color: #5b5b5b;">
        <q-card-section class="flex column justify-center items-center text-white">
          <q-btn round color="negative" icon="error_outline" class="q-mb-sm" />
          <div class="">
            <div class="text-h5 text-center q-mt-sm q-mb-xs">
              差異項目說明
            </div>
            <div class="text-caption">認證與風險評估 - 意識培訓和推廣</div>
          </div>
        </q-card-section>
        <q-card-section class="text-white">
          <div class="q-mb-sm">
            <div class="text-weight-bold">說明：</div>
            <p class="q-mb-none">
              1.檢視安全意識推廣教育訓練紀錄以及上課課綱，發現上課學員涵蓋率不足
              80%。 上課課綱缺乏社交工程（如網路釣魚）防範的章節。
            </p>
          </div>
          <hr>
          <div class="q-mt-md">
            <div class="text-weight-bold">建議改善方式：</div>
            <p class="q-mb-none" >
              1.整理缺席學員名單，安排於本季內補上課程。
            </p>
            <p>2.追加社交工程</p>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
<style lang="scss" scoped>
ul {
  padding-inline-start: 40px;
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
