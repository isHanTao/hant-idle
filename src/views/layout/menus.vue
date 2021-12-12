<template>
  <div class="menu-container">
    <div class="menu-header" @click="$router.push('/')">
      <img class="menu-header-logo" src="../../assets/logo.png" alt="">
      <p class="menu-header-text">
        <b>HANT</b>
        <br>
        IDLE
      </p>
    </div>
    <div class="menu-version">
      v1.0
    </div>
    <div class="menu-list">
      <div class="menu-list-item">
        <img class="hant-icon" src="../../assets/icon/gold.svg" alt="">
        <span class="menu-list-item-name">商店</span>
        <img class="hant-icon" src="../../assets/icon/coins.svg" alt="">
        <div class="gold">123456金币</div>
      </div>

      <div class="menu-list-item" @click="$router.push('/bag')">
        <img class="hant-icon" src="../../assets/icon/bank_header.svg" alt="">
        <span class="menu-list-item-name">仓库</span>
        <div>58/65</div>
      </div>
      <div class="menu-list-item">
        <span class="menu-list-item-name menu-list-item-back-text">面板</span>
      </div>
      <div class="menu-list-item" @click="$router.push('battle')">
        <img class="hant-icon" src="../../assets/icon/combat.svg" alt="">
        <span class="menu-list-item-name">战斗等级 66</span>
      </div>
      <div class="menu-list-item">
        <img class="hant-icon" src="../../assets/icon/attack.svg" alt="">
        <span class="menu-list-item-name">攻击</span>
        <div>58/99</div>
      </div>
      <div class="menu-list-item">
        <img class="hant-icon" src="../../assets/icon/strength.svg" alt="">
        <span class="menu-list-item-name">力量</span>
        <div>60/99</div>
      </div>
      <div class="menu-list-item">
        <img class="hant-icon" src="../../assets/icon/defence.svg" alt="">
        <span class="menu-list-item-name">防御</span>
        <div>40/99</div>
      </div>
      <div class="menu-list-item">
        <img class="hant-icon" src="../../assets/icon/hitpoints.svg" alt="">
        <span class="menu-list-item-name">生命值 <span class="green">(610)</span> </span>
        <div>61/99</div>
      </div>

      <div class="menu-list-item">
        <span class="menu-list-item-name menu-list-item-back-text">生活</span>
      </div>

      <div class="menu-list-item">
        <img class="hant-icon" src="../../assets/icon/woodcutting.svg" alt="">
        <span class="menu-list-item-name">伐木 <span class="green">(610)</span> </span>
        <div>61/99</div>
      </div>

      <div class="menu-list-item">
        <img class="hant-icon" src="../../assets/icon/fishing.svg" alt="">
        <span class="menu-list-item-name">钓鱼 </span>
        <div>61/99</div>
      </div>

      <div class="menu-list-item">
        <img class="hant-icon" src="../../assets/icon/firemaking.svg" alt="">
        <span class="menu-list-item-name">生火</span>
        <div>61/99</div>
      </div>

      <div class="menu-list-item">
        <img class="hant-icon" src="../../assets/icon/cooking.svg" alt="">
        <span class="menu-list-item-name">烹饪</span>
        <div>61/99</div>
      </div>

      <div class="menu-list-item">
        <img class="hant-icon" src="../../assets/icon/mining.svg" alt="">
        <span class="menu-list-item-name">采矿</span>
        <div>61/99</div>
      </div>

      <div class="menu-list-item">
        <img class="hant-icon" src="../../assets/icon/smithing.svg" alt="">
        <span class="menu-list-item-name">锻造</span>
        <div>61/99</div>
      </div>

    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.menu-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.menu-header{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgba(255,255,255,.05)!important;
  margin-bottom: 5px;
  height: 64px;
}

.menu-header-logo {
  width: 50px;
  height: 50px;
}

.menu-header-text{
  margin-left: 10px;
}
.menu-version{
  background-color: rgba(255,255,255,.03)!important;
  margin-bottom: 5px;
  line-height: 20px;
}
.menu-list{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.menu-list-item{
  padding:  0 20px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.menu-list-item:hover{
  background-color: #2d3542!important;
}
.menu-list-item-name{
  flex: 1 1 auto;
  max-width: 100%;
  text-align: left;
}
.menu-list-item-back-text{
 color:  rgba(255,255,255,.4)
}

</style>
