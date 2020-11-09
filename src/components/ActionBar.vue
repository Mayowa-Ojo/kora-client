<template>
   <div>
   <div class="flex items-center justify-between mt-2" v-if="target == 'questionPage'">
      <div class="-ml-2 flex items-center">
         <button type="button" class="text-k-14 text-kora-light1 font-normal px-3 py-2 rounded-full inline-flex items-center hover:bg-kora-dark2">
            <Icon 
               :class="'fill-current text-kora-light1 w-4 h-4 mr-2'" 
               :viewbox="getIcons['pencilBrackets'].viewbox" 
               :path="getIcons['pencilBrackets'].path" 
            />
            Answer
         </button>
         <button type="button" class="text-k-14 text-kora-light1 font-normal px-3 py-2 rounded-full inline-flex items-center hover:bg-kora-dark2">
            <Icon 
               :class="'fill-current text-kora-light1 w-4 h-4 mr-2 mb-1'" 
               :viewbox="getIcons['feedAlt'].viewbox" 
               :path="getIcons['feedAlt'].path" 
            />
            Follow
            <span class="dot-separator"></span>
            14
         </button>
         <button type="button" class="text-k-14 text-kora-light1 font-normal px-3 py-2 rounded-full inline-flex items-center hover:bg-kora-dark2">
            <Icon 
               :class="'stroke-current text-kora-light1 w-5 h-5 mr-2'" 
               :viewbox="getIcons['userArrow'].viewbox" 
               :path="getIcons['userArrow'].path" 
            />
            Request
         </button>
      </div>
      <div class="-mr-1 flex items-center">
         <Tooltip :offset="8" :placement="'top'" :text="'Add comment'">
            <template v-slot:trigger>
               <span class="trigger rounded-full w-8 h-8 inline-flex items-center justify-center cursor-pointer hover:bg-kora-dark2">
                  <Icon 
                     :class="'stroke-current text-kora-light1 w-4 h-4'" 
                     :viewbox="getIcons['commentDots'].viewbox" 
                     :path="getIcons['commentDots'].path" 
                  />
               </span>
            </template>
         </Tooltip>
         <Tooltip :offset="8" :placement="'top'" :text="'Downvote'">
            <template v-slot:trigger>
               <span class="trigger rounded-full w-8 h-8 inline-flex items-center justify-center cursor-pointer hover:bg-kora-dark2">
                  <Icon 
                     :class="'fill-current text-kora-light1 w-4 h-4 transform rotate-180'" 
                     :viewbox="getIcons['upvoteAlt'].viewbox" 
                     :path="getIcons['upvoteAlt'].path" 
                  />
               </span>
            </template>
         </Tooltip>
         <Tooltip :offset="8" :placement="'top'" :text="'Sharing options'">
            <template v-slot:trigger>
               <span class="trigger rounded-full w-8 h-8 inline-flex items-center justify-center cursor-pointer hover:bg-kora-dark2">
                  <Icon 
                     :class="'fill-current text-kora-light1 w-4 h-4'" 
                     :viewbox="getIcons['shareAlt'].viewbox" 
                     :path="getIcons['shareAlt'].path" 
                  />
               </span>
            </template>
         </Tooltip>
         <span class="rounded-full w-8 h-8 inline-flex items-center justify-center cursor-pointer hover:bg-kora-dark2">
            <Icon 
               :class="'fill-current text-kora-light1 w-5 h-5'" 
               :viewbox="getIcons['kebabMenu'].viewbox" 
               :path="getIcons['kebabMenu'].path" 
            />
         </span>
      </div>
   </div>
   <div class="flex items-center justify-between -ml-2" v-else-if="target == 'post'">
      <div class="flex items-center">
         <Tooltip :offset="8" :placement="'top'" :text="'Upvote'">
            <template v-slot:trigger>
               <span class="trigger mr-2 text-kora-light1 text-k-13 font-light py-1 px-2 inline-flex items-center rounded-full cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-50">
                  <Icon 
                     :class="'w-4 h-4 mr-1 fill-current text-kora-blue1'" 
                     :viewbox="getIcons['upvoteAlt'].viewbox" 
                     :path="getIcons['upvoteAlt'].path" 
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
         <Tooltip :offset="8" :placement="'top'" :text="'Downvote'" v-if="options.downvoteIcon">
            <template v-slot:trigger>
               <span class="trigger rounded-full w-8 h-8 mr-2 inline-flex items-center justify-center cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-50">
                  <Icon 
                     :class="'fill-current text-kora-light1 w-4 h-4 transform rotate-180'" 
                     :viewbox="getIcons['upvoteAlt'].viewbox" 
                     :path="getIcons['upvoteAlt'].path" 
                  />
               </span>
            </template>
         </Tooltip>
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
   <div class="flex items-center justify-between -ml-3" v-else-if="target == 'comment'">
      <div class="flex items-center">
         <div class="mr-2 text-kora-light1 text-k-13 py-1 px-3 flex items-center rounded-full cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-50">
            <Icon 
               :class="'w-3 h-3 mr-1 fill-current text-kora-light1'" 
               :viewbox="getIcons['upvoteAlt'].viewbox" 
               :path="getIcons['upvoteAlt'].path" 
            />
            <span class="font-medium">Upvote</span>
            <span class="dot-separator"></span>
            2
         </div>
         <div 
            class="trigger mr-2 text-kora-light1 text-k-13 font-medium py-1 px-2 flex items-center rounded-full cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-50"
            @click="$emit('toggle-reply-input')"
         >
            <Icon 
               :class="'w-3 h-3 mr-2 fill-current text-kora-light1'" 
               :viewbox="getIcons['reply'].viewbox" 
               :path="getIcons['reply'].path" 
            />
            Reply
         </div>
      </div>
      <div class="flex items-center">
         <Tooltip :offset="8" :placement="'top'" :text="'Downvote'">
            <template v-slot:trigger>
               <span class="trigger rounded-full w-8 h-8 inline-flex items-center justify-center cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-50">
                  <Icon 
                     :class="'fill-current text-kora-light1 w-3 h-3 transform rotate-180'" 
                     :viewbox="getIcons['upvoteAlt'].viewbox" 
                     :path="getIcons['upvoteAlt'].path" 
                  />
               </span>
            </template>
         </Tooltip>
         <Tooltip :offset="8" :placement="'top'" :text="'More'">
            <template v-slot:trigger>
               <span class="trigger w-8 h-8 inline-flex justify-center items-center rounded-full cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-50">
                  <Icon 
                     :class="'w-4 h-4 fill-current text-kora-light1'" 
                     :viewbox="getIcons['kebabMenu'].viewbox" 
                     :path="getIcons['kebabMenu'].path" 
                  />
               </span>
            </template>
         </Tooltip>
      </div>
   </div>
   <div class="flex justify-between -ml-3" v-else-if="target == 'profile'">
      <div class="flex items-center">
         <span class="px-3 py-1 inline-flex items-center cursor-pointer rounded-full hover:bg-kora-dark3 hover:bg-opacity-25">
            <Icon 
               :class="'fill-current w-4 h-4 text-kora-blue1 mr-2 mb-1'" 
               :viewbox="getIcons['following'].viewbox" 
               :path="getIcons['following'].path" 
            />
            <span class="text-kora-blue1 text-k-14 font-medium">Following</span>
            <span class="dot-separator"></span>
            <span class="text-kora-blue1 text-k-14 font-medium">14.2k</span>
         </span>
         <span class="px-3 py-1 inline-flex items-center cursor-pointer rounded-full hover:bg-kora-dark3 hover:bg-opacity-25">
            <Icon 
               :class="'fill-current w-4 h-4 text-kora-light1 mr-2'" 
               :viewbox="getIcons['alarm'].viewbox" 
               :path="getIcons['alarm'].path" 
            />
            <span class="text-kora-light1 text-k-14 font-medium">Notify Me</span>
         </span>
         <span class="px-3 py-1 inline-flex items-center cursor-pointer rounded-full hover:bg-kora-dark3 hover:bg-opacity-25">
            <Icon 
               :class="'fill-current w-4 h-4 text-kora-light1 mr-2'" 
               :viewbox="getIcons['question'].viewbox" 
               :path="getIcons['question'].path" 
            />
            <span class="text-kora-light1 text-k-14 font-medium">Ask Question</span>
         </span>
      </div>
      <Popover :offset="8" :placement="'top'">
         <template v-slot:trigger="slotProps">
            <span 
               class="trigger w-8 h-8 inline-flex items-center justify-center rounded-full cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-25"
               @click="slotProps.toggle($event)"
            >
               <Icon 
                  :class="'fill-current text-kora-light1'" 
                  :viewbox="getIcons['kebabMenu'].viewbox" 
                  :path="getIcons['kebabMenu'].path" 
                  :width="getIcons['kebabMenu'].width" 
                  :height="getIcons['kebabMenu'].height" 
               />
            </span>
         </template>

         <template v-slot:popover>
            <div class="popover">
               <ul>
                  <li class="text-kora-light1 text-k-13 font-normal py-2 px-4 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Mute Alan Mellor</li>
                  <li class="text-kora-light1 text-k-13 font-normal py-2 px-4 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Block</li>
                  <li class="text-kora-light1 text-k-13 font-normal py-2 px-4 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Report</li>
               </ul>
            </div>
         </template>
      </Popover>
   </div>
   </div>
</template>

<script>
import Icon from "./Icon";
import Tooltip from "./Tooltip";
import Popover from "./Popover";
import { iconsMixin } from "../utils/mixins";

export default {
   name: "ActionBar",
   components: {
      Icon,
      Tooltip,
      Popover
   },
   props: ["target", "options"],
   mixins: [iconsMixin]
}

</script>

<style lang="scss" scoped>

</style>