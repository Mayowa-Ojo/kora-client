<template>
   <div class="q-box flex">
      <div class="q-box--left">
         <header>
            <div class="flex items-center flex-wrap">
               <span
                  class="px-2 py-1 mr-1 mb-1 rounded text-k-13 font-normal text-kora-light1 bg-kora-dark3"
                  v-if="question('topics') && question('topics').length < 1"
               >No Topics Yet</span>
               <div class="flex items-center flex-wrap" v-else>
                  <span 
                     class="px-2 py-1 mr-1 mb-1 rounded text-k-13 font-normal text-kora-light1 bg-kora-dark3 cursor-pointer hover:text-kora-blue1"
                     v-for="(topic, idx) in question('topics')"
                     :key="idx"
                  >{{topic.name}}</span>
                  <span class="px-2 py-1 mr-1 mb-1 rounded text-k-13 font-normal text-kora-light1 bg-kora-dark3">+1</span>
               </div>
               <Tooltip :offset="8" :placement="'right'" :text="'Edit topics'">
                  <template v-slot:trigger>
                     <span 
                        class="trigger inline-flex justify-center items-center p-2 mr-1 mb-1 rounded-full cursor-pointer hover:bg-kora-dark3"
                        @click="toggleModal('AddTopicModal')"
                     >
                        <Icon 
                           :class="'fill-current text-kora-light1 w-4 h-4'" 
                           :viewbox="getIcons['pencil'].viewbox" 
                           :path="getIcons['pencil'].path" 
                        />
                     </span>
                  </template>
               </Tooltip>
            </div>
            <h1 class="text-k-21 font-bold text-kora-light1 mt-2">{{question('title')}}</h1>
            <ActionBar
               :target="'questionPage'"
               :shareLink="question('shareLink')"
               v-on:toggle-comment-input="toggleCommentInput"
               v-on:toggle-editor="toggleEditor"
            />
            <div class="pb-2 mt-1 border-b border-kora-light1 border-opacity-10">
               <div
                  class="px-4 py-2 bg-kora-dark2 border-light-25 rounded"
                  v-if="isCommentInputOpen" 
               >
                  <CommentInput/>
               </div>
               <div v-if="isEditorOpen">
                  <Editor
                     v-if="isEditorOpen"
                     :toolbarId="generateId()"
                     :postId="question('id')"
                     :postTitle="question('title')"
                     :willSubmitToSpace="!!$route.params.space"
                     :spaceName="currentSpace('name')"
                     :spaceId="currentSpace('id')"
                  />
               </div>
            </div>
         </header>

         <div v-if="question('answers') && question('answers').length < 1">
            <div 
               class="p-4 flex flex-col items-center border-b border-kora-light1 border-opacity-10"
               v-if="userProfile('id') !== question('author').id"
            >
               <span class="block w-10 h-10 rounded-full overflow-hidden">
                  <img src="https://qsf.fs.quoracdn.net/-4-images.new_grid.profile_default.png-26-688c79556f251aa0.png" alt="profile image">
               </span>
               <p class="text-k-15 font-medium text-kora-light1 mt-2">Mayowa, can you answer this question?</p>
               <p class="text-k-13 font-normal text-kora-light1">People are searching for an answer to this question</p>
               <button class="mt-3 py-1 px-5 rounded-full bg-kora-dark2 border-light-25 inline-flex items-center text-k-14 font-medium text-kora-blue1 hover:bg-kora-dark3">
                  <Icon 
                     :class="'fill-current text-kora-blue1 mr-2 w-4 h-4'" 
                     :viewbox="getIcons['pencilBrackets'].viewbox" 
                     :path="getIcons['pencilBrackets'].path" 
                  />
                  Answer
               </button>
            </div>

            <div 
               class="p-4 flex flex-col items-center border-b border-kora-light1 border-opacity-10"
               v-if="userProfile('id') === question('author').id"
            >
               <div class="flex items-center">
                  <span class="inline-flex w-6 h-6 rounded-full overflow-hidden">
                     <img src="https://uifaces.co/our-content/donated/ukegoVAy.jpg" alt="profile image">
                  </span>
                  <span class="inline-flex w-6 h-6 rounded-full overflow-hidden -ml-1">
                     <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="profile image">
                  </span>
                  <span class="inline-flex w-6 h-6 rounded-full overflow-hidden -ml-1">
                     <img src="https://uifaces.co/our-content/donated/KtCFjlD4.jpg" alt="profile image">
                  </span>
               </div>
               <p class="text-k-15 font-medium text-kora-light1 mt-2">{{question('author').firstname}}, want an answer to this question?</p>
               <p class="text-k-13 font-normal text-kora-light1">Requests help you get answers to your question</p>
               <button class="mt-3 py-1 px-5 rounded-full bg-kora-dark2 border-light-25 inline-flex items-center text-k-14 font-medium text-kora-blue1 hover:bg-kora-dark3">
                  <Icon 
                     :class="'stroke-current text-kora-blue1 mr-2 w-5 h-5'" 
                     :viewbox="getIcons['userArrow'].viewbox" 
                     :path="getIcons['userArrow'].path" 
                  />
                  Request Answer
               </button>
            </div>

            <div class="p-4 flex flex-col items-center border-b border-kora-light1 border-opacity-10">
               <span class="inline-flex items-center justify-center w-10 h-10 rounded-full">
                  <Icon 
                     :class="'fill-current text-kora-light1 w-6 h-6'" 
                     :viewbox="getIcons['pencil'].viewbox" 
                     :path="getIcons['pencil'].path" 
                  />
               </span>
               <p class="text-k-15 font-bold text-kora-light1 mt-4 capitalize">no answers yet</p>
            </div>
         </div>

         <div v-else>
            <div class="py-3 border-b border-kora-light1 border-opacity-10">
               <p class="text-k-15 font-medium text-kora-light1">{{question('answers') && question('answers').length}} {{ question('answers') && question('answers').length > 1 ? 'answers' : 'answer'}}</p>
            </div>

            <div class="">
               <AnswerPreview 
                  :options="{ borderBottom: true, followIcon: true, downvoteIcon: true, title: false , commentBorder: true, title: true}"
                  v-for="(answer, idx) in question('answers')"
                  :key="idx"
                  :answer="answer"
               />
            </div>
         </div>

         <div class="related-spaces rounded">
            <SuggestedSpaces :heading="'related spaces'" />
         </div>

         <div class="related-questions mb-2 rounded">
            <div class="header py-2 flex items-center border-b border-kora-light1 border-opacity-10">
               <p class="text-k-15 font-medium text-kora-light1 capitalize">related questions</p>
            </div>
            <ul>
               <li class="text-k-15 font-normal text-kora-blue1 py-2 cursor-pointer">What is it like being a UX designer?</li>
               <li class="text-k-15 font-normal text-kora-blue1 py-2 cursor-pointer">Can a graphic designer become a UX designer?</li>
               <li class="text-k-15 font-normal text-kora-blue1 py-2 cursor-pointer">Why am I not getting any job interviews as a UX designer?</li>
               <li class="text-k-15 font-normal text-kora-blue1 py-2 cursor-pointer">Why did you become a UX designer?</li>
               <li class="text-k-15 font-normal text-kora-blue1 py-2 cursor-pointer">Can I be a UX designer without being a UI designer?</li>
               <li class="text-k-15 font-normal text-kora-blue1 py-2 cursor-pointer">How can I become a UX designer in 3 months?</li>
               <li class="text-k-15 font-normal text-kora-blue1 py-2 cursor-pointer">How is a career in UX design?</li>
               <li class="text-k-15 font-normal text-kora-blue1 py-2 cursor-pointer">Is it difficult to be an excellent UX designer?</li>
            </ul>
         </div>
      </div>

      <div class="q-box--right">
         <div class="related-questions">
            <div class="header py-2 flex items-center border-b border-kora-light1 border-opacity-10">
               <p class="text-k-15 font-medium text-kora-light1 capitalize">related questions</p>
            </div>
            <ul>
               <li class="text-k-15 font-normal text-kora-blue1 py-2 cursor-pointer">What is it like being a UX designer?</li>
               <li class="text-k-15 font-normal text-kora-blue1 py-2 cursor-pointer">Can a graphic designer become a UX designer?</li>
               <li class="text-k-15 font-normal text-kora-blue1 py-2 cursor-pointer">Why am I not getting any job interviews as a UX designer?</li>
               <li class="text-k-15 font-normal text-kora-blue1 py-2 cursor-pointer">Why did you become a UX designer?</li>
               <li class="text-k-15 font-normal text-kora-blue1 py-2 cursor-pointer">Can I be a UX designer without being a UI designer?</li>
               <li class="text-k-15 font-normal text-kora-blue1 py-2 cursor-pointer">How can I become a UX designer in 3 months?</li>
               <li class="text-k-15 font-normal text-kora-blue1 py-2 cursor-pointer">How is a career in UX design?</li>
               <li class="text-k-15 font-normal text-kora-blue1 py-2 cursor-pointer">Is it difficult to be an excellent UX designer?</li>
            </ul>
            <p class="text-k-13 font-normal text-kora-light1 text-opacity-50 cursor-pointer hover:underline" @click="toggleModal('AddQuestionModal')">Ask Question</p>
         </div>
      </div>
   </div>
