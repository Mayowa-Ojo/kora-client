<template>
   <div 
      :class="{ 'border-bottom': options.borderBottom, 'py-2': !options.noPadding}"
   >
      <span 
         class="text-kora-light1 text-k-13 font-normal text-opacity-50 inline-flex items-center mb-2"
         v-if="options.pinned"
      >
         <Icon 
            :class="'fill-current text-kora-light1 mr-2 opacity-50'" 
            :viewbox="getIcons['pin'].viewbox" 
            :path="getIcons['pin'].path" 
            :width="getIcons['pin'].width" 
            :height="getIcons['pin'].height" 
         />
         Pinned Answer
      </span>
      <div>
         <div class="mb-2 flex justify-between items-center">
            <div class="flex items-center">
               <router-link :to="{path: `/profile/${answer.author.username}`}">
                  <span class="inline-block w-10 h-10 rounded-full overflow-hidden mr-2 cursor-pointer hover:opacity-75">
                     <img :src="answer.author.avatar" alt="user avatar">
                  </span>
               </router-link>
               <span class="flex flex-col">
                  <p class="text-kora-light1 text-k-13 font-medium inline-flex items-center"> 
                     <router-link :to="{path: `/profile/${answer.author.username}`}">
                        <span class="cursor-pointer hover:underline">{{answer.author.firstname}} {{answer.author.lastname}}</span> 
                     </router-link>
                     <span class="dot-separator"></span> <span class="font-light cursor-pointer hover:underline">{{getTimeSince(answer.createdAt)}}</span>
                  </p>
                  <p class="text-kora-light1 text-k-13 font-light">{{answer.author.credentials.profile}}</p>
               </span>
            </div>
            <Tooltip :offset="8" :placement="'top'" :text="'Following Alan Mellor'" v-if="options.followIcon">
               <template v-slot:trigger>
                  <span class="trigger inline-flex items-center justify-center w-8 h-8 bg-kora-dark3 rounded-full cursor-pointer hover:opacity-75">
                     <Icon 
                        :class="'fill-current text-kora-blue1'" 
                        :viewbox="getIcons['following'].viewbox" 
                        :path="getIcons['following'].path" 
                        :width="getIcons['following'].width" 
                        :height="getIcons['following'].height" 
                     />
                  </span>
               </template>
            </Tooltip>
         </div>
         <div class="mb-2">
            <router-link :to="{path: spaceSlug ? `/question/${spaceSlug}/${answer.slug}` : `/question/${answer.slug}`}">
               <p class="mb-1 text-kora-light1 text-k-15 font-bold cursor-pointer hover:underline" v-if="options.title">{{answer.title}}</p>
            </router-link>
            <div class="content" v-html="getTruncatedContent" v-if="truncateContent" @click="toggleTruncateContent">
               <!-- truncated content is injected here -->
            </div>
            <div v-else>
               <div class="rich-content mt-3" v-html="answer.content">
                  <!-- rich text is rendered here -->
               </div>
               <span
                  class="block text-k-13 text-kora-blue1 cursor-pointer hover:underline"
                  @click="toggleTruncateContent"
               >(show less)</span>
            </div>
         </div>
         <div class="my-2 flex justify-center" v-if="options.approvalButton">
            <button class="px-4 py-1 border border-kora-light1 border-opacity-25 bg-kora-dark3 text-k-13 text-kora-blue1 rounded-full inline-flex items-center hover:bg-opacity-50 focus:outline-none">
               <Icon 
                  :class="'fill-current text-kora-blue1 mr-2 w-3 h-3'" 
                  :viewbox="getIcons['heart'].viewbox" 
                  :path="getIcons['heart'].path" 
               />
               I want to see more like this
            </button>
         </div>
         <div class="flex items-center" v-if="!options.hideStats">
            <span class="text-k-13 font-normal text-kora-light1 text-opacity-50">{{answer.views}} views</span>
            <span class="dot-separator"></span>
            <span class="text-k-13 font-normal text-kora-light1 text-opacity-50 cursor-pointer hover:underline">View Upvoters</span>
            <span class="dot-separator"></span>
            <span class="text-k-13 font-normal text-kora-light1 text-opacity-50 cursor-pointer hover:underline">View Sharers</span>
         </div>

         <ActionBar
            :target="'post'"
            :options="options"
            :answer="answer"
            :postId="answer.id"
            :stats="{upvotes: answer.upvotes, shares: answer.shares, comments: answer.comments.length}"
            v-on:toggle-comments="toggleComments"
         />

         <div class="">
            <div
               class="px-4 py-2 mt-2 bg-kora-dark2"
               :class="{ 'border-light-25 rounded': options.commentBorder, '-mx-4': !options.commentBorder }"
               v-if="isCommentsOpen"
            >
               <CommentInput />
               <div class="mt-2 -mx-4">
                  <Comment />
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import Icon from "../components/Icon";
import Tooltip from "../components/Tooltip";
import ActionBar from "../components/ActionBar";
import CommentInput from "../components/CommentInput";
import Comment from "../components/Comment";
import { iconsMixin, modalMixin, dateMixin } from "../utils/mixins";

export default {
   name: "AnswerPreview",
   components: {
      Icon,
      Tooltip,
      ActionBar,
      Comment,
      CommentInput
   },
   props: ["options", "answer", "spaceSlug"],
   mixins: [iconsMixin, modalMixin, dateMixin],
   data: () => ({
      truncateContent: true,
      isCommentsOpen: false
   }),
   computed: {
      getTruncatedContent: function() {
         return `
            <p class="text-kora-light1 text-k-15 font-normal cursor-pointer">${this.answer.contentTruncated}... <span class="text-kora-blue1 hover:underline">(more)</span></p>
         `;
      }
   },
   methods: {
      toggleComments: function() {
         this.isCommentsOpen = !this.isCommentsOpen;
      },
      toggleTruncateContent: function() {
         this.truncateContent = !this.truncateContent;
      }
   }
}

</script>

<style lang="scss" scoped>
.rich-content {
   color: #9ADCFA;
   font-size: 15px;
}
</style>