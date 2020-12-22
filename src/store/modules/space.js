import { ACTIONS, MUTATIONS } from "../../constants/store";
import httpRequest from "../../services/http";

export default {
   state: {
      suggestedSpaces: [],
      spaces: [],
      currentSpace: null
   },
   mutations: {
      [MUTATIONS.SET_CURRENT_SPACE]: function(state, { space }) {
         state.currentSpace = space;
      }
   },
   actions: {
      [ACTIONS.CREATE_SPACE]: async function({ commit }, payload) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const options = {
            method: "POST",
            data: { ...payload.data }
         }

         const response = await httpRequest("/spaces", options);

         console.log("[INFO] --data: \n", response);
         commit(MUTATIONS.SET_STATUS, "done");

         return response;
      },
      [ACTIONS.FETCH_SUGGESTED_SPACES]: async function({ commit }) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const response = await httpRequest("/spaces/suggestions", {
            method: "GET"
         });

         console.log("[INFO] --data: \n", response);
         commit(MUTATIONS.SET_STATUS, "done");
      },
      [ACTIONS.FETCH_SPACES]: async function({ commit }) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const response = await httpRequest("/spaces", {
            method: "GET"
         });

         console.log("[INFO] --data: \n", response);
         commit(MUTATIONS.SET_STATUS, "done");
      },
      [ACTIONS.FETCH_CURRENT_SPACE]: async function({ commit }, payload) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const response = await httpRequest(`/spaces/slug?q=${payload.slug}`, {
            method: "GET"
         });

         commit(MUTATIONS.SET_CURRENT_SPACE, {
            space: response.data
         });

         console.log("[INFO] --data: \n", response);
         commit(MUTATIONS.SET_STATUS, "done");
      }
   },
   getters: {}
}
