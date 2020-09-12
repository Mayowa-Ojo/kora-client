<template>
   <svg :width="width" :height="height" :viewBox=viewbox ref="svg" fill="none"></svg>
</template>

<script>
export default {
   name: "Icon",
   props: ["viewbox", "path", "width", "height"],
   watch: {
      path: function(val) {
         this.injectPath(val)
      }
   },
   methods: {
      injectPath: function(path) {
         this.$refs['svg'].innerHTML = path;
      }
   },
   mounted: function() {
      this.injectPath(this.path);
   }
}
</script>