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
      question: null,
      comments: []
   },
   mutations: {
      [MUTATIONS.SET_FEED]: function(state, { posts }) {
         state.feed.posts = posts;
      },
      [MUTATIONS.SET_QUESTION]: function(state, { question }) {
         state.question = question;
      },
      [MUTATIONS.SET_ANSWER]: function(state, { answer }) {
         state.answer = answer;
      },
      [MUTATIONS.SET_QUESTIONS]: function(state, { questions }) {
         state.questions = questions;
      },
      [MUTATIONS.SET_COMMENTS]: function(state, { comments }) {
         state.comments = comments;
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

         console.log("[INFO] --data: \n", response);
         commit(MUTATIONS.SET_STATUS, "done");

         return response;
      },
      [ACTIONS.CREATE_COMMENT]: async function({ commit }, payload) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const options = {
            method: "POST",
            data: { ...payload }
         }

         const response = await httpRequest("/comments", options);

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

         commit(MUTATIONS.SET_QUESTIONS, {
            questions: response.data
         });

         console.log("[INFO] --data: \n", response);
         commit(MUTATIONS.SET_STATUS, "done");
      },
      [ACTIONS.FETCH_QUESTION]: async function({ commit }, payload) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const response = await httpRequest(`/posts/slug?q=${payload.slug}`, {
            method: "GET"
         });

         commit(MUTATIONS.SET_QUESTION, {
            question: response.data
         });

         console.log("[INFO] --data: \n", response);
         commit(MUTATIONS.SET_STATUS, "done");
      },
      [ACTIONS.FETCH_ANSWER]: async function({ commit }, payload) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const response = await httpRequest(`/posts/slug?slug=${payload.slug}&username=${payload.username}`, {
            method: "GET"
         });

         commit(MUTATIONS.SET_ANSWER, {
            answer: response.data
         });

         console.log("[INFO] --data: \n", response);
         commit(MUTATIONS.SET_STATUS, "done");
      },
      [ACTIONS.FETCH_POST_COMMENTS]: async function({ commit }, payload) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const endpoint = payload.postId ? `/comments?postId=${payload.postId}` : `/comments?slug=${payload.slug}`

         const response = await httpRequest(endpoint, {
            method: "GET"
         });

         commit(MUTATIONS.SET_COMMENTS, {
            comments: response.data
         });

         console.log("[INFO] --data: \n", response);
         commit(MUTATIONS.SET_STATUS, "done");
      }
   },
   getters: {}
}
