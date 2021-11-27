<template>
  <div class="home">
    <div class="left-menu">
      <menus />
    </div>
    <div class="main-container">
      我是内容
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import menus from './layout/menus'

export default {
  name: 'Home',
  components: {
    menus
  }
}
</script>

<style scoped>

.home{
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 100%;
  min-width: 320px;
  min-height: 100vh;
  background: url("../assets/bg/bg.jpg") no-repeat center center fixed;
  user-select: none;
  font-size: 14px;
}

.left-menu{
  width: 240px;
  background-color: #272e38;
  color: white;
  min-height: 100vh;
}
.main-container{
  flex: 1;
}
</style>
