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
         const trigger = this.getTrigger;
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
      toggle: function() {
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
   computed: {
       getTrigger: function() {
         return this.$vnode.elm.querySelector(".trigger")
      }
   },
   mounted: function() {
      this.create();
   }
}
</script>

<style lang="scss" scoped>
$bg: #313742;
#popover {
   border-radius: 4px;
   &[data-popper-placement^='top'] > #arrow {
      bottom: -4px;
   }
   &[data-popper-placement^='bottom'] > #arrow {
      top: -4px;
   }
   &[data-popper-placement^='left'] > #arrow {
      left: -4px;
   }
   &[data-popper-placement^='right'] > #arrow {
      right: -4px;
   }
}
#arrow {
   &, &::before {
      position: absolute;
      width: 8px;
      height: 8px;
      z-index: -1;
   }
   &::before {
      content: '';
      transform: rotate(45deg);
      background: $bg;
   }
}
</style>