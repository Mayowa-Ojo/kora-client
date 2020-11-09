<template>
   <div 
      class="pt-4 pb-2"
      :class="{ 'border-bottom': options.borderBottom }"
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
               <span class="inline-block w-10 h-10 rounded-full overflow-hidden mr-2 cursor-pointer hover:opacity-75">
                  <img src="https://uifaces.co/our-content/donated/ukegoVAy.jpg" alt="user avatar">
               </span>
               <span class="flex flex-col">
                  <p class="text-kora-light1 text-k-13 font-medium inline-flex items-center"> 
                     <span class="cursor-pointer hover:underline">Alan Mellor</span> 
                     <span class="dot-separator"></span> <span class="font-light cursor-pointer hover:underline">September 19, 2017</span>
                  </p>
                  <p class="text-kora-light1 text-k-13 font-light">Experienced in C, C++ and Java</p>
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
            <p class="text-kora-light1 text-k-15 font-bold cursor-pointer hover:underline" v-if="options.title">How do I learn object-oriented programming?</p>
            <div class="content">
               <p class="text-kora-light1 text-k-15 font-normal cursor-pointer">
                  Engineers have a low opinion of everyone. Marketing is just a bunch of buzzwords, sales is a bunch of back slappers and HR is full of robots. Accounting is alright - at least they can do math. Also, managers really are pretty bad on average. There's no good way to try management without becoming a ma
               </p>
               <span class="text-kora-blue1 text-k-15 font-normal cursor-pointer hover:underline">... (more)</span>
            </div>
         </div>
         <div class="flex items-center">
            <span class="text-k-13 font-normal text-kora-light1 text-opacity-50">77 views</span>
            <span class="dot-separator"></span>
            <span class="text-k-13 font-normal text-kora-light1 text-opacity-50 cursor-pointer hover:underline">View Upvoters</span>
            <span class="dot-separator"></span>
            <span class="text-k-13 font-normal text-kora-light1 text-opacity-50 cursor-pointer hover:underline">View Sharers</span>
         </div>

         <ActionBar :target="'post'" :options="options" />

         <div class="mt-2">
            <div class="px-4 py-2 bg-kora-dark2 border-light-25 rounded">
               <CommentInput />
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
import { iconsMixin, modalMixin } from "../utils/mixins";

export default {
   name: "AnswerPreviewProfile",
   components: {
      Icon,
      Tooltip,
      ActionBar,
      CommentInput
   },
   props: ["options"],
   mixins: [iconsMixin, modalMixin],
   data: () => ({
      truncateContent: true
   })
}

</script>

<style lang="scss" scoped>
.content {
   display: -webkit-box;
   overflow: hidden;
   text-overflow: ellipsis;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 3;
   position: relative;
   span {
      position: absolute;
      bottom: 0;
      right: 0;
      line-height: 1.4rem;
      background: #292E39;
      padding-left: 2px;
   }
}
</style>