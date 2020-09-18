<template>
   <div class="profile-feed--item pt-4 pb-2 border-bottom">
      <div>
         <div class="mb-2 flex justify-between items-center">
            <div class="flex items-center">
               <span class="inline-block w-10 h-10 rounded-full overflow-hidden mr-2 cursor-pointer hover:opacity-75">
                  <img src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.tribes.defaults.space_icon_gray.png-26-a461963c75474740.png" alt="user avatar">
               </span>
               <span class="flex flex-col">
                  <p class="text-kora-light1 text-k-13 inline-flex items-center"> 
                     <span class="font-bold cursor-pointer hover:underline">Alan Mellor on Software</span> 
                     <span class="dot-separator"></span> 
                     <span class="font-light cursor-pointer hover:underline">Sat</span>
                  </p>
                  <p class="text-kora-light1 text-k-13 inline-flex items-center"> 
                     <span class="font-medium inline-flex items-center">
                        <Icon 
                           :class="'fill-current text-kora-light1 mr-1'" 
                           :viewbox="getIcons['shield'].viewbox" 
                           :path="getIcons['shield'].path" 
                           :width="getIcons['shield'].width" 
                           :height="getIcons['shield'].height" 
                        />
                        Admin
                     </span> 
                     <span class="dot-separator"></span> 
                     <span class="font-light">Shared by <span class="cursor-pointer hover:underline">Alan Mellor</span></span>
                  </p>
               </span>
            </div>
            <span class="inline-flex items-center justify-center w-8 h-8 bg-kora-blue1 rounded-full cursor-pointer hover:opacity-75">
               <Icon 
                  :class="'fill-current text-kora-gray1'" 
                  :viewbox="getIcons['follow'].viewbox" 
                  :path="getIcons['follow'].path" 
                  :width="getIcons['follow'].width" 
                  :height="getIcons['follow'].height" 
               />
            </span>
         </div>

         <div class="mb-1 border-light-25 mt-3 px-4 py-2 rounded-lg bg-kora-dark1 bg-opacity-100 hover:bg-kora-dark2">
            <div class="flex items-center">
               <span class="w-5 h-5 mr-2 inline-block overflow-hidden rounded-full cursor-pointer hover:opacity-50">
                  <img class="image-cover" src="https://uifaces.co/our-content/donated/ukegoVAy.jpg" alt="user avatar">
               </span>
               <span class="text-kora-light1 text-k-13 font-light">Alan Mellor</span>
               <span class="dot-separator"></span>
               <span class="text-kora-light1 text-k-13 font-light cursor-pointer hover:underline">Answered Sat</span>
            </div>
            <p class="text-kora-light1 text-k-15 font-bold">How do I learn object-oriented programming?</p>
            <p class="text-kora-light1 text-k-15 font-light cursor-pointer">
               I think of all the objects as little people at work, each one having a job to do. Each one knows how to do their job, and has all the reference books and supplies they need to do it. So we might have a writer, who writes a letter. This letter is then handed to a... 
               <span class="text-kora-blue1 hover:underline">(more)</span>
            </p>
         </div>

         <PostMeta />
      </div>
   </div>
</template>

<script>
import Icon from "../components/Icon";
import PostMeta from "./PostMeta";
import { iconsMixin } from "../utils/mixins";

export default {
   name: "SharedPost",
   components: {
      Icon,
      PostMeta
   },
   mixins: [iconsMixin]
}

</script>

<style lang="scss" scoped>

</style>