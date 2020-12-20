import { ACTIONS, MUTATIONS } from "../../constants/store";
import httpRequest from "../../services/http";

export default {
   state: {
      feed: {
         posts: [],
         suggestedQuestions: [],
      },
      questions: [],
      answer: null,
      question: null
   },
   mutations: {
      [MUTATIONS.SET_FEED]: function(state, { posts }) {
         state.feed.posts = posts;
      }
   },
   actions: {
      [ACTIONS.CREATE_POST]: async function({ commit }, payload) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const options = {
            method: "POST",
            data: { ...payload.data }
         }

         const response = await httpRequest(payload.endpoint, options);

         if(!response.ok) {
            //TODO: implememt proper error handling [i.e UI should indicate errors state]
            commit(MUTATIONS.SET_STATUS, "error");

            return;
         }

         console.log("[INFO] --data: \n", response);
         commit(MUTATIONS.SET_STATUS, "done");

         return response;
      },
      [ACTIONS.FETCH_USER_FEED]: async function({ commit }) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const response = await httpRequest("/posts/feed", {
            method: "GET"
         });

         console.log("[INFO] --data: \n", response);
         commit(MUTATIONS.SET_STATUS, "done");
      },
      [ACTIONS.FETCH_SUGGESTED_QUESTIONS]: async function({ commit }) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const response = await httpRequest("/posts/suggested-questions", {
            method: "GET"
         });

         console.log("[INFO] --data: \n", response);
         commit(MUTATIONS.SET_STATUS, "done");
      },
      [ACTIONS.FETCH_QUESTIONS]: async function({ commit }) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const response = await httpRequest("/posts/questions", {
            method: "GET"
         });

         console.log("[INFO] --data: \n", response);
         commit(MUTATIONS.SET_STATUS, "done");
      }
   },
   getters: {}
}
