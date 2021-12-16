<template>
  <div class="title-container">
    <div class="title-name">
      <b>仓库</b>
    </div>
    <div class="title-options">
      <div class="title-info">
        <img @click="show_detail = !show_detail" class="hant-icon margin0" src="../../assets/icon/combat.svg" alt="">
        <div v-show="show_detail" class="title-info-detail">
          info
        </div>
      </div>
      <p>Last Cloud Save <br>
        <b>On 7 分 27 秒 ago</b>
      </p>
      <div class="title-save">
        强制保存
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show_detail: false
    }
  }
}
</script>

<style scoped>

.title-container{
  height: 100%;
  padding: 0 50px;
  color: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title-name{
  font-size: 16px;
}
.title-options{
  text-align: left;
  display: flex;
  align-items: center;
}
.title-save{
  line-height: 20px;
  font-size: 14px;
  font-weight: 600;
  background-color: #42b983;
  padding: 5px;
  border-radius: 5px;
  box-shadow: #a9acac 2px 2px 0;
  cursor: pointer;
  margin: 0 5px;
}
.title-info{
  position: relative;
  cursor: pointer;
}
.title-info-detail{
  position: absolute;
  left: 50%;
  top: calc(100% + 15px);
  transform: translateX(-50%);
  width: 100px;
  height: 100px;
  background-color: #42b983;
}
.title-info{
  margin-right: 10px;
}

</style>
