export default {
  state: {
    isActive: false,
    item: {},
    audio: {
      isPlaying: false,
      volume: 80,
      currentTime: 0,
    }
  },

  actions: {
    async selectPlayerItem ({ commit }, podcast) {
      await commit('setPlayerItem', podcast)
      commit('setPlayerVisibility', true)
      commit('setPlayerStatus', true)
    },

    changePlayerStatus ({ state, commit }) {
      const status = state.audio.isPlaying ? false : true
      console.log(status)
      commit('setPlayerStatus', status)
    }
  },

  mutations: {
    setPlayerVisibility (state, value) {
      state.isActive = value
    },

    setPlayerStatus (state, value) {
      state.audio.isPlaying = value
    },

    setPlayerItem (state, item) {
      state.item = item
    },

  },

  getters: {

  }
}