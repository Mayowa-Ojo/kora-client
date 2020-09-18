<template>
   <div class="modal-dialog mx-auto bg-kora-dark1 relative">
      <div class="modal-dialog__header p-4 border-b border-kora-light1 border-opacity-10">
         <div class="flex justify-between">
            <span class="inline-block">
               <p class="text-kora-light1 text-k-18 font-bold">Edit the topics you know about</p>
               <p class="text-kora-light1 text-k-15 font-normal text-opacity-50">Topics are used to find the best experts to answer the question.</p>
            </span>
            <span 
               class="inline-flex items-center justify-center -mt-1 -mr-1 w-8 h-8 rounded-full cursor-pointer hover:bg-kora-dark2"
               @click="$emit('close-modal')"
            >
               <Icon 
                  :class="'fill-current text-kora-red1'" 
                  :viewbox="getIcons['x'].viewbox" 
                  :path="getIcons['x'].path" 
                  :width="getIcons['x'].width" 
                  :height="getIcons['x'].height" 
               />
            </span>
         </div>
      </div>

      <div class="modal-dialog__content p-4 ">
         <div class="search-input pb-2">
            <input 
               class="appearance-none bg-transparent text-kora-light1 text-k-13 font-normal pr-6 pl-2 py-1 w-full border-light-25 rounded focus:outline-none focus:border-kora-blue1" 
               type="search" 
               placeholder="Search for a topic" 
            >
         </div>
         <div 
            class="selected-topics-list"
            :class="[selectedTopics.length == 0 ? 'border-light-25 border-dashed' : '']"
         >
            <p 
               class="text-kora-light1 text-k-12 font-medium text-opacity-50 my-16 text-center"
               v-if="selectedTopics.length == 0"
            >NO TOPICS YET
            </p>
            <ul v-else>
               <li class="mt-2 flex items-center">
                  <span class="p-1 text-kora-light1 text-k-15 font-normal bg-kora-dark2 bg-opacity-50 rounded">Node.js</span>
                  <span class="ml-2 cursor-pointer inline-flex items-center justify-center w-6 h-6">
                     <Icon 
                        :class="'w-2 h-2 fill-current text-kora-red1'" 
                        :viewbox="getIcons['x'].viewbox" 
                        :path="getIcons['x'].path" 
                     />
                  </span>
               </li>
            </ul>
         </div>
      </div>

      <div class="modal-dialog__footer p-3 flex justify-end bg-kora-dark2 border-t border-kora-light1 border-opacity-10">
         <div>
            <button class="py-1 px-4 rounded text-kora-dark2 text-k-14 font-medium bg-kora-red1">
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
   name: "AddTopicModal",
   components: {
      Icon
   },
   mixins: [iconsMixin],
   data: () => ({
      selectedTopics: []
   })
}

</script>

<style lang="scss" scoped>
@use "src/assets/css/common";

.modal-dialog {
   width: 620px;
   max-width: 90vw;
   min-height: 400px;
   max-height: 80vh;
   border-radius: 4px;
   // margin-top: 32px;
   overflow-y: hidden;
   &__content {
      @include common.scrollbar(10px, 3px);
      min-height: 300px;
      max-height: 60vh;
      overflow-y: auto;
   }
}
</style>