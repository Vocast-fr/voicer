import Vuex from 'vuex'

import application from './modules/application'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      application
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