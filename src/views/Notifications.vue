<template>
   <div>
      <p class="mb-10 text text-center text-kora-light1 text-k-18">Notifications Page</p>
      <Popover :slotRefs="$refs" :className="'popover'" :offset="10">
         <template v-slot:trigger>
            <button class="px-4 py-1 bg-kora-blue1 text-kora-gray1 text-k-13 rounded-full" ref="trigger">Button</button>
         </template>
         <template v-slot:popover>
            <ul class="py-1">
               <li class="text-k-13 text-kora-light1 font-normal px-3 py-2 hover:bg-kora-dark2 cursor-pointer">Mt. Myoboku</li>
               <li class="text-k-13 text-kora-light1 font-normal px-3 py-2 hover:bg-kora-dark2 cursor-pointer">The Programming Hub</li>
               <li class="text-k-13 text-kora-light1 font-normal px-3 py-2 hover:bg-kora-dark2 cursor-pointer">Algorithms</li>
               <li class="text-k-13 text-kora-light1 font-normal px-3 py-2 hover:bg-kora-dark2 cursor-pointer">Arts & Design</li>
               <li class="text-k-13 text-kora-light1 font-normal px-3 py-2 hover:bg-kora-dark2 cursor-pointer">UX Design</li>
            </ul>
         </template>
      </Popover>
   </div>
</template>

<script>
import Popover from "../components/Popover";

export default {
   name: "Notifications",
   components: {
      Popover
   }
}
</script>

<style lang="scss">
.popover {
   background: #3B414B;
}
</style>

<style lang="scss" scoped>
.text {
   text-decoration: line-through;
}
</style>