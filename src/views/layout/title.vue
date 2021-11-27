<template>
  <div class="title-container">
    <div class="title-name">
      <b>仓库</b>
    </div>
    <div class="title-options">
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

</style>
