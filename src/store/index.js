import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';

import * as getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,  // process.env.NODE_ENV !== 'production',
  getters,
  modules: {
    app
  },
  state: {
    isAsideOpen: false,
  },
  mutations: {
    setAsisdeVisibility (state, isOpen) {
      state.isAsideOpen = isOpen
    }
  }
})

export default store
