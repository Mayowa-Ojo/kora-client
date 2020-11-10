<template>
   <transition name="alert">
   <div 
      class="w-full px-2 mx-auto rounded bg-pink-200 flex items-center"
      v-if="isActive"
   >
      <div class="items-center justify-center rounded-full h-full py-1">
         <Icon 
            :class="'w-5 h-5 stroke-current text-red-400'"
            :viewbox="getIcons['caution'].viewbox" 
            :path="getIcons['caution'].path" 
         />
      </div>
      <div class="py-1 ml-3">
         <p class="text-k-13 font-normal text-kora-red1">{{ options.content }}</p>
      </div>
      <div class="ml-2 h-full self-start">
         <span 
            class="inline-flex items-center justify-center rounded-full h-6 w-6  hover:bg-red-300 cursor-pointer"
            @click="$emit('toggle')"
         >
            <Icon 
               :class="'w-2 h-2 fill-current text-red-400'"
               :viewbox="getIcons['x'].viewbox" 
               :path="getIcons['x'].path" 
            />
         </span>
      </div>
   </div>
   </transition>
</template>

<script>
import Icon from "./Icon";
import { iconsMixin } from "../utils/mixins";

export default {
   name: "Alert",
   components: {
      Icon
   },
   props: ["options", "isActive"], // type - ["error", "warning", "success", "info"]
   mixins: [iconsMixin],
   data: () => ({
      isOpen: false
   })
}

</script>

<style lang="scss" scoped>
.alert {
   &-enter-active, &-leave-active {
      transition: all 0.2s;
   }
   &-enter, &-leave-to {
      opacity: 0;
      transform: translateY(-5px);
   }
}
</style>