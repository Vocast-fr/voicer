import Vuex from 'vuex'

import application from './modules/application'
import auth from './modules/auth'
import player from './modules/player'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      application,
      auth,
      player,
    },

    state: {
      
    },

    actions: {

    },

    mutations: {
      
    },

    getters: {

    }
  })
}

export default createStore