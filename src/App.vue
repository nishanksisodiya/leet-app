import { app } from "electron"
<template>
  <v-app>
    <v-app-bar height="30px" clipped-left class="title-bar" short fixed app dense color="grey darken-4">
      <v-avatar size="30px">
        <logo stroke="#37474f" fill="#37474f"/>
      </v-avatar>
      <v-spacer/>
      <v-icon
        class="title-btn mx-2"
        color="primary"
        @click="min"
      >
        mdi-chevron-down
      </v-icon>
      <v-icon
        class="title-btn mx-2"
        color="yellow"
        @click="max"
      >
        mdi-unfold-more-horizontal
        mdi-rotate-45
      </v-icon>
      <v-icon
        class="title-btn ml-2"
        color="red accent-2"
        @click="close"
      >
        mdi-close-thick
      </v-icon>
    </v-app-bar>
    <v-content>
      <v-container fluid class="pa-0 fill-height">
        <router-view/>
      </v-container>
    </v-content>
    <v-overlay v-model="loader">
      <v-progress-circular indeterminate/>
    </v-overlay>
  </v-app>
</template>

<script>
import logo from '@/components/logo'
const { remote } = require('electron')
export default {
  name: 'App',
  components: {
    logo
  },
  data: () => ({
    loader: false
  }),
  methods: {
    min () {
      remote.getCurrentWindow().minimize()
    },
    max () {
      const currentWindow = remote.getCurrentWindow()
      if (currentWindow.isMaximized()) {
        currentWindow.unmaximize()
      } else {
        currentWindow.maximize()
      }
    },
    close () {
      remote.app.quit()
    }
  },
  created () {
    if (remote.getGlobal('email')) {
      this.$router.push('/login/' + remote.getGlobal('email'))
    }
    console.log('%cSTOP!', 'font-size: 50px; font-weight: bold; color: red')
    console.log('%cIf someone asked you to paste something here you are probably being scammed and your data might be stolen', 'font-size: 15px; font-weight: medium; color: blue')

    this.$http.interceptors.request.use((config) => {
      this.loader = true
      return config
    }, (error) => {
      return Promise.reject(error)
    })

    this.$http.interceptors.response.use((response) => {
      this.loader = false
      return response
    }, (error) => {
      if (error.response.status === 401) {
        this.$router.push('/login')
      }
      this.loader = false
      return Promise.reject(error)
    })
    const auth = this.$cookies.get('refresh-token')
    if (auth) {
      this.$http({
        url: this.$baseUrl + 'refresh',
        method: 'post',
        headers: {
          authorization: 'Bearer ' + auth
        }
      }).then((response) => {
        this.$session.start()
        this.$session.set('auth-data', {
          accessToken: response.data.access_token,
          refreshToken: auth
        })
        this.$http({
          method: 'post',
          url: this.$baseUrl + 'getUserInfo/name',
          headers: {
            authorization: 'Bearer ' + this.$session.get('auth-data').accessToken
          }
        }).then((response) => {
          this.$session.set('user-data', response.data)
          const to = '/base' + (response.data.usr_admin ? '' : '/dept/' + response.data.usr_dep)
          this.$router.push(to)
        }).catch((e) => {
          console.log(e)
        })
      })
    }
  }
}
</script>

<style scoped>
  .title-bar {
    -webkit-app-region: drag;
    z-index: 169;
  }
  .title-btn {
    -webkit-app-region: no-drag;
  }
</style>
