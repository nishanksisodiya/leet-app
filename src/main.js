import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import '@/assets/css/main.css'
import colors from 'vuetify/lib/util/colors'

Vue.config.productionTip = false
Vue.prototype.$colors = colors

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
