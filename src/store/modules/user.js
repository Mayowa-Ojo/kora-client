import { ACTIONS, MUTATIONS } from "../../constants/store";
import httpRequest from "../../services/http";

export default {
   state: {
      currentUser: null
   },
   mutations: {
      [MUTATIONS.SET_CURRENT_USER]: function(state, { user }) {
         state.currentUser = user;
      }
   },
   actions: {
      [ACTIONS.FETCH_CURRENT_USER]: async function({ commit }, payload) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const response = await httpRequest(`/users/${payload.id}`, {
            method: "GET"
         });

         console.log("[INFO] --data: \n", response);
         commit(MUTATIONS.SET_STATUS, "done");
         return response;
      }
   },
   getters: {}
}