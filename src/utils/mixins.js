import { nanoid } from "nanoid";

import { icons } from "../constants/icons";
import { spaces, topics } from "../tmp/db";
import { ACTIONS} from "../constants/store";

export const iconsMixin = {
   computed: {
      getIcons: () => icons
   }
}

export const shortidMixin = {
   methods: {
      generateId: () => nanoid(5)
   }
}

export const dataMixin = {
   computed: {
      getTempData: () => ({ spaces, topics })
   }
}

export const modalMixin = {
   methods: {
      toggleModal: function(component, props={}) {
         const payload = {
            component,
            props
         }

         this.$store.dispatch(ACTIONS.TOGGLE_MODAL, payload);
      }
   }
}