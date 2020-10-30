import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';
import { APP_NAME } from "@/constants/common";

Vue.use(VueRouter)

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
      name: 'Answer',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "answer" */ '../views/Answer.vue'),
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
      path: '/k/:spacename',
      name: 'Space',
      component: () => import(/* webpackChunkName: "spaces" */ '../views/Space.vue'),
      meta: {
         title: `${APP_NAME} - Space`
      }
   },
   {
      path: '/profile/:username',
      name: 'UserProfile',
      component: () => import(/* webpackChunkName: "spaces" */ '../views/UserProfile.vue'),
      meta: {
         title: `${APP_NAME} - Mayowa Ojo`
      }
   },
   {
      path: '/auth',
      name: 'Authentication',
      component: () => import(/* webpackChunkName: "spaces" */ '../views/Authentication.vue'),
      meta: {
         title: `${APP_NAME} - Welcome`
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
})

export default router
