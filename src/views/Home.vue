<template>
   <div class="q-box flex">
      <aside class="q-box--left w-48 flex flex-col">
         <div class="h-8 bg-kora-dark2 flex items-center p-2 mb-1 rounded cursor-pointer">
            <span class="inline-block p-1 mr-2 rounded bg-kora-red1">
               <svg width="10" height="10" viewBox="0 0 10 10" fill="none" >
                  <path d="M2.85895 8.57052C2.85895 9.36 2.21895 10 1.42946 10C0.639977 10 0 9.36 0 8.57052C0 7.78103 0.64 7.14103 1.42949 7.14103C2.21897 7.14103 2.85895 7.78105 2.85895 8.57052ZM6.77993 9.6252C6.59345 6.17431 3.82937 3.40675 0.374799 3.22007C0.170893 3.20905 0 3.37289 0 3.57708V4.65005C0 4.83788 0.144866 4.99541 0.332299 5.00759C2.82855 5.17018 4.82946 7.16612 4.99238 9.66768C5.00459 9.85511 5.16212 9.99998 5.34993 9.99998H6.4229C6.62712 10 6.79095 9.82911 6.77993 9.6252ZM9.99977 9.63163C9.8124 4.41244 5.61305 0.188513 0.36837 0.000231939C0.166808 -0.0070002 0 0.155835 0 0.357508V1.43045C0 1.62298 0.152567 1.77967 0.344933 1.78757C4.61232 1.96255 8.03749 5.38838 8.21245 9.65509C8.22033 9.84746 8.37702 10 8.56957 10H9.64251C9.84417 10 10.007 9.83319 9.99977 9.63163Z" fill="#313742"/>
               </svg>
            </span>
            <p class="text-k-13 text-kora-light1 font-medium">Feed</p>
         </div>
         <!-- spaces -->
         <div 
            class="hover:bg-kora-dark2 flex items-center p-2 mb-1 rounded cursor-pointer"
            v-for="(space, idx) in tmpdata['spaces']"
            :key="String(idx)+generateId()"
         >
            <span class="inline-block mr-2 w-5 h-5 rounded-full overflow-hidden">
               <img class="w-full h-full object-cover" :src="space['img']" alt="space avatar">
            </span>
            <p class="text-k-13 text-kora-light1 font-light">{{space['name']}}</p>
         </div>
         <!-- topics -->
         <div 
            class="hover:bg-kora-dark2 flex items-center p-2 mb-1 rounded cursor-pointer"
            v-for="(space, idx) in tmpdata['topics']"
            :key="String(idx)+generateId()"
         >
            <span class="inline-block mr-2 w-5 h-5 rounded overflow-hidden">
               <img class="w-full h-full object-cover" :src="space['img']" alt="space avatar">
            </span>
            <p class="text-k-13 text-kora-light1 font-light">{{space['name']}}</p>
         </div>
         <div class="mb-2 p-2 rounded flex items-center cursor-pointer hover:bg-kora-dark2">
            <span class="inline-block p-1 mr-2 bg-kora-dark2 rounded-sm">
               <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path d="M0.678558 4.5625C0.678558 4.45594 0.720889 4.35375 0.796239 4.2784C0.871588 4.20305 0.973784 4.16072 1.08034 4.16072H4.1607V1.08036C4.1607 0.973799 4.20303 0.871603 4.27838 0.796254C4.35373 0.720904 4.45593 0.678574 4.56249 0.678574H6.43749C6.54405 0.678574 6.64624 0.720904 6.72159 0.796254C6.79694 0.871603 6.83927 0.973799 6.83927 1.08036V4.16072H9.91963C10.0262 4.16072 10.1284 4.20305 10.2037 4.2784C10.2791 4.35375 10.3214 4.45594 10.3214 4.5625V6.4375C10.3214 6.54406 10.2791 6.64626 10.2037 6.72161C10.1284 6.79696 10.0262 6.83929 9.91963 6.83929H6.83927V9.91965C6.83927 10.0262 6.79694 10.1284 6.72159 10.2038C6.64624 10.2791 6.54405 10.3214 6.43749 10.3214H4.56249C4.45593 10.3214 4.35373 10.2791 4.27838 10.2038C4.20303 10.1284 4.1607 10.0262 4.1607 9.91965V6.83929H1.08034C0.973784 6.83929 0.871588 6.79696 0.796239 6.72161C0.720889 6.64626 0.678558 6.54406 0.678558 6.4375V4.5625Z" fill="#9ADCFA"/>
               </svg>
            </span>
            <span class="text-k-13 font-light text-kora-light1">Discover Spaces</span>
         </div>
         <hr class="my-4 border-t border-opacity-50 border-kora-light1">
         <div class="flex flex-wrap items-center">
            <p class="text-k-13 text-kora-light1 font-light hover:underline cursor-pointer">About</p>
            <span class="dot-separator"></span>
            <p class="text-k-13 text-kora-light1 font-light hover:underline cursor-pointer">Careers</p>
            <span class="dot-separator"></span>
            <p class="text-k-13 text-kora-light1 font-light hover:underline cursor-pointer">Terms</p>
            <span class="dot-separator"></span>
            <p class="text-k-13 text-kora-light1 font-light hover:underline cursor-pointer">Privacy</p>
            <span class="dot-separator"></span>
            <p class="text-k-13 text-kora-light1 font-light hover:underline cursor-pointer">Acceptable Use</p>
            <span class="dot-separator"></span>
            <p class="text-k-13 text-kora-light1 font-light hover:underline cursor-pointer">Businesses</p>
            <span class="dot-separator"></span>
            <p class="text-k-13 text-kora-light1 font-light hover:underline cursor-pointer">Your Ad Choices</p>
         </div>
      </aside>

      <div class="q-box--center">
         <div class="h-20 p-4 mb-2 bg-kora-dark2 rounded border-light-25 cursor-pointer">
            <div class="flex mb-2 items-center">
               <span class="inline-flex items-center justify-center w-5 h-5 mr-2 bg-kora-blue1 rounded-full hover:opacity-75">
                  <svg class="w-3 h-3" width="12" height="14" viewBox="0 0 12 14" fill="none">
                     <path d="M1.71429 6H2.07589C2.7375 7.51339 4.24286 8.57143 6 8.57143C7.75714 8.57143 9.2625 7.51339 9.92411 6H10.2857C10.5214 6 10.7143 5.80714 10.7143 5.57143V3C10.7143 2.76429 10.5214 2.57143 10.2857 2.57143H9.92411C9.2625 1.05804 7.75714 0 6 0C4.24286 0 2.7375 1.05804 2.07589 2.57143H1.71429C1.47857 2.57143 1.28571 2.76429 1.28571 3V5.57143C1.28571 5.80714 1.47857 6 1.71429 6ZM2.78571 3.64286C2.78571 3.05089 3.36161 2.57143 4.07143 2.57143H7.92857C8.63839 2.57143 9.21429 3.05089 9.21429 3.64286V4.28571C9.21429 5.70536 8.0625 6.85714 6.64286 6.85714H5.35714C3.9375 6.85714 2.78571 5.70536 2.78571 4.28571V3.64286ZM4.71429 5.57143L5.03571 4.60714L6 4.28571L5.03571 3.96429L4.71429 3L4.39286 3.96429L3.42857 4.28571L4.39286 4.60714L4.71429 5.57143ZM8.775 8.60893C7.97411 9.12589 7.02321 9.42857 6 9.42857C4.97679 9.42857 4.02589 9.12589 3.225 8.60893C1.41696 8.79911 0 10.3125 0 12.1714V12.4286C0 13.1384 0.575893 13.7143 1.28571 13.7143H3.42857V12C3.42857 11.5259 3.81161 11.1429 4.28571 11.1429H7.71429C8.18839 11.1429 8.57143 11.5259 8.57143 12V13.7143H10.7143C11.4241 13.7143 12 13.1384 12 12.4286V12.1714C12 10.3125 10.583 8.79911 8.775 8.60893ZM7.28571 12C7.05 12 6.85714 12.1929 6.85714 12.4286C6.85714 12.6643 7.05 12.8571 7.28571 12.8571C7.52143 12.8571 7.71429 12.6643 7.71429 12.4286C7.71429 12.1929 7.52143 12 7.28571 12ZM4.71429 12C4.47857 12 4.28571 12.1929 4.28571 12.4286V13.7143H5.14286V12.4286C5.14286 12.1929 4.95 12 4.71429 12Z" fill="#E0E6F0"/>
                  </svg>
               </span>
               <p class="text-kora-light1 text-k-13 font-light">Mayowa Ojo</p>
            </div>
            <p class="text-kora-light1 text-k-18 font-medium">What is your question or link?</p>
         </div>
         <!-- Post item -->
         <div 
            class="mb-2 px-4 pb-2 pt-4 bg-kora-dark2 rounded border-light-25"
            v-for="i in 4"
            :key="i"
         >
            <div class="mb-2 flex items-center justify-between">
               <div class="flex items-center">
                  <p class="text-kora-light1 text-k-13 font-light">Answer</p>
                  <span class="dot-separator"></span>
                  <p class="text-kora-light1 text-k-13 font-light">Recommended for you</p>
               </div>
               <span class="inline-block w-4 h-4 cursor-pointer">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                     <path d="M6.48737 5.00016L9.85367 1.63385C10.0484 1.43916 10.0484 1.12322 9.85367 0.928218L9.07147 0.146018C8.87678 -0.0486726 8.56084 -0.0486726 8.36583 0.146018L4.99984 3.51263L1.63354 0.146331C1.43885 -0.0483601 1.12291 -0.0483601 0.927905 0.146331L0.146018 0.928218C-0.0486726 1.12291 -0.0486726 1.43885 0.146018 1.63385L3.51232 5.00016L0.146018 8.36646C-0.0486726 8.56115 -0.0486726 8.87709 0.146018 9.0721L0.928218 9.8543C1.12291 10.049 1.43885 10.049 1.63385 9.8543L4.99984 6.48768L8.36615 9.85398C8.56084 10.0487 8.87678 10.0487 9.07178 9.85398L9.85398 9.07178C10.0487 8.87709 10.0487 8.56115 9.85398 8.36615L6.48737 5.00016Z" fill="#9ADCFA"/>
                  </svg>
               </span>
            </div>
            <div class="flex justify-between">
               <div class="flex">
                  <span class="inline-block w-10 h-10 mr-2 rounded-full overflow-hidden cursor-pointer">
                     <img class="hover:opacity-75" src="https://uifaces.co/our-content/donated/gPZwCbdS.jpg" alt="user avatar">
                  </span>
                  <div class="flex flex-col">
                     <div class="flex items-center">
                        <p class="text-kora-light1 text-k-13 font-medium cursor-pointer hover:underline">Gary Simmons</p>
                        <span class="dot-separator"></span>
                        <p class="text-kora-light1 text-k-13 font-light cursor-pointer hover:underline">July 20</p>
                     </div>
                     <div>
                        <p class="text-kora-light1 text-k-13 font-light">CTO at Relevant - Offshore software development company</p>
                     </div>
                  </div>
               </div>
               <span class="inline-flex w-6 h-6 bg-kora-blue1 rounded-full border-light-25 overflow-hidden items-center justify-center cursor-pointer">
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                     <path d="M2.4 4.8C2.71645 4.8 3.02579 4.70616 3.28891 4.53035C3.55203 4.35454 3.75711 4.10466 3.87821 3.81229C3.99931 3.51993 4.03099 3.19823 3.96926 2.88786C3.90752 2.57749 3.75514 2.29239 3.53137 2.06863C3.30761 1.84487 3.02251 1.69248 2.71214 1.63074C2.40177 1.56901 2.08007 1.60069 1.78771 1.72179C1.49534 1.84289 1.24546 2.04797 1.06965 2.31109C0.893838 2.57421 0.8 2.88355 0.8 3.2C0.800397 3.62423 0.969096 4.03096 1.26907 4.33093C1.56904 4.63091 1.97578 4.7996 2.4 4.8ZM8 5.6C8.55379 5.6 9.09514 5.43578 9.5556 5.12812C10.0161 4.82045 10.3749 4.38315 10.5869 3.87151C10.7988 3.35988 10.8542 2.7969 10.7462 2.25375C10.6382 1.7106 10.3715 1.21169 9.9799 0.820102C9.58831 0.428515 9.0894 0.161841 8.54625 0.0538025C8.00311 -0.0542361 7.44012 0.00121319 6.92849 0.213139C6.41685 0.425064 5.97955 0.783947 5.67189 1.2444C5.36422 1.70486 5.2 2.24621 5.2 2.8C5.1998 3.16776 5.27209 3.53195 5.41274 3.87175C5.55338 4.21155 5.75962 4.5203 6.01966 4.78034C6.2797 5.04038 6.58845 5.24662 6.92825 5.38727C7.26805 5.52791 7.63224 5.6002 8 5.6ZM8.8 8C8.8 7.5225 8.898 7.07075 9.05225 6.64575C8.71041 6.746 8.35623 6.79792 8 6.8C7.385 6.8 6.81 6.65 6.2875 6.4H6.08C5.31624 6.4002 4.58381 6.70369 4.04375 7.24375C3.50369 7.78381 3.2002 8.51624 3.2 9.28V10C3.2 10.3183 3.32643 10.6235 3.55147 10.8485C3.77652 11.0736 4.08174 11.2 4.4 11.2H10.425C9.4445 10.4703 8.8 9.31325 8.8 8ZM4.3275 6.065C4.02809 5.76678 3.62259 5.59954 3.2 5.6H1.6C1.17578 5.6004 0.76904 5.7691 0.469068 6.06907C0.169096 6.36904 0.000397152 6.77578 0 7.2V8C0 8.21217 0.0842855 8.41566 0.234315 8.56569C0.384344 8.71572 0.587827 8.8 0.8 8.8H2.4475C2.52367 8.22838 2.73362 7.6828 3.06028 7.20757C3.38694 6.73235 3.82111 6.34089 4.3275 6.065ZM12.8 4.8C12.1671 4.8 11.5484 4.98768 11.0222 5.3393C10.4959 5.69092 10.0858 6.19069 9.84359 6.77541C9.60139 7.36014 9.53801 8.00355 9.66149 8.62429C9.78496 9.24503 10.0897 9.81522 10.5373 10.2627C10.9848 10.7103 11.555 11.015 12.1757 11.1385C12.7965 11.262 13.4399 11.1986 14.0246 10.9564C14.6093 10.7142 15.1091 10.3041 15.4607 9.77783C15.8123 9.25159 16 8.6329 16 8C16 7.15131 15.6629 6.33738 15.0627 5.73726C14.4626 5.13714 13.6487 4.8 12.8 4.8ZM14.4 8.4C14.4 8.43534 14.386 8.46923 14.361 8.49422C14.336 8.51921 14.3021 8.53325 14.2667 8.53325H13.3333V9.46675C13.3333 9.50209 13.3192 9.53598 13.2942 9.56097C13.2692 9.58596 13.2353 9.6 13.2 9.6H12.4C12.3647 9.6 12.3308 9.58596 12.3058 9.56097C12.2808 9.53598 12.2668 9.50209 12.2668 9.46675V8.53325H11.3333C11.2979 8.53325 11.264 8.51921 11.239 8.49422C11.214 8.46923 11.2 8.43534 11.2 8.4V7.6C11.2 7.56466 11.214 7.53077 11.239 7.50578C11.264 7.48079 11.2979 7.46675 11.3333 7.46675H12.2668V6.53325C12.2668 6.49791 12.2808 6.46402 12.3058 6.43903C12.3308 6.41404 12.3647 6.4 12.4 6.4H13.2C13.2353 6.4 13.2692 6.41404 13.2942 6.43903C13.3192 6.46402 13.3333 6.49791 13.3333 6.53325V7.46675H14.2667C14.2842 7.46675 14.3016 7.4702 14.3177 7.47689C14.3339 7.48359 14.3486 7.49341 14.361 7.50578C14.3733 7.51815 14.3832 7.53284 14.3899 7.54901C14.3966 7.56518 14.4 7.5825 14.4 7.6V8.4Z" fill="#E0E6F0"/>
                  </svg>
               </span>
            </div>
            <!-- rich text content -->
            <div class="mb-2">
               <p class="mb-1 text-kora-light1 text-k-15 font-medium hover:underline cursor-pointer">How can I become a data scientist?</p>
               <p class="mb-4 text-kora-light1 text-k-14 font-light">
               After being dubbed "<i>Sexiest job of the 21st century</i> " by Harvard Business Review, data science has stirred the interest of the general public. Many people are intrigued by the job and wonder how they themselves can become data scientists. There are so many tools, courses, and applications for folks to learn data science, but let’s face it: for someone unfamiliar with... <span class="text-kora-blue1 cursor-pointer hover:underline">(more)</span>
               </p>
               <div>
                  <img class="max-w-full" src="https://qph.fs.quoracdn.net/main-qimg-50b32a277d6494110411bc018c55ac7b" alt="">
               </div>
            </div>
            <div class="flex justify-between">
               <div class="flex items-center">
                  <span class="inline-flex items-center py-1 px-2 -ml-2 mr-2 hover:bg-kora-dark1 rounded-full cursor-pointer text-kora-light1 text-k-13 font-light">
                     <svg class="fill-current text-kora-red1 w-4 h-4 inline-block mr-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-double-up" role="img" viewBox="0 0 320 512">
                        <path fill="currentColor" d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z" class=""></path>
                     </svg>
                     62
                  </span>
                  <span class="inline-flex items-center py-1 px-2 mr-2 hover:bg-kora-dark1 rounded-full cursor-pointer text-kora-light1 text-k-13 font-light">
                     <svg class="w-4 h-4 inline-block mr-1" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path d="M9.6027 13.3517C7.64997 14.1725 5.38656 13.7774 3.82186 12.3379C5.14361 10.9378 4.15964 8.60685 2.21326 8.60685C0.992858 8.60685 0 9.59971 0 10.8201C0 12.3219 1.474 13.3935 2.90404 12.9224C4.78147 14.8054 7.60125 15.3404 10.0126 14.3268C10.2818 14.2137 10.4084 13.9036 10.2952 13.6343C10.182 13.365 9.87202 13.2385 9.6027 13.3517ZM1.05774 10.8201C1.05774 10.183 1.5761 9.66459 2.21326 9.66459C2.85039 9.66459 3.36878 10.183 3.36878 10.8201C3.36878 11.4572 2.85042 11.9756 2.21326 11.9756C1.5761 11.9756 1.05774 11.4572 1.05774 10.8201Z" fill="#9ADCFA"/>
                        <path d="M1.71695 6.8024C1.99249 6.90263 2.29527 6.75963 2.39477 6.4862C2.92149 5.03822 4.06323 3.86849 5.48629 3.29823C5.83548 4.06235 6.60647 4.59489 7.5 4.59489C8.72037 4.59489 9.71326 3.60203 9.71326 2.38163C9.71326 1.16126 8.72041 0.168365 7.5 0.168365C6.32709 0.168365 5.36488 1.08563 5.29173 2.24039C3.48084 2.89705 2.05434 4.32785 1.40072 6.12459C1.30089 6.39911 1.44247 6.70255 1.71695 6.8024ZM7.5 1.22611C8.13713 1.22611 8.65552 1.74447 8.65552 2.38163C8.65552 3.01879 8.13716 3.53715 7.5 3.53715C6.86284 3.53715 6.34448 3.01879 6.34448 2.38163C6.34451 1.74447 6.86287 1.22611 7.5 1.22611Z" fill="#9ADCFA"/>
                        <path d="M13.9589 8.94394C13.9775 8.83906 13.9885 8.50144 13.9885 8.34284C13.9885 6.50931 13.2073 4.75289 11.845 3.52393C11.6282 3.32831 11.2938 3.34547 11.0981 3.56234C10.9024 3.77921 10.9196 4.11362 11.1365 4.3093C12.3295 5.38559 13.0044 6.95822 12.9239 8.61151C11.6383 8.53238 10.5735 9.55803 10.5735 10.8201C10.5735 12.0405 11.5663 13.0334 12.7867 13.0334C14.0071 13.0334 15 12.0405 15 10.8201C15 10.0299 14.5835 9.3356 13.9589 8.94394ZM12.7868 11.9756C12.1496 11.9756 11.6313 11.4572 11.6313 10.8201C11.6313 10.1829 12.1496 9.66456 12.7868 9.66456C13.4239 9.66456 13.9423 10.1829 13.9423 10.8201C13.9423 11.4572 13.4239 11.9756 12.7868 11.9756Z" fill="#9ADCFA"/>
                     </svg>
                     12
                  </span>
                  <span class="inline-flex items-center py-1 px-2 mr-2 hover:bg-kora-dark1 rounded-full cursor-pointer text-kora-light1 text-k-13 font-light">
                     <svg class="stroke-current text-kora-light1 w-5 h-5 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                     </svg>
                     7
                  </span>
               </div>
               <div class="flex items-center">
                  <span class="inline-flex items-center p-1 mr-2 rounded-full cursor-pointer bg-kora-red1">
                     <svg width="12" height="12" viewBox="0 0 12 12" fill="none" >
                        <path d="M5.35626 0.399536L3.89159 3.36925L0.614589 3.84701C0.0269265 3.93224 -0.208587 4.65672 0.21758 5.07168L2.58842 7.38195L2.02767 10.6455C1.92674 11.2354 2.54804 11.6773 3.06842 11.4014L6 9.86045L8.93158 11.4014C9.45196 11.675 10.0733 11.2354 9.97233 10.6455L9.41158 7.38195L11.7824 5.07168C12.2086 4.65672 11.9731 3.93224 11.3854 3.84701L8.10841 3.36925L6.64374 0.399536C6.38131 -0.129809 5.62093 -0.136538 5.35626 0.399536Z" fill="#E0E6F0"/>
                     </svg>
                  </span>
                  <span class="inline-flex items-center p-2 mr-2 rounded-full cursor-pointer hover:bg-kora-dark1">
                     <svg class="w-4 h-4 inline-block" width="14" height="16" viewBox="0 0 14 16" fill="none" >
                        <path d="M11 10C10.2 10 9.47187 10.3125 8.93437 10.825L5.8625 8.90312C6.04688 8.31562 6.04688 7.68125 5.8625 7.09687L8.93437 5.175C9.47187 5.6875 10.2 6 11 6C12.6562 6 14 4.65625 14 3C14 1.34375 12.6562 0 11 0C9.34375 0 8 1.34375 8 3C8 3.30625 8.04687 3.6125 8.1375 3.90312L5.06563 5.825C4.52813 5.3125 3.8 5 3 5C1.34375 5 0 6.34375 0 8C0 9.65625 1.34375 11 3 11C3.8 11 4.52813 10.6875 5.06563 10.175L8.1375 12.0969C8.04687 12.3906 8 12.6937 8 13C8 14.6562 9.34375 16 11 16C12.6562 16 14 14.6562 14 13C14 11.3437 12.6562 10 11 10ZM11 1.5C11.8281 1.5 12.5 2.17187 12.5 3C12.5 3.82812 11.8281 4.5 11 4.5C10.1719 4.5 9.5 3.82812 9.5 3C9.5 2.17187 10.1719 1.5 11 1.5ZM3 9.5C2.17188 9.5 1.5 8.82812 1.5 8C1.5 7.17187 2.17188 6.5 3 6.5C3.82812 6.5 4.5 7.17187 4.5 8C4.5 8.82812 3.82812 9.5 3 9.5ZM11 14.5C10.1719 14.5 9.5 13.8281 9.5 13C9.5 12.1719 10.1719 11.5 11 11.5C11.8281 11.5 12.5 12.1719 12.5 13C12.5 13.8281 11.8281 14.5 11 14.5Z" fill="#9ADCFA"/>
                     </svg>
                  </span>
                  <span class="inline-flex items-center py-1 px-2 -mr-2 rounded-full cursor-pointer hover:bg-kora-dark1">
                     <svg class="w-5 h-5 inline-block" width="16" height="6" viewBox="0 0 16 6" fill="none" >
                        <path d="M8 0.562927C6.71613 0.562927 5.67742 1.65283 5.67742 2.99997C5.67742 4.34712 6.71613 5.43702 8 5.43702C9.28387 5.43702 10.3226 4.34712 10.3226 2.99997C10.3226 1.65283 9.28387 0.562927 8 0.562927ZM8 4.35389C7.2871 4.35389 6.70968 3.74801 6.70968 2.99997C6.70968 2.25193 7.2871 1.64606 8 1.64606C8.7129 1.64606 9.29032 2.25193 9.29032 2.99997C9.29032 3.74801 8.7129 4.35389 8 4.35389ZM13.6774 0.562927C12.3935 0.562927 11.3548 1.65283 11.3548 2.99997C11.3548 4.34712 12.3935 5.43702 13.6774 5.43702C14.9613 5.43702 16 4.34712 16 2.99997C16 1.65283 14.9613 0.562927 13.6774 0.562927ZM13.6774 4.35389C12.9645 4.35389 12.3871 3.74801 12.3871 2.99997C12.3871 2.25193 12.9645 1.64606 13.6774 1.64606C14.3903 1.64606 14.9677 2.25193 14.9677 2.99997C14.9677 3.74801 14.3903 4.35389 13.6774 4.35389ZM2.32258 0.562927C1.03871 0.562927 0 1.65283 0 2.99997C0 4.34712 1.03871 5.43702 2.32258 5.43702C3.60645 5.43702 4.64516 4.34712 4.64516 2.99997C4.64516 1.65283 3.60645 0.562927 2.32258 0.562927ZM2.32258 4.35389C1.60968 4.35389 1.03226 3.74801 1.03226 2.99997C1.03226 2.25193 1.60968 1.64606 2.32258 1.64606C3.03548 1.64606 3.6129 2.25193 3.6129 2.99997C3.6129 3.74801 3.03548 4.35389 2.32258 4.35389Z" fill="#9ADCFA"/>
                     </svg>
                  </span>
               </div>
            </div>
         </div>
      </div>

      <aside class="q-box--right w-48 ml-16">
         <div class="w-full bg-kora-dark2 border-light-25 rounded">
            <p class="text-kora-light1 text-k-15 font-medium text-center px-4 py-2 bg-kora-dark1 cursor-default">Improve Your Feed</p>
            <ul class="w-full">
               <li class="w-full px-4 py-2 text-k-13 text-kora-light1 font-light border-b border-kora-light1 border-opacity-10 inline-flex items-center cursor-default hover:bg-kora-dark3">
                  <span class="w-6 h-6 inline-block mr-2">
                     <svg class="fill-current inline-block text-kora-green1 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                     </svg>
                  </span>
                  <span>Visit your feed</span>
               </li>
               <li class="w-full px-4 py-2 text-k-13 text-kora-light1 font-light border-b border-kora-light1 border-opacity-10 inline-flex items-center cursor-default hover:bg-kora-dark3">
                  <span class="w-6 h-6 inline-block mr-2">
                     <svg class="fill-current inline-block text-kora-green1 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                     </svg>
                  </span>
                  <span>Follow 5 more spaces</span>
               </li>
               <li class="w-full px-4 py-2 text-k-13 text-kora-light1 font-light border-b border-kora-light1 border-opacity-10 inline-flex items-center cursor-default hover:bg-kora-dark3">
                  <span class="w-6 h-6 inline-block mr-2">
                     <svg class="fill-current inline-block text-kora-green1 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                     </svg>
                  </span>
                  <span>Follow 20 more spaces</span>
               </li>
               <li class="w-full px-4 py-2 text-k-13 text-kora-light1 font-light border-b border-kora-light1 border-opacity-10 inline-flex items-center cursor-default hover:bg-kora-dark3">
                  <span class="w-6 h-6 inline-block mr-2">
                     <svg class="fill-current inline-block text-kora-green1 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                     </svg>
                  </span>
                  <span>Upvote 5 more good answers</span>
               </li>
               <li class="w-full px-4 py-2 text-k-13 text-kora-light1 font-light border-b border-kora-light1 border-opacity-10 inline-flex items-center cursor-default hover:bg-kora-dark3">
                  <span class="w-6 h-6 inline-block mr-2">
                     <svg class="inline-block ml-1 -mb-1" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M12.5 0H1.5C0.671875 0 0 0.671875 0 1.5V12.5C0 13.3281 0.671875 14 1.5 14H12.5C13.3281 14 14 13.3281 14 12.5V1.5C14 0.671875 13.3281 0 12.5 0ZM13 12.5C13 12.775 12.775 13 12.5 13H1.5C1.225 13 1 12.775 1 12.5V1.5C1 1.225 1.225 1 1.5 1H12.5C12.775 1 13 1.225 13 1.5V12.5Z" fill="#9ADCFA"/>
                     </svg>
                  </span>
                  <span>Ask a question</span>
               </li>
               <li class="w-full px-4 py-2 text-k-13 text-kora-light1 font-light border-b border-kora-light1 border-opacity-10 inline-flex items-center cursor-default hover:bg-kora-dark3">
                  <span class="w-6 h-6 inline-block mr-2">
                     <svg class="inline-block ml-1 -mb-1" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M12.5 0H1.5C0.671875 0 0 0.671875 0 1.5V12.5C0 13.3281 0.671875 14 1.5 14H12.5C13.3281 14 14 13.3281 14 12.5V1.5C14 0.671875 13.3281 0 12.5 0ZM13 12.5C13 12.775 12.775 13 12.5 13H1.5C1.225 13 1 12.775 1 12.5V1.5C1 1.225 1.225 1 1.5 1H12.5C12.775 1 13 1.225 13 1.5V12.5Z" fill="#9ADCFA"/>
                     </svg>
                  </span>
                  <span>Add 3 credentials</span>
               </li>
               <li class="w-full px-4 py-2 text-k-13 text-kora-light1 font-light border-b border-kora-light1 border-opacity-10 inline-flex items-center cursor-default hover:bg-kora-dark3">
                  <span class="w-6 h-6 inline-block mr-2">
                     <svg class="inline-block ml-1 -mb-1" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M12.5 0H1.5C0.671875 0 0 0.671875 0 1.5V12.5C0 13.3281 0.671875 14 1.5 14H12.5C13.3281 14 14 13.3281 14 12.5V1.5C14 0.671875 13.3281 0 12.5 0ZM13 12.5C13 12.775 12.775 13 12.5 13H1.5C1.225 13 1 12.775 1 12.5V1.5C1 1.225 1.225 1 1.5 1H12.5C12.775 1 13 1.225 13 1.5V12.5Z" fill="#9ADCFA"/>
                     </svg>
                  </span>
                  <span>Answer a question</span>
               </li>
            </ul>
         </div>
      </aside>
   </div>
</template>

<script>
import { spaces, topics } from "../tmp/db";
import { generateUniqueId } from "../utils/common";

export default {
   name: "Home",
   computed: {
      tmpdata: function() {
         return {
            spaces,
            topics
         }
      }
   },
   methods: {
      generateId: () => generateUniqueId(),
   }
};
</script>

<style lang="scss" scoped>
.q-box {
   &--center {
      margin-left: 30px;
      width: 602px;
   }
}
</style>
