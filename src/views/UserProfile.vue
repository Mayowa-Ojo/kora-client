<template>
   <div class="q-box flex">
      <main class="q-box--left">
         <div class="flex items-center">
            <div class="relative">
            <span class="user-avatar inline-flex items-center justify-center w-32 h-32 rounded-full overflow-hidden border-light-25">
               <img :src="currentUser('avatar')" alt="user avatar">
               <label
                  class="inline-flex items-center justify-center w-10 h-10 bg-kora-dark2 rounded-full absolute cursor-pointer"
                  for="avatar"
                  v-if="isCurrentUserAdmin"
               >
                  <Tooltip :offset="20" :placement="'right'" :text="'Upload'">
                     <template v-slot:trigger>
                        <span class="trigger">
                           <Icon 
                              :class="'fill-current w-5 h-5 text-kora-light1'" 
                              :viewbox="getIcons['camera'].viewbox" 
                              :path="getIcons['camera'].path" 
                           />
                        </span>
                     </template>
                  </Tooltip>
                  <input 
                     type="file" name="avatar" id="avatar" accept="image/*"
                     class="hidden" tabindex="-1"
                     @change="handleUploadAvatar"
                  >
               </label>
            </span>
            </div>
            <span class="inline-flex flex-col ml-4">
               <p class="group text-kora-light1 text-k-24 font-bold" v-if="!isEditing.name">
                  {{currentUser('firstname')}} {{currentUser('lastname')}}
                  <span 
                     class="text-k-13 text-kora-light1 text-opacity-50 font-normal cursor-pointer invisible group-hover:visible hover:underline"
                     v-if="isCurrentUserAdmin"
                     @click="toggleIsEditing('name')"
                  >Edit</span>
               </p>
               <span
                  class="flex items-end py-1 mb-2 border-b-2 border-kora-light1 border-opacity-10"
                  style="min-width: 100px; max-width: fit-content;"
                  v-else
               >
                  <input
                     class="w-full h-full block appearance-none bg-transparent focus:outline-none text-k-21 text-kora-light1"
                     type="text" name="name"
                     v-model="profile.name"
                     autocomplete="chrome-off"
                     @keydown.enter="handleUpdateProfile"
                  >
                  <span 
                     class="inline-block text-k-13 text-kora-light1 text-opacity-50 font-normal cursor-pointer hover:underline"
                     v-if="isCurrentUserAdmin"
                     @click="toggleIsEditing('name')"
                  >Cancel</span>
               </span>
               <p class="group text-kora-light1 text-k-15 font-normal" v-if="credentials('profile') !== ''">
                  {{credentials('profile')}}
                  <span 
                     class="text-k-13 text-kora-light1 text-opacity-50 font-normal cursor-pointer invisible group-hover:visible hover:underline"
                     v-if="isCurrentUserAdmin"
                     @click="toggleModal('AddCredentialsModal')"
                  >Edit</span>
               </p>
               <p 
                  class="text-k-13 text-kora-light1 text-opacity-50 cursor-pointer hover:underline"
                  v-else
               >Add profile credential</p>
            </span>
         </div>

         <div class="mt-2">
            <p class="group text-kora-light1 text-k-15 font-normal" v-if="!isEditing.about">
               {{currentUser('about')}}
               <span
                  class="text-k-13 text-kora-light1 text-opacity-50 block cursor-pointer invisible group-hover:visible hover:underline"
                  v-if="isCurrentUserAdmin"
                  @click="toggleIsEditing('about')"
               >Edit</span>
            </p>
            <span
               class="flex items-end py-2 mb-2 border-b-2 border-kora-light1 border-opacity-10"
               style="min-width: 100px;"
               v-else
            >
               <input
                  class="w-full h-full pr-4 block appearance-none bg-transparent focus:outline-none text-k-15 text-kora-light1"
                  type="text" name="about"
                  v-model="profile.about"
                  autocomplete="chrome-off"
                  @keydown.enter="handleUpdateProfile('about')"
               >
               <span 
                  class="inline-block text-k-13 text-kora-light1 text-opacity-50 font-normal cursor-pointer hover:underline"
                  v-if="isCurrentUserAdmin"
                  @click="toggleIsEditing('about')"
               >Cancel</span>
            </span>
            <p 
               class="text-k-13 text-kora-light1 text-opacity-50 cursor-pointer hover:underline"
               v-if="currentUser('about') == ''"
            >Write a description about yourself</p>
         </div>

         <div class="mt-1" v-if="isCurrentUserAdmin">
            <p class="text-k-13 text-kora-light1 text-opacity-75">{{getKeyLength('followers')}} Followers</p>
         </div>
         <div class="flex justify-between -ml-3" v-else>
            <div class="flex items-center">
               <span class="px-3 py-1 inline-flex items-center cursor-pointer rounded-full hover:bg-kora-dark3 hover:bg-opacity-25">
                  <Icon 
                     :class="'fill-current w-5 h-5 text-kora-blue1 mr-2 mb-1'" 
                     :viewbox="getIcons['following'].viewbox" 
                     :path="getIcons['following'].path" 
                  />
                  <span class="text-kora-blue1 text-k-14 font-medium">Following</span>
                  <span class="dot-separator"></span>
                  <span class="text-kora-blue1 text-k-14 font-medium">14.2k</span>
               </span>
               <span class="px-3 py-1 inline-flex items-center cursor-pointer rounded-full hover:bg-kora-dark3 hover:bg-opacity-25">
                  <Icon 
                     :class="'fill-current w-5 h-5 text-kora-light1 mr-2'" 
                     :viewbox="getIcons['alarm'].viewbox" 
                     :path="getIcons['alarm'].path" 
                  />
                  <span class="text-kora-light1 text-k-14 font-medium">Notify Me</span>
               </span>
               <span class="px-3 py-1 inline-flex items-center cursor-pointer rounded-full hover:bg-kora-dark3 hover:bg-opacity-25">
                  <Icon 
                     :class="'fill-current w-4 h-4 text-kora-light1 mr-2'" 
                     :viewbox="getIcons['question'].viewbox" 
                     :path="getIcons['question'].path" 
                  />
                  <span class="text-kora-light1 text-k-14 font-medium">Ask Question</span>
               </span>
            </div>
            <Popover :offset="8" :placement="'top'">
               <template v-slot:trigger="slotProps">
                  <span 
                     class="trigger w-8 h-8 inline-flex items-center justify-center rounded-full cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-25"
                     @click="slotProps.toggle($event)"
                  >
                     <Icon 
                        :class="'fill-current text-kora-light1'" 
                        :viewbox="getIcons['kebabMenu'].viewbox" 
                        :path="getIcons['kebabMenu'].path" 
                        :width="getIcons['kebabMenu'].width" 
                        :height="getIcons['kebabMenu'].height" 
                     />
                  </span>
               </template>

               <template v-slot:popover>
                  <div class="popover">
                     <ul>
                        <li class="text-kora-light1 text-k-13 font-normal py-2 px-4 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Mute {{currentUser('firstname')}} {{currentUser('lastname')}}</li>
                        <li class="text-kora-light1 text-k-13 font-normal py-2 px-4 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Block</li>
                        <li class="text-kora-light1 text-k-13 font-normal py-2 px-4 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Report</li>
                     </ul>
                  </div>
               </template>
            </Popover>
         </div>

         <div class="mt-3 border-t-2 border-kora-light1 border-opacity-10">
            <div class="border-b border-kora-light1 border-opacity-10 flex">
               <span 
                  class="inline-flex justify-center items-center py-4 px-2 text-kora-light1 text-k-13 font-medium cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-25"
                  :class="{'border-b-2 border-kora-red1 text-kora-red1': currentTab === 'profile'}"
                  @click="setCurrentTab('profile')"
               >Profile</span>
               <span 
                  class="inline-flex justify-center items-center py-4 px-2 text-kora-light1 text-k-13 font-medium cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-25"
                  :class="{'border-b-2 border-kora-red1 text-kora-red1': currentTab === 'answers'}"
                  @click="setCurrentTab('answers')"
               >{{getKeyLength('answers')}} Answers</span>
               <span 
                  class="inline-flex justify-center items-center py-4 px-2 text-kora-light1 text-k-13 font-medium cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-25"
                  :class="{'border-b-2 border-kora-red1 text-kora-red1': currentTab === 'questions'}"
                  @click="setCurrentTab('questions')"
               >{{getKeyLength('questions')}} Questions</span>
               <span 
                  class="inline-flex justify-center items-center py-4 px-2 text-kora-light1 text-k-13 font-medium cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-25"
                  :class="{'border-b-2 border-kora-red1 text-kora-red1': currentTab === 'shares'}"
                  @click="setCurrentTab('shares')"
               >{{getKeyLength('shares')}} Shares</span>
               <span 
                  class="inline-flex justify-center items-center py-4 px-2 text-kora-light1 text-k-13 font-medium cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-25"
                  :class="{'border-b-2 border-kora-red1 text-kora-red1': currentTab === 'posts'}"
                  @click="setCurrentTab('posts')"
               >{{getKeyLength('posts')}} Posts</span>
               <span 
                  class="inline-flex justify-center items-center py-4 px-2 text-kora-light1 text-k-13 font-medium cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-25"
                  :class="{'border-b-2 border-kora-red1 text-kora-red1': currentTab === 'followers'}"
                  @click="setCurrentTab('followers')"
               >{{getKeyLength('followers')}} Followers</span>
               <span 
                  class="inline-flex justify-center items-center py-4 px-2 text-kora-light1 text-k-13 font-medium cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-25"
                  :class="{'border-b-2 border-kora-red1 text-kora-red1': currentTab === 'following'}"
                  @click="setCurrentTab('following')"
               >{{getKeyLength('following')}} Following</span>

               <div class="flex-auto flex justify-end">
               <Popover :offset="8" :placement="'bottom'">
                  <template v-slot:trigger="slotProps">
                     <span 
                        class="trigger inline-flex justify-center items-center py-4 px-2 text-kora-light1 text-k-13 font-medium cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-25"
                        @click="slotProps.toggle($event)"
                     >
                        More
                        <Icon 
                           :class="'fill-current text-kora-light1 ml-2'" 
                           :viewbox="getIcons['chevron'].viewbox" 
                           :path="getIcons['chevron'].path" 
                           :width="getIcons['chevron'].width" 
                           :height="getIcons['chevron'].height" 
                        />
                     </span>
                  </template>

                  <template v-slot:popover>
                     <div class="popover">
                        <ul>
                           <li class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-10 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Edits</li>
                           <li class="text-kora-light1 text-k-13 font-normal py-2 pl-4 pr-10 cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50">Activity</li>
                        </ul>
                     </div>
                  </template>
               </Popover>
               </div>
            </div>
            <div class="border-b border-kora-light1 border-opacity-10 flex justify-between items-center py-2">
               <p class="text-kora-light1 text-k-15 font-medium capitalize">{{currentTab === 'profile' ? '' : filterProfileTabContent(currentTab).length}} {{currentTab}}</p>
               <Popover :offset="8" :placement="'left'" v-show="currentTab !== 'followers'">
                  <template v-slot:trigger="slotProps">
                     <span 
                        class="trigger text-kora-light1 text-k-13 font-medium inline-flex items-center py-2 px-3 rounded-full capitalize cursor-pointer hover:bg-kora-dark3 hover:bg-opacity-50"
                        @click="slotProps.toggle($event)"
                     >
                        {{currentTabFilter}}
                        <Icon 
                           :class="'fill-current text-kora-light1 ml-2'" 
                           :viewbox="getIcons['chevron'].viewbox" 
                           :path="getIcons['chevron'].path" 
                           :width="getIcons['chevron'].width" 
                           :height="getIcons['chevron'].height" 
                        />
                     </span>
                  </template>

                  <template v-slot:popover>
                     <div class="popover">
                        <ul class="" v-if="!['followers', 'following'].includes(currentTab)">
                           <li
                              class="px-4 py-2 text-kora-light1 text-k-13 font-normal flex items-center justify-between cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50"
                              @click="setCurrentTabFilter('most recent')"
                           >
                              Most Recent
                              <span class="ml-3 opacity-0" :class="{'opacity-100': currentTabFilter === 'most recent'}" >
                                 <Icon 
                                    :class="'fill-current text-kora-green1'" 
                                    :viewbox="getIcons['check'].viewbox" 
                                    :path="getIcons['check'].path" 
                                    :width="getIcons['check'].width" 
                                    :height="getIcons['check'].height" 
                                 />
                              </span>
                           </li>
                           <li
                              class="px-4 py-2 text-kora-light1 text-k-13 font-normal flex items-center justify-between cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50"
                              @click="setCurrentTabFilter('all-time views')"
                           >
                              All-Time Views
                              <span class="ml-3 opacity-0" :class="{'opacity-100': currentTabFilter === 'all-time views'}" >
                                 <Icon 
                                    :class="'fill-current text-kora-green1'" 
                                    :viewbox="getIcons['check'].viewbox" 
                                    :path="getIcons['check'].path" 
                                    :width="getIcons['check'].width" 
                                    :height="getIcons['check'].height" 
                                 />
                              </span>
                           </li>
                        </ul>
                        <ul class="" v-else>
                           <li
                              class="px-4 py-2 text-kora-light1 text-k-13 font-normal flex items-center justify-between cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50"
                              @click="setCurrentTabFilter('people')"
                           >
                              People
                              <span class="ml-3 opacity-0" :class="{'opacity-100': currentTabFilter === 'people'}" >
                                 <Icon 
                                    :class="'fill-current text-kora-green1'" 
                                    :viewbox="getIcons['check'].viewbox" 
                                    :path="getIcons['check'].path" 
                                    :width="getIcons['check'].width" 
                                    :height="getIcons['check'].height" 
                                 />
                              </span>
                           </li>
                           <li
                              class="px-4 py-2 text-kora-light1 text-k-13 font-normal flex items-center justify-between cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50"
                              @click="setCurrentTabFilter('spaces')"
                           >
                              Spaces
                              <span class="ml-3 opacity-0" :class="{'opacity-100': currentTabFilter === 'spaces'}" >
                                 <Icon 
                                    :class="'fill-current text-kora-green1'" 
                                    :viewbox="getIcons['check'].viewbox" 
                                    :path="getIcons['check'].path" 
                                    :width="getIcons['check'].width" 
                                    :height="getIcons['check'].height" 
                                 />
                              </span>
                           </li>
                           <li
                              class="px-4 py-2 text-kora-light1 text-k-13 font-normal flex items-center justify-between cursor-pointer hover:bg-kora-dark1 hover:bg-opacity-50"
                              @click="setCurrentTabFilter('topics')"
                           >
                              Topics
                              <span class="ml-3 opacity-0" :class="{'opacity-100': currentTabFilter === 'topics'}" >
                                 <Icon 
                                    :class="'fill-current text-kora-green1'" 
                                    :viewbox="getIcons['check'].viewbox" 
                                    :path="getIcons['check'].path" 
                                    :width="getIcons['check'].width" 
                                    :height="getIcons['check'].height" 
                                 />
                              </span>
                           </li>
                        </ul>
                     </div>
                  </template>
               </Popover>
            </div>

            <div
               class="p-4 flex flex-col items-center border-b border-kora-light1 border-opacity-10"
               v-if="filterProfileTabContent(currentTab) && 
                  filterProfileTabContent(currentTab).length < 1 && 
                  getKeyLength('knowledge') < 1 && 
                  getKeyLength('spaces') < 1
               "
            >
               <span class="inline-flex items-center justify-center w-10 h-10 rounded-full">
                  <Icon 
                     :class="'fill-current text-kora-light1 w-6 h-6'" 
                     :viewbox="getIcons['pencil'].viewbox" 
                     :path="getIcons['pencil'].path" 
                  />
               </span>
               <p class="text-k-15 font-bold text-kora-light1 mt-4 capitalize">no {{currentTab}} yet</p>
            </div>
            <div class="profile-feed" v-else>
               <div v-if="currentTab === 'followers' || currentTab === 'following'">
                  <!-- display component for followers and following -->
                  <div v-if="currentTabFilter === 'people'">
                     <UserSubscription
                        v-for="(user, idx) in filterProfileTabContent(currentTab)"
                        :key="idx"
                        :subscriptionType="currentTabFilter"
                        :user="user"
                     />
                  </div>
                  <div v-if="currentTabFilter === 'spaces'">
                     <UserSubscription
                        v-for="(space, idx) in filterProfileTabContent('spaces')"
                        :key="idx"
                        :subscriptionType="'spaces'"
                        :space="space"
                     />
                  </div>
                  <div v-if="currentTabFilter === 'topics'">
                     <UserSubscription
                        v-for="(topic, idx) in filterProfileTabContent('topics')"
                        :key="idx"
                        :subscriptionType="'topics'"
                        :topic="topic"
                     />
                  </div>
               </div>
               <div v-else>
                  <div v-for="(content, idx) in filterProfileTabContent(currentTab)" :key="idx">
                     <AnswerPreview 
                        v-if="content.postType === 'answer'"
                        :answer="content"
                        :options="{
                           borderBottom: true,
                           downvoteIcon: true,
                           followIcon: true,
                           title: true,
                           link: `/${content.slug}/answer/${content.author.username}`
                        }"
                     />
                     <QuestionPreview 
                        v-if="content.postType === 'question'"
                        :question="content"
                        :options="{ metaTop: false, fullWidth: true }"
                     />
                     <SharedPost 
                        v-if="content.comment || content.comment === ''"
                        :sharedPost="content"
                        :options="{
                           followIcon: true,
                           borderBottom: true,
                           downvoteIcon: true,
                           link: `/${content.post.slug}/answer/${content.post.author.username}`
                        }"
                     />
                  </div>
               </div>
            </div>
         </div>
      </main>

      <aside class="q-box--right">
         <div class="credentials mb-4">
            <div class="py-2 flex justify-between items-center border-bottom">
               <p class="text-kora-light1 text-k-15 font-medium">Credentials & Highlights</p>
               <span 
                  class="inline-flex w-8 h-8 items-center justify-center border-light-25 rounded-full cursor-pointer hover:bg-kora-dark3"
                  @click="toggleModal('AddCredentialsModal')"
                  v-if="isCurrentUserAdmin"
               >
                  <!-- NOTE: should create AddCredntialsModal -->
                  <Icon 
                     :class="'w-3 h-3 fill-current text-kora-light1'" 
                     :viewbox="getIcons['pencil'].viewbox" 
                     :path="getIcons['pencil'].path" 
                  />
               </span>
               <p class="text-kora-light1 text-k-13 font-normal text-opacity-50 cursor-pointer hover:underline" v-else>More</p>
            </div>
            <div class="mt-2">
               <div class="py-1 flex items-center" v-if="!isCurrentUserAdmin">
                  <span class="mr-2">
                     <Icon 
                        :class="'w-4 h-4 fill-current text-kora-light1'" 
                        :viewbox="getIcons['userFriends'].viewbox" 
                        :path="getIcons['userFriends'].path" 
                     />
                  </span>
                  <p class="text-kora-light1 text-k-13 font-normal text-opacity-100">
                     1 Follower You Know <span class="ml-1 text-kora-light1 text-opacity-50 cursor-pointer hover:underline">Gary Taylor</span>
                  </p>
               </div>
               <div class="py-1 flex items-center">
                  <span class="mr-2">
                     <Icon 
                        :class="'w-4 h-4 fill-current text-kora-light1'" 
                        :viewbox="getIcons['briefcase'].viewbox" 
                        :path="getIcons['briefcase'].path" 
                     />
                  </span>
                  <p 
                     class="text-kora-light1 text-k-13 font-normal text-opacity-100 cursor-pointer hover:underline"
                     v-if="credentials('employment') === '' && isCurrentUserAdmin"
                  >Add employment credential</p>
                  <p class="text-kora-light1 text-k-13 font-normal text-opacity-100">{{credentials('employment')}}</p>
               </div>
               <div class="py-1 flex items-center">
                  <span class="mr-2">
                     <Icon 
                        :class="'w-4 h-4 fill-current text-kora-light1'" 
                        :viewbox="getIcons['gradCap'].viewbox" 
                        :path="getIcons['gradCap'].path" 
                     />
                  </span>
                  <p 
                     class="text-kora-light1 text-k-13 font-normal text-opacity-100 cursor-pointer hover:underline"
                     v-if="credentials('education') === '' && isCurrentUserAdmin"
                  >Add education credential</p>
                  <p class="text-kora-light1 text-k-13 font-normal text-opacity-100">{{credentials('education')}}</p>
               </div>
               <div class="py-1 flex items-center">
                  <span class="mr-2">
                     <Icon 
                        :class="'w-4 h-4 fill-current text-kora-light1'" 
                        :viewbox="getIcons['location'].viewbox" 
                        :path="getIcons['location'].path" 
                     />
                  </span>
                  <p 
                     class="text-kora-light1 text-k-13 font-normal text-opacity-100 cursor-pointer hover:underline"
                     v-if="credentials('location') === '' && isCurrentUserAdmin"
                  >Add location credential</p>
                  <p class="text-kora-light1 text-k-13 font-normal text-opacity-100" v-if="credentials('location') !== ''">Lives in {{credentials('location')}}</p>
               </div>
               <div class="py-1 flex items-center">
                  <span class="mr-2">
                     <Icon 
                        :class="'w-4 h-4 fill-current text-kora-light1'" 
                        :viewbox="getIcons['globe'].viewbox" 
                        :path="getIcons['globe'].path" 
                     />
                  </span>
                  <p 
                     class="text-kora-light1 text-k-13 font-normal text-opacity-100 cursor-pointer hover:underline"
                     v-if="credentials('language') === '' && isCurrentUserAdmin"
                  >Add language credential</p>
                  <p class="text-kora-light1 text-k-13 font-normal text-opacity-100" v-if="credentials('language') !== ''">Knows {{credentials('language')}}</p>
               </div>
               <div class="py-1 flex items-center">
                  <span class="mr-2">
                     <Icon 
                        :class="'w-4 h-4 fill-current text-kora-light1'" 
                        :viewbox="getIcons['eye'].viewbox" 
                        :path="getIcons['eye'].path" 
                     />
                  </span>
                  <p class="text-kora-light1 text-k-13 font-normal text-opacity-100">{{currentUser('views')}} content views <span class="ml-1 text-kora-light1 text-opacity-50">(since 2018)</span></p>
               </div>
               <div class="py-1 flex items-center">
                  <span class="mr-2">
                     <Icon 
                        :class="'w-4 h-4 fill-current text-kora-light1'" 
                        :viewbox="getIcons['userGroup'].viewbox" 
                        :path="getIcons['userGroup'].path" 
                     />
                  </span>
                  <p class="text-kora-light1 text-k-13 font-normal text-opacity-100">Active in {{getKeyLength('spaces')}} Spaces</p>
               </div>
            </div>
         </div>

         <div class="py-3 border-bottom flex justify-between items-center">
            <p class="text-kora-light1 text-k-15 font-medium">Spaces</p>
            <span 
               class="inline-flex items-center justify-center w-8 h-8 border-light-25 rounded-full cursor-pointer hover:bg-kora-dark3"
               @click="toggleModal('AddSpaceModal')"
               v-if="isCurrentUserAdmin"
            >
               <Icon 
                  :class="'w-4 h-4 fill-current text-kora-light1'" 
                  :viewbox="getIcons['plusLight'].viewbox" 
                  :path="getIcons['plusLight'].path" 
               />
            </span>
         </div>

         <div class="pt-2 pb-4">
            <div class="flex flex-col items-center mt-8" v-if="getKeyLength('spaces') < 1">
               <span class="inline-block mb-4">
                  <Icon
                     :class="'fill-current text-kora-light1 w-12 h-12'"
                     :viewbox="getIcons['hourGlass'].viewbox"
                     :path="getIcons['hourGlass'].path"
                  />
               </span>
               <p class="text-k-13 text-kora-light1 mt-1" v-if="isCurrentUserAdmin">You haven't subscribed to any space yet</p>
               <p class="text-k-13 text-kora-light1 mt-1" v-else>{{currentUser('firstname')}} isn't subscribed to any space</p>
            </div>
            <div v-else>
            <ul>
               <li 
                  class="py-1 flex items-center"
                  v-for="(space, idx) in currentUser('spaces')"
                  :key="idx"
               >
                  <span class="w-8 h-8 mr-2 inline-block rounded-md overflow-hidden cursor-pointer hover:opacity-50">
                     <img class="image-cover" :src="space.icon" alt="space icon">
                  </span>
                  <div class="flex flex-col">
                     <p class="text-kora-light1 text-k-13 font-bold text-opacity-100 cursor-pointer hover:underline">{{space.name}}</p>
                     <span class="pt-1 inline-flex items-center text-kora-light1 text-k-13 font-normal text-opacity-50">
                        <span class="inline-flex items-center" v-if="space.admins.includes(currentUser('id'))">
                           Admin
                        <span class="dot-separator"></span>
                        </span>
                        152 items
                     </span>
                  </div>
               </li>
            </ul>
            <div class="py-1">
               <button class="px-4 py-1 rounded-full bg-kora-dark3 border-light-25 text-kora-light1 text-k-13 font-medium hover:bg-opacity-50" type="button">
                  View More 
                  <span class="inline-block ml-1">
                     <Icon 
                        :class="'w-2 h-2 fill-current text-kora-light1'" 
                        :viewbox="getIcons['chevron'].viewbox" 
                        :path="getIcons['chevron'].path" 
                     />
                  </span>
               </button>
            </div>
            </div>
         </div>

         <div class="py-3 border-bottom flex items-center justify-between">
            <p class="text-kora-light1 text-k-15 font-medium">Knows About</p>
            <span 
               class="inline-flex w-8 h-8 items-center justify-center border-light-25 rounded-full cursor-pointer hover:bg-kora-dark3"
               @click="toggleModal('AddTopicModal')"
               v-if="isCurrentUserAdmin"
            >
               <Icon 
                  :class="'w-3 h-3 fill-current text-kora-light1'" 
                  :viewbox="getIcons['pencil'].viewbox" 
                  :path="getIcons['pencil'].path" 
               />
            </span>
         </div>

         <div class="pt-2 pb-4">
            <div class="flex flex-col items-center mt-8" v-if="getKeyLength('knowledge') < 1">
               <span class="inline-block mb-4">
                  <Icon
                     :class="'fill-current text-kora-light1 w-12 h-12'"
                     :viewbox="getIcons['hourGlass'].viewbox"
                     :path="getIcons['hourGlass'].path"
                  />
               </span>
               <p class="text-k-13 text-kora-light1 mt-1" v-if="isCurrentUserAdmin">You haven't added any topics yet</p>
               <p class="text-k-13 text-kora-light1 mt-1" v-else>{{currentUser('firstname')}} hasn't added any topics yet</p>
            </div>
            <div v-else>
            <ul>
               <li
                  class="py-1 flex items-center"
                  v-for="(topic, idx) in currentUser('knowledge')"
                  :key="idx"
               >
                  <span class="w-8 h-8 mr-2 inline-block rounded overflow-hidden cursor-pointer">
                     <img class="image-cover" :src="topic.avatar" alt="topic icon">
                  </span>
                  <div class="flex flex-col">
                     <p class="text-kora-light1 text-k-13 font-bold text-opacity-100 cursor-pointer hover:underline">{{topic.name}}</p>
                     <span class="pt-1 inline-flex items-center text-kora-light1 text-k-13 font-normal text-opacity-50 cursor-pointer hover:underline">
                        2.6K answers
                     </span>
                  </div>
               </li>
            </ul>
            <div class="py-1">
               <button class="px-4 py-1 rounded-full bg-kora-dark3 border-light-25 text-kora-light1 text-k-13 font-medium hover:bg-opacity-50" type="button">
                  View More 
                  <span class="inline-block ml-1">
                     <Icon 
                        :class="'w-2 h-2 fill-current text-kora-light1'" 
                        :viewbox="getIcons['chevron'].viewbox" 
                        :path="getIcons['chevron'].path" 
                     />
                  </span>
               </button>
            </div>
            </div>
         </div>
      </aside>
   </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

