<template>
   <div class="px-8">
      <div class="dialog mt-8 p-12 mx-auto">
         <div class="message mx-12 flex flex-col">
            <h1 class="text-kora-light1 text-k-18 font-bold mb-1">Page Not Found</h1>
            <p class="text-kora-light1 text-k-13 font-normal">We searched everywhere but couldn't find the page you were looking for.</p>
            <div class="flex items-center pt-5">
               <span 
                  class="text-kora-blue1 text-k-13 font-normal cursor-pointer hover:underline"
                  @click="$router.go(-1)"
                  >
                  Go Back
               </span>
               <span class="dot-separator"></span>
               <router-link :to="{ path: '/' }">
               <span class="text-kora-blue1 text-k-13 font-normal cursor-pointer hover:underline">Kora Home</span>
               </router-link>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "NotFound"
}

</script>

<style lang="scss" scoped>
.dialog {
   width: 400px;
   .message {
      width: 300px;
   }
}
</style>