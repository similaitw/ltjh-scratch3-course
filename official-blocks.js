const VERSION = '2.1.29';
const CDN_MODULE = './vendor/scratch-blocks/main.mjs';
const MEDIA = './vendor/scratch-blocks/media/';

const XML = {
  '01': `<xml xmlns="https://developers.google.com/blockly/xml">
    <block type="event_whenflagclicked" x="24" y="24">
      <next><block type="looks_sayforsecs">
        <value name="MESSAGE"><shadow type="text"><field name="TEXT">Hello!</field></shadow></value>
        <value name="SECS"><shadow type="math_number"><field name="NUM">2</field></shadow></value>
      </block></next>
    </block>
  </xml>`,
  '02': `<xml xmlns="https://developers.google.com/blockly/xml">
    <block type="event_whenflagclicked" x="24" y="20">
      <next><block type="motion_pointindirection">
        <value name="DIRECTION"><shadow type="math_angle"><field name="NUM">90</field></shadow></value>
        <next><block type="control_forever">
          <statement name="SUBSTACK"><block type="motion_movesteps">
            <value name="STEPS"><shadow type="math_number"><field name="NUM">10</field></shadow></value>
            <next><block type="motion_ifonedgebounce"/></next>
          </block></statement>
        </block></next>
      </block></next>
    </block>
  </xml>`,
  '03': `<xml xmlns="https://developers.google.com/blockly/xml">
    <block type="event_whenflagclicked" x="24" y="18">
      <next><block type="motion_gotoxy">
        <value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
        <value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
        <next><block type="motion_glidesecstoxy">
          <value name="SECS"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
          <value name="X"><shadow type="math_number"><field name="NUM">150</field></shadow></value>
          <value name="Y"><shadow type="math_number"><field name="NUM">80</field></shadow></value>
          <next><block type="control_wait">
            <value name="DURATION"><shadow type="math_positive_number"><field name="NUM">0.5</field></shadow></value>
            <next><block type="motion_glidesecstoxy">
              <value name="SECS"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
              <value name="X"><shadow type="math_number"><field name="NUM">-150</field></shadow></value>
              <value name="Y"><shadow type="math_number"><field name="NUM">80</field></shadow></value>
            </block></next>
          </block></next>
        </block></next>
      </block></next>
    </block>
  </xml>`,
  '04': `<xml xmlns="https://developers.google.com/blockly/xml">
    <block type="event_whenflagclicked" x="24" y="20">
      <next><block type="motion_gotoxy">
        <value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
        <value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
        <next><block type="motion_changexby">
          <value name="DX"><shadow type="math_number"><field name="NUM">10</field></shadow></value>
          <next><block type="motion_changeyby">
            <value name="DY"><shadow type="math_number"><field name="NUM">-10</field></shadow></value>
          </block></next>
        </block></next>
      </block></next>
    </block>
  </xml>`,
  '05': `<xml xmlns="https://developers.google.com/blockly/xml">
    <block type="event_whenflagclicked" x="18" y="12">
      <next><block type="control_forever">
        <statement name="SUBSTACK">
          <block type="control_if">
            <value name="CONDITION"><block type="sensing_keypressed"><value name="KEY_OPTION"><shadow type="sensing_keyoptions"><field name="KEY_OPTION">right arrow</field></shadow></value></block></value>
            <statement name="SUBSTACK"><block type="motion_changexby"><value name="DX"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block></statement>
            <next><block type="control_if">
              <value name="CONDITION"><block type="sensing_keypressed"><value name="KEY_OPTION"><shadow type="sensing_keyoptions"><field name="KEY_OPTION">left arrow</field></shadow></value></block></value>
              <statement name="SUBSTACK"><block type="motion_changexby"><value name="DX"><shadow type="math_number"><field name="NUM">-5</field></shadow></value></block></statement>
              <next><block type="control_if">
                <value name="CONDITION"><block type="sensing_keypressed"><value name="KEY_OPTION"><shadow type="sensing_keyoptions"><field name="KEY_OPTION">up arrow</field></shadow></value></block></value>
                <statement name="SUBSTACK"><block type="motion_changeyby"><value name="DY"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block></statement>
                <next><block type="control_if">
                  <value name="CONDITION"><block type="sensing_keypressed"><value name="KEY_OPTION"><shadow type="sensing_keyoptions"><field name="KEY_OPTION">down arrow</field></shadow></value></block></value>
                  <statement name="SUBSTACK"><block type="motion_changeyby"><value name="DY"><shadow type="math_number"><field name="NUM">-5</field></shadow></value></block></statement>
                </block></next>
              </block></next>
            </block></next>
          </block>
        </statement>
      </block></next>
    </block>
  </xml>`,
  '06': `<xml xmlns="https://developers.google.com/blockly/xml">
    <block type="event_whenflagclicked" x="20" y="18">
      <next><block type="motion_pointindirection">
        <value name="DIRECTION"><block type="operator_random">
          <value name="FROM"><shadow type="math_number"><field name="NUM">-180</field></shadow></value>
          <value name="TO"><shadow type="math_number"><field name="NUM">180</field></shadow></value>
        </block></value>
        <next><block type="control_forever">
          <statement name="SUBSTACK"><block type="motion_movesteps">
            <value name="STEPS"><shadow type="math_number"><field name="NUM">3</field></shadow></value>
            <next><block type="motion_ifonedgebounce"/></next>
          </block></statement>
        </block></next>
      </block></next>
    </block>
  </xml>`,
  '07': `<xml xmlns="https://developers.google.com/blockly/xml">
    <block type="event_whenkeypressed" x="20" y="18"><field name="KEY_OPTION">space</field>
      <next><block type="looks_show">
        <next><block type="motion_pointindirection">
          <value name="DIRECTION"><shadow type="math_angle"><field name="NUM">90</field></shadow></value>
          <next><block type="control_repeat">
            <value name="TIMES"><shadow type="math_whole_number"><field name="NUM">30</field></shadow></value>
            <statement name="SUBSTACK"><block type="motion_movesteps">
              <value name="STEPS"><shadow type="math_number"><field name="NUM">12</field></shadow></value>
            </block></statement>
            <next><block type="looks_hide"/></next>
          </block></next>
        </block></next>
      </block></next>
    </block>
  </xml>`,
  '08': `<xml xmlns="https://developers.google.com/blockly/xml">
    <block type="event_whenflagclicked" x="20" y="18">
      <next><block type="control_forever">
        <statement name="SUBSTACK"><block type="control_wait">
          <value name="DURATION"><shadow type="math_positive_number"><field name="NUM">1</field></shadow></value>
          <next><block type="looks_show">
            <next><block type="motion_pointindirection">
              <value name="DIRECTION"><shadow type="math_angle"><field name="NUM">-90</field></shadow></value>
              <next><block type="control_repeat">
                <value name="TIMES"><shadow type="math_whole_number"><field name="NUM">24</field></shadow></value>
                <statement name="SUBSTACK"><block type="motion_movesteps">
                  <value name="STEPS"><shadow type="math_number"><field name="NUM">10</field></shadow></value>
                </block></statement>
                <next><block type="looks_hide"/></next>
              </block></next>
            </block></next>
          </block></next>
        </block></statement>
      </block></next>
    </block>
  </xml>`,
  '09': `<xml xmlns="https://developers.google.com/blockly/xml">
    <block type="event_whenkeypressed" x="18" y="18"><field name="KEY_OPTION">space</field>
      <next><block type="control_create_clone_of"/></next>
    </block>
    <block type="control_start_as_clone" x="310" y="18">
      <next><block type="looks_show">
        <next><block type="control_repeat">
          <value name="TIMES"><shadow type="math_whole_number"><field name="NUM">30</field></shadow></value>
          <statement name="SUBSTACK"><block type="motion_movesteps">
            <value name="STEPS"><shadow type="math_number"><field name="NUM">12</field></shadow></value>
          </block></statement>
          <next><block type="control_delete_this_clone"/></next>
        </block></next>
      </block></next>
    </block>
  </xml>`,
  '10': `<xml xmlns="https://developers.google.com/blockly/xml">
    <variables>
      <variable id="score">分數</variable>
      <variable id="life">生命</variable>
    </variables>
    <block type="event_whenflagclicked" x="18" y="18">
      <next><block type="data_setvariableto">
        <field name="VARIABLE" id="score">分數</field>
        <value name="VALUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
        <next><block type="data_setvariableto">
          <field name="VARIABLE" id="life">生命</field>
          <value name="VALUE"><shadow type="math_number"><field name="NUM">3</field></shadow></value>
        </block></next>
      </block></next>
    </block>
    <block type="data_changevariableby" x="320" y="18">
      <field name="VARIABLE" id="score">分數</field>
      <value name="VALUE"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
      <next><block type="data_changevariableby">
        <field name="VARIABLE" id="life">生命</field>
        <value name="VALUE"><shadow type="math_number"><field name="NUM">-1</field></shadow></value>
      </block></next>
    </block>
  </xml>`,
  '11': `<xml xmlns="https://developers.google.com/blockly/xml">
    <variables>
      <variable id="score11">分數</variable>
      <variable id="life11">生命</variable>
      <variable type="broadcast_msg" id="win11">勝利</variable>
      <variable type="broadcast_msg" id="lose11">失敗</variable>
    </variables>
    <block type="event_whenflagclicked" x="18" y="18">
      <next><block type="control_forever">
        <statement name="SUBSTACK"><block type="control_if">
          <value name="CONDITION"><block type="operator_gt">
            <value name="OPERAND1"><block type="data_variable"><field name="VARIABLE" id="score11">分數</field></block></value>
            <value name="OPERAND2"><shadow type="math_number"><field name="NUM">9</field></shadow></value>
          </block></value>
          <statement name="SUBSTACK"><block type="event_broadcast">
            <value name="BROADCAST_INPUT"><shadow type="event_broadcast_menu"><field name="BROADCAST_OPTION" id="win11">勝利</field></shadow></value>
          </block></statement>
          <next><block type="control_if">
            <value name="CONDITION"><block type="operator_lt">
              <value name="OPERAND1"><block type="data_variable"><field name="VARIABLE" id="life11">生命</field></block></value>
              <value name="OPERAND2"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
            </block></value>
            <statement name="SUBSTACK"><block type="event_broadcast">
              <value name="BROADCAST_INPUT"><shadow type="event_broadcast_menu"><field name="BROADCAST_OPTION" id="lose11">失敗</field></shadow></value>
            </block></statement>
          </block></next>
        </block></statement>
      </block></next>
    </block>
    <block type="event_whenbroadcastreceived" x="510" y="18"><field name="BROADCAST_OPTION" id="win11">勝利</field>
      <next><block type="looks_sayforsecs">
        <value name="MESSAGE"><shadow type="text"><field name="TEXT">YOU WIN!</field></shadow></value>
        <value name="SECS"><shadow type="math_number"><field name="NUM">2</field></shadow></value>
      </block></next>
    </block>
    <block type="event_whenbroadcastreceived" x="510" y="150"><field name="BROADCAST_OPTION" id="lose11">失敗</field>
      <next><block type="looks_sayforsecs">
        <value name="MESSAGE"><shadow type="text"><field name="TEXT">GAME OVER</field></shadow></value>
        <value name="SECS"><shadow type="math_number"><field name="NUM">2</field></shadow></value>
      </block></next>
    </block>
  </xml>`,
  '12': `<xml xmlns="https://developers.google.com/blockly/xml">
    <variables>
      <variable id="state12">遊戲狀態</variable>
      <variable id="score12">分數</variable>
      <variable id="life12">生命</variable>
    </variables>
    <block type="event_whenflagclicked" x="18" y="18">
      <next><block type="data_setvariableto"><field name="VARIABLE" id="state12">遊戲狀態</field>
        <value name="VALUE"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
        <next><block type="data_setvariableto"><field name="VARIABLE" id="score12">分數</field>
          <value name="VALUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
          <next><block type="data_setvariableto"><field name="VARIABLE" id="life12">生命</field>
            <value name="VALUE"><shadow type="math_number"><field name="NUM">3</field></shadow></value>
            <next><block type="control_forever">
              <statement name="SUBSTACK"><block type="control_if">
                <value name="CONDITION"><block type="operator_gt">
                  <value name="OPERAND1"><block type="data_variable"><field name="VARIABLE" id="score12">分數</field></block></value>
                  <value name="OPERAND2"><shadow type="math_number"><field name="NUM">9</field></shadow></value>
                </block></value>
                <statement name="SUBSTACK"><block type="data_setvariableto"><field name="VARIABLE" id="state12">遊戲狀態</field>
                  <value name="VALUE"><shadow type="math_number"><field name="NUM">2</field></shadow></value>
                </block></statement>
                <next><block type="control_if">
                  <value name="CONDITION"><block type="operator_lt">
                    <value name="OPERAND1"><block type="data_variable"><field name="VARIABLE" id="life12">生命</field></block></value>
                    <value name="OPERAND2"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
                  </block></value>
                  <statement name="SUBSTACK"><block type="data_setvariableto"><field name="VARIABLE" id="state12">遊戲狀態</field>
                    <value name="VALUE"><shadow type="math_number"><field name="NUM">3</field></shadow></value>
                  </block></statement>
                </block></next>
              </block></statement>
            </block></next>
          </block></next>
        </block></next>
      </block></next>
    </block>
  </xml>`,
  '13': `<xml xmlns="https://developers.google.com/blockly/xml">
    <variables><variable id="time13">時間</variable></variables>
    <block type="event_whenflagclicked" x="18" y="18">
      <next><block type="data_setvariableto"><field name="VARIABLE" id="time13">時間</field>
        <value name="VALUE"><shadow type="math_number"><field name="NUM">30</field></shadow></value>
        <next><block type="control_repeat_until">
          <value name="CONDITION"><block type="operator_lt">
            <value name="OPERAND1"><block type="data_variable"><field name="VARIABLE" id="time13">時間</field></block></value>
            <value name="OPERAND2"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
          </block></value>
          <statement name="SUBSTACK"><block type="control_wait">
            <value name="DURATION"><shadow type="math_positive_number"><field name="NUM">1</field></shadow></value>
            <next><block type="data_changevariableby"><field name="VARIABLE" id="time13">時間</field>
              <value name="VALUE"><shadow type="math_number"><field name="NUM">-1</field></shadow></value>
            </block></next>
          </block></statement>
          <next><block type="looks_sayforsecs">
            <value name="MESSAGE"><shadow type="text"><field name="TEXT">時間到！</field></shadow></value>
            <value name="SECS"><shadow type="math_number"><field name="NUM">2</field></shadow></value>
          </block></next>
        </block></next>
      </block></next>
    </block>
  </xml>`,
  '14': `<xml xmlns="https://developers.google.com/blockly/xml">
    <variables>
      <variable id="score14">分數</variable><variable id="life14">生命</variable><variable id="time14">時間</variable><variable id="state14">遊戲狀態</variable>
      <variable type="broadcast_msg" id="start14">開始</variable><variable type="broadcast_msg" id="end14">遊戲結束</variable>
    </variables>
    <block type="event_whenflagclicked" x="18" y="18">
      <next><block type="data_setvariableto"><field name="VARIABLE" id="score14">分數</field><value name="VALUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
        <next><block type="data_setvariableto"><field name="VARIABLE" id="life14">生命</field><value name="VALUE"><shadow type="math_number"><field name="NUM">3</field></shadow></value>
          <next><block type="data_setvariableto"><field name="VARIABLE" id="time14">時間</field><value name="VALUE"><shadow type="math_number"><field name="NUM">30</field></shadow></value>
            <next><block type="data_setvariableto"><field name="VARIABLE" id="state14">遊戲狀態</field><value name="VALUE"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
              <next><block type="event_broadcast"><value name="BROADCAST_INPUT"><shadow type="event_broadcast_menu"><field name="BROADCAST_OPTION" id="start14">開始</field></shadow></value></block></next>
            </block></next>
          </block></next>
        </block></next>
      </block></next>
    </block>
    <block type="event_whenbroadcastreceived" x="490" y="18"><field name="BROADCAST_OPTION" id="start14">開始</field>
      <next><block type="control_repeat_until">
        <value name="CONDITION"><block type="operator_lt"><value name="OPERAND1"><block type="data_variable"><field name="VARIABLE" id="time14">時間</field></block></value><value name="OPERAND2"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block></value>
        <statement name="SUBSTACK"><block type="control_wait"><value name="DURATION"><shadow type="math_positive_number"><field name="NUM">1</field></shadow></value><next><block type="data_changevariableby"><field name="VARIABLE" id="time14">時間</field><value name="VALUE"><shadow type="math_number"><field name="NUM">-1</field></shadow></value></block></next></block></statement>
        <next><block type="event_broadcast"><value name="BROADCAST_INPUT"><shadow type="event_broadcast_menu"><field name="BROADCAST_OPTION" id="end14">遊戲結束</field></shadow></value></block></next>
      </block></next>
    </block>
    <block type="event_whenbroadcastreceived" x="490" y="300"><field name="BROADCAST_OPTION" id="end14">遊戲結束</field>
      <next><block type="data_setvariableto"><field name="VARIABLE" id="state14">遊戲狀態</field><value name="VALUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
        <next><block type="looks_sayforsecs"><value name="MESSAGE"><shadow type="text"><field name="TEXT">遊戲結束</field></shadow></value><value name="SECS"><shadow type="math_number"><field name="NUM">2</field></shadow></value></block></next>
      </block></next>
    </block>
  </xml>`,
  'S1': `<xml xmlns="https://developers.google.com/blockly/xml">
    <block type="event_whenflagclicked" x="18" y="18">
      <next><block type="control_forever">
        <statement name="SUBSTACK"><block type="control_if">
          <value name="CONDITION"><block type="operator_gt">
            <value name="OPERAND1"><block type="sensing_loudness"/></value>
            <value name="OPERAND2"><shadow type="math_number"><field name="NUM">25</field></shadow></value>
          </block></value>
          <statement name="SUBSTACK"><block type="motion_changeyby">
            <value name="DY"><shadow type="math_number"><field name="NUM">40</field></shadow></value>
            <next><block type="control_wait"><value name="DURATION"><shadow type="math_positive_number"><field name="NUM">0.2</field></shadow></value></block></next>
          </block></statement>
        </block></statement>
      </block></next>
    </block>
  </xml>`,
  'S2': `<xml xmlns="https://developers.google.com/blockly/xml">
    <variables><variable id="scoreS2">分數</variable><variable id="timeS2">時間</variable></variables>
    <block type="event_whenflagclicked" x="18" y="18">
      <next><block type="data_setvariableto"><field name="VARIABLE" id="scoreS2">分數</field>
        <value name="VALUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
        <next><block type="data_setvariableto"><field name="VARIABLE" id="timeS2">時間</field>
          <value name="VALUE"><shadow type="math_number"><field name="NUM">30</field></shadow></value>
          <next><block type="control_repeat_until">
            <value name="CONDITION"><block type="operator_lt"><value name="OPERAND1"><block type="data_variable"><field name="VARIABLE" id="timeS2">時間</field></block></value><value name="OPERAND2"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block></value>
            <statement name="SUBSTACK"><block type="control_wait"><value name="DURATION"><shadow type="math_positive_number"><field name="NUM">1</field></shadow></value><next><block type="data_changevariableby"><field name="VARIABLE" id="timeS2">時間</field><value name="VALUE"><shadow type="math_number"><field name="NUM">-1</field></shadow></value></block></next></block></statement>
          </block></next>
        </block></next>
      </block></next>
    </block>
    <block type="data_changevariableby" x="430" y="18"><field name="VARIABLE" id="scoreS2">分數</field><value name="VALUE"><shadow type="math_number"><field name="NUM">1</field></shadow></value><next><block type="motion_goto"><value name="TO"><shadow type="text"><field name="TEXT">隨機位置</field></shadow></value></block></next></block>
  </xml>`,
  'S3': `<xml xmlns="https://developers.google.com/blockly/xml">
    <variables><variable id="lifeS3">生命</variable></variables>
    <block type="event_whenflagclicked" x="18" y="18">
      <next><block type="data_setvariableto"><field name="VARIABLE" id="lifeS3">生命</field><value name="VALUE"><shadow type="math_number"><field name="NUM">3</field></shadow></value>
        <next><block type="motion_gotoxy"><value name="X"><shadow type="math_number"><field name="NUM">-200</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">-140</field></shadow></value>
          <next><block type="control_forever"><statement name="SUBSTACK"><block type="control_if">
            <value name="CONDITION"><block type="sensing_touchingcolor"><value name="COLOR"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value></block></value>
            <statement name="SUBSTACK"><block type="data_changevariableby"><field name="VARIABLE" id="lifeS3">生命</field><value name="VALUE"><shadow type="math_number"><field name="NUM">-1</field></shadow></value>
              <next><block type="motion_gotoxy"><value name="X"><shadow type="math_number"><field name="NUM">-200</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">-140</field></shadow></value></block></next>
            </block></statement>
          </block></statement></block></next>
        </block></next>
      </block></next>
    </block>
  </xml>`,
  'A1': `<xml xmlns="https://developers.google.com/blockly/xml">
    <variables><variable id="scoreA1">分數</variable><variable id="timeA1">時間</variable></variables>
    <block type="event_whenflagclicked" x="18" y="18">
      <next><block type="data_setvariableto"><field name="VARIABLE" id="scoreA1">分數</field><value name="VALUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
        <next><block type="data_setvariableto"><field name="VARIABLE" id="timeA1">時間</field><value name="VALUE"><shadow type="math_number"><field name="NUM">30</field></shadow></value></block></next>
      </block></next>
    </block>
    <block type="data_changevariableby" x="400" y="18"><field name="VARIABLE" id="scoreA1">分數</field><value name="VALUE"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
      <next><block type="motion_goto"><value name="TO"><shadow type="text"><field name="TEXT">隨機位置</field></shadow></value><next><block type="control_wait"><value name="DURATION"><shadow type="math_positive_number"><field name="NUM">0.3</field></shadow></value></block></next></block></next>
    </block>
  </xml>`,
  'A2': `<xml xmlns="https://developers.google.com/blockly/xml">
    <block type="event_whenflagclicked" x="18" y="18">
      <next><block type="sound_setvolumeto"><value name="VOLUME"><shadow type="math_number"><field name="NUM">100</field></shadow></value>
        <next><block type="control_forever"><statement name="SUBSTACK"><block type="sound_play">
          <value name="SOUND_MENU"><shadow type="text"><field name="TEXT">音效</field></shadow></value>
          <next><block type="control_wait"><value name="DURATION"><shadow type="math_positive_number"><field name="NUM">0.2</field></shadow></value></block></next>
        </block></statement></block></next>
      </block></next>
    </block>
  </xml>`
};

