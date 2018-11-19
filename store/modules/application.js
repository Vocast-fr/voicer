export default {
  state: {
    items: [],
    waves: []
  },

  actions: {
    async getApplication ({ commit }) {
      try {
        const data = await this.$axios.$get('/podcasts', {
          params: {
            _sort: 'createdAt:desc' // Generates http://localhost:1337/posts?_sort=createdAt:desc
          }
        })
        commit('setApplication', data)
      } catch (err) {
        console.error(err)
      }
    },

    async getWaves ({ commit }) {
      try {
        const data = await this.$axios.$get('/lives', {
          params: {
            _sort: 'createdAt:desc' // Generates http://localhost:1337/posts?_sort=createdAt:desc
          }
        })
        commit('setWaves', data)
      } catch (err) {
        console.error(err)
      }
    },

    // async submitNews ({ dispatch }, data) {
    //   try {
    //     let response
    //     if (data.id) {
    //       response = await this.$axios.$put(`/news/${data.id}`, {
    //         title: data.title,
    //         text: data.text
    //       })
    //     } else {
    //       response = await this.$axios.$post('/news', {
    //         title: data.title,
    //         text: data.text
    //       })
    //     }
    //     dispatch('getNewsFeed')
    //   } catch (error) {
    //     console.log('An error occurred:', error)
    //   }
    // },

    async deleteItem ({ dispatch, router }, itemId) {
      try {
        await this.$axios.$delete(`/podcasts/${itemId}`)
        dispatch('getApplication')
      } catch (error) {
        console.log('An error occurred:', error)
      }
    }
  },

  mutations: {
    setApplication (state, data) {
      state.items = data
    },

    setWaves (state, data) {
      state.waves = data
    }
  },

  getters: {
    
  }
}