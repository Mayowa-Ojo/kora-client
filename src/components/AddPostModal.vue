<template>
   <div class="modal-dialog bg-kora-dark1 mx-auto relative flex flex-col">
      <div class="modal-dialog__header p-2 flex justify-between items-center bg-kora-dark1">
         <span 
            class="inline-flex items-center justify-center p-2 mr-2 w-8 h-8 rounded-full cursor-pointer hover:bg-kora-dark3"
            @click="$emit('close-modal')"
         >
            <Icon 
               :class="'fill-current text-kora-red1 w-3 h-3'" 
               :viewbox="getIcons['x'].viewbox" 
               :path="getIcons['x'].path" 
            />
         </span>
         <div class="mt-2 mx-2">
            <Popover :offset="8" :placement="'bottom'">
               <template v-slot:trigger="slotProps">
                  <button 
                     class="trigger px-4 py-2 text-k-13 font-medium text-kora-light1 inline-flex items-center rounded-full cursor-pointer hover:bg-kora-dark2 focus:outline-none"
                     @click="slotProps.toggle($event)"
                  >
                     <Icon 
                        :class="'fill-current text-kora-light1 w-4 h-4 mr-2'" 
                        :viewbox="getIcons['pencil'].viewbox" 
                        :path="getIcons['pencil'].path" 
                        v-if="postType == 'Post'"
                     />
                     <Icon 
                        :class="'fill-current text-kora-light1 w-4 h-4 mr-2'" 
                        :viewbox="getIcons['question'].viewbox" 
                        :path="getIcons['question'].path" 
                        v-if="postType == 'Question'"
                     />
                     {{postType}}
                     <Icon 
                        :class="'fill-current text-kora-light1 w-3 h-3 ml-2'" 
                        :viewbox="getIcons['chevron'].viewbox" 
                        :path="getIcons['chevron'].path" 
                     />
                  </button>
               </template>

               <template v-slot:popover>
                  <div class="popover popover-content-view">
                     <ul>
                        <li 
                           class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50"
                           @click="togglePostType('Post')"
                        >
                           Post
                           <span class="text-k-12 font-light block">Post what's on your mind</span>
                        </li>
                        <li 
                           class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50"
                           @click="togglePostType('Question')"
                        >
                           Question
                           <span class="text-k-12 font-light block">Ask others for answers</span>
                        </li>
                     </ul>
                  </div>
               </template>
            </Popover>
         </div>
         <span class="inline-block w-8"></span>
      </div>

      <div class="modal-dialog__content flex-auto">
         <div class="w-full px-4 pt-2">
            <div class="flex items-center">
               <span class="inline-block w-5 h-5 rounded-sm overflow-hidden">
                  <img class="w-full h-full object-cover" src="https://qph.fs.quoracdn.net/main-thumb-ti-1581910-100-zjzkktsovlhgqocjrovpjvzigkfxlcmc.jpeg" alt="space avatar">
               </span>
               <p class="text-k-15 font-medium text-kora-light1 ml-2">Canada in Real Time</p>
            </div>
            <div v-if="postType == 'Question'">
               <div class="mt-4 mb-4">
                  <div>
                     <div class="mt-4 pb-2 border-b border-kora-light1 border-opacity-10 hover:border-opacity-50 relative">
                        <textarea 
                           class="w-full text-kora-light1 text-k-18 font-normal bg-transparent focus:outline-none" 
                           name="question" 
                           rows="1"
                           maxlength="250"
                           placeholder='What is your question?'
                           autocomplete="chrome-off"
                           v-model="question"
                           ref="textarea-question"
                        >
                        </textarea>
                        <span 
                           class="absolute text-opacity-75 text-k-13 font-normal bottom-0 right-0"
                           :class="[question.length < 225 ? 'text-kora-light1' : 'text-red-400']"
                        >{{250 - question.length}}</span>
                     </div>
                     <div class="pt-2 flex items-center">
                        <span class="inline-block mr-2">
                           <Icon 
                              :class="'fill-current text-kora-light1'" 
                              :viewbox="getIcons['link'].viewbox" 
                              :path="getIcons['link'].path" 
                              :width="getIcons['link'].width" 
                              :height="getIcons['link'].height" 
                           />
                        </span>
                        <input 
                           class="text-kora-light1 text-k-13 font-normal appearance-none bg-transparent w-full focus:outline-none" 
                           type="text" 
                           placeholder="Optional: include a link that gives context"
                           v-model="contextLink"
                        >
                     </div>
                  </div>
               </div>
            </div>
            <div v-else>

            </div>
         </div>
      </div>

      <div class="modal-dialog__footer p-4 border-t border-kora-light1 border-opacity-25">
         <div class="flex items-center justify-end">
            <button 
               class="mr-2 py-1 px-3 rounded-full inline-flex items-center text-kora-light1 text-k-14 font-medium hover:bg-kora-dark2"
            >
            <span class="inline-block mr-2">
               <Icon 
                  :class="'stroke-current text-kora-light1 w-4 h-4'" 
                  :viewbox="getIcons['info'].viewbox" 
                  :path="getIcons['info'].path" 
               />
            </span>
            Rules</button>
            <button 
               class="mr-2 py-1 px-4 rounded-full text-kora-dark2 text-k-14 font-medium bg-kora-red1"
               @click="handleSubmit"
            >
               Submit
            </button>
         </div>
      </div>
   </div>

</template>

<script>
import Popover from "./Popover";
import Icon from "./Icon";
import { iconsMixin } from "../utils/mixins";
import { ACTIONS } from '../constants/store';
import { mapState } from 'vuex';

export default {
   name: "AddPostModal",
   components: {
      Popover,
      Icon
   },
   mixins: [iconsMixin],
   data: () => ({
      postType: "Question",
      question: "",
      contextLink: ""
   }),
   computed: {
      ...mapState({
         currentSpace: (state) => (key) => state.space.currentSpace?.[key]
      })
   },
   methods: {
      togglePostType: function(type) {
         if(!["Post", "Question"].includes(type)) return;
         this.postType = type;
      },
      handleSubmit: async function() {
         if(this.question == "") return;

         const payload = {
            data: {
               question: this.question,
               contextLink: this.contextLink,
               postType: "question"
            },
            endpoint: `/posts?spaceId=${this.currentSpace('id')}`
         }

         const response = await this.$store.dispatch(ACTIONS.CREATE_POST, payload);

         this.$store.dispatch(ACTIONS.TOGGLE_MODAL);

         if(this.$store.state.status == "error") {
            return;
         }

         this.$router.push(`/question/${response.data.slug}`);
      }
   },
   watch: {
      question: function() {
         const textarea = this.$refs['textarea-question'];

         textarea.style.height = `27px`;
         textarea.style.height = `${textarea.scrollHeight}px`;
      }
   }
}

</script>

<style lang="scss" scoped>
@use "src/assets/css/common";

.modal-dialog {
   width: 700px;
   max-width: 90vw;
   min-height: 400px;
   max-height: 80vh;
   border-radius: 10px;
   margin-top: 32px;
   overflow-y: hidden;
   &__content {
      textarea {
         height: 26px;
         min-height: 26px;
         overflow: hidden;
         overflow-wrap: break-word;
         resize: none;
      }
   }
}
.modal-dialog__content {
   @include common.scrollbar(12px, 3px);
}
</style>