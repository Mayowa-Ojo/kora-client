import { ACTIONS, MUTATIONS } from "../../constants/store";
import apiRoutes from "../../constants/apiRoutes";
import httpRequest from "../../services/http";

export default {
   state: {},
   mutations: {},
   actions: {
      [ACTIONS.UPLOAD_IMAGE]: async function({ commit }, payload) {
         try {
            commit(MUTATIONS.SET_STATUS, "loading");

            const formData = new FormData();
            formData.append("image", payload.file);

            const options = {
               method: "POST",
               data: formData
            }

            const { data: response } = await httpRequest(apiRoutes.image.create, options);

            if(!response.ok) {
               //TODO: implememt proper error handling [i.e UI should indicate errors state]
               commit(MUTATIONS.SET_STATUS, "error");

               return;
            }

            console.log("[LOG]: data - \n", response);
            commit(MUTATIONS.SET_STATUS, "done");

            return response;
         } catch(err) {
            commit(MUTATIONS.SET_STATUS, "error");
            console.error("[ERROR]: ", err);
         }


      }
   },
   getters: {}
}