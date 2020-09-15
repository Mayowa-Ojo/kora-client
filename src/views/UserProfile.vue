<template>
   <div class="q-box flex">
      <main class="q-box--left">
         <div class="flex items-center">
            <span class="inline-block w-32 h-32 rounded-full overflow-hidden border-light-25">
               <img src="https://uifaces.co/our-content/donated/ukegoVAy.jpg" alt="user avatar">
            </span>
            <span class="inline-flex flex-col ml-4">
               <p class="text-kora-light1 text-k-24 font-bold">Alan Mellor</p>
               <p class="text-kora-light1 text-k-18 font-normal">Software Developer since 1981</p>
            </span>
         </div>

         <div class="mt-2">
            <p class="text-kora-light1 text-k-15 font-normal">I’m a working software developer, who runs a blog about coding <span class="text-kora-blue1">Home | View from the Code Face</span></p>
         </div>

         <div class="flex justify-between -ml-3">
            <div class="flex items-center">
               <span class="px-3 py-1 inline-flex items-center cursor-pointer rounded-full hover:bg-kora-dark3 hover:bg-opacity-25">
                  <Icon 
                     :class="'fill-current w-5 h-5 text-kora-blue1 mr-2 mb-1'" 
                     :viewbox="getIcons['following'].viewbox" 
                     :path="getIcons['following'].path" 
                  />
                  <span class="text-kora-blue1 text-k-14 font-medium">Following</span>
                  <span class="dot-separator"></span>
                  <span class="text-kora-blue1 text-k-14 font-medium">14.2k</span>
               </span>
               <span class="px-3 py-1 inline-flex items-center cursor-pointer rounded-full hover:bg-kora-dark3 hover:bg-opacity-25">
                  <Icon 
                     :class="'fill-current w-5 h-5 text-kora-light1 mr-2'" 
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
                        <li class="text-kora-light1 text-k-13 font-normal py-2 px-4 cursor-pointer hover:bg-kora-dark3">Mute Alan Mellor</li>
                        <li class="text-kora-light1 text-k-13 font-normal py-2 px-4 cursor-pointer hover:bg-kora-dark3">Block</li>
                        <li class="text-kora-light1 text-k-13 font-normal py-2 px-4 cursor-pointer hover:bg-kora-dark3">Report</li>
                     </ul>
                  </div>
               </template>
            </Popover>
         </div>

         <div class="mt-3 border-t-2 border-kora-light1 border-opacity-10">
            <div class="border-b border-kora-light1 border-opacity-10 flex">
               <span class="inline-flex justify-center items-center py-4 px-2 text-kora-red1 text-k-13 font-medium cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-25 border-b-2 border-kora-red1">Profile</span>
               <span class="inline-flex justify-center items-center py-4 px-2 text-kora-light1 text-k-13 font-medium cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-25">8,444 Answers</span>
               <span class="inline-flex justify-center items-center py-4 px-2 text-kora-light1 text-k-13 font-medium cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-25">6 Questions</span>
               <span class="inline-flex justify-center items-center py-4 px-2 text-kora-light1 text-k-13 font-medium cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-25">248 Shares</span>
               <span class="inline-flex justify-center items-center py-4 px-2 text-kora-light1 text-k-13 font-medium cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-25">0 Posts</span>
               <span class="inline-flex justify-center items-center py-4 px-2 text-kora-light1 text-k-13 font-medium cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-25">14,288 Followers</span>
               <span class="inline-flex justify-center items-center py-4 px-2 text-kora-light1 text-k-13 font-medium cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-25">
                  More
                  <Icon 
                     :class="'fill-current text-kora-light1 ml-2'" 
                     :viewbox="getIcons['chevron'].viewbox" 
                     :path="getIcons['chevron'].path" 
                     :width="getIcons['chevron'].width" 
                     :height="getIcons['chevron'].height" 
                  />
               </span>
            </div>
            <div class="border-b border-kora-light1 border-opacity-10 flex justify-between items-center py-2">
               <p class="text-kora-light1 text-k-15 font-medium">Profile</p>
               <span class="text-kora-light1 text-k-15 font-medium inline-flex items-center py-1 px-3 rounded-full cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-50">
                  Most Recent
                  <Icon 
                     :class="'fill-current text-kora-light1 ml-2'" 
                     :viewbox="getIcons['chevron'].viewbox" 
                     :path="getIcons['chevron'].path" 
                     :width="getIcons['chevron'].width" 
                     :height="getIcons['chevron'].height" 
                  />
               </span>
            </div>

            <div class="profile-feed">
               <AnswerPreview 
                  v-for="i in 5"
                  :key="i"
               />
               <SharedPost />
            </div>
         </div>
      </main>

      <aside class="q-box--right">
         <div class="credentials mb-4">
            <div class="py-2 flex justify-between items-center border-bottom">
               <p class="text-kora-light1 text-k-15 font-medium">Credentials & Highlights</p>
               <p class="text-kora-light1 text-k-13 font-normal text-opacity-50 cursor-pointer hover:underline">More</p>
            </div>
            <div class="mt-2">
               <div class="py-1 flex items-center">
                  <span class="mr-2">
                     <Icon 
                        :class="'w-4 h-4 fill-current text-kora-light1'" 
                        :viewbox="getIcons['userFriends'].viewbox" 
                        :path="getIcons['userFriends'].path" 
                     />
                  </span>
                  <p class="text-kora-light1 text-k-13 font-normal text-opacity-100">1 Follower You Know <span class="ml-1 text-kora-light1 text-opacity-50 cursor-pointer hover:underline">Gary Taylor</span></p>
               </div>
               <div class="py-1 flex items-center">
                  <span class="mr-2">
                     <Icon 
                        :class="'w-4 h-4 fill-current text-kora-light1'" 
                        :viewbox="getIcons['briefcase'].viewbox" 
                        :path="getIcons['briefcase'].path" 
                     />
                  </span>
                  <p class="text-kora-light1 text-k-13 font-normal text-opacity-100">Consultant Software Engineer <span class="ml-1 text-kora-light1 text-opacity-50">1990-present</span></p>
               </div>
               <div class="py-1 flex items-center">
                  <span class="mr-2">
                     <Icon 
                        :class="'w-4 h-4 fill-current text-kora-light1'" 
                        :viewbox="getIcons['gradCap'].viewbox" 
                        :path="getIcons['gradCap'].path" 
                     />
                  </span>
                  <p class="text-kora-light1 text-k-13 font-normal text-opacity-100">Studied at University of Salford <span class="ml-1 text-kora-light1 text-opacity-50"></span></p>
               </div>
               <div class="py-1 flex items-center">
                  <span class="mr-2">
                     <Icon 
                        :class="'w-4 h-4 fill-current text-kora-light1'" 
                        :viewbox="getIcons['location'].viewbox" 
                        :path="getIcons['location'].path" 
                     />
                  </span>
                  <p class="text-kora-light1 text-k-13 font-normal text-opacity-100">Lives in Manchester, UK <span class="ml-1 text-kora-light1 text-opacity-50"></span></p>
               </div>
               <div class="py-1 flex items-center">
                  <span class="mr-2">
                     <Icon 
                        :class="'w-4 h-4 fill-current text-kora-light1'" 
                        :viewbox="getIcons['eye'].viewbox" 
                        :path="getIcons['eye'].path" 
                     />
                  </span>
                  <p class="text-kora-light1 text-k-13 font-normal text-opacity-100">28.2M content views <span class="ml-1 text-kora-light1 text-opacity-50">949.8k this month</span></p>
               </div>
               <div class="py-1 flex items-center">
                  <span class="mr-2">
                     <Icon 
                        :class="'w-4 h-4 fill-current text-kora-light1'" 
                        :viewbox="getIcons['userGroup'].viewbox" 
                        :path="getIcons['userGroup'].path" 
                     />
                  </span>
                  <p class="text-kora-light1 text-k-13 font-normal text-opacity-100">Active in 12 Spaces <span class="ml-1 text-kora-gray1 text-opacity-50"></span></p>
               </div>
            </div>
         </div>

         <div class="py-3 border-bottom">
            <p class="text-kora-light1 text-k-15 font-medium">Spaces</p>
         </div>

         <div class="pt-2 pb-4">
            <ul>
               <li class="py-1 flex items-center">
                  <span class="w-6 h-6 mr-2 inline-block rounded-full overflow-hidden cursor-pointer hover:opacity-50">
                     <img class="image-cover" src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.tribes.defaults.space_icon_gray.png-26-a461963c75474740.png" alt="space icon">
                  </span>
                  <div class="flex flex-col">
                     <p class="text-kora-light1 text-k-13 font-bold text-opacity-100 cursor-pointer hover:underline">Alan Mellor on Software</p>
                     <span class="pt-1 inline-flex items-center text-kora-light1 text-k-13 font-normal text-opacity-50">
                        Admin
                        <span class="dot-separator"></span>
                        152 items
                     </span>
                  </div>
               </li>
               <li class="py-1 flex items-center">
                  <span class="w-6 h-6 mr-2 inline-block rounded-full overflow-hidden cursor-pointer hover:opacity-50">
                     <img class="image-cover" src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.tribes.defaults.space_icon_gray.png-26-a461963c75474740.png" alt="space icon">
                  </span>
                  <div class="flex flex-col">
                     <p class="text-kora-light1 text-k-13 font-bold text-opacity-100 cursor-pointer hover:underline">Code</p>
                     <span class="pt-1 inline-flex items-center text-kora-light1 text-k-13 font-normal text-opacity-50">
                        Admin
                        <span class="dot-separator"></span>
                        13 items
                     </span>
                  </div>
               </li>
               <li class="py-1 flex items-center">
                  <span class="w-6 h-6 mr-2 inline-block rounded-full overflow-hidden cursor-pointer hover:opacity-50">
                     <img class="image-cover" src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.tribes.defaults.space_icon_gray.png-26-a461963c75474740.png" alt="space icon">
                  </span>
                  <div class="flex flex-col">
                     <p class="text-kora-light1 text-k-13 font-bold text-opacity-100 cursor-pointer hover:underline">Everything Guitar</p>
                     <span class="pt-1 inline-flex items-center text-kora-light1 text-k-13 font-normal text-opacity-50">
                        Contributor
                        <span class="dot-separator"></span>
                        1 item
                     </span>
                  </div>
               </li>
               <li class="py-1 flex items-center">
                  <span class="w-6 h-6 mr-2 inline-block rounded-full overflow-hidden cursor-pointer hover:opacity-50">
                     <img class="image-cover" src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.tribes.defaults.space_icon_gray.png-26-a461963c75474740.png" alt="space icon">
                  </span>
                  <div class="flex flex-col">
                     <p class="text-kora-light1 text-k-13 font-bold text-opacity-100 cursor-pointer hover:underline">Careers Advice</p>
                     <span class="pt-1 inline-flex items-center text-kora-light1 text-k-13 font-normal text-opacity-50">
                        Contributor
                        <span class="dot-separator"></span>
                        7 items
                     </span>
                  </div>
               </li>
               <li class="py-1 flex items-center">
                  <span class="w-6 h-6 mr-2 inline-block rounded-full overflow-hidden cursor-pointer hover:opacity-50">
                     <img class="image-cover" src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.tribes.defaults.space_icon_gray.png-26-a461963c75474740.png" alt="space icon">
                  </span>
                  <div class="flex flex-col">
                     <p class="text-kora-light1 text-k-13 font-bold text-opacity-100 cursor-pointer hover:underline">Trolling the Homework</p>
                     <span class="pt-1 inline-flex items-center text-kora-light1 text-k-13 font-normal text-opacity-50">
                        Contributor
                        <span class="dot-separator"></span>
                        2 items
                     </span>
                  </div>
               </li>
            </ul>
            <div class="py-1">
               <button class="px-4 py-1 rounded-full bg-kora-dark3 border-light-25 text-kora-light1 text-k-13 font-medium hover:bg-opacity-50" type="button">
                  View More 
                  <span class="inline-block ml-1">
                     <Icon 
                        :class="'w-2 h-2 fill-current text-kora-light1'" 
                        :viewbox="getIcons['chevron'].viewbox" 
                        :path="getIcons['chevron'].path" 
                     />
                  </span>
               </button>
            </div>
         </div>

         <div class="py-3 border-bottom">
            <p class="text-kora-light1 text-k-15 font-medium">Knows About</p>
         </div>

         <div class="pt-2 pb-4">
            <ul>
               <li class="py-1 flex items-center">
                  <span class="w-8 h-8 mr-2 inline-block rounded overflow-hidden cursor-pointer">
                     <img class="image-cover" src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.tribes.defaults.space_icon_blue.png-26-59bea7960fef2c75.png" alt="space icon">
                  </span>
                  <div class="flex flex-col">
                     <p class="text-kora-light1 text-k-13 font-bold text-opacity-100 cursor-pointer hover:underline">Programming Languages</p>
                     <span class="pt-1 inline-flex items-center text-kora-light1 text-k-13 font-normal text-opacity-50 cursor-pointer hover:underline">
                        2.6K answers
                     </span>
                  </div>
               </li>
               <li class="py-1 flex items-center">
                  <span class="w-8 h-8 mr-2 inline-block rounded overflow-hidden cursor-pointer">
                     <img class="image-cover" src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.tribes.defaults.space_icon_blue.png-26-59bea7960fef2c75.png" alt="space icon">
                  </span>
                  <div class="flex flex-col">
                     <p class="text-kora-light1 text-k-13 font-bold text-opacity-100 cursor-pointer hover:underline">Learning to Program</p>
                     <span class="pt-1 inline-flex items-center text-kora-light1 text-k-13 font-normal text-opacity-50 cursor-pointer hover:underline">
                        1.7K answers
                     </span>
                  </div>
               </li>
               <li class="py-1 flex items-center">
                  <span class="w-8 h-8 mr-2 inline-block rounded overflow-hidden cursor-pointer">
                     <img class="image-cover" src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.tribes.defaults.space_icon_blue.png-26-59bea7960fef2c75.png" alt="space icon">
                  </span>
                  <div class="flex flex-col">
                     <p class="text-kora-light1 text-k-13 font-bold text-opacity-100 cursor-pointer hover:underline">Java (Programming Language)</p>
                     <span class="pt-1 inline-flex items-center text-kora-light1 text-k-13 font-normal text-opacity-50 cursor-pointer hover:underline">
                        1.5K answers
                     </span>
                  </div>
               </li>
               <li class="py-1 flex items-center">
                  <span class="w-8 h-8 mr-2 inline-block rounded overflow-hidden cursor-pointer">
                     <img class="image-cover" src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.tribes.defaults.space_icon_blue.png-26-59bea7960fef2c75.png" alt="space icon">
                  </span>
                  <div class="flex flex-col">
                     <p class="text-kora-light1 text-k-13 font-bold text-opacity-100 cursor-pointer hover:underline">Software Engineering</p>
                     <span class="pt-1 inline-flex items-center text-kora-light1 text-k-13 font-normal text-opacity-50 cursor-pointer hover:underline">
                        1.5K answers
                     </span>
                  </div>
               </li>
               <li class="py-1 flex items-center">
                  <span class="w-8 h-8 mr-2 inline-block rounded overflow-hidden cursor-pointer">
                     <img class="image-cover" src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.tribes.defaults.space_icon_blue.png-26-59bea7960fef2c75.png" alt="space icon">
                  </span>
                  <div class="flex flex-col">
                     <p class="text-kora-light1 text-k-13 font-bold text-opacity-100 cursor-pointer hover:underline">Web Development</p>
                     <span class="pt-1 inline-flex items-center text-kora-light1 text-k-13 font-normal text-opacity-50 cursor-pointer hover:underline">
                        953 answers
                     </span>
                  </div>
               </li>
            </ul>
            <div class="py-1">
               <button class="px-4 py-1 rounded-full bg-kora-dark3 border-light-25 text-kora-light1 text-k-13 font-medium hover:bg-opacity-50" type="button">
                  View More 
                  <span class="inline-block ml-1">
                     <Icon 
                        :class="'w-2 h-2 fill-current text-kora-light1'" 
                        :viewbox="getIcons['chevron'].viewbox" 
                        :path="getIcons['chevron'].path" 
                     />
                  </span>
               </button>
            </div>
         </div>
      </aside>
   </div>
</template>

<script>
import Icon from "../components/Icon";
import Popover from "../components/Popover";
import AnswerPreview from "../components/AnswerPreview";
import SharedPost from "../components/SharedPost";
import { iconsMixin } from "../utils/mixins";

export default {
   name: "UserProfile",
   components: {
      Icon,
      Popover,
      AnswerPreview,
      SharedPost
   },
   mixins: [iconsMixin]
}

</script>

<style lang="scss" scoped>
.q-box {
   &--left {
      width: 602px;
   }
   &--right {
      width: 314px;
      margin-left: 86px;
   }
}
</style>