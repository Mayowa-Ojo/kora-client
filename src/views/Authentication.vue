<template>
   <div class="q-doodle w-full min-h-screen">
      <div class="py-8 flex items-center justify-center">
         <div class="q-box pt-4 bg-kora-dark1 border border-kora-light1 border-opacity-25 rounded">
            <header class="q-box--header py-4">
               <h1 class="text-center text-6xl text-kora-red1">Kora</h1>
               <p class="text-center text-k-15 font-medium text-kora-light1">A place to share knowledge and better understand the world</p>
            </header>

            <div class="q-box--form my-6 flex">
               <div 
                  class="q-box--form__left w-1/2 px-6 border-r border-kora-light1 border-opacity-25"
                  v-if="!showSocialAuth"
               >
                  <div class="pb-2 border-b border-kora-light1 border-opacity-25">
                     <p class="text-k-15 font-medium text-kora-light1">Sign Up</p>
                  </div>
                  <div class="mt-4">
                     <label class="text-k-15 font-medium text-kora-light1">First Name</label>
                     <div class="form-input p-2 mt-1 rounded-sm border border-kora-light1 border-opacity-25 hover:border-kora-blue1">
                        <input class="appearance-none w-full bg-transparent text-k-15 font-normal text-kora-light1 focus:outline-none" type="text" placeholder="Your firstname">
                     </div>
                  </div>
                  <div class="mt-4">
                     <label class="text-k-15 font-medium text-kora-light1">Last Name</label>
                     <div class="form-input p-2 mt-1 rounded-sm border border-kora-light1 border-opacity-25 hover:border-kora-blue1">
                        <input class="appearance-none w-full bg-transparent text-k-15 font-normal text-kora-light1 focus:outline-none" type="text" placeholder="Your lastname">
                     </div>
                  </div>
                  <div class="mt-4">
                     <label class="text-k-15 font-medium text-kora-light1">Email</label>
                     <div class="form-input p-2 mt-1 rounded-sm border border-kora-light1 border-opacity-25 hover:border-kora-blue1">
                        <input class="appearance-none w-full bg-transparent text-k-15 font-normal text-kora-light1 focus:outline-none" type="email" placeholder="Your email">
                     </div>
                  </div>
                  <div class="mt-4">
                     <label class="text-k-15 font-medium text-kora-light1">Password</label>
                     <div class="form-input p-2 mt-1 rounded-sm border border-kora-light1 border-opacity-25 hover:border-kora-blue1">
                        <input class="appearance-none w-full bg-transparent text-k-15 font-normal text-kora-light1 focus:outline-none" type="text" placeholder="Your password">
                     </div>
                  </div>
                  <div class="mt-4">
                     <div class="flex items-center">
                        <p class="text-k-15 text-kora-light1 font-medium">I'm not a robot</p>
                        <Icon 
                           :class="'w-4 h-4 ml-2 fill-current text-kora-green1'" 
                           :viewbox="getIcons['checkCircle'].viewbox" 
                           :path="getIcons['checkCircle'].path" 
                        />
                     </div>
                     <button 
                        class="captcha w-full py-2 mt-2 rounded-full border-2 border-kora-blue1 text-k-18 text-kora-light1 font-bold uppercase relative z-10 overflow-hidden focus:outline-none"
                        :disabled="captcha.passed"
                        @mousedown="runVerification"
                        @mouseup="cancelVerification"
                        ref="captcha-btn"
                     >click & hold</button>
                  </div>
                  <div class="flex justify-between mt-4">
                     <button 
                        class="text-k-14 font-medium text-kora-light1 hover:underline"
                        @click="toggleSocialAuth"
                     >Cancel</button>
                     <button class="py-1 px-4 bg-kora-blue1 text-kora-gray1 text-k-14 font-medium rounded-full">Sign Up</button>
                  </div>
                  <div class="mt-4">
                     <p class="text-k-13 font-normal text-kora-light1">By continuing you indicate that you agree to Kora’s <span class="underline">Terms of Service</span> and <span class="underline">Privacy Policy</span>.</p>
                  </div>
               </div>

               <div
                  class="q-box--form__left w-1/2 px-6 border-r border-kora-light1 border-opacity-25"
                  v-else
               >
                  <div class="pb-2 border-b border-kora-light1 border-opacity-25">
                     <button class="w-full text-k-15 font-normal text-kora-light1 p-2 rounded-sm inline-flex items-center border border-kora-light1 border-opacity-25 hover:bg-kora-dark2">
                        <Icon 
                           :class="'ml-1 mr-3 w-5 h-5'"
                           :viewbox="getIcons['google'].viewbox" 
                           :path="getIcons['google'].path" 
                        />
                        Continue with <span class="font-bold ml-1">Google</span>
                     </button>
                     <button class="w-full mt-2 text-k-15 font-normal text-kora-light1 p-2 rounded-sm inline-flex items-center border border-kora-light1 border-opacity-25 hover:bg-kora-dark2">
                        <Icon 
                           :class="'ml-1 mr-3 w-5 h-5'"
                           :viewbox="getIcons['facebook'].viewbox" 
                           :path="getIcons['facebook'].path" 
                        />
                        Continue with <span class="font-bold ml-1">Facebook</span>
                     </button>
                     <button 
                        class="text-k-13 font-normal text-kora-light1 rounded-full w-full py-1 px-2 mt-2 hover:bg-kora-dark2"
                        @click="toggleSocialAuth"
                     >Sign Up with email</button>
                  </div>
                  <div class="mt-2">
                     <p class="text-k-13 font-normal text-kora-light1">By continuing you indicate that you agree to Kora’s <span class="underline">Terms of Service</span> and <span class="underline">Privacy Policy</span>.</p>
                  </div>
               </div>

               <div class="q-box--form__right w-1/2 px-6">
                  <div class="pb-2 border-b border-kora-light1 border-opacity-25">
                     <p class="text-k-15 font-medium text-kora-light1">Login</p>
                  </div>
                  <div class="mt-4">
                     <label class="text-k-15 font-medium text-kora-light1">Email</label>
                     <div class="form-input p-2 mt-1 rounded-sm border border-kora-light1 border-opacity-25 hover:border-kora-blue1">
                        <input class="appearance-none w-full bg-transparent text-k-15 font-normal text-kora-light1 focus:outline-none" type="email" placeholder="Your email">
                     </div>
                  </div>
                  <div class="mt-4">
                     <label class="text-k-15 font-medium text-kora-light1">Password</label>
                     <div class="form-input p-2 mt-1 rounded-sm border border-kora-light1 border-opacity-25 hover:border-kora-blue1">
                        <input class="appearance-none w-full bg-transparent text-k-15 font-normal text-kora-light1 focus:outline-none" type="password" placeholder="Your password">
                     </div>
                  </div>
                  <div class="flex justify-between mt-4">
                     <button class="text-k-13 font-normal text-kora-light1 hover:underline">Forgot password?</button>
                     <button class="py-1 px-4 bg-kora-blue1 text-kora-gray1 text-k-14 font-medium rounded-full">Login</button>
                  </div>
               </div>
            </div>

            <div class="q-box--footer">
               <div class="py-4 border-t border-kora-light1 border-opacity-25">
                  <p class="text-k-13 font-normal text-kora-blue1 text-center"><span class="text-kora-light1">New:</span> Arabic, Hebrew, Polish, Gujarati, Kannada, Malayalam <span class="text-kora-light1">and</span> Telugu</p>
               </div>
               <div class="flex items-center justify-center bg-kora-dark2 py-4 border-t border-kora-light1 border-opacity-25">
                  <span class="text-k-13 text-kora-light1 font-normal cursor-pointer hover:underline">About</span>
                  <span class="dot-separator"></span>
                  <span class="text-k-13 text-kora-light1 font-normal cursor-pointer hover:underline">Careers</span>
                  <span class="dot-separator"></span>
                  <span class="text-k-13 text-kora-light1 font-normal cursor-pointer hover:underline">Privacy</span>
                  <span class="dot-separator"></span>
                  <span class="text-k-13 text-kora-light1 font-normal cursor-pointer hover:underline">Terms</span>
                  <span class="dot-separator"></span>
                  <span class="text-k-13 text-kora-light1 font-normal cursor-pointer hover:underline">Contact</span>
                  <span class="dot-separator"></span>
                  <span class="text-k-13 text-kora-light1 font-normal cursor-pointer hover:underline">Languages</span>
                  <span class="dot-separator"></span>
                  <span class="text-k-13 text-kora-light1 font-normal cursor-pointer hover:underline">Your Ad Choices</span>
                  <span class="dot-separator"></span>
                  <span class="text-k-13 text-kora-light1 font-normal inline-flex items-center">
                     <Icon 
                        :class="'w-3 h-3 mr-1 fill-current text-kora-light1'" 
                        :viewbox="getIcons['copyright'].viewbox" 
                        :path="getIcons['copyright'].path" 
                     />
                     Kora Inc. 2020
                  </span>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import Icon from "../components/Icon"
