<template>
   <div class="px-4 pt-4 border-t border-kora-light1 border-opacity-10">
      <div class="comment pb-1 flex">
         <span class="block w-10 h-10 rounded-full overflow-hidden">
            <img class="image-cover" src="https://uifaces.co/our-content/donated/KtCFjlD4.jpg" alt="user avatar">
         </span>
         <div class="ml-2 flex-1">
            <div class="flex items-center">
               <span class="text-k-13 font-bold text-kora-light1">Kevin lam</span>
               <span class="dot-separator"></span>
               <span class="text-k-13 font-normal text-kora-light1">Thu</span>
            </div>
            <div class="mt-1">
               <p class="text-k-15 font-normal text-kora-light1">You must have been one of the random 27 views that has read the answers I’ve written over the past few months or we just coincidentally came to very similar conclusions from different experiences.</p>
            </div>
            <div class="mt-1" v-if="!isReplyInputActive">
               <ActionBar :target="'comment'" v-on:toggle-reply-input="toggleReplyInput" />
            </div>
            <div class="my-2" v-else v-on-clickaway="closeReplyInput">
               <CommentReplyInput />
            </div>
         </div>
      </div>
      <div>
         <CommentReply />
      </div>
   </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

import ActionBar from "./ActionBar";
import CommentReply from "./CommentReply";
import CommentReplyInput from "./CommentReplyInput";

export default {
   name: "Comment",
   components: {
      ActionBar,
      CommentReply,
      CommentReplyInput
   },
   mixins: [clickaway],
   data: () => ({
      isReplyInputActive: false
   }),
   methods: {
      toggleReplyInput: function() {
         this.isReplyInputActive = !this.isReplyInputActive;
      },
      closeReplyInput: function() {
         this.isReplyInputActive = false;
      }
   }
}

</script>

<style lang="scss" scoped>

</style>