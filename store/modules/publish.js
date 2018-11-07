export default {
  state: {
      
  },

  actions: {
    async submitPodcast ({ dispatch }, data) {
      try {
        await this.$axios.$post(`/podcasts`, {
          title: data.title,
          description: data.description,
          linkAudio: data.audio,
          linkThumbnail: data.thumbnail
        })
  
        dispatch('getApplication')
  
        this.$router.push(`/`)
      } catch (error) {
        console.log('An error occurred:', error)
      }
    },
  },

  mutations: {
    
  },

  getters: {

  }
}