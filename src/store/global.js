import { MUTATIONS, ACTIONS } from "../constants/store";

export const state = {
   modalComponent: "AddTopicModal",
   isActive: false
}
export const mutations = {
   [MUTATIONS.SET_MODAL_COMPONENT] (state, payload) {
      state.modalComponent = payload.component;
   },
   [MUTATIONS.SET_MODAL_ACTIVE] (state) {
      state.isActive = !state.isActive;
   }
}
export const actions = {
   [ACTIONS.TOGGLE_MODAL] ({ commit }, payload) {
      const validModals = [
         "AddQuestionModal",
         "AddTopicModal",
         "AddSpaceModal",
         "SharePostModal",
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
   }
}
