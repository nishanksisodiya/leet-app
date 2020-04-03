<template>
  <v-container fluid>
    <v-card-title>{{ $session.get('user-data').fname + ' ' + $session.get('user-data').lname }}</v-card-title>
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
