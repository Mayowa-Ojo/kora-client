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
                  <Toast 
                     :isActive="signUp.isToastActive"
                     v-on:toggle="toggleToastActive('signUp', {})"
                     :options="getToastOptions('signUp')"
                  />
                  <validation-observer v-slot="{ failed, untouched, handleSubmit: validateBeforeSubmit }">
                  <form class="form" action autocomplete="off" @submit.prevent="validateBeforeSubmit(handleUserSignup)">
                     <validation-provider class="block relative mt-4" mode="eager" rules="required" v-slot="{ errors, failed, passed }">
                        <label class="text-k-15 font-medium text-kora-light1">First Name</label>
                        <div 
                           class="form-input p-2 mt-1 rounded-sm border border-opacity-25 hover:border-kora-blue1"
                           :class="[failed ? 'border-red-400' : !passed ? 'border-kora-light1' : 'border-green-500']"
                        >
                           <input 
                              class="appearance-none pl-1 w-full text-k-15 font-normal rounded-sm focus:outline-none"
                              :class="[failed ? 'bg-pink-200 text-kora-dark2' : !passed ? 'bg-transparent text-kora-light1' : 'bg-green-300 text-kora-dark2']"
                              v-model="signUp.firstname"
                              type="text" placeholder="Your firstname"
                           >
                        </div>
                        <FormValidation :validations="errors" />
                     </validation-provider>
                     <validation-provider class="block relative mt-4" mode="eager" rules="required" v-slot="{ errors, failed, passed }">
                        <label class="text-k-15 font-medium text-kora-light1">Last Name</label>
                        <div 
                           class="form-input p-2 mt-1 rounded-sm border border-opacity-25 hover:border-kora-blue1"
                           :class="[failed ? 'border-red-400' : !passed ? 'border-kora-light1' : 'border-green-500']"
                        >
                           <input 
                              class="appearance-none pl-1 w-full text-k-15 font-normal rounded-sm focus:outline-none"
                              :class="[failed ? 'bg-pink-200 text-kora-dark2' : !passed ? 'bg-transparent text-kora-light1' : 'bg-green-300 text-kora-dark2']"
                              v-model="signUp.lastname"
                              type="text" placeholder="Your lastname"
                           >
                        </div>
                        <FormValidation :validations="errors" />
                     </validation-provider>
                     <validation-provider class="block relative mt-4" mode="eager" rules="required|email" v-slot="{ errors, failed, passed }">
                        <label class="text-k-15 font-medium text-kora-light1">Email</label>
                        <div 
                           class="form-input p-2 mt-1 rounded-sm border border-opacity-25 hover:border-kora-blue1"
                           :class="[failed ? 'border-red-400' : !passed ? 'border-kora-light1' : 'border-green-500']"
                        >
                           <input 
                              class="appearance-none pl-1 w-full text-k-15 font-normal rounded-sm focus:outline-none"
                              :class="[failed ? 'bg-pink-200 text-kora-dark2' : !passed ? 'bg-transparent text-kora-light1' : 'bg-green-300 text-kora-dark2']"
                              v-model="signUp.email"
                              type="email" placeholder="Your email"
                           >
                        </div>
                        <FormValidation :validations="errors" />
                     </validation-provider>
                     <validation-provider class="block relative mt-4" mode="eager" rules="required|min:6" v-slot="{ errors, failed, passed }">
                        <label class="text-k-15 font-medium text-kora-light1 inline-flex items-center">Password
                           <Tooltip :offset="4" :placement="'top'" :text="'8 character minimum'">
                              <template v-slot:trigger>
                                 <span class="trigger inline-flex justify-center items-center w-8 h-8 rounded-full">
                                    <Icon 
                                       :class="'w-4 h-4 stroke-current text-kora-light1 opacity-75'"
                                       :viewbox="getIcons['info'].viewbox" 
                                       :path="getIcons['info'].path" 
                                    />
                                 </span>
                              </template>
                           </Tooltip>
                        </label>
                        <div 
                           class="form-input p-2 mt-1 rounded-sm border border-opacity-25 hover:border-kora-blue1"
                           :class="[failed ? 'border-red-400' : !passed ? 'border-kora-light1' : 'border-green-500']"
                        >
                           <input 
                              class="appearance-none pl-1 w-full text-k-15 font-normal bg-transparent text-kora-light1 rounded-sm focus:outline-none"
                              v-model="signUp.password"
                              type="password" placeholder="Your password"
                           >
                        </div>
                        <FormValidation :validations="errors" />
                     </validation-provider>
                     <div class="mt-4">
                        <div class="flex items-center">
                           <p class="text-k-15 text-kora-light1 font-medium">I'm not a robot</p>
                           <Icon 
                              class="w-4 h-4 ml-2 fill-current text-kora-green1 opacity-0"
                              :class="[captcha.passed ? 'captcha-check' : '']" 
                              :viewbox="getIcons['checkCircle'].viewbox" 
                              :path="getIcons['checkCircle'].path" 
                           />
                        </div>
                        <button 
                           class="captcha w-full py-2 mt-2 rounded-full border-2 border-kora-blue1 text-k-18 text-kora-gray1 font-bold uppercase relative z-10 overflow-hidden focus:outline-none"
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
                        <button 
                           class="py-1 px-4 bg-kora-blue1 bg-opacity-75 text-kora-gray1 text-k-14 font-medium rounded-full"
                           :class="{ 'cursor-default': failed || untouched, 'hover:bg-opacity-100': !failed && !untouched}"
                           :disabled="failed || untouched"
                        >Sign Up</button>
                     </div>
                  </form>
                  </validation-observer>
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
                     >Sign up with email</button>
                  </div>
                  <div class="mt-2">
                     <p class="text-k-13 font-normal text-kora-light1">By continuing you indicate that you agree to Kora’s <span class="underline cursor-pointer">Terms of Service</span> and <span class="underline cursor-pointer">Privacy Policy</span>.</p>
                  </div>
               </div>

               <div class="q-box--form__right w-1/2 px-6">
                  <div class="pb-2 border-b border-kora-light1 border-opacity-25">
                     <p class="text-k-15 font-medium text-kora-light1">Login</p>
                  </div>
                  <Toast 
                     :isActive="login.isToastActive"
                     v-on:toggle="toggleToastActive('login', {})"
                     :options="getToastOptions('login')"
                  />
                  <validation-observer v-slot="{ failed, untouched, handleSubmit: validateBeforeSubmit }">
                  <form class="form" action autocomplete="off" @submit.prevent="validateBeforeSubmit(handleUserLogin)">
                     <validation-provider class="block relative mt-4" mode="eager" rules="required|email" v-slot="{ errors, failed, passed }">
                        <label class="text-k-15 font-medium text-kora-light1">Email</label>
                        <div 
                           class="form-input p-2 mt-1 rounded-sm border border-opacity-25 hover:border-kora-blue1"
                           :class="[failed ? 'border-red-400' : !passed ? 'border-kora-light1' : 'border-green-500']"
                        >
                           <input 
                              class="appearance-none pl-1 w-full text-k-15 font-normal rounded-sm focus:outline-none"
                              :class="[failed ? 'bg-pink-200 text-kora-dark2' : !passed ? 'bg-transparent text-kora-light1' : 'bg-green-300 text-kora-dark2']"
                              v-model="login.email"
                              type="email" placeholder="Your email"
                           >
                        </div>
                        <FormValidation :validations="errors" />
                     </validation-provider>
                     <validation-provider class="block relative mt-4" mode="eager" rules="required" v-slot="{ errors, failed, passed }">
                        <label class="text-k-15 font-medium text-kora-light1">Password</label>
                        <div 
                           class="form-input p-2 mt-1 rounded-sm border border-opacity-25 hover:border-kora-blue1"
                           :class="[failed ? 'border-red-400' : !passed ? 'border-kora-light1' : 'border-green-500']"
                        >
                           <input 
                              class="appearance-none pl-1 w-full text-k-15 font-normal bg-transparent text-kora-light1 rounded-sm focus:outline-none"
                              v-model="login.password"
                              type="password" placeholder="Your password"
                           >
                        </div>
                        <FormValidation :validations="errors" />
                     </validation-provider>
                     <div class="flex justify-between mt-4">
                        <button class="text-k-13 font-normal text-kora-light1 hover:underline">Forgot password?</button>
                        <button 
                           class="py-1 px-4 bg-kora-blue1 bg-opacity-75 text-kora-gray1 text-k-14 font-medium rounded-full"
                           :class="{ 'cursor-default': failed || untouched, 'hover:bg-opacity-100': !failed && !untouched}"
                           :disabled="failed || untouched"
                        >Login</button>
                     </div>
                  </form>
                  </validation-observer>
               </div>
            </div>

            <div class="q-box--footer">
               <div class="py-4 border-t border-kora-light1 border-opacity-25">
                  <p class="text-k-13 font-normal text-kora-light1 text-center">New: 
                     <span class="text-kora-blue1 cursor-pointer hover:underline">Arabic</span>, 
                     <span class="text-kora-blue1 cursor-pointer hover:underline">Hebrew</span>, 
                     <span class="text-kora-blue1 cursor-pointer hover:underline">Polish</span>, 
                     <span class="text-kora-blue1 cursor-pointer hover:underline">Gujarati</span>, 
                     <span class="text-kora-blue1 cursor-pointer hover:underline">Kannada</span>, 
                     <span class="text-kora-blue1 cursor-pointer hover:underline">Malayalam</span> and 
                     <span class="text-kora-blue1 cursor-pointer hover:underline">Telugu</span>
                  </p>
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
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required, email, min } from "vee-validate/dist/rules";

