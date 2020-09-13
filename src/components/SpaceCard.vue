<template>
   <div class="card mr-2 mb-2 bg-kora-dark2 overflow-hidden border-light-25 flex flex-col justify-between cursor-pointer">
      <div>
         <div class="card-cover-photo w-full h-12">
            <img class="w-full h-full object-cover" :src="cover" alt="cover photo">
         </div>
         <div class="card-icon w-full -mt-6 relative z-10">
            <div class="w-10 h-10 overflow-hidden rounded-full mx-auto border-2 border-kora-dark2">
               <img :src="icon" alt="space icon image">
            </div>
         </div>
         <div class="card-content py-2 px-2">
            <p class="text-kora-light1 text-k-13 font-bold text-center mb-1 hover:underline">{{ name }}</p>
            <p class="text-kora-light1 text-k-13 font-normal text-center">{{ description }}</p>
         </div>
      </div>

      <div class="card-action flex justify-center mb-2">
         <button class="px-4 py-1 rounded-full bg-kora-gray1 border-2 border-kora-gray1 border-opacity-75 text-kora-dark2 text-k-13 font-medium hover:bg-opacity-75">
            <Icon 
               :class="'fill-current text-kora-dark2 inline-block mr-1'" 
               :viewbox="getIcons['follow'].viewbox" 
               :path="getIcons['follow'].path" 
               :width="getIcons['follow'].width" 
               :height="getIcons['follow'].height" 
            /> 
            Follow 
            <span class="ml-1">{{ followers }}</span>
         </button>
      </div>
   </div>
</template>

<script>
import Icon from "../components/Icon";
import { iconsMixin } from "../utils/mixins";
export default {
   name: "SpaceCard",
   components: {
      Icon
   },
   props: ["cover", "icon", "name", "description", "followers"],
   mixins: [iconsMixin]
}

</script>

<style lang="scss" scoped>
.card {
   width: 170px;
   height: 234px;
   border-radius: 10px;
   &-action {
      button svg {
         margin-bottom: 2px;
      }
   }
   &-icon {
      img:hover {
         filter: saturate(0.7);
      }
   }
}
</style>
