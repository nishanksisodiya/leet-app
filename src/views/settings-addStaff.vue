<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <v-select
        label="Type"
        :items="['Department Head', 'Faculty']"
      />
      </v-col>
      <v-col cols="6">
        <v-text-field label="Email" type="email"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'settings-add-staff'
}
</script>

<style scoped>

</style>
