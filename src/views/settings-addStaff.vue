<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <v-select
          outlined
          label="Type"
          v-model="type"
          :items="[{
            text: 'Department Head',
            value: true
          },
          {
            text: 'Faculty',
            value: false
          }]"
        />
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="1">
        <v-btn v-if="type !== null" @click="addMember" color="success" fab>
          <v-icon>mdi-account-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <div v-if="type === null"/>
    <div v-else-if="type">
      <v-row v-for="(member, i) in hod" :key="i">
        <v-col cols="5">
          <v-text-field label="Email" type="email" v-model="member.hod_email"/>
        </v-col>
        <v-col cols="5">
          <v-text-field label="Department" v-model="member.hod_dep"/>
        </v-col>
        <v-spacer/>
        <v-col v-if="hod.length > 1" cols="1">
          <v-btn @click="rmMember(i)" color="warning" fab>
            <v-icon>mdi-account-minus</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>
    <div v-else>
      <v-row v-for="(member, i) in faculty" :key="i">
        <v-col cols="4">
          <v-text-field label="Name" v-model="member.fac_name"/>
        </v-col>
        <v-col cols="4">
          <v-select label="Department" :items="deptList" v-model="member.fac_dep"/>
        </v-col>
        <v-col cols="3">
          <v-text-field label="ID" v-model="member.fac_id"/>
        </v-col>
        <v-col v-if="faculty.length > 1" cols="1">
          <v-btn @click="rmMember(i)" color="warning" fab>
            <v-icon>mdi-account-minus</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>
    <v-footer fixed color="white">
      <v-row justify="end">
        <v-col cols="2">
          <v-btn block color="success">
            submit
          </v-btn>
        </v-col>
      </v-row>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  name: 'settings-add-staff',
  data: () => ({
    type: null,
    deptList: null,
    hod: [
      {
        hod_eml: null,
        hod_dep: null
      }
    ],
    faculty: [
      {
        fac_name: null,
        fac_dep: null
      }
    ]
  }),
  methods: {
    addMember () {
      if (this.type) {
        this.hod.push({
          hod_eml: null,
          hod_dep: null
        })
      } else {
        this.faculty.push({
          fac_name: null,
          fac_dep: null
        })
      }
    },
    rmMember (i) {
      if (this.type) {
        this.hod.splice(i, 1)
      } else {
        this.faculty.splice(i, 1)
      }
    }
  }
}
</script>

<style scoped>

</style>
