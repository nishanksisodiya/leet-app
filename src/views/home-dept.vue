<template>
  <v-container fluid fill-height class="align-content-start">
    <v-navigation-drawer
      width="85%"
      v-model="facultyDash"
      temporary
      app
      right
      dark
      v-if="selectedFac !== null"
    >
      <v-toolbar color="transparent" elevation="0">
        <v-btn dark text fab @click="facultyDash = false">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-toolbar-title>
          {{ selectedFac.fac_name }}
        </v-toolbar-title>
      </v-toolbar>
      <v-content>
        <facultyDash :data="selectedFac"/>
      </v-content>
    </v-navigation-drawer>

    <v-navigation-drawer
      width="85%"
      v-model="classDash"
      temporary
      app
      right
      dark
      v-if="selectedClass !== null"
    >
      <v-toolbar color="transparent" elevation="0">
        <v-btn dark text fab @click="classDash = false">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-toolbar-title>
          {{ selectedClass.class_name }}
        </v-toolbar-title>
      </v-toolbar>
      <v-content>
        <classDash :data="selectedClass"/>
      </v-content>
    </v-navigation-drawer>

    <v-row v-if="isReady">
      <v-col cols="6">
        <v-row>
          <v-col lg="6" xl="4" v-for="(class_, i) in dashData.class_ana" :key="i">
            <v-card :color="getColor(i)" @click="selectClass(class_)">
              <v-card-title>
                {{ class_.class_name }}
              </v-card-title>
              <v-card-subtitle>
                Last updated {{ new Date(Date.parse(class_.date)) | moment('MMMM Do YYYY, h:mm:ss a') }}
              </v-card-subtitle>
              <v-card-text>
                Overall Rating: <span>{{ class_.analysis.overall_rate }}</span><br>
                Class Response:<br>
                <div class="resp">
                  Happy Students: <span class="green--text">{{ class_.analysis.happy_per }}</span><br>
                  Neutral Students: <span>{{ class_.analysis.neutral_per }}</span><br>
                  Unhappy Students: <span class="red--text">{{ class_.analysis.unhappy_per }}</span><br>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-data-table
          dark
          :headers="facTableHeaders"
          :items="dashData.fac_ana"
          :items-per-page="itemPerPage"
          @click:row="openFacDash"
          class="elevation-1"
        ></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import facultyDash from '../components/facultyDash'
import classDash from '../components/classDash'
export default {
  name: 'home-dept',
  components: {
    facultyDash,
    classDash
  },
  data: () => ({
    dashData: null,
    facTableHeaders: [
      {
        text: 'Name',
        value: 'fac_name'
      },
      {
        text: 'ID',
        value: 'fac_id'
      },
      {
        text: 'Overall rating',
        value: 'overall_rate'
      }
    ],
    facultyDash: false,
    classDash: false,
    selectedFac: null,
    selectedClass: null,
    itemPerPage: 15,
    isReady: false
  }),
  created () {
    this.$http({
      method: 'POST',
      url: this.$baseUrl + 'dashboardData/' + this.$route.params.deptName,
      headers: {
        authorization: 'Bearer ' + this.$session.get('auth-data').accessToken
      }
    })
      .then((response) => {
        this.dashData = response.data
        this.isReady = true
      })
  },
  // watch: {
  //   dashData: {
  //     deep: true,
  //     handler () {
  //       console.log(this.dashData.fac_ana)
  //     }
  //   }
  // },
  methods: {
    getColor (x) {
      const comp = this.dashData.class_ana[x].analysis
      if (parseInt(comp.happy_per) >= parseInt(comp.neutral_per) && parseInt(comp.happy_per) >= parseInt(comp.unhappy_per)) {
        return 'rgba(11,252,3,0.04)'
      } else if (parseInt(comp.neutral_per) >= parseInt(comp.happy_per) && parseInt(comp.neutral_per) >= parseInt(comp.unhappy_per)) {
        return null
      } else {
        return 'rgba(252,3,3,0.06)'
      }
    },
    openFacDash (item) {
      this.selectedFac = item
      this.facultyDash = true
    },
    selectClass (item) {
      this.selectedClass = item
      this.classDash = true
    }
  }
}
</script>

<style scoped>
  .resp {
    padding-left: 1em;
  }
</style>
