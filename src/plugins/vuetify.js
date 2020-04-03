import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.purple.accent4,
        secondary: colors.teal.accent3,
        accent: colors.amber.darken1,
        error: colors.red.darken4
      },
      light: {
        primary: colors.purple.accent4,
        secondary: colors.teal.accent3,
        accent: colors.amber.darken1,
        error: colors.red.darken4
      }
    }
  }
})
