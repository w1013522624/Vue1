import Vue from 'vue'
import Vuex from 'vuex'
import State from './state'
import Mutations from './mutations'
import Actions from './actions'

Vue.use(Vuex)

var log = console.log.bind(console)

export default new Vuex.Store({
  state: State,
  actions: Actions,
  mutations: Mutations
})
