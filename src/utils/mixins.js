import { icons } from "../constants/icons";
import { spaces, topics } from "../tmp/db";
import { generateUniqueId } from "../utils/common";
import { ACTIONS} from "../constants/store";

export const iconsMixin = {
   computed: {
      getIcons: () => icons
   }
}

export const shortidMixin = {
   methods: {
      generateId: () => generateUniqueId()
   }
}

export const dataMixin = {
   computed: {
      getTempData: () => ({ spaces, topics })
   }
}

export const modalMixin = {
   methods: {
      toggleModal: function(component) {
         const payload = {
            component
         }

         this.$store.dispatch(ACTIONS.TOGGLE_MODAL, payload);
      }
   }
}