</template>

<script>
import { mapState } from 'vuex';

import Icon from "../components/Icon";
import Tooltip from "../components/Tooltip";
import CommentInput from "../components/CommentInput";
import AnswerPreview from "../components/AnswerPreview";
import SuggestedSpaces from "../components/SuggestedSpaces";
import ActionBar from "../components/ActionBar";
import Editor from "../components/Editor";
import { iconsMixin, shortidMixin, modalMixin } from "../utils/mixins";
import { ACTIONS } from "../constants/store";

export default {
   name: "Question",
   components: {
      Icon,
      Tooltip,
      CommentInput,
      AnswerPreview,
      SuggestedSpaces,
      ActionBar,
      Editor
   },
   mixins: [iconsMixin, shortidMixin, modalMixin],
   data: () => ({
      isCommentInputOpen: false,
      isEditorOpen: false
   }),
   computed: {
      ...mapState({
         question: (state) => (key) => state.post.question?.[key],
         userProfile: (state) => (key) => state.auth.profile?.[key],
         currentSpace: (state) => (key) => state.space.currentSpace?.[key]
      })
   },
   methods: {
      toggleCommentInput: function() {
         this.isCommentInputOpen = !this.isCommentInputOpen;
      },
      toggleEditor: function() {
         this.isEditorOpen = !this.isEditorOpen;
      }
   },
   created: async function() {
      const { slug, space } = this.$route.params;

      await this.$store.dispatch(ACTIONS.FETCH_QUESTION, {
         slug
      });

      if(space) {
         await this.$store.dispatch(ACTIONS.FETCH_CURRENT_SPACE, {
            slug: space
         });
      }
   }
}

</script>

<style lang="scss" scoped>
.q-box {
   &--left {
      width: 602px;
   }
   &--right {
      width: 314px;
      margin-left: 86px;
   }
}
</style>