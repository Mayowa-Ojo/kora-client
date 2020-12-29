import { ACTIONS, MUTATIONS } from "../../constants/store";
import httpRequest from "../../services/http";

export default {
   state: {
      currentUser: null
   },
   mutations: {
      [MUTATIONS.SET_CURRENT_USER]: function(state, { user }) {
         state.currentUser = user;
      },
      [MUTATIONS.UPDATE_CURRENT_USER]: function(state, { update }) {
         state.currentUser = { ...state.currentUser, ...update }
      }
   },
   actions: {
      [ACTIONS.FETCH_CURRENT_USER]: async function({ commit, rootState }, payload) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const response = await httpRequest(`/users/username?q=${payload.username}`, {
            method: "GET"
         });

         if(rootState.status === "error") {
            return;
         }

         const userAnswersPromise = httpRequest(`/users/${response.data.id}/posts?postType=answer`, {
            method: "GET"
         });
         const userQuestionsPromise = httpRequest(`/users/${response.data.id}/posts?postType=question`, {
            method: "GET"
         });
         const userPostsPromise = httpRequest(`/users/${response.data.id}/posts?postType=post`, {
            method: "GET"
         });
         const userSharesPromise = httpRequest(`/users/${response.data.id}/shares`, {
            method: "GET"
         });
         const userFollowersPromise = httpRequest(`/users/${response.data.id}/followers`, {
            method: "GET"
         });
         const userFollowingPromise = httpRequest(`/users/${response.data.id}/following`, {
            method: "GET"
         });
         const userSpacesPromise = httpRequest(`/users/${response.data.id}/spaces`, {
            method: "GET"
         });
         const userKnowledgePromise = httpRequest(`/users/${response.data.id}/knowledge`, {
            method: "GET"
         });

         const [
            userAnswersResponse,
            userQuestionsResponse,
            userPostsResponse,
            userSharesResponse,
            userFollowersResponse,
            userFollowingResponse,
            userSpacesResponse,
            userKnowledgeResponse] = await Promise.all([
            userAnswersPromise,
            userQuestionsPromise,
            userPostsPromise,
            userSharesPromise,
            userFollowersPromise,
            userFollowingPromise,
            userSpacesPromise,
            userKnowledgePromise
         ]);

         response.data.answers = userAnswersResponse.data;
         response.data.questions = userQuestionsResponse.data;
         response.data.posts = userPostsResponse.data;
         response.data.shares = userSharesResponse.data;
         response.data.followers = userFollowersResponse.data;
         response.data.following = userFollowingResponse.data;
         response.data.spaces = userSpacesResponse.data;
         response.data.knowledge = userKnowledgeResponse.data;

         if(rootState.status === "error") {
            return;
         }

         commit(MUTATIONS.SET_CURRENT_USER, {
            user: response.data
         });

         console.log("[INFO] --data: \n", response);
         commit(MUTATIONS.SET_STATUS, "done");
      },
      [ACTIONS.FETCH_AUTH_USER]: async function({ commit, rootState }, payload) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const response = await httpRequest(`/users/${payload.id}`, {
            method: "GET"
         });

         if(rootState.status === "error") {
            return;
         }

         console.log("[INFO] --data: \n", response);
         commit(MUTATIONS.SET_STATUS, "done");
         return response;
      },
      [ACTIONS.FETCH_USER_SPACES]: async function({ commit, rootState }, payload) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const response = await httpRequest(`/users/${payload.id}/spaces`, {
            method: "GET"
         });

         if(rootState.status === "error") {
            return;
         }

         if(payload.isAdmin) {
            commit(MUTATIONS.UPDATE_AUTH_USER, {
               update: {
                  spaces: response.data
               }
            });
         }

         console.log("[INFO] --data: \n", response);
         commit(MUTATIONS.SET_STATUS, "done");
      },
      [ACTIONS.UPDATE_USER_PROFILE]: async function({ commit, getters, rootState }, payload) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const response = await httpRequest(`/users/${payload.id}`, {
            method: "PATCH",
            data: { ...payload.data }
         });

         if(rootState.status === "error") {
            return;
         }

         const updatedFields = Object.keys(payload.data);

         const update = updatedFields.reduce((acc, next) => {
            acc[next] = response.data[next];
            return acc;
         }, {});

         commit(MUTATIONS.UPDATE_CURRENT_USER, {
            update
         });

         if(getters.isCurrentUserAdmin) {
            commit(MUTATIONS.UPDATE_AUTH_USER, {
               update
            });
         }

         commit(MUTATIONS.SET_TOAST_META, {
            content: "Your profile has been updated.", type: "success"
         });
         commit(MUTATIONS.SET_TOAST_ACTIVE);

         console.log("[INFO] --data: \n", response);
         commit(MUTATIONS.SET_STATUS, "done");
      },
      [ACTIONS.UPDATE_USER_KNOWLEDGE]: async function({commit, getters, rootState}, payload) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const response = await httpRequest(`/users/${payload.id}/knowledge`, {
            method: "PATCH",
            data: { ...payload.data }
         });

         if(rootState.status === "error") {
            return;
         }

         const update = {
            knowledge: response.data
         }

         commit(MUTATIONS.UPDATE_CURRENT_USER, {
            update
         });

         if(getters.isCurrentUserAdmin) {
            commit(MUTATIONS.UPDATE_AUTH_USER, {
               update
            });
         }

         commit(MUTATIONS.SET_TOAST_META, {
            content: "Your profile has been updated.", type: "success"
         });
         commit(MUTATIONS.SET_TOAST_ACTIVE);

         console.log("[INFO] --data: \n", response);
         commit(MUTATIONS.SET_STATUS, "done");
      }
   },
   getters: {
      filterProfileTabContent: (state) => (filter) => {
         const toArray = (val) => Object.assign([], val);

         switch(filter) {
            case "profile":
               return toArray(state.currentUser?.questions).concat(
                  toArray(state.currentUser?.answers),
                  toArray(state.currentUser?.shares),
                  toArray(state.currentUser?.posts)
               ); // should sort
            case "answers":
               return toArray(state.currentUser?.answers);
            case "questions":
               return toArray(state.currentUser?.questions);
            case "shares":
               return toArray(state.currentUser?.shares);
            case "posts":
               return toArray(state.currentUser?.posts);
            case "followers":
               return toArray(state.currentUser?.followers);
            case "following":
               return toArray(state.currentUser?.following);
            case "spaces":
               return toArray(state.currentUser?.spaces);
            case "topics":
               return toArray(state.currentUser?.knowledge);
            default:
               return toArray(state.currentUser?.answers);
         }
      },
      isCurrentUserAdmin: (state, _, rootState) => state.currentUser?.id === rootState.auth.profile?.id
   }
}
