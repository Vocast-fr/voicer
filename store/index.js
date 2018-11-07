import Vuex from 'vuex'

import application from './modules/application'
import auth from './modules/auth'
import player from './modules/player'
import publish from './modules/publish'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      application,
      auth,
      player,
      publish
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