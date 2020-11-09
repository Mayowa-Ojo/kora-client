<template>
   <div class="comment-reply ml-12 mb-2 pt-2 pl-4 border-l-2 border-kora-light1 border-opacity-25">
      <div class="flex items-center">
         <span class="block w-4 h-4 rounded-full overflow-hidden">
            <img class="image-cover" src="https://uifaces.co/our-content/donated/KtCFjlD4.jpg" alt="user avatar">
         </span>
         <span class="text-k-13 font-bold text-kora-light1 ml-2">Jayesh Lalwani</span>
         <span class="dot-separator"></span>
         <span class="text-k-13 font-normal text-kora-light1">17h ago</span>
      </div>
      <div class="mt-1">
         <p class="text-k-13 font-normal text-kora-light1">I didn't read any aswers, these are just 10 things that came to mind based on my experience. I guess I am not alone in the world :)</p>
      </div>
      <div class="mt-1" v-if="!isReplyInputActive">
         <ActionBar :target="'comment'" v-on:toggle-reply-input="toggleReplyInput"/>
      </div>
      <div class="my-2" v-else v-on-clickaway="closeReplyInput">
         <CommentReplyInput />
      </div>
   </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

import CommentReplyInput from "./CommentReplyInput";
import ActionBar from "./ActionBar";

export default {
   name: "CommentReply",
   components: {
      CommentReplyInput,
      ActionBar
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