import { MUTATIONS, ACTIONS } from "../../constants/store";
import httpRequest from "../../services/http";
import LocalStorage from "../../utils/localstorage";
import router from "../../router";

const ls = new LocalStorage();

export default {
   state: {
      isAuthenticated: false,
      profile: null,
      token: null
   },
   mutations: {
      [MUTATIONS.AUTHENTICATE_USER]: function(state, { user, token }) {
         state.isAuthenticated = true;
         state.profile = { ...user };
         state.token = token;
      },
      [MUTATIONS.REVOKE_USER]: function(state) {
         state.isAuthenticated = false;
         state.profile = null;
         state.token = null;
      },
      [MUTATIONS.UPDATE_AUTH_USER]: function(state, { update }) {
         state.profile = { ...state.profile, ...update }
      }
   },
   actions: {
      [ACTIONS.USER_LOGIN]: async function({ commit, dispatch, rootState }, payload) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const options = {
            method: "POST",
            data: payload
         }

         const response = await httpRequest("/auth/login", options);

         if(rootState.status === "error") {
            return;
         }

         ls.set("user", {
            id: response.data.user.id,
            email: response.data.user.email,
            token: response.data.token
         });

         commit(MUTATIONS.SET_TOAST_META, {
            content: `Welcome back, ${response.data.user.firstname}! We've missed you 🥳`,
            type: "success"
         });
         commit(MUTATIONS.SET_TOAST_ACTIVE);

         commit(MUTATIONS.AUTHENTICATE_USER, { user: response.data.user, token: response.data.token });

         await dispatch(ACTIONS.FETCH_USER_SPACES, {
            id: response.data.user.id,
            isAdmin: true
         });

         if(rootState.status === "error") {
            return;
         }

         commit(MUTATIONS.SET_STATUS, "done");
         console.log("[LOG]: login successful \n", response)
      },
      [ACTIONS.USER_SIGNUP]: async function({ commit, dispatch, rootState }, payload) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const options = {
            method: "POST",
            data: payload
         }

         const response = await httpRequest("/auth/signup", options);

         if(rootState.status === "error") {
            return;
         }

         ls.set("user", {
            id: response.data.user.id,
            email: response.data.user.email,
            token: response.data.token
         });

         commit(MUTATIONS.SET_TOAST_META, {
            content: `Welcome to Kora, ${response.data.user.firstname}! A place to share and acquire knowledge.`,
            type: "success"
         });
         commit(MUTATIONS.SET_TOAST_ACTIVE);

         commit(MUTATIONS.AUTHENTICATE_USER, { 
            user: response.data.user, token: response.data.token 
         });

         await dispatch(ACTIONS.FETCH_USER_SPACES, {
            id: response.data.user.id,
            isAdmin: true
         });

         if(rootState.status === "error") {
            return;
         }

         commit(MUTATIONS.SET_STATUS, "done");
         console.log("[LOG]: signup successful \n", response);
      },
      [ACTIONS.USER_LOGOUT]: async function({ commit }) {
         try {
            commit(MUTATIONS.SET_STATUS, "loading");

            ls.delete("user");
            ls.delete("drafts");

            commit(MUTATIONS.REVOKE_USER);
            commit(MUTATIONS.SET_STATUS, "done");

            commit(MUTATIONS.SET_TOAST_META, {
               content: "You've logged out of Kora. Please come back soon 😢", type: "success"
            });
            commit(MUTATIONS.SET_TOAST_ACTIVE);

            console.log("[LOG]: logged out");
         } catch(err) {
            console.error("[ERROR]: ", err)
            commit(MUTATIONS.SET_STATUS, "error");
         }
      },
      [ACTIONS.RE_AUTHENTICATE]: async function({ commit, dispatch, rootState }) {
         const user = ls.get("user");

         if(!user) {
            console.warn("[WARNING]: No auth token found.");

            router.push("/k");
            return;
         }

         commit(MUTATIONS.SET_STATUS, "loading");

         const response = await dispatch(ACTIONS.FETCH_AUTH_USER, {
            id: user.id
         });

         if(rootState.status === "error") {
            return;
         }

         commit(MUTATIONS.AUTHENTICATE_USER, { user: response.data, token: user.token });

         await dispatch(ACTIONS.FETCH_USER_SPACES, {
            id: response.data.id,
            isAdmin: true
         });

         if(rootState.status === "error") {
            return;
         }

         commit(MUTATIONS.SET_STATUS, "done");
      }
   },
   getters: {
      userProfile: (state) => state.profile
   }
}