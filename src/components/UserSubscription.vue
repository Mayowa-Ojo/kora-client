<template>
   <div class="w-full border-b border-kora-light1 border-opacity-10">
      <div
         class="flex items-center py-2"
         v-if="subscriptionType === 'people'"
      >
         <div class="w-8 h-8 rounded-full overflow-hidden cursor-pointer hover:bg-opacity-75" style="min-width: 32px;">
            <img :src="user.avatar" alt="user avatar">
         </div>
         <div class="flex-auto ml-3 flex flex-col">
            <p class="text-kora-light1 text-k-15 font-semibold cursor-pointer hover:underline">{{user.firstname}} {{user.lastname}}</p>
            <p class="text-kora-light1 text-k-13">{{user.credentials.profile}}</p>
            <p class="text-kora-light1 text-k-13 text-opacity-50">{{user.followers.length}} followers</p>
         </div>
         <div class="ml-6">
            <button class="h-8 px-3 py-1 inline-flex items-center rounded-full border-2 border-kora-light1 border-opacity-25 text-kora-light1 text-k-13 font-medium bg-kora-dark2 hover:bg-kora-dark1">
               <Icon 
                  :class="'fill-current text-kora-light1 inline-block mr-2'" 
                  :viewbox="getIcons['follow'].viewbox" 
                  :path="getIcons['follow'].path" 
                  :width="getIcons['follow'].width" 
                  :height="getIcons['follow'].height" 
               /> 
               Follow 
            </button>
         </div>
      </div>

      <div
         class="flex items-center py-2 cursor-pointer hover:bg-kora-dark2"
         v-if="subscriptionType === 'spaces'"
      >
         <div class="w-10 h-10 rounded-lg overflow-hidden self-start" style="min-width: 40px;">
            <img :src="space.icon" alt="space icon">
         </div>
         <div class="flex-auto ml-3 flex flex-col">
            <p class="text-kora-light1 text-k-15 font-medium">{{space.name}}</p>
            <p class="text-kora-light1 text-k-13 text-opacity-50">{{space.followers.length}} followers</p>
            <p class="text-kora-light1 text-k-13">{{space.about}}</p>
         </div>
         <div class="ml-6">
            <button class="h-8 px-3 py-1 inline-flex items-center rounded-full border-2 border-kora-light1 border-opacity-25 text-kora-light1 text-k-13 font-medium bg-kora-dark2 hover:bg-kora-dark1">
               <Icon 
                  :class="'fill-current text-kora-light1 inline-block mr-2'" 
                  :viewbox="getIcons['follow'].viewbox" 
                  :path="getIcons['follow'].path" 
                  :width="getIcons['follow'].width" 
                  :height="getIcons['follow'].height" 
               /> 
               Follow 
            </button>
         </div>
      </div>

      <div
         class="flex items-center py-2"
         v-if="subscriptionType === 'topics'"
      >
         <div class="w-8 h-8 rounded-sm overflow-hidden" style="min-width: 32px;">
            <img :src="topic.avatar" alt="topic avatar">
         </div>
         <div class="flex-auto ml-3 flex flex-col">
            <p class="text-kora-light1 text-k-15 font-medium cursor-pointer hover:underline">{{topic.name}}</p>
            <p class="text-kora-light1 text-k-13 text-opacity-50">{{topic.followers.length}} followers</p>
         </div>
         <div class="ml-6">
            <button class="h-8 px-3 py-1 inline-flex items-center rounded-full border-2 border-kora-light1 border-opacity-25 text-kora-light1 text-k-13 font-medium bg-kora-dark2 hover:bg-kora-dark1">
               <Icon 
                  :class="'fill-current text-kora-light1 inline-block mr-2'" 
                  :viewbox="getIcons['follow'].viewbox" 
                  :path="getIcons['follow'].path" 
                  :width="getIcons['follow'].width" 
                  :height="getIcons['follow'].height" 
               /> 
               Follow 
            </button>
         </div>
      </div>
   </div>
</template>

<script>
import Icon from "./Icon";
import { iconsMixin } from "../utils/mixins";

export default {
   name: "UserSubscription",
   props: ["subscriptionType", "space", "user", "topic"], // subscriptionType enum <"people", "spaces", "topics">
   mixins: [iconsMixin],
   components: {
      Icon
   }
}

</script>

<style lang="scss" scoped>

</style>