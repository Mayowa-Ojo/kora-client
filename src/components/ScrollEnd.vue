<template>
   <div class="my-6 flex flex-col items-center">
      <span class="inline-block mb-4">
         <Icon
            :class="'fill-current text-kora-light1'"
            :viewbox="getIcons['hourGlass'].viewbox"
            :width="getIcons['hourGlass'].width"
            :height="getIcons['hourGlass'].height"
            :path="getIcons['hourGlass'].path"
         />
      </span>
      <p class="mb-4 text-kora-light1 text-k-18 font-bold">You've reached the end of your feed</p>
      <button class="px-5 py-2 text-kora-gray1 text-k-14 font-medium bg-kora-blue1 rounded-full">Refresh Page</button>
   </div>
</template>

<script>
import Icon from "./Icon";
import { iconsMixin } from "../utils/mixins";
export default {
   name: "ScrollEnd",
   components: {
      Icon
   },
   mixins: [iconsMixin]
}
</script>