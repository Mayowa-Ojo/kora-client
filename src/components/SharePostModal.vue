<template>
   <div class="modal-dialog my-8 mx-auto bg-kora-dark1 relative flex flex-col">
      <div class="modal-dialog__header flex justify-end">
         <span 
            class="inline-block p-3 mr-1 mt-2 rounded-full cursor-pointer hover:bg-kora-dark2"
            @click="$emit('close-modal')"
         >
            <Icon 
               :class="'w-3 h-3 fill-current text-kora-red1'" 
               :viewbox="getIcons['x'].viewbox" 
               :path="getIcons['x'].path" 
            />
         </span>
      </div>

      <div 
         class="p-4 mb-4 mx-8 bg-kora-dark3 rounded"
         v-if="postSchedule == 'queue'"
      >
         <p class="text-kora-light1 text-k-13 font-medium">You're queuing this</p>
         <p class="text-kora-light1 text-k-13 font-normal">It will be posted at a later time. You can change this from the Queue tab.</p>
      </div>

      <div class="modal-dialog__content px-8 pb-6 flex-auto">
         <div class="mb-2 flex items-center">
            <div class="flex items-center">
               <span class="inline-block mr-1 w-5 h-5 rounded-full overflow-hidden">
                  <img src="https://qsf.fs.quoracdn.net/-4-images.new_grid.profile_default.png-26-688c79556f251aa0.png" alt="user avatar">
               </span>
               <p class="text-kora-light1 text-k-15 font-normal mr-3 text-opacity-50">Mayowa Ojo shared</p>
            </div>
            
            <Popover :offset="8" :placement="'bottom'">
               <template v-slot:trigger="slotProps">
                  <div 
                     class="trigger search-space flex items-center border border-kora-light1 border-opacity-25 rounded ml-1 px-1 py-2"
                     @click="slotProps.toggle($event)"
                  >
                     <span class="inline-block mx-1">
                        <Icon 
                           :class="'w-4 h-4 fill-current text-kora-light1 text-opacity-75'" 
                           :viewbox="getIcons['userFriends'].viewbox" 
                           :path="getIcons['userFriends'].path" 
                        />
                     </span>
                     <input 
                        class="appearance-none pl-2 text-kora-light1 text-k-13 font-normal bg-transparent w-full focus:outline-none"
                        type="text"
                        placeholder="Choose a space"
                     >
                     <span class="inline-block mx-1">
                        <Icon 
                           :class="'w-3 h-3 fill-current text-kora-light1 text-opacity-75'" 
                           :viewbox="getIcons['chevron'].viewbox" 
                           :path="getIcons['chevron'].path" 
                        />
                     </span>
                  </div>

               </template>

               <template v-slot:popover>
                  <div class="popover-choose-space">
                     <div>
                        <div class="py-2 px-4 flex items-center border-b border-kora-light1 border-opacity-10 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">
                           <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-kora-red1 mr-2">
                              <Icon 
                                 :class="'fill-current text-kora-dark2 w-4 h-4'" 
                                 :viewbox="getIcons['userFriends'].viewbox" 
                                 :path="getIcons['userFriends'].path" 
                              />
                           </span>
                           <p class="text-kora-light1 text-k-13 font-normal">Your followers</p>
                        </div>
                        <div class="mt-2 py-2 px-4 border-b border-kora-light1 border-opacity-10">
                           <p class="text-kora-light1 text-k-13 font-normal">Recently visited spaces</p>
                        </div>
                        <div>
                           <ul>
                              <li 
                                 class="px-4 py-2 flex items-center text-kora-light1 text-k-13 font-normal border-b border-kora-light1 border-opacity-10 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50"
                                 v-for="(space, idx) in getTempData['spaces']"
                                 :key="String(idx)+generateId()"
                              >
                                 <span class="inline-block mr-2 w-6 h-6 rounded-full overflow-hidden">
                                    <img :src="space.img" alt="space icon">
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

         <div>
            <div class="share-comment flex flex-col">
               <textarea 
                  class="mt-4 pb-2 w-full text-kora-light1 text-k-15 font-normal bg-transparent focus:outline-none" 
                  name="question" 
                  rows="1"
                  placeholder='Say something about this...'
                  autocomplete="chrome-off"
                  v-model="shareComment"
                  ref="textarea"
               >
               </textarea>
               <span class="text-kora-light1 text-k-13 font-normal text-opacity-50 self-end">250</span>
            </div>
         </div>

         <div class="mt-4">
            <div class="post-preview border-light-25">
               <div>
                  <p class="text-kora-light1 text-k-15 font-bold">Is it a shame that a senior software developer have weaker programming skill than a smart CS graduate?</p>
                  <div class="my-1 flex">
                     <div>
                        <span class="inline-block w-8 h-8 rounded-full overflow-hidden">
                           <img src="https://uifaces.co/our-content/donated/n4Ngwvi7.jpg" alt="user avatar">
                        </span>
                     </div>
                     <div class="ml-3 flex flex-col">
                        <p class="text-kora-light1 text-k-15 font-normal">
                           <span class="font-bold">Kurth Guntheroth</span>, Software Engineer for 40 years, author of book Optimized C++
                        </p>
                        <p class="text-kora-light1 text-k-13 font-normal text-opacity-50">Answered Oct 14, 2018</p>
                     </div>
                  </div>
                  <div>
                     <p class="text-kora-light1 text-k-15 font-normal">
                        Senior software developers have at least one thing that a new person cannot appreciate, because the new guy hasn’t got it. It’s called experience. Experience makes solving programming problems easi...
                        <span class="text-kora-blue1">(more)</span>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div class="modal-dialog__footer p-3 flex justify-end bg-kora-dark2 border-t border-kora-light1 border-opacity-10">
         <div class="flex">
            <button 
               class="py-1 px-4 rounded text-kora-light1 text-k-14 font-medium hover:underline focus:outline-none"
               @click="$emit('close-modal')"
            >
               Cancel
            </button>
            <div class="button-group flex">
               <button class="py-1 px-2 rounded-l text-kora-dark2 text-k-14 font-medium bg-kora-red1 focus:outline-none">
                  Done
               </button>
               <Popover :offset="8" :placement="'top-end'">
                  <template v-slot:trigger="slotProps">
                     <button 
                        class="trigger h-full py-1 px-2 rounded-r text-kora-dark2 text-k-14 font-medium border-l border-kora-dark2 border-opacity-50 bg-kora-red1 focus:outline-none"
                        @click="slotProps.toggle($event)"
                     >
                        <Icon 
                           :class="'w-3 h-3 fill-current text-kora-dark2 text-opacity-75'" 
                           :viewbox="getIcons['chevron'].viewbox" 
                           :path="getIcons['chevron'].path" 
                        />
                     </button>
                  </template>

                  <template v-slot:popover>
                     <div class="popover">
                        <ul class="py-2">
                           <li 
                              class="py-1 pl-3 pr-8 text-kora-light1 text-k-13 font-normal flex items-center cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50"
                              @click="selectPostSchedule({schedule: 'now'})"
                           >
                              <span class="inline-block w-4 h-4 mr-2">
                                 <Icon 
                                    :class="['w-4 h-4 fill-current text-kora-light1 text-opacity-75', postSchedule == 'now' ? 'inline-block' : 'hidden']"
                                    :viewbox="getIcons['check'].viewbox" 
                                    :path="getIcons['check'].path" 
                                 />
                              </span>
                              Post now
                           </li>
                           <li 
                              class="py-1 pl-3 pr-8 text-kora-light1 text-k-13 font-normal flex items-center cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50"
                              @click="selectPostSchedule({schedule: 'queue'})"
                           >
                              <span class="inline-block w-4 h-4 mr-2">
                                 <Icon 
                                    :class="['w-4 h-4 fill-current text-kora-light1 text-opacity-75', postSchedule == 'queue' ? 'inline-block' : 'hidden']" 
                                    :viewbox="getIcons['check'].viewbox" 
                                    :path="getIcons['check'].path" 
                                 />
                              </span>
                              Add to queue
                           </li>
                        </ul>
                     </div>
                  </template>
               </Popover>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import Icon from "./Icon";
