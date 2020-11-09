<template>
   <div class="q-box flex">
      <aside class="q-box--left w-40">
         <p class="py-2 text-kora-light1 text-k-15 font-medium border-b border-kora-light1 border-opacity-10">Questions</p>
         <p class="mt-1 -mx-4 py-1 px-4 text-kora-light1 text-k-13 font-normal cursor-pointer hover:bg-kora-dark2 bg-kora-dark3 rounded">Questions for you</p>
         <p class="mt-1 -mx-4 py-1 px-4 text-kora-light1 text-k-13 font-normal cursor-pointer hover:bg-kora-dark2 rounded">Answer requests</p>
         <p class="mt-1 -mx-4 py-1 px-4 text-kora-light1 text-k-13 font-normal cursor-pointer hover:bg-kora-dark2 rounded">Answer drafts</p>
      </aside>

      <div class="q-box--center ">
         <div class="mb-4 border-light-25 rounded-sm">
            <div class="bg-kora-dark2 py-2 px-4 flex border-b border-kora-light1 border-opacity-10">
               <span class="inline-block p-1 bg-kora-red1 rounded-sm">
                  <Icon 
                     :class="'w-3 h-3 fill-current text-kora-gray1'" 
                     :viewbox="getIcons['star'].viewbox" 
                     :path="getIcons['star'].path" 
                  />
               </span>
               <p class="ml-2 text-kora-light1 text-k-13 font-light hover:underline cursor-pointer">Questions For You</p>
            </div>

            <QuestionPreview 
               v-for="i in 10"
               :key="i"
               :options="{ metaTop: true, userAction:'pass' }"
            />

            <div class="h-8 py-1 flex justify-center items-center">
               <span class="py-1 px-2 inline-flex items-center cursor-pointer hover:bg-kora-dark3 rounded-full">
                  <p class="mx-1 text-kora-light1 text-k-13 font-medium">More</p>
                  <span class="p-1 mt-1 inline-block">
                     <Icon 
                        :class="'fill-current text-kora-light1'" 
                        :viewbox="getIcons['chevron'].viewbox" 
                        :path="getIcons['chevron'].path" 
                        :width="getIcons['chevron'].width" 
                        :height="getIcons['chevron'].height" 
                     />
                  </span>
               </span>
            </div>
         </div>

         <div class="px-6 py-4 flex justify-center">
            <ScrollEnd />
         </div>
      </div>

      <aside class="q-box--right">
         <div class="w-full border-light-25 p-4 rounded-sm">
            <p class="mb-2 text-kora-light1 text-k-15 font-medium">Add topics you know about</p>
            <p class="mb-2 text-kora-light1 text-k-13 font-light">Adding topics helps us find questions for you to answer</p>
            <button 
               class="mt-2 px-4 py-1 rounded-full border-light-25 bg-kora-dark2 text-kora-red1 text-k-13 font-medium hover:bg-kora-dark3" 
               type="button"
            >Add topics
            </button>
         </div>
      </aside>
   </div>
</template>

<script>
import QuestionPreview from "../components/QuestionPreview";
import ScrollEnd from "../components/ScrollEnd"
import Icon from "../components/Icon";
import { iconsMixin } from "../utils/mixins";

export default {
   name: "Questions",
   components: {
      QuestionPreview,
      ScrollEnd,
      Icon
   },
   mixins: [iconsMixin]
};
</script>

<style lang="scss" scoped>
.q-box {
   &--center {
      margin-left: 30px;
      width: 602px;
   }
   &--right {
      width: 172px;
      margin-left: 56px;
   }
}
</style>