import Icon from "../components/Icon";
import FormValidation from "../components/FormValidation";
import Tooltip from "../components/Tooltip";
import Toast from "../components/Toast";
import { ACTIONS } from '../constants/store';
import { iconsMixin } from "../utils/mixins";

extend("required", {
   ...required,
   message: "This field is required"
});
extend("email", {
   ...email,
   message: "Please enter a valid email"
});
extend("min", {
   ...min,
   message: "At least 8 characters"
});

export default {
   name: "Authentication",
   components: {
      Icon,
      ValidationProvider,
      ValidationObserver,
      FormValidation,
      Tooltip,
      Toast
   },
   mixins: [iconsMixin],
   data: () => ({
      signUp: {
         firstname: "",
         lastname: "",
         email: "",
         password: "",
         isToastActive: false,
         toastContent: "",
         toastType: ""
      },
      login: {
         email: "",
         password: "",
         isToastActive: false,
         toastContent: "",
         toastType: ""
      },
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

         this.signUp = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            isToastActive: false
         }
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
      },
      handleUserLogin: async function() {
         const payload = {
            email: this.login.email,
            password: this.login.password
         }
         await this.$store.dispatch(ACTIONS.USER_LOGIN, payload);

         if(this.$store.state.status === "error") {
            this.toggleToastActive("login", {
               content: "The email/password provided is invalid. Retry or Sign Up for Kora.",
               type: "error"
            });
            return;
         }

         this.$router.push("/");
      },
      handleUserSignup: async function() {
         const payload = {
            firstname: this.signUp.firstname,
            lastname: this.signUp.lastname,
            email: this.signUp.email,
            password: this.signUp.password
         }

         if(!this.captcha.passed) {
            this.toggleToastActive("signUp", {
               content: "Please verify that you're not a robot.",
               type: "error"
            });
            return;
         }

         await this.$store.dispatch(ACTIONS.USER_SIGNUP, payload);

         if(this.$store.state.status === "error") {
            this.toggleToastActive("signUp", {
               content: "The email provided is taken. Try again",
               type: "error"
            });
            return;
         }

         this.$router.push("/");
      },
      toggleToastActive: function(target, {content="", type=""}) {
         if(!["login", "signUp"].includes(target)) return;

         this[target].isToastActive = !this[target].isToastActive;

         if(content == "" && type == "") {
            return;
         }

         this[target].toastContent = content;
         this[target].toastType = type;
      }
   },
   computed: {
      getToastOptions: function() {
         return (target) => ({
            content: this[target].toastContent,
            type: this[target].toastType
         })
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
         .captcha-check {
            animation: check .5s ease-in-out;
            animation-fill-mode: forwards;
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
@keyframes check {
   0% {
      opacity: 0;
      transform: scale(0);
   }
   50% {
      transform: scale(1.5);
   }
   100% {
      opacity: 1;
      transform: scale(1);
   }
}
</style>