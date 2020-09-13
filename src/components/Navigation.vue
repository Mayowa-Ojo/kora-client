<template>
   <div class="nav w-full h-12 bg-kora-dark2 bg-k fixed inset-x-0 top-0 z-30">
      <div class="nav-content mx-auto h-full w-full flex justify-between items-center">
         <div class="nav-brand">
            <p class="text-kora-red1 text-2xl tracking-widest">Kora</p>
         </div>

         <div class="nav-center h-full flex">
            <router-link :to="{path: '/'}" class="focus:bg-kora-dark1">
            <div class="nav-item h-full flex px-4 hover:bg-kora-dark1 focus:bg-kora-dark1 cursor-pointer">
               <span class="inline-block mr-1">
                  <Icon 
                     :class="'w-6 h-6 fill-current text-kora-light1'" 
                     :viewbox="getIcons['home'].viewbox" 
                     :path="getIcons['home'].path" 
                  />
               </span>
               <span class="text-k-14 font-medium text-kora-light1">Home</span>
            </div>
            </router-link>
            <router-link :to="{path: '/answer'}" class="focus:bg-kora-dark1">
            <div class="nav-item h-full flex px-4 hover:bg-kora-dark1 focus:bg-kora-dark1 cursor-pointer">
               <span class="inline-block mr-1">
                  <Icon 
                     :class="'w-6 h-6 fill-current text-kora-light1'" 
                     :viewbox="getIcons['commentAlt'].viewbox" 
                     :path="getIcons['commentAlt'].path" 
                  />
               </span>
               <span class="text-k-14 font-medium text-kora-light1">Answer</span>
            </div>
            </router-link>

            <Popover :offset="8" :placement="'bottom'">
               <template v-slot:trigger="slotProps">
                  <button 
                     class="trigger nav-item h-full flex px-4 hover:bg-kora-dark1 focus:bg-kora-dark1 cursor-pointer focus:outline-none" 
                     @click="slotProps.toggle($event)"
                  >
                     <span class="inline-block mr-1 pointer-events-none">
                        <Icon 
                           :class="'fill-current text-kora-light1'" 
                           :viewbox="getIcons['userGroup'].viewbox" 
                           :path="getIcons['userGroup'].path" 
                           :width="getIcons['userGroup'].width" 
                           :height="getIcons['userGroup'].height" 
                        />
                     </span>
                     <span class="text-k-14 font-medium text-kora-light1 pointer-events-none">Spaces</span>
                  </button>
               </template>
               <template v-slot:popover>
                  <div class="popover">
                     <div class="p-2 border-b border-kora-gray1 border-opacity-10">
                     <router-link :to="{ path: '/spaces' }" class="px-3 py-1 inline-flex items-center rounded-full hover:bg-kora-dark3">
                        <p class="mr-2 text-kora-light1 text-k-13 font-medium">See all spaces</p>
                        <span class="inline-block">
                           <Icon 
                              :class="'fill-current text-kora-gray1 transform -rotate-90'" 
                              :viewbox="getIcons['chevron'].viewbox" 
                              :path="getIcons['chevron'].path" 
                              :width="getIcons['chevron'].width" 
                              :height="getIcons['chevron'].height" 
                           />
                        </span>
                     </router-link>
                     </div>
                     <ul class="spaces-list">
                        <li class="spaces-list__item px-4 py-2 flex items-center justify-between border-b border-kora-light1 border-opacity-10 cursor-pointer hover:bg-kora-dark1">
                           <div class="inline-flex items-center">
                              <span class="inline-block mr-2 w-8 h-8 rounded-full relative">
                                 <img class="rounded-full" src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.tribes.defaults.space_icon_purple.png-26-6ea9822273dc841e.png" alt="space icon">
                                 <span class="notifier inline-block w-3 h-3 rounded-full border-2 border-kora-dark3 bg-kora-red1 absolute"></span>
                              </span>
                              <span>
                                 <p class="text-kora-light1 text-k-13 font-bold">Communityy</p>
                                 <span class="inline-flex items-center">
                                    <Icon 
                                       :class="'fill-current text-kora-light1'" 
                                       :viewbox="getIcons['shield'].viewbox" 
                                       :path="getIcons['shield'].path" 
                                       :width="getIcons['shield'].width" 
                                       :height="getIcons['shield'].height" 
                                    />
                                    <p class="ml-1 text-kora-light1 text-k-13 font-normal">Admin</p>
                                 </span>
                              </span>
                           </div>
                           <span class="inline-block mr-1">
                              <Icon 
                                 :class="'w-3 h-3 fill-current text-kora-gray1 transform -rotate-90'" 
                                 :viewbox="getIcons['chevron'].viewbox" 
                                 :path="getIcons['chevron'].path" 
                              />
                           </span>
                        </li>
                        <li 
                           class="spaces-list__item px-4 py-2 flex items-center justify-between border-b border-kora-light1 border-opacity-10 cursor-pointer hover:bg-kora-dark1"
                           v-for="(space, idx) in getTempData.spaces"
                           :key="idx"
                        >
                           <div class="inline-flex items-center">
                              <span class="inline-block mr-2 w-8 h-8 rounded-full relative">
                                 <img class="rounded-full" :src="space.img" alt="space icon">
                                 <span class="notifier inline-block w-3 h-3 rounded-full border-2 border-kora-dark3 bg-kora-red1 absolute"></span>
                              </span>
                              <p class="text-kora-light1 text-k-13 font-bold">{{ space.name }}</p>
                           </div>
                           <span class="inline-block mr-1">
                              <Icon 
                                 :class="'w-3 h-3 fill-current text-kora-gray1 transform -rotate-90'" 
                                 :viewbox="getIcons['chevron'].viewbox" 
                                 :path="getIcons['chevron'].path" 
                              />
                           </span>
                        </li>
                     </ul>
                  </div>
               </template>
            </Popover>

            <router-link :to="{path: '/notifications'}" class="focus:bg-kora-dark1">
            <div class="nav-item h-full flex px-4 hover:bg-kora-dark1 focus:bg-kora-dark1 cursor-pointer">
               <span class="inline-block mr-1">
                  <Icon 
                     :class="'fill-current text-kora-light1'" 
                     :viewbox="getIcons['alarm'].viewbox" 
                     :path="getIcons['alarm'].path" 
                     :width="getIcons['alarm'].width" 
                     :height="getIcons['alarm'].height" 
                  />
               </span>
               <span class="text-k-14 font-medium text-kora-light1">Notifications</span>
            </div>
            </router-link>
         </div>

         <div class="nav-end h-full flex">
            <div class="nav-item search-input h-full w-64 flex relative mr-4">
               <span class="inline-block absolute">
                  <Icon 
                     :class="'w-3 h-3 fill-current text-kora-light1'" 
                     :viewbox="getIcons['search'].viewbox" 
                     :path="getIcons['search'].path" 
                  />
               </span>
               <input class="w-full h-8 pl-8 text-kora-light1 text-k-13 font-normal bg-transparent rounded border-2 border-kora-light1 border-opacity-25 focus:border-kora-blue1 focus:outline-none" type="search" name="search" placeholder="Search Kora" autocomplete="off">
            </div>
            <div class="avatar h-full mr-4 flex items-center">
               <span class="inline-flex items-center justify-center w-6 h-6 bg-kora-blue1 rounded-full cursor-pointer">
                  <Icon 
                     :class="'fill-current text-kora-light1'" 
                     :viewbox="getIcons['user'].viewbox" 
                     :path="getIcons['user'].path" 
                     :width="getIcons['user'].width" 
                     :height="getIcons['user'].height" 
                  />
               </span>
            </div>
            <div class="ask-button h-full flex items-center">
               <button class="w-full px-4 py-1 bg-kora-red1 rounded-full font-medium text-k-13 text-kora-dark1 focus:border-opacity-75 hover:bg-opacity-75" type="button">Ask Question</button>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import Popover from "./Popover";
