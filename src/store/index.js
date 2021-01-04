import Vue from 'vue'
import Vuex from 'vuex'

import * as global from "./global";
import auth from "./modules/auth";
import post from "./modules/post";
import image from "./modules/image";
import user from "./modules/user";
import space from "./modules/space";

Vue.use(Vuex);

export default new Vuex.Store({
   state: global.state,
   mutations: global.mutations,
   actions: global.actions,
   getters: global.getters,
   modules: {
      auth,
      post,
      image,
      user,
      space,
   }
});
