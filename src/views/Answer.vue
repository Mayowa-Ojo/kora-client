<template>
   <div class="q-box flex">
      <aside class="q-box--left w-40">
         <p class="py-2 text-kora-light1 text-k-15 font-medium border-b border-kora-light1 border-opacity-10">Questions</p>
         <p class="mt-1 -mx-4 py-1 px-4 text-kora-light1 text-k-13 font-normal cursor-pointer hover:bg-kora-dark2 bg-kora-dark3 rounded">Questions for you</p>
         <p class="mt-1 -mx-4 py-1 px-4 text-kora-light1 text-k-13 font-normal cursor-pointer hover:bg-kora-dark2 rounded">Answer requests</p>
         <p class="mt-1 -mx-4 py-1 px-4 text-kora-light1 text-k-13 font-normal cursor-pointer hover:bg-kora-dark2 rounded">Answer drafts</p>
      </aside>

      <div class="q-box--center border-light-25">
         <div class="bg-kora-dark2 py-2 px-4 flex border-b border-kora-light1 border-opacity-10">
            <span class="inline-block p-1 bg-kora-red1 rounded-sm">
               <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M5.35626 0.399536L3.89159 3.36925L0.614589 3.84701C0.0269265 3.93224 -0.208587 4.65672 0.21758 5.07168L2.58842 7.38195L2.02767 10.6455C1.92674 11.2354 2.54804 11.6773 3.06842 11.4014L6 9.86045L8.93158 11.4014C9.45196 11.675 10.0733 11.2354 9.97233 10.6455L9.41158 7.38195L11.7824 5.07168C12.2086 4.65672 11.9731 3.93224 11.3854 3.84701L8.10841 3.36925L6.64374 0.399536C6.38131 -0.129809 5.62093 -0.136538 5.35626 0.399536Z" fill="#E0E6F0"/>
               </svg>
            </span>
            <p class="ml-2 text-kora-light1 text-k-13 font-light hover:underline cursor-pointer">Questions For You</p>
         </div>

         <QuestionPreview 
            v-for="i in 1"
            :key="i"
         />
      </div>

      <aside class="q-box--right">

      </aside>
   </div>
</template>

<script>
import QuestionPreview from "../components/QuestionPreview";

export default {
   name: "Answer",
   components: {
      QuestionPreview
   }
};
</script>

<style lang="scss" scoped>
.q-box {
   &--center {
      margin-left: 30px;
      width: 602px;
   }
}
</style>