import Icon from "../components/Icon";
import Popover from "../components/Popover";
import Tooltip from "../components/Tooltip";
import AnswerPreview from "../components/AnswerPreview";
import QuestionPreview from "../components/QuestionPreview";
import SharedPost from "../components/SharedPost";
import UserSubscription from "../components/UserSubscription";
import { iconsMixin, modalMixin } from "../utils/mixins";
import { ACTIONS, MUTATIONS } from '../constants/store';

export default {
   name: "UserProfile",
   components: {
      Icon,
      Popover,
      Tooltip,
      AnswerPreview,
      QuestionPreview,
      SharedPost,
      UserSubscription
   },
   mixins: [iconsMixin, modalMixin],
   data: () => ({
      currentTab: "profile",
      currentTabFilter: "most recent",
      profile: {
         name: "",
         about: ""
      },
      isEditing: {
         name: false,
         about: false
      }
   }),
   computed: {
      ...mapState({
         currentUser: (state) => (key) => state.user.currentUser?.[key],
         credentials: (state) => (key) => state.user.currentUser?.credentials?.[key],
         getKeyLength: (state) => (key) => state.user.currentUser?.[key].length
      }),
      ...mapGetters([
         "filterProfileTabContent",
         "isCurrentUserAdmin"
      ])
   },
   methods: {
      setCurrentTab: function(tab) {
         if(![
         "profile",
         "answers",
         "questions",
         "shares",
         "posts",
         "followers",
         "following"].includes(tab)) return;

         this.currentTab = tab;
      },
      setCurrentTabFilter: function(filter) {
         if(!["most recent", "all-time views", "people", "spaces", "topics"].includes(filter)) return;

         this.currentTabFilter = filter;
      },
      handleUploadAvatar: async function(e) {
         const [file] = e.target.files;
         const MAX_SIZE = 5242880;

         if(file.size > MAX_SIZE) {
            this.$store.commit(MUTATIONS.SET_TOAST_META, { 
               content: "Sorry, you can only upload files not larger than 5MB.",
               type: "error"
            });
            this.$store.commit(MUTATIONS.SET_TOAST_ACTIVE);
         }

         const uploadResponse = await this.$store.dispatch(ACTIONS.UPLOAD_IMAGE, {
            file
         });

         if(!uploadResponse) return;

         await this.$store.dispatch(ACTIONS.UPDATE_USER_PROFILE, {
            id: this.currentUser("id"),
            data: {
               avatar: uploadResponse.data.url
            }
         });
      },
      toggleIsEditing: function(field) {
         this.isEditing[field] = !this.isEditing[field];
      },
      handleUpdateProfile: async function(field) {
         this.toggleIsEditing(field);

         if(field === "about") {
            const payload = {
               id: this.currentUser("id"),
               data: {
                  about: this.profile.about
               }
            }

            await this.$store.dispatch(ACTIONS.UPDATE_USER_PROFILE, payload);
         }
      }
   },
   created: async function() {
      const { username } = this.$route.params;

      await this.$store.dispatch(ACTIONS.FETCH_CURRENT_USER, {
         username
      });
   },
   watch:  {
      "isEditing.name": function() {
         this.profile = {
            ...this.profile,
            name: `${this.currentUser('firstname')} ${this.currentUser('lastname')}`
         }
      },
      "isEditing.about": function() {
         this.profile = {
            ...this.profile,
            about: this.currentUser('about')
         }
      },
      currentTab: function(newVal) {
         if(!["followers", "following"].includes(newVal)) {
            this.currentTabFilter = "most recent";
            return;
         }

         this.currentTabFilter = "people";
      }
   }
}

</script>

<style lang="scss" scoped>
.q-box {
   &--left {
      width: 602px;
      .user-avatar {
         label {
            visibility: hidden;
         }
         &:hover {
            img {
               opacity: 50%;
            }
            label {
               visibility: visible;
            }
         }
      }
   }
   &--right {
      width: 314px;
      margin-left: 86px;
   }
}
</style>