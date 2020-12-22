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
               v-model="name"
               maxlength="40"
            >
            <span></span>
         </div>
         <div class="field-validation mt-2 h-4">
            <p></p>
         </div>
         <div class="mt-4 py-2">
            <p class="text-kora-light1 text-k-15 font-medium">About</p>
         </div>
         <div class="text-input pr-6 border-b border-kora-light1 border-opacity-10 flex items-center justify-between relative">
            <input 
               class="w-full appearance-none bg-transparent text-kora-light1 text-k-15 font-normal focus:outline-none"
               type="text"
               placeholder="1-line description of your Space"
               v-model="about"
               maxlength="80"
            >
            <span
               class="absolute text-opacity-75 text-k-13 font-normal bottom-0 right-0"
               :class="[about.length < 65 ? 'text-kora-light1' : 'text-red-400']"
            >{{80 - about.length}}</span>
         </div>
      </div>

      <div class="modal-dialog__footer p-3 flex justify-end bg-kora-dark2 border-t border-kora-light1 border-opacity-10">
         <div>
            <button
               class="py-1 px-4 rounded-full text-kora-dark2 text-k-14 font-medium bg-kora-red1 focus:outline-none"
               :disabled="name.length < 1 || about.length < 1"
               @click="handleSubmit"
            >
               Done
            </button>
         </div>
      </div>
   </div>
</template>

<script>
import Icon from "./Icon";
import { iconsMixin } from "../utils/mixins";
import { ACTIONS } from "../constants/store";

export default {
   name: "AddSpaceModal",
   components: {
      Icon
   },
   mixins: [iconsMixin],
   data: () => ({
      name: "",
      about: ""
   }),
   methods: {
      handleSubmit: async function() {
         const payload = {
            data: {
               name: this.name,
               about: this.about,
            }
         }

         this.$store.dispatch(ACTIONS.TOGGLE_MODAL);

         const response = await this.$store.dispatch(ACTIONS.CREATE_SPACE, payload);

         if(this.$store.state.status == "error") {
            // handle error message
            return;
         }

         this.$router.push(`/space/${response.data.slug}`);
      }
   }
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
   button[disabled] {
      cursor: default;
   }
}
</style>