<template>
   <transition name="toast">
   <div 
      class="toast-wrapper w-full h-10 px-2 mx-auto flex items-center justify-center relative"
      :class="{'bg-green-300': getType == 'success', 'bg-orange-300': getType == 'warning', 'bg-red-300': getType == 'error'}"
      v-if="isOpen"
   >
      <span class="ml-3 absolute left-0">
         <Icon 
            :class="'w-5 h-5 stroke-current text-kora-dark2'"
            :viewbox="getIcons[getType == 'success' ? 'checkAlt' : getType == 'warning' ? 'caution' : 'danger'].viewbox" 
            :path="getIcons[getType == 'success' ? 'checkAlt' : getType == 'warning' ? 'caution' : 'danger'].path" 
         />
      </span>
      <div class="py-1 ml-3">
         <p class="text-k-15 font-medium text-kora-dark2">{{ getContent }}</p>
      </div>
   </div>
   </transition>
</template>

<script>
import Icon from "./Icon";
import { iconsMixin } from "../utils/mixins";
import { MUTATIONS } from '../constants/store';

export default {
   name: "Toast",
   components: {
      Icon
   },
   mixins: [iconsMixin],
   computed: {
      isOpen: function() {
         return this.$store.state.toast.isActive;
      },
      getContent: function() {
         return this.$store.state.toast.content
      },
      getType: function() {
         return this.$store.state.toast.type
      }
   },
   methods: {
      toggleIsOpen: function() {
         this.$store.commit(MUTATIONS.SET_TOAST_ACTIVE)
      }
   },
   watch: {
      isOpen: function(newVal) {
         if(newVal) {
            setTimeout(this.toggleIsOpen.bind(this), 5000);
         }
      }
   }
}

</script>

<style lang="scss" scoped>
.toast {
   &-enter-active, &-leave-active {
      transition: all 0.2s;
   }
   &-enter, &-leave-to {
      opacity: 0;
      transform: translateY(-5px);
   }
}
</style>