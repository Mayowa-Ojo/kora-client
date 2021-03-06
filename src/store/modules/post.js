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
         state.feed = { ...state.feed, posts };
      },
      [MUTATIONS.SET_QUESTION]: function(state, { question }) {
         state.question = question;
      },
      [MUTATIONS.SET_SUGGESTED_QUESTIONS]: function(state, { questions }) {
         state.feed = { ...state.feed, suggestedQuestions: questions };
      },
      [MUTATIONS.SET_ANSWER]: function(state, { answer }) {
         state.answer = answer;
      },
      [MUTATIONS.SET_QUESTIONS]: function(state, { questions }) {
         state.questions = questions;
      },
      [MUTATIONS.SET_COMMENTS]: function(state, { comments }) {
         state.comments = comments;
      },
      [MUTATIONS.UPDATE_QUESTION]: function(state, {field, update}) {
         state.question[field] = update;
      },
      [MUTATIONS.UPDATE_POST_COMMENTS]: function(state, { type, comment }) {
         if(!["question", "answer"].includes(type)) return;

         state[type].comments = [comment, ...state[type].comments];
      },
      [MUTATIONS.UPDATE_COMMENT_REPLIES]: function(state, { type, commentId, reply }) {
         if(!["question", "answer"].includes(type)) return;

         const index = state[type].comments.findIndex(el => el.id === commentId);

         state[type].comments[index].replies = [reply, ...state[type].comments[index].replies];
      }
   },
   actions: {
      [ACTIONS.CREATE_POST]: async function({ commit, rootState }, payload) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const options = {
            method: "POST",
            data: { ...payload.data }
         }

         const response = await httpRequest(payload.endpoint, options);

         if(rootState.status === "error") {
            return;
         }

         commit(MUTATIONS.SET_STATUS, "done");

         return response;
      },
      [ACTIONS.CREATE_SHARED_POST]: async function({ commit, rootState }, payload) {
         commit(MUTATIONS.SET_STATUS, "loading");

         let postId = payload.postId;
         const options = {
            method: "POST",
            data: { ...payload.data }
         }

         if(payload.shortCode) {
            const urlResponse = await httpRequest(`/urls/${payload.shortCode}`, {
               method: "GET"
            });

            if(rootState.status === "error") return;

            let postEndpoint;
            let slug;
            let username;
   
            slug = urlResponse.data.longUrl.split(`${process.env.VUE_APP_BASE_URL}/`)[1].split("/")[0];
            username = urlResponse.data.longUrl.split("answer/")[1];
   
            urlResponse.data.longUrl.includes("answer") ?
            postEndpoint = `/posts/slug?slug=${slug}&username=${username}`
            :
            postEndpoint = `/posts/slug?slug=${slug}`;
   
            const postResponse = await httpRequest(postEndpoint, {
               method: "GET"
            });

            if(rootState.status === "error") return;

            postId = postResponse.data.id;
         }

         await httpRequest(`/posts/${postId}/share?spaceId=${payload.spaceId}`, options);

         if(rootState.status === "error") return;

         commit(MUTATIONS.SET_TOAST_META, {
            content: "Post has been shared.",
            type: "success"
         });
         commit(MUTATIONS.SET_TOAST_ACTIVE);

         commit(MUTATIONS.SET_STATUS, "done");
      },
      [ACTIONS.CREATE_COMMENT]: async function({ commit, rootState }, payload) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const options = {
            method: "POST",
            data: { ...payload.data }
         }

         const response = await httpRequest(`/comments?postId=${payload.postId}`, options);

         if(rootState.status === "error") {
            return;
         }

         commit(MUTATIONS.UPDATE_POST_COMMENTS, {
            type: payload.postType,
            comment: response.data
         });

         commit(MUTATIONS.SET_STATUS, "done");
      },
      [ACTIONS.CREATE_COMMENT_REPLY]: async function({ commit, rootState }, payload) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const options = {
            method: "POST",
            data: { ...payload.data }
         }

         const response = await httpRequest(`/comments/reply?commentId=${payload.commentId}`, options);

         if(rootState.status === "error") {
            return;
         }

         commit(MUTATIONS.UPDATE_COMMENT_REPLIES, {
            type: payload.postType,
            reply: response.data,
            commentId: payload.commentId
         });

         commit(MUTATIONS.SET_STATUS, "done");
      },
      [ACTIONS.FETCH_USER_FEED]: async function({ commit, rootState }) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const response = await httpRequest("/posts/feed", {
            method: "GET"
         });

         if(rootState.status === "error") {
            return;
         }

         commit(MUTATIONS.SET_FEED, {
            posts: response.data
         });

         commit(MUTATIONS.SET_STATUS, "done");
      },
      [ACTIONS.FETCH_SUGGESTED_QUESTIONS]: async function({ commit, rootState }) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const response = await httpRequest("/posts/suggestions", {
            method: "GET"
         });

         if(rootState.status === "error") {
            return;
         }

         commit(MUTATIONS.SET_SUGGESTED_QUESTIONS, {
            questions: response.data
         });

         commit(MUTATIONS.SET_STATUS, "done");
      },
      [ACTIONS.FETCH_QUESTIONS]: async function({ commit, rootState }) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const response = await httpRequest("/posts/questions", {
            method: "GET"
         });

         if(rootState.status === "error") {
            return;
         }

         commit(MUTATIONS.SET_QUESTIONS, {
            questions: response.data
         });

         commit(MUTATIONS.SET_STATUS, "done");
      },
      [ACTIONS.FETCH_QUESTION]: async function({ commit, rootState }, payload) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const response = await httpRequest(`/posts/slug?slug=${payload.slug}`, {
            method: "GET"
         });

         if(rootState.status === "error") {
            return;
         }

         const answersRespone = await httpRequest(`/posts/${response.data.id}/answers`, {
            method: "GET"
         });

         const topicsResponse = await httpRequest(`/posts/${response.data.id}/topics`, {
            method: "GET"
         });

         commit(MUTATIONS.SET_QUESTION, {
            question: response.data
         });

         if(rootState.status === "error") {
            return;
         }

         response.data.answers = answersRespone.data;
         response.data.topics = topicsResponse.data;

         commit(MUTATIONS.SET_STATUS, "done");
      },
      [ACTIONS.FETCH_ANSWER]: async function({ commit, rootState }, payload) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const response = await httpRequest(`/posts/slug?slug=${payload.slug}&username=${payload.username}`, {
            method: "GET"
         });

         if(rootState.status === "error") {
            return;
         }

         commit(MUTATIONS.SET_ANSWER, {
            answer: response.data
         });

         commit(MUTATIONS.SET_STATUS, "done");
      },
      [ACTIONS.FETCH_POST_COMMENTS]: async function({ commit, rootState }, payload) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const endpoint = payload.postId ? `/comments?postId=${payload.postId}` : `/comments?slug=${payload.slug}`

         const response = await httpRequest(endpoint, {
            method: "GET"
         });

         if(rootState.status === "error") {
            return;
         }

         commit(MUTATIONS.SET_COMMENTS, {
            comments: response.data
         });

         commit(MUTATIONS.SET_STATUS, "done");
      },
      [ACTIONS.ADD_TOPICS_TO_QUESTION]: async function({ commit, rootState }, payload) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const endpoint = `/posts/${payload.postId}/topics`;

         const response = await httpRequest(endpoint, {
            method: "POST",
            data: { ...payload.data }
         });

         if(rootState.status === "error") {
            return;
         }

         commit(MUTATIONS.UPDATE_QUESTION, {
            field: "topics",
            update: response.data
         });

         commit(MUTATIONS.SET_STATUS, "done");
      },
      [ACTIONS.UPVOTE_POST]: async function({ commit, rootState }, payload) {
         if(!payload.id) return;

         commit(MUTATIONS.SET_STATUS, "loading");

         await httpRequest(`/posts/${payload.id}/upvote`, {
            method: "PATCH"
         });

         if(rootState.status === "error") {
            return;
         }

         commit(MUTATIONS.SET_TOAST_META, {
            content: "You upvoted this post. We'll suggest more posts like this.",
            type: "success"
         });
         commit(MUTATIONS.SET_TOAST_ACTIVE);

         commit(MUTATIONS.SET_STATUS, "done");
      },
      [ACTIONS.DOWNVOTE_POST]: async function({ commit, rootState }, payload) {
         if(!payload.id) return;

         commit(MUTATIONS.SET_STATUS, "loading");

         await httpRequest(`/posts/${payload.id}/downvote`, {
            method: "PATCH"
         });

         if(rootState.status === "error") {
            return;
         }

         commit(MUTATIONS.SET_TOAST_META, {
            content: "You downvoted this post. If you find it offensive/inappropriate, please report.",
            type: "success"
         });
         commit(MUTATIONS.SET_TOAST_ACTIVE);

         commit(MUTATIONS.SET_STATUS, "done");
      },
      [ACTIONS.UPVOTE_COMMENT]: async function({ commit, rootState }, payload) {
         if(!payload.id) return;

         commit(MUTATIONS.SET_STATUS, "loading");

         await httpRequest(`/comments/${payload.id}/upvote`, {
            method: "PATCH"
         });

         if(rootState.status === "error") {
            return;
         }

         commit(MUTATIONS.SET_TOAST_META, {
            content: "You upvoted this comment.",
            type: "success"
         });
         commit(MUTATIONS.SET_TOAST_ACTIVE);

         commit(MUTATIONS.SET_STATUS, "done");
      },
      [ACTIONS.DOWNVOTE_COMMENT]: async function({ commit, rootState }, payload) {
         if(!payload.id) return;

         commit(MUTATIONS.SET_STATUS, "loading");

         await httpRequest(`/comments/${payload.id}/downvote`, {
            method: "PATCH"
         });

         if(rootState.status === "error") {
            return;
         }

         commit(MUTATIONS.SET_TOAST_META, {
            content: "You downvoted this comment. If you find it offensive/inappropriate, please report.",
            type: "success"
         });
         commit(MUTATIONS.SET_TOAST_ACTIVE);

         commit(MUTATIONS.SET_STATUS, "done");
      }
   },
   getters: {}
}
