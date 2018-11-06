export default {
  state: {
    isActive: false
  },

  actions: {
    
  },

  mutations: {
    activatePlayer (state) {
      state.isActive = state.isActive ? false : true
    }
  },

  getters: {

  }
}