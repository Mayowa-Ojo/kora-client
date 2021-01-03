<template>
   <div class="w-full h-full mt-20 flex flex-col items-center justify-center">
      <svg class="w-20 h-20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:transparent;display:block;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
         <circle cx="50" cy="50" r="32" stroke-width="8" stroke="#9adcfa" stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round">
            <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
         </circle>
         <circle cx="50" cy="50" r="23" stroke-width="8" stroke="#eb5757" stroke-dasharray="36.12831551628262 36.12831551628262" stroke-dashoffset="36.12831551628262" fill="none" stroke-linecap="round">
            <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;-360 50 50"></animateTransform>
         </circle>
      </svg>
      <p class="text-2xl text-kora-light1 font-medium mt4">Redirecting...</p>
   </div>
</template>

<script>
import httpRequest from "../services/http";

export default {
   name: "LinkRedirect",
   created: async function() {
      const { shortCode } = this.$route.params;

      const response = await httpRequest(`/urls/${shortCode}`, {
         method: "GET"
      });

      const link = response.data.longUrl.split(process.env.VUE_APP_BASE_URL)[1];

      this.$router.history.push(link);
   }
}

</script>

<style lang="scss" scoped>

</style>