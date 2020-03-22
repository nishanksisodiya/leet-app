<template>
  <v-container fluid class="pa-0 fill-height align-center" :style="'background-color: ' + colors.teal.accent4">
    <v-row justify="center" class="ma-0">
      <v-col cols="12" sm="6" md="6" xl="2" lg="3">
        <v-card dark elevation="24">
          <v-card-title>LOGIN.</v-card-title>
          <v-card-text>
            <v-text-field label="Username"/>
            <v-text-field label="Password" type="password"/>
          </v-card-text>
          <v-card-subtitle>
            Don't have an account? Register <a>here</a>
          </v-card-subtitle>
          <v-card-actions>
            <v-row class="justify-center">
              <v-col cols="6">
                <v-btn block large :color="colors.purple.accent4">Log in.</v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import colors from 'vuetify/lib/util/colors'
export default {
  name: 'login',
  data: () => ({
    colors: colors
  }),
  created () {

  }
}
</script>

<style scoped>

</style>
