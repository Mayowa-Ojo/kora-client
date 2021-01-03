<template>
   <div class="modal modal-dialog  bg-kora-dark1 mx-auto relative">
      <div class="modal-dialog__header flex justify-between items-center border-b border-kora-light1 border-opacity-10 bg-kora-dark1">
         <div>
            <button 
               class="h-full py-4 px-6 text-k-15 font-medium border-b-2 hover:text-kora-red1 focus:outline-none"
               :class="[currentTab == 'question' ? 'text-kora-red1  border-kora-red1 ' : 'text-kora-light1 border-kora-dark1']"
               @click="switchTab('question')"
            >Add Question
            </button>
            <button 
               class="h-full py-4 px-6 text-k-15 font-medium border-b-2 hover:text-kora-red1 focus:outline-none"
               :class="[currentTab == 'share' ? 'text-kora-red1  border-kora-red1 ' : 'text-kora-light1 border-kora-dark1']"
               @click="switchTab('share')"
            >Share Link
            </button>
         </div>
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
      </div>

      <div 
         class="modal-dialog__content px-8 bg-kora-dark1"
         v-if="currentTab == 'question'"
      >
         <div class="mt-8 mb-4">
            <div class="mb-4 p-4 bg-kora-dark2 rounded-sm">
               <h1 class="text-kora-light1 text-k-15 font-bold">Tips on getting good answers quickly</h1>
               <ul>
                  <li class="text-kora-light1 text-k-15 font-normal inline-flex items-center"><span class="dot-separator"></span><span class="ml-1">Make sure your question has not been asked already</span></li>
                  <li class="text-kora-light1 text-k-15 font-normal inline-flex items-center"><span class="dot-separator"></span><span class="ml-1">Keep your question short and to the point</span></li>
                  <li class="text-kora-light1 text-k-15 font-normal inline-flex items-center"><span class="dot-separator"></span><span class="ml-1">Double-check grammar and spelling</span></li>
               </ul>
            </div>

            <div>
               <div class="mb-2 flex items-center">
                  <span class="inline-block w-5 h-5 mr-1 overflow-hidden rounded-full">
                     <img src="https://qsf.fs.quoracdn.net/-4-images.new_grid.profile_default.png-26-688c79556f251aa0.png" alt="user avatar">
                  </span>
                  <p class="text-kora-light1 text-k-13 font-normal text-opacity-50 mr-2">Mayowa Ojo asked</p>
                     <Popover :offset="8" :placement="'right'">
                        <template v-slot:trigger="slotProps">
                           <div 
                              class="trigger flex items-center py-1 px-3 rounded-full bg-kora-dark2 border-light-25 cursor-pointer hover:bg-opacity-50"
                              @click="slotProps.toggle($event)"
                           >
                              <span class="">
                                 <Icon 
                                    :class="'fill-current text-kora-light1 w-4 h-4'" 
                                    :viewbox="getIcons['userFriends'].viewbox" 
                                    :path="getIcons['userFriends'].path" 
                                 />
                              </span>
                              <span 
                                 class="text-kora-light1 text-k-13 font-medium ml-2">Public</span>
                              <span class="ml-2">
                                 <Icon 
                                    :class="'fill-current text-kora-light1 transform -rotate-90'" 
                                    :viewbox="getIcons['chevron'].viewbox" 
                                    :path="getIcons['chevron'].path" 
                                    :width="getIcons['chevron'].width" 
                                    :height="getIcons['chevron'].height" 
                                 />
                              </span>
                           </div>
                        </template>

                        <template v-slot:popover>
                           <div class="popover-question">
                              <ul>
                                 <li 
                                    class="py-2 px-4 flex items-center cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-75"
                                    @click="selectViewership('public')"
                                 >
                                    <span class="inline-flex flex-col">
                                       <p class="text-kora-light1 text-k-13 font-normal mb-1">Public</p>
                                       <p class="text-kora-light1 text-k-13 font-normal text-opacity-50">Others will see your identity alongside this question on your profile and in their feeds.</p>
                                    </span>
                                    <span v-show="viewership == 'public'">
                                       <Icon 
                                          :class="'fill-current text-kora-green1'" 
                                          :viewbox="getIcons['check'].viewbox" 
                                          :path="getIcons['check'].path" 
                                          :width="getIcons['check'].width" 
                                          :height="getIcons['check'].height" 
                                       />
                                    </span>
                                 </li>
                                 <li 
                                    class="py-2 px-4 flex items-center cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-75"
                                    @click="selectViewership('anonymous')"
                                 >
                                    <span class="inline-flex flex-col">
                                       <p class="text-kora-light1 text-k-13 font-normal mb-1">Anonymous</p>
                                       <p class="text-kora-light1 text-k-13 font-normal text-opacity-50">Your identity will never be associated with this question.</p>
                                    </span>
                                    <span v-show="viewership == 'anonymous'">
                                       <Icon 
                                          :class="'fill-current text-kora-green1'" 
                                          :viewbox="getIcons['check'].viewbox" 
                                          :path="getIcons['check'].path" 
                                          :width="getIcons['check'].width" 
                                          :height="getIcons['check'].height" 
                                       />
                                    </span>
                                 </li>
                                 <li 
                                    class="py-2 px-4 flex items-center cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-75"
                                    @click="selectViewership('limited')"
                                 >
                                    <span class="inline-flex flex-col">
                                       <p class="text-kora-light1 text-k-13 font-normal mb-1">Limited</p>
                                       <p class="text-kora-light1 text-k-13 font-normal text-opacity-50">Your identity will be shown but this question will not appear in your followers' feeds or your profile.</p>
                                    </span>
                                    <span v-show="viewership == 'limited'">
                                       <Icon 
                                          :class="'fill-current text-kora-green1'" 
                                          :viewbox="getIcons['check'].viewbox" 
                                          :path="getIcons['check'].path" 
                                          :width="getIcons['check'].width" 
                                          :height="getIcons['check'].height" 
                                       />
                                    </span>
                                 </li>
                              </ul>
                           </div>
                        </template>
                     </Popover>
               </div>

               <div class="mt-4 pb-2 border-b border-kora-light1 border-opacity-10 hover:border-opacity-50 relative">
                  <textarea 
                     class="w-full text-kora-light1 text-k-18 font-normal bg-transparent focus:outline-none" 
                     name="question" 
                     rows="1"
                     maxlength="250"
                     placeholder='Start your question with "What", "Why", "How", etc.'
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
                  <!-- <p class="text-kora-light1 text-k-13 font-normal text-opacity-50">Optional: include a link that gives context</p> -->
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

      <div 
         class="modal-dialog__content px-8 bg-kora-dark1"
         v-else
      >
         <div class="mt-8 mb-4">
            <div class="mb-2 flex items-center">
               <span class="inline-block w-5 h-5 mr-1 overflow-hidden rounded-full">
                  <img src="https://qsf.fs.quoracdn.net/-4-images.new_grid.profile_default.png-26-688c79556f251aa0.png" alt="user avatar">
               </span>
               <p class="text-kora-light1 text-k-13 font-normal text-opacity-50 mr-2">Mayowa Ojo shared</p>
               <Popover :offset="8" :placement="'right-start'">
                  <template v-slot:trigger="slotProps">
                     <div 
                        class="trigger flex items-center py-1 px-3 rounded-full bg-kora-dark2 border-light-25 cursor-pointer hover:bg-opacity-50"
                        @click="slotProps.toggle($event)"
                     >
                        <span class="" v-if="!selectedSpace">
                           <Icon 
                              :class="'fill-current text-kora-light1 w-3 h-3'" 
                              :viewbox="getIcons['plus'].viewbox" 
                              :path="getIcons['plus'].path" 
                           />
                        </span>
                        <span v-else class="w-4 h-4 rounded-md inline-block overflow-hidden">
                           <img :src="selectedSpace.icon" alt="space icon">
                        </span>
                        <span class="text-kora-light1 text-k-13 font-medium ml-2">{{!selectedSpace ? 'Choose a space' : selectedSpace.name}}</span>
                        <span class="ml-2">
                           <Icon 
                              :class="'fill-current text-kora-light1'" 
                              :viewbox="getIcons['chevron'].viewbox" 
                              :path="getIcons['chevron'].path" 
                              :width="getIcons['chevron'].width" 
                              :height="getIcons['chevron'].height" 
                           />
                        </span>
                     </div>

                  </template>

                  <template v-slot:popover>
                     <div class="popover-choose-space">
                        <div class="search-input mt-1 mx-1 py-1 px-2 flex items-center rounded-sm border-light-25">
                           <span class="mr-2">
                              <Icon 
                                 :class="'fill-current text-kora-light1 w-3 h-3'" 
                                 :viewbox="getIcons['search'].viewbox" 
                                 :path="getIcons['search'].path" 
                              />
                           </span>
                           <input 
                              class="appearance-none text-kora-light1 text-k-13 font-normal bg-transparent w-full h-6 focus:outline-none"
                              type="text"
                              placeholder="Choose a space"
                           >
                        </div>

                        <div>
                           <div class="py-2 px-4 flex items-center border-b border-kora-light1 border-opacity-10 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">
                              <span class="mr-2">
                                 <Icon 
                                    :class="'fill-current text-kora-blue1 w-5 h-5'" 
                                    :viewbox="getIcons['userFriends'].viewbox" 
                                    :path="getIcons['userFriends'].path" 
                                 />
                              </span>
                              <p class="text-kora-light1 text-k-15 font-normal">Your followers</p>
                           </div>
                           <div class="mt-2 py-2 px-4 border-b border-kora-light1 border-opacity-10">
                              <p class="text-kora-light1 text-k-15 font-medium">Recently visited spaces</p>
                           </div>
                           <div>
                              <ul>
                                 <li 
                                    class="px-4 py-2 flex items-center text-kora-light1 text-k-15 font-normal border-b border-kora-light1 border-opacity-10 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50"
                                    v-for="(space, idx) in userSpaces"
                                    :key="String(idx)+generateId()"
                                    @click="setSelectedSpace(space)"
                                 >
                                    <span class="inline-block mr-2 w-6 h-6 rounded-full overflow-hidden">
                                       <img :src="space.icon" alt="space icon">
                                    </span>
                                    {{space.name}}
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </template>
               </Popover>
            </div>

            <div class="input-wrapper mt-8 pb-2 flex items-center relative">
               <textarea 
                  class="w-full text-kora-light1 text-k-15 font-normal bg-transparent focus:outline-none" 
                  name="shareComment" 
                  rows="1"
                  maxlength="250"
                  placeholder='Say something about this...'
                  autocomplete="chrome-off"
                  v-model="shareComment"
                  ref="textarea-share"
               >
               </textarea>
               <span 
                  class="text-opacity-75 text-k-13 font-normal absolute bottom-0 right-0"
                  :class="[shareComment.length < 225 ? 'text-kora-light1' : 'text-red-400']"
               >{{250 - shareComment.length}}</span>
            </div>

            <div class="input-wrapper mt-2 p-2 border-light-25 rounded flex items-center">
               <span class="mr-2">
                  <Icon 
                     :class="'fill-current text-kora-light1'" 
                     :viewbox="getIcons['link'].viewbox" 
                     :path="getIcons['link'].path" 
                     :width="getIcons['link'].width" 
                     :height="getIcons['link'].height" 
                  />
               </span>
               <input 
                  class="text-kora-light1 text-k-15 font-normal w-full bg-transparent focus:outline-none appearance-none" 
                  type="text" 
                  placeholder="Enter a link"
                  v-model="shareLink"
               >
            </div>
         </div>
      </div>

      <div class="modal-dialog__footer flex justify-end bg-kora-dark2 border-t border-kora-light1 border-opacity-10">
         <div>
            <button 
               class="mr-2 py-1 px-3 rounded-full text-kora-light1 text-k-14 font-medium bg-kora-dark2 hover:bg-kora-dark3"
               @click="$emit('close-modal')"
            >Cancel</button>
            <button 
               class="mr-2 py-1 px-4 rounded-full text-kora-dark2 text-k-14 font-medium bg-kora-red1"
               @click="handleSubmit"
            >
               {{currentTab == 'question' ? 'Add Question' : 'Share Link'}}
            </button>
         </div>
      </div>
   </div>
