import { MUTATIONS, ACTIONS } from "../../constants/store";
import httpRequest from "../../services/http";
import LocalStorage from "../../utils/localstorage";

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
      }
   },
   actions: {
      [ACTIONS.USER_LOGIN]: async function({ commit }, payload) {
         try {
            commit(MUTATIONS.SET_STATUS, "loading");

            const options = {
               method: "POST",
               data: payload
            }

            const response = await httpRequest("/auth/login", options);

            if(!response.ok) {
               //TODO: implememt proper error handling [i.e UI should indicate errors state]
               commit(MUTATIONS.SET_STATUS, "error");

               return;
            }

            ls.set("user", {
               id: response.data.user.id,
               email: response.data.user.email,
               token: response.data.token
            });

            commit(MUTATIONS.AUTHENTICATE_USER, { user: response.data.user, token: response.data.token });
            commit(MUTATIONS.SET_STATUS, "done");
            console.log("[LOG]: login successful \n", response)
         } catch(err) {
            commit(MUTATIONS.SET_STATUS, "error");
            console.error("[ERROR]: ", err)
         }
      },
      [ACTIONS.USER_SIGNUP]: async function({ commit }, payload) {
         try {
            commit(MUTATIONS.SET_STATUS, "loading");

            const options = {
               method: "POST",
               data: payload
            }

            const response = await httpRequest("/auth/signup", options);

            if(!response.ok) {
               //TODO: implememt proper error handling [i.e UI should indicate errors state]
               commit(MUTATIONS.SET_STATUS, "error");

               return;
            }

            ls.set("user", {
               id: response.data.user.id,
               email: response.data.user.email,
               token: response.data.token
            });

            commit(MUTATIONS.AUTHENTICATE_USER, { user: response.data.user, token: response.data.token });
            commit(MUTATIONS.SET_STATUS, "done");
            console.log("[LOG]: signup successful \n", response)
         } catch(err) {
            console.error("[ERROR]: ", err)
         }
      },
      [ACTIONS.USER_LOGOUT]: async function({ commit }) {
         try {
            commit(MUTATIONS.SET_STATUS, "loading");

            ls.delete("user");

            commit(MUTATIONS.REVOKE_USER);
            commit(MUTATIONS.SET_STATUS, "done");
            console.log("[LOG]: logged out");
         } catch(err) {
            console.error("[ERROR]: ", err)
            commit(MUTATIONS.SET_STATUS, "error");
         }
      },
      [ACTIONS.RE_AUTHENTICATE]: function({ commit }) {
         const user = ls.get("user");

         if(!user) return;

         commit(MUTATIONS.AUTHENTICATE_USER, { user, token: user.token });
      }
   },
   getters: {
      userProfile: (state) => state.profile
   }
}