import { iconsMixin } from "../utils/mixins";

export default {
   name: "Authentication",
   components: {
      Icon
   },
   mixins: [iconsMixin],
   data: () => ({
      showSocialAuth: true,
      captcha: {
         timerId: 0,
         delay: 5000,
         passed: false
      }
   }),
   methods: {
      toggleSocialAuth: function() {
         this.showSocialAuth = !this.showSocialAuth
      },
      runVerification: function() {
         this.$refs['captcha-btn'].classList.add("fill");

         this.captcha.timerId = setTimeout(function() {
            this.captcha.passed = true;
            this.$refs['captcha-btn'].disabled = true;
         }.bind(this), this.captcha.delay);
      },
      cancelVerification: function() {
         if(!this.captcha.passed) {
            this.$refs['captcha-btn'].classList.remove("fill");
            clearTimeout(this.captcha.timerId);
         }
      }
   }
}

</script>

<style lang="scss" scoped>
.q-doodle {
   background-image: url(https://res.cloudinary.com/devmayor/image/upload/v1604029382/media/bg-doodle.svg);
   background-position: center center;
   background-repeat: no-repeat;
   background-size: cover;
   .q-box {
      width: 44rem;
      header {
         h1 {
            font-family: 'Rye', cursive;
         }
      }
      &--form {
         .form-input {
            transition: box-shadow .2s ease-in;
            &:focus-within {
               border-color: #3498DB;
               box-shadow: 0px 0px 4px rgba(52, 152, 219, 0.4);
            }
         }
      }
      &--form__left {
         button.captcha {
            &::before {
               content: "";
               display: block;
               width: 0%;
               height: 100%;
               left: 0;
               top: 0;
               position: absolute;
               z-index: -1;
               background: #3498DB;
            }
            &.fill::before {
               animation: fill 5s linear;
               animation-fill-mode: forwards;
            }
         }
      }
   }
}
@keyframes fill {
   0% {
      width: 0%;
   }
   100% {
      width: 100%;
   }
}
</style>