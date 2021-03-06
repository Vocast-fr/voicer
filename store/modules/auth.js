export default {
  state: {
    isAuthenticated: localStorage.getItem('sewyn_session') ? true : false,
    session: JSON.parse(localStorage.getItem('sewyn_session')) || {
      jwt: null,
      user: {
        username: 'Anonymous',
        role: {
          type: 'guest'
        }
      }
    }
  },

  actions: {
    async registerUser ({ commit }, formData) {
      try {
        const response = await this.$axios.$post('/auth/local/register', {
          username: formData.username,
          email: formData.email,
          password: formData.password
        })
        await commit('connectUser', response) 
        this.$router.go()
      } catch (error) {
        console.log('An error occurred:', error);
      }
    },

    
    async authenticateUser ({ commit }, formData) {
      try {
        const response = await this.$axios.$post('/auth/local', {
          identifier: formData.identifier,
          password: formData.password
        })
        await commit('connectUser', response)
        this.$router.go()
      } catch (error) {
        console.log('An error occurred:', error);
      }
    },
    
    logOut ({ commit }) {
      commit('disconnectUser')
      this.$router.go()
    }
  },

  mutations: {
    connectUser (state, response) {
      state.token = response.jwt
      state.session.user = response.user
      state.isAuthenticated = true

      this.$axios.setToken(response.jwt, 'Bearer')

      localStorage.setItem('sewyn_session', JSON.stringify(response))
    },

    disconnectUser (state) {
      state.token = null
      state.user = null
      state.isAuthenticated = false

      localStorage.clear()
    },
    
  }
}