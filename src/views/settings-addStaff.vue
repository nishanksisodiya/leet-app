<template>
  <v-container fluid>
    <v-select
      label="Type"
      :items="['Department Head', 'Faculty']"
    />
  </v-container>
</template>

<script>
export default {
  name: 'settings-add-staff'
}
</script>

<style scoped>

</style>
