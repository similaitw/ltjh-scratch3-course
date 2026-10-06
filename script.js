
const SCRATCH_EDITOR_SCREENSHOT='https://upload.wikimedia.org/wikipedia/commons/1/18/Scratch_editor_screenshot.png';
const EDITOR_FOCUS={
  '01':{
    1:{label:'先認識整個 Scratch 編輯器',rect:null},
    2:{label:'程式／造型／音效分頁與角色區',rect:[0,4,100,63]},
    3:{label:'左側事件積木 → 中央程式工作區',rect:[0,8,59,82]},
    4:{label:'左側外觀積木 → 中央程式工作區',rect:[0,8,59,82]},
    5:{label:'舞台上方的綠旗與停止鍵',rect:[58,4,42,18]},
    6:{label:'右下角色清單與新增角色按鈕',rect:[58,48,42,52]},
    7:{label:'右下舞台／背景與新增背景按鈕',rect:[58,48,42,52]},
    8:{label:'角色資料：X、Y、大小、方向',rect:[58,48,42,30]},
    9:{label:'上方檔案與專案工具列',rect:[0,0,100,10]},
    10:{label:'綠旗測試 + 程式工作區',rect:[20,5,78,55]}
  },
  '02':{1:{label:'先選角色並在舞台定位',rect:[58,10,42,80]},2:{label:'事件／動作分類與程式工作區',rect:[0,8,59,82]},3:{label:'動作分類：移動積木',rect:[0,8,59,82]},4:{label:'控制分類：重複無限次',rect:[0,8,59,82]},5:{label:'修改積木裡的數值',rect:[0,8,59,82]},6:{label:'動作分類：碰到邊緣就反彈',rect:[0,8,59,82]},7:{label:'舞台區觀察反彈結果',rect:[58,8,42,48]},8:{label:'角色資料區：旋轉方式',rect:[58,48,42,30]},9:{label:'角色資料區：方向',rect:[58,48,42,30]},10:{label:'程式區 + 舞台一起檢核',rect:[20,8,80,82]}},
  '03':{1:{label:'動作分類：定位到 X/Y',rect:[0,8,59,82]},2:{label:'動作分類：滑行到 X/Y',rect:[0,8,59,82]},3:{label:'舞台觀察滑行效果',rect:[58,8,42,48]},4:{label:'修改滑行秒數',rect:[0,8,59,82]},5:{label:'程式工作區：串接第二段滑行',rect:[20,8,39,82]},6:{label:'程式工作區：加入第三段滑行',rect:[20,8,39,82]},7:{label:'控制分類：等待',rect:[0,8,59,82]},8:{label:'滑行到隨機位置',rect:[0,8,59,82]},9:{label:'比較「移到」與「滑行」',rect:[0,8,59,82]},10:{label:'程式區 + 舞台檢核巡迴路線',rect:[20,8,80,82]}},
  '04':{1:{label:'舞台座標與角色位置',rect:[58,8,42,70]},2:{label:'角色資料區的 X / Y',rect:[58,48,42,30]},3:{label:'角色資料區的 X / Y',rect:[58,48,42,30]},4:{label:'動作分類：定位到 X/Y',rect:[0,8,59,82]},5:{label:'動作分類：X 改變',rect:[0,8,59,82]},6:{label:'修改 X 的正負數值',rect:[0,8,59,82]},7:{label:'動作分類：Y 改變',rect:[0,8,59,82]},8:{label:'輸入不同 X/Y 座標',rect:[0,8,59,82]},9:{label:'程式區：用 X/Y 走方形',rect:[20,8,39,82]},10:{label:'舞台區判讀座標',rect:[58,8,42,70]}},
  '05':{1:{label:'角色位置與起點設定',rect:[58,48,42,30]},2:{label:'控制分類：重複無限次',rect:[0,8,59,82]},3:{label:'偵測按鍵 + X 改變',rect:[0,8,59,82]},4:{label:'複製條件後改成左鍵',rect:[20,8,39,82]},5:{label:'上下鍵 + Y 改變',rect:[0,8,59,82]},6:{label:'舞台測試四方向控制',rect:[58,8,42,48]},7:{label:'程式工作區檢查四個獨立條件',rect:[20,8,39,82]},8:{label:'修改移動速度數值',rect:[20,8,39,82]},9:{label:'舞台邊界 + 程式判斷',rect:[20,8,80,82]},10:{label:'完整四方向控制檢核',rect:[20,8,80,82]}},
  '06':{
    1:{label:'右下角色清單：新增並選取敵人角色',rect:[58,48,42,52]},
    2:{label:'動作分類與程式工作區：設定面向目標',rect:[0,8,59,82]},
    3:{label:'動作分類：加入移動積木並在舞台測試',rect:[0,8,100,82]},
    4:{label:'控制分類：把追蹤動作放進重複無限次',rect:[0,8,59,82]},
    5:{label:'程式工作區：調整移動速度數值',rect:[20,8,39,82]},
    6:{label:'動作／控制分類：改做隨機巡邏與碰邊反彈',rect:[0,8,59,82]},
    7:{label:'舞台區觀察敵人是否離開邊界',rect:[58,8,42,48]},
    8:{label:'程式工作區：重生時重新設定位置與方向',rect:[20,8,39,82]},
    9:{label:'舞台區同時測試主角與敵人',rect:[58,8,42,48]},
    10:{label:'完整敵人行為檢核：程式區＋舞台',rect:[20,8,80,82]}
  },
  '07':{
    1:{label:'右下角色清單：新增並選取子彈角色',rect:[58,48,42,52]},
    2:{label:'外觀分類：先讓子彈隱藏',rect:[0,8,59,82]},
    3:{label:'事件分類：空白鍵事件；動作分類：定位到玩家',rect:[0,8,59,82]},
    4:{label:'動作分類：設定子彈射擊方向',rect:[0,8,59,82]},
    5:{label:'外觀分類：定位完成後再顯示子彈',rect:[0,8,59,82]},
    6:{label:'控制分類：重複直到；動作分類：持續移動',rect:[0,8,59,82]},
    7:{label:'外觀分類：碰邊後隱藏',rect:[0,8,59,82]},
    8:{label:'舞台區：連續射擊測試',rect:[58,8,42,48]},
    9:{label:'控制分類：加入射擊冷卻等待',rect:[0,8,59,82]},
    10:{label:'完整射擊檢核：程式區＋舞台',rect:[20,8,80,82]}
  },
  '08':{
    1:{label:'角色清單：新增敵方子彈並選取角色',rect:[58,48,42,52]},
    2:{label:'事件＋控制：綠旗後進入重複無限次',rect:[0,8,59,82]},
    3:{label:'控制分類：射擊前等待',rect:[0,8,59,82]},
    4:{label:'動作分類：先移到敵人，再面向玩家',rect:[0,8,59,82]},
    5:{label:'外觀＋動作：顯示子彈並開始前進',rect:[0,8,59,82]},
    6:{label:'控制／偵測：重複直到碰到玩家或邊緣',rect:[0,8,59,82]},
    7:{label:'變數分類：玩家生命改變 -1',rect:[0,8,59,82]},
    8:{label:'外觀分類：本次射擊結束後隱藏',rect:[0,8,59,82]},
    9:{label:'程式區：調整固定或隨機射擊間隔',rect:[20,8,39,82]},
    10:{label:'舞台區：檢查中彈是否只扣一次生命',rect:[58,8,42,48]}
  },
  '09':{
    1:{label:'子彈角色：確認本體為隱藏狀態',rect:[58,48,42,52]},
    2:{label:'控制分類：射擊時建立自己的分身',rect:[0,8,59,82]},
    3:{label:'控制分類：當分身產生',rect:[0,8,59,82]},
    4:{label:'分身程式：定位、方向、顯示',rect:[20,8,39,82]},
    5:{label:'分身程式：重複移動',rect:[20,8,39,82]},
    6:{label:'偵測／變數：命中敵人後加分',rect:[0,8,59,82]},
    7:{label:'偵測：檢查舞台邊緣',rect:[0,8,59,82]},
    8:{label:'控制分類：刪除此分身',rect:[0,8,59,82]},
    9:{label:'舞台區：快速連射，確認多顆子彈並存',rect:[58,8,42,48]},
    10:{label:'完整分身生命週期檢核',rect:[20,8,80,82]}
  },
  '10':{
    1:{label:'左側變數分類：建立「分數」',rect:[0,8,24,82]},
    2:{label:'變數分類：綠旗時將分數設為 0',rect:[0,8,59,82]},
    3:{label:'程式工作區：命中時分數改變 1',rect:[20,8,39,82]},
    4:{label:'舞台區：觀察分數監視器',rect:[58,8,42,48]},
    5:{label:'變數分類：建立「生命」並設為 3',rect:[0,8,59,82]},
    6:{label:'程式工作區：受傷時生命改變 -1',rect:[20,8,39,82]},
    7:{label:'舞台區：連續受傷測試生命變化',rect:[58,8,42,48]},
    8:{label:'程式區：處理一次碰撞只計算一次',rect:[20,8,39,82]},
    9:{label:'綠旗重新測試：分數／生命都要初始化',rect:[20,5,78,55]},
    10:{label:'變數＋條件：用分數控制難度',rect:[0,8,59,82]}
  },
  '11':{
    1:{label:'事件分類：建立「勝利」「失敗」廣播訊息',rect:[0,8,59,82]},
    2:{label:'角色／舞台切換：選擇一個主控程式位置',rect:[58,48,42,52]},
    3:{label:'控制＋運算＋變數：分數達標後廣播勝利',rect:[0,8,59,82]},
    4:{label:'控制＋運算＋變數：生命歸零後廣播失敗',rect:[0,8,59,82]},
    5:{label:'玩家角色：加入「當收到勝利／失敗」事件',rect:[20,8,78,82]},
    6:{label:'敵人角色：收到勝負訊息後停止或隱藏',rect:[20,8,78,82]},
    7:{label:'舞台：收到廣播後切換勝利／失敗背景',rect:[58,8,42,82]},
    8:{label:'程式工作區：檢查廣播後原遊戲迴圈是否收尾',rect:[20,8,39,82]},
    9:{label:'舞台測試：分別驗證勝利與失敗流程',rect:[58,8,42,48]},
    10:{label:'事件分類：新增「下一關」廣播並串接反應',rect:[0,8,59,82]}
  },
  '12':{
    1:{label:'變數分類：建立「遊戲狀態」共享變數',rect:[0,8,24,82]},
    2:{label:'綠旗初始化：狀態、分數、生命與角色位置',rect:[0,5,59,85]},
    3:{label:'控制＋運算：只有遊戲狀態 = 1 才執行主要行為',rect:[0,8,59,82]},
    4:{label:'勝利條件：達標後改變遊戲狀態',rect:[0,8,59,82]},
    5:{label:'失敗條件：生命歸零後改變遊戲狀態',rect:[0,8,59,82]},
    6:{label:'各角色程式：持續讀取共享的遊戲狀態',rect:[20,8,78,82]},
    7:{label:'舞台測試：不靠廣播也能同步結束',rect:[58,8,42,48]},
    8:{label:'變數監視器：0／1／2／3 對應不同流程階段',rect:[58,8,42,48]},
    9:{label:'程式區比較：狀態變數 vs. 廣播架構',rect:[20,8,39,82]},
    10:{label:'綠旗重新開始：遊戲狀態要回到進行中',rect:[20,5,78,55]}
  },
  '13':{
    1:{label:'變數分類：建立「時間」並設為 30',rect:[0,8,59,82]},
    2:{label:'控制分類：加入「重複直到 時間 = 0」',rect:[0,8,59,82]},
    3:{label:'控制＋變數：等待 1 秒，再讓時間改變 -1',rect:[0,8,59,82]},
    4:{label:'舞台：觀察時間監視器是否每秒減少',rect:[58,8,42,48]},
    5:{label:'時間到：接廣播或遊戲狀態結束處理',rect:[0,8,59,82]},
    6:{label:'運算條件：避免時間繼續變成負數',rect:[0,8,59,82]},
    7:{label:'正數計時版本：時間從 0 開始每秒 +1',rect:[0,8,59,82]},
    8:{label:'主控程式：只讓一段程式修改時間變數',rect:[20,8,39,82]},
    9:{label:'綠旗重跑：確認時間一定重設',rect:[20,5,78,55]},
    10:{label:'變數／運算：延伸做「分：秒」顯示',rect:[0,8,59,82]}
  },
  '14':{
    1:{label:'先看全局：角色清單、舞台與程式工作區一起規畫流程',rect:[20,5,80,92]},
    2:{label:'舞台／背景＋角色清單：首頁只顯示需要的角色',rect:[58,8,42,92]},
    3:{label:'初始化程式：位置、分數、生命、時間、狀態一次重設',rect:[0,5,59,85]},
    4:{label:'玩家角色：四方向控制與舞台邊界',rect:[20,8,78,82]},
    5:{label:'子彈角色：分身射擊、命中或碰邊後刪除',rect:[20,8,78,82]},
    6:{label:'敵人角色：移動／重生／敵方射擊',rect:[20,8,78,82]},
    7:{label:'變數＋碰撞：命中加分、受傷扣生命',rect:[0,8,59,82]},
    8:{label:'計時主控：倒數與遊戲結束條件',rect:[0,8,59,82]},
    9:{label:'廣播／狀態：所有角色同步停止並切換結束畫面',rect:[0,8,100,82]},
    10:{label:'重新開始：角色顯示、位置、變數、分身都要重設',rect:[20,5,80,92]},
    11:{label:'舞台反覆測試：勝利、失敗、第二局重玩都要正常',rect:[58,8,42,48]},
    12:{label:'最後調整：速度、射擊頻率、生命、時間與目標分數',rect:[20,8,80,82]}
  }
,
  'S1':{
    1:{label:'右下角色清單與造型／角色設定',rect:[58,48,42,52]},
    2:{label:'瀏覽器權限列／麥克風權限：首次使用音量感測時允許',rect:[0,0,100,10]},
    3:{label:'左側偵測分類：觀察「音量」感測值',rect:[0,8,24,82]},
    4:{label:'控制＋運算＋偵測：設定「音量 > 門檻」',rect:[0,8,59,82]},
    5:{label:'控制分類：把音量判斷放進重複無限次',rect:[0,8,59,82]},
    6:{label:'動作分類：音量觸發後改變 Y／做跳躍',rect:[0,8,59,82]},
    7:{label:'控制分類：加入短暫等待避免重複觸發',rect:[0,8,59,82]},
    8:{label:'程式工作區：調高音量門檻',rect:[20,8,39,82]},
    9:{label:'程式工作區：調低音量門檻',rect:[20,8,39,82]},
    10:{label:'舞台＋程式區：測試小聲／大聲兩段反應',rect:[20,8,80,82]}
  },
  'S2':{
    1:{label:'左下擴充功能按鈕：加入「視訊偵測」',rect:[0,72,24,28]},
    2:{label:'舞台區：開啟攝影機畫面並調整視訊透明度',rect:[58,8,42,48]},
    3:{label:'視訊偵測擴充分類：觀察視訊動作量',rect:[0,8,24,82]},
    4:{label:'控制＋視訊偵測：建立命中門檻判斷',rect:[0,8,59,82]},
    5:{label:'變數／音效／造型：命中後加分與回饋',rect:[0,8,59,82]},
    6:{label:'動作分類：命中後把害蟲移到新位置',rect:[0,8,59,82]},
    7:{label:'控制分類：加入 0.2 秒冷卻',rect:[0,8,59,82]},
    8:{label:'變數＋控制：建立倒數時間',rect:[0,8,59,82]},
    9:{label:'舞台區：實際測試光線、距離與背景干擾',rect:[58,8,42,48]},
    10:{label:'舞台＋程式區：完整體感遊戲檢核',rect:[20,8,80,82]}
  },
  'S3':{
    1:{label:'舞台／背景編輯：畫出路徑與統一顏色障礙',rect:[58,8,42,82]},
    2:{label:'右下角色清單與角色資料：玩家尺寸與起點',rect:[58,48,42,52]},
    3:{label:'程式工作區：選擇滑鼠跟隨或方向鍵控制',rect:[20,8,39,82]},
    4:{label:'偵測分類：使用「碰到顏色？」並用滴管選色',rect:[0,8,59,82]},
    5:{label:'變數＋動作：碰障礙後扣生命並回起點',rect:[0,8,59,82]},
    6:{label:'舞台＋偵測：設定終點角色／終點顏色',rect:[20,8,80,82]},
    7:{label:'造型／角色資料：調整玩家大小與透明邊界',rect:[58,48,42,30]},
    8:{label:'舞台／背景：增加第二段較窄路徑',rect:[58,8,42,82]},
    9:{label:'綠旗初始化：生命、起點、關卡狀態重設',rect:[0,5,59,85]},
    10:{label:'舞台＋程式區：完整過關與失敗檢核',rect:[20,8,80,82]}
  },
  'A1':{
    1:{label:'左下擴充功能按鈕：加入視訊偵測並允許攝影機',rect:[0,72,24,28]},
    2:{label:'右下角色清單＋舞台：選取並擺放害蟲目標',rect:[58,8,42,92]},
    3:{label:'視訊偵測擴充分類：改用「角色上的視訊動作」',rect:[0,8,24,82]},
    4:{label:'控制＋視訊偵測：設定角色上的動作門檻',rect:[0,8,59,82]},
    5:{label:'變數／音效／外觀：命中後加分與特效',rect:[0,8,59,82]},
    6:{label:'動作＋運算：命中後隨機重生並限制範圍',rect:[0,8,59,82]},
    7:{label:'控制分類：加入 0.2～0.5 秒冷卻',rect:[0,8,59,82]},
    8:{label:'變數＋控制：加入 30／60 秒倒數',rect:[0,8,59,82]},
    9:{label:'舞台區：站在鏡頭前調整門檻與目標大小',rect:[58,8,42,48]},
    10:{label:'舞台＋程式區：檢查不重複灌分且不生成到畫面外',rect:[20,8,80,82]}
  },
  'A2':{
    1:{label:'左下擴充功能按鈕：加入視訊偵測與音樂／音效',rect:[0,72,24,28]},
    2:{label:'舞台＋角色清單：安排多個音符／樂器區域',rect:[58,8,42,92]},
    3:{label:'視訊偵測＋音樂：第一區域設定動作門檻與音符',rect:[0,8,59,82]},
    4:{label:'角色清單＋程式工作區：複製到其他區域並改音高',rect:[20,8,78,82]},
    5:{label:'舞台區：揮手測試各區域是否只觸發自己的聲音',rect:[58,8,42,48]},
    6:{label:'控制分類：播放後加入 0.1～0.3 秒冷卻',rect:[0,8,59,82]},
    7:{label:'音樂／音效分類：調整音符長度與節拍',rect:[0,8,59,82]},
    8:{label:'外觀分類：加入亮起／放大等視覺回饋',rect:[0,8,59,82]},
    9:{label:'舞台＋角色清單：排列音階與簡單旋律',rect:[58,8,42,92]},
    10:{label:'舞台＋程式區：完整演奏與防連發檢核',rect:[20,8,80,82]}
  }};
