<template>
   <div class="w-full flex items-center">
      <div class="comment-input px-4 py-2 border-light-25 bg-kora-dark3 flex-auto flex items-center">
         <textarea 
            class="w-full text-kora-light1 text-k-15 font-normal bg-transparent focus:outline-none" 
            name="comment" 
            rows="1"
            maxlength="250"
            placeholder='Add a reply...'
            autocomplete="chrome-off"
            v-model="comment"
            ref="textarea-comment"
         ></textarea>
      </div>
      <button 
         class="text-k-13 text-kora-gray1 font-medium px-4 py-1 ml-2 rounded-full"
         :class="[comment == '' ? 'cursor-default bg-indigo-400' : ' bg-kora-blue1']"
         @click="handleSubmit"
      >Reply</button>
   </div>
</template>

<script>
import { ACTIONS } from "../constants/store";

export default {
   name: "CommentInput",
   props: ["commentId", "postType"],
   data: () => ({
      comment: ""
   }),
   methods: {
      handleSubmit: async function() {
         if(this.comment === "") return;

         await this.$store.dispatch(ACTIONS.CREATE_COMMENT_REPLY, {
            data: {
               content: this.comment
            },
            commentId: this.commentId,
            postType: this.postType
         });

         this.comment = "";
      }
   },
   watch: {
      comment: function() {
         const textarea = this.$refs['textarea-comment'];

         if(this.comment === "") {
            textarea.style.height = `22px`;
            return;
         }

         textarea.style.height = `22px`;
         textarea.style.height = `${textarea.scrollHeight}px`;
      }
   },
   mounted: function() {
      this.$refs['textarea-comment'].focus();
   }
}

</script>

<style lang="scss" scoped>
.comment-input {
   border-radius: 25px;
   textarea {
      height: 22px;
      min-height: 22px;
      overflow: hidden;
      overflow-wrap: break-word;
      resize: none;
   }
}
</style>