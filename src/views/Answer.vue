<template>
   <section class="q-box mx-auto">
      <div class="q-box--inner mx-auto">
      <div class="post border-light-25 bg-kora-dark2 rounded-sm">
         <div class="post-content pt-4 px-4 pb-1">
            <header>
               <p class="text-k-21 font-bold text-kora-light1 mt-2">{{answer('title')}}</p>
               <div class="mt-4 flex items-center">
                  <span class="inline-block w-10 h-10 rounded-full overflow-hidden cursor-pointer hover:opacity-50">
                     <img class="image-cover" :src="author('avatar')" alt="profile image">
                  </span>
                  <div class="flex flex-col ml-2">
                     <p class="text-kora-light1 text-k-13 inline-flex items-center">
                        <span class="font-bold cursor-pointer hover:underline">{{author('firstname')}} {{author('lastname')}}</span>
                        <span class="dot-separator"></span>
                        <span class="font-normal">November 21, 2016</span>
                     </p>
                     <p class="text-k-13 font-normal text-kora-light1 mt-1">Worked as a professional software developer for 26 years.</p>
                  </div>
               </div>
            </header>
            <div class="rich-content mt-3" v-html="answer('content')">
               <!-- rich text is rendered here -->
            </div>
            <div class="flex items-center mt-1">
               <span class="text-k-13 font-normal text-kora-light1 text-opacity-50">{{answer('views')}} views</span>
               <span class="dot-separator"></span>
               <span class="text-k-13 font-normal text-kora-light1 text-opacity-50 cursor-pointer hover:underline">View Upvoters</span>
               <span class="dot-separator"></span>
               <span class="text-k-13 font-normal text-kora-light1 text-opacity-50 cursor-pointer hover:underline">View Sharers</span>
            </div>
            <div class="action-bar sticky bottom-0 bg-kora-dark2 mt-1 pb-2 border-t border-kora-light1 border-opacity-10">
               <ActionBar :target="'post'" :options="{ downvoteIcon: true }"/>
            </div>
         </div>

         <div class="post-comments">
            <div class="px-4 py-2 bg-kora-dark1">
               <CommentInput :postId="answer('id')"/>
            </div>
            <div>
               <Comment />
               <Comment />
            </div>
         </div>

         <div class="px-4 pb-4 mt-1">
            <button class="px-4 py-1 rounded-full w-full bg-kora-dark3 text-k-13 font-medium text-kora-light1 flex items-center justify-center border-light-25 hover:bg-opacity-50">
               View More Comments
               <Icon 
                  :class="'w-3 h-3 ml-2 fill-current text-kora-light1'" 
                  :viewbox="getIcons['chevron'].viewbox" 
                  :path="getIcons['chevron'].path" 
               />
            </button>
         </div>

         <div class="py-2">
            <div class="px-6 h-10 flex items-center justify-center cursor-pointer hover:bg-kora-dark3">
               <p class="text-k-14 font-normal text-kora-light1">View <span class="font-bold">65</span> Other Answers to this Question</p>
               <Icon 
                  :class="'w-3 h-3 ml-2 fill-current text-kora-light1 transform -rotate-90'" 
                  :viewbox="getIcons['chevron'].viewbox" 
                  :path="getIcons['chevron'].path" 
               />
            </div>
         </div>
      </div>

      <div class="about mt-2 rounded-sm border-light-25 bg-kora-dark2">
         <header class="px-4 py-2 border-b border-kora-light1 border-opacity-10">
            <p class="text-k-15 font-medium text-kora-light1">About the Author</p>
         </header>
         <div class="px-4 pt-4 pb-1">
            <div class="flex">
               <span class="inline-block w-10 h-10 rounded-full overflow-hidden cursor-pointer hover:opacity-50">
                  <img :src="author('avatar')" alt="profile image">
               </span>
               <div class="ml-2 flex flex-col">
                  <p class="text-k-18 font-bold text-kora-light1 cursor-pointer hover:underline">{{author('firstname')}} {{author('lastname')}}</p>
                  <p class="text-k-15 font-normal text-kora-light1">Programmer, Dad, Gentleman</p>
               </div>
            </div>
            <div class="mt-1">
               <div class="flex items-center mt-2">
                  <Icon 
                     :class="'w-4 h-4 fill-current text-kora-light1'" 
                     :viewbox="getIcons['briefcase'].viewbox" 
                     :path="getIcons['briefcase'].path" 
                  />
                  <p class="text-k-15 font-normal text-kora-light1 ml-2">SVP of Technology Exploration DNB Bank ASA</p>
                  <span class="text-k-15 font-normal text-kora-light1 text-opacity-50 ml-1">2018-present</span>
               </div>
               <div class="flex items-center mt-2">
                  <Icon 
                     :class="'w-4 h-4 fill-current text-kora-light1'" 
                     :viewbox="getIcons['gradCap'].viewbox" 
                     :path="getIcons['gradCap'].path" 
                  />
                  <p class="text-k-15 font-normal text-kora-light1 ml-2">Studied at Massachusetts Institute of Technology</p>
               </div>
               <div class="flex items-center mt-2">
                  <Icon 
                     :class="'w-4 h-4 fill-current text-kora-light1'" 
                     :viewbox="getIcons['location'].viewbox" 
                     :path="getIcons['location'].path" 
                  />
                  <p class="text-k-15 font-normal text-kora-light1 ml-2">Lives in Tønsberg, Norway</p>
                  <span class="text-k-15 font-normal text-kora-light1 text-opacity-50 ml-1">2008-present</span>
               </div>
               <div class="flex items-center mt-2">
                  <Icon 
                     :class="'w-4 h-4 fill-current text-kora-light1'" 
                     :viewbox="getIcons['eye'].viewbox" 
                     :path="getIcons['eye'].path" 
                  />
                  <p class="text-k-15 font-normal text-kora-light1 ml-2">31.5K content views</p>
                  <span class="text-k-15 font-normal text-kora-light1 text-opacity-50 ml-1">8.5K this month</span>
               </div>
            </div>
            <div class="mt-2">
               <ActionBar :target="'profile'" />
            </div>
         </div>
      </div>

      <div class="related-spaces mt-2 rounded-sm border-light-25 bg-kora-dark2">
         <SuggestedSpaces :heading="'related spaces'" />
      </div>

      <div class="more-answers mt-2 rounded-sm border-light-25 bg-kora-dark2">
         <header class="px-4 py-2 flex items-center justify-between border-b border-kora-light1 border-opacity-10">
            <p class="text-k-15 font-medium text-kora-light1">More Answers from {{author('firstname')}} {{author('lastname')}}</p>
            <span class="text-k-13 font-normal text-kora-light1 text-opacity-50 inline-flex items-center cursor-pointer hover:underline">
               View More
               <Icon 
                  :class="'w-2 h-2 ml-1 fill-current text-kora-light1 transform -rotate-90'" 
                  :viewbox="getIcons['chevron'].viewbox" 
                  :path="getIcons['chevron'].path" 
               />
            </span>
         </header>
         <div class="px-4 py-1">
            <p class="text-k-15 font-normal text-kora-blue1 cursor-pointer hover:underline">Is JavaScript an "unsafe" programming language? Is it less safe than any other server-side languages such as PHP, Java, C++, etc?</p>
            <span class="text-k-13 font-normal text-kora-light1 text-opacity-50 mt-1">1,309 Views</span>
         </div>
         <div class="px-4 py-1">
            <p class="text-k-15 font-normal text-kora-blue1 cursor-pointer hover:underline">I have an app idea and an UI being designed. I want to learn Java to program it for Android. How long would it take to learn to program something as Uber? How should I begin? I have no experience in programming.</p>
            <span class="text-k-13 font-normal text-kora-light1 text-opacity-50 mt-1">1,774 Views</span>
         </div>
         <div class="px-4 py-1">
            <p class="text-k-15 font-normal text-kora-blue1 cursor-pointer hover:underline">Are programmers and software engineering overrated?</p>
            <span class="text-k-13 font-normal text-kora-light1 text-opacity-50 mt-1">4,786 Views</span>
         </div>
         <div class="px-4 py-1">
            <p class="text-k-15 font-normal text-kora-blue1 cursor-pointer hover:underline">How do I start game development in C/C++ so that I can get hired in a gaming company?</p>
            <span class="text-k-13 font-normal text-kora-light1 text-opacity-50 mt-1">8,293 Views</span>
         </div>
      </div>
      </div>
   </section>
