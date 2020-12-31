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
            v-for="(space, idx) in userProfile('spaces')"
            :key="String(idx)+generateId()"
         >
            <span class="inline-block mr-2 w-5 h-5 rounded-full overflow-hidden">
               <img class="w-full h-full object-cover" :src="space.icon" alt="space avatar">
            </span>
            <p class="text-k-13 text-kora-light1 font-light">{{space.name}}</p>
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
         <div 
            class="h-20 p-4 mb-2 bg-kora-dark2 rounded border-light-25 cursor-pointer"
            @click="toggleModal('AddQuestionModal')"
         >
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
            class="p-4 flex flex-col items-center border-b border-kora-light1 border-opacity-10"
            v-if="getKeyLength('posts') < 1"
         >
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full">
               <Icon 
                  :class="'fill-current text-kora-light1 w-6 h-6'" 
                  :viewbox="getIcons['pencil'].viewbox" 
                  :path="getIcons['pencil'].path" 
               />
            </span>
            <p class="text-k-15 font-bold text-kora-light1 mt-4 capitalize">no posts yet</p>
         </div>
         <div v-else>
            <div 
               class="mb-2 px-4 pb-2 pt-4 bg-kora-dark2 rounded border-light-25"
               v-for="(post, idx) in userFeed('posts')"
               :key="String(idx)+generateId()"
            >
               <div class="mb-2 flex items-center justify-between">
                  <div class="flex items-center">
                     <p class="text-kora-light1 text-k-13 font-light">Answer</p>
                     <span class="dot-separator"></span>
                     <p class="text-kora-light1 text-k-13 font-light">Recommended for you</p>
                  </div>
                  <Tooltip :offset="12" :placement="'top'" :text="'Hide'">
                     <template v-slot:trigger>
                        <span class="trigger inline-flex justify-center items-center w-8 h-8 rounded-full cursor-default hover:bg-kora-dark1 hover:bg-opacity-50">
                           <Icon 
                              :class="'fill-current text-kora-red1'" 
                              :viewbox="getIcons['x'].viewbox" 
                              :path="getIcons['x'].path" 
                              :width="getIcons['x'].width" 
                              :height="getIcons['x'].height" 
                           />
                        </span>
                     </template>
                  </Tooltip>
               </div>
               <AnswerPreview 
                  v-if="post.postType === 'answer'"
                  :answer="post"
                  :options="{
                     borderBottom: false,
                     downvoteIcon: true,
                     followIcon: true,
                     title: true,
                     hideStats: true,
                     noPadding: true,
                     upvotersIcon: true,
                     approvalButton: true,
                     link: `/${post.slug}/answer/${post.author.username}`
                  }"
               />
            </div>
         </div>

         <div class="discover mb-2 border-light-25 rounded" v-if="suggestedSpaces.length > 0">
            <SuggestedSpaces 
               :heading="'discover new spaces'"
               :spaces="suggestedSpaces"
            />
         </div>

         <div v-if="getKeyLength('suggestedQuestions') > 0">
            <SuggestedQuestions 
               :options="{ heading: 'questions for you', metaTop: true, userAction: 'pass'}"
               :questions="suggestedQuestions"
            />
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
import { mapState } from 'vuex';

import Icon from "../components/Icon";
import Tooltip from "../components/Tooltip";
import AnswerPreview from "../components/AnswerPreview";
import SuggestedQuestions from "../components/SuggestedQuestions";
import SuggestedSpaces from "../components/SuggestedSpaces";
import { shortidMixin, iconsMixin, modalMixin } from "../utils/mixins";
import { ACTIONS } from "../constants/store";

export default {
   name: "Home",
   components: {
      Tooltip,
      Icon,
      AnswerPreview,
      SuggestedSpaces,
      SuggestedQuestions
   },
   mixins: [shortidMixin, iconsMixin, modalMixin],
   computed: {
      ...mapState({
         userFeed: (state) => (key) => state.post.feed?.[key],
         userProfile: (state) => (key) => state.auth.profile?.[key],
         suggestedSpaces: (state) => state.space.suggestedSpaces,
         getKeyLength: (state) => (key) => state.post.feed?.[key]?.length
      })
   },
   created: async function() {
      await this.$store.dispatch(ACTIONS.FETCH_USER_FEED);
      await this.$store.dispatch(ACTIONS.FETCH_SUGGESTED_QUESTIONS);
      await this.$store.dispatch(ACTIONS.FETCH_SUGGESTED_SPACES);
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
