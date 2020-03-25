import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import '@/assets/css/home.css'
import VueCookies from 'vue-cookies'
import session from 'vue-session'

Vue.config.productionTip = false
Vue.prototype.$baseUrl = 'https://leet.azurewebsites.net/'
// Vue.prototype.$baseUrl = 'http://localhost:5000/'

Vue.use(VueCookies)
Vue.use(session)

// Disable for production
document.onkeyup = function (e) {
  if (e.altKey && e.key === 'ArrowLeft') {
    window.history.back()
  } else if (e.altKey && e.key === 'ArrowRight') {
    window.history.forward()
  }
}

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