import Popover from "./Popover";
import { iconsMixin, dataMixin, shortidMixin } from "../utils/mixins";

export default {
   name: "SharePostModal",
   components: {
      Icon,
      Popover
   },
   mixins: [iconsMixin, dataMixin, shortidMixin],
   data: () => ({
      shareComment: "",
      postSchedule: "now"
   }),
   methods: {
      selectPostSchedule: function(payload) {
         this.postSchedule = payload.schedule;
      }
   },
   watch: {
      shareComment: function() {
         const textarea = this.$refs['textarea'];

         textarea.style.height = `29px`;
         textarea.style.height = `${textarea.scrollHeight}px`;
      }
   }
}

</script>

<style lang="scss" scoped>
@use "src/assets/css/common";

.modal-dialog {
   min-height: 400px;
   max-height: 80vh;
   max-width: 90vw;
   width: 620px;
   border-radius: 4px;
   &__content {
      .search-space {
         &:focus-within {
            border: 1px solid rgba(52, 152, 219, 0.7);
         }
      }
      .popover-choose-space {
         overflow-y: auto;
         max-height: 40vh;
         min-width: 250px;
         @include common.scrollbar(8px, 3px);
      }
      textarea {
         height: 29px;
         min-height: 29px;
         overflow: hidden;
         overflow-wrap: break-word;
         resize: none;
      }
      .post-preview {
         border-radius: 15px;
         padding: 8px 10px;
         overflow: auto;
      }
   }
}
</style>