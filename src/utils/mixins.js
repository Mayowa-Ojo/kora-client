import { icons } from "../constants/icons";
import { generateUniqueId } from "../utils/common";

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