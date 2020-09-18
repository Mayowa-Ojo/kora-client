<template>
   <div v-on-clickaway="handleClickaway">
      <slot name="trigger" :toggle="toggle"></slot>

      <div id="popover" class="bg-kora-dark2 border border-kora-gray1 border-opacity-10" role="popover" ref="popover" 
         v-show="isOpen"
      >  
         <div id="popover-inner">
            <slot name="popover"></slot>
         </div>
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
   &-inner {
      overflow: auto;
      &::-webkit-scrollbar {
         width: 7px;
      }
      &::-webkit-scrollbar-thumb {
         background: #3498DB;
         border-radius: 20px;
         border: 1px solid #313742;
      }
      &::-webkit-scrollbar-track {
         background: #313742;
      }
   }
   &[data-popper-placement^='top'] > #arrow {
      bottom: -5px;
   }
   &[data-popper-placement^='top'] > #arrow::before {
      border-bottom: 1px solid rgba(224, 230, 240, .1);
      border-right: 1px solid rgba(224, 230, 240, .1);
   }
   &[data-popper-placement^='bottom'] > #arrow {
      top: -4px;
   }
   &[data-popper-placement^='bottom'] > #arrow::before {
      border-top: 1px solid rgba(224, 230, 240, .1);
      border-left: 1px solid rgba(224, 230, 240, .1);
   }
   &[data-popper-placement^='left'] > #arrow {
      right: -4px;
   }
   &[data-popper-placement^='left'] > #arrow::before {
      border-top: 1px solid rgba(224, 230, 240, .1);
      border-right: 1px solid rgba(224, 230, 240, .1);
   }
   &[data-popper-placement^='right'] > #arrow {
      left: -4px;
   }
   &[data-popper-placement^='right'] > #arrow::before {
      border-bottom: 1px solid rgba(224, 230, 240, .1);
      border-left: 1px solid rgba(224, 230, 240, .1);
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