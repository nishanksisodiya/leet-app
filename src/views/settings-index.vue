<template>
  <v-container fluid>
    <v-form ref="userInfoForm">
      <v-row>
        <v-card-title><v-icon>mdi-account</v-icon>{{ $session.get('user-data').usr_fname + ' ' + $session.get('user-data').usr_lname }}</v-card-title>
        <v-spacer/>
        <v-col cols="1">
          <v-btn @click="edit()" text fab>
            <v-icon>
              mdi-pencil
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4">
          <v-text-field :readonly="isLocked" :filled="isLocked" label="First Name" v-model="userInfo.usr_fname"/>
        </v-col>
        <v-col cols="4">
          <v-text-field :readonly="isLocked" :filled="isLocked" label="Last Name" v-model="userInfo.usr_lname"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-text-field :readonly="isLocked" :filled="isLocked" cols="4" label="Email" v-model="userInfo.usr_eml"/>
          <v-text-field :readonly="isLocked" :filled="isLocked" label="Phone Number" v-model="userInfo.usr_phone"/>
          <v-text-field :readonly="isLocked" :filled="isLocked" label="Organization" v-model="userInfo.usr_comp"/>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'settings-index',
  data: () => ({
    isLocked: true
  }),
  computed: {
    userInfo () {
      return this.$session.get('user-info-all')
    }
  },
  watch: {
    userInfo: {
      deep: true,
      handler () {
        this.$forceUpdate()
      }
    }
  },
  methods: {
    edit () {
      this.isLocked = !this.isLocked
    }
  }
}
</script>