</template>

<script>
import { mapState } from 'vuex';

import Icon from "../components/Icon";
import ActionBar from "../components/ActionBar";
import Comment from "../components/Comment";
import CommentInput from "../components/CommentInput";
import SuggestedSpaces from "../components/SuggestedSpaces";
import { iconsMixin } from "../utils/mixins";
import { ACTIONS } from "../constants/store";

export default {
   name: "Answer",
   components: {
      Icon,
      ActionBar,
      CommentInput,
      Comment,
      SuggestedSpaces
   },
   mixins: [iconsMixin],
   computed: {
      ...mapState({
         answer: (state) => (key) => state.post.answer?.[key],
         author: (state) => (key) => state.post.answer?.author?.[key]
      })
   },
   created: async function() {
      const { slug, username } = this.$route.params;

      await this.$store.dispatch(ACTIONS.FETCH_ANSWER, {
         slug,
         username
      });

      await this.$store.dispatch(ACTIONS.FETCH_POST_COMMENTS, {
         slug
      });
   }
}

</script>

<style lang="scss" scoped>
.q-box {
   max-width: 1002px;
   margin-top: -30px;
   &--inner {
      max-width: 666px;
   }

   .rich-content {
      color: #9ADCFA;
      font-size: 15px;
   }
}
</style>