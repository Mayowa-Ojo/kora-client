<template>
   <div class="modal-dialog mx-auto bg-kora-dark1 relative">
      <div class="modal-dialog__header p-4 border-b border-kora-light1 border-opacity-10">
         <div class="flex justify-between">
            <span class="inline-block">
               <p class="text-kora-light1 text-k-18 font-bold" v-if="isQuestion">Edit topics</p>
               <p class="text-kora-light1 text-k-18 font-bold" v-else>Edit the topics you know about</p>
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
         <p
            class="text-k-15 font-medium text-kora-light1"
            v-if="isQuestion"
         >What projects can I do as a software engineer student to impress my future employers?</p>
         <div class="search-input pb-2 mt-2">
            <input 
               class="appearance-none bg-transparent text-kora-light1 text-k-13 font-normal pr-6 pl-2 py-2 w-full border-light-25 rounded focus:outline-none focus:border-kora-blue1" 
               type="search" 
               :placeholder="isQuestion ? 'Add topics that best describe your question' : 'Search for a topic'"
               @keydown.enter="handleTopicInput"
            >
            <p class="text-k-13 text-kora-red1 mt-1" v-if="errors.duplicate"><span class="inline-block w-1 h-1 rounded-full bg-kora-red1 mr-1" style="margin-bottom: 1px;"></span> Duplicate topic</p>
            <p class="text-k-13 text-kora-green1 mt-1" v-else><span class="inline-block w-1 h-1 rounded-full bg-kora-green1 mr-1" style="margin-bottom: 1px;"></span>Topics that don't exist will be created.</p>
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
               <li
                  class="mt-2 flex items-center"
                  v-for="(topic, idx) in selectedTopics"
                  :key="idx"
               >
                  <span class="px-2 py-1 text-kora-light1 text-k-15 font-normal bg-kora-dark2 bg-opacity-50 rounded">{{topic}}</span>
                  <span 
                     class="ml-2 cursor-pointer inline-flex items-center justify-center w-6 h-6"
                     @click="handleTopicDelete(topic)"
                  >
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
            <button
               class="py-1 px-4 rounded text-kora-dark2 text-k-14 font-medium bg-kora-red1 hover:bg-opacity-75"
               @click="handleSubmit"
            >
               Done
            </button>
         </div>
      </div>
   </div>
</template>

<script>
import { mapState } from "vuex";

import Icon from "./Icon";
import { iconsMixin } from "../utils/mixins";
import { ACTIONS } from "../constants/store";

export default {
   name: "AddTopicModal",
   components: {
      Icon
   },
   mixins: [iconsMixin],
   data: () => ({
      selectedTopics: [],
      errors: {
         duplicate: false
      }
   }),
   computed: {
      isQuestion: function() {
         return this.$route.fullPath.includes("question")
      },
      ...mapState({
         currentUser: (state) => (key) => state.user.currentUser?.[key],
         question: (state) => (key) => state.post.question?.[key]
      })
   },
   methods: {
      handleTopicInput: function(e) {
         const { value } = e.target;

         if(value === "") return;

         if(this.selectedTopics.includes(value)) {
            this.errors.duplicate = true;
            e.target.value = "";

            return;
         }

         this.errors.duplicate = false;
         this.selectedTopics = [...this.selectedTopics, value];
         e.target.value = "";
      },
      handleTopicDelete: function(topic) {
         const index = this.selectedTopics.findIndex(el => el === topic)
         if(index < 0) return;

         const copy = [...this.selectedTopics];
         copy.splice(index, 1);

         this.selectedTopics = copy;
      },
      handleSubmit: async function() {
         if(this.selectedTopics.length < 1) return;

         if(this.isQuestion) {
            const payload = {
               postId: this.question("id"),
               data: {
                  topics: this.selectedTopics
               }
            }

            this.$store.dispatch(ACTIONS.TOGGLE_MODAL);

            await this.$store.dispatch(ACTIONS.ADD_TOPICS_TO_QUESTION, payload);

            return;
         }

         const payload = {
            id: this.currentUser("id"),
            data: {
               knowledge: this.selectedTopics
            }
         }

         this.$store.dispatch(ACTIONS.TOGGLE_MODAL);

         await this.$store.dispatch(ACTIONS.UPDATE_USER_KNOWLEDGE, payload);

      }
   },
   mounted: function() {
      if(this.isQuestion) {
         if(this.question("topics") && this.question("topics").length < 1) return;

         if(typeof this.question("topics")[0] !== "object") return;

         this.selectedTopics = this.question("topics").map(topic => topic.name);

         return;
      }

      if(this.currentUser("knowledge") && this.currentUser("knowledge").length < 1) return;

      this.selectedTopics = this.currentUser("knowledge").map(topic => topic.name);
   }
}

</script>

<style lang="scss" scoped>
@use "src/assets/css/common";

.modal-dialog {
   width: 620px;
   max-width: 90vw;
   min-height: 400px;
   max-height: 70vh;
   border-radius: 4px;
   // margin-top: 32px;
   overflow-y: hidden;
   &__content {
      @include common.scrollbar(10px, 3px);
      height: 300px;
      overflow-y: auto;
   }
}
</style>