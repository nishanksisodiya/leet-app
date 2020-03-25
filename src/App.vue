<template>
  <v-app dark >
    <v-app-bar height="30px" class="title-bar" short fixed app dense color="grey darken-4">
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
        class="title-btn mx-2"
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
    console.log('%cSTOP!', 'font-size: 50px; font-weight: bold; color: red')
    console.log('%cIf someone asked you to paste something here you are probably being scammed and your data might be stolen', 'font-size: 15px; font-weight: medium; color: blue')
    const sess = this.$cookies.get('user-data')
    if (sess) {
      this.$session.start()
      this.$session.set('user-data', { email: 'nishanksisodiya@gmail.com', name: 'Nishank Sisodiya' })
      this.$router.push(' /home')
    }
  }
}
</script>

<style scoped>
  .title-bar {
    -webkit-app-region: drag;
  }
  .title-btn {
    -webkit-app-region: no-drag;
  }
</style>
