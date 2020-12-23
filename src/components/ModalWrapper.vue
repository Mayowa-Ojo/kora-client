<template>
   <portal>
      <div 
         class="w-screen h-screen fixed inset-0 bg-kora-gray1 bg-opacity-50 flex justify-center items-center z-30"
         v-if="$store.getters.modalActive"
         v-on:click.self="handleCloseModal"
      >
         <component 
            :is="$store.getters.currentModal"
            v-on:close-modal="handleCloseModal"
         >
         </component>
      </div>
   </portal>
</template>

<script>
import { Portal, setSelector } from "@linusborg/vue-simple-portal";
import AddQuestionModal from "./AddQuestionModal";
import AddTopicModal from "./AddTopicModal";
import AddSpaceModal from "./AddSpaceModal";
import AddPostModal from "./AddPostModal";
import SharePostModal from "./SharePostModal";
import LoadingModal from "./LoadingModal";
import { ACTIONS } from '../constants/store';

setSelector("modal-target");

export default {
   name: "ModalWrapper",
   components: {
      Portal,
      AddQuestionModal,
      AddTopicModal,
      AddSpaceModal,
      AddPostModal,
      SharePostModal,
      LoadingModal
   },
   methods: {
      handleCloseModal: function() {
         this.$store.dispatch(ACTIONS.TOGGLE_MODAL);
      }
   },
   mounted: function() {
      this.$store.watch((_state, getters) => {
         return getters.modalActive;
      }, (newVal) => {
         if(newVal) {
            document.body.style.overflow = "hidden";
         } else {
            document.body.style.overflow = "auto";
         }
      });
   }
}

</script>