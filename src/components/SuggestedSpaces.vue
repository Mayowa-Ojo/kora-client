<template>
   <div class="">
      <div class="header p-2 flex items-center border-b border-kora-light1 border-opacity-10">
         <p class="ml-2 text-k-15 font-medium text-kora-light1 capitalize">{{ heading }}</p>
      </div>
      <div 
         class="flex px-4 py-2 cursor-pointer border-b border-kora-light1 border-opacity-10"
         v-for="i in 4"
         :key="i"
      >
         <span class="inline-block w-10 h-10 rounded-full overflow-hidden">
            <img src="https://qph.fs.quoracdn.net/main-thumb-ti-1694992-100-clncvqrqpvglkplgwpyldayvskjuaizh.jpeg" alt="space avatar">
         </span>
         <div class="flex flex-col ml-4 flex-auto">
            <p class="text-k-15 font-medium text-kora-light1">Physics and Chemistry</p>
            <p class="text-k-13 font-normal text-kora-light1 text-opacity-50">112.2K Followers</p>
            <p class="text-k-13 font-normal text-kora-light1 mt-2">All about Physics and Chemistry</p>
         </div>
         <div class="h-full flex items-start py-2">
            <button type="button" class="px-3 py-1 rounded-full text-k-13 font-medium text-kora-dark2 bg-kora-gray1 hover:bg-opacity-75">
               <Icon 
                  :class="'fill-current inline-block text-kora-dark2 w-4 h-4 mr-1'" 
                  :viewbox="getIcons['follow'].viewbox" 
                  :path="getIcons['follow'].path" 
               />
               Follow
            </button>
            <span class="inline-flex items-center justify-center -mt-1 ml-3 w-8 h-8 rounded-full cursor-pointer hover:bg-kora-dark3">
               <Icon 
                  :class="'fill-current inline-block text-kora-red1'" 
                  :viewbox="getIcons['x'].viewbox" 
                  :path="getIcons['x'].path" 
                  :width="getIcons['x'].width" 
                  :height="getIcons['x'].height" 
               />
            </span>
         </div>
      </div>
      <div class="flex items-center justify-center h-10 border-b border-kora-light1 border-opacity-10 cursor-pointer hover:bg-kora-dark3">
         <p class="text-k-14 font-normal text-kora-light1 capitalize">view more spaces</p>
         <Icon 
            :class="'fill-current inline-block text-kora-light1 w-3 h-3 ml-2 transform -rotate-90'" 
            :viewbox="getIcons['chevron'].viewbox" 
            :path="getIcons['chevron'].path" 
         />
      </div>
   </div>
</template>

<script>
import Icon from "./Icon";
import { iconsMixin } from "../utils/mixins";

export default {
   name: "SuggestedSpaces",
   components: {
      Icon
   },
   props: ["heading"],
   mixins: [iconsMixin]
}

</script>

<style lang="scss" scoped>

</style>