import Icon from "./Icon";
import { iconsMixin } from "../utils/mixins";
import { spaces } from "../tmp/db";

export default {
   name: "Navigation",
   components: {
      Popover,
      Icon
   },
   mixins: [iconsMixin],
   computed: {
      getTempData: () => ({ spaces })
   }
}
</script>

<style lang="scss" scoped>
.nav {
   &-content {
      max-width: 1002px;
      .nav-brand {
         font-family: 'Rye', cursive;
      }
      .nav-item {
         place-items: center;
      }
      .nav-end {
         .search-input {
            span {
               left: .75rem;
            }
            input:focus {
               box-shadow: 2px 2px 4px rgba(52, 152, 219, 0.1), -2px -2px 4px rgba(101, 152, 185, 0.1);
            }
         }
         .ask-button {
            button {
               border: 2px solid #313742;
               &:focus {
                  outline: none;
                  border: 2px solid #E0E6F0;
               }
            }
         }
      }
   }
}
input {
   &::placeholder {
      color: rgba(154, 220, 250, .5);
   }
}
</style>

<style lang="scss" scoped>
// popover styles
.popover {
   // background: #3B414B;
   max-height: calc(100vh - 82px);
   width: max-content;
   min-width: 320px;
   min-height: 320px;
   // overflow: auto;
   .spaces-list {
      &__item {
         .notifier {
            top: -3px;
            left: -2px;
         }
      }
   }
}
</style>