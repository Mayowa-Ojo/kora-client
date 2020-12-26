<template>
   <div>
   <div class="flex items-center justify-between mt-2" v-if="target == 'questionPage'">
      <div class="-ml-2 flex items-center">
         <button
            type="button"
            class="text-k-14 text-kora-light1 font-normal px-3 py-2 rounded-full inline-flex items-center hover:bg-kora-dark2"
            @click="$emit('toggle-editor')"
         >
            <Icon 
               :class="'fill-current text-kora-light1 w-4 h-4 mr-2'" 
               :viewbox="getIcons['pencilBrackets'].viewbox" 
               :path="getIcons['pencilBrackets'].path" 
            />
            Answer
         </button>
         <button type="button" class="text-k-14 text-kora-light1 font-normal px-3 py-2 rounded-full inline-flex items-center hover:bg-kora-dark2">
            <Icon 
               :class="'fill-current text-kora-light1 w-4 h-4 mr-2 mb-1'" 
               :viewbox="getIcons['feedAlt'].viewbox" 
               :path="getIcons['feedAlt'].path" 
            />
            Follow
            <span class="dot-separator"></span>
            14
         </button>
         <button type="button" class="text-k-14 text-kora-light1 font-normal px-3 py-2 rounded-full inline-flex items-center hover:bg-kora-dark2">
            <Icon 
               :class="'stroke-current text-kora-light1 w-5 h-5 mr-2'" 
               :viewbox="getIcons['userArrow'].viewbox" 
               :path="getIcons['userArrow'].path" 
            />
            Request
         </button>
      </div>
      <div class="-mr-1 flex items-center">
         <Tooltip :offset="8" :placement="'top'" :text="'Add comment'">
            <template v-slot:trigger>
               <span
                  class="trigger rounded-full w-8 h-8 inline-flex items-center justify-center cursor-pointer hover:bg-kora-dark2"
                  @click="$emit('toggle-comment-input')"
               >
                  <Icon 
                     :class="'stroke-current text-kora-light1 w-4 h-4'" 
                     :viewbox="getIcons['comment'].viewbox" 
                     :path="getIcons['comment'].path" 
                  />
               </span>
            </template>
         </Tooltip>
         <Tooltip :offset="8" :placement="'top'" :text="'Downvote'">
            <template v-slot:trigger>
               <span class="trigger rounded-full w-8 h-8 inline-flex items-center justify-center cursor-pointer hover:bg-kora-dark2">
                  <Icon 
                     :class="'stroke-current text-kora-light1 w-4 h-4 transform rotate-180'" 
                     :viewbox="getIcons['upvoteAlt2'].viewbox" 
                     :path="getIcons['upvoteAlt2'].path" 
                  />
               </span>
            </template>
         </Tooltip>
         <Popover :offset="8" :placement="'bottom'">
            <template v-slot:trigger="slotProps">
               <span
                  class="trigger rounded-full w-8 h-8 inline-flex items-center justify-center cursor-pointer hover:bg-kora-dark2"
                  @click="slotProps.toggle($event)"
               >
                  <Icon 
                     style="transform: scaleX(-1);"
                     :class="'fill-current text-kora-light1 w-4 h-4'"
                     :viewbox="getIcons['replyAlt'].viewbox" 
                     :path="getIcons['replyAlt'].path" 
                  />
               </span>
            </template>

            <template v-slot:popover>
               <div class="popover">
                  <ul>
                     <li class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 flex items-center cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">
                        <Icon 
                           :class="'w-4 h-4 mr-2'" 
                           :viewbox="getIcons['facebook'].viewbox" 
                           :path="getIcons['facebook'].path" 
                        />
                        Facebook
                     </li>
                     <li class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 flex items-center cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">
                        <Icon 
                           :class="'w-4 h-4 mr-2'" 
                           :viewbox="getIcons['twitter'].viewbox" 
                           :path="getIcons['twitter'].path" 
                        />
                        Twitter
                     </li>
                     <li 
                        class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50"
                        @click="copyToClipboard"
                     >Copy Link</li>
                  </ul>
               </div>
            </template>
         </Popover>
         <Popover :offset="8" :placement="'bottom'">
            <template v-slot:trigger="slotProps">
               <span
                  class="trigger rounded-full w-8 h-8 inline-flex items-center justify-center cursor-pointer hover:bg-kora-dark2"
                  @click="slotProps.toggle($event)"
               >
                  <Icon 
                     :class="'fill-current text-kora-light1 w-5 h-5'" 
                     :viewbox="getIcons['kebabMenu'].viewbox" 
                     :path="getIcons['kebabMenu'].path" 
                  />
               </span>
            </template>

            <template v-slot:popover>
               <div class="popover">
                  <ul>
                     <li class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Answer Anonymously</li>
                     <li class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Answer Later</li>
                     <li class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Follow Privately</li>
                     <li class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Notify About Edits</li>
                     <li class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Edit Topics</li>
                     <li class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Edit Question and Source</li>
                     <li class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Downvote Question</li>
                     <li class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Merge Questions</li>
                     <li class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">View Stats and Log</li>
                     <li class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Report</li>
                  </ul>
               </div>
            </template>
         </Popover>
      </div>
   </div>
   <div class="flex items-center justify-between mt-1" v-else-if="target == 'post'">
      <div class="flex items-center">
         <span class="px-2 mr-2 bg-kora-dark3 bg-opacity-50 inline-flex items-center cursor-pointer rounded-full" style="height: 30px;">
         <Tooltip :offset="8" :placement="'top'" :text="'Upvote'">
            <template v-slot:trigger>
               <span class="trigger ml-2 pr-2 text-kora-light1 text-k-13 font-light inline-flex items-center border-r border-kora-light1 border-opacity-25">
                  <Icon 
                     :class="'w-4 h-4 mr-1 stroke-current text-kora-blue1'" 
                     :viewbox="getIcons['upvoteAlt2'].viewbox" 
                     :path="getIcons['upvoteAlt2'].path" 
                  />
                  103
               </span>
            </template>
         </Tooltip>
         <Tooltip :offset="8" :placement="'top'" :text="'Downvote'" v-if="options.downvoteIcon">
            <template v-slot:trigger>
               <span class="trigger ml-2 mr-2 mt-1 inline-flex">
                  <Icon 
                     :class="'stroke-current text-kora-light1 w-4 h-4 transform rotate-180'" 
                     :viewbox="getIcons['upvoteAlt2'].viewbox" 
                     :path="getIcons['upvoteAlt2'].path" 
                  />
               </span>
            </template>
         </Tooltip>
         </span>
         <Tooltip :offset="8" :placement="'top'" :text="'Share'">
            <template v-slot:trigger>
               <span 
                  class="trigger mr-2 text-kora-light1 text-k-13 font-light py-1 px-2 inline-flex items-center rounded-full cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-50"
                  @click="toggleModal('SharePostModal')"
               >
                  <Icon 
                     :class="'w-4 h-4 mr-2 fill-current text-kora-light1'" 
                     :viewbox="getIcons['share'].viewbox" 
                     :path="getIcons['share'].path" 
                  />
                  2
               </span>
            </template>
         </Tooltip>
         <Tooltip :offset="8" :placement="'top'" :text="'Comments'">
            <template v-slot:trigger>
               <span 
                  class="trigger bg-kora-dark3 bg-opacity-50 mr-2 text-kora-light1 text-k-13 font-light py-1 px-2 inline-flex items-center rounded-full cursor-pointer"
                  @click="$emit('toggle-comments')"
               >
                  <Icon 
                     :class="'w-4 h-4 mr-1 stroke-current text-kora-light1'" 
                     :viewbox="getIcons['comment'].viewbox" 
                     :path="getIcons['comment'].path" 
                  />
                  13
               </span>
            </template>
         </Tooltip>
      </div>
      <div class="flex items-center">
         <Popover :offset="8" :placement="'bottom'">
            <template v-slot:trigger="slotProps">
               <span
                  class="trigger rounded-full w-8 h-8 inline-flex items-center justify-center cursor-pointer hover:bg-kora-dark2"
                  @click="slotProps.toggle($event)"
               >
                  <Icon 
                     style="transform: scaleX(-1);"
                     :class="'fill-current text-kora-light1 w-4 h-4'"
                     :viewbox="getIcons['replyAlt'].viewbox" 
                     :path="getIcons['replyAlt'].path" 
                  />
               </span>
            </template>

            <template v-slot:popover>
               <div class="popover">
                  <ul>
                     <li class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 flex items-center cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">
                        <Icon 
                           :class="'w-4 h-4 mr-2'" 
                           :viewbox="getIcons['facebook'].viewbox" 
                           :path="getIcons['facebook'].path" 
                        />
                        Facebook
                     </li>
                     <li class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 flex items-center cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">
                        <Icon 
                           :class="'w-4 h-4 mr-2'" 
                           :viewbox="getIcons['twitter'].viewbox" 
                           :path="getIcons['twitter'].path" 
                        />
                        Twitter
                     </li>
                     <li
                        class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50"
                        @click="copyToClipboard"
                     >Copy Link</li>
                     <li class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Embed Answer</li>
                  </ul>
               </div>
            </template>
         </Popover>
         <Popover :offset="8" :placement="'bottom'">
            <template v-slot:trigger="slotProps">
               <span 
                  class="trigger w-8 h-8 inline-flex justify-center items-center rounded-full cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-50"
                  @click="slotProps.toggle($event)"
               >
                  <Icon 
                     :class="'w-5 h-5 fill-current text-kora-light1'" 
                     :viewbox="getIcons['kebabMenu'].viewbox" 
                     :path="getIcons['kebabMenu'].path" 
                  />
               </span>
            </template>

            <template v-slot:popover>
               <div class="popover">
                  <ul>
                     <li class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Bookmark</li>
                     <li class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Suggest Edits</li>
                     <li class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Thank</li>
                     <li class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Log</li>
                     <li class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Report</li>
                  </ul>
               </div>
            </template>
         </Popover>
      </div>
   </div>
   <div class="flex items-center justify-between -ml-3" v-else-if="target == 'comment'">
      <div class="flex items-center">
         <div class="mr-2 text-kora-light1 text-k-13 py-1 px-3 flex items-center rounded-full cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-50">
            <Icon 
               :class="'w-4 h-4 mr-1 stroke-current text-kora-light1'" 
               :viewbox="getIcons['upvoteAlt2'].viewbox" 
               :path="getIcons['upvoteAlt2'].path" 
            />
            <span class="font-medium">Upvote</span>
            <span class="dot-separator"></span>
            2
         </div>
         <div 
            class="trigger mr-2 text-kora-light1 text-k-13 font-medium py-1 px-2 flex items-center rounded-full cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-50"
            @click="$emit('toggle-reply-input')"
         >
            <Icon 
               :class="'w-4 h-4 mr-2 fill-current text-kora-light1'" 
               :viewbox="getIcons['replyAlt'].viewbox" 
               :path="getIcons['replyAlt'].path" 
            />
            Reply
         </div>
      </div>
      <div class="flex items-center">
         <Tooltip :offset="8" :placement="'top'" :text="'Downvote'">
            <template v-slot:trigger>
               <span class="trigger rounded-full w-8 h-8 inline-flex items-center justify-center cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-50">
                  <Icon 
                     :class="'stroke-current text-kora-light1 w-4 h-4 transform rotate-180'" 
                     :viewbox="getIcons['upvoteAlt2'].viewbox" 
                     :path="getIcons['upvoteAlt2'].path" 
                  />
               </span>
            </template>
         </Tooltip>
         <Tooltip :offset="8" :placement="'top'" :text="'More'">
            <template v-slot:trigger>
               <span class="trigger w-8 h-8 inline-flex justify-center items-center rounded-full cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-50">
                  <Icon 
                     :class="'w-4 h-4 fill-current text-kora-light1'" 
                     :viewbox="getIcons['kebabMenu'].viewbox" 
                     :path="getIcons['kebabMenu'].path" 
                  />
               </span>
            </template>
         </Tooltip>
      </div>
   </div>
   <div class="flex justify-between -ml-3" v-else-if="target == 'profile'">
      <div class="flex items-center">
         <span class="px-3 py-1 inline-flex items-center cursor-pointer rounded-full hover:bg-kora-dark3 hover:bg-opacity-25">
            <Icon 
               :class="'fill-current w-4 h-4 text-kora-blue1 mr-2 mb-1'" 
               :viewbox="getIcons['following'].viewbox" 
               :path="getIcons['following'].path" 
            />
            <span class="text-kora-blue1 text-k-14 font-medium">Following</span>
            <span class="dot-separator"></span>
            <span class="text-kora-blue1 text-k-14 font-medium">14.2k</span>
         </span>
         <span class="px-3 py-1 inline-flex items-center cursor-pointer rounded-full hover:bg-kora-dark3 hover:bg-opacity-25">
            <Icon 
               :class="'fill-current w-4 h-4 text-kora-light1 mr-2'" 
               :viewbox="getIcons['alarm'].viewbox" 
               :path="getIcons['alarm'].path" 
            />
            <span class="text-kora-light1 text-k-14 font-medium">Notify Me</span>
         </span>
         <span class="px-3 py-1 inline-flex items-center cursor-pointer rounded-full hover:bg-kora-dark3 hover:bg-opacity-25">
            <Icon 
               :class="'fill-current w-4 h-4 text-kora-light1 mr-2'" 
               :viewbox="getIcons['question'].viewbox" 
               :path="getIcons['question'].path" 
            />
            <span class="text-kora-light1 text-k-14 font-medium">Ask Question</span>
         </span>
      </div>
      <Popover :offset="8" :placement="'top'">
         <template v-slot:trigger="slotProps">
            <span 
               class="trigger w-8 h-8 inline-flex items-center justify-center rounded-full cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-25"
               @click="slotProps.toggle($event)"
            >
               <Icon 
                  :class="'fill-current text-kora-light1'" 
                  :viewbox="getIcons['kebabMenu'].viewbox" 
                  :path="getIcons['kebabMenu'].path" 
                  :width="getIcons['kebabMenu'].width" 
                  :height="getIcons['kebabMenu'].height" 
               />
            </span>
         </template>

         <template v-slot:popover>
            <div class="popover">
               <ul>
                  <li class="text-kora-light1 text-k-13 font-normal py-2 px-4 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Mute Alan Mellor</li>
                  <li class="text-kora-light1 text-k-13 font-normal py-2 px-4 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Block</li>
                  <li class="text-kora-light1 text-k-13 font-normal py-2 px-4 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Report</li>
               </ul>
            </div>
         </template>
      </Popover>
   </div>

   <div class="mt-1 flex items-center justify-between" v-else-if="target === 'questionPreview'">
      <div class="left flex">
         <div
            class="-ml-3 px-3 py-2 flex items-center cursor-pointer rounded-full hover:bg-kora-dark2"
            @click="$emit('toggle-editor')"
         >
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
         <div class="px-3 py-2 flex items-center cursor-pointer rounded-full hover:bg-kora-dark2" v-if="options.userAction">
            <span class="inline-block">
               <Icon 
                  v-if="options.userAction == 'pass'"
                  :class="'fill-current text-kora-light1'" 
                  :viewbox="getIcons['commentSlash'].viewbox" 
                  :path="getIcons['commentSlash'].path" 
                  :width="getIcons['commentSlash'].width" 
                  :height="getIcons['commentSlash'].height" 
               />
               <Icon 
                  v-else
                  :class="'fill-current text-kora-light1'" 
                  :viewbox="getIcons['userChat'].viewbox" 
                  :path="getIcons['userChat'].path" 
                  :width="getIcons['userChat'].width" 
                  :height="getIcons['userChat'].height" 
               />
            </span>
            <p class="ml-2 text-k-13 text-kora-light1 font-light capitalize">{{ options.userAction }}</p>
         </div>
      </div>

      <div class="right flex">
         <Tooltip :offset="12" :placement="'top'" :text="'Downvote'">
            <template v-slot:trigger>
               <span class="trigger inline-flex items-center p-2 mr-1 hover:bg-kora-dark2 rounded-full cursor-pointer">
                  <Icon 
                     :class="'stroke-current text-kora-light1 w-4 h-4 inline-block transform rotate-180'" 
                     :viewbox="getIcons['upvoteAlt2'].viewbox" 
                     :path="getIcons['upvoteAlt2'].path" 
                  />
               </span>
            </template>
         </Tooltip>
         <Popover :offset="8" :placement="'bottom'">
            <template v-slot:trigger="slotProps">
               <span
                  class="trigger inline-flex items-center p-2 mr-1 rounded-full cursor-pointer hover:bg-kora-dark2"
                  @click="slotProps.toggle($event)"
               >
                  <Icon 
                     style="transform: scaleX(-1);"
                     :class="'fill-current text-kora-light1 w-4 h-4 inline-block'"
                     :viewbox="getIcons['replyAlt'].viewbox" 
                     :path="getIcons['replyAlt'].path" 
                  />
               </span>
            </template>

            <template v-slot:popover>
               <div class="popover">
                  <ul>
                     <li class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 flex items-center cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">
                        <Icon 
                           :class="'w-4 h-4 mr-2'" 
                           :viewbox="getIcons['facebook'].viewbox" 
                           :path="getIcons['facebook'].path" 
                        />
                        Facebook
                     </li>
                     <li class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 flex items-center cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">
                        <Icon 
                           :class="'w-4 h-4 mr-2'" 
                           :viewbox="getIcons['twitter'].viewbox" 
                           :path="getIcons['twitter'].path" 
                        />
                        Twitter
                     </li>
                     <li
                        class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50"
                        @click="copyToClipboard"
                     >Copy Link</li>
                  </ul>
               </div>
            </template>
         </Popover>
         <Popover :offset="8" :placement="'bottom'">
            <template v-slot:trigger="slotProps">
               <span 
                  class="trigger inline-flex justify-center items-center w-8 h-8 -mr-2 rounded-full cursor-pointer hover:bg-kora-dark2"
                  @click="slotProps.toggle($event)"
               >
                  <Icon 
                     :class="'fill-current text-kora-light1 w-5 h-5 inline-block'" 
                     :viewbox="getIcons['kebabMenu'].viewbox" 
                     :path="getIcons['kebabMenu'].path" 
                  />
               </span>
            </template>

            <template v-slot:popover>
               <div class="popover">
                  <ul>
                     <li class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Answer Anonymously</li>
                     <li class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Answer Later</li>
                     <li class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Follow Privately</li>
                     <li class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Notify About Edits</li>
                     <li class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Edit Topics</li>
                     <li class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Edit Question and Source</li>
                     <li class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Downvote Question</li>
                     <li class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Merge Questions</li>
                     <li class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">View Stats and Log</li>
                     <li class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-8 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Report</li>
                  </ul>
               </div>
            </template>
         </Popover>
      </div>
   </div>
   </div>
</template>

<script>
import Icon from "./Icon";
import Tooltip from "./Tooltip";
import Popover from "./Popover";
import { iconsMixin, modalMixin } from "../utils/mixins";
import { MUTATIONS } from '../constants/store';

export default {
   name: "ActionBar",
   components: {
      Icon,
      Tooltip,
      Popover
   },
   props: ["target", "options", "stats", "shareLink", "editorActive"],
   mixins: [iconsMixin, modalMixin],
   methods: {
      copyToClipboard: function() {
         const selector = document.createElement("textarea");

         selector.setAttribute("style", "opacity: 0; position: absolute; left: 9999px;");
         selector.value = this.shareLink;
         document.body.appendChild(selector);

         selector.select();
         document.execCommand("copy");
         document.body.removeChild(selector);

         this.$store.commit(MUTATIONS.SET_TOAST_META, { 
            content: "Link copied to clipboard.",
            type: "success"
         });
         this.$store.commit(MUTATIONS.SET_TOAST_ACTIVE);
      }
   }
}

</script>

<style lang="scss" scoped>

</style>