<template>
  <v-app dark >
    <v-app-bar height="30px" class="title-bar" short fixed app dense color="grey darken-4">
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
    <v-container fluid class="pa-0 fill-height">
      <router-view/>
    </v-container>
  </v-app>
</template>

<script>
const { remote } = require('electron')
export default {
  name: 'App',
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
