<template>
   <div class="modal-dialog mx-auto bg-kora-dark1 relative flex flex-col">
      <div class="modal-dialog__header">
         <div class="px-2 py-2">
            <span 
               class="inline-block p-2 rounded-full cursor-pointer hover:bg-kora-dark3"
               @click="$emit('close-modal')"
            >
               <Icon 
                  :class="'w-3 h-3 fill-current text-kora-red1'" 
                  :viewbox="getIcons['x'].viewbox" 
                  :path="getIcons['x'].path" 
               />
            </span>
         </div>
         <div class="px-4 pb-2">
            <p class="text-kora-light1 text-k-18 font-bold">Create a space</p>
            <p class="text-kora-light1 text-k-15 font-normal mt-1">Create a Space to share your interests, curate content, host discussions, and more.</p>
         </div>
      </div>

      <div class="modal-dialog__content pt-2 px-4 pb-4 flex-auto">
         <div class="py-2">
            <p class="text-kora-light1 text-k-15 font-medium">Name</p>
         </div>
         <div class="text-input border-b border-kora-light1 border-opacity-10 flex items-center justify-between">
            <input 
               class="w-full appearance-none bg-transparent text-kora-light1 text-k-15 font-normal focus:outline-none"
               type="text"
               placeholder="Enter a name for your Space"
            >
            <!-- NOTE: display text field limit -->
            <span></span>
         </div>
         <div class="field-validation mt-2 h-4">
            <p></p>
         </div>
         <div class="mt-4 py-2">
            <p class="text-kora-light1 text-k-15 font-medium">About</p>
         </div>
         <div class="text-input border-b border-kora-light1 border-opacity-10 flex items-center justify-between">
            <input 
               class="w-full appearance-none bg-transparent text-kora-light1 text-k-15 font-normal focus:outline-none"
               type="text"
               placeholder="1-line description of your Space"
            >
         </div>
      </div>

      <div class="modal-dialog__footer p-3 flex justify-end bg-kora-dark2 border-t border-kora-light1 border-opacity-10">
         <div>
            <button class="py-1 px-4 rounded-full text-kora-dark2 text-k-14 font-medium bg-kora-red1 focus:outline-none">
               Done
            </button>
         </div>
      </div>
   </div>
</template>

<script>
import Icon from "./Icon";
import { iconsMixin } from "../utils/mixins";

export default {
   name: "AddSpaceModal",
   components: {
      Icon
   },
   mixins: [iconsMixin]
}

</script>

<style lang="scss" scoped>
.modal-dialog {
   min-height: 500px;
   max-height: 80vh;
   max-width: 90vw;
   width: 620px;
   border-radius: 8px;
   &__content {
      .text-input {
         min-height: 45px;
      }
   }
}
</style>