function renderEditorFocus(lesson,step){
  const f=EDITOR_FOCUS[lesson]?.[step];
  if(!f)return '';
  const rect=f.rect?`<span class="editor-focus-box" style="left:${f.rect[0]}%;top:${f.rect[1]}%;width:${f.rect[2]}%;height:${f.rect[3]}%"></span>`:'';
  return `<div class="editor-location-card"><div class="editor-location-head"><b>Scratch Editor 操作位置</b><span>${escapeHtml(f.label)}</span></div><div class="editor-shot-wrap"><img loading="lazy" src="${SCRATCH_EDITOR_SCREENSHOT}" alt="Scratch 3 編輯器實際畫面（2025 年 4 月截圖）">${rect}</div><div class="editor-shot-credit">實際 Scratch 編輯器截圖（2025-04）。來源：Wikimedia Commons；畫面源自 scratch.mit.edu。紅框僅為本教材定位標示。</div></div>`;
}

const lessons = [
{n:'01',type:'主線',title:'Scratch 基本操作環境介紹',short:'認識舞台、角色、積木區、程式區與綠旗。',video:'https://www.youtube.com/watch?v=NSIGbZ9j3zY',goals:['能分辨舞台、角色清單、積木分類與程式工作區','知道綠旗、停止鍵與全螢幕的用途','能新增／刪除角色、背景與造型','知道專案名稱、儲存與重新開啟的基本流程'],skills:['介面','角色','舞台','事件','儲存'],blocks:[['event','當綠旗被點擊'],['looks','說「Hello!」2 秒']],steps:["進入 Scratch 3 編輯器後，先不要急著寫程式，先找出左邊的「積木分類」、中間的「程式工作區」、右上「舞台」、右下「角色清單」。","點選角色清單中的小貓，確認上方有「程式、造型、音效」三個分頁；切換分頁看看內容會跟著目前選取的角色改變。","在「程式」分頁中，從「事件」拖出「當綠旗被點擊」積木，放到空白工作區。","從「外觀」拖出「說 Hello! 2 秒」，接到綠旗積木下面；積木卡榫靠近時會自動吸附。","按舞台上方綠旗測試，確認角色會說話；再按紅色停止鍵，確認所有程式停止。","點「選個角色」新增第二個角色，替角色改一個容易辨認的名稱；再試著刪除不需要的角色。","點「選個背景」新增舞台背景，切換舞台與角色，觀察兩者的程式與造型是分開管理的。","試著調整角色的 X、Y、大小與方向數值，觀察舞台上的位置、尺寸與朝向如何改變。","修改專案名稱，使用「檔案」功能儲存作品；重新開啟後確認角色、背景與程式都還在。","最後做一次檢核：不看提示，重新新增一個角色，讓它按綠旗後說一句自訂文字。"],concept:'Scratch 是事件驅動式程式環境。角色不會自動做事，必須先有事件積木告訴它「什麼時候開始」。',mistakes:['把積木放在別的角色上，卻一直看著目前角色測試','修改造型後忘記切回「程式」分頁','只按積木測試，卻沒有設計正式的啟動事件'],challenge:'建立兩個角色：綠旗後，一個說「開始！」，另一個等 1 秒再說「換我」。'},
{n:'02',type:'主線',title:'角色移動：前進與方向',short:'用移動、轉向與碰到邊緣反彈建立連續移動。',video:'https://www.youtube.com/watch?v=-TT0OIgRbgY',goals:['了解「移動幾點」是沿目前方向前進','會設定角色面向角度與旋轉方式','會用重複結構讓角色持續移動','能處理角色碰到舞台邊緣的行為'],skills:['移動','方向','重複','反彈'],blocks:[['event','當綠旗被點擊'],['control','重複無限次'],['motion','移動 10 點'],['motion','碰到邊緣就反彈']],steps:["選取要移動的角色，先把角色拖到舞台中央附近，避免一開始就貼著邊緣。","從「事件」拖出「當綠旗被點擊」，再從「動作」接上「面朝 90 度」，先固定起始方向。","接上「移動 10 點」，按綠旗一次，觀察角色會沿著目前面向的方向前進。","把「移動 10 點」包進「重複無限次」，再按綠旗，觀察角色會持續向前。","如果角色跑太快，把 10 改成 3、5 或 8，比較不同移動量造成的速度差異。","從「動作」加入「碰到邊緣就反彈」，放在重複無限次裡的移動後方。","讓角色跑到舞台邊緣，確認碰邊後會改變方向而不是直接消失。","在角色資料區切換旋轉方式，依序比較「任意旋轉、左右翻轉、不旋轉」的差異。","把角色面向角度改成 0、90、-90、180，觀察每個角度代表的方向。","完成檢核：讓角色可以在舞台中來回巡邏，而且圖案不會上下顛倒。"],concept:'「移動」不是改 X，也不是改 Y；它會依角色目前面向的方向前進，因此方向與距離共同決定位置變化。',mistakes:['重複無限次內沒有等待，角色速度過快','角色圖案上下顛倒，通常是旋轉方式未設定','把「移動」與「X 改變」混為一談'],challenge:'讓角色用不同速度在舞台內巡邏，碰到邊緣自動折返。'},
{n:'03',type:'主線',title:'角色移動：滑行',short:'讓角色在指定時間內平順移到目標位置。',video:'https://www.youtube.com/watch?v=Jvpr-2X5EJs',goals:['理解「移到」與「滑行」差別','能指定角色在幾秒內到達座標','用等待與滑行安排動畫節奏','會用滑鼠位置或隨機位置當目標'],skills:['滑行','座標','時間','動畫'],blocks:[['event','當綠旗被點擊'],['motion','滑行 1 秒到 x: 120 y: 60'],['control','等待 0.5 秒'],['motion','滑行 1 秒到隨機位置']],steps:["選取角色，在綠旗下先放「移到 x:0 y:0」，把每次測試的起點固定在舞台中央。","從「動作」拖出「滑行 1 秒到 x:150 y:80」，接在起點後面。","按綠旗，觀察角色不是瞬間跳過去，而是在 1 秒內平順移動到指定座標。","把滑行時間分別改成 0.5 秒、2 秒、3 秒，比較時間越長速度越慢的效果。","再接第二個滑行，例如滑到 x:-150 y:80，讓角色形成一段可見的移動路徑。","加入第三個滑行到 x:0 y:-100，觀察多段滑行會依程式由上往下依序執行。","在兩段滑行中間加入「等待 0.5 秒」，比較有停頓與沒有停頓的動畫節奏。","把其中一段改成「滑行 1 秒到隨機位置」，多按幾次綠旗，觀察每次目標位置不同。","比較「移到」和「滑行」：把同一個目標先用移到，再改成滑行，看兩者差異。","完成檢核：設計一條至少經過三個位置的巡迴路線，最後回到起點。"],concept:'「移到」是瞬間定位；「滑行」會在指定時間內逐步改變位置。動畫中需要看見過程時用滑行，需要立即重設位置時用移到。',mistakes:['滑行秒數設成 0，效果看起來像移到','只改座標卻沒先確認舞台範圍','路徑順序放錯，造成角色突然跳回起點'],challenge:'製作三點巡迴：角色依序滑行到三個座標，最後回到起點。'},
{n:'04',type:'主線',title:'XY 座標：精準定位',short:'用 X、Y 與座標變化精準控制角色。',video:'https://www.youtube.com/watch?v=HYsreADflfs',goals:['理解 Scratch 舞台 X/Y 軸','會用「定位到 x/y」設定起點','會使用「x 改變」「y 改變」','能由座標判斷角色是否超出範圍'],skills:['X座標','Y座標','定位','邊界'],blocks:[['event','當綠旗被點擊'],['motion','定位到 x: 0 y: 0'],['motion','x 改變 10'],['motion','y 改變 -10']],steps:["先認識舞台座標：中心是 x:0、y:0；往右 X 變大、往左 X 變小；往上 Y 變大、往下 Y 變小。","用滑鼠把角色拖到舞台右上角，觀察角色資料區目前顯示的 X、Y 數值。","把角色拖到左下角，再觀察 X、Y 是否都變成負值，建立四象限概念。","在綠旗下加入「定位到 x:0 y:0」，每次開始都先回到中心。","接上「x 改變 10」，連按幾次這個積木，確認角色只會水平向右移。","把數字改成 -10，確認負數會讓角色向左移動。","加入「y 改變 10」與「y 改變 -10」，確認正負值分別代表向上與向下。","分別輸入 x:150 y:100、x:-150 y:100、x:-150 y:-100、x:150 y:-100，讓角色依序出現在四個象限。","用 X/Y 改變積木做出「右、上、左、下」四段移動，讓角色走出一個方形。","完成檢核：老師任意說一組正負座標，你能先判斷角色大約會出現在哪個方向。"],concept:'座標是遊戲控制最穩定的基礎。鍵盤控制、邊界判斷、敵人生成位置、UI 擺放都會用到 X/Y。',mistakes:['把 X、Y 方向記反','角色中心點不是圖片左上角，所以視覺邊界會受造型尺寸影響','未固定起點，導致每次測試結果不同'],challenge:'不用滑行，只用 X/Y 改變，讓角色走出一個正方形。'},
{n:'05',type:'主線',title:'主角精確控制',short:'用方向鍵、按鍵偵測與條件判斷做即時操作。',video:'https://www.youtube.com/watch?v=Ljh-5RNk0Uk',goals:['會使用「按下某鍵？」偵測','用四個條件分別控制上下左右','理解即時控制要放在重複迴圈中','能加入邊界限制或速度變數'],skills:['按鍵偵測','條件','即時控制','速度'],blocks:[['event','當綠旗被點擊'],['control','重複無限次'],['control','如果 <按下右鍵？> 那麼'],['motion','x 改變 5']],steps:["選取主角，綠旗下先把角色定位到適合的起始位置，例如 x:0 y:-100。","從「控制」加入「重複無限次」，所有鍵盤偵測都放在這個迴圈裡，讓程式持續檢查按鍵。","在迴圈內加入「如果 <按下右鍵？> 那麼」，裡面放「x 改變 5」。","複製這組條件，改成左鍵，並把 X 改變值設成 -5。","再建立上鍵條件，裡面用「y 改變 5」；下鍵條件則用「y 改變 -5」。","按綠旗，用方向鍵測試上下左右，確認四個方向都正確，且放開按鍵後角色停止。","同時按「右＋上」，檢查角色能不能斜向移動；若不能，確認你沒有把四個方向寫成互斥的否則判斷。","把移動量從 5 改成 3 或 8，比較控制手感，再決定遊戲適合的速度。","若不希望角色離開舞台，可加入 X、Y 範圍判斷，或在碰到邊緣時限制繼續移動。","完成檢核：不用看範例，重新寫出四方向控制，並能解釋為什麼要放在「重複無限次」裡。"],concept:'使用「當按下某鍵」可以做單次事件；遊戲角色的即時控制通常改用「重複無限次＋按鍵偵測」，反應會更連續。',mistakes:['四個方向都用同一個 x/y 變化','把所有方向寫成「否則如果」，造成同時按兩鍵無法斜向移動','速度太大造成角色穿過障礙物'],challenge:'加入 Shift 加速：按住 Shift 時速度變成原本 2 倍。'},
{n:'06',type:'主線',title:'配角移動與敵人行為',short:'建立自動移動、追蹤、隨機與重生機制。',video:'https://www.youtube.com/watch?v=QPD05s8Kc8w',goals:['讓非玩家角色自動移動','會使用面向某角色或隨機方向','能讓敵人離開畫面後重新出現','理解主角與配角的程式責任不同'],skills:['AI移動','隨機','追蹤','重生'],blocks:[['event','當綠旗被點擊'],['motion','面朝「玩家」'],['control','重複無限次'],['motion','移動 3 點']],steps:["新增一個配角／敵人角色，先把它放在離主角較遠的位置，例如舞台右側。","在敵人的綠旗程式中加入「面朝玩家」，先單獨點積木測試，確認敵人會轉向主角。","接上「移動 3 點」，按綠旗，觀察敵人是否向玩家靠近。","把「面朝玩家 → 移動 3 點」放入「重複無限次」，形成最基本的追蹤行為。","把速度從 3 改成 1、5、8，確認速度太快會讓玩家沒有閃避空間。","測試另一種行為：綠旗時先「面朝隨機方向」，再移動與碰邊反彈，做出巡邏敵人。","若敵人會跑出畫面，加入碰邊反彈，或判斷超出範圍後重新定位到舞台另一側。","若要重生，先移到指定或隨機位置，再重新設定方向，避免重生後還沿用舊方向。","讓主角與敵人同時執行，調整速度直到「玩家可以閃，但也有壓力」。","完成檢核：做出至少一種「追蹤」或「隨機巡邏」的敵人，並能重新開始。"],concept:'配角行為可以視為簡單 AI：它根據規則自行選擇位置或方向。規則越少越容易除錯，先做簡單再逐步增加變化。',mistakes:['敵人速度太快，測試時像瞬間碰撞','一開始就在玩家位置，造成開場立刻失敗','敵人重生時沒有重新設定方向'],challenge:'讓敵人每 2 秒有一次機會改變方向，產生比較自然的移動。'},
{n:'07',type:'主線',title:'主角發射子彈',short:'從玩家位置產生子彈，設定方向、速度與消失條件。',video:'https://www.youtube.com/watch?v=gKWIFFpyW3c',goals:['理解子彈需要起點、方向、移動與結束條件','會用事件觸發射擊','能讓子彈從玩家目前位置出發','避免子彈無限留在舞台中'],skills:['射擊','位置同步','方向','生命週期'],blocks:[['event','當按下空白鍵'],['motion','定位到「玩家」'],['motion','面朝玩家方向'],['control','重複直到 <碰到邊緣？>'],['motion','移動 12 點']],steps:["新增「子彈」角色，使用簡單小圖形即可，並把尺寸縮小到不會遮住主角。","子彈平常先隱藏，避免還沒射擊時停在舞台上。","設定射擊事件，例如「當按下空白鍵」，先把子彈定位到主角目前的位置。","讓子彈取得正確射擊方向：可以面朝主角目前方向，或依遊戲設定固定向上／向右。","定位與方向都設定完成後才「顯示」子彈，避免玩家看到子彈從錯誤位置跳過來。","加入「重複直到 <碰到邊緣？>」，裡面放「移動 12 點」，讓子彈持續前進。","子彈碰到邊緣後離開迴圈，再執行「隱藏」，結束這一次射擊。","連續按空白鍵測試，觀察單一子彈本體在前一發還沒結束時，下一發可能無法同時存在。","加入短暫射擊冷卻，例如等待 0.2 秒，避免按住空白鍵時觸發過密。","完成檢核：子彈必須從主角位置出現、往正確方向移動、到邊緣後消失。"],concept:'如果只用一個子彈角色，同一時間通常只能存在一發；想要連續多發同時存在，下一課要改用分身。',mistakes:['子彈忘記顯示／隱藏，待機時還看得到','子彈方向沒有跟玩家同步','沒有結束條件，子彈程式一直跑'],challenge:'加入射擊冷卻：每次射擊至少間隔 0.2 秒。'},
{n:'08',type:'主線',title:'配角發射子彈：初級',short:'讓敵人定時射擊並朝玩家方向發射。',video:'https://www.youtube.com/watch?v=K7AhE9D2yJg',goals:['讓敵人自動週期發射','會在發射瞬間設定子彈位置','會面向玩家建立瞄準效果','能讓玩家被擊中後扣生命'],skills:['敵方射擊','週期','瞄準','碰撞'],blocks:[['event','當綠旗被點擊'],['control','重複無限次'],['control','等待 1 秒'],['motion','面朝「玩家」']],steps:["新增「敵方子彈」角色，平常先隱藏，並把它與玩家子彈用不同造型區分。","在敵人或敵方子彈程式中建立綠旗事件，進入「重複無限次」。","迴圈中先加入「等待 1 秒」，讓敵人不是每一幀都發射。","每次射擊先把子彈移到敵人目前位置，再設定「面朝玩家」，這樣瞄準的是發射瞬間的玩家位置。","設定完成後顯示子彈，讓它持續「移動」朝玩家方向前進。","使用「重複直到」讓子彈在「碰到玩家」或「碰到邊緣」時結束移動。","如果碰到玩家，將玩家生命值改變 -1；扣血後立即結束本次子彈，避免同一顆子彈連續扣很多次。","本次射擊結束後把子彈隱藏，回到等待下一次發射的狀態。","把等待時間改成「隨機 0.7 到 1.5 秒」或不同數值，比較固定與隨機射擊的遊戲感。","完成檢核：敵人能定時瞄準玩家射擊，玩家中彈只扣一次生命。"],concept:'敵人射擊可分成「決定何時射擊」與「子彈如何飛」兩個責任。把兩件事分清楚，程式比較容易維護。',mistakes:['先移動子彈再設定方向，會先飛錯方向','碰到玩家後還繼續移動，造成連續扣血','沒有等待，敵人每幀都射擊'],challenge:'把固定 1 秒改成 0.7～1.5 秒的隨機間隔。'},
{n:'09',type:'主線',title:'分身：多發子彈與大量物件',short:'用分身突破「一個角色只有一個本體」的限制。',video:'https://www.youtube.com/watch?v=NeOBcpvmAuw',goals:['理解本體與分身的差別','會使用「建立自己的分身」','會在「當分身產生」後執行獨立動作','知道何時要刪除分身'],skills:['分身','多物件','效能','刪除'],blocks:[['event','當按下空白鍵'],['control','建立自己的分身'],['event','當分身產生'],['motion','移動 12 點'],['control','刪除此分身']],steps:["先選取子彈角色，確認「本體」平常是隱藏的，分身出生後才顯示。","把射擊事件改成：按下空白鍵時，不再直接移動本體，而是執行「建立自己的分身」。","另外新增「當分身產生」事件，之後每一顆新子彈都會執行這段程式。","在分身程式開始時先定位到玩家，再設定方向，最後才顯示分身。","讓分身進入迴圈持續移動，例如每次移動 12 點。","在移動過程中檢查是否碰到敵人；碰到時可以加分、讓敵人受傷，然後結束該分身。","同時檢查是否碰到舞台邊緣，避免飛出畫面後還一直存在。","無論碰到敵人或邊緣，最後都要用「刪除此分身」，不要用「停止全部」。","快速連按射擊鍵，確認畫面上可以同時存在多顆子彈，而且彼此獨立移動。","完成檢核：觀察一段時間後分身不會無限制累積，離場的子彈都會被刪除。"],concept:'每個分身都會執行「當分身產生」下方的程式。分身越多越吃效能，因此要明確定義它的出生與死亡。',mistakes:['用「停止全部」代替「刪除此分身」','忘記隱藏本體，畫面多一顆不動的子彈','分身沒有死亡條件，數量持續增加'],challenge:'用同一套分身概念做「敵人群」：每隔 1 秒從右側隨機 Y 位置出現。'},
{n:'10',type:'主線',title:'計分與變數設計',short:'建立分數、生命與遊戲資料。',video:'https://www.youtube.com/watch?v=RHICqwxNtWY',goals:['會建立變數並選擇作用範圍','綠旗時初始化分數','碰撞成功時累加或扣除','會用變數控制難度或速度'],skills:['變數','分數','生命','初始化'],blocks:[['event','當綠旗被點擊'],['variable','將「分數」設為 0'],['variable','將「生命」設為 3'],['variable','將「分數」改變 1']],steps:["到「變數」分類建立「分數」變數，選擇讓所有角色都能使用。","在遊戲開始的綠旗程式中加入「將分數設為 0」，確保每次重玩都從零開始。","找到「敵人被玩家子彈碰到」的程式位置，在命中成立時加入「分數改變 1」。","按綠旗射擊測試，確認一個敵人被命中一次只增加 1 分。","再建立「生命」變數，綠旗時例如設為 3。","在玩家被敵方子彈或敵人碰到時加入「生命改變 -1」。","測試連續受傷，確認生命值會 3→2→1→0，而不是一次掉好幾格。","如果一次碰撞會重複扣分或扣血，加入等待、移動離開或刪除子彈，讓一次事件只計算一次。","重新按綠旗，確認分數與生命都會回到初始值，而不是保留上一局資料。","完成檢核：再做一個難度規則，例如每 5 分讓敵人速度增加 1。"],concept:'變數有「設定」與「改變」兩種常用操作：設定是直接指定新值；改變是從目前值再加減。初始化通常用設定。',mistakes:['綠旗時用「改變 -分數」當歸零，邏輯難懂','同一碰撞在數個迴圈中重複判定，分數一次加很多','誤用「僅此角色」導致其他角色讀不到'],challenge:'每得到 5 分，敵人速度增加 1。'},
{n:'11',type:'主線',title:'勝負判斷：使用廣播',short:'用訊息讓所有角色同步進入勝利、失敗或下一關。',video:'https://www.youtube.com/watch?v=kafiqqrHbQM',goals:['會建立並命名廣播訊息','用條件判斷觸發勝利／失敗','讓多個角色收到同一廣播後同步反應','理解「廣播」與「廣播並等待」差異'],skills:['廣播','狀態','勝負','角色協作'],blocks:[['control','如果 <分數 = 10> 那麼'],['event','廣播「勝利」'],['event','當收到「勝利」'],['looks','說「YOU WIN!」2 秒']],steps:["先建立兩個廣播訊息，名稱直接使用「勝利」與「失敗」，避免使用看不懂的訊息1、訊息2。","選一個角色或舞台作為「主控」，在遊戲進行時持續檢查分數與生命。","加入判斷：如果分數達到目標，例如分數 = 10，就「廣播 勝利」。","再加入判斷：如果生命 <= 0，就「廣播 失敗」。","到玩家角色新增「當收到 勝利」與「當收到 失敗」，讓玩家停止控制、切換造型或說出結果。","到敵人角色收到勝負訊息時，停止移動、停止射擊或隱藏。","到舞台收到「勝利」時切換勝利背景；收到「失敗」時切換失敗背景。","確認廣播後原本的遊戲迴圈不會繼續偷偷執行，可用遊戲狀態、停止此程式或其他方式收尾。","分別測試一次勝利與一次失敗，確認所有角色都能同步進入正確結束畫面。","完成檢核：新增「下一關」廣播，讓第二關背景或敵人速度產生變化。"],concept:'廣播把「判斷結果」和「每個角色的反應」拆開。這是大型 Scratch 專案非常重要的模組化方式。',mistakes:['所有角色都自己重複判斷分數，造成程式散亂','訊息名稱太模糊，例如「訊息1」','廣播後沒有停掉原本遊戲迴圈'],challenge:'加入「下一關」廣播，第二關提高敵人速度並切換背景。'},
{n:'12',type:'主線',title:'勝負判斷：不使用廣播',short:'直接用共享變數與條件完成遊戲結束。',video:'https://www.youtube.com/watch?v=DOsK2b0b5rQ',goals:['理解不使用廣播的另一種設計','以共享變數表示遊戲狀態','比較直接判斷與訊息驅動架構','知道小專案與大專案的取捨'],skills:['遊戲狀態','條件','共享變數','架構比較'],blocks:[['variable','將「遊戲狀態」設為 1'],['control','如果 <生命 = 0> 那麼'],['variable','將「遊戲狀態」設為 0'],['control','重複直到 <遊戲狀態 = 0>']],steps:["建立「遊戲狀態」變數，先約定 1 代表進行中、0 代表結束。","綠旗開始時先將遊戲狀態設為 1，並同時初始化分數、生命與角色位置。","把主角控制、敵人移動或其他主要行為包在「遊戲狀態 = 1」的條件中。","加入勝利條件，例如分數達到目標時直接把遊戲狀態設為 0。","加入失敗條件，例如生命 <= 0 時也把遊戲狀態設為 0。","讓各角色持續讀取同一個狀態變數；當狀態不是 1，就停止移動、射擊或改成結束行為。","測試勝利與失敗，確認不需要廣播，也能靠共享變數讓所有角色知道遊戲已結束。","把設計擴充成 0=首頁、1=遊戲中、2=勝利、3=失敗，觀察一個變數也能表示多個流程階段。","比較本課與上一課：小專案可直接用狀態變數，角色很多時廣播通常較容易維護。","完成檢核：重新開始遊戲時，狀態必須確實回到「進行中」，不能停在上一局的結束狀態。"],concept:'小型專案可以用共享變數直接控制；角色很多時，廣播通常更容易看懂。兩種方法都正確，重點是程式是否清楚。',mistakes:['遊戲狀態改了，但角色的迴圈沒有檢查它','同一數值同時代表太多狀態','開始新遊戲時忘記把狀態設回進行中'],challenge:'用 0=首頁、1=遊戲中、2=勝利、3=失敗，做四狀態遊戲流程。'},
{n:'13',type:'主線',title:'計時器：正數與倒數',short:'製作遊戲時間、倒數限制與時間到事件。',video:'https://www.youtube.com/watch?v=F0DISm_jCxw',goals:['會做正向計時與倒數計時','理解等待 1 秒搭配變數的原理','避免多個角色同時修改同一時間變數','時間到時可觸發遊戲結束'],skills:['計時','倒數','變數','時間事件'],blocks:[['variable','將「時間」設為 30'],['control','重複直到 <時間 = 0>'],['control','等待 1 秒'],['variable','將「時間」改變 -1']],steps:["建立「時間」變數，先做倒數版本：綠旗時將時間設為 30。","加入「重複直到 <時間 = 0>」，把倒數流程限制在時間尚未歸零時。","在迴圈裡先「等待 1 秒」，再執行「時間改變 -1」。","按綠旗觀察數字是否大約每秒減少 1，並在 0 時停止。","時間到 0 後接上遊戲結束處理，例如廣播「失敗」或把遊戲狀態改成結束。","確認條件不會讓時間繼續變成 -1、-2；必要時使用「時間 <= 0」作為判斷。","再做正數計時版本：綠旗時時間設為 0，每等待 1 秒後時間 +1。","若專案內有多個角色，指定只有一個主控程式負責修改時間，避免同時加減造成速度異常。","重新按綠旗測試，確認時間一定會回到初始值，不會接著上一局繼續。","完成檢核：挑戰把 90 秒換算成 1:30 的「分:秒」顯示方式。"],concept:'簡易遊戲可用「等待 1 秒」計時；需要更精確的時間可使用 Scratch 內建計時器感測值，並在開始時重設計時器。',mistakes:['倒數到 -1、-2 還不停，條件要寫清楚','兩段程式同時在改時間','按綠旗後沒有先重設時間'],challenge:'顯示「分:秒」格式，例如 90 秒顯示 1:30。'},
{n:'14',type:'主線',title:'整合實作：防疫大作戰',short:'把移動、射擊、分身、計分、計時與勝負串成完整遊戲。',video:'https://www.youtube.com/watch?v=7tiS3n6N4_c',goals:['完成首頁→遊戲→結束的完整流程','整合主角、敵人、子彈與碰撞','整合分數、生命、時間與勝負','能自行測試與修正遊戲平衡'],skills:['整合','遊戲流程','碰撞','除錯','平衡'],blocks:[['event','當綠旗被點擊'],['event','廣播「準備」'],['event','當收到「開始」'],['event','當收到「遊戲結束」']],steps:["先規畫遊戲流程：首頁／準備 → 遊戲進行 → 勝利或失敗 → 可以重新開始；不要一開始就把所有程式混在一起。","製作首頁背景與開始按鈕；綠旗時只顯示首頁需要的角色，其餘玩家、敵人、子彈先隱藏。","按開始後執行初始化：玩家回起點、敵人回出生點、分數歸 0、生命設初值、時間設初值。","完成玩家四方向控制，先單獨測試移動是否順暢、是否會跑出舞台。","完成玩家射擊，使用分身讓多發子彈可以同時存在，並在碰邊或命中後刪除。","完成敵人移動或重生規則，再加入敵方射擊或碰撞攻擊。","加入命中判定：玩家子彈碰敵人時加分；敵方攻擊碰玩家時扣生命。","加入計時系統，讓時間與分數、生命一起決定遊戲什麼時候結束。","加入勝負判斷，使用廣播或遊戲狀態讓全部角色同時停止並切換結束畫面。","處理重新開始：刪掉殘留分身、重新顯示／隱藏角色、重設位置與所有變數。","完整玩至少 3 次：刻意測試勝利一次、失敗一次、重新開始一次，找出第二局才會出現的錯誤。","最後調整難度：敵人速度、射擊頻率、生命數、時間與目標分數要讓玩家有挑戰但仍能完成。"],concept:'整合的關鍵不是再加更多積木，而是建立「遊戲狀態」與初始化流程。完整遊戲必須能開始、進行、結束，而且再玩一次仍然正常。',mistakes:['只測局部功能，最後整合時才發現互相衝突','遊戲結束後分身還留著','第二次開始時分數、時間或位置沒有重設'],challenge:'加入難度選擇：簡單／普通／困難改變敵人速度、生成頻率與玩家生命。'},
{n:'S1',type:'補充',title:'用聲音玩遊戲：小貓咪跳房子',short:'使用音量／聲音輸入，讓真實世界控制 Scratch。',video:'https://www.youtube.com/watch?v=dyVVZAx2YCM',goals:['認識麥克風音量感測','會設定聲音門檻避免誤觸','把聲音輸入轉成跳躍或其他事件','知道環境噪音會影響感測'],skills:['聲音偵測','麥克風','門檻','互動'],blocks:[['control','如果 <音量 > 25> 那麼'],['motion','y 改變 40'],['control','等待 0.2 秒']],steps:["選一個角色作為玩家，加入會產生跳躍效果的造型或動作。","允許瀏覽器使用麥克風，若跳出權限視窗請選擇允許。","在「感測」中勾選或觀察「音量」數值，先保持安靜，再拍手或說話，比較兩種情況。","根據教室環境決定門檻，例如「如果 音量 > 25」。","把音量判斷放進「重複無限次」，讓程式一直監測麥克風。","當音量超過門檻時，執行跳躍，例如 Y 改變 40，再用滑行或重力方式回到地面。","在觸發後加入 0.2 秒左右的等待，避免一次拍手在很多個畫面更新中被重複判定。","測試門檻是否太低：若平常環境聲也一直觸發，就把數字調高。","測試門檻是否太高：若很大聲仍無法觸發，就把數字調低。","完成檢核：做成兩段反應，例如小聲小跳、大聲大跳。"],concept:'感測器資料通常不是「0 或 1」，而是連續數值。程式要先訂出門檻，才能把真實世界輸入轉成事件。',mistakes:['門檻太低，環境聲就一直觸發','沒有等待，拍一次手跳很多次','瀏覽器未取得麥克風權限'],challenge:'設計兩段音量：小聲小跳、大聲大跳。'},
{n:'S2',type:'補充',title:'用鏡頭玩遊戲：消滅害蟲',short:'透過視訊偵測，把身體動作變成遊戲輸入。',video:'https://www.youtube.com/watch?v=lKrjWAQElCs',goals:['啟用視訊偵測擴充功能','理解視訊動作量概念','設定動作門檻觸發事件','能結合分數與倒數計時'],skills:['視訊偵測','攝影機','動作量','體感'],blocks:[['control','如果 <視訊動作 > 30> 那麼'],['variable','將「分數」改變 1'],['control','等待 0.2 秒']],steps:["從擴充功能加入「視訊偵測」，允許瀏覽器使用攝影機。","開啟視訊畫面，先調整視訊透明度，讓你同時看得到自己與 Scratch 角色。","觀察「視訊動作」數值：保持不動與揮手時比較數字變化。","在舞台上放置一個害蟲角色，設定「如果 視訊動作 > 門檻」作為被打中的條件。","命中後先讓分數 +1，再播放音效或切換造型，給玩家立即回饋。","害蟲被打中後移到另一個位置，讓下一次命中需要重新移動身體。","在命中後加入短暫冷卻，例如等待 0.2 秒，避免同一次揮手連續得很多分。","建立倒數時間，例如 30 秒；時間到後停止計分並顯示總分。","測試不同光線與距離，若畫面太暗或背景一直晃動，重新調整門檻。","完成檢核：在固定時間內可以用身體動作打中目標、正確加分並在時間到後停止。"],concept:'視訊互動不是辨識「這是手」，而是偵測影像中某區域的變化程度。遊戲設計時要用門檻與冷卻時間降低誤判。',mistakes:['光線太暗造成偵測不穩','動作門檻太敏感','每一幀都加分，分數暴增'],challenge:'讓不同角色需要不同方向或區域的動作才得分。'},
{n:'S3',type:'補充',title:'電流急急棒：碰撞與關卡',short:'用碰到顏色／角色製作迷宮與失敗判斷。',video:'https://www.youtube.com/watch?v=Ettr1GCwyLE',goals:['會使用碰到顏色判斷','設計起點、終點與障礙','碰到障礙時回到起點或扣生命','理解造型大小與碰撞區域'],skills:['碰撞','顏色偵測','迷宮','關卡'],blocks:[['control','如果 <碰到顏色？> 那麼'],['variable','將「生命」改變 -1'],['motion','定位到 x:-200 y:-140']],steps:["先在舞台或背景畫出一條可通行的路徑，障礙物使用統一而明確的顏色。","新增玩家角色，尺寸縮小到適合通過路徑，並固定起點座標。","選擇控制方式：可用滑鼠跟隨、方向鍵或其他方式讓角色沿著路徑移動。","在重複迴圈中加入「如果碰到障礙顏色」，用滴管選取正確的障礙顏色。","碰到障礙時可以「回到起點」，或先「生命 -1」再回到起點。","新增終點角色或終點顏色，判斷玩家碰到終點時顯示過關訊息。","測試造型大小：如果明明看起來沒碰到卻判定碰撞，縮小造型或調整透明邊界。","再增加第二段較窄路徑或不同障礙，確認難度是逐步提高而非突然變得無法通過。","重新按綠旗，確認生命、起點與關卡狀態都會重設。","完成檢核：玩家碰到障礙會受到處罰，安全到達終點才算過關。"],concept:'碰到顏色很適合固定地圖；碰到角色適合會移動的物件。造型透明區域與尺寸會影響玩家感受到的碰撞公平性。',mistakes:['障礙用了漸層色，顏色偵測不一致','角色造型太大，明明看起來沒碰到卻判定失敗','回起點後仍壓在障礙上，造成連續扣血'],challenge:'製作第二關，路徑更窄，並加入 60 秒總時間限制。'},
{n:'A1',type:'進階',title:'視訊偵測進階：打擊害蟲',short:'進一步拆解視訊偵測、分數與目標重生。',video:'https://www.youtube.com/watch?v=3l4Z_deN_qM',goals:['把視訊動作量與角色位置結合','目標被打中後隨機重生','控制每次命中的冷卻時間','建立體感遊戲的公平判定'],skills:['視訊進階','隨機重生','冷卻','體感遊戲'],blocks:[['control','如果 <視訊動作於角色上 > 20> 那麼'],['variable','分數改變 1'],['motion','移到隨機位置']],steps:["加入視訊偵測擴充功能並開啟攝影機，先確認畫面與動作數值正常。","選取「害蟲」目標角色，把角色放在舞台容易看見的位置。","改用「角色上的視訊動作」而不是整個舞台的動作量，讓命中判定只看目標附近。","在重複迴圈中加入「如果 角色上的視訊動作 > 20」之類的門檻判斷。","判定命中後先讓分數 +1，再播放音效、切換造型或短暫顯示命中特效。","把害蟲移到隨機位置，建立下一個目標；必要時用 X/Y 範圍限制不要太靠邊。","命中後加入 0.2～0.5 秒冷卻，避免同一個揮手動作在新位置立刻又被算一次。","加入 30 秒或 60 秒倒數，時間到後停止目標移動與加分。","實際站在鏡頭前測試，調整門檻、目標大小與移動範圍，讓命中判定穩定。","完成檢核：同一個動作不會重複灌分，目標也不會生成到畫面外。"],concept:'體感遊戲的設計重點是「可預測但不容易作弊」：目標要清楚、命中回饋要立即、冷卻要適中。',mistakes:['角色移動後仍沿用上一幀的動作判定','目標生成到畫面外','沒有視覺或音效回饋，玩家不知道是否命中'],challenge:'加入連擊：2 秒內連續命中可獲得額外分數。'},
{n:'A2',type:'進階',title:'視訊音樂遊戲：我是小樂手',short:'把鏡頭動作、音效與節奏結合成互動樂器。',video:'https://www.youtube.com/watch?v=ZaK9yJgow2g',goals:['會使用音樂／音效相關積木','把畫面區域分成不同音高或樂器','用視訊動作觸發聲音','避免同一區域連續高速重複播放'],skills:['音效','音樂','視訊','區域互動'],blocks:[['sound','演奏音符 60 0.25 拍'],['control','如果 <視訊動作 > 門檻> 那麼'],['control','等待 0.1 秒']],steps:["加入視訊偵測與音樂／音效擴充功能，確認攝影機與聲音都能正常使用。","在舞台上安排數個不同位置的角色或區塊，每個區塊代表一個音符或一種樂器。","先替第一個區塊設定：如果該角色上的視訊動作超過門檻，就演奏指定音符。","複製程式到其他區塊，分別改成不同音高，例如 C、D、E、F、G。","揮手測試每個區域，確認手移到哪個區域，就只會觸發該區域對應的聲音。","如果一次揮手讓同一個音重複很多次，在播放後加入 0.1～0.3 秒冷卻。","調整音符長度或節拍，避免每個音拖太久造成聲音互相重疊。","加入造型切換、亮起或放大等視覺回饋，讓玩家看得出是哪個音被觸發。","依照簡單旋律排列區域或設計 8 個音階，嘗試用手勢依序演奏。","完成檢核：每個區域有清楚對應的音，觸發不會連發失控，並能演奏一小段旋律。"],concept:'互動音樂其實也是事件系統：感測器產生事件，聲音是回應。把「輸入—判斷—輸出」看清楚，就能設計各種創意互動。',mistakes:['每個音同時被觸發，缺乏區域區隔','音效過長造成重疊','沒有固定節拍，旋律節奏不穩'],challenge:'做八個音階區塊，設計一首可以用手勢演奏的簡單歌曲。'}
];

