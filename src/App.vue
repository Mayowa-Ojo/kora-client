<template>
   <div id="app" class="py-12">
      <Navigation />
      <main class="wrapper mx-auto">
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
   }
}
</script>

<style lang="scss" scoped>
.wrapper {
   padding-top: 30px;
   width: 1002px;
}
</style>