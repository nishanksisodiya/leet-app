<template>
  <v-container fluid class="px-0 fill-height align-center">
    <v-app-bar dense absolute color="transparent" elevation="0" dark>
      <v-spacer/>
      <v-avatar size="25px" color="indigo">
        <v-icon large dark>mdi-account-circle</v-icon>
      </v-avatar>
      <span class="px-2">{{ this.$session.get('user-data').usr_fname }}</span>
      <v-icon class="set-ico" @click="$router.push('/base/settings')">mdi-cog</v-icon>
    </v-app-bar>
    <v-content class="fill-height">
      <v-container fluid class="fill-height">
        <router-view/>
      </v-container>
    </v-content>
  </v-container>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>
  .set-ico {
    rotation: 0deg;
    transition: transform 1.5s cubic-bezier(0, 0.55, 0.45, 1);
  }
  .set-ico:hover {
    transform: rotate(900deg);
  }
</style>
