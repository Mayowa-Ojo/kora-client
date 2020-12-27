import { ACTIONS, MUTATIONS } from "../../constants/store";
import httpRequest from "../../services/http";

export default {
   state: {},
   mutations: {},
   actions: {
      [ACTIONS.UPLOAD_IMAGE]: async function({ commit, rootState }, payload) {
         commit(MUTATIONS.SET_STATUS, "loading");

         const formData = new FormData();
         formData.append("image", payload.file);

         const options = {
            method: "POST",
            data: formData
         }

         const response = await httpRequest("/images", options);

         if(rootState.status === "error") {
            return;
         }

         console.log("[LOG]: data - \n", response);
         commit(MUTATIONS.SET_STATUS, "done");

         return response;
      }
   },
   getters: {}
}