export default {
  state: {
    isActive: false,
    playLocation: undefined,
    item: {},
    audio: {
      isLoading: false,
      isPlaying: false,
      volume: 80,
      currentTime: 0,
    }
  },

  actions: {
    async selectPlayerItem ({ commit }, podcast) {
      await commit('setPlayerItem', podcast)
      commit('setPlayerVisibility', true)
    },

    changePlayerStatus ({ state, commit }, item) {
      let status
      if (item.id === state.item.id) {
        status = state.audio.isPlaying ? false : true
      } else {
        status = true
      }
      commit('setPlayerStatus', status)
    }
  },

  mutations: {
    setPlayerVisibility (state, value) {
      state.isActive = value
    },

    setPlayLocation (state, value) {
      state.playLocation = value
    },

    setPlayerStatus (state, value) {
      state.audio.isPlaying = value
    },

    setPlayerLoading (state, value) {
      state.audio.isLoading = value
    },

    setPlayerItem (state, item) {
      state.item = item
    },

    updatePlayerCurrentTime (state, value) {
      state.audio.currentTime = value
    }
  },

  getters: {
    getPlayerChapters: state => {
      if (state.item.chapters) {
        const chapters = [...state.item.chapters]
        chapters.sort((bip, boop) => {
          if (bip[state.position] > boop[state.position]) {
            return 1
          }
          if(bip[state.position] < boop[state.position]) {
            return -1
          }
          return 0
        })
        return chapters
      }
    }
  }
}