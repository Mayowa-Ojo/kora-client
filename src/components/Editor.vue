<template>
   <div class="my-4 border-light-25">
      <div class="editor-header p-4 flex bg-kora-dark2 relative z-10">
         <div class="avatar w-10 h-10 rounded-full mr-2 overflow-hidden cursor-pointer hover:opacity-75">
            <img src="https://uifaces.co/our-content/donated/gPZwCbdS.jpg" alt="user avatar">
         </div>
         <div>
            <p class="text-kora-light1 text-k-15 font-normal cursor-pointer hover:underline">Kong Lao</p>
            <p class="text-kora-light1 text-k-13 font-normal cursor-pointer hover:underline">Edit Credential</p>
         </div>
      </div>
      <quill-editor class="editor" v-model="content" :options="editorConfig['options']" @ready="onEditorReady($event)" ref="editor">
         <div :id="'toolbar'+toolbarId" class="toolbar h-10" slot="toolbar">
            <div class="toolbar-inner w-full h-full relative" :y-position="toolbarPosition">
               <div class="toolbar-inner__top px-2 w-full h-10 flex justify-between items-center">
                  <div class="left-panel flex items-center">
                     <div class="mr-1">
                        <Icon 
                           :class="'fill-current text-kora-red1'" 
                           :viewbox="getIcons['link'].viewbox" 
                           :path="getIcons['link'].path" 
                           :width="getIcons['link'].width" 
                           :height="getIcons['link'].height" 
                        />
                     </div>
                     <div class="w-40 h-6 bg-kora-dark1">
                        <input 
                           class="w-full h-full px-1 text-k-13 font-light text-kora-light1 bg-kora-dark1 focus:outline-none" type="text" name="link" placeholder="Enter URL"
                           v-model="linkInput"
                        >
                     </div>
                  </div>
                  <div class="right-panel flex items-center">
                     <div class="pr-2 flex items-center">
                        <span class="inline-block mr-2">
                           <Icon 
                              :class="'w-3 h-3 fill-current text-kora-light1'" 
                              :viewbox="getIcons['box'].viewbox" 
                              :path="getIcons['box'].path" 
                           />
                        </span>
                        <p class="text-kora-light1 text-k-13 font-light">Footnote</p>
                     </div>
                     <button
                        type="button"
                        class="ql-link add py-1 px-3 bg-kora-dark2 rounded text-kora-light1 text-k-13 font-semibold cursor-pointer hover:bg-kora-dark3"
                        @click="toggleToolbarPosition('middle')"
                     >Add
                     </button>
                  </div>
               </div>

               <div class="toolbar-inner__middle px-2 w-full h-10 flex justify-between items-center">
                  <div class="left-panel">
                     <button type="button" class="ql-bold">Bold</button>
                     <button type="button" class="ql-italic"></button>
                     <button type="button" class="ql-list" value="ordered"></button>
                     <button type="button" class="ql-list" value="bullet"></button>
                  </div>
                  <div class="right-panel flex items-center">
                     <button type="button" class="ql-image"></button>
                     <button type="button" class="" @click="toggleToolbarPosition('top')">
                        <Icon 
                           :class="'w-3 h-3 fill-current text-kora-light1'" 
                           :viewbox="getIcons['link'].viewbox" 
                           :path="getIcons['link'].path" 
                        />
                     </button>
                     <span class="inline-block px-1 rounded cursor-pointer border-2 border-kora-dark1 hover:border-kora-dark3" @click="toggleToolbarPosition('bottom')">
                        <Icon 
                           :class="'w-5 h-5 fill-current text-kora-light1'" 
                           :viewbox="getIcons['kebabMenu'].viewbox" 
                           :path="getIcons['kebabMenu'].path" 
                        />
                     </span>
                  </div>
               </div>

               <div class="toolbar-inner__bottom px-2 w-full h-10 flex justify-between items-center">
                  <div class="left-panel">
                     <button type="button" class="" @click="toggleMentionsMenu">
                        <Icon 
                           :class="'fill-current text-kora-light1'" 
                           :viewbox="getIcons['at'].viewbox" 
                           :path="getIcons['at'].path" 
                           :width="getIcons['at'].width" 
                           :height="getIcons['at'].height" 
                        />
                     </button>
                     <button type="button" class="ql-blockquote"></button>
                     <button type="button" class="ql-code-block"></button>
                     <button type="button" class="">
                        <Icon 
                           :class="'fill-current ml-1 text-kora-light1'" 
                           :viewbox="getIcons['sigma'].viewbox" 
                           :path="getIcons['sigma'].path" 
                           :width="getIcons['sigma'].width" 
                           :height="getIcons['sigma'].height" 
                        />
                     </button>
                  </div>
                  <div class="right-panel">
                     <button type="button" class="" @click="handleUndoChange">
                        <Icon 
                           :class="'fill-current text-kora-light1'" 
                           :viewbox="getIcons['undo'].viewbox" 
                           :path="getIcons['undo'].path" 
                           :width="getIcons['undo'].width" 
                           :height="getIcons['undo'].height" 
                        />
                     </button>
                     <button type="button" class="" @click="handleRedoChange">
                        <Icon 
                           :class="'fill-current text-kora-light1'" 
                           :viewbox="getIcons['redo'].viewbox" 
                           :path="getIcons['redo'].path" 
                           :width="getIcons['redo'].width" 
                           :height="getIcons['redo'].height" 
                        />
                     </button>
                     <button type="button" class="" @click="toggleToolbarPosition('middle')">
                        <Icon 
                           :class="'w-3 h-3 fill-current text-kora-light1'" 
                           :viewbox="getIcons['x'].viewbox" 
                           :path="getIcons['x'].path" 
                        />
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </quill-editor>
      <div class="editor-footer flex justify-between items-center bg-kora-dark2 p-2">
         <div class="flex items-center">
            <button class="text-kora-gray1 text-k-13 font-medium px-3 py-1 rounded-full bg-kora-red1">Submit</button>
            <button class="text-kora-light1 text-k-13 font-medium px-3 py-1 rounded-full hover:bg-kora-dark3">Save Draft</button>
            <p class="text-kora-light1 text-k-13 font-normal mx-2">Last saved: <span class="font-semibold">just now</span></p>
         </div>
         <span class="inline-flex justify-center items-center w-8 h-8 mr-1 rounded-full cursor-pointer hover:bg-kora-dark3">
            <Icon 
               :class="'fill-current text-kora-light1'" 
               :viewbox="getIcons['kebabMenu'].viewbox" 
               :path="getIcons['kebabMenu'].path" 
               :width="getIcons['kebabMenu'].width" 
               :height="getIcons['kebabMenu'].height" 
            />
         </span>
      </div>
   </div>
