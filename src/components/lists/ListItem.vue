<script>
export default {
  name: "ListItem",
  data() {
    return {
      modal: false,
      statusColor: "",
      title: "",
      note: [],
      suggestion: [],
      dangerPanel: {
        title: "差異項目說明",
        note: ['1.檢視安全意識推廣教育訓練紀錄以及上課課綱，發現上課學員涵蓋率不足80%。 上課課綱缺乏社交工程（如網路釣魚）防範的章節。'],
        suggestion: ['1.整理缺席學員名單，安排於本季內補上課程。','2.追加社交工程'],
      },
      warningPanel: {
        title: "安全預防演練",
        note: ['1.回應時效未制定。', '2.未按照 SOP 執行，有部分案件缺漏通報步驟，未及時發現。', '3.逾期未結案案件無稽催機制。'],
        suggestion: ['1.根據資安事件分類與嚴重程度，制定回應時效。', '2.在導入 SOAR 流程通報模組，填入回應時效，透過系統機催。', '3.在事件回應關卡制定結束條件檢查。通報紀錄未完成確認者，無法跳到下一關卡。']
      },

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
                  color: "green",
                },
                {
                  context: "安全碼掃描",
                  color: "green",
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
                  color: "green",
                },
                {
                  context: "風險評估管理",
                  color: "green",
                },
                {
                  context: "就業背景調查/保密協議",
                  color: "green",
                },
                {
                  context: "培訓和意識提升",
                  color: "green",
                },
                {
                  context: "釣魚郵件測試",
                  color: "green",
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
                  color: "green",
                },
                {
                  context: "IT資產管理/安全加固",
                  color: "green",
                },
                {
                  context: "補丁管理/病毒防護",
                  color: "green",
                },
                {
                  context: "資料與儲存媒體保護",
                  color: "green",
                },
                {
                  context: "存取控制/遠端存取管理",
                  color: "green",
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
                  color: "green",
                },
                {
                  context: "帳戶/密碼政策",
                  color: "green",
                },
                {
                  context: "特權帳號管理",
                  color: "green",
                },
                {
                  context: "非組織用戶管理",
                  color: "green",
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
                  color: "green",
                },
                {
                  context: "網路區隔 (Intranet)",
                  color: "green",
                },
                {
                  context: "網際網路存取保護",
                  color: "green",
                },
                {
                  context: "電子郵件保護",
                  color: "green",
                },
                {
                  context: "雲端安全",
                  color: "green",
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
                {
                  context:
                    "公司內各單位(或組織)內亦有設置有資訊安全之專責或兼職人員，並與公司最高資訊安全管理之專責單位或主管具有從屬或聯繫溝通之管道",
                  color: "green",
                },
                {
                  context:
                    "公司有制訂資訊安全政策與相關之管理規範，且其範圍包含客戶機密資訊保護、供應商、或下包商之資訊安全管理規範",
                  color: "green",
                },
                {
                  context:
                    "公司會定期檢視並根據實際狀況修訂資訊安全政策與相關之管理規範、進行教育訓練、或政策規範宣導",
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
                    "員工在離職後會立即予以移除其資訊存取權限、及門禁等所有實體安全權限。",
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
                {
                  context:
                    "公司內部資訊系統須移除預設密碼 / 管控無須密碼的帳號",
                  color: "green",
                },
                {
                  context:
                    "公司依照帳號類型定義並要求密碼管理政策 : 密碼長度 >= 12 個字元",
                  color: "green",
                },
                {
                  context:
                    "公司依照帳號類型定義並要求密碼管理政策 : 密碼複雜度必須包含下列 4 種字元中的 3 種：英文大寫字元（A 到Z）、英文小寫 字元（a 到z）、10 個基本數字（0 到9）、以及非英文字母字元（例 如!、 $、#、%） (必答/4選1)",
                  color: "green",
                },
                {
                  context:
                    "公司依照帳號類型定義並要求密碼管理政策 : 需定期更改密碼 ",
                  color: "green",
                },
                {
                  context:
                    "公司依照帳號類型定義並要求密碼管理政策 : 1. 新更換的密碼不得與最近5次重複、2. 記錄帳號'失敗的嘗試登入次數'系統日誌，並設定帳號封鎖的條件 (例如:重複失敗 5次)、3. 特權帳號 / 高權限帳號 (Privilege account)採用多因子認證(Multi-factor)或動態密碼(OTP)或指紋辨識 ( (必答/4選1)",
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
                {
                  context:
                    "承上題，所有事務機設備及其它資訊複製或外傳裝置的使用行為均被公司記錄與監控，同時對違反規定的行為進行調查與違規處置。",
                  color: "green",
                },
              ],
            },
            {
              title: "人資及進出管制",
              num: 45,
              color: "green",
              content: [
                {
                  context:
                    "員工在到職前公司均會進行學歷驗證、經歷驗證、或背景調查。",
                  color: "green",
                },
                {
                  context:
                    "員工在到職時均須簽署保密合約(NDA)，且其範圍包含客戶與TSMC機密資訊保護",
                  color: "green",
                },
                {
                  context:
                    "在職員工須定期接受資訊安全教育訓練並留下紀錄，而資訊安全教育訓練內容包含客戶與TSMC機密資訊保護",
                  color: "green",
                },
                {
                  context:
                    "當在職員工轉換單位或工作進行調整時，會根據工作需求立即予以移除/調整資訊存取權限、或繳回所持有之資訊資產",
                  color: "green",
                },
                {
                  context:
                    "員工在離職前須將所持有的公司資產(含客戶與TSMC機密資訊)繳回公司，此外公司亦會提醒其離職後的保密責任與義務",
                  color: "green",
                },
              ],
            },
            {
              title: "實體環境管制",
              num: 66,
              color: "green",
              content: [
                {
                  context:
                    "公司周界設置實體門禁、崗哨、或檢查點以管理開放授權人員進入。",
                  color: "green",
                },
                {
                  context:
                    "公司具有區分進入公司內人員身份之識別證，包含員工、客戶、 廠商、或來賓訪客等。",
                  color: "green",
                },
                {
                  context:
                    "各種識別證具備相對應之管理機制及紀錄，並對需經常進入人員配發具個人相片之識別證。",
                  color: "green",
                },
                {
                  context:
                    "公司內之工作或存有重要資訊資產之場域均設有門禁管理(含防止尾隨)機制，且只允許事先被授權人員才能進入。",
                  color: "green",
                },
                {
                  context:
                    "其門禁管理具有個人身份驗證(如刷個人識別證或生物辨識)及防止尾隨機制，且所有門禁進出紀錄均會予以保存一段時間、管理單位並會定期檢視被授權人員名單與權限。",
                  color: "green",
                },
                {
                  context:
                    "公司內的出入口與重要區域均設置有CCTV，且有專人負責維護與管理。",
                  color: "green",
                },
                {
                  context:
                    "CCTV拍攝的影像均可清楚辨識人臉，且CCTV影像會儲存至少一個月以上。",
                  color: "green",
                },
                {
                  context:
                    "禁止未經授權之攝錄影裝置(如私人照相手機)進入公司之工作或存有重要資訊資產之場域，且公司會執行檢查，並對違規者進行處置。",
                  color: "green",
                },
              ],
            },
            {
              title: "設備管制",
              num: 45,
              color: "green",
              content: [
                {
                  context:
                    "針對非公司所擁有或授權之資訊儲存/複製/傳送裝置或媒體(如私人智慧型手機, 電腦, 硬碟, USB, 記憶卡, 燒錄機, 印表機,  傳真機等)訂有管制措施，且公司會執行檢查，並對違規者進行處置。",
                  color: "green",
                },
                {
                  context:
                    "建立公司電腦設備資產清單並定期維護更新,作為相關資安控管改善依據及盤點 ",
                  color: "green",
                },
                {
                  context:
                    "公司電腦老舊作業系統 (End of Support) 都有進行升級/汰換，可持續取得安全性更新(Security patch)，EOS電腦若無升級/汰換請說明原因及風險管控方法或執行計畫",
                  color: "green",
                },
                {
                  context:
                    "關鍵安全性更新(Critical Patches, CVSS V3 >=9.0) : (2) 辦公室電腦須在30天內更新完成 ",
                  color: "green",
                },
                {
                  context:
                    "關鍵安全性更新(Critical Patches, CVSS V3 >=9.0) : (3) 資料中心伺服器 (Data center server) 須在60天內更新完成",
                  color: "green",
                },
                {
                  context:
                    "高風險安全性更新(High-Risk Patches, CVSS V3 <9.0) : (2) 辦公室電腦須在3個月內更新完成",
                  color: "green",
                },
                {
                  context:
                    "高風險安全性更新(High-Risk Patches, CVSS V3 <9.0) : (3) 資料中心伺服器 (Data center server) 須在6個月內更新完成 ",
                  color: "green",
                },
                {
                  context: "公司電腦系統有安裝防毒軟體並持續更新版本與病毒碼 ",
                  color: "green",
                },
                {
                  context:
                    "公司電腦依照電腦屬性建立安全保護措施，包含 : 限縮一般使用者使用系統管理者權限(Local Administrator) ",
                  color: "green",
                },
                {
                  context:
                    "公司電腦依照電腦屬性建立安全保護措施，包含 : 禁用可攜式儲存媒體 (例如: 隨身硬碟、光碟片、記憶卡) ",
                  color: "green",
                },
                {
                  context:
                    "公司使用外部視訊會議的服務 (例如: WebEx、Zoom)須有安全管控 : 限制只能使用有安全更新的合法軟體並定期更新 (無外部開會或溝通需求之廠商不適用)",
                  color: "green",
                },
              ],
            },
            {
              title: "遠端連線管制",
              num: 66,
              color: "green",
              content: [
                {
                  context:
                    "限制員工在外透過遠端連線至公司內部網路須符合資安控管 : 1. 只有必要人員執行必要功能並經過授權可遠端連線回公司 (例如: 緊急系統異常處理)  2. 規定必須使用公司電腦, 3. VPN安全連線, 4. 多因子認證(Multi-factor), 5. 禁止存取/檢視非任務所需的重要機密資料,  6. 具備稽核與追溯的監控機制 ",
                  color: "green",
                },
              ],
            },
            {
              title: "網路管制",
              num: 45,
              color: "green",
              content: [
                {
                  context:
                    "公司電腦作業系統/對外網路(Perimeter & DMZ) 相關伺服器與應用程式/公務智慧型手機須依照資安風險進行安全性更新(Security patch): ",
                  color: "green",
                },
                {
                  context:
                    "關鍵安全性更新(Critical Patches, CVSS V3 >=9.0) : (1) 對外部網路提供服務的系統 (Internet-facing system) 須在7天內更新完成 ",
                  color: "green",
                },
                {
                  context:
                    "高風險安全性更新(High-Risk Patches, CVSS V3 <9.0) : (1) 對外部網路提供服務的系統 (Internet-facing system) 須在3個月內更新完成 ",
                  color: "green",
                },
                {
                  context:
                    "公司的對外網路(Perimeter & DMZ) 須有安全保護機制，包含 :  防火牆, Firewall ",
                  color: "green",
                },
                {
                  context:
                    "公司的對外網路(Perimeter & DMZ) 相關伺服器與應用程式須有安全防護措施 : 定期進行弱點掃描(Vulnerability scan)並修復漏洞 ",
                  color: "green",
                },
                {
                  context:
                    "公司的對外網路(Perimeter & DMZ) 相關伺服器與應用程式須有安全防護措施 : Critical Issue (CVSS V3 >=9.0) 須在7天內修補完成 ",
                  color: "green",
                },
                {
                  context:
                    "公司的對外網路(Perimeter & DMZ) 相關伺服器與應用程式須有安全防護措施 : High Risk Issue (CVSS V3 >=7.0 and <9.0) 須在3個月內修補完成",
                  color: "green",
                },
                {
                  context:
                    "公司對外提供的應用程式/網頁/服務在上線(New release)/改版時，有對應的設計審核(Design review)、檢核清單(Checklist)及變更管理的程序(須經主管簽核) (無對外應用服務之廠商不適用)",
                  color: "green",
                },
                {
                  context:
                    "公司內部對於網際網路存取 (Internet access) 須有安全管控機制，包含 :  透過代理伺服器(Proxy) 對惡意網站進行黑名單控管 ",
                  color: "green",
                },
                {
                  context:
                    "公司內部對於網際網路存取 (Internet access) 須有安全管控機制，包含 :  檔案下載掃毒",
                  color: "green",
                },
                {
                  context:
                    "公司內部對於網際網路存取 (Internet access) 須有安全管控機制，包含 :  限制檔案/資料上傳",
                  color: "green",
                },
                {
                  context:
                    "公司內部對於網際網路存取 (Internet access) 須有安全管控機制，包含 :  使用有定期安全更新的瀏覽器，並啟用瀏覽器的安全設定",
                  color: "green",
                },
                {
                  context:
                    "使用公司自建電子郵件系統, 並且設定有掃毒功能, 垃圾信件過濾及釣魚郵件偵測的資安防範",
                  color: "green",
                },
              ],
            },
            {
              title: "分包商管理",
              num: 66,
              color: "green",
              content: [
                {
                  context:
                    "公司會經常對供應鏈、或下包商的資訊安全管理進行遵循度稽查。",
                  color: "green",
                },
              ],
            },
            {
              title: "機敏資料保護",
              num: 45,
              color: "green",
              content: [
                {
                  context:
                    "針對公司(含客戶與TSMC)資訊會依據其重要性定義相對應之機密等級，並要求在檔案/文件上清楚標示機密等級。 ",
                  color: "green",
                },
                {
                  context:
                    "公司針對不同機密等級制定相對應的控管機制，並執行稽查且對違反規定的行為進行調查與違規處置。",
                  color: "green",
                },
                {
                  context:
                    "公司(含客戶與TSMC)機密資訊只能儲存於公司所管理的設備或裝置，且各項設備與裝置均有專責保管人並妥善保護以防止未授權存取或遺失。",
                  color: "green",
                },
                {
                  context:
                    "只有被授權人員才可存取或接觸公司(含客戶與TSMC)機密資訊，且存取時須經過有效之驗證(Authentication)機制。",
                  color: "green",
                },
                {
                  context:
                    "完整之授權人員清單、且有個別存取紀錄、管理單位並會經常檢視及根據Need-to-Know調整被授權人員清單。",
                  color: "green",
                },
                {
                  context:
                    "公司會監控資訊異常存取之行為、且對違反規定的人員進行調查與違規處置。 ",
                  color: "green",
                },
                {
                  context:
                    "公司會有效隔離儲存TSMC與其他客戶的資料，並根據Need-to-Know原則採取保護措施以防止未授權存取或揭露。",
                  color: "green",
                },
                {
                  context:
                    "公司對於將公司(含客戶與TSMC)機密資訊外傳(含透過eMail, FTP, Internet…等)訂有相關規範與管制措施。",
                  color: "green",
                },
                {
                  context:
                    "僅有被授權人員才可將公司(含客戶與TSMC)機密資訊外傳，而所有外傳行為公司均會留下完整紀錄，並對違反規定的人員進行調查與違規處置。",
                  color: "green",
                },
                {
                  context:
                    "公司針對機密資訊(含客戶與TSMC)資產(如實體文件, 光碟...等)的攜出制定管理規範與程序，且只有被授權人員才可攜出公司機密資訊資產，並留有紀錄。",
                  color: "green",
                },
                {
                  context:
                    "針對所有機密資訊資產攜出的行為公司會予以檢查或監控，同時對違反規定的行為進行調查與違規處置。",
                  color: "green",
                },
                {
                  context:
                    "針對不再需要或使用的機密資訊資產或文件制定有效的報廢或銷毀程序，以防止機密資訊外流。",
                  color: "green",
                },
              ],
            },
            {
              title: "資訊安全事故管理",
              num: 66,
              color: "green",
              content: [
                {
                  context:
                    "制訂實體安全事件處置之標準作業程序(SOP)，且所有實體安全事件與處置均會留下紀錄。",
                  color: "green",
                },
                {
                  context:
                    "公司有資安維運小組，負責資安事件偵測與處理 (含病毒感染、非法入侵、重要資料外洩、內部人員資訊異常存取)",
                  color: "green",
                },
                {
                  context:
                    "建立資安事件(含病毒感染、非法入侵、重要資料外洩及資安相關系統異常)之通報及處理程序，重大資安事件在 24 小時內通知受影響的客戶",
                  color: "green",
                },
                {
                  context:
                    "公司有制訂資訊安全事件處置之標準作業程序(SOP)，且所有資訊安全事件與處置均會留下完整紀錄。",
                  color: "green",
                },
                {
                  context:
                    "公司有設置監控或檢查機制以偵測人員或系統對機密資訊管理的異常或洩密行為，並對違反公司機密資訊安全政策與相關規範的人員進行調查與違規處置。",
                  color: "green",
                },
                {
                  context:
                    "當發生的資訊安全事件與客戶有關時，公司會主動且立即通知客戶。",
                  color: "green",
                },
              ],
            },
            {
              title: "專案管理作業",
              num: 45,
              color: "green",
              content: [
                {
                  context:
                    "公司內部針對特定客戶(含TSMC)或專案會以暱稱(Code name)取代真實名稱，並要求在一般會議, 溝通或報告中只能使用暱稱，且只有少數特定人員才知道該暱稱(Code name)所指的對象。",
                  color: "green",
                },
                {
                  context:
                    "公司有建立僅服務TSMC之專屬團隊，並與服務其他客戶之團隊在工作與資訊存取上有明顯區隔。",
                  color: "green",
                },
                {
                  context:
                    "公司所有重要原物料與成品/半成品(含客戶與TSMC)均有專責管理人員。 (無客戶與TSMC的成品/半成品之廠商不適用)",
                  color: "green",
                },
                {
                  context:
                    "公司具管理機制以確保所有重要原物料與成品/半成品(含客戶與TSMC)帳料相符，並定期盤點，且採取保護措施防止遺失或未授權存取。(無客戶與TSMC的成品/半成品之廠商不適用)",
                  color: "green",
                },
                {
                  context:
                    "承上題，所有成品或半成品的處理過程與流向均留有紀錄可被追蹤，且公司可應客戶或TSMC要求在一天內提供所指定的成品或半成品之紀錄與流向。 (無客戶與TSMC的成品/半成品之廠商不適用)",
                  color: "green",
                },
                {
                  context:
                    "公司針對成品或半成品(含客戶與TSMC)的報廢制定有管理機制與程序，且保護報廢過程的安全性並留下完整紀錄。 (無客戶與TSMC的成品/半成品之廠商不適用)",
                  color: "green",
                },
                {
                  context:
                    "公司針對來自TSMC之成品或半成品建立專屬之儲存空間，並具有效管理機制以防止未授權人員取得或接觸。 (無客戶與TSMC的成品/半成品之廠商不適用)",
                  color: "green",
                },
                {
                  context:
                    "公司針對需委外處理之重要之成品/半成品(含客戶與TSMC)，會訂有完整之供應鏈或下包商管理規範，並進行稽查。 (無客戶與TSMC的成品/半成品之廠商不適用)",
                  color: "green",
                },
              ],
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
                {
                  context:
                    "訂定資通安全作業程序，包含核心業務及其重要性、資通系統盤點及風險評估、資通系統發展及維護安全、資通安全防護及控制措施、資通系統或資通服務委外辦理之管理措施、資通安全事件通報應變及情資評估因應、資通安全之持續精進及績效管理機制等。",
                  color: "green",
                },
                {
                  context:
                    "所有使用資訊系統之人員，每年接受資訊安全宣導課程，另負責資訊安全之主管及人員，每年接受資訊安全專業課程訓練。",
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
                {
                  context: "鑑別應遵守之法令及契約要求。",
                  color: "green",
                },
                {
                  context:
                    "鑑別可能造成營運中斷事件之發生機率及影響程度，並明確訂定核心業務之復原時間目標(RTO)及資料復原時間點目標(RPO)，設置適當之備份機制及備援計畫。",
                  color: "green",
                },
                {
                  context:
                    "制定核心業務持續運作計畫，定期辦理核心業務持續運作演練，演練內容包含核心業務備援措施、人員職責、應變作業程序、資源調配及演練結果檢討改善。",
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
              title: "資通系統發展及維護安全",
              num: 10,
              color: "green",
              content: [
                {
                  context:
                    "將資安要求納入資通系統開發及維護需求規格，包含機敏資料存取控制、用戶登入身分驗證及用戶輸入輸出之檢查過濾等。",
                  color: "green",
                },
                {
                  context:
                    "定期執行資通系統安全性要求測試，包含機敏資料存取控制、用戶登入身分驗證及用戶輸入輸出之檢查過濾測試等",
                  color: "green",
                },
                {
                  context: "妥善儲存及管理資通系統開發及維護相關文件。",
                  color: "green",
                },
                {
                  context:
                    "對核心資通系統辦理下列資安檢測作業，並完成系統弱點修補。1.定期辦理弱點掃描。2.定期辦理滲透測試。3.系統上線前執行源碼掃描安全檢測。",
                  color: "green",
                },
              ],
            },
            {
              title: "資通安全防護及控制措施",
              num: 75,
              color: "green",
              content: [
                {
                  context:
                    "依網路服務需要區隔獨立的邏輯網域(如：DMZ、內部或外部網路等)，並將開發、測試及正式作業環境區隔，且針對不同作業環境建立適當之資安防護控制措施。",
                  color: "green",
                },
                {
                  context:
                    "具備下列資安防護控制措施： 1.防毒軟體。 2.網路防火牆。3.如有郵件伺服器者，具備電子郵件過濾機制。4.入侵偵測及防禦機制。5.如有對外服務之核心資通系統者，具備應用程式防火牆。6.進階持續性威脅攻擊防禦措施。7.資通安全威脅偵測管理機制(SOC)。",
                  color: "green",
                },
                {
                  context:
                    "針對機敏性資料之處理及儲存建立適當之防護措施，如：實體隔離、專用電腦作業環境、存取權限、資料加密、傳輸加密、資料遮蔽、人員管理及處理規範等。",
                  color: "green",
                },
                {
                  context:
                    "訂定到職、在職及離職管理程序，並簽署保密協議明確告知保密事項。",
                  color: "green",
                },
                {
                  context:
                    "建立使用者通行碼管理之作業規定，如：預設密碼、密碼長度、密碼複雜度、密碼歷程記錄、密碼最短及最長之效期限制、登入失敗鎖定機制，並評估於核心資通系統採取多重認證技術。",
                  color: "green",
                },
                {
                  context:
                    "定期審查特權帳號、使用者帳號及權限，停用久未使用之帳號。",
                  color: "green",
                },
                {
                  context: "建立資通系統及相關設備適當之監控措施，如：身分驗證失敗、存取資源失敗、重要行為、重要資料異動、功能錯誤及管理者行為等，並針對日誌建立適當之保護機制。",
                  color: "green",
                },
                {
                  context: "針對電腦機房及重要區域之安全控制、人員進出管控、環境維護(如溫溼度控制)等項目建立適當之管理措施。",
                  color: "green",
                },
                {
                  context: "留意安全漏洞通告，即時修補高風險漏洞，定期評估辦理設備、系統元件、資料庫系統及軟體安全性漏洞修補。",
                  color: "green",
                },
                {
                  context: "訂定資通設備回收再使用及汰除之安全控制作業程序，以確保機敏性資料確實刪除。",
                  color: "green",
                },
                {
                  context: "訂定人員裝置使用管理規範，如：軟體安裝、電子郵件、即時通訊軟體、個人行動裝置及可攜式媒體等管控使用規則。",
                  color: "green",
                },
                {
                  context: "每年定期辦理電子郵件社交工程演練，並對誤開啟信件或連結之人員進行教育訓練，並留存相關紀錄。",
                  color: "green",
                },
              ],
            },
            {
              title: "資通系統或資通服務委外辦理之管理措施",
              num: 66,
              color: "green",
              content: [
                {
                  context: "訂定資訊作業委外安全管理程序，包含委外選商、監督管理(如：對供應商與合作夥伴進行稽核)及委外關係終止之相關規定，確保委外廠商執行委外作業時，具備完善之資通安全管理措施。",
                  color: "green",
                },
                {
                  context: "訂定委外廠商之資通安全責任及保密規定，於採購文件中載明服務水準協議(SLA)、資安要求及對委外廠商資安稽核權。",
                  color: "green",
                },
                {
                  context: "公司於委外關係終止或解除時，確認委外廠商返還、移交、刪除或銷毀履行契約而持有之資料。",
                  color: "green",
                },
              ],
            },
            {
              title: "資通安全事件通報應變及情資評估因應",
              num: 10,
              color: "green",
              content: [
                {
                  context: "訂定資安事件應變處置及通報作業程序，包含判定事件影響及損害評估、內外部通報流程、通知其他受影響機關之方式、通報窗口及聯繫方式。",
                  color: "green",
                },
                {
                  context: "加入資安情資分享組織，取得資安預警情資、資安威脅與弱點資訊，如：所屬產業資安資訊分享與分析中心(ISAC)、臺灣電腦網路危機處理暨協調中心(TWCERT/CC)。",
                  color: "green",
                },
                {
                  context: "發生符合「臺灣證券交易所股份有限公司對有價證券上市公司重大訊息之查證暨公開處理程序」或「財團法人中華民國證券櫃檯買賣中心對有價證券上櫃公司重大訊息之查證暨公開處理程序」規範之重大資安事件，應依相關規定辦理。",
                  color: "green",
                },
              ],
            },
            {
              title: "資通安全之持續精進及績效管理機制",
              num: 75,
              color: "green",
              content: [
                {
                  context: "資通安全推動組織定期向董事會或管理階層報告資通安全執行情形，確保運作之適切性及有效性。",
                  color: "green",
                },
                {
                  context: "定期辦理內部及委外廠商之資安稽核，並就發現事項擬訂改善措施，且定期追蹤改善情形。",
                  color: "green",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    openModal(color) {
      this.statusColor = color
      if (this.statusColor === 'red') {
        this.title = this.dangerPanel['title']
        this.note = this.dangerPanel['note']
        this.suggestion = this.dangerPanel['suggestion']
      } else if (color === 'orange') {
        this.title = this.warningPanel['title']
        this.note = this.warningPanel['note']
        this.suggestion = this.warningPanel['suggestion']
      } else {
        this.title = "正常"
      }
      this.modal = true
    }
  }
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
          <q-card style="background-color: #5b5b5b">
            <q-card-section>
              <ul class="text-dark">
                <li
                  v-for="(sector, id) in ele.content"
                  :key="id"
                  class="q-mb-sm text-white"
                >
                  <div class="flex items-start">
                    <div
                      @click="openModal(sector.color)"
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
    <!-- Dialog- 狀態視窗 -->
    <q-dialog v-model="modal">
      <q-card style="width: 450px; max-width: 450px; background-color: #5b5b5b">
        <q-card-section
          class="flex column justify-center items-center text-white"
        >
          <q-btn round :color="statusColor" icon="error_outline" class="q-mb-sm" />
          <div>
            <div class="text-h5 text-center q-mt-sm q-mb-xs">{{ title }}</div>
            <div class="text-caption">認證與風險評估 - 意識培訓和推廣</div>
          </div>
        </q-card-section>
        <q-card-section class="text-white">
          <div class="q-mb-sm">
            <div class="text-weight-bold">說明：</div>
            <p class="q-mb-none" v-for="(item, idx) in note" :key="idx">{{ item }}</p>
          </div>
          <hr />
          <div class="q-mt-md">
            <div class="text-weight-bold">建議改善方式：</div>
            <p class="q-mb-none" v-for="(item, idx) in suggestion" :key="idx">
              {{ item }}
            </p>
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
