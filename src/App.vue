<template>
   <div id="app" class="pt-12">
      <Navigation />
      <main class="wrapper mx-auto">
      <router-view />
      </main>
   </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation.vue";

export default {
   name: "App",
   components: {
      Navigation
   }
}
</script>

<style lang="scss" scoped>
.wrapper {
   padding-top: 30px;
   width: 1002px;
}
</style>