<template>
   <div class="q-box flex">
      <aside class="q-box--left w-48 flex flex-col">
         <div class="h-8 bg-kora-dark2 flex items-center p-2 mb-1 rounded cursor-pointer">
            <span class="inline-block p-1 mr-2 rounded bg-kora-red1">
               <Icon 
                  :class="'fill-current text-kora-dark2'" 
                  :viewbox="getIcons['feed'].viewbox" 
                  :path="getIcons['feed'].path" 
                  :width="getIcons['feed'].width" 
                  :height="getIcons['feed'].height" 
               />
            </span>
            <p class="text-k-13 text-kora-light1 font-medium">Feed</p>
         </div>
         <!-- spaces -->
         <div 
            class="hover:bg-kora-dark2 flex items-center p-2 mb-1 rounded cursor-pointer"
            v-for="(space, idx) in tmpdata['spaces']"
            :key="String(idx)+generateId()"
         >
            <span class="inline-block mr-2 w-5 h-5 rounded-full overflow-hidden">
               <img class="w-full h-full object-cover" :src="space['img']" alt="space avatar">
            </span>
            <p class="text-k-13 text-kora-light1 font-light">{{space['name']}}</p>
         </div>
         <!-- topics -->
         <div 
            class="hover:bg-kora-dark2 flex items-center p-2 mb-1 rounded cursor-pointer"
            v-for="(space, idx) in tmpdata['topics']"
            :key="String(idx)+generateId()"
         >
            <span class="inline-block mr-2 w-5 h-5 rounded overflow-hidden">
               <img class="w-full h-full object-cover" :src="space['img']" alt="space avatar">
            </span>
            <p class="text-k-13 text-kora-light1 font-light">{{space['name']}}</p>
         </div>
         <div class="mb-2 p-2 rounded flex items-center cursor-pointer hover:bg-kora-dark2">
            <span class="inline-block p-1 mr-2 bg-kora-dark2 rounded-sm">
               <Icon 
                  :class="'fill-current text-kora-red1'" 
                  :viewbox="getIcons['plus'].viewbox" 
                  :path="getIcons['plus'].path" 
                  :width="getIcons['plus'].width" 
                  :height="getIcons['plus'].height" 
               />
            </span>
            <span class="text-k-13 font-light text-kora-light1">Discover Spaces</span>
         </div>
         <hr class="my-4 border-t border-opacity-50 border-kora-light1">
         <div class="flex flex-wrap items-center">
            <p class="text-k-13 text-kora-light1 font-light hover:underline cursor-pointer">About</p>
            <span class="dot-separator"></span>
            <p class="text-k-13 text-kora-light1 font-light hover:underline cursor-pointer">Careers</p>
            <span class="dot-separator"></span>
            <p class="text-k-13 text-kora-light1 font-light hover:underline cursor-pointer">Terms</p>
            <span class="dot-separator"></span>
            <p class="text-k-13 text-kora-light1 font-light hover:underline cursor-pointer">Privacy</p>
            <span class="dot-separator"></span>
            <p class="text-k-13 text-kora-light1 font-light hover:underline cursor-pointer">Acceptable Use</p>
            <span class="dot-separator"></span>
            <p class="text-k-13 text-kora-light1 font-light hover:underline cursor-pointer">Businesses</p>
            <span class="dot-separator"></span>
            <p class="text-k-13 text-kora-light1 font-light hover:underline cursor-pointer">Your Ad Choices</p>
         </div>
      </aside>

      <div class="q-box--center">
         <div class="h-20 p-4 mb-2 bg-kora-dark2 rounded border-light-25 cursor-pointer">
            <div class="flex mb-2 items-center">
               <span class="inline-flex items-center justify-center w-5 h-5 mr-2 bg-kora-blue1 rounded-full hover:opacity-75">
                  <Icon 
                     :class="'w-3 h-3 fill-current text-kora-light1'" 
                     :viewbox="getIcons['user'].viewbox" 
                     :path="getIcons['user'].path" 
                  />
               </span>
               <p class="text-kora-light1 text-k-13 font-light">Mayowa Ojo</p>
            </div>
            <p class="text-kora-light1 text-k-18 font-medium">What is your question or link?</p>
         </div>
         <!-- Post item -->
         <div 
            class="mb-2 px-4 pb-2 pt-4 bg-kora-dark2 rounded border-light-25"
            v-for="(el, i) in [0,0,0,0]"
            :key="String(i)+generateId()"
         >
            <div class="mb-2 flex items-center justify-between">
               <div class="flex items-center">
                  <p class="text-kora-light1 text-k-13 font-light">Answer</p>
                  <span class="dot-separator"></span>
                  <p class="text-kora-light1 text-k-13 font-light">Recommended for you</p>
               </div>
               <span class="inline-block w-4 h-4 cursor-pointer">
                  <Icon 
                     :class="'fill-current text-kora-light1'" 
                     :viewbox="getIcons['x'].viewbox" 
                     :path="getIcons['x'].path" 
                     :width="getIcons['x'].width" 
                     :height="getIcons['x'].height" 
                  />
               </span>
            </div>
            <div class="flex justify-between">
               <div class="flex">
                  <span class="inline-block w-10 h-10 mr-2 rounded-full overflow-hidden cursor-pointer">
                     <img class="hover:opacity-75" src="https://uifaces.co/our-content/donated/gPZwCbdS.jpg" alt="user avatar">
                  </span>
                  <div class="flex flex-col">
                     <div class="flex items-center">
                        <p class="text-kora-light1 text-k-13 font-medium cursor-pointer hover:underline">Gary Simmons</p>
                        <span class="dot-separator"></span>
                        <p class="text-kora-light1 text-k-13 font-light cursor-pointer hover:underline">July 20</p>
                     </div>
                     <div>
                        <p class="text-kora-light1 text-k-13 font-light">CTO at Relevant - Offshore software development company</p>
                     </div>
                  </div>
               </div>
               <span class="inline-flex w-6 h-6 bg-kora-blue1 rounded-full border-light-25 overflow-hidden items-center justify-center cursor-pointer">
                  <Icon 
                     :class="'fill-current text-kora-light1'" 
                     :viewbox="getIcons['follow'].viewbox" 
                     :path="getIcons['follow'].path" 
                     :width="getIcons['follow'].width" 
                     :height="getIcons['follow'].height" 
                  />
               </span>
            </div>
            <!-- rich text content -->
            <div class="mb-2">
               <p class="mb-1 text-kora-light1 text-k-15 font-medium hover:underline cursor-pointer">How can I become a data scientist?</p>
               <p class="mb-4 text-kora-light1 text-k-14 font-light">
               After being dubbed "<i>Sexiest job of the 21st century</i> " by Harvard Business Review, data science has stirred the interest of the general public. Many people are intrigued by the job and wonder how they themselves can become data scientists. There are so many tools, courses, and applications for folks to learn data science, but let’s face it: for someone unfamiliar with... <span class="text-kora-blue1 cursor-pointer hover:underline">(more)</span>
               </p>
               <div>
                  <img class="max-w-full" src="https://qph.fs.quoracdn.net/main-qimg-50b32a277d6494110411bc018c55ac7b" alt="">
               </div>
            </div>
            <div class="flex justify-between">
               <div class="flex items-center">
                  <Tooltip :offset="12" :placement="'left'" :text="'Upvote'" :currentIndex="i">
                     <template v-slot:trigger>
                        <span class="trigger inline-flex items-center py-1 px-2 -ml-2 mr-2 hover:bg-kora-dark1 rounded-full cursor-pointer text-kora-light1 text-k-13 font-light">
                           <Icon 
                              :class="'fill-current text-kora-red1 w-4 h-4 inline-block mr-1'" 
                              :viewbox="getIcons['upvote'].viewbox" 
                              :path="getIcons['upvote'].path" 
                           />
                           62
                        </span>
                     </template>
                  </Tooltip>
                  <Tooltip :offset="12" :placement="'top'" :text="'Share'" :currentIndex="i">
                     <template v-slot:trigger>
                        <span class="trigger inline-flex items-center py-1 px-2 mr-2 hover:bg-kora-dark1 rounded-full cursor-pointer text-kora-light1 text-k-13 font-light">
                           <Icon 
                              :class="'fill-current text-kora-light1 w-4 h-4 inline-block mr-1'" 
                              :viewbox="getIcons['share'].viewbox" 
                              :path="getIcons['share'].path" 
                           />
                           12
                        </span>
                     </template>
                  </Tooltip>
                  <Tooltip :slotRefs="$refs" :offset="12" :placement="'right'" :text="'Comments'" :currentIndex="i">
                     <template v-slot:trigger>
                        <span class="trigger inline-flex items-center py-1 px-2 mr-2 hover:bg-kora-dark1 rounded-full cursor-pointer text-kora-light1 text-k-13 font-light" ref="trigger">
                           <Icon 
                              :class="'stroke-current text-kora-light1 w-5 h-5 inline-block mr-1'" 
                              :viewbox="getIcons['comment'].viewbox" 
                              :path="getIcons['comment'].path" 
                           />
                           7
                        </span>
                     </template>
                  </Tooltip>
               </div>
               <div class="flex items-center">
                  <Tooltip :slotRefs="$refs" :offset="12" :placement="'left'" :text="'Upvoters'" :currentIndex="i">
                     <template v-slot:trigger>
                        <span class="trigger inline-flex items-center p-1 mr-2 rounded-full cursor-pointer bg-kora-red1" ref="trigger">
                           <Icon 
                              :class="'fill-current text-kora-gray1'" 
                              :viewbox="getIcons['star'].viewbox" 
                              :path="getIcons['star'].path" 
                              :width="getIcons['star'].width" 
                              :height="getIcons['star'].height" 
                           />
                        </span>
                     </template> -->
                  </Tooltip>
                  <Tooltip :slotRefs="$refs" :offset="12" :placement="'top'" :text="'More sharing options'" :currentIndex="i">
                     <template v-slot:trigger>
                        <span class="trigger inline-flex items-center p-2 mr-2 rounded-full cursor-pointer hover:bg-kora-dark1" ref="trigger">
                           <Icon 
                              :class="'w-4 h-4 fill-current text-kora-light1'" 
                              :viewbox="getIcons['shareAlt'].viewbox" 
                              :path="getIcons['shareAlt'].path" 
                           />
                        </span>
                     </template>
                  </Tooltip>
                  <Tooltip :slotRefs="$refs" :offset="12" :placement="'right'" :text="'More'" :currentIndex="i">
                     <template v-slot:trigger>
                        <span class="trigger inline-flex items-center justify-center w-8 h-8 -mr-2 rounded-full cursor-pointer hover:bg-kora-dark1" ref="trigger">
                           <Icon 
                              :class="'w-5 h-5 fill-current text-kora-light1'" 
                              :viewbox="getIcons['kebabMenu'].viewbox" 
                              :path="getIcons['kebabMenu'].path" 
                           />
                        </span>
                     </template>
                  </Tooltip>
               </div>
            </div>
         </div>
      </div>

      <aside class="q-box--right w-48 ml-16">
         <div class="w-full bg-kora-dark2 border-light-25 rounded">
            <p class="text-kora-light1 text-k-15 font-medium text-center px-4 py-2 bg-kora-dark1 cursor-default">Improve Your Feed</p>
            <ul class="w-full">
               <li class="w-full px-4 py-2 text-k-13 text-kora-light1 font-light border-b border-kora-light1 border-opacity-10 inline-flex items-center cursor-default hover:bg-kora-dark3">
                  <span class="w-6 h-6 inline-block mr-2">
                     <Icon 
                        :class="'fill-current inline-block text-kora-green1 w-5 h-5'" 
                        :viewbox="getIcons['check'].viewbox" 
                        :path="getIcons['check'].path" 
                     />
                  </span>
                  <span>Visit your feed</span>
               </li>
               <li class="w-full px-4 py-2 text-k-13 text-kora-light1 font-light border-b border-kora-light1 border-opacity-10 inline-flex items-center cursor-default hover:bg-kora-dark3">
                  <span class="w-6 h-6 inline-block mr-2">
                     <Icon 
                        :class="'fill-current inline-block text-kora-green1 w-5 h-5'" 
                        :viewbox="getIcons['check'].viewbox" 
                        :path="getIcons['check'].path" 
                     />
                  </span>
                  <span>Follow 5 more spaces</span>
               </li>
               <li class="w-full px-4 py-2 text-k-13 text-kora-light1 font-light border-b border-kora-light1 border-opacity-10 inline-flex items-center cursor-default hover:bg-kora-dark3">
                  <span class="w-6 h-6 inline-block mr-2">
                     <Icon 
                        :class="'fill-current inline-block text-kora-green1 w-5 h-5'" 
                        :viewbox="getIcons['check'].viewbox" 
                        :path="getIcons['check'].path" 
                     />
                  </span>
                  <span>Follow 20 more spaces</span>
               </li>
               <li class="w-full px-4 py-2 text-k-13 text-kora-light1 font-light border-b border-kora-light1 border-opacity-10 inline-flex items-center cursor-default hover:bg-kora-dark3">
                  <span class="w-6 h-6 inline-block mr-2">
                     <Icon 
                        :class="'fill-current inline-block text-kora-green1 w-5 h-5'" 
                        :viewbox="getIcons['check'].viewbox" 
                        :path="getIcons['check'].path" 
                     />
                  </span>
                  <span>Upvote 5 more good answers</span>
               </li>
               <li class="w-full px-4 py-2 text-k-13 text-kora-light1 font-light border-b border-kora-light1 border-opacity-10 inline-flex items-center cursor-pointer hover:bg-kora-dark3">
                  <span class="w-6 h-6 inline-block mr-2">
                     <Icon 
                        :class="'fill-current text-kora-light1 inline-block ml-1 -mb-1'" 
                        :viewbox="getIcons['box'].viewbox" 
                        :path="getIcons['box'].path" 
                        :width="getIcons['box'].width" 
                        :height="getIcons['box'].height" 
                     />
                  </span>
                  <span>Ask a question</span>
               </li>
               <li class="w-full px-4 py-2 text-k-13 text-kora-light1 font-light border-b border-kora-light1 border-opacity-10 inline-flex items-center cursor-pointer hover:bg-kora-dark3">
                  <span class="w-6 h-6 inline-block mr-2">
                     <Icon 
                        :class="'fill-current text-kora-light1 inline-block ml-1 -mb-1'" 
                        :viewbox="getIcons['box'].viewbox" 
                        :path="getIcons['box'].path" 
                        :width="getIcons['box'].width" 
                        :height="getIcons['box'].height" 
                     />
                  </span>
                  <span>Add 3 credentials</span>
               </li>
               <li class="w-full px-4 py-2 text-k-13 text-kora-light1 font-light border-b border-kora-light1 border-opacity-10 inline-flex items-center cursor-pointer hover:bg-kora-dark3">
                  <span class="w-6 h-6 inline-block mr-2">
                     <Icon 
                        :class="'fill-current text-kora-light1 inline-block ml-1 -mb-1'" 
                        :viewbox="getIcons['box'].viewbox" 
                        :path="getIcons['box'].path" 
                        :width="getIcons['box'].width" 
                        :height="getIcons['box'].height" 
                     />
                  </span>
                  <span>Answer a question</span>
               </li>
            </ul>
         </div>
      </aside>
   </div>
</template>

<script>
import Icon from "../components/Icon";
import Tooltip from "../components/Tooltip";
import { spaces, topics } from "../tmp/db";
import { shortidMixin, iconsMixin } from "../utils/mixins";

export default {
   name: "Home",
   components: {
      Tooltip,
      Icon
   },
   mixins: [shortidMixin, iconsMixin],
   computed: {
      tmpdata: function() {
         return {
            spaces,
            topics
         }
      }
   }
};
</script>

<style lang="scss" scoped>
.q-box {
   &--center {
      margin-left: 30px;
      width: 602px;
   }
}
</style>
