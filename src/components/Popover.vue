<template>
   <div v-on-clickaway="handleClickaway">
      <slot name="trigger" :toggle="toggle"></slot>

      <div id="popover" class="bg-kora-dark2 border border-kora-gray1 border-opacity-10" role="popover" ref="popover" v-show="isOpen">
         <slot name="popover"></slot>
         <div id="arrow" data-popper-arrow></div>
      </div>
   </div>
</template>

<script>
import { createPopper } from "@popperjs/core";
import { mixin as clickaway} from "vue-clickaway";

// const showEvents = ["focus"];
// const hideEvents = ["blur"];

export default {
   name: "Popover",
   props: ["slotRefs", "offset", "placement"],
   data: () => ({
      popper: null,
      isOpen: false
   }),
   mixins: [clickaway],
   methods: {
      create: function() {
         const trigger = this.slotRefs.trigger;
         const popover = this.$refs["popover"];

         this.popper = createPopper(trigger, popover, {
            placement: this.placement || "bottom",
            modifiers: [
               {
                  name: "offset",
                  options: {
                     offset: [0, this.offset || 8]
                  }
               }
            ]
         });
      },
      destroy: function() {
         if(this.popper) {
            this.popper.destroy();
            this.popper = null;
         }
      },
      show: function() {
         this.$refs['popover'].setAttribute("data-show", "");
         this.create();
      },
      hide: function() {
         this.$refs['popover'].removeAttribute("data-show");
         this.destroy();
      },
      toggle: function(e) {
         console.log(e.stopPropagation);
         if(this.isOpen) {
            this.isOpen = !this.isOpen;
            this.destroy();
         } else {
            this.isOpen = !this.isOpen;
            this.create();
         }
      },
      handleClickaway: function() {
         this.isOpen = false;
         this.destroy();
      }
   },
   mounted: function() {
      this.create()

      // showEvents.forEach(event => {
      //    this.slotRefs.trigger.addEventListener(event, this.toggle);
      // });

      // hideEvents.forEach(event => {
      //    this.slotRefs.trigger.addEventListener(event, this.toggle);
      // });
   }
}
</script>

<style lang="scss" scoped>
$bg: #313742;
#popover {
   border-radius: 4px;
   // visibility: hidden;
   // display: none;
}
#arrow,
#arrow::before {
   position: absolute;
   width: 8px;
   height: 8px;
   z-index: -1;
}
#arrow::before {
   content: '';
   transform: rotate(45deg);
   background: $bg;
}
   #popover[data-popper-placement^='top'] > #arrow {
   bottom: -4px;
}

   #popover[data-popper-placement^='bottom'] > #arrow {
   top: -4px;
}

   #popover[data-popper-placement^='left'] > #arrow {
   right: -4px;
}

   #popover[data-popper-placement^='right'] > #arrow {
   left: -4px;
}
// #popover[data-show] {
   // visibility: visible;
   // display: block;
// }
</style>