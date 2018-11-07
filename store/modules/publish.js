function initialState () {
  return {
    id: undefined,
    title: '',
    description: '',
    linkAudio: '',
    linkThumbnail: ''
  }
}

export default {
  state: initialState(),

  actions: {
    async submitPodcast ({ dispatch }, data) {
      try {
        if (data.id) {
          response = await this.$axios.$put(`/podcasts/${data.id}`, {
            title: data.title,
            description: data.description,
            linkAudio: data.audio,
            linkThumbnail: data.thumbnail
          })
        } else {
          response = await this.$axios.$post('/podcasts', {
            title: data.title,
            description: data.description,
            linkAudio: data.audio,
            linkThumbnail: data.thumbnail
          })
        }
  
        dispatch('getApplication')

        // Force remove state ID to prevent mixed contents
        commit('resetPublicationState')
  
        this.$router.go(-1)
      } catch (error) {
        console.log('An error occurred:', error)
      }
    },
  },

  mutations: {
    setPublicationId (state, id) {
      state.id = id
    },

    resetPublicationState (state) {
      const s = initialState()
      Object.keys(s).forEach(key => {
        state[key] = s[key]
      })
    }
  },

  getters: {

  }
}