const blockLabel={event:'事件',motion:'動作',control:'控制',sensing:'偵測',variable:'變數',looks:'外觀',sound:'音效',operator:'運算'};

const masterChecks=[
{id:'m01',title:'能正確開啟 Scratch 並辨認主要操作區',detail:'分得出舞台、角色清單、積木區、程式區、造型與音效分頁。',lessons:['01']},
{id:'m02',title:'能使用綠旗事件啟動程式',detail:'知道角色不會自動執行，會用事件積木建立明確的開始點。',lessons:['01','14']},
{id:'m03',title:'能新增、刪除、命名角色與切換背景',detail:'能管理角色、造型、背景，並避免把程式寫到錯的角色。',lessons:['01','14']},
{id:'m04',title:'能控制角色前進、轉向與碰邊反彈',detail:'理解移動點數、角色方向與旋轉方式的關係。',lessons:['02']},
{id:'m05',title:'能用滑行做出有時間感的移動',detail:'分得出「移到」與「滑行」，可用時間控制動畫速度。',lessons:['03']},
{id:'m06',title:'能讀懂並正確使用 X、Y 座標',detail:'知道右正左負、上正下負，能用座標精準定位角色。',lessons:['04']},
{id:'m07',title:'能用方向鍵完成即時上下左右控制',detail:'會把按鍵偵測放進持續迴圈，並用 X/Y 改變控制玩家。',lessons:['05']},
{id:'m08',title:'能使用重複、等待與條件判斷',detail:'知道什麼應持續執行、什麼只在條件成立時執行。',lessons:['02','05','06','08','13']},
{id:'m09',title:'能設計配角／敵人的自動移動行為',detail:'可使用固定方向、隨機、追蹤、碰邊或重生設計敵人規則。',lessons:['06']},
{id:'m10',title:'能讓玩家發射子彈並處理子彈生命週期',detail:'子彈會從正確位置出發、方向正確，離開畫面或碰撞後會結束。',lessons:['07']},
{id:'m11',title:'能設計敵人定時發射與瞄準玩家',detail:'能拆分「何時射擊」和「子彈如何移動」兩個責任。',lessons:['08']},
{id:'m12',title:'能使用分身產生多顆子彈或多個敵人',detail:'分得出本體與分身，會建立分身、設定分身行為並刪除分身。',lessons:['09','14']},
{id:'m13',title:'能使用碰撞／碰到顏色做事件判定',detail:'能處理玩家、敵人、子彈、障礙物之間的碰撞，而且不會重複誤判。',lessons:['08','S3','14']},
{id:'m14',title:'能建立分數、生命等變數並正確初始化',detail:'會使用「設為」與「改變」，每次綠旗開始時資料會回到正確初始值。',lessons:['10','14']},
{id:'m15',title:'能使用廣播讓不同角色同步合作',detail:'可建立清楚的訊息名稱，讓角色收到開始、勝利、失敗或下一關訊息。',lessons:['11','14']},
{id:'m16',title:'能用遊戲狀態變數管理流程',detail:'知道何時可用共享變數代替廣播，能控制首頁、遊戲中、勝利、失敗等狀態。',lessons:['12','14']},
{id:'m17',title:'能完成正數計時與倒數計時',detail:'可從指定值開始倒數，時間到會觸發結算，不會跑成負數。',lessons:['13','14']},
{id:'m18',title:'能完整處理「開始 → 進行 → 結束 → 再玩一次」',detail:'重新開始後位置、分數、生命、時間、分身與顯示狀態都會正確重設。',lessons:['14']},
{id:'m19',title:'能使用麥克風音量作為遊戲輸入',detail:'會觀察感測數值、設定門檻與冷卻時間，降低誤觸。',lessons:['S1']},
{id:'m20',title:'能使用視訊偵測製作體感互動',detail:'理解視訊偵測是動作量而非辨識手勢，會設定門檻與命中規則。',lessons:['S2','A1','A2']},
{id:'m21',title:'能加入音效、音符或造型作為即時回饋',detail:'程式事件發生時，玩家能從聲音或畫面知道是否成功。',lessons:['A2','14']},
{id:'m22',title:'能自己除錯並說明程式為什麼這樣設計',detail:'會先檢查事件、迴圈、條件、變數與角色，再一次只修改一個問題。',lessons:['01','14']}
];

