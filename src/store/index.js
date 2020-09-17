import Vue from 'vue'
import Vuex from 'vuex'

import * as global from "./global";

Vue.use(Vuex);

export default new Vuex.Store({
   state: global.state,
   mutations: global.mutations,
   actions: global.actions,
   getters: global.getters,
   modules: {}
})