const SCRATCH_BLOCK_STYLES = {
  motion: {colourPrimary:'#4C97FF',colourSecondary:'#4280D7',colourTertiary:'#3373CC',colourQuaternary:'#3373CC'},
  looks: {colourPrimary:'#9966FF',colourSecondary:'#855CD6',colourTertiary:'#774DCB',colourQuaternary:'#774DCB'},
  sounds: {colourPrimary:'#CF63CF',colourSecondary:'#C94FC9',colourTertiary:'#BD42BD',colourQuaternary:'#BD42BD'},
  control: {colourPrimary:'#FFAB19',colourSecondary:'#EC9C13',colourTertiary:'#CF8B17',colourQuaternary:'#CF8B17'},
  event: {colourPrimary:'#FFBF00',colourSecondary:'#E6AC00',colourTertiary:'#CC9900',colourQuaternary:'#CC9900'},
  sensing: {colourPrimary:'#5CB1D6',colourSecondary:'#47A8D1',colourTertiary:'#2E8EB8',colourQuaternary:'#2E8EB8'},
  pen: {colourPrimary:'#0FBD8C',colourSecondary:'#0DA57A',colourTertiary:'#0B8E69',colourQuaternary:'#0B8E69'},
  operators: {colourPrimary:'#59C059',colourSecondary:'#46B946',colourTertiary:'#389438',colourQuaternary:'#389438'},
  data: {colourPrimary:'#FF8C1A',colourSecondary:'#FF8000',colourTertiary:'#DB6E00',colourQuaternary:'#DB6E00'},
  data_lists: {colourPrimary:'#FF661A',colourSecondary:'#FF5500',colourTertiary:'#E64D00',colourQuaternary:'#E64D00'},
  more: {colourPrimary:'#FF6680',colourSecondary:'#FF4D6A',colourTertiary:'#FF3355',colourQuaternary:'#FF3355'},
  textField: {colourPrimary:'#FFFFFF',colourSecondary:'#FFFFFF',colourTertiary:'#D9D9D9',colourQuaternary:'#D9D9D9'}
};
function freshScratchTheme(){
  const blockStyles={};
  for(const [name,style] of Object.entries(SCRATCH_BLOCK_STYLES)) blockStyles[name]={...style};
  return {
    blockStyles,
    componentStyles:{
      workspaceBackgroundColour:'#FFFFFF',
      toolboxBackgroundColour:'#FFFFFF',
      flyoutBackgroundColour:'#F9F9F9',
      scrollbarColour:'#CECDCE',
      insertionMarkerColour:'#000000',
      insertionMarkerOpacity:0.2
    }
  };
}

