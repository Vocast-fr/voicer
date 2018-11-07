import { mapState } from 'vuex'

export default {
   computed: {
    ...mapState({
      auth: state => state.auth.isAuthenticated,
      user: state => state.auth.session.user
    }),

    isAdmin: function () {
      return this.user ? this.user.role.type === 'root' : false
    }
  },
}