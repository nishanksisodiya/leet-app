import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import ApexCharts from 'vue-apexcharts'
import '@/assets/css/home.css'
import VueCookies from 'vue-cookies'
import axios from 'axios'
import session from 'vue-session'
import vueMoments from 'vue-moment'

Vue.config.productionTip = false
Vue.prototype.$baseUrl = 'https://leet.azurewebsites.net/'
// Vue.prototype.$baseUrl = 'http://localhost:5000/'

// Vue.prototype.$loader = Vue.observable({ val: false })

Vue.use(VueCookies)
Vue.use(session)
Vue.use(ApexCharts)
Vue.use(vueMoments)

Vue.component('apexchart', ApexCharts)
Vue.prototype.$http = axios

Vue.prototype.$toFormData = (data) => {
  const fd = new FormData()
  for (const key in data) {
    fd.append(key, data[key])
  }
  return fd
}

// Disable for production
document.onkeyup = function (e) {
  if (e.altKey && e.key === 'ArrowLeft') {
    window.history.back()
  } else if (e.altKey && e.key === 'ArrowRight') {
    window.history.forward()
  }
}

setInterval(() => {
  this.$http({
    method: 'post',
    url: this.$baseUrl + 'refresh',
    headers: {
      authorization: 'Bearer ' + this.$session.get('auth-data').refreshToken
    }
  })
    .then(res => {
      if (res.status === 201) {
        this.$session.set('auth-data', {
          refreshToken: this.$session.get('auth-data').refreshToken,
          accessToken: res.data.access_token
        })
      }
    })
}, 15 * 60000)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
