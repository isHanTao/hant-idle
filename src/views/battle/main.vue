<template>
  <div class="battle-content">
    <div class="battle-title">
      <div @click="show_level = !show_level">切换技能进度</div>
      <div v-show="show_level" class="battle-info">
        <table class="battle-info-table">
          <thead>
          <tr>
            <th class="text-center" style="width: 50px;"><small>#</small></th>
            <th style="width: 75px;">等级</th>
            <th style="width: 50px;">%</th>
            <th style="width: 100px;">经验值</th>
            <th style="width: auto">进度</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <img class="hant-icon" src="../../assets/icon/attack.svg">
            </td>
            <td>
              1 / 99
            </td>
            <td>
              0 %
            </td>
            <td>
              10 / 2000
            </td>
            <td>
              <el-progress color="#5cb87a" :percentage="50"></el-progress>
            </td>
          </tr>
          <tr>
            <td>
              <img class="hant-icon" src="../../assets/icon/strength.svg">
            </td>
            <td>
              1 / 99
            </td>
            <td>
              0 %
            </td>
            <td>
              10 / 2000
            </td>
            <td>
              <el-progress color="#5cb87a" :percentage="50"></el-progress>
            </td>
          </tr>
          <tr>
            <td>
              <img class="hant-icon" src="../../assets/icon/defence.svg">
            </td>
            <td>
              1 / 99
            </td>
            <td>
              0 %
            </td>
            <td>
              10 / 2000
            </td>
            <td>
              <el-progress color="#5cb87a" :percentage="50"></el-progress>
            </td>
          </tr>
          <tr>
            <td>
              <img class="hant-icon" src="../../assets/icon/hitpoints.svg">
            </td>
            <td>
              1 / 99
            </td>
            <td>
              0 %
            </td>
            <td>
              10 / 2000
            </td>
            <td>
              <el-progress color="#5cb87a" :percentage="50"></el-progress>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="battle-select">
      <div class="battle-select-item battle-info">
        <div class="battle-select-item-left">
          <img class="battle-select-item-img" src="../../assets/icon/combat.svg" alt="">
        </div>
        <div class="battle-select-item-right">
          <p>
            <b>自由战斗</b>
            <br>
            标准战斗训练
            <br>
            怪物种类与掉落</p>
        </div>
      </div>
      <div class="battle-select-item battle-info margin10">
        <div class="battle-select-item-left">
          <img class="battle-select-item-img" src="../../assets/icon/combat.svg" alt="">
        </div>
        <div class="battle-select-item-right">
          <p>
            <b>副本挑战</b>
            <br>
            各种怪物与 Boss
            <br>
            可以获得 Boss 宝箱</p>
        </div>
      </div>
      <div class="battle-select-item battle-info">
        <div class="battle-select-item-left">
          <img class="battle-select-item-img" src="../../assets/icon/combat.svg" alt="">
        </div>
        <div class="battle-select-item-right">
          <p>
            <b>副本挑战</b>
            <br>
            各种怪物与 Boss
            <br>
            可以获得 Boss 宝箱</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Progress } from 'element-ui'

export default {
  components: {
    [Progress.name]: Progress
  },
  data () {
    return {
      show_level: false
    }
  },
  methods: {}
}
</script>

<style scoped>
.battle-content {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.battle-title {
  padding: 10px;
  color: white;
  background-color: #232A35;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 0 1px 2px rgb(33 34 35/50%), 0 1px 2px rgb(26 26 27/50%) !important;
  border-top: 4px solid #A4A4A9;
  display: flex;
  margin-bottom: 10px;
  text-align: left;
  flex-direction: column;
}

.battle-title > div {
  flex: 1;
  line-height: 30px;
}

.battle-info-table {
  width: 100%;
}

.battle-info {
  border-top: 4px solid #A4A4A9;
}

.battle-select {
  display: flex;
}

.battle-select-item {
  flex: 1;
  background-color: #232A35;
  padding: 10px;
  color: white;
  display: flex;
  box-shadow: 0 1px 2px rgb(33 34 35/50%),0 1px 2px rgb(26 26 27/50%)!important;
}

.battle-select-item-img {
  width: 64px;
  height: 64px;
}

.battle-select-item-left {
  display: flex;
  align-items: center;
  justify-content: center;
}

.battle-select-item-right {
  justify-content: left;
  text-align: left;
  margin-left: 10px;
}
.battle-select-item-right > p{
  line-height: 2;
}
</style>
