export default {
  state: {
    items: [],
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
      console.log(itemId)
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
    }
  },

  getters: {
    
  }
}