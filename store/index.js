import Vuex from 'vuex'

import application from './modules/application'
import auth from './modules/auth'
import player from './modules/player'
import publication from './modules/publication'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      application,
      auth,
      player,
      publication
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