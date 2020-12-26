<template>
   <div 
      class="profile-feed--item pt-4 pb-2"
      :class="{ 'border-bottom': options.borderBottom }"
   >
      <div>
         <div class="mb-2 flex justify-between items-center">
            <div class="flex items-center">
               <span class="inline-block w-10 h-10 rounded-full overflow-hidden mr-2 cursor-pointer hover:opacity-75">
                  <img :src="sharedPost.space.icon" alt="user avatar">
               </span>
               <span class="flex flex-col">
                  <p class="text-kora-light1 text-k-13 inline-flex items-center"> 
                     <span class="font-bold cursor-pointer hover:underline">{{sharedPost.space.name}}</span> 
                     <span class="dot-separator"></span> 
                     <span class="font-light cursor-pointer hover:underline">Sat</span>
                  </p>
                  <p class="text-kora-light1 text-k-13 inline-flex items-center"> 
                     <span
                        class="font-medium inline-flex items-center"
                        v-if="sharedPost.author.id in sharedPost.space.admins"
                     >
                        <Icon 
                           :class="'fill-current text-kora-light1 mr-1'" 
                           :viewbox="getIcons['shield'].viewbox" 
                           :path="getIcons['shield'].path" 
                           :width="getIcons['shield'].width" 
                           :height="getIcons['shield'].height" 
                        />
                        Admin
                        <span class="dot-separator"></span> 
                     </span> 
                     <span class="font-light">Shared by
                        <span class="cursor-pointer hover:underline">{{sharedPost.author.firstname}} {{sharedPost.author.lastname}}</span>
                     </span>
                  </p>
               </span>
            </div>
            <span 
               class="inline-flex items-center justify-center w-8 h-8 bg-kora-gray1 rounded-full cursor-pointer hover:opacity-75"
               :class="[!options.followIcon ? 'invisible' : 'visible']"
            >
               <Icon 
                  :class="'fill-current text-kora-dark2'" 
                  :viewbox="getIcons['follow'].viewbox" 
                  :path="getIcons['follow'].path" 
                  :width="getIcons['follow'].width" 
                  :height="getIcons['follow'].height" 
               />
            </span>
         </div>

         <p class="text-kora-light1 text-k-15 font-normal">{{sharedPost.comment}}</p>

         <div class="mb-1 border-light-25 mt-3 px-4 py-2 rounded-lg bg-kora-dark1 bg-opacity-100 hover:bg-kora-dark2">
            <div class="flex items-center">
               <span class="w-5 h-5 mr-2 inline-block overflow-hidden rounded-full cursor-pointer hover:opacity-50">
                  <img class="image-cover" :src="sharedPost.post.author.avatar" alt="user avatar">
               </span>
               <span class="text-kora-light1 text-k-13 font-light">{{sharedPost.post.author.firstname}} {{sharedPost.post.author.lastname}}</span>
               <span class="dot-separator"></span>
               <span class="text-kora-light1 text-k-13 font-light cursor-pointer hover:underline">Answered Sat</span>
            </div>
            <router-link :to="{path: `/question/${sharedPost.post.slug}`}">
               <p class="text-kora-light1 text-k-15 font-bold mt-1 mb-1">{{sharedPost.post.title}}</p>
            </router-link>
            <div class="content" v-html="getTruncatedContent" v-if="truncateContent" @click="toggleTruncateContent">
               <!-- truncated content is injected here -->
            </div>
            <div v-else>
               <div class="rich-content mt-3" v-html="sharedPost.post.content">
                  <!-- rich text is rendered here -->
               </div>
               <span
                  class="block text-k-13 text-kora-blue1 cursor-pointer hover:underline"
                  @click="toggleTruncateContent"
               >(show less)</span>
               <span class="mt-1 text-k-13 text-kora-light1 text-opacity-50 inline-flex items-center cursor-pointer hover:underline">
                  {{sharedPost.post.views}} views
                  <span class="dot-separator"></span>
                  {{sharedPost.post.shares}} shares
                  <span class="dot-separator"></span>
                  comments
               </span>
            </div>
         </div>

         <ActionBar
            :target="'post'"
            :options="options"
            :shareLink="sharedPost.post.shareLink"
            v-on:toggle-comments="toggleComments"
         />
         <div class="">
            <div
               class="mt-2 pb-2 px-4 py-2 bg-kora-dark2"
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
import ActionBar from "./ActionBar";
import CommentInput from "../components/CommentInput";
import Comment from "../components/Comment";
import { iconsMixin } from "../utils/mixins";

export default {
   name: "SharedPost",
   components: {
      Icon,
      ActionBar,
      Comment,
      CommentInput
   },
   props: ["options", "sharedPost"],
   mixins: [iconsMixin],
   data: () => ({
      truncateContent: true,
      isCommentsOpen: false
   }),
   computed: {
      getTruncatedContent: function() {
         return `
            <p class="text-kora-light1 text-k-15 font-normal cursor-pointer">${this.sharedPost.post.contentTruncated}... <span class="text-kora-blue1 hover:underline">(more)</span></p>
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