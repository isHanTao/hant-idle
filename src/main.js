import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { player } from './logic/Player'
import { Notification } from 'element-ui'

Vue.prototype.player = player
Vue.prototype.$ELEMENT = { size: 'mini' }
Vue.prototype.notification = Notification
console.log(player)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
