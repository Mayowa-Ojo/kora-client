<template>
   <div id="app" :class="{'py-12': currentRoute != 'Authentication'}">
      <Navigation v-if="currentRoute != 'Authentication'"/>
      <main class="wrapper mx-auto" ref="q-container">
      <router-view />
      </main>
      <ModalWrapper />
   </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation.vue";
import ModalWrapper from "@/components/ModalWrapper.vue";

export default {
   name: "App",
   components: {
      Navigation,
      ModalWrapper
   },
   computed: {
      currentRoute: function() {
         return this.$route.name
      }
   },
   watch: {
      currentRoute: function(newVal) {
         if(newVal == 'Authentication') {
            this.$refs['q-container'].classList.remove('wrapper')
            return
         }

         this.$refs['q-container'].classList.add('wrapper')
      }
   }
}
</script>

<style lang="scss" scoped>
.wrapper{
   padding-top: 30px;
   width: 1002px;
}
</style>