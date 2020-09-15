import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter)

const routes = [
   {
      path: '/',
      name: 'Home',
      component: Home
   },
   {
      path: '/answer',
      name: 'Answer',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "answer" */ '../views/Answer.vue')
   },
   {
      path: '/notifications',
      name: 'Notifications',
      component: () => import(/* webpackChunkName: "notifications" */ '../views/Notifications.vue')
   },
   {
      path: '/spaces',
      name: 'Spaces',
      component: () => import(/* webpackChunkName: "spaces" */ '../views/Spaces.vue')
   },
   {
      path: '/profile/:username',
      name: 'UserProfile',
      component: () => import(/* webpackChunkName: "spaces" */ '../views/UserProfile.vue')
   },
   {
      path: '*',
      name: 'NotFound',
      component: NotFound
   },
]

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
})

export default router
