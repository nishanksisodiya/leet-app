<template>
  <v-container fluid class="black--text fill-height align-center bg">
    <v-navigation-drawer mini-variant clipped app color="white" fixed class="elevation-5">
      <v-list>
        <v-list-item>
          <v-icon color="black">
            mdi-account-circle
          </v-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content class="fill-height">
      <v-container fluid fill-height class="align-start">
        <v-card-title>{{ this.$session.get('user-data').fname + ' ' + this.$session.get('user-data').lname }}</v-card-title>
      </v-container>
    </v-content>
  </v-container>
</template>

<script>
import anime from 'animejs'
export default {
  name: 'home-settings',
  data: () => ({
  }),
  mounted () {
    anime({
      targets: '.bg',
      clipPath: 'circle(143% at  98.5% 2.5%)',
      easing: 'easeInExpo',
      duration: 500,
      loop: false
    })
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
