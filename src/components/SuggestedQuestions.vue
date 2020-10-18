<template>
   <div class="suggested-questions mb-2 border-light-25 rounded">
      <div class="header p-4 flex items-center border-b border-kora-light1 border-opacity-10">
         <span class="trigger inline-flex items-center justify-center w-6 h-6 rounded-sm bg-kora-red1">
            <Icon 
               :class="'fill-current inline-block text-kora-dark2 w-4 h-4'" 
               :viewbox="getIcons['lightbulb'].viewbox" 
               :path="getIcons['lightbulb'].path" 
            />
         </span>
         <p class="ml-2 text-k-13 font-normal text-kora-light1 cursor-pointer capitalize hover:underline">{{ options.heading }}</p>
      </div>
      <QuestionPreview :options="{ metaTop: options.metaTop, userAction: options.userAction }" />
      <QuestionPreview :options="{ metaTop: options.metaTop, userAction: options.userAction }" />
      <div class="flex items-center justify-center h-10 cursor-pointer hover:bg-kora-dark2">
         <p class="text-k-14 font-normal text-kora-light1 capitalize">view all</p>
         <Icon 
            :class="'fill-current inline-block text-kora-light1 w-3 h-3 ml-2 transform -rotate-90'" 
            :viewbox="getIcons['chevron'].viewbox" 
            :path="getIcons['chevron'].path" 
         />
      </div>
   </div>
</template>

<script>
import QuestionPreview from "./QuestionPreview";
import Icon from "./Icon";
import { iconsMixin } from "../utils/mixins";

export default {
   name: "SuggestedQuestions",
   components: {
      QuestionPreview,
      Icon
   },
   props: ["options"],
   mixins: [iconsMixin]
}

</script>

<style lang="scss" scoped>

</style>