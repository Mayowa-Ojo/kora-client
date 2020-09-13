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
                  class="mr-2 py-1 px-3 rounded-full border-2 border-kora-red1 border-opacity-50 text-kora-red1 text-k-13 font-medium hover:bg-kora-dark1" 
                  type="button"
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
                  class="mr-2 py-1 px-3 rounded-full border-2 border-kora-light1 border-opacity-50 text-kora-light1 text-k-13 font-medium hover:bg-kora-dark1" 
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
               <ul>
                  <li 
                     class="spaces-list__item flex items-center px-4 py-3 border-b border-kora-light1 border-opacity-10 cursor-pointer hover:bg-kora-dark3"
                  >
                     <span class="w-6 h-6 mr-2 inline-block bg-kora-red1 rounded-full relative">
                        <img class="rounded-full" src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.tribes.defaults.space_icon_purple.png-26-6ea9822273dc841e.png" alt="space icon image">
                        <span class="w-2 h-2 inline-block bg-kora-red1 absolute top-0 left-0 rounded-full border border-kora-dark3"></span>
                     </span>
                     <span class="text-kora-light1 text-k-13 font-semibold mr-2">Communityy</span>
                     <span class="badge inline-flex items-center px-2 mt-1 rounded bg-kora-dark3 text-kora-light1 text-k-12 font-medium">
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
                  <li 
                     class="spaces-list__item flex items-center px-4 py-3 border-b border-kora-light1 border-opacity-10 cursor-pointer hover:bg-kora-dark3"
                     v-for="(space, idx) in getTempData['spaces']"
                     :key="String(idx)+generateId"
                  >
                     <span class="w-6 h-6 mr-2 inline-block bg-kora-red1 rounded-full relative">
                        <img class="rounded-full" :src="space.img" alt="space icon image">
                        <span class="w-2 h-2 inline-block bg-kora-red1 absolute top-0 left-0 rounded-full border border-kora-dark3"></span>
                     </span>
                     <span class="text-kora-light1 text-k-13 font-semibold">{{ space.name }}</span>
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
                  v-for="i in 8"
                  :key="i"
                  :cover="'https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.tribes.defaults.space_banner_blue.png-26-4eaf49a49fb008b5.png'"
                  :icon="'https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.tribes.defaults.space_icon_blue.png-26-59bea7960fef2c75.png'"
                  :name="'Christopher F Clark Said'"
                  :description="'Answers important to me or popular -- not quite a blog'"
                  :followers="'820'"
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

         <div class="mt-2">
            <p class="text-kora-light1 text-k-14 font-normal my-4">Programming Languages</p>
            <div class="flex flex-wrap">
               <!-- spaces row -->
               <SpaceCard 
                  v-for="i in 8"
                  :key="i"
                  :cover="'https://qph.fs.quoracdn.net/main-custom-tc-1579890-320x80-mrtkugesulhbrdhdsmimdkfhiszkqzqr.jpeg'"
                  :icon="'https://qph.fs.quoracdn.net/main-thumb-ti-1579890-100-gmocbiyzzjuxvqmiknipnpsaciuydgtd.jpeg'"
                  :name="'Creative Programming'"
                  :description="'From novice to advanced the creative process in programming computers.'"
                  :followers="'81.2k'"
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

         <div class="mt-2">
            <p class="text-kora-light1 text-k-14 font-normal my-4">Golang Developers</p>
            <div class="flex flex-wrap">
               <!-- spaces row -->
               <SpaceCard 
                  v-for="i in 8"
                  :key="i"
                  :cover="'https://qph.fs.quoracdn.net/main-custom-tc-1839-320x80-alisamklnopqkgugdqbxyfwtdujfubeb.jpeg'"
                  :icon="'https://qph.fs.quoracdn.net/main-thumb-ti-1839-100-tewdaynnrawazrlcpidrhztmqlkrndzn.jpeg'"
                  :name="'Become a Great Programmer'"
                  :description="'Almost anyone can become a great programmer. This is yo...'"
                  :followers="'168.5k'"
               />
            </div>
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
import Icon from "../components/Icon";
import SpaceCard from "../components/SpaceCard";
import { iconsMixin, dataMixin, shortidMixin } from "../utils/mixins";

export default {
   name: "Spaces",
   components: {
      Icon,
      SpaceCard
   },
   mixins: [iconsMixin, dataMixin, shortidMixin]
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
