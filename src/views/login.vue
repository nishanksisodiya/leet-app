<template>
  <v-container fluid class="pa-0 fill-height align-center bg">
    <v-row justify="center" class="ma-0" align="center">
      <v-col cols="12" sm="12" md="8" xl="8" lg="8">
        <v-card elevation="24" style="border-radius: 10px">
          <v-overlay light absolute :class="{'overlay': true, 'overlay-active': ol}" opacity="1" color="white">
            <transition name="slide" mode="out-in">
              <div :key="'1'" v-if="!ol" class="d-flex flex-column">
                <v-card-title class="black--text">
                  Don't Have an account?
                </v-card-title>
                <v-btn color="success" text rounded @click="moveOverlay()">Sign up</v-btn>
              </div>
              <div :key="'2'" v-else class="d-flex flex-column">
                <v-card-title class="black--text">
                  Already Have an account?
                </v-card-title>
                <v-btn color="success" text rounded @click="moveOverlay()">Log in</v-btn>
              </div>
            </transition>
          </v-overlay>
          <v-row align="center">
            <v-col cols="6">
              <v-card dark elevation="0">
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
                <v-card-actions>
                  <v-row class="justify-center">
                    <v-col cols="6">
                      <v-btn block large class="black--text" @click="register" color="secondary">Register</v-btn>
                    </v-col>
                  </v-row>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="6">
              <v-card dark elevation="0">
                <v-card-title class="secondary--text">LOGIN.</v-card-title>
                <v-card-text>
                  <v-text-field label="Email" v-model="loginInfo.usr_name"/>
                  <v-text-field label="Password" v-model="loginInfo.usr_pwd" type="password"/>
                </v-card-text>
                <v-card-actions>
                  <v-row class="justify-center">
                    <v-col cols="6">
                      <v-btn @click="login" block class="black--text" large color="secondary">Log in</v-btn>
                    </v-col>
                  </v-row>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
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
              <v-btn block color="primary" @click="submitOtp">Submit</v-btn>
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
import anime from 'animejs'
export default {
  name: 'login',
  data: () => ({
    colors: colors,
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
    otp: null,
    ol: false
  }),
  mounted () {
    anime({
      targets: '.bg',
      clipPath: 'circle(100% at  50% 65%)',
      easing: 'easeOutQuad',
      duration: 1000,
      loop: false
    })
  },
  methods: {
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
        if (response.data === 'True') {
          this.$session.start()
          this.$cookies.set('user-data', { email: this.loginInfo.usr_name, fname: 'Nishank', lname: 'Sisodiya' }, '7d', '', '', true)
          this.$session.set('user-data', { email: 'nishanksisodiya@gmail.com', fname: 'Nishank', lname: 'Sisodiya' })
          this.$router.push('/home')
        }
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
    },
    moveOverlay () {
      this.ol = !this.ol
    }
  }
}
</script>

<style scoped>
  .bg {
    background: linear-gradient(135deg, rgba(74,20,140,1) 0%, rgba(170,0,255,1) 100%);
    clip-path: circle(0% at 50% 65%);
    will-change: clip-path;
  }
  .overlay {
    overflow: hidden;
    will-change: transform;
    transform: translateX(0);
    width: 50%;
  }
  .overlay-active {
    transform: translateX(100%);
  }
  .slide-enter-active, .slide-leave-active {
    transition: all 100ms;
  }
  .slide-enter, .slide-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>
