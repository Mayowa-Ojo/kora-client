<template>
   <div class="comment-reply ml-12 pt-2 pl-4 border-l-2 border-kora-light1 border-opacity-25">
      <div class="flex items-center">
         <span class="block w-4 h-4 rounded-full overflow-hidden">
            <img class="image-cover" :src="reply.author.avatar" alt="user avatar">
         </span>
         <span class="text-k-13 font-bold text-kora-light1 ml-2">{{reply.author.firstname}} {{reply.author.lastname}}</span>
         <Tooltip :offset="8" :placement="'top'" :text="'Original Author'" v-if="originalAuthor === reply.author.id">
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
         <span class="text-k-13 font-normal text-kora-light1">{{getTimeSince(reply.createdAt)}}</span>
      </div>
      <div class="mt-1">
         <p class="text-k-13 font-normal text-kora-light1">{{reply.content}}</p>
      </div>
      <div class="mt-1" v-if="!isReplyInputActive">
         <ActionBar
            :target="'comment'"
            :options="{replyIcon: false}"
            :stats="{upvotes: reply.upvotes}"
            :commentId="reply.id"
            v-on:toggle-reply-input="toggleReplyInput"
         />
      </div>
      <div class="my-2" v-else v-on-clickaway="closeReplyInput">
         <CommentReplyInput />
      </div>
   </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

import Icon from "./Icon";
import Tooltip from "./Tooltip";
import ActionBar from "./ActionBar";
import CommentReplyInput from "./CommentReplyInput";
import { iconsMixin, dateMixin } from "../utils/mixins";

export default {
   name: "CommentReply",
   components: {
      Icon,
      Tooltip,
      ActionBar,
      CommentReplyInput,
   },
   mixins: [clickaway, iconsMixin, dateMixin],
   props: ["reply", "originalAuthor"],
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