function readJSON(key,fallback){
  try{
    const raw=localStorage.getItem(key);
    return raw===null?fallback:JSON.parse(raw);
  }catch(_){
    return fallback;
  }
}
function readArray(key){
  const v=readJSON(key,[]);
  return Array.isArray(v)?v:[];
}
function readObject(key){
  const v=readJSON(key,{});
  return v&&typeof v==='object'&&!Array.isArray(v)?v:{};
}
const state={
  selected:localStorage.getItem('s3-selected')||'01',
  done:new Set(readArray('s3-done')),
  mastery:new Set(readArray('s3-mastery')),
  tasks:readObject('s3-tasks'),
  quiz:readObject('s3-quiz'),
  teacher:localStorage.getItem('s3-teacher')==='1'
};
const nav=document.getElementById('lessonNav'), grid=document.getElementById('roadmapGrid'), content=document.getElementById('lessonContent'), search=document.getElementById('searchInput'), mobileSelect=document.getElementById('mobileLessonSelect');
function save(){
  localStorage.setItem('s3-selected',state.selected);
  localStorage.setItem('s3-done',JSON.stringify([...state.done]));
  localStorage.setItem('s3-mastery',JSON.stringify([...state.mastery]));
  localStorage.setItem('s3-tasks',JSON.stringify(state.tasks));
  localStorage.setItem('s3-quiz',JSON.stringify(state.quiz));
  localStorage.setItem('s3-teacher',state.teacher?'1':'0');
}
function progress(){
  document.getElementById('progressText').textContent=`${state.done.size} / ${lessons.length}`;
  document.getElementById('progressBar').style.width=`${state.done.size/lessons.length*100}%`;
}

