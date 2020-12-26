<template>
   <div 
      class="pt-2 pb-1 border-b border-kora-light1 border-opacity-10"
      :class="[options.fullWidth ? '' : 'px-4']"
   >
      <div 
         class="flex justify-between items-center"
         v-if="options.metaTop"
      >
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
      <div class="">
         <p class="text-kora-light1 text-k-15 font-medium cursor-pointer hover:underline">{{question.title}}</p>
      </div>
      <div class="mt-2 flex items-center">
         <p class="text-kora-light1 text-k-13 font-medium cursor-pointer hover:underline">{{question.answers.length}} answers</p>
         <span class="dot-separator"></span>
         <p class="text-kora-light1 text-k-13 font-light">Last followed October 30, 2018</p>
      </div>
      <ActionBar
         :target="'questionPreview'"
         :options="options"
         :editorActive="editorActive"
         :shareLink="question.shareLink"
         v-on:toggle-editor="toggleEditor"
      />
      <Editor
         v-if="editorActive"
         :toolbarId="generateId()"
         :postId="question.id"
         :postTitle="question.title"
      />
   </div>
</template>

<script>
import Editor from "./Editor";
import Tooltip from "./Tooltip";
import ActionBar from "./ActionBar";
import Icon from "./Icon";
import { iconsMixin, shortidMixin } from "../utils/mixins";

export default {
   name: "QuestionPreview",
   components: {
      Editor,
      Tooltip,
      ActionBar,
      Icon
   },
   props: ["options", "question"],
   data: () => ({
      editorActive: false
   }),
   mixins: [iconsMixin, shortidMixin],
   methods: {
      toggleEditor: function() {
         this.editorActive = !this.editorActive;
      },
   }
}
</script>