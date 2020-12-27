<template>
   <div class="modal-dialog mx-auto bg-kora-dark1 relative">
      <div class="modal-dialog__header p-4 border-b border-kora-light1 border-opacity-10">
         <div class="flex justify-between">
            <span class="inline-block">
               <p class="text-kora-light1 text-k-21 font-bold">Edit Credentials</p>
               <p class="text-kora-light1 text-k-15 text-opacity-50">Credentials add credibility to your content</p>
            </span>
            <span 
               class="inline-flex items-center justify-center -mt-1 -mr-1 w-8 h-8 rounded-full cursor-pointer hover:bg-kora-dark2"
               @click="$emit('close-modal')"
            >
               <Icon 
                  :class="'fill-current text-kora-red1'" 
                  :viewbox="getIcons['x'].viewbox" 
                  :path="getIcons['x'].path" 
                  :width="getIcons['x'].width" 
                  :height="getIcons['x'].height" 
               />
            </span>
         </div>
      </div>

      <div class="modal-dialog__content py-4">
         <div class="accordion overflow-hidden" :class="{'active': accordionActive.profile}">
            <div 
               class="add-profile-accordion w-full bg-kora-dark2 mt-1 px-6 py-2 cursor-pointer"
               @click="toggleAccordion('profile')"
            >
               <div class="flex items-center">
                  <span>
                     <Icon 
                        :class="'fill-current text-kora-light1'" 
                        :viewbox="getIcons['plusAlt'].viewbox" 
                        :path="getIcons['plusAlt'].path" 
                        :width="getIcons['plusAlt'].width" 
                        :height="getIcons['plusAlt'].height" 
                        v-if="!accordionActive.profile"
                     />
                     <Icon 
                        :class="'fill-current text-kora-light1 w-4 h-4'" 
                        :viewbox="getIcons['userCrown'].viewbox" 
                        :path="getIcons['userCrown'].path" 
                        v-else
                     />
                  </span>
                  <p class="text-k-14 text-kora-light1 ml-3 flex-auto">Add profile credential</p>
                  <span 
                     class="ml-4 transition-transform duration-100 ease-in"
                     :class="{'transform -rotate-90': !accordionActive.profile}"
                  >
                     <Icon 
                        :class="'fill-current text-kora-light1'" 
                        :viewbox="getIcons['chevron'].viewbox" 
                        :path="getIcons['chevron'].path" 
                        :width="getIcons['chevron'].width" 
                        :height="getIcons['chevron'].height" 
                     />
                  </span>
               </div>
               <div 
                  class="input-wrapper mt-3 mb-1 ml-6 py-1 px-2 h-8 flex items-center rounded border border-kora-light1 border-opacity-25"
                  @click.prevent.stop="() => null"
               >
                  <input
                     class="w-full bg-transparent appearance-none focus:outline-none text-k-15 text-kora-light1"
                     type="text" name="profile"
                     placeholder="e.g Data Scientist | Chess Player | Dad"
                     v-model="credentials.profile"
                  />
               </div>
            </div>
         </div>

         <div class="accordion overflow-hidden" :class="{'active': accordionActive.employment}">
            <div 
               class="add-profile-accordion w-full bg-kora-dark2 mt-1 px-6 py-2 cursor-pointer"
               @click="toggleAccordion('employment')"
            >
               <div class="flex items-center">
                  <span>
                     <Icon 
                        :class="'fill-current text-kora-light1'" 
                        :viewbox="getIcons['plusAlt'].viewbox" 
                        :path="getIcons['plusAlt'].path" 
                        :width="getIcons['plusAlt'].width" 
                        :height="getIcons['plusAlt'].height" 
                        v-if="!accordionActive.employment"
                     />
                     <Icon 
                        :class="'fill-current text-kora-light1 w-4 h-4'" 
                        :viewbox="getIcons['briefcase'].viewbox" 
                        :path="getIcons['briefcase'].path" 
                        v-else
                     />
                  </span>
                  <p class="text-k-14 text-kora-light1 ml-3 flex-auto">Add employment credential</p>
                  <span 
                     class="ml-4 transition-transform duration-100 ease-in"
                     :class="{'transform -rotate-90': !accordionActive.employment}"
                  >
                     <Icon 
                        :class="'fill-current text-kora-light1'" 
                        :viewbox="getIcons['chevron'].viewbox" 
                        :path="getIcons['chevron'].path" 
                        :width="getIcons['chevron'].width" 
                        :height="getIcons['chevron'].height" 
                     />
                  </span>
               </div>
               <div 
                  class="input-wrapper mt-3 mb-1 ml-6 py-1 px-2 h-8 flex items-center rounded border border-kora-light1 border-opacity-25"
                  @click.prevent.stop="() => null"
               >
                  <input
                     class="w-full bg-transparent appearance-none focus:outline-none text-k-15 text-kora-light1"
                     type="text" name="profile"
                     placeholder="e.g Senior Software Engineer at Bloomberg"
                     v-model="credentials.employment"
                  />
               </div>
            </div>
         </div>
         
         <div class="accordion overflow-hidden" :class="{'active': accordionActive.education}">
            <div 
               class="add-profile-accordion w-full bg-kora-dark2 mt-1 px-6 py-2 cursor-pointer"
               @click="toggleAccordion('education')"
            >
               <div class="flex items-center">
                  <span>
                     <Icon 
                        :class="'fill-current text-kora-light1'" 
                        :viewbox="getIcons['plusAlt'].viewbox" 
                        :path="getIcons['plusAlt'].path" 
                        :width="getIcons['plusAlt'].width" 
                        :height="getIcons['plusAlt'].height" 
                        v-if="!accordionActive.education"
                     />
                     <Icon 
                        :class="'fill-current text-kora-light1 w-5 h-5'" 
                        :viewbox="getIcons['gradCap'].viewbox" 
                        :path="getIcons['gradCap'].path" 
                        v-else
                     />
                  </span>
                  <p class="text-k-14 text-kora-light1 ml-3 flex-auto">Add education credential</p>
                  <span 
                     class="ml-4 transition-transform duration-100 ease-in"
                     :class="{'transform -rotate-90': !accordionActive.education}"
                  >
                     <Icon 
                        :class="'fill-current text-kora-light1'" 
                        :viewbox="getIcons['chevron'].viewbox" 
                        :path="getIcons['chevron'].path" 
                        :width="getIcons['chevron'].width" 
                        :height="getIcons['chevron'].height" 
                     />
                  </span>
               </div>
               <div 
                  class="input-wrapper mt-3 mb-1 ml-6 py-1 px-2 h-8 flex items-center rounded border border-kora-light1 border-opacity-25"
                  @click.prevent.stop="() => null"
               >
                  <input
                     class="w-full bg-transparent appearance-none focus:outline-none text-k-15 text-kora-light1"
                     type="text" name="profile"
                     placeholder="e.g MSc. in Mechanical Engineering, Texas A&M"
                     v-model="credentials.education"
                  />
               </div>
            </div>
         </div>

         <div class="accordion overflow-hidden" :class="{'active': accordionActive.location}">
            <div 
               class="add-profile-accordion w-full bg-kora-dark2 mt-1 px-6 py-2 cursor-pointer"
               @click="toggleAccordion('location')"
            >
               <div class="flex items-center">
                  <span>
                     <Icon 
                        :class="'fill-current text-kora-light1'" 
                        :viewbox="getIcons['plusAlt'].viewbox" 
                        :path="getIcons['plusAlt'].path" 
                        :width="getIcons['plusAlt'].width" 
                        :height="getIcons['plusAlt'].height" 
                        v-if="!accordionActive.location"
                     />
                     <Icon 
                        :class="'fill-current text-kora-light1 w-4 h-4'" 
                        :viewbox="getIcons['location'].viewbox" 
                        :path="getIcons['location'].path" 
                        v-else
                     />
                  </span>
                  <p class="text-k-14 text-kora-light1 ml-3 flex-auto">Add location credential</p>
                  <span 
                     class="ml-4 transition-transform duration-100 ease-in"
                     :class="{'transform -rotate-90': !accordionActive.location}"
                  >
                     <Icon 
                        :class="'fill-current text-kora-light1'" 
                        :viewbox="getIcons['chevron'].viewbox" 
                        :path="getIcons['chevron'].path" 
                        :width="getIcons['chevron'].width" 
                        :height="getIcons['chevron'].height" 
                     />
                  </span>
               </div>
               <div 
                  class="input-wrapper mt-3 mb-1 ml-6 py-1 px-2 h-8 flex items-center rounded border border-kora-light1 border-opacity-25"
                  @click.prevent.stop="() => null"
               >
                  <input
                     class="w-full bg-transparent appearance-none focus:outline-none text-k-15 text-kora-light1"
                     type="text" name="profile"
                     placeholder="e.g Dublin, Ireland"
                     v-model="credentials.location"
                  />
               </div>
            </div>
         </div>

         <div class="accordion overflow-hidden" :class="{'active': accordionActive.language}">
            <div 
               class="add-profile-accordion w-full bg-kora-dark2 mt-1 px-6 py-2 cursor-pointer"
               @click="toggleAccordion('language')"
            >
               <div class="flex items-center">
                  <span>
                     <Icon 
                        :class="'fill-current text-kora-light1'" 
                        :viewbox="getIcons['plusAlt'].viewbox" 
                        :path="getIcons['plusAlt'].path" 
                        :width="getIcons['plusAlt'].width" 
                        :height="getIcons['plusAlt'].height" 
                        v-if="!accordionActive.language"
                     />
                     <Icon 
                        :class="'fill-current text-kora-light1 w-4 h-4'" 
                        :viewbox="getIcons['globe'].viewbox" 
                        :path="getIcons['globe'].path" 
                        v-else
                     />
                  </span>
                  <p class="text-k-14 text-kora-light1 ml-3 flex-auto">Add language credential</p>
                  <span 
                     class="ml-4 transition-transform duration-100 ease-in"
                     :class="{'transform -rotate-90': !accordionActive.language}"
                  >
                     <Icon 
                        :class="'fill-current text-kora-light1'" 
                        :viewbox="getIcons['chevron'].viewbox" 
                        :path="getIcons['chevron'].path" 
                        :width="getIcons['chevron'].width" 
                        :height="getIcons['chevron'].height" 
                     />
                  </span>
               </div>
               <div 
                  class="input-wrapper mt-3 mb-1 ml-6 py-1 px-2 h-8 flex items-center rounded border border-kora-light1 border-opacity-25"
                  @click.prevent.stop="() => null"
               >
                  <input
                     class="w-full bg-transparent appearance-none focus:outline-none text-k-15 text-kora-light1"
                     type="text" name="profile"
                     placeholder="e.g English, Norwegian"
                     v-model="credentials.language"
                  />
               </div>
            </div>
         </div>
      </div>

      <div class="modal-dialog__footer p-3 flex justify-end bg-kora-dark2 border-t border-kora-light1 border-opacity-10">
         <div>
            <button
               class="py-1 px-4 rounded text-kora-light1 text-k-14 font-medium hover:underline"
               @click="$emit('close-modal')"
            >
               Cancel
            </button>
            <button
               class="py-1 px-4 rounded text-kora-dark2 text-k-14 font-medium bg-kora-red1 hover:bg-opacity-75"
               @click="handleSubmit"
            >
               Done
            </button>
         </div>
      </div>
   </div>
