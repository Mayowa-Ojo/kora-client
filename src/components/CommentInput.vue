<template>
   <div class="w-full flex items-center px-4 py-2 border-light-25 rounded bg-kora-dark2">
      <div class="w-10 h-10 rounded-full overflow-hidden">
         <img src="https://qsf.fs.quoracdn.net/-4-images.new_grid.profile_default.png-26-688c79556f251aa0.png" alt="profile image">
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
         class="text-k-13 text-kora-gray1 font-medium px-4 py-1 ml-2 rounded-full"
         :class="[comment == '' ? 'cursor-default bg-indigo-400' : ' bg-kora-blue1']"
      >Add comment</button>
   </div>
</template>

<script>
export default {
   name: "CommentInput",
   data: () => ({
      comment: ""
   }),
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
   textarea {
      height: 26px;
      min-height: 22px;
      overflow: hidden;
      overflow-wrap: break-word;
      resize: none;
   }
}
</style>