</template>

<script>
import { mapState } from 'vuex';

import Icon from "./Icon";
import Popover from "./Popover";
import { iconsMixin, shortidMixin } from "../utils/mixins";
import { ACTIONS, MUTATIONS } from '../constants/store';

export default {
   name: "AddQuestionModal",
   components: {
      Icon,
      Popover
   },
   mixins: [iconsMixin, shortidMixin],
   data: () => ({
      question: "",
      contextLink: "",
      shareComment: "",
      shareLink: "",
      currentTab: "question",
      viewership: "public",
      selectedSpace: null
   }),
   computed: {
      ...mapState({
         userSpaces: (state) => state.auth.profile?.spaces,
         authUser: (state) => (key) => state.auth.profile?.[key],
         sharePost: (state) => (key) => state.modal.props?.post?.[key],
      })
   },
   methods: {
      switchTab: function(tab) {
         this.currentTab = tab
      },
      selectViewership: function(option) {
         this.viewership = option
      },
      setSelectedSpace: function(space) {
         this.selectedSpace = space;
      },
      handleSubmit: async function() {
         if(this.currentTab == "question") {
            const payload = {
               data: {
                  title: this.question,
                  contextLink: this.contextLink,
                  postType: "question",
               },
               endpoint: "/posts"
            }

            const response = await this.$store.dispatch(ACTIONS.CREATE_POST, payload);

            this.$store.dispatch(ACTIONS.TOGGLE_MODAL);

            if(this.$store.state.status == "error") {
               // handle error message
               return;
            }

            this.$router.push(`/question/${response.data.slug}`);

            return;
         }

         if(!this.selectedSpace) {
            this.$store.commit(MUTATIONS.SET_TOAST_META, {
               content: "You need to select a space to share this post to.",
               type: "warning"
            });
            this.$store.commit(MUTATIONS.SET_TOAST_ACTIVE);
         }

         const { id: spaceId } = this.selectedSpace;

         await this.$store.dispatch(ACTIONS.CREATE_SHARED_POST, {
            shortCode: this.shareLink.split("bit/")[1],
            spaceId,
            data: {
               shareComment: this.shareComment
            }
         });

         this.$store.dispatch(ACTIONS.TOGGLE_MODAL);
      }
   },
   watch: {
      question: function() {
         const textarea = this.$refs['textarea-question'];

         textarea.style.height = `27px`;
         textarea.style.height = `${textarea.scrollHeight}px`;
      },
      shareComment: function() {
         const textarea = this.$refs['textarea-share'];

         textarea.style.height = `27px`;
         textarea.style.height = `${textarea.scrollHeight}px`;
      }
   }
}

</script>

<style lang="scss" scoped>
@use "src/assets/css/common";

.modal-dialog {
   width: 620px;
   max-width: 90vw;
   min-height: 400px;
   max-height: 80vh;
   border-radius: 8px;
   margin-top: 32px;
   overflow-y: hidden;
   &__content {
      height: 390px;
      overflow-y: auto;
      textarea {
         height: 26px;
         min-height: 26px;
         overflow: hidden;
         overflow-wrap: break-word;
         resize: none;
      }
      .input-wrapper {
         min-height: 45px;
      }
      .popover-question {
         width: max-content;
         max-width: 230px;
      }
      .popover-choose-space {
         @include common.scrollbar(10px, 3px);
         min-width: 210px;
         width: max-content;
         min-height: 300px;
         max-height: 55vh;
         overflow: auto;
         .search-input {
            &:hover {
               border: 1px solid #2296F3;
            }
            &:focus-within {
               border: 1px solid #2296F3;
               box-shadow: -1px -1px 2px rgba(52, 152, 219, 0.2), 1px 1px 2px rgba(52, 152, 219, 0.2);
            }
         }
      }
   }
   &__footer {
      padding: 10px;
   }
}
.modal-dialog__content {
   @include common.scrollbar(12px, 3px);
}
</style>