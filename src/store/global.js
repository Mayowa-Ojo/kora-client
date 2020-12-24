import { MUTATIONS, ACTIONS } from "../constants/store";

export const state = {
   modalComponent: "AddTopicModal",
   isActive: false,
   status: "idle",
   toast: {
      isActive: false,
      content: "",
      type: ""
   }
}
export const mutations = {
   [MUTATIONS.SET_MODAL_COMPONENT]: function (state, payload) {
      state.modalComponent = payload.component;
   },
   [MUTATIONS.SET_MODAL_ACTIVE]: function (state) {
      state.isActive = !state.isActive;
   },
   [MUTATIONS.SET_STATUS]: function(state, type) {
      const isValidStatusType = ["error", "loading", "done"].includes(type)
      if(!isValidStatusType) return;

      state.status = type;
   },
   [MUTATIONS.SET_TOAST_ACTIVE]: function(state) {
      state.toast.isActive = !state.toast.isActive;
   },
   [MUTATIONS.SET_TOAST_META]: function(state, payload) {
      state.toast.content = payload.content;
      state.toast.type = payload.type;
   }
}
export const actions = {
   [ACTIONS.TOGGLE_MODAL]: function ({ commit }, payload) {
      const validModals = [
         "AddQuestionModal",
         "AddTopicModal",
         "AddSpaceModal",
         "AddPostModal",
         "SharePostModal",
         "LoadingModal"
      ];

      commit(MUTATIONS.SET_MODAL_ACTIVE);

      if(payload) {
         if(!validModals.includes(payload.component)) {
            console.warn(`[WARNING]: component with name ${payload.component} is not a valid modal component`);
   
            return;
         }

         commit(MUTATIONS.SET_MODAL_COMPONENT, payload);
      }
   }
}
export const getters = {
   currentModal() {
      return state.modalComponent;
   },
   modalActive() {
      return state.isActive;
   },
   isLoading: (state) => state.status === "loading"
}
