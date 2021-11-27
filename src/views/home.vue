<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <menus/>
  </div>
</template>

<script>
// @ is an alias to /src
import menus from "./layout/menus";

export default {
  name: 'Home',
  components: {
    menus
  }
}
</script>
