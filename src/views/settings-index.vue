<template>
  <v-container fluid>
    <v-card-title>{{ $session.get('user-data').usr_fname + ' ' + $session.get('user-data').usr_lname }}</v-card-title>
  </v-container>
</template>

<script>
export default {
  name: 'settings-index',
  data: () => ({
    //
  })
}
</script>