</template>

<script>
import { mapState } from 'vuex';

import Icon from "./Icon";
import { iconsMixin } from "../utils/mixins";
import { ACTIONS } from "../constants/store";

export default {
   name: "AddCredentialsModal",
   components: {
      Icon
   },
   mixins: [iconsMixin],
   props: [],
   data: () => ({
      credentials: {
         education: "",
         profile: "",
         employment: "",
         language: "",
         location: "",
      },
      accordionActive: {
         education: false,
         profile: false,
         employment: false,
         language: false,
         location: false,
      }
   }),
   computed: {
      ...mapState({
         currentUser: (state) => (key) => state.user.currentUser?.[key],
         getCredentials: (state) => state.user.currentUser?.credentials,
      })
   },
   methods: {
      toggleAccordion: function(accordion) {
         if(!["profile", "employment", "education", "language", "location"].includes(accordion)) return;

         this.accordionActive[accordion] = !this.accordionActive[accordion];
      },
      handleSubmit: async function() {
         const payload = { credentials: { ...this.credentials }}

         await this.$store.dispatch(ACTIONS.UPDATE_USER_PROFILE, {
            id: this.currentUser('id'),
            data: payload
         });

         this.$store.dispatch(ACTIONS.TOGGLE_MODAL);
      }
   },
   mounted: function() {
      this.credentials = { ...this.credentials, ...this.getCredentials }
   }
}

</script>

<style lang="scss" scoped>
@use "src/assets/css/common";

.modal-dialog {
   width: 700px;
   max-width: 90vw;
   min-height: 400px;
   max-height: 70vh;
   border-radius: 10px;
   // margin-top: 32px;
   overflow-y: hidden;
   &__content {
      @include common.scrollbar(10px, 3px);
      height: 300px;
      overflow-y: auto;
   }

   input::placeholder {
      color: rgba(154, 220, 250, .25);
      font-size: 13px;
   }

   .input-wrapper {
      &:focus-within {
         border: 1px solid rgba(154, 220, 250, .75);
      }
   }
   .accordion {
      max-height: 40px;
      transition: max-height 1s ease-in;
      &.active {
         max-height: 500px;
      }
   }
}
</style>