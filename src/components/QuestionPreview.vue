<template>
   <div class="px-4 pt-2 pb-1 border-b border-kora-light1 border-opacity-10">
      <div class="mb-2 flex justify-between items-center">
         <div class="flex items-center">
            <p class="text-kora-light1 text-k-13 font-light">Question added</p>
            <span class="dot-separator"></span>
            <p class="text-kora-light1 text-k-13 font-light hover:underline cursor-pointer">Backend Development</p>
         </div>
         <Tooltip :offset="12" :placement="'top'" :text="'Hide'">
            <template v-slot:trigger>
               <span class="trigger inline-block cursor-pointer -mr-2 p-3 hover:bg-kora-dark3 rounded-full">
                  <Icon 
                     :class="'fill-current text-kora-red1'" 
                     :viewbox="getIcons['x'].viewbox" 
                     :path="getIcons['x'].path" 
                     :width="getIcons['x'].width" 
                     :height="getIcons['x'].height" 
                  />
               </span>
            </template>
         </Tooltip>
      </div>
      <div>
         <p class="text-kora-light1 text-k-15 font-medium cursor-pointer hover:underline">How can two backend developers work on a single project?</p>
      </div>
      <div class="mt-2 flex items-center">
         <p class="text-kora-light1 text-k-13 font-medium cursor-pointer hover:underline">2 answers</p>
         <span class="dot-separator"></span>
         <p class="text-kora-light1 text-k-13 font-light">Last followed October 30, 2018</p>
      </div>
      <div class="mt-1 flex items-center justify-between">
         <div class="left flex">
            <div class="-ml-3 px-3 py-2 flex items-center cursor-pointer rounded-full hover:bg-kora-dark2" @click="toggleEditor">
               <span class="inline-block" v-if="!editorActive">
                  <Icon 
                     :class="'fill-current text-kora-red1'" 
                     :viewbox="getIcons['commentAlt'].viewbox" 
                     :path="getIcons['commentAlt'].path" 
                     :width="getIcons['commentAlt'].width" 
                     :height="getIcons['commentAlt'].height" 
                  />
               </span>
               <span class="inline-block" v-else>
                  <Icon 
                     :class="'fill-current text-kora-red1'" 
                     :viewbox="getIcons['x'].viewbox" 
                     :path="getIcons['x'].path" 
                     :width="getIcons['x'].width" 
                     :height="getIcons['x'].height" 
                  />
               </span>
               <p class="ml-2 text-k-14 text-kora-light1 font-normal">{{editorActive ? 'Close' : 'Answer'}}</p>
            </div>
            <div class="px-3 py-2 flex items-center cursor-pointer rounded-full hover:bg-kora-dark2">
               <span class="inline-block">
                  <Icon 
                     :class="'fill-current text-kora-light1'" 
                     :viewbox="getIcons['feedAlt'].viewbox" 
                     :path="getIcons['feedAlt'].path" 
                     :width="getIcons['feedAlt'].width" 
                     :height="getIcons['feedAlt'].height" 
                  />
               </span>
               <p class="ml-2 text-k-13 text-kora-light1 font-light">Follow</p>
               <span class="dot-separator"></span>
               <p class="text-k-13 text-kora-light1 font-light">3</p>
            </div>
            <div class="px-3 py-2 flex items-center cursor-pointer rounded-full hover:bg-kora-dark2">
               <span class="inline-block">
                  <Icon 
                     :class="'fill-current text-kora-light1'" 
                     :viewbox="getIcons['commentSlash'].viewbox" 
                     :path="getIcons['commentSlash'].path" 
                     :width="getIcons['commentSlash'].width" 
                     :height="getIcons['commentSlash'].height" 
                  />
               </span>
               <p class="ml-2 text-k-13 text-kora-light1 font-light">Pass</p>
            </div>
         </div>

         <div class="right flex">
            <Tooltip :offset="12" :placement="'top'" :text="'Downvote'">
               <template v-slot:trigger>
                  <span class="trigger inline-flex items-center p-2 mr-1 hover:bg-kora-dark2 rounded-full cursor-pointer">
                     <Icon 
                        :class="'fill-current text-kora-light1 w-4 h-4 inline-block transform rotate-180'" 
                        :viewbox="getIcons['upvote'].viewbox" 
                        :path="getIcons['upvote'].path" 
                     />
                  </span>
               </template>
            </Tooltip>
            <Tooltip :offset="12" :placement="'top'" :text="'Share'">
               <template v-slot:trigger>
                  <span class="trigger inline-flex items-center p-2 mr-1 rounded-full cursor-pointer hover:bg-kora-dark2">
                     <Icon 
                        :class="'fill-current text-kora-light1 w-4 h-4 inline-block'" 
                        :viewbox="getIcons['shareAlt'].viewbox" 
                        :path="getIcons['shareAlt'].path" 
                     />
                  </span>
               </template>
            </Tooltip>
            <Tooltip :offset="12" :placement="'top'" :text="'More'">
               <template v-slot:trigger>
                  <span class="trigger inline-flex justify-center items-center w-8 h-8 -mr-2 rounded-full cursor-pointer hover:bg-kora-dark2">
                     <Icon 
                        :class="'fill-current text-kora-light1 w-5 h-5 inline-block'" 
                        :viewbox="getIcons['kebabMenu'].viewbox" 
                        :path="getIcons['kebabMenu'].path" 
                     />
                  </span>
               </template>
            </Tooltip>
         </div>
      </div>
      <Editor v-show="editorActive" :toolbarId="generateId()"/>
   </div>
</template>

<script>
import Editor from "../components/Editor";
import Tooltip from "../components/Tooltip";
import Icon from "../components/Icon";
import { generateUniqueId } from "../utils/common";
import { iconsMixin } from "../utils/mixins";

export default {
   name: "QuestionPreview",
   components: {
      Editor,
      Tooltip,
      Icon
   },
   data: () => ({
      editorActive: false
   }),
   mixins: [iconsMixin],
   methods: {
      toggleEditor: function() {
         this.editorActive = !this.editorActive;
      },
      generateId: () => generateUniqueId(),
   }
}
</script>