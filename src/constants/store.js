export const MUTATIONS = {
   SET_MODAL_COMPONENT: "SET_MODAL_COMPONENT",
   SET_MODAL_ACTIVE: "SET_MODAL_ACTIVE",
   SET_TOAST_ACTIVE: "SET_TOAST_ACTIVE",
   SET_TOAST_META: "SET_TOAST_META",
   AUTHENTICATE_USER:"AUTHENTICATE_USER",
   REVOKE_USER: "REVOKE_USER",
   SET_STATUS: "SET_STATUS",
   SET_FEED: "SET_FEED",
   SET_SPACES: "SET_SPACES",
   SET_QUESTIONS: "SET_QUESTIONS",
   SET_COMMENTS: "SET_COMMENTS",
   SET_SUGGESTED_QUESTIONS: "SET_SUGGESTED_QUESTIONS",
   SET_SUGGESTED_SPACES: "SET_SUGGESTED_SPACES",
   SET_SUGGESTED_TOPICS: "SET_SUGGESTED_TOPICS",
   SET_QUESTION: "SET_QUESTION",
   SET_ANSWER: "SET_ANSWER",
   SET_CURRENT_USER: "SET_CURRENT_USER",
   UPDATE_CURRENT_USER: "UPDATE_CURRENT_USER",
   UPDATE_AUTH_USER: "UPDATE_AUTH_USER",
   UPDATE_CURRENT_SPACE: "UPDATE_CURRENT_SPACE",
   UPDATE_QUESTION: "UPDATE_QUESTION",
   UPDATE_POST_COMMENTS: "UPDATE_POST_COMMENTS",
   UPDATE_COMMENT_REPLIES: "UPDATE_COMMENT_REPLIES",
   SET_CURRENT_SPACE: "SET_CURRENT_SPACE",
}

export const ACTIONS = {
   TOGGLE_MODAL: "TOGGLE_MODAL",
   USER_SIGNUP: "USER_SIGNUP",
   USER_LOGIN: "USER_LOGIN",
   USER_LOGOUT: "USER_LOGOUT",
   RE_AUTHENTICATE: "RE_AUTHENTICATE",
   CREATE_POST: "CREATE_POST",
   CREATE_SHARED_POST: "CREATE_SHARED_POST",
   CREATE_SPACE: "CREATE_SPACE",
   CREATE_TOPIC: "CREATE_TOPIC",
   CREATE_COMMENT: "CREATE_COMMENT",
   CREATE_COMMENT_REPLY: "CREATE_COMMENT_REPLY",
   FETCH_USER_FEED: "FETCH_USER_FEED",
   FETCH_CURRENT_USER: "FETCH_CURRENT_USER",
   FETCH_AUTH_USER: "FETCH_AUTH_USER",
   FETCH_USER_ANSWERS: "FETCH_USER_ANSWERS",
   FETCH_USER_QUESTIONS: "FETCH_USER_QUESTIONS",
   FETCH_USER_POSTS: "FETCH_USER_POSTS",
   FETCH_SPACE_POSTS: "FETCH_SPACE_POSTS",
   FETCH_SPACE_MEMBERS: "FETCH_SPACE_MEMBERS",
   FETCH_USER_SHARES: "FETCH_USER_SHARES",
   FETCH_USER_FOLLOWERS: "FETCH_USER_FOLLOWERS",
   FETCH_USER_FOLLOWING: "FETCH_USER_FOLLOWING",
   FETCH_SPACES: "FETCH_SPACES",
   FETCH_USER_SPACES: "FETCH_USER_SPACES",
   FETCH_CURRENT_SPACE: "FETCH_CURRENT_SPACE",
   FETCH_TOPICS: "FETCH_TOPICS",
   FETCH_QUESTIONS: "FETCH_QUESTIONS",
   FETCH_SUGGESTED_QUESTIONS: "FETCH_SUGGESTED_QUESTIONS",
   FETCH_SUGGESTED_SPACES: "FETCH_SUGGESTED_SPACES",
   FETCH_SUGGESTED_TOPICS: "FETCH_SUGGESTED_TOPICS",
   FETCH_QUESTION: "FETCH_QUESTION",
   FETCH_ANSWER: "FETCH_ANSWER",
   FETCH_POST_COMMENTS: "FETCH_POST_COMMENTS",
   FOLLOW_USER: "FOLLOW_USER",
   UNFOLLOW_USER: "UNFOLLOW_USER",
   FOLLOW_SPACE: "FOLLOW_SPACE",
   UNFOLLOW_SPACE: "UNFOLLOW_SPACE",
   FOLLOW_TOPIC: "FOLLOW_TOPIC",
   UNFOLLOW_TOPIC: "UNFOLLOW_TOPIC",
   UPVOTE_POST: "UPVOTE_POST",
   DOWNVOTE_POST: "DOWNVOTE_POST",
   UPVOTE_COMMENT: "UPVOTE_COMMENT",
   DOWNVOTE_COMMENT: "DOWNVOTE_COMMENT",
   SHARE_POST: "SHARE_POST",
   SET_PINNED_POST: "SET_PINNED_POST",
   REMOVE_PINNED_POST: "REMOVE_PINNED_POST",
   UPLOAD_IMAGE: "UPLOAD_IMAGE",
   UPDATE_USER_PROFILE: "UPDATE_USER_PROFILE",
   UPDATE_SPACE_PROFILE: "UPDATE_SPACE_PROFILE",
   UPDATE_USER_KNOWLEDGE: "UPDATE_USER_KNOWLEDGE",
   ADD_TOPICS_TO_QUESTION: "ADD_TOPICS_TO_QUESTION"
}