import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';
import { APP_NAME } from "@/constants/common";
import LocalStorage from '../utils/localstorage';

Vue.use(VueRouter)

const ls = new LocalStorage();

const routes = [
   {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
         title: `${APP_NAME} - Home`
      }
   },
   {
      path: '/answer',
      name: 'Questions',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "questions" */ '../views/Questions.vue'),
      meta: {
         title: `${APP_NAME} - Write Answers`
      }
   },
   {
      path: '/notifications',
      name: 'Notifications',
      component: () => import(/* webpackChunkName: "notifications" */ '../views/Notifications.vue'),
      meta: {
         title: `${APP_NAME} - Notifications`
      }
   },
   {
      path: '/spaces',
      name: 'Spaces',
      component: () => import(/* webpackChunkName: "spaces" */ '../views/Spaces.vue'),
      meta: {
         title: `${APP_NAME} - Spaces`
      }
   },
   {
      path: '/space/:slug',
      name: 'Space',
      component: () => import(/* webpackChunkName: "space" */ '../views/Space.vue'),
      meta: {
         title: `${APP_NAME} - Space`
      }
   },
   {
      path: '/profile/:username',
      name: 'UserProfile',
      component: () => import(/* webpackChunkName: "user_profile" */ '../views/UserProfile.vue'),
      meta: {
         title: `${APP_NAME} - Mayowa Ojo`
      }
   },
   {
      path: '/question/:slug',
      name: 'Question',
      component: () => import(/* webpackChunkName: "question" */ '../views/Question.vue'),
      meta: {
         title: `${APP_NAME} - Question`
      }
   },
   {
      path: '/question/:space/:slug',
      // name: 'Question',
      component: () => import(/* webpackChunkName: "question" */ '../views/Question.vue'),
      meta: {
         title: `${APP_NAME} - Question`
      }
   },
   {
      path: '/:slug/answer/:username',
      name: 'Answer',
      component: () => import(/* webpackChunkName: "answer" */ '../views/Answer.vue'),
      meta: {
         title: `${APP_NAME} - Answer`
      }
   },
   {
      path: '/k',
      name: 'Authentication',
      component: () => import(/* webpackChunkName: "authentication" */ '../views/Authentication.vue'),
      meta: {
         title: `${APP_NAME} - Welcome`
      }
   },
   {
      path: '/bit/:shortCode',
      name: 'LinkRedirect',
      component: () => import(/* webpackChunkName: "link_redirect" */ '../views/LinkRedirect.vue'),
      meta: {
         title: `${APP_NAME} - Redirecting...`
      }
   },
   {
      path: '*',
      name: 'NotFound',
      component: NotFound,
      meta: {
         title: `${APP_NAME} - Error 404`
      }
   },
   
]

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
});

router.beforeEach((to, _from, next) => {
   const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

   if(nearestWithTitle) {
      document.title = nearestWithTitle.meta.title;
   }

   next();
});

router.beforeEach((to, _from, next) => {
   // NOTE: implement proper check for valid token with server
   const { token } = ls.get("user") || {};

   if(!token && to.name !== "Authentication") {
      next("/k");
      return;
   }

   if(token && to.name === "Authentication") {
      next("/");
      return;
   }

   next();
});

export default router
