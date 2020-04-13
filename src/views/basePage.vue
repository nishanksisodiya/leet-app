<template>
  <v-container fluid class="pa-0 fill-height align-center">
    <h2 class="pa-4">{{ this.$route.name }}</h2>
    <router-view/>
  </v-container>
</template>

<script>
export default {
  name: 'basePage'
}
</script>

<style scoped>

</style>