</template>

<script>
import "quill-mention";

import Icon from "./Icon";
import { iconsMixin } from "../utils/mixins";
import { styles } from "../constants/styles";
import { suggestions } from "../constants/mentions";

export default {
   name: "Editor",
   props: ["toolbarId"],
   components: {
      Icon
   },
   mixins: [iconsMixin],
   data: () => ({
      content: "",
      toolbarPosition: "middle",
      linkInput: "",
      isMentionsOpen: false
   }),
   computed: {
      editorConfig: function() {
         return {
            options: {
               placeholder: "Write your answer...",
               modules: {
                  toolbar: `#toolbar${this.toolbarId}`,
                  history: {
                     delay: 2000,
                     maxStack: 500,
                     userOnly: true
                  },
                  mention: {
                     allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
                     mentionDenotationChars: ["@"],
                     source: this.handleEditorMention,
                     showDenotationChar: false
                  }
               }
            }
         }
      },
      getQuill: function() {
         return this.$refs['editor'].quill
      }
   },
   methods: {
      overrideEditorStyles: function() {
         const editor = this.$refs['editor'];

         editor.$el.querySelector(".ql-link").innerText = "Add"
      },
      injectCSSStyles: function() {
         const style_global = document.createElement("style");

         style_global.innerHTML = styles;
         document.head.appendChild(style_global);
      },
      toggleToolbarPosition: function(position) {
         const validPositions = ["top", "middle", "bottom"]

         if(!validPositions.includes(position)) return;

         this.toolbarPosition = position;
      },
      handleImageUpload: function() {
         const fileInput = document.createElement("input");
         fileInput.setAttribute("type", "file");
         fileInput.click();

         fileInput.onchange = () => { // Listen for image upload
            const file = fileInput.files[0];

            if (/^image\//.test(file.type)) {
               // handle server request
               console.log("saved to server")
            } else {
               console.warn("[WARNING]: You can only upload images")
            }

         }
      },
      toggleMentionsMenu: function() {
         if(!this.isMentionsOpen) {
            this.getQuill.getModule("mention").openMenu("@");
         } else {
            this.getQuill.getModule("mention").escapeHandler();
         }

         this.isMentionsOpen = !this.isMentionsOpen;
      },
      handleEditorMention: function(searchTerm, renderList, mentionChar) {
         let values;

         if (mentionChar === "@") {
            values = suggestions;
         }

         if (searchTerm.length === 0) {
            renderList(values, searchTerm);
         } else {
            const matches = [];
            for (let i = 0; i < values.length; i++)
               if (
               ~values[i].value.toLowerCase().indexOf(searchTerm.toLowerCase())
               )
               matches.push(values[i]);
            renderList(matches, searchTerm);
         }
      },
      handleTextLink: function(value) {
         const href = this.linkInput;
         if(!value || href == "") {
            this.getQuill.format("link", false);
            return;
         }

         this.getQuill.format("link", href);

      },
      handleUndoChange: function() {
         this.getQuill.history.undo();
      },
      handleRedoChange: function() {
         this.getQuill.history.redo();
      },
      onEditorReady: function(quill) {
         quill.getModule("toolbar").addHandler("image", () => {
            this.handleImageUpload();
         });
         quill.getModule("toolbar").addHandler("link", this.handleTextLink);
      }
   },
   mounted: function() {
      this.overrideEditorStyles();
      this.injectCSSStyles();
   }
}
</script>

<style lang="scss" scoped>
.toolbar {
   padding: 0;
   border-top: 1px solid rgba(154, 220, 250, 0.1);
   border-bottom: 1px solid rgba(154, 220, 250, 0.1);
   border-left: none;
   border-right: none;
   &-inner {
      position: relative;
      transition: top .25s ease-in-out;
   }
   &-inner[y-position='top'] {
      top: -2px;
   }
   &-inner[y-position='middle'] {
      top: -40px;
   }
   &-inner[y-position='bottom'] {
      top: -80px;
   }
   .toolbar-inner {
      &__bottom {
         .right-panel {
            svg {
               margin-left: .1rem;
            }
            button:nth-of-type(2) {
               svg {
                  transform: scaleX(-1);
               }
            }
         }
      }
   }
}
</style>