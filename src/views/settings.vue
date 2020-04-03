<template>
  <v-container fluid class="black--text fill-height align-center bg">
    <v-navigation-drawer mini-variant clipped app color="secondary" fixed class="elevation-1">
      <v-list nav>
        <v-btn class="my-2" small fab rounded color="primary" block to="/home">
          <v-icon color="black">
            mdi-home-export-outline mdi-flip-h
          </v-icon>
        </v-btn>
        <v-list-item v-for="(link, i) in routerLinks" :key="i" :to="link.to">
          <v-icon color="black">
            {{ link.icon }}
          </v-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content class="fill-height">
      <router-view/>
    </v-content>
  </v-container>
</template>

<script>
import anime from 'animejs'
export default {
  name: 'settings',
  data: () => ({
    routerLinks: [
      {
        to: '/home/settings/index',
        icon: 'mdi-account-circle'
      },
      {
        to: '/home/settings/add-staff',
        icon: 'mdi-account-plus'
      }
    ]
  }),
  mounted () {
    anime({
      targets: '.bg',
      clipPath: 'circle(143% at  98.5% 2.5%)',
      easing: 'easeInExpo',
      duration: 500,
      loop: false
    }).finished.then(() => {
      this.$vuetify.theme.dark = false
    })
  },
  destroyed () {
    this.$vuetify.theme.dark = true
  }
}
</script>

<style scoped>
.bg {
  clip-path: circle(0% at  98.5% 2.5%);
  background: white;
  will-change: clip-path;
}
</style>
