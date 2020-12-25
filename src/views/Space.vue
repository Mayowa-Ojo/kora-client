<template>
   <div class="q-box flex">
      <main class="q-box--left">
         <div class="space-info border-light-25 bg-kora-dark2">
            <div class="space-cover">
               <img class="image-cover" :src="currentSpace('coverPhoto')" alt="space cover image">
            </div>
            <div class="px-4">
               <span class="inline-block w-20 h-20 -mt-10 rounded-full overflow-hidden relative cursor-pointer">
                  <img class="image-cover" :src="currentSpace('icon')" alt="space icon image">
                  <span class="inline-block w-full h-full bg-transparent absolute inset-0 hover:bg-kora-dark2 hover:bg-opacity-50 "></span>
               </span>
            </div>
            <div class="px-4">
               <p class="text-k-21 font-bold text-kora-light1 cursor-pointer hover:underline">{{currentSpace('name')}}</p>
               <p class="text-k-13 font-normal text-kora-light1 text-opacity-75">{{`space/${currentSpace('slug')}`}}</p>
               <p class="text-k-13 font-normal text-kora-light1 mt-2">{{currentSpace('about')}}</p>
            </div>
            <div class="mt-1 flex justify-between">
               <div class="flex px-1">
                  <div class="px-3 py-2 flex items-center rounded-full cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">
                     <span class="inline-block">
                        <Icon 
                           :class="'fill-current text-kora-blue1 w-5 h-5'" 
                           :viewbox="getIcons['following'].viewbox" 
                           :path="getIcons['following'].path" 
                        />
                     </span>
                     <span class="text-k-14 font-medium text-kora-blue1 ml-2">Following</span>
                     <span class="dot-separator"></span>
                     <span class="text-k-14 font-medium text-kora-blue1">329K</span>
                  </div>
                  <div class="px-4 py-2 ml-2 flex items-center rounded-full cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">
                     <span class="inline-block">
                        <Icon 
                           :class="'fill-current text-kora-blue1 w-4 h-4'" 
                           :viewbox="getIcons['alarm'].viewbox" 
                           :path="getIcons['alarm'].path" 
                        />
                     </span>
                     <span class="text-k-14 font-medium text-kora-blue1 ml-1">Highlights</span>
                  </div>
               </div>
               <div class="flex items-center">
                  <Tooltip :offset="12" :placement="'top'" :text="'Invite'">
                     <template v-slot:trigger>
                        <span class="trigger inline-flex w-8 h-8 rounded-full items-center justify-center cursor-pointer hover:bg-kora-dark1">
                           <Icon 
                              :class="'fill-current text-kora-light1 w-4 h-4'" 
                              :viewbox="getIcons['contact'].viewbox" 
                              :path="getIcons['contact'].path" 
                           />
                        </span>
                     </template>
                  </Tooltip>
                  <Tooltip :offset="12" :placement="'top'" :text="'More sharing options'">
                     <template v-slot:trigger>
                        <span class="trigger inline-flex w-8 h-8 ml-2 rounded-full items-center justify-center cursor-pointer hover:bg-kora-dark1">
                           <Icon 
                              :class="'fill-current text-kora-light1 w-4 h-4'" 
                              :viewbox="getIcons['shareAlt'].viewbox" 
                              :path="getIcons['shareAlt'].path" 
                           />
                        </span>
                     </template>
                  </Tooltip>
                  <Tooltip :offset="12" :placement="'top'" :text="'More'">
                     <template v-slot:trigger>
                        <span class="trigger inline-flex w-8 h-8 ml-2 rounded-full items-center justify-center cursor-pointer hover:bg-kora-dark1">
                           <Icon 
                              :class="'fill-current text-kora-light1 w-4 h-4'" 
                              :viewbox="getIcons['kebabMenu'].viewbox" 
                              :path="getIcons['kebabMenu'].path" 
                           />
                        </span>
                     </template>
                  </Tooltip>
               </div>
            </div>
            <div class="flex items-center pl-4 border-t border-kora-light1 border-opacity-10">
               <span class="inline-flex items-center py-4 px-2 border-b-2 border-kora-red1 text-k-13 font-medium text-kora-red1">Main</span>
               <span class="inline-flex items-center py-4 px-2 text-k-13 font-medium text-kora-light1">Questions</span>
               <span class="inline-flex items-center py-4 px-2 text-k-13 font-medium text-kora-light1">People</span>
            </div>
         </div>

         <div 
            class="new-post p-4 mt-2 bg-kora-dark2 border-light-25 rounded-sm cursor-pointer hover:border-opacity-50"
            @click="toggleModal('AddPostModal')"
         >
            <div class="flex items-center">
               <span class="inline-block w-5 h-5 rounded-full overflow-hidden">
                  <img :src="userProfile('avatar')" alt="user avatar image">
               </span>
               <p class="text-k-13 font-light text-kora-light1 ml-2">{{userProfile('firstname')}} {{userProfile('lastname')}}</p>
            </div>
            <div>
               <p class="text-k-18 font-semibold text-kora-light1 mt-2">Say something...</p>
            </div>
         </div>

         <div class="mt-2 mx-2">
            <Popover :offset="8" :placement="'bottom'">
               <template v-slot:trigger="slotProps">
                  <button 
                     class="trigger px-3 py-1 text-k-13 font-medium text-kora-light1 inline-flex items-center rounded-full cursor-pointer hover:bg-kora-dark2 focus:outline-none"
                     @click="slotProps.toggle($event)"
                  >
                     <Icon 
                        :class="'stroke-current text-kora-light1 w-4 h-4 mr-2'" 
                        :viewbox="getIcons['trendUp'].viewbox" 
                        :path="getIcons['trendUp'].path" 
                     />
                     Top
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
                        <li class="flex items-center justify-between text-kora-light1 text-k-13 font-normal py-2 px-4 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">
                           Recent
                           <Icon 
                              :class="'fill-current text-kora-green1 w-4 h-4 ml-3 invisible'" 
                              :viewbox="getIcons['check'].viewbox" 
                              :path="getIcons['check'].path" 
                           />
                        </li>
                        <li class="flex items-center justify-between text-kora-light1 text-k-13 font-normal py-2 px-4 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">
                           Top
                           <Icon 
                              :class="'fill-current text-kora-green1 w-4 h-4 ml-3'" 
                              :viewbox="getIcons['check'].viewbox" 
                              :path="getIcons['check'].path" 
                           />
                        </li>
                     </ul>
                  </div>
               </template>
            </Popover>
         </div>

         <div class="mt-2">
            <div
               class="p-4 flex flex-col items-center border-b border-kora-light1 border-opacity-10"
               v-if="currentSpace('posts') && currentSpace('posts').length < 1"
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
                  v-for="(post, idx) in currentSpace('posts')"
                  :key="idx"
               >
                  <div
                     class="px-4 bg-kora-dark2 border-light-25 rounded-sm"
                     v-if="post.postType && post.postType === 'answer'"
                  >
                     <AnswerPreview 
                        :options="{ followIcon: false, borderBottom: false, title: true}"
                        :answer="post"
                        :spaceSlug="currentSpace('slug')"
                     />
                  </div>
                  <div
                     class="px-4 bg-kora-dark2 border-light-25 rounded-sm"
                     v-else-if="post.comment"
                  >
                     <SharedPost 
                        :options="{ followIcon: false, borderBottom: false }"
                     />
                  </div>
               </div>
               <div
                  class="mt-2 rounded-sm"
                  v-if="getSuggestedQuestions && getSuggestedQuestions.length > 0"
               >
                  <SuggestedQuestions 
                     :options="{ heading: 'questions from this space', metaTop: false, userAction: 'request'}"
                     :questions="getSuggestedQuestions"
                  />
               </div>
            </div>
         </div>
      </main>

      <aside class="q-box--right">
         <div class="details bg-kora-dark2 border-light-25 rounded-sm">
            <header class="px-4 py-2 border-b border-kora-light1 border-opacity-10">
               <p class="text-k-15 font-medium text-kora-light1">Details</p>
            </header>
            <div class="p-4">
               <p class="text-k-13 font-normal text-kora-light1">This space is for all programmers who are interested in optimizing their code, learning to code for the first time, or just want to be surrounded by the coding environment. You will meet many individuals in this space who will be able to answer your questions, and who will ask questions that may challenge you!</p>
            </div>
         </div>

         <div class="people mt-2 bg-kora-dark2 border-light-25 rounded-sm">
            <header class="px-4 py-2 border-b border-kora-light1 border-opacity-10">
               <p class="text-k-15 font-medium text-kora-light1 inline-flex items-center">
                  People
                  <span class="dot-separator"></span>
                  329.4K
               </p>
            </header>
            <div class="p-4 border-b border-kora-light1 border-opacity-10">
               <div>
                  <div class="flex items-center">
                     <span class="inline-block w-8 h-8 rounded-full overflow-hidden border-2 border-kora-dark2 cursor-pointer hover:opacity-75">
                        <img src="https://uifaces.co/our-content/donated/gPZwCbdS.jpg" alt="user avatar">
                     </span>
                     <span class="inline-block w-8 h-8 rounded-full overflow-hidden border-2 border-kora-dark2 cursor-pointer hover:opacity-75 -ml-2">
                        <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BODFjZTkwMjItYzRhMS00OWYxLWI3YTUtNWIzOWQ4Yjg4NGZiXkEyXkFqcGdeQXVyMTQ0ODAxNzE@._V1_UX172_CR0,0,172,256_AL_.jpg" alt="user avatar">
                     </span>
                  </div>
                  <p class="text-k-13 font-normal text-kora-light1 mt-2">Samuel Jackson is an admin. Laura White is a moderator</p>
               </div>
               <div>
                  <div class="flex items-center mt-2">
                     <span class="inline-block w-8 h-8 rounded-full overflow-hidden border-2 border-kora-dark2 cursor-pointer hover:opacity-75">
                        <img class="image-cover" src="https://uifaces.co/our-content/donated/ukegoVAy.jpg" alt="user avatar">
                     </span>
                     <span class="inline-block w-8 h-8 rounded-full overflow-hidden border-2 border-kora-dark2 cursor-pointer hover:opacity-75 -ml-2">
                        <img class="image-cover" src="https://images-na.ssl-images-amazon.com/images/M/MV5BNTk2OGU4NzktODhhOC00Nzc2LWIyNzYtOWViMjljZGFiNTMxXkEyXkFqcGdeQXVyMTE1NTQwOTk@._V1_UY256_CR12,0,172,256_AL_.jpg" alt="user avatar">
                     </span>
                     <span class="inline-block w-8 h-8 rounded-full overflow-hidden border-2 border-kora-dark2 cursor-pointer hover:opacity-75 -ml-2">
                        <img class="image-cover" src="https://uifaces.co/our-content/donated/rSuiu_Hr.jpg" alt="user avatar">
                     </span>
                     <span class="inline-block w-8 h-8 rounded-full overflow-hidden border-2 border-kora-dark2 cursor-pointer hover:opacity-75 -ml-2">
                        <img class="image-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=046c29138c1335ef8edee7daf521ba50" alt="user avatar">
                     </span>
                     <span class="inline-block w-8 h-8 rounded-full overflow-hidden border-2 border-kora-dark2 cursor-pointer hover:opacity-75 -ml-2">
                        <img class="image-cover" src="https://uifaces.co/our-content/donated/6f6p85he.jpg" alt="user avatar">
                     </span>
                     <span class="inline-block w-8 h-8 rounded-full overflow-hidden border-2 border-kora-dark2 cursor-pointer hover:opacity-75 -ml-2">
                        <img class="image-cover" src="https://uifaces.co/our-content/donated/XdLjsJX_.jpg" alt="user avatar">
                     </span>
                  </div>
                  <p class="text-k-13 font-normal text-kora-light1 mt-2">Alan Mellor, Gary Taylor and 66 more are contributors</p>
               </div>
            </div>
            <div class="flex items-center justify-center h-10 cursor-pointer hover:bg-kora-dark1">
               <p class="text-k-14 font-normal text-kora-light1 capitalize">view more</p>
               <Icon 
                  :class="'fill-current inline-block text-kora-light1 w-3 h-3 ml-2 transform -rotate-90'" 
                  :viewbox="getIcons['chevron'].viewbox" 
                  :path="getIcons['chevron'].path" 
               />
            </div>
         </div>
      </aside>

   </div>
