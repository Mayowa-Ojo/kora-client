<template>
   <TippyComponent
      interactive
      name="profile-popover-trigger"
      placement="bottom"
      animation="fade"
      trigger="click"
      :onMount="handleFetch"
   >
      <div class="flex flex-col items-center justify-center py-4 h-full w-full" v-if="isLoading || !user">
         <svg style="margin:auto;background:transparent;display:block;" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="23" r="13" fill="#9adcfa">
            <animate attributeName="cy" dur="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9" keyTimes="0;0.5;1" values="23;77;23"></animate>
            </circle>
         </svg>
         <p class="text-k-15 font-medium text-kora-light1">Loading...</p>
      </div>
      <div class="w-full" v-else>
         <div class="p-4">
            <header class="flex">
               <span class="inline-block w-10 h-10 rounded-full overflow-hidden">
                  <img :src="user.avatar" alt="user avatar">
               </span>
               <div class="flex flex-col items-start ml-3">
                  <p class="text-k-15 font-medium text-kora-light1">{{user.firstname}} {{user.lastname}}</p>
                  <p class="text-k-13 font-normal text-kora-light1">{{user.credentials.profile}}</p>
               </div>
            </header>

            <div class="credentials mb-1">
               <div class="mt-2">
                  <div
                     class="py-1 flex items-center"
                     v-if="user.credentials.employment !== ''"
                  >
                     <span class="mr-2">
                        <Icon 
                           :class="'w-4 h-4 fill-current text-kora-light1'" 
                           :viewbox="getIcons['briefcase'].viewbox" 
                           :path="getIcons['briefcase'].path" 
                        />
                     </span>
                     <p class="text-kora-light1 text-k-13 font-normal text-opacity-100">{{user.credentials.employment}}</p>
                  </div>
                  <div
                     class="py-1 flex items-center"
                     v-if="user.credentials.education !== ''"
                  >
                     <span class="mr-2">
                        <Icon 
                           :class="'w-4 h-4 fill-current text-kora-light1'" 
                           :viewbox="getIcons['gradCap'].viewbox" 
                           :path="getIcons['gradCap'].path" 
                        />
                     </span>
                     <p class="text-kora-light1 text-k-13 font-normal text-opacity-100">{{user.credentials.education}}</p>
                  </div>
                  <div
                     class="py-1 flex items-center"
                     v-if="user.credentials.location !== ''"
                  >
                     <span class="mr-2">
                        <Icon 
                           :class="'w-4 h-4 fill-current text-kora-light1'" 
                           :viewbox="getIcons['location'].viewbox" 
                           :path="getIcons['location'].path" 
                        />
                     </span>
                     <p class="text-kora-light1 text-k-13 font-normal text-opacity-100">Lives in {{user.credentials.location}}</p>
                  </div>
                  <div
                     class="py-1 flex items-center"
                     v-if="user.credentials.language !== ''"
                  >
                     <span class="mr-2">
                        <Icon 
                           :class="'w-4 h-4 fill-current text-kora-light1'" 
                           :viewbox="getIcons['globe'].viewbox" 
                           :path="getIcons['globe'].path" 
                        />
                     </span>
                     <p class="text-kora-light1 text-k-13 font-normal text-opacity-100">Knows {{user.credentials.language}}</p>
                  </div>
                  <div class="py-1 flex items-center">
                     <span class="mr-2">
                        <Icon 
                           :class="'w-4 h-4 fill-current text-kora-light1'" 
                           :viewbox="getIcons['eye'].viewbox" 
                           :path="getIcons['eye'].path" 
                        />
                     </span>
                     <p class="text-kora-light1 text-k-13 font-normal text-opacity-100">{{user.views}} content views <span class="ml-1 text-kora-light1 text-opacity-50">(since 2018)</span></p>
                  </div>
                  <div class="py-1 flex items-center">
                     <span class="mr-2">
                        <Icon 
                           :class="'w-4 h-4 fill-current text-kora-light1'" 
                           :viewbox="getIcons['userGroup'].viewbox" 
                           :path="getIcons['userGroup'].path" 
                        />
                     </span>
                     <p class="text-kora-light1 text-k-13 font-normal text-opacity-100">Active in {{user.spaces.length}} Spaces</p>
                  </div>
               </div>
            </div>
         </div>

         <footer class="border-t border-kora-light1 border-opacity-10 h-10 px-2 flex items-center">
            <div class="flex justify-between w-full">
               <div class="flex items-center">
                  <span class="px-2 py-1 inline-flex items-center cursor-pointer rounded-full hover:bg-kora-dark2 hover:bg-opacity-25">
                     <Icon 
                        :class="'fill-current w-4 h-4 text-kora-blue1 mr-2 mb-1'" 
                        :viewbox="getIcons['following'].viewbox" 
                        :path="getIcons['following'].path"
                        v-if="isFollowingCurrentUser"
                     />
                     <Icon 
                        :class="'fill-current w-4 h-4 text-kora-light1 mr-2'" 
                        :viewbox="getIcons['follow'].viewbox" 
                        :path="getIcons['follow'].path" 
                        v-else
                     />
                     <span
                        class="text-k-12 font-normal"
                        :class="[isFollowingCurrentUser ? 'text-kora-blue1' : 'text-kora-light1']"
                     >{{isFollowingCurrentUser ? 'Following' : 'Follow'}}</span>
                     <span class="dot-separator"></span>
                     <span
                        class="text-k-12 font-normal"
                        :class="[isFollowingCurrentUser ? 'text-kora-blue1' : 'text-kora-light1']"
                     >14.2k</span>
                  </span>
                  <span class="px-2 py-1 inline-flex items-center cursor-pointer rounded-full hover:bg-kora-dark2 hover:bg-opacity-25">
                     <Icon 
                        :class="'fill-current w-4 h-4 text-kora-light1 mr-2'" 
                        :viewbox="getIcons['alarm'].viewbox" 
                        :path="getIcons['alarm'].path" 
                     />
                     <span class="text-kora-light1 text-k-12 font-normal">Notify Me</span>
                  </span>
                  <span class="px-2 py-1 inline-flex items-center cursor-pointer rounded-full hover:bg-kora-dark2 hover:bg-opacity-25">
                     <Icon 
                        :class="'fill-current w-4 h-4 text-kora-light1 mr-2'" 
                        :viewbox="getIcons['question'].viewbox" 
                        :path="getIcons['question'].path" 
                     />
                     <span class="text-kora-light1 text-k-12 font-normal">Ask Question</span>
                  </span>
               </div>
               <span class="trigger w-8 h-8 inline-flex items-center justify-center rounded-full cursor-pointer hover:bg-kora-dark2 hover:bg-opacity-25">
                  <Icon 
                     :class="'fill-current text-kora-light1'" 
                     :viewbox="getIcons['kebabMenu'].viewbox" 
                     :path="getIcons['kebabMenu'].path" 
                     :width="getIcons['kebabMenu'].width" 
                     :height="getIcons['kebabMenu'].height" 
                  />
               </span>
            </div>
         </footer>
      </div>
   </TippyComponent>
</template>

<script>
import { TippyComponent } from "vue-tippy";

import Icon from "./Icon";
import { iconsMixin } from "../utils/mixins";
import httpRequest from "../services/http";

export default {
   name: "ProfilePopover",
   components: {
      Icon,
      TippyComponent
   },
   mixins: [iconsMixin],
   props: ["userId"],
   data: () => ({
      isLoading: false,
      user: null
   }),
   computed: {
      isFollowingCurrentUser: function() {
         return this.user?.followers?.includes(
            this.$store.state.auth?.profile?.id
         );
      }
   },
   methods: {
      handleFetch: async function() {
         this.isLoading = true;

         const response = await httpRequest(`/users/${this.userId}`, {
            method: "GET"
         });

         if(this.$store.state.status === "error") return;

         this.user = { ...response.data }

         this.isLoading = false;
      }
   }
}

</script>

<style lang="scss">
.tippy-tooltip {
   border-radius: 4px;
   padding: 0;
   border: 1px solid rgba(224, 230, 240, 0.2);
   min-width: 440px;
   // min-height: 288px;
   .tippy-backdrop {
      background-color: #3B414B;
   }
}
</style>