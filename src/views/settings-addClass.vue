<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <v-text-field label="Class Name" v-model="class_.class_name"/>
      </v-col>
      <v-col cols="6">
        <v-select label="Department" :items="deptList" v-model="class_.class_dep"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-combobox
          v-model="class_.class_cams"
          label="Camera IP"
          multiple
          chips
          small-chips
        />
      </v-col>
      <v-col cols="6">
        <v-file-input
          label="Time Table"
          v-model="class_.class_tt"
          accept=".xls, .xlsx, .xlt , .xltx, .xltm, .xla, .xlam, .csv"
        />
      </v-col>
    </v-row>
    <v-footer fixed color="white">
      <v-row justify="end">
        <v-col cols="2">
          <v-btn @click="uploadTT" block color="success">
            submit
          </v-btn>
        </v-col>
      </v-row>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  name: 'settings-addClass',
  data: () => ({
    class_: {
      class_name: null,
      class_dep: null,
      class_tt: null,
      class_cams: null
    }
  }),
  computed: {
    deptList () {
      return this.$session.get('user-data').usr_dep
    }
  },
  methods: {
    uploadTT: () => {
      const fd = this.$toFormData(this.class_)
      console.log(fd)
    }
  }
}
</script>

<style scoped>

</style>
