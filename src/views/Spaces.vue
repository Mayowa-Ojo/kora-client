<template>
   <div class="q-box flex">

      <div class="q-box--left">
         <div class="bg-kora-dark2 border-light-25 rounded">
            <div class="px-4 pt-2 pb-1 flex justify-between">
               <div>
                  <p class="text-kora-light1 text-k-18 font-bold">Your Spaces</p>
               </div>
               <div class="flex items-center py-1 px-3 rounded-full cursor-pointer hover:bg-kora-dark3">
                  <p class="mr-2 text-kora-light1 text-k-13 font-medium">Recently Visited</p>
                  <span class="inline-block">
                     <Icon 
                        :class="'w-3 h-3 fill-current text-kora-light1'" 
                        :viewbox="getIcons['chevron'].viewbox" 
                        :path="getIcons['chevron'].path" 
                     />
                  </span>
               </div>
            </div>

            <div class="mt-1 mb-4 px-4 flex">
               <button 
                  class="mr-2 py-1 px-3 rounded-full border-2 border-kora-red1 border-opacity-50 text-kora-red1 text-k-13 font-medium hover:bg-kora-dark1 focus:outline-none" 
                  type="button"
                  @click="toggleModal('AddSpaceModal')"
               >  
                  <Icon 
                     :class="'fill-current text-kora-red1 inline-block mr-1'" 
                     :viewbox="getIcons['plusAlt'].viewbox" 
                     :path="getIcons['plusAlt'].path" 
                     :width="getIcons['plusAlt'].width" 
                     :height="getIcons['plusAlt'].height" 
                  />
                  Create a Space
               </button>
               <button 
                  class="mr-2 py-1 px-3 rounded-full border-2 border-kora-light1 border-opacity-50 text-kora-light1 text-k-13 font-medium cursor-not-allowed hover:bg-kora-dark1 focus:outline-none" 
                  type="button"
               >
                  <Icon 
                     :class="'fill-current text-kora-light1 inline-block mr-1'" 
                     :viewbox="getIcons['compass'].viewbox" 
                     :path="getIcons['compass'].path" 
                     :width="getIcons['compass'].width" 
                     :height="getIcons['compass'].height" 
                  />
                  Discover Spaces
               </button>
            </div>

            <div class="spaces-list">
               <ul class="pb-2">
                  <li 
                     class="spaces-list__item flex items-center px-4 py-3 border-b border-kora-light1 border-opacity-10 cursor-pointer hover:bg-kora-dark3"
                     v-for="(space, idx) in authUser('spaces')"
                     :key="String(idx)+generateId"
                  >
                     <span class="w-6 h-6 mr-2 inline-block bg-kora-red1 rounded-full relative">
                        <img class="rounded-full" :src="space.icon" alt="space icon image">
                        <span class="w-2 h-2 inline-block bg-kora-red1 absolute top-0 left-0 rounded-full border border-kora-dark3"></span>
                     </span>
                     <span class="text-kora-light1 text-k-13 font-semibold">{{ space.name }}</span>
                     <span 
                        class="badge inline-flex items-center px-2 py-1 ml-2 rounded bg-kora-dark3 text-kora-light1 text-k-12 font-medium"
                        v-if="space.admins.includes(authUser('id'))"
                     >
                        <Icon 
                           :class="'fill-current text-kora-light1 inline-block mr-1'" 
                           :viewbox="getIcons['shield'].viewbox" 
                           :path="getIcons['shield'].path" 
                           :width="getIcons['shield'].width" 
                           :height="getIcons['shield'].height" 
                        />
                        Admin
                     </span>
                  </li>
               </ul>
            </div>
         </div>

         <div class="mt-6">
            <p class="text-kora-light1 text-k-21 font-bold">Discover Spaces</p>
         </div>

         <div class="mt-2">
            <p class="text-kora-light1 text-k-14 font-normal my-4">Spaces you might like</p>
            <div class="flex flex-wrap">
               <!-- spaces row -->
               <SpaceCard 
                  v-for="(space, idx) in suggestedSpaces"
                  :key="idx"
                  :space="space"
               />
            </div>
         </div>

         <div class="flex justify-center items-center my-2 py-2 cursor-pointer hover:bg-kora-dark3">
            <p class="text-kora-light1 text-k-14 font-normal">View More</p>
            <Icon 
               :class="'fill-current text-kora-light1 inline-block ml-2'" 
               :viewbox="getIcons['chevron'].viewbox" 
               :path="getIcons['chevron'].path" 
               :width="getIcons['chevron'].width" 
               :height="getIcons['chevron'].height" 
            />
         </div>

         <div class="mt-12 px-6 py-4 flex justify-center">
            <ScrollEnd />
         </div>

      </div>

      <aside class="h-full q-box--right">
         <div class="bg-kora-dark2 border-light-25 rounded">
            <div class="px-4 py-2 border-b border-kora-light1 border-opacity-10">
               <p class="text-kora-light1 text-k-15 font-medium">Pending Invites</p>
            </div>
            <div class="flex p-4">
               <div class="h-full mr-2">
                  <span class="w-8 h-8 inline-block rounded-full border-2 border-kora-dark3 overflow-hidden">
                     <img class="w-full h-full object-cover" src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="icon image">
                  </span>
               </div>
               <div class="flex flex-col">
                  <p class="text-kora-light1 text-k-13 font-bold cursor-pointer hover:underline">Space Updates</p>
                  <p class="text-kora-light1 text-k-13 font-normal mt-1">Invited as a follower by Alina Din.</p>
                  <div class="flex mt-2">
                     <button class="px-4 py-1 mr-2 rounded-full bg-kora-dark3 text-kora-blue1 text-k-13 font-medium border border-kora-gray1 border-opacity-25 hover:bg-opacity-50">Accept</button>
                     <button class="px-4 py-1 rounded-full bg-kora-dark2 text-kora-blue1 text-k-13 font-medium hover:bg-kora-dark3">Decline</button>
                  </div>
               </div>
            </div>
         </div>
      </aside>
   </div>
</template>

<script>
import { mapState } from 'vuex';

import Icon from "../components/Icon";
import ScrollEnd from "../components/ScrollEnd";
import SpaceCard from "../components/SpaceCard";
import { ACTIONS } from '../constants/store';
import { iconsMixin, shortidMixin, modalMixin } from "../utils/mixins";

export default {
   name: "Spaces",
   components: {
      Icon,
      SpaceCard,
      ScrollEnd
   },
   mixins: [iconsMixin, shortidMixin, modalMixin],
   computed: {
      ...mapState({
         suggestedSpaces: (state) => state.space.suggestedSpaces,
         authUser: (state) => (key) => state.auth.profile?.[key]
      })
   },
   created: async function() {
      // fetch suggested spaces
      await this.$store.dispatch(ACTIONS.FETCH_SUGGESTED_SPACES);
   }
}

</script>

<style lang="scss" scoped>
.q-box {
   &--left {
      width: 712px;
      margin-right: 30px;
      button {
         svg {
            margin-bottom: 2px;
         }
      }
   }
   &--right {
      width: 260px;
   }
}
</style>
