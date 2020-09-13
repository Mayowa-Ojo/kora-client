<template>
   <div v-on-clickaway="handleClickaway">
      <slot name="trigger"></slot>

      <div id="tooltip" class="bg-kora-gray1 py-1 px-2" role="tooltip" ref="tooltip">
         <p class="text-kora-dark2 text-k-13 font-normal">{{ getText }}</p>
         <div id="arrow" data-popper-arrow></div>
      </div>
   </div>
</template>

<script>
import { createPopper } from "@popperjs/core";
import { mixin as clickaway} from "vue-clickaway";

const showEvents = ["mouseenter", "focus"];
const hideEvents = ["mouseleave", "blur"];

export default {
   name: "Tooltip",
   props: ["offset", "placement", "text"],
   data: () => ({
      popper: null,
   }),
   mixins: [clickaway],
   methods: {
      create: function() {
         const trigger = this.getTrigger;
         const tooltip = this.$refs["tooltip"];

         this.popper = createPopper(trigger, tooltip, {
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
         this.$refs['tooltip'].setAttribute("data-show", "");
         this.create();
      },
      hide: function() {
         this.$refs['tooltip'].removeAttribute("data-show");
         this.destroy();
      },
      handleClickaway: function() {
         this.hide();
      }
   },
   computed: {
      getText: function() {
         return this.text;
      },
      getTrigger: function() {
         return this.$vnode.elm.querySelector(".trigger")
      }
   },
   mounted: function() {
      this.create()

      showEvents.forEach(event => {
         this.getTrigger.addEventListener(event, this.show);
      });

      hideEvents.forEach(event => {
         this.getTrigger.addEventListener(event, this.hide);
      });
   }
}
</script>

<style lang="scss" scoped>
$bg: #E0E6F0;
#tooltip {
   border-radius: 4px;
   display: none;
   &[data-popper-placement^='top'] > #arrow {
      bottom: -4px;
   }

   &[data-popper-placement^='bottom'] > #arrow {
      top: -4px;
   }

   &[data-popper-placement^='left'] > #arrow {
      right: -4px;
   }

   &[data-popper-placement^='right'] > #arrow {
      left: -4px;
   }
   &[data-show] {
      display: block;
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