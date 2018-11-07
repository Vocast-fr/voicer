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

    // deleteNews ({ dispatch }, newsId) {
    //   this.$axios.$delete(`/news/${newsId}`)
    //   .then(response => {
    //     // Handle success.
    //     dispatch('getNewsFeed')
    //   })
    //   .catch(error => {
    //     // Handle error.
    //     console.log('An error occurred:', error)
    //   })
    // }
  },

  mutations: {
    setApplication (state, data) {
      state.items = data
    }
  },

  getters: {
    
  }
}