let ScratchBlocks = null;
let loading = null;
let workspace = null;
let currentContainer = null;

function showFallback(container, lesson, message='此課尚未建立官方積木組合。') {
  container.innerHTML = `<div class="official-error"><div><div class="official-badge">官方積木模式</div><br>${message}<br><a href="https://scratch.mit.edu/projects/editor/" target="_blank" rel="noreferrer">開啟 Scratch 官方編輯器 ↗</a></div></div>`;
}

async function loadScratchBlocks() {
  if (ScratchBlocks) return ScratchBlocks;
  if (!loading) {
    loading = import(CDN_MODULE).then(mod => {
      ScratchBlocks = mod;
      if (ScratchBlocks.ScratchMsgs) ScratchBlocks.ScratchMsgs.setLocale('zh-tw');
      return ScratchBlocks;
    });
  }
  return loading;
}

async function render(lesson) {
  const container = document.getElementById('officialBlocks');
  if (!container || container.dataset.lesson !== String(lesson)) return;
  if (!XML[lesson]) {
    showFallback(container, lesson, '補充／進階課正在逐課加入官方積木組合；目前仍可使用下方文字清單與原影片學習。');
    return;
  }
  container.innerHTML = `<div class="official-loading">正在載入 Scratch 官方積木…</div>`;
  try {
    const SB = await loadScratchBlocks();
    if (!document.body.contains(container)) return;
    if (workspace && currentContainer) {
      try { workspace.dispose(); } catch (_) {}
      workspace = null;
    }
    container.innerHTML = '';
    currentContainer = container;
    workspace = SB.inject(container, {
      theme: freshScratchTheme(),
      readOnly: true,
      media: MEDIA,
      scrollbars: false,
      sounds: false,
      trashcan: false,
      comments: false,
      collapse: false,
      disable: false,
      zoom: {controls: false, wheel: false, startScale: 0.82, maxScale: 1.2, minScale: 0.45, scaleSpeed: 1.1},
      move: {scrollbars: false, drag: false, wheel: false}
    });
    const dom = SB.utils.xml.textToDom(XML[lesson]);
    SB.Xml.domToWorkspace(dom, workspace);
    requestAnimationFrame(() => {
      try {
        workspace.zoomToFit();
        const scale = workspace.scale;
        if (scale > 1) workspace.setScale(1);
      } catch (_) {}
    });
  } catch (err) {
    console.error('[official-blocks] load/render failed', err);
    showFallback(container, lesson, 'Scratch 官方積木元件目前無法載入，先顯示文字清單。');
  }
}

window.renderOfficialScratchBlocks = render;
if (window.__pendingOfficialLesson) render(window.__pendingOfficialLesson);

