<template>
   <div class="px-4 pt-4 border-t border-kora-light1 border-opacity-10">
      <div class="comment pb-1 flex">
         <span class="block w-10 h-10 rounded-full overflow-hidden">
            <img class="image-cover" :src="comment.author.avatar" alt="user avatar">
         </span>
         <div class="ml-2 flex-1">
            <div class="flex items-center">
               <span class="text-k-13 font-bold text-kora-light1">{{comment.author.firstname}} {{comment.author.lastname}}</span>
               <Tooltip :offset="8" :placement="'top'" :text="'Original Author'" v-if="originalAuthor === comment.author.id">
                  <template v-slot:trigger>
                     <span class="trigger ml-1 inline-flex">
                        <Icon 
                           :class="'fill-current text-kora-light1 w-3 h-3'" 
                           :viewbox="getIcons['microphone'].viewbox" 
                           :path="getIcons['microphone'].path" 
                        />
                     </span>
                  </template>
               </Tooltip>
               <span class="dot-separator"></span>
               <span class="text-k-13 font-normal text-kora-light1">{{getTimeSince(comment.createdAt)}}</span>
            </div>
            <div class="mt-1">
               <p class="text-k-15 font-normal text-kora-light1">{{comment.content}}</p>
            </div>
            <div class="mt-1" v-if="!isReplyInputActive">
               <ActionBar
                  :target="'comment'"
                  :options="{replyIcon: true}"
                  :stats="{upvotes: comment.upvotes}"
                  :commentId="comment.id"
                  v-on:toggle-reply-input="toggleReplyInput"
               />
            </div>
            <div class="my-2" v-else v-on-clickaway="closeReplyInput">
               <CommentReplyInput :commentId="comment.id" :postType="postType" />
            </div>
         </div>
      </div>
      <div v-if="comment.replies.length > 0">
         <CommentReply
            v-for="(reply, idx) in comment.replies"
            :key="idx"
            :reply="reply"
            :originalAuthor="originalAuthor"
          />
      </div>
   </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

import Icon from "./Icon";
import Tooltip from "./Tooltip";
import ActionBar from "./ActionBar";
import CommentReply from "./CommentReply";
import CommentReplyInput from "./CommentReplyInput";
import { iconsMixin , dateMixin } from "../utils/mixins";

export default {
   name: "Comment",
   components: {
      Icon,
      Tooltip,
      ActionBar,
      CommentReply,
      CommentReplyInput
   },
   mixins: [clickaway, iconsMixin, dateMixin],
   props: ["comment", "originalAuthor", "postType"],
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