</template>

<script>
import { mapState } from "vuex";

import Icon from "../components/Icon";
import Tooltip from "../components/Tooltip";
import Popover from "../components/Popover";
import AnswerPreview from "../components/AnswerPreview";
import SharedPost from "../components/SharedPost";
import SuggestedQuestions from "../components/SuggestedQuestions";
import { iconsMixin, modalMixin } from "../utils/mixins";
import { ACTIONS } from '../constants/store';

export default {
   name: "Space",
   components: {
      Icon,
      Tooltip,
      Popover,
      AnswerPreview,
      SharedPost,
      SuggestedQuestions
   },
   mixins: [iconsMixin, modalMixin],
   computed: {
      ...mapState({
         currentSpace: (state) => (key) => state.space.currentSpace?.[key],
         userProfile: (state) => (key) => state.auth.profile?.[key]
      }),
      getSuggestedQuestions: function() {
         return this.currentSpace("posts") &&
         this.currentSpace("posts").filter(post => post.postType && post.postType === "question")
      }
   },
   created: async function() {
      const { slug } = this.$route.params;

      await this.$store.dispatch(ACTIONS.FETCH_CURRENT_SPACE, {
         slug
      });
   }
}

</script>

<style lang="scss" scoped>
.q-box {
   &--left {
      width: 658px;
      .space-cover {
         height: 164px;
      }
   }
   &--right {
      width: 314px;
      margin-left: 30px;
   }
}
.popover {
   &-content-view {
      width: max-content;
      max-width: 230px;
   }
}
</style>