// v9: step-by-step official Scratch block illustrations.
// Only code-building steps receive a block illustration. Pure UI/observation steps are labeled as such.
const STEP_XML = {
  '01': {
    3:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_whenflagclicked" x="18" y="18"/></xml>`,
    4:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_whenflagclicked" x="18" y="18"><next><block type="looks_sayforsecs"><value name="MESSAGE"><shadow type="text"><field name="TEXT">Hello!</field></shadow></value><value name="SECS"><shadow type="math_number"><field name="NUM">2</field></shadow></value></block></next></block></xml>`,
    5:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_whenflagclicked" x="18" y="18"><next><block type="looks_sayforsecs"><value name="MESSAGE"><shadow type="text"><field name="TEXT">Hello!</field></shadow></value><value name="SECS"><shadow type="math_number"><field name="NUM">2</field></shadow></value></block></next></block></xml>`,
    10:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_whenflagclicked" x="18" y="18"><next><block type="looks_sayforsecs"><value name="MESSAGE"><shadow type="text"><field name="TEXT">開始學 Scratch！</field></shadow></value><value name="SECS"><shadow type="math_number"><field name="NUM">2</field></shadow></value></block></next></block></xml>`
  },
  '02': {
    2:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_whenflagclicked" x="18" y="18"><next><block type="motion_pointindirection"><value name="DIRECTION"><shadow type="math_angle"><field name="NUM">90</field></shadow></value></block></next></block></xml>`,
    3:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_whenflagclicked" x="18" y="18"><next><block type="motion_pointindirection"><value name="DIRECTION"><shadow type="math_angle"><field name="NUM">90</field></shadow></value><next><block type="motion_movesteps"><value name="STEPS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block></next></block></next></block></xml>`,
    4:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_whenflagclicked" x="18" y="18"><next><block type="control_forever"><statement name="SUBSTACK"><block type="motion_movesteps"><value name="STEPS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block></statement></block></next></block></xml>`,
    6:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_whenflagclicked" x="18" y="18"><next><block type="control_forever"><statement name="SUBSTACK"><block type="motion_movesteps"><value name="STEPS"><shadow type="math_number"><field name="NUM">10</field></shadow></value><next><block type="motion_ifonedgebounce"/></next></block></statement></block></next></block></xml>`,
    8:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="motion_setrotationstyle" x="18" y="18"><field name="STYLE">left-right</field></block></xml>`,
    9:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="motion_pointindirection" x="18" y="18"><value name="DIRECTION"><shadow type="math_angle"><field name="NUM">90</field></shadow></value></block></xml>`,
    10:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_whenflagclicked" x="18" y="18"><next><block type="motion_setrotationstyle"><field name="STYLE">left-right</field><next><block type="control_forever"><statement name="SUBSTACK"><block type="motion_movesteps"><value name="STEPS"><shadow type="math_number"><field name="NUM">6</field></shadow></value><next><block type="motion_ifonedgebounce"/></next></block></statement></block></next></block></next></block></xml>`
  },
  '03': {
    1:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_whenflagclicked" x="18" y="18"><next><block type="motion_gotoxy"><value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block></next></block></xml>`,
    2:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="motion_glidesecstoxy" x="18" y="18"><value name="SECS"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="X"><shadow type="math_number"><field name="NUM">150</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">80</field></shadow></value></block></xml>`,
    4:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="motion_glidesecstoxy" x="18" y="18"><value name="SECS"><shadow type="math_number"><field name="NUM">2</field></shadow></value><value name="X"><shadow type="math_number"><field name="NUM">150</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">80</field></shadow></value></block></xml>`,
    5:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_whenflagclicked" x="18" y="18"><next><block type="motion_glidesecstoxy"><value name="SECS"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="X"><shadow type="math_number"><field name="NUM">150</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">80</field></shadow></value><next><block type="motion_glidesecstoxy"><value name="SECS"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="X"><shadow type="math_number"><field name="NUM">-150</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">80</field></shadow></value></block></next></block></next></block></xml>`,
    7:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="motion_glidesecstoxy" x="18" y="18"><value name="SECS"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="X"><shadow type="math_number"><field name="NUM">150</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">80</field></shadow></value><next><block type="control_wait"><value name="DURATION"><shadow type="math_positive_number"><field name="NUM">0.5</field></shadow></value><next><block type="motion_glidesecstoxy"><value name="SECS"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="X"><shadow type="math_number"><field name="NUM">-150</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">80</field></shadow></value></block></next></block></next></block></xml>`
  },
  '04': {
    4:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_whenflagclicked" x="18" y="18"><next><block type="motion_gotoxy"><value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block></next></block></xml>`,
    5:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="motion_changexby" x="18" y="18"><value name="DX"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block></xml>`,
    6:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="motion_changexby" x="18" y="18"><value name="DX"><shadow type="math_number"><field name="NUM">-10</field></shadow></value></block></xml>`,
    7:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="motion_changeyby" x="18" y="18"><value name="DY"><shadow type="math_number"><field name="NUM">10</field></shadow></value><next><block type="motion_changeyby"><value name="DY"><shadow type="math_number"><field name="NUM">-10</field></shadow></value></block></next></block></xml>`,
    9:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_whenflagclicked" x="18" y="18"><next><block type="motion_changexby"><value name="DX"><shadow type="math_number"><field name="NUM">100</field></shadow></value><next><block type="motion_changeyby"><value name="DY"><shadow type="math_number"><field name="NUM">100</field></shadow></value><next><block type="motion_changexby"><value name="DX"><shadow type="math_number"><field name="NUM">-100</field></shadow></value><next><block type="motion_changeyby"><value name="DY"><shadow type="math_number"><field name="NUM">-100</field></shadow></value></block></next></block></next></block></next></block></next></block></xml>`
  },
  '05': {
    1:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_whenflagclicked" x="18" y="18"><next><block type="motion_gotoxy"><value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">-100</field></shadow></value></block></next></block></xml>`,
    2:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_whenflagclicked" x="18" y="18"><next><block type="control_forever"/></next></block></xml>`,
    3:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="control_if" x="18" y="18"><value name="CONDITION"><block type="sensing_keypressed"><value name="KEY_OPTION"><shadow type="sensing_keyoptions"><field name="KEY_OPTION">right arrow</field></shadow></value></block></value><statement name="SUBSTACK"><block type="motion_changexby"><value name="DX"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block></statement></block></xml>`,
    4:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="control_if" x="18" y="18"><value name="CONDITION"><block type="sensing_keypressed"><value name="KEY_OPTION"><shadow type="sensing_keyoptions"><field name="KEY_OPTION">right arrow</field></shadow></value></block></value><statement name="SUBSTACK"><block type="motion_changexby"><value name="DX"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block></statement><next><block type="control_if"><value name="CONDITION"><block type="sensing_keypressed"><value name="KEY_OPTION"><shadow type="sensing_keyoptions"><field name="KEY_OPTION">left arrow</field></shadow></value></block></value><statement name="SUBSTACK"><block type="motion_changexby"><value name="DX"><shadow type="math_number"><field name="NUM">-5</field></shadow></value></block></statement></block></next></block></xml>`,
    5:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_whenflagclicked" x="18" y="18"><next><block type="control_forever"><statement name="SUBSTACK"><block type="control_if"><value name="CONDITION"><block type="sensing_keypressed"><value name="KEY_OPTION"><shadow type="sensing_keyoptions"><field name="KEY_OPTION">right arrow</field></shadow></value></block></value><statement name="SUBSTACK"><block type="motion_changexby"><value name="DX"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block></statement><next><block type="control_if"><value name="CONDITION"><block type="sensing_keypressed"><value name="KEY_OPTION"><shadow type="sensing_keyoptions"><field name="KEY_OPTION">left arrow</field></shadow></value></block></value><statement name="SUBSTACK"><block type="motion_changexby"><value name="DX"><shadow type="math_number"><field name="NUM">-5</field></shadow></value></block></statement><next><block type="control_if"><value name="CONDITION"><block type="sensing_keypressed"><value name="KEY_OPTION"><shadow type="sensing_keyoptions"><field name="KEY_OPTION">up arrow</field></shadow></value></block></value><statement name="SUBSTACK"><block type="motion_changeyby"><value name="DY"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block></statement><next><block type="control_if"><value name="CONDITION"><block type="sensing_keypressed"><value name="KEY_OPTION"><shadow type="sensing_keyoptions"><field name="KEY_OPTION">down arrow</field></shadow></value></block></value><statement name="SUBSTACK"><block type="motion_changeyby"><value name="DY"><shadow type="math_number"><field name="NUM">-5</field></shadow></value></block></statement></block></next></block></next></block></next></block></statement></block></next></block></xml>`,
    8:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="motion_changexby" x="18" y="18"><value name="DX"><shadow type="math_number"><field name="NUM">8</field></shadow></value></block></xml>`
,
  '06': {
    2:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="motion_pointindirection" x="18" y="18"><value name="DIRECTION"><shadow type="math_angle"><field name="NUM">90</field></shadow></value></block></xml>`,
    3:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="motion_pointindirection" x="18" y="18"><value name="DIRECTION"><shadow type="math_angle"><field name="NUM">90</field></shadow></value><next><block type="motion_movesteps"><value name="STEPS"><shadow type="math_number"><field name="NUM">3</field></shadow></value></block></next></block></xml>`,
    4:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_whenflagclicked" x="18" y="18"><next><block type="control_forever"><statement name="SUBSTACK"><block type="motion_movesteps"><value name="STEPS"><shadow type="math_number"><field name="NUM">3</field></shadow></value></block></statement></block></next></block></xml>`,
    6:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_whenflagclicked" x="18" y="18"><next><block type="motion_pointindirection"><value name="DIRECTION"><block type="operator_random"><value name="FROM"><shadow type="math_number"><field name="NUM">-180</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">180</field></shadow></value></block></value><next><block type="control_forever"><statement name="SUBSTACK"><block type="motion_movesteps"><value name="STEPS"><shadow type="math_number"><field name="NUM">3</field></shadow></value><next><block type="motion_ifonedgebounce"/></next></block></statement></block></next></block></next></block></xml>`,
    7:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="control_forever" x="18" y="18"><statement name="SUBSTACK"><block type="motion_movesteps"><value name="STEPS"><shadow type="math_number"><field name="NUM">3</field></shadow></value><next><block type="motion_ifonedgebounce"/></next></block></statement></block></xml>`,
    8:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="motion_gotoxy" x="18" y="18"><value name="X"><shadow type="math_number"><field name="NUM">220</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value><next><block type="motion_pointindirection"><value name="DIRECTION"><shadow type="math_angle"><field name="NUM">-90</field></shadow></value></block></next></block></xml>`,
    10:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_whenflagclicked" x="18" y="18"><next><block type="motion_pointindirection"><value name="DIRECTION"><block type="operator_random"><value name="FROM"><shadow type="math_number"><field name="NUM">-180</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">180</field></shadow></value></block></value><next><block type="control_forever"><statement name="SUBSTACK"><block type="motion_movesteps"><value name="STEPS"><shadow type="math_number"><field name="NUM">3</field></shadow></value><next><block type="motion_ifonedgebounce"/></next></block></statement></block></next></block></next></block></xml>`
  },
  '07': {
    2:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_whenflagclicked" x="18" y="18"><next><block type="looks_hide"/></next></block></xml>`,
    3:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_whenkeypressed" x="18" y="18"><field name="KEY_OPTION">space</field></block></xml>`,
    4:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="motion_pointindirection" x="18" y="18"><value name="DIRECTION"><shadow type="math_angle"><field name="NUM">90</field></shadow></value></block></xml>`,
    5:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="looks_show" x="18" y="18"><next><block type="motion_pointindirection"><value name="DIRECTION"><shadow type="math_angle"><field name="NUM">90</field></shadow></value></block></next></block></xml>`,
    6:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="control_repeat" x="18" y="18"><value name="TIMES"><shadow type="math_whole_number"><field name="NUM">30</field></shadow></value><statement name="SUBSTACK"><block type="motion_movesteps"><value name="STEPS"><shadow type="math_number"><field name="NUM">12</field></shadow></value></block></statement></block></xml>`,
    7:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="control_repeat" x="18" y="18"><value name="TIMES"><shadow type="math_whole_number"><field name="NUM">30</field></shadow></value><statement name="SUBSTACK"><block type="motion_movesteps"><value name="STEPS"><shadow type="math_number"><field name="NUM">12</field></shadow></value></block></statement><next><block type="looks_hide"/></next></block></xml>`,
    9:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="control_wait" x="18" y="18"><value name="DURATION"><shadow type="math_positive_number"><field name="NUM">0.2</field></shadow></value></block></xml>`,
    10:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_whenkeypressed" x="18" y="18"><field name="KEY_OPTION">space</field><next><block type="looks_show"><next><block type="motion_pointindirection"><value name="DIRECTION"><shadow type="math_angle"><field name="NUM">90</field></shadow></value><next><block type="control_repeat"><value name="TIMES"><shadow type="math_whole_number"><field name="NUM">30</field></shadow></value><statement name="SUBSTACK"><block type="motion_movesteps"><value name="STEPS"><shadow type="math_number"><field name="NUM">12</field></shadow></value></block></statement><next><block type="looks_hide"/></next></block></next></block></next></block></next></block></xml>`
  },
  '08': {
    1:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_whenflagclicked" x="18" y="18"><next><block type="looks_hide"/></next></block></xml>`,
    2:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_whenflagclicked" x="18" y="18"><next><block type="control_forever"/></next></block></xml>`,
    3:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="control_wait" x="18" y="18"><value name="DURATION"><shadow type="math_positive_number"><field name="NUM">1</field></shadow></value></block></xml>`,
    4:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="motion_pointindirection" x="18" y="18"><value name="DIRECTION"><shadow type="math_angle"><field name="NUM">-90</field></shadow></value></block></xml>`,
    5:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="looks_show" x="18" y="18"><next><block type="control_repeat"><value name="TIMES"><shadow type="math_whole_number"><field name="NUM">24</field></shadow></value><statement name="SUBSTACK"><block type="motion_movesteps"><value name="STEPS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block></statement></block></next></block></xml>`,
    6:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="control_repeat" x="18" y="18"><value name="TIMES"><shadow type="math_whole_number"><field name="NUM">24</field></shadow></value><statement name="SUBSTACK"><block type="motion_movesteps"><value name="STEPS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block></statement><next><block type="looks_hide"/></next></block></xml>`,
    8:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="operator_random" x="18" y="18"><value name="FROM"><shadow type="math_number"><field name="NUM">0.7</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">1.5</field></shadow></value></block></xml>`,
    10:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_whenflagclicked" x="18" y="18"><next><block type="control_forever"><statement name="SUBSTACK"><block type="control_wait"><value name="DURATION"><shadow type="math_positive_number"><field name="NUM">1</field></shadow></value><next><block type="looks_show"><next><block type="motion_pointindirection"><value name="DIRECTION"><shadow type="math_angle"><field name="NUM">-90</field></shadow></value><next><block type="control_repeat"><value name="TIMES"><shadow type="math_whole_number"><field name="NUM">24</field></shadow></value><statement name="SUBSTACK"><block type="motion_movesteps"><value name="STEPS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block></statement><next><block type="looks_hide"/></next></block></next></block></next></block></next></block></statement></block></next></block></xml>`
  },
  '09': {
    1:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_whenflagclicked" x="18" y="18"><next><block type="looks_hide"/></next></block></xml>`,
    2:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_whenkeypressed" x="18" y="18"><field name="KEY_OPTION">space</field><next><block type="control_create_clone_of"/></next></block></xml>`,
    3:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="control_start_as_clone" x="18" y="18"/></xml>`,
    4:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="control_start_as_clone" x="18" y="18"><next><block type="looks_show"/></next></block></xml>`,
    5:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="control_start_as_clone" x="18" y="18"><next><block type="looks_show"><next><block type="control_repeat"><value name="TIMES"><shadow type="math_whole_number"><field name="NUM">30</field></shadow></value><statement name="SUBSTACK"><block type="motion_movesteps"><value name="STEPS"><shadow type="math_number"><field name="NUM">12</field></shadow></value></block></statement></block></next></block></next></block></xml>`,
    8:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="control_delete_this_clone" x="18" y="18"/></xml>`,
    9:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_whenkeypressed" x="18" y="18"><field name="KEY_OPTION">space</field><next><block type="control_create_clone_of"/></next></block><block type="control_start_as_clone" x="300" y="18"><next><block type="looks_show"><next><block type="control_repeat"><value name="TIMES"><shadow type="math_whole_number"><field name="NUM">30</field></shadow></value><statement name="SUBSTACK"><block type="motion_movesteps"><value name="STEPS"><shadow type="math_number"><field name="NUM">12</field></shadow></value></block></statement><next><block type="control_delete_this_clone"/></next></block></next></block></next></block></xml>`,
    10:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="control_start_as_clone" x="18" y="18"><next><block type="looks_show"><next><block type="control_repeat"><value name="TIMES"><shadow type="math_whole_number"><field name="NUM">30</field></shadow></value><statement name="SUBSTACK"><block type="motion_movesteps"><value name="STEPS"><shadow type="math_number"><field name="NUM">12</field></shadow></value></block></statement><next><block type="control_delete_this_clone"/></next></block></next></block></next></block></xml>`
  },
  '10': {
    1:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="score10s1">分數</variable></variables><block type="data_setvariableto" x="18" y="18"><field name="VARIABLE" id="score10s1">分數</field><value name="VALUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block></xml>`,
    2:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="score10s2">分數</variable></variables><block type="event_whenflagclicked" x="18" y="18"><next><block type="data_setvariableto"><field name="VARIABLE" id="score10s2">分數</field><value name="VALUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block></next></block></xml>`,
    3:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="score10s3">分數</variable></variables><block type="data_changevariableby" x="18" y="18"><field name="VARIABLE" id="score10s3">分數</field><value name="VALUE"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block></xml>`,
    5:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="life10s5">生命</variable></variables><block type="event_whenflagclicked" x="18" y="18"><next><block type="data_setvariableto"><field name="VARIABLE" id="life10s5">生命</field><value name="VALUE"><shadow type="math_number"><field name="NUM">3</field></shadow></value></block></next></block></xml>`,
    6:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="life10s6">生命</variable></variables><block type="data_changevariableby" x="18" y="18"><field name="VARIABLE" id="life10s6">生命</field><value name="VALUE"><shadow type="math_number"><field name="NUM">-1</field></shadow></value></block></xml>`,
    9:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="score10s9">分數</variable><variable id="life10s9">生命</variable></variables><block type="event_whenflagclicked" x="18" y="18"><next><block type="data_setvariableto"><field name="VARIABLE" id="score10s9">分數</field><value name="VALUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value><next><block type="data_setvariableto"><field name="VARIABLE" id="life10s9">生命</field><value name="VALUE"><shadow type="math_number"><field name="NUM">3</field></shadow></value></block></next></block></next></block></xml>`,
    10:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="score10s10">分數</variable></variables><block type="control_if" x="18" y="18"><value name="CONDITION"><block type="operator_equals"><value name="OPERAND1"><block type="data_variable"><field name="VARIABLE" id="score10s10">分數</field></block></value><value name="OPERAND2"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block></value><statement name="SUBSTACK"><block type="motion_movesteps"><value name="STEPS"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block></statement></block></xml>`
  },
  '11': {
    1:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable type="broadcast_msg" id="win11s1">勝利</variable><variable type="broadcast_msg" id="lose11s1">失敗</variable></variables><block type="event_broadcast" x="18" y="18"><value name="BROADCAST_INPUT"><shadow type="event_broadcast_menu"><field name="BROADCAST_OPTION" id="win11s1">勝利</field></shadow></value><next><block type="event_broadcast"><value name="BROADCAST_INPUT"><shadow type="event_broadcast_menu"><field name="BROADCAST_OPTION" id="lose11s1">失敗</field></shadow></value></block></next></block></xml>`,
    2:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_whenflagclicked" x="18" y="18"><next><block type="control_forever"/></next></block></xml>`,
    3:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="score11s3">分數</variable><variable type="broadcast_msg" id="win11s3">勝利</variable></variables><block type="control_if" x="18" y="18"><value name="CONDITION"><block type="operator_gt"><value name="OPERAND1"><block type="data_variable"><field name="VARIABLE" id="score11s3">分數</field></block></value><value name="OPERAND2"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block></value><statement name="SUBSTACK"><block type="event_broadcast"><value name="BROADCAST_INPUT"><shadow type="event_broadcast_menu"><field name="BROADCAST_OPTION" id="win11s3">勝利</field></shadow></value></block></statement></block></xml>`,
    4:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="life11s4">生命</variable><variable type="broadcast_msg" id="lose11s4">失敗</variable></variables><block type="control_if" x="18" y="18"><value name="CONDITION"><block type="operator_lt"><value name="OPERAND1"><block type="data_variable"><field name="VARIABLE" id="life11s4">生命</field></block></value><value name="OPERAND2"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block></value><statement name="SUBSTACK"><block type="event_broadcast"><value name="BROADCAST_INPUT"><shadow type="event_broadcast_menu"><field name="BROADCAST_OPTION" id="lose11s4">失敗</field></shadow></value></block></statement></block></xml>`,
    5:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable type="broadcast_msg" id="win11s5">勝利</variable><variable type="broadcast_msg" id="lose11s5">失敗</variable></variables><block type="event_whenbroadcastreceived" x="18" y="18"><field name="BROADCAST_OPTION" id="win11s5">勝利</field><next><block type="looks_sayforsecs"><value name="MESSAGE"><shadow type="text"><field name="TEXT">YOU WIN!</field></shadow></value><value name="SECS"><shadow type="math_number"><field name="NUM">2</field></shadow></value></block></next></block><block type="event_whenbroadcastreceived" x="300" y="18"><field name="BROADCAST_OPTION" id="lose11s5">失敗</field><next><block type="looks_sayforsecs"><value name="MESSAGE"><shadow type="text"><field name="TEXT">GAME OVER</field></shadow></value><value name="SECS"><shadow type="math_number"><field name="NUM">2</field></shadow></value></block></next></block></xml>`,
    6:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable type="broadcast_msg" id="end11s6">遊戲結束</variable></variables><block type="event_whenbroadcastreceived" x="18" y="18"><field name="BROADCAST_OPTION" id="end11s6">遊戲結束</field><next><block type="looks_hide"/></next></block></xml>`,
    8:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable type="broadcast_msg" id="end11s8">遊戲結束</variable></variables><block type="event_whenbroadcastreceived" x="18" y="18"><field name="BROADCAST_OPTION" id="end11s8">遊戲結束</field><next><block type="control_stop"><field name="STOP_OPTION">this script</field></block></next></block></xml>`,
    10:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable type="broadcast_msg" id="next11s10">下一關</variable></variables><block type="event_broadcast" x="18" y="18"><value name="BROADCAST_INPUT"><shadow type="event_broadcast_menu"><field name="BROADCAST_OPTION" id="next11s10">下一關</field></shadow></value></block></xml>`
  },
  '12': {
    1:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="state12s1">遊戲狀態</variable></variables><block type="data_setvariableto" x="18" y="18"><field name="VARIABLE" id="state12s1">遊戲狀態</field><value name="VALUE"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block></xml>`,
    2:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="state12s2">遊戲狀態</variable><variable id="score12s2">分數</variable><variable id="life12s2">生命</variable></variables><block type="event_whenflagclicked" x="18" y="18"><next><block type="data_setvariableto"><field name="VARIABLE" id="state12s2">遊戲狀態</field><value name="VALUE"><shadow type="math_number"><field name="NUM">1</field></shadow></value><next><block type="data_setvariableto"><field name="VARIABLE" id="score12s2">分數</field><value name="VALUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value><next><block type="data_setvariableto"><field name="VARIABLE" id="life12s2">生命</field><value name="VALUE"><shadow type="math_number"><field name="NUM">3</field></shadow></value></block></next></block></next></block></next></block></xml>`,
    3:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="state12s3">遊戲狀態</variable></variables><block type="control_forever" x="18" y="18"><statement name="SUBSTACK"><block type="control_if"><value name="CONDITION"><block type="operator_equals"><value name="OPERAND1"><block type="data_variable"><field name="VARIABLE" id="state12s3">遊戲狀態</field></block></value><value name="OPERAND2"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block></value><statement name="SUBSTACK"><block type="motion_changexby"><value name="DX"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block></statement></block></statement></block></xml>`,
    4:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="state12s4">遊戲狀態</variable><variable id="score12s4">分數</variable></variables><block type="control_if" x="18" y="18"><value name="CONDITION"><block type="operator_gt"><value name="OPERAND1"><block type="data_variable"><field name="VARIABLE" id="score12s4">分數</field></block></value><value name="OPERAND2"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block></value><statement name="SUBSTACK"><block type="data_setvariableto"><field name="VARIABLE" id="state12s4">遊戲狀態</field><value name="VALUE"><shadow type="math_number"><field name="NUM">2</field></shadow></value></block></statement></block></xml>`,
    5:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="state12s5">遊戲狀態</variable><variable id="life12s5">生命</variable></variables><block type="control_if" x="18" y="18"><value name="CONDITION"><block type="operator_lt"><value name="OPERAND1"><block type="data_variable"><field name="VARIABLE" id="life12s5">生命</field></block></value><value name="OPERAND2"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block></value><statement name="SUBSTACK"><block type="data_setvariableto"><field name="VARIABLE" id="state12s5">遊戲狀態</field><value name="VALUE"><shadow type="math_number"><field name="NUM">3</field></shadow></value></block></statement></block></xml>`,
    6:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="state12s6">遊戲狀態</variable></variables><block type="control_if" x="18" y="18"><value name="CONDITION"><block type="operator_equals"><value name="OPERAND1"><block type="data_variable"><field name="VARIABLE" id="state12s6">遊戲狀態</field></block></value><value name="OPERAND2"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block></value><statement name="SUBSTACK"><block type="motion_movesteps"><value name="STEPS"><shadow type="math_number"><field name="NUM">3</field></shadow></value></block></statement></block></xml>`,
    8:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="state12s8">遊戲狀態</variable></variables><block type="data_setvariableto" x="18" y="18"><field name="VARIABLE" id="state12s8">遊戲狀態</field><value name="VALUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value><next><block type="data_setvariableto"><field name="VARIABLE" id="state12s8">遊戲狀態</field><value name="VALUE"><shadow type="math_number"><field name="NUM">1</field></shadow></value><next><block type="data_setvariableto"><field name="VARIABLE" id="state12s8">遊戲狀態</field><value name="VALUE"><shadow type="math_number"><field name="NUM">2</field></shadow></value><next><block type="data_setvariableto"><field name="VARIABLE" id="state12s8">遊戲狀態</field><value name="VALUE"><shadow type="math_number"><field name="NUM">3</field></shadow></value></block></next></block></next></block></next></block></xml>`,
    10:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="state12s10">遊戲狀態</variable></variables><block type="event_whenflagclicked" x="18" y="18"><next><block type="data_setvariableto"><field name="VARIABLE" id="state12s10">遊戲狀態</field><value name="VALUE"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block></next></block></xml>`
  },
  '13': {
    1:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="time13s1">時間</variable></variables><block type="event_whenflagclicked" x="18" y="18"><next><block type="data_setvariableto"><field name="VARIABLE" id="time13s1">時間</field><value name="VALUE"><shadow type="math_number"><field name="NUM">30</field></shadow></value></block></next></block></xml>`,
    2:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="time13s2">時間</variable></variables><block type="control_repeat_until" x="18" y="18"><value name="CONDITION"><block type="operator_equals"><value name="OPERAND1"><block type="data_variable"><field name="VARIABLE" id="time13s2">時間</field></block></value><value name="OPERAND2"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block></value></block></xml>`,
    3:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="time13s3">時間</variable></variables><block type="control_wait" x="18" y="18"><value name="DURATION"><shadow type="math_positive_number"><field name="NUM">1</field></shadow></value><next><block type="data_changevariableby"><field name="VARIABLE" id="time13s3">時間</field><value name="VALUE"><shadow type="math_number"><field name="NUM">-1</field></shadow></value></block></next></block></xml>`,
    5:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable type="broadcast_msg" id="lose13s5">失敗</variable></variables><block type="event_broadcast" x="18" y="18"><value name="BROADCAST_INPUT"><shadow type="event_broadcast_menu"><field name="BROADCAST_OPTION" id="lose13s5">失敗</field></shadow></value></block></xml>`,
    6:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="time13s6">時間</variable></variables><block type="operator_lt" x="18" y="18"><value name="OPERAND1"><block type="data_variable"><field name="VARIABLE" id="time13s6">時間</field></block></value><value name="OPERAND2"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block></xml>`,
    7:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="time13s7">時間</variable></variables><block type="event_whenflagclicked" x="18" y="18"><next><block type="data_setvariableto"><field name="VARIABLE" id="time13s7">時間</field><value name="VALUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value><next><block type="control_forever"><statement name="SUBSTACK"><block type="control_wait"><value name="DURATION"><shadow type="math_positive_number"><field name="NUM">1</field></shadow></value><next><block type="data_changevariableby"><field name="VARIABLE" id="time13s7">時間</field><value name="VALUE"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block></next></block></statement></block></next></block></next></block></xml>`,
    9:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="time13s9">時間</variable></variables><block type="event_whenflagclicked" x="18" y="18"><next><block type="data_setvariableto"><field name="VARIABLE" id="time13s9">時間</field><value name="VALUE"><shadow type="math_number"><field name="NUM">30</field></shadow></value></block></next></block></xml>`,
    10:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="time13s10">時間</variable></variables><block type="operator_divide" x="18" y="18"><value name="NUM1"><block type="data_variable"><field name="VARIABLE" id="time13s10">時間</field></block></value><value name="NUM2"><shadow type="math_number"><field name="NUM">60</field></shadow></value></block></xml>`
  },
  '14': {
    2:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_whenflagclicked" x="18" y="18"><next><block type="looks_show"><next><block type="looks_hide"/></next></block></next></block></xml>`,
    3:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="score14s3">分數</variable><variable id="life14s3">生命</variable><variable id="time14s3">時間</variable><variable id="state14s3">遊戲狀態</variable></variables><block type="event_whenflagclicked" x="18" y="18"><next><block type="data_setvariableto"><field name="VARIABLE" id="score14s3">分數</field><value name="VALUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value><next><block type="data_setvariableto"><field name="VARIABLE" id="life14s3">生命</field><value name="VALUE"><shadow type="math_number"><field name="NUM">3</field></shadow></value><next><block type="data_setvariableto"><field name="VARIABLE" id="time14s3">時間</field><value name="VALUE"><shadow type="math_number"><field name="NUM">30</field></shadow></value><next><block type="data_setvariableto"><field name="VARIABLE" id="state14s3">遊戲狀態</field><value name="VALUE"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block></next></block></next></block></next></block></next></block></xml>`,
    4:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="control_forever" x="18" y="18"><statement name="SUBSTACK"><block type="control_if"><value name="CONDITION"><block type="sensing_keypressed"><value name="KEY_OPTION"><shadow type="sensing_keyoptions"><field name="KEY_OPTION">right arrow</field></shadow></value></block></value><statement name="SUBSTACK"><block type="motion_changexby"><value name="DX"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block></statement><next><block type="control_if"><value name="CONDITION"><block type="sensing_keypressed"><value name="KEY_OPTION"><shadow type="sensing_keyoptions"><field name="KEY_OPTION">up arrow</field></shadow></value></block></value><statement name="SUBSTACK"><block type="motion_changeyby"><value name="DY"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block></statement></block></next></block></statement></block></xml>`,
    5:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_whenkeypressed" x="18" y="18"><field name="KEY_OPTION">space</field><next><block type="control_create_clone_of"/></next></block><block type="control_start_as_clone" x="270" y="18"><next><block type="motion_movesteps"><value name="STEPS"><shadow type="math_number"><field name="NUM">12</field></shadow></value><next><block type="control_delete_this_clone"/></next></block></next></block></xml>`,
    6:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_whenflagclicked" x="18" y="18"><next><block type="control_forever"><statement name="SUBSTACK"><block type="motion_movesteps"><value name="STEPS"><shadow type="math_number"><field name="NUM">3</field></shadow></value><next><block type="motion_ifonedgebounce"/></next></block></statement></block></next></block></xml>`,
    7:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="score14s7">分數</variable><variable id="life14s7">生命</variable></variables><block type="data_changevariableby" x="18" y="18"><field name="VARIABLE" id="score14s7">分數</field><value name="VALUE"><shadow type="math_number"><field name="NUM">1</field></shadow></value><next><block type="data_changevariableby"><field name="VARIABLE" id="life14s7">生命</field><value name="VALUE"><shadow type="math_number"><field name="NUM">-1</field></shadow></value></block></next></block></xml>`,
    8:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="time14s8">時間</variable></variables><block type="control_repeat_until" x="18" y="18"><value name="CONDITION"><block type="operator_equals"><value name="OPERAND1"><block type="data_variable"><field name="VARIABLE" id="time14s8">時間</field></block></value><value name="OPERAND2"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block></value><statement name="SUBSTACK"><block type="control_wait"><value name="DURATION"><shadow type="math_positive_number"><field name="NUM">1</field></shadow></value><next><block type="data_changevariableby"><field name="VARIABLE" id="time14s8">時間</field><value name="VALUE"><shadow type="math_number"><field name="NUM">-1</field></shadow></value></block></next></block></statement></block></xml>`,
    9:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="score14s9">分數</variable><variable id="life14s9">生命</variable><variable type="broadcast_msg" id="win14s9">勝利</variable><variable type="broadcast_msg" id="lose14s9">失敗</variable></variables><block type="control_if" x="18" y="18"><value name="CONDITION"><block type="operator_gt"><value name="OPERAND1"><block type="data_variable"><field name="VARIABLE" id="score14s9">分數</field></block></value><value name="OPERAND2"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block></value><statement name="SUBSTACK"><block type="event_broadcast"><value name="BROADCAST_INPUT"><shadow type="event_broadcast_menu"><field name="BROADCAST_OPTION" id="win14s9">勝利</field></shadow></value></block></statement><next><block type="control_if"><value name="CONDITION"><block type="operator_lt"><value name="OPERAND1"><block type="data_variable"><field name="VARIABLE" id="life14s9">生命</field></block></value><value name="OPERAND2"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block></value><statement name="SUBSTACK"><block type="event_broadcast"><value name="BROADCAST_INPUT"><shadow type="event_broadcast_menu"><field name="BROADCAST_OPTION" id="lose14s9">失敗</field></shadow></value></block></statement></block></next></block></xml>`,
    10:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="score14s10">分數</variable><variable id="life14s10">生命</variable><variable id="time14s10">時間</variable><variable id="state14s10">遊戲狀態</variable></variables><block type="event_whenflagclicked" x="18" y="18"><next><block type="data_setvariableto"><field name="VARIABLE" id="score14s10">分數</field><value name="VALUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value><next><block type="data_setvariableto"><field name="VARIABLE" id="life14s10">生命</field><value name="VALUE"><shadow type="math_number"><field name="NUM">3</field></shadow></value><next><block type="data_setvariableto"><field name="VARIABLE" id="time14s10">時間</field><value name="VALUE"><shadow type="math_number"><field name="NUM">30</field></shadow></value><next><block type="data_setvariableto"><field name="VARIABLE" id="state14s10">遊戲狀態</field><value name="VALUE"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block></next></block></next></block></next></block></next></block></xml>`,
    12:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="life14s12">生命</variable><variable id="time14s12">時間</variable></variables><block type="data_setvariableto" x="18" y="18"><field name="VARIABLE" id="life14s12">生命</field><value name="VALUE"><shadow type="math_number"><field name="NUM">5</field></shadow></value><next><block type="data_setvariableto"><field name="VARIABLE" id="time14s12">時間</field><value name="VALUE"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block></next></block></xml>`
  },
  'S1': {
    3:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="sensing_loudness" x="18" y="18"/></xml>`,
    4:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="operator_gt" x="18" y="18"><value name="OPERAND1"><block type="sensing_loudness"/></value><value name="OPERAND2"><shadow type="math_number"><field name="NUM">25</field></shadow></value></block></xml>`,
    5:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_whenflagclicked" x="18" y="18"><next><block type="control_forever"><statement name="SUBSTACK"><block type="control_if"><value name="CONDITION"><block type="operator_gt"><value name="OPERAND1"><block type="sensing_loudness"/></value><value name="OPERAND2"><shadow type="math_number"><field name="NUM">25</field></shadow></value></block></value></block></statement></block></next></block></xml>`,
    6:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="control_if" x="18" y="18"><value name="CONDITION"><block type="operator_gt"><value name="OPERAND1"><block type="sensing_loudness"/></value><value name="OPERAND2"><shadow type="math_number"><field name="NUM">25</field></shadow></value></block></value><statement name="SUBSTACK"><block type="motion_changeyby"><value name="DY"><shadow type="math_number"><field name="NUM">40</field></shadow></value><next><block type="control_wait"><value name="DURATION"><shadow type="math_positive_number"><field name="NUM">0.15</field></shadow></value><next><block type="motion_changeyby"><value name="DY"><shadow type="math_number"><field name="NUM">-40</field></shadow></value></block></next></block></next></block></statement></block></xml>`,
    7:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="control_wait" x="18" y="18"><value name="DURATION"><shadow type="math_positive_number"><field name="NUM">0.2</field></shadow></value></block></xml>`,
    10:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="control_if" x="18" y="18"><value name="CONDITION"><block type="operator_gt"><value name="OPERAND1"><block type="sensing_loudness"/></value><value name="OPERAND2"><shadow type="math_number"><field name="NUM">55</field></shadow></value></block></value><statement name="SUBSTACK"><block type="motion_changeyby"><value name="DY"><shadow type="math_number"><field name="NUM">70</field></shadow></value></block></statement><next><block type="control_if"><value name="CONDITION"><block type="operator_gt"><value name="OPERAND1"><block type="sensing_loudness"/></value><value name="OPERAND2"><shadow type="math_number"><field name="NUM">25</field></shadow></value></block></value><statement name="SUBSTACK"><block type="motion_changeyby"><value name="DY"><shadow type="math_number"><field name="NUM">35</field></shadow></value></block></statement></block></next></block></xml>`
  },
  'S2': {
    5:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="scoreS2s5">分數</variable></variables><block type="data_changevariableby" x="18" y="18"><field name="VARIABLE" id="scoreS2s5">分數</field><value name="VALUE"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block></xml>`,
    6:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="motion_gotoxy" x="18" y="18"><value name="X"><block type="operator_random"><value name="FROM"><shadow type="math_number"><field name="NUM">-200</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">200</field></shadow></value></block></value><value name="Y"><block type="operator_random"><value name="FROM"><shadow type="math_number"><field name="NUM">-140</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">140</field></shadow></value></block></value></block></xml>`,
    7:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="control_wait" x="18" y="18"><value name="DURATION"><shadow type="math_positive_number"><field name="NUM">0.2</field></shadow></value></block></xml>`,
    8:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="timeS2s8">時間</variable></variables><block type="event_whenflagclicked" x="18" y="18"><next><block type="data_setvariableto"><field name="VARIABLE" id="timeS2s8">時間</field><value name="VALUE"><shadow type="math_number"><field name="NUM">30</field></shadow></value><next><block type="control_repeat_until"><value name="CONDITION"><block type="operator_equals"><value name="OPERAND1"><block type="data_variable"><field name="VARIABLE" id="timeS2s8">時間</field></block></value><value name="OPERAND2"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block></value><statement name="SUBSTACK"><block type="control_wait"><value name="DURATION"><shadow type="math_positive_number"><field name="NUM">1</field></shadow></value><next><block type="data_changevariableby"><field name="VARIABLE" id="timeS2s8">時間</field><value name="VALUE"><shadow type="math_number"><field name="NUM">-1</field></shadow></value></block></next></block></statement></block></next></block></next></block></xml>`
  },
  'S3': {
    2:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="event_whenflagclicked" x="18" y="18"><next><block type="motion_gotoxy"><value name="X"><shadow type="math_number"><field name="NUM">-200</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">-140</field></shadow></value></block></next></block></xml>`,
    4:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="control_forever" x="18" y="18"><statement name="SUBSTACK"><block type="control_if"><value name="CONDITION"><block type="sensing_touchingcolor"><value name="COLOR"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value></block></value></block></statement></block></xml>`,
    5:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="lifeS3s5">生命</variable></variables><block type="control_if" x="18" y="18"><value name="CONDITION"><block type="sensing_touchingcolor"><value name="COLOR"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value></block></value><statement name="SUBSTACK"><block type="data_changevariableby"><field name="VARIABLE" id="lifeS3s5">生命</field><value name="VALUE"><shadow type="math_number"><field name="NUM">-1</field></shadow></value><next><block type="motion_gotoxy"><value name="X"><shadow type="math_number"><field name="NUM">-200</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">-140</field></shadow></value></block></next></block></statement></block></xml>`,
    6:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="control_if" x="18" y="18"><value name="CONDITION"><block type="sensing_touchingcolor"><value name="COLOR"><shadow type="colour_picker"><field name="COLOUR">#00cc66</field></shadow></value></block></value><statement name="SUBSTACK"><block type="looks_sayforsecs"><value name="MESSAGE"><shadow type="text"><field name="TEXT">過關！</field></shadow></value><value name="SECS"><shadow type="math_number"><field name="NUM">2</field></shadow></value></block></statement></block></xml>`,
    9:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="lifeS3s9">生命</variable></variables><block type="event_whenflagclicked" x="18" y="18"><next><block type="data_setvariableto"><field name="VARIABLE" id="lifeS3s9">生命</field><value name="VALUE"><shadow type="math_number"><field name="NUM">3</field></shadow></value><next><block type="motion_gotoxy"><value name="X"><shadow type="math_number"><field name="NUM">-200</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">-140</field></shadow></value></block></next></block></next></block></xml>`
  },
  'A1': {
    5:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="scoreA1s5">分數</variable></variables><block type="data_changevariableby" x="18" y="18"><field name="VARIABLE" id="scoreA1s5">分數</field><value name="VALUE"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block></xml>`,
    6:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="motion_gotoxy" x="18" y="18"><value name="X"><block type="operator_random"><value name="FROM"><shadow type="math_number"><field name="NUM">-200</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">200</field></shadow></value></block></value><value name="Y"><block type="operator_random"><value name="FROM"><shadow type="math_number"><field name="NUM">-140</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">140</field></shadow></value></block></value></block></xml>`,
    7:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="control_wait" x="18" y="18"><value name="DURATION"><shadow type="math_positive_number"><field name="NUM">0.3</field></shadow></value></block></xml>`,
    8:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="timeA1s8">時間</variable></variables><block type="event_whenflagclicked" x="18" y="18"><next><block type="data_setvariableto"><field name="VARIABLE" id="timeA1s8">時間</field><value name="VALUE"><shadow type="math_number"><field name="NUM">30</field></shadow></value><next><block type="control_repeat_until"><value name="CONDITION"><block type="operator_equals"><value name="OPERAND1"><block type="data_variable"><field name="VARIABLE" id="timeA1s8">時間</field></block></value><value name="OPERAND2"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block></value><statement name="SUBSTACK"><block type="control_wait"><value name="DURATION"><shadow type="math_positive_number"><field name="NUM">1</field></shadow></value><next><block type="data_changevariableby"><field name="VARIABLE" id="timeA1s8">時間</field><value name="VALUE"><shadow type="math_number"><field name="NUM">-1</field></shadow></value></block></next></block></statement></block></next></block></next></block></xml>`
  },
  'A2': {
    6:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="control_wait" x="18" y="18"><value name="DURATION"><shadow type="math_positive_number"><field name="NUM">0.2</field></shadow></value></block></xml>`,
    8:`<xml xmlns="https://developers.google.com/blockly/xml"><block type="looks_changesizeby" x="18" y="18"><value name="CHANGE"><shadow type="math_number"><field name="NUM">20</field></shadow></value><next><block type="control_wait"><value name="DURATION"><shadow type="math_positive_number"><field name="NUM">0.1</field></shadow></value><next><block type="looks_changesizeby"><value name="CHANGE"><shadow type="math_number"><field name="NUM">-20</field></shadow></value></block></next></block></next></block></xml>`
  }  }

};

// v18: 修正舊版逐步積木資料曾誤巢狀在第 05 課內的結構。
for(const lesson of ['06','07','08','09','10','11','12','13','14','S1','S2','S3','A1','A2']){
  const nested=STEP_XML['05']?.[lesson];
  if(!STEP_XML[lesson] && nested && typeof nested==='object'){
    STEP_XML[lesson]=nested;
    delete STEP_XML['05'][lesson];
  }
}

const STEP_EXTENSION_NOTE = {
  'S2': {
    1:'這一步使用 Scratch 官方「視訊偵測」擴充功能；完整積木由 Scratch Editor 載入擴充功能後動態產生，網站不仿製。',
    2:'這一步使用官方視訊偵測的「開啟視訊／設定視訊透明度」積木，將以 Scratch Editor 實際畫面截圖補充。',
    3:'這一步使用官方「視訊動作」數值積木，將以完整 Scratch Editor 的實際積木為準。',
    4:'這一步的條件包含官方「視訊動作」積木；核心「如果…那麼」由官方 scratch-blocks 顯示，視訊專屬積木待 Editor 截圖補充。'
  },
  'A1': {
    1:'這一步使用 Scratch 官方「視訊偵測」擴充功能，需由完整 Scratch Editor 動態載入。',
    3:'「角色上的視訊動作」屬於視訊偵測擴充積木，網站不自行重畫，將使用 Scratch Editor 官方畫面。',
    4:'此步驟的視訊動作門檻判斷需要官方視訊偵測積木；完整外觀待官方 Editor 截圖補充。'
  },
  'A2': {
    1:'這一步同時使用 Scratch 官方「視訊偵測」與「音樂」擴充功能，需由完整 Scratch Editor 載入。',
    3:'「角色上的視訊動作」與「演奏音符」都是官方擴充積木，網站不仿製；將使用 Scratch Editor 實際畫面補充。',
    4:'不同音高的「演奏音符」積木屬於 Scratch 音樂擴充功能，待官方 Editor 截圖補充。',
    5:'區域視訊動作判斷屬於視訊偵測擴充積木，待官方 Editor 截圖補充。',
    7:'音符長度／節拍屬於 Scratch 音樂擴充積木，待官方 Editor 截圖補充。'
  }
};

let stepWorkspaces = [];
function disposeStepWorkspaces(){
  for(const ws of stepWorkspaces){ try{ws.dispose();}catch(_){}}
  stepWorkspaces=[];
}
async function renderStepBlocks(lesson){
  const nodes=[...document.querySelectorAll('.step-official')].filter(node=>String(node.dataset.lesson)===String(lesson));
  if(!nodes.length) return;
  disposeStepWorkspaces();
  let SB;
  try{ SB=await loadScratchBlocks(); }catch(err){
    nodes.forEach(n=>{n.className='step-official ui-step';n.textContent='官方積木元件暫時無法載入；請先依文字步驟操作。';});
    return;
  }
  if(String(window.__pendingOfficialStepLesson)!==String(lesson)) return;
  for(const node of nodes){
    const step=Number(node.dataset.step);
    const xml=STEP_XML[lesson]?.[step];
    const extensionNote=STEP_EXTENSION_NOTE[lesson]?.[step];
    if(!xml){
      node.className=extensionNote?'step-official extension-step':'step-official ui-step';
      node.innerHTML=extensionNote?`<div class="step-official-label">SCRATCH 官方擴充積木</div><div>${extensionNote}</div>`:'此步驟屬於介面操作、觀察或測試，不另外放積木圖。';
      continue;
    }
    node.className='step-official has-blocks';
    node.innerHTML='<div class="step-official-label">SCRATCH 官方積木｜本步驟</div><div class="step-block-canvas"></div>';
    const canvas=node.querySelector('.step-block-canvas');
    try{
      const ws=SB.inject(canvas,{theme:freshScratchTheme(),readOnly:true,media:MEDIA,scrollbars:false,sounds:false,trashcan:false,comments:false,collapse:false,disable:false,zoom:{controls:false,wheel:false,startScale:.72,maxScale:1,minScale:.36,scaleSpeed:1.1},move:{scrollbars:false,drag:false,wheel:false}});
      const dom=SB.utils.xml.textToDom(xml); SB.Xml.domToWorkspace(dom,ws); stepWorkspaces.push(ws);
      requestAnimationFrame(()=>{try{ws.zoomToFit(); if(ws.scale>0.9) ws.setScale(0.9);}catch(_){}});
    }catch(err){
      node.className='step-official ui-step'; node.textContent='此步驟的官方積木暫時無法顯示，請依文字操作。';
    }
  }
}
window.renderOfficialScratchStepBlocks=renderStepBlocks;
if(window.__pendingOfficialStepLesson) renderStepBlocks(window.__pendingOfficialStepLesson);
