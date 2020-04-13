<template>
  <v-container fluid class="black--text fill-height align-center bg">
    <v-navigation-drawer mini-variant clipped app color="secondary" fixed class="elevation-1">
      <v-list nav color="transparent">
        <v-btn class="my-2" small fab rounded color="primary" block :to="this.$session.get('user-data').usr_admin ? '/base' : '/base/dept/' + this.$session.get('user-data').usr_dep">
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
      <template v-slot:append>
        <v-list nav color="transparent">
          <v-btn dark class="my-2" @click="logout" small fab rounded color="error" block>
            <v-icon>
              mdi-logout-variant
            </v-icon>
          </v-btn>
        </v-list>
      </template>
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
        to: '/base/settings/index',
        icon: 'mdi-account-circle'
      },
      {
        to: '/base/settings/add-staff',
        icon: 'mdi-account-plus'
      },
      {
        to: '/base/settings/add-class',
        icon: 'mdi-calendar-month-outline'
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
      this.$http({
        method: 'POST',
        url: this.$baseUrl + 'getUserInfo/all',
        headers: {
          authorization: 'Bearer ' + this.$session.get('auth-data').accessToken
        }
      })
        .then((response) => {
          this.$session.set('user-info-all', response.data)
        })
    })
  },
  methods: {
    logout () {
      this.$session.clear()
      this.$cookies.remove('refresh-token')
      this.$router.push('/login')
    }
  },
  destroyed () {
    this.$session.remove('user-info-all')
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
