<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  position: relative;
  margin: unset;
  padding: unset;
}
body,html{
  width: 100%;
  height: 100%;
  margin: unset;
  padding: unset;
}
.hant-icon{
  height: 24px;
  width: 24px;
  margin-right: 10px;
  display: inline-block;
}
.gold{
  color: gold;
}
.green{
  color: #42b983;
}
.flex1{
  flex: 1;
}
.margin0{
  margin: unset;
}
.margin10{
  margin: 0 10px;
}
/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width:2px;
  background-color: #a9acac;
}

/* 滚动槽 */
::-webkit-scrollbar-track {
  border-radius:10px;
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius:10px;
  background: #6c757d;
}
</style>
