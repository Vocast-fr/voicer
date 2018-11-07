import { mapState } from 'vuex'

export default {
   computed: {
    ...mapState({
      auth: state => state.auth.isAuthenticated,
      user: state => state.auth.session.user
    }),
  },

  watch: {
    auth: function (value) {
      this.auth = value
    },

    user: function (value) {
      this.user = value
    }
  }
}