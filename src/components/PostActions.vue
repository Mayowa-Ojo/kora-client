<template>
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
               <span class="trigger mr-2 text-kora-light1 text-k-13 font-light py-1 px-2 inline-flex items-center rounded-full cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-50">
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
</template>

<script>
import Tooltip from "./Tooltip";
import Icon from "./Icon";
import { iconsMixin } from "../utils/mixins";

export default {
   name: "PostActions",
   components: {
      Tooltip,
      Icon
   },
   mixins: [iconsMixin]
}

</script>

<style lang="scss" scoped>

</style>