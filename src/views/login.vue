<template>
  <v-container fluid class="pa-0 fill-height align-center" style="background: linear-gradient(135deg, rgba(74,20,140,1) 0%, rgba(170,0,255,1) 100%);">
    <v-row justify="center" class="ma-0">
      <v-col cols="12" sm="6" md="6" xl="3" lg="4">
        <transition name="grow" mode="out-in">
          <v-card key="1" class="form-card" dark elevation="24" v-if="registerTab">
            <v-card-title class="secondary--text">Register.</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <v-text-field label="First Name" v-model="registerInfo.usr_fname"/>
                </v-col>
                <v-col cols="6">
                  <v-text-field label="Last Name" v-model="registerInfo.usr_lname"/>
                </v-col>
              </v-row>
              <v-text-field label="Email" v-model="registerInfo.usr_eml"/>
              <v-text-field label="Password" v-model="registerInfo.usr_pwd" type="password"/>
              <v-text-field label="Confirm Password" v-model="cnfPwd" type="password"/>
              <v-text-field label="Phone Number" v-model="registerInfo.usr_phone"/>
              <v-text-field label="Organization" v-model="registerInfo.usr_org"/>
            </v-card-text>
            <v-card-subtitle>
              Already have an account? <a @click="registerHere">Log in.</a>
            </v-card-subtitle>
            <v-card-actions>
              <v-row class="justify-center">
                <v-col cols="6">
                  <v-btn block large class="black--text" @click="register" color="secondary">Register.</v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
          <v-card key="2" class="form-card" dark elevation="24" v-else>
            <v-card-title class="secondary--text">LOGIN.</v-card-title>
            <v-card-text>
              <v-text-field label="Email" v-model="loginInfo.usr_name"/>
              <v-text-field label="Password" v-model="loginInfo.usr_pwd" type="password"/>
            </v-card-text>
            <v-card-subtitle>
              Don't have an account? <a @click="registerHere">Register</a>
            </v-card-subtitle>
            <v-card-actions>
              <v-row class="justify-center">
                <v-col cols="6">
                  <v-btn @click="login" block class="black--text" large color="secondary">Log in.</v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </transition>
      </v-col>
    </v-row>

    <v-dialog width="25%" overlay-color="secondary" overlay-opacity="1" persistent dark v-model="otpModal">
      <v-card>
        <v-card-title class="secondary--text">
          Enter OTP.
        </v-card-title>
        <v-card-subtitle>An OTP has been sent to your e-mail.</v-card-subtitle>
        <v-card-text>
          <v-text-field v-model="otp" outlined label="OTP"/>
        </v-card-text>
        <v-card-actions>
          <v-row justify="center">
            <v-col cols="6">
              <v-btn block color="primary" @click="submitOtp">Submit.</v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import colors from 'vuetify/lib/util/colors'
import axios from 'axios'
export default {
  name: 'login',
  data: () => ({
    colors: colors,
    registerTab: false,
    otpModal: false,
    loginInfo: {
      usr_name: null,
      usr_pwd: null
    },
    registerInfo: {
      usr_eml: null,
      usr_fname: null,
      usr_lname: null,
      usr_pwd: null,
      usr_org: null,
      usr_phone: null
    },
    cnfPwd: null,
    otp: null
  }),
  methods: {
    registerHere () {
      this.registerTab = !this.registerTab
    },
    login () {
      const data = new FormData()
      for (const key in this.loginInfo) {
        data.append(key, this.loginInfo[key])
      }
      axios({
        method: 'post',
        url: this.$baseUrl + 'login',
        data: data
      }).then((response) => {
        console.log(response.data)
        alert('success')
      })
    },
    register () {
      const data = new FormData()
      for (const key in this.registerInfo) {
        data.append(key, this.registerInfo[key])
      }
      axios({
        method: 'post',
        url: this.$baseUrl + 'registerAdmin',
        data: data
      })
        .then(() => {
          this.otpModal = true
        })
        .catch((error) => {
          console.log(error)
        })
    },
    submitOtp () {
      axios({
        method: 'post',
        url: this.$baseUrl + 'verify-email/' + this.registerInfo.usr_eml + '/' + this.otp
      }).then(() => {
        this.$router.go()
      })
    }
  }
}
</script>

<style scoped>
  .grow-enter-active {
    animation: grow-card 285ms cubic-bezier(0.5, 0, 0.75, 0);
  }
  .grow-leave-active {
    animation: grow-card 285ms cubic-bezier(0.5, 0, 0.75, 0) reverse;
  }
  @keyframes grow-card {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
