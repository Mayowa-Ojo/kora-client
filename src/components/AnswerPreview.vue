<template>
   <div 
      class="profile-feed--item pt-4 pb-2"
      :class="{ 'border-bottom': options.borderBottom }"
   >
      <span class="text-kora-light1 text-k-13 font-normal text-opacity-50 inline-flex items-center mb-2">
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
            <span 
               class="inline-flex items-center justify-center w-8 h-8 bg-kora-dark3 rounded-full cursor-pointer hover:opacity-75"
               :class="[!options.followIcon ? 'invisible' : 'visible']"
            >
               <Icon 
                  :class="'fill-current text-kora-gray1'" 
                  :viewbox="getIcons['following'].viewbox" 
                  :path="getIcons['following'].path" 
                  :width="getIcons['following'].width" 
                  :height="getIcons['following'].height" 
               />
            </span>
         </div>
         <div class="mb-2">
            <p class="text-kora-light1 text-k-15 font-bold cursor-pointer hover:underline">How do I learn object-oriented programming?</p>
            <p class="text-kora-light1 text-k-15 font-normal cursor-pointer">
               I think of all the objects as little people at work, each one having a job to do. Each one knows how to do their job, and has all the reference books and supplies they need to do it. So we might have a writer, who writes a letter. This letter is then handed to a... 
               <span class="text-kora-blue1 hover:underline">(more)</span>
            </p>
         </div>
         <div class="flex items-center justify-between -ml-2">
            <div class="flex items-center">
               <Tooltip :offset="8" :placement="'top'" :text="'Upvote'">
                  <template v-slot:trigger>
                     <span class="trigger mr-2 text-kora-light1 text-k-13 font-light py-1 px-2 inline-flex items-center rounded-full cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-50">
                        <Icon 
                           :class="'w-4 h-4 mr-1 fill-current text-kora-light1'" 
                           :viewbox="getIcons['upvote'].viewbox" 
                           :path="getIcons['upvote'].path" 
                        />
                        103
                     </span>
                  </template>
               </Tooltip>
               <Tooltip :offset="8" :placement="'top'" :text="'Share'">
                  <template v-slot:trigger>
                     <span 
                        class="trigger mr-2 text-kora-light1 text-k-13 font-light py-1 px-2 inline-flex items-center rounded-full cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-50"
                        @click="toggleModal('SharePostModal')"
                     >
                        <Icon 
                           :class="'w-4 h-4 mr-2 fill-current text-kora-light1'" 
                           :viewbox="getIcons['share'].viewbox" 
                           :path="getIcons['share'].path" 
                        />
                        2
                     </span>
                  </template>
               </Tooltip>
               <Tooltip :offset="8" :placement="'top'" :text="'Comment'">
                  <template v-slot:trigger>
                     <span class="trigger mr-2 text-kora-light1 text-k-13 font-light py-1 px-2 inline-flex items-center rounded-full cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-50">
                        <Icon 
                           :class="'w-5 h-5 mr-1 stroke-current text-kora-light1'" 
                           :viewbox="getIcons['comment'].viewbox" 
                           :path="getIcons['comment'].path" 
                        />
                        13
                     </span>
                  </template>
               </Tooltip>
            </div>
            <div class="flex items-center">
               <Tooltip :offset="8" :placement="'top'" :text="'More sharing options'">
                  <template v-slot:trigger>
                     <span class="trigger w-8 h-8 mr-2 inline-flex justify-center items-center rounded-full cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-50">
                        <Icon 
                           :class="'w-4 h-4 fill-current text-kora-light1'" 
                           :viewbox="getIcons['shareAlt'].viewbox" 
                           :path="getIcons['shareAlt'].path" 
                        />
                     </span>
                  </template>
               </Tooltip>
               <Tooltip :offset="8" :placement="'top'" :text="'More'">
                  <template v-slot:trigger>
                     <span class="trigger w-8 h-8 inline-flex justify-center items-center rounded-full cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-50">
                        <Icon 
                           :class="'w-5 h-5 fill-current text-kora-light1'" 
                           :viewbox="getIcons['kebabMenu'].viewbox" 
                           :path="getIcons['kebabMenu'].path" 
                        />
                     </span>
                  </template>
               </Tooltip>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import Icon from "../components/Icon";
import Tooltip from "../components/Tooltip";
import { iconsMixin, modalMixin } from "../utils/mixins";

export default {
   name: "AnswerPreviewProfile",
   components: {
      Icon,
      Tooltip
   },
   props: ["options"],
   mixins: [iconsMixin, modalMixin]
}

</script>

<style lang="scss" scoped>

</style>