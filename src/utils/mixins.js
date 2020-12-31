import { nanoid } from "nanoid";

import { icons } from "../constants/icons";
import { spaces, topics } from "../tmp/db";
import { ACTIONS} from "../constants/store";
import { 
   parseISO,
   differenceInSeconds,
   differenceInMinutes,
   differenceInHours,
   differenceInDays,
   differenceInWeeks,
   differenceInMonths,
   format
} from "date-fns";

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

export const dateMixin = {
   methods: {
      getTimeSince: function(timestamp) {
         let diff;
         timestamp = parseISO(timestamp);

         const isSecond = differenceInSeconds(new Date(), timestamp) < 60;
         const isMinute = differenceInMinutes(new Date(), timestamp) < 60;
         const isHour = differenceInHours(new Date(), timestamp) < 24;
         const isDay = differenceInDays(new Date(), timestamp) < 7;
         const isWeek = differenceInWeeks(new Date(), timestamp) < 4;
         const isMonth = differenceInMonths(new Date(), timestamp) < 12;

         if(isSecond) {
            diff = differenceInSeconds(new Date(), timestamp);
            return `${diff} second${diff > 1 ? "s" : ""} ago`;
         }

         if(isMinute) {
            diff = differenceInMinutes(new Date(), timestamp);
            return `${diff} minute${diff > 1 ? "s" : ""} ago`;
         }

         if(isHour) {
            diff = differenceInHours(new Date(), timestamp);
            return `${diff} hour${diff > 1 ? "s" : ""} ago`;
         }

         if(isDay) {
            diff = differenceInDays(new Date(), timestamp);
            return `${diff} day${diff > 1 ? "s" : ""} ago`;
         }
      
         if(isWeek) {
            diff = differenceInWeeks(new Date(), timestamp);
            return `${diff} week${diff > 1 ? "s" : ""} ago`;
         }

         if(isMonth) {
            return format(timestamp, "MMMM d");
         }

         return format(timestamp, "MMMM d, yyyy")
      }
   }
}