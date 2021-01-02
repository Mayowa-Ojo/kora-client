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
      [ACTIONS.FETCH_CURRENT_SPACE]: async function({ commit, dispatch, rootState }, payload) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const response = await httpRequest(`/spaces/slug?q=${payload.slug}`, {
            method: "GET"
         });

         const posts = await dispatch(ACTIONS.FETCH_SPACE_POSTS, {
            id: response.data.id
         });

         const members = await dispatch(ACTIONS.FETCH_SPACE_MEMBERS, {
            id: response.data.id
         });

         if(!posts || !members) return;

         if(rootState.status === "error") return;

         response.data.posts = posts;
         response.data.admins = members.admins;
         response.data.followers = members.followers;

         commit(MUTATIONS.SET_CURRENT_SPACE, {
            space: response.data
         });

         console.log("[INFO] --data: \n", response);
         commit(MUTATIONS.SET_STATUS, "done");
      },
      [ACTIONS.FETCH_SPACE_POSTS]: async function({ rootState }, payload) {
         const response = await httpRequest(`/spaces/${payload.id}/posts?postType=all`, {
            method: "GET"
         });

         if(rootState.status === "error") {
            return;
         }

         return response.data;
      },
      [ACTIONS.FETCH_SPACE_MEMBERS]: async function({ rootState }, payload) {
         const response = await httpRequest(`/spaces/${payload.id}/people`, {
            method: "GET"
         });

         if(rootState.status === "error") {
            return;
         }

         return response.data;
      },
      [ACTIONS.FOLLOW_SPACE]: async function({ commit, rootState }, payload) {
         if(!payload.id) return;

         commit(MUTATIONS.SET_STATUS, "loading");

         const response = await httpRequest(`/spaces/${payload.id}/follow`, {
            method: "PATCH"
         });

         if(rootState.status === "error") {
            return;
         }

         commit(MUTATIONS.SET_TOAST_META, {
            content: `You followed ${payload.space.name}. Your feed will include content from this space.`,
            type: "success"
         });
         commit(MUTATIONS.SET_TOAST_ACTIVE);

         console.log("[INFO] --data: \n", response);
         commit(MUTATIONS.SET_STATUS, "done");
      },
      [ACTIONS.UNFOLLOW_SPACE]: async function({ commit, rootState }, payload) {
         if(!payload.id) return;

         commit(MUTATIONS.SET_STATUS, "loading");

         const response = await httpRequest(`/spaces/${payload.id}/unfollow`, {
            method: "PATCH"
         });

         if(rootState.status === "error") {
            return;
         }

         commit(MUTATIONS.SET_TOAST_META, {
            content: `You unfollowed ${payload.space.name}. Your feed will not include content from this space.`,
            type: "success"
         });
         commit(MUTATIONS.SET_TOAST_ACTIVE);

         console.log("[INFO] --data: \n", response);
         commit(MUTATIONS.SET_STATUS, "done");
      },
   },
   getters: {}
}
