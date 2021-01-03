<template>
   <div
      id="app"
      :class="{'py-12': currentRoute != 'Authentication'}"
      v-if="!isMobile"
   >
      <Navigation v-if="currentRoute != 'Authentication'"/>
      <main class="wrapper mx-auto" ref="q-container">
      <router-view />
      </main>
      <ModalWrapper />
   </div>
   <div class="flex flex-col items-center justify-center px-8 mt-20" v-else>
      <h1 class="text-k-21 text-kora-red1" style="font-family: 'Rye', cursive;">Kora</h1>
      <p class="text-k-13 text-kora-light1 font-medium mt-4">Apologies. This app is not yet optimized for mobile view as it is currently a work in progress.</p>
      <p class="text-k-13 text-kora-light1 font-normal mt-2">Kindly open this app on desktop for the best experience.</p>
   </div>
</template>

<script>
import { isMobile } from "mobile-device-detect";
// @ is an alias to /src
import Navigation from "@/components/Navigation.vue";
import ModalWrapper from "@/components/ModalWrapper.vue";
import { ACTIONS } from "./constants/store";

export default {
   name: "App",
   components: {
      Navigation,
      ModalWrapper
   },
   computed: {
      currentRoute: function() {
         return this.$route.name;
      },
      status: function() {
         return this.$store.state.status;
      },
      isMobile: () => isMobile
   },
   watch: {
      currentRoute: function(newVal) {
         if(newVal == 'Authentication') {
            this.$refs['q-container'].classList.remove('wrapper')
            return
         }

         this.$refs['q-container'].classList.add('wrapper')
      },
      status: function(newVal) {
         if(newVal === "loading") {
            this.$store.dispatch(ACTIONS.TOGGLE_MODAL, {
               component: "LoadingModal"
            });

            return;
         }
         this.$store.dispatch(ACTIONS.TOGGLE_MODAL);
      }
   },
   created: async function() {
      await this.$store.dispatch(ACTIONS.RE_AUTHENTICATE);
   }
}
</script>

<style lang="scss" scoped>
.wrapper{
   padding-top: 30px;
   width: 1002px;
}
</style>