function renderMobileSelect(){
  if(!mobileSelect)return;
  mobileSelect.innerHTML=lessons.map(l=>`<option value="${l.n}" ${l.n===state.selected?'selected':''}>${state.done.has(l.n)?'✓ ':''}${l.n}｜${l.title}</option>`).join('');
}
function lessonNeighbor(delta){
  const i=lessons.findIndex(l=>l.n===state.selected);
  const j=Math.max(0,Math.min(lessons.length-1,i+delta));
  return lessons[j];
}
function renderNav(filter=''){
  nav.innerHTML='';
  lessons.filter(l=>(l.title+' '+l.short+' '+l.skills.join(' ')).toLowerCase().includes(filter.toLowerCase())).forEach(l=>{
    const b=document.createElement('button');
    b.className='nav-item'+(l.n===state.selected?' active':'');
    b.innerHTML=`<span class="nav-num">${state.done.has(l.n)?'✓':l.n}</span><span>${l.title}</span>`;
    b.onclick=()=>selectLesson(l.n);
    nav.appendChild(b)
  });
}
function renderGrid(filter=''){
  const list=lessons.filter(l=>(l.title+' '+l.short+' '+l.skills.join(' ')).toLowerCase().includes(filter.toLowerCase()));
  grid.innerHTML=list.length?'':'<div class="empty">找不到符合的課程。</div>';
  list.forEach(l=>{
    const card=document.createElement('article');
    card.className='road-card';
    card.innerHTML=`<div class="road-top"><span class="road-index">${state.done.has(l.n)?'✓ '+l.n:l.n}</span><span class="tag">${l.type}</span></div><h3>${l.title}</h3><p>${l.short}</p>`;
    card.onclick=()=>selectLesson(l.n,true);
    grid.appendChild(card)
  });
}
function renderMastery(){
  const host=document.getElementById('masteryGrid');
  if(!host)return;
  document.getElementById('masterySummary').textContent=`${state.mastery.size} / ${masterChecks.length} 已通過`;
  host.innerHTML=masterChecks.map(m=>{
    const passed=state.mastery.has(m.id);
    const mapped=m.lessons.join('、');
    return `<label class="mastery-card ${passed?'passed':''}"><input type="checkbox" data-master="${m.id}" ${passed?'checked':''}><div><h3>${m.title}</h3><p>${m.detail}</p><p class="teacher-only"><b>教師驗收：</b>請學生不看教學，現場操作或口頭說明一次。</p></div><span class="mastery-lessons">課 ${mapped}</span></label>`;
  }).join('');
  host.querySelectorAll('[data-master]').forEach(el=>el.onchange=()=>{
    el.checked?state.mastery.add(el.dataset.master):state.mastery.delete(el.dataset.master);
    save();renderMastery();
  });
}
function getLessonTasks(l){return [...l.goals,`不看教學，獨立完成本課核心功能：${l.skills.slice(0,3).join('、')}`,`完成延伸挑戰：${l.challenge}`]}
function getTaskDone(n){return new Set(state.tasks[n]||[])}
function makeQuiz(l){
  const otherSkills=[...new Set(lessons.flatMap(x=>x.skills))].filter(x=>!l.skills.includes(x));
  const decoys=otherSkills.slice((lessons.indexOf(l)*3)%Math.max(1,otherSkills.length),((lessons.indexOf(l)*3)%Math.max(1,otherSkills.length))+3);
  while(decoys.length<3)decoys.push(['造型','音效','隨機'][decoys.length]);
  const opts1=[l.skills[0],...decoys.slice(0,3)].sort((a,b)=>a.localeCompare(b,'zh-Hant'));
  const firstBlock=l.blocks[0][1];
  const fakeBlocks=['等待 1 秒','移動 10 點','說「完成」2 秒','將分數設為 0'].filter(x=>x!==firstBlock).slice(0,3);
  const opts2=[firstBlock,...fakeBlocks].sort((a,b)=>a.localeCompare(b,'zh-Hant'));
  return [
    {q:`「${l.title}」最核心的技能之一是？`,a:l.skills[0],o:opts1},
    {q:'本課範例程式最前面的核心積木是哪一個？',a:firstBlock,o:opts2},
    {q:'完成本課後，最好的驗收方式是？',a:'不看教學，自己重做核心功能並說明原因',o:['只把影片再看一次','只把積木顏色背起來','不看教學，自己重做核心功能並說明原因','只要截圖交作業即可']}
  ];
}
function renderLesson(){
  const l=lessons.find(x=>x.n===state.selected)||lessons[0];
  const done=state.done.has(l.n);
  const tasks=getLessonTasks(l), taskDone=getTaskDone(l.n);
  const taskPct=Math.round(taskDone.size/tasks.length*100);
  const quiz=makeQuiz(l), quizScore=state.quiz[l.n];
  content.innerHTML=`<article class="lesson-shell">
  <div class="lesson-hero"><div class="lesson-label">${l.type} · LESSON ${l.n}${state.teacher?'<span class="mode-pill">教師模式</span>':''}</div><h2>${l.title}</h2><p>${l.short}</p><div class="lesson-actions"><a class="video-btn" href="${l.video}" target="_blank" rel="noreferrer">觀看原教學影片 ↗</a><button id="doneBtn" class="done-btn ${done?'completed':''}">${done?'✓ 已完成':'標記完成'}</button></div><div class="lesson-pager"><button type="button" id="prevLessonBtn" ${lessons[0].n===l.n?'disabled':''}>← 上一課</button><span>${lessons.indexOf(l)+1} / ${lessons.length}</span><button type="button" id="nextLessonBtn" ${lessons[lessons.length-1].n===l.n?'disabled':''}>下一課 →</button></div></div>
  <div class="lesson-body"><div class="lesson-main">
    <section class="lesson-block"><h3>學習目標</h3><ul class="goal-list">${l.goals.map(x=>`<li>${x}</li>`).join('')}</ul></section>
    <section class="lesson-block"><h3>Scratch 官方積木組合</h3><div class="official-shot-note">這裡不使用自製積木圖。19 課皆以 <strong>Scratch Foundation 官方 scratch-blocks 引擎</strong>呈現可由官方核心直接渲染的積木；每一步也已搭配 Scratch Editor 實際畫面定位卡。視訊偵測、音樂等擴充功能專屬積木由完整 Scratch Editor 動態建立，因此本站不仿製，只標示官方擴充入口與操作位置。</div>${['S2','A1','A2'].includes(l.n)?'<div class="extension-limit-note"><b>擴充積木說明：</b>此課的視訊偵測／音樂觸發積木不是 scratch-blocks 單獨套件中的靜態積木，而是由完整 Scratch 編輯器載入擴充功能後動態建立。網站不自行仿製，改以官方 Editor 截圖補足。</div>':''}<div class="official-workspace-wrap"><div id="officialBlocks" class="official-workspace" data-lesson="${l.n}"><div class="official-loading">正在載入 Scratch 官方積木…</div></div></div><details class="official-fallback"><summary>查看本課積木文字清單</summary><ul class="official-block-list">${l.blocks.map(b=>`<li><span class="block-cat">${blockLabel[b[0]]||'其他'}</span><span class="block-text">${b[1]}</span></li>`).join('')}</ul></details></section>
    <section class="lesson-block"><h3>影片逐步教學｜照著做</h3><p class="step-intro">把影片內容拆成可以逐步操作的流程。完成一個步驟再往下，遇到問題先回到上一個步驟檢查。</p><ol class="step-list">${l.steps.map((x,i)=>`<li><div class="step-text">${x}</div>${renderEditorFocus(l.n,i+1)}<div class="step-official" data-lesson="${l.n}" data-step="${i+1}"></div></li>`).join('')}</ol></section>
    <section class="lesson-block"><h3>一定要懂的觀念</h3><div class="tip">${l.concept}</div></section>
    <section class="lesson-block"><h3>常見錯誤</h3>${l.mistakes.map(x=>`<div class="warning">⚠ ${x}</div>`).join('')}</section>
    <section class="lesson-block"><h3>學生任務卡／本課檢核</h3><div class="task-card"><b>${taskDone.size} / ${tasks.length} 項完成</b><div class="lesson-progress-mini"><i style="width:${taskPct}%"></i></div><div class="task-list">${tasks.map((x,i)=>`<label class="task-item"><input type="checkbox" data-task="${i}" ${taskDone.has(i)?'checked':''}><span>${x}</span></label>`).join('')}</div></div></section>
    <section class="lesson-block"><h3>3 題即時小測驗</h3><form id="quizForm" class="quiz">${quiz.map((q,qi)=>`<div class="quiz-q"><b>${qi+1}. ${q.q}</b><div class="quiz-options">${q.o.map((o,oi)=>`<label><input type="radio" name="q${qi}" value="${escapeHtml(o)}"><span>${o}</span></label>`).join('')}</div></div>`).join('')}<button class="primary-btn" type="submit">送出測驗</button>${typeof quizScore==='number'?`<div class="quiz-result ${quizScore===3?'good':'retry'}">上次成績：${quizScore} / 3</div>`:''}</form></section>
    <section class="lesson-block"><h3>延伸挑戰</h3><div class="challenge">★ ${l.challenge}</div></section>
  </div><aside class="lesson-side">
    <div class="side-card"><h3>本課技能</h3><div class="chips">${l.skills.map(x=>`<span class="chip">${x}</span>`).join('')}</div></div>
    <div class="side-card"><h3>學完要能回答</h3><ul class="check-list"><li>這段程式由什麼事件開始？</li><li>哪一段需要重複？</li><li>資料或角色什麼時候要初始化？</li><li>如果結果不對，你會先檢查哪一個條件？</li></ul></div>
    <div class="side-card teacher-only"><h3>教師驗收重點</h3><div class="teacher-panel">① 請學生先口頭說規則。<br>② 不看影片重做核心功能。<br>③ 任意改一個數值，說明結果會如何改變。<br>④ 綠旗重跑兩次，結果都必須一致。</div></div>
    <div class="side-card"><h3>課堂驗收</h3><p>不看教學影片，自己重新做一次核心功能；再任意修改一個數值或規則，能說明修改後的影響。</p></div>
  </aside></div></article>`;
  window.__pendingOfficialLesson=l.n; if(window.renderOfficialScratchBlocks) window.renderOfficialScratchBlocks(l.n);
  window.__pendingOfficialStepLesson=l.n; if(window.renderOfficialScratchStepBlocks) window.renderOfficialScratchStepBlocks(l.n);
  document.getElementById('doneBtn').onclick=()=>{if(state.done.has(l.n))state.done.delete(l.n);else state.done.add(l.n);save();progress();renderNav(search.value);renderGrid(search.value);renderLesson();};
  document.getElementById('prevLessonBtn').onclick=()=>{const t=lessonNeighbor(-1);if(t.n!==l.n)selectLesson(t.n,true)};
  document.getElementById('nextLessonBtn').onclick=()=>{const t=lessonNeighbor(1);if(t.n!==l.n)selectLesson(t.n,true)};
  content.querySelectorAll('[data-task]').forEach(el=>el.onchange=()=>{
    const set=getTaskDone(l.n),idx=Number(el.dataset.task);el.checked?set.add(idx):set.delete(idx);state.tasks[l.n]=[...set];save();renderLesson();
  });
  document.getElementById('quizForm').onsubmit=e=>{
    e.preventDefault();let score=0;
    quiz.forEach((q,qi)=>{const picked=e.currentTarget.querySelector(`input[name="q${qi}"]:checked`);if(picked&&picked.value===q.a)score++;});
    state.quiz[l.n]=score;save();renderLesson();
  };
}
function escapeHtml(s){return String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;')}
function selectLesson(n,scroll=false){state.selected=n;save();renderNav(search.value);renderMobileSelect();renderLesson();if(scroll)document.getElementById('lessonArea').scrollIntoView({behavior:'smooth',block:'start'});}
search.addEventListener('input',e=>{renderNav(e.target.value);renderGrid(e.target.value)});
if(mobileSelect)mobileSelect.addEventListener('change',e=>selectLesson(e.target.value,true));
document.getElementById('resetProgress').onclick=()=>{state.done.clear();save();progress();renderNav(search.value);renderGrid(search.value);renderLesson()};
document.getElementById('resetMastery').onclick=()=>{state.mastery.clear();save();renderMastery()};
document.getElementById('themeBtn').onclick=()=>{document.body.classList.toggle('dark');localStorage.setItem('s3-theme',document.body.classList.contains('dark')?'dark':'light')};
document.getElementById('teacherModeBtn').onclick=()=>{state.teacher=!state.teacher;document.body.classList.toggle('teacher-mode',state.teacher);document.getElementById('teacherModeBtn').textContent=state.teacher?'生':'師';document.getElementById('teacherModeBtn').title=state.teacher?'切回學生模式':'切換教師模式';save();renderMastery();renderLesson();};
if(localStorage.getItem('s3-theme')==='dark')document.body.classList.add('dark');
document.body.classList.toggle('teacher-mode',state.teacher);document.getElementById('teacherModeBtn').textContent=state.teacher?'生':'師';
renderNav();renderMobileSelect();renderGrid();renderMastery();renderLesson();progress();
