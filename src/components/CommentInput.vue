<template>
   <div class="w-full flex items-center">
      <div class="w-10 h-10 rounded-full overflow-hidden">
         <img :src="userProfile('avatar')" alt="profile image">
      </div>
      <div class="comment-input px-4 py-2 ml-2 border-light-25 bg-kora-dark3 flex-auto flex items-center">
         <textarea 
            class="w-full text-kora-light1 text-k-15 font-normal bg-transparent focus:outline-none" 
            name="comment" 
            rows="1"
            maxlength="250"
            placeholder='Add a comment...'
            autocomplete="chrome-off"
            v-model="comment"
            ref="textarea-comment"
         ></textarea>
      </div>
      <button 
         class="text-k-13 text-kora-gray1 font-medium px-4 py-1 ml-2 rounded-full focus:outline-none"
         :class="[comment == '' ? 'cursor-default bg-indigo-400' : ' bg-kora-blue1']"
         @click="handleSubmit"
      >Add comment</button>
   </div>
</template>

<script>
import { mapState } from 'vuex';

import { ACTIONS } from "../constants/store";

export default {
   name: "CommentInput",
   props: ["postId"],
   data: () => ({
      comment: ""
   }),
   computed: {
      ...mapState({
         userProfile: (state) => (key) => state.auth.profile?.[key]
      })
   },
   methods: {
      handleSubmit: async function() {
         if(this.comment === "") return;

         await this.$store.dispatch(ACTIONS.CREATE_COMMENT, {
            comment: this.comment
         });

         await this.$store.dispatch(ACTIONS.FETCH_POST_COMMENTS, {
            postId: this.postId
         });

         this.comment = "";
      }
   },
   watch: {
      comment: function() {
         const textarea = this.$refs['textarea-comment'];

         textarea.style.height = `22px`;
         textarea.style.height = `${textarea.scrollHeight}px`;
      }
   }
}

</script>

<style lang="scss" scoped>
.comment-input {
   border-radius: 25px;
   &:focus-within {
      border: 1px solid rgba(52, 152, 219, .3);
   }
   textarea {
      height: 22px;
      min-height: 22px;
      overflow: hidden;
      overflow-wrap: break-word;
      resize: none;
   }
}
</style>