<template>
   <div class="q-box flex">
      <aside class="q-box--left w-40">
         <ul>
            <li class="py-2 text-kora-light1 text-k-15 font-medium border-b border-kora-light1 border-opacity-10">Filters</li>
            <li class="mt-1 -mx-4 py-1 px-4 text-kora-light1 text-k-13 font-normal cursor-pointer hover:bg-kora-dark2 bg-kora-dark3 rounded">All Notifications</li>
            <li class="mt-1 -mx-4 py-1 px-4 text-kora-light1 text-k-13 font-normal cursor-pointer hover:bg-kora-dark2 rounded">Stories</li>
            <li class="mt-1 -mx-4 py-1 px-4 text-kora-light1 text-k-13 font-normal cursor-pointer hover:bg-kora-dark2 rounded">Questions</li>
            <li class="mt-1 -mx-4 py-1 px-4 text-kora-light1 text-k-13 font-normal cursor-pointer hover:bg-kora-dark2 rounded">Spaces
               <span class="inline-flex justify-center items-center -mr-2 w-5 h-5 rounded-sm bg-kora-dark3 text-kora-light1 text-k-13 float-right">19</span>
            </li>
            <li class="mt-1 -mx-4 py-1 px-4 text-kora-light1 text-k-13 font-normal cursor-pointer hover:bg-kora-dark2 rounded">Subscriptions</li>
            <li class="mt-1 -mx-4 py-1 px-4 text-kora-light1 text-k-13 font-normal cursor-pointer hover:bg-kora-dark2 rounded">Comments</li>
            <li class="mt-1 -mx-4 py-1 px-4 text-kora-light1 text-k-13 font-normal cursor-pointer hover:bg-kora-dark2 rounded">Upvotes</li>
            <li class="mt-1 -mx-4 py-1 px-4 text-kora-light1 text-k-13 font-normal cursor-pointer hover:bg-kora-dark2 rounded">Your Content</li>
            <li class="mt-1 -mx-4 py-1 px-4 text-kora-light1 text-k-13 font-normal cursor-pointer hover:bg-kora-dark2 rounded">Your Profile</li>
            <li class="mt-1 -mx-4 py-1 px-4 text-kora-light1 text-k-13 font-normal cursor-pointer hover:bg-kora-dark2 rounded">Announcements</li>
         </ul>
      </aside>

      <div class="q-box--center">
         <div class="my-2 flex justify-between">
            <p class="text-kora-light1 text-k-15 font-medium">Notifications</p>
            <span class="inline-flex items-center">
               <p class="text-kora-light1 text-k-13 font-normal cursor-pointer hover:underline">Mark All As Read</p>
               <span class="dot-separator"></span>
               <p class="text-kora-light1 text-k-13 font-normal cursor-pointer hover:underline">Settings</p>
            </span>
         </div>
         <div class="notifications-list mb-8">
            <div class="alert w-full flex justify-center fixed">
               <button class="px-5 py-2 rounded-full bg-kora-blue2 text-kora-gray1 text-k-14 font-medium flex items-center">
                  <span class="inline-flex mr-2">
                     <Icon 
                        :class="'fill-current text-kora-gray1'" 
                        :viewbox="getIcons['sync'].viewbox" 
                        :path="getIcons['sync'].path" 
                        :width="getIcons['sync'].width" 
                        :height="getIcons['sync'].height" 
                     />
                  </span>
                  New Notifications
               </button>
            </div>
            <div 
               class="notifications-list__item border-b p-4 border-kora-light1 border-opacity-10 flex"
               v-for="(space, idx) in getTempData.spaces"
               :key="idx"
            >
               <div class="avatar h-full">
                  <span class="inline-block overflow-hidden rounded-full w-8 h-8">
                     <img :src="space.img" alt="space icon">
                  </span>
               </div>

               <div class="mx-4 flex flex-col">
                  <div class="mb-1 flex items-center">
                     <p class="text-kora-light1 text-k-13 font-light">Highlight in {{ space.name }}</p>
                     <span class="dot-separator"></span>
                     <p class="text-kora-light1 text-k-13 font-light">Shared by Michael Rivera</p>
                     <span class="dot-separator"></span>
                     <p class="text-kora-light1 text-k-13 font-light">14m ago</p>
                  </div>
                  <div class="py-1 px-2 border-light-25 rounded-lg cursor-pointer">
                     <p class="text-kora-light1 text-k-15 font-bold">What are all of the forms Naruto has unlocked? What do they do? How did he unlock them? How strong are they? When did...</p>
                  </div>
               </div>

               <div class="h-full">
                  <span class="inline-flex items-center justify-center cursor-pointer w-8 h-8 rounded-full hover:bg-kora-dark2">
                     <Icon 
                        :class="'fill-current text-kora-gray1'" 
                        :viewbox="getIcons['kebabMenu'].viewbox" 
                        :path="getIcons['kebabMenu'].path" 
                        :width="getIcons['kebabMenu'].width" 
                        :height="getIcons['kebabMenu'].height" 
                     />
                  </span>
               </div>
            </div>
         </div>

         <div class="px-6 py-4 flex justify-center">
            <ScrollEnd />
         </div>
      </div>

   </div>
</template>

<script>
import Icon from "../components/Icon";
import ScrollEnd from "../components/ScrollEnd";
import { spaces } from "../tmp/db";
import { iconsMixin } from "../utils/mixins";

export default {
   name: "Notifications",
   mixins: [iconsMixin],
   components: {
      Icon,
      ScrollEnd
   },
   computed: {
      getTempData: () => ({ spaces })
   }
}
</script>

<style lang="scss" scoped>
.q-box {
   &--center {
      margin-left: 30px;
      width: 602px;
      .notifications-list {
         .alert {
            max-width: 600px;
         }
      }
   }
}
.popover {
   background: white;
   // overflow: auto;
}
</style>