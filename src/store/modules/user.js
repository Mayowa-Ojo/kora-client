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
            default:
               return toArray(state.currentUser?.answers);
         }
      },
      isCurrentUserAdmin: (state, _, rootState) => state.currentUser?.id === rootState.auth.profile?.id
   }
}
