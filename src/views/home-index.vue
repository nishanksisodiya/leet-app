<template>
  <v-container fluid class="px-0 fill-height align-center">
    <v-app-bar dense absolute color="transparent" elevation="0" dark>
      <v-spacer/>
      <v-avatar size="25px" color="indigo">
        <v-icon large dark>mdi-account-circle</v-icon>
      </v-avatar>
      <v-card-title>{{ this.$session.get('user-data').fname }}</v-card-title>
      <v-icon>mdi-cog</v-icon>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>

</style>
