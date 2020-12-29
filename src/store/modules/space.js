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
      },
      [MUTATIONS.SET_SUGGESTED_SPACES]: function(state, { spaces }) {
         state.suggestedSpaces = spaces;
      }
   },
   actions: {
      [ACTIONS.CREATE_SPACE]: async function({ commit, rootState }, payload) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const options = {
            method: "POST",
            data: { ...payload.data }
         }

         const response = await httpRequest("/spaces", options);

         if(rootState.status === "error") {
            return;
         }

         console.log("[INFO] --data: \n", response);
         commit(MUTATIONS.SET_STATUS, "done");

         return response;
      },
      [ACTIONS.FETCH_SUGGESTED_SPACES]: async function({ commit, rootState }) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const response = await httpRequest("/spaces/suggestions", {
            method: "GET"
         });

         if(rootState.status === "error") {
            return;
         }

         commit(MUTATIONS.SET_SUGGESTED_SPACES, {
            spaces: response.data
         });

         console.log("[INFO] --data: \n", response);
         commit(MUTATIONS.SET_STATUS, "done");
      },
      [ACTIONS.FETCH_SPACES]: async function({ commit, rootState }) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const response = await httpRequest("/spaces", {
            method: "GET"
         });

         if(rootState.status === "error") {
            return;
         }

         console.log("[INFO] --data: \n", response);
         commit(MUTATIONS.SET_STATUS, "done");
      },
      [ACTIONS.FETCH_CURRENT_SPACE]: async function({ commit, rootState }, payload) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const response = await httpRequest(`/spaces/slug?q=${payload.slug}`, {
            method: "GET"
         });

         // fetch posts for space
         const spacePostsResponse = await httpRequest(`/spaces/${response.data.id}/posts?postType=all`, {
            method: "GET"
         });

         if(rootState.status === "error") {
            return;
         }

         response.data.posts = spacePostsResponse.data;

         commit(MUTATIONS.SET_CURRENT_SPACE, {
            space: response.data
         });

         console.log("[INFO] --data: \n", response);
         commit(MUTATIONS.SET_STATUS, "done");
      },
      [ACTIONS.FETCH_SPACE_POSTS]: async function({ commit, rootState }, payload) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const response = await httpRequest(`/spaces/posts?q=${payload.postType}`, {
            method: "GET"
         });

         if(rootState.status === "error") {
            return;
         }

         commit(MUTATIONS.UPDATE_CURRENT_SPACE, {
            space: response.data
         });

         console.log("[INFO] --data: \n", response);
         commit(MUTATIONS.SET_STATUS, "done");
      }
   },
   getters: {}
}
